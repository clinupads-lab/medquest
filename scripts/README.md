# Scripts - Data Extraction & Utilities

This directory contains Python scripts for extracting medical exam questions from PDFs and processing them for use in the MedQuest app.

## Structure

- **extractors/** - Scripts for extracting questions from PDF sources
- **utils/** - Utility scripts for data cleaning and processing
- **requirements.txt** - Python dependencies

## Setup

```bash
pip install -r requirements.txt
```

## Extractors

### extract_iamspe.py
Extracts questions from IAMSPE 2024 PDF exam paper.
- Handles both single-column and two-column text layouts
- Outputs to `../data/processed/iamspe_questions.json` and `iamspe_questions.ts`

**Usage:**
```bash
python extractors/extract_iamspe.py
```

### cermam_data.py
Contains hardcoded CERMAM AM 2009 question data.

### inject_cermam.py
Injects CERMAM questions into `src/App.tsx`.

**Usage:**
```bash
python extractors/inject_cermam.py
```

## Utilities

### scraper.py
General web scraper for downloading PDFs from various medical exam banks.
- Outputs PDFs to `../data/raw/pdfs/`
- Processes questions to `../data/raw/output/`

**Usage:**
```bash
python utils/scraper.py
```

### clean_and_inject.py
Cleans extracted question text and injects into App.tsx.

**Usage:**
```bash
python utils/clean_and_inject.py
```

### add_banca.py
Adds banca (exam source) field to questions.

**Usage:**
```bash
python utils/add_banca.py
```

### fix_dup.py
Removes duplicate questions from App.tsx.

**Usage:**
```bash
python utils/fix_dup.py
```

### reclassify.py
Reclassifies questions to correct medical specialties.

**Usage:**
```bash
python utils/reclassify.py
```

### count_subjects.py
Counts questions by subject from App.tsx.

**Usage:**
```bash
python utils/count_subjects.py
```

## Data Flow

```
PDFs → extract_iamspe.py → data/processed/iamspe_questions.json
                          ↓
                    clean_and_inject.py → src/App.tsx
                          ↓
                    add_banca.py
                          ↓
                    reclassify.py
```
