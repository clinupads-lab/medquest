#!/usr/bin/env python3
"""
Extract questions from all PDFs in data/raw/pdfs and consolidate into main database.
Supports multiple PDF formats and question types.
"""

import json
import re
import uuid
from pathlib import Path
from collections import defaultdict
import pdfplumber

PROJECT_ROOT = Path(__file__).parent.parent.parent
DATA_DIR = PROJECT_ROOT / "data"
RAW_PDFS_DIR = DATA_DIR / "raw" / "pdfs"
OUTPUT_DIR = DATA_DIR / "processed"
OUTPUT_FILE = OUTPUT_DIR / "questions.json"

# Subject mapping heuristics
SUBJECT_KEYWORDS = {
    'Clínica Médica': ['clínica', 'médica', 'clínico', 'medicina'],
    'Cirurgia Geral': ['cirurgia', 'cirurgião', 'cirúrgico'],
    'Pediatria': ['pediatria', 'pediátrico', 'criança', 'neonatal'],
    'Ginecologia & Obstetrícia': ['ginecologia', 'obstétrica', 'obstetrícia', 'gestação', 'parto'],
    'Cardiologia': ['cardio', 'coração', 'cardíaco'],
    'Neurologia': ['neuro', 'neural', 'neurológico'],
    'Ortopedia': ['ortopedia', 'ortopédico', 'fratura', 'osso'],
    'Pneumologia': ['pneumo', 'pulmão', 'pulmonar', 'respiratório'],
    'Gastroenterologia': ['gastro', 'intestinal', 'abdominal', 'hepático'],
    'Infectologia': ['infecto', 'infecção', 'infeccioso'],
    'Medicina de Família/SUS': ['família', 'sus', 'atenção primária'],
}

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF using pdfplumber."""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            text = ""
            for page in pdf.pages:
                text += page.extract_text() or ""
                text += "\n"
            return text
    except Exception as e:
        print(f"Error extracting {pdf_path}: {e}")
        return ""

def parse_questions_from_text(text):
    """Parse questions from extracted text with multiple format support."""
    questions = []

    # Pattern 1: Questão N or QUESTÃO N
    pattern1 = r'(?:questão|question)\s+(\d+)[:\s]*\n(.*?)(?=(?:questão|question)\s+\d+|$)'
    blocks = re.finditer(pattern1, text, re.IGNORECASE | re.DOTALL)

    for match in blocks:
        q_num = int(match.group(1))
        content = match.group(2).strip()

        # Try to extract options: look for patterns like A), (A), A. etc
        options = []
        q_text = content

        # Pattern for options: letter followed by ) or . or :
        option_pattern = r'[A-E]\s*[):.]\s*(.+?)(?=[A-E]\s*[):.]\s*|$)'
        option_matches = list(re.finditer(option_pattern, content, re.MULTILINE))

        if len(option_matches) >= 5:
            # Extract question text (before first option)
            first_option_start = option_matches[0].start()
            q_text = content[:first_option_start].strip()

            # Extract options
            options = []
            for i in range(min(5, len(option_matches))):
                opt_text = option_matches[i].group(1).strip()
                # Clean up option text
                opt_text = re.sub(r'^\s*[A-E]\s*[):.]\s*', '', opt_text).strip()
                options.append(opt_text)

        if q_text and len(options) >= 5:
            questions.append({
                'num': q_num,
                'text': q_text,
                'options': options[:5]
            })

    return questions

def guess_subject(text):
    """Guess subject from question text."""
    text_lower = text.lower()
    for subject, keywords in SUBJECT_KEYWORDS.items():
        if any(keyword in text_lower for keyword in keywords):
            return subject
    return "Clínica Médica"  # default

def extract_year_from_path(pdf_path):
    """Try to extract year from file path."""
    match = re.search(r'20\d{2}', str(pdf_path))
    if match:
        return int(match.group())
    return None

def process_all_pdfs():
    """Process all PDFs and extract questions."""
    all_questions = {}
    banca_stats = defaultdict(int)

    if not RAW_PDFS_DIR.exists():
        print(f"PDFs directory not found: {RAW_PDFS_DIR}")
        return {}

    pdf_files = list(RAW_PDFS_DIR.rglob("*.pdf"))
    print(f"Found {len(pdf_files)} PDF files")

    for pdf_path in pdf_files:
        # Extract banca from directory name
        banca = pdf_path.parent.name
        if not any(c.isalpha() for c in banca):
            # Skip if looks like a subdirectory without banca info
            continue

        print(f"\nProcessing: {banca} / {pdf_path.name}")

        # Extract text
        text = extract_text_from_pdf(pdf_path)
        if not text.strip():
            print(f"  No text extracted")
            continue

        # Parse questions
        questions = parse_questions_from_text(text)
        print(f"  Found {len(questions)} questions")

        for q in questions:
            year = extract_year_from_path(pdf_path)
            q_id = f"{banca.lower()}_{year}_{q['num']:03d}" if year else f"{banca.lower()}_{uuid.uuid4().hex[:8]}"

            question = {
                'id': q_id,
                'cycle': 'Ciclo Clínico',
                'subject': guess_subject(q['text']),
                'subsubject': '',
                'banca': banca,
                'year': year,
                'enunciado': q['text'],
                'alternatives': q['options'],
                'correctIndex': -1,  # Unknown
                'explanation': '',
                'difficulty': 'medium'
            }

            all_questions[q_id] = question
            banca_stats[banca] += 1

    print("\n=== Statistics ===")
    for banca, count in sorted(banca_stats.items(), key=lambda x: -x[1]):
        print(f"{banca}: {count} questions")
    print(f"Total: {len(all_questions)} questions\n")

    return all_questions

def load_existing_questions():
    """Load existing questions from database."""
    if OUTPUT_FILE.exists():
        with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
            try:
                return {q['id']: q for q in json.load(f)}
            except json.JSONDecodeError:
                return {}
    return {}

def merge_and_save(new_questions):
    """Merge new questions with existing ones and save."""
    existing = load_existing_questions()

    # Count how many are truly new
    new_count = 0
    for q_id, question in new_questions.items():
        if q_id not in existing:
            new_count += 1
        existing[q_id] = question

    # Save merged questions
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(list(existing.values()), f, ensure_ascii=False, indent=2)

    print(f"Merged {new_count} new questions")
    print(f"Total questions in database: {len(existing)}")
    print(f"Saved to: {OUTPUT_FILE}")

if __name__ == "__main__":
    print("Extracting questions from all PDFs...")
    new_questions = process_all_pdfs()

    if new_questions:
        print("\nMerging and saving...")
        merge_and_save(new_questions)
        print("\nDone!")
    else:
        print("\nNo questions extracted.")
