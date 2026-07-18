// Dr. Quest IA — explicações automáticas para questões sem gabarito comentado.
//
// Chama a Cloud Function `explainQuestion` (functions/index.js), que mantém
// um cache global no Firestore: cada questão é explicada uma vez na vida e
// depois todo mundo lê do cache. Aqui no cliente tem um cache em memória
// por cima, pra não repetir a chamada nem dentro da sessão.

import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';
import type { Question } from './App';

const memoryCache = new Map<string, string>();
const inFlight = new Map<string, Promise<string>>();

/**
 * Busca (ou gera) a explicação de uma questão via Dr. Quest IA.
 * Lança erro se o backend estiver indisponível — quem chama decide o fallback.
 */
export function fetchAiExplanation(question: Question): Promise<string> {
  const cached = memoryCache.get(question.id);
  if (cached) return Promise.resolve(cached);

  const pending = inFlight.get(question.id);
  if (pending) return pending;

  if (!functions) {
    return Promise.reject(new Error('IA indisponível no modo offline.'));
  }

  const call = httpsCallable<
    { questionId: string; text: string; options: string[]; correctIndex: number },
    { explanation: string; cached: boolean }
  >(functions, 'explainQuestion');

  const promise = call({
    questionId: question.id,
    text: question.text,
    options: question.options,
    correctIndex: question.correctIndex,
  })
    .then((result) => {
      const text = result.data.explanation;
      memoryCache.set(question.id, text);
      inFlight.delete(question.id);
      return text;
    })
    .catch((e) => {
      inFlight.delete(question.id);
      throw e;
    });

  inFlight.set(question.id, promise);
  return promise;
}
