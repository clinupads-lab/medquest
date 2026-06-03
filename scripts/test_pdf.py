#!/usr/bin/env python3
import pdfplumber
from pathlib import Path

pdf_path = Path(r"C:\Users\Andrew Aguiar\Downloads\medquest_-residência-médica (1)\data\raw\pdfs\FUNDATEC_AMRIGS\Prova-2023.pdf")

if pdf_path.exists():
    with pdfplumber.open(pdf_path) as pdf:
        print(f"Total pages: {len(pdf.pages)}")
        print(f"\nFirst 500 chars of page 1:")
        print(pdf.pages[0].extract_text()[:500])
else:
    print(f"File not found: {pdf_path}")
