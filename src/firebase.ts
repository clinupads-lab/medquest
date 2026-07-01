// Inicialização do Firebase (Auth + Firestore).
//
// A config web do Firebase NÃO é secreta (a apiKey é pública por design; a
// segurança vem das regras do Firestore + domínios autorizados). Por isso ela
// fica embutida como padrão abaixo, para o app funcionar em qualquer máquina /
// no AI Studio só com `git clone` (sem precisar criar .env).
// O .env (VITE_FIREBASE_*) continua podendo sobrescrever esses valores.
// Segredos de verdade (GEMINI_API_KEY, serviceAccountKey.json) seguem fora do Git.

import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

// Config pública do projeto medquest-fb341 (fallback embutido).
const DEFAULTS = {
  apiKey: 'AIzaSyD_QTHyj1AJPdCH0RDa8KnGfWxXq8gK8lY',
  authDomain: 'medquest-fb341.firebaseapp.com',
  projectId: 'medquest-fb341',
  storageBucket: 'medquest-fb341.firebasestorage.app',
  messagingSenderId: '791374900204',
  appId: '1:791374900204:web:944e7cf5bea9b464d66ec9',
  measurementId: 'G-FWHF67EQXM',
};

const cfg = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || DEFAULTS.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || DEFAULTS.authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || DEFAULTS.projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || DEFAULTS.storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || DEFAULTS.messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || DEFAULTS.appId,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || DEFAULTS.measurementId,
};

// Só consideramos configurado quando as chaves essenciais existem.
export const isFirebaseConfigured = Boolean(cfg.apiKey && cfg.projectId && cfg.appId);

let app: FirebaseApp | null = null;
let authInstance: Auth | null = null;
let dbInstance: Firestore | null = null;

if (isFirebaseConfigured) {
  app = initializeApp(cfg);
  authInstance = getAuth(app);
  dbInstance = getFirestore(app);
} else if (import.meta.env.DEV) {
  // Aviso apenas em desenvolvimento, para não poluir o console em produção.
  console.warn(
    '[firebase] Variáveis VITE_FIREBASE_* ausentes no .env — rodando sem nuvem (login/sync desativados).'
  );
}

export const auth = authInstance;
export const db = dbInstance;
export const googleProvider = new GoogleAuthProvider();
