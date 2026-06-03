#!/usr/bin/env python3
"""Extract questions from FUNDATEC AMRIGS 2023 PDF."""

import json
import re
from pathlib import Path
import pdfplumber

PDF_PATH = Path(r"C:\Users\Andrew Aguiar\Downloads\medquest_-residência-médica (1)\data\raw\pdfs\FUNDATEC_AMRIGS\Prova-2023.pdf")
OUTPUT_FILE = Path(r"C:\Users\Andrew Aguiar\Downloads\medquest_-residência-médica (1)\data\raw\output\fundatec_2023.json")

def extract_fundatec_questions():
    """Extract questions from FUNDATEC PDF."""
    questions = []

    with pdfplumber.open(PDF_PATH) as pdf:
        full_text = ""
        for page in pdf.pages:
            full_text += page.extract_text() or ""
            full_text += "\n"

    # Split by question marker: número acompanhado de ponto ou parêntese
    # Pattern: number followed by dot and question start
    pattern = r'^\s*(\d{1,3})[\.\)]\s+([^\n]+(?:\n(?!\d{1,3}[\.\)])[^\n]+)*)'

    matches = re.finditer(pattern, full_text, re.MULTILINE)

    for match in matches:
        q_num = int(match.group(1))
        content = match.group(2).strip()

        # Split question text and options
        # Options are usually prefixed with A), B), C), D), E) or – A ... B ...
        option_pattern = r'[A-E]\s*[\)\.]|–\s*[A-E]\s*[\)]|\n[A-E]\s*[\)]'

        parts = re.split(option_pattern, content)
        if len(parts) >= 6:  # q_text + 5 options
            q_text = parts[0].strip()
            options = [p.strip() for p in parts[1:6]]

            if q_text and all(options):
                questions.append({
                    'id': f'fundatec_2023_{q_num:03d}',
                    'num': q_num,
                    'cycle': 'Ciclo Clínico',
                    'subject': 'Clínica Médica',  # Default, should be determined
                    'banca': 'FUNDATEC_AMRIGS',
                    'year': 2023,
                    'enunciado': q_text,
                    'alternatives': options,
                    'correctIndex': -1,
                    'explanation': '',
                    'difficulty': 'medium'
                })

    return questions

if __name__ == "__main__":
    if not PDF_PATH.exists():
        print(f"PDF not found: {PDF_PATH}")
        exit(1)

    print(f"Extracting from {PDF_PATH.name}...")
    questions = extract_fundatec_questions()

    print(f"Found {len(questions)} questions")

    if questions:
        # Show sample
        print("\nSample questions:")
        for q in questions[:2]:
            print(f"\nQ{q['num']}: {q['enunciado'][:100]}...")
            for i, opt in enumerate(q['alternatives'][:3]):
                print(f"  {chr(65+i)}) {opt[:80]}...")

        # Save
        OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(questions, f, ensure_ascii=False, indent=2)

        print(f"\nSaved to {OUTPUT_FILE}")
