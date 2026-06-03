# MedQuest - Medical Residency Exam Study Platform

A React-based study platform for Brazilian medical residency entrance exams. Features organized study trails across medical specialties with interactive quizzes.

## Features

- 📚 Structured study trails organized by medical cycles and subjects
- 🧠 Interactive quiz functionality with multiple choice questions
- 📊 Progress tracking across different medical specialties
- 🎯 Questions from multiple exam sources (IAMSPE, CERMAM, etc.)
- 🚀 Fast, responsive UI built with React and Tailwind CSS

## Project Structure

See [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md) for detailed information about the project layout.

Quick overview:
- **src/** - React application code
- **data/** - Medical exam questions and metadata
- **scripts/** - Python tools for extracting and processing questions
- **assets/** - Images and media files

## Quick Start

### Prerequisites
- Node.js (v16+)
- Python 3.7+ (only if extracting questions)

### Running the App

```bash
# Install Node dependencies
npm install

# Start development server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit http://localhost:3000 to access the app.

### Processing Exam Questions

To extract questions from PDFs and integrate them into the app:

```bash
# Install Python dependencies
pip install -r scripts/requirements.txt

# Extract questions from IAMSPE PDF
python scripts/extractors/extract_iamspe.py

# Clean and inject into App.tsx
python scripts/utils/clean_and_inject.py
python scripts/utils/add_banca.py
python scripts/utils/reclassify.py
```

See [scripts/README.md](scripts/README.md) for detailed script documentation.

## Data Management

Questions are organized in `data/` folder:
- **raw/** - Original PDFs and extracted text
- **processed/** - Cleaned JSON and TypeScript formatted questions

See [data/README.md](data/README.md) for more details.

## Environment Variables

Create a `.env.local` file (copy from `.env.example`):

```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

## Development

### Tech Stack
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS with Vite integration
- **Build Tool**: Vite 6
- **Data Processing**: Python scripts
- **Icons**: Lucide React
- **Charts**: Recharts

### Code Quality
```bash
# Type checking
npm run lint
```

### Building for Production
```bash
npm run build
# Output is in dist/
```

## Deployment

The app is a static React site that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply deploy the `dist/` folder after running `npm run build`.

## Contributing

When adding new exam sources or questions:

1. Place PDF in `data/raw/pdfs/`
2. Create extraction script in `scripts/extractors/`
3. Process questions through the pipeline (extract → clean → inject)
4. Update question metadata in `data/processed/`
5. Test in the app before committing

## Documentation

- [Project Structure](docs/PROJECT_STRUCTURE.md) - Detailed directory layout
- [Scripts Guide](scripts/README.md) - How to run data extraction scripts
- [Data Format](data/README.md) - Question data structure and sources

## License

[Add your license here]

## Contact

For questions or issues, please contact the development team.
