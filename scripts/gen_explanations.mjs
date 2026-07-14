/**
 * Gera explicações para as questões que não têm o campo `explanation`.
 *
 * Como funciona
 *   1. Varre todos os bancos de questões (src/*.ts + o array inline do App.tsx)
 *      e monta a lista das questões sem explicação.
 *   2. Envia em lotes para o Gemini, SEMPRE informando qual é a alternativa
 *      correta (o gabarito do banco é a verdade — o modelo justifica, não decide).
 *   3. Grava o resultado em src/explanations.json, indexado por id da questão.
 *
 * O arquivo de saída é atualizado a cada lote: se a execução cair (rede, cota,
 * Ctrl+C), basta rodar de novo que ele retoma de onde parou.
 *
 * Uso:
 *   node scripts/gen_explanations.mjs            # gera tudo que falta
 *   node scripts/gen_explanations.mjs --limit 30 # só as 30 primeiras (piloto)
 *   node scripts/gen_explanations.mjs --dry      # só mostra o que faria
 *
 * Requer GEMINI_API_KEY no .env.
 */

import { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync } from 'node:fs';
import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';

const OUT_FILE = 'src/explanations.json';
const MODEL = 'gemini-2.5-flash';
const BATCH_SIZE = 8;     // questões por request
const CONCURRENCY = 4;    // requests simultâneos
const MAX_RETRIES = 4;

const args = process.argv.slice(2);
const LIMIT = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : Infinity;
const DRY = args.includes('--dry');

// ── 1. Coleta todas as questões ────────────────────────────────────────────
const SKIP = new Set(['vite-env.d.ts', 'firebase.ts', 'cloud.ts', 'social.ts', 'sfx.ts']);

async function collectQuestions() {
  const all = [];
  for (const f of readdirSync('src').filter(f => f.endsWith('.ts') && !SKIP.has(f))) {
    const mod = await import(`../src/${f}`);
    for (const val of Object.values(mod)) {
      if (!Array.isArray(val)) continue;
      for (const q of val) {
        if (q && typeof q === 'object' && q.id && Array.isArray(q.options) && typeof q.correctIndex === 'number') {
          all.push(q);
        }
      }
    }
  }

  // Questões declaradas inline no App.tsx (array QUESTIONS_RAW)
  const app = readFileSync('src/App.tsx', 'utf8');
  const start = app.indexOf('const QUESTIONS_RAW');
  const arrOpen = app.indexOf('[', start);
  const spreads = app.indexOf('...(ENARE_EXTRA_QUESTIONS', arrOpen);
  const body = app.slice(arrOpen + 1, spreads).trimEnd().replace(/,\s*$/, '');
  const tmp = 'src/__tmp_inline_questions.ts';
  writeFileSync(tmp, `export const INLINE: any[] = [\n${body}\n];\n`, 'utf8');
  try {
    const { INLINE } = await import('../src/__tmp_inline_questions.ts');
    for (const q of INLINE) {
      if (q && typeof q === 'object' && q.id && Array.isArray(q.options) && typeof q.correctIndex === 'number') {
        all.push(q);
      }
    }
  } finally {
    unlinkSync(tmp);
  }
  return all;
}

// ── 2. Prompt ──────────────────────────────────────────────────────────────
const SYSTEM = `Você é um professor de medicina brasileiro que escreve comentários de questões
de provas de residência médica e de graduação.

Para cada questão você recebe o enunciado, as alternativas e QUAL É A ALTERNATIVA CORRETA
(o gabarito oficial). O gabarito é a verdade: nunca o conteste, nunca escolha outra
alternativa. Sua tarefa é EXPLICAR por que ela é a correta.

Regras da explicação:
- Português do Brasil, tom didático e direto, como um professor comentando o gabarito.
- 2 a 4 frases (no máximo ~60 palavras). Sem enrolação, sem saudação, sem "a resposta é X".
- Comece pelo conceito que resolve a questão, não pela repetição do enunciado.
- Quando ajudar, diga em uma oração por que as outras alternativas caem — mas só se couber
  no limite; priorize sempre justificar a correta.
- Use a terminologia médica correta (critérios diagnósticos, valores de corte, condutas,
  nomes de escores). Seja específico: números, doses e critérios valem mais que generalidades.
- Não invente referência bibliográfica, ano de diretriz ou dado que você não tenha certeza.
- Não use markdown, bullets ou títulos. Apenas texto corrido.`;

function buildPrompt(batch) {
  const qs = batch.map((q, i) => {
    const alts = q.options
      .map((o, idx) => `   ${String.fromCharCode(65 + idx)}) ${o}`)
      .join('\n');
    return `### Questão ${i + 1} (id: ${q.id})
Matéria: ${q.subject || 'não informada'}${q.banca ? ` | Banca: ${q.banca}` : ''}
Enunciado: ${q.text}
Alternativas:
${alts}
GABARITO OFICIAL: ${String.fromCharCode(65 + q.correctIndex)}) ${q.options[q.correctIndex]}`;
  }).join('\n\n');

  return `Escreva a explicação de cada questão abaixo, justificando o gabarito oficial informado.

${qs}

Responda em JSON: um array com um objeto por questão, na mesma ordem, no formato
{"id": "<id da questão>", "explanation": "<explicação>"}.`;
}

const SCHEMA = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      explanation: { type: 'string' },
    },
    required: ['id', 'explanation'],
  },
};

// ── 3. Chamada ao Gemini com retry/backoff ────────────────────────────────
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function explainBatch(batch) {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await ai.models.generateContent({
        model: MODEL,
        contents: buildPrompt(batch),
        config: {
          systemInstruction: SYSTEM,
          responseMimeType: 'application/json',
          responseSchema: SCHEMA,
          temperature: 0.3,
        },
      });
      const parsed = JSON.parse(res.text);
      const byId = new Map(batch.map(q => [q.id, q]));
      const out = [];
      for (const item of parsed) {
        if (!item?.id || !item?.explanation) continue;
        if (!byId.has(item.id)) continue;              // id alucinado: descarta
        const text = String(item.explanation).trim();
        if (text.length < 20) continue;                // resposta degenerada: descarta
        out.push({ id: item.id, explanation: text });
      }
      return out;
    } catch (err) {
      const msg = String(err?.message || err);
      const isRate = /429|quota|rate|RESOURCE_EXHAUSTED/i.test(msg);
      if (attempt === MAX_RETRIES) {
        console.error(`   ! lote falhou (${batch[0].id}...): ${msg.slice(0, 120)}`);
        return [];
      }
      const wait = isRate ? 20000 * attempt : 2000 * attempt;
      await sleep(wait);
    }
  }
  return [];
}

// ── 4. Loop principal ─────────────────────────────────────────────────────
const all = await collectQuestions();
const done = existsSync(OUT_FILE) ? JSON.parse(readFileSync(OUT_FILE, 'utf8')) : {};

const pending = all
  .filter(q => !q.explanation || String(q.explanation).trim() === '')
  .filter(q => !done[q.id]);

// dedup por id (o mesmo id pode aparecer em mais de um banco)
const seen = new Set();
const work = pending.filter(q => (seen.has(q.id) ? false : (seen.add(q.id), true))).slice(0, LIMIT);

console.log(`Questões no total:        ${all.length}`);
console.log(`Já explicadas (arquivo):  ${Object.keys(done).length}`);
console.log(`A gerar nesta execução:   ${work.length}`);

if (DRY || work.length === 0) {
  if (work.length === 0) console.log('\nNada a fazer — todas já têm explicação.');
  process.exit(0);
}
if (!process.env.GEMINI_API_KEY) {
  console.error('\nERRO: GEMINI_API_KEY não está definida no .env');
  process.exit(1);
}

const batches = [];
for (let i = 0; i < work.length; i += BATCH_SIZE) batches.push(work.slice(i, i + BATCH_SIZE));

let completed = 0, saved = 0;
const started = Date.now();

async function worker(queue) {
  while (queue.length) {
    const batch = queue.shift();
    const results = await explainBatch(batch);
    for (const r of results) {
      done[r.id] = r.explanation;
      saved++;
    }
    completed++;
    writeFileSync(OUT_FILE, JSON.stringify(done, null, 2) + '\n', 'utf8');
    const pct = ((completed / batches.length) * 100).toFixed(1);
    const elapsed = (Date.now() - started) / 1000;
    const eta = ((elapsed / completed) * (batches.length - completed) / 60).toFixed(1);
    console.log(`[${pct.padStart(5)}%] lote ${completed}/${batches.length} · ${saved} explicações · ETA ${eta} min`);
  }
}

const queue = [...batches];
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)));

console.log(`\nPronto. ${saved} explicações novas gravadas em ${OUT_FILE}.`);
console.log(`Total acumulado: ${Object.keys(done).length}`);
