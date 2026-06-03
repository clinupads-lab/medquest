#!/usr/bin/env python3
"""
Load consolidated questions into the app's data structure.
Updates App.tsx to include all questions.
"""

import json
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent.parent
DATA_DIR = PROJECT_ROOT / "data"
QUESTIONS_JSON = DATA_DIR / "processed" / "all_questions.json"
QUESTIONS_TS = DATA_DIR / "processed" / "questions.ts"

def load_questions():
    """Load consolidated questions."""
    if not QUESTIONS_JSON.exists():
        print(f"Error: {QUESTIONS_JSON} not found")
        return []

    with open(QUESTIONS_JSON, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_typescript_code(questions):
    """Generate TypeScript code for questions."""
    lines = ["export const ALL_QUESTIONS = ["]

    for q in questions:
        # Escape strings for TypeScript
        def escape(s):
            if not isinstance(s, str):
                return str(s)
            s = s.replace('\\', '\\\\')
            s = s.replace('"', '\\"')
            s = s.replace('\n', ' ')
            return s

        alternatives = q.get('alternatives', [])
        while len(alternatives) < 5:
            alternatives.append('')

        lines.append("  {")
        lines.append(f"    id: '{escape(q.get('id', ''))}',")
        lines.append(f"    cycle: '{escape(q.get('cycle', 'Ciclo Clínico'))}',")
        lines.append(f"    subject: '{escape(q.get('subject', ''))}',")
        lines.append(f"    subsubject: '{escape(q.get('subsubject', ''))}',")
        lines.append(f"    banca: '{escape(q.get('banca', ''))}',")
        lines.append(f"    year: {q.get('year', 0)},")
        lines.append(f"    enunciado: \"{escape(q.get('enunciado', '')[:500])}\",")

        # Alternatives as array
        alts = [f"\"{escape(a)[:200]}\"" for a in alternatives[:5]]
        lines.append(f"    alternatives: [{', '.join(alts)}],")

        lines.append(f"    correctIndex: {q.get('correctIndex', -1)},")
        lines.append(f"    explanation: \"{escape(q.get('explanation', '')[:200])}\",")
        lines.append(f"    difficulty: \"{escape(q.get('difficulty', 'medium'))}\" as Difficulty,")
        lines.append("  },")

    lines.append("];")

    return "\n".join(lines)

def main():
    print("Loading questions...")
    questions = load_questions()
    print(f"Loaded {len(questions)} questions")

    if not questions:
        print("No questions to process")
        return

    # Generate TypeScript
    print("Generating TypeScript code...")
    ts_code = generate_typescript_code(questions)

    # Save TypeScript file
    with open(QUESTIONS_TS, 'w', encoding='utf-8') as f:
        f.write(ts_code)
    print(f"Saved to: {QUESTIONS_TS}")

    # Statistics
    stats = {}
    for q in questions:
        banca = q.get('banca', 'UNKNOWN')
        subject = q.get('subject', 'UNKNOWN')
        key = f"{banca}/{subject}"
        stats[key] = stats.get(key, 0) + 1

    print("\nQuestions by Banca/Subject:")
    for key, count in sorted(stats.items(), key=lambda x: -x[1]):
        print(f"  {key}: {count}")

    print(f"\nTotal: {len(questions)} questions")
    print("\nNext steps:")
    print("1. Import QUESTIONS from data/processed/questions.ts in your App component")
    print("2. Add these questions to your question database")
    print("3. Use the questions in your quiz/study features")

if __name__ == "__main__":
    main()
