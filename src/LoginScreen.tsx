import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, Eye, EyeOff, Stethoscope, AlertCircle, AlertTriangle } from 'lucide-react';
import { useAuth } from './AuthContext';
import { isFirebaseConfigured as firebaseConfigured } from './firebase';

type Tab = 'login' | 'register';

export default function LoginScreen() {
  const { signInWithGoogle, signInWithEmail, createAccount, signInAsGuest } = useAuth();

  const [tab, setTab] = useState<Tab>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const clearError = () => setError('');

  const handleGoogle = async () => {
    setLoading(true);
    clearError();
    try {
      await signInWithGoogle();
    } catch (e: unknown) {
      setError(friendlyError(e));
    } finally {
      setLoading(false);
    }
  };

  const handleEmail = async () => {
    if (!email || !password) { setError('Preencha e-mail e senha.'); return; }
    setLoading(true);
    clearError();
    try {
      if (tab === 'login') {
        await signInWithEmail(email, password);
      } else {
        if (!name.trim()) { setError('Informe seu nome.'); setLoading(false); return; }
        await createAccount(email, password, name.trim());
      }
    } catch (e: unknown) {
      setError(friendlyError(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#040B1A] flex flex-col items-center justify-center px-5 py-10">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 mb-10"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-[#040B1A] to-[#0E1D4A] rounded-[1.8rem] flex items-center justify-center border border-cyan-900/40 shadow-2xl shadow-cyan-900/30">
          <Stethoscope size={38} className="text-cyan-400" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-black text-white tracking-tighter">MedQuest</h1>
          <p className="text-cyan-400/60 text-xs font-bold uppercase tracking-widest mt-1">Residência Médica</p>
        </div>
      </motion.div>

      {/* Firebase not configured warning */}
      {!firebaseConfigured && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm mb-4 flex items-start gap-3 px-5 py-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl"
        >
          <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-300 text-xs font-black uppercase tracking-widest mb-1">Firebase não configurado</p>
            <p className="text-amber-400/70 text-xs font-medium leading-snug">
              Crie um <span className="text-amber-300 font-bold">.env</span> com as credenciais Firebase para ativar o login. Por enquanto o app funciona em modo local.
            </p>
          </div>
        </motion.div>
      )}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-sm bg-white/[0.04] border border-white/8 rounded-[2rem] p-7 backdrop-blur-xl shadow-2xl"
      >
        {!firebaseConfigured ? (
          // Modo sem Firebase: mostrar só opção de entrar como convidado
          <div className="flex flex-col items-center gap-5 py-2">
            <p className="text-cyan-300/60 text-sm font-medium text-center leading-relaxed">
              Configure o Firebase para ativar login com Google e salvar seu progresso na nuvem.
            </p>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={signInAsGuest}
              className="w-full py-3.5 bg-cyan-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg shadow-cyan-600/30 hover:bg-cyan-500 transition-all"
            >
              Entrar como Convidado
            </motion.button>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex gap-1 bg-white/5 rounded-2xl p-1 mb-7">
              {(['login', 'register'] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => { setTab(t); clearError(); }}
                  className={`flex-1 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                    tab === t
                      ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30'
                      : 'text-cyan-400/50 hover:text-cyan-300'
                  }`}
                >
                  {t === 'login' ? 'Entrar' : 'Criar Conta'}
                </button>
              ))}
            </div>

            {/* Google */}
            <button
              onClick={handleGoogle}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 py-3.5 bg-white text-slate-800 font-black text-sm rounded-2xl shadow-lg hover:bg-slate-50 active:scale-[0.98] transition-all mb-5 disabled:opacity-60"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuar com Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-white/8" />
              <span className="text-[10px] font-black text-cyan-400/30 uppercase tracking-widest">ou</span>
              <div className="flex-1 h-px bg-white/8" />
            </div>

            {/* Form */}
            <div className="flex flex-col gap-3">
              <AnimatePresence>
                {tab === 'register' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400/40" />
                      <input
                        type="text"
                        placeholder='Seu nome (ex: Dr. Silva)'
                        value={name}
                        onChange={e => { setName(e.target.value); clearError(); }}
                        className="w-full pl-10 pr-4 py-3.5 bg-white/5 border border-white/8 rounded-xl text-white text-sm font-bold placeholder:text-cyan-400/25 focus:border-cyan-500/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400/40" />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={e => { setEmail(e.target.value); clearError(); }}
                  className="w-full pl-10 pr-4 py-3.5 bg-white/5 border border-white/8 rounded-xl text-white text-sm font-bold placeholder:text-cyan-400/25 focus:border-cyan-500/50 focus:outline-none transition-colors"
                />
              </div>

              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400/40" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Senha"
                  value={password}
                  onChange={e => { setPassword(e.target.value); clearError(); }}
                  onKeyDown={e => e.key === 'Enter' && handleEmail()}
                  className="w-full pl-10 pr-12 py-3.5 bg-white/5 border border-white/8 rounded-xl text-white text-sm font-bold placeholder:text-cyan-400/25 focus:border-cyan-500/50 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400/30 hover:text-cyan-400/60 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl"
                  >
                    <AlertCircle size={14} className="text-red-400 shrink-0" />
                    <p className="text-red-400 text-xs font-bold">{error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleEmail}
                disabled={loading}
                className="w-full py-3.5 bg-cyan-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg shadow-cyan-600/30 hover:bg-cyan-500 active:bg-cyan-700 transition-all disabled:opacity-60 mt-1"
              >
                {loading ? 'Aguarde...' : tab === 'login' ? 'Entrar' : 'Criar Conta'}
              </motion.button>
            </div>
          </>
        )}
      </motion.div>

      <p className="text-cyan-400/20 text-[10px] font-bold uppercase tracking-widest mt-8 text-center">
        Ao continuar você aceita os Termos de Uso
      </p>
    </div>
  );
}

function friendlyError(e: unknown): string {
  const code = (e as { code?: string })?.code ?? '';
  const map: Record<string, string> = {
    'auth/user-not-found':        'Usuário não encontrado.',
    'auth/wrong-password':        'Senha incorreta.',
    'auth/email-already-in-use':  'E-mail já cadastrado. Tente entrar.',
    'auth/weak-password':         'Senha muito fraca. Use ao menos 6 caracteres.',
    'auth/invalid-email':         'E-mail inválido.',
    'auth/invalid-credential':    'E-mail ou senha incorretos.',
    'auth/popup-closed-by-user':  'Login cancelado.',
    'auth/network-request-failed':'Sem conexão. Verifique sua internet.',
  };
  return map[code] ?? 'Ocorreu um erro. Tente novamente.';
}
