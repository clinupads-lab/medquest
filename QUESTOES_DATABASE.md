# Guia de Questões - MedQuest

## Status Atual

✅ **201 questões consolidadas** em `data/processed/all_questions.json`

### Distribuição por Banca:
- **IAMSPE 2024**: 100 questões
  - Clínica Médica (20)
  - Cirurgia Geral (20)
  - Ginecologia & Obstetrícia (20)
  - Pediatria (20)
  - Medicina de Família/SUS (20)

- **FUNDATEC AMRIGS 2023**: 101 questões
  - Clínica Médica (93)
  - Urgência e Emergência (4)
  - Pediatria (1)
  - Medicina de Família/SUS (1)
  - Anatomia (1)
  - Histologia (1)

## Como Usar no App

### 1. Carregar questões no App.tsx

```typescript
import { ALL_QUESTIONS } from './data/processed/questions';

// No seu App component
const questions = ALL_QUESTIONS;

// Ou integrar com seu estado/context
const [allQuestions, setAllQuestions] = useState(ALL_QUESTIONS);
```

### 2. Estrutura das Questões

Cada questão tem o seguinte formato:

```typescript
interface Question {
  id: string;                    // Identificador único: "iamspe_2024_001"
  cycle: string;                 // "Ciclo Clínico"
  subject: string;               // Ex: "Clínica Médica"
  subsubject: string;            // Especialidade específica
  banca: string;                 // "IAMSPE" ou "FUNDATEC_AMRIGS"
  year: number;                  // 2023, 2024
  enunciado: string;             // O texto da questão
  alternatives: string[];        // [A, B, C, D, E]
  correctIndex: number;          // Índice da resposta correta (0-4) ou -1 se desconhecido
  explanation: string;           // Gabarito/Explicação
  difficulty: "easy" | "medium" | "hard";
}
```

## Adicionar Novas Questões dos PDFs

### Método 1: Ferramenta Automática (Recomendado)

Para PDFs estruturados (com questões em texto):

```bash
python scripts/extractors/extract_all_pdfs.py
```

Depois consolidar:

```bash
python scripts/consolidate_questions.py
```

### Método 2: Formato Manual (Para PDFs Complexos)

1. Extraia as questões do PDF manualmente
2. Crie um arquivo JSON em `data/raw/output/BANCA_ANO.json`:

```json
[
  {
    "id": "cermam_2009_001",
    "cycle": "Ciclo Clínico",
    "subject": "Nefrologia",
    "subsubject": "",
    "banca": "CERMAM",
    "year": 2009,
    "enunciado": "Um homem de 63 anos portador de coronariopatia...",
    "alternatives": [
      "Hiperaldosteronismo primário.",
      "Glomerulonefrite rapidamente progressiva.",
      "Estenose bilateral de artéria renal.",
      "Nefrite intersticial.",
      "Nefropatia diabética."
    ],
    "correctIndex": 2,
    "explanation": "A resposta é C porque...",
    "difficulty": "medium"
  }
]
```

3. Execute o consolidador:

```bash
python scripts/consolidate_questions.py
```

4. Regenere o TypeScript:

```bash
python scripts/load_questions_to_app.py
```

## PDFs Disponíveis (Ainda Não Processados)

Os seguintes PDFs contêm questões e ainda não foram totalmente integrados:

### ENARE EBSERH
- `ENARE_EBSERH/ENARE 2024 Gabarito...` (possui gabarito, mas sem questões)
- Múltiplas provas de especialidades

### FUVEST FMUSP 2026
- `FUVEST_FMUSP/provao2026_chamada_*.pdf` (7 chamadas)
- `FUVEST_FMUSP/rm2026-prova-*` (múltiplas provas por especialidade)

### INEP Revalida
- `INEP_Revalida/20??_?_PV_objetiva_regular.pdf` (2023 e 2024)

### UFRJ
- `UFRJ/conhecimentos_compressed.pdf`

### VUNESP SUS SP
- `VUNESP_SUS_SP/vunesp-2025-ses-sp-residencia-medica-*.pdf`

### Outras Bancas
- AREMG PSU MG
- CEPUERJ UERJ
- COMVEST Unicamp
- NC UFPR
- PCI Concursos
- CERMAM (100 questões já extraídas em scripts)

## Próximos Passos

1. ✅ Consolidar IAMSPE e FUNDATEC (201 questões)
2. 🔄 Processar ENARE 2024 (em progresso)
3. 🔄 Processar FUVEST FMUSP 2026
4. 🔄 Processar INEP Revalida
5. ⏳ Processar VUNESP, UFRJ e outras bancas

## Scripts Disponíveis

```bash
# Extrair questões de todos os PDFs
python scripts/extractors/extract_all_pdfs.py

# Consolidar questões de várias fontes
python scripts/consolidate_questions.py

# Gerar código TypeScript para o App
python scripts/load_questions_to_app.py

# Extrair IAMSPE (já implementado)
python scripts/extractors/extract_iamspe.py

# Extrair CERMAM (já implementado)
python scripts/extractors/inject_cermam.py
```

## Estrutura de Arquivos

```
data/
├── processed/
│   ├── all_questions.json       # Todas as questões consolidadas (201)
│   ├── questions.ts             # TypeScript exportável para o App
│   ├── iamspe_questions.json    # Questões IAMSPE 2024 (100)
│   └── metadata.json            # Metadados do app
└── raw/
    ├── output/
    │   ├── questions.json       # Questões de várias fontes
    │   └── fundatec_2023.json   # Questões FUNDATEC (101)
    └── pdfs/
        ├── IAMSPE_2024/
        ├── FUNDATEC_AMRIGS/
        ├── ENARE_EBSERH/
        ├── FUVEST_FMUSP/
        ├── INEP_Revalida/
        ├── UFRJ/
        ├── UPENET_SES_PE/
        └── VUNESP_SUS_SP/
```

## Como Integrar com o App Component

### Exemplo de Integração Simples:

```typescript
// src/App.tsx
import { ALL_QUESTIONS } from '../data/processed/questions';

export default function App() {
  const [questions] = useState(ALL_QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questions[currentIndex];

  return (
    <div className="app">
      {/* Seu componente de quiz */}
      <Question
        question={currentQuestion}
        onAnswer={(answer) => {
          // Processar resposta
          setCurrentIndex(currentIndex + 1);
        }}
      />
    </div>
  );
}
```

### Exemplo com Filtros:

```typescript
// Filtrar por banca
const iamspeQuestions = ALL_QUESTIONS.filter(q => q.banca === 'IAMSPE');

// Filtrar por disciplina
const clinicaQuestions = ALL_QUESTIONS.filter(q => q.subject === 'Clínica Médica');

// Filtrar por ano
const recentQuestions = ALL_QUESTIONS.filter(q => q.year >= 2023);

// Combinado
const medicalClinics2024 = ALL_QUESTIONS.filter(
  q => q.subject === 'Clínica Médica' && q.year === 2024
);
```

## Dúvidas ou Melhorias?

Para adicionar mais questões, melhorar os extractors ou integrar novos PDFs:

1. Coloque os PDFs em `data/raw/pdfs/NOME_BANCA/`
2. Execute os scripts de extração
3. Adicione manualmente se necessário
4. Atualize este guia com as estatísticas finais
