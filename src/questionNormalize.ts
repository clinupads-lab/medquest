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
  options: string[];
  correctIndex: number;
  explanation?: string;
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

/** Pipeline completo: limpa prefixos → preenche explicação → embaralha. */
export function normalizeQuestion<T extends NormalizableQuestion>(q: T): T {
  return shuffleOptions(withExplanation(stripOptionPrefixes(q)));
}
