"""Clean IAMSPE question data and inject into src/App.tsx."""
import re
import json
from pathlib import Path

JSON_PATH = Path("iamspe_questions.json")
APP_PATH  = Path("src/App.tsx")

# Hard stop patterns: cut off the string at any of these
HARD_STOPS = [
    'pcimarkpci',
    'TpmYzIx',
    'www.pciconcursos.com.br',
    'ACESSO DIRETO',
    'Instituto de Assist',
    'INSTITUTO AVAN',
    'V2VkLCA',
    'MjgwND',
]

def clean(text: str) -> str:
    # Cut at any hard-stop marker
    for stop in HARD_STOPS:
        idx = text.find(stop)
        if idx != -1:
            text = text[:idx]
    # Collapse whitespace
    text = re.sub(r'\s{2,}', ' ', text).strip()
    # Remove trailing punctuation artefacts
    text = text.rstrip('. ')
    # Restore single sentence-ending period if meaningful text remains
    if text and not text[-1] in '.!?)':
        text = text
    return text

def esc_ts(s: str) -> str:
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', ' ')

data = json.loads(JSON_PATH.read_text(encoding='utf-8'))

# Clean each question
issues = []
for q in data:
    q['text'] = clean(q['text'])
    for i in range(len(q['options'])):
        original = q['options'][i]
        cleaned  = clean(original)
        if cleaned != original:
            issues.append(f"Q{q['num']} opt {chr(65+i)}: cleaned")
        q['options'][i] = cleaned

print(f"Cleaned {len(issues)} option(s)")
for iss in issues:
    print(f"  {iss}")

# Save cleaned JSON
JSON_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
print(f"Saved cleaned JSON ({len(data)} questions)")

# Build TypeScript array entries
ts_entries = []
for q in data:
    opts = q['options']
    while len(opts) < 5:
        opts.append('')
    opts_str = ', '.join(f'"{esc_ts(o)}"' for o in opts[:5])
    ts_entries.append(
        f'  {{\n'
        f'    id: \'{q["id"]}\',\n'
        f'    cycle: \'{q["cycle"]}\',\n'
        f'    subject: \'{q["subject"]}\',\n'
        f'    text: "{esc_ts(q["text"])}",\n'
        f'    options: [{opts_str}],\n'
        f'    correctIndex: {q["correctIndex"]},\n'
        f'    explanation: \'\',\n'
        f'  }}'
    )

new_block = ",\n".join(ts_entries)

# Read App.tsx
app = APP_PATH.read_text(encoding='utf-8')

# Remove any previous IAMSPE injection
app = re.sub(
    r'\n  // -- IAMSPE 02/2024.*?(?=\n  \{|\n\];)',
    '',
    app,
    flags=re.DOTALL
)

# Find end of QUESTIONS array
questions_const_pos = app.find('const QUESTIONS')
questions_end = app.rfind('\n];', questions_const_pos)
if questions_end == -1:
    print("ERROR: Could not find QUESTIONS array end")
    exit(1)

# Insert before the closing "];"
inject = f"\n  // -- IAMSPE 02/2024 --\n{new_block},\n"
app_new = app[:questions_end] + inject + app[questions_end:]

APP_PATH.write_text(app_new, encoding='utf-8')
count = app_new.count("'iamspe_2024_")
print(f"Injected into src/App.tsx: {count} IAMSPE questions")
