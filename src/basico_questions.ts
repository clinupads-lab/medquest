export interface Question {
  id: string;
  cycle: string;
  subject: string;
  subSubject: string;
  banca: string;
  year: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

const SUBJECTS_BASICO = [
  "Anatomia",
  "Fisiologia",
  "Bioquímica",
  "Histologia",
  "Embriologia",
  "Microbiologia",
  "Imunologia",
  "Genética",
  "Farmacologia",
  "Patologia",
  "Parasitologia",
  "Semiologia",
  "Epidemiologia"
];

const TOPICS_BASICO: Record<string, { title: string; cases: string[]; questions: { type: string; q: string; opts: string[]; ans: number; exp: string }[] }[]> = {
  "Anatomia": [
    {
      title: "Anatomia Cardiovascular",
      cases: [
        "Durante uma dissecção cadavérica no laboratório de anatomia",
        "Estudante de medicina analisa uma peça anatômica de coração humano",
        "Durante procedimento de angioplastia coronariana"
      ],
      questions: [
        { type: "anatomia", q: "Qual artéria corre no sulco interventricular anterior acompanhando a veia cardíaca magna?", opts: ["Artéria coronária direita", "Artéria circunflexa", "Ramo interventricular anterior (artéria descendente anterior)", "Artéria marginal esquerda"], ans: 2, exp: "O ramo interventricular anterior da artéria coronária esquerda (descendente anterior) corre no sulco correspondente ao lado da veia cardíaca magna." },
        { type: "anatomia", q: "A veia ázigo drena diretamente em qual estrutura vascular?", opts: ["Veia cava superior", "Veia cava inferior", "Átrio direito", "Veia braquiocefálica esquerda"], ans: 0, exp: "A veia ázigo faz um arco sobre o brônquio principal direito e drena diretamente na veia cava superior." }
      ]
    },
    {
      title: "Anatomia do Sistema Nervoso",
      cases: [
        "Ao examinar uma peça de hemisfério cerebral em corte sagital mediano",
        "Em uma discussão de neuroanatomia sobre o tronco encefálico",
        "Paciente com lesão compressiva no nível do mesencéfalo"
      ],
      questions: [
        { type: "anatomia", q: "O sulco central divide quais giros do córtex cerebral?", opts: ["Giro pré-central e giro pós-central", "Giro frontal superior e giro frontal médio", "Giro angular e giro supramarginal", "Giro temporal superior e médio"], ans: 0, exp: "O sulco central divide o giro pré-central (área motora primária) do giro pós-central (área somatosensorial primária)." },
        { type: "anatomia", q: "Qual par de nervo craniano emerge da face posterior do tronco encefálico (mesencéfalo)?", opts: ["Nervo oculomotor (III)", "Nervo troclear (IV)", "Nervo abducente (VI)", "Nervo trigêmeo (V)"], ans: 1, exp: "O nervo troclear (IV par) é o único nervo craniano que emerge da face posterior do tronco encefálico." }
      ]
    }
  ],
  "Fisiologia": [
    {
      title: "Fisiologia Renal",
      cases: [
        "Em estudo laboratorial de taxa de filtração glomerular",
        "Sob condições experimentais de privação hídrica severa",
        "Ao avaliar o balanço hidroeletrolítico de indivíduo saudável"
      ],
      questions: [
        { type: "fisiologia", q: "Em qual segmento do néfron ocorre a maior reabsorção de água e solutos filtrados (cerca de 65%)?", opts: ["Túbulo contorcido distal", "Túbulo contorcido proximal", "Ramo descendente da alça de Henle", "Duto coletor cortical"], ans: 1, exp: "O túbulo contorcido proximal é o principal sítio de reabsorção do néfron, reabsorvendo cerca de 65% da água, sódio, potássio e quase 100% de glicose e aminoácidos." },
        { type: "fisiologia", q: "Qual hormônio atua aumentando a permeabilidade à água nos dutos coletores renais por meio de inserção de aquaporinas-2?", opts: ["Aldosterona", "Peptídeo Natriurético Atrial", "Hormônio Antidiurético (ADH)", "Angiotensina II"], ans: 2, exp: "O ADH (vasopressina) liga-se aos receptores V2 nos dutos coletores, estimulando a translocação de vesículas contendo canais de água (aquaporina-2) para a membrana apical." }
      ]
    },
    {
      title: "Fisiologia Cardiovascular",
      cases: [
        "Durante teste ergométrico dinâmico em esteira",
        "Ao analisar curvas de pressão-volume ventricular em modelo experimental",
        "Em ensaio avaliando a modulação autonômica do coração"
      ],
      questions: [
        { type: "fisiologia", q: "O que explica o aumento da força de contração miocárdica proporcional ao volume diastólico final (pré-carga)?", opts: ["Efeito Bowditch", "Lei de Frank-Starling", "Efeito Anrep", "Reflexo de Bainbridge"], ans: 1, exp: "A Lei de Frank-Starling estabelece que, dentro de limites fisiológicos, a força de contração do miocárdio é proporcional ao comprimento inicial das fibras musculares (volume diastólico final)." },
        { type: "fisiologia", q: "A ativação de receptores beta-1 adrenérgicos no nodo sinoatrial provoca principalmente qual efeito?", opts: ["Aumento da frequência cardíaca (cronotropismo positivo)", "Diminuição do débito cardíaco", "Retardo na condução atrioventricular", "Vasodilatação coronariana direta"], ans: 0, exp: "A estimulação beta-1 adrenérgica no coração induz aumento da frequência cardíaca (cronotropismo positivo) e da força de contração (inotropismo positivo)." }
      ]
    }
  ],
  "Bioquímica": [
    {
      title: "Metabolismo de Carboidratos",
      cases: [
        "Paciente em jejum prolongado de 18 horas",
        "Ao monitorar o consumo de glicose em células musculares sob contração vigorosa",
        "Em estudo metabólico de regulação da glicemia hepática"
      ],
      questions: [
        { type: "bioquimica", q: "Qual enzima atua como o principal ponto de regulação alostérica da via glicolítica, sendo estimulada por AMP e inibida por ATP e citrato?", opts: ["Hexocinase", "Fosfofrutocinase-1 (PFK-1)", "Piruvato quinase", "Glicose-6-fosfatase"], ans: 1, exp: "A PFK-1 é a enzima reguladora chave da glicólise. Ela converte frutose-6-fosfato em frutose-1,6-bifosfato e é fortemente regulada de forma alostérica." },
        { type: "bioquimica", q: "Qual via metabólica hepática é ativada pelo glucagon para produzir glicose a partir de lactato, piruvato, glicerol ou aminoácidos?", opts: ["Glicogênese", "Gliconeogênese", "Glicólise", "Via das Pentoses Fosfato"], ans: 1, exp: "A gliconeogênese é a síntese de glicose a partir de precursores não glicídicos, ocorrendo no fígado (e rins) sob estímulo de glucagon e cortisol." }
      ]
    },
    {
      title: "Cadeia Respiratória e Fosforilação Oxidativa",
      cases: [
        "Em cultura celular exposta a inibidores mitocondriais",
        "Durante análise de rendimento energético de células eucarióticas",
        "Estudo de patologia celular relacionada ao estresse oxidativo mitocondrial"
      ],
      questions: [
        { type: "bioquimica", q: "Qual complexo da cadeia respiratória é inibido pelo monóxido de carbono (CO) e cianeto?", opts: ["Complexo I (NADH desidrogenase)", "Complexo II (Succinato desidrogenase)", "Complexo III (Citocromo bc1)", "Complexo IV (Citocromo c oxidase)"], ans: 3, exp: "O monóxido de carbono e o cianeto ligam-se ao ferro heme no Complexo IV (Citocromo c oxidase), bloqueando a transferência eletrônica final para o oxigênio." },
        { type: "bioquimica", q: "Aproximadamente quantos ATPs são produzidos pela oxidação de uma molécula de NADH na fosforilação oxidativa?", opts: ["1,5 ATP", "2,5 ATP", "3,5 ATP", "4,0 ATP"], ans: 1, exp: "A oxidação de 1 NADH gera energia para bombear prótons suficientes para a síntese de aproximadamente 2,5 ATPs pela ATP sintase." }
      ]
    }
  ],
  "Histologia": [
    {
      title: "Tecido Epitelial e Conjuntivo",
      cases: [
        "Exame de lâmina microscópica corada com Hematoxilina e Eosina",
        "Análise histológica de fragmento de biópsia do trato urinário",
        "Discussão sobre a composição histológica da derme humana"
      ],
      questions: [
        { type: "histologia", q: "Qual tipo de epitélio reveste a bexiga urinária e os ureteres, mudando de formato dependendo do estado de distensão do órgão?", opts: ["Epitélio pseudoestratificado cilíndrico ciliado", "Epitélio estratificado pavimentoso queratinizado", "Epitélio de transição (urotélio)", "Epitélio simples cúbico"], ans: 2, exp: "O epitélio de transição ou urotélio é estratificado e possui células superficiais em guarda-chuva que mudam de formato para acomodar a distensão urinária." },
        { type: "histologia", q: "Qual célula do tecido conjuntivo é responsável direta pela síntese de colágeno, elastina e glicosaminoglicanos da matriz extracelular?", opts: ["Macrófago", "Fibroblasto", "Plasmócito", "Mastócito"], ans: 1, exp: "O fibroblasto é a célula mais comum do tecido conjuntivo propriamente dito, sintetizando os principais componentes fibrilares e amorfos da matriz." }
      ]
    },
    {
      title: "Tecido Muscular e Nervoso",
      cases: [
        "Microscopia óptica de tecido muscular com estrias transversais e núcleos periféricos",
        "Análise histológica de córtex cerebral de mamífero",
        "Biópsia de nervo periférico corada para mielina"
      ],
      questions: [
        { type: "histologia", q: "A presença de ramificações celulares, núcleos centralizados e discos intercalares é característica de qual tecido muscular?", opts: ["Estriado esquelético", "Estriado cardíaco", "Liso", "Mioepitelial"], ans: 1, exp: "O músculo estriado cardíaco apresenta células ramificadas, 1 ou 2 núcleos centrais e conexões juncionais especializadas denominadas discos intercalares." },
        { type: "histologia", q: "Quais células do sistema nervoso central são responsáveis pela mielinização de axônios?", opts: ["Células de Schwann", "Oligodendrócitos", "Astrócitos", "Células ependimárias"], ans: 1, exp: "No SNC, os oligodendrócitos emitem prolongamentos que mielinizam múltiplos axônios. No SNP, essa função cabe às células de Schwann." }
      ]
    }
  ],
  "Embriologia": [
    {
      title: "Fecundação e Primeira Semana",
      cases: [
        "Em laboratório de reprodução humana assistida",
        "Em seminário acadêmico sobre os estágios iniciais de desenvolvimento",
        "Ao descrever o percurso do zigoto na tuba uterina"
      ],
      questions: [
        { type: "embriologia", q: "Onde ocorre mais frequentemente o processo de fecundação em condições fisiológicas normais?", opts: ["Cavidade uterina", "Ampola da tuba uterina", "Canal cervical", "Fímbrias uterinas"], ans: 1, exp: "A fecundação ocorre tipicamente na ampola da tuba uterina, que é a porção mais larga e longa da tuba." },
        { type: "embriologia", q: "Qual estágio do desenvolvimento embrionário se implanta no endométrio materno por volta do sexto dia após a fecundação?", opts: ["Mórula", "Zigoto", "Blastocisto", "Gástrula"], ans: 2, exp: "O blastocisto, composto por embrioblasto, trofoblasto e blastocele, realiza a nidação (implantação) no endométrio ao fim da primeira semana." }
      ]
    },
    {
      title: "Gastrulação e Folhetos Embrionários",
      cases: [
        "Análise microscópica de embrião na terceira semana de desenvolvimento",
        "Pesquisa de malformações congênitas decorrentes de defeitos do tubo neural",
        "Ao estudar a formação do mesoderma extraembrionário"
      ],
      questions: [
        { type: "embriologia", q: "Qual folheto embrionário origina o sistema nervoso central, o sistema nervoso periférico e a epiderme?", opts: ["Ectoderme", "Mesoderme", "Endoderme", "Trofoblasto"], ans: 0, exp: "A ectoderme é responsável pelo desenvolvimento do sistema nervoso e das estruturas epidérmicas da pele." },
        { type: "embriologia", q: "A notocorda atua induzindo diretamente a ectoderme sobrejacente a formar qual estrutura?", opts: ["Somitos", "Placa neural", "Intestino primitivo", "Coração primitivo"], ans: 1, exp: "A notocorda secreta fatores indutores que estimulam a ectoderme sobrejacente a espessar-se e formar a placa neural, iniciando a neurulação." }
      ]
    }
  ],
  "Microbiologia": [
    {
      title: "Parede Celular e Estrutura Bacteriana",
      cases: [
        "Análise microscópica após coloração de Gram",
        "Ao testar a susceptibilidade bacteriana a beta-lactâmicos em laboratório",
        "Discussão sobre mechanisms de patogenicidade bacteriana"
      ],
      questions: [
        { type: "microbiologia", q: "Qual o principal componente da parede celular de bactérias Gram-positivas que retém o complexo cristal violeta-iodo?", opts: ["Lipopolissacarídeo (LPS)", "Peptidioglicano espesso", "Ácido teicoico", "Membrana externa fosfolipídica"], ans: 1, exp: "Bactérias Gram-positivas têm uma espessa camada de peptidioglicano (mureína) externa à membrana citoplasmática, que absorve e retém o corante violeta de genciana." },
        { type: "microbiologia", q: "Qual endotoxina componente da membrana externa de bactérias Gram-negativas induz forte liberação de citocinas inflamatórias no hospedeiro?", opts: ["Lipopolissacarídeo (LPS)", "Peptidioglicano", "Flagelina", "Ácido lipoteicoico"], ans: 0, exp: "O LPS, constituído de lipídeo A, núcleo polissacarídico e antígeno O, é a endotoxina clássica de Gram-negativas que ativa macrófagos via TLR4." }
      ]
    },
    {
      title: "Virologia e Replicação",
      cases: [
        "Análise de biologia molecular de vírus de fita simples de RNA de polaridade positiva",
        "Pesquisa sobre inibidores da replicação do vírus da imunodeficiência humana (HIV)",
        "Ao mapear a penetração de vírus envelopados em células eucarióticas"
      ],
      questions: [
        { type: "microbiologia", q: "Qual enzima é essencial para o ciclo de replicação dos retrovírus, transcrevendo o RNA viral em DNA de fita dupla?", opts: ["RNA polimerase dependente de RNA", "Transcriptase reversa", "DNA polimerase dependente de DNA", "Integrase celular"], ans: 1, exp: "A transcriptase reversa é a polimerase viral que converte o RNA genômico de fita simples em DNA de fita dupla que posteriormente se integra ao genoma do hospedeiro." },
        { type: "microbiologia", q: "O envelope que reveste certos vírus animais é adquirido primariamente de qual fonte?", opts: ["Síntese 'de novo' codificada inteiramente por genes virais", "Membrana da célula hospedeira durante o processo de brotamento", "Parede celular bacteriana residual", "Lisossomos fundidos"], ans: 1, exp: "O envelope viral é uma bicamada lipídica derivada de membranas celulares da célula hospedeira (geralmente membrana plasmática ou nuclear) modificada com glicoproteínas virais." }
      ]
    }
  ],
  "Imunologia": [
    {
      title: "Imunidade Inata e Reconhecimento",
      cases: [
        "Estudo de ativação macrofágica por ligantes bacterianos",
        "Avaliação imunológica in vitro de células dendríticas",
        "Ao analisar a resposta imune inicial contra infecção fúngica"
      ],
      questions: [
        { type: "imunologia", q: "Quais receptores da imunidade inata reconhecem padrões moleculares associados a patógenos (PAMPs)?", opts: ["Receptores de células T (TCR)", "Receptores do tipo Toll (TLRs)", "Imunoglobulinas de membrana", "Moléculas de MHC Classe II"], ans: 1, exp: "Os Receptores de Reconhecimento de Padrão (PRRs), como os receptores do tipo Toll (TLRs), reconhecem padrões conservados em patógenos (PAMPs)." },
        { type: "imunologia", q: "Qual molécula do complexo de histocompatibilidade principal (MHC) apresenta peptídeos endógenos para linfócitos T CD8+ (citotóxicos)?", opts: ["MHC Classe I", "MHC Classe II", "MHC Classe III", "CD1d"], ans: 0, exp: "O MHC de classe I é expresso em todas as células nucleadas e apresenta antígenos endógenos (como proteínas virais ou tumorais) para linfócitos T citotóxicos CD8+." }
      ]
    },
    {
      title: "Reações de Hipersensibilidade",
      cases: [
        "Paciente apresenta prurido e urticária sistêmica imediata após administração de penicilina",
        "Em estudo de glomerulonefrite pós-estreptocócica mediada por imunocomplexos",
        "Análise de reação de dermatite de contato após exposição a níquel"
      ],
      questions: [
        { type: "imunologia", q: "Qual anticorpo é responsável pela hipersensibilidade do tipo I (imediata), ligando-se a receptores Fc em mastócitos e basófilos?", opts: ["IgG", "IgM", "IgA", "IgE"], ans: 3, exp: "A IgE é a classe de anticorpo envolvida em reações alérgicas e de anafilaxia. O cross-linking da IgE ligada aos mastócitos por antígenos causa desgranulação." },
        { type: "imunologia", q: "A deposição sistêmica de imunocomplexos antígeno-anticorpo nos vasos sanguíneos caracteriza qual tipo de hipersensibilidade?", opts: ["Tipo I (Imediata)", "Tipo II (Citotóxica)", "Tipo III (Imunocomplexos)", "Tipo IV (Tardia)"], ans: 2, exp: "A hipersensibilidade do tipo III ocorre pela deposição de complexos antígeno-anticorpo solúveis em tecidos e vasos, ativando complemento e recrutando neutrófilos." }
      ]
    }
  ],
  "Genética": [
    {
      title: "Herança Mendeliana e Padrões",
      cases: [
        "Aconselhamento genético de casal consanguíneo",
        "Avaliação de heredograma com múltiplos indivíduos afetados por cegueira progressiva",
        "Ao calcular o risco de transmissão de doença recessiva ligada ao X"
      ],
      questions: [
        { type: "genetica", q: "Uma doença genética que afeta predominantemente homens, cujas mães são portadoras não afetadas, possui padrão de herança:", opts: ["Autossômica dominante", "Autossômica recessiva", "Recessiva ligada ao cromossomo X", "Mitocondrial"], ans: 2, exp: "Doenças recessivas ligadas ao X manifestam-se em homens (que são hemizigotos). Mulheres heterozigotas são tipicamente portadoras assintomáticas." },
        { type: "genetica", q: "Qual a probabilidade de um casal heterozigoto para o gene da fibrose cística (autossômica recessiva) ter um filho clinicamente afetado?", opts: ["25%", "50%", "75%", "0%"], ans: 0, exp: "Sendo ambos heterozigotos (Aa x Aa), o risco de herdar ambos os alelos recessivos (aa) e desenvolver a doença é de 1 em 4 (25%)." }
      ]
    },
    {
      title: "Mutações Cromossômicas",
      cases: [
        "Cariótipo de recém-nascido com hipotonia muscular extrema e cardiopatia congênita",
        "Ao analisar exame citogenético de gestante de 41 anos",
        "Discussão sobre erros na meiose materna levando a aneuploidias"
      ],
      questions: [
        { type: "genetica", q: "Qual alteração cromossômica numérica define o cariótipo associado à Síndrome de Down?", opts: ["Monossomia do cromossomo X", "Trissomia do cromossomo 21", "Trissomia do cromossomo 18", "Duplicação do braço curto do cromossomo 5"], ans: 1, exp: "A Síndrome de Down é causada pela presença de três cópias do cromossomo 21 (trissomia do 21), geralmente por não disjunção meiótica materna." },
        { type: "genetica", q: "O cariótipo 45,X associado a pescoço alado, baixa estatura e disgenesia gonadal em fenótipo feminino é típico de:", opts: ["Síndrome de Klinefelter", "Síndrome de Edwards", "Síndrome de Turner", "Síndrome de Patau"], ans: 2, exp: "A Síndrome de Turner é caracterizada pela monossomia do cromossomo X (45,X) em indivíduos com fenótipo feminino." }
      ]
    }
  ],
  "Farmacologia": [
    {
      title: "Farmacocinética",
      cases: [
        "Estudo de biodisponibilidade de nova formulação de analgésico",
        "Em ensaio clínico avaliando a depuração plasmática de antimicrobiano",
        "Ao calcular a dose de manutenção de fármaco hidrossolúvel"
      ],
      questions: [
        { type: "farmacologia", q: "O que define a 'biodisponibilidade' de um fármaco?", opts: ["A fração do fármaco absorvida no estômago", "A velocidade com que o fármaco é excretado pelos rins", "A fração do fármaco administrado que atinge a circulação sistêmica na forma ativa", "O grau de ligação do fármaco a proteínas plasmáticas"], ans: 2, exp: "Biodisponibilidade é a porcentagem e velocidade com que o princípio ativo de um fármaco atinge a circulação sistêmica inalterado." },
        { type: "farmacologia", q: "Qual o principal órgão responsável pelo efeito de 'primeira passagem' após administração via oral?", opts: ["Rim", "Estômago", "Fígado", "Pulmão"], ans: 2, exp: "Fármacos administrados por via oral são absorvidos no TGI e vão diretamente ao fígado pela veia porta, sofrendo metabolismo antes de atingir a circulação sistêmica (efeito de primeira passagem)." }
      ]
    },
    {
      title: "Farmacodinâmica",
      cases: [
        "Análise de curva de concentração-efeito em biologia farmacológica",
        "Ao avaliar a potência de dois agonistas do receptor beta-2",
        "Durante testes de afinidade de receptor em células isoladas"
      ],
      questions: [
        { type: "farmacologia", q: "O que ocorre com a curva de efeito de um agonista na presença de um antagonista competitivo reversível?", opts: ["A curva desloca-se para a direita, necessitando de doses maiores de agonista para atingir o efeito máximo", "A curva desloca-se para a esquerda, aumentando a potência aparente", "O efeito máximo diminui proporcionalmente sem deslocamento lateral", "A curva sofre achatamento permanente independente da dose"], ans: 0, exp: "O antagonista competitivo compete pelo mesmo sítio ativo. O aumento da dose do agonista pode superar o antagonismo, deslocando a curva para a direita (maior CE50) sem alterar o efeito máximo." },
        { type: "farmacologia", q: "Qual tipo de receptor celular possui atividade tirosina-quinase intrínseca estimulada por ligante?", opts: ["Receptor nicotínico de acetilcolina", "Receptor de insulina", "Receptor de histamina H1", "Receptor de glicocorticoides"], ans: 1, exp: "O receptor de insulina é um receptor catalítico com atividade tirosina-quinase intrínseca que se autofosforila após acoplamento do ligante." }
      ]
    }
  ],
  "Patologia": [
    {
      title: "Lesão e Morte Celular",
      cases: [
        "Biópsia de miocárdio isquêmico pós-infarto",
        "Laudo histopatológico de linfonodo mediastinal acometido por micobacteriose",
        "Ao descrever o padrão microscópico de infarto cerebral"
      ],
      questions: [
        { type: "patologia", q: "Qual tipo de necrose é tipicamente observado no parênquima cerebral após obstrução arterial isquêmica?", opts: ["Necrose de coagulação", "Necrose de liquefação", "Necrose gordurosa", "Necrose fibrinoide"], ans: 1, exp: "No SNC, a morte isquêmica tecidual resulta tipicamente em necrose de liquefação devido ao alto teor lipídico e pouca matriz de suporte." },
        { type: "patologia", q: "A necrose caracterizada por aspecto esbranquiçado semelhante a queijo, típica da tuberculose, denomina-se:", opts: ["Necrose de coagulação", "Necrose de caseificação", "Necrose de liquefação", "Necrose gangrenosa"], ans: 1, exp: "A necrose de caseificação é um padrão misto de necrose de coagulação e liquefação visto classicamente em granulomas de tuberculose." }
      ]
    },
    {
      title: "Inflamação e Reparo",
      cases: [
        "Fragmento de apêndice cecal operado por inflamação aguda nas primeiras horas",
        "Análise de tecido sob reparo cicatricial em ferida cutânea de 5 dias",
        "Exame histológico de granuloma pulmonar"
      ],
      questions: [
        { type: "patologia", q: "Qual célula inflamatória é a marca registrada e predominante do infiltrado tecidual na inflamação aguda precoce?", opts: ["Linfócito", "Neutrófilo", "Macrófago", "Plasmócito"], ans: 1, exp: "Os neutrófilos são as primeiras células a migrarem para o sítio inflamatório sob ação de quimiotaxinas na fase aguda precoce." },
        { type: "patologia", q: "Qual célula da resposta imune é precursora das células epitelioides e células gigantes multinucleadas de Langhans na inflamação granulomatosa?", opts: ["Linfócito B", "Neutrófilo", "Monócito/Macrófago", "Eosinófilo"], ans: 2, exp: "Os macrófagos ativados sob influência do IFN-gama transformam-se em macrófagos epitelioides e fundem-se para formar as células gigantes de Langhans." }
      ]
    }
  ],
  "Parasitologia": [
    {
      title: "Protozooses Intestinais e Teciduais",
      cases: [
        "Paciente com queixa de diarreia pastosa crônica e flatulência fétida",
        "Paciente apresenta dor abdominal difusa e episódios de disenteria muco sanguinolenta",
        "Análise microscópica de fezes pelo método de sedimentação espontânea"
      ],
      questions: [
        { type: "parasitologia", q: "Qual protozoário causa diarreia associada a má absorção e flatulência devido ao atapetamento mecânico da mucosa duodenal?", opts: ["Entamoeba histolytica", "Giardia lamblia", "Cryptosporidium parvum", "Balantidium coli"], ans: 1, exp: "A Giardia lamblia adere ao epitélio do intestino delgado por meio de seu disco suctor, obstruindo a absorção de nutrientes (esteatorreia)." },
        { type: "parasitologia", q: "Qual parasita intestinal apresenta potencial de invasão tecidual e pode causar abscessos hepáticos secundários?", opts: ["Entamoeba histolytica", "Giardia lamblia", "Enterobius vermicularis", "Hymenolepis nana"], ans: 0, exp: "A Entamoeba histolytica é invasiva, causa úlceras em botão de camisa no cólon e pode embolizar pela veia porta causando o abscesso hepático amebiano." }
      ]
    },
    {
      title: "Helmintíases",
      cases: [
        "Criança levada ao pediatra devido a prurido anal intenso e perturbação do sono",
        "Exame de fezes de morador de área rural revela ovos férteis de casca mamilonada rugosa",
        "Paciente com quadro de tosse seca, febre e infiltrado pulmonar migratório (Síndrome de Löffler)"
      ],
      questions: [
        { type: "parasitologia", q: "O diagnóstico do Enterobius vermicularis é comumente realizado através de qual método devido à baixa sensibilidade do EPF comum?", opts: ["Método de Kato-Katz", "Método de Hoffman", "Método da fita adesiva (método de Graham)", "Método de Baermann-Moraes"], ans: 2, exp: "O método de Graham ou da fita adesiva coleta os ovos diretamente da região perianal, onde a fêmea de Enterobius os deposita durante a noite." },
        { type: "parasitologia", q: "Qual helminto é classicamente associado à Síndrome de Löffler durante seu ciclo pulmonar obrigatório (ciclo de Loos)?", opts: ["Trichuris trichiura", "Ascaris lumbricoides", "Enterobius vermicularis", "Taenia solium"], ans: 1, exp: "As larvas de Ascaris lumbricoides (assim como as de Ancylostoma e Strongyloides) passam pelos pulmões durante seu ciclo biológico, podendo provocar tosse, eosinofilia e infiltrados pulmonares (Síndrome de Löffler)." }
      ]
    }
  ],
  "Semiologia": [
    {
      title: "Exame Físico Cardiovascular e Pulmonar",
      cases: [
        "Durante a ausculta cardíaca de paciente em decúbito dorsal",
        "Ao palpar o tórax de paciente com queixa de tosse produtiva e febre",
        "Ao inspecionar a parede torácica em busca de tiragens respiratórias"
      ],
      questions: [
        { type: "semiologia", q: "Um sopro holossistólico suave, audível em foco mitral com irradiação clássica para a axila esquerda indica:", opts: ["Estenose aórtica", "Insuficiência mitral", "Estenose mitral", "Insuficiência tricúspide"], ans: 1, exp: "O sopro da insuficiência mitral ocorre durante toda a sístole (holossistólico), é regurgitativo e irradia tipicamente para a axila esquerda." },
        { type: "semiologia", q: "Qual achado percutório e auscultatório é típico de um quadro consolidativo pulmonar localizado (ex: pneumonia)?", opts: ["Timpanismo e murmúrio vesicular preservado", "Macicez e presença de estertores crepitantes", "Hiperssonoridade e murmúrio abolido", "Submacicez e sibilos difusos"], ans: 1, exp: "A consolidação pulmonar substitui o ar alveolar por exsudato, o que gera macicez à percussão, aumento do frêmito toracovocal e estertores crepitantes na ausculta pulmonar." }
      ]
    },
    {
      title: "Exame Físico Abdominal",
      cases: [
        "Paciente com dor aguda no quadrante inferior direito do abdome",
        "Ao examinar abdome de paciente com suspeita de colecistite aguda",
        "Durante exame clínico buscando sinais de ascite volumosa"
      ],
      questions: [
        { type: "semiologia", q: "O sinal de Blumberg, caracterizado por dor aguda à descompressão súbita no ponto de McBurney, é indicativo de:", opts: ["Irritação peritoneal (ex: apendicite)", "Distensão gástrica", "Obstrução de vias biliares", "Ascite inflamatória"], ans: 0, exp: "O sinal de Blumberg indica inflamação do peritônio parietal (peritonite), comumente secundária a apendicite aguda na fossa ilíaca direita." },
        { type: "semiologia", q: "A interrupção abrupta da inspiração profunda do paciente durante a palpação profunda do rebordo costal direito é conhecida como:", opts: ["Sinal de Blumberg", "Sinal de Murphy", "Sinal de Giordano", "Sinal de Rovsing"], ans: 1, exp: "O sinal de Murphy positivo indica colecistite aguda, resultante do impacto da vesícula biliar inflamada contra a mão do examinador durante a inspiração." }
      ]
    }
  ],
  "Epidemiologia": [
    {
      title: "Delineamento de Estudos Epidemiológicos",
      cases: [
        "Ao desenhar um estudo que acompanhará expostos e não expostos ao longo de 5 anos",
        "Pesquisador analisa prontuários médicos comparando expostos a agrotóxicos e ocorrência de linfoma",
        "Ao avaliar a prevalência instantânea de hipertensão em uma comunidade"
      ],
      questions: [
        { type: "epidemiologia", q: "Qual tipo de estudo epidemiológico observational parte da causa (exposição) em direção ao efeito (desfecho), permitindo calcular incidência?", opts: ["Estudo de Caso-Controle", "Estudo de Coorte", "Estudo Transversal", "Ensaio Clínico Cruzado"], ans: 1, exp: "O estudo de coorte acompanha indivíduos expostos e não expostos ao longo do tempo para verificar a incidência da doença nos grupos." },
        { type: "epidemiologia", q: "Qual a medida de associação clássica calculada em estudos de Caso-Controle, que partem do desfecho para investigar exposições passadas?", opts: ["Risco Relativo (RR)", "Odds Ratio (Razão de chances)", "Razão de Prevalência (RP)", "Risco Atribuível (RA)"], ans: 1, exp: "Como o estudo de caso-controle não mede a incidência diretamente, a associação de risco é estimada de forma fidedigna por meio da Odds Ratio." }
      ]
    },
    {
      title: "Testes Diagnósticos",
      cases: [
        "Ao testar a acurácia de um novo imunoensaio rápido em população triada",
        "Pesquisador avalia o número de novos casos de sarampo registrados em um surto",
        "Durante cálculo de valor preditivo em laboratório de epidemiologia clínica"
      ],
      questions: [
        { type: "epidemiologia", q: "O conceito que define a capacidade de um teste diagnóstico identificar corretamente os verdadeiros doentes é chamado:", opts: ["Especificidade", "Sensibilidade", "Valor Preditivo Positivo", "Acurácia global"], ans: 1, exp: "A sensibilidade de um teste diagnóstico é a proporção de resultados positivos entre aqueles que realmente apresentam a doença." },
        { type: "epidemiologia", q: "A proporção de resultados verdadeiramente positivos entre todos os resultados positivos fornecidos por um teste diagnóstico define o:", opts: ["Valor Preditivo Positivo (VPP)", "Valor Preditivo Negativo (VPN)", "Sensibilidade", "Especificidade"], ans: 0, exp: "O VPP expressa a probabilidade de um indivíduo com teste positivo realmente estar doente, sendo muito influenciado pela prevalência da doença na população." }
      ]
    }
  ]
};

function getVariedBasicoText(baseCase: string, index: number): string {
  let text = baseCase;

  const age = 18 + (index % 58);
  if (text.includes("Paciente")) {
    text = text.replace("Paciente", `Paciente de ${age} anos`);
  } else if (text.includes("Durante")) {
    text = `Paciente de ${age} anos atendido. ` + text;
  } else if (text.includes("Ao")) {
    text = `Em análise clínica de paciente de ${age} anos. ` + text;
  }

  const variations = [
    ", no contexto de uma avaliação acadêmica de monitoria.",
    ", durante simulação em laboratório de habilidades médicas.",
    ", observado em um caso clínico discutido no seminário integrado.",
    ", registrado nos arquivos de pesquisa do departamento de patologia celular.",
    ", analisado na reunião clínica multidisciplinar.",
    ", apresentado em um painel do congresso de especialidades.",
    ", durante estudo dirigido em grupo de tutoria acadêmica.",
    ", sob supervisão direta do professor adjunto da disciplina.",
    ", conforme descrito em diretrizes e atlas de referência.",
    ", corroborado por achados em modelo anatômico tridimensional de alta fidelidade."
  ];

  text = text.trim();
  if (text.endsWith(".") || text.endsWith(",")) {
    text = text.slice(0, -1);
  }

  text = text + variations[index % variations.length];
  return text;
}

export function generateBasicoQuestions(): Question[] {
  const result: Question[] = [];

  for (const subject of SUBJECTS_BASICO) {
    const data = TOPICS_BASICO[subject];
    if (!data) continue;
    let idCounter = 1;

    for (let i = 0; i < 200; i++) {
      const topicIndex = i % data.length;
      const topic = data[topicIndex];

      const qIndex = i % topic.questions.length;
      const baseQ = topic.questions[qIndex];

      const caseIndex = i % topic.cases.length;
      const baseCase = topic.cases[caseIndex];

      const variedCase = getVariedBasicoText(baseCase, i);

      result.push({
        id: `basico_${subject.toLowerCase().replace(/[^a-z]/g, "")}_q${idCounter++}`,
        cycle: "Ciclo Básico",
        subject: subject,
        subSubject: topic.title,
        banca: "Trilha Estudante",
        year: 2026 - (i % 5),
        text: `${variedCase}\n\n${baseQ.q}`,
        options: baseQ.opts,
        correctIndex: baseQ.ans,
        explanation: baseQ.exp,
        difficulty: "medium"
      });
    }
  }

  return result;
}

export const BASICO_QUESTIONS = generateBasicoQuestions();
