"""Extract questions from IAMSPE 2024 PDF and generate TypeScript code.

Strategy:
- Full-width questions (appear cleanly in single-column extraction)
- Two-column questions (appear cleanly in column-split extraction)
Combined parsing handles all 100 questions.
"""
import re
import json
import pdfplumber
from pathlib import Path

PDF_PATH = Path(r"C:\Users\Andrew Aguiar\Downloads\residencia_medica_acesso_direto_neurocirurgia.pdf")

CORRECT_ANSWERS = [
    4,0,1,3,0,3,1,0,2,4,  # Q01-10
    3,4,0,0,3,0,4,1,2,1,  # Q11-20
    2,2,1,1,2,1,2,-1,3,0, # Q21-30
    3,2,3,0,4,1,2,4,4,0,  # Q31-40
    2,0,2,3,4,1,1,2,3,0,  # Q41-50
    4,1,3,3,4,2,2,2,2,1,  # Q51-60
    4,1,0,2,4,4,1,3,4,2,  # Q61-70
    4,3,1,0,2,0,3,3,2,0,  # Q71-80
    4,1,2,0,3,3,4,3,0,1,  # Q81-90
    2,2,0,4,1,0,2,1,1,4,  # Q91-100
]

SUBJECT_MAP = [
    (range(1, 21),   'Ciclo Clínico', 'Clínica Médica'),
    (range(21, 41),  'Ciclo Clínico', 'Cirurgia Geral'),
    (range(41, 61),  'Ciclo Clínico', 'Ginecologia & Obstetrícia'),
    (range(61, 81),  'Ciclo Clínico', 'Pediatria'),
    (range(81, 101), 'Ciclo Clínico', 'Medicina de Família/SUS'),
]

def get_subject(q_num):
    for r, cycle, subj in SUBJECT_MAP:
        if q_num in r:
            return cycle, subj
    return 'Ciclo Clínico', 'Clínica Médica'

# ── Text extractors ──────────────────────────────────────────────────────────

def words_to_text(words):
    if not words:
        return ""
    lines = []
    current_line = []
    current_top = None
    TOLERANCE = 3
    for w in words:
        if current_top is None or abs(w['top'] - current_top) > TOLERANCE * 2:
            if current_line:
                lines.append(" ".join(current_line))
            current_line = [w['text']]
            current_top = w['top']
        else:
            current_line.append(w['text'])
    if current_line:
        lines.append(" ".join(current_line))
    return "\n".join(lines)

def extract_column_text(pdf_path):
    """Split each page into left/right halves and extract separately."""
    parts = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            w, h = page.width, page.height
            mid = w / 2
            left_words  = page.crop((0, 0, mid, h)).extract_words(use_text_flow=True)
            right_words = page.crop((mid, 0, w, h)).extract_words(use_text_flow=True)
            parts.append(words_to_text(left_words))
            parts.append(words_to_text(right_words))
    return "\n".join(parts)

def extract_full_text(pdf_path):
    """Single-column full-page text extraction."""
    parts = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            t = page.extract_text() or ""
            if t.strip():
                parts.append(t)
    return "\n".join(parts)

# ── Question parser ──────────────────────────────────────────────────────────

def parse_all_questions(text):
    """Parse question blocks from text.

    Handles both formats:
      (A) option text   – full-width questions
      A) option text    – two-column questions
    """
    # Split on QUESTÃO N boundaries
    blocks = re.split(r'(?=(?:QUESTÃO|Questão)\s+\d+(?:\s|$))', text)
    questions = {}

    for block in blocks:
        block = block.strip()
        if not block:
            continue

        header = re.match(r'(?:QUESTÃO|Questão)\s+(\d+)\s*\n(.*)', block, re.DOTALL | re.IGNORECASE)
        if not header:
            continue

        q_num = int(header.group(1))
        if not (1 <= q_num <= 100):
            continue

        rest = header.group(2).strip()

        # Try parenthesized format: "(A) text"
        parts_paren = re.split(r'\n?\s*\(([A-E])\)\s*', rest)
        if len(parts_paren) >= 6:  # q_text + 5*(letter + text)
            q_text = parts_paren[0].strip()
            options = []
            i = 1
            while i + 1 < len(parts_paren) and len(options) < 5:
                opt = re.sub(r'\s+', ' ', parts_paren[i + 1]).strip()
                options.append(opt)
                i += 2
            if len(options) >= 5:
                questions[q_num] = {
                    'text': re.sub(r'\s+', ' ', q_text),
                    'options': options[:5],
                }
                continue

        # Try newline format: "\nA) text"
        parts_nl = re.split(r'\n\s*([A-E])\)\s*', rest)
        if len(parts_nl) >= 6:
            q_text = parts_nl[0].strip()
            options = []
            i = 1
            while i + 1 < len(parts_nl) and len(options) < 5:
                opt = re.sub(r'\s+', ' ', parts_nl[i + 1]).strip()
                options.append(opt)
                i += 2
            if len(options) >= 5:
                questions[q_num] = {
                    'text': re.sub(r'\s+', ' ', q_text),
                    'options': options[:5],
                }
                continue

    return questions

# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    print("Step 1: Extract column text (for two-column questions)...")
    col_text = extract_column_text(PDF_PATH)
    q_col = parse_all_questions(col_text)
    print(f"  Column text -> {len(q_col)} questions: {sorted(q_col.keys())}")

    print("\nStep 2: Extract full-page text (for full-width questions)...")
    raw_text = extract_full_text(PDF_PATH)
    q_raw = parse_all_questions(raw_text)
    print(f"  Full text   -> {len(q_raw)} questions: {sorted(q_raw.keys())}")

    # Merge: column text takes priority for two-column questions
    # Full-page text fills in what column missed
    questions = {}
    questions.update(q_raw)   # fill from raw first
    questions.update(q_col)   # override with column (cleaner for two-col)

    found = sorted(questions.keys())
    missing = sorted(set(range(1, 101)) - set(found))
    print(f"\nMerged: {len(questions)} questions")
    if missing:
        print(f"Still missing: {missing}")

    # Quick validation
    for qn in [1, 21, 25, 41, 61, 81]:
        if qn in questions:
            q = questions[qn]
            cycle, subj = get_subject(qn)
            print(f"\nQ{qn} [{subj}]: {q['text'][:80]}...")
            for i, opt in enumerate(q['options'][:5]):
                ans = " ← CORRECT" if i == CORRECT_ANSWERS[qn-1] else ""
                print(f"  {chr(65+i)}) {opt[:70]}{ans}")

    # Generate output JSON
    output = []
    for q_num in sorted(questions.keys()):
        q = questions[q_num]
        cycle, subject = get_subject(q_num)
        output.append({
            'id': f'iamspe_2024_{q_num:03d}',
            'num': q_num,
            'cycle': cycle,
            'subject': subject,
            'text': q['text'],
            'options': q['options'],
            'correctIndex': CORRECT_ANSWERS[q_num - 1],
        })

    with open("iamspe_questions.json", "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    print(f"\niamspe_questions.json written ({len(output)} questions)")

    # Generate TypeScript snippet
    ts_lines = []
    for item in output:
        def esc(s):
            return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', ' ')

        opts = item['options']
        while len(opts) < 5:
            opts.append('')
        opts_str = ', '.join(f'"{esc(o)}"' for o in opts[:5])
        ts_lines.append(
            f'  {{\n'
            f'    id: \'{item["id"]}\',\n'
            f'    cycle: \'{item["cycle"]}\',\n'
            f'    subject: \'{item["subject"]}\',\n'
            f'    text: "{esc(item["text"])}",\n'
            f'    options: [{opts_str}],\n'
            f'    correctIndex: {item["correctIndex"]},\n'
            f'    explanation: \'\',\n'
            f'  }},'
        )

    with open("iamspe_questions.ts", "w", encoding="utf-8") as f:
        f.write("\n".join(ts_lines))
    print(f"iamspe_questions.ts written")

if __name__ == "__main__":
    main()
