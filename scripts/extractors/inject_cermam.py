"""Inject CERMAM AM 2009 questions into src/App.tsx."""
import re
from pathlib import Path
from cermam_data import QUESTIONS

BASE_DIR = Path(__file__).parent.parent.parent
APP_PATH = BASE_DIR / "src" / "App.tsx"

def esc(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', ' ')

ts_entries = []
for q in QUESTIONS:
    opts = q['options'][:5]
    while len(opts) < 5:
        opts.append('')
    opts_str = ', '.join(f'"{esc(o)}"' for o in opts)
    ts_entries.append(
        f'  {{\n'
        f'    id: \'{q["id"]}\',\n'
        f'    cycle: \'{q["cycle"]}\',\n'
        f'    subject: \'{q["subject"]}\',\n'
        f'    text: "{esc(q["text"])}",\n'
        f'    options: [{opts_str}],\n'
        f'    correctIndex: {q["correctIndex"]},\n'
        f'    explanation: \'\',\n'
        f'  }}'
    )

new_block = ",\n".join(ts_entries)

app = APP_PATH.read_text(encoding='utf-8')

# Remove previous CERMAM injection if any
app = re.sub(r'\n  // -- CERMAM.*?(?=\n  \{|\n\];)', '', app, flags=re.DOTALL)

q_const = app.find('const QUESTIONS')
q_end = app.rfind('\n];', q_const)
if q_end == -1:
    print("ERROR: QUESTIONS array end not found")
    exit(1)

inject = f"\n  // -- CERMAM AM 2009 --\n{new_block},\n"
app = app[:q_end] + inject + app[q_end:]

APP_PATH.write_text(app, encoding='utf-8')
count = app.count("'cermam_am_2009_")
print(f"Injected {count} CERMAM questions into src/App.tsx")

# Show subject distribution
from collections import Counter
subjects = Counter(q['subject'] for q in QUESTIONS)
for subj, n in sorted(subjects.items(), key=lambda x: -x[1]):
    print(f"  {subj}: {n}")
