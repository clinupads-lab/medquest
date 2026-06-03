# MedQuest Project Structure

## Overview

MedQuest is a React-based study platform for Brazilian medical residency entrance exams.

## Directory Layout

```
medquest/
├── src/                      # React application source code
│   ├── App.tsx              # Main app component with questions data
│   ├── main.tsx             # React entry point
│   └── index.css             # Global styles
│
├── public/                   # Static assets served directly
│   ├── logo-icon.svg
│   ├── stickers_sheet.png
│   └── ...
│
├── scripts/                  # Python data extraction & processing
│   ├── extractors/          # Scripts to extract questions from PDFs
│   │   ├── extract_iamspe.py
│   │   ├── inject_cermam.py
│   │   └── cermam_data.py
│   ├── utils/               # Utility scripts
│   │   ├── scraper.py
│   │   ├── clean_and_inject.py
│   │   ├── add_banca.py
│   │   ├── fix_dup.py
│   │   ├── reclassify.py
│   │   ├── count_subjects.py
│   │   └── scraper.log
│   ├── requirements.txt      # Python dependencies
│   └── README.md            # Scripts documentation
│
├── data/                     # Question data and metadata
│   ├── raw/                 # Unprocessed source data
│   │   ├── pdfs/            # Downloaded exam PDFs
│   │   ├── output/          # Scraper output
│   │   ├── iamspe_raw.txt
│   │   └── iamspe_col.txt
│   ├── processed/           # Processed, cleaned data
│   │   ├── iamspe_questions.json
│   │   ├── iamspe_questions.ts
│   │   └── metadata.json
│   └── README.md            # Data documentation
│
├── assets/                   # Images and media
│   ├── *.png               # Screenshots and diagrams
│   └── README.md
│
├── docs/                     # Project documentation
│   ├── PROJECT_STRUCTURE.md (this file)
│   └── ...
│
├── dist/                     # Build output (generated, git-ignored)
├── node_modules/            # Dependencies (git-ignored)
├── __pycache__/            # Python cache (git-ignored)
│
├── Configuration Files:
├── package.json             # Node.js dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts          # Vite bundler config
├── tailwind.config.ts      # Tailwind CSS config
├── index.html              # HTML entry point
├── .gitignore              # Git ignore rules
├── .env.example            # Environment variables template
└── README.md               # Main project README
```

## Key Components

### Frontend (React/TypeScript)
- **App.tsx**: Main component containing:
  - Hardcoded questions data embedded as TypeScript objects
  - UI for study trails, cycles, subjects
  - Quiz functionality
  - Progress tracking

### Data Pipeline
1. **Extract**: Python scripts extract questions from PDFs
2. **Process**: Clean and standardize question format
3. **Embed**: Questions injected into App.tsx
4. **Display**: React app renders questions to user

### Data Sources
- **IAMSPE 2024**: ~100 questions across 5 medical specialties
- **CERMAM AM 2009**: Additional questions
- **FUNDATEC AMRIGS 2023**: (referenced in config)
- **UPENET SES-PE**: (referenced in config)

## Development Workflow

### Running the App
```bash
npm install
npm run dev      # Start dev server on port 3000
```

### Building
```bash
npm run build    # Create optimized production build
npm run preview  # Preview production build locally
```

### Extracting Questions
```bash
cd scripts
pip install -r requirements.txt

# Extract IAMSPE questions
python extractors/extract_iamspe.py

# Inject into App.tsx
python utils/clean_and_inject.py
python utils/add_banca.py
python utils/reclassify.py
```

## Architecture Decisions

### Embedded Questions
Questions are embedded directly in App.tsx rather than using a backend API because:
- Simplified architecture (no server needed)
- Faster load times
- Easier to deploy as static site
- Questions are static (don't change frequently)

### File Organization
- **scripts/** contains all data processing tools
- **data/** separates raw and processed files
- **src/** contains only React code
- **assets/** contains documentation and media

### Technology Stack
- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS with Vite plugin
- **Build**: Vite (fast, modern)
- **Data Processing**: Python scripts
- **Icons**: Lucide React
- **Charts**: Recharts (optional)

## Future Improvements

- [ ] Backend API for questions and progress
- [ ] User authentication and accounts
- [ ] Question explanations
- [ ] Multiple exam sources integrated
- [ ] Mobile app version
- [ ] Analytics and performance tracking
