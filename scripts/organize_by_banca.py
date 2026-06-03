#!/usr/bin/env python3
"""
Organize questions by banca and subject, creating separate exports.
"""

import json
from pathlib import Path
from collections import defaultdict

PROJECT_ROOT = Path(__file__).parent.parent
ALL_QUESTIONS_FILE = PROJECT_ROOT / "data" / "processed" / "all_questions.json"
OUTPUT_DIR = PROJECT_ROOT / "data" / "processed"

def load_questions():
    """Load all questions."""
    with open(ALL_QUESTIONS_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def organize_by_banca(questions):
    """Organize questions by banca, then by subject."""
    organized = defaultdict(lambda: defaultdict(list))

    for q in questions:
        banca = q.get('banca', 'UNKNOWN')
        subject = q.get('subject', 'Outros')
        organized[banca][subject].append(q)

    return organized

def convert_format(question):
    """Convert from all_questions format to App format."""
    return {
        'id': question.get('id', ''),
        'cycle': question.get('cycle', 'Ciclo Clínico'),
        'subject': question.get('subject', ''),
        'subSubject': question.get('subsubject', ''),
        'banca': question.get('banca', ''),
        'year': question.get('year', 0),
        'text': question.get('enunciado', ''),
        'options': question.get('alternatives', []),
        'correctIndex': question.get('correctIndex', -1),
        'explanation': question.get('explanation', ''),
    }

def generate_typescript_by_banca(organized):
    """Generate separate TypeScript files for each banca."""
    ts_files = {}

    for banca, subjects in sorted(organized.items()):
        lines = [f"// {banca} - Questões organizadas por disciplina\n"]
        lines.append(f"export const {banca.upper().replace('-', '_')}_QUESTIONS = {{\n")

        # Generate subject constants
        for subject in sorted(subjects.keys()):
            questions = subjects[subject]
            const_name = subject.upper().replace(' ', '_').replace('&', 'E').replace('/', '')
            const_name = const_name.replace('Í', 'I').replace('À', 'A')

            lines.append(f"\n  // {subject}: {len(questions)} questões\n")
            lines.append(f"  {const_name}: [\n")

            for q in questions:
                converted = convert_format(q)
                lines.append("    {\n")
                lines.append(f"      id: '{converted['id']}',\n")
                lines.append(f"      cycle: '{converted['cycle']}',\n")
                lines.append(f"      subject: '{converted['subject']}',\n")
                lines.append(f"      subSubject: '{converted['subSubject']}',\n")
                lines.append(f"      banca: '{converted['banca']}',\n")
                lines.append(f"      year: {converted['year']},\n")

                text = converted['text'].replace('"', '\\"').replace('\n', ' ')[:300]
                lines.append(f"      text: \"{text}\",\n")

                opts = converted['options'][:5]
                opts_str = ', '.join(f"\"{o.replace(chr(34), chr(92)+chr(34))}\"" for o in opts)
                lines.append(f"      options: [{opts_str}],\n")
                lines.append(f"      correctIndex: {converted['correctIndex']},\n")

                exp = converted['explanation'].replace('"', '\\"')[:100]
                lines.append(f"      explanation: \"{exp}\",\n")
                lines.append("    },\n")

            lines.append("  ],\n")

        lines.append("};\n")

        ts_files[banca] = "\n".join(lines)

    return ts_files

def save_typescript_files(ts_files):
    """Save TypeScript files for each banca."""
    for banca, content in ts_files.items():
        filename = f"{banca.lower().replace('_', '')}_questions.ts"
        filepath = OUTPUT_DIR / filename

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"[OK] Salvo: {filename}")

def generate_index_file(organized):
    """Generate index file for easy imports."""
    lines = ["// Index of all questions organized by banca\n\n"]

    for banca in sorted(organized.keys()):
        const_name = banca.upper().replace('-', '_')
        filename = banca.lower().replace('_', '')
        lines.append(f"export {{ {const_name}_QUESTIONS }} from './{filename}_questions';\n")

    return "\n".join(lines)

def generate_summary(organized):
    """Generate summary file with statistics."""
    lines = ["# Questões Organizadas por Banca\n\n"]

    total = 0
    for banca in sorted(organized.keys()):
        subjects = organized[banca]
        banca_total = sum(len(qs) for qs in subjects.values())
        total += banca_total

        lines.append(f"## {banca} ({banca_total} questões)\n\n")

        for subject in sorted(subjects.keys()):
            count = len(subjects[subject])
            lines.append(f"- **{subject}**: {count} questões\n")

        lines.append("\n")

    lines.append(f"**TOTAL: {total} questões**\n")

    return "\n".join(lines)

def main():
    print("=" * 70)
    print("Reorganizando questões por banca e disciplina...")
    print("=" * 70)

    questions = load_questions()
    organized = organize_by_banca(questions)

    # Generate statistics
    print("\nESTATÍSTICAS:")
    print("-" * 70)
    total = 0
    for banca in sorted(organized.keys()):
        subjects = organized[banca]
        banca_total = sum(len(qs) for qs in subjects.values())
        total += banca_total
        print(f"\n{banca}: {banca_total} questões")
        for subject in sorted(subjects.keys()):
            count = len(subjects[subject])
            print(f"  • {subject}: {count}")

    print(f"\n{'='*70}")
    print(f"TOTAL: {total} questões")

    # Generate TypeScript files
    print(f"\n{'='*70}")
    print("Gerando arquivos TypeScript...")
    ts_files = generate_typescript_by_banca(organized)
    save_typescript_files(ts_files)

    # Save index file
    index_content = generate_index_file(organized)
    index_path = OUTPUT_DIR / "index_by_banca.ts"
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(index_content)
    print(f"[OK] Salvo: index_by_banca.ts")

    # Save summary
    summary_content = generate_summary(organized)
    summary_path = OUTPUT_DIR / "QUESTOES_POR_BANCA.md"
    with open(summary_path, 'w', encoding='utf-8') as f:
        f.write(summary_content)
    print(f"[OK] Salvo: QUESTOES_POR_BANCA.md")

    print(f"\n{'='*70}")
    print("Tudo pronto! Questões organizadas por banca e disciplina.")

if __name__ == "__main__":
    main()
