#!/usr/bin/env python3
"""
Tool to add questions manually from PDFs.
Creates a template JSON file for you to fill in.
"""

import json
from pathlib import Path
from datetime import datetime

PROJECT_ROOT = Path(__file__).parent.parent
DATA_DIR = PROJECT_ROOT / "data" / "raw" / "output"

TEMPLATE = {
    "id": "banca_year_001",
    "cycle": "Ciclo Clínico",
    "subject": "Clínica Médica",
    "subsubject": "",
    "banca": "BANCA_NAME",
    "year": 2024,
    "enunciado": "Texto da questão aqui...",
    "alternatives": [
        "Opção A",
        "Opção B",
        "Opção C",
        "Opção D",
        "Opção E"
    ],
    "correctIndex": 0,  # 0=A, 1=B, 2=C, 3=D, 4=E, -1=desconhecido
    "explanation": "Explicação da resposta",
    "difficulty": "medium"  # easy, medium, hard
}

SUBJECTS = [
    "Clínica Médica",
    "Cirurgia Geral",
    "Ginecologia & Obstetrícia",
    "Pediatria",
    "Cardiologia",
    "Neurologia",
    "Ortopedia",
    "Pneumologia",
    "Gastroenterologia",
    "Infectologia",
    "Medicina de Família/SUS",
    "Urgência e Emergência",
    "Anestesiologia",
    "Psiquiatria",
    "Oftalmologia",
    "Otorrinolaringologia",
    "Dermatologia",
    "Reumatologia",
    "Endocrinologia",
    "Nefrologia",
    "Hematologia",
    "Oncologia",
    "Medicina do Trabalho",
    "Medicina Preventiva",
    "Patologia",
    "Anatomia",
    "Histologia",
    "Fisiologia",
    "Farmacologia",
]

def create_template(banca, year, num_questions=10):
    """Create a template JSON file."""
    template_data = []

    for i in range(1, num_questions + 1):
        q = TEMPLATE.copy()
        q["id"] = f"{banca.lower()}_{year}_{i:03d}"
        q["banca"] = banca
        q["year"] = year
        q["enunciado"] = f"[Questão {i} - Substitua com o texto da questão]"
        template_data.append(q)

    return template_data

def save_template(banca, year, num_questions=10):
    """Save template to file."""
    template_data = create_template(banca, year, num_questions)

    filename = f"{banca}_{year}_template.json"
    filepath = DATA_DIR / filename

    # Create output dir if doesn't exist
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(template_data, f, ensure_ascii=False, indent=2)

    return filepath

def list_subjects():
    """List available subjects."""
    print("\nSubjects disponíveis:")
    for i, subj in enumerate(SUBJECTS, 1):
        print(f"  {i:2}. {subj}")

if __name__ == "__main__":
    import sys

    print("=" * 60)
    print("MedQuest - Manual Question Adder")
    print("=" * 60)

    if len(sys.argv) > 1 and sys.argv[1] == "template":
        # Create template
        if len(sys.argv) < 4:
            print("\nUsage: python add_manual_questions.py template BANCA YEAR [NUM_QUESTIONS]")
            print("\nExamples:")
            print("  python add_manual_questions.py template ENARE_EBSERH 2024")
            print("  python add_manual_questions.py template FUVEST_FMUSP 2026 50")
            print("\nTemplates:")
            list_subjects()
            sys.exit(1)

        banca = sys.argv[2]
        year = int(sys.argv[3])
        num_questions = int(sys.argv[4]) if len(sys.argv) > 4 else 10

        filepath = save_template(banca, year, num_questions)
        print(f"\nTemplate created: {filepath}")
        print(f"\nSteps:")
        print(f"1. Open the file above in your text editor")
        print(f"2. Replace the placeholder questions with real ones from the PDF")
        print(f"3. Fill in: enunciado, alternatives, correctIndex, explanation")
        print(f"4. Change subject if needed")
        print(f"5. Save the file")
        print(f"6. Run: python consolidate_questions.py")
        print(f"7. Run: python load_questions_to_app.py")

    else:
        print("\nAvailable commands:")
        print("\n  python add_manual_questions.py template BANCA YEAR [NUM_QUESTIONS]")
        print("      Create a template JSON file to fill in")
        print("\nExamples:")
        print("  python add_manual_questions.py template ENARE_EBSERH 2024 100")
        print("  python add_manual_questions.py template FUVEST_FMUSP 2026 80")
        print("  python add_manual_questions.py template VUNESP_SUS_SP 2025 50")

        list_subjects()

        print("\nWorkflow:")
        print("1. Create template with command above")
        print("2. Edit template and add questions from PDF")
        print("3. Run: python consolidate_questions.py")
        print("4. Run: python load_questions_to_app.py")
