"""Remove duplicate IAMSPE questions from App.tsx."""
import re
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.parent
APP_PATH = BASE_DIR / "src" / "App.tsx"
app = APP_PATH.read_text(encoding="utf-8")

# Count existing IAMSPE entries
count = app.count("'iamspe_2024_")
print(f"Current IAMSPE entries: {count}")

# Strategy: find the QUESTIONS array, remove ALL iamspe entries, then we'll re-inject once
# Find the comment section start (with unicode or ASCII dashes)
for marker in ["  // -- IAMSPE", "  // ── IAMSPE", "  // ── IAMSPE"]:
    pos = app.find(marker)
    if pos != -1:
        print(f"Found marker at pos {pos}: {repr(marker)}")
        break
else:
    # Find first iamspe entry
    pos = app.find("'iamspe_2024_")
    pos = app.rfind("\n  {", 0, pos)
    print(f"No comment marker found; using entry start at pos {pos}")

# Find end of QUESTIONS array (the "];" after the const QUESTIONS)
q_const = app.find("const QUESTIONS")
q_end = app.rfind("\n];", q_const)
print(f"QUESTIONS const at {q_const}, array end at {q_end}")

# Remove the IAMSPE block (from marker to array end exclusive)
if pos != -1 and q_end != -1:
    # Keep everything before the marker and from "];" onward
    app_clean = app[:pos] + "\n" + app[q_end:]
    APP_PATH.write_text(app_clean, encoding="utf-8")
    remaining = app_clean.count("'iamspe_2024_")
    print(f"After removal: {remaining} IAMSPE entries remain")
else:
    print("ERROR: Could not locate markers")
