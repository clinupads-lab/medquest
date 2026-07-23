// Valida dedupeQuestions REAL (importado de src/questionNormalize.ts) contra o
// pool reconstruído a partir dos arquivos de questões usados no App.tsx.
// Uso: npx tsx scripts/verify_dedup.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeQuestion, isUsableQuestion, dedupeQuestions, dedupeKey } from '../src/questionNormalize.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, '..', 'src');

// ── parser tolerante (id/subject/text/options/correctIndex) ──
function readString(src, i) {
  const q = src[i]; if (q !== "'" && q !== '"' && q !== '`') return null;
  let out = ''; i++;
  while (i < src.length) {
    const c = src[i];
    if (c === '\\') { const n = src[i + 1]; out += n === 'n' ? '\n' : n === 't' ? '\t' : n; i += 2; continue; }
    if (c === q) return { value: out, end: i + 1 };
    out += c; i++;
  }
  return null;
}
function readOptions(src, i) {
  if (src[i] !== '[') return null; const opts = []; i++;
  while (i < src.length) {
    const c = src[i];
    if (c === ']') return { value: opts, end: i + 1 };
    if (c === "'" || c === '"' || c === '`') { const s = readString(src, i); if (!s) return null; opts.push(s.value); i = s.end; continue; }
    i++;
  }
  return null;
}
function parseFile(file, content) {
  const out = []; const idRe = /\bid\s*:\s*(['"`])/g; const pos = []; let m;
  while ((m = idRe.exec(content))) pos.push(m.index);
  for (let k = 0; k < pos.length; k++) {
    const chunk = content.slice(pos[k], k + 1 < pos.length ? pos[k + 1] : content.length);
    const q = { file };
    for (const field of ['id', 'subject', 'cycle', 'text', 'explanation']) {
      const fm = chunk.match(new RegExp(`\\b${field}\\s*:\\s*`));
      if (fm) { const after = fm.index + fm[0].length; const s = readString(chunk, after); if (s) q[field] = s.value; }
    }
    const oi = chunk.indexOf('options');
    if (oi >= 0) { const bi = chunk.indexOf('[', oi); if (bi >= 0) { const a = readOptions(chunk, bi); if (a) q.options = a.value; } }
    const ci = chunk.match(/\bcorrectIndex\s*:\s*(-?\d+)/);
    if (ci) q.correctIndex = parseInt(ci[1], 10);
    if (q.id && q.options && q.correctIndex !== undefined) out.push(q);
  }
  return out;
}

const app = fs.readFileSync(path.join(SRC, 'App.tsx'), 'utf8');
const importMap = {}; let im; const importRe = /import\s*\{([^}]*)\}\s*from\s*'\.\/([a-zA-Z0-9_]+)'/g;
while ((im = importRe.exec(app))) for (let p of im[1].split(',')) { p = p.trim(); if (!p) continue; const a = p.match(/(\w+)\s+as\s+(\w+)/); importMap[a ? a[2] : p] = im[2]; }
const usedFiles = new Set(); let sm; const spreadRe = /\.\.\.\(([A-Z][A-Za-z0-9_]+)\s+as/g;
while ((sm = spreadRe.exec(app))) if (importMap[sm[1]]) usedFiles.add(importMap[sm[1]] + '.ts');

let pool = parseFile('App.tsx', app);
for (const f of usedFiles) {
  const fp = path.join(SRC, f);
  if (fs.existsSync(fp)) pool = pool.concat(parseFile(f, fs.readFileSync(fp, 'utf8')));
}

// aplica o MESMO pipeline do app
const processed = pool.map(normalizeQuestion).filter(isUsableQuestion);
const deduped = dedupeQuestions(processed);

console.log('Pool bruto:', pool.length);
console.log('Após normalize+filtro utilizável:', processed.length);
console.log('Após dedupeQuestions:', deduped.length, `(removidas ${processed.length - deduped.length})`);

// ── ASSERT: nenhuma duplicata por texto dentro da mesma matéria ──
const byText = new Map(); let dupText = 0;
for (const q of deduped) {
  const k = dedupeKey(q.text); if (!k) continue;
  const key = (q.subject ?? '') + '|||' + k;
  if (byText.has(key)) { dupText++; if (dupText <= 5) console.log('  DUP TEXTO:', byText.get(key), 'vs', q.id); }
  else byText.set(key, q.id);
}
console.log('\nDuplicatas por texto restantes (mesma matéria):', dupText);

// ── distribuição por matéria (residência = todas; estudante = sem banca) ──
const bySubject = {};
for (const q of deduped) bySubject[q.subject ?? '(sem)'] = (bySubject[q.subject ?? '(sem)'] || 0) + 1;
const rows = Object.entries(bySubject).sort((a, b) => a[1] - b[1]);
console.log('\nMatérias com MENOS questões (risco de sessão curta, < 10):');
for (const [s, n] of rows.filter(([, n]) => n < 10)) console.log(`  ⚠️  ${s}: ${n}`);
if (rows.filter(([, n]) => n < 10).length === 0) console.log('  (nenhuma abaixo de 10 — todas as sessões têm variedade)');
console.log('\nTop 5 matérias por volume:');
for (const [s, n] of rows.slice(-5).reverse()) console.log(`  ${s}: ${n}`);

console.log(dupText === 0 ? '\n✅ PASS: zero duplicatas de texto por matéria' : '\n❌ FAIL');
process.exit(dupText === 0 ? 0 : 1);
