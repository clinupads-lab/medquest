// Camada social: código de amigo, amizades e batalhas (duelos assíncronos).
// Tudo no Firestore. Seguro quando o Firebase não está configurado (no-ops).

import {
  doc, getDoc, setDoc, updateDoc, collection, query, where,
  getDocs, onSnapshot, serverTimestamp, arrayUnion,
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';

export interface Friendship {
  id: string;
  users: string[];
  requesterUid: string;
  requesterName: string;
  addresseeUid: string;
  addresseeName: string;
  status: 'pending' | 'accepted';
}

export interface Battle {
  id: string;
  participants: string[];
  challengerUid: string;
  challengerName: string;
  opponentUid: string;
  opponentName: string;
  subject: string;
  questionIds: string[];
  challengerScore: number | null;
  opponentScore: number | null;
  status: 'pending' | 'finished';
  winnerUid: string | null; // null = empate
  rewarded: Record<string, boolean>;
}

const ok = () => isFirebaseConfigured && !!db;
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sem 0/O/1/I

function randomCode(): string {
  let s = '';
  for (let i = 0; i < 5; i++) s += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  return `MED-${s}`;
}

// ── Código de amigo ──────────────────────────────────────────────────────────

/** Garante que o usuário tem um código único e retorna-o. */
export async function ensureFriendCode(uid: string, name: string): Promise<string | null> {
  if (!ok()) return null;
  const uref = doc(db!, 'users', uid);
  const snap = await getDoc(uref);
  const existing = snap.exists() ? (snap.data().friendCode as string | undefined) : undefined;
  if (existing) {
    // Mantém o diretório público atualizado (nome pode ter mudado).
    await setDoc(doc(db!, 'userCodes', existing), { uid, name }, { merge: true });
    return existing;
  }
  // Gera um código livre (poucas tentativas bastam nesta escala).
  for (let attempt = 0; attempt < 6; attempt++) {
    const code = randomCode();
    const taken = await getDoc(doc(db!, 'userCodes', code));
    if (taken.exists()) continue;
    await setDoc(doc(db!, 'userCodes', code), { uid, name });
    await setDoc(uref, { friendCode: code }, { merge: true });
    return code;
  }
  return null;
}

export async function lookupByCode(code: string): Promise<{ uid: string; name: string } | null> {
  if (!ok()) return null;
  const snap = await getDoc(doc(db!, 'userCodes', code.trim().toUpperCase()));
  if (!snap.exists()) return null;
  const d = snap.data();
  return { uid: d.uid as string, name: (d.name as string) || 'Colega' };
}

// ── Amizades ─────────────────────────────────────────────────────────────────

function pairId(a: string, b: string) {
  return [a, b].sort().join('_');
}

/** Envia pedido de amizade a partir do código do amigo. */
export async function addFriendByCode(
  me: { uid: string; name: string },
  code: string
): Promise<{ ok: boolean; message: string }> {
  if (!ok()) return { ok: false, message: 'Recurso indisponível.' };
  const target = await lookupByCode(code);
  if (!target) return { ok: false, message: 'Código não encontrado.' };
  if (target.uid === me.uid) return { ok: false, message: 'Esse é o seu próprio código 🙂' };
  const id = pairId(me.uid, target.uid);
  const ref = doc(db!, 'friendships', id);
  const existing = await getDoc(ref);
  if (existing.exists()) {
    const st = existing.data().status;
    return { ok: false, message: st === 'accepted' ? 'Vocês já são amigos.' : 'Convite já enviado.' };
  }
  await setDoc(ref, {
    users: [me.uid, target.uid],
    requesterUid: me.uid,
    requesterName: me.name,
    addresseeUid: target.uid,
    addresseeName: target.name,
    status: 'pending',
    createdAt: serverTimestamp(),
  });
  return { ok: true, message: `Convite enviado para ${target.name}!` };
}

export async function acceptFriend(id: string): Promise<void> {
  if (!ok()) return;
  await updateDoc(doc(db!, 'friendships', id), { status: 'accepted' });
}

/** Observa as amizades do usuário em tempo real. */
export function watchFriendships(uid: string, cb: (list: Friendship[]) => void): () => void {
  if (!ok()) { cb([]); return () => {}; }
  const q = query(collection(db!, 'friendships'), where('users', 'array-contains', uid));
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Friendship, 'id'>) })));
  }, () => cb([]));
}

// ── Batalhas ─────────────────────────────────────────────────────────────────

export async function createBattle(
  challenger: { uid: string; name: string },
  opponent: { uid: string; name: string },
  subject: string,
  questionIds: string[]
): Promise<string | null> {
  if (!ok()) return null;
  const ref = doc(collection(db!, 'battles'));
  await setDoc(ref, {
    participants: [challenger.uid, opponent.uid],
    challengerUid: challenger.uid,
    challengerName: challenger.name,
    opponentUid: opponent.uid,
    opponentName: opponent.name,
    subject,
    questionIds,
    challengerScore: null,
    opponentScore: null,
    status: 'pending',
    winnerUid: null,
    rewarded: {},
    createdAt: serverTimestamp(),
  });
  return ref.id;
}

export async function getBattle(id: string): Promise<Battle | null> {
  if (!ok()) return null;
  const snap = await getDoc(doc(db!, 'battles', id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...(snap.data() as Omit<Battle, 'id'>) };
}

/** Registra o placar de um jogador; se ambos jogaram, decide o vencedor. */
export async function submitBattleScore(battleId: string, uid: string, score: number): Promise<void> {
  if (!ok()) return;
  const ref = doc(db!, 'battles', battleId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;
  const b = snap.data() as Omit<Battle, 'id'>;
  const isChallenger = b.challengerUid === uid;
  const challengerScore = isChallenger ? score : b.challengerScore;
  const opponentScore = isChallenger ? b.opponentScore : score;
  const bothDone = challengerScore != null && opponentScore != null;
  let status: 'pending' | 'finished' = b.status;
  let winnerUid: string | null = b.winnerUid;
  if (bothDone) {
    status = 'finished';
    winnerUid =
      challengerScore === opponentScore ? null
      : (challengerScore as number) > (opponentScore as number) ? b.challengerUid : b.opponentUid;
  }
  await updateDoc(ref, {
    challengerScore, opponentScore, status, winnerUid,
    updatedAt: serverTimestamp(),
  });
}

/** Marca que este usuário já recebeu a recompensa (evita duplicar). */
export async function markRewarded(battleId: string, uid: string): Promise<void> {
  if (!ok()) return;
  await updateDoc(doc(db!, 'battles', battleId), { [`rewarded.${uid}`]: true });
}

export function watchBattles(uid: string, cb: (list: Battle[]) => void): () => void {
  if (!ok()) { cb([]); return () => {}; }
  const q = query(collection(db!, 'battles'), where('participants', 'array-contains', uid));
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Battle, 'id'>) })));
  }, () => cb([]));
}

// Evita warning de import não usado (arrayUnion reservado p/ evolução futura).
void arrayUnion;
