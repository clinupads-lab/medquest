/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Dr. Quest — mascote oficial do MedQuest.
 * Coração-médico de jaleco: vetor puro (SVG) com expressões trocáveis,
 * no estilo Duolingo. Ele reage aos acertos e erros do usuário durante
 * as questões: feliz quando acerta, triste quando erra, comemorando em
 * combos, preocupado no timeout.
 *
 * Animações embutidas (CSS no próprio SVG, respeitando
 * prefers-reduced-motion): batimento cardíaco no idle, piscar de olhos,
 * lágrima caindo (sad), gota de suor (worried), pulinhos + confete (cheer).
 */

export type MascotExpression = 'confident' | 'happy' | 'cheer' | 'sad' | 'worried' | 'focus';

const C = {
  body: '#6290B8',
  bodyLine: '#3A5A7A',
  iris: '#4478A8',
  pupil: '#192A3E',
  line: '#1C2E45',
  coat: '#ffffff',
  coatLine: '#4A6886',
  coatShade: '#CCDFF0',
  shoe: '#C4782A',
  shoeLine: '#A05E1A',
  tongue: '#D46060',
  blush: '#E8A0AC',
  amber: '#f1c100',
  tear: '#7fd6f5',
};

/** Manga do jaleco + mão-luva azul, em qualquer pose. */
function Arm({ x1, y1, x2, y2, hx, hy }: { x1: number; y1: number; x2: number; y2: number; hx: number; hy: number }) {
  return (
    <>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.coatLine} strokeWidth={17} strokeLinecap="round" />
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.coat} strokeWidth={13.5} strokeLinecap="round" />
      <ellipse cx={hx} cy={hy} rx={10} ry={9} fill={C.body} stroke={C.bodyLine} strokeWidth={1.8} />
    </>
  );
}

export function Mascot({
  expression = 'confident',
  crop = 'full',
  className = '',
}: {
  expression?: MascotExpression;
  crop?: 'full' | 'head';
  className?: string;
}) {
  const e = expression;
  const armsUp = e === 'cheer';
  const armsOpen = e === 'happy';
  const openEyes = e === 'confident' || e === 'happy' || e === 'worried' || e === 'focus';

  return (
    <svg
      viewBox={crop === 'head' ? '30 4 140 138' : '0 0 200 244'}
      className={className}
      role="img"
      aria-label="Dr. Quest, mascote do MedQuest"
    >
      <style>{`
        .mq-bob   { animation: mqBob 3.4s ease-in-out infinite; }
        .mq-cheer { animation: mqCheer 0.65s ease-in-out infinite; }
        .mq-pulse { animation: mqPulse 2.8s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 62%; }
        .mq-blink { opacity: 0; animation: mqBlink 4.6s linear infinite; }
        .mq-tear  { animation: mqTear 2.1s ease-in infinite; }
        .mq-sweat { animation: mqSweat 2.6s ease-in-out infinite; }
        .mq-spark { animation: mqSpark 1.5s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        .mq-sp2 { animation-delay: 0.4s; } .mq-sp3 { animation-delay: 0.8s; } .mq-sp4 { animation-delay: 1.1s; }
        @keyframes mqBob   { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes mqCheer { 0%, 100% { transform: translateY(0); } 40% { transform: translateY(-9px); } }
        @keyframes mqPulse { 0%, 16%, 100% { transform: scale(1); } 5% { transform: scale(1.04); } 11% { transform: scale(1.012); } }
        @keyframes mqBlink { 0%, 92.5%, 97.5%, 100% { opacity: 0; } 94%, 96% { opacity: 1; } }
        @keyframes mqTear  { 0% { transform: translateY(0); opacity: 0; } 18% { opacity: 1; } 75% { transform: translateY(24px); opacity: 1; } 100% { transform: translateY(32px); opacity: 0; } }
        @keyframes mqSweat { 0%, 25% { transform: translateY(0); opacity: 0; } 45% { opacity: 1; } 85% { transform: translateY(14px); opacity: 1; } 100% { transform: translateY(20px); opacity: 0; } }
        @keyframes mqSpark { 0%, 100% { opacity: 0.35; transform: scale(0.7); } 50% { opacity: 1; transform: scale(1.15); } }
        @media (prefers-reduced-motion: reduce) {
          .mq-bob, .mq-cheer, .mq-pulse, .mq-blink, .mq-tear, .mq-sweat, .mq-spark { animation: none; }
        }
      `}</style>

      <g className={armsUp ? 'mq-cheer' : 'mq-bob'}>
        {crop === 'full' && (
          <>
            {/* sombra */}
            <ellipse cx={100} cy={238} rx={46} ry={6} fill="rgba(0,0,0,0.13)" />

            {/* sapatos */}
            <ellipse cx={80} cy={226} rx={29} ry={14} fill={C.shoe} />
            <ellipse cx={120} cy={226} rx={29} ry={14} fill={C.shoe} />
            <ellipse cx={71} cy={220} rx={12} ry={5} fill="rgba(255,255,255,0.28)" transform="rotate(-8 71 220)" />
            <ellipse cx={111} cy={220} rx={12} ry={5} fill="rgba(255,255,255,0.28)" transform="rotate(-8 111 220)" />
            <ellipse cx={80} cy={226} rx={29} ry={14} fill="none" stroke={C.shoeLine} strokeWidth={1.5} opacity={0.5} />
            <ellipse cx={120} cy={226} rx={29} ry={14} fill="none" stroke={C.shoeLine} strokeWidth={1.5} opacity={0.5} />

            {/* pernas */}
            <rect x={68} y={184} width={24} height={46} rx={12} fill={C.body} />
            <rect x={108} y={184} width={24} height={46} rx={12} fill={C.body} />
            <rect x={68} y={184} width={24} height={46} rx={12} fill="none" stroke={C.bodyLine} strokeWidth={1.5} opacity={0.35} />
            <rect x={108} y={184} width={24} height={46} rx={12} fill="none" stroke={C.bodyLine} strokeWidth={1.5} opacity={0.35} />

            {/* aba esquerda do jaleco */}
            <path d="M 40,82 C 32,96 6,118 2,140 L 2,208 C 2,210 4,212 6,212 L 46,212 C 44,194 42,168 40,138 C 39,116 39,98 40,82 Z"
              fill={C.coat} stroke={C.coatLine} strokeWidth={2.5} strokeLinejoin="round" />
            <path d="M 40,82 C 34,96 10,118 4,140 L 4,168 L 22,156 C 28,138 34,116 40,98 Z" fill={C.coatShade} opacity={0.9} />
            <path d="M 40,82 C 40,100 40,122 42,144" stroke={C.coatLine} strokeWidth={1.5} fill="none" strokeLinecap="round" opacity={0.6} />
            {/* bolso */}
            <rect x={12} y={176} width={22} height={16} rx={3} fill="none" stroke={C.coatLine} strokeWidth={1.6} opacity={0.55} />

            {/* aba direita do jaleco */}
            <path d="M 160,82 C 168,96 194,118 198,140 L 198,208 C 198,210 196,212 194,212 L 154,212 C 156,194 158,168 160,138 C 161,116 161,98 160,82 Z"
              fill={C.coat} stroke={C.coatLine} strokeWidth={2.5} strokeLinejoin="round" />
            <path d="M 160,82 C 166,96 190,118 196,140 L 196,168 L 178,156 C 172,138 166,116 160,98 Z" fill={C.coatShade} opacity={0.9} />
            <path d="M 160,82 C 160,100 160,122 158,144" stroke={C.coatLine} strokeWidth={1.5} fill="none" strokeLinecap="round" opacity={0.6} />
            <rect x={166} y={176} width={22} height={16} rx={3} fill="none" stroke={C.coatLine} strokeWidth={1.6} opacity={0.55} />

            {/* braços (manga branca + mão-luva azul) por pose */}
            {armsUp ? (
              <>
                <Arm x1={36} y1={122} x2={18} y2={76} hx={16} hy={69} />
                <Arm x1={164} y1={122} x2={182} y2={76} hx={184} hy={69} />
              </>
            ) : armsOpen ? (
              <>
                <Arm x1={34} y1={126} x2={12} y2={103} hx={10} hy={99} />
                <Arm x1={166} y1={126} x2={188} y2={103} hx={190} hy={99} />
              </>
            ) : (
              <>
                <Arm x1={28} y1={132} x2={24} y2={170} hx={24} hy={180} />
                <Arm x1={172} y1={132} x2={176} y2={170} hx={176} hy={180} />
                {/* polegar pra cima no confident */}
                {e === 'confident' && (
                  <rect x={172} y={160} width={9} height={17} rx={4.5} fill={C.body} stroke={C.bodyLine} strokeWidth={1.8}
                    transform="rotate(14 176.5 168)" />
                )}
              </>
            )}

            {/* estetoscópio — tubo do pescoço */}
            <line x1={60} y1={94} x2={56} y2={83} stroke={C.line} strokeWidth={2.8} strokeLinecap="round" />
            <line x1={60} y1={94} x2={50} y2={88} stroke={C.line} strokeWidth={2.8} strokeLinecap="round" />
          </>
        )}

        {/* ── o coração bate (grupo com pulso) ── */}
        <g className="mq-pulse">
          {/* corpo-coração */}
          <path d="M 100,36 C 100,26 91,14 78,14 C 54,14 38,38 38,64 C 38,100 100,192 100,192 C 100,192 162,100 162,64 C 162,38 146,14 122,14 C 109,14 100,26 100,36 Z"
            fill={C.body} />
          <path d="M 100,36 C 100,26 91,14 78,14 C 54,14 38,38 38,64 C 38,100 100,192 100,192 C 100,192 162,100 162,64 C 162,38 146,14 122,14 C 109,14 100,26 100,36 Z"
            fill="none" stroke={C.bodyLine} strokeWidth={2.5} />

          {/* brilho do coração */}
          <ellipse cx={72} cy={44} rx={24} ry={15} fill="rgba(255,255,255,0.22)" transform="rotate(-25 72 44)" />
          <ellipse cx={68} cy={40} rx={11} ry={6.5} fill="rgba(255,255,255,0.38)" transform="rotate(-25 68 40)" />
          <circle cx={60} cy={29} r={5} fill="rgba(255,255,255,0.50)" />

          {/* estetoscópio — alça no peito */}
          {crop === 'full' && (
            <>
              <path d="M 60,94 Q 52,110 56,126 Q 60,142 74,146 Q 90,150 96,136 Q 100,124 90,118"
                stroke={C.line} strokeWidth={3.5} fill="none" strokeLinecap="round" />
              <circle cx={91} cy={116} r={7.5} fill={C.line} />
              <circle cx={91} cy={116} r={4.5} fill="#7AAAD4" />
            </>
          )}

          {/* cruz médica + faíscas */}
          <rect x={93} y={152} width={14} height={5} rx={2.5} fill={C.bodyLine} opacity={0.82} />
          <rect x={97} y={148} width={6} height={13} rx={3} fill={C.bodyLine} opacity={0.82} />
          <path d="M 120,143 L 121.5,139 L 123,143 L 127,144.5 L 123,146 L 121.5,150 L 120,146 L 116,144.5 Z" fill="rgba(255,255,255,0.92)" />
          <path d="M 74,158 L 75,155.5 L 76,158 L 78.5,159 L 76,160 L 75,162.5 L 74,160 L 71.5,159 Z" fill="rgba(255,255,255,0.72)" />
          <path d="M 128,162 L 129,160 L 130,162 L 132,163 L 130,164 L 129,166 L 128,164 L 126,163 Z" fill="rgba(255,255,255,0.62)" />

          {/* ── olhos (branco sempre) ── */}
          <circle cx={80} cy={78} r={23} fill="white" stroke="#3A5070" strokeWidth={1.8} />
          <circle cx={120} cy={78} r={23} fill="white" stroke="#3A5070" strokeWidth={1.8} />

          {/* íris/pupila e pálpebras por expressão */}
          {(e === 'confident' || e === 'happy') && (
            <>
              <circle cx={82} cy={80} r={14.5} fill={C.iris} />
              <circle cx={122} cy={80} r={14.5} fill={C.iris} />
              <circle cx={83} cy={81} r={9} fill={C.pupil} />
              <circle cx={123} cy={81} r={9} fill={C.pupil} />
              <circle cx={89} cy={74} r={5.5} fill="white" />
              <circle cx={129} cy={74} r={5.5} fill="white" />
              <circle cx={77} cy={87} r={2.8} fill="rgba(255,255,255,0.55)" />
              <circle cx={117} cy={87} r={2.8} fill="rgba(255,255,255,0.55)" />
            </>
          )}
          {e === 'cheer' && (
            <>
              {/* olhos fechados de alegria (arcos) */}
              <path d="M 62,79 Q 80,62 97,79" fill="none" stroke={C.line} strokeWidth={4.5} strokeLinecap="round" />
              <path d="M 103,79 Q 120,62 138,79" fill="none" stroke={C.line} strokeWidth={4.5} strokeLinecap="round" />
            </>
          )}
          {e === 'sad' && (
            <>
              <circle cx={80} cy={84} r={13} fill={C.iris} />
              <circle cx={120} cy={84} r={13} fill={C.iris} />
              <circle cx={80} cy={86} r={8} fill={C.pupil} />
              <circle cx={120} cy={86} r={8} fill={C.pupil} />
              <circle cx={85} cy={80} r={4} fill="white" />
              <circle cx={125} cy={80} r={4} fill="white" />
              {/* pálpebras caídas */}
              <ellipse cx={80} cy={62} rx={24} ry={12} fill={C.body} />
              <ellipse cx={120} cy={62} rx={24} ry={12} fill={C.body} />
              <path d="M 57,70 Q 80,62 103,70" fill="none" stroke={C.bodyLine} strokeWidth={1.6} opacity={0.5} />
              <path d="M 97,70 Q 120,62 143,70" fill="none" stroke={C.bodyLine} strokeWidth={1.6} opacity={0.5} />
            </>
          )}
          {e === 'worried' && (
            <>
              <circle cx={82} cy={80} r={12} fill={C.iris} />
              <circle cx={122} cy={80} r={12} fill={C.iris} />
              <circle cx={82} cy={81} r={6} fill={C.pupil} />
              <circle cx={122} cy={81} r={6} fill={C.pupil} />
              <circle cx={86} cy={76} r={4} fill="white" />
              <circle cx={126} cy={76} r={4} fill="white" />
            </>
          )}
          {e === 'focus' && (
            <>
              <circle cx={82} cy={82} r={14.5} fill={C.iris} />
              <circle cx={122} cy={82} r={14.5} fill={C.iris} />
              <circle cx={83} cy={83} r={9} fill={C.pupil} />
              <circle cx={123} cy={83} r={9} fill={C.pupil} />
              <circle cx={88} cy={77} r={5} fill="white" />
              <circle cx={128} cy={77} r={5} fill="white" />
              {/* pálpebras de concentração */}
              <ellipse cx={80} cy={60} rx={24} ry={10} fill={C.body} />
              <ellipse cx={120} cy={60} rx={24} ry={10} fill={C.body} />
            </>
          )}

          {/* piscada (só com olhos abertos) */}
          {openEyes && (
            <g className="mq-blink">
              <ellipse cx={80} cy={78} rx={24} ry={11} fill={C.body} />
              <ellipse cx={120} cy={78} rx={24} ry={11} fill={C.body} />
            </g>
          )}

          {/* ── sobrancelhas ── */}
          {e === 'confident' && (
            <>
              <path d="M 63,54 Q 76,46 90,50" stroke={C.line} strokeWidth={3.2} fill="none" strokeLinecap="round" />
              <path d="M 110,48 Q 124,42 137,50" stroke={C.line} strokeWidth={3.2} fill="none" strokeLinecap="round" />
            </>
          )}
          {(e === 'happy' || e === 'cheer') && (
            <>
              <path d="M 62,52 Q 76,44 90,50" stroke={C.line} strokeWidth={3.2} fill="none" strokeLinecap="round" />
              <path d="M 110,50 Q 124,44 138,52" stroke={C.line} strokeWidth={3.2} fill="none" strokeLinecap="round" />
            </>
          )}
          {e === 'sad' && (
            <>
              <path d="M 64,50 Q 78,48 90,56" stroke={C.line} strokeWidth={3.2} fill="none" strokeLinecap="round" />
              <path d="M 110,56 Q 122,48 136,50" stroke={C.line} strokeWidth={3.2} fill="none" strokeLinecap="round" />
            </>
          )}
          {e === 'worried' && (
            <>
              <path d="M 62,46 Q 76,40 90,46" stroke={C.line} strokeWidth={3.2} fill="none" strokeLinecap="round" />
              <path d="M 110,46 Q 124,40 138,46" stroke={C.line} strokeWidth={3.2} fill="none" strokeLinecap="round" />
            </>
          )}
          {e === 'focus' && (
            <>
              <path d="M 64,52 L 92,60" stroke={C.line} strokeWidth={3.4} strokeLinecap="round" />
              <path d="M 136,52 L 108,60" stroke={C.line} strokeWidth={3.4} strokeLinecap="round" />
            </>
          )}

          {/* bochechas */}
          {e !== 'sad' && e !== 'worried' && (
            <>
              <circle cx={62} cy={100} r={6} fill={C.blush} opacity={0.5} />
              <circle cx={138} cy={100} r={6} fill={C.blush} opacity={0.5} />
            </>
          )}

          {/* ── boca ── */}
          {e === 'confident' && (
            <path d="M 85,116 Q 100,129 115,113" stroke={C.line} strokeWidth={3} fill="none" strokeLinecap="round" />
          )}
          {e === 'happy' && (
            <>
              <path d="M 85,115 Q 100,131 115,115" stroke={C.line} strokeWidth={3} fill="none" strokeLinecap="round" />
              <path d="M 87,117 Q 100,131 113,117 L 111,121 Q 100,133 89,121 Z" fill={C.tongue} />
              <path d="M 91,119 Q 100,124 109,119 Q 107,117 100,117 Q 93,117 91,119 Z" fill="white" />
            </>
          )}
          {e === 'cheer' && (
            <>
              <path d="M 82,112 Q 100,138 118,112" stroke={C.line} strokeWidth={3} fill="none" strokeLinecap="round" />
              <path d="M 84,114 Q 100,136 116,114 L 113,121 Q 100,141 87,121 Z" fill={C.tongue} />
              <path d="M 89,117 Q 100,123 111,117 Q 108,114 100,114 Q 92,114 89,117 Z" fill="white" />
            </>
          )}
          {e === 'sad' && (
            <path d="M 85,120 Q 100,108 115,120" stroke={C.line} strokeWidth={3} fill="none" strokeLinecap="round" />
          )}
          {e === 'worried' && (
            <path d="M 87,117 Q 93,112 100,117 Q 107,122 113,117" stroke={C.line} strokeWidth={3} fill="none" strokeLinecap="round" />
          )}
          {e === 'focus' && (
            <path d="M 90,118 Q 100,124 110,118" stroke={C.line} strokeWidth={3} fill="none" strokeLinecap="round" />
          )}

          {/* lágrima (sad) */}
          {e === 'sad' && (
            <path className="mq-tear" d="M 66,96 C 71,104 71,111 66,112.5 C 61,111 61,104 66,96" fill={C.tear} />
          )}
          {/* gota de suor (worried) */}
          {e === 'worried' && (
            <path className="mq-sweat" d="M 148,38 C 153,46 153,53 148,54.5 C 143,53 143,46 148,38" fill={C.tear} />
          )}
        </g>

        {/* confete do cheer (fora do pulso pra flutuar em volta) */}
        {e === 'cheer' && (
          <>
            <path className="mq-spark" d="M 26,36 v12 M 20,42 h12" stroke={C.amber} strokeWidth={4} strokeLinecap="round" fill="none" />
            <path className="mq-spark mq-sp2" d="M 172,26 v12 M 166,32 h12" stroke={C.amber} strokeWidth={4} strokeLinecap="round" fill="none" />
            <circle className="mq-spark mq-sp3" cx={14} cy={70} r={4} fill="#00a7e1" />
            <circle className="mq-spark mq-sp4" cx={186} cy={62} r={4} fill="#00a7e1" />
            <circle className="mq-spark mq-sp2" cx={178} cy={110} r={3.5} fill={C.amber} />
            <circle className="mq-spark mq-sp3" cx={22} cy={116} r={3.5} fill={C.amber} />
          </>
        )}

        {/* cartão de questão (focus, corpo inteiro) */}
        {e === 'focus' && crop === 'full' && (
          <g transform="rotate(-10 28 202)">
            <rect x={6} y={174} width={44} height={56} rx={8} fill={C.coat} stroke={C.coatLine} strokeWidth={2.5} />
            <text x={28} y={214} textAnchor="middle" fontFamily="inherit" fontSize={30} fontWeight={800} fill={C.iris}>?</text>
          </g>
        )}
      </g>
    </svg>
  );
}

/**
 * Frases do Dr. Quest durante o quiz. A escolha é determinística por questão
 * (via pickPhrase) para não trocar de frase a cada re-render.
 */
export const MASCOT_PHRASES = {
  correct: [
    'Diagnóstico certeiro! 🎯',
    'Conduta perfeita!',
    'Raciocínio clínico afiado!',
    'É isso! Anota no prontuário ✅',
    'Acertou em cheio!',
    'Excelente! Caso resolvido.',
    'Essa cai na prova — e você já sabe!',
    'Mandou muito bem!',
    'Meu coração até acelerou! 💙',
  ],
  combo: [
    'Combo clínico! Você tá on 🔥',
    'Sequência impecável!',
    'Imparável! Plantão dominado.',
    'Que sequência, hein! Continua!',
    'Taquicardia de tanta emoção! 💓',
  ],
  wrong: [
    'Calma — errar faz parte do diagnóstico.',
    'Anota essa: agora você não erra mais.',
    'Quase! Lê a explicação, é ouro.',
    'Essa foi difícil. Bora revisar juntos?',
    'Respira. Na prova você acerta.',
    'Erro hoje, acerto na prova.',
    'Faz parte do treino, doc.',
    'Não desanima — ela volta no reforço!',
    'Partiu meu coração… mas ele se recupera! 💙',
  ],
  timeout: [
    'O tempo voou! ⏱️',
    'Ficou no relógio! Na próxima vale chutar.',
    'Tempo esgotado — mas a explicação fica.',
    'O cronômetro venceu essa. Revanche?',
  ],
};

export function pickPhrase(list: string[], seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return list[h % list.length];
}
