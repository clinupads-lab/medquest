/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Normalização do banco de questões, aplicada uma única vez ao montar QUESTIONS.
 * Fica fora do App.tsx para poder ser testada isoladamente (o App importa
 * Firebase e não roda fora do navegador).
 */

import GENERATED_EXPLANATIONS from './explanations.json';

/** Forma mínima de uma questão — evita depender do tipo completo do App. */
export interface NormalizableQuestion {
  id: string;
  text?: string;
  subject?: string;
  cycle?: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

// ── 0. Matéria e ciclo canônicos ──────────────────────────────────────────
// Os bancos foram importados de fontes diferentes e a mesma matéria aparece
// escrita de várias formas ("Clinica Medica" sem acento, "Ginecologia e
// Obstetrícia" em vez de "Ginecologia & Obstetrícia", "Cirurgia" em vez de
// "Cirurgia Geral"). Como os arrays entram no app com `as Question[]`, o
// TypeScript não barrava nada — e essas questões acabavam sem ícone, fora dos
// filtros por matéria e fora do cálculo de domínio.
const SUBJECT_ALIASES: Record<string, string> = {
  // acentuação / grafia
  'clinica medica': 'Clínica Médica',
  'clínica médica humana': 'Clínica Médica',
  'clinica cirurgica': 'Clínica Cirúrgica',
  // ginecologia e obstetrícia e suas partes
  'ginecologia e obstetrícia': 'Ginecologia & Obstetrícia',
  'ginecologia': 'Ginecologia & Obstetrícia',
  'obstetrícia': 'Ginecologia & Obstetrícia',
  'mastologia': 'Ginecologia & Obstetrícia',
  // cirurgias sem bucket próprio
  'cirurgia': 'Cirurgia Geral',
  'cirurgia torácica': 'Cirurgia Geral',
  'cirurgia pediátrica': 'Cirurgia Geral',
  'cirurgia plástica': 'Cirurgia Geral',
  'angiologia': 'Cirurgia Vascular',
  // emergência
  'medicina de emergência': 'Urgência e Emergência',
  // saúde pública, ética e legislação → bucket de SUS do app
  'saúde coletiva': 'Medicina de Família/SUS',
  'medicina de família': 'Medicina de Família/SUS',
  'medicina de família e comunidade': 'Medicina de Família/SUS',
  'médico da família': 'Medicina de Família/SUS',
  'medicina preventiva': 'Medicina de Família/SUS',
  'políticas públicas, planejamento e gestão em saúde pública': 'Medicina de Família/SUS',
  'direito sanitário': 'Medicina de Família/SUS',
  'ética médica': 'Medicina de Família/SUS',
  'bioética': 'Medicina de Família/SUS',
  'medicina legal': 'Medicina de Família/SUS',
  'medicina do trabalho': 'Medicina de Família/SUS',
  'epidemiologia e saúde coletiva': 'Epidemiologia',
  // nomes longos de banca
  'doenças infecto-parasitárias': 'Infectologia',
  'doenças reumatológicas e do sistema imunológico': 'Reumatologia',
  'cardiologia e alterações vasculares': 'Cardiologia',
  'pediatria e neonatologia': 'Pediatria',
  'oncologia': 'Clínica Médica',
};

export function canonicalSubject(subject?: string): string | undefined {
  if (!subject) return subject;
  const full = subject.trim();
  // Primeiro tenta a string inteira — há nomes de matéria que contêm vírgula
  // ("Políticas Públicas, Planejamento e Gestão em Saúde Pública").
  const exact = SUBJECT_ALIASES[full.toLowerCase()];
  if (exact) return exact;
  // Senão, algumas bancas listam várias matérias numa string ("Neurologia,
  // Genética"): a primeira é a principal.
  const primary = full.split(',')[0].trim();
  return SUBJECT_ALIASES[primary.toLowerCase()] ?? primary;
}

export function canonicalCycle(cycle?: string): string | undefined {
  if (!cycle) return cycle;
  const c = cycle.trim().toLowerCase();
  if (c === 'ciclo clinico' || c === 'ciclo clínico') return 'Ciclo Clínico';
  if (c === 'ciclo basico' || c === 'ciclo básico') return 'Ciclo Básico';
  if (c === 'internato') return 'Internato';
  return cycle;
}

// ── Limpeza tipográfica ───────────────────────────────────────────────────
// Sobras da extração de PDF: espaço duplo, espaço antes de pontuação, espaço
// sem quebra (NBSP), sobras nas pontas.
function cleanText(v: string): string {
  return v
    .replace(/ /g, ' ')          // NBSP → espaço normal
    .replace(/[ \t]{2,}/g, ' ')       // espaços repetidos
    .replace(/\s+([,;:!?])/g, '$1')   // "palavra ," → "palavra,"
    .replace(/\s+\.(?!\.)/g, '.')     // "palavra ." → "palavra." (poupa "....")
    .trim();
}

// ── 1. Prefixos de letra duplicados ───────────────────────────────────────
// Muitas questões trazem a letra no próprio texto ("A. ser sedentário"), mas a
// UI já mostra a letra no chip ao lado. Só limpamos quando a questão inteira
// segue o padrão sequencial (A, B, C...), para não quebrar textos legítimos que
// começam com letra e ponto — como o nome de espécie "A. lumbricoides".
const OPTION_PREFIX_RE = /^\s*\(?([A-Ea-e])[.)\]:\-–]\s*/;

export function stripOptionPrefixes<T extends NormalizableQuestion>(q: T): T {
  const prefixLens = q.options.map((opt, idx) => {
    const m = opt.match(OPTION_PREFIX_RE);
    return m && m[1].toUpperCase() === String.fromCharCode(65 + idx) ? m[0].length : 0;
  });
  const prefixed = prefixLens.filter(len => len > 0).length;
  if (prefixed < Math.max(2, q.options.length - 1)) return q;
  return { ...q, options: q.options.map((opt, idx) => (prefixLens[idx] ? opt.slice(prefixLens[idx]) : opt)) };
}

// ── 2. Explicações geradas ────────────────────────────────────────────────
// Ver scripts/gen_explanations.mjs. A explicação original sempre tem prioridade.
export function withExplanation<T extends NormalizableQuestion>(q: T): T {
  if (q.explanation && q.explanation.trim() !== '') return q;
  const gen = (GENERATED_EXPLANATIONS as Record<string, string>)[q.id];
  return gen ? { ...q, explanation: gen } : q;
}

// ── 3. Embaralhamento das alternativas ────────────────────────────────────
// Vários bancos foram importados com o gabarito sempre na letra A (os arquivos
// escritos à mão são 100% A), o que entrega a resposta e vicia o estudo.
// Reordenamos as alternativas e movemos o correctIndex junto.
//
// O sorteio é DETERMINÍSTICO (semeado pelo id da questão): a mesma questão cai
// sempre na mesma ordem, então o caderno de erros, a revisão da sessão e o
// histórico continuam apontando para a alternativa certa entre recarregamentos.

// Alternativas que dependem da POSIÇÃO das outras ("Todas as anteriores",
// "Nenhuma das alternativas", "Apenas I e II"). Embaralhar quebraria o sentido,
// então questões que contêm qualquer uma delas ficam como estão.
const ANCHORED_OPTION_RE = new RegExp(
  '^\\s*(?:' +
    // "Todas as alternativas...", "Nenhuma das assertivas...", "Todas estão corretas"
    '(?:todas|nenhuma)\\s+(?:as|das)\\s+(?:alternativas|assertivas|anteriores|afirmativas|afirma[çc][õo]es|op[çc][õo]es|acima)' +
    '|(?:todas|nenhuma|nda)\\s+(?:est[ãa]o|est[áa])\\s+(?:correta|corretas|incorreta|incorretas)' +
    '|n\\.?\\s?d\\.?\\s?a\\.?\\b' +
    // "Apenas I e II", "II, III e IV" — dependem da numeração do enunciado
    '|(?:apenas|somente)\\s+[IVX]+(?:\\s*(?:,|e)\\s*[IVX]+)*\\s*\\.?\\s*$' +
    '|[IVX]+(?:\\s*(?:,|e)\\s*[IVX]+)+\\s*\\.?\\s*$' +
  ')',
  'i',
);

// Explicação que cita a letra ("a alternativa C está errada"): reordenar
// tornaria o comentário mentiroso.
const EXPLANATION_CITES_LETTER_RE = /\b(alternativa|letra|op[çc][ãa]o|item)\s+[a-e]\b/i;

/** PRNG determinístico (mulberry32) semeado por string. */
function seededRandom(seed: string): () => number {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let a = h >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffleOptions<T extends NormalizableQuestion>(q: T): T {
  if (q.options.length < 2) return q;
  if (q.options.some(o => ANCHORED_OPTION_RE.test(o))) return q;
  if (q.explanation && EXPLANATION_CITES_LETTER_RE.test(q.explanation)) return q;

  const rand = seededRandom(q.id);
  const order = q.options.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const newCorrect = order.indexOf(q.correctIndex);
  if (newCorrect < 0) return q; // correctIndex inválido: não mexe
  return { ...q, options: order.map(i => q.options[i]), correctIndex: newCorrect };
}

// ── 4. Filtro de qualidade ────────────────────────────────────────────────
// Barra questões que o usuário não teria como responder. Sem isso elas chegam
// ao quiz, e ele erra e perde uma vida sem ter feito nada de errado.
//
// Casos reais encontrados no banco:
//   · questões ANULADAS pela banca, importadas como placeholder
//     ("Alternativa A;", "Alternativa B;") e correctIndex -1;
//   · extração de PDF que truncou e duplicou alternativas (ufrj_2024_028);
//   · alternativa em branco.
const PLACEHOLDER_OPTION_RE = /^\s*alternativa\s+[a-e]\s*;?\s*$/i;

export function isUsableQuestion(q: NormalizableQuestion): boolean {
  if (!q.options || q.options.length < 2) return false;
  // gabarito precisa apontar para uma alternativa existente
  if (q.correctIndex < 0 || q.correctIndex >= q.options.length) return false;
  // nenhuma alternativa vazia
  if (q.options.some(o => !String(o).trim())) return false;
  // nada de placeholder de questão anulada
  if (q.options.some(o => PLACEHOLDER_OPTION_RE.test(String(o)))) return false;
  // alternativas repetidas: não dá para escolher entre duas idênticas
  const unicas = new Set(q.options.map(o => String(o).trim().toLowerCase()));
  if (unicas.size !== q.options.length) return false;
  return true;
}

// ── 5. Deduplicação ───────────────────────────────────────────────────────
// O banco foi montado a partir de dezenas de arquivos de prova/gerados
// separadamente, e um número relevante de questões saiu duplicada — mesmo
// texto, IDs diferentes (inclusive um bug de geração que repetiu a mesma
// pergunta várias vezes sob IDs diferentes em "Medicina de Família/SUS").
// Sem isso, o sorteio de uma sessão pode escolher duas "questões diferentes"
// que são, na prática, a mesma pergunta reescrita — o shuffle não tem como
// saber que dois objetos com texto idêntico são "a mesma" questão.
//
// Deduplicamos por MATÉRIA, não pelo banco inteiro: uma sessão só sorteia
// dentro de uma matéria, então esse é o escopo que importa; a mesma pergunta
// duplicada em duas matérias diferentes (miscategorização) não crava
// repetição dentro de uma sessão e fica de fora deste filtro de propósito.
// Mantém sempre a PRIMEIRA ocorrência de cada texto.
export function dedupeQuestions<T extends NormalizableQuestion>(qs: T[]): T[] {
  const seenBySubject = new Map<string, Set<string>>();
  return qs.filter(q => {
    const subjectKey = q.subject ?? '';
    const textKey = (q.text ?? '').toLowerCase().replace(/\s+/g, ' ').trim();
    let seen = seenBySubject.get(subjectKey);
    if (!seen) { seen = new Set(); seenBySubject.set(subjectKey, seen); }
    if (seen.has(textKey)) return false;
    seen.add(textKey);
    return true;
  });
}

/** Padroniza matéria, ciclo e tipografia. */
function cleanFields<T extends NormalizableQuestion>(q: T): T {
  return {
    ...q,
    ...(q.text ? { text: cleanText(q.text) } : {}),
    ...(q.explanation ? { explanation: cleanText(q.explanation) } : {}),
    ...(q.subject ? { subject: canonicalSubject(q.subject) } : {}),
    ...(q.cycle ? { cycle: canonicalCycle(q.cycle) } : {}),
    options: q.options.map(o => cleanText(String(o))),
  };
}

/**
 * Pipeline completo, aplicado uma vez ao montar o banco:
 * padroniza campos → tira prefixos de letra → preenche explicação → embaralha.
 */
export function normalizeQuestion<T extends NormalizableQuestion>(q: T): T {
  return shuffleOptions(withExplanation(stripOptionPrefixes(cleanFields(q))));
}
