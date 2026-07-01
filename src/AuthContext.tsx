import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db, googleProvider, firebaseConfigured } from './firebase';

export type Plan = 'free' | 'premium';

// Fake user used when Firebase is not configured (dev/demo mode)
const GUEST_USER = {
  uid: 'guest',
  displayName: 'Convidado',
  email: 'guest@medquest.app',
} as unknown as User;

interface AuthContextValue {
  currentUser: User | null;
  plan: Plan;
  loading: boolean;
  isGuestMode: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  createAccount: (email: string, password: string, displayName: string) => Promise<void>;
  signOut: () => Promise<void>;
  upgradeToPremium: () => Promise<void>;
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Se Firebase não está configurado, entra como convidado automaticamente
    if (!firebaseConfigured || !auth) {
      setCurrentUser(GUEST_USER);
      setPlan('free');
      setLoading(false);
      return;
    }

    const unsub = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        const userPlan = await ensureUserDoc(user);
        setPlan(userPlan);
      } else {
        setPlan('free');
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  const signInWithGoogle = async () => {
    if (!auth || !googleProvider) return;
    const result = await signInWithPopup(auth, googleProvider);
    const userPlan = await ensureUserDoc(result.user);
    setPlan(userPlan);
  };

  const signInWithEmail = async (email: string, password: string) => {
    if (!auth) return;
    const result = await signInWithEmailAndPassword(auth, email, password);
    const userPlan = await ensureUserDoc(result.user);
    setPlan(userPlan);
  };

  const createAccount = async (email: string, password: string, displayName: string) => {
    if (!auth) return;
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName });
    await ensureUserDoc(result.user);
    setPlan('free');
  };

  const signOut = async () => {
    if (auth && firebaseConfigured) {
      await firebaseSignOut(auth);
    }
    setCurrentUser(null);
    setPlan('free');
  };

  const upgradeToPremium = async () => {
    if (!currentUser || !db || currentUser.uid === 'guest') return;
    const ref = doc(db, 'users', currentUser.uid);
    await updateDoc(ref, { plan: 'premium' });
    setPlan('premium');
  };

  const saveUserProgress = async (data: Record<string, unknown>) => {
    if (!currentUser || !db || currentUser.uid === 'guest') return;
    const ref = doc(db, 'users', currentUser.uid);
    await updateDoc(ref, { progress: data, updatedAt: new Date().toISOString() });
  };

  const loadUserProgress = async (): Promise<Record<string, unknown> | null> => {
    if (!currentUser || !db || currentUser.uid === 'guest') return null;
    const ref = doc(db, 'users', currentUser.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) return null;
    return (snap.data().progress as Record<string, unknown>) ?? null;
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      plan,
      loading,
      isGuestMode: !firebaseConfigured,
      signInWithGoogle,
      signInWithEmail,
      createAccount,
      signOut,
      upgradeToPremium,
      saveUserProgress,
      loadUserProgress,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
