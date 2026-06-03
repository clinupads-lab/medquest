# Setup de Questões - MedQuest ✅

## O que foi feito

### ✅ Consolidação Inicial (201 Questões)

Extraí e consolidei **201 questões** de 2 bancas principais:

- **IAMSPE 2024**: 100 questões
  - 20 de Clínica Médica
  - 20 de Cirurgia Geral
  - 20 de Ginecologia & Obstetrícia
  - 20 de Pediatria
  - 20 de Medicina de Família/SUS

- **FUNDATEC AMRIGS 2023**: 101 questões
  - 93 de Clínica Médica
  - 4 de Urgência e Emergência
  - +4 de outras especialidades

### 📁 Arquivos Criados

```
data/processed/
├── all_questions.json          # Base de dados consolidada (201)
├── questions.ts                # Pronto para usar no App
├── iamspe_questions.json       # IAMSPE 2024
└── questions.json              # Dados convertidos
```

## Como Adicionar Mais Questões

### Opção 1: Método Rápido (Recomendado)

Para adicionar questões de um novo PDF/banca:

```bash
# 1. Criar template
python scripts/add_manual_questions.py template ENARE_EBSERH 2024 100

# 2. Editar o arquivo criado em data/raw/output/ENARE_EBSERH_2024_template.json
#    - Copie as questões do PDF
#    - Preecha enunciado, alternatives, correctIndex
#    - Salve o arquivo

# 3. Consolidar
python scripts/consolidate_questions.py

# 4. Gerar TypeScript para o App
python scripts/load_questions_to_app.py
```

### Opção 2: Automática (Para PDFs em Texto)

```bash
python scripts/extractors/extract_all_pdfs.py
python scripts/consolidate_questions.py
python scripts/load_questions_to_app.py
```

## Como Usar no App

### Importar as Questões

No seu `App.tsx` ou componente principal:

```typescript
import { ALL_QUESTIONS } from './data/processed/questions';

// Usar na sua app
const allQuestions = ALL_QUESTIONS;

// Filtrar por banca
const iamspeQuestions = allQuestions.filter(q => q.banca === 'IAMSPE');

// Filtrar por disciplina
const clinicaQuestions = allQuestions.filter(q => q.subject === 'Clínica Médica');

// Usar em um quiz
export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(ALL_QUESTIONS[0]);
  
  return (
    <Quiz question={currentQuestion} />
  );
}
```

## Próximas Etapas

### 1. Adicionar ENARE 2024 (~100+ questões)

```bash
# Extrair gabarito
python scripts/add_manual_questions.py template ENARE_EBSERH 2024 100

# Depois preencher manualmente
```

### 2. Adicionar FUVEST FMUSP 2026 (~400+ questões)

```bash
python scripts/add_manual_questions.py template FUVEST_FMUSP 2026 400
```

### 3. Adicionar INEP Revalida (~400 questões)

```bash
python scripts/add_manual_questions.py template INEP_REVALIDA 2024 100
```

### 4. Adicionar VUNESP SUS SP (~100 questões)

```bash
python scripts/add_manual_questions.py template VUNESP_SUS_SP 2025 100
```

## Scripts Úteis

```bash
# Listar todas as disciplinas disponíveis
python scripts/add_manual_questions.py

# Ver estatísticas das questões
python scripts/consolidate_questions.py

# Regenerar arquivo TypeScript
python scripts/load_questions_to_app.py

# Extrair de todos os PDFs (detecta automaticamente)
python scripts/extractors/extract_all_pdfs.py
```

## Estrutura das Questões

Cada questão segue este formato JSON:

```json
{
  "id": "iamspe_2024_001",
  "cycle": "Ciclo Clínico",
  "subject": "Clínica Médica",
  "subsubject": "",
  "banca": "IAMSPE",
  "year": 2024,
  "enunciado": "Um paciente de 28 anos...",
  "alternatives": [
    "Alternativa A",
    "Alternativa B",
    "Alternativa C",
    "Alternativa D",
    "Alternativa E"
  ],
  "correctIndex": 4,
  "explanation": "A resposta é E porque...",
  "difficulty": "medium"
}
```

## Dicas para Preencher Manualmente

1. **enunciado**: Cole o texto completo da questão
2. **alternatives**: Lista com as 5 opções de resposta
3. **correctIndex**: 
   - 0 = Resposta A
   - 1 = Resposta B
   - 2 = Resposta C
   - 3 = Resposta D
   - 4 = Resposta E
   - -1 = Desconhecido (para gabarito incompleto)
4. **subject**: Use uma das disciplinas disponíveis
5. **difficulty**: easy, medium ou hard
6. **explanation**: Opcional - a explicação da resposta correta

## Validação

Antes de usar no app, execute:

```bash
python scripts/consolidate_questions.py
```

Isto vai:
- ✅ Validar o JSON
- ✅ Consolidar de todas as fontes
- ✅ Mostrar estatísticas
- ✅ Avisar sobre erros

## Status dos PDFs

### ✅ Processados
- IAMSPE 2024 (100)
- FUNDATEC AMRIGS 2023 (101)

### 🔄 Para Processar (Template Pronto)
- ENARE EBSERH 2024
- FUVEST FMUSP 2026
- INEP Revalida
- VUNESP SUS SP
- E outros...

### ⏳ Futuros
- AREMG PSU MG
- CEPUERJ UERJ
- COMVEST Unicamp
- NC UFPR
- PCI Concursos
- CERMAM (100 questões em scripts/)

## Ajuda

```bash
# Ver ajuda
python scripts/add_manual_questions.py

# Criar template específico
python scripts/add_manual_questions.py template NOME_BANCA ANO QUANTIDADE
```

## Próximo Passo

**Escolha uma das opções:**

### A. Integrar no App Agora
```bash
# As 201 questões já estão prontas em data/processed/questions.ts
# Importe e use no seu App.tsx
```

### B. Adicionar Mais Questões Primeiro
```bash
# 1. Abra um PDF
# 2. Use o template para adicionar as questões:
python scripts/add_manual_questions.py template NOME_BANCA ANO QUANTIDADE

# 3. Edite o arquivo JSON criado
# 4. Execute consolidate_questions.py
# 5. Teste no App
```

---

**Feito por:** Automação de Consolidação de Questões  
**Data:** 2026-06-03  
**Total de Questões:** 201  
**Próxima Atualização:** Quando novos PDFs forem adicionados
