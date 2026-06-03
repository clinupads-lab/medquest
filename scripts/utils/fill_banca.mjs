// Preenche o campo `banca` nas questões CERMAM que estão sem a tag.
// Identifica a banca pelo prefixo do id (cermam09/12/23/25 -> CERMAM).
// As questões iamspe_* e cermam_am_2009_* já possuem banca e não são tocadas.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const baseDir = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const appPath = join(baseDir, 'src', 'App.tsx');

const text = readFileSync(appPath, 'utf8');
const lines = text.split('\n'); // mantém o \r no fim de cada linha (CRLF)

// id de questão CERMAM sem banca: cermam09_NN, cermam12_NN, cermam23_NN, cermam25_NN
const idRe = /^(\s*)id: 'cermam(?:09|12|23|25)_\d+',\r?$/;

const out = [];
let added = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  out.push(line);
  const m = line.match(idRe);
  if (m) {
    const next = lines[i + 1] ?? '';
    if (!/banca:/.test(next)) {
      const indent = m[1];
      const eol = line.endsWith('\r') ? '\r' : '';
      out.push(`${indent}banca: 'CERMAM',${eol}`);
      added++;
    }
  }
}

writeFileSync(appPath, out.join('\n'), 'utf8');

const result = out.join('\n');
const count = (s) => (result.match(new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
console.log(`Tags CERMAM adicionadas: ${added}`);
console.log(`Total banca: 'CERMAM' = ${count("banca: 'CERMAM'")}`);
console.log(`Total banca: 'IAMSPE' = ${count("banca: 'IAMSPE'")}`);
console.log(`Total correctIndex (questões) = ${count('correctIndex')}`);
