// Efeitos sonoros + vibração gerados via Web Audio API (sem arquivos externos).
// Respeita um flag global de "som ligado" e a vibração usa navigator.vibrate.

let enabled = true;
let ctx: AudioContext | null = null;

export function setSfxEnabled(on: boolean) {
  enabled = on;
}

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!ctx) {
      const AC = window.AudioContext || (window as any).webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    // Navegadores suspendem o contexto até uma interação; retoma quando necessário.
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  } catch {
    return null;
  }
}

// Toca uma sequência de tons (freq em Hz, dur em s) em ondas suaves.
function tones(seq: { f: number; d: number; type?: OscillatorType; vol?: number }[]) {
  const ac = getCtx();
  if (!ac) return;
  let t = ac.currentTime;
  for (const n of seq) {
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = n.type ?? 'sine';
    osc.frequency.setValueAtTime(n.f, t);
    const vol = n.vol ?? 0.14;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(vol, t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + n.d);
    osc.connect(gain).connect(ac.destination);
    osc.start(t);
    osc.stop(t + n.d + 0.02);
    t += n.d;
  }
}

function vibrate(pattern: number | number[]) {
  try {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) navigator.vibrate(pattern);
  } catch {
    /* ignore */
  }
}

// Acerto: dois tons ascendentes alegres + vibração curta.
export function playCorrect() {
  if (!enabled) return;
  tones([
    { f: 660, d: 0.09, type: 'triangle' },
    { f: 880, d: 0.14, type: 'triangle' },
  ]);
  vibrate(20);
}

// Erro: tom grave curto + vibração dupla.
export function playWrong() {
  if (!enabled) return;
  tones([
    { f: 200, d: 0.16, type: 'sawtooth', vol: 0.1 },
    { f: 150, d: 0.18, type: 'sawtooth', vol: 0.1 },
  ]);
  vibrate([30, 40, 30]);
}

// Subiu de nível: pequeno arpejo.
export function playLevelUp() {
  if (!enabled) return;
  tones([
    { f: 523, d: 0.1, type: 'triangle' },
    { f: 659, d: 0.1, type: 'triangle' },
    { f: 784, d: 0.1, type: 'triangle' },
    { f: 1047, d: 0.22, type: 'triangle' },
  ]);
  vibrate([15, 30, 15, 30, 40]);
}

// Aviso de tempo acabando (tique tenso).
export function playTick() {
  if (!enabled) return;
  tones([{ f: 440, d: 0.05, type: 'square', vol: 0.06 }]);
}

// Tempo esgotado.
export function playTimeout() {
  if (!enabled) return;
  tones([
    { f: 300, d: 0.12, type: 'sawtooth', vol: 0.09 },
    { f: 180, d: 0.22, type: 'sawtooth', vol: 0.09 },
  ]);
  vibrate([50, 30, 80]);
}
