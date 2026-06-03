# Data - Medical Exam Questions

This directory contains data files related to medical residency exam questions.

## Structure

### raw/
Contains raw, unprocessed data files:
- **pdfs/** - PDF exam papers downloaded from various sources
- **output/** - Output from scraper processing
- **iamspe_col.txt** - Column-extracted text from IAMSPE PDF
- **iamspe_raw.txt** - Raw extracted text from IAMSPE PDF

### processed/
Contains processed, cleaned data ready for the app:
- **iamspe_questions.json** - Extracted IAMSPE questions in JSON format
- **iamspe_questions.ts** - IAMSPE questions formatted as TypeScript code
- **metadata.json** - Question metadata and statistics

## Data Sources

### IAMSPE 2024
- **Source**: IAMSPE (Instituto de Assistência Médica de São Paulo)
- **Year**: 2024
- **Specialties**: Internal Medicine, General Surgery, OB/GYN, Pediatrics, Family Medicine
- **Questions**: ~100

### CERMAM AM 2009
- **Source**: CERMAM (Centro de Residência Médica - Amazonas)
- **Year**: 2009
- **Specialty**: Internal Medicine variants
- **Questions**: Variable count

## Processing Pipeline

1. **Extraction**: Raw PDFs → Extract text → raw/ folder
2. **Parsing**: Parse structured questions from extracted text
3. **Cleaning**: Remove artifacts, standardize formatting
4. **Storage**: Process and store in processed/ folder
5. **Integration**: Inject into src/App.tsx for the app

## Format

Questions follow this JSON structure:
```json
{
  "id": "iamspe_2024_001",
  "num": 1,
  "cycle": "Ciclo Clínico",
  "subject": "Pneumologia",
  "banca": "IAMSPE",
  "text": "Question text here...",
  "options": [
    "Option A",
    "Option B",
    "Option C",
    "Option D",
    "Option E"
  ],
  "correctIndex": 0
}
```

## Notes

- Raw PDFs are gitignored due to their large size
- Processed JSON files are kept for reference but are embedded in App.tsx
- Questions are filtered by subject and cycle in the UI
