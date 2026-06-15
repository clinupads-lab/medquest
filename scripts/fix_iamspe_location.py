"""
Corrige o bug onde as questoes IAMSPE estao dentro de MEDICAL_AVATARS.
Move as questoes para o array QUESTIONS principal.
"""
import re, sys, io
from pathlib import Path

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

ROOT = Path(__file__).parent.parent
APP_TSX = ROOT / 'src' / 'App.tsx'

content = APP_TSX.read_text(encoding='utf-8')

# ── 1. Localizar o bloco IAMSPE dentro de MEDICAL_AVATARS ────────────────────
iamspe_marker = '\n\n\n  // -- IAMSPE'
iamspe_start = content.find(iamspe_marker)
if iamspe_start == -1:
    print("IAMSPE marker not found! Checking alternative...")
    iamspe_start = content.find('\n  // -- IAMSPE')
    if iamspe_start == -1:
        print("ERROR: IAMSPE section not found")
        sys.exit(1)

# Fim do array MEDICAL_AVATARS (closing ];)
ma_close_idx = content.find('\n];', iamspe_start)
if ma_close_idx == -1:
    print("ERROR: Cannot find ]; after IAMSPE")
    sys.exit(1)

iamspe_block = content[iamspe_start:ma_close_idx]
print(f"IAMSPE block: {len(iamspe_block)} chars")
print(f"  starts at: {iamspe_start}")
print(f"  ends at:   {ma_close_idx}")

# Count IAMSPE questions
q_count = iamspe_block.count("id: 'iamspe_")
print(f"  questions: {q_count}")

# ── 2. Remove IAMSPE from MEDICAL_AVATARS ────────────────────────────────────
# Replace the IAMSPE block with nothing (keeping the `\n];` intact)
content_fixed = content[:iamspe_start] + content[ma_close_idx:]

print(f"\nAfter removal: {len(content_fixed)} chars (removed {len(content) - len(content_fixed)})")

# Verify MEDICAL_AVATARS looks correct
ma_pos = content_fixed.find('const MEDICAL_AVATARS')
ma_close_new = content_fixed.find('\n];', ma_pos)
print(f"\nMEDICAL_AVATARS now: chars {ma_pos} - {ma_close_new}")
print("Last avatar:", repr(content_fixed[ma_close_new-120:ma_close_new]))

# ── 3. Insert IAMSPE questions into QUESTIONS array ───────────────────────────
# Find the end of QUESTIONS array
# The QUESTIONS array closes with "\n];\n\nconst RANKING"
questions_close = content_fixed.find('\n];\n\nconst RANKING')
if questions_close == -1:
    print("ERROR: Cannot find QUESTIONS array close")
    sys.exit(1)

print(f"\nQUESTIONS array closes at: {questions_close}")

# The IAMSPE block already starts with "\n\n\n  // -- IAMSPE ..."
# We need to clean it up - convert to a section comment style
iamspe_section = '\n\n  // ─── IAMSPE 2024 ────────────────────────────────────────────────────────────' + iamspe_block[len('\n\n\n  // -- IAMSPE 02/2024 --'):]

# Actually, just use the original block as-is, fixing the indentation
# The block already has proper question format
iamspe_to_insert = iamspe_block.rstrip()

# Insert before the closing ];
content_final = (
    content_fixed[:questions_close] +
    iamspe_to_insert +
    content_fixed[questions_close:]
)

print(f"Final file: {len(content_final)} chars")

# ── 4. Verify ─────────────────────────────────────────────────────────────────
iamspe_count_in_questions = content_final.count("id: 'iamspe_")
ma_contains_iamspe = 'iamspe_2024_001' in content_final[
    content_final.find('const MEDICAL_AVATARS'):
    content_final.find('\n];', content_final.find('const MEDICAL_AVATARS'))
]
print(f"\nVerification:")
print(f"  IAMSPE questions in file: {iamspe_count_in_questions}")
print(f"  IAMSPE still in MEDICAL_AVATARS: {ma_contains_iamspe}")

if ma_contains_iamspe:
    print("ERROR: IAMSPE still in MEDICAL_AVATARS!")
    sys.exit(1)

if iamspe_count_in_questions != q_count:
    print(f"ERROR: Expected {q_count} but found {iamspe_count_in_questions}")
    sys.exit(1)

# ── 5. Write ──────────────────────────────────────────────────────────────────
APP_TSX.write_text(content_final, encoding='utf-8')
print(f"\nSalvo! {APP_TSX}")
print(f"Movidas {q_count} questoes IAMSPE para o array QUESTIONS.")
