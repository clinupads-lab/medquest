"""
Sincroniza questoes do src/App.tsx para data/processed/ no formato do AI Studio.
Executa: python scripts/sync_to_aistudio.py
"""
import re, json, sys, io
from pathlib import Path
from collections import Counter

ROOT = Path(__file__).parent.parent
APP_TSX = ROOT / 'src' / 'App.tsx'
OUT_JSON = ROOT / 'data' / 'processed' / 'all_questions.json'
OUT_TS   = ROOT / 'data' / 'processed' / 'questions.ts'
OUT_MD   = ROOT / 'data' / 'processed' / 'QUESTOES_POR_BANCA.md'

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

print("Lendo src/App.tsx...")
content = APP_TSX.read_text(encoding='utf-8')

# ── helpers ──────────────────────────────────────────────────────────────────

def extract_string(s):
    """Remove outer quotes/backticks and unescape."""
    s = s.strip()
    if s.startswith('`') and s.endswith('`'):
        return s[1:-1].replace('\\`', '`').replace('\\${', '${')
    if (s.startswith("'") and s.endswith("'")) or (s.startswith('"') and s.endswith('"')):
        return s[1:-1].replace("\\'", "'").replace('\\"', '"')
    return s

def year_from_id(qid):
    m = re.search(r'_(\d{4})_', qid)
    return int(m.group(1)) if m else 0

def banca_normalize(b):
    """Normalise banca name to match AI Studio convention."""
    mapping = {'FUNDATEC': 'FUNDATEC_AMRIGS'}
    return mapping.get(b, b)

# ── parse questions from App.tsx ──────────────────────────────────────────────

# Strategy: find each { id: '...' } block inside the questions array.
# The array starts after "const questions: Question[] = [" and ends at "];"
# We look for objects with id field.

# Extract the questions array bodies (handling both single array and split arrays)
bodies = re.findall(
    r'const QUESTIONS_PART\d:\s*\w+\[\]\s*=\s*\[(.*?)\n\];',
    content, re.DOTALL
)
if not bodies:
    # Fallback to the original single array format
    arr_match = re.search(
        r'const QUESTIONS:\s*\w+\[\]\s*=\s*\[(.*?)\n\];',
        content, re.DOTALL
    )
    if arr_match:
        bodies = [arr_match.group(1)]
    else:
        print("ERROR: questions array not found!")
        sys.exit(1)

arr_body = ",\n".join(bodies)
print(f"Questions array found ({len(arr_body):,} chars across {len(bodies)} parts)")

questions = []
# Split on individual question objects using id: field as anchor
# Handle both 'id: ...' and 'id:...' (compact format)
parts = re.split(r'\n\s*\{(?=\s*\n?\s*id[:\s])', arr_body)

for part in parts[1:]:   # skip preamble before first question
    try:
        # Extract id
        id_m = re.search(r"id:\s*['\`]([^'\`\n]+)['\`]", part)
        if not id_m:
            continue
        qid = id_m.group(1).strip()

        # Extract banca
        banca_m = re.search(r"banca:\s*['\`]([^'\`\n]+)['\`]", part)
        banca = banca_normalize(banca_m.group(1).strip()) if banca_m else 'UNKNOWN'

        # Extract cycle
        cycle_m = re.search(r"cycle:\s*['\`]([^'\`\n]+)['\`]", part)
        cycle = cycle_m.group(1).strip() if cycle_m else 'Ciclo Clínico'

        # Extract subject
        subj_m = re.search(r"subject:\s*['\`]([^'\`\n]+)['\`]", part)
        subject = subj_m.group(1).strip() if subj_m else ''

        # Extract subSubject
        subsub_m = re.search(r"sub[Ss]ubject:\s*['\`]([^'\`\n]*)['\`]", part)
        subsubject = subsub_m.group(1).strip() if subsub_m else ''

        # Extract text (enunciado)
        # Could be backtick template literal spanning multiple lines
        text_m = re.search(r'text:\s*(`[^`]*`|\'(?:[^\'\\]|\\.)*\'|"(?:[^"\\]|\\.)*")', part, re.DOTALL)
        if not text_m:
            continue
        enunciado = extract_string(text_m.group(1))

        # Extract options/alternatives (array)
        opts_m = re.search(r'options:\s*\[(.*?)\]', part, re.DOTALL)
        alternatives = []
        if opts_m:
            opts_raw = opts_m.group(1)
            for opt in re.findall(r'[`\'"](?:[^`\'"\\]|\\.)*[`\'"]', opts_raw, re.DOTALL):
                alternatives.append(extract_string(opt))

        # Extract correctIndex
        ci_m = re.search(r'correctIndex:\s*(-?\d+)', part)
        correctIndex = int(ci_m.group(1)) if ci_m else -1

        # Extract explanation
        exp_m = re.search(r'explanation:\s*[`\'"]([^`\'"]*)[`\'"]', part)
        explanation = exp_m.group(1).strip() if exp_m else ''

        questions.append({
            'id': qid,
            'cycle': cycle,
            'subject': subject,
            'subsubject': subsubject,
            'banca': banca,
            'year': year_from_id(qid),
            'enunciado': enunciado,
            'alternatives': alternatives,
            'correctIndex': correctIndex,
            'explanation': explanation,
            'difficulty': 'medium',
        })

    except Exception as e:
        continue

print(f"Questões parseadas: {len(questions)}")

# Distribution
dist_banca = Counter(q['banca'] for q in questions)
dist_subj  = Counter((q['banca'], q['subject']) for q in questions)

for b, c in sorted(dist_banca.items(), key=lambda x: -x[1]):
    print(f"  {b}: {c}")

# ── write all_questions.json ─────────────────────────────────────────────────
OUT_JSON.write_text(
    json.dumps(questions, ensure_ascii=False, indent=2),
    encoding='utf-8'
)
print(f"\nEscrito: {OUT_JSON} ({OUT_JSON.stat().st_size:,} bytes)")

# ── write questions.ts ───────────────────────────────────────────────────────
ts_lines = ["export type Difficulty = 'easy' | 'medium' | 'hard';", ""]
ts_lines.append("export const ALL_QUESTIONS = [")
for q in questions:
    ts_lines.append("  {")
    ts_lines.append(f"    id: {json.dumps(q['id'])},")
    ts_lines.append(f"    cycle: {json.dumps(q['cycle'])},")
    ts_lines.append(f"    subject: {json.dumps(q['subject'])},")
    ts_lines.append(f"    subsubject: {json.dumps(q['subsubject'])},")
    ts_lines.append(f"    banca: {json.dumps(q['banca'])},")
    ts_lines.append(f"    year: {q['year']},")
    ts_lines.append(f"    enunciado: {json.dumps(q['enunciado'])},")
    ts_lines.append(f"    alternatives: {json.dumps(q['alternatives'], ensure_ascii=False)},")
    ts_lines.append(f"    correctIndex: {q['correctIndex']},")
    ts_lines.append(f"    explanation: {json.dumps(q['explanation'])},")
    ts_lines.append(f"    difficulty: 'medium' as Difficulty,")
    ts_lines.append("  },")
ts_lines.append("];")
OUT_TS.write_text('\n'.join(ts_lines), encoding='utf-8')
print(f"Escrito: {OUT_TS} ({OUT_TS.stat().st_size:,} bytes)")

# ── write QUESTOES_POR_BANCA.md ──────────────────────────────────────────────
md_lines = ["# Questões Organizadas por Banca", ""]
for banca in sorted(dist_banca.keys()):
    count = dist_banca[banca]
    md_lines.append(f"## {banca} ({count} questões)")
    md_lines.append("")
    subjects = sorted(
        [(s, c) for (b, s), c in dist_subj.items() if b == banca],
        key=lambda x: -x[1]
    )
    for subj, cnt in subjects:
        md_lines.append(f"- **{subj}**: {cnt} questões")
    md_lines.append("")

total = len(questions)
md_lines.append(f"**TOTAL: {total} questões**")
OUT_MD.write_text('\n'.join(md_lines), encoding='utf-8')
print(f"Escrito: {OUT_MD}")

print(f"\nSincronização concluída! {total} questões exportadas para data/processed/")
