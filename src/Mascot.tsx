/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Dr. Quest — mascote oficial do MedQuest.
 * Vetor puro (SVG) com expressões trocáveis, no estilo Duolingo:
 * ele reage aos acertos e erros do usuário durante as questões.
 */

export type MascotExpression = 'confident' | 'happy' | 'cheer' | 'sad' | 'worried' | 'focus';

const C = {
  shell: '#00658a',
  shellDark: '#02506e',
  visor: '#063749',
  glowEye: '#eafcff',
  glowMouth: '#9ff0ff',
  blush: '#3fc6f2',
  coat: '#ffffff',
  // Contorno do jaleco: escuro o bastante pra separar o branco do jaleco
  // de um fundo branco (o tom antigo #cfe0ea sumia em cards claros).
  coatLine: '#7ea6bd',
  innerShirt: '#bfe9f8',
  glove: '#00a7e1',
  amber: '#f1c100',
  amberDeep: '#d5a900',
};

function Arm({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.coatLine} strokeWidth={30} strokeLinecap="round" />
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.coat} strokeWidth={23} strokeLinecap="round" />
    </>
  );
}

function Hand({ x, y }: { x: number; y: number }) {
  return <circle cx={x} cy={y} r={14} fill={C.glove} stroke={C.shellDark} strokeWidth={3} />;
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
  const armsUp = e === 'happy' || e === 'cheer';

  return (
    <svg
      viewBox={crop === 'head' ? '88 -8 244 226' : '0 -8 420 412'}
      className={className}
      role="img"
      aria-label="Dr. Quest, mascote do MedQuest"
    >
      {/* Sombra difusa em todo o robô: garante contraste do jaleco branco
          mesmo sobre fundos brancos/claros (o mesmo id repetido em várias
          instâncias é ok — o conteúdo do filtro é idêntico). */}
      <defs>
        <filter id="dq-pop" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0f3a52" floodOpacity="0.28" />
        </filter>
      </defs>
      <g filter="url(#dq-pop)">
      {crop === 'full' && <ellipse cx={210} cy={362} rx={88} ry={11} fill={C.shellDark} opacity={0.14} />}

      {/* pernas */}
      <rect x={166} y={322} width={34} height={30} rx={14} fill={C.shellDark} />
      <rect x={220} y={322} width={34} height={30} rx={14} fill={C.shellDark} />

      {/* braço esquerdo (atrás do corpo) */}
      {e === 'focus' ? (
        <>
          <Arm x1={150} y1={244} x2={116} y2={288} />
          <Hand x={114} y={290} />
        </>
      ) : armsUp ? (
        <>
          <Arm x1={150} y1={244} x2={110} y2={202} />
          <Hand x={108} y={198} />
        </>
      ) : (
        <>
          <Arm x1={150} y1={244} x2={114} y2={292} />
          <Hand x={112} y={294} />
        </>
      )}

      {/* braço direito */}
      {e === 'confident' ? (
        <>
          <Arm x1={270} y1={244} x2={308} y2={208} />
          <rect
            x={306} y={176} width={12} height={24} rx={6}
            fill={C.glove} stroke={C.shellDark} strokeWidth={3}
            transform="rotate(-18 312 188)"
          />
          <Hand x={312} y={206} />
        </>
      ) : armsUp ? (
        <>
          <Arm x1={270} y1={244} x2={312} y2={200} />
          <Hand x={314} y={196} />
        </>
      ) : (
        <>
          <Arm x1={270} y1={244} x2={306} y2={292} />
          <Hand x={308} y={294} />
        </>
      )}

      {/* corpo / jaleco */}
      <rect x={138} y={206} width={144} height={126} rx={40} fill={C.coat} stroke={C.coatLine} strokeWidth={4} />
      <path d="M184 208 L210 240 L236 208 Z" fill={C.innerShirt} />

      {/* estetoscópio em forma de Q */}
      <path d="M188 214 C 170 238 178 254 196 263" fill="none" stroke={C.shellDark} strokeWidth={7} strokeLinecap="round" />
      <path d="M232 214 C 250 238 242 254 224 263" fill="none" stroke={C.shellDark} strokeWidth={7} strokeLinecap="round" />
      <circle cx={210} cy={282} r={24} fill="none" stroke={C.shellDark} strokeWidth={7} />
      <line x1={227} y1={299} x2={243} y2={315} stroke={C.shellDark} strokeWidth={8} strokeLinecap="round" />
      <circle cx={248} cy={320} r={11} fill={C.glove} stroke={C.shellDark} strokeWidth={4} />
      <circle cx={248} cy={320} r={4} fill="#ffffff" />

      {/* laterais da cabeça (olivas do estetoscópio) */}
      <rect x={96} y={108} width={18} height={46} rx={9} fill={C.shellDark} />
      <rect x={306} y={108} width={18} height={46} rx={9} fill={C.shellDark} />

      {/* antena + faísca de conhecimento */}
      <rect x={204} y={20} width={12} height={30} rx={6} fill={C.shell} />
      <circle cx={210} cy={14} r={16} fill="none" stroke={C.amber} strokeWidth={3} opacity={0.45} />
      <circle cx={210} cy={14} r={10} fill={C.amber} stroke={C.amberDeep} strokeWidth={2} />
      <path d="M210 9.5 v9 M205.5 14 h9" stroke="#ffffff" strokeWidth={2.6} strokeLinecap="round" />

      {/* cabeça + visor */}
      <rect x={110} y={44} width={200} height={166} rx={72} fill={C.shell} />
      <rect x={128} y={64} width={164} height={128} rx={56} fill={C.visor} />
      <rect x={142} y={74} width={88} height={18} rx={9} fill="#ffffff" opacity={0.08} />

      {/* bochechas */}
      <circle cx={158} cy={156} r={9} fill={C.blush} opacity={0.45} />
      <circle cx={262} cy={156} r={9} fill={C.blush} opacity={0.45} />

      {/* olhos + boca por expressão */}
      {(e === 'happy' || e === 'cheer') && (
        <>
          <path d="M163 132 Q178 113 193 132" fill="none" stroke={C.glowEye} strokeWidth={7} strokeLinecap="round" />
          <path d="M227 132 Q242 113 257 132" fill="none" stroke={C.glowEye} strokeWidth={7} strokeLinecap="round" />
          <path d="M186 156 Q210 186 234 156 Z" fill={C.glowMouth} />
        </>
      )}
      {e === 'focus' && (
        <>
          <path d="M163 101 L191 107" stroke={C.glowEye} strokeWidth={5} strokeLinecap="round" />
          <path d="M257 101 L229 107" stroke={C.glowEye} strokeWidth={5} strokeLinecap="round" />
          <rect x={165} y={116} width={26} height={28} rx={12} fill={C.glowEye} />
          <rect x={229} y={116} width={26} height={28} rx={12} fill={C.glowEye} />
          <path d="M196 164 Q210 172 224 164" fill="none" stroke={C.glowMouth} strokeWidth={6} strokeLinecap="round" />
        </>
      )}
      {e === 'sad' && (
        <>
          <path d="M165 106 L191 98" stroke={C.glowEye} strokeWidth={5} strokeLinecap="round" />
          <path d="M255 106 L229 98" stroke={C.glowEye} strokeWidth={5} strokeLinecap="round" />
          <rect x={165} y={112} width={26} height={30} rx={13} fill={C.glowEye} />
          <rect x={229} y={112} width={26} height={30} rx={13} fill={C.glowEye} />
          <path d="M190 174 Q210 160 230 174" fill="none" stroke={C.glowMouth} strokeWidth={6} strokeLinecap="round" />
        </>
      )}
      {e === 'worried' && (
        <>
          <rect x={165} y={108} width={26} height={34} rx={13} fill={C.glowEye} />
          <rect x={229} y={108} width={26} height={34} rx={13} fill={C.glowEye} />
          <circle cx={176} cy={117} r={4} fill="#ffffff" />
          <circle cx={240} cy={117} r={4} fill="#ffffff" />
          <path d="M194 168 Q201 162 208 168 Q215 174 222 168" fill="none" stroke={C.glowMouth} strokeWidth={5} strokeLinecap="round" />
          {/* gota de suor */}
          <path d="M310 56 C 317 68 317 78 310 80 C 303 78 303 68 310 56" fill="#7fd6f5" />
        </>
      )}
      {e === 'confident' && (
        <>
          <rect x={165} y={106} width={26} height={40} rx={13} fill={C.glowEye} />
          <rect x={229} y={106} width={26} height={40} rx={13} fill={C.glowEye} />
          <circle cx={176} cy={116} r={4} fill="#ffffff" />
          <circle cx={240} cy={116} r={4} fill="#ffffff" />
          <path d="M188 162 Q210 177 232 162" fill="none" stroke={C.glowMouth} strokeWidth={6} strokeLinecap="round" />
        </>
      )}

      {/* extras */}
      {e === 'cheer' && (
        <>
          <path d="M118 52 v14 M111 59 h14" stroke={C.amber} strokeWidth={5} strokeLinecap="round" />
          <path d="M304 40 v14 M297 47 h14" stroke={C.amber} strokeWidth={5} strokeLinecap="round" />
          <circle cx={86} cy={96} r={5} fill={C.glove} />
          <circle cx={336} cy={88} r={5} fill={C.glove} />
          <circle cx={330} cy={150} r={4} fill={C.amber} />
          <circle cx={88} cy={160} r={4} fill={C.amber} />
        </>
      )}
      {e === 'focus' && crop === 'full' && (
        <g transform="rotate(-8 108 292)">
          <rect x={78} y={258} width={56} height={68} rx={10} fill={C.coat} stroke={C.shell} strokeWidth={4} />
          <text
            x={106} y={303} textAnchor="middle"
            fontFamily="inherit" fontSize={34} fontWeight={800} fill={C.glove}
          >
            ?
          </text>
        </g>
      )}
      </g>
    </svg>
  );
}

/**
 * Personalidades do Dr. Quest. Cada uma tem um jeito próprio de reagir aos
 * acertos, combos, erros e tempo esgotado. O usuário escolhe no perfil.
 */
export type MascotPersonality = 'motivador' | 'paciente' | 'engracado' | 'durao';

export interface PhraseSet {
  correct: string[];
  combo: string[];
  wrong: string[];
  timeout: string[];
}

export const MASCOT_PERSONALITIES: { id: MascotPersonality; label: string; emoji: string; desc: string }[] = [
  { id: 'motivador', label: 'Motivador', emoji: '💪', desc: 'Mentor entusiasmado que te incentiva a cada questão.' },
  { id: 'paciente',  label: 'Paciente',  emoji: '🧘', desc: 'Calmo e acolhedor, sem pressão — no seu ritmo.' },
  { id: 'engracado', label: 'Engraçado', emoji: '😄', desc: 'Bem-humorado, solta piadas de plantão.' },
  { id: 'durao',     label: 'Durão',     emoji: '🔥', desc: 'Exigente e provocador, te cobra de verdade.' },
];

export const MASCOT_PHRASES_BY_PERSONALITY: Record<MascotPersonality, PhraseSet> = {
  motivador: {
    correct: [
      'Diagnóstico certeiro! 🎯', 'Conduta perfeita!', 'Raciocínio clínico afiado!',
      'É isso! Anota no prontuário ✅', 'Acertou em cheio!', 'Excelente! Caso resolvido.',
      'Essa cai na prova — e você já sabe!', 'Mandou muito bem!',
      'Aula! Você tá cada vez mais perto da vaga.', 'É desse jeito que se passa na residência!',
      'Alta médica pra essa questão! 🏥', 'Seu futuro paciente agradece esse acerto.',
      'Visão de especialista! 👁️', 'A banca que te aguarde!',
      'Mais uma pro seu caderno de vitórias!', 'Você estudou e tá aparecendo. Continua!',
    ],
    combo: [
      'Combo clínico! Você tá on 🔥', 'Sequência impecável!',
      'Imparável! Plantão dominado.', 'Que sequência, hein! Continua!',
      'Modo aprovação: ATIVADO 🚀', 'Isso não é sorte, é preparo!',
      'A vaga tá cada vez mais sua!', 'Sequência de residente-chefe! 👨‍⚕️',
      'Ninguém segura você hoje!', 'Tá voando! Aproveita a maré boa.',
    ],
    wrong: [
      'Calma — errar faz parte do diagnóstico.', 'Anota essa: agora você não erra mais.',
      'Quase! Lê a explicação, é ouro.', 'Essa foi difícil. Bora revisar juntos?',
      'Respira. Na prova você acerta.', 'Erro hoje, acerto na prova.',
      'Faz parte do treino, doc.', 'Não desanima — ela volta no reforço!',
      'Todo especialista já errou essa um dia.', 'Errar aqui é de graça. Na prova é que custa!',
      'Guarda essa raiva pra estudar o tema 😤📚', 'Um erro é só um degrau. Sobe nele!',
      'Essa banca pega todo mundo aí. Agora você sabe.', 'Levanta, sacode a poeira e vem pra próxima!',
    ],
    timeout: [
      'O tempo voou! ⏱️', 'Ficou no relógio! Na próxima vale chutar.',
      'Tempo esgotado — mas a explicação fica.', 'O cronômetro venceu essa. Revanche?',
      'Na prova, chute! Questão em branco é ponto perdido.', 'Ritmo é treino também. Bora de novo!',
      'O relógio jogou contra. Mas você tá aprendendo a jogar com ele.',
    ],
  },
  paciente: {
    correct: [
      'Muito bem. Você está no caminho certo.', 'Isso mesmo, sem pressa e com precisão.',
      'Perfeito. Um passo de cada vez.', 'Ótimo raciocínio. Continue assim, com calma.',
      'Certinho. Você entendeu o conceito.', 'Boa! Respire e siga no seu ritmo.',
      'Viu? O conhecimento está aí dentro.', 'Acertou com tranquilidade. É assim que fixa.',
      'Cada acerto desses é uma semente plantada.', 'Sereno e certeiro. Muito bom.',
      'O estudo silencioso aparece nessas horas.', 'Sem alarde, só consistência. Lindo de ver.',
    ],
    combo: [
      'Que constância bonita. Siga tranquilo.', 'Você está fluindo, sem pressa.',
      'Uma de cada vez, e olha o resultado.', 'Ritmo sereno, acertos firmes.',
      'A calma constrói sequências assim.', 'Repare: sem ansiedade, você rende mais.',
      'Passo a passo virou uma bela caminhada.', 'Confiança tranquila. Continue.',
    ],
    wrong: [
      'Tudo bem. Errar também é aprender.', 'Sem problema, vamos entender juntos.',
      'Respire. Leia a explicação com calma.', 'Faz parte. Você acerta a próxima.',
      'Calma, ninguém acerta tudo de primeira.', 'Está tudo bem — um erro não define nada.',
      'Acolhe esse erro. Ele veio te ensinar.', 'Sem se cobrar demais. Amanhã você olha de novo.',
      'Um erro de cada vez, um aprendizado de cada vez.', 'Isso não muda o seu caminho. Segue.',
      'Até os professores erram essa. Fica em paz.', 'Deixa o erro passar como uma nuvem. E aprende dele.',
    ],
    timeout: [
      'O tempo passou, mas sem estresse.', 'Tudo certo. Leia a explicação com calma.',
      'Sem pressa — o importante é entender.', 'O relógio venceu, mas o aprendizado fica.',
      'Respire fundo. A próxima é sua.', 'Tempo é treino. Vai encaixando aos poucos.',
      'Sem culpa. Ler com atenção também é estudar.',
    ],
  },
  engracado: {
    correct: [
      'Acertou! Nem o Dr. House discordaria 🩺', 'Isso! Pode passar a visita, doutor(a) 😎',
      'Diagnóstico na veia! 💉', 'Uau, acertou sem colar! 📚',
      'Certeiro! Seu cérebro tá em dia 🧠', 'Mandou bem! Anota no prontuário 📝',
      'Acertou! Já pode assinar atestado... quase 🖊️', 'Boa! Nem precisou pedir exame 🔬',
      'Plantão tranquilo com você de plantão 😴', 'Diagnóstico mais rápido que triagem de sexta 🏃‍♂️',
      'Acertou! Google Médico tá tremendo 🤖', 'Essa até o interno do primeiro dia... não, essa não 😅',
      'Aprovadíssimo! Cadê o jaleco? 🥼', 'Isso! O SUS precisa de você 🇧🇷',
    ],
    combo: [
      'Sequência de mestre! Tá pegando fogo 🔥', 'Combo! Já pode abrir consultório 🏥',
      'Imparável! O CRM que se cuide 😏', 'Uma atrás da outra! Tá roubando? 👀',
      'Combo! Isso é surto de acertos, notifica! 📋', 'Tá inspirado! Comeu o quê no café? ☕',
      'Sequência linda! Nem residente de plantão dobrado 💪', 'Alguém chama a banca, tem um(a) aprovado(a) aqui! 📣',
    ],
    wrong: [
      'Errou! Mas relaxa, o paciente é fictício 😅', 'Ops! Essa foi pro brejo 🐸',
      'Quase! Faltou um cafezinho, né? ☕', 'Essa doeu mais em mim 😬 lê a explicação!',
      'Foi mal, a questão jogou sujo 🃏', 'Errrr... bora de novo, doutor(a)!',
      'Eita! Foi engano de prontuário 📁', 'Errou, mas o plano de saúde cobre 😜',
      'Essa alternativa era pegadinha nível banca raiz 🎣', 'Xiii... pede um parecer e tenta de novo 📞',
      'Calma, ninguém viu. Só eu. E eu conto pra geral 🤭', 'Erro comum! (tô falando isso pra te consolar) 🤗',
    ],
    timeout: [
      'O tempo fugiu igual paciente de agulha! ⏱️', 'Zzz... acabou o tempo, dorminhoco 😴',
      'O relógio ganhou essa corrida 🏃', 'Tempo esgotado! Mas a explicação fica 😄',
      'Demorou mais que fila do SUS 🙈', 'O cronômetro te deu alta antes da hora ⏰',
      'Tempo? Foi embora sem pagar a consulta 💸',
    ],
  },
  durao: {
    correct: [
      'Acertou. Era o mínimo esperado.', 'Correto. Agora não relaxa.',
      'Isso. Mas eu quero consistência.', 'Certo. Prova que não foi sorte.',
      'Bom. Agora aumenta o ritmo.', 'Acertou. Não quero ver vacilo na próxima.',
      'Ok. Seu concorrente também acertou essa.', 'Certo. Mas aprovação se constrói no volume.',
      'Acertou uma fácil. Cadê as difíceis?', 'É isso. Repete amanhã, e depois, e depois.',
      'Correto. A vaga não cai do céu — continua.', 'Bom sinal. Não deixa virar exceção.',
    ],
    combo: [
      'Sequência? Bom. Não pare agora.', 'Combo. É isso que eu cobro de você.',
      'Tá acertando. Agora não amolece.', 'Isso é foco. Mantém ou perde tudo.',
      'Sequência boa. O corte da sua banca agradece.', 'Continua assim e a gente conversa sobre aprovação.',
      'Ritmo de prova. Era isso que eu queria ver.', 'Não comemora ainda. Comemora na matrícula.',
    ],
    wrong: [
      'Errou. Estuda isso agora.', 'Não. Essa você tinha obrigação de saber.',
      'Errado. Lê a explicação e não repete.', 'Vacilou. Na prova real isso custa caro.',
      'Não foi dessa vez. Foco, doutor(a).', 'Erro feio. Bora consertar isso.',
      'Esse erro te separa da vaga. Resolve.', 'A banca adora quem não revisa. Não seja essa pessoa.',
      'Errou por desatenção ou por não saber? Descobre.', 'Anota, revisa, e nunca mais.',
      'Seu concorrente acertou essa. Pensa nisso.', 'Sem drama. Erro se corrige estudando.',
    ],
    timeout: [
      'Tempo esgotado. Lentidão não passa na prova.', 'Devagar demais. Acelera.',
      'O relógio não espera — nem a banca.', 'Perdeu no tempo. Isso não pode virar hábito.',
      'Na prova são ~3 minutos por questão. Treina isso.', 'Tempo é critério de aprovação. Leva a sério.',
      'Questão sem resposta é ponto de graça pro concorrente.',
    ],
  },
};

/** Conjunto de falas da personalidade escolhida (cai no Motivador por padrão). */
export function mascotPhrasesFor(p?: MascotPersonality): PhraseSet {
  return MASCOT_PHRASES_BY_PERSONALITY[p ?? 'motivador'] ?? MASCOT_PHRASES_BY_PERSONALITY.motivador;
}

// Compat: usado onde a personalidade não importa.
export const MASCOT_PHRASES = MASCOT_PHRASES_BY_PERSONALITY.motivador;

export function pickPhrase(list: string[], seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return list[h % list.length];
}
