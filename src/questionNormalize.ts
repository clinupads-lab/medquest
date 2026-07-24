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
  // tag solta que deixava 1 questão órfã numa "matéria" própria
  'traumatologia-ortopedia': 'Ortopedia',
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
// texto, IDs diferentes. Casos reais encontrados:
//   · um bug de geração que repetiu a mesma pergunta sob IDs diferentes;
//   · o exame CERMAM importado DUAS VEZES no App.tsx (prefixos cermam25_* e
//     cermam_2026_*): 87 questões idênticas com IDs distintos. Como o shuffle
//     é semeado pelo ID, cada cópia embaralha as alternativas de um jeito, então
//     na sessão a mesma pergunta aparecia "com a ordem das alternativas trocada".
// Sem dedup, o sorteio de uma sessão pode escolher duas "questões diferentes"
// que são, na prática, a mesma pergunta.
//
// A CHAVE é o texto do enunciado normalizado de forma AGRESSIVA: minúsculas,
// sem acentos e sem pontuação. A chave antiga (só minúsculas + espaços) deixava
// passar pares que diferiam só por um acento ou um espaço antes da pontuação
// ("...CORRETA ?" vs "...CORRETA?"), que era justamente como as cópias do CERMAM
// e várias questões extraídas de PDF escapavam. Dois enunciados longos que
// colapsam para a mesma string sem acento/pontuação são, na prática, a mesma
// questão — o risco de falso positivo é desprezível.
//
// Deduplicamos por MATÉRIA, não pelo banco inteiro: uma sessão só sorteia
// dentro de uma matéria, então esse é o escopo que importa; a mesma pergunta
// duplicada em duas matérias diferentes (miscategorização) não crava
// repetição dentro de uma sessão e fica de fora deste filtro de propósito.
// Mantém sempre a PRIMEIRA ocorrência de cada texto.
export function dedupeKey(text?: string): string {
  return (text ?? '')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // remove acentos (marcas combinantes)
    .replace(/[^a-z0-9]+/g, ' ')                       // só alfanumérico
    .replace(/\s+/g, ' ')
    .trim();
}

// Alternativas de enumeração ("Apenas I e II", "Todas estão corretas", "N.D.A.")
// se repetem legitimamente entre questões DIFERENTES, então o conjunto delas não
// serve como assinatura de duplicata. Ignoramos qualquer questão que tenha uma.
const ENUM_OPTION_RE = /(?:^|\b)(?:todas|nenhuma|apenas|somente|n\.?\s?d\.?\s?a\.?)\b|\b[ivx]+\s*(?:,|e)\s*[ivx]+\b|^\s*[ivx]{1,4}\s*[.;:)]?\s*$/i;

// Assinatura por CONJUNTO de alternativas (ordem-insensível), só para questões
// com alternativas "substantivas": nenhuma de enumeração e todas razoavelmente
// longas (>= 40 caracteres normalizados). Opções curtas e genéricas ("Prevenção
// primária.", "Furosemida IV") aparecem em várias questões distintas e dariam
// falso positivo; opções longas idênticas praticamente só coincidem quando é a
// mesma questão reescrita. Retorna null quando a questão não se qualifica.
function substantiveOptionSetKey(options: string[]): string | null {
  if (!options || options.length < 2) return null;
  const norm: string[] = [];
  for (const o of options) {
    const s = String(o);
    if (ENUM_OPTION_RE.test(s.trim())) return null;
    const n = dedupeKey(s);
    if (n.length < 40) return null;
    norm.push(n);
  }
  return norm.slice().sort().join('||');
}

function textTokens(text?: string): Set<string> {
  return new Set(dedupeKey(text).split(' ').filter(w => w.length > 3));
}
function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const w of a) if (b.has(w)) inter++;
  return inter / (a.size + b.size - inter);
}
// Só tratamos "mesmo conjunto de alternativas" como duplicata quando os enunciados
// também têm alguma sobreposição — assim uma série "mesmo paciente" (perguntas
// diferentes que compartilham as mesmas opções de resposta) é preservada.
const DEDUPE_TEXT_SIM_MIN = 0.3;

export function dedupeQuestions<T extends NormalizableQuestion>(qs: T[]): T[] {
  const seenTextBySubject = new Map<string, Set<string>>();
  // matéria+conjunto-de-alternativas -> enunciados já mantidos com essa assinatura
  const optionBuckets = new Map<string, Array<Set<string>>>();

  return qs.filter(q => {
    const subjectKey = q.subject ?? '';
    const textKey = dedupeKey(q.text);

    // 1) Duplicata por texto (sem acento/pontuação). Sem texto não dá pra comparar.
    if (textKey) {
      let seen = seenTextBySubject.get(subjectKey);
      if (!seen) { seen = new Set(); seenTextBySubject.set(subjectKey, seen); }
      if (seen.has(textKey)) return false;
      seen.add(textKey);
    }

    // 2) Duplicata por conjunto de alternativas substantivas (mesma pergunta com
    //    a ordem das alternativas trocada, ou reescrita mantendo as mesmas opções).
    const optKey = substantiveOptionSetKey(q.options);
    if (optKey) {
      const bucketKey = `${subjectKey}|||${optKey}`;
      const tokens = textTokens(q.text);
      const bucket = optionBuckets.get(bucketKey);
      if (bucket) {
        if (bucket.some(prev => jaccard(prev, tokens) >= DEDUPE_TEXT_SIM_MIN)) return false;
        bucket.push(tokens);
      } else {
        optionBuckets.set(bucketKey, [tokens]);
      }
    }

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
