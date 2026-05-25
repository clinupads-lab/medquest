/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Trophy, 
  Flame, 
  Zap, 
  Heart,
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  User,
  UserPlus,
  Search,
  Camera,
  Edit2,
  Check,
  Activity,
  Copy,
  Link,
  Clock,
  RotateCcw,
  AlertTriangle,
  Users,
  Eye,
  Brain,
  Baby,
  Droplets,
  Droplet,
  FlaskConical,
  Bug,
  Dna,
  Microscope,
  Stethoscope,
  Skull,
  Scissors,
  Bone,
  Ear,
  Sun,
  Wind,
  Pill,
  MessageCircle,
  LayoutDashboard, 
  BookOpen, 
  Award,
  CircleHelp,
  ArrowLeft,
  Share2,
  RefreshCcw,
  BarChart3,
  Target,
  Thermometer,
  Hospital,
  TrendingUp,
  LineChart as LineChartIcon,
  Shield,
  Diamond,
  Crown,
  UserCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  TrendingDown,
  CalendarDays,
  BarChart2,
  Star
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  ReferenceLine,
  Cell
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';

const LOADING_TEXTS = [
  'Analisando seu histórico...',
  'Selecionando questão difícil...',
  'Calibrando dificuldade...',
  'Buscando questões de banca...',
  'Preparando seu desafio...',
];

/// --- Types ---

type Cycle = 'Ciclo Básico' | 'Ciclo Clínico';

type Subject = 
  | 'Anatomia' | 'Fisiologia' | 'Bioquímica' | 'Histologia' | 'Embriologia' | 'Microbiologia' | 'Imunologia' | 'Genética' | 'Farmacologia'
  | 'Clínica Médica' | 'Clínica Cirúrgica' | 'Ginecologia & Obstetrícia' | 'Pediatria' | 'Psiquiatria' | 'Dermatologia' | 'Oftalmologia' | 'Otorrinolaringologia' | 'Medicina de Família/SUS'
  | 'Cardiologia' | 'Neurologia' | 'Pneumologia' | 'Gastroenterologia' | 'Endocrinologia' | 'Nefrologia' | 'Reumatologia' | 'Hematologia' | 'Infectologia' | 'Cirurgia Geral';

interface Question {
  id: string;
  cycle: Cycle;
  subject: Subject;
  subSubject?: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface UserState {
  name: string;
  profileImage?: string;
  xp: number;
  level: number;
  streak: number;
  hearts: number;
  dailyGoalDone: number;
  dailyGoalTotal: number;
  weeklyGoalDone: number;
  weeklyGoalTotal: number;
  friends: string[];
  mastery: Record<string, number>;
  subjectAttempts: Record<string, number>;
  planStartDate: string;
  missedQuestionIds: string[];
}

interface SessionResult {
  correct: number;
  total: number;
  xpGained: number;
}

// --- Mock Data ---

const HIERARCHY: Record<Cycle, Partial<Record<Subject, string[]>>> = {
  'Ciclo Básico': {
    'Anatomia': [],
    'Fisiologia': [],
    'Bioquímica': [],
    'Histologia': [],
    'Embriologia': [],
    'Microbiologia': [],
    'Imunologia': [],
    'Genética': [],
    'Farmacologia': []
  },
  'Ciclo Clínico': {
    'Clínica Médica': [],
    'Clínica Cirúrgica': [],
    'Cardiologia': [],
    'Neurologia': [],
    'Pneumologia': [],
    'Gastroenterologia': [],
    'Endocrinologia': [],
    'Nefrologia': [],
    'Reumatologia': [],
    'Hematologia': [],
    'Infectologia': [],
    'Ginecologia & Obstetrícia': [],
    'Pediatria': [],
    'Psiquiatria': [],
    'Dermatologia': [],
    'Oftalmologia': [],
    'Otorrinolaringologia': [],
    'Medicina de Família/SUS': [],
    'Cirurgia Geral': []
  }
};

const QUESTIONS: Question[] = [
  {
    id: 'q1',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    subSubject: 'SUS',
    text: 'Quais são os princípios doutrinários do Sistema Único de Saúde (SUS)?',
    options: [
      'Universalidade, Equidade e Integralidade',
      'Descentralização, Regionalização e Hierarquização',
      'Universalidade, Regionalização e Participação Popular',
      'Equidade, Integralidade e Controle Social'
    ],
    correctIndex: 0,
    explanation: 'Os princípios doutrinários do SUS são Universalidade, Equidade e Integralidade. Os demais (Descentralização, etc) são princípios organizativos.'
  },
  {
    id: 'q_basico_1',
    cycle: 'Ciclo Básico',
    subject: 'Anatomia',
    text: 'Qual o principal nervo motor da musculatura mímica da face?',
    options: [
      'Nervo Trigêmeo (V)',
      'Nervo Facial (VII)',
      'Nervo Glossofaríngeo (IX)',
      'Nervo Vago (X)'
    ],
    correctIndex: 1,
    explanation: 'O nervo facial (VII par) é o responsável pela inervação motora dos músculos da expressão facial.'
  },
  {
    id: 'q_basico_2',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'Em um indivíduo saudável, onde ocorre a maior parte da reabsorção de glicose no néfron?',
    options: [
      'Túbulo Contorcido Proximal',
      'Alça de Henle',
      'Túbulo Contorcido Distal',
      'Ducto Coletor'
    ],
    correctIndex: 0,
    explanation: 'Aproximadamente 100% da glicose filtrada é reabsorvida no túbulo contorcido proximal via transportadores SGLT2 e SGLT1.'
  },
  {
    id: 'q_basico_3',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'Qual a principal via metabólica de produção de ATP na presença de oxigênio?',
    options: ['Glicólise Anaeróbia', 'Ciclo de Krebs e Fosforilação Oxidativa', 'Via das Pentoses', 'Beta-oxidação apenas'],
    correctIndex: 1,
    explanation: 'A fosforilação oxidativa na mitocôndria é a principal fonte de ATP em condições aeróbias.'
  },
  {
    id: 'q_basico_4',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'Qual o tipo de epitélio encontrado na bexiga urinária, capaz de se contrair e expandir?',
    options: ['Epitélio Pavimentoso Simples', 'Epitélio de Transição', 'Epitélio Cilíndrico Pseudoestratificado', 'Epitélio Cúbico Estratificado'],
    correctIndex: 1,
    explanation: 'O epitélio de transição (urotélio) é característico das vias urinárias e permite a distensibilidade do órgão.'
  },
  {
    id: 'q_basico_5',
    cycle: 'Ciclo Básico',
    subject: 'Embriologia',
    text: 'Qual folheto embrionário dá origem ao sistema nervoso?',
    options: ['Endoderme', 'Mesoderme', 'Ectoderme', 'Mesênquima'],
    correctIndex: 2,
    explanation: 'O ectoderme dá origem ao sistema nervoso (através da placa neural) e à epiderme.'
  },
  {
     id: 'q_basico_6',
     cycle: 'Ciclo Básico',
     subject: 'Microbiologia',
     text: 'Qual coloração é padrão-ouro para identificação de Micobactérias (como o M. tuberculosis)?',
     options: ['Coloração de Gram', 'Coloração de Ziehl-Neelsen', 'Coloração de Giemsa', 'Laranja de Acridina'],
     correctIndex: 1,
     explanation: 'Micobactérias são bacilos álcool-ácido resistentes (BAAR) e são identificadas pela coloração de Ziehl-Neelsen.'
  },
  {
     id: 'q_basico_7',
     cycle: 'Ciclo Básico',
     subject: 'Imunologia',
     text: 'Qual imunoglobulina é a principal responsável pela secreção mucosa (saliva, leite, lágrimas)?',
     options: ['IgG', 'IgM', 'IgA', 'IgE'],
     correctIndex: 2,
     explanation: 'A IgA secretora é a principal imunoglobulina das mucosas e secreções.'
  },
  {
     id: 'q_basico_8',
     cycle: 'Ciclo Básico',
     subject: 'Genética',
     text: 'Qual o padrão de herança da Fibrose Cística?',
     options: ['Autossômica Dominante', 'Autossômica Recessiva', 'Ligada ao X Dominante', 'Herança Mitocondrial'],
     correctIndex: 1,
     explanation: 'A fibrose cística é uma doença autossômica recessiva causada por mutações no gene CFTR.'
  },
  {
     id: 'q_basico_9',
     cycle: 'Ciclo Básico',
     subject: 'Farmacologia',
     text: 'Qual a via de administração que evita o efeito de primeira passagem hepática?',
     options: ['Oral', 'Sublingual', 'Intra-arterial apenas', 'Gástrica'],
     correctIndex: 1,
     explanation: 'A via sublingual permite a absorção direta pela mucosa oral, drenando para a veia cava superior e evitando o metabolismo de primeira passagem hepática.'
  },
  {
    id: 'q2',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Cirúrgica',
    subSubject: 'Trauma',
    text: 'De acordo com o protocolo ATLS 10ª edição, qual a primeira medida na avaliação da via aérea (coluna "A")?',
    options: [
      'Entubação orotraqueal imediata',
      'Verificação da saturação de oxigênio',
      'Manutenção da permeabilidade da via aérea com proteção da coluna cervical',
      'Inserção de cânula de Guedel'
    ],
    correctIndex: 2,
    explanation: 'A primeira etapa é garantir a via aérea pérvia e, simultaneamente, proteger a coluna cervical com colar cervical ou imobilização manual.'
  },
  {
    id: 'q3',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    subSubject: 'Endocrinologia',
    text: 'Paciente de 55 anos, obeso, com poliúria, polidipsia e glicemia de jejum de 132 mg/dL em duas ocasiões. Qual o diagnóstico?',
    options: [
      'Pré-diabetes',
      'Diabetes Mellitus tipo 1',
      'Diabetes Mellitus tipo 2',
      'Tolerância diminuída à glicose'
    ],
    correctIndex: 2,
    explanation: 'O diagnóstico de Diabetes Mellitus é feito com glicemia de jejum ≥ 126 mg/dL em duas ocasiões separadas, ou sintomas clássicos + glicemia casual ≥ 200 mg/dL.'
  },
  {
    id: 'q4',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Quais vacinas de rotina devem ser aplicadas em um recém-nascido saudável ainda na maternidade?',
    options: [
      'Penta e VOP',
      'BCG e Hepatite B',
      'BCG e Rotavírus',
      'Hepatite B e VIP'
    ],
    correctIndex: 1,
    explanation: 'No Brasil, o calendário do PNI recomenda a aplicação da vacina contra a Hepatite B e a BCG (Dose Única) logo ao nascer.'
  },
  {
    id: 'q5',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    subSubject: 'Obstetrícia',
    text: 'Sobre a regra de Nagele para cálculo da data provável do parto (DPP), se a DUM foi 10/01/2024, qual a DPP?',
    options: [
      '17/10/2024',
      '07/10/2024',
      '17/09/2024',
      '10/10/2024'
    ],
    correctIndex: 0,
    explanation: 'A regra de Nagele consiste em somar 7 dias ao dia da DUM e subtrair 3 meses (ou somar 9 meses). 10 + 7 = 17. Janeiro - 3 meses = Outubro. Logo, 17/10/2024.'
  },
  {
    id: 'q8',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    subSubject: 'Cardiologia',
    text: 'Sobre a classificação de Killip no IAM, o que caracteriza o estágio III?',
    options: [
      'Ausência de sinais de insuficiência cardíaca esquerda',
      'Presença de estertores crepitantes em menos de 50% dos campos pulmonares',
      'Edema agudo de pulmão',
      'Choque cardiogênico'
    ],
    correctIndex: 2,
    explanation: 'Killip I: sem IC; II: B3 ou estertores em <50%; III: Edema Agudo de Pulmão; IV: Choque cardiogênico.'
  },
  {
    id: 'q9',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Cirúrgica',
    subSubject: 'Cirurgia Geral',
    text: 'Qual a tríade de Charcot, indicativa de colangite aguda?',
    options: [
      'Febre, icterícia e dor abdominal',
      'Dor abdominal, massa palpável e febre',
      'Vômitos, icterícia e emagrecimento',
      'Icterícia, colúria e fezes acólicas'
    ],
    correctIndex: 0,
    explanation: 'A tríade de Charcot é composta por febre com calafrios, icterícia e dor em hipocôndrio direito. Se houver hipotensão e alteração mental, temos a pêntade de Reynolds.'
  },
  {
    id: 'q10',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    subSubject: 'Gastroenterologia',
    text: 'Qual a conduta inicial prioritária em um paciente com hemorragia digestiva alta varicosa?',
    options: [
      'Endoscopia digestiva imediata',
      'Estabilização hemodinâmica e cristaloides',
      'Administração de omeprazol EV em bolus',
      'Passagem de sonda de Sengstaken-Blakemore'
    ],
    correctIndex: 1,
    explanation: 'O primeiro passo em qualquer sangramento agudo é a estabilização hemodinâmica (Protocolo ABC).'
  }
];

const RANKING = [
  { name: 'Dr. Ricardo M.', xp: 15420, level: 42, active: true, trend: 0 },
  { name: 'Dra. Luana S.', xp: 14800, level: 39, active: false, trend: 0 },
  { name: 'Dr. Felipe', xp: 13240, level: 37, active: true, trend: 0 },
  { name: 'Dr. Você', xp: 12800, level: 38, active: true, currentUser: true, streak: 14, trend: 2 },
  { name: 'Dra. Ana S.', xp: 11950, level: 35, active: true, streak: 7, trend: -1 },
  { name: 'Dr. Marcos B.', xp: 11200, level: 33, active: false, trend: 3 },
  { name: 'Dra. Julia C.', xp: 10400, level: 31, active: true, streak: 5, trend: 0 },
  { name: 'Dr. Pedro L.', xp: 9800, level: 29, active: false, streak: 2, trend: -2 }
];

type LeaguePlayer = { name: string; initials: string; xp: number; level: number; active: boolean; trend: number; currentUser?: boolean; streak?: number };
type LeagueTier = 'bronze' | 'prata' | 'ouro' | 'platina' | 'diamante';
const LEAGUE_XP: Record<LeagueTier, number> = { bronze: 0, prata: 1000, ouro: 5000, platina: 10000, diamante: 18000 };
function getUserLeague(xp: number): LeagueTier {
  if (xp >= 18000) return 'diamante';
  if (xp >= 10000) return 'platina';
  if (xp >= 5000)  return 'ouro';
  if (xp >= 1000)  return 'prata';
  return 'bronze';
}
const LEAGUE_CONFIG: Record<LeagueTier, { label: string; next: LeagueTier | null; trophyColor: string; gradFrom: string; gradVia: string; gradTo: string }> = {
  bronze:   { label: 'Liga Bronze',   next: 'prata',    trophyColor: '#CD7F32', gradFrom: 'from-amber-700',  gradVia: 'via-amber-800',  gradTo: 'to-amber-950'  },
  prata:    { label: 'Liga Prata',    next: 'ouro',     trophyColor: '#CBD5E1', gradFrom: 'from-slate-400',  gradVia: 'via-slate-600',  gradTo: 'to-slate-800'  },
  ouro:     { label: 'Liga Ouro',     next: 'platina',  trophyColor: '#FCD34D', gradFrom: 'from-amber-500',  gradVia: 'via-blue-700',   gradTo: 'to-amber-800'  },
  platina:  { label: 'Liga Platina',  next: 'diamante', trophyColor: '#93C5FD', gradFrom: 'from-blue-500',   gradVia: 'via-blue-700',   gradTo: 'to-blue-900'   },
  diamante: { label: 'Liga Diamante', next: null,       trophyColor: '#67E8F9', gradFrom: 'from-cyan-500',   gradVia: 'via-blue-700',   gradTo: 'to-cyan-900'   },
};
const LEAGUE_DATA: Record<LeagueTier, LeaguePlayer[]> = {
  bronze: [
    { name: 'Dr. Eduardo M.',   initials: 'EM', xp: 920,  level: 3, active: true,  trend:  2 },
    { name: 'Dra. Fernanda C.', initials: 'FC', xp: 850,  level: 3, active: true,  trend:  1 },
    { name: 'Dr. Lucas B.',     initials: 'LB', xp: 780,  level: 2, active: false, trend:  0 },
    { name: 'Dr. Você',         initials: 'DA', xp: 0,    level: 1, active: true,  trend:  0, currentUser: true },
    { name: 'Dra. Marina L.',   initials: 'ML', xp: 620,  level: 2, active: true,  trend:  0 },
    { name: 'Dr. Rafael S.',    initials: 'RS', xp: 540,  level: 1, active: false, trend: -1 },
    { name: 'Dra. Clara P.',    initials: 'CP', xp: 440,  level: 1, active: true,  trend:  0 },
    { name: 'Dr. Vítor A.',     initials: 'VA', xp: 310,  level: 1, active: false, trend: -2 },
  ],
  prata: [
    { name: 'Dra. Natalia R.',  initials: 'NR', xp: 4820, level: 10, active: true,  trend:  1 },
    { name: 'Dr. Bruno S.',     initials: 'BS', xp: 4450, level: 9,  active: true,  trend:  0 },
    { name: 'Dra. Alice M.',    initials: 'AM', xp: 4100, level: 9,  active: false, trend: -1 },
    { name: 'Dr. Você',         initials: 'DA', xp: 3800, level: 8,  active: true,  trend:  2, currentUser: true },
    { name: 'Dr. Daniel F.',    initials: 'DF', xp: 3400, level: 7,  active: true,  trend:  0 },
    { name: 'Dra. Larissa C.',  initials: 'LC', xp: 2950, level: 6,  active: false, trend: -1 },
    { name: 'Dr. Vinicius P.',  initials: 'VP', xp: 2500, level: 6,  active: true,  trend:  1 },
    { name: 'Dra. Priscila M.', initials: 'PM', xp: 1800, level: 4,  active: false, trend:  0 },
  ],
  ouro: [
    { name: 'Dra. Camila B.',   initials: 'CB', xp: 9820,  level: 22, active: true,  trend:  2 },
    { name: 'Dr. Thiago R.',    initials: 'TR', xp: 9100,  level: 20, active: true,  trend:  0 },
    { name: 'Dr. Paulo M.',     initials: 'PM', xp: 8650,  level: 19, active: false, trend: -1 },
    { name: 'Dr. Você',         initials: 'DA', xp: 8200,  level: 18, active: true,  trend:  1, currentUser: true },
    { name: 'Dra. Rebeca L.',   initials: 'RL', xp: 7900,  level: 17, active: true,  trend:  0 },
    { name: 'Dr. Caio S.',      initials: 'CS', xp: 7300,  level: 16, active: false, trend: -2 },
    { name: 'Dra. Nathalia P.', initials: 'NP', xp: 6800,  level: 15, active: true,  trend:  3 },
    { name: 'Dr. Henrique V.',  initials: 'HV', xp: 6100,  level: 13, active: false, trend:  0 },
  ],
  platina: [
    { name: 'Dr. Ricardo M.',   initials: 'RM', xp: 15420, level: 42, active: true,  trend:  0 },
    { name: 'Dra. Luana S.',    initials: 'LS', xp: 14800, level: 39, active: false, trend:  0 },
    { name: 'Dr. Felipe C.',    initials: 'FC', xp: 13240, level: 37, active: true,  trend:  0 },
    { name: 'Dr. Você',         initials: 'DA', xp: 12800, level: 38, active: true,  trend:  2, currentUser: true },
    { name: 'Dra. Ana S.',      initials: 'AS', xp: 11950, level: 35, active: true,  trend: -1 },
    { name: 'Dr. Marcos B.',    initials: 'MB', xp: 11200, level: 33, active: false, trend:  3 },
    { name: 'Dra. Julia C.',    initials: 'JC', xp: 10400, level: 31, active: true,  trend:  0 },
    { name: 'Dr. Pedro L.',     initials: 'PL', xp:  9800, level: 29, active: false, trend: -2 },
  ],
  diamante: [
    { name: 'Dra. Isabela F.',  initials: 'IF', xp: 24800, level: 68, active: true,  trend:  1 },
    { name: 'Dr. Gabriel M.',   initials: 'GM', xp: 23500, level: 65, active: true,  trend:  0 },
    { name: 'Dra. Sofia K.',    initials: 'SK', xp: 21200, level: 60, active: false, trend: -1 },
    { name: 'Dr. Leonardo R.',  initials: 'LR', xp: 20800, level: 58, active: true,  trend:  2 },
    { name: 'Dra. Beatriz A.',  initials: 'BA', xp: 19500, level: 55, active: true,  trend:  0 },
    { name: 'Dr. Mateus C.',    initials: 'MC', xp: 18900, level: 53, active: false, trend: -2 },
    { name: 'Dra. Valentina S.',initials: 'VS', xp: 18200, level: 51, active: true,  trend:  1 },
    { name: 'Dr. Rafael B.',    initials: 'RB', xp: 17600, level: 49, active: false, trend:  0 },
  ],
};

const CHART_DATA: Record<string, Array<{name: string; value: number}>> = {
  '7d': [
    { name: 'Seg', value: 72 }, { name: 'Ter', value: 68 }, { name: 'Qua', value: 75 },
    { name: 'Qui', value: 80 }, { name: 'Sex', value: 74 }, { name: 'Sáb', value: 70 }, { name: 'Dom', value: 74 }
  ],
  '30d': [
    { name: 'Sem 1', value: 58 }, { name: 'Sem 2', value: 65 },
    { name: 'Sem 3', value: 70 }, { name: 'Sem 4', value: 74 }
  ],
  'total': [
    { name: 'Jan', value: 50 }, { name: 'Fev', value: 55 }, { name: 'Mar', value: 61 },
    { name: 'Abr', value: 68 }, { name: 'Mai', value: 74 }
  ]
};

// --- Components ---

// Update SUBJECT_ICONS keys to match
const SUBJECT_ICONS: Record<string, any> = {
  // Básicos
  'Anatomia': { image: 'https://cdn-icons-png.flaticon.com/512/2867/2867197.png', icon: Skull, color: 'bg-emerald-500', ringColor: '#10B981', textColor: 'text-white', shadow: 'shadow-emerald-500/40' },
  'Fisiologia': { image: 'https://cdn-icons-png.flaticon.com/512/4964/4964056.png', icon: Heart, color: 'bg-rose-500', ringColor: '#F43F5E', textColor: 'text-white', shadow: 'shadow-rose-500/40' },
  'Bioquímica': { image: 'https://cdn-icons-png.flaticon.com/512/4507/4507090.png', icon: FlaskConical, color: 'bg-blue-500', ringColor: '#3B82F6', textColor: 'text-white', shadow: 'shadow-blue-500/40' },
  'Histologia': { image: 'https://cdn-icons-png.flaticon.com/512/4068/4068596.png', icon: Microscope, color: 'bg-indigo-500', ringColor: '#6366F1', textColor: 'text-white', shadow: 'shadow-indigo-500/40' },
  'Embriologia': { image: 'https://cdn-icons-png.flaticon.com/512/9091/9091638.png', icon: Baby, color: 'bg-pink-500', ringColor: '#EC4899', textColor: 'text-white', shadow: 'shadow-pink-500/40' },
  'Microbiologia': { image: 'https://cdn-icons-png.flaticon.com/512/8986/8986435.png', icon: Bug, color: 'bg-amber-500', ringColor: '#F59E0B', textColor: 'text-white', shadow: 'shadow-amber-500/40' },
  'Imunologia': { image: 'https://cdn-icons-png.flaticon.com/512/15192/15192824.png', icon: Shield, color: 'bg-indigo-600', ringColor: '#4F46E5', textColor: 'text-white', shadow: 'shadow-indigo-600/40' },
  'Farmacologia': { image: 'https://cdn-icons-png.flaticon.com/512/18383/18383210.png', icon: Pill, color: 'bg-purple-500', ringColor: '#8B5CF6', textColor: 'text-white', shadow: 'shadow-purple-500/40' },
  'Patologia Geral': { icon: Microscope, color: 'bg-slate-500/20', ringColor: '#64748B', textColor: 'text-slate-500', shadow: 'shadow-slate-500/20' },
  'Semiologia': { icon: Stethoscope, color: 'bg-cyan-500/20', ringColor: '#06B6D4', textColor: 'text-cyan-500', shadow: 'shadow-cyan-500/20' },
  'Genética': { image: 'https://cdn-icons-png.flaticon.com/512/8986/8986421.png', icon: Dna, color: 'bg-teal-500', ringColor: '#14B8A6', textColor: 'text-white', shadow: 'shadow-teal-500/40' },

  // Clínicos e Especialidades - Duolingo Aesthetics
  'Cardiologia Clínica': { image: '/6176500.png', icon: Heart, color: 'bg-rose-500', ringColor: '#F43F5E', textColor: 'text-white', shadow: 'shadow-rose-500/40' },
  'Cardiologia': { image: '/6176500.png', icon: Heart, color: 'bg-rose-500', ringColor: '#F43F5E', textColor: 'text-white', shadow: 'shadow-rose-500/40' },
  'Neurologia': { image: '/11666655.png', icon: Brain, color: 'bg-indigo-500', ringColor: '#6366F1', textColor: 'text-white', shadow: 'shadow-indigo-500/40' },
  'Pediatria': { image: '/10154448.png', icon: Baby, color: 'bg-emerald-500', ringColor: '#10B981', textColor: 'text-white', shadow: 'shadow-emerald-500/40' },
  'Ginecologia & Obstetrícia': { image: '/2885280.png', icon: Baby, color: 'bg-pink-500', ringColor: '#EC4899', textColor: 'text-white', shadow: 'shadow-pink-500/40' },
  'Cirurgia Geral': { image: '/10154417.png', icon: Scissors, color: 'bg-orange-500', ringColor: '#F59E0B', textColor: 'text-white', shadow: 'shadow-orange-500/40' },
  'Clínica Cirúrgica': { image: '/10154417.png', icon: Scissors, color: 'bg-orange-500', ringColor: '#F59E0B', textColor: 'text-white', shadow: 'shadow-orange-500/40' },
  'Clínica Médica': { icon: Heart, color: 'bg-rose-500', ringColor: '#F43F5E', textColor: 'text-white', shadow: 'shadow-rose-500/40' },
  'Medicina de Família/SUS': { image: '/12370055.png', icon: Users, color: 'bg-cyan-500', ringColor: '#06B6D4', textColor: 'text-white', shadow: 'shadow-cyan-500/40' },
  'Psiquiatria': { image: '/12024688.png', icon: Brain, color: 'bg-purple-500', ringColor: '#8B5CF6', textColor: 'text-white', shadow: 'shadow-purple-500/40' },
  'Dermatologia': { image: '/10154433.png', icon: Droplet, color: 'bg-amber-400', ringColor: '#F59E0B', textColor: 'text-white', shadow: 'shadow-amber-500/40' },
  'Oftalmologia': { image: '/2007207.png', icon: Eye, color: 'bg-teal-500', ringColor: '#14B8A6', textColor: 'text-white', shadow: 'shadow-teal-500/40' },
  'Otorrinolaringologia': { icon: Ear, color: 'bg-violet-500', ringColor: '#8B5CF6', textColor: 'text-white', shadow: 'shadow-violet-500/40' },
  'Pneumologia': { image: '/10154419.png', icon: Wind, color: 'bg-sky-500', ringColor: '#0EA5E9', textColor: 'text-white', shadow: 'shadow-sky-500/40' },
  'Gastroenterologia': { image: '/6490965.png', icon: Activity, color: 'bg-green-600', ringColor: '#16A34A', textColor: 'text-white', shadow: 'shadow-green-500/40' },
  'Endocrinologia': { image: '/15192810.png', icon: Pill, color: 'bg-yellow-500', ringColor: '#EAB308', textColor: 'text-white', shadow: 'shadow-yellow-500/40' },
  'Nefrologia': { image: '/12024712.png', icon: Stethoscope, color: 'bg-blue-600', ringColor: '#2563EB', textColor: 'text-white', shadow: 'shadow-blue-500/40' },
  'Reumatologia': { image: '/12024718.png', icon: Bone, color: 'bg-slate-500', ringColor: '#64748B', textColor: 'text-white', shadow: 'shadow-slate-500/40' },
  'Hematologia': { image: '/6176756.png', icon: Droplet, color: 'bg-red-700', ringColor: '#B91C1C', textColor: 'text-white', shadow: 'shadow-red-500/40' },
  'Infectologia': { image: '/10154483.png', icon: Bug, color: 'bg-lime-600', ringColor: '#65A30D', textColor: 'text-white', shadow: 'shadow-lime-500/40' }
};

// ── MEDQUEST LOGO COMPONENT ──────────────────────────────────────────
function MedQuestLogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mq-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#040B1A"/>
          <stop offset="100%" stopColor="#0E1D4A"/>
        </linearGradient>
        <radialGradient id="mq-ambient" cx="50%" cy="42%" r="56%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.38"/>
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="mq-qmark" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF"/>
          <stop offset="100%" stopColor="#7DD3FC"/>
        </linearGradient>
        <radialGradient id="mq-dot" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#60A5FA"/>
          <stop offset="100%" stopColor="#1D4ED8"/>
        </radialGradient>
        <filter id="mq-qglow" x="-55%" y="-55%" width="210%" height="210%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="mq-dotglow" x="-90%" y="-90%" width="280%" height="280%">
          <feGaussianBlur stdDeviation="4.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="100" height="100" rx="22" fill="url(#mq-bg)"/>
      <rect width="100" height="100" rx="22" fill="url(#mq-ambient)"/>
      <rect x="1" y="1" width="98" height="98" rx="21.5"
            fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5"/>

      {/* ECG line — subtle medical accent */}
      <path d="M 6,76 L 18,76 L 21,66 L 24,86 L 27,58 L 30,93 L 34,76 L 66,76 L 69,66 L 72,86 L 75,58 L 78,93 L 82,76 L 94,76"
            fill="none" stroke="#3B82F6" strokeWidth="1.3"
            strokeLinecap="round" strokeLinejoin="round" opacity="0.13"/>

      {/* ? soft glow */}
      <path d="M 36,52 C 36,22 64,22 64,43 C 64,59 51,65 50,70"
            fill="none" stroke="#3B82F6" strokeWidth="15"
            strokeLinecap="round" strokeLinejoin="round" opacity="0.28"/>

      {/* ? main stroke */}
      <path d="M 36,52 C 36,22 64,22 64,43 C 64,59 51,65 50,70"
            fill="none" stroke="url(#mq-qmark)" strokeWidth="7.5"
            strokeLinecap="round" strokeLinejoin="round"
            filter="url(#mq-qglow)"/>

      {/* Dot outer glow */}
      <circle cx="50" cy="84" r="12" fill="#2563EB" opacity="0.22" filter="url(#mq-dotglow)"/>
      {/* Dot body */}
      <circle cx="50" cy="84" r="7" fill="url(#mq-dot)" filter="url(#mq-qglow)"/>
      <circle cx="50" cy="84" r="7" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1"/>
      {/* Medical cross */}
      <line x1="50" y1="79.8" x2="50" y2="88.2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="45.8" y1="84" x2="54.2" y2="84" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      {/* Shine */}
      <circle cx="47.5" cy="81.5" r="1.4" fill="white" opacity="0.5"/>
    </svg>
  );
}

function MedQuestLogo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: collapsed ? 0 : 10 }}>
      <MedQuestLogoIcon size={38} />
      {!collapsed && (
        <div style={{ lineHeight: 1, userSelect: 'none' }}>
          <span style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 300,
            fontSize: 18,
            letterSpacing: '-0.03em',
            color: '#1E293B',
          }}>Med</span>
          <span style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 900,
            fontSize: 18,
            letterSpacing: '-0.04em',
            color: '#2563EB',
          }}>Quest</span>
        </div>
      )}
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────

interface GamePathNodeProps {
  subject: string;
  progress: number;
  index: number;
  isSelected: boolean;
  onClick: () => void;
  key?: string | number;
}

const GamePathNode = ({ 
  subject, 
  progress, 
  index, 
  isSelected, 
  onClick 
}: GamePathNodeProps) => {
  const iconData = SUBJECT_ICONS[subject] || { icon: BookOpen, color: 'bg-slate-400', ringColor: '#CBD5E1' };
  const Icon = iconData.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="flex flex-col items-center gap-3 relative py-4 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        {/* Progress outer ring - Duolingo Style */}
        <div className={`relative w-24 h-24 rounded-full flex items-center justify-center p-2 transition-all duration-300 ${
          isSelected ? 'bg-slate-200 shadow-lg' : 'bg-slate-100 hover:bg-slate-200'
        }`}>
          {/* Progress Circular Stroke */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 z-10">
            <circle
              cx="48"
              cy="48"
              r="44"
              fill="transparent"
              stroke="#E2E8F0"
              strokeWidth="8"
            />
            <motion.circle
              cx="48"
              cy="48"
              r="44"
              fill="transparent"
              stroke={iconData.ringColor || "#10B981"}
              strokeWidth="8"
              strokeDasharray="276.46"
              initial={{ strokeDashoffset: 276.46 }}
              animate={{ strokeDashoffset: 276.46 - (276.46 * progress) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>

          {/* Icon Bubble */}
          <div className={`relative z-20 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden ${
            isSelected 
              ? `scale-110 shadow-lg border-b-4 border-black/10` 
              : `hover:scale-105 border-b-4 border-black/20`
          } ${iconData.color || 'bg-brand-primary'}`}>
             {iconData.image ? (
               <img 
                 src={iconData.image} 
                 alt={subject} 
                 className={`w-12 h-12 object-contain aspect-square ${subject === 'Anatomia' ? '-translate-y-1' : ''}`} 
                 referrerPolicy="no-referrer"
               />
             ) : (
               <Icon size={26} className="text-white" strokeWidth={3} />
             )}
          </div>

          {/* Level Crown Badge - Duolingo Style */}
          {(() => {
            const lv = Math.floor(progress / 20); // 0–5 conforme mastery
            const badgeBg  = lv === 0 ? '#94A3B8' : lv < 3 ? '#F59E0B' : lv < 5 ? '#3B82F6' : '#8B5CF6';
            const badgePip = lv === 0 ? '#64748B' : lv < 3 ? '#D97706' : lv < 5 ? '#2563EB' : '#7C3AED';
            return (
              <div
                className="absolute bottom-0 right-0 z-30 w-8 h-8 rounded-xl flex items-center justify-center shadow-lg border-2 border-white transform rotate-12 group-hover:rotate-0 transition-transform"
                style={{ background: badgeBg }}
              >
                <Trophy size={14} className="text-white" fill="currentColor" />
                <span
                  className="absolute -top-3 -right-1 text-white text-[8px] font-black px-1.5 rounded-full border border-white"
                  style={{ background: badgePip }}
                >
                  LV.{lv}
                </span>
              </div>
            );
          })()}
        </div>
      </div>
      
      {/* Label - Below the icon */}
      <div className="text-center">
        <h4 className={`text-[10px] sm:text-[11px] font-black uppercase tracking-tight leading-tight max-w-[110px] break-words ${
          isSelected ? 'text-slate-900 scale-105' : 'text-slate-500'
        } transition-all`}>
          {subject}
        </h4>
      </div>
    </motion.div>
  );
};

const MascotHeart = ({ mood = 'happy', size = 110 }: { mood?: 'happy' | 'sad' | 'excited'; size?: number }) => {
  const [isBlinking, setIsBlinking] = useState(false);
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const schedule = () => {
      t = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 130);
        schedule();
      }, 2400 + Math.floor(Math.random() * 2600));
    };
    schedule();
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      style={{ width: size, height: size * 1.22, flexShrink: 0 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 200 244" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>

        {/* ── SHADOW ── */}
        <ellipse cx="100" cy="238" rx="46" ry="6" fill="rgba(0,0,0,0.13)" />

        {/* ── SHOES ── */}
        <ellipse cx="80"  cy="226" rx="29" ry="14" fill="#C4782A" />
        <ellipse cx="120" cy="226" rx="29" ry="14" fill="#C4782A" />
        <ellipse cx="71"  cy="220" rx="12" ry="5" fill="rgba(255,255,255,0.28)" transform="rotate(-8 71 220)" />
        <ellipse cx="111" cy="220" rx="12" ry="5" fill="rgba(255,255,255,0.28)" transform="rotate(-8 111 220)" />
        {/* Shoe outline */}
        <ellipse cx="80"  cy="226" rx="29" ry="14" fill="none" stroke="#A05E1A" strokeWidth="1.5" opacity="0.5" />
        <ellipse cx="120" cy="226" rx="29" ry="14" fill="none" stroke="#A05E1A" strokeWidth="1.5" opacity="0.5" />

        {/* ── LEGS ── */}
        <rect x="68"  y="184" width="24" height="46" rx="12" fill="#6290B8" />
        <rect x="108" y="184" width="24" height="46" rx="12" fill="#6290B8" />
        <rect x="68"  y="184" width="24" height="46" rx="12" fill="none" stroke="#3A5A7A" strokeWidth="1.5" opacity="0.35" />
        <rect x="108" y="184" width="24" height="46" rx="12" fill="none" stroke="#3A5A7A" strokeWidth="1.5" opacity="0.35" />

        {/* ── LEFT COAT PANEL (behind heart) ── */}
        <path d="M 40,82 C 32,96 6,118 2,140 L 2,208 C 2,210 4,212 6,212 L 46,212 C 44,194 42,168 40,138 C 39,116 39,98 40,82 Z"
          fill="white" stroke="#4A6886" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Left coat fold / inner shadow */}
        <path d="M 40,82 C 34,96 10,118 4,140 L 4,168 L 22,156 C 28,138 34,116 40,98 Z"
          fill="#CCDFF0" opacity="0.9" />
        {/* Left lapel crease line */}
        <path d="M 40,82 C 40,100 40,122 42,144"
          stroke="#4A6886" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />

        {/* ── RIGHT COAT PANEL (behind heart, mirror) ── */}
        <path d="M 160,82 C 168,96 194,118 198,140 L 198,208 C 198,210 196,212 194,212 L 154,212 C 156,194 158,168 160,138 C 161,116 161,98 160,82 Z"
          fill="white" stroke="#4A6886" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Right coat fold */}
        <path d="M 160,82 C 166,96 190,118 196,140 L 196,168 L 178,156 C 172,138 166,116 160,98 Z"
          fill="#CCDFF0" opacity="0.9" />
        {/* Right lapel crease */}
        <path d="M 160,82 C 160,100 160,122 158,144"
          stroke="#4A6886" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />

        {/* ── LEFT ARM — junto ao corpo, pendurado verticalmente ── */}
        <path d="M 22,138 Q 16,156 18,174 Q 20,186 30,186 Q 38,186 38,174 Q 38,158 32,140 Z"
          fill="#6290B8" stroke="#3A5A7A" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="28" cy="188" rx="11" ry="8" fill="#6290B8" stroke="#3A5A7A" strokeWidth="1.5" transform="rotate(-8 28 188)" />
        <path d="M 20,182 Q 18,175 23,173" stroke="#3A5A7A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M 25,185 Q 23,178 28,176" stroke="#3A5A7A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M 31,185 Q 29,178 34,176" stroke="#3A5A7A" strokeWidth="1.2" fill="none" strokeLinecap="round" />

        {/* ── RIGHT ARM — mirror ── */}
        <path d="M 178,138 Q 184,156 182,174 Q 180,186 170,186 Q 162,186 162,174 Q 162,158 168,140 Z"
          fill="#6290B8" stroke="#3A5A7A" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="172" cy="188" rx="11" ry="8" fill="#6290B8" stroke="#3A5A7A" strokeWidth="1.5" transform="rotate(8 172 188)" />
        <path d="M 180,182 Q 182,175 177,173" stroke="#3A5A7A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M 175,185 Q 177,178 172,176" stroke="#3A5A7A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M 169,185 Q 171,178 166,176" stroke="#3A5A7A" strokeWidth="1.2" fill="none" strokeLinecap="round" />

        {/* ── STETHOSCOPE — tubo curto do pescoço ao peito ── */}
        <line x1="60" y1="94" x2="56" y2="83" stroke="#1C2E45" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="60" y1="94" x2="50" y2="88" stroke="#1C2E45" strokeWidth="2.8" strokeLinecap="round" />

        {/* ── HEART BODY ── */}
        <path d="M 100,36 C 100,26 91,14 78,14 C 54,14 38,38 38,64 C 38,100 100,192 100,192 C 100,192 162,100 162,64 C 162,38 146,14 122,14 C 109,14 100,26 100,36 Z"
          fill="#6290B8" />
        <path d="M 100,36 C 100,26 91,14 78,14 C 54,14 38,38 38,64 C 38,100 100,192 100,192 C 100,192 162,100 162,64 C 162,38 146,14 122,14 C 109,14 100,26 100,36 Z"
          fill="none" stroke="#3A5A7A" strokeWidth="2.5" />

        {/* Heart glossy highlight (3 layers) */}
        <ellipse cx="72" cy="44" rx="24" ry="15" fill="rgba(255,255,255,0.22)" transform="rotate(-25 72 44)" />
        <ellipse cx="68" cy="40" rx="11" ry="6.5" fill="rgba(255,255,255,0.38)" transform="rotate(-25 68 40)" />
        <circle  cx="60" cy="29" r="5" fill="rgba(255,255,255,0.50)" />

        {/* ── STETHOSCOPE on chest (loop visible over heart) ── */}
        <path d="M 60,94 Q 52,110 56,126 Q 60,142 74,146 Q 90,150 96,136 Q 100,124 90,118"
          stroke="#1C2E45" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <circle cx="91" cy="116" r="7.5" fill="#1C2E45" />
        <circle cx="91" cy="116" r="4.5" fill="#7AAAD4" />

        {/* ── EYES ── */}
        <circle cx="80"  cy="78" r="23" fill="white" stroke="#3A5070" strokeWidth="1.8" />
        <circle cx="120" cy="78" r="23" fill="white" stroke="#3A5070" strokeWidth="1.8" />
        <circle cx="82"  cy="80" r="14.5" fill="#4478A8" />
        <circle cx="122" cy="80" r="14.5" fill="#4478A8" />
        <circle cx="83"  cy="81" r="9"  fill="#192A3E" />
        <circle cx="123" cy="81" r="9"  fill="#192A3E" />
        {/* Shine */}
        <circle cx="89"  cy="74" r="5.5" fill="white" />
        <circle cx="129" cy="74" r="5.5" fill="white" />
        <circle cx="77"  cy="87" r="2.8" fill="rgba(255,255,255,0.55)" />
        <circle cx="117" cy="87" r="2.8" fill="rgba(255,255,255,0.55)" />

        {/* ── EYEBROWS ── */}
        <path d={mood === 'sad' ? "M 62,57 Q 76,53 90,57" : "M 63,54 Q 76,46 90,50"}
          stroke="#1C2E45" strokeWidth="3.2" fill="none" strokeLinecap="round" />
        <path d={mood === 'sad' ? "M 110,57 Q 124,53 138,57" : "M 110,50 Q 124,46 137,54"}
          stroke="#1C2E45" strokeWidth="3.2" fill="none" strokeLinecap="round" />

        {/* ── MOUTH ── */}
        {mood === 'sad' ? (
          <path d="M 85,117 Q 100,107 115,117" stroke="#1C2E45" strokeWidth="3" fill="none" strokeLinecap="round" />
        ) : (
          <>
            <path d="M 85,115 Q 100,131 115,115" stroke="#1C2E45" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 87,117 Q 100,131 113,117 L 111,121 Q 100,133 89,121 Z" fill="#D46060" />
            <path d="M 91,119 Q 100,124 109,119 Q 107,117 100,117 Q 93,117 91,119 Z" fill="white" />
          </>
        )}

        {/* ── MEDICAL CROSS ── */}
        <rect x="93" y="152" width="14" height="5"  rx="2.5" fill="#3A5A7A" opacity="0.82" />
        <rect x="97" y="148" width="6"  height="13" rx="3"   fill="#3A5A7A" opacity="0.82" />

        {/* ── SPARKLES ── */}
        <path d="M 120,143 L 121.5,139 L 123,143 L 127,144.5 L 123,146 L 121.5,150 L 120,146 L 116,144.5 Z" fill="rgba(255,255,255,0.92)" />
        <path d="M  74,158 L  75,155.5 L  76,158 L 78.5,159 L  76,160 L  75,162.5 L  74,160 L 71.5,159 Z" fill="rgba(255,255,255,0.72)" />
        <path d="M 128,162 L 129,160 L 130,162 L 132,163 L 130,164 L 129,166 L 128,164 L 126,163 Z" fill="rgba(255,255,255,0.62)" />

        {/* ── BLINK ── */}
        {isBlinking && (
          <g>
            <ellipse cx="80"  cy="78" rx="24" ry="10" fill="#6290B8" />
            <ellipse cx="120" cy="78" rx="24" ry="10" fill="#6290B8" />
          </g>
        )}
      </svg>
    </motion.div>
  );
};

const BANCAS = [
  { id: 'enare',       short: 'ENARE',          name: 'Exame Nacional de Residência Médica',               uf: 'BR' },
  { id: 'usp',         short: 'USP',             name: 'Universidade de São Paulo',                        uf: 'SP' },
  { id: 'unifesp',     short: 'UNIFESP',         name: 'Universidade Federal de São Paulo',                uf: 'SP' },
  { id: 'einstein',    short: 'Einstein',        name: 'Hospital Israelita Albert Einstein',               uf: 'SP' },
  { id: 'hcor',        short: 'HCor',            name: 'Hospital do Coração',                              uf: 'SP' },
  { id: 'siriolib',    short: 'Sírio-Libanês',   name: 'Hospital Sírio-Libanês',                          uf: 'SP' },
  { id: 'sussp',       short: 'SUS-SP',          name: 'Secretaria Estadual de Saúde de São Paulo',       uf: 'SP' },
  { id: 'santacasa',   short: 'Santa Casa SP',   name: 'Santa Casa de Misericórdia de São Paulo',         uf: 'SP' },
  { id: 'unicamp',     short: 'UNICAMP',         name: 'Universidade Estadual de Campinas',                uf: 'SP' },
  { id: 'unesp',       short: 'UNESP',           name: 'Universidade Estadual Paulista',                   uf: 'SP' },
  { id: 'hcfmusp',     short: 'HC-FMUSP',        name: 'Hospital das Clínicas da FMUSP',                  uf: 'SP' },
  { id: 'barretos',    short: 'Barretos',        name: 'Hospital de Câncer de Barretos',                  uf: 'SP' },
  { id: 'claretiano',  short: 'Claretiano',      name: 'Centro Universitário de Rio Claro',               uf: 'SP' },
  { id: 'ufrj',        short: 'UFRJ',            name: 'Universidade Federal do Rio de Janeiro',          uf: 'RJ' },
  { id: 'uerj',        short: 'UERJ',            name: 'Universidade Estadual do Rio de Janeiro',         uf: 'RJ' },
  { id: 'inca',        short: 'INCA',            name: 'Instituto Nacional do Câncer',                    uf: 'RJ' },
  { id: 'afamci',      short: 'AFAMCI',          name: 'Hospital dos Plantadores de Cana',                uf: 'RJ' },
  { id: 'chn',         short: 'CHN',             name: 'Complexo Hospitalar de Niterói',                  uf: 'RJ' },
  { id: 'ufrgs',       short: 'UFRGS',           name: 'Universidade Federal do Rio Grande do Sul',       uf: 'RS' },
  { id: 'amrigs',      short: 'AMRIGS',          name: 'Associação Médica do Rio Grande do Sul',          uf: 'RS' },
  { id: 'hcpa',        short: 'HCPA',            name: 'Hospital de Clínicas de Porto Alegre',            uf: 'RS' },
  { id: 'moinhos',     short: 'Moinhos',         name: 'Hospital Moinhos de Vento',                       uf: 'RS' },
  { id: 'ufpr',        short: 'UFPR',            name: 'Universidade Federal do Paraná',                  uf: 'PR' },
  { id: 'amp',         short: 'AMP',             name: 'Associação Médica do Paraná',                     uf: 'PR' },
  { id: 'ams',         short: 'AMS',             name: 'Autarquia Municipal de Saúde de Apucarana',       uf: 'PR' },
  { id: 'ufmg',        short: 'UFMG',            name: 'Universidade Federal de Minas Gerais',            uf: 'MG' },
  { id: 'hcufmg',      short: 'HC-UFMG',         name: 'Hospital das Clínicas da UFMG',                  uf: 'MG' },
  { id: 'ufsc',        short: 'UFSC',            name: 'Universidade Federal de Santa Catarina',          uf: 'SC' },
  { id: 'ufba',        short: 'UFBA',            name: 'Universidade Federal da Bahia',                   uf: 'BA' },
  { id: 'saorafael',   short: 'São Rafael',      name: 'Hospital São Rafael',                             uf: 'BA' },
  { id: 'ufc',         short: 'UFC',             name: 'Universidade Federal do Ceará',                   uf: 'CE' },
  { id: 'ufpe',        short: 'UFPE',            name: 'Universidade Federal de Pernambuco',              uf: 'PE' },
  { id: 'ufpb',        short: 'UFPB',            name: 'Universidade Federal da Paraíba',                 uf: 'PB' },
  { id: 'unb',         short: 'UnB',             name: 'Universidade de Brasília',                        uf: 'DF' },
  { id: 'ufg',         short: 'UFG',             name: 'Universidade Federal de Goiás',                   uf: 'GO' },
  { id: 'ufms',        short: 'UFMS',            name: 'Universidade Federal de Mato Grosso do Sul',      uf: 'MS' },
  { id: 'cerem',       short: 'CEREM-MS',        name: 'Comissão Estadual de Residência Médica do MS',   uf: 'MS' },
  { id: 'cermam',      short: 'CERMAM',          name: 'Comissão Estadual de Residência Médica do AM',   uf: 'AM' },
  { id: 'ufam',        short: 'UFAM',            name: 'Universidade Federal do Amazonas',               uf: 'AM' },
  { id: 'ufpa',        short: 'UFPA',            name: 'Universidade Federal do Pará',                    uf: 'PA' },
  { id: 'cesupa',      short: 'CESUPA',          name: 'Centro Universitário do Estado do Pará',          uf: 'PA' },
  { id: 'ufmt',        short: 'UFMT',            name: 'Universidade Federal do Mato Grosso',             uf: 'MT' },
];

const BANCAS_PER_PAGE = 6;

const MEDICAL_AVATARS = [
  { id: 'stethoscope', emoji: '🩺', label: 'Clínica Geral',    bg: '#EFF6FF', ring: '#3B82F6' },
  { id: 'heart',       emoji: '🫀', label: 'Cardiologia',      bg: '#FEE2E2', ring: '#DC2626' },
  { id: 'brain',       emoji: '🧠', label: 'Neurologia',       bg: '#EDE9FE', ring: '#7C3AED' },
  { id: 'lungs',       emoji: '🫁', label: 'Pneumologia',      bg: '#DBEAFE', ring: '#2563EB' },
  { id: 'bone',        emoji: '🦴', label: 'Ortopedia',        bg: '#FEF3C7', ring: '#D97706' },
  { id: 'eye',         emoji: '👁️', label: 'Oftalmologia',    bg: '#DCFCE7', ring: '#16A34A' },
  { id: 'baby',        emoji: '👶', label: 'Pediatria',        bg: '#FDF4FF', ring: '#A855F7' },
  { id: 'pill',        emoji: '💊', label: 'Farmacologia',     bg: '#ECFDF5', ring: '#059669' },
  { id: 'scope',       emoji: '🔬', label: 'Patologia',        bg: '#FFF7ED', ring: '#EA580C' },
  { id: 'xray',        emoji: '🩻', label: 'Radiologia',       bg: '#F0F9FF', ring: '#0369A1' },
  { id: 'syringe',     emoji: '💉', label: 'Anestesiologia',   bg: '#FFF1F2', ring: '#E11D48' },
  { id: 'dna',         emoji: '🧬', label: 'Genética',         bg: '#F0FDF4', ring: '#22C55E' },
  { id: 'tooth',       emoji: '🦷', label: 'Odontologia',      bg: '#F0F9FF', ring: '#0284C7' },
  { id: 'flask',       emoji: '🧪', label: 'Pesquisa Clínica', bg: '#FDF2F8', ring: '#EC4899' },
  { id: 'hospital',    emoji: '🏥', label: 'Saúde Pública',    bg: '#ECFDF5', ring: '#10B981' },
  { id: 'scalpel',     emoji: '🩹', label: 'Cirurgia Geral',   bg: '#F8FAFC', ring: '#475569' },
  { id: 'kidneys',     emoji: '🫘', label: 'Nefrologia',       bg: '#FFF7ED', ring: '#C2410C' },
  { id: 'stomach',     emoji: '🫃', label: 'Gastroenterologia',bg: '#FEF9C3', ring: '#CA8A04' },
  { id: 'skin',        emoji: '🌡️', label: 'Infectologia',    bg: '#FFF1F2', ring: '#BE123C' },
  { id: 'psychiatry',  emoji: '🧘', label: 'Psiquiatria',      bg: '#FAF5FF', ring: '#9333EA' },
];

export default function App() {
  const [view, setView] = useState<'landing' | 'home' | 'quiz' | 'summary' | 'ranking' | 'profile' | 'progress' | 'revision' | 'residencia-onboarding'>('landing');
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');
  const [rankingTab, setRankingTab] = useState<'global' | 'friends'>('global');
  const [activeLeague, setActiveLeague] = useState<LeagueTier>('bronze');
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendSearch, setFriendSearch] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<'estudante' | 'residencia' | null>(null);
  const [showBenefits, setShowBenefits] = useState(false);
  const [selectedBanca, setSelectedBanca] = useState<string | null>(null);
  const [bancaSearch, setBancaSearch] = useState('');
  const [bancaPage, setBancaPage] = useState(0);
  const [bancaUfFilter, setBancaUfFilter] = useState<string>('TODAS');
  const [userAvatar, setUserAvatar] = useState<string>('stethoscope');
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [selectedCycle, setSelectedCycle] = useState<Cycle>('Ciclo Clínico');
  const [selectedSubject, setSelectedSubject] = useState<Subject>('Clínica Médica');
  const [selectedSubSubject, setSelectedSubSubject] = useState<string | null>(null);

  const [progressFilter, setProgressFilter] = useState<'7d' | '30d' | 'total'>('30d');
  const [hoveredCell, setHoveredCell] = useState<{ date: Date; count: number; x: number; y: number; col: number } | null>(null);

  const heatmapData = useMemo(() => {
    const data = [];
    const now = new Date();
    const dayOfWeek = now.getDay();
    const startDate = new Date(now);
    // Align to Sunday of 4 weeks ago
    startDate.setDate(now.getDate() - dayOfWeek - 21);

    for (let i = 0; i < 28; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      // Data only up to today
      const isPastOrToday = date <= now;
      const count = isPastOrToday ? (Math.random() > 0.3 ? Math.floor(Math.random() * 12) + 1 : 0) : 0;
      data.push({ date, count });
    }
    return data;
  }, []);

  const currentChartData = CHART_DATA[progressFilter];
  const chartBest = Math.max(...currentChartData.map(d => d.value));
  const chartWorst = Math.min(...currentChartData.map(d => d.value));
  const chartGain = currentChartData.length > 1
    ? currentChartData[currentChartData.length - 1].value - currentChartData[0].value
    : 0;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'short',
      day: '2-digit',
      month: 'short'
    });
  };

  const formatTimer = (s: number) =>
    `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;


  const getIntensity = (count: number) => {
    if (count === 0) return 'bg-white/5';
    if (count < 4) return 'bg-brand-primary/20';
    if (count < 8) return 'bg-brand-primary/50';
    if (count < 12) return 'bg-brand-primary/80';
    return 'bg-brand-primary';
  };
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const carouselRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateConstraints = () => {
      if (carouselRef.current && contentRef.current) {
        const parentWidth = carouselRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;
        const availableScroll = contentWidth - parentWidth;
        
        // Exact constraints based on content with a small elastic buffer
        setDragConstraints({
          left: -Math.max(0, availableScroll),
          right: 0
        });
      }
    };

    updateConstraints();
    const timer = setTimeout(updateConstraints, 100);
    const timer2 = setTimeout(updateConstraints, 500); // Back-up for slow loads
    
    window.addEventListener('resize', updateConstraints);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      window.removeEventListener('resize', updateConstraints);
    };
  }, [selectedCycle, view, selectedTrack]);

  const [user, setUser] = useState<UserState>({
    name: '',
    profileImage: undefined,
    xp: 0,
    level: 1,
    streak: 0,
    hearts: 5,
    dailyGoalDone: 0,
    dailyGoalTotal: 10,
    weeklyGoalDone: 0,
    weeklyGoalTotal: 70,
    friends: [],
    mastery: {
      'Clínica Médica': 0,
      'Clínica Cirúrgica': 0,
      'Pediatria': 0,
      'Ginecologia & Obstetrícia': 0,
      'Medicina de Família/SUS': 0,
      'Anatomia': 0,
      'Fisiologia': 0,
      'Histologia': 0,
      'Embriologia': 0,
      'Microbiologia': 0,
      'Imunologia': 0,
      'Farmacologia': 0
    },
    subjectAttempts: {},
    planStartDate: new Date().toISOString().slice(0, 10),
    missedQuestionIds: []
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [isRevisionMode, setIsRevisionMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [sessionResults, setSessionResults] = useState<SessionResult>({ correct: 0, total: 0, xpGained: 0 });
  const [sessionHistory, setSessionHistory] = useState<{questionId: string, selectedIndex: number}[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [tempName, setTempName] = useState('');
  const [landingStep, setLandingStep] = useState<0 | 1>(0);
  const [nameInput, setNameInput] = useState('');
  const [showAllSpecialties, setShowAllSpecialties] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showStreakLostModal, setShowStreakLostModal] = useState(false);
  const [lostStreakCount, setLostStreakCount] = useState(0);
  const [quizTimer, setQuizTimer] = useState(0);
  const [combo, setCombo] = useState(0);
  const [showXpFloat, setShowXpFloat] = useState(false);
  const [summaryXP, setSummaryXP] = useState(0);
  const [summaryTimer, setSummaryTimer] = useState(0);
  const [loadingTextIdx, setLoadingTextIdx] = useState(0);
  const confettiData = useRef(
    Array.from({ length: 22 }).map((_, i) => ({
      x: 4 + (i / 22) * 92,
      color: ['#2563EB','#10B981','#F59E0B','#EF4444','#8B5CF6','#EC4899'][i % 6],
      duration: 1.1 + (i % 5) * 0.18,
      delay: (i % 9) * 0.05,
      rotate: (i * 43) % 360,
      isSquare: i % 2 === 0,
    }))
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Quiz timer
  useEffect(() => {
    if (view !== 'quiz') { setQuizTimer(0); return; }
    const id = setInterval(() => setQuizTimer((t: number) => t + 1), 1000);
    return () => clearInterval(id);
  }, [view]);

  // Loading text rotation
  useEffect(() => {
    if (!isThinking) { setLoadingTextIdx(0); return; }
    const id = setInterval(() => setLoadingTextIdx((i: number) => (i + 1) % LOADING_TEXTS.length), 550);
    return () => clearInterval(id);
  }, [isThinking]);

  // Summary XP counter animation
  useEffect(() => {
    if (view !== 'summary') { setSummaryXP(0); return; }
    const target = sessionResults.xpGained;
    if (target === 0) { setSummaryXP(0); return; }
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 28));
    const id = setInterval(() => {
      current = Math.min(current + step, target);
      setSummaryXP(current);
      if (current >= target) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, [view, sessionResults.xpGained]);

  const copyInviteLink = () => {
    const inviteLink = `https://med-ia.app/invite/${user.name.toLowerCase().replace(/\s+/g, '-')}`;
    navigator.clipboard.writeText(inviteLink);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Removed unstable sessionQuestions useMemo
  
  const selectTrack = (track: 'estudante' | 'residencia') => {
    setSelectedTrack(track);
    setIsRevisionMode(false);
    if (track === 'residencia') setSelectedCycle('Ciclo Clínico');
    setView('home');
  };

  const startQuiz = (revision: boolean = false, overrideSubject?: Subject, overrideSubSubject?: string | null) => {
    setIsThinking(true);
    setIsRevisionMode(revision);
    const activeSubject = overrideSubject ?? selectedSubject;
    const activeSubSubject = overrideSubSubject !== undefined ? overrideSubSubject : selectedSubSubject;

    // Select questions once at the start of the session
    let filtered = [...QUESTIONS];
    if (revision) {
      filtered = QUESTIONS.filter(q => user.missedQuestionIds.includes(q.id));
      if (filtered.length === 0) filtered = [...QUESTIONS].slice(0, 5);
    } else if (selectedTrack === 'estudante') {
      filtered = filtered.filter(q => q.cycle === selectedCycle && q.subject === activeSubject);
      if (activeSubSubject) {
        filtered = filtered.filter(q => q.subSubject === activeSubSubject);
      }
    }
    
    const selected = filtered.length > 0 
      ? filtered.sort(() => Math.random() - 0.5).slice(0, 10) 
      : [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 5);

    setTimeout(() => {
      setIsThinking(false);
      setActiveQuestions(selected);
      setSessionResults({ correct: 0, total: selected.length, xpGained: 0 });
      setSessionHistory([]);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setCombo(0);
      setQuizTimer(0);
      setIsFeedbackVisible(false);
      setView('quiz');
    }, 2000);
  };

  const handleOptionSelect = (index: number) => {
    if (isFeedbackVisible) return;
    setSelectedOption(index);
    
    // Auto-check answer on click
    setIsFeedbackVisible(true);
    const currentQuestion = activeQuestions[currentQuestionIndex];
    const isCorrect = index === currentQuestion.correctIndex;
    
    setSessionHistory(prev => [...prev, { questionId: currentQuestion.id, selectedIndex: index }]);
    
    if (isCorrect) {
      const newCombo = combo + 1;
      setCombo(newCombo);
      setShowXpFloat(true);
      setTimeout(() => setShowXpFloat(false), 900);
      const xpEarned = newCombo >= 5 ? 100 : newCombo >= 3 ? 75 : 50;
      setSessionResults(prev => ({ ...prev, correct: prev.correct + 1, xpGained: prev.xpGained + xpEarned }));
      setUser(prev => {
        const subj = currentQuestion.subject;
        const attempts = (prev.subjectAttempts[subj] || 0) + 1;
        const currentMastery = prev.mastery[subj] || 0;
        const newMastery = Math.min(100, Math.round(currentMastery + (100 - currentMastery) * 0.15));
        return {
          ...prev,
          mastery: { ...prev.mastery, [subj]: newMastery },
          subjectAttempts: { ...prev.subjectAttempts, [subj]: attempts },
          dailyGoalDone: Math.min(prev.dailyGoalTotal, prev.dailyGoalDone + 1),
          missedQuestionIds: isRevisionMode
            ? prev.missedQuestionIds.filter((id: string) => id !== currentQuestion.id)
            : prev.missedQuestionIds,
        };
      });
    } else {
      setCombo(0);
      setUser(prev => {
        const subj = currentQuestion.subject;
        const attempts = (prev.subjectAttempts[subj] || 0) + 1;
        const currentMastery = prev.mastery[subj] || 0;
        const newMastery = Math.max(0, Math.round(currentMastery - currentMastery * 0.08));
        return {
          ...prev,
          hearts: Math.max(0, prev.hearts - 1),
          mastery: { ...prev.mastery, [subj]: newMastery },
          subjectAttempts: { ...prev.subjectAttempts, [subj]: attempts },
          missedQuestionIds: Array.from(new Set([...prev.missedQuestionIds, currentQuestion.id])),
        };
      });
    }
  };

  const nextQuestion = () => {
    if (user.hearts <= 0) {
      if (user.streak > 0) {
        setLostStreakCount(user.streak);
        setUser((prev: typeof user) => ({ ...prev, streak: 0 }));
        setShowStreakLostModal(true);
      }
      setView('home');
      return;
    }
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsFeedbackVisible(false);
    } else {
      // End session
      setSummaryTimer(quizTimer);
      setUser(prev => {
        const newXp = prev.xp + sessionResults.xpGained;
        const newLevel = Math.floor(newXp / 1000) + 1;
        const newWeeklyDone = Math.min(prev.weeklyGoalTotal, prev.weeklyGoalDone + sessionResults.correct);
        return {
          ...prev,
          xp: newXp,
          level: newLevel,
          streak: prev.streak + 1,
          weeklyGoalDone: newWeeklyDone,
        };
      });
      setView('summary');
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-slate-900 overflow-x-hidden">
      {/* Header / Stats Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-3 py-3 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          <div className="cursor-pointer" onClick={() => setView('home')}>
            <MedQuestLogo />
          </div>

          <div className="flex items-center bg-slate-50 px-2 py-1.5 rounded-full border border-slate-200 hide-scrollbar overflow-x-auto max-w-[220px] sm:max-w-none shadow-sm">
            <div className="flex items-center gap-1.5 px-2.5 border-r border-slate-200 shrink-0">
              <Flame size={16} className="text-brand-orange fill-brand-orange" />
              <span className="font-black text-slate-900 text-sm">{user.streak}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 border-r border-slate-200 shrink-0">
              <Target size={16} className="text-rose-500" />
              <span className="font-black text-rose-600 text-sm">{Math.max(0, user.dailyGoalTotal - user.dailyGoalDone)}</span>
            </div>
            <div 
              className="flex items-center gap-1.5 px-2.5 border-r border-slate-200 shrink-0 cursor-pointer active:scale-95 transition-transform" 
              onClick={() => setView('ranking')}
            >
              <Trophy size={16} className="text-brand-orange" />
              <span className="font-black text-slate-900 text-[10px] uppercase tracking-tighter hidden sm:block">Liga</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 border-r border-slate-200 shrink-0">
              <Heart size={16} className="text-brand-red fill-brand-red" />
              <span className="font-black text-slate-900 text-sm">{user.hearts}</span>
            </div>
            <div className="flex items-center gap-2.5 pl-2.5 pr-2 shrink-0">
              <div className="flex flex-col items-end">
                <div className="w-20 h-1.5 bg-slate-200 rounded-full overflow-hidden hidden sm:block mb-1 shadow-inner">
                  <div 
                    className="h-full bg-brand-primary transition-all duration-700" 
                    style={{ width: `${(user.xp % 1000) / 10}%` }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-brand-primary leading-none">{user.xp.toLocaleString()} XP</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Nív. {user.level}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button 
              onClick={() => setView('profile')}
              className={`p-2.5 hover:bg-slate-100 rounded-xl transition-all shrink-0 active:scale-90 ${view === 'profile' ? 'bg-slate-100 text-brand-primary' : ''}`}
            >
              <User size={20} className={view === 'profile' ? 'text-brand-primary' : 'text-slate-400'} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-6 pb-32 md:pb-8">
        {/* Thinking Overlay */}
        <AnimatePresence>
          {isThinking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 z-[100] flex flex-col items-center justify-center gap-12"
            >
              {/* Pulse rings + icon */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.25, 0, 0.25] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute w-40 h-40 rounded-full bg-blue-500/20"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.35, 0.05, 0.35] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="absolute w-28 h-28 rounded-full bg-blue-500/30"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-20 h-20 rounded-full border-2 border-dashed border-blue-400/30"
                />
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-[1.75rem] flex items-center justify-center text-white shadow-2xl shadow-blue-500/50 z-10">
                  <Zap size={36} fill="currentColor" />
                </div>
              </div>

              {/* Rotating text */}
              <div className="text-center space-y-5">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={loadingTextIdx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-black text-white tracking-tight"
                  >
                    {LOADING_TEXTS[loadingTextIdx]}
                  </motion.p>
                </AnimatePresence>
                {/* Dot progress */}
                <div className="flex justify-center gap-2">
                  {LOADING_TEXTS.map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ width: i === loadingTextIdx ? 24 : 6 }}
                      className={`h-1.5 rounded-full transition-colors duration-300 ${i === loadingTextIdx ? 'bg-blue-400' : 'bg-blue-800'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          
          {/* LANDING VIEW */}
          {view === 'landing' && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col gap-10 py-12 px-4"
            >
              {landingStep === 0 ? (
                /* ── STEP 0: captura de nome ── */
                <div className="flex flex-col items-center gap-8 py-4">
                  <div className="flex flex-col items-center gap-5 text-center">
                    <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center shadow-inner border border-blue-100">
                      <Stethoscope size={44} className="text-brand-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-slate-900 tracking-tighter leading-tight">
                        Bem-vindo ao <span className="text-brand-primary">MedQuest</span>!
                      </h2>
                      <p className="text-slate-500 font-medium mt-2 text-sm leading-snug">
                        Vamos personalizar sua experiência de estudo.
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">
                      Como devemos te chamar?
                    </label>
                    <input
                      type="text"
                      placeholder='Ex: "Dr. Silva" ou apenas "João"'
                      value={nameInput}
                      onChange={e => setNameInput(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' && nameInput.trim()) {
                          setUser(prev => ({ ...prev, name: nameInput.trim() }));
                          setLandingStep(1);
                        }
                      }}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-brand-primary focus:outline-none text-slate-900 font-bold text-base bg-white shadow-sm transition-colors"
                      autoFocus
                    />
                    <p className="text-[10px] text-slate-400 font-medium px-1 leading-snug">
                      Use "Dr. Sobrenome" se for médico ou residente, ou apenas seu primeiro nome.
                    </p>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      if (nameInput.trim()) {
                        setUser(prev => ({ ...prev, name: nameInput.trim() }));
                        setLandingStep(1);
                      }
                    }}
                    disabled={!nameInput.trim()}
                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all
                      ${nameInput.trim()
                        ? 'bg-brand-primary text-white shadow-xl shadow-blue-500/25 hover:scale-[1.02]'
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                  >
                    <span>Continuar</span>
                    {nameInput.trim() && <ChevronRight size={18} strokeWidth={3} />}
                  </motion.button>
                </div>
              ) : (
                /* ── STEP 1: seleção de trilha ── */
                <>
                  <div className="text-center space-y-4 flex flex-col items-center">
                    <div className="px-6 py-2 bg-slate-100/80 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] backdrop-blur-sm">
                      Plataforma Médica Completa
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 max-w-sm leading-snug">
                      Plataforma completa para <span className="text-brand-primary border-b-2 border-brand-primary/30">estudantes</span> e <span className="text-brand-primary border-b-2 border-brand-primary/30">médicos</span>, da graduação ao título de especialista.
                    </h2>
                    <button
                      onClick={() => setShowBenefits(true)}
                      className="flex items-center gap-2 px-8 py-4 mt-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl shadow-sm hover:bg-slate-50 transition-all uppercase text-[10px] tracking-[0.15em] active:scale-95"
                    >
                      <BookOpen size={18} className="text-brand-primary" />
                      Conheça as Vantagens
                    </button>
                  </div>

                  <div className="flex flex-col items-center gap-8 w-full max-w-md mx-auto">
                    {/* Trilha Estudante Card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      onClick={() => selectTrack('estudante')}
                      className="w-full bg-white p-10 rounded-[3rem] border border-slate-200/80 shadow-2xl cursor-pointer group transition-all relative overflow-hidden flex flex-col"
                    >
                      <div className="flex justify-between items-start mb-12">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-primary border border-blue-150 shadow-inner">
                          <BookOpen size={36} />
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">A partir de</p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-slate-900 tracking-tighter">R$19,90</span>
                            <span className="text-slate-400 text-sm font-bold">/mês</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h3 className="text-4xl font-black text-slate-900 tracking-tighter leading-none">Trilha Estudante</h3>
                        <p className="text-slate-500 font-medium text-base leading-relaxed">
                          Questões por sistema alinhadas ao seu currículo da faculdade. Ideal para o ciclo clínico e internato sem precisar abrir o Harrison.
                        </p>
                        <div className="space-y-4 pt-4">
                          {['XP DIÁRIO & STREAKS','RANKING DA TURMA','FLASHCARDS COM IA','RESUMOS DO CICLO CLÍNICO'].map(item => (
                            <div key={item} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              <CheckCircle2 size={18} className="text-brand-primary fill-blue-50" strokeWidth={2.5} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Trilha Residência Card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      onClick={() => { setSelectedBanca(null); setBancaSearch(''); setBancaPage(0); setBancaUfFilter('TODAS'); setView('residencia-onboarding'); }}
                      className="w-full bg-slate-900 p-10 rounded-[3rem] shadow-2xl cursor-pointer group transition-all relative overflow-hidden flex flex-col"
                    >
                      <div className="absolute top-0 right-0 py-2.5 px-6 bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest rounded-bl-3xl shadow-lg z-10">
                        Mais Popular
                      </div>
                      <div className="flex justify-between items-start mb-12 relative z-10">
                        <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
                          <Zap size={36} fill="currentColor" />
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">A partir de</p>
                          <div className="flex items-baseline gap-1 text-white">
                            <span className="text-3xl font-black tracking-tighter">R$59,90</span>
                            <span className="text-slate-400 text-sm font-bold">/mês</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6 relative z-10">
                        <h3 className="text-4xl font-black text-white tracking-tighter leading-none">Trilha Residência</h3>
                        <p className="text-slate-400 font-medium text-base leading-relaxed">
                          Foco total nas provas reais (USP, Einstein, SUS-SP). Simulados cronometrados com análise profunda de desempenho e comentários.
                        </p>
                        <div className="space-y-4 pt-4">
                          {['BANCAS: USP, EINSTEIN, SUS','CADERNO DE ERROS IA','CRONOGRAMA ADAPTATIVO','SIMULADOS COM TRI'].map(item => (
                            <div key={item} className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                              <CheckCircle2 size={18} className="text-brand-primary fill-slate-800" strokeWidth={2.5} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    <div className="flex flex-col items-center gap-4 mt-8">
                      <button
                        onClick={() => selectTrack('estudante')}
                        className="text-brand-primary font-black uppercase text-[11px] tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
                      >
                        Começar Agora <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )}

          {/* RESIDÊNCIA ONBOARDING */}
          {view === 'residencia-onboarding' && (() => {
            const filtered = BANCAS.filter(b => {
              const q = bancaSearch.toLowerCase();
              const matchSearch = !q || b.short.toLowerCase().includes(q) || b.name.toLowerCase().includes(q);
              const matchUf = bancaUfFilter === 'TODAS' || b.uf === bancaUfFilter;
              return matchSearch && matchUf;
            });
            const totalPages = Math.max(1, Math.ceil(filtered.length / BANCAS_PER_PAGE));
            const safePage = Math.min(bancaPage, totalPages - 1);
            const pageBancas = filtered.slice(safePage * BANCAS_PER_PAGE, (safePage + 1) * BANCAS_PER_PAGE);
            return (
              <motion.div
                key="residencia-onboarding"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col h-screen"
              >
                {/* Header */}
                <div className="flex items-center gap-3 px-4 pt-4 pb-4 border-b border-slate-100 bg-brand-bg">
                  <button
                    onClick={() => setView('landing')}
                    className="p-2 -ml-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Trilha Residência</p>
                    <p className="text-sm font-black text-slate-900 tracking-tight mt-0.5">Escolha sua banca-alvo</p>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <div className="w-5 h-1.5 rounded-full bg-brand-primary" />
                    <div className="w-2 h-1.5 rounded-full bg-slate-200" />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-4 pt-5 pb-4">
                  {/* Hero */}
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-brand-primary flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
                      <Zap size={22} fill="currentColor" className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-slate-900 tracking-tight leading-snug">
                        Para qual banca você<br />quer se preparar?
                      </h2>
                      <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                        Personalizamos questões e simulados com foco total na sua instituição-alvo.
                      </p>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="relative mb-3">
                    <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Buscar instituição..."
                      value={bancaSearch}
                      onChange={e => { setBancaSearch(e.target.value); setBancaPage(0); }}
                      className="w-full bg-white border border-slate-200 rounded-2xl pl-10 pr-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary shadow-sm"
                    />
                  </div>

                  {/* UF Filters */}
                  <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 mb-4">
                    {['Todas', 'BR', 'SP', 'RJ', 'RS', 'PR', 'MG', 'SC', 'BA', 'CE', 'PE', 'DF', 'GO', 'MS', 'AM', 'PA'].map(uf => {
                      const key = uf === 'Todas' ? 'TODAS' : uf;
                      const active = bancaUfFilter === key;
                      return (
                        <button
                          key={uf}
                          onClick={() => { setBancaUfFilter(key); setBancaPage(0); }}
                          className={`shrink-0 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all
                            ${active ? 'bg-brand-primary text-white shadow-md shadow-blue-500/20' : 'bg-white text-slate-500 border border-slate-200'}`}
                        >
                          {uf}
                        </button>
                      );
                    })}
                  </div>

                  {/* Category label */}
                  <div className="flex items-center gap-2 mb-3">
                    <Hospital size={14} className="text-brand-primary" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Residência Médica</span>
                    <span className="ml-auto text-[10px] font-black text-brand-primary bg-blue-50 px-2 py-0.5 rounded-full">
                      {filtered.length} instituições
                    </span>
                  </div>

                  {/* Todas as Bancas option */}
                  {!bancaSearch && bancaUfFilter === 'TODAS' && (
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedBanca(selectedBanca === 'todas' ? null : 'todas')}
                      className={`w-full flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all text-left mb-2
                        ${selectedBanca === 'todas' ? 'bg-blue-50 border-brand-primary shadow-md shadow-blue-500/10' : 'bg-white border-transparent shadow-sm'}`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors
                        ${selectedBanca === 'todas' ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                        <BookOpen size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-[11px] font-black uppercase tracking-wide leading-none mb-0.5 ${selectedBanca === 'todas' ? 'text-brand-primary' : 'text-slate-900'}`}>
                          Todas as Bancas
                        </p>
                        <p className="text-[11px] text-slate-500 font-medium">Questões de todas as instituições</p>
                      </div>
                      <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                        ${selectedBanca === 'todas' ? 'bg-brand-primary border-brand-primary' : 'border-slate-300'}`}>
                        {selectedBanca === 'todas' && <Check size={10} strokeWidth={3.5} className="text-white" />}
                      </div>
                    </motion.button>
                  )}

                  {/* Institution list */}
                  <div className="space-y-2 mb-4">
                    {pageBancas.length === 0 ? (
                      <div className="text-center py-10 text-slate-400">
                        <Hospital size={28} className="mx-auto mb-2 opacity-30" />
                        <p className="text-xs font-medium">Nenhuma instituição encontrada</p>
                      </div>
                    ) : pageBancas.map(banca => {
                      const isSel = selectedBanca === banca.id;
                      return (
                        <motion.button
                          key={banca.id}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedBanca(isSel ? null : banca.id)}
                          className={`w-full flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all text-left
                            ${isSel ? 'bg-blue-50 border-brand-primary shadow-md shadow-blue-500/10' : 'bg-white border-transparent shadow-sm'}`}
                        >
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors
                            ${isSel ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                            <Hospital size={16} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-[11px] font-black uppercase tracking-wide leading-none mb-0.5 ${isSel ? 'text-brand-primary' : 'text-slate-900'}`}>
                              {banca.short}
                            </p>
                            <p className="text-[11px] text-slate-500 font-medium truncate">{banca.name}</p>
                          </div>
                          <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                            ${isSel ? 'bg-brand-primary border-brand-primary' : 'border-slate-300'}`}>
                            {isSel && <Check size={10} strokeWidth={3.5} className="text-white" />}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-between py-2">
                      <button
                        onClick={() => setBancaPage(p => Math.max(0, p - 1))}
                        disabled={safePage === 0}
                        className="p-2 rounded-xl text-slate-400 hover:text-slate-700 disabled:opacity-30 hover:bg-white transition-all"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Página {safePage + 1} de {totalPages}
                      </span>
                      <button
                        onClick={() => setBancaPage(p => Math.min(totalPages - 1, p + 1))}
                        disabled={safePage >= totalPages - 1}
                        className="p-2 rounded-xl text-slate-400 hover:text-slate-700 disabled:opacity-30 hover:bg-white transition-all"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="px-4 py-4 bg-brand-bg border-t border-slate-100 shrink-0">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => { if (selectedBanca) selectTrack('residencia'); }}
                    disabled={!selectedBanca}
                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2
                      ${selectedBanca
                        ? 'bg-brand-primary text-white shadow-xl shadow-blue-500/25'
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                  >
                    {selectedBanca
                      ? <><span>Continuar</span><ChevronRight size={18} strokeWidth={3} /></>
                      : <span>Selecione uma banca para continuar</span>
                    }
                  </motion.button>
                </div>
              </motion.div>
            );
          })()}

          {/* Thinking Overlay */}
          {/* Moved outside AnimatePresence */}

          {/* BENEFITS MODAL */}
          <AnimatePresence>
            {showBenefits && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
              >
                <motion.div 
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  className="bg-white w-full max-w-lg rounded-[3rem] p-10 shadow-2xl relative overflow-hidden"
                >
                  <button 
                    onClick={() => setShowBenefits(false)}
                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <XCircle size={24} />
                  </button>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Vantagens MedQuest</h3>
                  <div className="space-y-6">
                    {[
                      { icon: Zap, title: 'IA Mentoria', desc: 'Respostas detalhadas e planos de estudo personalizados.' },
                      { icon: Activity, title: 'Simulados Reais', desc: 'Provas íntegras das principais bancas (USP, Einstein).' },
                      { icon: Trophy, title: 'Gamificação Social', desc: 'Estude com amigos, suba nas ligas e ganhe prêmios.' }
                    ].map((benefit, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
                          <benefit.icon size={24} fill={i === 0 ? "currentColor" : i === 2 ? "currentColor" : "none"} />
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 uppercase tracking-tighter">{benefit.title}</h4>
                          <p className="text-sm text-slate-500 font-medium">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setShowBenefits(false)}
                    className="w-full mt-10 py-5 bg-brand-primary text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 uppercase tracking-widest hover:scale-105 transition-all text-center flex items-center justify-center"
                  >
                    Entendi!
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>



          {/* HOME VIEW */}
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col gap-5 pb-24"
            >
              {/* Hero Card */}
              <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-xl mt-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 rounded-full -mr-24 -mt-24 pointer-events-none" />
                <div className="relative z-10">
                  {/* Greeting row: mascot + text side by side */}
                  <div className="flex items-center gap-3 mb-4">
                    <button
                      onClick={() => setShowAvatarPicker(true)}
                      className="relative shrink-0 -ml-1"
                    >
                      {(() => {
                        const av = MEDICAL_AVATARS.find(a => a.id === userAvatar) ?? MEDICAL_AVATARS[0];
                        return (
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-md select-none"
                            style={{ background: av.bg, boxShadow: `0 0 0 3px ${av.ring}33, 0 4px 16px ${av.ring}22` }}
                          >
                            {av.emoji}
                          </div>
                        );
                      })()}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full border border-slate-200 flex items-center justify-center shadow-sm">
                        <Edit2 size={10} className="text-slate-400" />
                      </div>
                    </button>
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                      {(() => { const h = new Date().getHours(); return h < 12 ? 'Bom dia,' : h < 18 ? 'Boa tarde,' : 'Boa noite,'; })()}{' '}<br className="hidden sm:inline" />
                      <span className="text-brand-primary">{user.name.split(' ')[0] === 'Dr.' ? user.name.split(' ').slice(0,2).join(' ') : user.name.split(' ')[0] || 'Estudante'}</span>!
                    </h2>
                  </div>
                  {/* Stats badges */}
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-200">
                      <Flame size={13} className="text-orange-500 fill-orange-500" />
                      <span className="text-xs font-black text-orange-700">{user.streak} dias</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-red-50 px-3 py-1.5 rounded-xl border border-red-200">
                      <Heart size={13} className="text-red-500 fill-red-500" />
                      <span className="text-xs font-black text-red-700">{user.hearts} vidas</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200">
                      <Zap size={13} className="text-brand-primary fill-brand-primary" />
                      <span className="text-xs font-black text-brand-primary">{user.xp.toLocaleString()} XP</span>
                    </div>
                  </div>
                  {/* Daily goal bar */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Meta de hoje</span>
                    <span className="text-[10px] font-black text-slate-700">{user.dailyGoalDone}/{user.dailyGoalTotal}</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(user.dailyGoalDone / user.dailyGoalTotal) * 100}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-brand-primary rounded-full"
                    />
                  </div>
                </div>
              </div>

              {selectedTrack === 'estudante' ? (
                <div className="flex flex-col gap-5">
                  {/* AI Insight Pill */}
                  <div className="flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="flex items-center gap-2 px-3 py-2 shrink-0">
                      <div className="bg-brand-primary/10 p-1.5 rounded-lg text-brand-primary">
                        <Activity size={15} />
                      </div>
                      <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest hidden sm:block">Dr. Will IA</span>
                    </div>
                    <div
                      onClick={() => setView('revision')}
                      className="flex-1 bg-slate-50 rounded-xl px-3 py-2 flex items-center justify-between group cursor-pointer hover:bg-slate-100 transition-colors min-w-0"
                    >
                      <span className="text-xs font-bold text-slate-600 truncate">Revisar Cardiologia Avançada</span>
                      <ChevronRight size={13} className="text-slate-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  </div>

                  {/* Roteiro Semanal */}
                  {(() => {
                    // Plano de 7 dias — sequência fixa, começa no dia que o usuário iniciou
                    const PLAN: { emoji: string; shortLabel: string; label: string; subject: Subject; cycle: Cycle; tip: string; color: string }[] = [
                      { emoji: '🏥', shortLabel: 'Clínica M.',   label: 'Clínica Médica',       subject: 'Clínica Médica',           cycle: 'Ciclo Clínico', tip: 'A matéria com maior peso nas provas de residência do Brasil.',        color: '#2563EB' },
                      { emoji: '🔬', shortLabel: 'Clínica C.',   label: 'Clínica Cirúrgica',    subject: 'Clínica Cirúrgica',        cycle: 'Ciclo Clínico', tip: 'Urgências, trauma e procedimentos cirúrgicos essenciais.',            color: '#DC2626' },
                      { emoji: '🩺', shortLabel: 'Família',      label: 'Família & SUS',        subject: 'Medicina de Família/SUS',  cycle: 'Ciclo Clínico', tip: 'Atenção primária e políticas de saúde pública. Muito cobrado!',      color: '#059669' },
                      { emoji: '👶', shortLabel: 'Pediatria',    label: 'Pediatria',            subject: 'Pediatria',                cycle: 'Ciclo Clínico', tip: 'Do neonato à adolescência. Alta frequência nas principais bancas.',  color: '#7C3AED' },
                      { emoji: '🤰', shortLabel: 'Gineco',       label: 'Gineco & Obstetrícia', subject: 'Ginecologia & Obstetrícia',cycle: 'Ciclo Clínico', tip: 'Pré-natal, parto, puerpério e ginecologia geral.',                  color: '#DB2777' },
                      { emoji: '📖', shortLabel: 'Anatomia',     label: 'Base Anatômica',       subject: 'Anatomia',                 cycle: 'Ciclo Básico',  tip: 'Estruturas fundamentais que sustentam todas as especialidades.',     color: '#6366F1' },
                      { emoji: '💊', shortLabel: 'Farmaco',      label: 'Farmacologia',         subject: 'Farmacologia',             cycle: 'Ciclo Básico',  tip: 'Os fármacos mais cobrados. Consolide a semana com revisão aplicada.',color: '#EA580C' },
                    ];

                    // Compute plan position based on start date
                    const startDate = new Date(user.planStartDate + 'T00:00:00');
                    const nowDate   = new Date(new Date().toISOString().slice(0, 10) + 'T00:00:00');
                    const planDayIndex = Math.min(6, Math.max(0, Math.round((nowDate.getTime() - startDate.getTime()) / 86400000)));
                    const todayPlan = PLAN[planDayIndex];

                    // Build the 7 actual dates
                    const stripDays = Array.from({ length: 7 }, (_, i) => {
                      const d = new Date(startDate);
                      d.setDate(d.getDate() + i);
                      return d;
                    });

                    return (
                      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-lg overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 pt-4 pb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: todayPlan.color + '18' }}>
                              <CalendarDays size={13} style={{ color: todayPlan.color }} />
                            </div>
                            <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Roteiro da Semana</span>
                          </div>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Dia {planDayIndex + 1} de 7
                          </span>
                        </div>

                        {/* 7-day strip */}
                        <div className="flex px-4 pb-4 gap-1.5">
                          {PLAN.map((p, i) => {
                            const isPast  = i < planDayIndex;
                            const isToday = i === planDayIndex;
                            const date    = stripDays[i];
                            const dayNum  = date.getDate();
                            const month   = date.getMonth() + 1;
                            return (
                              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                <span className="text-[7px] font-black text-slate-400">{dayNum}/{month}</span>
                                <motion.div
                                  animate={isToday ? { scale: [1, 1.09, 1] } : {}}
                                  transition={{ repeat: Infinity, duration: 2.5 }}
                                  className="w-7 h-7 rounded-full flex items-center justify-center text-[12px]"
                                  style={
                                    isToday ? { background: p.color, boxShadow: `0 4px 12px ${p.color}55` }
                                    : isPast ? { background: '#DCFCE7' }
                                    : { background: '#F1F5F9' }
                                  }
                                >
                                  {isPast
                                    ? <span className="text-green-600 font-black text-[10px]">✓</span>
                                    : <span>{p.emoji}</span>}
                                </motion.div>
                                <span
                                  className="text-[7px] font-bold truncate w-full text-center leading-tight"
                                  style={{ color: isToday ? p.color : isPast ? '#16A34A' : '#94A3B8' }}
                                >
                                  {p.shortLabel}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-slate-100" />

                        {/* Today detail */}
                        <div className="flex items-center gap-3 p-4">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                            style={{ background: todayPlan.color + '15' }}
                          >
                            {todayPlan.emoji}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: todayPlan.color }}>Hoje</span>
                              <span className="text-[9px] text-slate-300 font-bold">·</span>
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">{todayPlan.cycle}</span>
                            </div>
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none mb-1">{todayPlan.label}</h3>
                            <p className="text-[10px] text-slate-500 font-medium leading-snug">{todayPlan.tip}</p>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedCycle(todayPlan.cycle);
                              setSelectedSubject(todayPlan.subject);
                              setSelectedSubSubject(null);
                              startQuiz(false, todayPlan.subject, null);
                            }}
                            className="shrink-0 px-4 py-2.5 rounded-xl text-white font-black text-xs shadow-lg hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
                            style={{ background: todayPlan.color, boxShadow: `0 4px 16px ${todayPlan.color}44` }}
                          >
                            Iniciar
                          </button>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Cycle Toggle */}
                  <div className="flex bg-slate-100 p-1 rounded-2xl w-fit mx-auto shadow-inner">
                    {(['Ciclo Básico', 'Ciclo Clínico'] as Cycle[]).map((cycle) => (
                      <button
                        key={cycle}
                        onClick={() => {
                          setSelectedCycle(cycle);
                          const firstSubj = Object.keys(HIERARCHY[cycle])[0] as Subject;
                          setSelectedSubject(firstSubj);
                          setSelectedSubSubject(null);
                        }}
                        className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${
                          selectedCycle === cycle ? 'bg-white text-brand-primary shadow-md' : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        {cycle}
                      </button>
                    ))}
                  </div>

                  {/* Subject Grid */}
                  <div className="py-10 px-6 flex flex-col items-center bg-white rounded-[3rem] border border-slate-200/80 shadow-xl overflow-visible">
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4">
                      {(Object.keys(HIERARCHY[selectedCycle]) as Subject[]).map((subj, idx) => (
                        <GamePathNode
                          key={`path-${subj}-${idx}`}
                          subject={subj}
                          progress={Number(user.mastery[subj] || 0)}
                          index={idx}
                          isSelected={selectedSubject === subj}
                          onClick={() => { setSelectedSubject(subj); setSelectedSubSubject(null); startQuiz(false, subj, null); }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Sub-subjects */}
                  {HIERARCHY[selectedCycle][selectedSubject] && HIERARCHY[selectedCycle][selectedSubject]!.length > 0 && (
                    <div className="space-y-8 bg-white p-8 rounded-[3rem] border border-slate-200/80 shadow-xl">
                      <div className="flex items-center gap-3 px-4">
                        <div className="h-px flex-1 bg-slate-200" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] whitespace-nowrap">Selecione o Sub-foco</span>
                        <div className="h-px flex-1 bg-slate-200" />
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 w-full">
                        {HIERARCHY[selectedCycle][selectedSubject]!.map((sub, idx) => (
                          <GamePathNode
                            key={`sub-${sub}-${idx}`}
                            subject={sub}
                            progress={0}
                            index={idx}
                            isSelected={selectedSubSubject === sub}
                            onClick={() => { setSelectedSubSubject(sub); startQuiz(false, selectedSubject, sub); }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Daily Missions */}
                  {(() => {
                    const missions = [
                      { id: 'q10',    icon: '🎯', label: 'Acerte 10 questões hoje',         done: user.dailyGoalDone, total: 10,  xp: 50,  color: '#2563EB', bg: '#EFF6FF' },
                      { id: 'streak', icon: '🔥', label: 'Mantenha seu streak ativo',        done: user.streak > 0 ? 1 : 0, total: 1, xp: 30, color: '#EA580C', bg: '#FFF7ED' },
                      { id: 'rev',    icon: '🧠', label: 'Revise 1 tópico com o Dr. Will',   done: 0, total: 1,  xp: 40,  color: '#7C3AED', bg: '#F5F3FF' },
                    ];
                    const allDone = missions.every(m => m.done >= m.total);
                    return (
                      <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-amber-50 rounded-xl flex items-center justify-center">
                              <Target size={16} className="text-amber-500" />
                            </div>
                            <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Missões de Hoje</span>
                          </div>
                          {allDone ? (
                            <span className="text-[10px] font-black text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-200 uppercase tracking-widest">Completas!</span>
                          ) : (
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{missions.filter(m => m.done >= m.total).length}/{missions.length} feitas</span>
                          )}
                        </div>
                        <div className="flex flex-col gap-3">
                          {missions.map((m, i) => {
                            const pct = Math.min(1, m.done / m.total);
                            const completed = pct >= 1;
                            return (
                              <motion.div
                                key={m.id}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-center gap-3"
                              >
                                <div
                                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shrink-0 transition-transform"
                                  style={{ background: m.bg, opacity: completed ? 1 : 0.8 }}
                                >
                                  {completed ? '✅' : m.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className={`text-xs font-bold leading-tight ${completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>{m.label}</span>
                                    <span className="text-[9px] font-black ml-2 shrink-0" style={{ color: m.color }}>+{m.xp} XP</span>
                                  </div>
                                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${pct * 100}%` }}
                                      transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                                      className="h-full rounded-full"
                                      style={{ background: completed ? '#22C55E' : m.color }}
                                    />
                                  </div>
                                  {m.total > 1 && (
                                    <span className="text-[9px] text-slate-400 font-bold mt-0.5 block">{m.done}/{m.total}</span>
                                  )}
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Quick links: Liga + Amigos */}
                  <div className="grid grid-cols-2 gap-4">
                    {(() => {
                      const userLeague = getUserLeague(user.xp);
                      const cfg = LEAGUE_CONFIG[userLeague];
                      const peers  = LEAGUE_DATA[userLeague].filter(p => !p.currentUser);
                      const sorted = [...peers, { name: user.name, xp: user.xp, currentUser: true }].sort((a, b) => b.xp - a.xp);
                      const rank   = sorted.findIndex(p => p.currentUser) + 1;
                      const rankLabel = user.xp === 0 ? 'Começando' : `${rank}º lugar`;
                      return (
                        <button
                          onClick={() => { setActiveLeague(userLeague); setView('ranking'); }}
                          className={`bg-gradient-to-br ${cfg.gradFrom} ${cfg.gradVia} ${cfg.gradTo} p-5 rounded-[2rem] flex flex-col gap-3 text-white shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-left`}
                        >
                          <Trophy size={22} fill="currentColor" style={{ color: cfg.trophyColor }} />
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/60 leading-none mb-1">{cfg.label}</p>
                            <p className="text-base font-black leading-none">{rankLabel}</p>
                          </div>
                        </button>
                      );
                    })()}
                    <button
                      onClick={() => setView('ranking')}
                      className="bg-white border border-slate-200 p-5 rounded-[2rem] flex flex-col gap-3 shadow-lg hover:bg-slate-50 hover:scale-[1.02] active:scale-95 transition-all text-left"
                    >
                      <UserPlus size={22} className="text-brand-primary" />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Social</p>
                        <p className="text-base font-black text-slate-900 leading-none">Amigos</p>
                      </div>
                    </button>
                  </div>
                </div>
              ) : (() => {
                const banca     = BANCAS.find(b => b.id === selectedBanca);
                const bancaShort = banca?.short ?? 'Residência';
                const bancaName  = banca?.name  ?? 'Prova de Residência Médica';
                const bancaUF    = banca?.uf ?? '';
                const attemptsVals   = Object.values(user.subjectAttempts) as number[];
                const masteryVals    = Object.values(user.mastery) as number[];
                const totalAttempts  = attemptsVals.reduce((a, b) => a + b, 0);
                const avgMastery     = masteryVals.length > 0
                  ? Math.round(masteryVals.reduce((a, b) => a + b, 0) / masteryVals.length)
                  : 0;
                return (
                  <div className="flex flex-col gap-4 pb-6">

                    {/* Banca Header — dark premium */}
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl" style={{ background: '#0D1628' }}>
                      {/* blue radial glow top-right */}
                      <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                      {/* faint bottom-left accent */}
                      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

                      <div className="relative z-10 p-6">
                        {/* Top row */}
                        <div className="flex items-start justify-between mb-5">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-blue-500/30"
                              style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1E3A8A 100%)', boxShadow: '0 4px 20px rgba(37,99,235,0.45)' }}
                            >
                              <span className="text-white font-black text-[11px] tracking-tight leading-none select-none">
                                {bancaShort.slice(0, 3).toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <p className="text-[9px] font-black uppercase tracking-[0.25em] leading-none mb-1" style={{ color: '#60A5FA' }}>Banca-alvo</p>
                              <h3 className="text-xl font-black text-white tracking-tight leading-none">
                                {bancaShort}{bancaUF ? <span className="font-bold text-base" style={{ color: 'rgba(255,255,255,0.35)' }}> · {bancaUF}</span> : ''}
                              </h3>
                            </div>
                          </div>
                          <button
                            onClick={() => setView('residencia-onboarding')}
                            className="flex items-center gap-1.5 transition-colors text-[10px] font-black uppercase tracking-widest pt-1"
                            style={{ color: 'rgba(255,255,255,0.35)' }}
                          >
                            <RefreshCcw size={11} />
                            Trocar
                          </button>
                        </div>

                        <p className="text-xs font-medium mb-5 leading-snug" style={{ color: 'rgba(255,255,255,0.35)' }}>{bancaName}</p>

                        {/* Stats strip */}
                        <div className="grid grid-cols-3 gap-2 mb-5">
                          {[
                            { label: 'Simulados', value: '0',                      icon: BookOpen,   color: '#60A5FA' },
                            { label: 'Aproveit.',  value: `${avgMastery}%`,         icon: Target,     color: '#34D399' },
                            { label: 'Questões',   value: String(totalAttempts),    icon: CheckCircle2, color: '#A78BFA' },
                          ].map(s => (
                            <div key={s.label} className="rounded-2xl px-3 py-3 text-center border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.07)' }}>
                              <s.icon size={14} className="mx-auto mb-1.5" style={{ color: s.color }} />
                              <p className="text-base font-black text-white leading-none">{s.value}</p>
                              <p className="text-[9px] font-bold uppercase tracking-widest mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>{s.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* Main CTA */}
                        <motion.button
                          whileTap={{ scale: 0.97 }}
                          onClick={startQuiz}
                          className="group w-full relative overflow-hidden rounded-2xl py-4 flex items-center justify-between px-5"
                          style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)', boxShadow: '0 8px 32px rgba(37,99,235,0.40)' }}
                        >
                          <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '200%' }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
                          />
                          <div className="flex items-center gap-3 relative z-10">
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                              <Zap size={18} fill="currentColor" className="text-white" />
                            </div>
                            <div className="text-left">
                              <p className="text-[9px] font-black uppercase tracking-[0.2em] leading-none mb-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>Simulado Oficial</p>
                              <p className="text-sm font-black text-white leading-none">{bancaShort} — 10 Questões</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 rounded-xl px-3 py-1.5 relative z-10" style={{ background: 'rgba(255,255,255,0.15)' }}>
                            <span className="text-[11px] font-black text-white uppercase tracking-widest">Iniciar</span>
                            <ChevronRight size={14} className="text-white" />
                          </div>
                        </motion.button>
                      </div>
                    </div>

                    {/* ── ESCOLHA DE MATÉRIA ── */}
                    <div className="flex flex-col gap-3">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">Estudar por Matéria</p>

                      {/* Cycle Toggle */}
                      <div className="flex bg-slate-100 p-1 rounded-2xl w-fit mx-auto shadow-inner">
                        {(['Ciclo Básico', 'Ciclo Clínico'] as Cycle[]).map((cycle) => (
                          <button
                            key={cycle}
                            onClick={() => {
                              setSelectedCycle(cycle);
                              const firstSubj = Object.keys(HIERARCHY[cycle])[0] as Subject;
                              setSelectedSubject(firstSubj);
                              setSelectedSubSubject(null);
                            }}
                            className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all ${
                              selectedCycle === cycle ? 'bg-white text-brand-primary shadow-md' : 'text-slate-400 hover:text-slate-600'
                            }`}
                          >
                            {cycle}
                          </button>
                        ))}
                      </div>

                      {/* Subject Grid */}
                      <div className="py-8 px-5 flex flex-col items-center bg-white rounded-[2.5rem] border border-slate-200/80 shadow-xl overflow-visible">
                        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                          {(Object.keys(HIERARCHY[selectedCycle as Cycle]) as Subject[]).map((subj, idx) => (
                            <GamePathNode
                              key={`res-path-${subj}-${idx}`}
                              subject={subj}
                              progress={Number(user.mastery[subj] || 0)}
                              index={idx}
                              isSelected={selectedSubject === subj}
                              onClick={() => { setSelectedSubject(subj); setSelectedSubSubject(null); startQuiz(false, subj, null); }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Modos de estudo */}
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 px-1">Modos de Estudo</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { icon: BookOpen, label: 'Questões Avulsas', desc: 'Pratique no seu ritmo', color: '#2563EB', bg: '#EFF6FF', action: startQuiz },
                          { icon: RotateCcw, label: 'Revisão de Erros', desc: `${user.missedQuestionIds.length} questões pendentes`, color: '#DC2626', bg: '#FEF2F2', action: () => startQuiz(true) },
                          { icon: TrendingUp, label: 'Pontos Fracos', desc: 'Análise Dr. Will IA', color: '#7C3AED', bg: '#F5F3FF', action: () => setView('revision') },
                          { icon: BarChart2, label: 'Meu Desempenho', desc: 'Veja sua evolução', color: '#059669', bg: '#ECFDF5', action: () => setView('progress') },
                        ].map(mode => (
                          <button
                            key={mode.label}
                            onClick={mode.action}
                            className="bg-white rounded-[1.75rem] p-4 text-left border border-slate-100 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                          >
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: mode.bg }}>
                              <mode.icon size={18} style={{ color: mode.color }} />
                            </div>
                            <p className="text-xs font-black text-slate-900 uppercase tracking-tight leading-tight mb-0.5">{mode.label}</p>
                            <p className="text-[10px] text-slate-400 font-medium leading-tight">{mode.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* ── ROTEIRO SEMANAL ── */}
                    {(() => {
                      const RES_PLAN: { emoji: string; shortLabel: string; label: string; subject: Subject; tip: string; color: string }[] = [
                        { emoji: '🏥', shortLabel: 'Clínica M.',  label: 'Clínica Médica',       subject: 'Clínica Médica',           tip: 'O eixo central da residência. Maior peso em todas as bancas.',         color: '#2563EB' },
                        { emoji: '🔬', shortLabel: 'Cirurgia',   label: 'Clínica Cirúrgica',    subject: 'Clínica Cirúrgica',        tip: 'Urgências, trauma e semiologia cirúrgica. Alta cobrança.',             color: '#DC2626' },
                        { emoji: '👶', shortLabel: 'Pediatria',  label: 'Pediatria',            subject: 'Pediatria',                tip: 'Do RN ao adolescente. Muito frequente nas provas de residência.',       color: '#7C3AED' },
                        { emoji: '🤰', shortLabel: 'Gineco',     label: 'Gineco & Obstetrícia', subject: 'Ginecologia & Obstetrícia',tip: 'Pré-natal, parto, puerpério e ginecologia geral.',                     color: '#DB2777' },
                        { emoji: '🩺', shortLabel: 'Família',    label: 'Medicina de Família',  subject: 'Medicina de Família/SUS',  tip: 'SUS, atenção básica e políticas de saúde. Muito cobrado!',             color: '#059669' },
                        { emoji: '❤️', shortLabel: 'Cardio',     label: 'Cardiologia',          subject: 'Cardiologia',              tip: 'Síndromes coronarianas, IC e arritmias. Alto peso nas bancas.',         color: '#EF4444' },
                        { emoji: '🧠', shortLabel: 'Neuro',      label: 'Neurologia',           subject: 'Neurologia',               tip: 'AVC, epilepsia e emergências neurológicas.',                           color: '#6366F1' },
                      ];
                      const startDate    = new Date(user.planStartDate + 'T00:00:00');
                      const nowDate      = new Date(new Date().toISOString().slice(0, 10) + 'T00:00:00');
                      const planDayIndex = Math.min(6, Math.max(0, Math.round((nowDate.getTime() - startDate.getTime()) / 86400000)));
                      const todayPlan    = RES_PLAN[planDayIndex];
                      const stripDays    = Array.from({ length: 7 }, (_, i) => { const d = new Date(startDate); d.setDate(d.getDate() + i); return d; });
                      return (
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-lg overflow-hidden">
                          <div className="flex items-center justify-between px-5 pt-4 pb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: todayPlan.color + '18' }}>
                                <CalendarDays size={13} style={{ color: todayPlan.color }} />
                              </div>
                              <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Roteiro da Semana</span>
                            </div>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Dia {planDayIndex + 1} de 7</span>
                          </div>
                          <div className="flex px-4 pb-4 gap-1.5">
                            {RES_PLAN.map((p, i) => {
                              const isPast  = i < planDayIndex;
                              const isToday = i === planDayIndex;
                              const date    = stripDays[i];
                              return (
                                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                  <span className="text-[7px] font-black text-slate-400">{date.getDate()}/{date.getMonth()+1}</span>
                                  <motion.div
                                    animate={isToday ? { scale: [1, 1.09, 1] } : {}}
                                    transition={{ repeat: Infinity, duration: 2.5 }}
                                    className="w-7 h-7 rounded-full flex items-center justify-center text-[12px]"
                                    style={isToday ? { background: p.color, boxShadow: `0 4px 12px ${p.color}55` } : isPast ? { background: '#DCFCE7' } : { background: '#F1F5F9' }}
                                  >
                                    {isPast ? <span className="text-green-600 font-black text-[10px]">✓</span> : <span>{p.emoji}</span>}
                                  </motion.div>
                                  <span className="text-[7px] font-bold truncate w-full text-center leading-tight" style={{ color: isToday ? p.color : isPast ? '#16A34A' : '#94A3B8' }}>
                                    {p.shortLabel}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                          <div className="h-px bg-slate-100" />
                          <div className="flex items-center gap-3 p-4">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0" style={{ background: todayPlan.color + '15' }}>
                              {todayPlan.emoji}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: todayPlan.color }}>Hoje · Ciclo Clínico</span>
                              <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none mb-1 mt-0.5">{todayPlan.label}</h3>
                              <p className="text-[10px] text-slate-500 font-medium leading-snug">{todayPlan.tip}</p>
                            </div>
                            <button
                              onClick={() => { setSelectedCycle('Ciclo Clínico'); setSelectedSubject(todayPlan.subject); startQuiz(false, todayPlan.subject, null); }}
                              className="shrink-0 px-4 py-2.5 rounded-xl text-white font-black text-xs shadow-lg hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
                              style={{ background: todayPlan.color, boxShadow: `0 4px 16px ${todayPlan.color}44` }}
                            >
                              Iniciar
                            </button>
                          </div>
                        </div>
                      );
                    })()}

                    {/* ── MAPA DE DOMÍNIO ── */}
                    {(() => {
                      const ALL_SPECIALTIES: { subj: Subject; emoji: string; short: string }[] = [
                        { subj: 'Clínica Médica',            emoji: '🏥', short: 'Clínica Médica' },
                        { subj: 'Clínica Cirúrgica',         emoji: '✂️', short: 'Clínica Cirúrg.' },
                        { subj: 'Cardiologia',               emoji: '❤️', short: 'Cardiologia' },
                        { subj: 'Neurologia',                emoji: '🧠', short: 'Neurologia' },
                        { subj: 'Pediatria',                 emoji: '👶', short: 'Pediatria' },
                        { subj: 'Ginecologia & Obstetrícia', emoji: '🤰', short: 'Gineco & Obste.' },
                        { subj: 'Medicina de Família/SUS',   emoji: '🩺', short: 'Família / SUS' },
                        { subj: 'Pneumologia',               emoji: '💨', short: 'Pneumologia' },
                        { subj: 'Gastroenterologia',         emoji: '🫁', short: 'Gastroentero.' },
                        { subj: 'Endocrinologia',            emoji: '💊', short: 'Endocrinologia' },
                        { subj: 'Infectologia',              emoji: '🦠', short: 'Infectologia' },
                        { subj: 'Psiquiatria',               emoji: '💬', short: 'Psiquiatria' },
                        { subj: 'Nefrologia',                emoji: '🫘', short: 'Nefrologia' },
                        { subj: 'Reumatologia',              emoji: '🦴', short: 'Reumatologia' },
                        { subj: 'Hematologia',               emoji: '🩸', short: 'Hematologia' },
                        { subj: 'Dermatologia',              emoji: '🧴', short: 'Dermatologia' },
                        { subj: 'Oftalmologia',              emoji: '👁️', short: 'Oftalmologia' },
                        { subj: 'Otorrinolaringologia',      emoji: '👂', short: 'Otorrino' },
                        { subj: 'Cirurgia Geral',            emoji: '🏨', short: 'Cirurgia Geral' },
                      ];
                      const VISIBLE_COUNT = 8;
                      const displayed = showAllSpecialties ? ALL_SPECIALTIES : ALL_SPECIALTIES.slice(0, VISIBLE_COUNT);
                      const hidden = ALL_SPECIALTIES.length - VISIBLE_COUNT;
                      return (
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-lg p-5">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 bg-blue-50 rounded-xl flex items-center justify-center">
                                <BarChart3 size={14} className="text-brand-primary" />
                              </div>
                              <div>
                                <p className="text-[11px] font-black text-slate-800 uppercase tracking-widest leading-none">Mapa de Domínio</p>
                                <p className="text-[9px] text-slate-400 font-medium mt-0.5">Domínio por especialidade</p>
                              </div>
                            </div>
                            <span className="text-[9px] font-black text-brand-primary bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-widest border border-blue-100">{bancaShort}</span>
                          </div>

                          <div className="flex flex-col gap-3">
                            {displayed.map(({ subj, emoji, short }) => {
                              const mastery  = user.mastery[subj] || 0;
                              const attempts = user.subjectAttempts[subj] || 0;
                              const barColor =
                                attempts === 0 ? '#CBD5E1'
                                : mastery >= 70 ? '#22C55E'
                                : mastery >= 40 ? '#F59E0B'
                                : '#EF4444';
                              const statusLabel =
                                attempts === 0 ? 'Não iniciado'
                                : mastery >= 70 ? 'Dominado ✓'
                                : mastery >= 40 ? 'Em progresso'
                                : 'Atenção';
                              const statusColor =
                                attempts === 0 ? '#94A3B8'
                                : mastery >= 70 ? '#16A34A'
                                : mastery >= 40 ? '#D97706'
                                : '#DC2626';
                              return (
                                <div key={subj} className="flex items-center gap-3">
                                  <span className="text-base w-5 text-center shrink-0 leading-none">{emoji}</span>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="text-[10px] font-black text-slate-700 truncate">{short}</span>
                                      <span className="text-[8px] font-black ml-2 shrink-0 uppercase tracking-wide" style={{ color: statusColor }}>{statusLabel}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${mastery}%` }}
                                        transition={{ duration: 0.7, delay: 0.05 }}
                                        className="h-full rounded-full"
                                        style={{ background: barColor }}
                                      />
                                    </div>
                                  </div>
                                  <span className="text-[9px] font-black text-slate-400 w-7 text-right shrink-0">{mastery}%</span>
                                </div>
                              );
                            })}
                          </div>

                          {/* Expand / Collapse */}
                          <motion.button
                            onClick={() => setShowAllSpecialties((v: boolean) => !v)}
                            whileTap={{ scale: 0.97 }}
                            className="w-full mt-4 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
                          >
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                              {showAllSpecialties ? 'Ver menos' : `Ver mais ${hidden} matérias`}
                            </span>
                            <motion.div animate={{ rotate: showAllSpecialties ? 180 : 0 }} transition={{ duration: 0.25 }}>
                              <ChevronDown size={14} className="text-slate-400" />
                            </motion.div>
                          </motion.button>

                          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-100">
                            {[
                              { color: '#22C55E', label: 'Dominado (70%+)' },
                              { color: '#F59E0B', label: 'Em progresso' },
                              { color: '#EF4444', label: 'Atenção' },
                              { color: '#CBD5E1', label: 'Não iniciado' },
                            ].map(leg => (
                              <div key={leg.label} className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: leg.color }} />
                                <span className="text-[8px] font-bold text-slate-400 leading-tight">{leg.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}

                    {/* ── CONQUISTAS PREMIUM ── */}
                    {(() => {
                      const achievements = [
                        { id: 'first',   emoji: '🎯', title: 'Primeiro Passo',  desc: 'Responda sua 1ª questão',     done: totalAttempts >= 1 },
                        { id: 'streak5', emoji: '🔥', title: 'Em Chamas',        desc: '5 dias seguidos de estudo',   done: user.streak >= 5 },
                        { id: 'q50',     emoji: '⚡', title: '50 Questões',       desc: 'Responda 50 questões',        done: totalAttempts >= 50 },
                        { id: 'cardio',  emoji: '❤️', title: 'Mestre Cardio',     desc: '70%+ em Cardiologia',         done: (user.mastery['Cardiologia'] || 0) >= 70 },
                        { id: 'q100',    emoji: '💎', title: '100 Questões',      desc: 'Responda 100 questões',       done: totalAttempts >= 100 },
                        { id: 'zeroed',  emoji: '🏆', title: 'Sem Pendências',    desc: 'Zere a fila de revisão',      done: user.missedQuestionIds.length === 0 && totalAttempts > 0 },
                      ];
                      const unlocked = achievements.filter(a => a.done).length;
                      return (
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-lg p-5">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 bg-amber-50 rounded-xl flex items-center justify-center">
                                <Award size={14} className="text-amber-500" />
                              </div>
                              <div>
                                <p className="text-[11px] font-black text-slate-800 uppercase tracking-widest leading-none">Conquistas Premium</p>
                                <p className="text-[9px] text-slate-400 font-medium mt-0.5">Exclusivo para assinantes</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-base font-black text-slate-900 leading-none">{unlocked}/{achievements.length}</p>
                              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">desbloqueadas</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2.5">
                            {achievements.map(a => (
                              <div
                                key={a.id}
                                className="flex flex-col items-center gap-1.5 p-3 rounded-2xl border transition-all"
                                style={{ background: a.done ? '#F0FDF4' : '#F8FAFC', borderColor: a.done ? '#86EFAC' : '#E2E8F0' }}
                              >
                                <span className="text-2xl leading-none" style={{ filter: a.done ? 'none' : 'grayscale(1) opacity(0.35)' }}>{a.emoji}</span>
                                <p className="text-[9px] font-black text-slate-700 text-center leading-tight uppercase tracking-tight">{a.title}</p>
                                <p className="text-[8px] text-slate-400 font-medium text-center leading-tight">{a.desc}</p>
                                {a.done
                                  ? <span className="text-[8px] font-black text-green-600 uppercase tracking-widest bg-green-50 px-1.5 py-0.5 rounded-full">Desbloqueada</span>
                                  : <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Bloqueada</span>
                                }
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}

                    {/* ── RELATÓRIO DA SEMANA ── */}
                    <div className="relative rounded-[2rem] overflow-hidden" style={{ background: '#0D1628' }}>
                      <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.16) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                      <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
                      <div className="relative z-10 p-5">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: 'rgba(37,99,235,0.25)' }}>
                              <TrendingUp size={14} style={{ color: '#60A5FA' }} />
                            </div>
                            <div>
                              <p className="text-[11px] font-black uppercase tracking-widest leading-none" style={{ color: '#93C5FD' }}>Relatório da Semana</p>
                              <p className="text-[9px] font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>Seu resumo de evolução</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full" style={{ background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.3)' }}>
                            <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: '#60A5FA' }}>Premium</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2.5">
                          {[
                            { label: 'Questões respondidas', value: String(totalAttempts), icon: '📝', color: '#60A5FA' },
                            { label: 'Aproveitamento geral', value: `${avgMastery}%`,      icon: '🎯', color: '#34D399' },
                            { label: 'XP conquistado',       value: user.xp.toLocaleString(), icon: '⚡', color: '#FBBF24' },
                            { label: 'Sequência atual',      value: `${user.streak} dias`, icon: '🔥', color: '#F87171' },
                          ].map(item => (
                            <div key={item.label} className="rounded-2xl p-3.5 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.07)' }}>
                              <span className="text-xl leading-none">{item.icon}</span>
                              <p className="text-lg font-black leading-none mt-2" style={{ color: item.color }}>{item.value}</p>
                              <p className="text-[9px] font-bold uppercase tracking-wide mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>{item.label}</p>
                            </div>
                          ))}
                        </div>
                        {totalAttempts === 0 && (
                          <div className="mt-4 rounded-2xl p-3 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(255,255,255,0.1)' }}>
                            <p className="text-[10px] font-bold" style={{ color: 'rgba(255,255,255,0.35)' }}>Comece a estudar para ver sua evolução aqui</p>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* QUIZ VIEW */}
          {view === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex flex-col gap-8 pb-32"
            >
              {/* Progress Bar + Timer + Combo */}
              <div className="flex flex-col gap-2 py-4 px-2">
                <div className="w-full flex items-center gap-3">
                  <button
                    onClick={() => setView('home')}
                    className="text-slate-400 hover:text-slate-600 transition-colors bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm shrink-0"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200 p-0.5">
                    <motion.div
                      className="h-full bg-brand-primary rounded-full shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                      animate={{ width: `${(currentQuestionIndex / activeQuestions.length) * 100}%` }}
                    />
                  </div>
                  {/* Timer */}
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-black text-xs border shadow-sm shrink-0 transition-colors ${
                    quizTimer > 480 ? 'bg-red-50 text-red-600 border-red-200' :
                    quizTimer > 300 ? 'bg-amber-50 text-amber-600 border-amber-200' :
                    'bg-white text-slate-900 border-slate-200'
                  }`}>
                    <Clock size={12} />
                    {formatTimer(quizTimer)}
                  </div>
                  <div className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm shrink-0">
                    <span className="text-xs font-black text-slate-900">{currentQuestionIndex + 1}/{activeQuestions.length}</span>
                  </div>
                </div>
                {/* Combo badge */}
                <AnimatePresence>
                  {combo >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -4 }}
                      className="flex justify-center"
                    >
                      <div className={`flex items-center gap-2 px-5 py-1.5 rounded-full font-black text-xs uppercase tracking-widest shadow-lg ${
                        combo >= 5
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-orange-400/30'
                          : 'bg-orange-500/10 text-orange-600 border border-orange-400/25'
                      }`}>
                        <Flame size={13} fill="currentColor" />
                        Combo x{combo}{combo >= 5 ? ' 🔥' : '!'}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Question Card */}
              <div className="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary/20" />
                <div className="flex items-center gap-2 mb-6">
                  {(() => {
                    const iconData = SUBJECT_ICONS[activeQuestions[currentQuestionIndex].subject];
                    const Icon = iconData?.icon;
                    return (
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden shrink-0 ${iconData?.color || 'bg-slate-200'}`}>
                        {iconData?.image ? (
                          <img src={iconData.image} alt="" className="w-6 h-6 object-contain" referrerPolicy="no-referrer" />
                        ) : Icon ? (
                          <Icon size={18} className="text-white" />
                        ) : null}
                      </div>
                    );
                  })()}
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] border border-slate-200">
                    {activeQuestions[currentQuestionIndex].subject}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-relaxed">
                  {activeQuestions[currentQuestionIndex].text}
                </h3>

                <div className="mt-10 space-y-4">
                  {activeQuestions[currentQuestionIndex].options.map((option, idx) => {
                    let optionStyle = "border-slate-200 hover:border-brand-primary/50 bg-white text-slate-600 shadow-sm";
                    
                    if (isFeedbackVisible) {
                      if (idx === activeQuestions[currentQuestionIndex].correctIndex) {
                        optionStyle = "border-brand-green bg-brand-green/10 text-brand-green font-bold shadow-sm";
                      } else if (idx === selectedOption) {
                        optionStyle = "border-brand-red bg-brand-red/10 text-brand-red font-bold shadow-sm";
                      } else {
                        optionStyle = "border-slate-200/50 opacity-40";
                      }
                    } else if (selectedOption === idx) {
                      optionStyle = "border-brand-primary bg-blue-50 text-brand-primary font-bold shadow-md";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        disabled={isFeedbackVisible}
                        className={`group w-full text-left p-5 md:p-6 rounded-[2rem] border-2 transition-all duration-300 flex items-center justify-between gap-6 ${optionStyle}`}
                      >
                        <div className="flex items-center gap-5">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 transition-all border-2 ${
                            isFeedbackVisible ? (
                              idx === activeQuestions[currentQuestionIndex].correctIndex ? 'bg-brand-green border-transparent text-white' :
                              idx === selectedOption ? 'bg-brand-red border-transparent text-white' : 'bg-slate-100 border-slate-200 text-slate-500'
                            ) : (
                              selectedOption === idx ? 'bg-brand-primary border-transparent text-white scale-110' : 'bg-slate-100 border-slate-200 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700'
                            )
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </div>
                          <span className="font-bold text-md md:text-lg leading-tight">{option}</span>
                        </div>
                        
                        {isFeedbackVisible && (
                          <div className="shrink-0">
                            {idx === activeQuestions[currentQuestionIndex].correctIndex ? (
                              <CheckCircle2 size={24} />
                            ) : idx === selectedOption ? (
                              <XCircle size={24} />
                            ) : null}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Bar */}
              <div 
                onClick={isFeedbackVisible ? nextQuestion : undefined}
                className={`fixed bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-500 transform translate-y-0 z-50 border-t border-slate-100 ${
                isFeedbackVisible ? 
                (selectedOption === activeQuestions[currentQuestionIndex].correctIndex ? 'bg-brand-green cursor-pointer' : 'bg-brand-red cursor-pointer') : 
                'bg-white/80 backdrop-blur-xl'
              }`}>
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                  {isFeedbackVisible ? (
                    <>
                      <div className="flex items-start gap-4 text-white">
                        <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md shrink-0">
                          {selectedOption === activeQuestions[currentQuestionIndex].correctIndex ? 
                            <CheckCircle2 size={32} className="text-white" /> : 
                            <XCircle size={32} className="text-white" />
                          }
                        </div>
                        <div className="max-w-xl">
                          <h4 className="font-black text-xl tracking-tight leading-none mb-1">
                            {selectedOption === activeQuestions[currentQuestionIndex].correctIndex ? 'Resposta Correta!' : 'Resposta Errada!'}
                          </h4>
                          <p className="text-white text-sm md:text-base leading-relaxed font-bold italic opacity-100">
                            {activeQuestions[currentQuestionIndex].explanation}
                          </p>
                          <p className="text-white/80 text-[10px] font-black uppercase tracking-widest mt-2 animate-pulse">
                            Toque em qualquer lugar para continuar
                          </p>
                        </div>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          nextQuestion();
                        }}
                        className="w-full md:w-auto px-12 py-4 bg-white text-slate-900 font-black rounded-2xl shadow-lg transition-all hover:scale-105 active:scale-95 text-lg"
                      >
                        PRÓXIMA
                      </button>
                    </>
                  ) : (
                    <div className="w-full flex items-center justify-center p-2">
                       <p className="text-slate-400 font-bold flex items-center gap-2 animate-pulse">
                         <Zap size={18} className="text-brand-primary" />
                         Toque em uma resposta para verificar
                       </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* +XP Float */}
              <AnimatePresence>
                {showXpFloat && (
                  <motion.div
                    initial={{ opacity: 1, y: 0, scale: 0.8 }}
                    animate={{ opacity: 0, y: -90, scale: 1.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                    className="fixed bottom-52 left-1/2 -translate-x-1/2 z-[60] pointer-events-none"
                  >
                    <div className="flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-2xl font-black text-lg shadow-2xl shadow-green-500/40 border border-white/20">
                      <Zap size={18} fill="currentColor" />
                      +50 XP
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Spacer for fixed bottom bar */}
              <div className="h-40" />
            </motion.div>
          )}

          {/* SUMMARY VIEW */}
          {view === 'summary' && (
            <motion.div 
              key="summary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col gap-10 pb-24 px-4"
            >
              {/* Header Section */}
              <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-900 rounded-[3rem] p-10 text-white text-center relative overflow-hidden shadow-2xl shadow-blue-500/30">
                {/* decorative blobs */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full -mr-28 -mt-28 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-20 -mb-20 pointer-events-none" />

                {/* confetti particles (perfect score only) */}
                {sessionResults.correct === sessionResults.total && sessionResults.total > 0 &&
                  confettiData.current.map((p: typeof confettiData.current[0], i: number) => (
                    <motion.div
                      key={i}
                      initial={{ y: 120, opacity: 1 }}
                      animate={{ y: -120, opacity: 0, rotate: p.rotate }}
                      transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut' }}
                      className={`absolute w-2.5 h-2.5 pointer-events-none ${p.isSquare ? 'rounded-sm' : 'rounded-full'}`}
                      style={{ backgroundColor: p.color, left: `${p.x}%`, bottom: 0 }}
                    />
                  ))
                }

                {/* Trophy / chart icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', bounce: 0.55, delay: 0.1 }}
                  className="w-24 h-24 bg-white/15 backdrop-blur-sm rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl border border-white/20"
                >
                  {sessionResults.correct === sessionResults.total && sessionResults.total > 0
                    ? <Trophy size={48} fill="currentColor" className="text-amber-300" />
                    : <BarChart3 size={44} className="text-white" />
                  }
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-black text-white mb-2 uppercase tracking-tighter"
                >
                  {sessionResults.correct === sessionResults.total && sessionResults.total > 0
                    ? 'Sessão Perfeita! 🎉'
                    : 'Sessão Concluída'}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-blue-200/80 font-medium mb-8 leading-relaxed max-w-sm mx-auto"
                >
                  {sessionResults.correct === sessionResults.total && sessionResults.total > 0
                    ? `${sessionResults.correct} de ${sessionResults.total} acertos em ${selectedSubject}.`
                    : `Você acertou ${sessionResults.correct} de ${sessionResults.total} questões.`}
                  {' '}Continue assim — sua evolução é constante!
                </motion.p>

                {/* Animated XP counter */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', bounce: 0.45, delay: 0.4 }}
                  className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-black text-lg border border-white/20 shadow-xl"
                >
                  <Zap size={22} fill="currentColor" className="text-amber-300" />
                  +{summaryXP} XP{sessionResults.correct === sessionResults.total ? ' • bônus perfeição!' : ' ganhos'}
                </motion.div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'Acertos', val: sessionResults.correct, color: 'text-brand-green' },
                  { label: 'Erros', val: sessionResults.total - sessionResults.correct, color: 'text-brand-red' },
                  { label: 'Tempo', val: formatTimer(summaryTimer), color: 'text-slate-900' }
                ].map((stat, i) => (
                  <div key={stat.label} className="bg-white p-6 rounded-[2.5rem] border border-slate-200/80 text-center shadow-lg">
                    <div className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.val}</div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Revision Section (Errors Only) */}
              {sessionResults.total - sessionResults.correct > 0 ? (
                <div className="space-y-6">
                   <div className="flex items-center justify-between px-4">
                     <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-[0.2em]">Revisão de Erros</h4>
                     <span className="text-[10px] font-black text-brand-red bg-brand-red/10 px-3 py-1 rounded-full uppercase tracking-widest">Atenção</span>
                   </div>
                   <div className="space-y-4">
                     {sessionHistory.filter(h => {
                       const q = QUESTIONS.find(qi => qi.id === h.questionId);
                       return q && q.correctIndex !== h.selectedIndex;
                     }).map((h, i) => {
                       const q = QUESTIONS.find(qi => qi.id === h.questionId)!;
                       return (
                         <div key={h.questionId} className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden group">
                           <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red" />
                           <div className="p-6 pl-8">
                           <div className="flex items-center gap-3 mb-4">
                             <span className="bg-brand-red/10 text-brand-red text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Erro #{i + 1}</span>
                             <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{q.subject}</span>
                           </div>
                           <h5 className="text-slate-900 font-bold text-lg leading-relaxed mb-6">{q.text}</h5>
                           
                           <div className="space-y-3">
                              <div className="p-4 rounded-2xl bg-brand-red/5 border border-brand-red/10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center text-white font-black text-xs">Sua</div>
                                  <span className="text-sm font-bold text-brand-red">{q.options[h.selectedIndex]}</span>
                                </div>
                                <XCircle size={18} className="text-brand-red" />
                              </div>
                              <div className="p-4 rounded-2xl bg-brand-green/5 border border-brand-green/10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center text-white font-black text-xs">Correta</div>
                                  <span className="text-sm font-bold text-brand-green">{q.options[q.correctIndex]}</span>
                                </div>
                                <CheckCircle2 size={18} className="text-brand-green" />
                              </div>
                           </div>

                           <div className="mt-8 pt-8 border-t border-slate-200">
                             <div className="flex items-start gap-4">
                                <div className="bg-brand-primary/10 p-2 rounded-xl text-brand-primary">
                                  <Zap size={20} fill="currentColor" />
                                </div>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                                  {q.explanation}
                                </p>
                             </div>
                           </div>
                           </div>{/* end p-6 pl-8 */}
                         </div>
                       );
                     })}
                   </div>
                </div>
              ) : (
                <div className="bg-white rounded-[3rem] p-10 border border-slate-200/80 shadow-xl text-center">
                  <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2">Sem erros para revisar</h3>
                  <p className="text-slate-500 text-sm font-medium">Você mandou muito bem! Continue estudando para manter o ritmo.</p>
                </div>
              )}

              {/* Theme Performance */}
              {(() => {
                const themeColors = ['bg-brand-primary', 'bg-blue-400', 'bg-brand-green', 'bg-amber-400', 'bg-purple-400', 'bg-rose-400'];
                const bySubject: Record<string, { correct: number; total: number }> = {};
                sessionHistory.forEach((h: { questionId: string; selectedIndex: number }) => {
                  const q = activeQuestions.find((q: Question) => q.id === h.questionId);
                  if (!q) return;
                  if (!bySubject[q.subject]) bySubject[q.subject] = { correct: 0, total: 0 };
                  bySubject[q.subject].total++;
                  if (h.selectedIndex === q.correctIndex) bySubject[q.subject].correct++;
                });
                const themes = Object.entries(bySubject).map(([name, s], i) => ({
                  name,
                  color: themeColors[i % themeColors.length],
                  progress: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0,
                  label: `${s.correct}/${s.total}`,
                }));
                if (themes.length === 0) return null;
                return (
                  <div className="space-y-6">
                    <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] px-4">Desempenho por tema</h4>
                    <div className="bg-slate-900 rounded-[3rem] p-8 border border-slate-800 space-y-8 shadow-2xl">
                      {themes.map((theme, i) => (
                        <div key={theme.name} className="space-y-3">
                          <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                            <div className="flex items-center gap-3">
                              <div className={`w-2.5 h-2.5 rounded-full ${theme.color}`} />
                              <span className="text-slate-300">{theme.name}</span>
                            </div>
                            <span className="text-white">{theme.label}</span>
                          </div>
                          <div className="h-4 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-1">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${theme.progress}%` }}
                              transition={{ duration: 1.5, delay: i * 0.2 }}
                              className={`h-full ${theme.color} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Insight Cards */}
              {(() => {
                // Calcula o tema com pior desempenho na sessão atual
                const bySubj: Record<string, { correct: number; total: number }> = {};
                sessionHistory.forEach((h: { questionId: string; selectedIndex: number }) => {
                  const q = activeQuestions.find((q: Question) => q.id === h.questionId);
                  if (!q) return;
                  if (!bySubj[q.subject]) bySubj[q.subject] = { correct: 0, total: 0 };
                  bySubj[q.subject].total++;
                  if (h.selectedIndex === q.correctIndex) bySubj[q.subject].correct++;
                });
                const worstEntry = Object.entries(bySubj)
                  .filter(([, s]) => s.total > 0)
                  .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))[0];
                const worstSubject = worstEntry ? worstEntry[0] : selectedSubject;
                const worstRate = worstEntry
                  ? Math.round(((worstEntry[1].total - worstEntry[1].correct) / worstEntry[1].total) * 100)
                  : 0;
                const hasErrors = sessionResults.correct < sessionResults.total;
                return hasErrors ? (
                <div className="bg-brand-orange/10 p-8 rounded-[3rem] border border-brand-orange/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-brand-orange/5">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-brand-orange/20 rounded-[1.5rem] flex items-center justify-center text-brand-orange shrink-0">
                      <AlertTriangle size={32} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Ponto fraco detectado</h3>
                      <p className="text-slate-500 text-sm font-medium mt-1">
                        {worstSubject}: você errou {worstRate}% das questões nesta sessão. Revisar agora?
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => { setSelectedSubject(worstSubject as any); startQuiz(false, worstSubject as any, null); }}
                    className="w-full md:w-auto bg-brand-orange px-8 py-4 rounded-2xl text-black font-black text-sm shadow-xl shadow-brand-orange/20 hover:scale-105 transition-all uppercase tracking-widest whitespace-nowrap"
                  >
                    Revisar
                  </button>
                </div>
                ) : (
                <div className="bg-brand-green/10 p-8 rounded-[3rem] border border-brand-green/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-brand-green/5">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-brand-green/20 rounded-[1.5rem] flex items-center justify-center text-brand-green shrink-0">
                      <Zap size={32} fill="currentColor" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Sessão perfeita! 🎯</h3>
                      <p className="text-slate-500 text-sm font-medium mt-1">Acertou tudo em {worstSubject}. Continue assim e suba de liga!</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedSubject(selectedSubject);
                      startQuiz();
                    }}
                    className="w-full md:w-auto bg-brand-green px-8 py-4 rounded-2xl text-black font-black text-sm shadow-xl shadow-brand-green/20 hover:scale-105 transition-all uppercase tracking-widest whitespace-nowrap"
                  >
                    Tentar
                  </button>
                </div>
                );
              })()}

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-[3rem] flex items-center gap-6 shadow-2xl relative overflow-hidden">
                <div className="bg-slate-800 p-4 rounded-2xl text-brand-orange shadow-inner">
                  <Flame size={32} fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">Streak mantido — {user.streak} dias!</h3>
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Volte amanhã para não perder sua sequência.</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 mt-2">
                <button
                  onClick={() => setView('home')}
                  className="w-full py-5 bg-brand-primary text-white font-black rounded-2xl shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3"
                >
                  <Zap size={18} fill="currentColor" />
                  Continuar
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-slate-800 transition-all active:scale-95">
                    <Share2 size={16} />
                    Compartilhar
                  </button>
                  <button
                    onClick={() => startQuiz()}
                    className="flex items-center justify-center gap-2 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-slate-800 transition-all active:scale-95"
                  >
                    <RotateCcw size={16} />
                    Repetir
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* REVISION VIEW */}
          {view === 'revision' && (() => {
            // Compute weak subject: lowest mastery among subjects the user has attempted
            const attempted = (Object.entries(user.subjectAttempts) as [string, number][]).filter(([, n]) => n > 0);
            const weakEntry = attempted.length > 0
              ? attempted.sort((a, b) => (user.mastery[a[0]] ?? 0) - (user.mastery[b[0]] ?? 0))[0]
              : null;
            const weakSubject = weakEntry ? weakEntry[0] : null;
            const weakMastery = weakSubject ? Math.round(user.mastery[weakSubject] ?? 0) : 0;
            const weakAttempts = weakSubject ? (user.subjectAttempts[weakSubject] ?? 0) : 0;

            // Compute critical topics: subSubjects (or subjects) most present in missed questions
            const missedQs = QUESTIONS.filter(q => user.missedQuestionIds.includes(q.id));
            const topicMap: Record<string, { label: string; subject: string; count: number }> = {};
            missedQs.forEach(q => {
              const key = q.subSubject || q.subject;
              if (!topicMap[key]) topicMap[key] = { label: key, subject: q.subject, count: 0 };
              topicMap[key].count++;
            });
            const criticalTopics = Object.values(topicMap).sort((a, b) => b.count - a.count).slice(0, 5);

            // Accuracy by subject for the performance bar section
            const performanceRows = (Object.entries(user.subjectAttempts) as [string, number][])
              .filter(([, n]) => n > 0)
              .map(([subj, n]) => ({ subj, attempts: n, mastery: Math.round(user.mastery[subj] ?? 0) }))
              .sort((a, b) => a.mastery - b.mastery)
              .slice(0, 4);

            return (
              <motion.div
                key="revision"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6 pb-32"
              >
                <div className="flex items-center justify-between mt-6 px-2">
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Sua Revisão</h2>
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange border border-brand-orange/20">
                    <RotateCcw size={24} />
                  </div>
                </div>

                {/* Ponto Fraco — dinâmico */}
                <div className="bg-[#1a1a18] p-7 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange shadow-inner shrink-0">
                      <Activity size={22} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-white uppercase tracking-tighter leading-none mb-1">
                        {weakSubject ? 'Ponto Fraco Detectado' : 'Análise de Desempenho'}
                      </h3>
                      <p className="text-neutral-500 text-[10px] font-black uppercase tracking-widest leading-none">
                        {weakSubject ? `${weakSubject} • ${weakAttempts} questões respondidas` : 'Baseado no seu histórico'}
                      </p>
                    </div>
                  </div>

                  {weakSubject ? (
                    <>
                      <p className="text-slate-400 font-medium mb-6 leading-relaxed italic text-sm">
                        "Seu aproveitamento em <span className="text-brand-orange font-black not-italic">{weakSubject}</span> está em {weakMastery}%. Recomendamos reforçar esse tema para subir sua pontuação."
                      </p>
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Aproveitamento atual</span>
                          <span className="text-[11px] font-black" style={{ color: weakMastery < 40 ? '#EF4444' : weakMastery < 70 ? '#F59E0B' : '#22C55E' }}>{weakMastery}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${weakMastery}%` }}
                            transition={{ duration: 1 }}
                            className="h-full rounded-full"
                            style={{ background: weakMastery < 40 ? '#EF4444' : weakMastery < 70 ? '#F59E0B' : '#22C55E' }}
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => { setSelectedSubject(weakSubject as any); startQuiz(false, weakSubject as any, null); }}
                        className="w-full bg-brand-orange py-4 rounded-2xl text-black font-black text-sm shadow-xl shadow-brand-orange/20 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest"
                      >
                        Revisar {weakSubject} Agora
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-col items-center py-6 gap-3 text-center">
                      <span className="text-4xl">🎯</span>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">
                        Responda questões para que o Dr. Will identifique seus pontos fracos automaticamente.
                      </p>
                      <button
                        onClick={() => setView('home')}
                        className="mt-2 px-6 py-3 bg-brand-orange/20 text-brand-orange rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-orange/30 transition-all"
                      >
                        Começar a Jogar
                      </button>
                    </div>
                  )}
                </div>

                {/* Performance por matéria */}
                {performanceRows.length > 0 && (
                  <div className="bg-[#1a1a18] p-6 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col gap-4">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="bg-blue-500/10 p-2 rounded-lg text-blue-400">
                        <BarChart2 size={16} />
                      </div>
                      <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Seu Desempenho por Matéria</span>
                    </div>
                    <div className="space-y-4">
                      {performanceRows.map(row => (
                        <div key={row.subj}>
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-xs font-bold text-slate-300 truncate">{row.subj}</span>
                            <span className="text-[10px] font-black shrink-0 ml-2" style={{ color: row.mastery < 40 ? '#EF4444' : row.mastery < 70 ? '#F59E0B' : '#22C55E' }}>{row.mastery}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${row.mastery}%` }}
                              transition={{ duration: 0.8 }}
                              className="h-full rounded-full"
                              style={{ background: row.mastery < 40 ? '#EF4444' : row.mastery < 70 ? '#F59E0B' : '#22C55E' }}
                            />
                          </div>
                          <span className="text-[9px] text-neutral-600 font-bold">{row.attempts} questão{row.attempts !== 1 ? 'ões' : ''} respondida{row.attempts !== 1 ? 's' : ''}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Temas Críticos — dinâmico */}
                  <div className="bg-[#1a1a18] p-6 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-500/10 p-2 rounded-lg text-red-400">
                        <AlertTriangle size={16} />
                      </div>
                      <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Temas Críticos</span>
                    </div>
                    {criticalTopics.length > 0 ? (
                      <div className="space-y-2">
                        {criticalTopics.map(topic => (
                          <button
                            key={topic.label}
                            onClick={() => { setSelectedSubject(topic.subject as any); startQuiz(false, topic.subject as any, null); }}
                            className="w-full flex justify-between items-center bg-white/5 hover:bg-white/10 active:scale-95 transition-all p-3 rounded-xl"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 text-[9px] font-black flex items-center justify-center shrink-0">{topic.count}</span>
                              <span className="text-xs font-bold text-slate-300 truncate">{topic.label}</span>
                            </div>
                            <ChevronRight size={13} className="text-neutral-600 shrink-0" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center py-4 gap-2 text-center">
                        <span className="text-2xl">✅</span>
                        <p className="text-neutral-500 text-xs font-medium">Nenhum tema crítico ainda.<br/>Continue jogando!</p>
                      </div>
                    )}
                  </div>

                  {/* Simulado de Erros */}
                  <div className="bg-slate-900 p-7 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                      <h4 className="text-lg font-black uppercase tracking-tighter mb-2">Simulado de Erros</h4>
                      <p className="text-slate-400 text-xs font-medium mb-5 leading-relaxed">Refazer apenas as {user.missedQuestionIds.length} questão{user.missedQuestionIds.length !== 1 ? 'ões' : ''} que você errou.</p>
                      <button
                        onClick={() => startQuiz(true)}
                        disabled={user.missedQuestionIds.length === 0}
                        className="w-full py-3 bg-white text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {user.missedQuestionIds.length === 0 ? 'Sem erros pendentes' : `Gerar Simulado (${user.missedQuestionIds.length})`}
                      </button>
                      {user.missedQuestionIds.length > 0 && (
                        <p className="text-[9px] font-black text-blue-400/50 uppercase tracking-widest mt-3 text-center">
                          {user.missedQuestionIds.length} questão{user.missedQuestionIds.length !== 1 ? 'ões' : ''} disponível{user.missedQuestionIds.length !== 1 ? 'ais' : ''}
                        </p>
                      )}
                    </div>
                    <RotateCcw className="absolute bottom-[-20px] right-[-20px] w-28 h-28 text-white/5 -rotate-12" />
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {view === 'ranking' && (
            <motion.div 
              key="ranking"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-0 pb-4 min-h-screen bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6">
                <button onClick={() => setView('home')} className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-white/60 hover:text-white transition-all active:scale-90">
                  <ArrowLeft size={20} />
                </button>
                <h2 className="text-lg font-black text-white/90 uppercase tracking-[0.1em]">Copa médica</h2>
                <button 
                  onClick={() => setShowAddFriend(true)}
                  className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full text-white shadow-lg shadow-blue-600/20 active:scale-90"
                >
                  <UserPlus size={20} />
                </button>
              </div>

              {/* League Tabs */}
              <div className="px-6 mb-8">
                <div className="flex overflow-x-auto bg-white/5 p-1 rounded-2xl border border-white/10 gap-0.5 scrollbar-none">
                  {([
                    { id: 'bronze'  as LeagueTier, label: 'Bronze',   icon: Shield  },
                    { id: 'prata'   as LeagueTier, label: 'Prata',    icon: Star    },
                    { id: 'ouro'    as LeagueTier, label: 'Ouro',     icon: Trophy  },
                    { id: 'platina' as LeagueTier, label: 'Platina',  icon: Diamond },
                    { id: 'diamante'as LeagueTier, label: 'Diamante', icon: Crown   },
                  ] as { id: LeagueTier; label: string; icon: typeof Trophy }[]).map((league) => (
                    <button
                      key={league.id}
                      onClick={() => setActiveLeague(league.id)}
                      className={`flex-1 min-w-[64px] flex items-center justify-center gap-1.5 py-3 rounded-xl transition-all whitespace-nowrap ${
                        activeLeague === league.id
                        ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-600/30 border border-blue-400/20'
                        : 'text-white/40 hover:text-white/60'
                      }`}
                    >
                      <league.icon size={12} className={activeLeague === league.id ? 'text-white' : 'text-neutral-500'} />
                      <span className="text-[9px] font-black uppercase tracking-[0.12em]">{league.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Global/Friends Tabs */}
              <div className="px-10 mb-8 mt-2">
                <div className="flex border-b border-white/5">
                  <button 
                    onClick={() => setRankingTab('global')}
                    className={`flex-1 pb-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all relative ${
                      rankingTab === 'global' ? 'text-white' : 'text-neutral-500'
                    }`}
                  >
                    Global
                    {rankingTab === 'global' && <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full" />}
                  </button>
                  <button 
                    onClick={() => setRankingTab('friends')}
                    className={`flex-1 pb-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all relative ${
                      rankingTab === 'friends' ? 'text-white' : 'text-neutral-500'
                    }`}
                  >
                    Amigos
                    {rankingTab === 'friends' && <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full" />}
                  </button>
                </div>
              </div>

              {/* Podium - only for Global first page */}
              {rankingTab === 'global' && (() => {
                const leaguePlayers = LEAGUE_DATA[activeLeague as LeagueTier];
                const first  = leaguePlayers[0];
                const second = leaguePlayers[1];
                const third  = leaguePlayers[2];
                return (
                  <motion.div
                    key={activeLeague + '-podium'}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex justify-center items-end gap-2 px-4 mb-10 mt-20 relative h-[240px]"
                  >
                    {/* 2nd place */}
                    <div className="flex flex-col items-center flex-1 max-w-[100px]">
                      <div className="relative mb-3">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center text-white font-bold text-base border-4 border-blue-900 shadow-xl shadow-blue-900/50">{second.initials}</div>
                      </div>
                      <span className="text-[10px] font-bold text-white/60 mb-1 leading-none">{second.name.split(' ').slice(0,2).join(' ')}</span>
                      <span className="text-[11px] font-black text-blue-300 mb-2 leading-none">{second.xp.toLocaleString()}</span>
                      <div className="w-full h-28 bg-gradient-to-t from-blue-700/70 to-blue-500/40 rounded-t-2xl flex items-center justify-center text-3xl font-black text-white/50 border-t border-x border-blue-500/20">2</div>
                    </div>

                    {/* 1st place */}
                    <div className="flex flex-col items-center flex-1 max-w-[110px] z-10 scale-110">
                      <div className="relative mb-3">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-amber-400">
                          <motion.div animate={{ rotate: [0, -5, 5, 0], y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
                            <Crown size={26} fill="currentColor" />
                          </motion.div>
                        </div>
                        <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-xl scale-125" />
                        <div className="w-18 h-18 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-white font-bold text-xl border-4 border-amber-400 shadow-[0_0_40px_rgba(245,158,11,0.6)] relative z-10">{first.initials}</div>
                      </div>
                      <span className="text-[11px] font-bold text-white mb-1 leading-none">{first.name.split(' ').slice(0,2).join(' ')}</span>
                      <span className="text-[12px] font-black text-blue-300 mb-2 leading-none">{first.xp.toLocaleString()}</span>
                      <div className="w-full h-40 bg-gradient-to-t from-blue-700 to-blue-400 rounded-t-2xl flex items-center justify-center text-5xl font-black text-white/70 shadow-[0_-15px_40px_rgba(37,99,235,0.5)] border-t border-x border-blue-400/30">1</div>
                    </div>

                    {/* 3rd place */}
                    <div className="flex flex-col items-center flex-1 max-w-[100px]">
                      <div className="relative mb-3">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center text-white font-bold text-base border-4 border-blue-900 shadow-xl shadow-blue-900/50">{third.initials}</div>
                      </div>
                      <span className="text-[10px] font-bold text-white/60 mb-1 leading-none">{third.name.split(' ').slice(0,2).join(' ')}</span>
                      <span className="text-[11px] font-black text-blue-300 mb-2 leading-none">{third.xp.toLocaleString()}</span>
                      <div className="w-full h-24 bg-gradient-to-t from-blue-700/50 to-blue-500/20 rounded-t-2xl flex items-center justify-center text-3xl font-black text-white/30 border-t border-x border-blue-500/10">3</div>
                    </div>
                  </motion.div>
                );
              })()}

              {/* Player List Container */}
              <div className="bg-blue-950/60 backdrop-blur-sm rounded-t-[3.5rem] flex-1 px-4 pt-10 pb-4 border-t border-blue-800/30">
                {rankingTab === 'friends' && user.friends.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 px-10 text-center gap-8">
                    <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center text-white/20">
                      <Search size={40} />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-black text-white uppercase tracking-tight">Estude em grupo</h4>
                      <p className="text-neutral-500 text-xs font-medium max-w-[240px] mx-auto leading-relaxed">
                        Conecte-se com colegas para <span className="text-blue-400 font-bold">dominar o pódio juntos!</span>
                      </p>
                    </div>
                    <button
                      onClick={() => setShowAddFriend(true)}
                      className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-xl shadow-blue-600/20 active:scale-95"
                    >
                      Buscar Amigos
                    </button>
                  </div>
                ) : (
                  <motion.div
                    key={activeLeague + '-list'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {(rankingTab === 'global'
                      ? LEAGUE_DATA[activeLeague as LeagueTier].slice(3)
                      : LEAGUE_DATA[activeLeague as LeagueTier].filter((p: LeaguePlayer) => p.currentUser || user.friends.includes(p.name))
                    ).map((player: LeaguePlayer, idx: number) => {
                      const absoluteRank = rankingTab === 'global' ? idx + 4 : idx + 1;
                      return (
                        <div 
                          key={player.name}
                          className={`flex items-center gap-4 p-4 rounded-[2rem] border transition-all ${
                            player.currentUser 
                            ? 'bg-blue-600/10 border-blue-500/30 shadow-[0_8px_30px_rgba(37,99,235,0.1)]' 
                            : 'bg-white/5 border-transparent'
                          }`}
                        >
                          <div className={`w-6 font-black text-sm text-center ${player.currentUser ? 'text-blue-400' : 'text-neutral-600'}`}>
                            {absoluteRank}
                          </div>
                          
                          <div className="relative shrink-0">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm text-white shadow-lg ${
                              player.currentUser ? 'bg-blue-600' : 'bg-[#1e1e1c]'
                            }`}>
                              {player.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </div>
                            {player.active && (
                              <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 bg-brand-green rounded-full border-2 border-[#262624]" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4 className={`text-[13px] font-black uppercase tracking-tight truncate ${player.currentUser ? 'text-blue-400' : 'text-white/90'}`}>
                              {player.name} {player.currentUser && <span className="text-[10px] text-blue-400 lowercase">(você)</span>}
                            </h4>
                            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Nív. {player.level} • Mestre</p>
                          </div>

                          <div className="text-right shrink-0 min-w-[70px]">
                            <div className="flex items-baseline gap-1 justify-end">
                              <span className="text-[15px] font-black leading-none text-white">{player.xp.toLocaleString()}</span>
                              <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">XP</span>
                            </div>
                            <div className="flex items-center gap-2 justify-end mt-1.5">
                              {!!player.streak && (
                                <div className="flex items-center gap-0.5">
                                  <Flame size={10} className="text-orange-500" fill="currentColor" />
                                  <span className="text-[10px] font-black text-orange-500">{player.streak}</span>
                                </div>
                              )}
                              {player.trend !== 0 && (
                                <div className={`flex items-center gap-0.5 ${player.trend > 0 ? 'text-brand-green' : 'text-red-500'}`}>
                                  {player.trend > 0 ? <TrendingUp size={11} strokeWidth={3} /> : <TrendingDown size={11} strokeWidth={3} />}
                                  <span className="text-[10px] font-black tracking-tighter">{player.trend > 0 ? `+${player.trend}` : player.trend}</span>
                                </div>
                              )}
                              {player.trend === 0 && !player.streak && (
                                <div className="h-[2px] w-3 bg-neutral-600 rounded-full" />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* Promotion Banner */}
                    <div className="bg-brand-green/10 p-5 rounded-[2rem] border border-brand-green/20 flex items-center gap-5 mt-6 mb-2">
                       <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green">
                          <TrendingUp size={22} strokeWidth={3} />
                       </div>
                       <p className="text-[12px] font-bold text-brand-green/90 leading-tight">
                          Top 5 sobem para a liga <span className="font-black text-brand-green uppercase">Diamante</span> no fim da semana!
                       </p>
                    </div>

                    {/* Sua posição Footer Card */}
                    <div className="bg-[#1a1a18] p-6 rounded-[2.5rem] mt-6 border border-white/5 space-y-4 shadow-2xl">
                       <div className="flex justify-between items-end">
                          <p className="text-[11px] font-black text-neutral-500 uppercase tracking-widest leading-none">Sua posição: 4º lugar</p>
                          <p className="text-[11px] font-black text-white/50 uppercase tracking-widest leading-none">+2.180 XP para o top 3</p>
                       </div>
                       <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '70%' }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]"
                          />
                       </div>
                    </div>

                    {/* Scroll to Top */}
                    <div className="flex justify-center mt-6">
                       <button
                         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                         className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-white/40 border border-white/5 hover:bg-white/10 hover:text-white transition-all active:scale-95 cursor-pointer shadow-lg"
                       >
                          <ChevronUp size={24} />
                       </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {view === 'progress' && (
            <motion.div 
              key="progress"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col gap-10 pb-32"
            >
              {/* Progress Hero */}
              <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-900 rounded-[3rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-500/30 mt-4">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest">Dashboard</p>
                    <div className="flex bg-white/10 border border-white/20 p-1 rounded-xl shrink-0 shadow-inner">
                      {(['7D', '30D', 'Total'] as const).map((f) => (
                        <button
                          key={f}
                          onClick={() => setProgressFilter(f.toLowerCase() as any)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                            progressFilter === f.toLowerCase()
                              ? 'bg-white text-blue-700 shadow-lg'
                              : 'text-white/50 hover:text-white/80'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter leading-tight">Meu Progresso</h2>
                </div>
                <div className="relative z-10 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Respondidas', val: '312', icon: BookOpen },
                    { label: 'Taxa Acerto', val: '74%', icon: Target },
                    { label: 'Streak', val: `${user.streak}d`, icon: Flame }
                  ].map((card) => (
                    <div key={card.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 pb-4 text-center border border-white/15 hover:bg-white/20 transition-all">
                      <card.icon size={18} className="text-blue-200 mx-auto mb-2" />
                      <div className="text-xl font-black text-white tracking-tighter leading-none">{card.val}</div>
                      <div className="text-[9px] font-black text-blue-200/70 uppercase tracking-wider mt-2 leading-tight break-words">{card.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Heatmap */}
              <div className="space-y-6">
                <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-widest px-4">Atividade — últimos 28 dias</h4>
                <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-[2.5rem] sm:rounded-[3rem] p-4 sm:p-10 border border-blue-800/40 shadow-2xl shadow-blue-900/20 relative overflow-visible" onMouseLeave={() => setHoveredCell(null)}>
                  <div className="relative">
                    {/* Tooltip Overlay */}
                    <AnimatePresence>
                      {hoveredCell && (
                        <motion.div
                          initial={{ opacity: 0, y: 5, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          className="absolute z-[100] bg-slate-900/95 backdrop-blur-sm text-white p-3.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-none border border-white/10 flex flex-col items-center justify-center text-center transition-all whitespace-nowrap"
                          style={hoveredCell.col >= 4
                            ? { right: `${100 - hoveredCell.x}%`, top: `${hoveredCell.y}%`, transform: 'translateY(-135%)' }
                            : { left: `${hoveredCell.x}%`, top: `${hoveredCell.y}%`, transform: `translate(${hoveredCell.col <= 2 ? 0 : -50}%, -135%)` }
                          }
                        >
                          <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest leading-none whitespace-nowrap">
                            {formatDate(hoveredCell.date)}
                          </div>
                          <div className="text-[14px] font-black text-white leading-none mt-1.5 whitespace-nowrap">
                            {hoveredCell.count} {hoveredCell.count === 1 ? 'questão' : 'questões'}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-7 gap-1.5 sm:gap-3 mb-6">
                      {heatmapData.map((data, i) => {
                        const col = i % 7;
                        const row = Math.floor(i / 7);
                        const x = ((col + 0.5) / 7) * 100;
                        const y = ((row + 0.5) / 4) * 100;

                        return (
                          <motion.div 
                            key={i} 
                            onMouseEnter={() => setHoveredCell({ ...data, x, y, col })}
                            onTouchStart={() => setHoveredCell({ ...data, x, y, col })}
                            onClick={() => setHoveredCell({ ...data, x, y, col })}
                            whileHover={{ scale: 1.1, zIndex: 30 }}
                            whileTap={{ scale: 0.95 }}
                            className={`aspect-square rounded-lg ${getIntensity(data.count)} shadow-sm cursor-pointer transition-colors border border-transparent hover:border-blue-500/50`}
                          />
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1.5 sm:gap-3 text-[10px] font-black text-blue-400/50 text-center uppercase tracking-widest">
                    {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, idx) => {
                      const fullDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
                      return (
                        <span key={idx} className="truncate">
                          <span className="sm:hidden">{day}</span>
                          <span className="hidden sm:inline">{fullDays[idx]}</span>
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex justify-end items-center mt-8 text-[10px] font-black text-blue-400/50 uppercase tracking-widest gap-4">
                    <span>Vazio</span>
                    <div className="flex gap-2">
                       {['bg-slate-800', 'bg-blue-600/30', 'bg-blue-600/60', 'bg-blue-600/80', 'bg-blue-600'].map(c => (
                          <div key={c} className={`w-3 h-3 rounded-full ${c}`} />
                       ))}
                    </div>
                    <span>Meta</span>
                  </div>
                </div>
              </div>

              {/* Weekly Accuracy Chart */}
              <div className="space-y-6">
                <div className="flex justify-between items-center px-4">
                  <div className="space-y-1">
                    <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-widest">Taxa de acerto quinzenal</h4>
                    <p className="text-[11px] text-slate-700 font-bold tracking-tight">Evolução nas últimas 4 semanas</p>
                  </div>
                  <div className="flex items-center gap-2 bg-brand-green/10 px-3 py-1.5 rounded-xl border border-brand-green/20">
                    <TrendingUp size={12} className="text-brand-green" />
                    <span className="text-[10px] font-black text-brand-green">{chartGain >= 0 ? '+' : ''}{chartGain}%</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-[3rem] p-8 sm:p-10 border border-blue-800/40 shadow-2xl shadow-blue-900/20 overflow-hidden transition-all duration-300">
                  <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1 bg-white/5 rounded-2xl border border-white/5 self-center">
                      {(['Barras', 'Linha'] as const).map(t => (
                        <button 
                          key={t}
                          onClick={() => setChartType(t === 'Barras' ? 'bar' : 'line')}
                          className={`px-6 sm:px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                            chartType === (t === 'Barras' ? 'bar' : 'line') ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-neutral-500 hover:text-neutral-300'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="h-[280px] w-full relative mb-12">
                    <ResponsiveContainer width="100%" height="100%">
                      {chartType === 'bar' ? (
                        <BarChart data={currentChartData} margin={{ top: 20, right: 0, left: -25, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#ffffff10" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#666', fontSize: 10, fontWeight: 900 }}
                            dy={15}
                          />
                          <YAxis 
                            domain={[0, 100]} 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#666', fontSize: 10, fontWeight: 900 }}
                            ticks={[40, 60, 80, 95]}
                            tickFormatter={(v) => `${v}%`}
                          />
                          <Tooltip 
                            cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-[#1a1a18] border border-white/10 px-4 py-3 rounded-2xl shadow-2xl text-center">
                                    <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest leading-none mb-1">{payload[0].payload.name}</p>
                                    <p className="text-xl font-black text-white">{payload[0].value}% <span className="text-[10px] text-blue-400 font-black ml-1 uppercase">acerto</span></p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <ReferenceLine y={80} stroke="#10b98140" strokeDasharray="5 5" strokeWidth={2} />
                          <Bar 
                            dataKey="value" 
                            radius={[12, 12, 12, 12]}
                            animationDuration={1200}
                            barSize={40}
                          >
                            {currentChartData.map((d, i) => (
                              <Cell
                                key={`cell-${i}`}
                                fill={d.value < 60 ? '#1e3a8a' : d.value < 70 ? '#1e40af' : d.value < 74 ? '#2563eb' : '#3b82f6'}
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      ) : (
                        <LineChart data={currentChartData} margin={{ top: 20, right: 20, left: -25, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#ffffff10" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#666', fontSize: 10, fontWeight: 900 }}
                            dy={15}
                          />
                          <YAxis 
                            domain={[0, 100]} 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#666', fontSize: 10, fontWeight: 900 }}
                            ticks={[40, 60, 80, 95]}
                            tickFormatter={(v) => `${v}%`}
                          />
                          <Tooltip 
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-[#1a1a18] border border-white/10 px-4 py-3 rounded-2xl shadow-2xl text-center">
                                    <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest leading-none mb-1">{payload[0].payload.name}</p>
                                    <p className="text-xl font-black text-white">{payload[0].value}%</p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <ReferenceLine y={80} stroke="#10b98140" strokeDasharray="5 5" strokeWidth={2} />
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#3b82f6" 
                            strokeWidth={6} 
                            dot={{ fill: '#3b82f6', strokeWidth: 4, r: 6, stroke: '#1e1e1c' }}
                            activeDot={{ r: 10, strokeWidth: 4, stroke: '#1e1e1c' }}
                            animationDuration={1200}
                          />
                        </LineChart>
                      )}
                    </ResponsiveContainer>
                  </div>

                  {/* Legend */}
                  <div className="flex justify-center gap-6 sm:gap-10 px-2 mb-12">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-lg bg-blue-500 shadow-xl shadow-blue-500/30" />
                      <span className="text-[10px] font-black text-blue-400/60 uppercase tracking-widest">Taxa de acerto</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-lg border-2 border-blue-400/30 border-dashed" />
                      <span className="text-[10px] font-black text-blue-400/60 uppercase tracking-widest">Meta (80%)</span>
                    </div>
                  </div>

                  {/* Insight Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { val: `${chartBest}%`, label: 'Melhor\nresultado', color: 'text-brand-green' },
                      { val: `${chartWorst}%`, label: 'Pior\nresultado', color: 'text-brand-orange' },
                      { val: `${chartGain >= 0 ? '+' : ''}${chartGain}pp`, label: 'Ganho\nno período', color: 'text-white' }
                    ].map((i, idx) => (
                      <div key={idx} className="bg-white/5 p-4 sm:p-6 rounded-[2.5rem] border border-white/5 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-all min-h-[100px]">
                        <p className={`text-xl sm:text-2xl font-black ${i.color} leading-none mb-3`}>{i.val}</p>
                        <p className="text-[8px] sm:text-[10px] font-black text-neutral-600 uppercase tracking-widest leading-tight whitespace-pre-wrap">{i.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specialty Mastery */}
              <div className="space-y-6">
                <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-widest px-4">Domínio por especialidade</h4>
                <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-[3rem] p-8 sm:p-10 border border-blue-800/40 space-y-10 shadow-2xl shadow-blue-900/20">
                  {[
                    { name: 'Cardiologia', mastery: 85, delta: 8, color: 'bg-brand-red' },
                    { name: 'Clínica Médica', mastery: 78, delta: 5, color: 'bg-brand-green' },
                    { name: 'Neurologia', mastery: 61, delta: 12, color: 'bg-blue-600' },
                    { name: 'Cirurgia', mastery: 38, delta: -3, color: 'bg-brand-primary' }
                  ].map((spec) => (
                    <div key={spec.name} className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className={`w-3 h-3 rounded-full ${spec.color} shadow-[0_0_15px_currentColor]`} />
                          <span className="text-sm font-black text-white uppercase tracking-tighter">{spec.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${spec.delta >= 0 ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-red/10 text-brand-red'}`}>
                            {spec.delta >= 0 ? `+${spec.delta}%` : `${spec.delta}%`}
                          </span>
                          <span className="text-xs font-black text-neutral-500">{spec.mastery}%</span>
                        </div>
                      </div>
                      <div className="h-4 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-1">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${spec.mastery}%` }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                          className={`h-full ${spec.color} rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insight Card */}
              <div className="bg-gradient-to-br from-blue-950 to-slate-900 p-8 sm:p-10 rounded-[3rem] border border-blue-800/40 shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-110 transition-transform" />
                 <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                      <Zap size={24} fill="currentColor" />
                    </div>
                    <h4 className="text-sm font-black text-white uppercase tracking-widest">Insight do app</h4>
                 </div>
                 <p className="text-blue-200/70 text-sm font-medium leading-relaxed tracking-tight">
                   Você estuda bem <span className="text-blue-300 font-bold">Cardiologia</span> mas evita <span className="text-blue-300 font-bold">Cirurgia</span> há 9 dias. Em provas de residência USP, Cirurgia vale 25% do total. Sugerimos 10 min de Cirurgia amanhã.
                 </p>
              </div>

              {/* Weekly Streak Bubbles */}
              <div className="space-y-4">
                <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-[0.2em] px-4">Comprometimento Semanal</h4>
                <div className="bg-gradient-to-br from-blue-950 to-slate-900 p-6 rounded-[2.5rem] border border-blue-800/40 shadow-2xl shadow-blue-900/20 overflow-hidden">
                  <div className="flex justify-between items-center gap-1 min-w-0 overflow-x-auto hide-scrollbar py-2">
                    {['Seg', 'Ter', 'Qua', 'Qui', 'Hoje', 'Sáb', 'Dom'].map((day, i) => {
                      const isDone = i < 4;
                      const isToday = i === 4;
                      return (
                        <div key={day} className="flex flex-col items-center gap-2 min-w-[42px] sm:min-w-[60px] shrink-0">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border-2 transition-all shadow-md ${
                            isToday ? 'bg-blue-500/20 border-blue-400 text-blue-300 scale-110 shadow-blue-500/20' :
                            isDone ? 'bg-blue-600 border-blue-500 text-white shadow-blue-600/30' :
                            'bg-white/5 border-white/10 text-white/20'
                          }`}>
                            {isDone ? <Check size={20} strokeWidth={4} /> : isToday ? <Flame size={20} fill="currentColor" /> : <div className="w-1.5 h-1.5 rounded-full bg-white/20" />}
                          </div>
                          <span className={`text-[10px] font-black uppercase tracking-tighter ${isToday ? 'text-blue-300' : isDone ? 'text-blue-400/70' : 'text-white/20'}`}>
                            {day === 'Hoje' ? <span className="bg-blue-500/20 px-1.5 py-0.5 rounded text-blue-300">Hoje</span> : day}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'profile' && (
            <motion.div 
              key="profile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-8 pb-32"
            >
              <div className="bg-white p-10 rounded-[3rem] border border-slate-200/80 shadow-xl text-center relative overflow-hidden group">
                
                {!isEditingProfile && (
                  <button 
                    onClick={() => {
                      setIsEditingProfile(true);
                      setTempName(user.name);
                    }}
                    className="absolute top-6 right-6 p-3 bg-slate-100 border border-slate-200 text-slate-500 hover:text-brand-primary rounded-xl transition-all shadow-sm"
                  >
                    <Edit2 size={20} />
                  </button>
                )}
                
                <div className="relative inline-block mb-8">
                  <div className="w-32 h-32 bg-slate-100/80 rounded-[2.5rem] flex items-center justify-center text-slate-900 text-5xl font-black shadow-inner overflow-hidden border border-slate-200 group-hover:scale-105 transition-transform">
                    {user.profileImage ? (
                      <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      user.name.charAt(0)
                    )}
                  </div>
                  {isEditingProfile ? (
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute -bottom-2 -right-2 bg-brand-primary text-white p-3 rounded-2xl shadow-xl shadow-blue-600/20 border-2 border-white hover:scale-110 transition-all"
                    >
                      <Camera size={20} />
                    </button>
                  ) : (
                    <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-lg border border-slate-200">
                      <div className="bg-brand-green w-4 h-4 rounded-full shadow-[0_0_10px_rgba(59,201,137,0.5)]" />
                    </div>
                  )}
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setUser(prev => ({ ...prev, profileImage: reader.result as string }));
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </div>

                <div className="space-y-4 max-w-xs mx-auto">
                  {isEditingProfile ? (
                    <div className="flex gap-2">
                       <input 
                         value={tempName}
                         onChange={(e) => setTempName(e.target.value)}
                         className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 p-3 rounded-xl font-black focus:border-brand-primary outline-none"
                         autoFocus
                       />
                       <button 
                         onClick={() => {
                           setUser(prev => ({ ...prev, name: tempName }));
                           setIsEditingProfile(false);
                         }}
                         className="bg-brand-primary p-3 rounded-xl text-white shadow-lg shadow-blue-600/20"
                       >
                         <Check size={20} strokeWidth={3} />
                       </button>
                    </div>
                  ) : (
                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                      {user.name} {user.level >= 20 && <span className="text-[10px] bg-brand-primary text-white px-2 py-0.5 rounded ml-2 font-black uppercase">Mestre</span>}
                    </h3>
                  )}
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Estudante de Medicina • {selectedTrack === 'estudante' ? 'Trilha Estudante' : 'Trilha Residente'}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10">
                   <div className="bg-slate-100/80 p-6 rounded-2xl border border-slate-200/80 shadow-inner hover:bg-slate-100 transition-colors">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 leading-none">Nível</div>
                      <div className="text-2xl font-black text-brand-primary leading-none mt-1">{user.level}</div>
                   </div>
                   <div className="bg-slate-100/80 p-6 rounded-2xl border border-slate-200/80 shadow-inner hover:bg-slate-100 transition-colors">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 leading-none">Total XP</div>
                      <div className="text-2xl font-black text-slate-950 leading-none mt-1">{user.xp.toLocaleString()}</div>
                   </div>
                   <div className="bg-slate-100/80 p-6 rounded-2xl border border-slate-200/80 shadow-inner hover:bg-slate-100 transition-colors">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 leading-none">Streak</div>
                      <div className="text-2xl font-black text-brand-red leading-none mt-1">{user.streak}</div>
                   </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-[0.2em] px-4">Assinatura e Plano</h4>
                <div className="bg-white rounded-[3rem] p-8 border border-slate-200 shadow-xl flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-primary">
                      <Award size={32} />
                    </div>
                    <div>
                      <div className="text-lg font-black text-slate-900 uppercase tracking-tighter">MedQuest Premium</div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                        {(() => {
                          const d = new Date(); d.setFullYear(d.getFullYear() + 1);
                          return `Renovação em ${d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
                        })()}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-slate-400 group-hover:text-brand-primary transition-colors" />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-[0.2em] px-4">Estatísticas</h4>
                <button
                  onClick={() => setView('progress')}
                  className="w-full bg-white rounded-[3rem] p-8 border border-slate-200 shadow-xl flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-primary border border-slate-100">
                      <BarChart3 size={32} />
                    </div>
                    <div>
                      <div className="text-lg font-black text-slate-900 uppercase tracking-tighter">Meu Progresso</div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Heatmap, gráficos e domínio</div>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-slate-400 group-hover:text-brand-primary transition-colors" />
                </button>
              </div>

              <button
                onClick={() => setView('landing')}
                className="w-full bg-white border border-slate-100 py-8 rounded-[3rem] text-brand-red font-black uppercase tracking-widest hover:bg-brand-red/5 transition-all shadow-xl"
              >
                Sair da Conta
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Benefits Modal */}
        <AnimatePresence>
          {showBenefits && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xl z-[100] flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setShowBenefits(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                className="bg-white w-full max-w-lg rounded-[3.5rem] p-10 shadow-2xl border border-slate-100 overflow-hidden relative my-auto"
                onClick={e => e.stopPropagation()}
              >
                
                <button 
                  onClick={() => setShowBenefits(false)}
                  className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition-colors bg-slate-50 p-2 rounded-full"
                >
                  <XCircle size={28} />
                </button>

                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-blue-50 rounded-[2.5rem] flex items-center justify-center text-brand-primary shadow-inner mx-auto mb-6">
                    <Zap size={40} fill="currentColor" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Vantagens MedQuest</h3>
                  <p className="text-slate-500 font-medium mt-2">Tecnologia a serviço da sua aprovação.</p>
                </div>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: Target, title: 'IA Mentor (Dr. Will)', desc: 'Análise automática de pontos fracos e sugestão de temas.' },
                    { icon: BookOpen, title: 'Questões Ilimitadas', desc: 'Acesso a mais de 50.000 questões comentadas.' },
                    { icon: Award, title: 'Simulados de Elite', desc: 'Provas reais das maiores bancas do Brasil.' },
                    { icon: Trophy, title: 'Gamificação Progressiva', desc: 'Ganhe XP, suba de liga e mantenha sua rotina.' }
                  ].map((benefit, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={benefit.title} 
                      className="flex gap-5"
                    >
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-primary shrink-0 border border-slate-100 shadow-sm">
                        <benefit.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{benefit.title}</h4>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button 
                  onClick={() => setShowBenefits(false)}
                  className="w-full py-5 bg-brand-primary text-white rounded-2xl font-black text-sm hover:bg-blue-700 transition-all uppercase tracking-[0.2em] shadow-xl shadow-blue-600/30 active:scale-95"
                >
                  Entendi, Tudo Ótimo!
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Avatar Picker */}
        <AnimatePresence>
          {showAvatarPicker && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-end justify-center"
              onClick={() => setShowAvatarPicker(false)}
            >
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                className="bg-white w-full max-w-lg rounded-t-[2.5rem] p-6 pb-10 shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-5" />
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight text-center mb-1">Escolha seu Avatar</h3>
                <p className="text-xs text-slate-400 font-medium text-center mb-5">Selecione sua especialidade favorita</p>
                <div className="grid grid-cols-4 gap-3">
                  {MEDICAL_AVATARS.map(av => (
                    <button
                      key={av.id}
                      onClick={() => { setUserAvatar(av.id); setShowAvatarPicker(false); }}
                      className="flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all active:scale-95"
                      style={userAvatar === av.id ? { background: av.bg, boxShadow: `0 0 0 2px ${av.ring}` } : {}}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm"
                        style={{ background: av.bg }}
                      >
                        {av.emoji}
                      </div>
                      <span className="text-[9px] font-bold text-slate-500 leading-tight text-center">{av.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Streak Lost Modal */}
        <AnimatePresence>
          {showStreakLostModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[200] flex items-end sm:items-center justify-center p-4"
              onClick={() => setShowStreakLostModal(false)}
            >
              <motion.div
                initial={{ y: 80, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ type: 'spring', bounce: 0.3 }}
                className="bg-white w-full max-w-sm rounded-[3rem] p-10 shadow-2xl text-center relative overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300" />

                {/* Broken flame */}
                <motion.div
                  initial={{ rotate: -10 }}
                  animate={{ rotate: [0, -8, 8, -6, 6, 0] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-24 h-24 bg-slate-100 rounded-[2rem] flex items-center justify-center mx-auto mb-6 border-2 border-dashed border-slate-200"
                >
                  <Flame size={48} className="text-slate-300" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2"
                >
                  Streak Perdido
                </motion.h2>
                <p className="text-slate-500 font-medium mb-1">
                  Seu streak de <span className="font-black text-slate-900">{lostStreakCount} {lostStreakCount === 1 ? 'dia' : 'dias'}</span> acabou.
                </p>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Você ficou sem vidas. Com o Plano Premium você pode proteger seu streak com um escudo.
                </p>

                <button className="w-full py-4 mb-3 bg-amber-500 text-white font-black rounded-2xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-3 uppercase tracking-widest text-sm hover:bg-amber-600 transition-all active:scale-95">
                  <Shield size={18} fill="currentColor" />
                  Proteger Streak (Premium)
                </button>
                <button
                  onClick={() => setShowStreakLostModal(false)}
                  className="w-full py-4 bg-slate-100 text-slate-600 font-black rounded-2xl text-sm uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95"
                >
                  Recomeçar do Zero
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Friend Modal */}
        <AnimatePresence>
          {showAddFriend && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setShowAddFriend(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 w-full max-w-sm rounded-[3rem] p-8 shadow-2xl border border-blue-800/30 overflow-hidden relative my-auto"
                onClick={e => e.stopPropagation()}
              >
                {/* decorative blob */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full -mr-24 -mt-24 blur-3xl pointer-events-none" />

                <button
                  onClick={() => setShowAddFriend(false)}
                  className="absolute top-6 right-6 text-white/20 hover:text-white/70 transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full z-10"
                >
                  <XCircle size={22} />
                </button>

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4 mb-8 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-blue-500/40 relative">
                    <UserPlus size={34} strokeWidth={2} />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-green rounded-full border-2 border-blue-950 shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Fazer Conexões</h3>
                    <p className="text-blue-300/60 text-sm font-medium mt-1">Busque sua turma e cresça junto.</p>
                  </div>
                </div>

                {/* Invite link */}
                <div className="mb-5 bg-white/5 p-5 rounded-[2rem] border border-blue-800/30 relative z-10">
                  <span className="text-[10px] font-black text-blue-400/50 uppercase tracking-[0.2em] block mb-3">Link de Convite</span>
                  <button
                    onClick={copyInviteLink}
                    className="w-full p-4 bg-white/5 border border-blue-700/30 rounded-[1.5rem] flex items-center justify-between group hover:bg-white/10 hover:border-blue-500/50 transition-all active:scale-95"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                        <Link size={20} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black text-blue-400/50 uppercase tracking-widest leading-none mb-1">Copiar Link</p>
                        <p className="text-xs font-black text-blue-300 truncate max-w-[130px]">medquest.app/invite/{user.name.toLowerCase().replace(/\s+/g, '-') || 'usuario'}</p>
                      </div>
                    </div>
                    <div className="bg-blue-600/20 p-2.5 rounded-xl text-blue-400 group-hover:bg-blue-500/30 group-hover:text-blue-300 transition-all">
                      <Copy size={16} />
                    </div>
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="h-px bg-blue-800/30 flex-1" />
                  <span className="text-[10px] font-black text-blue-400/40 uppercase tracking-widest">Ou pesquisar</span>
                  <div className="h-px bg-blue-800/30 flex-1" />
                </div>

                {/* Search */}
                <div className="relative mb-5 z-10">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400/40" size={18} />
                  <input
                    type="text"
                    placeholder="Nome ou usuário..."
                    value={friendSearch}
                    onChange={(e) => setFriendSearch(e.target.value)}
                    className="w-full pl-13 pr-6 py-4 bg-white/5 border border-blue-800/40 rounded-[1.5rem] focus:border-blue-500/60 focus:outline-none font-bold text-white transition-all placeholder:text-blue-400/30"
                  />
                </div>

                {/* Results */}
                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1 relative z-10">
                  {friendSearch.length >= 3 ? (
                    RANKING.filter(u => !u.currentUser && u.name.toLowerCase().includes(friendSearch.toLowerCase())).map((u, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-blue-800/20 hover:border-blue-600/40 transition-all">
                        <div className="w-11 h-11 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-300 font-black text-base">
                          {u.name[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-black text-white text-sm uppercase tracking-tight truncate">{u.name}</h5>
                          <p className="text-[10px] text-blue-400/50 font-bold uppercase tracking-widest">Nível {u.level} • Mestre</p>
                        </div>
                        <button
                          onClick={() => {
                            if (!user.friends.includes(u.name)) {
                              setUser(prev => ({ ...prev, friends: [...prev.friends, u.name] }));
                            }
                            setShowAddFriend(false);
                            setFriendSearch('');
                            setRankingTab('friends');
                          }}
                          className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shrink-0 ${
                            user.friends.includes(u.name)
                            ? 'bg-brand-green/15 text-brand-green cursor-default border border-brand-green/20'
                            : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20 active:scale-95'
                          }`}
                        >
                          {user.friends.includes(u.name) ? 'Amigo' : 'Seguir'}
                        </button>
                      </div>
                    ))
                  ) : friendSearch.length > 0 ? (
                    <div className="py-8 text-center bg-white/3 rounded-[2rem] border border-dashed border-blue-800/30">
                       <p className="text-[10px] font-black text-blue-400/40 uppercase tracking-widest">Continue digitando...</p>
                    </div>
                  ) : (
                    <div className="py-10 text-center bg-white/3 rounded-[2rem] border border-dashed border-blue-800/20">
                       <Users size={28} className="text-blue-400/20 mx-auto mb-3" />
                       <p className="text-[10px] font-black text-blue-400/30 uppercase tracking-[0.15rem]">Sugestões em breve</p>
                    </div>
                  )}
                </div>
                {friendSearch.length >= 3 && RANKING.filter(u => !u.currentUser && u.name.toLowerCase().includes(friendSearch.toLowerCase())).length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-slate-500 text-sm font-bold">Nenhum usuário encontrado.</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[200] bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-3 border border-white/10"
            >
              <Check size={16} className="text-brand-green" strokeWidth={4} />
              Link copiado com sucesso!
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Navigation (Mobile) */}
      {view !== 'quiz' && (
        <nav className={`fixed bottom-0 left-0 right-0 backdrop-blur-xl border-t px-6 py-4 flex justify-around md:hidden z-40 ${
          view === 'ranking' || view === 'progress' || view === 'revision'
            ? 'bg-[#1a1a18]/95 border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]'
            : 'bg-white/80 border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]'
        }`}>
          {[
            { id: 'home', icon: <LayoutDashboard size={24} />, label: 'Início' },
            { id: 'home-quiz', icon: <BookOpen size={24} />, label: 'Questões', onClick: () => startQuiz() },
            { id: 'progress', icon: <BarChart3 size={24} />, label: 'Progresso' },
            { id: 'ranking', icon: <Trophy size={24} />, label: 'Liga' },
            { id: 'profile', icon: <User size={24} />, label: 'Perfil' }
          ].map((item) => {
            const isActive = item.id !== 'home-quiz' && view === item.id;
            const isDark = view === 'ranking' || view === 'progress' || view === 'revision';
            return (
              <button
                key={item.id}
                onClick={item.onClick || (() => setView(item.id as any))}
                className={`flex flex-col items-center gap-1.5 transition-all relative ${
                  isActive ? 'text-brand-primary' : isDark ? 'text-neutral-500' : 'text-slate-400'
                }`}
              >
                {isActive && (
                  <motion.div layoutId="nav-bg" className={`absolute -inset-2 rounded-xl ${isDark ? 'bg-white/5' : 'bg-brand-primary/5'}`} />
                )}
                <div className="relative">{item.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest relative">{item.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
