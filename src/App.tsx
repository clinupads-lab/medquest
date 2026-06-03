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

type Cycle = 'Ciclo Básico' | 'Ciclo Clínico' | 'Internato';

type Subject = 
  | 'Anatomia' | 'Fisiologia' | 'Bioquímica' | 'Histologia' | 'Embriologia' | 'Microbiologia' | 'Imunologia' | 'Genética' | 'Farmacologia'
  | 'Clínica Médica' | 'Clínica Cirúrgica' | 'Ginecologia & Obstetrícia' | 'Pediatria' | 'Psiquiatria' | 'Dermatologia' | 'Oftalmologia' | 'Otorrinolaringologia' | 'Medicina de Família/SUS'
  | 'Cardiologia' | 'Neurologia' | 'Pneumologia' | 'Gastroenterologia' | 'Endocrinologia' | 'Nefrologia' | 'Reumatologia' | 'Hematologia' | 'Infectologia' | 'Cirurgia Geral'
  | 'Urgência e Emergência' | 'Medicina Intensiva' | 'Ortopedia' | 'Neonatologia' | 'Anestesiologia' | 'Traumatologia-Ortopedia'
  | 'Patologia' | 'Parasitologia' | 'Semiologia' | 'Epidemiologia'
  | 'Urologia' | 'Geriatria' | 'Radiologia'
  | 'Cirurgia Vascular' | 'Neurocirurgia';

interface Question {
  id: string;
  cycle: Cycle;
  subject: Subject;
  subSubject?: string;
  banca?: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
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
    // Com questões
    'Anatomia': [],
    'Fisiologia': [],
    'Bioquímica': [],
    'Histologia': [],
    'Embriologia': [],
    'Microbiologia': [],
    'Imunologia': [],
    'Genética': [],
    'Farmacologia': [],
    // Em breve
    'Patologia': [],
    'Parasitologia': [],
    'Semiologia': [],
    'Epidemiologia': []
  },
  'Ciclo Clínico': {
    // Grandes blocos (≥20 questões)
    'Ginecologia & Obstetrícia': [],
    'Pediatria': [],
    'Medicina de Família/SUS': [],
    'Cirurgia Geral': [],
    // Especialidades com questões
    'Cardiologia': [],
    'Pneumologia': [],
    'Gastroenterologia': [],
    'Infectologia': [],
    'Endocrinologia': [],
    'Clínica Médica': [],
    'Clínica Cirúrgica': [],
    'Psiquiatria': [],
    'Reumatologia': [],
    'Nefrologia': [],
    // Em breve
    'Neurologia': [],
    'Hematologia': [],
    'Dermatologia': [],
    'Oftalmologia': [],
    'Otorrinolaringologia': [],
    'Ortopedia': [],
    'Urologia': [],
    'Geriatria': [],
    'Radiologia': []
  },
  'Internato': {
    'Urgência e Emergência': [],
    'Medicina Intensiva': [],
    'Anestesiologia': [],
    'Neonatologia': [],
    'Traumatologia-Ortopedia': [],
    'Cirurgia Vascular': [],
    'Neurocirurgia': []
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
    subject: 'Endocrinologia',
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
    subject: 'Cardiologia',
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
    subject: 'Gastroenterologia',
    text: 'Qual a conduta inicial prioritária em um paciente com hemorragia digestiva alta varicosa?',
    options: [
      'Endoscopia digestiva imediata',
      'Estabilização hemodinâmica e cristaloides',
      'Administração de omeprazol EV em bolus',
      'Passagem de sonda de Sengstaken-Blakemore'
    ],
    correctIndex: 1,
    explanation: 'O primeiro passo em qualquer sangramento agudo é a estabilização hemodinâmica (Protocolo ABC).'
  },
  {
    id: 'cermam25_01',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Qual é o principal fator que define uma Emergência Hipertensiva de acordo com as diretrizes brasileiras que deve estar associado a definição arbitrária da PAS >= 180mmHg e/ou PAD >=110mmhg ou até mesmo com valores menores?',
    options: [
      'O valor da Pressão Arterial somente.',
      'A gravidade dos sintomas associados, como cefaleia intensa ou tontura.',
      'A necessidade de tratamento imediato com medicação venosa.',
      'Situações clínicas sintomáticas com Lesões de órgão alvo aguda e progressiva.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_02',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Homem de 58 anos, hipertenso e tabagista, chega ao pronto-socorro com dor torácica em aperto há 40 minutos, irradiando para o braço esquerdo e mandíbula. ECG mostra supradesnivelamento de ST em DII, DIII e aVF. Qual é a conduta inicial imediata mais indicada?',
    options: [
      'Administrar morfina, oxigênio, nitrato e betabloqueador.',
      'Iniciar fibrinólise imediata se não houver acesso a angioplastia em até 120 minutos.',
      'Solicitar troponina antes de qualquer intervenção.',
      'Aguardar evolução clínica nas próximas horas.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_03',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente de 76 anos, sexo masculino, com histórico de HAS e Diabetes Mellitus tipo 2 e Insuficiência Cardíaca com FEVE 35%, apresenta Fibrilação Atrial (FA) persistente. Qual a conduta antitrombótica recomendada para uso ambulatorial, baseada no escore CHA2DS2-VASc?',
    options: [
      'Primeira linha a anticoagulação com Antagonista da Vitamina K (Varfarina) com INR alvo entre 2,5 e 3,5.',
      'Apenas AAS (100mg/dia), pois a FEVE de 40% não configura alto risco de eventos.',
      'Anticoagulação Oral (ACO) com DOACs (anticoagulantes orais diretos), se não houver contraindicações.',
      'Anticoagulação com Heparina de Baixo Peso Molecular (HBPM), por se tratar de um paciente com alto risco de sangramento.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_04',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: 'Qual dos seguintes achados é mais característico do hipertireoidismo por Doença de Graves?',
    options: [
      'Exoftalmia.',
      'Bradicardia.',
      'Mixedema.',
      'Hiponatremia.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_05',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: 'Uma paciente de 42 anos, IMC 35 kg/m², sem comorbidades aparentes, procura atendimento para manejo da obesidade. Após avaliação multiprofissional, decide-se iniciar terapia farmacológica. Segundo diretrizes atuais, qual das seguintes opções é CORRETA com relação ao tratamento medicamentoso da obesidade?',
    options: [
      'Medicamentos antiobesidade devem ser iniciados apenas em pacientes com IMC ≥ 40 kg/m², independentemente de comorbidades.',
      'O uso de análogos de GLP-1 pode ser considerado em pacientes com IMC ≥ 30 kg/m², mesmo sem comorbidades, quando associado a mudanças de estilo de vida.',
      'A sibutramina é considerada primeira linha em todos os pacientes com obesidade devido à sua segurança cardiovascular.',
      'O tratamento farmacológico substitui a necessidade de acompanhamento nutricional e atividade física estruturada.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_06',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: 'Paciente com diabetes mellitus tipo 2 e HbA1c 9,8% após metformina em dose máxima. Próxima medida mais indicada:',
    options: [
      'Continuar apenas com metformina e reavaliar em 6 meses.',
      'Não tratar, orientar dieta apenas.',
      'Suspender metformina e iniciar sulfonilureia exclusiva.',
      'Adicionar segunda droga — considerar insulina ou agente hipoglicemiante injetável/oral conforme perfil.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_07',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Qual é a conduta profilática secundária de primeira linha para prevenir o ressangramento em pacientes cirróticos com hemorragia digestiva alta HDA por varizes esofágicas?',
    options: [
      'Combinação de Betabloqueador Não Seletivo (Propranolol ou Carvedilol) e Ligadura Elástica de Varizes Esofágicas (LEVE).',
      'Inibidor de Bomba de Prótons (IBP) em alta dose (ex: Omeprazol 40 mg de 12/12h).',
      'Apenas Antibiótico Profilático (ex: Ceftriaxona) por 7 dias.',
      'Derivação Portossistêmica Intra-Hepática Transjugular (TIPS), como tratamento de primeira linha.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_08',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Homem de 49 anos com cirrose alcoólica descompensada (ascite, encefalopatia). Nesse caso, qual marcador tem maior valor prognóstico?',
    options: [
      'TGO/TGP.',
      'Bilirrubina total.',
      'Escore MELD-Na.',
      'GGT.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_09',
    cycle: 'Ciclo Clínico',
    subject: 'Geriatria',
    text: 'Qual das seguintes condições é considerada um componente fundamental do conceito de Fragilidade ou Síndrome da Fragilidade no idoso Critérios de Fried?',
    options: [
      'Depressão e Isolamento Social.',
      'Incontinência Urinária e Constipação Intestinal.',
      'Perda de Peso Não Intencional (≥4,5kg ou ≥5% no último ano).',
      'Presença de Diabetes Mellitus e Hipertensão Arterial. – 2025/2026_1',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_10',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    text: 'Segundo a Associação Brasileira de Hematologia, Hemoterapia e Terapia Celular (ABHH) no Consenso PBM-ABHH e no Guia para o uso de hemocomponentes do Ministério da Saúde, em circunstâncias clínicas em que não há sangramento ativo grave, qual das alternativas abaixo reflete a prática recomendada para a transfusão de concentrado de hemácias?',
    options: [
      'Transfundir concentrado de hemácias em qualquer paciente com hemoglobina < 9 g/dL, independentemente de sintomas ou contexto clínico.',
      'Utilizar o valor de hemoglobina sozinho como critério absoluto de transfusão, ignorando a estabilidade hemodinâmica e sintomas do paciente.',
      'Evitar transfundir concentrado de hemácias mesmo em pacientes sintomáticos com hemoglobina < 7 g/dL se não houver sangramento visível.',
      'Avaliar o paciente considerando hemoglobina, quadro clínico, sintomas de hipoxia ou instabilidade hemodinâmica, e priorizar a estratégia de transfusão orientada por paciente ( Patient-Blood-Management /PBM).',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_11',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'Paciente com HIV (CD4 = 38) evolui com perda visual bilateral progressiva. Fundoscopia mostra lesões algodonosas e hemorragias em chama de vela. Sobre o caso, assinale a VERDADEIRA :',
    options: [
      'É típico de retinite por Toxoplasma gondii.',
      'O tratamento de escolha é o ganciclovir.',
      'A profilaxia primária é indicada com TMP-SMX.',
      'O agente mais provável é Candida albicans .',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_12',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'Sobre sepse e choque séptico, analise as afirmações a seguir: I. O aumento de lactato é marcador de hipoperfusão tecidual. II. A noradrenalina é o vasopressor de primeira escolha. III. O uso de antibiótico pode ser postergado até o resultado da cultura. IV. A reposição volêmica inicial recomendada é de 30 mL/kg. Assinale a alternativa correta:',
    options: [
      'Somente as afirmativas I, II e IV estão corretas.',
      'Somente as afirmativas I e II estão corretas.',
      'Todas as afirmativas estão corretas.',
      'Nenhuma das afirmativas está correta.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_13',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    text: 'Um homem de 42 anos é encontrado inconsciente após ingerir bebida alcoólica artesanal de origem duvidosa. No pronto-socorro, apresenta taquipneia, confusão mental e visão borrada. O exame físico mostra hipotensão leve, respiração de Kussmaul e dor abdominal difusa. A gasometria revela: pH = 7,05; HCO ₃⁻ = 8 mEq/L; pCO ₂ = 22 mmHg; lactato = 3 mmol/L; Ânion Gap 20. Com base nas informações acima, qual é a conduta inicial mais adequada?',
    options: [
      'Administrar glicose e tiamina para prevenir encefalopatia de Wernicke.',
      'Realizar lavagem gástrica e administrar carvão ativado.',
      'Iniciar bicarbonato de sódio, fomepizol e considerar hemodiálise.',
      'Administrar naloxona e flumazenil para reversão medicamentosa.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_14',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: 'De acordo com a Diretriz Brasileira para Diagnóstico e Tratamento Clínico da Nefrolitíase (SBN, 2024– 2025), qual das condutas abaixo está CORRETAMENTE indicada para a prevenção de recorrência de cálculos renais de oxalato de cálcio?',
    options: [
      'Restringir de forma rigorosa a ingestão de cálcio dietético para reduzir a excreção urinária de cálcio.',
      'Incentivar hidratação adequada com meta de diurese superior a 2,0–2,5 litros por dia, visando reduzir a supersaturação urinária de sais litogênicos.',
      'Reduzir a ingestão de frutas cítricas, uma vez que aumentam a excreção urinária de oxalato.',
      'Utilizar diuréticos de alça de forma rotineira para todos os pacientes com hipercalciúria, independentemente de avaliação metabólica prévia.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_15',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: 'Um paciente de 68 anos, hipertenso e diabético, é internado por pneumonia comunitária grave. No terceiro dia de internação, apresenta queda da diurese e elevação da creatinina sérica de 1,0 mg/dL para 2,1 mg/dL em 48 horas. Ao exame, está levemente hipotenso e com turgor diminuído. Sódio urinário: 8 mEq/L; fração de excreção de sódio (FENa): 0,4%; osmolaridade urinária: 520 mOsm/kg. Qual é o diagnóstico e a conduta inicial mais adequados?',
    options: [
      'Lesão renal aguda intrínseca; iniciar furosemida para estimular diurese.',
      'Lesão renal aguda intrínseca; iniciar antibiótico nefrotóxico ajustado à função renal.',
      'Lesão renal aguda pós-renal; solicitar ultrassonografia para avaliar hidronefrose.',
      'Lesão renal aguda pré-renal; otimizar volemia com cristaloides isotônicos.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_17',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    text: 'A epilepsia é considerada refratária quando:',
    options: [
      'As crises são diárias e não melhoram com uso de pelo menos três medicações antiepilépticas em doses apropriadas.',
      'As crises não melhoram com pelo menos quatro medicações antiepilépticas em doses apropriadas.',
      'As crises não melhoram com pelo menos duas medicações antiepilépticas em doses apropriadas.',
      'As crises são diárias e não melhoram com pelo menos cinco medicações antiepilépticas em doses apropriadas.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_18',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    text: 'Paciente de 68 anos apresenta sintomas de Acidente Vascular Cerebral Isquêmico (AVCI) há 2horas. Tomografia de Crânio (TC) sem sinais de hemorragia. Qual o principal critério de inclusão para trombólise endovenosa com Alteplase(t-PA)?',
    options: [
      'Janela terapêutica de até 6 horas do início dos sintomas.',
      'Início claro dos sintomas de AVCI isquêmico há ≤4,5horas.',
      'Pontuação na escala NIHSS igual ou superior a 20.',
      'Ausência de hipodensidade em mais de 1/3 do território da artéria cerebral média (sinal da insula).',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_19',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    text: 'Homem de 19 anos é trazido à emergência após postar nas redes sociais que iria \'dar fim à própria vida\'. Relata sentimento de desesperança, mas nega ter tentado o suicídio. A conduta imediata mais adequada é:',
    options: [
      'Liberar com orientação familiar.',
      'Prescrever antidepressivo e agendar retorno.',
      'Manter em observação e aguardar avaliação psiquiátrica antes de dar alta.',
      'Solicitar exames toxicológicos e alta médica.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_20',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    text: 'Homem de 32 anos, em uso de haloperidol 10 mg/dia por esquizofrenia, chega à UPA com rigidez muscular intensa, febre de 39°C e confusão mental. PA: 150 × 90 mmHg, FC: 120 bpm. Qual é a conduta inicial mais adequada?',
    options: [
      'Aumentar a dose do antipsicótico.',
      'Administrar prometazina IM e observar.',
      'Suspender o antipsicótico e iniciar dantrolene e suporte clínico.',
      'Iniciar biperideno e manter haloperidol.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_21',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo masculino, 48 anos, é atendido no pronto atendimento com quadro de dor epigástrica, tipo cólica, que migrou para a FID há cerca de 7 dias. Havia tido diagnóstico prévio de infecção do trato urinário e estava em tratamento domiciliar com antibióticos orais e sintomáticos, porém o quadro evoluiu com febre e vômitos e decidiu buscar uma nova reavaliação. No momento o paciente se encontra em BEG, febril (38 o C), FR: 20irpm, FC: 80bpm. P.A.: 120x80mmHg. Seu abdome é plano, flácido, com abaulamento doloroso à palpação em FID. Sua avaliação laboratorial evidenciou leucograma com 16.000 e desvio à esquerda e PCR: 120mg/dl. Foi submetido a tomografia computadorizada que evidenciou apêndice cecal de paredes espessadas e perfurado, espessamento de ceco e coleção líquida adjacente de cerca de 6cm, bloqueada. Sobre o caso acima, assinale a alternativa CORRETA :',
    options: [
      'A conduta de escolha para o caso neste momento é a laparotomia exploradora imediata devido a risco iminente de peritonite e sepse grave.',
      'Caso haja janela disponível para punção, o tratamento não operatório com drenagem guiada por ultrassom ou tomografia, associado a antibioticoterapia, pode ser bastante efetivo para o caso.',
      'Na hipótese de o tratamento conservador ser bem sucedido, não há indicação para abordagem cirúrgica eletiva posterior, uma vez que os índices de recorrência após abscesso são baixos.',
      'A laparoscopia é contraindicada para o caso, uma vez que provavelmente haverá indicação de colectomia direita em ambiente infectado.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_22',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo masculino, 62 anos, sem comorbidades, é transferido de hospital do Interior do Estado para avaliação de quadro de dor abdominal há 5 dias. Paciente refere que apresentou dor tipo cólica, em FIE, com aumento progressivo de intensidade, associada a astenia, náuseas, vômitos e constipação. Fez uso de sintomáticos no domicílio, mas percebeu piora do quadro após 3 dias, com piora da dor e início de febre, procurando assistência médica, sendo internado para antibioticoterapia e transferido para Manaus. Neste momento, seu exame físico evidencia BEG, lúcido e orientado, FC: 98bpm, FR: 26irpm, P.A.: 120x80mHg. Seu abdome é globoso, algo distendido, doloroso à palpação em FIE e hipogástrio, com sinais claros de irritação peritoneal. Leucograma: 22.000 com 96% de neutrófilos. PCR: 150mg/dl. Foi submetido a tomografia de abdome que revelou presença de divertículos em sigmoide e quadro agudo compatível com Hinchey Modificado classe III/IV. Sobre o caso acima, assinale a alternativa INCORRETA :',
    options: [
      'A associação de piperacilina e tazobactam é escolha adequada como parte do tratamento empírico inicial deste paciente, porém a antibioticoterapia deve ser reavaliada após o resultado das culturas.',
      'O quadro de peritonite presente indica tratamento cirúrgico urgente, preferencialmente laparoscópico, no qual a sigmoidectomia e – 2025/2026_1',
      'Em caso de evolução para instabilidade hemodinâmica associada a achado cirúrgico de peritonite fecal, o manejo inicial com damage control , curativo à vácuo e terapia intensiva, com posterior reabordagem para anastomose primária, seria conduta adequada para o caso.',
      'Uma vez que se trata de cirurgia infectada, com elevada morbimortalidade e alto risco de deiscência de anastomose, o procedimento de Hartmann é a conduta inicial de escolha para o caso neste momento.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_23',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Paciente do sexo masculino, 42 anos, com história de abuso crônico de álcool, é levado pela família para avaliação médica devido a quadro de emagrecimento e distensão abdominal, sem demais queixas. O paciente refere estar em tratamento para o alcoolismo e pretende cuidar da sua saúde. Ao exame físico, o paciente se apresenta emagrecido, porém em BEG, lúcido e orientado, eupneico, afebril, anictérico e hemodinamicamente estável. Seu abdome é semigloboso, indolor à palpação, com discreta circulação colateral visível e baço palpável. Ausência de edema de membros inferiores. Traz consigo ultrassonografia que evidencia fígado de tamanho reduzido, de contorno irregular e serrilhado, de textura ecográfica heterogênea, associada a moderada ascite e esplenomegalia. Sobre o caso acima, assinale a alternativa INCORRETA :',
    options: [
      'A endoscopia digestiva alta pode revelar alterações que confirmam aumento da resistência hepática ao fluxo venoso portal, com secundário fluxo hepatofugal para o território esplâncnico, principalmente pela drenagem venosa do estômago.',
      'O hemograma pode revelar alterações que sugerem hiperesplenismo e testes como o TAP e o INR podem sugerir algum grau de insuficiência funcional hepática.',
      'A presença de ascite, associada ao emagrecimento, é altamente sugestiva de trombose portal aguda e a ultrassonografia com doppler é o exame de imagem de maior sensibilidade diagnóstica para o caso.',
      'O tratamento do alcoolismo, o uso de drogas beta-bloqueadoras e a vigilância com endoscopia digestiva alta devem fazer parte do tratamento deste paciente.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_24',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo feminino, 72 anos, hipertensa, diabética e cardiopata, é trazida por familiares em serviço de pronto socorro com quadro de dor tipo cólica, aguda, em HD, irradiada para o dorso, associada a vômitos, há 2 dias (SIC). As informações colhidas podem não ser precisas, uma vez que a paciente tem sequelas de AVC isquêmico há 5 anos e se expressa com dificuldade. Ao exame físico, a paciente se apresenta emagrecida, desidratada, anictérica, FC: 82bpm, FR: 22irpm, P.A.: 100x70mmHg. A paciente apresenta fascies de dor à palpação profunda do HD e há a impressão de palpação de plastrão local. Leucograma: 11.000 e PCR: 80mg/dl. Submetida a USG à beira leito, observou- se vesícula biliar túrgida, de paredes espessadas, contendo cálculos. Após discussão do caso com a Clínica Médica, optou-se por iniciar tratamento clínico com ceftriaxona, metronidazol e sintomáticos. Após 48 horas, a paciente evoluiu de forma insatisfatória, apresentando sonolência e oligúria, mantendo dor em HD, com plastrão palpável e iniciando febre baixa (1 episódio). A reavaliação laboratorial evidenciou piora da leucocitose (agora 14.000), plaquetas 80.000 e PCR de 120mg/dl. Uma nova USG à beira leito evidenciou discreta infiltração de gás na parede da vesícula biliar. Sobre o caso acima, assinale a alternativa CORRETA :',
    options: [
      'Devido ao grau de fragilidade desta paciente, a melhor conduta é transferência da paciente para UTI, escalonamento do antibiótico para cefepime e reavaliação ultrassonográfica em 48 horas.',
      'A conduta inicial foi inadequada, estando indicada a colecistectomia laparoscópica urgente no momento da chegada da paciente.',
      'Uma vez que a piora do quadro denota gravidade Tóquio III com potencial evolução para perfuração, a conduta mais adequada neste momento é a colecistostomia percutânea trans-hepática.',
      'Caso a tomografia computadorizada com contraste venoso confirmar os achados ultrassonográficos, a colecistectomia por laparotomia é a conduta mais adequada neste momento.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_25',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo feminino, 72 anos, dá entrada no pronto socorro queixando sangramento vermelho vivo durante as defecações há cerca de 2 dias. O quadro iniciou com hematoquezia e no momento a paciente apresentou uma média de 5 episódios de enterorragia e episódio de síncope no domicílio. A paciente é hipertensa e faz uso de AAS e clopidogrel. Refere que foi submetida a colonoscopia para rastreio de neoplasia de cólon há 2 anos que evidenciou apenas presença de divertículos no sigmoide. Nega dor abdominal e alteração significativa do hábito alimentar recentemente. Ao exame físico, a paciente se encontra pálida ++/4, lúcida e orientada, FC: 100bpm, FR: 27irpm e P.A.: 110x70mmHg. Seu abdome é plano, flácido, simétrico e indolor à palpação, sem massas palpáveis. Toque retal sem alterações, exceto por sangue em dedo de luva. Seu hemograma revelou Hb: 8mg/dl e contagem de plaquetas: 90.000/ μ L. Sobre o caso, assinale a alternativa INCORRETA :',
    options: [
      'Os dados acima nos permitem afirmar que a paciente é considerada de alto risco para – 2025/2026_1',
      'A conduta inicial consiste na otimização da frequência cardíaca e pressão arterial através de ressuscitação volêmica com cristalóides, manutenção do AAS e suspensão do clopidogrel, no entanto, sem indicação de transfusão de concentrado de hemácias ou plaquetas neste momento.',
      'A angiotomografia computadorizada pode estar indicada para o caso na tentativa de delimitar o segmento sangrante ou definir a rede vascular do cólon, porém há indicação de colonoscopia o mais breve possível, pelo seu caráter diagnóstico e potencialmente terapêutico.',
      'No caso de a colonoscopia não ser acessível e a angiotomografia definir o sítio de sangramento, a melhor conduta para esta paciente seria a colectomia segmentar.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_26',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Você é chamado para avaliar um paciente na enfermaria da clínica médica, sob o diagnóstico de pancreatite aguda biliar. O paciente tem história de dor contínua, em barra, intensa, associado a vômitos e sinais de hipovolemia iniciado há cerca de 3 semanas, evoluindo com choque refratário às condutas iniciais e insuficiência renal, sendo encaminhado a UTI. Ao fim da primeira semana, obteve estabilização do status hemodinâmico e melhora dos níveis séricos das escórias nitrogenadas, no entanto mantinha dor epigástrica irradiada para o dorso, náuseas e vômitos ocasionais e baixa tolerância a alimentação pela via oral. O tratamento clínico de suporte foi mantido, iniciada dieta enteral e realizada tomografia computadorizada que evidenciou necrose de 30 a 50% do pâncreas e coleção fluida retroperitoneal peripancreática. Neste momento, após 3 semanas de tratamento, o paciente encontra-se hemodinamicamente estável, com função renal normal, ausência de febre, dor controlável sem morfina e aceitando dieta oral. Sua tomografia de controle evidencia organização da coleção peripancreática e manutenção do grau de necrose pancreática. Sobre os próximos passos da conduta desta paciente, assinale a alternativa CORRETA :',
    options: [
      'A conduta adequada tanto para a coleção fluida quanto para a necrose pancreática é a expectante, sem uso de antibióticos, uma vez que há boa probabilidade de organização das lesões e sua resolução espontânea.',
      'Uma vez que a paciente está devidamente estável e com baixo risco cirúrgico, a melhor conduta neste momento é a necrosectomia laparoscópica com drenagem da coleção fluida.',
      'A decisão entre tratamento cirúrgico e tratamento clínico depende de punção percutânea da coleção ou da necrose para bacterioscopia e cultura.',
      'O potencial para infecção da coleção fluida, neste momento, é crescente, justificando tratamento empírico com antibióticos até a resolução completa das complicações locais.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_27',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo masculino, obeso, 58 anos, apresenta quadro de dor tipo cólica em HD, irradiada para o dorso, associada a náuseas e vômitos, após ingesta de alimento rico em gordura. Traz consigo USG de abdome, realizada há 1 ano, que evidencia vesícula biliar contendo cálculos. Está internado há 3 dias, sob tratamento clínico e evoluiu neste período com presença de icterícia. No momento o paciente se encontra em BEG, lúcido e orientado, eupneico, afebril e normotenso. Seu abdome é plano, flácido, pouco doloroso à palpação profunda no HD, sem plastrão palpável. Aceita dieta oral. Sua avaliação laboratorial evidenciou leucograma com 11.000 leucócitos, PCR: 45mg/dl, bilirrubinas totais: 4,2mg/dl, bilirrubina direta: 3.4mg/dl, fosfatase alcalina: 250mg/dl e gamaGT: 380mg/dl. Sobre o caso, assinale a alternativa CORRETA:',
    options: [
      'Caso a ultrassonografia de controle evidencie dilatação da via biliar principal, o próximo passo seria a tomografia com contraste venoso devido a sua ótima sensibilidade e especificidade para avaliação de complicações no colédoco distal.',
      'Já que o paciente não apresenta critérios de risco para obstrução de via biliar, a melhor conduta para o caso é a colecistectomia laparoscópica sem colangiografia intra- operatória e seguimento ambulatorial da icterícia.',
      'Caso a ultrassonografia de controle evidencie dilatação das vias biliares, uma opção bastante adequada é a realização de abordagem endoscópica com ultrassom endoscópica e possível CPRE, sem necessidade de investigação prévia com ressonância magnética.',
      'A emergente técnica de exploração endoscópica da via biliar concomitante com colecistectomia laparoscópica no mesmo tempo anestésico foi abandonada devido à elevada incidência de pancreatite pós CPRE nesses casos.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_28',
    cycle: 'Ciclo Clínico',
    subject: 'Urologia',
    text: 'Paciente do sexo masculino, 16 anos de idade, vem ao pronto socorro queixando dor ínguino-escrotal, contínua, intensa, de início súbito logo após esforço físico, há cerca 2 horas, associada a vômitos. Ao exame físico, o paciente se encontrava em BEG, eupneico, afebril e hemodinamicamente estável. Observa-se abaulamento ínguino-escrotal à direita, irredutível, bastante doloroso à palpação, com calor e rubor local. O paciente refere que apresenta esse tipo de abaulamento desde a infância, mas que reduzia facilmente à palpação ou durante o decúbito. Sobre o caso acima, assinale a alternativa CORRETA :',
    options: [
      'Os dados acima nos permitem afirmar que se trata de urgência cirúrgica, com provável indicação de abordagem tanto da região inguinal quanto da cavidade abdominal, podendo ser realizada por via laparoscópica.',
      'Por tratar-se de infecção aguda de partes moles, o próximo passo na conduta é o início de antibioticoterapia, investigação da extensão da – 2025/2026_1',
      'Por tratar-se de hérnia inguinal Nyhus IIIA, complicada, o uso de telas inorgânicas para a sua correção cirúrgica está contra-indicado.',
      'A melhor conduta neste momento é a analgesia com morfina, sedação do paciente e a redução do conteúdo herniário para posterior correção cirúrgica eletiva.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_29',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo feminino, 28 anos, está no terceiro trimestre de gravidez do segundo filho (o primeiro filho nasceu de parto natural há 4 anos), busca atendimento médico devido a dor anal. A paciente refere que há cerca de 1 dia, após defecação dificultada por fezes endurecidas. Nega sangramento pelo ânus. Refere constipação crônica, com evacuação de fezes endurecidas, sob esforço, 2 vezes por semana, que piorou durante a gravidez. Ao exame físico, a paciente apresenta lesão nodular em borda anal, de coloração violácea, consistência firme, localizada às 9:00, abaixo da linha pectínea, bastante dolorosa à palpação. Sobre o caso, assinale a alternativa CORRETA :',
    options: [
      'Os dados acima fecham quadro clássico de fissura anal secundária ao trauma da defecação difícil, estando indicado tratamento com pomadas a base de bloqueadores de canal de cálcio, como o diltiazem.',
      'Devido ao curto tempo de evolução, uma boa opção de tratamento é a excisão da lesão ou evacuação cirúrgica do coágulo, com melhora rápida dos sintomas e menor recorrência da doença.',
      'Os dados acima nos permitem afirmar que se trata de urgência cirúrgica, com tratamento baseado em incisão, drenagem e antibioticoterapia, devido o risco de evolução para gangrena de Fournier.',
      'Devido ao risco aumentado de neoplasia anal, a paciente deve ser submetida a biópsia ambulatorial da lesão e retossigmoidoscopia para avaliação da extensão da doença.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_30',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Paciente do sexo feminino, 15 anos, apresenta quadro de dor em FID, de início súbito, progressiva, de intensidade moderada a intensa, há cerca de 8 horas, acompanhada de náuseas e vômitos. Fez uso de sintomáticos no domicílio, sem sucesso. Menarca aos 11 anos, com ciclos irregulares. Última menstruação há 1 mês. Nega leucorreia. Ao exame físico, a paciente se encontra em BEG, normocorada, FC: 80bpm, FR: 16irpm, P.A.: 110x70mmHg. Seu abdome é plano, flácido, doloroso à palpação profunda em FID, sem sinais claros de irritação peritoneal. Foi submetida a ultrassom à beira leito que evidenciou ovário direito aumentado de volume às custas de massa cística de cerca de 8cm, deslocado para a linha média em posição retrouterina e pequena quantidade de líquido na pelve. Sobre o caso, assinale a alternativa CORRETA :',
    options: [
      'Os dados apresentados sugerem abdome agudo de tratamento clínico secundário a lesão cística ovariana, sendo indicado tratamento sintomático e encaminhamento para avaliação ginecológica ambulatorial.',
      'Os dados fornecidos são altamente sugestivos de prenhez tubária não rôta, com abordagem via laparotomia preferencial à laparoscópica neste momento.',
      'A ultrassonografia com Doppler confirmaria a necessidade urgente de abordagem cirúrgica para esta paciente.',
      'Tanto os dados da história quanto do exame físico são inespecíficos e a ultrassonografia mostra doença cística não complicada, o que sugere que o quadro deve ser secundário a apendicite aguda em fase inicial.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_31',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo masculino, 45 anos, agricultor, apresenta história de dor abdominal intensa, que iniciou subitamente no epigástrio e migrou para todo o abdome, irradiando par o pescoço e ombro esquerdo após algumas horas. Procurou o atendimento de urgência da sua comunidade rural, sendo transferido para Manaus após 9 horas de evolução. No momento se encontra em REG, com fascies de dor, afebril, taquicardico, taquipneico e normotenso. Seu abdome é difusamente tenso, doloroso à palpação superficial, com sinais claros de irritação peritoneal. Sobre o caso, assinale a alternativa INCORRETA :',
    options: [
      'A abordagem inicial inclui ressuscitação volêmica, início de antibioticoterapia empírica, inibidores de bomba de prótons e, apesar de inespecífica para a patologia em questão, avaliação laboratorial com hemograma, proteína C reativa e lactato sérico.',
      'A tomografia computadorizada tem maior sensibilidade e especificidade diagnóstica para este tipo de abdome agudo que a radiografia simples de abdome.',
      'O histórico prévio de sintomas dispépticos crônicos ou da ausência prévia de dor associado ao uso de antinflamatórios não hormonais e o aspecto macroscópico da lesão gástrica são parâmetros importantes para a indicação (ou não) de gastrectomia para tratamento do caso.',
      'O tratamento endoscópico com uso de stents ou sutura é o atual padrão ouro para este caso, devido a menor morbimortalidade e menores taxas de deiscência e sepse.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_32',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente de sexo masculino, 18 anos, é atendido em pronto-socorro, vítima de ferimento abdominal penetrante por arma de fogo em mesogástrio e HD, sendo submetido a laparotomia exploradora que evidenciou moderada quantidade de sangue livre na cavidade, lesões transfixantes no estômago e cólon transverso e 3 ferimentos no intestino delgado e no seu mesentério. Demais vísceras abdominais sem evidência de lesão. A conduta tomada foi a lavagem da cavidade e – 2025/2026_1',
    options: [
      'Caso a nova abordagem cirúrgica indique tratamento com abdome aberto, a instabilidade hemodinâmica secundária a infecção intra-abdominal complicada contraindica o curativo abdominal à vácuo como parte do tratamento deste paciente, sendo o damage control com bolsa de Bogotá a conduta preferencial neste momento.',
      'O adequado controle cirúrgico do foco infeccioso, com desbridamento de tecidos desvitalizados, novas suturas ou anastomoses e lavagem da cavidade abdominal, pode possibilitar esquemas antibióticos de curta duração, usualmente entre 4 e 5 dias.',
      'A dosagem de procalcitonina no caso acima pode guiar a duração da antibioticoterapia, uma vez que seus níveis séricos são diretamente correlacionáveis com a severidade da infecção bacteriana.',
      'Os dados acima nos permitem inferir que há provável indicação de terapia antifúngica para Candida spp.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_33',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Paciente do sexo feminino, 8 anos, é trazida pela mãe para avaliação médica devido a dor e distensão abdominal associada a vômitos, há 2 dias. A dor parece ser intermitente, tipo cólica, progressiva, de média intensidade. Refere ainda parada de eliminação de gases e fezes e que a paciente não urina há 6 horas. Ao exame físico a paciente se encontra em REG, hipoativa, com fascies de dor, taquicárdica, taquipneica e levemente hipotensa. Seu abdome se apresenta distendido, hipertimpânico, com RHA de luta, difusamente doloroso à palpação, sem sinais de irritação peritoneal, com cicatriz em FID devido a apendicectomia prévia há 2 anos. Sobre o caso, assinale a alternativa CORRETA :',
    options: [
      'A presença de cirurgia prévia sugere fortemente que a intussuscepção deve ser a principal hipótese diagnóstica, estando indicada a tentativa de redução via colonoscopia.',
      'A tomografia computadorizada com duplo contraste é bastante útil nestes casos, uma vez que o contraste venoso auxilia no diagnóstico da patologia em questão e suas possíveis complicações, e o contraste oral solúvel em água pode ser terapêutico ou preditivo da falha do tratamento conservador.',
      'A sondagem nasogástrica é contraindicada neste caso devido a relevante aumento na incidência de broncoaspiração de secreções em crianças.',
      'A evolução progressiva do quadro sugere a necessidade de laparotomia imediata pelo elevado risco iminente de isquemia intestinal, confirmável com a radiografia simples de abdome.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_34',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    text: 'Paciente do sexo feminino, 10 anos, é trazida ao hospital pelos familiares devido a extensa queimadura por incêndio no seu domicílio. Há relato de a paciente ter ficado presa em ambiente fechado durante o acidente. A paciente apresenta queimadura de face, tórax e abdome anterior, face anterior do ombro e braço esquerdo e ambas as pernas, circunferencialmente. Durante a avaliação da face, você observa queimadura das sobrancelhas e vibices nasais, além de hiperemia e edema de lábios, língua e hipofaringe. A paciente apresenta desconforto respiratório, sialorreia e dificuldade para deglutir. A paciente se encontra confusa, pouco cooperativa, queixando dor e náuseas, com FC: 110bpm, FR: 26irpm e P.A.: 100x50mmHg. Sobre as condutas iniciais para esta paciente, assinale a alternativa INCORRETA :',
    options: [
      'Os dados acima nos permitem afirmar que há grande risco para injúria inalatória do tipo I, cujas consequências podem ser potencializadas pela ressuscitação volêmica para esta paciente, podendo indicar avaliação com laringoscopia flexível seguida de provável aquisição de via aérea definitiva.',
      'Caso a avaliação laboratorial deste paciente evidenciar significativa acidose metabólica e hiperlactatemia mesmo após a ressuscitação volêmica inicial, as condutas devem incluir dosagem de carboxihemoglobina, terapia com O 2 a 100% e administração de hidroxicobalamina endovenosa.',
      'A melhor estratégia para reposição volêmica desta paciente é iniciar administração de solução salina via oral ou por sonda nasogástrica, seguida de cálculo do volume de hidratação para 24 horas segundo a fórmula- consenso da Associação Americana de Queimados, infundido em cateter central, preferencialmente puncionado em área não queimada.',
      'Os dados acima nos permitem inferir que haverá indicação de administração precoce de coloides como parte da estratégia de ressuscitação volêmica desta paciente. – 2025/2026_1',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_35',
    cycle: 'Internato',
    subject: 'Cirurgia Vascular',
    text: 'Paciente do sexo masculino, 75 anos, tabagista, hipertenso e diabético, apresenta quadro de dor abdominal de início súbito, bastante intensa, rapidamente progressiva, no mesogástrio, há 2 horas, seguido de episódios de vômito. Nega febre, diarréia e sintomas urinários. Sua esposa refere que há alguns meses o paciente sente dor mesogástrica semelhante, mas de leve intensidade, algumas horas após as refeições, o que fez com que o paciente perdesse peso. Ao exame físico, o paciente se encontra emagrecido, com fascies de dor, taquicárdico, taquipneico e normotenso. Apesar da queixa de dor intensa, seu abdome é plano, flácido à palpação, sem sinais de irritação peritoneal. Sobre a avaliação e conduta deste paciente, assinale a alternativa CORRETA :',
    options: [
      'Elevações dos níveis séricos do lactato de d- dímero elevados mais de 3 vezes fecham o diagnóstico de trombose portal, indicando terapia anticoagulante com heparina.',
      'O uso de contraste venoso durante a avaliação tomográfica deste paciente está contra- indicado devido ao elevado risco de evolução para insuficiência renal aguda.',
      'A observação de diminuição do fluxo vascular da parede das alças intestinais, pneumatose e presença de gás na veia porta à ultrassonografia com doppler fecha o diagnóstico precoce de embolia mesentérica e indica laparotomia urgente.',
      'O quadro clínico descrito é compatível com trombose da artéria mesentérica superior e seu tratamento de escolha deve envolver a associação do tratamento endovascular com a laparotomia exploradora.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_36',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Você é chamado para avaliar um paciente idoso e emagrecido na enfermaria da Clínica Médica, acamado por sequela de AVC prévio e internado para tratamento de uma pneumonia. Durante a visita de rotina, a enfermagem identificou uma lesão na região sacral e solicitou seu parecer. Ao exame físico, observa-se área ulcerada superficial, de cerca de 5cm de diâmetro, com perda parcial da pele e exposição da derme, de coloração rosada, com pouca umidade, sem presença de tecido desvitalizado. Não há flutuação, drenagem de secreção ou odor fétido. Não há exposição de tecidos profundos. A borda da lesão é bem definida e a pele ao redor está íntegra e sem sinais flogísticos. Sobre o caso, assinale a alternativa INCORRETA :',
    options: [
      'Devido a proximidade com o ânus e provável contaminação fecal, podemos afirmar que se trata de ferida infectada, sendo indicado a antibioticoterapia com cobertura para flora polimicrobiana e reavaliação da lesão em 48 a 72 horas.',
      'Os dados descritos nos permitem inferir que houve falha nas condutas preventivas deste tipo de lesão, tais como o uso de colchões tipo “casca de ovo” e a mudança de decúbito de horário.',
      'O ferimento ocorreu devido a pressão que o osso sacro exerce nos tecidos moles adjacentes em contato com o leito, levando a isquemia e perda da pele.',
      'Fazem parte do tratamento deste paciente o desbridamento não cirúrgico do tecido desvitalizado, suporte nutricional adequado e uso de agentes tópicos a base de hidrogel.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_37',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    text: 'Um homem de 28 anos é trazido ao pronto-socorro após ferimento penetrante por arma branca na face medial da coxa direita durante assalto. Ele chega carregado por terceiros, sem imobilização, visivelmente pálido e agitado. Na admissão, apresenta com pele fria e pegajosa, FC 148 bpm, P.A. não mensurável no braço direito; 70×40 mmHg no braço esquerdo, tempo de enchimento capilar > 4 segundos, FR 32 irpm e SpO ₂ 90% em ar ambiente. O ferimento apresenta sangramento pulsátil ativo, encharcando roupas e macas. O paciente está consciente, porém confuso e sonolento, repetindo que “não consegue respirar direito”. A equipe de plantão prepara material para intubação orotraqueal imediata, considerando a taquipneia e a instabilidade hemodinâmica. Sobre o caso descrito, qual deve ser a próxima conduta?',
    options: [
      'Proceder à intubação orotraqueal imediata para estabilização da via aérea e controle da ventilação, antes de manejar o sangramento.',
      'Realizar acesso venoso calibroso bilateral, iniciar infusão rápida de cristaloides aquecidos e só então avaliar a necessidade de torniquete ou hemostasia local.',
      'Aplicar torniquete proximal de alta pressão no membro afetado para controle imediato da hemorragia, antes de qualquer intervenção de via aérea ou ventilação.',
      'Proceder imediatamente a clampagem cirúrgica exploratória do vaso femoral em sala de trauma, sem intervenções prévias no local do PS.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_38',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    text: 'Um motociclista de 34 anos chega ao pronto- socorro após colisão frontal com automóvel. Refere que usava capacete. Ele está consciente, ansioso, diaforético e queixa-se de forte dor abdominal. Ao exame, apresenta FC: 136 bpm, PA: 88 × 50 mmHg, FR: 28 irpm, SatO ₂ 97%, pele fria e úmida. Seu abdome é distendido, doloroso difusamente. Extremidades sem deformidades. TEP > 3 segundos. Não há sinais de hemorragia externa. Foi realizado FAST na sala de trauma mostra líquido livre em fundo de saco, sem tamponamento cardíaco e sem pneumotórax. A equipe prepara 2 L de Ringer Lactato aquecido para reposição volêmica imediata. De acordo com os dados apresentados, qual deve ser a melhor conduta inicial? – 2025/2026_1',
    options: [
      'Administrar rapidamente os 2 L de cristaloide aquecido para restaurar a pressão arterial enquanto se aguarda disponibilidade de sangue.',
      'Iniciar transfusão maciça precoce com hemoderivados em proporção equilibrada (ex.: 1:1:1), priorizando controle definitivo da hemorragia, evitando grandes volumes de cristaloides.',
      'Realizar intubação orotraqueal imediata, pois a taquipneia e o choque indicam risco iminente de falência respiratória.',
      'Encaminhar o paciente diretamente para tomografia computadorizada de abdome para melhor definição da lesão, já que está hemodinamicamente instável, mas ainda consciente.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_39',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Um homem de 62 anos, tabagista há 40 anos e etilista inveterado, procura atendimento por disfagia progressiva para sólidos há 2 meses, acompanhada de perda ponderal de 6 kg. Nega dor torácica, hematêmese ou febre. Ao exame físico, o paciente se apresenta emagrecido, hidratado, sem linfonodos cervicais palpáveis, ausculta pulmonar normal, abdome sem ascite, massas ou visceromegalias. Diante do quadro clínico, o médico solicita endoscopia digestiva alta (EDA) e exames laboratoriais iniciais. A equipe discute quais exames adicionais seriam necessários, caso a endoscopia confirme lesão suspeita de neoplasia. Sobre o caso acima, é INCORRETO afirmar que:',
    options: [
      'Dentre as neoplasias que compõem os diagnósticos diferenciais do caso acima, a mais provável é o carcinoma espinocelular, doença que continua predominando em países asiáticos, respondendo por mais de 90% dos casos naqueles países.',
      'A tomografia computadorizada com contraste venoso, de tórax e abdome é suficiente para o estadiamento inicial, dispensando PET-CT, pois este não acrescenta informações relevantes na avaliação de metástases ocultas, sendo mais indicado no acompanhamento pós-operatório.',
      'A endoscopia é o primeiro exame na investigação de disfagia com perda de peso, permitindo biópsia direta e diagnóstico histológico, sendo essencial para planejar estadiamento.',
      'A ecoendoscopia (EUS) é um dos métodos mais importantes para determinar profundidade de invasão e avaliar linfonodos regionais, definindo adequadamente se o tumor é ressecável ou não.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_40',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: 'Um homem de 42 anos, previamente saudável, apresenta dor lombar esquerda súbita, intensa, em cólica, irradiada para fossa ilíaca, associada a náuseas e vômitos. Nega febre. Ao exame, está taquicárdico (FC 104 bpm), PA 135×80 mmHg, afebril, sem sinais de irritação peritoneal. Seus exames iniciais revelam hematúria +++, sem nitrito, sem leucocitúria importante no EAS, creatinina: 1,0 mg/dL e PCR normal. Foi submetido a ultrassom realizado na emergência que evidencia discreta hidronefrose esquerda, cálculo hiperecogênico no ureter proximal, sem sinais de obstrução grave ou complicação. A equipe cogita solicitar tomografia e questiona se é necessário ampliar a investigação laboratorial antes de definir a conduta. Sobre o caso descrito, qual deve ser o próximo passo na condução do caso?',
    options: [
      'Solicitar PCR seriada e hemoculturas para afastar pielonefrite oculta antes de definir conduta.',
      'Solicitar TC helicoidal sem contraste para confirmação diagnóstica e mensuração precisa do cálculo, pois é o exame de escolha após ultrassom inicial.',
      'Iniciar tamsulosina imediatamente e programar litotripsia extracorpórea (SWL) como tratamento definitivo.',
      'Optar por observação expectante com analgesia, já que cálculos ureterais proximais geralmente têm alta taxa de eliminação espontânea. GINECOLOGIA E OBSTETRÍCIA',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_41',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'De acordo com os critérios de elegibilidade da OMS (2015), o uso de métodos contraceptivos injetáveis mensais NÃO deve ser indicado em mulheres que fazem uso de:',
    options: [
      'rifampicina.',
      'lamotrigina.',
      'cetoconazol.',
      'zidovudina.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_42',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Considerando a fisiologia de um ciclo menstrual regular, o hormônio identificado pela seta na Figura, refere-se a:',
    options: [
      'FSH.',
      'Inibina A.',
      'Estradiol.',
      'Progesterona.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_43',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Paciente de 63 anos vai à consulta por sangramento vaginal, em pequena quantidade, com duração de dois dias. Nega outros episódios prévios desde a menopausa aos 53 anos. Nega uso de terapia hormonal e outras queixas. Foi solicitada ultrassonografia transvaginal que evidenciou endométrio homogêneo com 5,4 mm de espessura. Qual a conduta mais adequada nesse caso?',
    options: [
      'Indicar histerectomia por se tratar de paciente pós-menopausa.',
      'Realizar nova ultrassonografia transvaginal de controle em 6 meses.',
      'Tranquilizar a paciente, pois se trata de sangramento por atrofia.',
      'Prosseguir investigação solicitando biópsia endometrial. – 2025/2026_1',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_44',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Paciente de 30 anos, compareceu para consulta ginecológica referindo “corrimento vaginal” com prurido, sem odor, principalmente no período pré- menstrual desde a adolescência. A microscopia está representada na figura. Qual o diagnóstico e a conduta?',
    options: [
      'Vaginite por cândida - nistatina creme vaginal.',
      'Vaginose bacteriana - metronidazol gel vaginal.',
      'Vaginite descamativa - clindamicina 2% creme vaginal.',
      'Vaginose citolítica - ducha vaginal com bicarbonato de sódio.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_45',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Qual o método considerado padrão ouro no diagnóstico de pólipo endometrial?',
    options: [
      'Ultrassonografia transvaginal.',
      'Histeroscopia.',
      'Histerossonografia.',
      'Histerossalpingografia.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_46',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Paciente com sangramento uterino anormal, foi ao ginecologista com resultado de ultrassonografia transvaginal com diagnostico de mioma FIGO 0 (zero) de 18 mm. Qual o melhor método para a ressecção da lesão?',
    options: [
      'Robótica.',
      'Laparotomia.',
      'Laparoscopia.',
      'Histeroscopia.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_47',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Uma mulher vítima de violência sexual procura atendimento emergencial, mas não possui carteira vacinal e não se recorda de ter recebido vacina contra hepatite B anteriormente. Sobre a profilaxia pós-exposição ao vírus da hepatite B (VHB), qual das condutas a seguir está CORRETA , considerando a situação em que não se conhece o estado sorológico do agressor?',
    options: [
      'Administrar a imunoglobulina hiperimune nas primeiras 12 horas e programar a vacinação após 30 dias, quando já se conhecer o estado sorológico da paciente.',
      'Administrar a primeira dose da vacina contra hepatite B e aguardar resultado dos marcadores sorológicos maternos para decidir sobre a administração da imunoglobulina.',
      'Administrar a primeira dose da vacina contra hepatite B e imunoglobulina hiperimune, preferencialmente nas primeiras 12 horas após a agressão.',
      'Postergar a vacinação para após o resultado dos marcadores sorológicos maternos, mas administrar a imunoglobulina hiperimune dentro das primeiras 24 horas.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_48',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Em relação à evolução natural da sífilis adquirida, qual das afirmações abaixo está CORRETA ?',
    options: [
      'As lesões secundárias são pouco infectantes, não apresentam manifestações sistêmicas e raramente acometem mais de um órgão.',
      'A regressão espontânea do cancro duro após 1– 6 semanas indica resolução da infecção e menor risco de progressão para secundarismo.',
      'A fase latente recente dura de 3 à 6 meses após o desaparecimento das lesões secundárias e é caracterizada por ausência completa de sororreatividade.',
      'A fase latente tardia é assintomática, pode perdurar por mais de 30 anos e seu término é marcado pelo surgimento da primeira manifestação terciária.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_49',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Uma mulher de 29 anos, nuligesta, procura atendimento por dismenorreia progressiva, dispareunia profunda e dor pélvica cíclica há 18 meses. Exame físico revela sensibilidade à palpação dos ligamentos uterossacros, mas sem massas anexiais palpáveis. A paciente realizou ultrassonografia transvaginal no 14º dia do ciclo, com profissional experiente, segundo protocolo IDEA, que não identificou endometrioma ou nódulos profundos evidentes. Ela está muito ansiosa. Qual é a conduta mais adequada nesse caso?',
    options: [
      'Indicar laparoscopia diagnóstica de imediato, pois exame físico normal ou inconclusivo já constitui indicação isolada de videolaparoscopia.',
      'Iniciar tratamento mesmo sem confirmação cirúrgica ou exame de imagem, porque o manejo clínico melhora a qualidade de vida, ainda que empírico.',
      'Solicitar ressonância magnética para complementar a investigação, principalmente para pesquisa de focos profundos extra peritoneais e lesões atípicas.',
      'Repetir a ultrassonografia em fase folicular precoce, quando as condições anatômicas tendem a favorecer melhor definição de planos profundos e do compartimento posterior.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_50',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Uma paciente de 26 anos apresenta nódulo mamário único, móvel, fibroelástico, medindo 1,82 cm. A ultrassonografia evidencia lesão oval, paralela à pele, circunscrita e hipoecogênica, compatível com BI-RADS 3. Qual é a conduta mais adequada? – 2025/2026_1',
    options: [
      'Realizar acompanhamento com ultrassonografia a cada 6 meses por 2 anos, visando documentar estabilidade da lesão.',
      'Indicar core biopsy , pois toda lesão sólida palpável exige confirmação histológica imediata.',
      'Solicitar mamografia para diferenciar fibroadenoma de tumor filoide, visto que o método tem alta acurácia para tumores fibroepiteliais em pacientes jovens.',
      'Solicitar ressonância magnética para esclarecer discordância entre o exame clínico e a ultrassonografia.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_51',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Gestante sem comorbidades, na triagem do 1º trimestre, apresenta teste rápido treponêmico para sífilis (TR) reagente. Refere nunca ter recebido tratamento prévio. Qual a conduta inicial mais adequada?',
    options: [
      'Solicitar teste treponêmico convencional para confirmação.',
      'Colher VDRL para avaliar título e descartar cicatriz sorológica antes de tratar.',
      'Administrar penicilina benzatina e solicitar VDRL para seguimento.',
      'Colher simultaneamente teste treponêmico e não treponêmico para posterior definição terapêutica.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_53',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Gestante na 20ª semana, foi diagnosticada com oligodrâmnio acentuado na ultrassonografia obstétrica. Nesse caso, qual a causa provável para esse diagnóstico?',
    options: [
      'Redução da diurese fetal por rins policísticos bilaterais.',
      'Redução da deglutição de líquido amniótico por atresia de esôfago fetal.',
      'Absorção do líquido amniótico pelas alças intestinais na gastrosquise fetal.',
      'Aumento da deglutição de líquido amniótico por disrafia de coluna.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_54',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'No primeiro trimestre, o amolecimento do istmo uterino, perceptível ao exame físico, corresponde a qual sinal clássico?',
    options: [
      'Sinal de Nobile-Budin.',
      'Sinal de MacDonald.',
      'Sinal de Piskacek.',
      'Sinal de Hegar.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_55',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Primigesta, gestação gemelar, 30 anos, IMC de 31 kg/m², na 12ª semana de gestação, realizou Doppler de artéria uterina com índice de pulsatilidade no percentil 60. Qual a melhor conduta segundo o Manual da Rede Brasileira de Hipertensão e o Ministério da Saúde?',
    options: [
      'Manter vigilância pressórica e orientação nutricional, reservando AAS para gestantes com história prévia de pré-eclâmpsia e Doppler alterado.',
      'Considerar o Doppler normal (< p95), não havendo indicação de iniciar medicação profilática.',
      'Repetir o Doppler na época do exame morfológico do segundo trimestre (entre 20 –24 semanas) e, se alterado, iniciar AAS.',
      'Iniciar ácido acetilsalicílico (AAS) em baixa dose e suplementação de cálcio, independentemente do resultado do Doppler.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_56',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Gestante de 26 semanas com glicemia de jejum inicial 81 mg/dL realiza TOTG 75 g com resultados: → Jejum: 84 mg/dL → 1 h: 178 mg/dL → 2 h: 139 mg/dL. Qual o diagnóstico?',
    options: [
      'Teste é considerado normal.',
      'Intolerância à glicose.',
      'Diabetes Mellitus Gestacional',
      'Diabetes mellitus pré-gestacional.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_57',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Gestante aloimunizada, 28 semanas, sem hidropisia. Doppler da artéria cerebral média com pico de velocidade sistólica= 1,65 MoM. De acordo com o MS, qual é a conduta CORRETA ?',
    options: [
      'Indicar parto cesáreo.',
      'Repetir o Doppler em 7 dias.',
      'Indicar cordocentese para Hb/Ht.',
      'Realizar ultrassonografia seriada.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_58',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'De acordo com o Manual de Gestação de Alto Risco do Ministério da Saúde, qual das condições a seguir é considerada fator de alto risco para hemorragia pós-parto imediata?',
    options: [
      'Cesariana prévia.',
      'Corioamnionite.',
      'Placenta prévia.',
      'Macrossomia fetal.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_59',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Puérpera com tuberculose pulmonar bacilífera, em tratamento rifampicina, isoniazida, pirazinamida e etambutol, acompanhado de piridoxina. O recém- nascido é saudável. Segundo o Ministério da Saúde, qual é a conduta CORRETA quanto ao aleitamento? – 2025/2026_1',
    options: [
      'Suspender o aleitamento até a negativação da baciloscopia.',
      'Contraindicar aleitamento materno no primeiro mês.',
      'Manter aleitamento sem restrições não havendo necessidade de profilaxia neonatal.',
      'Manter aleitamento com uso de máscara e iniciar isoniazida para o recém-nascido.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_60',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Qual a melhor conduta segundo o Manual da Rede Brasileira de Hipertensão e o Ministério da Saúde?',
    options: [
      'Manter vigilância pressórica e orientação nutricional, reservando AAS para gestantes com história prévia de pré-eclâmpsia e Doppler alterado.',
      'Considerar o Doppler normal (< p95), não havendo indicação de iniciar medicação profilática.',
      'Repetir o Doppler na época do exame morfológico do segundo trimestre (entre 20 –24 semanas) e, se alterado, iniciar AAS.',
      'Iniciar ácido acetilsalicílico (AAS) em baixa dose e suplementação de cálcio, independentemente do resultado do Doppler. 56. Gestante de 26 semanas com glicemia de jejum inicial 81 mg/dL realiza TOTG 75 g com resultados: → Jejum: 84 mg/dL → 1 h: 178 mg/dL → 2 h: 139 mg/dL. Qual o diagnóstico? a) Teste é considerado normal. b) Intolerância à glicose. c) Diabetes Mellitus Gestacional d) Diabetes mellitus pré-gestacional. 57. Gestante aloimunizada, 28 semanas, sem hidropisia. Doppler da artéria cerebral média com pico de velocidade sistólica= 1,65 MoM. De acordo com o MS, qual é a conduta CORRETA ? a) Indicar parto cesáreo. b) Repetir o Doppler em 7 dias. c) Indicar cordocentese para Hb/Ht. d) Realizar ultrassonografia seriada. 58. De acordo com o Manual de Gestação de Alto Risco do Ministério da Saúde, qual das condições a seguir é considerada fator de alto risco para hemorragia pós-parto imediata? a) Cesariana prévia. b) Corioamnionite. c) Placenta prévia. d) Macrossomia fetal. 59. Puérpera com tuberculose pulmonar bacilífera, em tratamento rifampicina, isoniazida, pirazinamida e etambutol, acompanhado de piridoxina. O recém- nascido é saudável. Segundo o Ministério da Saúde, qual é a conduta CORRETA quanto ao aleitamento? – 2025/2026_1',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_61',
    cycle: 'Internato',
    subject: 'Neonatologia',
    text: 'Você é o pediatra da rotina na UTI e a enfermeira vem avisar sobre recém-nascido de 30 horas de vida que nasceu prematuro de 36 semanas, AIG, portador de Síndrome de Down. No pré-natal, mãe teve história de polidrâmnio. RN ainda não evacuou e somente eliminou pouca quantidade de mecônio ao toque retal. Vômitos biliosos e desidratado. Exame físico sem outras alterações. RX simples de abdome evidencia o sinal da dupla bolha. Este quadro indica:',
    options: [
      'Má rotação de intestino médio.',
      'Invaginação intestinal.',
      'Atresia duodenal.',
      'Doença de Hirschprung.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_62',
    cycle: 'Internato',
    subject: 'Neonatologia',
    text: 'Recém-nascido de mãe com sorologia realizada com 9 semanas de gestação para toxoplasmose IgM e IgG reagentes e avidez para IgG alta, não realizou seguimento e nem tratamento durante a gestação. O parto foi a termo, sem intercorrências. O RN apresenta bom estado geral, sem alterações clínicas aparentes. Considerando as diretrizes nacionais para o manejo da toxoplasmose congênita, assinale a conduta CORRETA :',
    options: [
      'Iniciar imediatamente o tratamento tríplice (sulfadiazina, pirimetamina e ácido folínico) e solicitar PCR para Toxoplasma gondii no líquor.',
      'Tranquilizar a família, pois a alta avidez IgG materna indica infecção antiga, sem necessidade de investigação neonatal específica.',
      'Solicitar sorologia para toxoplasmose IgM e IgA no recém-nascido e encaminhar para telerregulação com infectologista pediátrica.',
      'Solicitar ultrassonografia transfontanelar e iniciar tratamento profilático para toxoplasmose até a confirmação laboratorial.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_63',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Durante seu plantão em um hospital regional, você é chamado para avaliar João, 7 anos, internado há três dias por quadro de inchaço corporal e diminuição do volume urinário iniciado há cinco dias. No exame físico, a criança encontra-se pálida, com edema generalizado, frequência cardíaca de 120 bpm e pressão arterial de 120 × 80 mmHg (acima do percentil 95 para idade, sexo e estatura). Os resultados laboratoriais disponíveis são: Hemoglobina: 9,5 g/dL; leucócitos e plaquetas normais; ureia: 36 mg/dL; creatinina: 0,8 mg/dL; sódio: 134 mEq/L; potássio: 4,8 mEq/L. EAS: pH 6,0; densidade 1.020; hemoglobina +++; proteína ++; hemácias >100.000/mm³; leucócitos 20.000/mm³. Com base nesse quadro clínico-laboratorial, qual a hipótese diagnóstica principal e os exames complementares mais indicados para elucidar a etiologia?',
    options: [
      'Síndrome nefrótica – proteinúria de 24 horas e Colesterol.',
      'Síndrome nefrítica – dismorfismo eritrocitário, PCR e p-ANCA.',
      'Síndrome nefrítica – ASLO e Complemento C3.',
      'Síndrome nefrótica – proteinúria em amostra de urina isolada e biopsia renal.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_65',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Pré-escolar, 3 anos, que com 11 meses iniciou tratamento para Leucemia Linfoide aguda, iniciou há quatro dias quadro de febre alta (39,5 ºC), tosse seca, coriza intensa e conjuntivite. No segundo dia de febre surgiram pequenas manchas esbranquiçadas com halo avermelhado em mucosa jugal, na altura dos molares. No terceiro dia, aparece exantema maculopapular – 2025/2026_1',
    options: [
      'Rubivirus — agente da rubéola.',
      'Morbillivirus — agente do sarampo.',
      'Parvovirus B19 — agente do eritema infeccioso.',
      'Enterovirus — agente da síndrome mão-pé- boca.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_67',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Durante consulta pediátrica, um lactente de 10 meses é trazido pelos pais devido a inchaço progressivo nos joelhos há cerca de 30 dias, percebido após o início do engatinhar. A criança não apresenta febre, dor intensa ou limitação importante dos movimentos. Ao exame físico, observa-se edema bilateral de joelhos, sem calor ou rubor, e demais sistemas sem alterações. Os exames laboratoriais mostram: Hemograma: normal. TAP: normal. TTPa: prolongado. Com base nesses achados, qual o diagnóstico mais provável?',
    options: [
      'Hemofilia.',
      'Artrite reumatoide juvenil.',
      'Sinovite transitória.',
      'Artrite séptica.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_68',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Você é médico de família em uma unidade básica de saúde do interior do Amazonas e atende uma criança de 3 anos trazida pela mãe com queixa de atraso na fala. A criança ainda não fala, compreende comandos verbais simples e, por vezes, aponta ou conduz o responsável pela mão para expressar suas vontades. Os marcos motores foram adquiridos dentro da normalidade. Na creche, tende ao isolamento, irrita-se com mudanças na rotina, apresenta hipersensibilidade a sons, episódios de agitação e irritabilidade, além de movimentos repetitivos das mãos. Diante do quadro descrito, qual é a principal hipótese diagnóstica?',
    options: [
      'Transtorno do processamento auditivo central',
      'Transtorno do déficit de atenção e hiperatividade.',
      'Não há atraso, apenas a criança é mais tímida.',
      'Transtorno do espectro autista.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_69',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Durante atendimento no CAIC, um menino de 8 anos, branco é trazido pelos pais com queixa de inchaço no joelho esquerdo há quase dois meses. A mãe relata que o menino acorda com rigidez e dificuldade para andar pela manhã, mas melhora ao longo do dia. Ao exame físico, o paciente apresenta marcha claudicante, edema e limitação de movimentos no joelho direito, sem sinais de infecção ou outras alterações sistêmicas. Os exames laboratoriais mostram: FAN positivo (1:320) ASLO = 800 U Todd (normal até 300 U) Demais exames sem alterações relevantes. Com base nesses achados, qual é a hipótese diagnóstica mais provável?',
    options: [
      'Púrpura trombocitopênica idiopática.',
      'Artrite gonocócica.',
      'Artrite idiopática juvenil.',
      'Síndrome de Sjögren.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_70',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Um menino de 6 anos é trazido ao consultório por apresentar episódios recorrentes de tosse seca, especialmente à noite, e sibilância ocasional há cerca de seis meses. Nas últimas semanas, os sintomas se intensificaram, com dispneia leve aos esforços. Nega febre e refere expectoração mucosa eventual. Há histórico familiar de asma. Ao exame, notam-se sibilos expiratórios bilaterais. Considerando o manejo clínico dessa criança, qual dos critérios a seguir é mais útil para avaliar, a longo prazo, o controle e a eficácia do tratamento?',
    options: [
      'Frequência de uso de broncodilatadores de curta ação.',
      'Monitoramento quinzenal da função pulmonar com espirometria.',
      'Medição da frequência respiratória e do pulso durante as crises.',
      'Realização de exames de imagem torácica a cada dois meses. – 2025/2026_1',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_71',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Com base no caso clínico, indique o grau mais provável de desidratação que a criança apresenta:',
    options: [
      'Desidratação leve.',
      'Desidratação moderada.',
      'Desidratação grave.',
      'Sem sinais de desidratação.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_72',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Com base no grau provável de desidratação, indique o tratamento preconizado no primeiro momento no Pronto Atendimento:',
    options: [
      'Administração intravenosa de solução salina normal.',
      'Início imediato de terapia de reidratação com soro oral.',
      'Observação e orientação para aumentar a ingestão de líquidos em casa.',
      'Administração de antieméticos e reavaliação.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_73',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Para prevenir futuros episódios de desidratação como o descrito no caso em crianças, a mais eficaz entre as seguintes medidas é:',
    options: [
      'Iniciar dieta oral com introdução progressiva de alimentos.',
      'Manter a amamentação exclusiva até pelo menos 4 meses.',
      'Aumentar a frequência das mamadas durante episódios de diarreia.',
      'Iniciar água de coco e Imolac Lactiol.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_74',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Entre as manifestações clínicas para o diagnóstico da Doença de Kawasaki, sempre há presença de febre com duração igual ou superior a cinco dias, associada a critérios maiores como:',
    options: [
      'Exantema, hepatomegalia, prurido, artralgia, icterícia.',
      'Edema de mãos e pés, exantema polimorfo e generalizado, e hiperemia ocular.',
      'Descamação palmo-plantar, hepatosplenome- galia, petéquias, artralgia, prurido.',
      'Piúria estéril, icterícia, PCR elevado, hiperemia ocular, artralgia.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_75',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente de 8 meses procura consulta pediátrica com história de irritabilidade, vômitos e diarreia com sangue há 15 dias, desde o início da alimentação complementar com fórmulas, papas de frutas e legumes. Exame físico: bom estado geral, hidratado, com eczema em couro cabeludo e face. Peso: 8 kg (score Z+2). Provável diagnóstico:',
    options: [
      'Cloridrorreia congênita.',
      'Invaginação intestinal.',
      'Gastroenterite viral.',
      'Alergia alimentar.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_76',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente de 3 meses, residente no interior, é levado à Unidade de Saúde por apresentar manchas café com leite, hiperpigmentação cutânea, atraso de crescimento, ausência de polegares e microcefalia → Hemograma: Pancitopenia. Provável diagnóstico:',
    options: [
      'Anemia de Fanconi.',
      'Disceratose congênita.',
      'Talassemia maior.',
      'Síndrome de Marfan.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_77',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente de 5 meses, sexo masculino, é levado inconsciente ao SPA após episódio de crise convulsiva. A mãe relata que o quadro ocorreu após sua irmã, de 2 anos, arremessar uma boneca com força contra o corpo do lactente. Fundoscopia: hemorragia retiniana bilateral. Hipótese mais provável:',
    options: [
      'Intoxicação exógena.',
      'Deficiência de piridoxina.',
      'Síndrome do bebê sacudido.',
      'Ruptura de aneurisma cerebral.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_78',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Menina de 6 anos é trazida pela mãe ao ambulatório com rinorreia purulenta há 21 dias. Há 15 dias foi avaliada e prescrito soro nasal e amoxicilina. Terminou o tratamento e o quadro persiste. Ao exame físico está em bom estado geral, sem febre com presença de rinorreia purulenta e fétida na fossa nasal direita. Diagnóstico e conduta são:',
    options: [
      'Corpo estranho, internar para iniciar antibiótico antes da remoção.',
      'Rinossinusite, introduzir amoxicilina com clavulanato.',
      'Rinossinusite, solicitar TC de seios da face.',
      'Corpo estranho, retirar da fossa nasal.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_79',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Pré-escolar, desnutrido, indígena Ticuna, é levado a uma consulta ambulatorial devido ao surgimento de manchas escamosas, ressecadas e hiperceratóticas nos braços, pernas e nádegas. Ainda relata dificuldade de enxergar à noite ou em locais com pouca claridade. A hipótese diagnóstica mais provável é deficiência de:',
    options: [
      'Ácido fólico.',
      'Vitamina A.',
      'Tiamina.',
      'Niacina. – 2025/2026_1',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_80',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'São critérios maiores para o diagnóstico de febre reumática, EXCETO :',
    options: [
      'Coreia.',
      'Artralgia.',
      'Cardite.',
      'Poliartrite.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_81',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Uma mulher de 45 anos, assintomática, procura o posto de saúde após ver um vídeo de um médico em uma rede social contendo uma lista de exames laboratoriais e de imagem que toda mulher deveria realizar. Ela deseja realizá-los “para ter certeza de que está tudo bem”. A médica da unidade, após anamnese e exame físico sem fatores de risco relevantes, orienta a paciente sobre riscos e benefícios da solicitação de exames desnecessários. Com base nos níveis de prevenção em saúde, a conduta da médica exemplifica:',
    options: [
      'Prevenção primária.',
      'Prevenção secundária.',
      'Prevenção terciária.',
      'Prevenção quaternária.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_82',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Durante a reunião de equipe em uma Unidade de Saúde da Família, o médico relata que a comunidade tem buscado o serviço apenas para obter encaminhamentos para especialistas, e que muitos desconhecem a carta de serviços da UBS. Ele propõe ações educativas para reforçar a importância do vínculo dos comunitários com a equipe e o acompanhamento longitudinal. Qual atributo da Atenção Primária à Saúde está sendo mais diretamente abordado na proposta do médico?',
    options: [
      'Primeiro contato.',
      'Coordenação do cuidado.',
      'Integralidade.',
      'Orientação comunitária.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_83',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Ao receber o resultado de uma biópsia que confirmou neoplasia gástrica avançada, um médico de família prepara-se para comunicar o diagnóstico ao paciente. Em consulta reservada, ele inicia a conversa buscando entender o que o paciente compreende sobre sua condição e quais preocupações tem naquele momento. No protocolo SPIKES, essa conduta se insere predominantemente em qual componente da abordagem?',
    options: [
      'Preparação do ambiente para a notícia ( Setting up ).',
      'Comunicação do diagnóstico e prognóstico ( Knowledge ).',
      'Exploração da percepção do paciente ( Perception ).',
      'Planejamento conjunto dos próximos passos (Strategy/Summary).',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_84',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Mulher de 55 anos, previamente submetida à histerectomia total por miomatose uterina benigna, comparece à unidade básica de saúde solicitando agendamento de exame preventivo. Segundo as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2025), qual deve ser a conduta?',
    options: [
      'Suspender o rastreamento.',
      'Realizar colposcopia anual.',
      'Realizar citologia vaginal anual.',
      'Manter rastreamento a cada 3 anos.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_85',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Conforme Lopes e Dias (2019) destacam no Tratado de Medicina de Família e Comunidade, o Método Clínico Centrado na Pessoa (MCCP) é um modelo derivado da abordagem centrada na pessoa que considera que a consulta deva atender às necessidades e expectativas de médicos e pessoas, tornando esses encontros adequados para a Atenção Primária à Saúde. Considerando a atualização por Moira Stewart e colaboradores em 2017 dos componentes interativos do MCCP no livro “Medicina Centrada na Pessoa - transformando o encontro clínico", assinale a alternativa que CORRETAMENTE contenha estes componentes:',
    options: [
      'Explorando a saúde, a doença e a experiência da pessoa com a doença; Entender a pessoa como um todo - o indivíduo, família e o contexto; Elaborando um plano comum de manejo; Incorporando prevenção e promoção da saúde; Fortalecendo a relação médico-paciente; Ser realista.',
      'Intensificando a relação entre a pessoa e médico; Entendendo a pessoa como um todo - o indivíduo, família e o contexto; Elaborando um plano conjunto de manejo dos problemas; Explorando a saúde, a doença e a experiência com a doença.',
      'Ser gentil e acolhedor; Entendendo sentimentos, ideias, funções e expectativas; Elaborando um plano conjunto de manejo dos problemas; Ser realista.',
      'Incorporar prevenção e promoção da saúde; Fortalecer a relação médico-pessoa; Ser realista; Ser gentil e acolhedor.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_86',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Considerando as recomendações atuais, conforme Nota Técnica conjunta de 2023 do Ministério da Saúde e Instituto Nacional do Câncer (INCA), bem como princípios da Prevenção Quaternária de sobrediagnóstico e sobretratamento, assinale a alternativa que contenha orientação CORRETA acerca do rastreamento populacional do Câncer de Próstata:',
    options: [
      'Realizar rastreio de Câncer de Próstata em todas as pessoas com próstata acima dos 45 anos utilizando o PSA e/ou toque retal como estratégias de triagem.',
      'Realizar toque retal em todas as pessoas com próstata acima de 45 anos durante a campanha do Novembro Azul, para favorecer o acesso às políticas de saúde na Atenção Primária. – 2025/2026_1',
      'Utilizar o PSA como estratégia eficaz de rastreamento populacional, pois isso reduz significativamente a mortalidade específica.',
      'Não realizar campanhas para convocar homens assintomáticos para a realização de rastreamento com PSA (Antígeno Prostático Específico) e/ou toque retal.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_87',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'A Atenção Primária à Saúde (APS) se desenvolve a partir de princípios nucleares e derivados que foram cunhados coletivamente e formalizados na Declaração de Alma-Ata de 1978. Assinale a alternativa que contenha os princípios DERIVADOS da APS:',
    options: [
      'Integralidade, longitudinalidade e competência cultural.',
      'Acesso, orientação comunitária e competência cultural.',
      'Foco na família, orientação comunitária e competência cultural.',
      'Coordenação do cuidado, competência cultural e integralidade.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_88',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    text: 'A respeito dos níveis de prevenção e sobre os critérios de Wilson e Jungner (1968) para a justificação ética e operacional de um programa de rastreamento populacional ( screening ), qual das seguintes afirmações é VERDADEIRA ?',
    options: [
      'A história natural da condição, incluindo o conhecimento de uma fase latente (pré- sintomática) e a progressão para a doença manifesta, é um requisito fundamental para definir a janela de oportunidade do rastreamento.',
      'O teste de rastreamento deve ter uma especificidade perfeita (100%), pois qualquer resultado falso-positivo inviabiliza economicamente o programa.',
      'A doença deve obrigatoriamente ter um tratamento disponível, mas esse tratamento não precisa necessariamente ter sido demonstrado como mais eficaz quando aplicado na fase pré-sintomática.',
      'A disponibilidade de recursos e a relação custo- eficácia não são critérios de Wilson e Jungner, sendo considerados apenas em uma etapa posterior de planejamento político- administrativo.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_89',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Em uma comunidade indígena atendida pela equipe de Saúde da Família, qual atuação da equipe promove a competência cultural e o cuidado efetivo?',
    options: [
      'Integrar saberes tradicionais e biomedicina, construindo planos terapêuticos respeitando práticas culturais locais.',
      'Impor o modelo biomédico tradicional sem considerar as particularidades culturais.',
      'Evitar contato com as lideranças comunitárias para não influenciar decisões clínicas.',
      'Padronizar protocolos usando somente as diretrizes clínicas nacionais, sem adaptação cultural.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_90',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Qual das seguintes vacinas é recomendada pela rotina do Calendário Nacional de Vacinação para crianças com 2 meses de idade?',
    options: [
      'Vacina contra HPV.',
      'Vacina pentavalente (DTP + Hib + Hepatite B).',
      'Vacina antirrábica.',
      'Vacina contra febre amarela (dose única).',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_91',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Na organização da Rede de Atenção Psicossocial (RAPS), qual serviço da Atenção Primária deve atuar como porta de entrada e coordenador do cuidado para pessoas com sofrimento mental?',
    options: [
      'Hospital Psiquiátrico.',
      'Centros de Atenção Psicossocial (CAPS).',
      'Serviços de Urgência Psiquiátrica.',
      'Unidade Básica de Saúde (UBS).',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_92',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Maria, 68 anos, procura a Unidade Básica de Saúde relatando episódios de tontura nos últimos dias. Ela descreve que “tudo gira ao seu redor” quando deita ou vira a cabeça para o lado direito. Os episódios duram menos de 1 minuto, são recorrentes e vêm acompanhados de náusea, mas sem perda auditiva ou zumbido. Diante desse quadro, qual é a hipótese diagnóstica mais provável?',
    options: [
      'Doença de Ménière.',
      'Tontura inespecífica.',
      'Vertigem posicional paroxística benigna.',
      'Neurite vestibular Vertigem posicional paroxística benigna.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_93',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    text: 'Você estava lendo uma diretriz estrangeira de dislipidemias e chamou a sua atenção os resultados da redução de desfechos cardiovasculares entre pacientes que utilizaram a droga evolocumab, um medicamento hipolipemiante de uso injetável indicado para reduzir os níveis de LDL-colesterol. Ao ler o resultado do trial , você identifica que, no grupo de pacientes que utilizaram o evolocumabe, o risco de um evento cardiovascular foi de 9,8%, enquanto no grupo placebo este risco foi de 11,3%. Este resultado pareceu interessante para você, contudo o Número Necessário para Tratar (NNT) não estava disponível no texto e você precisaria calculá-lo. Considerando os dados expostos, qual seria o valor do NNT do evolocumabe para este estudo? (Desconsidere casas decimais).',
    options: [
      '13.',
      '66.',
      '87.',
      '98. – 2025/2026_1',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_94',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'T., mulher, 52 anos, auxiliar de serviços gerais, moradora de bairro da periferia de Manaus, procura o acolhimento da UBS queixando-se de lombalgia recorrente, que piorou há um dia e causando limitação importante. Durante o acolhimento, o ACS informa ao enfermeiro da UBS que o filho mais novo da paciente está preso há cerca de 4 meses. Durante a conversa inicial a paciente conta que a piora da dor coincide com o tempo no qual o filho está preso sentindo também vergonha e culpa. Ela relata tê-lo visitado recentemente e solicita à médica que providencie uma receita de antibiótico para o filho preso, que estaria com uma lesão de pele. Considerando o Código de Ética Médica, o que o profissional de saúde deveria responder à paciente em relação à demanda de emissão de receita de antibiótico?',
    options: [
      'Não liberaria a receita, explicando que não se pode emitir receita sem atendimento presencial do paciente e devendo ser explicada a necessidade de atendimento pela equipe de saúde do sistema prisional.',
      'Liberaria a receita, considerando que a história trazida é compatível com piodermite.',
      'Liberaria a receita, considerando a dificuldade de acesso aos serviços de saúde dentro do sistema prisional.',
      'Não liberaria a receita solicitada, mas orientaria sobre como tratar a possível infecção com outros cuidados não medicamentosos.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_95',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'O., 32 anos, homem cisgênero, vive com HIV há 5 anos, com carga viral indetectável devido à terapia antiretroviral (TARV) a qual possui boa adesão. Seu monitoramento de carga viral e níveis de CD4 estão estáveis e dentro das faixas normais. Ele está atualmente em um relacionamento monogâmico com sua parceira T., mulher cis, 28 anos soronegativa para HIV, sem comorbidades. Ambos estão juntos há 1 ano e têm um relacionamento estável. O casal decidiu buscar aconselhamento médico sobre a possibilidade de iniciar a PrEP como uma medida adicional de proteção contra a transmissão do HIV. Embora ele tenha uma carga viral indetectável e seu tratamento seja correto, o casal deseja aumentar sua segurança. Qual é a alternativa CORRETA no que se refere à introdução de PrEP, para a paciente T.?',
    options: [
      'O uso de PrEP não é necessário pois o casal já possui relacionamento sexual ativo.',
      'Ela deve realizar testagem para HIV e outras ISTs, recebendo aconselhamento sobre práticas sexuais seguras, estando indicada PrEP caso esteja soronegativa para HIV.',
      'Ela não precisa ser submetida a testes de HIV para confirmar que está soronegativa, podendo ser iniciado PrEP imediatamente.',
      'Caso elegível após a testagem, a paciente pode iniciar a PrEP, tomando o medicamento em dose única mensal conforme orientação médica.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_96',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Ana é médica de uma UBS na zona sul de Manaus e tem o hábito de revisar periodicamente a farmacoterapia de seus pacientes com doenças crônicas, especialmente idosos e pessoas com multimorbidades. Durante a consulta de acompanhamento de um paciente de 74 anos em uso de sete medicamentos contínuos, ela avalia a possibilidade de desprescrição. Considerando as melhores evidências e recomendações sobre o tema, qual é a conduta mais adequada?',
    options: [
      'Suspender prioritariamente o medicamento mais caro, pois o custo é o fator central na definição do que deve ser desprescrito.',
      'Evitar desprescrever medicamentos iniciados por especialistas focais, pois isso não faz parte de suas atribuições como médica da Atenção Primária à Saúde.',
      'Realizar a desprescrição apenas em situações de efeitos adversos graves já instalados, pois a suspensão preventiva oferece pouco benefício.',
      'Revisar sistematicamente todas as prescrições em cada consulta de seguimento, identificando medicamentos sem indicação atual, com risco maior que benefício ou sem eficácia comprovada, envolvendo o paciente no processo de decisão compartilhada.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam25_97',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Em uma revisão de registros clínicos, observa-se o seguinte SOAP feito durante atendimento em uma UBS a um paciente de 38 anos com dor abdominal: S: Dor abdominal difusa há 24h, piora após refeições, sem vômitos. O: Abdome flácido, dor à palpação em epigástrio “devido dispepsia funcional”, ruídos hidroaéreos presentes, sem sinais de abdome agudo. A: Dispepsia funcional. P: Orientada dieta leve, iniciado IBP por 4 semanas, retorno em 30 dias ou antes se piora. Qual é a avaliação CORRETA sobre esse registro?',
    options: [
      'O erro central está no item S, que não deveria incluir sintomas gastrointestinais sem confirmação laboratorial.',
      'A etapa A está inadequada porque deve conter apenas hipóteses diagnósticas.',
      'O registro apresenta erro estrutural, pois o trecho “devido dispepsia funcional” constitui interpretação diagnóstica e não deveria constar na seção Objetivo (O).',
      'O item P está incorreto porque condutas não devem ser registradas no SOAP.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam25_98',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Durante uma visita domiciliar, a equipe avalia uma idosa de 84 anos, acamada, com limitação funcional grave, dependente para todas as atividades de vida diária, portadora de demência avançada e com necessidade de curativos semanais. A família não consegue levá-la à UBS. Segundo a Política Nacional de Atenção Domiciliar (PNAD), qual é o tipo de atenção mais adequado?',
    options: [
      'AD1.',
      'AD2.',
      'AD3.',
      'Não se enquadra em Atenção Domiciliar.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam25_99',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Durante auditoria em uma Secretaria Municipal de Saúde, identificou-se que determinada UBS passou a restringir o atendimento de pessoas sem comprovante de residência da área adscrita. Visitantes, trabalhadores da região e pessoas em trânsito eram orientados a procurar a UBS do bairro de origem. Essa prática contraria diretamente qual princípio doutrinário do SUS, conforme a Lei 8.080/90?',
    options: [
      'Universalidade.',
      'Equidade.',
      'Integralidade.',
      'Regionalização.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam25_100',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Durante o acolhimento à demanda espontânea na UBS, chegam simultaneamente quatro situações. A equipe precisa identificar quais delas exigem notificação compulsória imediata. I. Mulher de 26 anos relata que foi forçada a ter relação sexual pelo parceiro na noite anterior e apresenta lesões compatíveis com violência sexual. II. Homem de 18 anos chega acompanhado da mãe após ingerir grande quantidade de comprimidos em uma tentativa de suicídio . Está clinicamente estável. III. Criança de 7 anos apresenta febre e tosse há 48h, sem sinais de gravidade. IV. Idoso de 72 anos procura a UBS para ajuste de medicação da hipertensão. Considerando a legislação vigente, qual situação exige notificação compulsória IMEDIATA pela equipe da APS?',
    options: [
      'A criança febril e o idoso hipertenso.',
      'Apenas o paciente em tentativa de suicídio.',
      'Apenas a mulher com suspeita de violência sexual.',
      'A mulher vítima de violência sexual e o paciente em tentativa de suicídio.',
    ],
    correctIndex: 3,
  },
,
  {
    id: 'cermam23_01',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'Paciente de 38 anos, do sexo masculino relata febre, odinofagia tontura e mialgia há 2 dias. Está em tratamento de LMA há 7 dias. Sem outras comorbidades. Sinais vitais: PA 70x50 mmHg, FC: 128 bpm, FR: 26rpm, TAx: 36,1ºC, satO2: 98% ar ambiente. Exame físico: enantema difuso em pilares amigdalianos sem abscessos com raras placas esbranquiçadas em área lateral da língua. Esplenomegalia não dolorosa. Exames complementares em andamento. Iniciada ressuscitação volêmica com ringer 1000ml. A conduta imediata é:',
    options: [
      'Cefepime e fluconazol.',
      'Meropenem e vancomicina.',
      'Aguardar resultado da hemocultura.',
      'Paciente sem critérios para antibioticoterapia.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_02',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    text: 'Durante atividade na UBS, você se depara com dois pacientes com astenia há 2 semanas e anemia grave. Paciente 1: homem de 21 anos, Hb = 8,6 g/dl, VCM = 106, leucócitos = 920 mm3, neutrófilos = 210 mm3 e plaquetas 24.000 mm3. Paciente 2: homem de 67 anos, Hb = 9,5 g/dl, VCM = 94, leucócitos = 220.000 mm3, neutrófilos = 4.500 mm3, linfócitos = 215.000 mm3 e plaquetas = 64.000 mm3. Qual paciente deve ter prioridade no encaminhamento para a unidade de urgência e por qual motivo?',
    options: [
      'Paciente 1, por apresentar pancitopenia com neutropenia grave, tendo alto risco de neutropenia febril e sangramentos.',
      'Paciente 1, por apresentar anemia mais grave e risco de descompensação hemodinâmica e sangramentos.',
      'Paciente 2, por apresentar leucocitose intensa, risco de hiperviscosidade e insuficiência respiratória.',
      'Paciente 2, por apresentar linfocitose intensa e alto risco de síndrome de lise tumoral espontânea.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_03',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'Paciente durante exames de rotina teve os seguintes resultados: HBsAg Negativo; Anti-HBs positivo; anti-HBc IgG positivo; anti-HBc IgM negativo. Qual o significado dos seguintes exames?',
    options: [
      'Paciente portador crônico ativo.',
      'Paciente vacinado para hepatite B.',
      'Paciente com hepatite B crônica portado inativo.',
      'Paciente tem imunidade ao vírus da hepatite B por meio de contato com vírus da Hepatite B.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_04',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Qual a manifestação extra-intestinal mais comum na doença de Crohn?',
    options: [
      'Artrite.',
      'Uveíte.',
      'Pioderma gangrenoso.',
      'Eritema nodoso.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_05',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: 'Jovem de 15 anos, morador de Parintins procurou o hospital da cidade queixando de falta de ar, mal-estar geral, febre e dores em grandes articulações de início há 1 semana. Ao exame físico, paciente se encontrava taquicárdica FC 130 bpm, com temperatura de 38,5º C. A ausculta cardíaca, sopro sistólico 3+/6 em foco mitral irradiando para região axilar, joelho direito com hiperemia e calor local com critérios para artrite e nódulos firmes, móveis e indolores em região de coluna vertebral. Foi realizado exames laboratoriais que demonstrou velocidade de hemossedimentação (VHS) de 55 mm. Segundo os critérios de Jones revisado para o diagnóstico de febre reumática, este paciente apresenta:',
    options: [
      'Um critério maior e três menores.',
      'Dois critérios maiores e um menor.',
      'Dois critérios maiores e dois menores.',
      'Três critérios maiores e dois menores.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_06',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'A principal terminologia usada para definir o diagnóstico de Insuficiência Cardíaca baseia-se na fração de ejeção do ventrículo esquerdo (FEVE). Assinale a alternativa CORRETA:',
    options: [
      'FEVE normal (≥40%) denominada ICFEp, fração de ejeção <30% denominada ICFEr e fração de ejeção entre 30 e 39% denominada ICFEi.',
      'FEVE normal (≥50%) denominada ICFEp, fração de ejeção <30% denominada ICFEr e fração de ejeção entre 30 e 39% denominada ICFEi.',
      'FEVE normal (≥50%) denominada ICFEp, fração de ejeção <40% denominada ICFEr e fração de ejeção entre 40 e 49% denominada ICFEi.',
      'FEVE normal (≥60%) denominada ICFEp, fração de ejeção <50% denominada ICFEr e fração de ejeção entre 50 e 59% denominada ICFEi.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_07',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    text: 'Uma mulher de 29 anos apresenta-se com episódios recorrentes de cefaleia que duram de 4 a 72 horas quando não tratados. As dores de cabeça são frequentemente unilaterais, pulsáteis, de intensidade moderada a severa, e agravadas pela atividade física rotineira. Ela também relata náuseas e fotofobia durante os episódios. Qual é o tratamento abortivo mais apropriado para os episódios de cefaleia desta paciente?',
    options: [
      'Triptanos.',
      'Amitriptilina.',
      'Topiramato.',
      'Profilaxia com beta-bloqueadores.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_08',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    text: 'Um paciente de 37 anos de idade engenheiro bem-sucedido, casado, com epilepsia bem controlada por medicamentos, apresenta-se ao pronto-socorro após uma convulsão tônico-clônica generalizada que durou 5 minutos. Ele relata que esqueceu de tomar sua medicação antiepiléptica nos últimos dois dias. Qual é a conduta mais apropriada?',
    options: [
      'Iniciar um novo medicamento antiepiléptico.',
      'Internar para avaliação de status epilepticus.',
      'Realizar uma tomografia computadorizada de emergência de crânio.',
      'Administrar uma dose de resgate do medicamento antiepiléptico atual.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_09',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    text: 'Uma estudante de 20 anos apresenta ptose palpebral, diplopia e fraqueza muscular que piora com o esforço e melhora com o repouso. A eletroneuromiografia mostra uma diminuição da amplitude do potencial de ação muscular com estimulação repetitiva. Qual é o diagnóstico mais provável?',
    options: [
      'Miastenia gravis.',
      'Síndrome de Lambert-Eaton.',
      'Esclerose lateral amiotrófica (ELA).',
      'Distrofia muscular facioescapuloumeral.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_10',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: 'Doença inflamatória crônica que acomete, preferencialmente, a coluna vertebral. É mais frequente no sexo masculino, no adulto jovem e HLA-B27. Quadro clínico de dor lombar de ritmo inflamatório. A evolução costuma ser ascendente, acometendo progressivamente a coluna dorsal e cervical. Assinale a alternativa que corresponde CORRETAMENTE à doença caracterizada anteriormente.',
    options: [
      'Hérnia discal.',
      'Artrite psoriásica.',
      'Artrite reumatoide.',
      'Espondilite anquilosante.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_11',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: 'Homem de 67 anos vem à consulta com queixa de dor intensa em joelho direito há 8 dias. Refere episódios semelhantes autolimitados acometendo punho direito e joelhos, bem como artralgia mecânica recorrente de joelhos bilateralmente há cerca de 2 anos. Ao exame, apresenta dor, calor, edema e eritema de joelho direito. Sem outros dados clínicos relevantes. Qual o diagnóstico mais provável?',
    options: [
      'Artrite viral.',
      'Artrite reativa.',
      'Artrite tuberculosa.',
      'Artrite microcristalina.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_12',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'Qual alternativa NÃO corresponde ao uso do antimalárico tafenoquina?',
    options: [
      'Pode ser usada para prevenção de recidiva de Plasmodium vivax ou ovale.',
      'Assim como a primaquina, pode levar a metemoglobinemia.',
      'Pode-se usar o referido fármaco mesmo na deficiência de G6PD (glicose-6-fosfato desidrogenase).',
      'Pode ser usada para prevenção de malária vivax e falciparum antes e durante a viagem para áreas endêmicas.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_13',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: 'Paciente de 34 anos, sexo feminino, apresentou-se ao Departamento de Emergência com confusão mental, letargia e episódios de síncope ao permanecer de pé. Ela também teve episódios de vômitos ao longo do dia. Glicemia capilar mensurada na entrada do Hospital era de 55mg/dl, porém seu estado mental não melhorou após administração de glicose hipertônica EV em bolus. PA: 80/40mmhg apesar do uso de 2 litros de solução isotônica EV. A pele das palmas das mãos e da mucosa bucal se mostravam escurecidas. Na+: 128mmol/l, K+: 5,8mmol/l. Qual a terapêutica poderia ser iniciada nesta paciente precocemente?',
    options: [
      'Difenidramina.',
      'Hidrocortisona.',
      'Vancomicina.',
      'Propiltiouracil.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_14',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: 'Paciente, sexo feminino, 36 anos de idade, recebeu diagnóstico de Doença de Graves há dois anos com orbitopatia, proptose unilateral, bócio difuso, taquicardia e tremor de extremidades. TSH suprimido e T4 livre três vezes o limite superior da normalidade. Iniciou metimazol. Atualmente em uso de 5 mg/dia. Os últimos exames demonstraram função tireoidiana normal e TRAb 12,0 UI/L (VR: < 1,75). Glândula heterogênea, volume total de 32,7 mL. Tabagista há oito anos. Em relação ao caso clínico, assinale a alternativa CORRETA:',
    options: [
      'As tionamidas inibem a captação de iodo pela tireoide e afetam a liberação dos hormônios já sintetizados e estocados dentro da glândula.',
      'A paciente apresenta TRAb em títulos baixos, portanto, o uso do metimazol deve ser suspenso devido à alta possibilidade de cura.',
      'A realização da tireoidectomia total levaria à resolução da doença de base, contribuindo para redução dos níveis do TRAb.',
      'A exoftalmia na Doença de Graves é unilateral em 10% dos casos e no contexto de um quadro clássico de hipertireoidismo torna-se desnecessário o diagnóstico diferencial com outras patologias.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_15',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: 'Mulher, 55 anos de idade, em amenorreia há 2 anos, encaminhada ao ambulatório de endocrinologia por alteração da função tireoidiana e perda de campo visual. TSH 0,94 mUI/mL, T4 livre 0,72 ng/dL, FSH 2,5 mUI/mL (VR: 3,6 a 16,6), LH 2,0 mUI/mL, Cortisol 7,0 mcg/dL, ACTH 13,1 pg/mL, IGF-1 62 ng/mL (VR: 83 a 241), Prolactina 88 ng/dL (VR: 5 a 25). Ressonância magnética da sela túrcica evidenciou lesão hipofisária de 4,0 x 2,5 x 2,9 cm. Assinale a alternativa CORRETA sobre o caso acima:',
    options: [
      'A dosagem de prolactina diluída é obrigatória neste caso para a exclusão do efeito gancho.',
      'Trata-se de um caso de amenorreia secundária, quando há ausência de menstruação por 4 meses consecutivos ou mais em mulheres que já tenham menstruado previamente.',
      'A paciente apresenta macroprolactinemia e deve ser encaminhada para tratamento cirúrgico.',
      'Podemos excluir o diagnóstico de hipotireoidismo devido aos níveis normais de TSH.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_16',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: 'Para o diagnóstico das glomerulopatias qual a melhor estratégia/ferramenta?',
    options: [
      'Presença de Proteinúria.',
      'Biomarcadores séricos.',
      'Biópsia Renal.',
      'Biomarcadores urinários.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_17',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: 'É considerada uma indicação dialítica de urgência:',
    options: [
      'Diurese >2000ml em uso de furosemida.',
      'Hiperpotassemia refratária às medidas clínicas.',
      'Hiperpotassemia em paciente com boa diurese em uso de Espironolactona.',
      'Retenção urinária com bexiga palpável.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_18',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Sobre o diurético Furosemida de uso frequente na conduta do paciente edemaciado e/ou com hiperpotassemia, é correto afirmar que:',
    options: [
      'Bloqueia no rim o SRAA (Sistema Renina Angiotensina Aldosterona).',
      'Bloqueia na alça de Henle os transportadores NaK2Cl.',
      'É um diurético poupador de potássio que antagoniza Aldosterona.',
      'É um diurético de escolha nos pacientes anúricos.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_19',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: 'Marta tem 39 anos e há 5 dias iniciou quadro de febre alta, associada a dor em hemitórax direito e tosse produtiva. Ao exame físico encontra-se consciente e orientada. Apresenta frêmito toracovocal aumentado em base direita e ausculta de crepitações finas em terço inferior de hemitórax direito. FC 85 bpm. FR 19 irpm. Pressão arterial 110x80 mmHg e SpO2 96% a.a. Radiografia de tórax evidenciando opacidades acinares em lobo inferior direito com presença de broncograma aéreo. Paciente sem comorbidades clínicas conhecidas. Ureia 22, Leucócitos 16563 com 85% de segmentados. Qual a conduta mais apropriada para o caso?',
    options: [
      'Solicito hemocultura em 2 sítios, início fase rápida com cristalóide, início antibioticoterapia de amplo espectro enquanto aguardo resultado de hemocultura.',
      'Início empiricamente tratamento para tuberculose pulmonar com esquema básico de acordo com o peso e solicito exame de escarro para posterior confirmação diagnóstica.',
      'Início betalactâmico oral para tratamento ambulatorial, orientando a procurar novamente atendimento médico caso a febre não ceda em até 72 horas.',
      'Solicito internação hospitalar, prescrevo quinolona respiratória endovenosa associada a corticoide oral.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_20',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: 'Genesio tem 58 anos, é hipertenso, diabético e ex-tabagista com uma carga tabágica de 40 maços-ano. Parou de fumar há 5 anos. Mesmo depois de parar de fumar nota que segue com tosse e pigarro e que no último ano começou a apresentar dispnéia aos esforços. Ecocardiograma transtorácico sem evidências de remodelamento, com fração de ejeção normal. A radiografia de tórax evidenciou sinais de hiperinsuflação e espirometria evidenciou distúrbio obstrutivo moderado com VEF1 pós broncodilatador de 52% do previsto. Ao longo dos últimos 12 meses apresentou 3 exacerbações respiratórias necessitando fazer uso de antibióticos e corticoide oral, mas não precisou de internações hospitalares. Eosinófilos 385/mm³. Qual seria sua estratégia terapêutica para tratar esse quadro?',
    options: [
      'Iniciaria corticoide inalatório e beta agonista de curta ação por demanda, orientando sobre a importância da atividade física para seu tratamento.',
      'Iniciaria uma associação de antimuscarínico de longa ação e beta agonista de longa ação associado a corticoide inalatório, encaminharia para reabilitação pulmonar e para atualização do esquema vacinal recomendado para pneumopatas crônicos.',
      'Reforçaria a necessidade de manter-se sem fumar e prescreveria beta agonista de longa ação para uso de horário. Encaminharia para reabilitação pulmonar e para atualização do esquema vacinal recomendado para pneumopatas crônicos.',
      'Prescreveria bamifilina oral para auxiliar na sintomatologia, podendo associar codeína oral para controle da tosse. Orientaria sobre a importância da atividade física para seu tratamento e direcionaria para atualização do esquema vacinal recomendado para pneumopatas crônicos.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_21',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo masculino, 65 anos, portador de doença diverticular de sigmoide, teve indicação de sigmoidectomia laparoscópica eletiva após repetidas crises de diverticulite aguda. O paciente não apresenta comorbidades. Não foi submetido a preparo do cólon com manitol. Dieta líquida sem resíduos rica em carboidratos 2 horas antes da anestesia. Anestesia geral sem opióides de ação longa associada a bloqueio peridural. Ceftriaxona e Metronidazol administrados em dose única na indução anestésica. Cirurgia sem intercorrências com duração de 2 horas. Alta para enfermaria com sonda nasogástrica aberta. No primeiro dia pós-operatório paciente foi estimulado a deambulação precoce e submetido a fisioterapia respiratória, porém a sonda nasogástrica foi mantida porque os ruídos hidroaéreos eram débeis. Sobre o caso descrito, assinale a alternativa CORRETA:',
    options: [
      'A manutenção da dieta oral até 2 horas antes da cirurgia expôs o paciente a risco aumentado de broncoaspiração durante a indução anestésica.',
      'A associação da anestesia geral com o bloqueio epidural foi o responsável pelo íleo adinâmico prolongado no pós-operatório deste paciente.',
      'Não havia indicação de sondagem nasogástrica para o caso e a dieta oral sólida deveria ter sido iniciada mesmo com ruídos hidroaéreos débeis.',
      'Por tratar-se de cirurgia de médio porte, com abertura de cólon não preparado, a antibioticoprofilaxia deveria ter sido mantida por 48 horas.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_22',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo masculino, 32 anos, sobrepeso, comparece ao pronto atendimento apresentando quadro de dor tipo cólica, mesogástrica, que migrou para FID e aumentou de intensidade, há cerca de 24hs. Apresentou também vários episódios de vômito. Nega febre, diarreia e sintomas urinários. Encontra-se em BEG, eupneico, afebril, estável. Abdome plano, flácido, doloroso à palpação profunda na FID, com descompressão súbita levemente positiva. Leucograma 11.000, com 90% de segmentados e PCR 36g/l. Ultrassonografia evidenciou apêndice cecal espessado e discretamente aumentado de volume, com hipervascularização da parede ao doppler, sem fecalito ou líquido livre na cavidade. Sobre o caso descrito acima, assinale a alternativa CORRETA:',
    options: [
      'Havia indicação precisa de laparotomia imediata logo após o exame físico, caso contrário o paciente provavelmente evoluiria com complicações como abscesso intracavitário.',
      'A conduta definitiva para o caso só pode ser tomada após a exclusão de apendicolito por tomografia computadorizada.',
      'O achado laboratorial de leucocitose e elevação da proteína C reativa nos permite afirmar que antibioticoterapia por 3 a 5 dias fará parte do tratamento deste paciente.',
      'Está indicada internação hospitalar para tratamento inicial não cirúrgico, com antibióticos e reavaliação clínica após 8 horas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_23',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Paciente do sexo masculino, 48 anos, diabético, é internado com quadro de dor em peso em quadrante superior direito do abdome acompanhado de febre noturna com calafrios, náuseas e vômitos há cerca de 2 semanas. Refere ser portador de colelitíase e relata internação há 1 mês com quadro de colecistite acompanhada de icterícia e febre, sendo tratado clinicamente. Ao exame físico, levemente ictérico, hemodinamicamente estável. Abdome doloroso à palpação em quadrante superior direito, com sinal de Murphy ausente e hepatomegalia palpável. Leucograma de 18.000, elevação de transaminases e fosfatase alcalina. Ultrassonografia evidenciou lesão hipoecoica bem definida em lobo direito do fígado, contendo debris, sem fluxo interno ao doppler, com cerca de 8cm de diâmetro. Sobre o caso descrito, assinale a alternativa INCORRETA:',
    options: [
      'O próximo passo na avaliação deste paciente é a tomografia computadorizada com contraste venoso, para confirmação diagnóstica.',
      'Apesar da aspiração por agulha, guiada por ultrassonografia, provavelmente ser falha como modalidade terapêutica para este caso, ela pode ser indicada para coleta de material para cultura.',
      'Os dados acima nos permitem afirmar que a antibioticoterapia de amplo espectro como modalidade única de tratamento apresenta altos índices de resolutividade para estes casos.',
      'A drenagem percutânea, guiada por tomografia, é opção terapêutica bastante adequada para o caso.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_24',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Paciente do sexo feminino, 48 anos, deu entrada no pronto socorro queixando dor intensa, de início súbito, em região epigástrica e que irradiava para o dorso, associada a vômitos, com evolução de 8 horas. Normotensa, abdome bastante doloroso à palpação em todo o andar superior, sem sinais de irritação peritoneal. Leucócitos 12.000 com desvio à esquerda, fosfatase alcalina 250U/l, amilase 2.300mg/dl e ultrassonografia com colelitíase. No 5º dia de internação, tomografia evidenciou vesícula biliar tópica, normodistendida, com cálculos e aumento do volume e heterogeneidade pancreática com formação de coleção de cerca de 9,0 x 4,0cm ao longo do corpo do pâncreas e densificação da gordura adjacente, sem sinais de compressão gástrica. Sobre o caso descrito, assinale a alternativa CORRETA:',
    options: [
      'A ausência da antibioticoterapia no tratamento inicial foi responsável pela complicação descrita acima.',
      'Por tratar-se de abscesso peripancreático, o próximo passo na conduta do caso é a drenagem cirúrgica da loja pancreática.',
      'A evolução insatisfatória do caso e a formação da coleção pancreática, classificam o caso como pancreatite grave e indica início imediato de antibioticoterapia de largo espectro.',
      'Já que não há compressão gástrica e a paciente se encontra hemodinamicamente estável, o tratamento da coleção neste momento é expectante e sem uso de antibióticos.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_25',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo feminino, 48 anos, vem ao pronto socorro queixando dor anal de início súbito há 24 horas, após episódio de defecação dificultada por fezes endurecidas. A dor era inicialmente moderada e evoluiu com piora progressiva e aparecimento de nodulação local. Durante a inspeção anal, observou-se nódulo arroxeado, em borda anal, não endurecido, bastante doloroso à palpação. Sobre o caso descrito, assinale a alternativa CORRETA:',
    options: [
      'Já que a paciente procurou avaliação médica precoce, é seguro afirmar que ela se beneficiará com tratamento cirúrgico de urgência, sob anestesia local.',
      'Já que o toque retal não pôde ser realizado, há indicação precisa de avaliação tomográfica para a investigação de processo neoplásico retal.',
      'O uso tópico de pomadas de nifedipina são preferenciais neste estágio por diminuir a necessidade de tratamento cirúrgico eletivo posterior.',
      'A decisão terapêutica, se clínica ou cirúrgica, deverá ser baseada no resultado do leucograma e nos níveis de proteína C reativa.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_26',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente do sexo masculino, 21 anos, procura atendimento médico referindo tosse seca persistente, associada a dispneia progressiva aos grandes esforços e perda de cerca de 10kg. Evolução de 2 meses. Nega febre no período. Ao exame físico, chamava a atenção face pletórica e edemaciada. A radiografia simples de tórax evidenciou volumoso alargamento de mediastino superior, sendo indicada a tomografia computadorizada. Esta evidenciou massa sólida em mediastino superior e anterior, com infiltração de hilo pulmonar e grandes vasos da base cardíaca. Sobre o caso acima, assinale a alternativa CORRETA:',
    options: [
      'O edema de face e pletora presentes sugerem constricção tumoral do arco da aorta, conferindo prognóstico ruim ao caso.',
      'A localização da massa tumoral à tomografia e a idade do paciente sugerem o diagnóstico de linfoma, estando indicada a biópsia da massa tumoral que pode ser realizada por toracoscopia ou mediastinoscopia.',
      'Os sintomas descritos pelo paciente e sua faixa etária são altamente compatíveis com miastenia gravis, o que sugere o timoma como principal hipótese diagnóstica para a massa mediastinal.',
      'A punção por agulha guiada por tomografia é contraindicada nestes casos devido ao alto risco de perfuração de grandes vasos da base cardíaca e a baixa quantidade de tecido extraído para análise.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_27',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    text: 'Você é plantonista de uma unidade secundária de pronto atendimento e recebe paciente do sexo masculino, 18 anos de idade, vítima de queimadura de segundo grau em tórax anterior, abdome anterior, região genital e braço esquerdo, por água quente, ocorrido há 15 minutos. Queixa muita dor local. Peso: 60kg. Ao exame físico observamos a presença de bolhas já rôtas. Sobre os cuidados iniciais que devem ser tomadas na conduta deste paciente, assinale a alternativa INCORRETA:',
    options: [
      'O volume de Ringer Lactato para ressuscitação hídrica deste paciente é de aproximadamente 1.400ml nas primeiras 8 horas e 1.400ml nas 16 horas restantes.',
      'Há indicação de internação hospitalar para cuidados e estes devem incluir analgesia potente, antibioticoprofilaxia e averiguação do status vacinal contra o tétano.',
      'Uma vez calculado o volume de Ringer Lactato a ser infundido para ressuscitação, estes valores devem servir apenas de base para hidratação, com o volume de infusão ajustado hora a hora baseado no débito urinário.',
      'Há indicação de curativo sob anestesia para este paciente e tal procedimento deve incluir desbridamento do tecido morto, lavagem da ferida com solução salina estéril e aplicação de curativos com agentes antibacterianos ou substitutos sintéticos de pele.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_28',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    text: 'Paciente do sexo masculino, 28 anos de idade, profissional da construção civil, é atendido no pronto socorro após queda de laje há cerca de 3 horas, queixando dor abdominal. Ao exame físico, o paciente apresenta-se em BEG, discretamente hipocorado, FR: 22irpm, FC: 90bpm e P.A.: 100x70mmHg. O FAST foi positivo para líquido no hipocôndrio esquerdo. Foi realizada expansão volêmica com 500ml de ringer lactato, o que estabilizou seus sinais vitais. Hematócrito 30% e Hemoglobina 10g/dl. Tomografia computadorizada com contraste venoso observada laceração esplênica de 5cm, sem extravasamento de contraste, com líquido livre periesplênico em moderada quantidade. Sobre o caso descrito acima, assinale a alternativa CORRETA:',
    options: [
      'A tomografia evidencia lesão esplênica grave com sangue intra-cavitário, estando indicada a esplenectomia de urgência.',
      'Uma vez que o choque hemorrágico aumenta consideravelmente a morbimortalidade no trauma abdominal, a melhor conduta para o caso seria a embolização arterial da lesão previamente a esplenectomia.',
      'Já que o paciente estabilizou após a ressuscitação volêmica e não foi transfundido, a conduta de menor morbidade para o caso neste momento é a esplenectomia laparoscópica.',
      'A transferência para a Unidade de Terapia Intensiva ou Semi-intensiva, para monitorização contínua, acompanhamento dos níveis de hemoglobina e hematócrito, repetição da tomografia após 48 horas e tentativa de tratamento não cirúrgico é viável para este paciente.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_29',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Paciente do sexo feminino, 45 anos, obesa, vem ao consultório queixando história de pirose crônica. Evolui há cerca de 2 meses com aumento da frequência da pirose, associada a dor retroesternal, regurgitação e perda de peso. Traz consigo endoscopia digestiva que evidenciou duas erosões de 75mm em esôfago distal, não coalescentes. Sobre o caso, assinale a alternativa CORRETA:',
    options: [
      'Os sintomas típicos descritos pela paciente, associados aos seus achados endoscópicos, excluem a necessidade de realização de Phmetria esofagiana para confirmação diagnóstica do caso.',
      'Já que os sintomas apresentados não são típicos e os achados endoscópicos são inespecíficos, o próximo passo para diagnóstico é o início de terapia com bloqueadores de bomba de prótons e realização de Phmetria sem fio por 96 horas.',
      'A ausência de hérnia hiatal na endoscopia digestiva exclui diagnóstico de doença do refluxo gastroesofágico.',
      'O diagnóstico de acalasia será confirmado caso a Phmetria sem fio observe tempo de exposição da mucosa esofágica ao ácido gástrico menor que 4% em todos os dias do exame.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_30',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo feminino, 35 anos, é transferida de Manacapuru para investigação diagnóstica e continuidade de tratamento. Estava internada por 3 dias com história de dor tipo cólica em HD associada a vômitos, após alimentação rica em gordura, sendo tratada clinicamente. À admissão em Manaus, encontrava-se em BEG, lúcida, eupneica, ictérica +/4, normotensa. Seu abdome era globoso, doloroso à palpação profunda em HD, sem irritação peritoneal. Bilirrubina total 3,5mg/dl, bilirrubina direta 3,2mg/dl, fosfatase alcalina 350mg/dl, Gama GT 680mg/dl e amilase 120mg/dl. Ultrassom à beira do leito evidenciou vesícula de paredes finas contendo microcálculos e via biliar principal de 1cm de diâmetro. Sobre o caso descrito, assinale a alternativa INCORRETA:',
    options: [
      'A opção diagnóstica e terapêutica invasiva de escolha para o caso é a associação da ultrassonografia endoscópica com a varredura da via biliar por colangiopancreatografia retrógrada endoscópica.',
      'Há risco de pancreatite aguda após o procedimento terapêutico endoscópico neste caso.',
      'Caso o tratamento endoscópico tenha sucesso para tratamento da patologia acima, a conduta mais adequada seria alta hospitalar para colecistectomia laparoscópica eletiva após 8 semanas.',
      'Caso o tratamento endoscópico não obtenha sucesso para tratamento da patologia acima, a abordagem da via biliar principal via laparoscopia tem melhores resultados que a via laparotômica, desde que o cirurgião tenha habilidade suficiente na condução cirúrgica do caso.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_31',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Paciente do sexo masculino, 57 anos, vem ao atendimento médico queixando dor tipo cólica em FIE com piora progressiva, associada a vômitos e constipação há 48 horas. Hábito intestinal inadequado, com eliminação de fezes endurecidas e ressecadas, sob esforço, cerca de uma vez por semana, há muitos anos. Nega febre e episódios anteriores de dor semelhante. Leucograma: 12.000 e Proteína C reativa: 63mg/l. Tomografia de abdome evidenciou presença de divertículos em sigmoide de parede espessada, com borramento da gordura adjacente, sem coleções ou líquido livre na cavidade abdominal. Sobre o caso descrito, assinale a alternativa CORRETA:',
    options: [
      'Por tratar-se de paciente imunocompetente, sem comorbidades e com bom estado geral, o tratamento clínico inicial pode ser realizado sem antibióticos.',
      'Considerando que a grande maioria dos casos descritos acima evoluem com complicações como perfuração de cólon, formação de abscessos e peritonite, há clara indicação para hospitalização.',
      'A história, o exame físico e a avaliação laboratorial eram suficientes para fechamos o diagnóstico clínico e início do tratamento, sem a necessidade da realização da tomografia.',
      'A conduta definitiva para o caso é a sigmoidectomia eletiva laparoscópica realizada 6 a 8 semanas após a remissão dos sintomas com tratamento clínico.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_32',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo feminino, 49 anos, dá entrada no pronto atendimento queixando dor abdominal tipo cólica, difusa, progressiva, há 3 dias, associada a vários episódios de vômitos. Refere parada de eliminação de gases e fezes desde o início do quadro. Encontra-se desidratada, FR: 28irpm, FC: 90bpm, P.A.: 100x70mmHg. Abdome é distendido, sem cicatrizes ou circulação colateral, hipertimpânico, com RHA aumentados em frequência e intensidade, difusamente doloroso à palpação, sem sinais de irritação peritoneal e sem massas palpáveis. Radiografia simples de abdome evidenciou volumosa distensão de intestino delgado, com sinal de empilhamento de moeda e vários níveis hidroaéreos, sem distensão do cólon e sem pneumoperitôneo. Sobre o caso acima, assinale a alternativa INCORRETA:',
    options: [
      'A ausência gás na árvore de biliar e de cálculos na vesícula na radiografia de abdome exclui o diagnóstico diferencial de íleo biliar.',
      'Apesar da paciente não ter sido submetida a cirurgias abdominais prévias, não se pode excluir as bridas e aderências como diagnóstico diferencial.',
      'O próximo passo na avaliação desta paciente é a tomografia de abdome para definição da etiologia do quadro e investigação de possíveis sinais de sofrimento de alças intestinais.',
      'Radiografias seriadas de abdome após administração de contraste oral hidrossolúvel podem auxiliar na escolha do tratamento para o caso.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_33',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    text: 'Paciente do sexo masculino, 24 anos, é trazido ao pronto socorro por terceiros devido a ferimento por arma branca no tórax. O paciente é admitido desacordado, bradipneico e pálido, com lesão traumática identificada em precórdio. FC: 50bpm e P.A.: 60x30mmHg. O exame físico evidenciou distensão de veias jugulares, murmúrio vesicular fisiológico bilateralmente e abafamento de bulhas cardíacas. Sobre o caso, assinale a alternativa INCORRETA:',
    options: [
      'Este tipo de ferimento atinge mais frequentemente o ventrículo direito.',
      'Uma vez avaliado o mecanismo do trauma e identificada a tríade de Beck, o próximo passo para diagnóstico é a tomografia de tórax com contraste endovenoso.',
      'Apesar de haver sangramento de volume variável, o choque grave apresentado pelo paciente é classificado como obstrutivo.',
      'Há indicação precisa de toracotomia de emergência, frequentemente realizada ainda na sala do atendimento inicial.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_34',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo masculino, 10 anos de idade, apresentando quadro de dor aguda e progressiva em FID, associada a vômitos e febre e sinais de irritação peritoneal. Foi indicada a laparotomia pela hipótese diagnóstica de apendicite aguda, porém durante a exploração cirúrgica foi observado abscesso bloqueado em FID secundário a processo inflamatório e perfuração em estrutura saculiforme de 5cm de diâmetro localizado em íleo distal, há cerca de 50cm da vávula íleo-cecal. O apêndice não tinha sinais patológicos. Optou-se por enterectomia do segmento ileal acometido, enteroanastomose e apendicectomia incidental. As seguintes orientações são adequadas para o caso, EXCETO:',
    options: [
      '"A maioria das pessoas não sabe que tem essa pequena alteração no intestino porque não tem sintomas e se pode passar a vida inteira sem apresentar complicações".',
      '"É uma doença de difícil diagnóstico porque ela normalmente passa despercebida nos exames de imagem como ultrassonografia e tomografia e o diagnóstico geralmente é feito durante uma cirurgia para outras doenças".',
      '"Essa doença não complica apenas com inflamação e casos de obstrução intestinal e hemorragia digestiva também podem ocorrer".',
      '"As duas principais causas de inflamação são a presença de tecido de outras partes do tubo digestivo (tecido ectópico), como esôfago e duodeno, e perfuração por corpos estranhos como espinhas de peixe".',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_35',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    text: 'Você foi convidado para discutir o desfecho insatisfatório de um caso clínico de um paciente politraumatizado. O paciente, do sexo masculino, 60 anos, hipertenso e diabético, foi vítima de agressão física com trauma torácico e abdominal contuso e fratura exposta de fêmur, apresentando sinais clínicos de choque grave. O tratamento definitivo das lesões compreendeu drenagem fechada de tórax por hemopneumotórax, laparotomia exploradora com hepatorrafia devido a extensa laceração hepática e desbridamento cirúrgico com estabilização do foco de fratura. O paciente foi transferido para a UTI para cuidados intensivos, porém evoluiu com pneumonia, infecção no foco de fratura, sepse e óbito após 14 dias. A respeito das implicações imunológicas referentes ao caso acima, assinale a alternativa INCORRETA:',
    options: [
      'Há disfunção endotelial relacionada ao trauma e perda sanguínea, com liberação de fatores moleculares associados ao trauma (DAMPs) que resultam em ativação do complemento e do sistema imune celular, resultando em grande produção de citocinas, inflamação sistêmica e lesão tecidual à distância.',
      'O ácido tranexâmico, frequentemente indicado em pacientes em estado de choque hemorrágico por trauma, parece ter efeito imunomodulador pela inibição da fibrinólise e menor ativação do complemento.',
      'Durante a SIRS, caso se compensem as comorbidades existentes, o idoso traumatizado passa a ter o mesmo prognóstico de pacientes jovens expostos a trauma e perda sanguínea.',
      'Antibioticoprofilaxia, evitar o uso de colóides sintéticos à base de amido na ressuscitação volêmica e o uso restritivo de concentrado de hemácias provavelmente diminuiriam os efeitos da SIRS neste paciente.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_36',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente do sexo masculino, 2 anos de idade, é trazido pela mãe ao pronto socorro, queixando dor inguinal intensa à direita há cerca de 4 horas. Refere aparecimento de "caroço" em região inguinal quando a criança chora, desde o nascimento, e que desaparece quando a criança dorme. Ao exame físico, observamos abaulamento inguino-escrotal volumoso, doloroso à palpação, irredutível, sem sinais flogísticos. Sobre o caso clínico, assinale a alternativa CORRETA:',
    options: [
      'O exame físico sugere estrangulamento herniário, estando indicada a ultrassonografia de urgência para confirmação diagnóstica e programação cirúrgica.',
      'A complicação descrita acima, classifica a doença como Nyhus IVa.',
      'Caso a redução do abaulamento não seja factível, há indicação de tratamento cirúrgico de urgência, com inguinotomia para correção da falha anatômica e laparotomia para enterectomia e enteroanastomose.',
      'A redução do abaulamento é dificultada pela dor e pelo choro, estando indicada a analgesia e sedação para o procedimento.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_37',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    text: 'Paciente do sexo feminino, 58 anos, diabética e obesa, apresenta quadro de dor intensa em membro inferior esquerdo. Refere que há 2 dias iniciou quadro de edema e eritema em perna esquerda, acompanhado de bolhas e áreas de parestesia. Procurou atendimento médico na UBS, sendo prescrita cefalexina e orientações para tratamento domiciliar. Evoluiu hoje com aumento importante da intensidade da dor e piora do aspecto do membro. Nega febre. Ao exame físico, a paciente apresenta-se em REG, pálida, taquicárdica, levemente dispneica, afebril e normotensa. Perna e pé esquerdo com edema com cacifo, eritema, áreas enegrecidas na pele, bolhas hemorrágicas, algumas estouradas drenando conteúdo turvo e fétido. Leucograma: 15.000, Hemoglobina: 9g/dl, PCR: 120mg/dl, glicemia capilar: 350mg/dl, creatinina: 2,5mg/dl. Sobre o caso acima, assinale a alternativa CORRETA:',
    options: [
      'Os dados fornecidos são insuficientes para indicar tratamento cirúrgico, estando indicada a investigação de coleções profundas no membro através de ultrassonografia.',
      'O desbridamento precoce com ressecção agressiva e extensa de tecido infectado e desvitalizado tem impacto direto no sucesso do tratamento e na melhora da sobrevida.',
      'A associação de Penicilina Cristalina com aminoglicosídeos compõe a escolha antibiótica empírica de escolha para o caso.',
      'Quando realizada nas primeiras 72 horas após a admissão, geralmente um desbridamento é suficiente para o controle do foco infeccioso.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_38',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Paciente do sexo masculino, 45 anos, é achado desmaiado no banheiro da sua residência e trazido para o pronto socorro. Apresenta-se hipocorado +++/4, FC: 120bpm, FR: 28irpm, P.A.: 80x60mmHg e débito urinário reduzido. Foi infundido inicialmente 1.000ml de ringer lactato durante ressuscitação volêmica e transfundidos 2 concentrados de hemácias após hemograma revelar hemoglobina 7g/dl. Após as medidas iniciais, o paciente apresentou estabilização dos sinais clínicos e referiu estar apresentando fezes enegrecidas de odor fétido há vários dias. Nega hematêmese e quadro febril. Sobre o caso descrito, assinale a alternativa INCORRETA:',
    options: [
      'Na avaliação laboratorial deste paciente, devemos observar elevados índices de uréia sérica e relação uréia/creatinina acima de 50.',
      'Os dados clínicos apresentados nos permitem afirmar que este paciente apresenta risco elevado para complicações e óbito, sendo indicada tratamento intervencionista urgente.',
      'Admissão do paciente com choque grave por si já fecha critério para tratamento cirúrgico precoce para controle do sangramento.',
      'Caso a endoscopia digestiva alta não evidencie foco de sangramento, a angio-tomografia é opção adequada para identificação do sítio de sangramento.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_39',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Paciente do sexo feminino, 62 anos, tabagista e diabética, apresenta quadro de icterícia progressiva há cerca de 1 mês, associada a prurido cutâneo e emagrecimento, sendo internada para investigação diagnóstica. Icterícia +++/4 e massa palpável, indolor, de contornos bem definidos em HD. Bilirrubina total: 12mg/dl, bilirrubina direta: 11,5mg/dl, fosfatase alcalina: 840mg/dl, gama GT: 1.200mg/dl e CA 19-9: 250U/ml. Tomografia computadorizada com contraste venoso evidenciou volumosa dilatação da vesícula biliar e das vias biliares intra e extra-hepáticas, além de massa sólida de 5cm em cabeça do pâncreas que invade colédoco distal e tem íntima relação com os vasos mesentéricos. Sobre o caso, assinale a alternativa CORRETA:',
    options: [
      'Caso observemos envolvimento menor que 180 graus da circunferência da artéria mesentérica superior, a quimioterapia neoadjuvante pode tornar a ressecção tumoral factível.',
      'A definição da conduta frente a esta tumoração depende de biópsia aspirativa por agulha, realizada via radiologia intervencionista.',
      'Não existe possibilidade de tratamento curativo sem a duodenopancreatectomia e, apesar deste procedimento ter morbidade elevada, ele é amplamente acessível já que a maior parte dos pacientes apresenta doença ressecável ao diagnóstico.',
      'Caso constatada a irressecabilidade do tumor, o tratamento endoscópico paliativo da icterícia deste paciente é contraindicado.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_40',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Paciente do sexo masculino, 32 anos, portador de Retocolite Ulcerativa procura atendimento médico por dor abdominal. Teve o diagnóstico fechado após crises de diarreia sanguinolenta. Desde então vem sendo tratado por aminossalicilatos orais, porém refere uso irregular da medicação. A crise atual iniciou há 3 dias, com cólica abdominal difusa progressiva associada a quadro de diarreia com sangue. Evoluiu com piora do estado geral, iniciando febre diária, piora da frequência e volume sanguinolento da diarreia (cerca de 10 episódios ao dia), anorexia e queda do estado geral. Leucograma: 16.000, Hb: 9g/dl, PCR: 68mg/dl e VHS: 75mm/h. Sobre o caso descrito, assinale a alternativa CORRETA:',
    options: [
      'Há indicação de internação hospitalar para ressuscitação volêmica, monitorização e início do tratamento clínico com opióides para a dor e loperamida para o quadro diarreico.',
      'O tratamento da crise aguda com ciclosporina e infliximabe podem evitar a evolução para tratamento cirúrgico de urgência.',
      'Evolução para megacólon tóxico piora bastante o prognóstico deste paciente, estando indicado o enema opaco baritado para confirmação do seu diagnóstico.',
      'O risco iminente de sepse contraindica o uso de corticoides neste caso.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_41',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'O rastreamento de HIV/Sífilis em gestantes, além do exame na primeira consulta, deve ser realizado:',
    options: [
      'No início do 3º trimestre (28ª semana); no momento do parto, ou em caso de aborto/natimorto, independentemente de exames anteriores.',
      'A cada trimestre; no momento do parto, ou em caso de aborto/natimorto, se exames anteriores negativos.',
      'A cada trimestre; no momento do parto, ou em caso de aborto/natimorto, independentemente de exames anteriores.',
      'No início do 3º trimestre (28ª semana); no momento do parto, ou em caso de aborto/natimorto, se exames anteriores negativos.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_42',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'A Donovanose é causada por qual agente etiológico?',
    options: [
      'Chlamydia Trachomatis.',
      'Klebsiela granulomatis.',
      'Haemóphilus ducreyi.',
      'Mycoplasma genitalium.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_43',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Qual das alternativas abaixo é manifestação da sífilis secundária?',
    options: [
      'Assintomática.',
      'Linfonodos regionais.',
      'Lesões cutâneo mucosas.',
      'Lesões gomosas e nodulares.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_44',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Paciente 28 anos foi ao ginecologista com queixa de corrimento vaginal. O PH vaginal foi 5 e o teste de KOH positivo. Baseado na conduta do Ministério da Saúde, qual a melhor conduta?',
    options: [
      'Ceftriaxona 500mg, IM, dose única.',
      'Clindamicina 300mg, VO, 2x/dia, por 7 dias.',
      'Itraconazol 100mg, 2 comprimidos, VO, 2x/dia, por 1 dia.',
      'Metronidazol 250mg, 2 comprimidos, VO, 2x/dia, por 7 dias.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_45',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Paciente foi ao ginecologista no interior do Amazonas, referindo úlcera genital que apareceu há 2 semanas. Ao exame físico, observou-se lesão ulcerada vulvar, cuja causa provável é uma infecção sexualmente transmissível. Não há laboratório disponível no local. De acordo com o Ministério da Saúde, como o médico assistente deve proceder para o melhor cuidado da paciente?',
    options: [
      'Tratar sífilis e cancroide.',
      'Tratar sífilis e cancroide e investigar linfogranuloma venéreo e Donovanose.',
      'Tratar cancroide, herpes genital, donovanose e linfogranuloma venéreo.',
      'Referenciar a paciente para um grande centro para diagnóstico e tratamento.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_46',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Paciente 38 anos foi ao mastologista com resultado de ultrassonografia, evidenciando nódulo complexo sólido cístico, de forma oval, margens circunscritas, medindo 12 x 10 mm, localizado em quadrante supero-lateral da mama direita. Qual classificação Bi Rads e conduta recomendada?',
    options: [
      'Bi Rads 3, reavaliar em 6 meses.',
      'Bi Rads 2, controle anual.',
      'Bi Rads 4B, core biopsy.',
      'Bi Rads 0, complementar com mamografia.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_47',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Paciente 40 anos foi ao mastologista com resultado de ultrassonografia evidenciando imagem cística, de forma oval, margens circunscritas, com conteúdo espesso, medindo 18 x 12 mm, localizado em quadrante supero lateral da mama direita. Qual classificação Bi Rads e conduta recomendada?',
    options: [
      'Bi Rads 4B, core biopsy.',
      'Bi Rads 2, controle anual.',
      'Bi Rads 3, reavaliar em 6 meses.',
      'Bi Rads 0, complementar com mamografia.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_48',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Paciente 36 anos foi ao ginecologista com queixa de dor aguda, em pontada, em fossa ilíaca direita. Trouxe Ultrassonografia evidenciando cisto hemorrágico que mede 40 mm. Qual a conduta adequada para esse caso?',
    options: [
      'Conduta expectante.',
      'Realizar laparotomia para cistectomia.',
      'Realizar laparoscopia para ooforectomia.',
      'Aspiração guiada por ultrassonografia.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_49',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Assinale a alternativa CORRETA sobre drenagem venosa da veia ovariana:',
    options: [
      'À direita desemboca na veia renal predispondo a varicosidades.',
      'À esquerda desemboca na veia renal predispondo a varicosidades.',
      'Ambas desembocam na veia cava inferior sendo a chance de varicosidade igual em ambos os lados.',
      'Ambas desembocam na veia renal do respectivo lado, sendo a chance de varicosidade igual em ambos os lados.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_50',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'A falha de fusão dos ductos de Muller originam:',
    options: [
      'útero unicorno.',
      'útero septado.',
      'útero em T.',
      'útero didelfo.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_51',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Primipara, 24 horas após parto cesariano, apresentou temperatura axilar de 39 com hipertermia importante na incisão cirúrgica. Qual o agente etiológico mais provável?',
    options: [
      'Staphylococcus aureus ou epidermidis.',
      'Chlamydia trachomatis ou Proteus mirabilis.',
      'Escherichia coli ou Mycoplasma hominis.',
      'Streptococcus beta hemolítico grupo A ou B.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_52',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Gestante, 37 semanas, foi a maternidade com sangramento vaginal discreto. Ao exame as mucosas estavam descoradas ++/4+, útero hipertônico colo com dilatação de 3,0 cm. Não foi identificado batimento cardíaco fetal. Realizada ultrassonografia que diagnosticou óbito fetal. Qual a conduta adequada?',
    options: [
      'Realizar cesariana.',
      'Realizar amniotomia.',
      'Induzir com ocitocina.',
      'Aguardar parto vaginal.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_53',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Gestante, 22 semanas, foi ao pré-natal com ultrassonografia realizada na 21ª semana, evidenciando oligodramnia acentuada. Qual a provável causa para a redução do líquido?',
    options: [
      'Rins policísticos bilaterais levando a redução da diurese fetal.',
      'Atresia de esôfago levando a redução da deglutição do líquido amniótico.',
      'Anomalia de body stalk levando a redução da deglutição do líquido amniótico.',
      'Corioangioma placentário levando a absorção do líquido amniótico.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_54',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Após a administração de ocitocina venosa 6mUI/min em uma gestante com 39 semanas em trabalho de parto, foi observado à cardiotocografia desacelerações tardias. Qual a conduta deve ser adotada inicialmente:',
    options: [
      'Indicar cesariana.',
      'Administrar terbutalina.',
      'Suspender a ocitocina.',
      'Iniciar misoprostol.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_55',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Gestante, 37 semanas, foi a maternidade com sangramento vaginal abundante, vermelho rutilante. Ao exame as mucosas estavam descoradas ++/4+, útero com tônus normal, sem atividade uterina, colo com dilatação de 3,0 cm. Batimento cardíaco fetal 144 bpm. Realizada ultrassonografia que identificou placenta ocluindo o orifício interno cervical. Qual a conduta adequada?',
    options: [
      'Realizar cesariana.',
      'Administrar tocolítico.',
      'Induzir parto com ocitocina.',
      'Aguardar parto vaginal.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_56',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Qual complicação pode ocorrer na gestação gemelar dicoriônica?',
    options: [
      'Transfusão feto fetal.',
      'Perfusão arterial reversa.',
      'Gemelaridade imperfeita.',
      'Restrição de crescimento intrauterino.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_57',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Gestante, 24 semanas, foi ao pré-natal com ultrassonografia realizada na 22ª semana, evidenciando polidramnia acentuada. Qual a provável causa para o aumento do líquido?',
    options: [
      'Pré eclampsia.',
      'Hidranencefalia.',
      'Valvula de uretra posterior.',
      'Rins policísticos bilaterais.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_58',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Primigesta, 8 semanas, Rh negativo foi submetida a um procedimento de esvaziamento uterino pós aborto. Informa que o cônjuge é Rh positivo homozigoto. Qual a conduta a ser adotada?',
    options: [
      'Não é necessário administrar imunoglobulina anti D pois nessa idade gestacional não há risco de aloimunização.',
      'Administrar imunoglobulina anti D para evitar aloimunização que pode ocorrer mesmo em gestações precoces.',
      'Administrar imunoglobulina anti D se o procedimento realizado foi a curetagem pois a mesma proporciona a passagem de hemácias fetais para circulação materna e aloimunização.',
      'Não administrar imunoglobulina anti D se o procedimento realizado foi aspiração manual intrauterina pois há passagem de hemácias fetais para a circulação materna e aloimunização.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_59',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Gestante, IMC 35, na 12ª Semana de gestação foi a primeira consulta pré-natal. Quanto a profilaxia da pré-eclampsia nessa paciente, é correto afirmar que:',
    options: [
      'Deve ser realizada como na população geral.',
      'Aguardar o resultado do Doppler de artérias uterinas.',
      'Iniciar profilaxia com AAS até 36 semanas.',
      'Não há indicação de profilaxia.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_60',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Secundigesta, 24 semanas, com relato de parto prematuro anteriormente, foi a consulta de pré-natal levando ultrassonografia transvaginal realizada com 20 semanas que referia cervicometria de 22 mm. Assinale a alternativa CORRETA referente ao colo e a conduta.',
    options: [
      'Colo de tamanho normal. Realizar acompanhamento pré-natal.',
      'Colo curto. Iniciar gluconato de cálcio.',
      'Colo de tamanho normal. Reavaliar em 2 semanas.',
      'Colo curto. Iniciar progesterona vaginal.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_61',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente de quatro meses de vida é trazida pela mãe à UBS por apresentar estridor persistente há 2 meses. Segundo a mãe, a criança melhora quando colocada em posição pronada. O diagnóstico mais provável seria:',
    options: [
      'Laringocele.',
      'Laringomalácea.',
      'Estenose Subglótica.',
      'Paresia De Prega Vocal.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_62',
    cycle: 'Internato',
    subject: 'Neonatologia',
    text: 'A afecção respiratória que acomete mais frequentemente recém-nascidos prematuros com menos de 28 semanas de gestação, do sexo masculino, em filhos de mães diabéticas, e que sofreram asfixia ao nascimento, chama-se:',
    options: [
      'Síndrome do escape de ar.',
      'Síndrome da aspiração de mecônio.',
      'Síndrome da hipertensão pulmonar persistente neonatal.',
      'Síndrome do desconforto respiratório por deficiência de surfactante alveolar.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_63',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Gestante adquiriu tuberculose pulmonar durante a gestação. Persiste bacilífera mesmo após o nascimento do bebê. Em relação ao recém-nascido dessa mãe, é CORRETO afirmar que:',
    options: [
      'Deve-se realizar vacina da BCG e contraindicar o aleitamento materno.',
      'Não há risco de tuberculose congênita, e o aleitamento materno está contraindicado até a mãe não ser mais bacilífera.',
      'A vacina da BCG está indicada ao nascimento, não sendo necessária a quimioprofilaxia.',
      'Deve-se iniciar quimioprofilaxia com isoniazida ou rifampicina e, após 3 meses, se teste tuberculínico for negativo, vacinar com BCG.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_64',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'O sobrepeso e a obesidade são definidos pela OMS como uma epidemia mundial. 80% das crianças com sobrepeso ou obesidade tornam-se adultos obesos. Sobre a obesidade infantil, é INCORRETO afirmar que:',
    options: [
      'Como prevenção, deve-se comer à mesa, em família, pelo menos 5 a 6 vezes por semana.',
      'O IMC (Índice de Massa Corporal) não é um bom parâmetro para definir sobrepeso e obesidade infantil.',
      'É fundamental limitar o tempo de telas e estimular atividades ao ar livre para prevenir e tratar o/a sobrepeso/obesidade.',
      'Crianças obesas possuem maior risco de doenças cardiovasculares, resistência insulínica, doença hepática gordurosa e doença do refluxo gastroesofágico.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_65',
    cycle: 'Internato',
    subject: 'Neonatologia',
    text: 'Pedro, RN a termo, adequado para idade gestacional, PN 3400g, filho de mãe com pré-natal adequado. Sorologia de toxoplasmose com 7 semanas de gestação: IgM (método Elisa) positivo, IgG positivo, com alta avidez. Exame clínico normal ao nascimento. A conduta recomendada é:',
    options: [
      'Realizar avaliação de fundo de olho, ultrassonografia transfontanela e abdominal, hemograma, punção lombar e sorologias do recém-nascido, antes de indicar o tratamento.',
      'Coletar sorologia para toxoplasmose do sangue do cordão, realizar fundoscopia e indicar o tratamento dependendo do resultado.',
      'Realizar cuidados de rotina, não havendo necessidade de investigação diagnóstica ou de tratamento do recém-nascido.',
      'Iniciar tratamento com sulfadiazina, pirimetamina e ácido folínico por um ano, independentemente do resultado de exames.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_66',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Você recebe uma mãe de 23 anos, primeiro filho, para avaliação do recém-nascido que está com 7 dias de vida. Os pais estão cansados e cheios de dúvida, principalmente com relação à amamentação. Você pede que a mãe ponha o bebê para mamar, para avaliar a técnica e dar suporte àquela família. São sinais de posicionamento adequado do bebê na hora da amamentação todas as alternativas, EXCETO:',
    options: [
      'Bochechas do bebê bem encovadas durante a sução.',
      'Bebê bem apoiado.',
      'Corpo do bebê próximo ao da mãe.',
      'Bebê com cabeça e tronco alinhados.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_67',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Márcia irá retornar ao trabalho daqui duas semanas e está com medo de que seu filho desmame, pois ficará muitas horas longe de casa. Quais das seguintes orientações quanto à conservação do leite materno estão CORRETAS:',
    options: [
      'O leite amornado e não consumido pode ser oferecido novamente em até 4 horas.',
      'O leite materno armazenado no freezer não pode exceder 7 dias.',
      'Ao ser retirado do freezer, pode ser mantido em geladeira (máximo 12h) para descongelar e ser aquecido em banho maria.',
      'Pode ser descongelado no micro-ondas em temperatura baixa por 2 minutos e oferecido a temperatura ambiente.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_68',
    cycle: 'Internato',
    subject: 'Neonatologia',
    text: 'Gestante em acompanhamento pré-natal fez diagnóstico de HIV com 29 semanas. Iniciou TARV e fez uso regular até o nascimento do bebê. A Carga viral (CV) com 38 semanas era de 1400 cópias. Com relação ao manejo do RN, qual deverá ser a conduta no alojamento conjunto:',
    options: [
      'Coletar CV ao nascimento e iniciar profilaxia com AZT + 3TC + RAL por 28 dias.',
      'Coletar CV no primeiro dia de vida e iniciar profilaxia com AZT xarope por 28 dias.',
      'Coletar CV no 14º dia de vida e iniciar profilaxia com AZT e NVP por 28 dias.',
      'Coletar CV ambulatorialmente e iniciar profilaxia com TDF + 3TC + DTG.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_69',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Na cetoacidose diabética, qual é a principal alteração de eletrólitos que pode ocorrer durante o tratamento?',
    options: [
      'Hiponatremia.',
      'Hipernatremia.',
      'Hipocalemia.',
      'Hipercalemia.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_70',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente de 7 meses, reside em um grande centro urbano, foi levado pela mãe a um pronto-socorro, com história de queda do berço ao pular por cima da grade. Ao exame apresenta hematoma em tronco e fratura em metáfise proximal da tíbia esquerda. A conduta indicada, além dos cuidados relacionados ao quadro clínico:',
    options: [
      'Denunciar a mãe à autoridade policial.',
      'Orientar a mãe para aumentar a grade do berço.',
      'Notificar ao Conselho Tutelar, por suspeita de maus-tratos.',
      'Encaminha-lo para exame de corpo delito com médico legista.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_71',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente de 5 meses, em aleitamento materno exclusivo, deu entrada no serviço de emergência com quadro de lesões papuloeritematosa em todo o corpo, edema periorbitário a esquerda e labial. A mãe refere início do quadro, a aproximadamente 15 minutos, após ter ofertado leite de vaca ao lactante. Ao exame: Lactante ativa, hidratada, boa perfusão capilar, placas papuloeritematosas difusas, broncoespasmo leve, edema em pálpebras, orelhas e lábios. Abdômen sem alterações. Diante do quadro acima, qual a 1ª opção de tratamento:',
    options: [
      'Adrenalina IM.',
      'Lavagem gástrica.',
      'Carvão ativado.',
      'Anti-histamínico VO.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_72',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Escolar de 8 anos, é atendido no setor de emergência com história de tosse e coriza há 24h, evoluindo com dispneia nas últimas 6 h. Mãe relata que criança tem asma controlada, não faz uso de corticoide inalatório ou oral e nunca necessitou de internação. Ao exame físico: Escolar dispneico, tiragem subcostal, FR 40 rpm, FC 144 bpm, Sat O2 de 89%, comunica-se apenas com frases curtas. Segundo as Diretrizes Brasileiras para Manejo da ASMA, essa crise pode ser classificada como:',
    options: [
      'Leve.',
      'Muito grave.',
      'Moderada.',
      'Moderada grave.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_73',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Adolescente de 15 anos, sexo feminino, vem ao consultório para consulta de rotina, relata ser vegetariana há 3 anos. Ao exame: Adolescente com índice de massa corporal baixo, TANNER M4P4, ciclo menstrual normal, observa-se no exame laboratorial: colesterol baixo. Diante do quadro acima a paciente deve ser orientada quanto ao risco de deficiência de:',
    options: [
      'Vitamina B1.',
      'Vitamina A.',
      'Vitamina E.',
      'Vitamina B12.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_74',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactante de 10 meses é levado ao Pronto Socorro, com quadro de diarreia liquida, várias evacuações ao dia, vômito, anorexia, temperatura não aferida há 3 dias. Ao exame físico: BEG, irritado, inquieto, olhos fundos e sinal de prega com desaparecimento lento, bebendo avidamente a água ofertada. Pela recomendação do Ministério da Saúde, o diagnóstico e conduta neste caso é:',
    options: [
      'Desidratação – iniciar hidratação com sais de reidratação oral na Unidade de Emergência.',
      'Desidratação grave – internar e iniciar hidratação venosa.',
      'Desidratação – liberar prescrição com sais de reidratação oral, alimento habitual e oferta de líquidos abundantes.',
      'Desidratação grave – iniciar hidratação venosa, após 4 a 6 horas avaliar, se ainda estiver desidratado, indicar interação.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_75',
    cycle: 'Internato',
    subject: 'Neonatologia',
    text: 'A princípio, qual a orientação na conduta de recém-nascido em boas condições de vitalidade, idade gestacional de 34 semanas e peso de 2.450g:',
    options: [
      'Aleitamento materno exclusivo.',
      'Leite da própria mãe ofertado por sonda.',
      'Fórmula de partida oferecida por sonda.',
      'Fórmula de partida oferecida na mamadeira.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_76',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Escolar de 9 anos, sexo masculino, é admitido no serviço de emergência após acidente automobilístico torporoso e pouco reativo aos estímulos. Ao exame físico: dor em hemitórax direito, FC 150 bpm, PA 110 x 70 mmHg, enchimento capilar 3,5 segundos. Após garantir a permeabilidade da via aérea, aporte de oxigênio e observado diurese de 0,2 ml/kg/h, deve-se administrar:',
    options: [
      'Solução salina hipertônica 3% - 10 ml/hg.',
      'Concentrado de hemácias 10 ml/kg.',
      'Solução salina isotônica 0,9% - 20 ml/kg.',
      'Albumina 5% - 2 ml/kg.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_77',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Escolar de 8 anos, sexo masculino, sofreu acidente de bicicleta. Ao ser atendido na via pública, queixava de dor no ombro esquerdo e respondia as solicitações do médico do serviço de urgência móvel. Na admissão escolar apresenta quadro de choque, sendo a etiologia mais provável:',
    options: [
      'Ruptura de aorta descendente.',
      'Ruptura de pâncreas.',
      'Ruptura de fígado.',
      'Ruptura de baço.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_78',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Adolescente de 13 anos, é levado a consulta por apresentar febre alta há 10 dias. Ao exame físico: Dor de garganta com faringite moderada, petéquias palatais, edema de palpebral, adenomegalia cervical anterior e posterior, epitrocleares e hepatoesplenomegalia. Qual o exame para confirmação diagnostica a ser solicitado:',
    options: [
      'Aspirado de medula.',
      'Sorologia para dengue.',
      'Cultura de secreção faríngea.',
      'Sorologia para Vírus Epstein Barr (EBV).',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_79',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Recém-nascido sexo feminino, caracterizado por uma monossomia completa ou parcial do cromossomo "X", ao exame apresenta: linfedema no dorso dos pés e das mãos, ausência de pulsos nos membros inferiores e deslocamento patelar. Ecocardiograma detectado: Coarctação da Aorta. USG visualizado: Rins em ferradura. O diagnóstico mais provável deste recém-nascido, é de Síndrome de:',
    options: [
      'Prader-Willi.',
      'Turner.',
      'Down.',
      'Noonan.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_80',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente de 15 meses, portador de doença multissistêmica hereditária, um traço genético recessivo, comum entre a população branca. Frequentemente chega ao setor de emergência com tosse crônica e respiração sibilante desde o primeiro mês de vida. Foi internado a primeira vez aos 4 meses de vida com bronquiolite viral aguda grave por 7 dias, necessitando de ventilação mecânica pulmonar invasiva. Precisou de internação por desidratação grave com hiponatremia por duas vezes. Nasceu com APGAR 9/10 e alta com a mãe no terceiro dia de vida. A hipótese diagnostica mais provável é:',
    options: [
      'Asma grave.',
      'Fibrose cística.',
      'Síndrome dos cílios imóveis.',
      'Doença do refluxo gastroesofágico.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_81',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Em uma manhã de atendimento na UBS você atendeu diversos pacientes com situações de glicemia elevada. Assinale a alternativa a qual descreve, dentre os casos abaixo, aquela que possui indicação para introdução de insulinoterapia:',
    options: [
      'P., 40 anos, IMC=38; apresentou exame com glicemia de jejum no valor de 140 mg/dl; síndrome metabólica associada.',
      'Y., 23 anos, gestante na 13a. semana de gravidez, com exame de glicemia do primeiro trimestre no valor de 95 mg/dl.',
      'A., 48 anos, em uso de metformina 850mg duas vezes ao dia, glicemia de jejum: 98 mg/dl e hemoglobina glicada: 6,2%.',
      'O., 53 anos, em uso de metformina e gliclazida em dose máxima, hemoglobina glicada: 11%.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_82',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'A., 30 anos, comparece para iniciar seu pré-natal na UBS. Ela se encontra na 10a. semana de gestação e realizou os testes rápidos para infecções sexualmente transmissíveis com o seguinte resultado: Teste Rápido para HIV: não reagente; Teste Rápido para sífilis: reagente; Teste Rápido para Hepatite B e C: não reagente. A gestante relatou nunca ter feito tratamentos prévios com Penicilina Benzatina e nunca percebeu lesões genitais, mas há cerca de um ano e meio teve lesões na pele, inclusive na palma das mãos, não pruriginosas e que sumiram depois de um tempo. Considerando o caso, a melhor conduta ser tomada seria:',
    options: [
      'Tratar com penicilina benzatina 2.400.000UI por três semanas, por se tratar de caso de sífilis latente tardia ou de duração indeterminada.',
      'Tratar com penicilina benzatina 2.400.000UI por três semanas, por se tratar de caso de sífilis latente recente.',
      'Solicitar VDRL para confirmação diagnóstica.',
      'Solicitar um segundo teste treponêmico, uma vez que o teste rápido tem elevada probabilidade de falso positivo na gravidez.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_83',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'No Registro de Saúde Orientado por Problemas, o item O do SOAP refere-se a(o):',
    options: [
      'Lista de Problemas do dia, sejam problemas novos ou episódios já iniciados.',
      'Decisões tomadas: alterações de manejo terapêutico, exames solicitados, referenciamentos realizados, orientações e recomendações à pessoa, aspectos a serem vistos ou revistos na próxima consulta.',
      'Exame da pessoa, em que é relacionada a descrição da pessoa que está à sua frente, suas emoções percebidas, os procedimentos do exame clínico realizado (sempre de acordo com as queixas) e os resultados de exames ou procedimentos.',
      'História relatada ou referida pela pessoa, sendo a parte em que se registram o que a pessoa diz, assim como informações qualitativas referentes a queixas ou sintomas.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_84',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Assinale a alternativa onde estão relacionados somente os Atributos Derivados da Atenção Primária descritos por Bárbara Starfield:',
    options: [
      'Competência cultural, longitudinalidade, coordenação do cuidado.',
      'Orientação familiar, orientação comunitária, competência cultural.',
      'Integralidade, competência cultural, longitudinalidade.',
      'Coordenação do cuidado, orientação familiar, integralidade.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_85',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'As crises do ciclo de vida familiar podem ser previsíveis, esperadas, ou acidentais, inesperadas, por isso é importante conhecer as fases do ciclo de vida familiar. Assinale a alternativa onde tem somente fases do ciclo de vida familiar da classe popular.',
    options: [
      'Saindo de casa: jovens solteiros, O novo casal, Famílias com filhos pequenos.',
      'Famílias com adolescentes, encaminhando os filhos e seguindo em frente, Famílias no estágio tardio de vida.',
      'Adolescente/Adulto jovem solteiro, A família com filhos, A família no estágio tardio da vida.',
      'A família no estágio tardio da vida, Famílias com filhos pequenos, Famílias com adolescentes.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_86',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Assinale a alternativa que traz a definição de Prevenção Quaternária:',
    options: [
      'Ação feita para identificar um paciente ou população em risco de supermedicalização, protegê-los de uma intervenção médica invasiva e sugerir procedimentos científica e eticamente aceitáveis.',
      'Conjunto de medidas utilizadas para a detecção precoce e intervenção imediata para o controle de um problema ou doença e a minimização de suas consequências.',
      'Medidas que visam fornecer serviços de apoio e reabilitação para minimizar a morbidade e maximizar a qualidade de vida depois de uma doença ou lesão de longa duração.',
      'Medidas aplicáveis a uma doença ou grupo de doenças em particular para bloquear as causas da doença antes que estas envolvessem a pessoa.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_87',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'J.B.S, 23 anos iniciou o tratamento com esquema básico para tuberculose pulmonar confirmada por meio do teste rápido molecular (TRM-TB) há 7 dias. Dentre os contatos intradomiciliares está L.B.S, irmã de J.B.S, de 17 anos, que está com 11 semanas de uma gestação sem intercorrências até aqui. L.B.S demonstrou bastante preocupação quanto a manifestar a doença do irmão, embora não tenha nenhum sintoma respiratório no momento. Posteriormente, a mesma retorna com o exame de PPD que acusa o resultado de 5mm. Diante desse resultado, a enfermeira da equipe deve:',
    options: [
      'Solicitar radiografia de tórax e TRM-TB para excluir tuberculose ativa.',
      'Iniciar tratamento para infecção latente da tuberculose com o esquema 3HP (Rifapentina 150mg (P) e Isoniazida (H) 300mg) em doses semanais durante 3 meses.',
      'Postergar tratamento infecção da latente da tuberculose para 13 semanas de gestação.',
      'Postergar tratamento da infecção latente da tuberculose para após o parto.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_88',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'O Sr. F., 94 anos, é acompanhado há mais de 10 anos pela equipe de saúde da UBS. O histórico de saúde incluía Insuficiência Cardíaca Crônica, Diabetes Mellitus tipo 2 e há 3 anos sequelas de uma fratura de fêmur que o deixou permanentemente acamado. A filha do Sr. F. contacta a equipe para informar que o mesmo acabara de falecer em casa. Sabendo que o município não possui Serviço de Verificação de Óbito (SVO), mas conta com Instituto Médico Legal (IML), o médico da equipe de saúde deve decidir pela seguinte conduta:',
    options: [
      'Encaminhar para o IML do município a fim de que a declaração de óbito (DO) seja preenchida por médico deste serviço.',
      'Encaminhar para o SVO mais próximo do município a fim de que a declaração de óbito (DO) seja preenchida por médico deste serviço.',
      'Após examinar o corpo e constatar a morte, fornecer declaração de óbito (DO) com base na revisão dos registros em prontuário.',
      'O responsável pelo falecido, acompanhado de duas testemunhas, deve comparecer ao cartório do registro civil, que preenche as três vias da declaração de óbito (DO).',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_89',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    text: 'As medidas de rendimento de testes diagnósticos são habitualmente analisadas por meio do quadro "2x2" que relaciona a presença ou não de uma doença com o resultado de um teste (Doentes/Não Doentes x Teste Positivo/Negativo = A, B, C, D). Qual das fórmulas abaixo descreve corretamente o cálculo da ESPECIFICIDADE de um teste diagnóstico?',
    options: [
      'D/C+D.',
      'D/B+D.',
      'A/A+C.',
      'A/A+B.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_90',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    text: 'Você é médico de uma equipe de Estratégia Saúde da Família de uma cidade interiorana e, em certo dia, o secretário de saúde do município o convocou para avaliar a implantação de um programa de rastreamento para uma determinada doença cardíaca. Durante a revisão da literatura sobre o tema você constata que de cada 2000 pessoas com essa doença que não fazem o rastreamento, 400 morrem, enquanto com o rastreamento, o número de mortes é de 200. Considerando os dados, qual das alternativas descreve CORRETAMENTE o número de pessoas a serem rastreadas para se evitar um óbito?',
    options: [
      '5.',
      '10.',
      '20.',
      '40.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_91',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'O Método Clínico Centrado na Pessoa (MCCP) surgiu das demandas das pessoas por um atendimento que contemplasse de maneira integral suas necessidades, preocupações e vivências relacionadas à saúde ou às doenças. O componente do MCCP que realiza o entendimento integrado da pessoa inteira, resultando das informações que, ao longo do tempo, o médico acumula sobre aqueles que atende, significando que vai além de diagnosticar doenças ou assistir resposta a doenças é:',
    options: [
      'Intensificando a relação entre a pessoa e o médico.',
      'Explorando a saúde, a doença e a experiência da doença.',
      'Elaborando um plano conjunto de manejo dos problemas.',
      'Entendendo a pessoa como um todo – o indivíduo, a família e o contexto.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_92',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'A organização dos serviços da Atenção Primária no Brasil ocorre por meio da Estratégia Saúde da Família (ESF), organizada com base no conceito de território e de equipe multiprofissional. Segundo a lógica da organização da ESF, qual das alternativas abaixo descreve CORRETAMENTE a unidade territorial do Agente Comunitário de Saúde?',
    options: [
      'Área.',
      'Moradia.',
      'Microárea.',
      'Distrito sanitário.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_93',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'A imagem abaixo representa uma ferramenta de abordagem familiar que mostra a família e suas conexões com outros sistemas (família estendida, trabalho, escola, saúde, religião etc.). Qual ferramenta é essa?',
    options: [
      'Ecomapa.',
      'Genograma.',
      'Apgar familiar.',
      'PRACTICE.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_94',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'A cidade de Manaus tem sofrido, nos últimos meses, efeitos do fenômeno "El Niño". A escassez de chuvas e o tempo seco tem favorecido a proliferação de queimadas, estando a cidade coberta de fumaça durante vários dias. Este fenômeno climático tem intensificado a ocorrência de problemas respiratórios, como a tosse. Em uma manhã de atendimento em sua UBS você atendeu vários pacientes com queixa de tosse, entretanto apenas UM destes pacientes possui tosse com SINAL DE ALERTA para causas subjacentes de maior gravidade que deve ser encaminhado ao especialista focal para cuidado compartilhado. Qual?',
    options: [
      'Paciente com tosse há três dias associada a coriza.',
      'Paciente com tosse seca persistente, com sensação de bola na garganta e "queimação no estômago", sem perda ponderal.',
      'Paciente tabagista, apresentando tosse produtiva com secreção purulenta e síndrome consumptiva.',
      'Paciente com tosse seca após início do uso de enalapril para HAS.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam23_95',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'De acordo com a Política Nacional de Atenção Básica (PNAB) de 2017, a Equipe de Saúde da Família (eSF) é composta minimamente por:',
    options: [
      'Médico, enfermeiro, auxiliar e/ou técnico de enfermagem e agente comunitário de saúde (ACS).',
      'Médico, enfermeiro, cirurgião-dentista e agente comunitário de saúde (ACS).',
      'Médico, enfermeiro, agente comunitário de saúde (ACS) e agente de combate às endemias (ACE).',
      'Médico, auxiliar e/ou técnico de enfermagem, agente comunitário de saúde (ACS) e agente de combate às endemias (ACE).',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_96',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'De acordo com as indicações de Cuidados Paliativos, qual desses pacientes NÃO preenche os critérios para receber os serviços?',
    options: [
      'CLP, 3 anos, portadora de epidermólise bolhosa grave.',
      'JRN, 43 anos, portadora de câncer de mama com metástase cerebral e óssea, lúcida e orientada, com controle álgico.',
      'HDM, 23 anos, internado em unidade hospitalar há 3 meses, após acidente automobilístico, evoluindo com amputação de membro inferior direito, dores crônicas e dor do membro fantasma além depressão.',
      'ABR, 45 anos, realizou tireoidectomia total devido a carcinoma papilífero de tireoide há 15 anos, sem metástase.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_97',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Josiane, 32 anos, encontra-se na 27ª. Semana de sua segunda gravidez. Josiane compareceu à sua consulta de pré-natal sem queixas relativas ao ciclo gravídico-puerperal, contudo relatou que há duas semanas vem apresentando prurido intenso nas costas e na região glútea durante à noite. Ao examinar a pele de Josiane, o Dr. Maurício constatou a presença de diversas pápulas eritematosas com túneis e marcas de escoriação. Josiane disse que na sua casa residem além dela, do filho de 4 anos e de seu atual marido, a família de sua irmã, incluindo bebê de quatro meses. Considerando o provável diagnóstico de escabiose, as afirmações abaixo fazem parte do manejo do caso com EXCEÇÃO de:',
    options: [
      'Roupas que não puderem ser lavadas podem ser colocadas dentro de um saco plástico fechado por 72 horas.',
      'A permetrina está contraindicada para tratar a escabiose no bebê de quatro meses.',
      'As pessoas que coabitam com Josiane devem ser tratadas mesmo que estejam assintomáticas, uma vez que podem estar com escabiose ativa.',
      'O tratamento de escolha para Josiane é o uso de permetrina loção a 5%.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam23_98',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Jaime, 57 anos, morador de cidade com epidemia de dengue, procura a UBS com quadro de febre de até 39 °C há 3 dias associado à dor retro orbital de forte intensidade e mialgia. Sem quaisquer outras queixas. Apresenta diabetes mellitus em uso de metformina 850mg/dia – última hemoglobina glicada: 7,2%. Nega outras doenças. No exame físico, bom estado geral, hidratado, corado, eupneico. Temperatura axilar: 38,2 °C, frequência cardíaca: 104 bpm, pressão arterial: 128/80 mmHg. Ausculta cardíaca e pulmonar normais. Abdômen com dor discreta à palpação difusamente, sem dor à descompressão súbita. Prova do laço negativa. Depois da avaliação, Jaime é notificado como caso suspeito de dengue. Seguindo o fluxograma mais recente de classificação de risco para dengue do Ministério da Saúde, a conduta mais adequada é iniciar:',
    options: [
      'Hidratação oral, prescrever paracetamol, conforme sintomas, e liberar paciente para ser reavaliado quando cessar a febre (período em que costumam ocorrer as complicações) ou antes se sinais de alerta.',
      'Hidratação oral, solicitar hemograma com plaquetas (conforme fluxo local) e prescrever paracetamol, conforme sintomas. Liberar o paciente para ser reavaliado o mais breve possível, assim que o exame esteja pronto ou antes se sinais de alerta.',
      'Hidratação venosa, imediatamente, e sintomáticos conforme necessidade. Encaminhar para o hospital para realização de exames laboratoriais.',
      'Hidratação oral e prescrever paracetamol, conforme sintomas. Se disponível no local, solicitar hemograma com plaquetas e liberar paciente apenas se exame normal e depois de reavaliação clínica, com orientação de retorno em 48 horas ou antes se sinais de alerta.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam23_99',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Sobre a Atenção Primária à Saúde (APS) e seus princípios, assinale a alternativa CORRETA:',
    options: [
      'Na APS, integralidade tem o sentido de cuidado abrangente, de reconhecer a variedade das necessidades relacionadas à saúde do paciente e disponibilizar os recursos para abordar essas necessidades.',
      'O fato de grande parte da população brasileira ter acesso direto a outros níveis de atenção possui pouca influência na avaliação da coordenação do cuidado na APS.',
      'O acesso de primeiro contato é o princípio soberano da APS, devendo ser fornecido baseado na organização da agenda, em detrimento das necessidades das pessoas.',
      'Referência e contrarreferência são ferramentas essenciais para a manutenção do princípio da longitudinalidade.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam23_100',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    text: 'Supondo que a taxa de mortalidade anual de câncer de pulmão numa dada comunidade seja de 20 por 100.000 nos fumantes e de 2 por 100.000 nos não fumantes, qual o risco relativo e o risco absoluto dos fumantes em relação aos não fumantes, de morrer por câncer de pulmão, respectivamente:',
    options: [
      '9 e 20 por 100.000.',
      '10 e 18 por 100.000.',
      '18 e 10 por 100.000.',
      '38 e 20 por 100.000.',
    ],
    correctIndex: 1,
  },
,
  {
    id: 'cermam09_01',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    text: 'Uma mulher de 66 anos, portadora de câncer de mama, com metástases ósseas, está em tratamento quimioterápico há seis meses. Para controle das dores, faz uso de anti-inflamatórios não-esteroidais, codeína em doses moderadas e bisfosfonatos. Foi trazida para consulta pelos familiares porque há um mês apresenta-se sem interesse pelas tarefas do dia-a-dia, diz que está sem esperança, só pensa em morrer e quer interromper o tratamento oncológico. A conduta apropriada nesse caso é:',
    options: [
      'Concordar com os sentimentos da paciente, respeitar suas vontades, interromper a quimioterapia e aumentar a dose de analgésicos.',
      'Discutir com a paciente seus sentimentos atuais, explicar a natureza de seus sintomas e propor medicação antidepressiva.',
      'Evitar discutir os sintomas e os sentimentos da paciente e prescrever ansiolíticos.',
      'Internar a paciente e hiberná-la com sedativos potentes.',
      'Discutir a questão somente com a família e adotar as medidas que forem julgadas pertinentes.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam09_02',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'A Endometriose está associada a todos os processos/situações abaixo. Das citadas qual a que tem pouca ou nenhuma correlação com a endometriose?',
    options: [
      'Dismenorreia.',
      'Abortos recorrentes.',
      'Dispaurenia.',
      'Infertilidade.',
      'Dor pélvica crônica.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam09_03',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Paciente de 30 anos, G3A3 provocados, com curetagens uterinas subsequentes procura Serviço de Infertilidade com queixa de amenorreia há 12 meses. Dentro da propedêutica do casal infértil foi realizada uma histerossalpingografia que apresenta falha de enchimento na região endometrial compatível com sinéquia. Qual a síndrome compatível com o caso?',
    options: [
      'Síndrome de Sheehan.',
      'Síndrome de Albright.',
      'Síndrome de Asherman.',
      'Síndrome da Sela túrcica vazia.',
      'Síndrome de Swyer.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam09_04',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Marque a que não constitui contraindicação absoluta para a terapia de reposição hormonal-TRH no climatério:',
    options: [
      'Insuficiência hepática grave.',
      'Doença tromboembólica.',
      'Câncer de Endométrio.',
      'Sangramento genital não-diagnosticado.',
      'Diabete melito.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam09_05',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Os fatores de risco para carcinoma do colo uterino incluem, exceto:',
    options: [
      'Início precoce da atividade sexual.',
      'Múltiplos parceiros sexuais.',
      'Infecção pelo papiloma vírus (HPV 16 e 18).',
      'Uso de anticoncepcionais orais perimenopausa.',
      'Número elevado de gestações/ partos.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam09_06',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'No acervo de peças do Departamento de Patologia da UFAM, a peça da coleção de ovários de número 09.29 é um tumor ovariano que apresenta as seguintes características: tumor globoso, cístico, contendo em seu inferior pelos, sebo e fragmento que simula dente. Algumas vezes podemos encontrar ainda nestes tumores esboços organoides. Podemos dizer que se trata de:',
    options: [
      'cistadenoma seroso.',
      'carcinoma embrionário.',
      'teratoma maduro ou cisto dermoide.',
      'cistadenoma mucinoso.',
      'disgerminoma.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam09_07',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Baseando-se na regra de Naegele, uma secundigesta que tem sua última menstruação em 22/06/2008, terá sua data provável de parto estimada para?',
    options: [
      '29/03/09.',
      '01/04/09.',
      '30/03/09.',
      '31/03/09.',
      '28/02/09.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam09_08',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Mulher jovem com 23 anos, gestante pela 1ª vez, 36 semanas, apresenta-se com Pressão Arterial = 170 x 110 mmHg na Emergência Obstétrica e queixa-se de cefaleia, visão turva, diplopia e dor epigástrica. Diante desse quadro qual a hipótese mais provável?',
    options: [
      'Quadro clássico de eclâmpsia.',
      'Crise convulsiva iminente.',
      'Acidente vascular cerebral.',
      'Síndrome HELLP.',
      'Iminência de eclampsia.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam09_09',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Qual das alternativas a seguir não é considerada causa de abortamento espontâneo precoce recorrente?',
    options: [
      'Anormalidades cromossomiais estruturais em um ou ambos os pais.',
      'Insuficiência da fase lútea.',
      'Reabsorção incompleta do septo intrauterino.',
      'Relações sexuais durante o primeiro trimestre de gravidez.',
      'Reconhecimento imune materno impróprio do feto que se implanta.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam09_10',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Os fatores de risco para osteoporose na pós-menopausa incluem todos os abaixo, exceto:',
    options: [
      'Ser negra.',
      'História familiar.',
      'Baixa ingestão de cálcio durante a vida.',
      'Menopausa cirúrgica.',
      'Ser idosa.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam09_11',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'No acolhimento de uma Unidade Básica de Saúde (UBS), chegou uma mulher de 47 anos, trêmula, com tontura, sudorética, com palidez perioral, náusea e sensação de urgência evacuatória. Apresenta taquicardia e taquipneia, porém, o restante dos sinais vitais está sem alteração. O diagnóstico mais provável é ansiedade. Diante do caso a conduta médica deve ser: I. encaminhar o paciente ao psiquiatra. II. prescrever tratamento farmacológico inicial. III. solicitar exames para tranquilizar a paciente. IV. avaliar a correlação dos sintomas como desencadeante para o quadro clínico. Quais estão corretas?',
    options: [
      'Apenas I e II.',
      'Apenas II, III e IV.',
      'Apenas II e III.',
      'Apenas III e IV.',
      'Apenas II e IV.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam09_12',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'O SUS incorpora o referencial do controle social em seus princípios. Marque a alternativa que corresponde à sua aplicabilidade.',
    options: [
      'Realização obrigatória de conferências de saúde municipais a cada ano eleitoral.',
      'Realização não obrigatória da reunião dos conselheiros de saúde estaduais.',
      'Somente o conselho nacional de saúde tem composição com garantia de 50% de representantes da população.',
      'Composição dos conselhos nacional, estaduais e municipais de saúde com garantia de 50% de representantes da população (usuários) e 50% compreendem gestores, prestadores de serviços e trabalhadores de saúde, independente do número de conselheiros.',
      'Conselhos estaduais e municipais com garantia de 50% de representantes dos gestores da saúde.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam09_13',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Médico de Família e Comunidade é chamado para atender um caso de urgência na escola próxima à Unidade de Saúde da Família. Ao chegar, vê uma jovem de 25 anos convulsionando, que, logo a seguir, perde a consciência. Fora atropelada por um automóvel que fugiu do local. Ele constata o óbito no mesmo instante em que chega a equipe do Serviço de Atendimento Móvel de Urgência (SAMU). Considere as afirmações: I. A declaração de óbito pode ser emitida tanto pelo SAMU, quanto pelo MFC. II. A declaração de óbito deve ser emitida pelo MFC. III. A declaração de óbito deve ser emitida pelo médico legista/IML. Qual(is) está(ão) correta(s)?',
    options: [
      'Apenas I.',
      'Apenas II.',
      'Apenas III.',
      'Apenas II e III.',
      'Todas estão corretas.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam09_14',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Em uma situação em que não há disponibilidade de ultrassonografia, uma mulher apresentou-se ao Médico de Família e Comunidade com dor pélvica, mas sem sinais de irritação peritoneal. Qual dos grupos de achados abaixo apoiaria integralmente o diagnóstico de doença inflamatória pélvica aguda?',
    options: [
      'Varizes vulvares + aderências, miomas e cisto ovariano à palpação.',
      'Dor à mobilização do colo, dor à palpação anexial, febre e proteína C reativa aumentada.',
      'Leucocitose, HIV positivo, diarreia e delírio.',
      'Beta-HCG positivo, pressão arterial > 160/100 mmHg, proteinúria e edema de pernas.',
      'Sangramento uterino aumentado, flatulência, humor depressivo e polaciúria.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam09_15',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    text: 'Segundo os dados estatísticos disponíveis no Ministério da Saúde, a 1ª causa de mortalidade entre crianças e adolescentes de 5 a 19 anos é:',
    options: [
      'Doenças infecciosas.',
      'Afecções do período neonatal.',
      'Doenças do Aparelho circulatório.',
      'Causas externas (acidentes e violência).',
      'Tumores próprios desta faixa etária.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam09_16',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    text: 'A mortalidade infantil é subdividida em períodos neonatal e pós-neonatal em função principalmente de:',
    options: [
      'Os riscos de morrer estão igualmente distribuídos nos períodos.',
      'Para investigação da incidência de óbitos.',
      'As causas de morbimortalidade são iguais nos períodos analisados.',
      'As causas de óbitos no período perinatal são iguais às do período neonatal tardio.',
      'Após análise dos dados deve-se propor medidas de melhoria dos serviços de saúde.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam09_17',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Uma empresa de ônibus de transporte escolar submete seus motoristas a uma avaliação médica geral, que inclui a coleta de sangue e urina para exames laboratoriais. Sem informar os funcionários, a direção da empresa orienta o médico responsável para incluir, nos exames de rotina, as dosagens de álcool, cocaína e maconha. Do ponto de vista ético, o médico deve:',
    options: [
      'Incluir dosagens solicitadas, mesmo que isso signifique invasão da privacidade dos funcionários, porque o que está em jogo é a segurança das crianças transportadas.',
      'Ignorar a solicitação da empresa, ainda que signifique colocar em risco o seu próprio emprego.',
      'Incluir as dosagens solicitadas, pois ele poderá ser responsabilizado criminalmente, num eventual acidente que envolva um motorista drogado.',
      'Solicitar permissão aos funcionários, pois a realização dos exames laboratoriais é um ato médico e só pode ser efetuado com o consentimento do paciente.',
      'Incluir as dosagens solicitadas, porque empresas de transporte coletivo têm o direito de investigar o uso de drogas ilícitas pelos seus funcionários, sem comunicação prévia.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam09_18',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Criança de 01 ano de idade chega ao Posto de Saúde para receber a vacina tríplice viral (S&C). Conforme calendário de vacinação recomendado pelo Ministério da Saúde (Brasil), espera-se que tenha recebido anteriormente as seguintes vacinas:',
    options: [
      'BCG- Hepatite B- Haemophilus tipo B- Pólio e rotavirus.',
      'DTP- BCG- Polio- Hepatite A- Hepatite B.',
      'BCG- Pólio- DTP- Haemophilus tipo B- Hepatite B - rotavirus e febre amarela.',
      'BCG- Hepatite A e B- Pólio- Haemophilus tipo B e febre amarela.',
      'Haemophilus tipo B- BCG- Hepatite A- Hepatite B e tríplice viral dose inicial.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam09_19',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Você é chamado para investigar um surto de diarreia aguda em uma creche. Qual o agente etiológico mais provável nessa condição?',
    options: [
      'Escherichia coli.',
      'Giardia lambia.',
      'A. lumbricoides.',
      'Rotavirus.',
      'Cryptosporidium.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam09_20',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'No modelo de gestão plena de atenção básica, o município recebe recursos do Fundo Nacional de Saúde para o financiamento:',
    options: [
      'integral da assistência à saúde.',
      'das ações de assistência básica à saúde.',
      'das ações do Programa de Saúde da Família.',
      'das ações baixa e média complexidade.',
      'das ações de controle de endemias.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam09_21',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Menino de 05 anos de idade, bem nutrido, sem nenhum sinal ou sintoma prévio, voltando de uma festa, apresenta leve quadro diarreico, seguido de dor abdominal que começou em torno da cicatriz umbilical e agora migra para baixo e para a direita. Temperatura axilar, 37,9 graus e retal, 39°. Não quer comer. À palpação, há sensibilidade maior no flanco e fossa ilíaca direitos. A radiografia simples do abdome é inexpressiva, exceto pela presença de fecalito no limite inferior do flanco direito. O toque retal revelou apenas presença de muco. Diante deste quadro clínico, o diagnóstico mais provável é:',
    options: [
      'apendicite.',
      'diverticulite de Meckel.',
      'invaginação intestinal.',
      'enterite.',
      'adenite mesentérica.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam09_22',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'A fim de evitar a desnutrição em lactente com 4 meses de idade, o melhor conselho que você daria a uma mãe nutriz, em um país em desenvolvimento, quando ela descobre que está novamente grávida é:',
    options: [
      'Continuar amamentando o maior tempo possível e começar alimentação complementar após 6 meses de idade.',
      'Considerar uma alternativa para o leite humano e suspender o aleitamento o mais rápido possível.',
      'Interromper a gravidez e usar planejamento familiar até que a criança tenha 2 anos de idade.',
      'Suspender o aleitamento materno o mais rápido possível e introduzir outros alimentos.',
      'Manter o aleitamento materno e introduzir leite artificial com mucilagens e outros alimentos complementares.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam09_23',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente de 6 meses, desnutrido, com clínica de broncopneumonia e estado geral comprometido, apresenta-se no pronto-socorro infantil onde foi requisitado Raio X de tórax. A presença, no exame radiológico, de pneumatoceles, derrame pleural e abscesso pulmonar são indicativos de infecção causada mais provavelmente por:',
    options: [
      'Staphylococcus aureus.',
      'Estreptococo beta-hemolítico do grupo A.',
      'Haemophilus influenzae do tipo B.',
      'Mycoplasma pneumoniae.',
      'Pseudomonas aeruginosa.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam09_24',
    cycle: 'Internato',
    subject: 'Neonatologia',
    text: 'Os critérios clínicos avaliados no recém-nascido após os passos iniciais na sala de parto são:',
    options: [
      'Cor, respiração e tônus muscular.',
      'Respiração, cor e frequência cardíaca.',
      'Respiração, frequência cardíaca e cor.',
      'Respiração, tônus musculares e cor.',
      'Frequência cardíaca, respiração e cor.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam09_25',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Criança com 4 anos de idade, não vacinada com BCG, apresenta-se com teste de PPD = reator forte 12mm, assintomática, Rx do tórax sem anormalidades. Pai e mãe são tuberculosos, baciliferos e iniciaram uso do Esquema I há dez dias. A conduta correta em relação à criança é:',
    options: [
      'Apenas observar, se vier a apresentar sinais/sintomas entrar com Esquema I.',
      'Quimioprofilaxia secundária, com isoniazida por seis meses.',
      'Quimioprofilaxia primária, com isoniazida por três meses.',
      'Tratamento com Esquema I por seis meses.',
      'Repetir o teste PPD e Rx do tórax em três meses.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam09_26',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Você atende um recém-nascido na sala de parto e suspeita de síndrome de Down. Assinale abaixo qual alteração não estará associada com esta patologia:',
    options: [
      'Face achatada.',
      'Epicanto.',
      'Protusão de língua.',
      'Prega palmar única.',
      'Hipertonia muscular.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam09_27',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Uma menina de 12 anos de idade com repetidas crises de faringite estreptocócica desenvolveu outro episódio de amigdalite. O teste rápido para Estrepto foi positivo e foi iniciado ampicilina oral, a primeira dose no consultório. Uma hora mais tarde, ela desenvolveu uma sensação estranha e um formigamento perilabial. Em seguida, ficou apreensiva, com dificuldade de deglutir e manifestando voz rouca. Na chegada ao pronto-socorro, a criança apresentava urticária gigante e mostrava os seguintes sinais vitais: Pulso 130bpm, FR32, PA 70/30, temperatura axilar 37,5°C. Qual dos abaixo é mais apropriado para o caso?',
    options: [
      'Ringer lactato.',
      'Prometazina.',
      'Adrenalina.',
      'Prednisona.',
      'Cimetidina.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam09_28',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente de 1 ano de idade, pesando 8,0Kg, baixo nível socioeconômico e condição ambiental precária, apresenta há um dia quadro diarreico com três evacuações líquidas, de coloração esverdeada e presença de muco, acompanhada de vômito pós-alimentar, dor abdominal intermitente e febre. No exame físico apresentava-se apática, choro fraco, palidez cutânea, mucosas secas e olhos encovados. A melhor conduta, neste caso, é:',
    options: [
      'Pausa alimentar, hidratação endovenosa e realimentação com fórmula isenta de lactose.',
      'Pausa alimentar, antiemético, terapia de reidratação oral (TRO) e realimentação com fórmula isenta de lactose.',
      'TRO e realimentação com fórmula isenta de lactose.',
      'TRO, realimentação com leite de vaca diluído e antibioticoterapia.',
      'TRO, realimentação com a dieta habitual do paciente e manutenção da hidratação com soro oral.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam09_29',
    cycle: 'Ciclo Clínico',
    subject: 'Ortopedia',
    text: 'Osteocondroses também denominada osteocondrite juvenil ou osteonecrose asséptica juvenil constitui uma necrose asséptica que afeta principalmente as epífises e as apófises dos ossos em crescimento. Correlacione: I. Doença de Köhler. II. Doença de Osgood-Schlatter. III. Doença de Legg-Perthes. IV. Doença de Sever. ( ) Necrose vascular da cabeça e do fêmur. ( ) Apofisite do calcâneo. ( ) Necrose asséptica do tubérculo da tíbia. ( ) Necrose asséptica da escafoide társico.',
    options: [
      'I, II, IV, III.',
      'II, I, III, IV.',
      'IV, I, II, III.',
      'IV, I, III, II.',
      'III, IV, II, I.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam09_30',
    cycle: 'Ciclo Básico',
    subject: 'Parasitologia',
    text: 'Menina com 6 anos de idade, apresentou quadro importante de tosse. O médico residente achou o quadro clínico sugestivo de síndrome de Löeffler. Em quais verminoses há uma fase larvária pulmonar obrigatória?',
    options: [
      'Teníase, enterobíase, ascaridíase.',
      'Ascaridíase, ancilostomíase, estrongiloidíase.',
      'Tricocefalíase, teníase, enterobíase.',
      'Ancilostomíase, ascaridíase, amebíase, giardíase.',
      'Apenas os protozoários têm ciclo pulmonar obrigatório.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam09_31',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: 'Homem de 44 anos apresentando sintomas compatíveis com hipoglicemia há cerca de 20 dias. Nega uso de qualquer medicamento. Os exames realizados revelaram: Glicemia de jejum = 38, 45 e 48 mg/dl, as insulinemias basais foram de 16, 10 e 8 um/ml (N - até 6) e a dosagem de Peptídeo C foi de 8,2 ng/ml (N = 0,3 - 3,5). A hipótese diagnóstica mais provável é:',
    options: [
      'Hipoglicemia autoimune.',
      'Pancreatite crônica.',
      'Hipoglicemia induzida por insulina exógena.',
      'Insulinoma.',
      'Diabetes instável.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam09_32',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: 'As evidências indicam que as formas de carcinoma broncogênico mais associados ao tabagismo são:',
    options: [
      'Carcinoma epidermoide e carcinoma "oat cell".',
      'Adenocarcinoma e carcinoma escamoso.',
      'Carcinoma bronquíolo-alveolar e adenocarcinoma.',
      'Carcinoma de pequenas células e adenocarcinoma.',
      'Carcinoma de grandes células e carcinoma epidermoide.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam09_33',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'A infecção microbiana da superfície endotelial do coração resulta em síndrome da endocardite infecciosa. Com muita frequência, nos usuários de drogas injetáveis, a valva tricúspide é acometida. Nesta situação, qual o agente infeccioso mais comumente isolado?',
    options: [
      'Staphylococcus aureus.',
      'Haemophilus.',
      'Staphylococcus epidermidis.',
      'Estreptococos do grupo varidans.',
      'Mieloma múltiplo.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam09_34',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    text: 'Homem, com 60 anos, afrodescendente, apresenta anemia, pneumonia bacteriana de repetição, dor lombar e osteopenia difusa com fratura patológica de corpos vertebrais. Foi detectada ainda uma insuficiência renal com proteína de Bence Jones no sedimento urinário. Aponte a hipótese diagnóstica mais provável para o caso:',
    options: [
      'Hipertireoidismo.',
      'Tumor de próstata.',
      'Osteomalácia.',
      'Hiperparatireoidismo.',
      'Mieloma múltiplo.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam09_35',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    text: 'Quanto à transfusão de concentrado de plaquetas, pode-se afirmar que:',
    options: [
      'Está indicado em paciente plaquetopênicos com sangramento ativo ou no preparo de cirurgias.',
      'As tranfusões plaquetárias de rotina envolvem testes de compatibilidade específica para plaquetas.',
      'Os pacientes com PTI não toleram baixos níveis de plaquetas, sendo transfundidos mesmo quando houver destruição acelerada de plaquetas.',
      'O uso profilático é preconizado na leucemia aguda, quando as plaquetas < 100.000/mcl.',
      'A monitorização na contagem das plaquetas não é determinante para novas transfusões.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam09_36',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: 'Existem determinados achados que, especialmente quando surgem associados, permitem estabelecer com mais convicção o diagnóstico diferencial entre uma infecção do trato urinário baixo e uma pielonefrite aguda. Assinale a opção que os apresenta:',
    options: [
      'Mais de 100 piócitos por campo, hematuria e febre.',
      'Bacteriúria maciça, hematúria e dor lombar.',
      'Dor lombar, cilindros leucocitários e febre.',
      'Mais de 100 hemácias por campo, disúria e bacteriúria maciça.',
      'Piúria, bacteriúria e hematúria.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam09_37',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: 'Paciente tem diagnóstico de lúpus eritematoso sistêmico há 4 anos, com acometimento renal hematológico, neurológico e cutâneo, dependente de corticoide. Nos últimos 6 meses usou 10 gramas de corticoide e 6 gramas de ciclofosfamida. Há dois meses vem queixando-se de dor na região do quadril direito, principalmente no final do dia após longas caminhadas. A provável causa da dor é:',
    options: [
      'Artrite pelo LES.',
      'Artrite séptica.',
      'Necrose avascular de colo do fêmur.',
      'Bursite hansênica.',
      'Lombociatalgia.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam09_38',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    text: 'Infecção secundária é uma importante complicação em pacientes queimados que perderam a epiderme e a sepse resultante é responsável por um número significativo de mortes nesses pacientes. Qual a etiologia mais frequente de um quadro de sepse em grande queimado?',
    options: [
      'Gram negativos.',
      'Streptococcus pyogenes.',
      'Staphylococcus epidermidis.',
      'S. aureus e pseudomonas aeruginosa.',
      'Fungos, principalmente Candida sp.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam09_39',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    text: 'Deu entrada no pronto-socorro às 3 horas da manhã, um paciente do sexo masculino, 35 anos de idade, presidiário, trazido por agentes penitenciários informando que o paciente estava com diarreia, febre, cãimbras musculares e dificuldade para dormir. Os policiais relataram que o mesmo está preso há 10 dias, por uso e tráfico de drogas. Ao exame foi observado: taquicardia, hipertensão arterial, febril, agitação, miose, creção de pelos, lacrimejamento e rinorreia. Qual o provável diagnóstico?',
    options: [
      'Abstinência de álcool.',
      'Abstinência de opioides.',
      'Abstinência de cocaína.',
      'Intoxicação por benzodiazepínicos.',
      'Nenhuma das anteriores.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam09_40',
    cycle: 'Ciclo Clínico',
    subject: 'Geriatria',
    text: 'Mulher de 78 anos, aposentada como professora de ensino médio, portadora de doença arterial coronariana, diabetes e insuficiência renal crônica, é submetida a uma avaliação geriátrica ampla, face a crescente necessidade de ajuda para realizar atividades do dia-a-dia. Desde que teve um acidente vascular cerebral há dois anos, se movimenta com a ajuda de um andador. No Mini-Exame do Estado Mental (MEEM), apresentou escore de 23/30. Vive só desde que o marido morreu há 1 ano. Qual o dado apresentado que deve ser considerado como maior fator de risco para mortalidade, independente de outros, nesse caso?',
    options: [
      'O fato de viver só.',
      'Polimorbilidade crônica.',
      'História pregressa de acidente vascular cerebral.',
      'Uso regular de mais cinco medicamentos.',
      'Declínio cognitivo com perda da independência na vida diária.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam09_41',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    text: 'Vítima de agressão por arma branca no sexto espaço intercostal esquerdo, na linha hemiclavicular, chega a sala de emergência com pulso de 140bpm, PA = 60X30mmHg e FR = 28mov/min. Não há desvio de traqueia, o murmúrio vesicular é dimétrico bilateralmente. O quadro é mais compatível com:',
    options: [
      'Lesão de vasos de estreito superior.',
      'Lesão de artéria pulmonar esquerda.',
      'Lesão de vasos priocárdio-frênicos.',
      'Tamponamento cardíaco.',
      'Hematoma retroesternal por lesão vascular.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam09_42',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: 'A associação de anidrose + ptose palpebral + miose + enoftalmia caracterizam a Síndrome (X) e está relacionada com (Y). Quais palavras completam corretamente?',
    options: [
      '(X) paraneoplásica; (Y) tumor pulmonar metastático.',
      '(X) Claude-Bernard-Horner; (Y) tumor maligno de ápice pulmonar.',
      '(X) Cushingoide; (Y) carcinoide pulmonar.',
      '(X) veia cava superior; (Y) tumor pulmonar metastático.',
      '(X) veia cava superior; (Y) tumor pulmonar bilateral.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam09_43',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A imensa maioria dos tumores carcinoides tem origem intestinal. A localização responsável pela disseminação de metástases desses tumores ocorre, com mais frequência, no:',
    options: [
      'reto.',
      'duodeno.',
      'apêndice.',
      'jejuno-íleo.',
      'ânus.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam09_44',
    cycle: 'Ciclo Clínico',
    subject: 'Ortopedia',
    text: 'Paciente com lombalgia, sem história de trauma, atendido no pronto-socorro, com exame neurológico normal e contratura da musculatura paravertebral. A suspeita diagnóstica mais provável se o paciente tiver, respectivamente, 10, 30 e 60 anos de idade, é:',
    options: [
      'espondilolise - lombalgia postural - tumor metastático.',
      'escoliose - espondilolise - lombalgia postural.',
      'tumor metastático - mieloma - artrite reumatoide.',
      'tumor metastático - mieloma - artrite.',
      'tumor de Wilms - escoliose - osteoporose.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam09_45',
    cycle: 'Ciclo Clínico',
    subject: 'Ortopedia',
    text: 'Nas osteomielite piogênica que acomete mais frequentemente uma criança, entende-se por Sequestro:',
    options: [
      'Depósito de tecido ósseo lamelar.',
      'Abscesso intraósseo na cortical envolvido por osso reacional.',
      'Segmento de tecido ósseo necrosado que pode drenar por trajeto fistuloso.',
      'Ruptura do periósteo com drenagem do abscesso para partes moles.',
      'Nenhuma das respostas.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam09_46',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Os marcadores séricos tumorais, como a alfafetoproteina e o antígeno carcinoembrionário são cada vez mais usados na propedêutica das massas neoplásticas. De modo geral, ainda que não sejam usados no diagnóstico inaugural, seu uso atinge a que objetivo?',
    options: [
      'Estadiamento dos tumores, principalmente de células hepáticas ou testiculares.',
      'Monitorização da resposta de tumores de células germinativas à terapia.',
      'Avaliação da ocorrência de recidivas.',
      'Estimativa da carga tumoral, auxiliando no diagnóstico.',
      'Todos os acima.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam09_47',
    cycle: 'Ciclo Clínico',
    subject: 'Oftalmologia',
    text: 'Paciente com 45 anos portador de miopia (- 1,00 D/E), refere que, atualmente, necessita tirar os óculos para ler. A melhor hipótese é:',
    options: [
      'Surgimento de hipermetropia.',
      'Surgimento da presbiopia.',
      'Surgimento de astigmatismo.',
      'Surgimento de astigmatismo hipermetrópico.',
      'Regressão de miopia.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam09_48',
    cycle: 'Internato',
    subject: 'Medicina Intensiva',
    text: 'Mulher de 65 anos, internada na U.T.I. com diagnóstico de pancreatite grave, é portadora de miocardiopatia e hipertensão. O exame físico revela paciente com confusão mental. PA= 100x70mmHg; FC= 100bpm e diurese normal. Gasometria arterial com máscara de O2 10L/min: pH = 7,15; PaCO2 = 39; PaO2 = 47; HCO3 = 13, BE = -15,3; saturação arterial de O2 = 72%. Assinale a correta:',
    options: [
      'A diurese normal afasta o diagnóstico de choque.',
      'A ventilação mecânica não está indicada porque a PaCO2 está normal.',
      'Nessa situação, a primeira medida terapêutica é a correção do bicarbonato.',
      'A gasometria revela quadro de acidose por distúrbios metabólicos.',
      'A queda nos valores de bicarbonato decorre da tentativa de compensar a acidose respiratória.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam09_49',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: 'Homem de 28 anos é trazido ao PS após queda de aproximadamente 3 metros de altura um dia antes. Notou que sua urina tornou-se mais escura, semelhante a chá. Apresentava marca na dobra do cotovelo, sugestiva de droga injetável. Ao exame físico, apresentava-se normotenso, euvolêmico, afebril e eupneico. Sua coxa e parte da nádega esquerdas estão empastadas. Os exames colhidos revelam: creatinina = 3,0mg/dL, potássio = 6,0mEq/L, cálcio = 7,5mg/dL, fósforo = 7,5mg/dL, urina tipo 1 = proteína++, hemácias++ e presença de muitos cilindros granulares. O diagnóstico para esse paciente é de insuficiência renal (X) devida à/ao (Y). Qual das abaixo completa melhor as lacunas?',
    options: [
      '(X) aguda - (Y) rabdomiólise.',
      '(X) aguda - (Y) nefropatia por HIV.',
      '(X) aguda isquêmica - (Y) uso de cocaína.',
      '(X) crônica - (Y) nefropatia por HIV.',
      '(X) crônica pré-renal - (Y) sequestro de líquido.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam09_50',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: 'Homem de 25 anos, previamente hígido, apresentou quadro súbito de dor torácica esquerda, seguida de dispneia, o que o motivou a procurar o P.S. Ao exame físico, chama a atenção o murmúrio vesicular diminuído no lado esquerdo, frequência respiratória = 18 e à percussão som claro pulmonar. O provável diagnóstico é:',
    options: [
      'Tumor de mediastino.',
      'Atelectasia por lesão endobrônquica.',
      'Pneumotórax espontâneo primário.',
      'Tromboembolismo pulmonar.',
      'Infarto agudo do miocárdio.',
    ],
    correctIndex: 2,
  },
,
  {
    id: 'cermam12_01',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'O delírio pós-operatório ocorre numa proporção de 11 a 25%, com maiores índices registrados em idosos. Entre os diagnósticos abaixo, o que NÃO é fator causal do delírio:',
    options: [
      'Hipotermia.',
      'Acidose.',
      'Analgésicos Narcóticos.',
      'Infarto do Miocárdio pós-operatório.',
      'Desidratação.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_02',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Disfagia com perda da peristalse esofagiana, ocasionado por perda ou diminuição de células ganglionares no plexo mioentérico, o que ocasiona relaxamento ineficaz do esfíncter esofagiano inferior:',
    options: [
      'Megaesôfago Chagásico',
      'Esôfago em Quebra Nozes',
      'Divertículo de Zenker',
      'Acalasia',
      'Esôfago de Barret',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_03',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'A ruptura esofagiana espontânea, promovida por vômitos com aumento da pressão intraluminal:',
    options: [
      'Síndrome de Mallory-Weiss',
      'Síndrome de Boerhaave',
      'Síndrome de Dumping',
      'Síndrome de Belsey',
      'Síndrome Kasabach-Merritt',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_04',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'O triângulo dos Gastrinomas tem por limites:',
    options: [
      'Pequena curvatura gástrica, cauda do pâncreas e 2ª porção do duodeno.',
      'Ducto hepático, antro gástrico e corpo do pâncreas.',
      'Antro gástrico, corpo do pâncreas e 2ª porção do duodeno.',
      'Ducto cístico, junção do corpo e cauda do pâncreas e a junção da 2ª e 3ª porção do duodeno.',
      'Cauda do pâncreas, hilo esplênico e grande curvatura gástrica.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_05',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'São causas de obstrução intestinal funcional, EXCETO:',
    options: [
      'Porfiria',
      'Uremia',
      'Hipotireoidismo',
      'Bezoar',
      'Pancreatite',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_06',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Tumores de interesse clínico e experimental recente, devido identificação da ativação do receptor c-Kit (mutação oncogênica), e o desenvolvimento de um agente terapêutico que suprime o crescimento tumoral (mesilato de imatinibe):',
    options: [
      'Adenocarcinoma Gástrico',
      'Tumores Estromais Gástricos',
      'Tumor Carcinoide',
      'Linfoma não Hodgkin',
      'Cistoadenocarcinoma mucinoso do apêndice',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_07',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A síndrome Carcinoide ocorre em 10% dos tumores carcinoides, que se localizam nos órgãos abaixo, EXCETO:',
    options: [
      'Intestino Delgado',
      'Pâncreas',
      'Ovário',
      'Pulmão',
      'Tireoide',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_08',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'A fáscia transversalis representa:',
    options: [
      'O limite inferior do canal inguinal.',
      'Assoalho do canal inguinal.',
      'O limite superior do canal inguinal.',
      'A superfície do canal inguinal.',
      'Parte do tendão conjunto.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_09',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A gliconeogênese processada no fígado e no rim é ativada utilizando-se a (____________) derivada do músculo.',
    options: [
      'Treonina',
      'Glutamina',
      'Albumina',
      'Triptofano',
      'Arginina',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_10',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A albumina plasmática é um método excelente para a mensuração do estado nutricional. Sua vida média é de:',
    options: [
      '9 horas.',
      '2 dias.',
      '9 dias.',
      '21 dias.',
      '28 dias.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_11',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Na desnutrição do tipo marasmo somente uma das alternativas é correta:',
    options: [
      'Manutenção da imunocompetência.',
      'Manutenção do peso corpóreo.',
      'Baixos níveis de proteínas viscerais.',
      'Ocorre nas doenças graves e trauma.',
      'Manutenção da prega cutânea do tríceps.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_12',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Em qualquer caso de interrupção abrupta da infusão venosa das soluções de hiperalimentação parenteral (retirada, saída acidental do cateter, término da etapa sem continuidade da infusão etc.), qual o cuidado imediato a ser tomado?',
    options: [
      'Administração imediata de sol. de lipídios para oferta energética.',
      'Administração imediata de insulina simples 10 Unidades endovenosa.',
      'Administração imediata de sol. de aminoácidos a 10%.',
      'Administração de solução de glicose a 10% por veia periférica ou através de cateter da veia subclávia.',
      'Infusão imediata de solução cristaloide.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_13',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    text: 'Homem, 25 anos, é trazido ao serviço de emergência após ter sofrido acidente de trânsito. Sua respiração é difícil e ele se mostra cianótico. Murmúrio vesicular inaudível, mesmo no campo do pulmão direito, que é ressonante à percussão. O primeiro passo na conduta terapêutica deverá ser:',
    options: [
      'Obtenção de radiografia do tórax imediatamente.',
      'Introdução de sonda endotraqueal oral.',
      'Iniciar oxigenação por meio de um dispositivo com máscara e válvula.',
      'Cricotireoidotomia.',
      'Drenagem de tórax.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_14',
    cycle: 'Internato',
    subject: 'Cirurgia Vascular',
    text: 'Mulher, 67 anos, edema de coxa há 2 semanas com características linfáticas, o que investigar?',
    options: [
      'Trombose venosa profunda distal',
      'Neoplasia abdominal',
      'Linfedema primário',
      'Síndrome de Cockett',
      'Trombose venosa profunda proximal',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_15',
    cycle: 'Internato',
    subject: 'Cirurgia Vascular',
    text: 'Em um paciente com isquemia crônica de membros inferiores, a realização da arteriografia tem como principal objetivo:',
    options: [
      'Decidir sobre o tipo de tratamento (clínico ou cirúrgico).',
      'Programar a cirurgia.',
      'Diagnosticar a sede da oclusão.',
      'Faz parte do protocolo para todos os doentes com isquemia crônica dos membros inferiores.',
      'Complementar a documentação do caso.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_16',
    cycle: 'Internato',
    subject: 'Cirurgia Vascular',
    text: 'Um paciente com quadro de obstrução arterial aguda é visto numa localidade onde não existem condições para cirurgia arterial, devendo ser removido para outra cidade. Qual seria a medicação de escolha a ser utilizada para tentar impedir o agravamento do quadro isquêmico?',
    options: [
      'Aspirina',
      'Pentoxifilina',
      'Vasodilatador',
      'Heparina',
      'Somente analgésicos',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_17',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Em relação à apendicite aguda, assinale a alternativa CORRETA:',
    options: [
      'Vômitos frequentes que se iniciam antes da dor estão presentes na grande maioria dos casos.',
      'Febre alta e calafrios nas primeiras 24 horas estão presentes na grande maioria dos casos.',
      'Anorexia está presente na grande maioria dos casos.',
      'Blumberg (+) no quadrante inferior direito do abdome está ausente na grande maioria dos casos.',
      'O sinal de Lenander presente torna este diagnóstico bastante improvável.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_18',
    cycle: 'Ciclo Clínico',
    subject: 'Otorrinolaringologia',
    text: 'Sobre o Câncer de Nasofaringe, qual o sintoma mais comum de apresentação inicial:',
    options: [
      'Nódulo cervical',
      'Epistaxe',
      'Obstrução Nasal',
      'Otite média serosa',
      'Anosmia',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_19',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    text: 'A síndrome de Claude Bernard-Horner consiste em:',
    options: [
      'Enoftalmia, Midríase e Ptose.',
      'Exoftalmia, Surdez e Ptose.',
      'Enoftalmia, Miose e Ptose.',
      'Exoftalmia, Miose e Ptose.',
      'Exoftalmia, Midríase e Surdez.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_20',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Qual dos fatores abaixo não é indicação formal de cirurgia bariátrica?',
    options: [
      'Hipertensão de difícil controle com IMC acima de 35.',
      'Doente com quadro de hipotireoidismo de difícil controle e IMC acima de 35.',
      'Diabético em uso de hipoglicemiante com IMC 36.',
      'Paciente super obeso que colocou balão e perdeu 20 kg em seis meses de tratamento.',
      'IMC acima de 50.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_21',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: 'Uma mulher de 40 anos, não fumante e sem histórico familiar de doenças coronarianas, fez exames: Colesterol total = 290; LDL = 210; HDL = 45; Triglicerídeos = 160; Glicemia jejum = 98. IMC 26. Orientada a dieta hipolipídica e atividade física. Três meses após, IMC 24,8: Colesterol total = 253; LDL = 180; HDL = 45; Triglicerídeos = 140. Função tireoidiana: TSH = 16 mcUI/ml (VN 0,3-5) e T4 livre = 0,6 ng/dl (VN 0,8-1,9). Qual a melhor conduta para este caso?',
    options: [
      'Iniciar fenofibrato ou ciprofibrato.',
      'Iniciar L-tiroxina.',
      'Iniciar L-tiroxina + uma estatina.',
      'Apenas insistir nas medidas não farmacológicas.',
      'Iniciar uma estatina.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_22',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: 'Menina de 12 anos, diabetes tipo 1, deu entrada com Cetoacidose Diabética (CAD). Após insulinoterapia (infusão contínua) e correção da desidratação, houve redução importante da glicemia e normalização do pH sanguíneo, mas a cetonúria, medida por fita reagente, acentuou-se. Qual a conduta mais apropriada?',
    options: [
      'Aumentar a velocidade da infusão endovenosa de insulina.',
      'Pesquisar uma fonte não identificada de infecção.',
      'Manter o esquema terapêutico utilizado, já que o comportamento observado da cetonúria é normal.',
      'Mudar o tipo de insulina que vinha sendo utilizado.',
      'Nenhuma das alternativas anteriores.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_23',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: 'Qual a principal medida preventiva contra o pé diabético?',
    options: [
      'Realização periódica de arteriografias digitais.',
      'Realizar exames clínicos sistemáticos dos pés e pernas.',
      'Utilização de sapatos especiais.',
      'Manter a Hb glicosilada menor que 10%.',
      'Realizar periodicamente ultrassonografias de fluxo dos membros inferiores.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_24',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: 'São Fatores de Risco Modificáveis na Osteoporose, EXCETO:',
    options: [
      'Raça branca.',
      'Baixo peso.',
      'Baixa ingestão de cálcio.',
      'Corticoterapia prolongada.',
      'Consumo excessivo de bebidas alcoólicas e café.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_25',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: 'Quanto à Artrite Reumatoide (AR) é INCORRETO afirmar:',
    options: [
      'Na AR, a membrana sinovial caracteriza-se por uma neoformação vascular importante e uma invasão marcante de células inflamatórias e imunes, formando um tecido chamado pannus.',
      'As articulações esternoclaviculares e manubrioesternal não são acometidas na AR por não possuírem sinóvia.',
      'Nódulos reumatoides, escleromalácia e doença pulmonar intersticial são manifestações extra-articulares da AR.',
      'A presença de VHS e PCR elevados, e Fator Reumatoide e Anti-CCP positivos ajudam a caracterizar a natureza imunoinflamatória da AR.',
      'Metotrexato, Leflunomida e Hidroxicloroquina são fármacos antirreumáticos modificadores da doença (DMARD).',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_26',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: 'Quanto ao Lúpus Eritematoso Sistêmico (LES), podemos afirmar:',
    options: [
      'No acompanhamento dos pacientes com LES, a cada retorno, hemograma, FAN, C3, C4, exame de urina, PCR e VHS devem ser solicitados.',
      'As alterações hematológicas são raras, podendo afetar todas as séries do sangue e são critérios de classificação da doença.',
      'O Systemic Lupus Erythematosus Disease Activity Index (SLEDAI) é um índice utilizado para avaliar a atividade da doença durante o acompanhamento dos pacientes com LES.',
      'Artrite não Erosiva, Alopécia, Fotossensibilidade e Eritema Malar são critérios de classificação do LES.',
      'A glomerulonefrite membranosa (classe VI da OMS), o quadro é de síndrome nefrótica com função renal estável.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_27',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Uma mulher de 50 anos, procedente de Manaus, chega ao Pronto-Socorro relatando hematêmese e melena, iniciada 1 hora antes da admissão. No exame físico (decúbito dorsal), não se verifica sinais de hepatopatia crônica, mas se encontra hipocorada, orientada e discretamente pálida. FC 110 bpm, PA 110 x 70 mmHg. Sobre o caso, marque a alternativa verdadeira:',
    options: [
      'A principal hipótese diagnóstica etiológica seria neoplasia gástrica, já que é a causa mais comum no mundo.',
      'Os sinais vitais da paciente são os melhores parâmetros para se estimar a gravidade da perda volêmica.',
      'Deve ser pesquisado algum sintoma sugestivo de infecção pelo Helicobacter pylori por ser a principal causa de úlcera péptica.',
      'A reposição volêmica deve ser feita preferencialmente após o resultado da endoscopia digestiva alta.',
      'Deve ser feita colonoscopia antes da endoscopia pelo risco elevado de neoplasia de cólon.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_28',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Homem de 60 anos é admitido por aumento importante do volume abdominal à custa de ascite e perda ponderal significativa e sem motivo aparente. Nega patologias crônicas ou uso de medicamentos. Sobre o caso, marque a alternativa verdadeira:',
    options: [
      'Se houver etilismo maior que 80g/dia não é necessária a análise do líquido.',
      'O Gradiente de Albumina Soro-Ascite (GASA) menor que 1,1 obriga investigação da etiologia pelo menos com Adenosina Deaminase (ADA) do líquido.',
      'A ascite quilosa tem aspecto amarelo-citrino e a concentração de HDL é maior que 70.',
      'As causas mais comuns quando o GASA é menor que 1,1 são cirrose hepática e insuficiência cardíaca congestiva.',
      'O diagnóstico de peritonite bacteriana espontânea é feito quando há mais de 500 leucócitos no líquido.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_29',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Sobre a diarreia crônica é correto afirmar que:',
    options: [
      'A doença de Crohn não é granulomatosa, enquanto a TB sim.',
      'É comum o comprometimento do íleo terminal na retocolite ulcerativa.',
      'O uso prolongado de laxantes osmóticos pode causar síndrome do intestino irritável.',
      'O anticorpo antimitocondrial é marcador da doença celíaca.',
      'A Tropheryma whippelii, além de má absorção, pode causar também febre, artralgia ou manifestações neurológicas.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_30',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'Um jovem de 20 anos chega à consulta para investigar icterícia iniciada 05 dias antes. No exame físico, não há sinais de hepatopatia crônica ou encefalopatia hepática. AST = 500 (VR 4-30), ALT = 580 (VR 10-40), bilirrubina total = 4,0 (VR < 1,2), bilirrubina direta = 3,0 (VR < 4,0). Sobre o caso, marque a alternativa verdadeira:',
    options: [
      'O anti-HCV negativo garante ausência do vírus da hepatite C, não havendo necessidade da carga viral ou repetir a sorologia.',
      'Um anti-HBc IgG reagente mostra contato anterior com o vírus da hepatite B, mas não diz se há infecção atual.',
      'Se o HBsAg não for reagente, não é preciso pesquisar o vírus delta.',
      'Medicamentos não são causa provável das alterações clinicolaboratoriais.',
      'O resultado das sorologias para hepatites virais é necessário para fechar o diagnóstico de hepatite aguda.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_31',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: 'Sobre a asma, marque a alternativa CORRETA:',
    options: [
      'Na crise aguda de asma, há um aumento do Pico de Fluxo Expiratório (PFE) e do Volume Expiratório Forçado no primeiro segundo (VEF1).',
      'A fração Óxido Nítrico (NO) no ar exalado está elevada nos pacientes com asma.',
      'Na asma grave é comum surgir desvio do eixo elétrico do QRS para esquerda no ECG.',
      'Na crise aguda de asma brônquica, a fase inspiratória está prolongada em relação à fase expiratória.',
      'As alterações eletrocardiográficas que surgem durante episódio de asma grave não regridem quando a crise é superada.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_32',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: 'Em relação aos achados no paciente com DPOC, é CORRETO afirmar que:',
    options: [
      'O RX de tórax na DPOC instalada mostra o músculo diafragma em posição mais elevada (pouco insuflado).',
      'Na DPOC avançada pode ocorrer "cor pulmonale", que é caracterizada por aumento de cavidades cardíacas esquerdas.',
      'O aumento do átrio direito no ECG é caracterizado por depressão da onda P (maior que 2,5 mm).',
      'Não é comum o desenvolvimento de DPOC clinicamente aparente em paciente sem história de tabagismo de pelo menos 20 maços/ano.',
      'A tomografia computadorizada de tórax não ajuda na avaliação, distribuição e extensão do enfisema pulmonar.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_33',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Nas afirmativas é CORRETO afirmar em relação à Síndrome de Eisenmenger somente que:',
    options: [
      'No exame clínico não há sinais que caracterizam a síndrome, sendo seu achado ecocardiográfico.',
      'O termo Síndrome de Eisenmenger deve ser reservado a pacientes nos quais a doença pulmonar obstrutiva e a resistência vascular pulmonar é diminuída e reversível.',
      'Um impulso ventricular direito proeminente é sentido na borda paraesternal esquerda ao final da expiração ou na área subcostal no final da inspiração.',
      'A pressão de pulso alarga-se conforme o débito cardíaco diminui.',
      'A ausência de shunt direito-esquerdo torna o paciente inoperável.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_34',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'No tratamento da Insuficiência Cardíaca com Fração de Ejeção reduzida é INCORRETO afirmar que:',
    options: [
      'As drogas que afetam a ativação excessiva do sistema renina-angiotensina-aldosterona como os IECAs e BRAs podem aliviar os sintomas da Insuficiência Cardíaca.',
      'O uso combinado de hidralazina e dinitrato de isosorbida pode ser considerado uma opção terapêutica para pacientes com intolerância aos IECAs e BRAs.',
      'A terapia betabloqueadora representa um dos principais avanços no tratamento de pacientes com IC com FE reduzida.',
      'A digoxina é recomendada para pacientes com disfunção sistólica ventricular esquerda com fibrilação atrial.',
      'Três betabloqueadores se mostraram efetivos na redução do risco de morte em paciente com IC crônica: o carvedilol, propranolol e metoprolol.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_35',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente é atendido no PS e internado com diagnóstico de IAM. Após uma semana, paciente apresenta novo episódio de dor de forte intensidade com duração de mais de 20 minutos. Que marcador cardíaco seria fundamental para confirmar o diagnóstico de novo IAM?',
    options: [
      'CKMB',
      'CPK',
      'DHL',
      'Troponina T',
      'Troponina I',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_36',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente de 72 anos dá entrada em Pronto-Socorro com história de episódios de síncope e dor torácica. Ao exame físico, apresenta sopro sistólico mais audível na área aórtica que desaparece sobre o esterno e reaparece sobre o ápice do VE (fenômeno de Gallavardin). Seu diagnóstico mais provável é:',
    options: [
      'Insuficiência Aórtica.',
      'Insuficiência Mitral.',
      'Estenose Mitral.',
      'Insuficiência Tricúspide.',
      'Estenose Aórtica.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_37',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    text: 'Homem de 18 anos, estudante, há oito meses vem apresentando episódios de movimentos mastigatórios e automatismos, constando de gestos desajeitados de mexer na roupa, agarrar ou manusear objetos ao seu redor. Ao ser agarrado por familiar fica agitado. O quadro dura alguns minutos e desde o início apresenta consciência alterada com confusão após a crise e amnésia para o fato. Marque a alternativa que melhor caracteriza o tipo de crise epiléptica e a topografia de origem mais frequente.',
    options: [
      'Crise parcial simples e origina no lobo frontal.',
      'Crise parcial complexa e origina no lobo frontal.',
      'Crise parcial simples e origina no lobo temporal.',
      'Crise de ausência e origina em todos os hemisférios cerebrais.',
      'Crise parcial complexa e origina no lobo temporal.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_38',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    text: 'Mulher de 68 anos, professora aposentada, iniciou declínio de memória, sobretudo para fatos recentes e desorientação espacial. Esses sintomas se instalaram de forma insidiosa e foram lentamente progredindo. Alterações de linguagem, distúrbios de planejamento (funções executivas) e de habilidades visuoespaciais surgiram com a evolução do quadro há 18 meses. Diagnosticada como tendo demência primária cortical e medicada com um inibidor da acetilcolinesterase. Qual foi o provável diagnóstico clínico?',
    options: [
      'Demência frontotemporal.',
      'Doença de Pick.',
      'Doença de Alzheimer.',
      'Doença de Creutzfeldt-Jakob.',
      'Demência vascular.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_39',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    text: 'Analise as afirmativas quanto às Hemofilias e assinale a CORRETA:',
    options: [
      'A hemofilia B apresenta hereditariedade, quadro clínico e classificação idêntica ao da hemofilia A, da qual difere quanto ao fator plasmático deficiente.',
      'Os sangramentos decorrem por defeitos na hemostasia primária.',
      'São coagulopatias hereditárias de herança dominante ligada ao cromossomo Y, porém 30 a 40% não têm história familiar e não há diferenças raciais.',
      'Quando o nível plasmático do fator deficiente é > 10% não há manifestações hemorrágicas.',
      'Há de se pesquisar história de sangramentos nos indivíduos do sexo masculino na família paterna.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_40',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    text: 'Analise as afirmativas quanto à Anemia Ferropriva e assinale a INCORRETA:',
    options: [
      'O melhor exame para estimar o ferro total do organismo, particularmente o dos depósitos, é o ferro sérico.',
      'Os principais sinais e sintomas são palidez, adinamia, cefaleia, tontura, zumbido no ouvido, alterações na visão, dispneia, taquicardia e baixo desempenho no trabalho.',
      'É uma manifestação tardia e insidiosa da carência do ferro e surge quando as reservas de ferro esgotam-se em virtude do balanço negativo.',
      'As causas de carência podem ser classificadas: menor ingestão do nutriente, menor absorção intestinal, defeitos do transporte ou metabolismo, aumento das excreções ou das perdas, aumento das necessidades fisiológicas ou patológicas.',
      'A mais importante medida do tratamento desta anemia consiste em identificar a causa e removê-la, se possível.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_41',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Escolar, com sete anos, retorna ao Ambulatório quatro dias depois de ter sido atendido com quadro de febre, dor na garganta, hiperemia intensa de orofaringe, hipertrofia de amígdalas, com exsudato e petéquias em palato, linfadenopatia cervical anterior e posterior e submandibular bilateral. Na primeira consulta, foi prescrito ceftriaxona por sete dias. A mãe relata exantema com três dias de tratamento, sem melhora do quadro clínico. Penso:',
    options: [
      'Mononucleose infecciosa pelo vírus Epstein-Barr.',
      'Faringite por micoplasma.',
      'Infecção por coxsackie.',
      'Faringite estreptococo ß-hemolítico grupo A.',
      'Faringite viral.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_42',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Mãe comparece ao Ambulatório com lactente de dois meses apresentando há um mês estridor inspiratório que piora com decúbito dorsal. Qual o provável diagnóstico?',
    options: [
      'Fístula traqueoesofágica',
      'Fístula gastroesofágica',
      'Cisto de faringe',
      'Laringomalácia',
      'Anel vascular',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_43',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Escolar é trazida ao Ambulatório por sua mãe. É portadora de retardo mental e apresenta sangramento vaginal de pequena monta, secreção fétida e amarelada abundante. No exame da genitália, não apresenta qualquer anormalidade na coloração da mucosa; o hímen está íntegro. Provável diagnóstico:',
    options: [
      'Vulvovaginite por cândida.',
      'Corpo estranho vaginal.',
      'Tricomoníase vaginal.',
      'Mucosa precoce.',
      'Abuso sexual.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_44',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Escolar com sete anos vem ao endocrinologista, pois sua mãe está preocupada com seu crescimento, pois está menor do que seus colegas de escola. Qual dado deverá ser considerado no momento da avaliação?',
    options: [
      'Seguimento pela curva de crescimento.',
      'Dosagem do hormônio de crescimento.',
      'Dosagem dos hormônios tireoidianos.',
      'Estatura dos pais.',
      'Idade óssea.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_45',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Pré-escolar com quatro anos vai a sua pediatra, trazido pela sua genitora, com história de palidez. A criança está com bom estado geral, a alimentação é adequada e a família é de bom nível socioeconômico. O pai é de origem portuguesa e a mãe é italiana. Exame laboratorial: Hb 10 g/dl; VCM 60; SEM ANISOCITOSE. Não houve alteração de laboratórios após tratamento com ferro por um mês. O resultado mais provável da eletroforese de hemoglobina é:',
    options: [
      'Presença de HbS.',
      'Presença de HbS e HbC.',
      'HbA2 baixa e HbF baixa.',
      'HbA2 elevada e presença de HbS.',
      'HbA2 elevada e HbF aumentada.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_46',
    cycle: 'Ciclo Básico',
    subject: 'Parasitologia',
    text: 'Os microrganismos multiplicam e disseminam-se lateralmente abaixo do epitélio intestinal, produzindo as características de ÚLCERA "em forma de botão de camisa". Qual o parasita que produz isso?',
    options: [
      'Entamoeba coli.',
      'Giardia lamblia.',
      'Giardia duodenalis.',
      'Entamoeba hartmanni.',
      'Entamoeba histolytica.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_47',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente, nove meses, apresenta diarreia há 10 dias, sendo confirmado Campylobacter na identificação do microrganismo em cultura (Skirrow ou Butzler). Qual o tratamento?',
    options: [
      'Penicilinas.',
      'Cefalosporinas.',
      'Tetraciclina.',
      'Macrolídeos.',
      'Vancomicina.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_48',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Pré-escolar de três anos, hospitalizado, encontra-se desnutrido do 2º grau, está em investigação por tosse crônica, febre intermitente, dispneia, sibilância e, ocasionalmente, dor abdominal e erupção cutânea. RX de tórax com infiltrados intersticiais, alveolares, inespecíficos ou mistos. Qual o diagnóstico provável?',
    options: [
      'Pneumonia viral.',
      'Pneumonia bacteriana.',
      'Síndrome de Löeffler.',
      'Pneumonia pneumocystis carinii.',
      'Pneumonia por Mycoplasma pneumoniae.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_49',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Pré-escolar, cinco anos, sexo masculino, procurou ambulatório de Oftalmologia, pois a mãe observou discreto desvio do olho esquerdo. Nasceu de parto prematuro, IG 36 semanas, Peso 2540 g. Permaneceu em oxigenoterapia (CPAP) por 7 horas devido a taquipneia transitória. Gravidez sem intercorrência. Exame físico: estrabismo com esotropia à esquerda e reflexo pupilar branco (leucocoria). Hipótese diagnóstica:',
    options: [
      'Retinoblastoma.',
      'Craniofaringioma.',
      'Rabdomiosarcoma.',
      'Coloboma Coroidal.',
      'Retinopatia da Prematuridade.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_50',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Adolescente, quinze anos, sexo feminino, apresenta tosse, febre, perda de peso, dispneia, palidez, dor torácica, disfagia, derrame pleural, linfadenopatia cervical e axilar. RX de tórax: massa mediastinal estendendo-se para hemitórax superior direito e comprimindo a carina. A hipótese diagnóstica:',
    options: [
      'Bócio mergulhante.',
      'Linfoma não Hodgkin.',
      'Carcinoma pulmonar indeterminado.',
      'Tuberculose.',
      'Tumor de Wilms.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_51',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Que suplementação deve receber um filho de mãe vegetariana que não ingere produtos animais, quando este estiver em aleitamento materno?',
    options: [
      'Cálcio.',
      'Vit A.',
      'Vit C.',
      'Vit D.',
      'Vit B12.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_52',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Nutriz portadora de citomegalovirose confirmada no pré-natal. Qual a orientação a ser dada relacionada ao aleitamento materno, já que seu recém-nascido é de termo?',
    options: [
      'Fórmula láctea.',
      'Diretamente ao seio.',
      'Leite da própria mãe, após pasteurização.',
      'Leite da própria mãe, após pasteurização e congelamento a -20°C.',
      'Leite da própria mãe, após congelamento a -20°C.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_53',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Pré-escolar de cinco anos tem histórico de pica e exposição a filhotes de animais domésticos. Os achados clínicos incluem: anemia, febre, sibilância, broncopneumonia, hepatomegalia, leucocitose, importante eosinofilia. O diagnóstico provável é:',
    options: [
      'Toxocaríase.',
      'Histoplasmose.',
      'Giardíase.',
      'Amebíase.',
      'Brucelose.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_54',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente de sete meses do sexo masculino é levado ao Pronto-Socorro por sua mãe, com quadro de diarreia aguda sem sinais de desidratação grave. Qual a conduta?',
    options: [
      'Iniciar antibiótico',
      'Iniciar antibiótico por via oral',
      'Iniciar hidratação venosa',
      'Iniciar gastrólise',
      'Iniciar TRO',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_55',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente de quatro meses, com quadro de anemia microcítica, crise convulsiva mioclônica de difícil controle desde o nascimento. O EEG mostra padrão hipsarritmia. Qual a deficiência vitamínica?',
    options: [
      'Biotina.',
      'Niacina.',
      'Tiamina.',
      'Piridoxina.',
      'Riboflavina.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_56',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente de cinco meses apresenta na área de fralda pústulas satélites, aquelas que salpicam a pele contígua. A conduta é:',
    options: [
      'Griseofulvina Sistêmica',
      'Corticoide Sistêmico',
      'Creme Imidazólico',
      'Aciclovir tópico',
      'Penicilina',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_57',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Recém-nascido apresenta genitália ambígua, destaca-se a possibilidade de tratar-se de uma menina virilizada, devido hiperplasia congênita de suprarrenal. O nível sérico de 17-hidroxiprogesterona encontra-se elevado. Neste caso, espera-se como principal complicação:',
    options: [
      'Esterilidade',
      'Desidratação',
      'Tumor hipófise',
      'Infecção urinária',
      'Malformação renal',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_58',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'A associação que indica um pior prognóstico para desnutrição proteico-calórica grave é:',
    options: [
      'Edema e hiperpotassemia.',
      'Diarreia e intolerância à lactose.',
      'Hipostenúria e intolerância à lactose.',
      'Hiponatremia e depleção de potássio.',
      'Hipertermia, edema, carência de zinco.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_59',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Em uma menina de 18 meses ao exame físico você observa sinéquia dos pequenos lábios vaginais. Qual sua orientação para com sua mãe?',
    options: [
      'Creme de estrogênio durante 1 a 2 semanas.',
      'Creme imidazólico durante 3 semanas.',
      'Creme hidrocortisona por 2 semanas.',
      'Creme betametasona 3 semanas.',
      'Creme aciclovir por 1 semana.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_60',
    cycle: 'Ciclo Básico',
    subject: 'Parasitologia',
    text: 'Foram encontrados nas fezes de um escolar de quatro anos, trofozoítos de Giardia lamblia e Entamoeba histolytica. Qual o tratamento?',
    options: [
      'Ivermectina.',
      'Praziquantel.',
      'Tiabendazol.',
      'Mebendazol.',
      'Metronidazol.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_61',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Referente às linhas de cuidado no setor saúde, assinale a alternativa INCORRETA:',
    options: [
      'A implementação de linhas de cuidado pretende colaborar com a organização da atenção à saúde, gerando o estabelecimento dos fluxos entre todos os espaços onde se produz atenção à saúde.',
      'Referem-se aos percursos assistenciais realizados pelo menor número de pessoas decorrentes de situações de saúde distintas.',
      'Preferencialmente, esta proposta deverá ser construída com base na Atenção Básica.',
      'A concepção de linhas de cuidado deve representar, necessariamente, um continuum assistencial composto por ações de promoção, prevenção, tratamento e reabilitação.',
      'Com a conformação de linhas de cuidado, é possível a definição da programação local de saúde, tomando por base a identificação de necessidades de saúde.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_62',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Sobre os Modelos de Atenção à Saúde (MAS), você orienta de forma correta:',
    options: [
      'Um dos modelos mais prestigiados é o de campanhas sanitárias e programas especiais, sendo centrado na clínica, voltado para o atendimento da demanda espontânea e baseado em procedimentos e serviços especializados.',
      'Os MAS têm como propósito último a racionalização dos recursos de saúde existentes em um dado território, sendo a transformação das práticas sanitárias o propósito secundário.',
      'No Brasil temos 03 modelos antagônicos e conflitivos: Sanitarista Campanhista, Médico Assistencial Privatista e o Modelo Alternativo (vigilância).',
      'São propostas do modelo alternativo: a estratégia saúde da família, a promoção da saúde, a vigilância da saúde, os distritos de saúde e o acolhimento.',
      'Os MAS são normas e exemplos a serem seguidos, que conformam a articulação das relações entre sujeitos, as mediações por tecnologias com vistas à utilização no processo de trabalho em saúde.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_63',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Referente às Conferências de Saúde (CS), assinale a alternativa CORRETA:',
    options: [
      'As conferências de saúde são bianuais, com participação da sociedade civil, trabalhadores, prestadores de serviço e gestores da área da saúde, sendo paritária.',
      'As conferências são deliberativas, com participação dos técnicos de saúde, deliberando os planos de saúde e os respectivos instrumentos do SUS.',
      'São espaços representativos de participação social, são consultivas, ocorrem a cada quatro anos e suas etapas são ascendentes.',
      'As conferências de saúde são anuais, algumas semestrais, com participação da sociedade civil, trabalhadores, prestadores de serviço e gestores da área da saúde.',
      'São marcos importantes na construção do SUS, através da Lei 8.149/90, com participação exclusiva de usuários do SUS.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_64',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Para a efetivação do SUS, o Movimento da Reforma Sanitária (MRS) defendeu princípios e diretrizes da prestação de saúde à população brasileira. Assinale o princípio/diretriz que NÃO corresponde aos defendidos pelo MRS:',
    options: [
      'Um dos princípios é o da universalidade de acesso aos serviços de saúde em todos os níveis de assistência.',
      'A ênfase na descentralização dos serviços para os estados.',
      'Os serviços de saúde devem ser regionalizados e hierarquizados.',
      'A participação da comunidade.',
      'O direito à informação, às pessoas assistidas, sobre sua saúde.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_65',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Com relação à Atenção Primária à Saúde (APS), podemos afirmar:',
    options: [
      'Tem como extensão de suas responsabilidades, junto à população, prioritariamente, a atenção intermitente.',
      'Tem como pressuposto inicial no atendimento a cura do paciente e posterior encaminhamento às especialidades.',
      'Como característica do modelo APS há o da atenção continuada à população, além do enfoque ser o de prevenção, atenção e cura.',
      'Lidam com uma variedade mais restrita de problemas de saúde, sendo os mesmos comuns e inespecíficos.',
      'É um sistema pobre feito para os pobres, que tem como serviços de informações, preferencialmente, os dados biomédicos.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_66',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Referente às bases legais do Pacto pela Saúde, assinale a alternativa CORRETA:',
    options: [
      'O Pacto em Defesa do SUS deve se firmar através de iniciativas que busquem repolitizar a saúde, com um movimento que retoma a Reforma Sanitária Brasileira aproximando-a dos desafios atuais do SUS.',
      'As ações do Pacto em Defesa do SUS devem contemplar a articulação e apoio à mobilização médica e entidades da saúde, tendo a questão da saúde como um direito.',
      'As prioridades no Pacto Pela Vida são: saúde do idoso, câncer de colo de útero e de pulmão e prevenção de doenças.',
      'O Pacto de Gestão estabelece as diretrizes de gestão do SUS que são a descentralização, a regionalização, a atenção básica à saúde, o financiamento, o planejamento e a promoção da saúde.',
      'Os blocos de financiamento que constam no Pacto de Gestão são: atenção básica, atenção à saúde da mulher, vigilância em saúde, assistência indígena e gestão do cuidado.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_67',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    text: 'Considerando a vigilância epidemiológica (VE) como instância de "inteligência do sistema de saúde", considere as afirmativas: I. A retroalimentação do sistema na VE corresponde ao compromisso de responder aos informantes de forma adequada e oportuna. II. Dentre as funções da VE há a coleta de dados, que ocorre prioritariamente na Atenção Básica à Saúde. III. A imprensa e a população são fontes importantes de dados, devendo ser sempre consideradas para a realização da investigação pertinente. Marque a alternativa correta:',
    options: [
      'Somente a afirmativa III está correta.',
      'Somente as afirmativas I e II estão corretas.',
      'Somente as afirmativas I e III estão corretas.',
      'Todas as afirmativas estão incorretas.',
      'Todas as afirmativas estão corretas.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_68',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'A lei nº 8.142/90 dispõe sobre a participação da comunidade na gestão do SUS. Referente à participação da comunidade:',
    options: [
      'Foram criadas duas instâncias colegiadas que asseguram a participação popular no SUS: a Conferência de Saúde e o Conselho de Saúde.',
      'As instâncias colegiadas que asseguram a participação popular no SUS são a Ouvidoria em Saúde e a Conferência de Saúde.',
      'Foram criados mecanismos de participação popular no SUS: a Conferência de Saúde, o Conselho de Saúde e a Ouvidoria em Saúde.',
      'As instâncias colegiadas que asseguram a participação popular no SUS são operadas através das Conferências de saúde e de campanhas de Mobilização Popular.',
      'O SUS assegura a participação popular através de estruturas informais presentes na comunidade: igrejas, associações comunitárias e clube de mães.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_69',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Considerando o planejamento no Sistema Único de Saúde (PlanejaSUS), assinale a correta:',
    options: [
      'O PlanejaSUS, instituído pela portaria GM nº 3.332/2006, preconiza um planejamento ascendente, no nível local, ouvidos seus órgãos deliberativos; sendo relevante na observância do princípio da unicidade do SUS.',
      'O PlanejaSUS, instituído pela portaria GM nº 3.333/2009, tem como objetivos monitorar e avaliar o processo de planejamento e promover a integração do processo de planejamento e assistência no âmbito do SUS.',
      'O PlanejaSUS, instituído pela portaria GM nº 3.332/2006, tem como desafio a sua excessiva vinculação aos instrumentos que cumprem um papel normativo e legal.',
      'O PlanejaSUS, instituído pela portaria GM nº 3.332/1996, tem como instrumentos o Plano de Saúde, Programações Anuais de Saúde e os Relatórios Anuais de Gestão.',
      'O PlanejaSUS, instituído pela portaria GM nº 3.332/1996, caracteriza-se por estimular a atuação contínua, articulada, integrada e solidária das áreas de planejamento das três esferas de gestão do SUS.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_70',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    text: 'Referente ao processo saúde e doença nas sociedades modernas, NÃO são fatores condicionantes e determinantes:',
    options: [
      'Construção de hospitais e aquisição de equipamentos para diagnósticos de alta complexidade.',
      'Transporte e acesso a bens e serviços essenciais.',
      'Alimentação e saneamento básico.',
      'Lazer, educação e habitação.',
      'Emprego e renda.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_71',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'De acordo com Ministério da Saúde, o Programa Saúde na Escola (PSE) tem como objetivo reforçar a prevenção à saúde dos alunos brasileiros e construir uma cultura de paz nas escolas. São atribuições do PSE, EXCETO:',
    options: [
      'Avaliar o estado nutricional dos estudantes e saúde bucal.',
      'Avaliar casos de hipertensão, diabetes e doença renal entre os estudantes.',
      'Avaliar o estado psicológico dos estudantes.',
      'Combater a violência, uso de álcool, drogas e tabaco.',
      'Abordar educação sexual e reprodutiva e estimular atividades físicas.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_72',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Ana teve bebê há três meses e vem à consulta solicitando orientações de como proceder no seu retorno ao trabalho, em um mês. Considere as afirmações: I. Se a empresa em que trabalha tiver mais de 30 funcionárias, ela tem direito a creche para o bebê. II. A mãe deve ser educada para a técnica de ordenha manual das mamas para que realize esse procedimento durante a jornada de trabalho. III. A legislação brasileira prevê dois intervalos de 30 minutos cada durante a jornada de trabalho para que a mãe amamente o seu filho até que ele complete 4 meses de vida. Marque a alternativa correta:',
    options: [
      'Somente a afirmativa I está correta.',
      'Somente a afirmativa II está correta.',
      'Somente a afirmativa III está correta.',
      'Somente as afirmativas I e II estão corretas.',
      'Todas as afirmativas estão corretas.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_73',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Você é médico de família e deve orientar as mães sobre vacinas. Correlacione VACINAS: (1) BCG, (2) Rotavírus, (3) Hepatite B, (4) tríplice bacteriana (DTP) e poliomielite, (5) H1N1, (6) pneumococo 10. IDADE: ( ) IM ao nascer, com 1 e 6 meses. ( ) intradérmica ao nascer. ( ) aos 2, 4, 6 e 15 meses. ( ) a partir dos seis meses. ( ) oral aos 2 e 4 meses. ( ) IM a intervalos de 60 dias com 2, 4, 6 e 15 meses. Marque a sequência correta:',
    options: [
      '3-1-2-5-6-4',
      '3-1-4-5-2-6',
      '3-2-1-4-5-6',
      '4-2-5-1-3-6',
      '4-1-5-3-6-2',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_74',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Raimunda tem 23 anos e vai casar em um mês. Pede orientação sobre exames antes de engravidar. Tem vida sexual ativa e parou a pílula este mês. Em relação à conduta médica na consulta pré-concepcional, é correto afirmar, EXCETO:',
    options: [
      'Avaliar a dieta alimentar, observando dietas muito restritivas como vegetarianas.',
      'Avaliar o uso de tabaco, álcool ou drogas ilícitas, que devem ser suspensas antes da gestação.',
      'Orientar sobre o uso de medicações, como anti-hipertensivos ou neurolépticos, que contraindicam em absoluto a gestação.',
      'Solicitar alguns exames, entre eles, sorologias para avaliar doenças sexualmente transmissíveis.',
      'Prescrever uso de ácido fólico 5,0 mg/dia.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_75',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Em relação ao aleitamento materno é INCORRETO afirmar:',
    options: [
      'Deve ser feito até os seis meses de vida de forma exclusiva e complementado até 2 anos ou mais.',
      'É considerado aleitamento materno complementado quando a mãe substitui o leite por outros alimentos sólidos ou semi-sólidos.',
      'Está indicada a inibição da lactação nas mães HIV positivas e em casos de adoção.',
      'É considerado aleitamento materno exclusivo quando a criança recebe apenas leite humano, direto da mama ou ordenhado, sem outros líquidos ou sólidos.',
      'O aleitamento materno ajuda a reduzir o risco de infecção no recém-nato.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_76',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Em relação aos Núcleos de Apoio à Saúde da Família (NASF), podemos afirmar, EXCETO:',
    options: [
      'Visam ser a porta de entrada ao sistema de saúde e devem atuar de forma integrada à rede de serviços.',
      'Devem atuar em parceria com a estratégia saúde da família, apoiando sua inserção em um território.',
      'Fortalece o acompanhamento longitudinal das equipes de saúde da família.',
      'Busca a plena integralidade nos cuidados físico e mental aos usuários do Sistema Único de Saúde.',
      'Objetivam ampliar as ações de atenção básica melhorando sua resolutividade.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_77',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'Simão, de 27 anos, vem à consulta referindo caroço no pescoço e febre há 4 anos. Trabalhou num garimpo por 15 meses. Ao exame físico, apresenta adenomegalia cervical anterior à esquerda, sem sinais flogísticos. A punção do gânglio cervical resulta em bacilo álcool-ácido resistente (BAAR). Em relação ao acompanhamento do paciente com tuberculose, é mais correto afirmar que:',
    options: [
      'Devemos fazer Prova Tuberculínica na filha Amanda e se maior ou igual a 5 mm, tratá-la.',
      'Solicitar pesquisa de BAAR para Rose.',
      'Compete à Atenção Básica o acompanhamento de paciente com tuberculose extrapulmonar multirresistente.',
      'Simão deve receber tratamento diariamente observado (TDO) por 6 meses.',
      'Simão deve utilizar o esquema de drogas Rifampicina, Isoniazida e Etambutol.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_78',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Dentre as atribuições do Médico de Família e Comunidade que atua na estratégia Saúde da Família, estão:',
    options: [
      'O acompanhamento pontual e emergencial da comunidade por ele assistida.',
      'A realização de visitas domiciliares à população do território de abrangência de sua equipe.',
      'Ações educativas no âmbito exclusivo da Unidade de Saúde.',
      'Realizar preferencialmente consultas de demanda espontânea à sua população.',
      'Acompanhar pacientes fora de área de abrangência nas internações domiciliares.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_79',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'A Política Nacional de Atenção Integral à Saúde do Homem tem como diretrizes, EXCETO:',
    options: [
      'Integralidade na assistência à saúde em todos os níveis de saúde incluindo o atendimento de referência/contrarreferência quando necessário.',
      'Priorização da Atenção Secundária com foco na Estratégia Saúde da Família.',
      'Reorganização das ações de saúde de modo que os homens reconheçam as unidades de saúde como espaços masculinos também.',
      'Organização dos serviços de saúde de modo a acolher o homem.',
      'Implementação hierarquizada da política de atenção integral à saúde do homem.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_80',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Em relação ao Plano de Ações para Enfrentamento das Doenças Crônicas não Transmissíveis (DCNT), podemos afirmar:',
    options: [
      'Tem como objetivo reduzir a mortalidade tardia por doenças como insuficiência renal e AIDS.',
      'Visa desenvolver ações de vigilância, promoção e cuidado integral à saúde para alterar os fatores de risco modificáveis das DCNT.',
      'Tem como meta reduzir o consumo de álcool e drogas e estimular atividade física e alimentação não saudável.',
      'Um dos passos deste Plano foi a medida provisória que diminuiu o imposto sobre cigarros.',
      'Foi construído exclusivamente por técnicos do Ministério da Saúde.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_81',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'A gravidez impõe ao organismo materno profundas modificações no metabolismo glicídico, que em pacientes saudáveis se caracterizam por:',
    options: [
      'Incremento da ação periférica do glucagon.',
      'Diminuição da utilização periférica da glicose.',
      'Decréscimo das taxas de glicemia pós-prandial.',
      'Elevação dos teores de glicemia de jejum.',
      'Redução da concentração sanguínea da insulina pós-prandial.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_82',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Em relação à gravidez de alto risco, se a cardiotocografia anteparto ou repouso apresenta-se alterada, devemos:',
    options: [
      'Recorrer à amniocentese para verificar a vitalidade fetal.',
      'Solicitar PBF (perfil biofísico fetal).',
      'Induzir o parto.',
      'Solicitar com a máxima urgência uma ultrassonografia para verificar a idade gestacional e antecipar o parto.',
      'Nenhuma das alternativas anteriores.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_83',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Alguns cuidados devem ser considerados durante a abordagem de pacientes vítimas de violência sexual, dentre eles a profilaxia de algumas doenças. Marque a alternativa que NÃO contém a doença e tratamento adequados:',
    options: [
      'Hepatite B - dose única de 1 ml da vacina contra o vírus.',
      'Tricomoníase/vaginose - prescrever metronidazol.',
      'HIV - zidovudina, lamivudina e demais cuidados.',
      'Gravidez - levonorgestrel 0,75 mg ou 2 comprimidos em intervalos de 12 horas.',
      'Gonorreia - ceftriaxona.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_84',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'O útero em geral está em posição mediana de anteversoflexão. Ele dispõe de um complexo sistema de fixação, representado pelos aparelhos de sustentação, suspensão e contenção, que se caracteriza respectivamente por:',
    options: [
      'Diafragma pélvico principal, retinaculum uteri e fáscia endopélvica.',
      'Fáscia endopélvica, diafragma pélvico principal e músculo transverso profundo.',
      'Retinaculum uteri, fáscia endopélvica e diafragma pélvico e esfíncter estriado do ânus.',
      'Diafragma pélvico principal, músculos transverso profundo e levantador do ânus e fáscia endopélvica.',
      'Retinaculum uteri, músculo transverso profundo e suas aponeuroses e contração dos músculos abdominais.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_85',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Em relação ao ciclo menstrual é correto afirmar:',
    options: [
      'Há um aumento progressivo da concentração de receptores de estrógenos a nível das células endometriais por conta do efeito antagonista da progesterona relacionada ao estrogênio.',
      'Níveis decrescentes de estrógenos produzem feedback negativo sobre a secreção de FSH produzida pela hipófise.',
      'A fase proliferativa se caracteriza por crescimento mitótico progressivo da decídua funcional em resposta ao aumento dos níveis de estrógenos.',
      'Na fase proliferativa inicial, o endométrio apresenta-se em torno de 2 mm e mostra histologicamente glândulas com padrão pseudo-estratificado.',
      'Nenhuma das alternativas anteriores.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_86',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Com relação ao câncer de mama podemos afirmar:',
    options: [
      'O carcinoma coloide representa aproximadamente 20% de todos os cânceres de mama.',
      'O carcinoma tubular, bem diferenciado, apresenta-se com pior prognóstico em relação aos demais por produzir frequentemente metástases para linfonodos axilares.',
      'A diferença da mastectomia radical modificada é que nesta não se preserva o músculo peitoral maior.',
      'O carcinoma ductal invasivo verdadeiro representa mais da metade de todos os tumores invasivos da mama.',
      'Nenhuma das alternativas anteriores.',
    ],
    correctIndex: 3,
  },
  {
    id: 'cermam12_87',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Sobre o câncer de colo uterino podemos afirmar:',
    options: [
      'O papilomavírus humano está relacionado com a incidência de até 99% dos carcinomas epidermoides e os sorotipos 6 e 11 são encontrados em até 62% dos carcinomas cervicais.',
      'Podem ser considerados sinais clínicos de lesão invasiva: secreção vaginal de odor fétido, uropatia obstrutiva, hemorragia vaginal e emagrecimento.',
      'A idade da sexarca não se inclui dentre os fatores de risco do câncer cervical, como o número de parceiros sexuais, raça, paridade elevada e baixa condição socioeconômica.',
      'A colposcopia não é obrigatória em pacientes com suspeita de neoplasia invasiva incipiente, visto que o diagnóstico só poderá ser concluído com a citologia cervical e a aparência do colo no exame ginecológico.',
      'Nenhuma das alternativas anteriores.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_88',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Paciente procura unidade básica de saúde com colpocitologia mostrando lesão intraepitelial de baixo grau do efeito citopático do papilomavírus humano. Qual deverá ser a conduta indicada pelo médico?',
    options: [
      'Repete a colpocitologia em 6 meses.',
      'Repete colpocitologia pelo método da citologia líquida.',
      'Solicita captura híbrida.',
      'Encaminha para colposcopia.',
      'Nenhuma das alternativas anteriores.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_89',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Com relação à flora vaginal podemos afirmar:',
    options: [
      'O pH vaginal normal é dependente de ácido lático para se manter em níveis ácidos (4,5).',
      'A Gardnerella Vaginalis faz parte da flora vaginal normal.',
      'É predominantemente aeróbica.',
      'O conteúdo vaginal descamativo é formado principalmente por células epiteliais.',
      'Nenhuma das alternativas anteriores.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_90',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Na mama, o papiloma intraductal solitário é uma lesão de ductos proximais, que clinicamente tem como sintoma mais comum:',
    options: [
      'Ulceração no mamilo',
      'Dor, com irradiação axilar',
      'Pele em "casca de laranja"',
      'Edema com ulceração periareolar',
      'Derrame papilar seroso ou sanguíneo',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_91',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Em relação à anatomia do colo uterino podemos afirmar:',
    options: [
      'A eversão ou ectopia é um distúrbio que pode ser observado muito frequentemente na gestação ou em mulheres que utilizam contraceptivos orais.',
      'O canal endocervical é revestido por epitélio estratificado, secretor de muco, o que faz apresentar-se após o teste de Schiller sem impregnação pela solução de lugol.',
      'As tubas uterinas são divididas em 4 porções. O maior segmento, o infundíbulo, é suprido pela artéria uterina e ovárica.',
      'O tamanho e o formato do corpo uterino independem do estado hormonal e da paridade.',
      'Nenhuma das alternativas anteriores.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_92',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Pode ser considerado diagnóstico obstétrico de apresentação defletida de primeiro grau quando através do toque se identificam:',
    options: [
      'A sutura metópica e a glabela.',
      'Glabela, nariz, boca e mento.',
      'Lambda e linha sagital.',
      'Nenhuma das alternativas anteriores.',
      'A linha sagitometópica e a fontanela bregmática.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_93',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'São contraindicações absolutas de aleitamento materno, EXCETO:',
    options: [
      'HTLV.',
      'HIV.',
      'Hepatite B.',
      'Galactosemia.',
      'Nenhuma das alternativas anteriores.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_94',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'Em relação às Doenças Sexualmente Transmissíveis, assinale a alternativa INCORRETA:',
    options: [
      'A promoção e disponibilização de preservativos deve ser função de todos os serviços; a assistência pode se constituir em um momento privilegiado de prevenção.',
      'O tratamento deve ser instituído no momento da consulta, preferencialmente com medicação por via oral e em dose única, ou com o menor número possível de doses.',
      'Com a utilização de fluxogramas validados, são pesquisados os sinais e sintomas que forneçam o diagnóstico de uma síndrome. O tratamento terá como foco apenas um agente etiológico mais comum na síndrome em estudo.',
      'Tão importante quanto diagnosticar e tratar precocemente os portadores sintomáticos, é realizar a detecção dos portadores assintomáticos.',
      'Nas atividades de aconselhamento das pessoas com DST e seus parceiros, deve-se sempre enfatizar a associação existente entre as DST e a infecção pelo HIV.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_95',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'No diagnóstico sindrômico das Doenças Sexualmente Transmissíveis:',
    options: [
      'Embora as DST sejam causadas por muitos micro-organismos diferentes, estes apenas determinam um número limitado de síndromes.',
      'As principais síndromes em DST são: corrimento vaginal, corrimento uretral, úlcera genital e desconforto ou dor pélvica na mulher.',
      'Entre as etiologias mais comuns do corrimento vaginal estão Gonorreia, infecção por Clamídia, Micoplasma e Ureaplasma.',
      'Os sinais mais frequentes na síndrome da úlcera genital são úlcera genital e linfonodos genitais.',
      'Entre as principais características da abordagem sindrômica estão: classificar os principais agentes etiológicos, incluir a atenção dos parceiros e incluir a oferta da sorologia para sífilis, hepatites e para o HIV.',
    ],
    correctIndex: 1,
  },
  {
    id: 'cermam12_96',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Sobre a mortalidade materna, marque a alternativa INCORRETA:',
    options: [
      'No Brasil, dois fatores dificultam o real monitoramento da mortalidade materna: a subinformação (preenchimento incorreto das declarações de óbito) e o sub-registro (omissão do registro do óbito em cartório).',
      'A mortalidade materna é uma das mais graves violações dos direitos humanos das mulheres, por ser uma tragédia evitável em 92% dos casos, e por ocorrer principalmente nos países em desenvolvimento.',
      'As altas taxas encontradas se configuram como uma violação dos direitos humanos e um grave problema de saúde pública, atingindo igualmente as regiões brasileiras.',
      'Morte Materna é a morte de uma mulher durante a gestação ou até 2 meses após o término da gestação, independentemente da duração ou da localização da gravidez.',
      'Nas Américas, há disparidade nas taxas de mortalidade materna entre países desenvolvidos e em desenvolvimento.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_97',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Com relação à assistência Pré-Natal e Puerperal, é INCORRETO dizer:',
    options: [
      'Alguns dados demonstram comprometimento da qualidade dessa atenção, tais como a incidência de sífilis congênita e o fato de a hipertensão arterial ainda ser a causa mais frequente de morte materna no Brasil.',
      'A sífilis é uma condição patológica cujo diagnóstico e tratamento podem ser realizados com baixo custo e pouca ou nenhuma dificuldade operacional.',
      'A pré-eclâmpsia/eclâmpsia continua sendo a primeira causa de morte materna no Brasil e determina o maior número de óbitos perinatais.',
      'A maioria das mulheres retorna ao serviço de saúde no primeiro mês após o parto, mas o foco de atenção dessas consultas é o recém-nascido.',
      'No Brasil, vem ocorrendo redução no número de consultas de pré-natal por mulher que realiza o parto no SUS.',
    ],
    correctIndex: 4,
  },
  {
    id: 'cermam12_98',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'São recomendações do Ministério da Saúde para uma assistência pré-natal adequada, EXCETO:',
    options: [
      'Captação precoce das gestantes com realização da primeira consulta de pré-natal até 120 dias da gestação.',
      'Realização de, no mínimo, quatro consultas de pré-natal, preferencialmente uma no primeiro trimestre, uma no segundo e duas no terceiro.',
      'Imunização antitetânica: aplicação de vacina dupla tipo adulto até a dose imunizante (segunda) ou dose de reforço em gestantes com esquema vacinal completo há mais de 5 anos.',
      'Prevenção e tratamento dos distúrbios nutricionais, além da prevenção ou diagnóstico precoce do câncer de colo uterino e de mama.',
      'Atenção à mulher e ao recém-nascido na primeira semana após o parto e consulta puerperal até o 42º dia pós-parto.',
    ],
    correctIndex: 0,
  },
  {
    id: 'cermam12_99',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Em relação aos exames complementares realizados no pré-natal:',
    options: [
      'O rastreamento para diabetes gestacional é considerado positivo com valores de glicemia de jejum maiores ou iguais a 100 mg/dl.',
      'A dosagem da glicemia de jejum deve ser solicitada a todas as gestantes no segundo trimestre, como teste de rastreamento para o diabetes mellitus gestacional.',
      'Em caso de VDRL negativo, o exame deve ser repetido em torno da 30ª semana, no momento do parto ou em caso de abortamento, em virtude dos riscos de infecção/reinfecção.',
      'Em caso de VDRL positivo, solicitar testagem do(s) parceiro(s) e o teste confirmatório (FTA-Abs ou MHATP). Se o teste confirmatório for reagente, não se descarta a hipótese de reação cruzada.',
      'Gestante com fator Rh negativo e parceiro Rh positivo e/ou desconhecido devem realizar teste de Coombs indireto. Se o resultado for negativo, repeti-lo em torno da 34ª semana.',
    ],
    correctIndex: 2,
  },
  {
    id: 'cermam12_100',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Sobre o climatério, pode-se dizer:',
    options: [
      'A menopausa é um marco do climatério, correspondendo a um dos últimos ciclos menstruais, somente reconhecido depois de passados 12 meses da sua ocorrência, geralmente em torno dos 48 aos 50 anos de idade.',
      'O tratamento hormonal deve ser encarado como uma opção terapêutica, não sendo necessárias indicações específicas.',
      'O climatério é definido como um processo patológico, sendo a transição entre o período reprodutivo e o não reprodutivo da vida da mulher.',
      'As modificações orgânicas que ocorrem na mulher durante o climatério obrigatoriamente implicam na diminuição do prazer.',
      'Os sintomas clássicos relacionados com o processo de hipotrofia genital que decorrem do hipoestrogenismo são: ressecamento vaginal, prurido, irritação, ardência e sensação de pressão.',
    ],
    correctIndex: 0,
  },
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
  'Genética': { image: 'https://cdn-icons-png.flaticon.com/512/8986/8986421.png', icon: Dna, color: 'bg-teal-500', ringColor: '#14B8A6', textColor: 'text-white', shadow: 'shadow-teal-500/40' },

  // Clínicos e Especialidades - Duolingo Aesthetics
  'Cardiologia Clínica': { image: '/6176500.png', icon: Heart, color: 'bg-rose-500', ringColor: '#F43F5E', textColor: 'text-white', shadow: 'shadow-rose-500/40' },
  'Cardiologia': { image: '/6176500.png', icon: Heart, color: 'bg-rose-500', ringColor: '#F43F5E', textColor: 'text-white', shadow: 'shadow-rose-500/40' },
  'Neurologia': { image: '/11666655.png', icon: Brain, color: 'bg-indigo-500', ringColor: '#6366F1', textColor: 'text-white', shadow: 'shadow-indigo-500/40' },
  'Pediatria': { image: '/10154448.png', icon: Baby, color: 'bg-emerald-500', ringColor: '#10B981', textColor: 'text-white', shadow: 'shadow-emerald-500/40' },
  'Ginecologia & Obstetrícia': { image: '/2885280.png', icon: Baby, color: 'bg-pink-500', ringColor: '#EC4899', textColor: 'text-white', shadow: 'shadow-pink-500/40' },
  'Cirurgia Geral': { image: '/10154417.png', icon: Scissors, color: 'bg-orange-500', ringColor: '#F59E0B', textColor: 'text-white', shadow: 'shadow-orange-500/40' },
  'Clínica Cirúrgica': { image: '/10154417.png', icon: Scissors, color: 'bg-orange-500', ringColor: '#F59E0B', textColor: 'text-white', shadow: 'shadow-orange-500/40' },
  'Clínica Médica': { image: '/3028573.png', icon: Heart, color: 'bg-rose-500', ringColor: '#F43F5E', textColor: 'text-white', shadow: 'shadow-rose-500/40' },
  'Medicina de Família/SUS': { image: '/12370055.png', icon: Users, color: 'bg-cyan-500', ringColor: '#06B6D4', textColor: 'text-white', shadow: 'shadow-cyan-500/40' },
  'Psiquiatria': { image: '/12024688.png', icon: Brain, color: 'bg-purple-500', ringColor: '#8B5CF6', textColor: 'text-white', shadow: 'shadow-purple-500/40' },
  'Dermatologia': { image: '/10154433.png', icon: Droplet, color: 'bg-amber-400', ringColor: '#F59E0B', textColor: 'text-white', shadow: 'shadow-amber-500/40' },
  'Oftalmologia': { image: '/2007207.png', icon: Eye, color: 'bg-teal-500', ringColor: '#14B8A6', textColor: 'text-white', shadow: 'shadow-teal-500/40' },
  'Otorrinolaringologia': { image: '/9340044.png', icon: Ear, color: 'bg-violet-500', ringColor: '#8B5CF6', textColor: 'text-white', shadow: 'shadow-violet-500/40' },
  'Pneumologia': { image: '/10154419.png', icon: Wind, color: 'bg-sky-500', ringColor: '#0EA5E9', textColor: 'text-white', shadow: 'shadow-sky-500/40' },
  'Gastroenterologia': { image: '/6490965.png', icon: Activity, color: 'bg-green-600', ringColor: '#16A34A', textColor: 'text-white', shadow: 'shadow-green-500/40' },
  'Endocrinologia': { image: '/15192810.png', icon: Pill, color: 'bg-yellow-500', ringColor: '#EAB308', textColor: 'text-white', shadow: 'shadow-yellow-500/40' },
  'Nefrologia': { image: '/12024712.png', icon: Stethoscope, color: 'bg-blue-600', ringColor: '#2563EB', textColor: 'text-white', shadow: 'shadow-blue-500/40' },
  'Reumatologia': { image: '/12024718.png', icon: Bone, color: 'bg-slate-500', ringColor: '#64748B', textColor: 'text-white', shadow: 'shadow-slate-500/40' },
  'Hematologia': { image: '/6176756.png', icon: Droplet, color: 'bg-red-700', ringColor: '#B91C1C', textColor: 'text-white', shadow: 'shadow-red-500/40' },
  'Infectologia': { image: '/10154483.png', icon: Bug, color: 'bg-lime-600', ringColor: '#65A30D', textColor: 'text-white', shadow: 'shadow-lime-500/40' },
  'Urgência e Emergência': { image: 'https://cdn-icons-png.flaticon.com/512/3914/3914688.png', icon: AlertTriangle, color: 'bg-red-600', ringColor: '#DC2626', textColor: 'text-white', shadow: 'shadow-red-600/40' },
  'Medicina Intensiva': { image: 'https://cdn-icons-png.flaticon.com/512/978/978957.png', icon: Activity, color: 'bg-slate-700', ringColor: '#334155', textColor: 'text-white', shadow: 'shadow-slate-700/40' },
  'Ortopedia': { image: '/ORTOP.png', icon: Bone, color: 'bg-stone-500', ringColor: '#78716C', textColor: 'text-white', shadow: 'shadow-stone-500/40' },
  'Neonatologia': { image: 'https://cdn-icons-png.flaticon.com/512/14365/14365115.png', icon: Baby, color: 'bg-sky-400', ringColor: '#38BDF8', textColor: 'text-white', shadow: 'shadow-sky-400/40' },
  'Anestesiologia': { image: 'https://cdn-icons-png.flaticon.com/512/5793/5793712.png', icon: Thermometer, color: 'bg-gray-500', ringColor: '#6B7280', textColor: 'text-white', shadow: 'shadow-gray-500/40' },
  'Traumatologia-Ortopedia': { image: 'https://cdn-icons-png.flaticon.com/512/11071/11071552.png', icon: Bone, color: 'bg-amber-700', ringColor: '#B45309', textColor: 'text-white', shadow: 'shadow-amber-700/40' },
  'Patologia': { image: 'https://cdn-icons-png.flaticon.com/512/9340/9340149.png', icon: Microscope, color: 'bg-slate-600', ringColor: '#475569', textColor: 'text-white', shadow: 'shadow-slate-600/40' },
  'Parasitologia': { image: 'https://cdn-icons-png.flaticon.com/512/8099/8099004.png', icon: Bug, color: 'bg-green-700', ringColor: '#15803D', textColor: 'text-white', shadow: 'shadow-green-700/40' },
  'Semiologia': { image: 'https://cdn-icons-png.flaticon.com/512/2666/2666112.png', icon: Stethoscope, color: 'bg-cyan-500', ringColor: '#06B6D4', textColor: 'text-white', shadow: 'shadow-cyan-500/40' },
  'Epidemiologia': { image: 'https://cdn-icons-png.flaticon.com/512/1753/1753380.png', icon: BarChart2, color: 'bg-blue-500', ringColor: '#3B82F6', textColor: 'text-white', shadow: 'shadow-blue-500/40' },
  'Urologia': { image: 'https://cdn-icons-png.flaticon.com/512/4006/4006204.png', icon: Droplets, color: 'bg-yellow-600', ringColor: '#CA8A04', textColor: 'text-white', shadow: 'shadow-yellow-600/40' },
  'Geriatria': { image: 'https://cdn-icons-png.flaticon.com/512/978/978915.png', icon: Users, color: 'bg-orange-500', ringColor: '#F97316', textColor: 'text-white', shadow: 'shadow-orange-500/40' },
  'Radiologia': { image: '/RADIOLOIA.png', icon: Search, color: 'bg-gray-600', ringColor: '#4B5563', textColor: 'text-white', shadow: 'shadow-gray-600/40' },
  'Cirurgia Vascular': { image: 'https://cdn-icons-png.flaticon.com/512/8670/8670744.png', icon: Activity, color: 'bg-red-800', ringColor: '#991B1B', textColor: 'text-white', shadow: 'shadow-red-800/40' },
  'Neurocirurgia': { image: 'https://cdn-icons-png.flaticon.com/512/9710/9710955.png', icon: Brain, color: 'bg-violet-700', ringColor: '#6D28D9', textColor: 'text-white', shadow: 'shadow-violet-700/40' }
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
  questionCount?: number;
  key?: string | number;
}

const GamePathNode = ({
  subject,
  progress,
  index,
  isSelected,
  onClick,
  questionCount = 0,
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
      <div className="text-center flex flex-col items-center gap-1">
        <h4 className={`text-[10px] sm:text-[11px] font-black uppercase tracking-tight leading-tight max-w-[110px] break-words ${
          isSelected ? 'text-slate-900 scale-105' : 'text-slate-500'
        } transition-all`}>
          {subject}
        </h4>
        {questionCount > 0 ? (
          <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
            {questionCount} {questionCount === 1 ? 'questão' : 'questões'}
          </span>
        ) : (
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-400 border border-slate-200">
            em breve
          </span>
        )}
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


  // -- IAMSPE 02/2024 --
  {
    id: 'iamspe_2024_001',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: "Um paciente de 28 anos procura atendimento com queixas de dispneia aos esforços, sibilos e tosse seca. Ao exame físico, não há alterações relevantes. Qual o exame complementar mais indicado para confirmar o diagnóstico de asma nesse caso?",
    options: ["Radiografia de tórax", "Tomografia computadorizada de tórax", "Teste de broncoprovocação com metacolina", "Ecocardiograma", "Espirometria com prova broncodilatadora"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_002',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: "Qual das seguintes afirmações descreve corretamente o Sinal de Fox e sua relevância no exame físico para diagnóstico diferencial em emergência?",
    options: ["O Sinal de Fox é caracterizado por equimoses na região inguinal, indicando pancreatite aguda com possível complicação de hemorragia retroperitoneal", "O Sinal de Fox é caracterizado por dor intensa à palpação do quadrante inferior direito do abdômen, sugerindo apendicite aguda", "O Sinal de Fox é identificado como uma alteração na pupila, indicando lesão cerebral ou aumento da pressão intracraniana", "O Sinal de Fox é uma descoloração azulada ao redor do umbigo, associada a gravidez ectópica rota", "O Sinal de Fox é caracterizado por dor ao levantamento do braço contra resistência, sugerindo tendinite do manguito rotador"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_003',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: "Um homem de 55 anos sofre uma parada cardiorrespiratória durante esforço físico. Após o atendimento inicial, o eletrocardiograma mostra fibrilação ventricular como ritmo inicial. Qual é a causa cardíaca mais provável dessa parada cardiorrespiratória?",
    options: ["Miocardite viral, frequentemente associada a bloqueios cardíacos completos", "Infarto agudo do miocárdio, levando a isquemia miocárdica severa e arritmias malignas", "Taponamento cardíaco, causando colapso hemodinâmico por compressão do coração", "Dissecção aguda de aorta, resultando em tamponamento e colapso circulatório", "Síndrome do QT longo, predispondo à taquiarritmia polimórfica"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_004',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: "O propofol é um dos agentes anestésicos intravenosos mais utilizados atualmente. Qual o principal mecanismo de ação do propofol que explica seu efeito hipnótico?",
    options: ["O propofol atua como agonista dos receptores NMDA, promovendo a inibição da transmissão sináptica", "O propofol inibe a liberação de acetilcolina nos terminais sinápticos, diminuindo a excitabilidade neuronal", "O propofol bloqueia os canais de sódio voltagem-dependentes, impedindo a despolarização das membranas neuronais", "O propofol facilita a ligação do GABA aos seus receptores, aumentando a condutância de íons cloreto e hiperpolarizando a membrana celular", "O propofol reduz a atividade da adenilciclase, diminuindo a concentração intracelular de AMPc e a atividade neuronal"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_005',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: "O BNP é um biomarcador amplamente utilizado na prática clínica para o diagnóstico e manejo da insuficiência cardíaca. Qual das seguintes afirmações sobre o uso do BNP é correta?",
    options: ["Níveis de BNP inferiores a 100 pg/mL praticamente excluem o diagnóstico de insuficiência cardíaca em pacientes com dispneia aguda", "O BNP é um marcador exclusivo para insuficiência cardíaca, não sendo relevante em outras condições cardiovasculares", "Níveis elevados de BNP não têm correlação com a gravidade da insuficiência cardíaca ou com desfechos clínicos", "O BNP deve ser utilizado isoladamente para o diagnóstico da insuficiência cardíaca, sem considerar outros exames clínicos", "A dosagem de BNP é irrelevante para o acompanhamento da resposta ao tratamento em pacientes com insuficiência cardíaca"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_006',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: "O mecanismo de ação da nitroglicerina como vasodilatador em doenças vasculares, incluindo sua aplicação clínica, é descrito corretamente por:",
    options: ["A nitroglicerina é um antagonista dos receptores de angiotensina II, reduzindo a resistência vascular periférica e a pressão arterial", "A nitroglicerina atua como um bloqueador dos canais de cálcio, diminuindo a entrada de cálcio nas células musculares lisas e causando vasodilatação", "A nitroglicerina é um inibidor da enzima fosfodiesterase-5 (PDE-5), aumentando os níveis de GMPc e promovendo a vasodilatação nas artérias coronárias", "A nitroglicerina é um doador de óxido nítrico (NO), que estimula a produção de GMPc nas células musculares lisas, levando à relaxação e vasodilatação dos vasos sanguíneos", "A nitroglicerina atua como um bloqueador dos receptores beta-adrenérgicos, reduzindo a frequência cardíaca e promovendo a vasodilatação"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_007',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: "O efeito anti-hipertensivo da Candesartana é mediado por:",
    options: ["Inibição da enzima conversora de angiotensina", "Bloqueio competitivo dos receptores AT1", "Estimulação dos receptores de bradicinina", "Redução da expressão do gene da proteína Gq/11", "Aumento da atividade da enzima vasopeptidase"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_008',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: "Na fisiopatogenia do Diabetes Tipo 2, qual das seguintes afirmações descreve corretamente os mecanismos que levam à resistência à insulina?",
    options: ["A resistência à insulina no Diabetes Tipo 2 é mediada pela inflamação crônica e aumento dos níveis de citocinas inflamatórias, como TNF-α e IL-6, que interferem na sinalização da insulina nos tecidos periféricos", "A resistência à insulina é primariamente causada por uma mutação genética no receptor de insulina, resultando em uma resposta imune que destrói as células β pancreáticas", "A resistência à insulina é um processo autoimune onde os anticorpos atacam diretamente as células produtoras de insulina, levando à deficiência absoluta de insulina", "O aumento da síntese de glicose hepática devido à hiperatividade da via de gluconeogênese é o único fator contribuinte para a resistência à insulina no Diabetes Tipo 2", "A resistência à insulina é exclusivamente resultado de uma deficiência na secreção de insulina pelas células β pancreáticas, sem influência de fatores periféricos"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_009',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: "No diagnóstico da Doença Pulmonar Obstrutiva Crônica (DPOC), a espirometria é considerada o exame padrão-ouro porque:",
    options: ["Identifica o grau de hiperinsuflação pulmonar pela medida da capacidade residual funcional", "Diferencia o padrão obstrutivo do padrão restritivo, com base no comportamento dos volumes", "Avalia a capacidade vital forçada (CVF) e o volume expiratório forçado no 1º segundo (VEF1)", "Mensura a resistência das vias aéreas e a complacência pulmonar, característicos da DPOC", "Quantifica a reversibilidade do distúrbio ventilatório após broncodilatador, confirmando o diagnóstico"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_010',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: "Paciente de 50 anos, com histórico de dispneia progressiva aos esforços, apresenta pressão arterial pulmonar média de 35 mmHg em repouso, medida por cateterismo cardíaco direito. Após investigação, é diagnosticada com Hipertensão Arterial Pulmonar (HAP) idiopática. Qual dos seguintes mecanismos fisiopatológicos é o principal responsável pela elevação da pressão arterial pulmonar na HAP?",
    options: ["Aumento da pressão venosa pulmonar por disfunção ventricular esquerda", "Aumento do débito cardíaco por shunt intracardíaco esquerda-direita", "Obstrução mecânica da vasculatura pulmonar por êmbolos", "Hipoventilação alveolar com hipoxemia crônica", "Vasoconstrição e remodelamento vascular pulmonar"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_011',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: "Paciente masculino, 45 anos, portador de pneumonia adquirida na comunidade com isolamento de Streptococcus pneumoniae resistente à penicilina (MIC >2μg/mL) em hemocultura, inicia tratamento com levofloxacino 750mg/dia. Após 72 horas, evolui com piora clínica e nova hemocultura evidencia aumento da MIC para levofloxacino de 0,5 para 4μg/mL. Na análise dos mecanismos moleculares de resistência às fluoroquinolonas e suas implicações terapêuticas, selecione a afirmativa correta:",
    options: ["A mutação isolada no gene parC da topoisomerase IV confere resistência de alto nível à levofloxacino por ser seu alvo primário em gram-positivos, mantendo sensibilidade à delafloxacino", "O desenvolvimento de resistência durante terapia sugere seleção de subpopulação com mutação prévia em gyrA, sendo improvável mutação de novo em parC no período de 72 horas", "A presença de bomba de efluxo PmrA aumenta a CIM em 4 vezes quando associada à mutação em parC, mantendo atividade bactericida da moxifloxacino pela maior afinidade à DNA girase", "O mecanismo stepwise de resistência inicia com mutação em gyrA seguida de parC em gram- positivos, exigindo dupla mutação para CIM >4μg/mL em isolados selvagens", "A resistência por proteína Qnr plasmidial protege tanto a topoisomerase IV quanto a DNA girase, conferindo resistência cruzada a todas as quinolonas independente da geração"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_012',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: "No tratamento de infecção do trato urinário em gestantes, o antibiótico de escolha é considerado seguro em boa parte da gestação, mas deve ser evitado próximo ao termo devido ao risco de anemia hemolítica neonatal é:",
    options: ["Cefalexina", "Ciprofloxacino", "Sulfametoxazol-trimetoprima", "Doxiciclina", "Nitrofurantoína"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_013',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: "Na abordagem clínica da gonorreia em adultos jovens, preencha corretamente as lacunas com os métodos diagnósticos e tratamentos indicados: _____ 1: O diagnóstico da infecção por Neisseria gonorrhoeae é confirmado principalmente pelo método laboratorial que utiliza amplificação de ácidos nucleicos. ______ 2: O tratamento de primeira linha para gonorreia não complicada é realizado com o uso de um antibiótico de terceira geração, administrado por via intramuscular em dose única. As lacunas são corretamente preenchidas, respectivamente, por:",
    options: ["PCR, Ceftriaxona", "Cultura bacteriana, Azitromicina", "Teste rápido imunocromatográfico, Doxiciclina", "PCR, Amoxicilina", "Cultura bacteriana, Cefixima"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_014',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    text: "Paciente feminina, 25 anos, com diagnóstico de Transtorno Depressivo Maior, inicia tratamento com Fluoxetina 20mg/dia. Qual o principal mecanismo de ação da Fluoxetina na melhora dos sintomas depressivos?",
    options: ["Inibição da recaptação de serotonina na fenda sináptica, aumentando sua disponibilidade", "Bloqueio dos receptores dopaminérgicos D2, reduzindo a atividade dopaminérgica", "Aumento da liberação de noradrenalina na fenda sináptica, promovendo efeito estimulante", "Inibição da enzima monoaminoxidase (MAO), aumentando a disponibilidade de neurotransmissores", "Potencialização da ação do GABA, principal neurotransmissor inibitório do sistema nervoso central"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_015',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: "Preencha corretamente as lacunas com os nomes dos fármacos associados às seguintes descrições: _____ 1: Este medicamento é um potente inibidor da ciclooxigenase-1 (COX-1), reduzindo a síntese de prostaglandinas, sendo especialmente indicado em crises agudas de gota devido à sua ação anti-inflamatória de rápida resposta. ______ 2: Este fármaco inibe ambas as isoformas da ciclooxigenase (COX-1 e COX-2) de forma não seletiva, possuindo uma longa meia-vida que o torna ideal para condições inflamatórias crônicas como artrite reumatoide e osteoartrite. As lacunas são corretamente preenchidas, respectivamente, por:",
    options: ["Piroxicam, Indometacina", "Celecoxibe, Indometacina", "Naproxeno, Piroxicam", "Indometacina, Piroxicam", "Diclofenaco, Naproxeno"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_016',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: "No diagnóstico de insuficiência hepática aguda, o exame laboratorial que fornece uma medida direta da capacidade sintética do fígado e é fundamental para avaliar o prognóstico é:",
    options: ["Dosagem do tempo de protrombina (TP) e cálculo do INR", "Dosagem de bilirrubina direta e indireta", "Níveis séricos de aspartato aminotransferase (AST) e alanina aminotransferase (ALT)", "Albumina sérica", "Ultrassonografia abdominal com Doppler de vasos hepáticos"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_017',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: "O paciente de 35 anos apresenta gastrite crônica associada à infecção por Helicobacter pylori. Qual é o regime terapêutico recomendado?",
    options: ["Claritromicina 500mg + Metronidazol 500mg + Lansoprazol 30mg, durante 10 dias", "Amoxicilina 1g + Metronidazol 500mg + Pantoprazol 40mg, durante 14 dias", "Levofloxacino 500mg + Amoxicilina 1g + Esomeprazol 40mg, durante 10 dias", "Claritromicina 500mg + Amoxicilina 1g + Omeprazol 20mg, durante 7 dias", "Amoxicilina 1g + Claritromicina 500mg + Omeprazol 20mg, durante 14 dias"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_018',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: "Na administração de insulina Lantus (glargina) em pacientes com Diabetes Tipo 1, qual das seguintes afirmações descreve corretamente seu mecanismo de ação e aplicação clínica?",
    options: ["A insulina Lantus é uma insulina de ação rápida que atinge seu pico de ação em 30 minutos, sendo ideal para controle glicêmico pós-prandial imediato", "A insulina Lantus é uma insulina basal de ação prolongada que fornece níveis constantes de insulina por aproximadamente 24 horas, sem picos pronunciados, auxiliando no controle glicêmico basal", "A insulina Lantus é uma insulina de ação intermediária que deve ser administrada duas vezes ao dia para manter o controle glicêmico basal", "A insulina Lantus é um análogo de insulina que deve ser misturado com insulina de ação rápida para alcançar um efeito prolongado e um controle glicêmico pós-prandial", "A insulina Lantus é uma insulina de ação ultra-rápida que atinge seu pico de ação em menos de 15 minutos, sendo ideal para correção rápida de hiperglicemia"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_019',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: "Na avaliação clínica de um paciente com doença renal crônica, a presença de anemia está associada à/ao:",
    options: ["Déficit de ferro decorrente de perda sanguínea oculta", "Elevação dos níveis de ureia e creatinina séricos", "Redução da produção de eritropoietina pelo rim", "Distúrbios eletrolíticos, como hipercalemia e hiponatremia", "Aumento da pressão arterial sistêmica e risco cardiovascular"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_020',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: "Na fisiopatogenia da asma brônquica, diversos mecanismos imunológicos e inflamatórios contribuem para a obstrução das vias aéreas. Qual das seguintes afirmações melhor descreve um dos principais mecanismos envolvidos na resposta asmática?",
    options: ["A ativação de linfócitos T CD4+ do tipo Th1 é predominante e leva à produção de citocinas inflamatórias que causam broncoconstrição", "A liberação de mediadores inflamatórios pelos mastócitos, como histamina e leucotrienos, resulta em broncoconstrição e aumento da permeabilidade vascular", "A presença de neutrófilos é a principal característica da inflamação nas vias aéreas, contribuindo para a remodelação crônica das mesmas", "A produção de IgG em resposta a alérgenos é o principal fator que desencadeia a hiperresponsividade brônquica", "O aumento da secreção de muco é exclusivamente causado pela ativação de linfócitos T CD4+ do tipo Th17"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_021',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Uma paciente de 73 anos apresentou dor abdominal no hipocôndrio direito há seis dias, associada a mudança no padrão alimentar e perda de peso. Ao dar entrada no pronto-socorro, os exames laboratoriais mostraram os seguintes resultados: Hemoglobina 12,3 g/dL, leucócitos 12.630/mm³, bilirrubina total 1,3 mg/dL, bilirrubina direta 0,94 mg/dL, INR 1,0, fosfatase alcalina 215 U/L, GGT 748 U/L, amilase 97 U/L, ALT (TGP) 676 U/L, AST (TGO) 349 U/L, PCR 13,7 mg/L (VR<1,0), ureia 50 mg/dL e creatinina 1,25 mg/dL. Foi submetida à colecistectomia videolaparoscópica e optou-se por realizar uma colangiografia intraoperatória que resultou na imagem a seguir. Assinale a alternativa que corresponde ao diagnóstico encontrado:",
    options: ["Tumor de papila", "Lesão de via biliar", "Coledocolitíase", "Sem alterações", "Colangite"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_022',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Conhecimento da anatomia da região inguinal é crucial para a realização de uma cirurgia segura e efetiva. Reconhecer e evitar lesão de estruturas nervosas no canal inguinal é a chave para evitar as chamadas inguinodínias. Qual nervo que, após cruzar o músculo oblíquo interno, passa pelo canal inguinal ao lado do cordão emergindo normalmente pelo orifício interno e terminando no orifício externo onde distribui fibras para inervação sensorial de raiz do pênis e escroto no homem e grandes lábios nas mulheres?",
    options: ["Nervo íleo hipogástrico", "Ramo genital do genitofemoral", "Nervo íleo inguinal", "Ramo femoral do genitofemoral", "Nervo cutâneo lateral da coxa"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_023',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Paciente masculino, 88 anos, portador de hipertensão e diabetes, com histórico de cateterismo e colocação de stent há 2 anos, em uso de anticoagulante oral, foi trazido pelo cuidador após queda da própria altura em casa. Não apresentou perda de consciência desde a queda até a chegada ao hospital. Ao exame físico, apresenta hematoma subgaleal frontal à esquerda, sem alterações no exame respiratório e sem dor abdominal. Qual deve ser a conduta inicial?",
    options: ["Observação do paciente internado por 48 horas para monitoramento de sinais neurológicos e verificar possível intervalo lúcido", "Solicitar tomografia computadorizada de crânio para avaliação de lesões intracranianas", "Encaminhar para ressonância magnética de crânio para melhor avaliação de possíveis hematomas subdurais crônicos", "Iniciar profilaxia de anticonvulsivante devido ao risco aumentado de convulsões pela queda", "Observação ambulatorial, com orientação para retornar caso apresente sintomas neurológicos ou piora clínica"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_024',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Um paciente masculino de 85 anos deu entrada no pronto atendimento com queixa de icterícia há cerca de 5 dias e queda do estado geral. Relata perda ponderal de 1 kg na última semana, nega alteração das fezes, mas refere urina mais escura. Ao exame físico, o paciente está lúcido, orientado, ictérico (2+/4+), desidratado (1+/4+), com frequência cardíaca de 64 bpm. O abdome é globoso, flácido e indolor à palpação profunda, e o sinal de Murphy é negativo. Os exames laboratoriais mostraram os seguintes resultados: hemoglobina 15,1 g/dL, leucócitos 6040/mm³, plaquetas 175000/mm³, GGT 225 U/L, amilase 61 U/L, TGP 252 U/L, TGO 147 U/L, bilirrubina total 10,01 mg/dL, bilirrubina direta 7,68 mg/dL, bilirrubina indireta 2,33 mg/dL, PCR 0,9 mg/dL, ureia 36 mg/dL, potássio 4,2 mEq/L, creatinina 0,91 mg/dL e fosfatase alcalina 189 U/L. A ultrassonografia abdominal revelou vesícula biliar de forma e dimensões normais, paredes finas e regulares, com imagens calculosas em seu interior, móveis a mudança de decúbito medindo 0,6 a 0,9cm e discreta dilatação da vias biliares intra-hepáticas, sem visualização do fator obstrutivo. Com base nas informações acima, qual exame de imagem deve ser solicitado na sequência para melhor avaliação do quadro clínico do paciente?",
    options: ["Tomografia Computadorizada Abdominal com contraste", "Colangiorressonância magnética", "Radiografia de abdome simples", "Cintilografia hepatobiliar", "Novo ultrassom realizado por outro profissional"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_025',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Paciente feminino de 72 anos com queixa de perda ponderal de 7% do seu peso em 2 meses sem mudança do padrão alimentar, dor abdominal, adinamia, deu entrada no pronto atendimento com quadro obstrutivo agudo e foi diagnosticada com tumor de sigmóide. Foi submetida a retossigmoidectomia na urgência com anastomose primária e durante pós operatório evoluiu com quadro de íleo mais prolongado. Considerando a doença de base, o porte da cirurgia e o quadro atual, assinale a alternativa incorreta:",
    options: ["Pelo NRS-2002 a paciente apresenta alto risco nutricional e deve receber intervenção nutricional precoce", "Para melhora do íleo pós operatório deve-se hidratar paciente com parcimônia, não passando de 30ml/kg", "Pelo NRS-2002 a paciente apresenta baixo risco nutricional e deve ser reavaliada semanalmente", "Para melhora do íleo pós operatório deve-se iniciar deambulação precoce, o que também auxilia na prevenção de TVP", "Para melhora do íleo pós operatório deve-se diminuir o uso de opiáceos"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_026',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Paciente masculino, 54 anos, apresenta dor abdominal intensa irradiada para o tórax e dorso, com intensidade 10/10, associada a náuseas, porém sem vômitos. Ao exame físico, encontra-se afebril, anictérico, com PA 166x121 mmHg, FC 78 bpm, abdome globoso, tenso, doloroso difusamente, com ruídos hidroaéreos diminuídos. Exames laboratoriais: Hb19,4 g/dL, leucócitos 21.930/mm³, creatinina 2,81 mg/dL, ureia 92 mg/dL; bilirrubina total 1,45 mg/dL, bilirrubina direta 0,38 mg/dL, fosfatase alcalina 49 U/L, GGT 37 U/L, amilase 2234 U/L, lipase 2984 U/L, PCR 44 mg/L (VR<1,0). Aferida pressão intrabdominal 17mmHg. Realizada tomografia computadorizada para diagnóstico diferencial e obtida a imagem abaixo: Considerando o diagnóstico do paciente, a conduta imediata deve ser:",
    options: ["Drenagem percutânea", "Expansão volêmica e transferência para UTI", "Drenagem cirúrgica videolaparoscópica", "Descompressão cirúrgica por laparotomia", "Nenhuma das anteriores"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_027',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Paciente masculino, 68 anos, chega ao pronto-socorro com dor abdominal epigástrica intensa e súbita, associada a distensão abdominal há 1 dia. Relata um episódio de vômito, mas nega sangramentos, febre ou perda ponderal. Relata histórico de AVC hemorrágico há 10 anos e hipertensão, em uso de losartana. Ao exame físico apresentava abdome distendido, doloroso difusamente, DB positivo. Exames laboratoriais: Hemoglobina: 10,7 g/dL, Leucócitos: 8.880/mm³, Plaquetas: 197.000/mm³, Creatinina: 1,9 mg/dL, Ureia: 64 mg/dL, Sódio: 134 mEq/L, Potássio: 3,7 mEq/L, TGO: 28 U/L, TGP: 29 U/L, Amilase: 96 U/L, PCR: 13,4 mg/L (VR<1,0), Magnésio: 1,7 mg/dL. Realizou RX de abdome agudo com a imagem abaixo: Qual deve ser a conduta imediata?",
    options: ["Solicitar tomografia computadorizada de abdome para confirmação diagnóstica e avaliar a extensão da lesão", "Iniciar antibioticoterapia de largo espectro e hidratação venosa, internação e observação", "Laparotomia exploradora ou abordagem laparoscópica de urgência, devido à suspeita de perfuração", "Manter jejum, realizar estabilização hemodinâmica e iniciar passagem de sonda nasogástrica para descompressão gástrica", "Encaminhar para endoscopia digestiva alta de urgência para investigar a origem da dor abdominal"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_028',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Durante uma hemicolectomia direita, existe a demanda por ligadura vascular, anastomose intestinal, e fechamento da aponeurose da parede abdominal. Aponte a alternativa que contém os fios de sutura mais adequados para esses tempos cirúrgicos, respectivamente:",
    options: ["Poliamida, Algodão, Poliéster", "Poliamida, Categute, Poliglecaprone", "Algodão, Polietileno, Polidioxanona", "Algodão, Poliéster, Poliglatina", "Poliglatina, Poliamida, Polidioxanona"],
    correctIndex: -1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_029',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Paciente feminina, 18 anos, procurou atendimento em UPA com queixa de dor abdominal em baixo ventre há 2 dias e recebeu antibioticoterapia com ciprofloxacina para infecção do trato urinário. Sem melhora dos sintomas após 3 dias de tratamento, procurou um hospital de referência apresentando piora da dor abdominal, além de náuseas e vômitos. Ao exame físico, a paciente estava descorada (1+/4+), desidratada (2+/4+), afebril ao toque, com abdome tenso e doloroso à palpação em flanco e fossa ilíaca direita, com sinal de Giordano negativo. Exames laboratoriais: Hemoglobina: 12,6 g/dL, Leucócitos: 16.260/mm³, Plaquetas: 260.000/mm³, Creatinina: 1,01 mg/dL, Ureia: 21,8 mg/dL, INR: 1,15, PCR: 23,9 mg/L (VR<1,0). Realizou tomografia computadorizada de abdome com contraste venoso para investigação que apresentou o seguinte achado. Dentre os diagnósticos diferenciais para esse caso, qual dos seguintes é o mais provável?",
    options: ["Diverticulite de ceco", "Doença inflamatória pélvica (DIP)", "Torção de cisto ovariano", "Apendicite aguda", "Infecção urinária complicada com pielonefrite"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_030',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Paciente feminina, 21 anos, após confraternização de fim de ano, apresenta sensação de alimento preso na garganta, odinofagia, sialorréia, regurgitação e náuseas (sem vômito). Compareceu ao pronto- socorro onde realizou exames laboratoriais e de imagem. Exames laboratoriais: Hemoglobina 11,1 g/dL, Leucócitos 6.730/mm³, Plaquetas 151.000/mm³, PCR 1,23 mg/L (VR<1,0), Creatinina 0,65 mg/dL, Ureia 24 mg/dL, Sódio 139 mEq/L, Potássio 4,0 mEq/L, Bilirrubina Total 0,23 mg/dL, Amilase 62 U/L, INR1,14. Endoscopia laudava esôfago com mucosa conservada até 20cm da ADS com laceração profunda onde encontra-se corpo estranho impactado. Retirado com auxílio de Roth Net sem intercorrências. Realizada também tomografia computadorizada de pescoço. Vide imagens abaixo. Qual deve ser a conduta imediata?",
    options: ["NPO (nada por via oral), hidratação venosa, antibioticoterapia endovenosa, internação e avaliação para reintervenção endoscópica ou cirúrgica conforme evolução", "Realizar esofagograma com contraste hidrossolúvel imediatamente para avaliar a extensão da lesão", "Passagem de sonda nasogástrica e lavagem com soro fisiológico para limpar o esôfago", "Alta com analgesia e antibiótico, com orientação de retorno caso haja piora dos sintomas", "Encaminhar imediatamente para cirurgia para reparo esofágico primário, considerando o risco de mediastinite"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_031',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Homem, 47 anos, se apresenta ao Pronto Socorro com dor em fossa ilíaca esquerda há 1 dia sem febre ou demais sintomas. Nega episódios semelhantes ou cirurgias prévias. No exame físico, está em bom estado geral, normocárdico, afebril, abdome flácido, com dor localizada em fossa ilíaca esquerda, sem dor à descompressão brusca. Hemoglobina 14,8 g/dL (normal 12-16g/dL), Leucócitos 8750 s/ desvio (normal 6-10 mil), Proteína C Reativa 9 mg/L (normal até 5 mg/L). Realizada Tomografia, que observou a seguinte imagem. Aponte o tratamento mais adequado:",
    options: ["internação para antibioticoterapia venosa", "internação para procedimento cirúrgico de urgência", "alta com antibioticoterapia oral", "alta com sintomáticos por via oral", "alta com tamoxifeno por via oral"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_032',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Mulher, 67 anos, deu entrada no Pronto Socorro com dor e edema de membro inferior direito associada a leve dispnéia. Tem antecedente de histerectomia com salpingo-ooforectomia bilateral videolaparoscópica por neoplasia de ovário há 6 dias, com alta hospitalar há 3 com medicação sintomática. À admissão, estava eupneica em ar ambiente, Sat O2 97%, PA 130 x 80 mmHg, Pulso 82 bpm. Ausculta pulmonar e cardíaca limpas. Abdome flácido, indolor, cicatrizes de bom aspecto. Edema de perna direita com dor à palpação dessa panturrilha, sem outras peculiaridades. Qual a primeira medida mais adequada para realização ainda no Pronto Socorro?",
    options: ["Doppler Venoso de Membro Inferior direito", "Dosagem de D-Dímero", "Anticoagulação plena", "Angiotomografia de Tórax", "Gasometria venosa"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_033',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Mulher, 52 anos, com dor abdominal e tumefação epigástrica há 4 horas, associada a náusea sem vômitos. Histórico de histerectomia laparotômica, herniorrafias umbilical e incisional suprapúbica. Ao exame físico, Regular estado geral, normocárdica, normotensa, desidratada 2+/4+. Abdome pouco distendido, com nodulação subcutânea dolorosa à meia distância entre cicatriz umbilical e apêndice xifóide, sem edema ou hiperemia, com alguma mobilidade sobre seu eixo em linha média da parede abdominal, compatível com hérnia não redutível. Com tal achado, assinale o tipo da hérnia referida, a complicação apresentada por sua clínica e sua respectiva conduta no Pronto Socorro:",
    options: ["hérnia de Spiegel encarcerada; passagem de sonda nasogástrica e analgesia", "hérnia supraumbilical estrangulada; herniorrafia de urgência", "hérnia incisional encarcerada; tomografia de abdome", "hérnia epigástrica encarcerada; herniorrafia de urgência", "hérnia epigástrica encarcerada; tomografia de abdome"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_034',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Sobre as herniorrafias inguinais não-laparoscópicas, assinale a alternativa que aponte a técnica cirúrgica com seu respectivo nome:",
    options: ["McVay – aproximação do tendão do m. transverso ao ligamento pectíneo", "Shouldice – colocação de plug de tela em forma de cone no anel inguinal interno", "Lichtenstein – colocação de tela sem tensão sob o trato iliopúbico e ligamento inguinal", "Gilbert – sutura dos arcos musculoaponeuróticos do transverso abdominal e oblíquo interno ou tendão conjunto (quando presente) ao ligamento inguinal", "Bassini - reparo imbricado multicamada da parede posterior do canal inguinal"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_035',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Sexo feminino, 86 anos, hipertensa, diabética insulinodependente e com histórico de coronariopatia, é admitida no Pronto Socorro com história de dor em hipocôndrio direito há 4 dias, com piora progressiva associada a febre. À entrada, estava anictérica, hidratada, contactuante, plastrão doloroso em hipocôndrio direito, sinal de Murphy positivo. Ultrassonografia mostrou vesícula hiperdistendida, com cálculo impactado no infundíbulo e paredes delaminadas, e líquido pericolecístico, sem coleções ou dilatação de vias biliares. Exames laboratoriais com 21 mil leucócitos sem desvio, Plaquetas 95 mil, Proteína C Reativa 40mg/dL (VR<1,0). Bilirrubinas totais 1,5, Creatinina 1,8 mg/dL. Aponte o fator mais importante para considerar como Colecistite Aguda Grave segundo critérios de Tokyo 2018, e a conduta preconizada neste caso:",
    options: ["Idade superior a 75 anos; Antibioticoterapia e Colangiopancreatografia Retrógrada Endoscópica em até 24 horas", "Vesícula com paredes delaminadas; colecistectomia Laparotômica", "Leucocitose acima de 18 mil; antibioticoterapia, com colecistectomia após 4 semanas", "Proteína C Reativa > 100 mg/L (ou 10mg/dL); colecistectomia videolaparoscópica de urgência", "Plaquetas < 100 mil; colecistostomia por punção"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_036',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "A respeito das hemorragias gastrintestinais, aponte a alternativa correta:",
    options: ["O ponto anatômico que separa as hemorragias altas das baixas é a válvula ileocecal", "A etiologia de cerca de 60% das hemorragias digestivas é a doença ulcerosa péptica", "A hemorragia digestiva baixa tende a ser mais grave que a alta", "Dentre as doenças inflamatórias intestinais, a Doença de Crohn causa proporcionalmente mais hemorragia digestiva baixa do que a Retocolite Ulcerativa", "Nos casos de sangramento de maior monta com instabilidade hemodinâmica, uma colonoscopia deve ser realizada dentro de até 6 horas da entrada"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_037',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Mulher de 87 anos é trazida por cuidadora à UPA onde você está de plantão após escorregar em tapete e cair com sua bengala sobre mesa de centro da sala de sua casa. A profissional nega trauma de crânio, porém a paciente tem dor intensa sobre parede torácica direita à inspiração. Ao exame físico, ela se apresenta em bom estado geral, fascies dolorosa, eupneica em ar ambiente, acianótica, PA 130 x 90 mmHg, pulso 82 bpm, frequência respiratória 14 incursões/minuto, Sat O2 94%. Inspeção do tórax mostra hematoma em linha axilar anterior direita, à altura do 6º arco costal, com mobilização adequada do arcabouço aos movimentos respiratórios; palpando, a paciente tem dor intensa e crepitação nesse osso. Ausculta pulmonar sem alterações. Diante do quadro apresentado, aponte a alternativa mais adequada no momento:",
    options: ["Os dados apontados são suficientes para indicar internação em UTI para monitorização", "Pela altura e lateralidade do hematoma, lesões traumáticas hepáticas devem ser afastadas", "Ultrassonografia Point-of-Care neste caso pode ter utilidade devido às boas sensibilidade e especificidade para detecção das alterações esperadas", "Devido à possibilidade de lesão óssea, o acionamento do médico Ortopedista de plantão é necessário", "O manejo adequado da dor melhora a tolerância do paciente à respiração profunda e à tosse, porém não há redução do risco de pneumonia"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_038',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Eviscerações e eventrações são complicações potencialmente graves de procedimentos cirúrgicos por via laparotômica. Assinale a alternativa correta sobre esses eventos:",
    options: ["Na evisceração, a cobertura das vísceras com compressas úmidas até a reabordagem está atualmente contraindicada por aumento de lesões de delgado na manipulação", "As complicações de sítio cirúrgico profundo têm associação com idade avançada, uso de anti- inflamatórios não esteroidais e doença pulmonar subjacente", "Ao diagnóstico de deiscência de aponeurose, sua correção deve ser realizada imediatamente", "A deiscência de aponeurose abdominal é diagnosticada inicialmente por saída de secreção purulenta pela ferida operatória", "O uso de cintas abdominais não interfere na incidência de eventrações e eviscerações, estando indicado para conforto e sensação de segurança do paciente no pós-operatório"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_039',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Homem, 42 anos, queixa de dor em fossa ilíaca direita de forte intensidade de início súbito associada a náusea sem vômitos há 2 horas, com irradiação para região inguinal ipsilateral, sem fatores de piora ou melhora. Ao exame físico, abdome flácido, leve desconforto à palpação de fossa ilíaca direita, sem plastrão palpável ou tumefações subcutâneas. Sinais de Blumberg e Giordano negativos. Foi medicado e apresentou alívio da dor. Hemograma com Hb 14,3 g/dL, Leucócitos 9580 s/ desvio. Proteína C Reativa 1,2 g/dL (normal <1,0). Urina I com hemácias 12 mil (normal <10 mil) e leucócitos 11 mil (normal < 10 mil), sem outros achados. Após ver a tomografia e confirmar a hipótese diagnóstica mais provável para este caso, cite o próximo passo para o tratamento:",
    options: ["Antibioticoterapia com quinolona via oral e reavaliação em 48 horas", "Videolaparoscopia diagnóstica com provável apendicectomia", "Arteriografia armada para endoprótese de artéria ilíaca", "Litotripsia extracorpórea", "Alfa-bloqueador, anti-espasmódico + analgésicos, corticoides"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_040',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Paciente masculino de 56 anos, sabidamente portador de doença diverticular dos cólons, apresenta dor abdominal tipo cólica há 5 dias, com diminuição do apetite e procurou atendimento para investigação. Ao exame físico apresentava dor à palpação profunda em fossa ilíaca esquerda, sem massas palpáveis, com DB negativo. Foram realizados exames laboratoriais: Hemoglobina: 12,6 g/dL, Leucócitos: 16.260/mm³, Plaquetas: 260.000/mm³, Creatinina: 1,2 mg/dL, Ureia: 21,8 mg/dL, PCR: 23,9 mg/L (VR: <1,0 mg/L). Realizada tomografia computadorizada de abdome com contraste, mostrando imagem de coleção de 5,6cm de tamanho justa-cólico, sem pneumoperitônio livre, conforme imagem abaixo: Qual deve ser a conduta inicial para esse paciente?",
    options: ["Drenagem percutânea da coleção guiada por imagem, antibioticoterapia de amplo espectro e observação hospitalar", "Antibioticoterapia ambulatorial e orientação para retorno ao hospital se houver piora dos sintomas", "Laparotomia exploradora de urgência para drenagem cirúrgica e ressecção segmentar do cólon acometido", "Observação hospitalar com hidratação venosa e controle de dor, sem necessidade de drenagem inicial", "Realização de colonoscopia imediata para avaliar a extensão da doença diverticular e excluir outras causas de infecção"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_041',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Paciente de 34 anos, nuligesta com desejo reprodutivo, apresenta sangramento uterino anormal há 3 anos, refratário ao tratamento clínico medicamentoso. Realizou ressonância nuclear magnética de pelve e histeroscopia diagnóstica evidenciando: útero pouco aumentado de volume, com mioma submucoso classificação da FIGO tipo 1, medindo 3,5cm, manto externo até a serosa com 1,5cm de espessura. A base do nódulo ocupa 2/3 da cavidade endometrial e está localizada na parede fúndica anterior. Segundo a classificação proposta por Lasmar conhecida como STEP - W (Size, Topography, Extension, Penetration - lateral Wall), qual é a melhor conduta para essa paciente:",
    options: ["Inserção de DIU medicado com progesterona", "Miomectomia histeroscópica em tempo único, pois trata-se de miomectomia com baixa complexidade", "Miomectomia histeroscópica precedida de preparo com análogo do GnRH e/ou cirurgia em 2 tempos, trata-se de miomectomia complexa", "Miomectomia por via não histeroscópica", "Histerectomia total abdominal, não sendo possível tratamento conservador"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_042',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Paciente de 16 anos apresenta caracteres sexuais secundários externos normais associados à amenorréia primária. Realizou RNM de pelve que demonstra agenesia do terço superior da vagina e ausência da imagem do útero, ovários sem alterações. Qual a principal hipótese diagnóstica?",
    options: ["Síndrome de Mayer-Rokitansky-Kuster- Hauser", "Síndrome de Turner (45,X)", "Síndrome de Morris", "Síndrome de Swyer", "Disgenesia gonadal completa (46,XY)"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_043',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Paciente com queixa de corrimento vaginal amarelado, de odor fétido e prurido vaginal. Referia ainda que o odor piorava após manter relações sexuais. O exame bacterioscópico do conteúdo vaginal revelou a presença de “clue cells”. Qual o provável agente etiológico desta vaginite?",
    options: ["Candida albicans", "Trichomonas vaginalis", "Gardnerella vaginalis", "HPV", "E. coli"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_044',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Paciente de 43 anos com 3 filhos vivos foi submetida a colposcopia e biópsia de colo uterino por colpocitologia oncótica NIC 3. A biópsia revelou carcinoma epidermóide in situ. O exame ginecológico era normal e os paramétrios livres. Foi submetida a histerectomia total abdominal. O exame anatomopatológico revelou corpo uterino normal e colo com carcinoma epidermóide invasivo com mais de 5mm de profundidade. Pode-se concluir que:",
    options: ["A conduta foi correta e a paciente deve ser considerada curada", "A conduta foi correta e a paciente deve receber radioterapia pélvica adjuvante", "A conduta foi inadequada, deveria ter sido feito cirurgia de Wertheim Meigs, visto que a biópsia da colposcopia já mostrava carcinoma “in situ”", "A conduta foi inadequada, deveria ter sido feito conização de colo uterino para definição diagnóstica e melhor escolha terapêutica", "A conduta foi inadequada, pois carcinoma epidermóide “in situ” tem ótima resposta ao tratamento radioterápico exclusivo"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_045',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Paciente de 58 anos, apresentou sangramento pós menopausa e procurou seu ginecologista. Ao exame clínico foi observado pequeno sangramento escuro exteriorizando-se pelo orifício externo do colo, sem outras alterações. Qual a principal hipótese diagnóstica e qual exame complementar deve ser solicitado?",
    options: ["Hiperplasia endometrial, ultrassonografia pélvica transvaginal", "Câncer de endométrio, histeroscopia diagnóstica com biópsia", "Endometrite crônica, cultura de secreção vaginal", "Câncer de colo uterino, colposcopia com biópsia", "Atrofia endometrial, ultrassonografia transvaginal"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_046',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Uma mulher de 55 anos, assintomática, sem histórico familiar de câncer de mama e sem outros fatores de risco, procura atendimento para realizar seu check-up anual. Sobre o rastreamento mamográfico no Brasil, segundo o protocolo do Ministério da Saúde, assinale a alternativa correta:",
    options: ["O Ministério da Saúde recomenda mamografia anual para todas as mulheres a partir dos 40 anos", "O rastreamento mamográfico deve ser iniciado aos 50 anos, com periodicidade bienal, para mulheres de risco habitual", "Mulheres com histórico familiar de câncer de mama devem realizar mamografia de rastreamento anualmente, independentemente da idade", "O Ministério da Saúde recomenda rastreamento mamográfico para mulheres acima de 70 anos, mesmo aquelas saudáveis", "A realização de mamografia de rastreamento deve ser feita somente em mulheres que apresentam sinais ou sintomas suspeitos de câncer de mama"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_047',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Paciente de 46 anos previamente hígida procura assistência médica devido à aumento do volume abdominal, associado à dor e constipação há 1 mês. Nega febre ou outros sintomas. Ao exame físico apresenta abdômen distendido, endurecido, doloroso à palpação difusa, sinal de piparote positivo. USG transvaginal com complementação abdominal evidenciando grande quantidade de líquido livre na cavidade, tumorações complexas bilateralmente em região de anexos, medindo 7cm à direita e 11cm à esquerda, septos grosseiros com vascularização com baixo índice de resistência, exibindo vegetações parietais no seu interior, útero de tamanho e morfologia dentro da normalidade. Traz exames de rotina ginecológica realizada 6 meses antes, sem alterações. Qual a hipótese diagnóstica e a conduta mais adequada?",
    options: ["Cisto ovariano hemorrágico roto / Ooforoplastia bilateral videolaparoscópica", "Câncer de ovário / videolaparoscopia diagnóstica com biópsia de congelação (ovariana ou de implantes peritoniais). Se biópsia positiva para malignidade, avaliar citorredução máxima R0 (“debulking”). Caso não seja tecnicamente possível, indicado quimioterapia neoadjuvente", "Câncer de ovário / laparotomia exploradora para histerectomia total com salpingooforectomia bilateral. Aguardar resultado de biópsia de parafina para definição de adjuvância", "Endometriose profunda com endometriomas bilaterais / Ooforoplastia bilateral videolaparoscópica com ressecção cirúrgica de focos de endometriose e inserção de DIU medicado com progesterona para bloqueio da menstruação e controle de sintomas", "Cistadenoma mucinoso de ovário roto / Ooforectomia bilateral laparotômica, com lavagem exaustiva da cavidade. Risco de choque tireotóxico devido à mucina ter comportamento biológico semelhante ao hormônio tireoidiano"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_048',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "O câncer do colo do útero é o segundo tipo de câncer mais frequente em mulheres que vivem em regiões em desenvolvimento. Como prevenção a Organização Mundial de Saúde (OMS) recomenda a prática sexual segura, incluindo educação para jovens e promoção do uso e fornecimento de preservativos para pessoas que já iniciaram atividade sexual. Contudo, a prevenção mais eficaz eficiente – indicada pela OMS – é a vacinação contra o HPV. A recomendação do Programa Nacional de Imunizações é:",
    options: ["para meninos e meninas de 9 a 14 anos - 3 doses da vacina, 2ª dose dois meses após a primeira e 3ª dose seis meses após a primeira", "para meninos e meninas de 9 a 14 anos - 2 doses da vacina, 2ª dose dois meses após a primeira", "para meninos e meninas de 9 a 14 anos - dose única da vacina", "para meninos e meninas de 9 a 14 anos - somente tomar a vacina em caso de violência sexual", "pessoas de 15 a 19 anos devem receber 2 doses da vacina, 2ª dose dois meses após a primeira"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_049',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Qual dos exames abaixo não faz parte da rotina de exames laboratoriais solicitados na primeira consulta, realizada no primeiro trimestre do pré- natal?",
    options: ["Colpocitologia oncótica", "Elisa anti-HIV", "HbsAg", "Teste oral de tolerância à glicose com 75 gramas de glicose", "Coombs indireto em pacientes Rh negativas com fator de risco para doença hemolítica perinatal"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_050',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Paciente de 33 anos com dor pélvica cíclica limitante, associada à dispareunia de profundidade, tentando engravidar há 2 anos sem sucesso. Investigação de infertilidade do parceiro sem alterações. Procurou o ginecologista que solicitou RNM de pelve evidenciando sinais de endometriose profunda em ligamentos útero sacros e fundo de saco posterior, aderências fixas entre útero e ovários na face posterior da pelve (“kissing ovaries”), além de imagens sugestivas de hidrossalpinge bilateralmente. Histerossalpingografia com teste de Cottè negativo. Dosagens hormonais dentro da normalidade, sugerindo manutenção da ovulação. A melhor conduta no caso seria:",
    options: ["Estimulação ovariana seguida de punção para captação e congelamento de óvulos, cirurgia para ressecção de focos de endometriose e salpingectomia bilateral, pois assim, além de melhora dos sintomas, aumentaria a chance de sucesso de uma fertilização “in vitro” (FIV)", "Fertilização “in vitro” (FIV) como medida isolada, visto que as tubas já se encontram obstruídas e a possibilidade de gestação espontânea não existe, não havendo benefício com tratamento cirúrgico", "Cirurgia para tratamento da endometriose com ressecção de todos os focos, drenagem tubária bilateral e tentativa de gestação espontânea posteriormente", "Análogo do GnRH seguida de fertilização “in vitro” (FIV) após 3 meses. Dessa forma é possível controle dos sintomas, além de maior taxa de sucesso da FIV", "Preparo endometrial com estrogênio isolado para aumentar a chance de implantação embrionária, visto que os exames hormonais se encontram sem alterações e a investigação do parceiro não evidenciou sinais de infertilidade"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_051',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "A síndrome de transfusão feto-fetal é evento raro em gestações gemelares e pode ser letal para ambos os fetos, tanto para o dito receptor, como para o chamado de doador. Essa condição pode ocorrer:",
    options: ["devido a alteração cromossômica fetal e pode ser diagnosticada por cariótipo", "devido à deficiência materna de ácido fólico pré gestacional", "como consequência de hipertensão gestacional mal controlada", "em qualquer gestação gemelar após 17 semanas de gravidez", "somente em gestações monocoriónicas"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_052',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Sobre a estática fetal, assinale a alternativa verdadeira:",
    options: ["Na apresentação cefálica fletida, o ponto de referência fetal é o bregma, sendo favorável ao parto vaginal", "Na apresentação cefálica defletida de 2º grau ou fronte, a referência fetal é a glabela, sendo indicação absoluta de cesárea", "No assinclitismo posterior a sutura sagital do feto está próxima ao sacro", "Na variedade de posição córmica, a referência fetal é o sacro", "Na apresentação cefálica defletida de 30 grau, o ponto de referência fetal é o lambda, sendo impossível o parto normal"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_053',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Não é considerado fator de risco para trabalho de parto prematuro:",
    options: ["Tabagismo e uso de álcool durante a gravidez", "Infecção de trato urinário", "Hipertensão gestacional", "Multiparidade", "Diabetes Mellitus"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_054',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Em relação à sífilis na gestação, está correto afirmar:",
    options: ["A possibilidade de uma reação alérgica à penicilina é alta, sendo indicado teste de sensibilidade para gestantes antes de iniciar tratamento", "Quando se tem um teste não treponêmico positivo, deve-se aguardar o teste treponêmico específico para iniciar o tratamento", "A transmissão vertical não acontece intraútero, apenas pode ocorrer durante a passagem do feto pelo canal do parto, se houver a presença de lesão ativa", "A benzilpenicilina é a única opção segura e eficaz para o tratamento adequado em gestantes", "Se o teste rápido do parceiro for negativo, ele deve realizar teste treponêmico antes de receber penicilina benzatina"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_055',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Qual das associações abaixo caracteriza melhor o fenômeno da centralização no feto à dopplervelocimetria?",
    options: ["Aumento da relação sístole/diástole nas artérias uterinas e normalidade nas artérias umbilicais", "Aumento da relação sístole/diástole nas uterinas e diminuição da relação sístole/diástole na artéria cerebral média", "Diminuição da relação sístole/diástole nas umbilicais e diminuição da relação sístole/diástole na artéria cerebral média", "Aumento da relação sístole/diástole tanto nas umbilicais como na cerebral média", "Aumento da relação sístole/diástole nas umbilicais e diminuição da relação sístole/diástole na cerebral média"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_056',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "O partograma abaixo evidencia:",
    options: ["Trabalho de parto eutócico", "Parada secundária da dilatação", "Parada secundária da descida", "Apresentação cefálica defletida de 20 grau", "Fase de latência prolongada"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_057',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Paciente de 23 anos, dá entrada no PS de Ginecologia com quadro de dor em baixo ventre de forte intensidade associada a um pico febril de 38,5˚ hoje. Última menstruação há 2 semanas, não utiliza método anticoncepcional no momento, vida sexual ativa. Sinais vitais normais na admissão, ao exame físico apresenta no toque bimanual dor à mobilização de colo uterino e ao especular cervicite mucopurulenta. USG transvaginal assim como exames laboratoriais realizados não mostraram alterações significativas, exceto leucocitúria de 30.000 na urina tipo 1. Qual a principal hipótese diagnóstica e a melhor conduta nesse caso?",
    options: ["Doença inflamatória aguda - internação para antibioticoterapia de amplo espectro e drenagem de abcesso tubo ovariano por videolaparoscopia", "Vaginose bacteriana - tratamento com creme vaginal (metronidazol) por 7 noites, abstinência sexual no período", "Endometrite aguda - antibiótico de amplo espectro (ceftriaxone 250mg IM dose única + doxiciclina 100mg via oral de 12/12 horas por 14 dias). Retorno se piora ou manutenção da febre por mais de 48- 72h para reavaliação", "Infecção do trato urinário inferior - nitrofurantoína 100mg via oral de 6/6h por 7 dias. Colher urocultura antes de iniciar tratamento", "Apendicite aguda - tomografia para confirmação diagnóstica. Caso confirmado indicado apendicectomia videolaparoscópica"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_058',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Sobre a cardiotocografia ante parto abaixo, pode-se afirmar:",
    options: ["Apresenta taquicardia fetal, compatível com sofrimento fetal agudo", "Trata-se de padrão não reativo, repetir após administração de soro glicosado", "Trata-se padrão sinusoidal, alto risco para óbito fetal", "Apresenta desacelerações tardias repetidas, mudar o decúbito materno, possível compressão de cordão umbilical", "Indica boa vitalidade fetal"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_059',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "A ligadura bilateral de artéria hipogástrica é um método seguro e eficaz para controlar hemorragias em pacientes com alto risco de sangramento obstétrico, podendo ser definitiva não só para a preservação uterina, mas também para controle efetivo de sangramento em pacientes já histerectomizadas. Sua realização deve ser feita 2cm abaixo da bifurcação das artérias ilíacas comuns, com o objetivo de preservar 3 ramos posteriores importantes desses vasos. Quais são esses ramos?",
    options: ["Sacral lateral, circunflexa e obturatória", "Sacral média, sacral lateral e pudenda", "Glútea superior, iliolombar e sacral lateral", "Iliolombar, sacral medial e circunflexa", "Obturatória, glútea superior e sacral lateral"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_060',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "As recentes diretrizes da Organização Mundial da Saúde (OMS) e dos principais protocolos de manejo de Diabetes Mellitus (DM) recomendam que a hiperglicemia inicialmente detectada em qualquer momento da gravidez deve ser categorizada e diferenciada em DM diagnosticado na gestação (do inglês Overt Diabetes) ou em Diabetes Mellitus Gestacional. Assinale a alternativa correta:",
    options: ["Diabetes Mellitus Gestacional (DMG): mulher com hiperglicemia detectada pela primeira vez durante a gravidez, com níveis glicêmicos sanguíneos de jejum superiores a 126mg/dl", "Diabetes Mellitus diagnosticado na gestação (Overt Diabetes): mulher sem diagnóstico prévio de DM, com hiperglicemia detectada na gravidez e com níveis glicêmicos sanguíneos que atingem os critérios da OMS para a DM na ausência de gestação", "Considera-se que o teste com melhor sensibilidade e especificidade para o diagnóstico de DMG é a glicemia de jejum, e deve ser realizado no primeiro trimestre da gravidez", "Glicemia de jejum igual ou maior que 110mg/dl faz diagnóstico de DM em qualquer período da gravidez", "Todas as gestantes com glicemia de jejum acima de 92 mg/dL devem realizar o TOTG com 75g de glicose de 24 a 28 semanas. PEDIATRIA"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_061',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "O reflexo de Moro é avaliado rotineiramente no exame neurológico do recém-nascido. Qual achado observado durante a avaliação desse reflexo sugere anormalidade neurológica?",
    options: ["Abertura simétrica dos braços seguida de flexão dos cotovelos", "Resposta ausente unilateralmente, com movimento normal do membro contralateral", "Presença do reflexo até os 4 meses de idade, com resposta simétrica", "Resposta exagerada, com movimentos amplos e prolongados", "Ausência bilateral do reflexo imediatamente após o nascimento"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_062',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Em relação ao uso de ambroxol em pediatria, a indicação clínica mais fundamentada pelo seu mecanismo de ação é:",
    options: ["Alívio imediato de crises asmáticas devido à sua ação broncodilatadora direta", "Redução da viscosidade do muco em doenças respiratórias com hipersecreção, facilitando a expectoração", "Prevenção de infecções respiratórias virais devido à sua ação imunomoduladora nas vias aéreas", "Controle da inflamação em bronquiolites através da inibição de mediadores inflamatórios", "Tratamento de tosse seca crônica por sua ação antitussígena no sistema nervoso central"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_063',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "A característica que justifica a escolha da técnica de lavagem nasal com baixo volume e alta pressão em crianças está relacionada a/à:",
    options: ["Melhoria da permeabilidade nasal pela remoção eficaz de secreções e partículas acumuladas", "Aumento da drenagem dos seios paranasais por pressão negativa induzida na cavidade nasal", "Redução da produção de muco nasal por inibição direta das células caliciformes", "Alívio imediato da obstrução nasal por estimulação de receptores vasoconstritores locais", "Substituição de tratamentos farmacológicos em casos de infecções respiratórias virais graves"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_064',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "No Brasil, a vacina contra o rotavírus faz parte do Programa Nacional de Imunizações (PNI). Considerando as diretrizes do Ministério da Saúde, qual das seguintes afirmações sobre a vacinação contra o rotavírus em crianças está CORRETA?",
    options: ["A vacina contra o rotavírus é administrada em duas doses, aos 2 e 4 meses de idade, com intervalo mínimo de 30 dias entre as doses", "A vacina contra o rotavírus deve ser administrada por via intramuscular, preferencialmente na região deltoide", "A vacina contra o rotavírus é contraindicada para crianças com histórico de invaginação intestinal ou alergia a qualquer componente da vacina", "A primeira dose da vacina contra o rotavírus deve ser administrada a partir dos 6 meses de idade, juntamente com a vacina contra a poliomielite", "Em caso de atraso na administração de uma dose da vacina contra o rotavírus, não é necessário reiniciar o esquema vacinal, devendo- se administrar a dose em atraso o mais breve possível"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_065',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "No contexto do diagnóstico de sarampo em pediatria, a característica que melhor descreve os sinais de Koplik é:",
    options: ["Lesões maculopapulares eritematosas difusas, presentes principalmente no tronco e membros", "Manchas descamativas hipercrômicas presentes nas regiões de flexura e dobras cutâneas", "Vesículas esparsas na mucosa oral, associadas a úlceras dolorosas e edema subjacente", "Pequenas áreas hipopigmentadas na mucosa oral, com bordas irregulares e inflamação subjacente", "Pápulas esbranquiçadas com halo eritematoso localizadas na mucosa oral, próximas aos molares"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_066',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "O vírus sincicial respiratório (VSR) é uma causa frequente de infecções respiratórias em crianças, especialmente nos primeiros anos de vida. Considerando as características clínicas e epidemiológicas da infecção pelo VSR em pediatria, qual das seguintes afirmações está INCORRETA?",
    options: ["A infecção pelo VSR geralmente se manifesta com sintomas leves, como coriza, tosse e febre baixa, assemelhando-se a um resfriado comum", "Em lactentes, a infecção pelo VSR pode evoluir para quadros mais graves, como bronquiolite e pneumonia, com necessidade de hospitalização", "A transmissão do VSR ocorre principalmente por contato direto com secreções respiratórias infectadas, como saliva e muco", "A maioria das crianças é infectada pelo VSR pelo menos uma vez até os 2 anos de idade, sendo a primoinfecção geralmente mais grave", "A infecção pelo VSR confere imunidade permanente, sendo incomum a reinfecção em crianças mais velhas e adultos"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_067',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "A característica clínica dos guinchos respiratórios (\"whoop\") na coqueluche em crianças está relacionada:",
    options: ["A contrações espasmódicas da musculatura diafragmática durante o esforço respiratório prolongado", "A episódios de tosse paroxística seguidos de inspiração ruidosa devido à obstrução parcial das vias aéreas superiores", "Ao broncoespasmo associado a hipersecreção mucosa, resultando em sons estridentes contínuos durante a expiração", "A alterações estruturais das vias aéreas inferiores com colapso dinâmico durante o ciclo respiratório", "A presença de edema laríngeo intenso associado a epiglotite bacteriana concomitante"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_068',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "A escabiose é uma infestação cutânea causada pelo ácaro Sarcoptes scabiei, que pode acometer pessoas de todas as idades, incluindo crianças. Em relação ao tratamento da escabiose em crianças menores de 6 meses, qual das seguintes alternativas está CORRETA, de acordo com as recomendações do Ministério da Saúde do Brasil?",
    options: ["O tratamento de escolha para crianças menores de 6 meses é a permetrina 5% creme, aplicada em todo o corpo, inclusive na cabeça e no couro cabeludo, devendo ser repetida após 7 dias", "A ivermectina oral é uma opção segura e eficaz para o tratamento da escabiose em crianças menores de 6 meses, sendo a dose calculada de acordo com o peso da criança", "O lindano loção a 1% é recomendado para crianças menores de 6 meses, aplicado em todo o corpo, com exceção da face, e removido com banho após 6 horas", "O enxofre precipitado a 6% em vaselina pode ser utilizado em crianças menores de 6 meses, aplicado em todo o corpo, exceto na face, durante 3 noites consecutivas, com banho após cada aplicação", "Em crianças menores de 6 meses, o tratamento da escabiose deve ser iniciado somente após a confirmação do diagnóstico por exame microscópico de raspado de pele"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_069',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "A leucemia linfoide aguda (LLA) é a neoplasia maligna mais comum na infância. Qual dos seguintes achados clínicos NÃO é frequentemente encontrado em crianças com LLA na fase inicial da doença?",
    options: ["Palidez cutâneo-mucosa", "Hepatoesplenomegalia", "Petéquias e equimoses", "Linfonodomegalia generalizada", "Dor abdominal intensa e persistente"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_070',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "O Ministério da Saúde do Brasil preconiza o aleitamento materno exclusivo até os seis meses de idade. Considerando as recomendações do Ministério da Saúde sobre amamentação, qual das seguintes afirmações está INCORRETA?",
    options: ["O aleitamento materno deve ser iniciado na primeira hora após o nascimento, mesmo em casos de parto cesáreo ou prematuridade", "A amamentação deve ser em livre demanda, ou seja, sem restrições de horários e frequência, de acordo com a necessidade do bebê", "É recomendado o uso de chupetas e mamadeiras nos primeiros meses de vida, para acalmar o bebê e complementar a amamentação", "A mãe deve ser orientada sobre a pega e o posicionamento corretos durante a amamentação, para garantir a efetividade da sucção e prevenir lesões mamilares", "O leite materno é o alimento ideal para o bebê, fornecendo todos os nutrientes necessários para seu crescimento e desenvolvimento saudável nos primeiros seis meses de vida"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_071',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Entre os marcos do desenvolvimento infantil até os 6 meses de idade, qual característica é esperada e indicativa de desenvolvimento neuropsicomotor adequado?",
    options: ["Resposta ao som com localização auditiva precisa em direção à fonte sonora", "Capacidade de sustentar o peso corporal nas pernas ao ser colocado em posição de pé", "Realização de movimentos amplos e coordenados ao alcançar objetos próximos", "Controle cefálico completo ao ser colocado em posição sentada, com pouca oscilação da cabeça", "Emissão de vocalizações simples e resposta a estímulos visuais com seguimento ocular"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_072',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Sopros cardíacos são frequentemente auscultados em crianças, sendo a maioria deles inocentes (funcionais). Qual das seguintes características NÃO é típica de um sopro inocente em crianças?",
    options: ["Sopro sistólico de baixa intensidade (grau I- II/VI)", "Sopro melhor audível na borda esternal esquerda inferior ou na base do coração", "Sopro que varia com a posição da criança (mais intenso em decúbito dorsal)", "Sopro acompanhado de outros sinais e sintomas, como cianose, dispneia ou retardo no crescimento", "Sopro musical ou vibratório, com timbre suave"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_073',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "A síndrome do lactente chiador é uma condição comum em crianças pequenas, caracterizada por episódios recorrentes de sibilância. A avaliação radiológica pode auxiliar no diagnóstico diferencial e no manejo dessa síndrome. Qual das seguintes afirmações sobre o papel da radiografia de tórax na síndrome do lactente chiador está CORRETA?",
    options: ["A radiografia de tórax é essencial para o diagnóstico da síndrome do lactente chiador, sendo necessária em todos os casos para confirmar o diagnóstico", "A radiografia de tórax é útil para diferenciar a asma de outras causas de sibilância, como a aspiração de corpo estranho e a malformação congênita das vias aéreas", "A presença de hiperinsuflação pulmonar e infiltrado intersticial difuso na radiografia de tórax é característica da bronquiolite viral aguda, principal causa da síndrome do lactente chiador", "A radiografia de tórax normal exclui o diagnóstico de asma, sendo indicativa de outras causas de sibilância, como refluxo gastroesofágico ou infecções respiratórias", "A radiografia de tórax deve ser realizada rotineiramente durante as crises de sibilância, para monitorar a resposta ao tratamento e identificar possíveis complicações"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_074',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Os achados semiológicos característicos na síndrome do bebê azul em neonatos estão associados principalmente à/ao:",
    options: ["Cianose central persistente agravada pelo choro, sem melhora com administração de oxigênio suplementar", "Palidez cutânea generalizada associada à taquicardia e hiperpnéia em repouso", "Rubor facial evidente durante o choro, com melhora após elevação da cabeça", "Cianose periférica transitória em extremidades, com pulsos femorais amplos e simétricos", "Icterícia generalizada com discreta coloração azulada em leitos ungueais e mucosas"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_075',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Entre os achados laboratoriais no hemograma sugestivos de anemia ferropriva em crianças, qual é característico dessa condição?",
    options: ["Microcitose, hipocromia e aumento da contagem de reticulócitos", "Normocitose, normocromia e leucocitose reativa", "Microcitose, hipocromia e aumento do RDW (red cell distribution width)", "Macrocitose, hipocromia e aumento do VCM (volume corpuscular médio)", "Normocitose, hipocromia e plaquetopenia leve"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_076',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Entre as indicações para o uso de ibuprofeno em pediatria, aquela respaldada por sua ação farmacológica é:",
    options: ["Redução da febre e alívio da dor leve a moderada em infecções virais e bacterianas", "Prevenção de crises asmáticas em crianças com hiper-responsividade brônquica", "Controle de convulsões febris em crianças suscetíveis, como terapia de manutenção", "Tratamento de infecções bacterianas do trato respiratório superior com dor associada", "Alívio de náuseas e vômitos em doenças gastrointestinais autolimitadas"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_077',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "O tratamento da tuberculose pulmonar em crianças apresenta particularidades em relação ao tratamento em adultos. Considerando as diretrizes do Ministério da Saúde do Brasil, qual das seguintes afirmações sobre o tratamento da tuberculose pulmonar em crianças está INCORRETA?",
    options: ["O esquema básico de tratamento para crianças com tuberculose pulmonar sensível aos fármacos é composto por quatro medicamentos: rifampicina, isoniazida, pirazinamida e etambutol", "A rifampicina, um dos medicamentos do esquema básico, pode causar coloração alaranjada da urina, suor e lágrimas, o que deve ser informado aos pais ou responsáveis pela criança", "A isoniazida, outro medicamento do esquema básico, pode causar neuropatia periférica como efeito adverso, sendo necessária a suplementação com piridoxina (vitamina B6) para prevenir essa complicação", "A duração do tratamento da tuberculose pulmonar em crianças é geralmente mais curta do que em adultos, variando de 4 a 6 meses, dependendo da forma clínica da doença", "Em caso de tuberculose pulmonar resistente aos fármacos, o tratamento é mais complexo e prolongado, podendo envolver a combinação de diferentes medicamentos e a hospitalização da criança"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_078',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "A síndrome mão-pé-boca é uma doença viral comum na infância, caracterizada por lesões cutâneas e mucosas. Qual das seguintes alternativas NÃO descreve um achado típico da síndrome mão-pé-boca?",
    options: ["Lesões vesiculares (pequenas bolhas) nas palmas das mãos e plantas dos pés", "Lesões ulcerativas (aftas) na mucosa oral, especialmente na língua, gengiva e palato", "Exantema maculopapular (manchas vermelhas e elevadas) no tronco e membros", "Febre alta persistente por mais de 7 dias", "Mal-estar, inapetência e irritabilidade"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_079',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Os parâmetros avaliados no índice de Apgar ao nascimento incluem:",
    options: ["Temperatura corporal, frequência cardíaca, tônus muscular, reflexo de sucção e cor da pele", "Frequência cardíaca, esforço respiratório, reflexo pupilar, tônus muscular e coloração das extremidades", "Frequência cardíaca, respiração, cor da pele, tônus muscular e reflexo à estimulação", "Frequência cardíaca, esforço respiratório, reflexo de Moro, movimentação ativa e temperatura corporal", "Reflexo de sucção, frequência cardíaca, cor dos lábios, esforço respiratório e movimentação das extremidades"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_080',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "No Programa Nacional de Imunizações (PNI), a substituição da vacina oral poliomielite (VOP) pela vacina inativada poliomielite (VIP) no esquema básico infantil foi baseada principalmente na justificativa de:",
    options: ["Eliminação do risco de poliomielite vacinal associado ao uso de vacina oral", "Maior facilidade de administração da vacina inativada em crianças menores de 2 anos", "Redução da imunogenicidade da vacina oral em regiões endêmicas para poliovírus", "Prolongamento da resposta imunológica com menor número de doses no esquema vacinal", "Necessidade de reforço em populações não vacinadas, reduzindo a circulação de vírus selvagem"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_081',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Na aplicação prática da Teoria da Hierarquia das Necessidades de Abraham Maslow em saúde pública, qual das seguintes afirmações descreve corretamente a relação entre as necessidades básicas e a promoção da saúde?",
    options: ["A necessidade de autoeficácia, focando na capacidade do indivíduo em atingir objetivos e superar desafios, é primordial para a promoção da saúde e deve ser priorizada sobre as necessidades fisiológicas", "A necessidade de pertencimento e aceitação dentro da comunidade é a base para o desenvolvimento da saúde pública, superando a importância das necessidades fisiológicas e de segurança", "A busca pela autorrealização, através da expressão criativa e do desenvolvimento pessoal, é essencial para a promoção da saúde e deve ser o foco principal das intervenções em saúde pública", "A autorregulação emocional e o controle do estresse são os pilares fundamentais para a promoção da saúde, sendo mais importantes que as necessidades fisiológicas e sociais", "As necessidades fisiológicas, como alimentação e abrigo, são fundamentais e devem ser atendidas primeiro para garantir a sobrevivência e a saúde básica, permitindo que as pessoas avancem para níveis superiores de bem-estar"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_082',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Determinantes sociais da saúde, conforme proposto por Thomas McKeown, são mais bem caracterizados por:",
    options: ["Influência da assistência médica na redução da morbidade", "Relação causal entre fatores socioeconômicos (nutrição, habitação, trabalho) e saúde", "Predominância de fatores genéticos na determinação da saúde", "Interrelação entre meio ambiente e comportamentos de risco", "Determinação da saúde pela estrutura social e relações de poder"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_083',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Hans Rosling, em suas análises sobre saúde global e desenvolvimento sustentável, enfatiza a importância de dados estatísticos na compreensão das desigualdades sociais. Qual das seguintes afirmações reflete corretamente um princípio central da teoria de Rosling sobre saúde global?",
    options: ["O aumento da renda per capita é o único determinante da melhoria na saúde pública", "As intervenções de saúde devem ser focadas exclusivamente em doenças infecciosas", "A educação e o acesso à informação são fundamentais para a redução das desigualdades em saúde", "O crescimento econômico não influencia a longevidade da população", "A melhoria na saúde global é irrelevante para o desenvolvimento econômico dos países"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_084',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "No modelo teórico proposto por Hugh Leavell e Edwin Clark, o foco da Medicina Preventiva é dividido em níveis de prevenção. O nível de prevenção que inclui a detecção precoce de doenças e a aplicação de medidas para limitar a progressão do agravo é denominado:",
    options: ["Prevenção secundária", "Prevenção primária", "Prevenção terciária", "Prevenção quaternária", "Promoção da saúde"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_085',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Segundo a teoria do Modelo de Crenças em Saúde, proposta por Rosenstock, Hochbaum e Becker, o principal fator que influencia a adoção de hábitos saudáveis e a prevenção de doenças é:",
    options: ["A percepção individual da gravidade da doença", "O incentivo e apoio dos profissionais de saúde", "O custo e a acessibilidade dos serviços de saúde", "A percepção individual da suscetibilidade à doença", "O nível socioeconômico e de escolaridade do indivíduo"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_086',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Sir Geoffrey Rose, renomado epidemiologista e estatístico britânico, desenvolveu a teoria da \"estratégia de alto risco\" e a \"estratégia populacional\" para prevenção de doenças. Qual das alternativas abaixo descreve o princípio fundamental da estratégia populacional proposta por Geoffrey Rose?",
    options: ["Priorizar intervenções em indivíduos com maior risco de desenvolver a doença, através de identificação e tratamento precoce", "Direcionar ações preventivas para grupos populacionais específicos, com base em características socioeconômicas e culturais", "Focar na prevenção primária, com medidas de promoção da saúde e proteção contra fatores de risco, a fim de evitar o surgimento da doença", "Adotar medidas que visem reduzir a exposição da população como um todo aos fatores de risco, deslocando a curva de distribuição do fator de risco para a esquerda", "Concentrar esforços em ações de reabilitação e reinserção social de indivíduos que já desenvolveram a doença, minimizando suas sequelas"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_087',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Paciente feminina, 52 anos, tabagista de 30 anos- maço, sem comorbidades, apresenta score de Fagerström 8 (dependência elevada), três tentativas prévias de cessação com recaída em até 60 dias, último cigarro há 12 horas. Refere forte fissura, irritabilidade e ansiedade. Estágio motivacional de ação, CO exalado de 18ppm, sem contraindicações medicamentosas. Na estratégia terapêutica baseada em evidências para cessação do tabagismo, considerando características individuais e preditores de resposta, selecione a afirmativa correta:",
    options: ["A combinação de adesivo de nicotina 21mg/dia com goma 4mg sob demanda está indicada nas primeiras 8 semanas, seguida por monoterapia com adesivo em desmame gradual por mais 4 semanas", "O uso de vareniclina 1mg 12/12h deve ser iniciado 7 dias antes da data de cessação, com titulação gradual da dose e manutenção por 12 semanas independente da resposta inicial", "A associação de bupropiona 150mg 12/12h com adesivo de nicotina 14mg/dia tem eficácia superior à vareniclina em monoterapia em pacientes com alta dependência e múltiplas recaídas", "O tratamento inicial com adesivo de nicotina 21mg/dia associado à bupropiona 150mg/dia tem menor eficácia que a vareniclina em monoterapia para prevenção de recaídas precoces", "A terapia combinada com vareniclina 1mg 12/12h e bupropiona 150mg 12/12h aumenta as taxas de abstinência em 24 semanas quando comparada à vareniclina isolada em fumantes com Fagerström >7"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_088',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Na saúde coletiva, o estudo epidemiológico que avalia a relação entre exposição e desfecho em um único momento, fornecendo uma fotografia da frequência e distribuição das condições de saúde em uma população, é denominado:",
    options: ["Estudo de coorte", "Estudo de caso-controle", "Ensaio clínico randomizado", "Estudo transversal", "Estudo ecológico"],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'iamspe_2024_089',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Paciente masculino, 43 anos, apresenta mancha hipocrômica em face posterior do antebraço direito com 8cm de diâmetro, bordas mal definidas e alteração de sensibilidade térmica à avaliação com tubos de água quente/fria, sem alteração de sensibilidade dolorosa ou tátil. Teste de histamina evidencia resposta ausente na lesão e presente na pele normal. Baciloscopia de raspado dérmico negativa nos 6 sítios. Na avaliação diagnóstica complementar e classificação operacional da hanseníase, selecione a afirmativa correta:",
    options: ["A avaliação da sensibilidade térmica por tubos com água a 45°C/20°C apresenta especificidade de 95% para diagnóstico de lesões hansênicas quando comparada ao teste com monofilamentos", "O teste de pilocarpina a 1% com resposta sudoral ausente na lesão e presente na pele adjacente indica comprometimento autonômico seletivo, característico da forma indeterminada", "A presença do reflexo pilomotor de Souza- Campos diminuído na lesão após estímulo farádico tem sensibilidade de 90% para classificação como paucibacilar quando associada à baciloscopia negativa", "O teste da histamina apresentando resposta tripla ausente na lesão indica comprometimento neural inicial, sendo desnecessária biópsia para confirmação diagnóstica em área endêmica", "A resposta positiva ao teste do suor com ninidrina em papel filtro na pele adjacente e negativa na lesão tem acurácia superior ao teste da histamina para avaliação autonômica"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_090',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Paciente masculino, 45 anos, procura a Unidade Básica de Saúde queixando-se de desânimo, fadiga e dificuldade de concentração há cerca de 2 meses. Ele relata perda de interesse em atividades que antes lhe davam prazer, além de insônia e perda de apetite. Para auxiliar no diagnóstico e avaliação da gravidade dos sintomas, o médico de família e comunidade decide aplicar a escala PHQ-9. O paciente obtém escore 12 na escala. Qual a interpretação deste resultado e a conduta mais adequada?",
    options: ["Depressão leve; iniciar tratamento com antidepressivo em dose baixa e acompanhamento regular", "Depressão moderada; iniciar tratamento com antidepressivo em dose moderada e encaminhamento para psicoterapia", "Depressão grave; iniciar tratamento com antidepressivo em dose alta e avaliação psiquiátrica urgente", "Ansiedade generalizada; prescrever benzodiazepínico e encaminhar para avaliação psicológica", "Transtorno bipolar; encaminhar para avaliação psiquiátrica para iniciar estabilizador de humor"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_091',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "O princípio da longitudinalidade, essencial para a efetividade da Estratégia Saúde da Família, compreende:",
    options: ["A coordenação do cuidado, com articulação entre os diversos níveis de atenção à saúde", "A abordagem centrada na família, considerando seu contexto socioeconômico e cultural", "A responsabilidade da equipe pelo acompanhamento integral do indivíduo ao longo do tempo", "A atenção às demandas agudas e urgentes, com acesso facilitado aos serviços de saúde", "A ênfase em ações de promoção da saúde e prevenção de agravos na comunidade"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_092',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "O método PRACTICE é uma abordagem sistemática que visa facilitar a avaliação das famílias em contextos de saúde. Qual das seguintes opções descreve corretamente os componentes do acrônimo PRACTICE e suas respectivas funções na avaliação familiar?",
    options: ["Problema apresentado, Relações e estrutura, Afeto, Comunicação, Tempo de vida, Intervenção, Coping com estresse, Ecologia", "Problema apresentado, Papéis e estrutura, Afeto, Comunicação, Tempo de vida, Intervenção, Conflitos e estresse, Ecologia", "Problema apresentado, Papéis e estrutura, Afeto, Comunicação, Tempo de vida, Doença, Coping com estresse, Ecologia", "Problema apresentado, Relações e estrutura, Afeto, Conflitos, Tempo de vida, Intervenção, Coping com estresse, Ecologia", "Problema apresentado, Papéis e estrutura, Afeto, Comunicação, Tempo de vida, Doença crônica, Ecologia"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_093',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Na atenção primária em saúde, o método diagnóstico de escolha para confirmar a tuberculose pulmonar em pacientes com suspeita clínica é:",
    options: ["Baciloscopia do escarro, evidenciando a presença de bacilos ácido-alcoólico resistentes (BAAR)", "Radiografia de tórax, mostrando alterações cavitárias típicas em lobos superiores", "Teste tuberculínico (PPD), indicando infecção latente ou ativa pelo Mycobacterium tuberculosis", "Tomografia computadorizada de tórax, identificando lesões pulmonares de alta resolução", "Cultura do escarro para Mycobacterium tuberculosis, com crescimento em meio específico"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_094',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Na prática da medicina de família, qual das seguintes afirmações descreve corretamente o conceito de \"notificação compulsória\" em vigilância epidemiológica?",
    options: ["Notificação compulsória é o processo de comunicação voluntária de doenças infecciosas entre médicos, garantindo a privacidade dos pacientes e sem necessidade de intervenção governamental", "A notificação compulsória é um sistema de vigilância que utiliza exclusivamente técnicas laboratoriais para identificar e reportar surtos de doenças infecciosas, sem a necessidade de registros clínicos", "Notificação compulsória é um método de vigilância passiva que depende da observação comunitária e relatos espontâneos de casos de doenças por indivíduos não profissionais", "Notificação compulsória é um sistema de coleta de dados anônimos sobre doenças crônicas, sem incluir doenças transmissíveis, para análise estatística em estudos epidemiológicos", "Notificação compulsória refere-se à exigência legal de comunicação de certas doenças e agravos à saúde às autoridades de saúde pública, permitindo a implementação de medidas de controle e prevenção"],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'iamspe_2024_095',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "O Projeto Terapêutico Singular (PTS) na Medicina da Família é composto por:",
    options: ["Diagnóstico clínico, plano terapêutico e acompanhamento", "Avaliação biopsicossocial, plano de cuidado individualizado e rede de apoio", "Anamnese, exame físico e prescrição medicamentosa", "Diagnóstico diferencial, tratamento farmacológico e prevenção primária", "Histórico clínico, plano de tratamento e avaliação de satisfação"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_096',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Na Saúde Coletiva, diferentes teóricos contribuíram com abordagens teóricas específicas que influenciaram a compreensão do processo saúde-doença. Preencha corretamente as lacunas com os nomes dos autores associados às seguintes descrições: ________ 1: Este autor é conhecido por abordar o habitus e os capitais (cultural, social, econômico e simbólico), evidenciando como as estruturas sociais influenciam o acesso à saúde e os determinantes sociais do adoecimento. ________ 2: Este teórico propõe a análise das práticas de saúde como práticas sociais, destacando a interdisciplinaridade e a interação entre saberes biomédicos e sociais. ________ 3: Este autor destaca a importância da abordagem crítica na Saúde Coletiva, enfatizando o papel das desigualdades estruturais e da determinação social da saúde no Brasil. As lacunas são corretamente preenchidas, respectivamente, por:",
    options: ["Pierre Bourdieu, Schraiber e Paim", "Almeida Filho, Pierre Bourdieu e Nunes", "Pierre Bourdieu, Almeida Filho e Paim", "Schraiber, Paim e Nunes", "Nunes, Schraiber e Pierre Bourdieu"],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'iamspe_2024_097',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Uma das estratégias preventivas mais eficazes para reduzir a incidência de gravidez na adolescência, recomendada pela Organização Mundial da Saúde, é:",
    options: ["Oferecer acesso irrestrito a métodos contraceptivos de longa duração para todas as adolescentes", "Ampliar a cobertura do pré-natal e puerpério, com acompanhamento multidisciplinar", "Implementar programas de educação sexual abrangentes nas escolas, com envolvimento familiar", "Promover campanhas de abstinência sexual como principal estratégia de prevenção", "Incentivar a interrupção da gravidez por meio de serviços de aborto legal e seguro"],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'iamspe_2024_098',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Em estudo ecológico realizado em município de grande porte, analisou-se a distribuição espacial da mortalidade infantil e seus determinantes sociais utilizando dados do último censo demográfico e sistemas de informação em saúde. Na análise multinível por setores censitários, controlada por variáveis individuais (idade materna, escolaridade e paridade), observou-se associação independente entre mortalidade infantil pós-neonatal e índice de privação social composto (IPS). Na interpretação da análise hierarquizada dos determinantes sociais e suas implicações para políticas públicas, selecione a afirmativa correta:",
    options: ["O efeito do contexto socioeconômico sobre a mortalidade infantil pós-neonatal, após ajuste para variáveis individuais, indica necessidade de intervenções focalizadas exclusivamente nas famílias em situação de vulnerabilidade social", "A associação entre IPS e mortalidade infantil demonstra interação cross-level quando a magnitude do efeito das variáveis individuais varia conforme o estrato socioeconômico do setor censitário", "O coeficiente de correlação intraclasse de 25% na análise multinível indica que a variabilidade da mortalidade infantil é explicada principalmente por características individuais maternas", "A análise espacial por setores censitários tem menor poder explicativo que dados agregados por distritos administrativos para identificação de disparidades na mortalidade infantil", "O efeito contextual do IPS superior a 2,0 na razão de chances ajustada sugere causalidade reversa entre privação social e desfechos adversos na saúde infantil"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_099',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Um estudo epidemiológico buscou analisar a prevalência de transtornos mentais comuns, como depressão e ansiedade, em diferentes grupos populacionais. Os resultados evidenciaram maior prevalência desses transtornos em indivíduos com baixa renda, menor escolaridade e em situação de desemprego. Considerando os determinantes sociais da saúde mental, qual a principal conclusão que pode ser inferida a partir desses resultados?",
    options: ["Fatores genéticos e hereditários são os principais responsáveis pela maior prevalência de transtornos mentais em populações vulneráveis", "As condições socioeconômicas desfavoráveis atuam como fator de risco para o desenvolvimento de transtornos mentais, evidenciando a necessidade de ações intersetoriais para promoção da saúde mental", "A maior prevalência de transtornos mentais em grupos vulneráveis se deve à falta de acesso a serviços de saúde mental especializados", "Os transtornos mentais são mais prevalentes em indivíduos com baixa escolaridade devido à dificuldade de compreensão das informações sobre saúde mental", "O desemprego aumenta o risco de transtornos mentais por causar isolamento social e perda do convívio familiar"],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'iamspe_2024_100',
    banca: 'IAMSPE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Na saúde pública, a análise de bases de dados para o diagnóstico de saúde da comunidade utiliza indicadores epidemiológicos para identificar padrões e necessidades. Um exemplo de indicador derivado de bases de dados que permite mensurar a carga de doenças e avaliar o impacto de intervenções é:",
    options: ["Coeficiente de incidência, que avalia a frequência de novos casos em um intervalo de tempo", "Taxa de letalidade, que mede a gravidade de uma doença específica em relação aos óbitos", "Prevalência, que estima a proporção de casos existentes em uma população definida", "Taxa de mortalidade geral, que calcula os óbitos por todas as causas em uma população", "Anos de Vida Perdidos por Incapacidade (DALY), que combina mortalidade e morbidade em uma única métrica"],
    correctIndex: 4,
    explanation: '',
  },

  // -- CERMAM AM 2009 --
  {
    id: 'cermam_am_2009_001',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: "Um homem de 63 anos portador de coronariopatia, dislipidemia e hipertensão arterial inicia uso de enalapril 20mg/dia por recomendação do seu cardiologista. Sua creatinina basal é 1,4mg/dl e rapidamente aumentou para 3,5mg/dl. Esse dado sugere a necessidade de investigação para:",
    options: ["Hiperaldosteronismo primário.", "Glomerulonefrite rapidamente progressiva.", "Estenose bilateral de artéria renal.", "Nefrite intersticial.", "Nefropatia diabética."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_002',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: "A Embolia Pulmonar tem uma frequência que varia de 20 a 25 por 100.000 pacientes hospitalizados nos E.U.A. São causas de tromboembolia pulmonar, exceto:",
    options: ["Cirrose hepática.", "Policitemia.", "Uso de anovulatório.", "Câncer disseminado.", "Fibrilação atrial."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_003',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: "Das substâncias abaixo listadas secretadas pelo rim qual tem efetiva participação em mecanismos hipertensivos?",
    options: ["Cininogênio.", "Fator de ativação plaquetária.", "Eritropoetina.", "Renina.", "Prostaglandinas."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_004',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: "Com relação às artrites reativas, assinale a afirmativa CORRETA:",
    options: ["O estreptococo é agente causal mais comum.", "O agente causal é cultivado facilmente a partir do líquido sinovial da articulação afetada.", "Os dois principais tipos de artrite reativa são pós-uretrite e pós-disentérica.", "Podem ocorrer manifestações associadas tais como conjuntivite, enterite, sacroileíte e GN.", "Antibioticoterapia é a principal medida terapêutica."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_005',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Você é médico residente e está atendendo no Ambulatório de Clínica Médica, para o qual foi encaminhado um paciente com 78 anos, que necessitava submeter-se a uma fundoscopia e por quatro vezes já havia tentado marcar uma consulta no Ambulatório de Oftalmologia do SUS, sem sucesso, devido à existência de um sistema irregular de privilégios no agendamento. Você, que tomou conhecimento acerca deste fato:",
    options: ["Diz ao paciente que não conseguirá consulta oftalmológica e o orienta a procurar outro serviço.", "Denuncia o esquema irregular ao Conselho Regional de Medicina e à Secretaria da Saúde.", "Procura o responsável pelos agendamentos e solicita que o paciente seja atendido de imediato.", "Orienta-o a procurar outro serviço, sem explicar a razão.", "Pede ao paciente para ser tolerante e voltar outro dia."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_006',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: "Entre as alterações laboratoriais abaixo, assinale aquela que NÃO ocorre em portadores de hipotireoidismo primário:",
    options: ["TSH elevado.", "TSH baixo.", "Anticorpo anti-tireoperoxidase positivo.", "T4 livre baixo.", "Anemia."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_007',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: "O adenoma hepático tem sua principal importância porque pode ser confundido com o carcinoma hepatocelular. Assinale dentre as alternativas abaixo a situação que não tem relação com o adenoma hepático:",
    options: ["Uso de contraceptivos orais.", "Em homens, uso de esteroides anabolizantes.", "Tendência a romper, particularmente durante a gestação.", "Associa-se a tumores feminilizantes do ovário.", "Alimentos contaminados por aflatoxinas."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_008',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: "O helicobacter pylori é um bastonete gram-negativo que se adaptou à mucosa gástrica. Reconhecidamente a infecção crônica por ele está associada às seguintes patologias, exceto:",
    options: ["Gastrite crônica.", "Gastropatia hipertrófica.", "Úlcera péptica gástrica.", "Carcinoma gástrico.", "Linfoma MALT gástrico."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_009',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: "Das condições citadas abaixo qual a considerada com menor potencial para causar câncer gástrico?",
    options: ["Refluxo gastroesofágico.", "Gastrectomia parcial - coto remanescente.", "Gastrite crônica atrófica com metaplasia intestinal.", "Ulcera péptica gástrica.", "Adenoma viloso."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_010',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    text: "Assinale a alternativa INCORRETA em relação à cetoacidose diabética (CAD):",
    options: ["É uma causa de acidose metabólica com ânion gap aumentado.", "É necessário haver tanto deficiência de insulina quanto presença de glucagon para que ocorra CAD.", "Pode haver elevação de ureia e creatinina por depleção do volume intravascular.", "O aceto-acetato não é detectado na urina pelo teste do nitroprussiato.", "A reposição de volume deve ser vigorosa, principalmente no início do tratamento."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_011',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: "A infecção ascendente é a via de contaminação mais comum nos casos de pielonefrite aguda. Nesses casos o agente etiológico em mais de 85% dos casos é:",
    options: ["Proteus.", "Escherichia coli.", "Pseudomonas.", "Estafilococos aureus.", "Cândida albicans."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_012',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    text: "Com relação à hemorragia subaracnoidea analise as afirmativas abaixo e identifique qual não é verdadeira:",
    options: ["O declínio da hipertensão arterial sistêmica na população se acompanhou de marcada queda na incidência da hemorragia subaracnoidea.", "Os fatores de risco incluem: tabagismo, abuso de álcool, drogas ilícitas, entre outros.", "A principal causa dessa hemorragia é: ruptura de aneurismas saculares (congênitos).", "O sintoma clássico é uma cefaleia intensa, de aparecimento súbito em geral descrita como 'a pior dor de cabeça da minha vida'.", "A angiografia cerebral continua a ser o estudo definitivo para fechar o diagnóstico de hemorragia subaracnoidea."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_013',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: "A rápida expansão do conhecimento no que diz respeito a variabilidade nas ações dos fármacos torna o processo de prescrever medicamento cada vez mais complexo. Contudo, alguns princípios devem nortear a prescrição. Todos os abaixo devem ser considerados ao se fazer uma receita, exceto:",
    options: ["Os benefícios da terapia farmacológica devem sobrepujar os riscos.", "Deve-se usar a menor dose possível/necessária para se obter o efeito desejado.", "Deve-se reduzir ao mínimo o número de medicamentos e de doses por dia.", "Deve-se estar atento para os efeitos dos fármacos de meia-vida longa que contudo, levam um tempo fugaz para desaparecer.", "Deve-se ter em conta que a genética exerce papel determinante na variação de resposta aos fármacos e pode tornar-se parte da prática clínica."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_014',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: "Em idosos, a lesão valvar mais frequente e a sua etiologia principal são, respectivamente:",
    options: ["insuficiência mitral pós-inflamatória.", "estenose aórtica por degeneração.", "estenose aórtica pós-inflamatória.", "insuficiência mitral por degeneração.", "insuficiência aórtica por degeneração."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_015',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    text: "Um Patologista estava fazendo um estudo de revisão de 145 casos de linfomas não-Hodgkin nodais e extra-nodais. Utilizou a técnica de imunofenotipagem. Tinha cinco frascos de anticorpos monoclonais que marcavam células específicas: anti-CD45 (todos os linfócitos); anti-CD20 (expressos em células B); anti-CD2 (todas as células T tímicas e periféricas e células natural killer); anti-CD33 (todos os progenitores mieloides e monócitos); anti-CD4 (células T auxiliares periféricas). Na bateria de exames, qual letra estaria mais correta para estar de acordo com a incidência mundial de linfomas?",
    options: ["Positividade para CD45 e todos os outros em igual quantidade.", "Positividade para CD45 e para CD20 maior que nos outros.", "Positividade para CD45 e para CD2 maior que nos outros.", "Positividade para CD45 e para CD33 maior que nos outros.", "Positividade para CD45 e para CD4 maior que nos outros."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_016',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    text: "Das alternativas abaixo, qual a que melhor define o perfil da dor da cefaleia tensional?",
    options: ["Desconforto constrictivo crônico, 'em faixa', que muitas vezes afeta toda a cabeça.", "Hipersensibilidade do couro cabeludo com dor latejante acompanhada de vômitos.", "Episódio recorrente de cefaleia acompanhada de náuseas e vômitos.", "Dor intermitente, surda, de intensidade moderada que se agrava com esforço físico.", "Cefaleia intensa e aguda, com rigidez de nuca e sem febre."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_017',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: "Em relação aos pacientes com infecção pelo HIV, assinale a alternativa INCORRETA:",
    options: ["A principal neoplasia oportunista é o linfoma cerebral primário.", "A polineuropatia mais comumente encontrada neles é a polineuropatia sensorial distal associada ao HIV.", "Pneumonia decorrente de pseudomonas aeruginosa ou Staphylococcus aureus ocorrem habitualmente com CD4<100 células/ml.", "O antígeno criptocócico sérico (AGCR) é um teste extremamente sensível para a presença de criptococcemia e meningite criptocócica.", "A tireoide é a glândula endócrina mais acometida e fica alterada durante todo o curso da doença pelo HIV."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_018',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    text: "O diagnóstico de anemia ferropriva é indicado pelos seguintes parâmetros séricos: I- ferro baixo. II- ferritina baixa. III- ferritina normal. IV- saturação de transferrina baixa. V- saturação de transferrina alta. Estão corretos os parâmetros:",
    options: ["I e III apenas.", "I e IV apenas.", "II e V apenas.", "I, II e IV apenas.", "I, II e III apenas."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_019',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: "Você está de plantão no pronto-socorro e recebe um homem, 49 anos, com história de febre alta (até 40°C) contínua, há quatro dias, acompanhada de tosse produtiva e grande queda de estado geral. Há um dia tornou-se dispneico e há cerca de 12 horas, encontra-se sonolento e confuso. Ao exame físico: T=39,7°, FR=32/min, com estridores crepitantes em metade inferior do hemitórax direito e terço inferior do hemitórax esquerdo. Nota-se um ferimento em região dorsal do pé esquerdo, drenando material purulento em grande quantidade e bolhas disseminadas em membros inferiores. Qual seria sua hipótese diagnóstica e principais medidas terapêuticas iniciais?",
    options: ["Endocardite por Staphylococcus viridans - antibioticoterapia sistêmica com penicilina cristalina e gentamicina; drogas vasoativas e heparinização.", "Tétano - soro antitetânico (SAT); benzodiazepínicos em dose elevadas; desbridamento do ferimento e antibioticoterapia sistêmica com clindamicina.", "Septicemia por Staphylococcus viridans, antibioticoterapia sistêmica com penicilina cristalina; imunoglobulina hiperimune contra tétano (TIG) e desbridamento extenso do ferimento.", "Endocardite por Staphylococcus coagulase-negativo - antibioticoterapia sistêmica com cefalosporina de primeira geração e drogas vasoativas.", "Septicemia por Staphylococcus aureus - antibioticoterapia sistêmica com oxacilina, cuidados de suporte, desbridamento do ferimento; profilaxia antitetânica de acordo com o passado vacinal do paciente."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_020',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: "Sobre o diagnóstico da asma, assinale a alternativa INCORRETA:",
    options: ["A espirometria confirma a obstrução do fluxo de ar, com VEF1 e peak flow diminuídos.", "A radiografia de tórax é geralmente normal.", "O exame físico costuma ser normal entre as crises de asma.", "Os níveis de IgE costumam estar elevados.", "Assim como na doença pulmonar obstrutiva crônica (DPOC) a obstrução das vias aéreas é irreversível na asma."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_021',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "A organização Mundial de Saúde, criada em 1948, tem o objetivo de elevar o nível da saúde global, reduzindo as taxas de mortalidade, doenças e enfermidades em determinadas regiões. Possui 192 países membros e fica localizada em:",
    options: ["Viena.", "Genebra.", "Bruxelas.", "Paris.", "Washington D.C."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_022',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Pelas leis brasileiras, o aborto induzido é considerado crime exceto quando:",
    options: ["Coloca em risco a vida da mulher ou a gravidez é resultante de estupro.", "A mulher já possui mais de cinco filhos.", "Trata-se comprovadamente de feto anencéfalo.", "A mulher é possuidora de câncer avançado.", "Apenas quando resulta de estupro."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_023',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Entre as estratégias para redução do problema da mortalidade materna uma das ações preconizadas tem sido a implantação e implementação de um sistema de vigilância do óbito materno. Assim sendo, o óbito materno passou a ser um evento de notificação compulsória através de Resolução do Ministério da Saúde. Qual é esta resolução?",
    options: ["Resolução nº 773, de 7 de abril de 1994.", "Resolução nº 544, de 02 de maio de 1993.", "Resolução nº 256 de 1º de outubro de 1997.", "Resolução nº 455, de 2 de maio de 1994.", "Resolução nº 772 de 8 de maio de 1994."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_024',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "A lei nº 8.142/90 dispõe sobre a participação da comunidade na gestão do Sistema Único de Saúde (SUS). Referente à participação da comunidade:",
    options: ["Foram criadas duas instâncias colegiadas que asseguram a participação popular no SUS, uma é a Conferência de Saúde e a outra o Conselho de Saúde.", "As instâncias colegiadas que asseguram a participação popular no SUS são a Ouvidoria em Saúde e a Conferência de Saúde.", "Foram criados alguns mecanismos de participação popular no SUS, onde temos a Conferência de Saúde, o conselho de Saúde e a Ouvidoria em Saúde.", "Asseguram a participação popular no SUS as campanhas de Mobilização Popular.", "Não há qualquer citação a esse respeito na Lei citada."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_025',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "A Organização Mundial de Saúde estabeleceu as contraindicações para vacinação com BCG: classificando-as em absoluta e relativa. Abaixo estão citadas várias dessas situações. Qual a contraindicação absoluta relacionada abaixo?",
    options: ["Peso inferior a 2Kg.", "Hipogamaglobulinemia.", "Desnutrição grave.", "Tratamento com corticoides citostáticos.", "Imunodeficiências de qualquer natureza."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_026',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: "No Brasil, os trabalhos têm mostrado que o principal agente responsável pelos casos de Endocardite Infecciosa é:",
    options: ["Enterococos.", "Cândida albicans.", "Staphylococcus aureus.", "Proteus.", "Streptococcus viridans."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_027',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ortopedia',
    text: "A LER, atualmente conhecida como DORT - Distúrbio Osteomuscular Relacionado ao Trabalho, têm as seguintes características, exceto:",
    options: ["É mais frequente em adultos jovens com preferência pelo sexo masculino.", "Tem origem multifatorial e se associa a atividades ocupacionais, domésticas e esportivas.", "Pode estar associada à Síndrome do Túnel do Carpo tipos I e II.", "Localiza-se preferencialmente na mão - articulações metacarpofalangianas e interfalangianas.", "O estudo radiológico é normal ou com alterações discretas e inespecíficas."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_028',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "A finalidade dos Serviços de Verificação de Óbitos (S.V.O) é determinar a causa de:",
    options: ["Mortes não naturais ou violentas.", "Morte em que há solicitação da autoridade policial.", "Mortes naturais cuja causa não esteja determinada.", "Mortes por causa de qualquer natureza.", "Nenhuma das anteriores define o S.V.O."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_029',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Qual das opções abaixo melhor define o significado do Princípio de Integralidade na Atenção Primária à Saúde?",
    options: ["Significa coordenar as referências dos pacientes.", "Significa o acesso primordial das pessoas aos serviços de saúde.", "É a disponibilidade como fonte regular de atenção.", "Capacidade de tratar todos os problemas de saúde dos pacientes.", "É a capacidade de atender os pacientes em suas necessidades de saúde."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_030',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "De acordo com a Lei 8.080/90 que institui o S.U.S o responsável pela execução dos serviços de saneamento básico é/são:",
    options: ["União.", "Estado.", "Município.", "Estado e empresas terceirizadas ou concessionárias dos serviços.", "Consórcio entre estado e município."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_031',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "A declaração de Alma-Ata que esse ano completa 30 anos preconiza:",
    options: ["Fortalecimento da atenção primária.", "Fortalecimento da medicina curativa.", "Maiores recursos para a previdência.", "Ações de prevenção e assistência à mulher.", "Fortalecimento das ações paliativas."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_032',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Para a construção do coeficiente de mortalidade materna, o denominador usado é:",
    options: ["Total de óbitos feminino.", "População de mulheres em idade fértil.", "Mulheres que tiveram complicações na gravidez, parto ou puerpério.", "População de mulheres que morreram.", "Número de nascidos vivos no mesmo local e período."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_033',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: "Para um homem idoso, com um infarto do miocárdio pregresso, foi indicado o uso de ácido acetilsalicílico para prevenção secundária de novas síndromes coronarianas. Dentre as seguintes, a dose diária que melhor une as características de prevenção e menor custo é:",
    options: ["50 mg.", "100 mg.", "200 mg.", "300 mg.", "500 mg."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_034',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Em relação à estratégia de atenção primária do Ministério da Saúde, é verdadeiro afirmar, sobre o Programa Saúde da Família (PSF):",
    options: ["A dedicação da equipe de saúde da família é total, são oito horas diárias, mas todos têm direito a uma folga semanal, além dos finais de semana.", "A equipe mínima do Saúde da Família é composta por um médico generalista, um enfermeiro, um auxiliar de enfermagem e 4 a 6 agentes de saúde.", "Recomenda-se que cada equipe de saúde da família acompanhe entre 800 e 1.500 famílias não ultrapassando o limite máximo de 6.500 pessoas.", "Dentre as ações da equipe de saúde da família está o controle da tuberculose, da hipertensão e do diabete, o acompanhamento do desenvolvimento infantil e da gestação de alto risco e a eliminação da Hanseníase.", "Todas as afirmativas acima são verdadeiras sobre PSF."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_035',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "A lei 8.080, de setembro de 1990, definiu os objetivos, as atribuições e as competências do Sistema Único de Saúde. O conjunto de ações capazes de eliminar, diminuir ou prevenir os riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços de interesse da saúde, constitui-se o que se denomina vigilância:",
    options: ["Clínica.", "Epidemiológica.", "Sanitária.", "De efeitos adversos.", "Autóctone."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_036',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Considerando o modelo dos níveis de prevenção - Leavel & Clark - a imunização e o pré-natal são classificados como medidas de:",
    options: ["Promoção da Saúde.", "Proteção Específica.", "Redução da Incapacidade.", "Reabilitação.", "Proteção Inespecífica."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_037',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: "Homem de 24 anos, chega ao pronto-socorro após acidente automobilístico apresentando politraumatismos com diversos ferimentos de risco para tétano. Tem esquema de vacinação atualizado, sendo que há dois anos fez o reforço de toxoide tetânico. Como profilaxia do tétano, a melhor conduta é:",
    options: ["Cuidados locais, pois a dose de reforço foi feita há menos de 5 anos.", "Cuidados locais e toxoide tetânico.", "Cuidados locais, soro antitetânico e antibióticos.", "Cuidados locais, toxoide de reforço e soro antitetânico.", "Imunoglobulina antitetânica."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_038',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: "Uma pessoa de 32 anos que viaja pela América do Sul várias vezes ao ano, por necessidade profissional, consulta o médico quanto à vacinação contra febre amarela. Diz que a última vez que tomou a vacina foi em agosto de 2000. A melhor recomendação é:",
    options: ["Revacinar já.", "Revacinar dentro de uma semana.", "Não há necessidade de revacinar, já que a vacina confere imunidade permanente.", "Revacinar em 2010.", "Dosar anticorpos e revacinar de acordo com seus títulos."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_039',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: "Algumas doenças infecciosas, como tuberculose e hanseníase, são afecções que têm acumulado um grande conhecimento na medicina e que têm diagnóstico e tratamento conhecidos amplamente. Por outro lado, têm uma incidência considerada alta no Brasil, sendo doenças complexas do ponto de vista epidemiológico porque:",
    options: ["São doenças que foram introduzidas recentemente no Brasil.", "Estão sempre associadas a AIDS.", "Não existe vacina que possa previni-las, sendo doenças transmissíveis em franca expansão.", "Estão relacionadas com as condições de vida, o sucesso do tratamento não depende só do manejo clínico do paciente.", "Têm alta infectividade contaminando rapidamente os contatos do caso índice."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_040',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "A portaria n° 5/2006, da secretaria da vigilância Epidemiológica, do Ministério da Saúde, lista as doenças e agravos de notificação compulsória em todo o território nacional. Qual das listadas abaixo contêm apenas doenças dessa natureza?",
    options: ["Tuberculose, leishmaniose visceral, violência doméstica e SIDA.", "Tuberculose, acidentes de trânsito, hanseníase e tétano.", "Dengue, SIDA, tuberculose e raiva humana.", "Cólera, hepatite, diabetes e SIDA.", "Raiva humana, tuberculose, hanseníase e diabetes."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_041',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Lactente de 7 meses de idade, com bom estado nutricional e alimentado ao seio, subitamente apresentou crises de choro identificadas como cólicas abdominais. No intervalo das crises, passava bem, chegando a brincar e sorrir. Com o passar do tempo, as crises foram-se amiudando e observou-se a eliminação de fezes mucossanguinolentas. Ao exame: afebril, massa palpável ao nível hipocôndrio direito; o toque retal deu saída a fezes tipo 'geleia de morango'. Qual o provável diagnóstico?",
    options: ["Estenose hipertrófica do piloro.", "Amebíase intestinal.", "Balantidíase.", "Invaginação intestinal.", "Colite ulcerativa."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_042',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "A doença de Hirschsprung ou (X), ocorre em 1:5000 recém-nascidos, mais comumente no sexo (Y) em 80% dos casos. Em 15-20% dos afetados após os cinco anos de idade, a doença manifesta-se por (Z). Escolha a alternativa que melhor completa as letras 'X', 'Y' e 'Z'.",
    options: ["X = desmosis coli hipoplástica; Y = feminino; Z = diarreia crônica osmótica.", "X = aganglionose congênita; Y = masculino; Z = constipação intestinal crônica.", "X = agenesia do esfíncter anal interno; Y = masculino; Z = fezes sanguinolentas.", "X = aganglionose familiar; Y = masculino; Z = enterocolite necrotizante.", "X = displasia neuronal intestinal; Y = feminino; Z = constipação intestinal crônica."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_043',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Lactente de 5 meses de idade, 6 kg, com quadro de diarreia, dá entrada no PS com desidratação compatível com perda de 10% do peso corporal. O soro endovenoso de reparação deverá ter a seguinte composição:",
    options: ["Solução fisiológica 200 ml; Solução glicosada 400 ml a 5%.", "Solução fisiológica 200 ml; Solução glicosada 400 ml a 10%.", "Solução fisiológica 300 ml; Solução glicosada 300 ml a 5%.", "Solução fisiológica 400 ml; Solução glicosada 200 ml a 5%.", "Solução fisiológica 400 ml; Solução glicosada 200 ml a 10%."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_044',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Nas adolescentes, em nosso meio, a principal causa da anemia é:",
    options: ["Verminoses.", "Deficiência de G6PD.", "Deficiência alimentar de ácido fólico.", "Perdas menstruais.", "Distúrbios renais."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_045',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "O agente etiológico mais frequente nas osteomielites em crianças com anemia falciforme é:",
    options: ["Streptococcus faecalis.", "Haemophilus.", "Staphilococcus epidermidis.", "Streptococcus viridans.", "Salmonella."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_046',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Recém-nascido com 72 horas de vida, sem intercorrências no período neonatal, receberá alta da maternidade em algumas horas. Em relação ao teste de triagem neonatal (teste do pezinho) pode-se afirmar que, de acordo com o Estatuto da Criança e do Adolescente, a responsabilidade pela sua realização compete:",
    options: ["Aos pais.", "Ao hospital.", "À chefia do berçário.", "Ao médico assistente.", "Às autoridades de saúde."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_047',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Pré-escolar de três anos é atendido com história de febre alta há horas. Constata-se toxemia, sialorreia, estridor e dispneia progressiva. Além da internação hospitalar, está indicado realização imediata de:",
    options: ["Drenagem torácica.", "Radiografia de tórax.", "Radiografia lateral de pescoço.", "Permeabilização de vias aéreas.", "Instalar equipo de soro para hidratação."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_048',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Em caso de criança com suspeita clínica de hepatite viral, os marcadores virais séricos a serem solicitados para definição do agente etiológico são:",
    options: ["Anti-HVA IgM + AgHBs + Anti-HVC.", "Anti-HVA IgM + AgHBs + Anti-HBcIgG.", "Anti-HVA IgG + AntiHBs + Anti-HVC.", "Anti-HVA IgG + Anti-HVA IgM + AgHBs.", "Nenhuma delas."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_049',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "No desenvolvimento neuropsicomotor de um lactente observa-se em torno dos 6 meses a aquisição da capacidade de:",
    options: ["Sustentar a cabeça.", "Sorrir socialmente.", "Abrir a boca para ser alimentado.", "Ficar sentado, inclinando-se para frente.", "Persecução ocular completa."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_050',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Considere as seguintes alterações clínicas relacionadas com a desnutrição proteico-energética grave e marque a letra onde estão as características do marasmo na criança. I. hepatomegalia acentuada; II. atrofia muscular; III. edema de membros inferiores; IV. ausência de gordura subcutânea.",
    options: ["I e II.", "I e III.", "II e IV.", "II e III.", "I, II e III."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_051',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Abaixo são descritas as dermatopatias mais comuns na infância - assinale a alternativa que corresponde ao diagnóstico das quatro lesões descritas, respectivamente: 1- Lesões eritematodescamativas, papulosas, não pruriginosas, em couro cabeludo, face, pescoço, axilas e área de fralda, podendo ocorrer desde o primeiro mês de vida. 2- Doença eczematosa, crônica recorrente, pruriginosa, com períodos de acalmia e exacerbação. 3- Lesão eritematopapulosa encimada por vesícula, pruriginosa, localizada em áreas expostas, túnel sinuoso levemente saliente com conteúdo seroso. 4- Pápulas arredondadas, peroladas, firmes, com umbilicação central, sem sinais inflamatórios ao redor, distribuídas por toda a pele.",
    options: ["Dermatite seborreica, dermatite atópica, larva migrans cutânea, molusco contagioso.", "Dermatite atópica, dermatite de contato, miliária, molusco contagioso.", "Dermatite seborreica, molusco contagioso, dermatite de contato, escabiose.", "Dermatite atópica, dermatite seborreica, larva migrans cutânea, molusco contagioso.", "Dermatite seborreica, dermatite de contato, molusco contagioso, escabiose."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_052',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Derrame pleural com quadro evolutivo rápido, exame radiológico de pneumatoceles, derrame pleural e abscesso pulmonar, em lactente de 6 meses, com broncopneumonia e estado geral comprometido; trata-se de infecção causada mais provavelmente por:",
    options: ["Staphylococcus aureus.", "Estreptococo beta-hemolítico do grupo A.", "Haemophilus influenzae do tipo B.", "Mycoplasma pneumoniae.", "Pseudomonas aeruginosa."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_053',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Assinale a afirmativa ERRADA sobre o calendário básico de vacinação da criança preconizado pelo Ministério da Saúde:",
    options: ["Ao nascer a criança deve receber BCG-ID em dose única e vacina contra hepatite B - 1ª dose.", "A 2ª e a 3ª doses da vacina contra hepatite B devem ser aplicadas no final do 1º mês e no 6º mês, respectivamente.", "Aos 6 meses a criança deverá receber as terceiras doses das vacinas contra difteria, tétano, coqueluche, meningite e outras infecções causadas pelo Haemophilus influenzae tipo b, contra poliomielite e contra o vírus da hepatite B.", "Aos doze meses a criança deverá receber dose única da tríplice viral Sarampo, rubéola e caxumba.", "A vacina contra febre amarela só deverá ser feita aos dez anos de idade, exceto se viajar para áreas de risco; nesse caso, vacinar contra febre amarela 10 dias antes da viagem."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_054',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Uma primípara está com dificuldades em amamentar seu filho, pois seus mamilos estão fissurados. A principal causa da fissura mamilar é:",
    options: ["A primiparidade.", "Técnica incorreta na 'pega' ao mamar.", "Mamadas prolongadas e contínuas.", "Monilíase oral na criança.", "Mãe da raça negra."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_055',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "O achado de retinocoroidite, hidrocefalia, calcificações intracranianas grosseiras a par de convulsões em recém-nascidos constituem a clássica tétrade de Sabin e caracteriza infecção congênita grave em quadro de:",
    options: ["Rubéola.", "Sífilis.", "Toxoplasmose.", "Citomegalovirose.", "Infecção por herpes simples."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_056',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Artrite Reumatoide Juvenil (A.R.J.) associada à uveíte ocorre principalmente em pacientes com:",
    options: ["ARJ pauciarticular, FAN (-).", "ARJ poliarticular, FAN (+).", "ARJ poliarticular, FAN (-).", "ARJ pauciarticular, FAN (+).", "ARJ pauciarticular ou poliarticular com FAN (-)."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_057',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Os eventos habituais no desenvolvimento puberal feminino normal em ordem de surgimento são:",
    options: ["Velocidade máxima de crescimento, surgimento de pelos pubianos, brotamento mamário, menarca.", "Brotamento mamário, surgimento de pelos pubianos, velocidade máxima de crescimento, menarca.", "Surgimento de pelos pubianos, velocidade máxima de crescimento, brotamento mamário, menarca.", "Brotamento mamário, menarca, surgimento de pelos pubianos, velocidade máxima de crescimento.", "Surgimento de pelos pubianos, brotamento mamário, menarca, velocidade máxima de crescimento."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_058',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "A causa metabólica mais comum condicionante de crise convulsiva em RN é:",
    options: ["Hiperpotassemia.", "Hipercalcemia.", "Hipermagnesemia.", "Hiponatremia.", "Hipoglicemia."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_059',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "A Endoscopia Digestiva Alta (E.D.A.) é um procedimento amplamente usado em crianças para diagnóstico de patologias do Tubo Digestivo Superior. São indicações para a EDA em crianças, exceto:",
    options: ["Dor abdominal recorrente.", "Regurgitação e vômitos recorrentes.", "Disfagia.", "Estudo das vias biliares intra e extra-hepáticas.", "Hemorragia digestiva alta."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_060',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: "Você está de plantão no PS Infantil e uma mãe o procura para saber quanto tempo o leite materno ordenhado pode ser guardado no congelador/freezer. Você responderá 'por um período de até:",
    options: ["24 horas.", "72 horas.", "6 dias.", "9 dias.", "15 dias."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_061',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Adolescente de 16 anos queixa-se de nódulos vulvares. Relata vida sexual com parceiro fixo há um ano e utilização de contraceptivo oral, sem uso de preservativo. Exame físico: pequenas úlceras localizadas confluentes, no introito vaginal e na região perianal, com reação supurativa em gânglios inguinais. O médico faz um esfregaço do material das lesões e requisita a cultura do material. O agente etiológico mais provável a ser encontrado na cultura é:",
    options: ["Papilomavírus humano.", "Haemophylus ducreyi.", "Gardnerella vaginalis.", "Herpes vírus.", "Clamídia."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_062',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Paciente G3P2A0 (2 partos vaginais), 38 semanas de gestação, é admitida na sala de parto com diagnóstico de descolamento prematuro de placenta. Ao exame: PA 90 x 50 mmHg, pulso 98 bpm e FR 18 mrp. Toque: colo dilatado 5 cm, bolsa íntegra, +1 de De Lee, cefálico em 'ODP', BCF 102 bpm. A melhor conduta materno-fetal para resolução da gestação é:",
    options: ["Realizar amniotomia e bloqueio peridural contínuo.", "Aguardar evolução normal do trabalho de parto.", "Acelerar o trabalho de parto com ocitocina.", "Realizar cesárea.", "Ressuscitação fetal intraútero e aguardar evolução do trabalho de parto."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_063',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Quanto às anemias na gravidez podemos afirmar:",
    options: ["Os produtos com liberação entérica de ferro são ótima opção para o tratamento da anemia ferropriva.", "O uso dos sais de ferro se faz preferentemente por via parenteral.", "No primeiro trimestre de gestação ocorre aumento da necessidade de ferro e portanto a complementação alimentar não será suficiente.", "A anemia por carência de ferro na gestação é do tipo normocrômica e microcítica.", "Hemoglobina inferior a 11mg/dl sugere anemia ferropriva."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_064',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Cistos de Naboth são encontrados em paciente que previamente apresentou:",
    options: ["Disceratose.", "Ectopia.", "Vaginite por tricomonas.", "NIV.", "NIC."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_065',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Paciente no curso da 33ª semana de gravidez, apresentando níveis tensionais elevados (150/105 mm Hg) acompanhado de sangramento transvaginal de coloração escura e de início abrupto, ausculta fetal duvidosa. O diagnóstico mais provável é:",
    options: ["Eclampsia.", "Placenta prévia oclusiva total.", "DPPNI (descolamento de placenta normalmente inserida).", "Síndrome de HELLP.", "Pré-eclampsia grave com distúrbio de coagulação."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_066',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Alguns medicamentos anti-hipertensivos em mulheres não-grávidas são mais úteis em condições específicas. Qual destas combinações está contraindicada?",
    options: ["Inibidores da ECA em diabéticas.", "ß-bloqueadores com doenças coronariana coexistente.", "Bloqueadores dos canais de cálcio com insuficiência cardíaca esquerda.", "ß-bloqueadores com enxaqueca.", "Não há combinação que esteja contraindicada."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_067',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Mulher de 25 anos chega ao serviço de emergência cinco horas depois de ser atacada sexualmente. O agressor ejaculou em sua vagina. Qual dos regimes antibióticos a seguir seria mais efetivo para tratar doenças sexualmente transmitidas (DSTs) que a paciente pode ter adquirido durante o ataque?",
    options: ["Ceftriaxona, metronidazol e azitromicina.", "Metronidazol e doxiciclina.", "Ampicilina, metronidazol, doxiciclina.", "Ampicilina e doxiciclina.", "Ceftriaxona sódica e metronidazol."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_068',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "São indicações absolutas de cesárea, exceto:",
    options: ["Cesárea anterior.", "Placenta prévia total.", "Desproporção céfalo-pélvica.", "Apresentação córmica.", "Sofrimento fetal agudo."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_069',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Os subtipos mais comuns de papilomavírus humano (HPV), associados a verrugas genitais, são:",
    options: ["HPV - 1 e 2.", "HPV - 4 e 7.", "HPV - 18 e 24.", "HPV - 6 e 11.", "HPV - 22 e 23."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_070',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Mulher de 30 anos, não lactante, apresenta-se com queixa de secreção papilar sanguinolenta há dois meses na mama esquerda. Ao exame físico observa-se um diminuto nódulo subaureolar. Qual a conduta a ser tomada?",
    options: ["Dosar os níveis séricos de prolactina e TRH.", "Fazer citologia da secreção sanguinolenta.", "Apenas observar por se tratar provavelmente de uma situação autolimitada.", "Realizar ductoscopia de fibra óptica.", "Deve-se excisar a massa e enviá-la à patologia."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_071',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Mulher 38 anos, apresentando nos últimos seis meses lesão eczematoide no mamilo de mama esquerda que se estende à aréola. Fez tratamento dermatológico sem resultado - a lesão continua com pele avermelhada, espessada e crostas úmidas descamativas. A biópsia é mandatória na possibilidade de tratar-se de:",
    options: ["Comedocarcinoma.", "Doença de Paget da mama.", "Carcinoma medular.", "Carcinoma papilífero infiltrativo.", "Mastite pós-traumática."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_072',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Paciente gesta 2, duas cesareanas, compareceu ao ambulatório de ginecologia e refere que há quatro anos está tentando engravidar novamente, sem sucesso. Há dois anos queixa-se de dor em baixo ventre, progressiva, no período menstrual. No último ano diminuiu a atividade sexual devido à intensa dispareunia. Em relação ao diagnóstico provável, em que você pensaria?",
    options: ["Diverticulite crônica.", "Salpingite crônica.", "Endometriose.", "Aderências pélvicas pós-cesáreas.", "Endometrite crônica."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_073',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Paciente saudável de 23 anos, G1P1, está no terceiro mês de contracepção com acetato de depomedroxiprogesterona (DMPA). Ela relata spotting e sangramento moderado quase diariamente. Qual a melhor conduta?",
    options: ["Sugerir que ela interrompa esta forma de contracepção imediatamente.", "Assegurar que isso é comum, que o sangramento anormal geralmente cessa com o tempo, embora possa levar meses, e oferecer tratamento a curto prazo com baixa dosagem de estrogênio.", "Realizar exames laboratoriais para gonorreia e Chlamydia.", "Realizar um teste de gravidez.", "Dobrar a dosagem do contraceptivo."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_074',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Dos fatores abaixo citados qual não exibe correlação com a diabetes gestacional?",
    options: ["Idade materna inferior a 25 anos.", "História de mal formação fetal.", "Antecedente de óbito fetal.", "Aumento do volume de líquido amniótico.", "Macrossomia fetal."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_075',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Assinale a alternativa INCORRETA com relação ao Estadiamento do Câncer Cervical:",
    options: ["Estágio 0 - carcinoma in situ.", "Estágio I - carcinoma confinado ao colo do útero.", "Estágio II - carcinoma estende-se além do colo do útero, mas não atinge a parede pélvica.", "Estágio III - carcinoma se estende à parede pélvica, 1/3 inferior da vagina e parte da bexiga.", "Estágio IV - o carcinoma já se estendeu para além de pelve verdadeira, invadiu bexiga e reto; já possuem metástases a distância."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_076',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Primigesta com 32 semanas de idade gestacional foi internada com pressão arterial de 160/110 mmHg (após 30 minutos de repouso) e sintomas de cefaleia e escotomas. Trouxe exame de proteinúria de 3 g em 24 horas. À cardiotocografia, o feto mostrou-se reativo. Foi realizada amniocentese, a qual revelou teste de Clements positivo. Qual a conduta mais adequada?",
    options: ["Administrar sulfato de magnésio, hidralazina ou nifedipina e interromper a gestação.", "Administrar benzodiazepínico intravenoso e realizar cesariana imediatamente.", "Administrar nitroprussiato de sódio e realizar cesariana a seguir.", "Administrar hidantoína e corticosteroides e realizar cesariana.", "Administrar corticosteroide, repetir a amniocentese e, se o feto apresentar maturidade, interromper a gestação."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_077',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Clinicamente níveis aumentados de prolactina estão associados à:",
    options: ["Hipermenorreia.", "Hirsutismo.", "Amenorreia.", "Dismenorreia.", "Dispareunia."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_078',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Com relação à etiologia das fístulas gênito-urinárias, o uso de fórcipe, colporrafias anteriores e irradiação pélvica, são causas de:",
    options: ["Fístula uretro-vaginal.", "Fístula vesico-vaginal.", "Fístula uretero-vaginal.", "Lesão ureteral.", "Fístula cérvico-vaginal."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_079',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "Gestante apresentando corrimento vaginal e disúria. Os exames complementares indicaram infecção por Chlamydia trachomatis. O tratamento adequado, consiste no uso por 10 dias de:",
    options: ["Eritromicina - 1.500 miligramas/dia.", "Metronidazol - 500 miligramas/dia.", "Ceftriaxona - 250 miligramas/dia.", "Doxiciclina - 100 miligramas/dia.", "Sulfametaxol - 200 miligramas/dia."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_080',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "As mulheres adultas sobreviventes de abuso sexual na infância, quando comparadas a mulheres que não sofreram abuso sexual, estão sob maior risco de desenvolver todos os distúrbios abaixo, exceto:",
    options: ["Depressão.", "Comportamento autodestrutivo.", "Dor pélvica crônica.", "Disfunção sexual.", "Esquizofrenia."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_081',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "A doença diverticular dos cólons, uma condição rara antes dos 30 anos, mas que se torna comum com o avançar da idade, de modo geral, é assintomática. Os sintomas costumam se apresentar com as complicações. Qual dos abaixo NÃO faz parte das principais complicações?",
    options: ["Episódios de inflamação recorrente.", "Perfuração do divertículo.", "Sangramentos digestivos de intensidade variável.", "Abscessos pericólicos e peritonite.", "Formação de fecaloma."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_082',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Uma mulher de 23 anos é admitida no pronto-socorro com história de atropelamento. Ela se encontra comatosa (Glasgow 7 pontos), francamente dispneica, porém o murmúrio vesicular é audível em todo o campo pulmonar. Seu pulso é filiforme, numa frequência de 140 bpm, e sua P.A é de 70x10. O abdome está distendido, com peristalse abolida. Após garantir vias aéreas através de entubação orotraqueal e infundir 2 L de Ringer lactato, seu pulso é 130 bpm e sua pressão é 80x20 mmHg. O próximo passo deverá ser:",
    options: ["TC de crânio.", "TC de abdome.", "Rx de coluna cervical.", "Laparotomia exploradora.", "Arteriografia."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_083',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "A sequência correta no processo de cicatrização padrão é:",
    options: ["Aumento de polimorfonucleares, vasodilatação, fibroblastos, neoformação vascular e colágeno.", "Vasodilatação, aumento de polimorfonucleares, fibroblastos, neoformação vascular e colágeno.", "Vasodilatação, aumento de polimorfonucleares, neoformação vascular, fibroblastos e colágeno.", "Vasodilatação, neoformação vascular, aumento de polimorfonucleares, fibroblastos e colágeno.", "Aumento de polimorfonucleares, vasodilatação, neoformação vascular, fibroblastos e colágeno."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_084',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Nas obstruções intestinais altas a consequência imediata mais importante é:",
    options: ["Hipovolemia condicionada pela falta de ingesta hídrica e das perdas líquidas e de eletrólitos por vômitos.", "Ruptura de varizes esofageanas pelo esforço intenso ao vomitar seguidamente.", "A acidose hipoclorêmica pela diminuição de água e eletrólitos seguida de hemoconcentração.", "A insuficiência renal pela redução do fluxo sanguíneo renal.", "A perda de potássio condicionando alterações do ritmo cardíaco."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_085',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "A fadiga vocal e a perda do timbre da voz após uma tireoidectomia levam à suspeição de:",
    options: ["Traqueomalácia.", "Lesão do nervo recurrente.", "Secção da cartilagem cricoide.", "Lesão do nervo laríngeo superior.", "Pólipo de cordas vocais associado."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_086',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "São sinais de certeza (objetivos) de fraturas de face:",
    options: ["Dor à mobilização, incapacidade funcional, parestesia e imagem radiográfica.", "Enfisemas, equimoses, hematomas e creptação.", "Mobilidade, creptação, deformidade, imagem radiográfica e assimetria.", "Afundamento, depressão, elevação e incapacidade funcional.", "Edema, hematoma, hemorragia, dor e abaixamento ou lateralização da simetria."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_087',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Paciente do sexo masculino, 55 anos, usuário de álcool e tabaco há 38 anos, apresenta tumoração em cavidade oral, irregular, endurada, fixa, dolorosa, que causa disfagia e sensação de corpo estranho. Informa emagrecimento de 10 Kg nos últimos 2 meses. Foi submetido à biópsia da tumoração cujo histopatológico concluiu tratar-se de lesão maligna, a mais frequente nesta topografia. Qual o provável tipo histológico?",
    options: ["Linfoma Hodgkin.", "Carcinoma papilífero.", "Linfangioma.", "Adenocarcinoma.", "Carcinoma epidermoide."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_088',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "O tabagismo está presente na carcinogênese de vários tumores. Nas sequências abaixo qual a que contém apenas órgão/sedes em que o fumo é fator determinante no aparecimento de cânceres?",
    options: ["Colo do útero, vesícula, pâncreas, pulmão, rins e bexiga.", "Boca, endométrio, pulmão, mama, estômago e intestino.", "Boca, esôfago, pâncreas, pulmão, rins e bexiga.", "Colo do útero, endométrio, fígado, vesícula biliar, faringe e pulmão.", "Todos os acima têm relação com o tabagismo."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_089',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Considerando que a população está atingindo idades mais avançadas alguns tipos de cânceres tendem a se tornar mais frequentes. É o que vem acontecendo com o câncer de próstata, cuja abordagem inaugural deve ser:",
    options: ["Exame digital da próstata e PSA.", "Exame digital da próstata somente.", "Exame digital da próstata e US trans-retal da próstata.", "Somente PSA.", "Exame da próstata e US da próstata por via abdominal."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_090',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "É considerado Shunt portossistêmico seletivo, empregado para o tratamento da hipertensão porta:",
    options: ["Derivação portocava calibrada.", "Shunt esplenorrenal convencional.", "Shunt esplenorrenal distal.", "Shunt mesocava.", "Shunt portocava laterolateral."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_091',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: "A ultrassonografia morfológica fetal tem sido muito usada no diagnóstico pré-natal. As malformações mais comumente encontradas são de que sistema?",
    options: ["Malformações do rim e trato genitourinário.", "Malformação do SNC.", "Malformações cardíacas.", "Malformações digestivas.", "Malformações torácicas extra-cardíacas."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_092',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    text: "Desgarrado da torcida organizada de seu clube, um rapaz viu-se cercado por admiradores do time adversário e acabou recebendo forte paulada na cabeça. Sangrando muito no coro cabeludo, foi removido para uma clínica particular, onde disse estar bem e 'pronto para outra'. Não havia TC disponível, mas uma radiografia simples do crânio mostrou uma linha de fratura na têmpora direita. Horas depois, ele ficou desorientado, torporoso e, por fim, comatoso. Essa clássica evolução, com progressiva deterioração neurológica em casos de TCE, mais comumente decorre de:",
    options: ["Hematoma subdural.", "Lesão isquêmica talâmica.", "Contusão do ângulo pontocerebelar.", "Hematoma epidural.", "Hemorragia subaracnoidea."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_093',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "Com relação à anestesia local podemos afirmar, exceto:",
    options: ["Consiste na infiltração local do anestésico nos tecidos que serão tratados indo atuar diretamente nas terminações nervosas.", "A adrenalina é o vasoconstrictor mais utilizado em associação com o anestésico e deve ser usado mesmo em se tratando de extremidades (dedos, por exemplo).", "Rotineiramente usa-se solução anestésica de lidocaína a 0.5% associada à adrenalina, em concentrações variadas de acordo com a região e o volume a ser infiltrado.", "Mesmo em cirurgias sob anestesia geral pode-se infiltrar localmente os tecidos com solução vasoconstrictora para diminuir o sangramento.", "As manifestações indicativas de complicações da anestesia local são principalmente no sistema cardiovascular e sistema nervoso central."],
    correctIndex: 1,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_094',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "As indicações de hospitalização em pacientes queimados são, exceto:",
    options: ["Queimaduras de 2º grau com superfície corporal queimada (SCQ) superior a 15% nos adultos ou 10% em crianças.", "Queimaduras de 3º grau com mais de 5% de SCQ.", "Queimaduras de 1º grau com intensa formação de flictenas.", "Queimaduras que acometem vias aéreas, face e períneo.", "Queimaduras elétricas quando pode existir extensa destruição dos planos profundos com alterações do equilíbrio ácido-básico e mioglobinúria."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_095',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Oftalmologia',
    text: "Um homem de 42 anos notou nódulo levemente doloroso na pálpebra superior há 3 semanas. Ao exame físico o nódulo é firme, sem ulceração. A conjuntiva e a córnea estão aparentemente normais. O exame histopatológico evidenciou 'processo inflamatório constituído por linfócitos de permeio a células epitelioides e células gigantes'. Qual é o provável diagnóstico?",
    options: ["Pinguécula.", "Hordéolo.", "Pterígio.", "Cistodermoide.", "Calázio."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_096',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    text: "Em traumatismo raquimedular, o quadro clássico de hemissecção medular manifesta-se clinicamente por:",
    options: ["Anestesia homolateral.", "Anestesia contralateral.", "Paralisia motora homolateral.", "Paralisia motora contralateral.", "Paralisia vasomotora contralateral."],
    correctIndex: 2,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_097',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ortopedia',
    text: "Sobre as fraturas de membro inferior em crianças assinale a afirmativa INCORRETA:",
    options: ["A mais comum é a do fêmur e está relacionada significativamente à colisão de automóveis.", "As fraturas da tíbia são as mais frequentes e causadas, na maioria das vezes, por quedas pouco importantes.", "A localização da fratura, sua gravidade e a idade da criança influenciam no tratamento.", "Muitas dessas fraturas acontecem em crianças ainda aprendendo a andar ou são fraturas de baixa energia e sem deslocamento.", "Colisões de automóveis e lesões de alta energia são mais comuns em crianças mais maduras, resultando em fraturas da tíbia e da fíbula."],
    correctIndex: 0,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_098',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Ortopedia',
    text: "As fraturas de clavícula podem ser localizadas no 1/3 externo, no 1/3 médio e no 1/3 interno. As fraturas do 1/3 médio quando apresentam desvio, o fragmento proximal é tracionado pela ação de qual músculo? Assinale a afirmativa verdadeira:",
    options: ["O músculo trapézio e o desvio do fragmento proximal para baixo e para frente, o deltoide levanta o fragmento distal.", "O músculo trapézio traciona o fragmento proximal para cima e anteriormente e a gravidade puxa o distal para baixo.", "O músculo esternocleidomastoideo traciona o fragmento proximal para superiormente e anteriormente enquanto o fragmento distal cai para trás devido a gravidade e a tração do Músculo Peitoral Menor.", "O músculo esternocleidomastódeo traciona o fragmento proximal para superior e posterior enquanto o fragmento distal cai para frente devida a ação da gravidade e a tração do Músculo Peitoral Maior.", "O músculo trapézio traciona para cima e para posterior o fragmento proximal enquanto o músculo esternocleidomastoideo traciona juntamente com o peitoral maior e menor o fragmento distal para baixo."],
    correctIndex: 3,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_099',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: "A Resolução CFM Nº. 1.766/05 de 11/07/05 normatiza o tratamento cirúrgico da obesidade mórbida. De acordo com essa resolução as indicações são as abaixo citadas, exceto:",
    options: ["Está indicada para pacientes com Índice de Massa Corpórea (IMC) acima de 40 kg/m2.", "Pacientes com IMC maior que 35 kg/m2 e co-morbidades (doenças agravadas pela obesidade).", "Obesidade estável há pelo menos 5 anos.", "Pelo menos dois anos de tratamento clínico prévio para obesidade não eficaz.", "Presença de quadros psicóticos ou demenciais moderados ou graves associados à obesidade."],
    correctIndex: 4,
    explanation: '',
  },
  {
    id: 'cermam_am_2009_100',
    banca: 'CERMAM',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: "Você está de plantão no PS e chega pré-escolar de 3 anos de idade que está em tratamento de leucemia linfoblástica aguda e encontrava-se profundamente anêmica, com insuficiência cardíaca congestiva. Os pais são Testemunhas de Jeová e repetidamente lhe dizem que em hipótese alguma a criança deveria receber transfusão de sangue. Você diz aos pais que se a criança não for transfundida imediatamente poderá morrer. Mesmo assim, os pais recusam-se a autorizar a transfusão. A conduta correta neste caso é:",
    options: ["Solicitar autorização ao Juiz da Vara da Infância e da Juventude.", "Solicitar opinião de mais dois médicos antes da transfusão.", "Prescrever eritropoietina em dose elevada e não transfundir.", "Realizar a transfusão e depois comunicar o fato ao juiz.", "Respeitar a vontade dos pais e não transfundir."],
    correctIndex: 3,
    explanation: '',
  },

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
  const [quizBancaFilter, setQuizBancaFilter] = useState<string | null>(null);
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

  const startQuizWithPool = (pool: Question[]) => {
    setIsThinking(true);
    setIsRevisionMode(false);
    const selected = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
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
    }, 800);
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
    } else {
      // Filter by subject (subject names are unique per cycle, so no need to also filter cycle)
      filtered = QUESTIONS.filter(q => q.subject === activeSubject);
      if (activeSubSubject) {
        filtered = filtered.filter(q => q.subSubject === activeSubSubject);
      }
      // Filter by banca if one is selected in the quiz banca filter
      if (quizBancaFilter) {
        const bancaFiltered = filtered.filter(q => q.banca === quizBancaFilter);
        if (bancaFiltered.length > 0) filtered = bancaFiltered;
      }
    }

    const selected = filtered.length > 0
      ? filtered.sort(() => Math.random() - 0.5).slice(0, 10)
      : [...QUESTIONS].filter(q => q.subject === activeSubject).sort(() => Math.random() - 0.5).slice(0, 10);

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
                    {(['Ciclo Básico', 'Ciclo Clínico', 'Internato'] as Cycle[]).map((cycle) => (
                      <button
                        key={cycle}
                        onClick={() => {
                          setSelectedCycle(cycle);
                          const firstSubj = Object.keys(HIERARCHY[cycle])[0] as Subject;
                          setSelectedSubject(firstSubj);
                          setSelectedSubSubject(null);
                        }}
                        className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
                          selectedCycle === cycle ? 'bg-white text-brand-primary shadow-md' : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        {cycle}
                      </button>
                    ))}
                  </div>

                  {/* Banca Filter */}
                  <div className="flex items-center gap-2 flex-wrap justify-center">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Filtrar por banca:</span>
                    {['IAMSPE', 'CERMAM'].map(b => (
                      <button
                        key={b}
                        onClick={() => setQuizBancaFilter(quizBancaFilter === b ? null : b)}
                        className={`px-3 py-1 rounded-lg text-[10px] font-black transition-all border ${
                          quizBancaFilter === b
                            ? 'bg-brand-primary text-white border-brand-primary shadow'
                            : 'bg-white text-slate-500 border-slate-200 hover:border-brand-primary/40'
                        }`}
                      >
                        {b} {quizBancaFilter === b && '✕'}
                      </button>
                    ))}
                    {quizBancaFilter && (
                      <span className="text-[9px] text-slate-400 italic">clique novamente para remover</span>
                    )}
                  </div>

                  {/* Subject Grid */}
                  <div className="py-10 px-6 flex flex-col items-center bg-white rounded-[3rem] border border-slate-200/80 shadow-xl overflow-visible">
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4">
                      {(Object.keys(HIERARCHY[selectedCycle]) as Subject[]).map((subj, idx) => {
                        const allQs = QUESTIONS.filter(q => q.subject === subj);
                        const bancaQs = quizBancaFilter ? allQs.filter(q => q.banca === quizBancaFilter) : allQs;
                        const pool = bancaQs.length > 0 ? bancaQs : allQs;
                        return (
                          <GamePathNode
                            key={`path-${subj}-${idx}`}
                            subject={subj}
                            progress={Number(user.mastery[subj] || 0)}
                            index={idx}
                            isSelected={selectedSubject === subj}
                            questionCount={pool.length}
                            onClick={() => {
                              if (pool.length > 0) {
                                setSelectedSubject(subj);
                                setSelectedSubSubject(null);
                                startQuizWithPool(pool);
                              }
                            }}
                          />
                        );
                      })}
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
                          onClick={() => { setQuizBancaFilter(selectedBanca && ['IAMSPE','CERMAM'].includes(selectedBanca) ? selectedBanca : null); startQuiz(false, selectedSubject, null); }}
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
                      <div className="flex bg-slate-100 p-1 rounded-2xl w-fit mx-auto shadow-inner overflow-x-auto">
                        {(['Ciclo Clínico', 'Internato'] as Cycle[]).map((cycle) => (
                          <button
                            key={cycle}
                            onClick={() => {
                              setSelectedCycle(cycle);
                              const firstSubj = Object.keys(HIERARCHY[cycle])[0] as Subject;
                              setSelectedSubject(firstSubj);
                              setSelectedSubSubject(null);
                            }}
                            className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
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
                          {(Object.keys(HIERARCHY[selectedCycle as Cycle]) as Subject[]).map((subj, idx) => {
                            const pool2 = QUESTIONS.filter(q => q.subject === subj);
                            return (
                              <GamePathNode
                                key={`res-path-${subj}-${idx}`}
                                subject={subj}
                                progress={Number(user.mastery[subj] || 0)}
                                index={idx}
                                isSelected={selectedSubject === subj}
                                questionCount={pool2.length}
                                onClick={() => { if (pool2.length > 0) { setSelectedSubject(subj); setSelectedSubSubject(null); startQuizWithPool(pool2); } }}
                              />
                            );
                          })}
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
                        { subj: 'Urgência e Emergência',     emoji: '🚨', short: 'Urgência' },
                        { subj: 'Medicina Intensiva',        emoji: '🫀', short: 'UTI' },
                        { subj: 'Ortopedia',                 emoji: '🦴', short: 'Ortopedia' },
                        { subj: 'Neonatologia',              emoji: '👼', short: 'Neonatologia' },
                        { subj: 'Anestesiologia',            emoji: '💉', short: 'Anestesiologia' },
                        { subj: 'Traumatologia-Ortopedia',   emoji: '🩹', short: 'Traumato-Orto' },
                        { subj: 'Patologia',                 emoji: '🔬', short: 'Patologia' },
                        { subj: 'Parasitologia',             emoji: '🦠', short: 'Parasitologia' },
                        { subj: 'Semiologia',                emoji: '🩺', short: 'Semiologia' },
                        { subj: 'Epidemiologia',             emoji: '📊', short: 'Epidemiologia' },
                        { subj: 'Urologia',                  emoji: '💧', short: 'Urologia' },
                        { subj: 'Geriatria',                 emoji: '👴', short: 'Geriatria' },
                        { subj: 'Radiologia',                emoji: '🩻', short: 'Radiologia' },
                        { subj: 'Cirurgia Vascular',         emoji: '🫀', short: 'Cir. Vascular' },
                        { subj: 'Neurocirurgia',             emoji: '🧠', short: 'Neurocirurgia' },
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
