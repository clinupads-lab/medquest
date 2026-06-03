#!/usr/bin/env python3
"""
Consolidate all question JSON files into a single database.
"""

import json
from pathlib import Path
from collections import defaultdict

PROJECT_ROOT = Path(__file__).parent.parent
DATA_DIR = PROJECT_ROOT / "data"
PROCESSED_DIR = DATA_DIR / "processed"
RAW_OUTPUT_DIR = DATA_DIR / "raw" / "output"

def load_json_file(path):
    """Safely load JSON file."""
    if not path.exists():
        return []
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError) as e:
        print(f"Warning: Could not load {path}: {e}")
        return []

def consolidate_questions():
    """Consolidate all questions from various sources."""
    all_questions = {}
    sources = defaultdict(int)

    # Source 1: data/processed/iamspe_questions.json
    iamspe_path = PROCESSED_DIR / "iamspe_questions.json"
    if iamspe_path.exists():
        iamspe_data = load_json_file(iamspe_path)
        for q in iamspe_data:
            q_id = q.get('id', f"iamspe_{len(all_questions)}")
            all_questions[q_id] = {
                'id': q_id,
                'cycle': q.get('cycle', 'Ciclo Clínico'),
                'subject': q.get('subject', 'Clínica Médica'),
                'subsubject': '',
                'banca': 'IAMSPE',
                'year': 2024,
                'enunciado': q.get('text', ''),
                'alternatives': q.get('options', []),
                'correctIndex': q.get('correctIndex', -1),
                'explanation': '',
                'difficulty': 'medium'
            }
            sources['IAMSPE'] += 1

    # Source 2: data/raw/output/questions.json
    questions_path = RAW_OUTPUT_DIR / "questions.json"
    if questions_path.exists():
        questions_data = load_json_file(questions_path)
        for q in questions_data:
            q_id = q.get('id', f"q_{len(all_questions)}")
            if q_id not in all_questions:
                all_questions[q_id] = q
                sources[q.get('banca', 'UNKNOWN')] += 1

    # Source 3: Other JSON files in raw/output
    if RAW_OUTPUT_DIR.exists():
        for json_file in RAW_OUTPUT_DIR.glob("*.json"):
            if json_file.name not in ['questions.json']:
                data = load_json_file(json_file)
                if isinstance(data, list):
                    for q in data:
                        q_id = q.get('id', f"{json_file.stem}_{len(all_questions)}")
                        if q_id not in all_questions:
                            all_questions[q_id] = q
                            banca = q.get('banca', json_file.stem)
                            sources[banca] += 1

    return all_questions, sources

def save_consolidated(questions):
    """Save consolidated questions."""
    output_path = PROCESSED_DIR / "all_questions.json"
    PROCESSED_DIR.mkdir(parents=True, exist_ok=True)

    sorted_questions = sorted(questions.values(), key=lambda q: q.get('id', ''))

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(sorted_questions, f, ensure_ascii=False, indent=2)

    return output_path

if __name__ == "__main__":
    print("=" * 60)
    print("Consolidating questions from all sources...")
    print("=" * 60)

    questions, sources = consolidate_questions()

    print("\nSTATISTICS:")
    print("-" * 60)
    for banca, count in sorted(sources.items(), key=lambda x: -x[1]):
        print(f"{banca:30} {count:5} questions")
    print("-" * 60)
    print(f"{'TOTAL':30} {len(questions):5} questions")

    output_path = save_consolidated(questions)
    print(f"\nSaved to: {output_path}")
