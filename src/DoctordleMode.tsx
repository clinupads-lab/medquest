import { useState, useMemo, useEffect } from 'react';
import { CLINICAL_CASES, ClinicalCase } from './clinicalCases';
import { CheckCircle2, XCircle, RotateCcw, X, ChevronRight, Lightbulb } from 'lucide-react';

interface DoctordleModeProps {
  onExit: () => void;
}

const MAX_GUESSES = 6;

// Normaliza texto: minúsculo, sem acento, sem pontuação extra.
function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Lista de todos os diagnósticos possíveis (para o autocomplete).
const ALL_DIAGNOSES = Array.from(new Set(CLINICAL_CASES.map(c => c.diagnosis))).sort();

export default function DoctordleMode({ onExit }: DoctordleModeProps) {
  const [deck, setDeck] = useState<ClinicalCase[]>(() => shuffle(CLINICAL_CASES));
  const [caseIndex, setCaseIndex] = useState(0);
  const [guesses, setGuesses] = useState<string[]>([]); // tentativas erradas + a certa (se houver)
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [solved, setSolved] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const current = deck[caseIndex];

  // Pistas reveladas = 1 (inicial) + número de tentativas erradas.
  const revealedClues = Math.min(current.clues.length, 1 + guesses.length);

  const suggestions = useMemo(() => {
    if (!input.trim()) return [];
    const n = normalize(input);
    return ALL_DIAGNOSES.filter(d => normalize(d).includes(n)).slice(0, 6);
  }, [input]);

  const isMatch = (guess: string, c: ClinicalCase): boolean => {
    const g = normalize(guess);
    if (!g) return false;
    const targets = [c.diagnosis, ...c.aliases].map(normalize);
    return targets.some(t => t === g || t.includes(g) && g.length >= 4 || g.includes(t) && t.length >= 4);
  };

  const submitGuess = () => {
    if (status !== 'playing' || !input.trim()) return;
    const guess = input.trim();
    setShowSuggestions(false);

    if (isMatch(guess, current)) {
      setGuesses(prev => [...prev, guess]);
      setStatus('won');
      setSolved(s => s + 1);
      setStreak(s => s + 1);
    } else {
      const next = [...guesses, guess];
      setGuesses(next);
      if (next.length >= MAX_GUESSES) {
        setStatus('lost');
        setStreak(0);
      }
    }
    setInput('');
  };

  const nextCase = () => {
    if (caseIndex < deck.length - 1) {
      setCaseIndex(i => i + 1);
      setGuesses([]);
      setInput('');
      setStatus('playing');
      setShowSuggestions(false);
    } else {
      // Reembaralha e recomeça o baralho.
      setDeck(shuffle(CLINICAL_CASES));
      setCaseIndex(0);
      setGuesses([]);
      setInput('');
      setStatus('playing');
    }
  };

  const restart = () => {
    setDeck(shuffle(CLINICAL_CASES));
    setCaseIndex(0);
    setGuesses([]);
    setInput('');
    setStatus('playing');
    setSolved(0);
    setStreak(0);
  };

  // Reseta sugestões ao trocar de caso.
  useEffect(() => { setShowSuggestions(false); }, [caseIndex]);

  const finished = status !== 'playing';

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 py-6" style={{ background: 'linear-gradient(180deg,#f0fdfa 0%,#f1f5f9 100%)' }}>
      {/* Barra superior */}
      <div className="w-full max-w-xl flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-lg font-black text-teal-700 leading-none">{solved}</div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Resolvidos</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-black text-amber-600 leading-none">{streak}🔥</div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Sequência</div>
          </div>
        </div>
        <button onClick={onExit} className="p-2 rounded-xl hover:bg-slate-200 transition-colors">
          <X size={22} className="text-slate-500" />
        </button>
      </div>

      {/* Cartão principal */}
      <div className="w-full max-w-xl bg-white rounded-[2rem] shadow-xl border border-slate-100 p-6 sm:p-8">
        {/* Título */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: '#134e4a' }}>
            Qual é o diagnóstico?
          </h1>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full" style={{ background: '#14b8a6' }} />
        </div>

        {/* Caixa do caso clínico (pistas progressivas) */}
        <div className="space-y-2 mb-4">
          <div className="rounded-2xl px-4 py-3.5 text-center font-bold text-slate-800 leading-snug" style={{ background: '#eff6ff', border: '1px solid #dbeafe' }}>
            {current.clues[0]}
          </div>
          {current.clues.slice(1, revealedClues).map((clue, i) => (
            <div
              key={i}
              className="rounded-2xl px-4 py-3 text-center text-sm font-medium text-slate-700 leading-snug animate-[fadeIn_0.3s_ease]"
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-600 mr-2">Pista {i + 2}</span>
              {clue}
            </div>
          ))}
        </div>

        {/* Caixas de tentativa (estilo Wordle) */}
        <div className="space-y-2 mb-5">
          {Array.from({ length: MAX_GUESSES }).map((_, i) => {
            const guess = guesses[i];
            const isCorrectGuess = finished && status === 'won' && i === guesses.length - 1;
            const isEmpty = !guess;
            return (
              <div
                key={i}
                className="w-full rounded-2xl px-4 py-3 flex items-center gap-3 transition-all"
                style={{
                  background: isEmpty ? '#eef2ff' : isCorrectGuess ? '#dcfce7' : '#fee2e2',
                  border: `1px solid ${isEmpty ? '#e0e7ff' : isCorrectGuess ? '#86efac' : '#fecaca'}`,
                  minHeight: 48,
                }}
              >
                {guess && (
                  <>
                    {isCorrectGuess
                      ? <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                      : <XCircle size={18} className="text-red-500 shrink-0" />}
                    <span className={`font-bold text-sm ${isCorrectGuess ? 'text-green-800' : 'text-red-700'}`}>{guess}</span>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Resultado final */}
        {finished && (
          <div className="mb-5">
            <div className={`rounded-2xl p-4 mb-3 ${status === 'won' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-center gap-2 mb-1">
                {status === 'won'
                  ? <><CheckCircle2 size={20} className="text-green-600" /><span className="font-black text-green-700">Acertou em {guesses.length} {guesses.length === 1 ? 'tentativa' : 'tentativas'}! 🎉</span></>
                  : <><XCircle size={20} className="text-red-600" /><span className="font-black text-red-700">Não foi dessa vez</span></>}
              </div>
              <p className="text-sm text-slate-700">
                <span className="font-bold">Diagnóstico:</span> {current.diagnosis}
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mt-1">{current.specialty}</p>
            </div>
            <div className="rounded-2xl p-4 bg-blue-50 border-l-4 border-blue-400">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Lightbulb size={15} className="text-blue-600" />
                <span className="text-xs font-black uppercase tracking-wider text-blue-800">Explicação</span>
              </div>
              <p className="text-sm text-blue-900 leading-relaxed">{current.explanation}</p>
            </div>
          </div>
        )}

        {/* Input + autocomplete */}
        {!finished ? (
          <div className="relative">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  value={input}
                  onChange={e => { setInput(e.target.value); setShowSuggestions(true); }}
                  onKeyDown={e => { if (e.key === 'Enter') submitGuess(); }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Digite seu diagnóstico..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 outline-none font-medium text-slate-800 transition-colors"
                  autoComplete="off"
                  autoFocus
                />
                {input && (
                  <button onClick={() => { setInput(''); setShowSuggestions(false); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500">
                    <X size={16} />
                  </button>
                )}
              </div>
              <button
                onClick={submitGuess}
                disabled={!input.trim()}
                className="px-6 py-3 rounded-xl font-black text-white transition-all disabled:opacity-40 active:scale-95"
                style={{ background: 'linear-gradient(135deg,#14b8a6 0%,#0d9488 100%)' }}
              >
                Enviar
              </button>
            </div>

            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute z-50 w-full mt-1.5 bg-white rounded-xl border-2 border-teal-100 shadow-xl overflow-hidden">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onMouseDown={() => { setInput(s); setShowSuggestions(false); }}
                    className="w-full text-left px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-teal-50 border-b border-slate-50 last:border-0 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <p className="text-[10px] text-slate-400 text-center mt-3 leading-relaxed">
              A cada erro, uma nova pista é revelada. Você tem {MAX_GUESSES} tentativas.<br />
              *Modo de estudo — não substitui avaliação médica real.
            </p>
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={nextCase}
              className="flex-1 px-6 py-3.5 rounded-xl font-black text-white flex items-center justify-center gap-2 active:scale-95 transition-transform"
              style={{ background: 'linear-gradient(135deg,#14b8a6 0%,#0d9488 100%)' }}
            >
              Próximo caso <ChevronRight size={18} />
            </button>
            <button onClick={restart} className="px-5 py-3.5 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 flex items-center gap-2 transition-colors">
              <RotateCcw size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
