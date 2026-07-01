// Camada de nuvem (Firebase) isolada do App.tsx.
//
// Todas as funções são seguras quando o Firebase não está configurado
// (retornam null / no-op), de modo que o app funciona normalmente offline.

import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
} from 'firebase/firestore';
import { auth, db, googleProvider, isFirebaseConfigured } from './firebase';

export { isFirebaseConfigured };
export type CloudUser = User;

// Formato das questões usado pelo app (App.tsx).
export interface CloudQuestion {
  id: string;
  cycle: string;
  subject: string;
  subSubject?: string;
  banca?: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

// ── Autenticação ─────────────────────────────────────────────────────────────

/** Observa o estado de login. Retorna função para cancelar a inscrição. */
export function watchAuth(cb: (user: CloudUser | null) => void): () => void {
  if (!isFirebaseConfigured || !auth) {
    cb(null);
    return () => {};
  }
  return onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle(): Promise<CloudUser | null> {
  if (!isFirebaseConfigured || !auth) return null;
  const res = await signInWithPopup(auth, googleProvider);
  return res.user;
}

export async function signOutUser(): Promise<void> {
  if (!isFirebaseConfigured || !auth) return;
  await signOut(auth);
}

// ── Progresso do usuário (users/{uid}) ───────────────────────────────────────

/** Carrega o progresso salvo na nuvem, ou null se não houver/indisponível. */
export async function loadProgress<T = Record<string, unknown>>(
  uid: string
): Promise<Partial<T> | null> {
  if (!isFirebaseConfigured || !db) return null;
  try {
    const snap = await getDoc(doc(db, 'users', uid));
    return snap.exists() ? (snap.data() as Partial<T>) : null;
  } catch (e) {
    console.warn('[cloud] loadProgress falhou:', e);
    return null;
  }
}

/** Salva (merge) o progresso do usuário na nuvem. */
export async function saveProgress(
  uid: string,
  data: Record<string, unknown>
): Promise<void> {
  if (!isFirebaseConfigured || !db) return;
  try {
    await setDoc(
      doc(db, 'users', uid),
      { ...data, updatedAt: Date.now() },
      { merge: true }
    );
  } catch (e) {
    console.warn('[cloud] saveProgress falhou:', e);
  }
}

// ── Banco de questões (coleção "questions") ──────────────────────────────────

/**
 * Carrega as questões do Firestore, convertendo do formato do seed
 * (enunciado/alternatives/subsubject) para o formato do app
 * (text/options/subSubject). Retorna null se vazio/indisponível,
 * para o app cair no banco local (bundled).
 */
export async function loadQuestionsFromCloud(): Promise<CloudQuestion[] | null> {
  if (!isFirebaseConfigured || !db) return null;
  try {
    const snap = await getDocs(collection(db, 'questions'));
    if (snap.empty) return null;
    const out: CloudQuestion[] = [];
    snap.forEach((d) => {
      const q = d.data() as Record<string, any>;
      const text = q.text ?? q.enunciado;
      const options = q.options ?? q.alternatives;
      if (!text || !Array.isArray(options)) return;
      out.push({
        id: q.id ?? d.id,
        cycle: q.cycle,
        subject: q.subject,
        subSubject: q.subSubject ?? q.subsubject ?? undefined,
        banca: q.banca ?? undefined,
        text,
        options,
        correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : -1,
        explanation: q.explanation ?? undefined,
      });
    });
    return out.length > 0 ? out : null;
  } catch (e) {
    console.warn('[cloud] loadQuestionsFromCloud falhou:', e);
    return null;
  }
}
