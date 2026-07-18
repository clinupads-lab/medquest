import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  updateProfile,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
import { auth, db, functions, googleProvider, isFirebaseConfigured as firebaseConfigured } from './firebase';

export type Plan = 'free' | 'premium';
// Qual trilha o premium libera: estudante (29,90/mês) ou residência
// (79,90/mês — inclui tudo). Escrito SOMENTE pelo webhook do Mercado Pago.
export type PlanTier = 'free' | 'estudante' | 'residencia';

// Fake user used when Firebase is not configured (dev/demo mode)
const GUEST_USER = {
  uid: 'guest',
  displayName: 'Convidado',
  email: 'guest@medquest.app',
} as unknown as User;

interface AuthContextValue {
  currentUser: User | null;
  plan: Plan;
  planTier: PlanTier;
  loading: boolean;
  isGuestMode: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  createAccount: (email: string, password: string, displayName: string) => Promise<void>;
  signInAsGuest: () => Promise<void>;
  signOut: () => Promise<void>;
  /** Cria a assinatura no Mercado Pago e devolve a URL de checkout. */
  startCheckout: (planId: 'estudante' | 'residencia') => Promise<string>;
  saveUserProgress: (data: Record<string, unknown>) => Promise<void>;
  loadUserProgress: () => Promise<Record<string, unknown> | null>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}

async function ensureUserDoc(user: User): Promise<Plan> {
  if (!db) return 'free';
  const ref = doc(db, 'users', user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      email: user.email,
      displayName: user.displayName || '',
      plan: 'free',
      createdAt: new Date().toISOString(),
      progress: {},
    });
    return 'free';
  }
  return (snap.data().plan as Plan) ?? 'free';
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [plan, setPlan] = useState<Plan>('free');
  const [planTier, setPlanTier] = useState<PlanTier>('free');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Se Firebase não está configurado, não faz auto-login — mostra LoginScreen
    if (!firebaseConfigured || !auth) {
      setLoading(false);
      return;
    }

    // O plano é observado em tempo real (onSnapshot): quando o webhook do
    // Mercado Pago confirma o pagamento e escreve plan='premium' no doc,
    // o app "vira premium" sozinho, sem recarregar a página.
    let unsubPlan: (() => void) | null = null;

    const unsub = onAuthStateChanged(auth, async (user) => {
      unsubPlan?.();
      unsubPlan = null;
      setCurrentUser(user);
      if (user) {
        await ensureUserDoc(user);
        if (db) {
          unsubPlan = onSnapshot(doc(db, 'users', user.uid), (snap) => {
            const data = snap.data();
            setPlan(((data?.plan as Plan) ?? 'free'));
            setPlanTier(((data?.planTier as PlanTier) ?? 'free'));
          });
        }
      } else {
        setPlan('free');
        setPlanTier('free');
      }
      setLoading(false);
    });
    return () => {
      unsubPlan?.();
      unsub();
    };
  }, []);

  // Nos logins, o plano vem do listener em tempo real do onAuthStateChanged —
  // aqui só garantimos que o doc do usuário existe.
  const signInWithGoogle = async () => {
    if (!auth || !googleProvider) return;
    const result = await signInWithPopup(auth, googleProvider);
    await ensureUserDoc(result.user);
  };

  const signInWithEmail = async (email: string, password: string) => {
    if (!auth) return;
    const result = await signInWithEmailAndPassword(auth, email, password);
    await ensureUserDoc(result.user);
  };

  const createAccount = async (email: string, password: string, displayName: string) => {
    if (!auth) return;
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName });
    await ensureUserDoc(result.user);
    setPlan('free');
  };

  // Convidado = usuário anônimo de verdade do Firebase (signInAnonymously), não
  // um objeto fake. Isso dá a cada convidado um uid único e persistente (a
  // sessão sobrevive a recarregar a página, exatamente como um login normal),
  // e permite que o progresso dele seja salvo no Firestore como qualquer conta
  // — as regras de segurança já aceitam qualquer `request.auth` válido,
  // incluindo anônimo.
  //
  // Requer o provedor "Anonymous" habilitado em
  // Firebase Console → Authentication → Sign-in method. Se não estiver
  // habilitado (ou o Firebase não estiver configurado), cai no objeto fake
  // local — o app continua funcionando, só sem persistir entre dias/aparelhos.
  const signInAsGuest = async () => {
    if (!auth || !firebaseConfigured) {
      setCurrentUser(GUEST_USER);
      setPlan('free');
      return;
    }
    try {
      const result = await signInAnonymously(auth);
      await ensureUserDoc(result.user);
    } catch (e) {
      console.warn('[auth] signInAnonymously falhou (provedor Anonymous habilitado no Firebase Console?) — usando modo convidado local:', e);
      setCurrentUser(GUEST_USER);
      setPlan('free');
    }
  };

  const signOut = async () => {
    if (auth && firebaseConfigured) {
      await firebaseSignOut(auth);
    }
    setCurrentUser(null);
    setPlan('free');
    setPlanTier('free');
  };

  // 'guest' é só o sentinel do objeto local fake (fallback de quando o
  // Firebase não tem o provedor Anonymous habilitado) — não tem token real
  // de autenticação, então uma escrita no Firestore seria sempre rejeitada
  // pelas regras de segurança. Usuários anônimos de verdade (uid real, via
  // signInAnonymously) passam normalmente por essas checagens.
  const isFakeGuest = (u: User | null) => !u || u.uid === 'guest';

  // Inicia o checkout de assinatura no Mercado Pago. O preço é definido no
  // servidor (functions/index.js) — daqui só sai o id do plano. Quem torna o
  // usuário premium é o webhook, nunca o cliente (as regras do Firestore
  // bloqueiam escrita de `plan` pelo app).
  const startCheckout = async (planId: 'estudante' | 'residencia'): Promise<string> => {
    if (!functions) throw new Error('Pagamentos indisponíveis no modo offline.');
    const call = httpsCallable<{ planId: string }, { id: string; initPoint: string }>(
      functions,
      'createSubscription'
    );
    const result = await call({ planId });
    return result.data.initPoint;
  };

  const saveUserProgress = async (data: Record<string, unknown>) => {
    if (isFakeGuest(currentUser) || !db) return;
    const ref = doc(db, 'users', currentUser!.uid);
    await updateDoc(ref, { progress: data, updatedAt: new Date().toISOString() });
  };

  const loadUserProgress = async (): Promise<Record<string, unknown> | null> => {
    if (isFakeGuest(currentUser) || !db) return null;
    const ref = doc(db, 'users', currentUser!.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) return null;
    return (snap.data().progress as Record<string, unknown>) ?? null;
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      plan,
      planTier,
      loading,
      isGuestMode: currentUser?.uid === 'guest' || !!currentUser?.isAnonymous,
      signInWithGoogle,
      signInWithEmail,
      createAccount,
      signInAsGuest,
      signOut,
      startCheckout,
      saveUserProgress,
      loadUserProgress,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
