// Paywall do MedQuest Premium (assinatura via Mercado Pago).
//
// Aparece quando o usuário free esgota as questões grátis do dia (ou tenta
// um recurso premium, como o Simulado). Mostra os dois planos — Estudante
// R$ 29,90/mês e Residência R$ 79,90/mês — e manda pro checkout do MP.
// O desbloqueio em si acontece via webhook + onSnapshot (AuthContext):
// nada aqui escreve `plan` no Firestore.

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X, Check, Crown, Zap, Sparkles, ShieldCheck, Loader2, PartyPopper,
} from 'lucide-react';

export type PaywallPlanId = 'estudante' | 'residencia';
export type PaywallReason = 'limit' | 'simulado' | 'flashcard' | 'doctordle';

const PLAN_CARDS: Array<{
  id: PaywallPlanId;
  title: string;
  price: string;
  tagline: string;
  color: string;
  gradFrom: string;
  gradTo: string;
  highlight?: boolean;
  perks: string[];
}> = [
  {
    id: 'estudante',
    title: 'Estudante',
    price: '29,90',
    tagline: 'Pra dominar a graduação',
    color: '#00a7e1',
    gradFrom: '#00a7e1',
    gradTo: '#0284c7',
    perks: [
      'Questões ilimitadas na trilha Estudante',
      'Flashcards e revisão de erros sem limite',
      'Dr. Quest IA nos pontos fracos',
      'Estatísticas completas de desempenho',
    ],
  },
  {
    id: 'residencia',
    title: 'Residência',
    price: '79,90',
    tagline: 'Tudo do MedQuest, sem limites',
    color: '#00658a',
    gradFrom: '#00a7e1',
    gradTo: '#00658a',
    highlight: true,
    perks: [
      'Tudo da trilha Estudante, incluso',
      'Questões ilimitadas de todas as bancas',
      'Simulados oficiais de 100 questões',
      'ENARE, USP, UNIFESP, ENAMED e mais',
      'Batalhas e salas em grupo ilimitadas',
    ],
  },
];

interface PaywallModalProps {
  open: boolean;
  reason: PaywallReason;
  usedToday: number;
  dailyLimit: number;
  isGuest: boolean;
  /** Trilha atual — pré-seleciona o plano correspondente. */
  defaultPlan: PaywallPlanId;
  onClose: () => void;
  /** Cria a assinatura e devolve a URL de checkout do Mercado Pago. */
  onSubscribe: (planId: PaywallPlanId) => Promise<string>;
  /** Convidado precisa de conta com e-mail antes de assinar. */
  onCreateAccount: () => void;
}

export function PaywallModal({
  open, reason, usedToday, dailyLimit, isGuest, defaultPlan,
  onClose, onSubscribe, onCreateAccount,
}: PaywallModalProps) {
  const [selected, setSelected] = useState<PaywallPlanId>(defaultPlan);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Convidado: primeiro conhece os planos; só depois vê o botão de assinar.
  const [guestSawPlans, setGuestSawPlans] = useState(false);
  const showPlans = !isGuest || guestSawPlans;

  const handleSubscribe = async () => {
    if (busy) return;
    // O checkout do Mercado Pago exige o e-mail do pagador; convidado não tem.
    // Então, ao assinar, ele cria a conta antes — a assinatura fica no e-mail.
    if (isGuest) { onCreateAccount(); return; }
    setBusy(true);
    setError(null);
    try {
      const url = await onSubscribe(selected);
      // Redireciona pro checkout do Mercado Pago; o retorno cai em
      // /?checkout=retorno e o App assume dali.
      window.location.href = url;
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : '';
      setError(
        msg.includes('conta com e-mail')
          ? 'Crie uma conta com e-mail para assinar.'
          : 'Não deu pra abrir o checkout agora. Tenta de novo em instantes.'
      );
      setBusy(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-sm p-0 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl"
          >
            {/* Header gradiente */}
            <div
              className="relative px-6 pt-6 pb-8 text-center overflow-hidden"
              style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 100%)' }}
            >
              <motion.div
                initial={{ x: '-120%' }}
                animate={{ x: '220%' }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
              />
              <button
                onClick={onClose}
                aria-label="Fechar"
                className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center text-white/80 hover:text-white active:scale-90 transition-all"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <X size={18} />
              </button>

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.18)' }}
              >
                <Crown size={32} className="text-yellow-300" fill="currentColor" />
              </motion.div>
              <h2 className="text-xl font-black text-white uppercase tracking-tight leading-none mb-1.5">
                MedQuest Premium
              </h2>
              <p className="text-[12px] font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {reason === 'simulado'
                  ? 'Simulados completos de 100 questões são exclusivos do Premium.'
                  : reason === 'flashcard'
                  ? 'No plano grátis você revisa 2 flashcards por vez. Libere baralhos completos com o Premium.'
                  : reason === 'doctordle'
                  ? 'No plano grátis o Diagnóstico dá 2 tentativas por caso. Tenha 6 tentativas e casos ilimitados no Premium.'
                  : `Você usou ${Math.min(usedToday, dailyLimit)}/${dailyLimit} questões grátis de hoje.`}
              </p>

              {/* Barra de uso do dia (só no gate de limite) */}
              {reason === 'limit' && (
                <div className="mt-3 mx-auto max-w-[240px] h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.25)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, (usedToday / dailyLimit) * 100)}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-yellow-300"
                  />
                </div>
              )}
            </div>

            <div className="p-5 flex flex-col gap-4">
              {!showPlans ? (
                /* Convidado: primeiro convida a conhecer os planos. */
                <div className="flex flex-col gap-4 py-2">
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                    <Sparkles size={22} className="mx-auto mb-2" style={{ color: '#00a7e1' }} />
                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight mb-1">
                      Estude sem limites
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium leading-snug">
                      Veja os planos e escolha o ideal pra você. Pra assinar, é só criar sua conta —
                      leva segundos e seu Premium te acompanha em qualquer aparelho.
                    </p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setGuestSawPlans(true)}
                    className="w-full rounded-2xl py-4 text-white font-black text-sm uppercase tracking-widest"
                    style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 100%)', boxShadow: '0 8px 24px rgba(0,101,138,0.35)' }}
                  >
                    Conheça os planos
                  </motion.button>
                </div>
              ) : (
                <>
                  {/* Cards dos planos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PLAN_CARDS.map((p) => {
                      const isSel = selected === p.id;
                      return (
                        <motion.button
                          key={p.id}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setSelected(p.id)}
                          className={`relative text-left rounded-2xl p-4 border-2 transition-all ${
                            isSel ? 'shadow-lg' : 'border-slate-100 hover:border-slate-200'
                          }`}
                          style={isSel ? { borderColor: p.color, background: `${p.color}0d` } : undefined}
                        >
                          {p.highlight && (
                            <span
                              className="absolute -top-2.5 left-4 px-2.5 py-0.5 rounded-full text-[8px] font-black text-white uppercase tracking-widest flex items-center gap-1"
                              style={{ background: `linear-gradient(135deg,${p.gradFrom},${p.gradTo})` }}
                            >
                              <Sparkles size={9} /> Mais completo
                            </span>
                          )}
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-xs font-black text-slate-900 uppercase tracking-tight">{p.title}</p>
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSel ? '' : 'border-slate-200'}`}
                              style={isSel ? { borderColor: p.color, background: p.color } : undefined}
                            >
                              {isSel && <Check size={12} className="text-white" strokeWidth={4} />}
                            </div>
                          </div>
                          <p className="mb-2">
                            <span className="text-[10px] font-bold text-slate-400 align-top">R$&nbsp;</span>
                            <span className="text-2xl font-black text-slate-900 tracking-tight">{p.price}</span>
                            <span className="text-[10px] font-bold text-slate-400">/mês</span>
                          </p>
                          <p className="text-[10px] font-bold uppercase tracking-wide mb-2.5" style={{ color: p.color }}>
                            {p.tagline}
                          </p>
                          <ul className="flex flex-col gap-1.5">
                            {p.perks.map((perk) => (
                              <li key={perk} className="flex items-start gap-1.5 text-[10px] text-slate-500 font-medium leading-tight">
                                <Check size={11} strokeWidth={3.5} className="shrink-0 mt-[1px]" style={{ color: p.color }} />
                                {perk}
                              </li>
                            ))}
                          </ul>
                        </motion.button>
                      );
                    })}
                  </div>

                  {error && (
                    <p className="text-[11px] font-bold text-red-500 text-center bg-red-50 border border-red-100 rounded-xl py-2 px-3">
                      {error}
                    </p>
                  )}

                  {/* CTA */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSubscribe}
                    disabled={busy}
                    className="relative w-full overflow-hidden rounded-2xl py-4 flex items-center justify-center gap-2 text-white font-black text-sm uppercase tracking-widest disabled:opacity-70"
                    style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 100%)', boxShadow: '0 8px 24px rgba(0,101,138,0.35)' }}
                  >
                    {!busy && (
                      <motion.div
                        initial={{ x: '-120%' }}
                        animate={{ x: '220%' }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                      />
                    )}
                    {busy
                      ? (<><Loader2 size={18} className="animate-spin" /> Abrindo checkout…</>)
                      : isGuest
                      ? (<><Zap size={16} fill="currentColor" /> Criar conta e assinar</>)
                      : (<><Zap size={16} fill="currentColor" /> Assinar com Mercado Pago</>)}
                  </motion.button>

                  <p className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-slate-400 text-center">
                    <ShieldCheck size={12} className="text-emerald-500" />
                    {isGuest
                      ? 'Você cria a conta e vai direto pro checkout · Cancele quando quiser'
                      : 'Pagamento seguro via Mercado Pago · Cancele quando quiser'}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Retorno do checkout ──────────────────────────────────────────────
// Mostrado quando o usuário volta do Mercado Pago (/?checkout=retorno).
// Fica em "processando" até o webhook confirmar (plan vira premium via
// onSnapshot); aí celebra. O MP pode levar alguns instantes pra notificar.
interface CheckoutReturnModalProps {
  open: boolean;
  isPremium: boolean;
  planTier: string;
  onClose: () => void;
}

export function CheckoutReturnModal({ open, isPremium, planTier, onClose }: CheckoutReturnModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl p-8 text-center"
          >
            {isPremium ? (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.15, 1] }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-3xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 100%)', boxShadow: '0 12px 32px rgba(0,101,138,0.4)' }}
                >
                  <PartyPopper size={38} className="text-yellow-300" />
                </motion.div>
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">
                  Bem-vindo ao Premium!
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-snug mb-6">
                  Sua assinatura {planTier === 'residencia' ? 'Residência' : 'Estudante'} está ativa.
                  Questões liberadas — bons estudos! 🎉
                </p>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={onClose}
                  className="w-full rounded-2xl py-4 text-white font-black text-sm uppercase tracking-widest"
                  style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 100%)', boxShadow: '0 8px 24px rgba(0,101,138,0.35)' }}
                >
                  Começar a estudar
                </motion.button>
              </>
            ) : (
              <>
                <div className="w-20 h-20 mx-auto mb-4 rounded-3xl flex items-center justify-center bg-slate-50 border border-slate-100">
                  <Loader2 size={34} className="animate-spin" style={{ color: '#00a7e1' }} />
                </div>
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">
                  Confirmando pagamento…
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-snug mb-6">
                  O Mercado Pago está processando sua assinatura. Isso costuma levar
                  poucos segundos — pode continuar estudando que a gente te avisa.
                </p>
                <button
                  onClick={onClose}
                  className="w-full rounded-2xl py-3.5 text-slate-500 font-black text-xs uppercase tracking-widest bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Continuar estudando
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
