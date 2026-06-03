# Como Usar as Questões Organizadas por Banca

## 📁 Estrutura Criada

```
data/processed/
├── iamspe_questions.ts          # IAMSPE 2024 (100 questões)
├── fundatecamrigs_questions.ts  # FUNDATEC AMRIGS 2023 (101 questões)
├── index_by_banca.ts            # Índice para importar tudo
├── QUESTOES_POR_BANCA.md        # Resumo das bancas
└── all_questions.json           # Banco de dados em JSON
```

## 🎯 IAMSPE 2024 - 100 Questões

### Disciplinas:
- **Cirurgia Geral**: 20 questões
- **Clínica Médica**: 20 questões
- **Ginecologia & Obstetrícia**: 20 questões
- **Medicina de Família/SUS**: 20 questões
- **Pediatria**: 20 questões

### Como Usar no App:

```typescript
import { IAMSPE_QUESTIONS } from './data/processed/iamspe_questions';

// Acessar todas as questões de Cirurgia Geral
const cirurgiaGeral = IAMSPE_QUESTIONS.CIRURGIA_GERAL;

// Acessar Clínica Médica
const clinicaMedica = IAMSPE_QUESTIONS.CLINICA_MEDICA;

// Acessar Pediatria
const pediatria = IAMSPE_QUESTIONS.PEDIATRIA;

// Acessar Ginecologia & Obstetrícia
const ginecologia = IAMSPE_QUESTIONS.GINECOLOGIA_E_OBSTETRICIA;

// Acessar Medicina de Família/SUS
const medicinaFamilia = IAMSPE_QUESTIONS.MEDICINA_DE_FAMILIA_SUS;

// Usar em um quiz
export function QuizIAMSPE() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState('CLINICA_MEDICA');

  const questions = IAMSPE_QUESTIONS[selectedSubject];
  const question = questions[currentQuestion];

  return (
    <div>
      <h2>IAMSPE 2024 - {selectedSubject}</h2>
      <Question question={question} />
    </div>
  );
}
```

---

## 🎯 FUNDATEC AMRIGS 2023 - 101 Questões

### Disciplinas:
- **Clínica Médica**: 93 questões
- **Urgência e Emergência**: 4 questões
- **Pediatria**: 1 questão
- **Medicina de Família/SUS**: 1 questão
- **Anatomia**: 1 questão
- **Histologia**: 1 questão

### Como Usar no App:

```typescript
import { FUNDATECAMRIGS_QUESTIONS } from './data/processed/fundatecamrigs_questions';

// Acessar Clínica Médica (maioria das questões)
const clinicaMedica = FUNDATECAMRIGS_QUESTIONS.CLINICA_MEDICA;

// Acessar Urgência e Emergência
const urgencia = FUNDATECAMRIGS_QUESTIONS.URGENCIA_E_EMERGENCIA;

// Usar em um quiz
export function QuizFUNDATEC() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const clinicaQuestions = FUNDATECAMRIGS_QUESTIONS.CLINICA_MEDICA;
  const question = clinicaQuestions[currentQuestion];

  return (
    <div>
      <h2>FUNDATEC AMRIGS 2023 - Clínica Médica</h2>
      <Question question={question} />
    </div>
  );
}
```

---

## 📦 Importar Tudo de Uma Vez

```typescript
import { IAMSPE_QUESTIONS, FUNDATECAMRIGS_QUESTIONS } from './data/processed/index_by_banca';

// Combinar todas as questões
const todasAsQuestoes = {
  iamspe: IAMSPE_QUESTIONS,
  fundatec: FUNDATECAMRIGS_QUESTIONS
};

// Acessar qualquer uma
const clinicaIAMSPE = todasAsQuestoes.iamspe.CLINICA_MEDICA;
const clinicaFUNDATEC = todasAsQuestoes.fundatec.CLINICA_MEDICA;
```

---

## 🔧 Estrutura de Uma Questão

```typescript
interface Question {
  id: string;                 // Ex: "iamspe_2024_001"
  cycle: string;              // "Ciclo Clínico"
  subject: string;            // "Clínica Médica"
  subSubject: string;         // Especialidade específica (pode estar vazio)
  banca: string;              // "IAMSPE" ou "FUNDATEC_AMRIGS"
  year: number;               // 2024 ou 2023
  text: string;               // Texto completo da questão
  options: string[];          // [A, B, C, D, E]
  correctIndex: number;       // 0-4 (índice da resposta correta)
  explanation: string;        // Explicação da resposta
}
```

---

## 💡 Exemplos de Uso

### 1. Quiz por Disciplina

```typescript
export function QuizPorDisciplina({ banca, disciplina }) {
  const questions = 
    banca === 'iamspe' 
      ? IAMSPE_QUESTIONS[disciplina]
      : FUNDATECAMRIGS_QUESTIONS[disciplina];

  const [index, setIndex] = useState(0);
  const question = questions[index];

  return (
    <div className="quiz">
      <h3>{banca.toUpperCase()} - {disciplina}</h3>
      <QuestionCard question={question} />
      <Navigation 
        current={index + 1} 
        total={questions.length}
      />
    </div>
  );
}
```

### 2. Quiz Misto (Todas as Bancas)

```typescript
export function QuizMisto() {
  const [bancaSelecionada, setBancaSelecionada] = useState('iamspe');
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState('CLINICA_MEDICA');

  const bancas = {
    iamspe: IAMSPE_QUESTIONS,
    fundatec: FUNDATECAMRIGS_QUESTIONS
  };

  const questions = bancas[bancaSelecionada][disciplinaSelecionada];

  return (
    <div>
      <BancaSelector onSelect={setBancaSelecionada} />
      <DisciplinaSelector 
        banca={bancaSelecionada}
        onSelect={setDisciplinaSelecionada} 
      />
      <QuestionDisplay questions={questions} />
    </div>
  );
}
```

### 3. Sistema de Trilhas (Por Banca)

```typescript
export function TrilhaIAMSPE() {
  const disciplinas = [
    { nome: 'Clínica Médica', questions: IAMSPE_QUESTIONS.CLINICA_MEDICA },
    { nome: 'Cirurgia Geral', questions: IAMSPE_QUESTIONS.CIRURGIA_GERAL },
    { nome: 'Pediatria', questions: IAMSPE_QUESTIONS.PEDIATRIA },
    { nome: 'Ginecologia & Obstetrícia', questions: IAMSPE_QUESTIONS.GINECOLOGIA_E_OBSTETRICIA },
    { nome: 'Medicina de Família/SUS', questions: IAMSPE_QUESTIONS.MEDICINA_DE_FAMILIA_SUS },
  ];

  return (
    <div className="trilha">
      <h2>Trilha IAMSPE 2024</h2>
      {disciplinas.map((disciplina) => (
        <DisciplinaCard 
          key={disciplina.nome}
          nome={disciplina.nome}
          questoes={disciplina.questions.length}
        />
      ))}
    </div>
  );
}
```

---

## ✨ Vantagens da Organização por Banca

✅ **Sem Mistura**: Cada banca tem suas questões separadas
✅ **Por Disciplina**: Fácil filtrar por matéria
✅ **TypeScript**: Autocomplete e type-safety
✅ **Escalável**: Fácil adicionar novas bancas
✅ **Navegação**: Saber quantas questões em cada disciplina

---

## 📊 Resumo

| Banca | Total | Clínica Médica | Cirurgia | Pediatria | Ginecologia | Medicina Família | Urgência | Outras |
|-------|-------|---|---|---|---|---|---|---|
| **IAMSPE 2024** | 100 | 20 | 20 | 20 | 20 | 20 | - | - |
| **FUNDATEC 2023** | 101 | 93 | - | 1 | - | 1 | 4 | 2 |
| **TOTAL** | **201** | **113** | **20** | **21** | **20** | **21** | **4** | **2** |

---

## 🚀 Próximos Passos

1. **Importe no seu App.tsx**:
```typescript
import { IAMSPE_QUESTIONS, FUNDATECAMRIGS_QUESTIONS } from './data/processed/index_by_banca';
```

2. **Crie componentes de quiz** que usem essas questões

3. **Adicione novas bancas** quando tiver mais PDFs processados

4. **Configure sua UI** para navegar por banca e disciplina

---

## 📝 Notas

- IAMSPE 2024: Distribuição uniforme (20 questões por disciplina)
- FUNDATEC 2023: Foco em Clínica Médica (93 de 101 questões)
- Todas têm gabarito parcial (alguns correctIndex = -1)
- Pronto para usar em modo offline

---

**Status**: ✅ Pronto para uso no App!
