// Sobe o banco de questões para o Firestore (coleção "questions").
//
// Uso (uma vez, ou sempre que quiser atualizar o Firestore com o App.tsx):
//   1. Console Firebase → Configurações do projeto → Contas de serviço →
//      "Gerar nova chave privada" → salve como scripts/serviceAccountKey.json
//      (NÃO comite esse arquivo — já está no .gitignore)
//   2. node scripts/seed_firestore.mjs
//
// Lê data/processed/all_questions.json (gerado pelo pipeline de sync) e grava
// cada questão como um documento com id = q.id, em lotes (batched writes).

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const serviceAccount = JSON.parse(
  readFileSync(join(__dirname, 'serviceAccountKey.json'), 'utf8')
);
const questions = JSON.parse(
  readFileSync(join(ROOT, 'data', 'processed', 'all_questions.json'), 'utf8')
);

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

console.log(`Subindo ${questions.length} questões para a coleção "questions"...`);

const CHUNK = 400; // limite do batch é 500
let written = 0;
for (let i = 0; i < questions.length; i += CHUNK) {
  const batch = db.batch();
  for (const q of questions.slice(i, i + CHUNK)) {
    if (!q.id) continue;
    batch.set(db.collection('questions').doc(q.id), q, { merge: true });
  }
  await batch.commit();
  written += Math.min(CHUNK, questions.length - i);
  console.log(`  ${written}/${questions.length}`);
}

console.log('Concluído.');
process.exit(0);
