const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'App.tsx'), 'utf8');

const marker = 'const QUESTIONS: Question[] = [';
const start = src.indexOf(marker);
if (start === -1) { console.error('QUESTIONS array not found'); process.exit(1); }

// bracket-match from the opening [ (last char of the marker)
let i = start + marker.length - 1;
const arrStart = i;
let depth = 0, inStr = false, strCh = '', prev = '';
for (; i < src.length; i++) {
  const c = src[i];
  if (inStr) {
    if (c === strCh && prev !== '\\') inStr = false;
  } else {
    if (c === '"' || c === "'" || c === '`') { inStr = true; strCh = c; }
    else if (c === '[' || c === '{' || c === '(') depth++;
    else if (c === ']' || c === '}' || c === ')') { depth--; if (depth === 0 && c === ']') { i++; break; } }
  }
  prev = c;
}
let literal = src.slice(arrStart, i);

// eval as JS object array
let questions;
try {
  questions = eval('(' + literal + ')');
} catch (e) {
  console.error('eval failed:', e.message);
  process.exit(1);
}

const holes = questions.filter(q => q == null).length;
questions = questions.filter(q => q != null);
console.log('TOTAL QUESTÕES (array QUESTIONS):', questions.length, holes ? `(+${holes} buracos/undefined ignorados)` : '');
console.log();

function tally(keyFn) {
  const m = {};
  for (const q of questions) {
    const k = keyFn(q);
    m[k] = (m[k] || 0) + 1;
  }
  return Object.entries(m).sort((a, b) => b[1] - a[1]);
}

console.log('=== POR BANCA ===');
for (const [k, v] of tally(q => q.banca || '(sem banca)')) console.log(`${String(v).padStart(4)}  ${k}`);

console.log('\n=== POR ANO ===');
for (const [k, v] of tally(q => q.year || '(sem ano)')) console.log(`${String(v).padStart(4)}  ${k}`);

console.log('\n=== POR CICLO ===');
for (const [k, v] of tally(q => q.cycle || '(sem ciclo)')) console.log(`${String(v).padStart(4)}  ${k}`);

console.log('\n=== POR DISCIPLINA (subject) ===');
for (const [k, v] of tally(q => q.subject || '(sem subject)')) console.log(`${String(v).padStart(4)}  ${k}`);

console.log('\n=== QUALIDADE / COMPLETUDE ===');
const semCorrect = questions.filter(q => q.correctIndex === undefined || q.correctIndex === null || q.correctIndex === -1).length;
const semExpl = questions.filter(q => !q.explanation || !String(q.explanation).trim()).length;
const semOptions = questions.filter(q => !Array.isArray(q.options) || q.options.length < 2).length;
const semText = questions.filter(q => !q.text || !String(q.text).trim()).length;
const semBanca = questions.filter(q => !q.banca).length;
console.log(`Sem correctIndex válido: ${semCorrect}`);
console.log(`Sem explicação:          ${semExpl}`);
console.log(`Sem alternativas (<2):   ${semOptions}`);
console.log(`Sem enunciado (text):    ${semText}`);
console.log(`Sem banca definida:      ${semBanca}`);

// IDs duplicados
const ids = questions.map(q => q.id);
const dup = ids.filter((id, idx) => ids.indexOf(id) !== idx);
console.log(`IDs duplicados:          ${[...new Set(dup)].length}` + (dup.length ? ' -> ' + [...new Set(dup)].join(', ') : ''));

// distribuição de nº de alternativas
console.log('\n=== Nº DE ALTERNATIVAS ===');
for (const [k, v] of tally(q => (Array.isArray(q.options) ? q.options.length : 0) + ' alts')) console.log(`${String(v).padStart(4)}  ${k}`);
