#!/usr/bin/env python3
"""
View and search consolidated questions.
"""

import json
from pathlib import Path
import sys

PROJECT_ROOT = Path(__file__).parent.parent
ALL_QUESTIONS_FILE = PROJECT_ROOT / "data" / "processed" / "all_questions.json"

def load_questions():
    """Load all questions."""
    if not ALL_QUESTIONS_FILE.exists():
        print(f"Error: {ALL_QUESTIONS_FILE} not found")
        return []

    with open(ALL_QUESTIONS_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def show_question(q, include_answer=False):
    """Display a single question."""
    print(f"\n{'='*70}")
    print(f"ID: {q.get('id', 'N/A')}")
    print(f"Banca: {q.get('banca', 'N/A')} | Ano: {q.get('year', 'N/A')}")
    print(f"Disciplina: {q.get('subject', 'N/A')}")
    print(f"Dificuldade: {q.get('difficulty', 'N/A')}")
    print(f"{'='*70}")
    print(f"\n{q.get('enunciado', 'N/A')}\n")

    alternatives = q.get('alternatives', [])
    for i, alt in enumerate(alternatives):
        marker = " ← CORRETA" if include_answer and i == q.get('correctIndex', -1) else ""
        print(f"  {chr(65+i)}) {alt}{marker}")

    if include_answer and q.get('explanation'):
        print(f"\nExplicação: {q.get('explanation', 'N/A')}")

    print(f"{'='*70}")

def show_stats(questions):
    """Show statistics about questions."""
    print(f"\nTotal: {len(questions)} questões\n")

    # By banca
    print("Por Banca:")
    banca_stats = {}
    for q in questions:
        banca = q.get('banca', 'UNKNOWN')
        banca_stats[banca] = banca_stats.get(banca, 0) + 1

    for banca, count in sorted(banca_stats.items(), key=lambda x: -x[1]):
        print(f"  {banca:30} {count:4} questões")

    # By subject
    print("\nPor Disciplina:")
    subject_stats = {}
    for q in questions:
        subject = q.get('subject', 'UNKNOWN')
        subject_stats[subject] = subject_stats.get(subject, 0) + 1

    for subject, count in sorted(subject_stats.items(), key=lambda x: -x[1]):
        print(f"  {subject:30} {count:4} questões")

    # By year
    print("\nPor Ano:")
    year_stats = {}
    for q in questions:
        year = q.get('year', 0)
        year_stats[year] = year_stats.get(year, 0) + 1

    for year, count in sorted(year_stats.items(), key=lambda x: -x[1]):
        if year:
            print(f"  {year} {count:4} questões")

    # Without correct answer
    no_answer = [q for q in questions if q.get('correctIndex', -1) == -1]
    if no_answer:
        print(f"\nSem gabarito: {len(no_answer)} questões")

def search_questions(questions, query):
    """Search questions by text."""
    query_lower = query.lower()
    results = []

    for q in questions:
        enunciado = q.get('enunciado', '').lower()
        subject = q.get('subject', '').lower()
        banca = q.get('banca', '').lower()

        if query_lower in enunciado or query_lower in subject or query_lower in banca:
            results.append(q)

    return results

def main():
    questions = load_questions()

    if not questions:
        print("No questions found!")
        return

    if len(sys.argv) == 1:
        # Show stats
        show_stats(questions)

    elif sys.argv[1] == "stats":
        show_stats(questions)

    elif sys.argv[1] == "list":
        # List all questions briefly
        print(f"\n{'ID':<30} {'Banca':<20} {'Disciplina':<25} Ano")
        print("-" * 80)
        for q in questions:
            print(f"{q.get('id', ''):<30} {q.get('banca', ''):<20} {q.get('subject', ''):<25} {q.get('year', '')}")

    elif sys.argv[1] == "search":
        if len(sys.argv) < 3:
            print("Usage: python view_questions.py search TERMO")
            return

        search_term = " ".join(sys.argv[2:])
        results = search_questions(questions, search_term)

        print(f"\nEncontradas {len(results)} questões contendo '{search_term}':\n")
        for q in results[:10]:  # Show first 10
            show_question(q, include_answer=True)

        if len(results) > 10:
            print(f"... e {len(results) - 10} mais")

    elif sys.argv[1] == "random":
        import random
        count = int(sys.argv[2]) if len(sys.argv) > 2 else 1
        selected = random.sample(questions, min(count, len(questions)))

        for q in selected:
            show_question(q, include_answer=True)

    elif sys.argv[1] == "banca":
        if len(sys.argv) < 3:
            print("Usage: python view_questions.py banca NOME")
            return

        banca = sys.argv[2]
        filtered = [q for q in questions if q.get('banca') == banca]

        print(f"\n{len(filtered)} questões de {banca}:\n")
        for q in filtered[:5]:
            show_question(q)

        if len(filtered) > 5:
            print(f"... e {len(filtered) - 5} mais")

    elif sys.argv[1] == "subject":
        if len(sys.argv) < 3:
            subject = sys.argv[2]
            filtered = [q for q in questions if subject.lower() in q.get('subject', '').lower()]
        else:
            subject = " ".join(sys.argv[2:])
            filtered = [q for q in questions if subject.lower() in q.get('subject', '').lower()]

        print(f"\n{len(filtered)} questões de {subject}:\n")
        for q in filtered[:5]:
            show_question(q)

        if len(filtered) > 5:
            print(f"... e {len(filtered) - 5} mais")

    elif sys.argv[1] == "year":
        year = int(sys.argv[2]) if len(sys.argv) > 2 else 2024
        filtered = [q for q in questions if q.get('year') == year]

        print(f"\n{len(filtered)} questões de {year}:\n")
        for q in filtered[:5]:
            show_question(q)

        if len(filtered) > 5:
            print(f"... e {len(filtered) - 5} mais")

    else:
        print("Usage:")
        print("  python view_questions.py              # Mostrar estatísticas")
        print("  python view_questions.py stats        # Estatísticas detalhadas")
        print("  python view_questions.py list         # Listar todas")
        print("  python view_questions.py search TERMO # Procurar por termo")
        print("  python view_questions.py random [N]   # N questões aleatórias")
        print("  python view_questions.py banca NOME   # Questões de uma banca")
        print("  python view_questions.py subject DISC # Questões de uma disciplina")
        print("  python view_questions.py year ANO     # Questões de um ano")

if __name__ == "__main__":
    main()
