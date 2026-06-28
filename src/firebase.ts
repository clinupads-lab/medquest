// Inicialização do Firebase (Auth + Firestore).
//
// As credenciais vêm do .env (prefixo VITE_, exposto pelo Vite ao cliente).
// Enquanto o .env não estiver preenchido, `isFirebaseConfigured` é `false`
// e o app continua funcionando normalmente, sem nuvem (progresso só em memória).
//
// Onde obter os valores: Console Firebase → Configurações do projeto →
// "Seus apps" (Web) → SDK setup and configuration.

import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

const cfg = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
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
