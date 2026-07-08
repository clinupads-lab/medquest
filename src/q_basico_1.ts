export const Q_BASICO_1: any[] = [
  // ─── FISIOLOGIA ────────────────────────────────────────────────────────
  {
    id: 'est_fisio_001',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'Qual é o potencial de repouso típico de uma célula nervosa?',
    options: ['-70 mV', '+30 mV', '-90 mV', '0 mV'],
    correctIndex: 0,
    explanation: 'O potencial de repouso da membrana neuronal é aproximadamente -70 mV, mantido principalmente pela bomba Na⁺/K⁺-ATPase e pela maior permeabilidade ao K⁺.'
  },
  {
    id: 'est_fisio_002',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'Durante o potencial de ação, qual evento ocorre na fase de despolarização?',
    options: [
      'Abertura de canais de Na⁺ voltagem-dependentes',
      'Abertura de canais de K⁺ voltagem-dependentes',
      'Fechamento de canais de Na⁺',
      'Ativação da bomba Na⁺/K⁺'
    ],
    correctIndex: 0,
    explanation: 'A despolarização é causada pela abertura rápida de canais de Na⁺ voltagem-dependentes, permitindo a entrada de Na⁺ e tornando o interior da célula positivo.'
  },
  {
    id: 'est_fisio_003',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O período refratário absoluto ocorre porque:',
    options: [
      'Os canais de Na⁺ estão inativados e não podem ser reabertos independentemente do estímulo',
      'Os canais de K⁺ estão fechados',
      'A bomba Na⁺/K⁺ está superativa',
      'O potencial de membrana está acima do limiar'
    ],
    correctIndex: 0,
    explanation: 'No período refratário absoluto, os canais de Na⁺ estão na conformação inativada (portão h fechado), sendo impossível gerar novo potencial de ação independente da intensidade do estímulo.'
  },
  {
    id: 'est_fisio_004',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'Qual é a principal força que impulsiona a filtração glomerular?',
    options: [
      'Pressão hidrostática do capilar glomerular',
      'Pressão oncótica do plasma',
      'Pressão hidrostática da cápsula de Bowman',
      'Pressão osmótica do filtrado'
    ],
    correctIndex: 0,
    explanation: 'A filtração glomerular é impulsionada pela pressão hidrostática do capilar glomerular (~60 mmHg), que supera as forças opostas (pressão oncótica plasmática ~28 mmHg + pressão hidrostática da cápsula ~18 mmHg).'
  },
  {
    id: 'est_fisio_005',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'A Taxa de Filtração Glomerular (TFG) normal em adulto é aproximadamente:',
    options: ['125 mL/min', '60 mL/min', '180 mL/min', '30 mL/min'],
    correctIndex: 0,
    explanation: 'A TFG normal é ~125 mL/min (180 L/dia), sendo quase todo o filtrado reabsorvido nos túbulos renais, resultando em apenas 1,5 L de urina por dia.'
  },
  {
    id: 'est_fisio_006',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O mecanismo de contrapressão multiplicador na alça de Henle é responsável por:',
    options: [
      'Criar gradiente osmótico na medula renal para concentrar urina',
      'Reabsorver glicose no túbulo proximal',
      'Secretar K⁺ no túbulo distal',
      'Regular a TFG pelo feedback tubuloglomerular'
    ],
    correctIndex: 0,
    explanation: 'O mecanismo de contrapressão multiplicador na alça de Henle cria um gradiente osmótico progressivo na medula renal (300 a 1200 mOsm/kg), essencial para a concentração da urina.'
  },
  {
    id: 'est_fisio_007',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O débito cardíaco é definido como:',
    options: [
      'Volume sistólico × frequência cardíaca',
      'Pressão arterial média × resistência vascular sistêmica',
      'Volume diastólico final − volume sistólico final',
      'Pressão de pulso × frequência cardíaca'
    ],
    correctIndex: 0,
    explanation: 'Débito cardíaco (DC) = Volume sistólico (VS) × Frequência cardíaca (FC). Em repouso, DC ≈ 70 mL × 70 bpm = ~5 L/min.'
  },
  {
    id: 'est_fisio_008',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'A Lei de Frank-Starling descreve que:',
    options: [
      'O coração bombeará mais sangue quanto mais for preenchido durante a diástole (dentro de limites fisiológicos)',
      'A frequência cardíaca aumenta conforme o volume de ejeção diminui',
      'A resistência vascular periférica determina diretamente o volume sistólico',
      'O débito cardíaco independe do retorno venoso'
    ],
    correctIndex: 0,
    explanation: 'Pela Lei de Frank-Starling, o aumento do comprimento das fibras miocárdicas (maior pré-carga) aumenta a força de contração e o volume sistólico, adaptando o coração ao aumento do retorno venoso.'
  },
  {
    id: 'est_fisio_009',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O principal tampão do líquido extracelular é:',
    options: [
      'Bicarbonato/ácido carbônico (HCO₃⁻/H₂CO₃)',
      'Fosfato (HPO₄²⁻/H₂PO₄⁻)',
      'Proteínas plasmáticas',
      'Hemoglobina'
    ],
    correctIndex: 0,
    explanation: 'O sistema bicarbonato/ácido carbônico é o principal tampão do LEC, pois seus componentes são regulados separadamente pelo pulmão (CO₂) e rim (HCO₃⁻), conferindo capacidade tamponante eficiente.'
  },
  {
    id: 'est_fisio_010',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'A equação de Henderson-Hasselbalch para o sistema bicarbonato é:',
    options: [
      'pH = 6,1 + log ([HCO₃⁻] / 0,03 × PCO₂)',
      'pH = 7,4 + log (PCO₂ / [HCO₃⁻])',
      'pH = pKa − log ([ácido] / [base])',
      'pH = 6,1 × ([HCO₃⁻] / PCO₂)'
    ],
    correctIndex: 0,
    explanation: 'A equação de Henderson-Hasselbalch: pH = pKa + log ([HCO₃⁻] / [H₂CO₃]). Como [H₂CO₃] = 0,03 × PCO₂, fica pH = 6,1 + log ([HCO₃⁻] / 0,03 × PCO₂).'
  },
  {
    id: 'est_fisio_011',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'Qual hormônio aumenta a reabsorção de Na⁺ no túbulo coletor renal?',
    options: ['Aldosterona', 'ADH', 'PTH', 'Angiotensina I'],
    correctIndex: 0,
    explanation: 'A aldosterona, produzida no córtex suprarrenal, atua no túbulo coletor e distal aumentando a expressão de canais de Na⁺ (ENaC) e da bomba Na⁺/K⁺-ATPase, promovendo reabsorção de Na⁺ e excreção de K⁺.'
  },
  {
    id: 'est_fisio_012',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O ADH (vasopressina) age principalmente para:',
    options: [
      'Aumentar a permeabilidade à água no ducto coletor renal',
      'Aumentar a excreção de sódio',
      'Estimular a produção de aldosterona',
      'Reduzir a TFG'
    ],
    correctIndex: 0,
    explanation: 'O ADH (hormônio antidiurético) liga-se a receptores V2 no ducto coletor, ativando adenilato ciclase e inserindo aquaporina-2 (AQP2) na membrana luminal, aumentando a reabsorção de água.'
  },
  {
    id: 'est_fisio_013',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'A ventilação alveolar é calculada como:',
    options: [
      '(Volume corrente − espaço morto) × frequência respiratória',
      'Volume corrente × frequência respiratória',
      'Capacidade residual funcional − volume residual',
      'Capacidade vital × frequência respiratória'
    ],
    correctIndex: 0,
    explanation: 'Ventilação alveolar = (VC − espaço morto anatômico) × FR. Com VC=500 mL, espaço morto=150 mL e FR=12/min: VA = 350 × 12 = 4.200 mL/min.'
  },
  {
    id: 'est_fisio_014',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'A curva de dissociação da oxiemoglobina desloca para a direita (efeito Bohr) com:',
    options: [
      'Aumento de CO₂, temperatura e 2,3-DPG',
      'Diminuição de CO₂ e temperatura',
      'Alcalose respiratória',
      'Aumento do pH'
    ],
    correctIndex: 0,
    explanation: 'O desvio à direita da curva OxiHb (maior liberação de O₂ aos tecidos) ocorre com ↑CO₂, ↑temperatura, ↑2,3-DPG e ↓pH (acidose) — condições encontradas nos tecidos metabolicamente ativos.'
  },
  {
    id: 'est_fisio_015',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O principal estímulo para a secreção de insulina pelo pâncreas é:',
    options: [
      'Aumento da glicemia',
      'Queda da glicemia',
      'Aumento do glucagon',
      'Estímulo adrenérgico α'
    ],
    correctIndex: 0,
    explanation: 'A hiperglicemia é o principal estímulo para secreção de insulina pelas células β. O metabolismo da glicose nas células β fecha canais de K⁺-ATP, despolarizando a membrana e abrindo canais de Ca²⁺, resultando em exocitose de insulina.'
  },
  {
    id: 'est_fisio_016',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O hormônio responsável pela elevação do cálcio sérico ao estimular a reabsorção óssea e a absorção intestinal de Ca²⁺ é:',
    options: [
      'PTH (paratormônio)',
      'Calcitonina',
      'Cortisol',
      'Aldosterona'
    ],
    correctIndex: 0,
    explanation: 'O PTH, produzido pelas paratireoides em resposta à hipocalcemia, eleva o Ca²⁺ sérico por: reabsorção óssea, reabsorção renal de Ca²⁺, e ativação da vitamina D (↑ absorção intestinal de Ca²⁺).'
  },
  {
    id: 'est_fisio_017',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O mecanismo de contração do músculo esquelético envolve:',
    options: [
      'Ligação do Ca²⁺ à troponina C, que remove a inibição da actina pela tropomiosina',
      'Ligação do Ca²⁺ à miosina, ativando sua atividade ATPásica diretamente',
      'Abertura de canais de Na⁺ no retículo sarcoplasmático',
      'Despolarização direta dos filamentos de actina'
    ],
    correctIndex: 0,
    explanation: 'O Ca²⁺ liberado do retículo sarcoplasmático liga-se à troponina C do complexo troponina, que altera a posição da tropomiosina, expondo os sítios de ligação da actina para as cabeças de miosina, iniciando a contração.'
  },
  {
    id: 'est_fisio_018',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O receptor de estiramento muscular (fuso neuromuscular) detecta:',
    options: [
      'Comprimento e variação do comprimento do músculo',
      'Tensão gerada pelo músculo',
      'Velocidade de contração apenas',
      'Temperatura muscular'
    ],
    correctIndex: 0,
    explanation: 'Os fusos neuromusculares (fibras intrafusais), inervados por fibras Ia e II, detectam o comprimento do músculo e a velocidade de mudança do comprimento, mediando o reflexo miotático (reflexo de estiramento).'
  },
  {
    id: 'est_fisio_019',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'Qual é a fase do ciclo cardíaco em que a pressão ventricular é mais alta?',
    options: [
      'Ejeção ventricular (sístole)',
      'Enchimento ventricular rápido (diástole)',
      'Relaxamento isovolumétrico',
      'Contração isovolumétrica'
    ],
    correctIndex: 0,
    explanation: 'A pressão ventricular atinge seu máximo durante a fase de ejeção (sístole), quando o ventrículo está contraindo e ejetando sangue para a aorta, com pressão chegando a ~120 mmHg no VE.'
  },
  {
    id: 'est_fisio_020',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O reflexo barorreceptor é ativado quando:',
    options: [
      'Há aumento da pressão arterial, levando à redução da FC e vasodilatação',
      'Há queda da pressão arterial, levando à redução da FC',
      'Há aumento da osmolaridade plasmática',
      'Há hipoxemia'
    ],
    correctIndex: 0,
    explanation: 'Os barorreceptores do seio carotídeo e arco aórtico respondem ao estiramento causado pela hipertensão: enviam sinais ao centro cardiovascular, resultando em aumento do tônus parassimpático (↓FC) e redução do simpático (vasodilatação, ↓força de contração).'
  },
  {
    id: 'est_fisio_021',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'A pressão coloidosmótica (oncótica) do plasma é gerada principalmente por:',
    options: ['Albumina', 'Globulinas', 'Fibrinogênio', 'Hemoglobina'],
    correctIndex: 0,
    explanation: 'A albumina, pela sua abundância (~60% das proteínas plasmáticas) e baixo peso molecular relativo, é responsável por ~80% da pressão oncótica plasmática (~25 mmHg total).'
  },
  {
    id: 'est_fisio_022',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O transporte ativo primário difere do transporte ativo secundário porque:',
    options: [
      'Usa diretamente energia do ATP para transportar substâncias contra gradiente',
      'Usa o gradiente de Na⁺ gerado por outros transportadores',
      'Não gasta energia celular',
      'Ocorre apenas em células musculares'
    ],
    correctIndex: 0,
    explanation: 'O transporte ativo primário usa diretamente a hidrólise do ATP (ex: bomba Na⁺/K⁺-ATPase), enquanto o secundário usa a energia do gradiente eletroquímico de Na⁺ gerado pela bomba primária (ex: cotransportador Na⁺-glicose).'
  },
  {
    id: 'est_fisio_023',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'Qual dos seguintes hormônios tem ação hiperglicemiante?',
    options: ['Glucagon', 'Insulina', 'IGF-1', 'GIP'],
    correctIndex: 0,
    explanation: 'O glucagon, secretado pelas células α do pâncreas em resposta à hipoglicemia, estimula a glicogenólise e gliconeogênese hepática, elevando a glicemia. Insulina, IGF-1 e GIP têm efeitos hipoglicemiantes ou anabólicos.'
  },
  {
    id: 'est_fisio_024',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O centro respiratório bulbar regula a respiração principalmente por:',
    options: [
      'Detecção de variações na PCO₂ e pH do liquor cerebrospinal',
      'Detecção de variações na PO₂ arterial apenas',
      'Impulsos voluntários do córtex motor',
      'Reflexos de Hering-Breuer exclusivamente'
    ],
    correctIndex: 0,
    explanation: 'Quimiorreceptores centrais na medula oblonga detectam variações no pH/PCO₂ do LCR (que refletem a PCO₂ arterial) — principal controle da ventilação. Os quimiorreceptores periféricos (corpo carotídeo) respondem principalmente à PO₂ arterial.'
  },
  {
    id: 'est_fisio_025',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'A capacidade pulmonar total (CPT) é a soma de:',
    options: [
      'Capacidade vital + volume residual',
      'Volume corrente + volume de reserva inspiratória',
      'Capacidade residual funcional + volume de reserva expiratória',
      'Volume residual + volume de reserva expiratória + volume corrente'
    ],
    correctIndex: 0,
    explanation: 'CPT = CV + VR = (VRI + VC + VRE) + VR. Em adulto: CPT ≈ 5.800 mL (CV ≈ 4.600 mL + VR ≈ 1.200 mL). Não pode ser medida por espirometria simples; requer diluição de gás ou pletismografia.'
  },
  {
    id: 'est_fisio_026',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'A condução do potencial de ação no neurônio mielinizado ocorre de forma:',
    options: [
      'Saltatória, saltando de nodo de Ranvier em nodo de Ranvier',
      'Contínua, ao longo de toda a membrana axonal',
      'Bidirecional, em ambas as direções simultaneamente',
      'Decremental, perdendo amplitude ao longo do axônio'
    ],
    correctIndex: 0,
    explanation: 'Nos axônios mielinizados, a corrente iônica salta dos nodos de Ranvier (sem mielina), conduzindo o impulso de forma saltatória — muito mais rápida e energeticamente eficiente que a condução contínua dos axônios não mielinizados.'
  },
  {
    id: 'est_fisio_027',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O principal mecanismo de reabsorção de glicose nos rins ocorre no:',
    options: [
      'Túbulo proximal, por cotransporte Na⁺-glicose (SGLT)',
      'Alça de Henle ascendente',
      'Túbulo coletor',
      'Cápsula de Bowman'
    ],
    correctIndex: 0,
    explanation: 'Quase toda a glicose filtrada (≈180 g/dia) é reabsorvida no túbulo contorcido proximal pelo cotransportador SGLT2 (segmento S1, alta capacidade) e SGLT1 (segmento S3). O limiar renal de glicose é ~180 mg/dL.'
  },
  {
    id: 'est_fisio_028',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O potencial de ação cardíaco das células do nó sinoatrial (SA) se diferencia do neuronal por:',
    options: [
      'Apresentar fase de despolarização espontânea (fase 4) e ser dependente de corrente If (corrente engraçada)',
      'Ter fase de platô dependente de Na⁺',
      'Não apresentar período refratário',
      'Ter duração de apenas 1-2 ms'
    ],
    correctIndex: 0,
    explanation: 'O nodo SA apresenta automaticidade pela corrente If (corrente de marca-passo) que permite entrada de Na⁺/K⁺ durante a fase 4, despolarizando espontaneamente. A despolarização rápida depende de Ca²⁺ (não Na⁺).'
  },
  {
    id: 'est_fisio_029',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'O hormônio do crescimento (GH) tem como principal mediador de seus efeitos anabólicos:',
    options: ['IGF-1 (fator de crescimento semelhante à insulina)', 'Cortisol', 'T₃/T₄', 'FSH'],
    correctIndex: 0,
    explanation: 'O GH estimula o fígado (e outros tecidos) a produzir IGF-1 (somatomedina C), que medeia a maioria dos efeitos anabólicos do GH: crescimento ósseo e muscular, síntese proteica. O GH também tem efeitos diretos hiperglicemiantes (antagonismo à insulina).'
  },
  {
    id: 'est_fisio_030',
    cycle: 'Ciclo Básico',
    subject: 'Fisiologia',
    text: 'A hemostasia primária envolve:',
    options: [
      'Vasoconstrição reflexa e formação do tampão plaquetário (plaquetas se aderem ao colágeno subendotelial)',
      'Ativação da cascata de coagulação e formação de fibrina',
      'Lise do coágulo pela plasmina',
      'Produção de fatores de coagulação pelo fígado'
    ],
    correctIndex: 0,
    explanation: 'A hemostasia primária compreende vasoconstrição local e formação do tampão plaquetário (adesão via fator de von Willebrand e glicoproteína Ib, ativação, agregação via GPIIb/IIIa). A hemostasia secundária envolve a cascata de coagulação.'
  },
  // ─── BIOQUÍMICA ────────────────────────────────────────────────────────
  {
    id: 'est_bioquim_001',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A glicólise ocorre no citoplasma e converte uma molécula de glicose em:',
    options: [
      '2 piruvato + 2 ATP + 2 NADH',
      '2 acetil-CoA + 4 CO₂ + 8 NADH',
      '2 lactato + 4 ATP',
      '6 CO₂ + 6 H₂O + 36 ATP'
    ],
    correctIndex: 0,
    explanation: 'A glicólise (via Embden-Meyerhof) converte glicose (6C) em 2 piruvato (3C) com saldo de 2 ATP e 2 NADH por molécula de glicose, ocorrendo no citoplasma.'
  },
  {
    id: 'est_bioquim_002',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'O ciclo de Krebs (ácido cítrico) ocorre na:',
    options: [
      'Matriz mitocondrial',
      'Membrana interna da mitocôndria',
      'Citoplasma',
      'Retículo endoplasmático'
    ],
    correctIndex: 0,
    explanation: 'O ciclo de Krebs ocorre na matriz mitocondrial. Por volta completo do ciclo: 1 acetil-CoA → 2 CO₂ + 3 NADH + 1 FADH₂ + 1 GTP.'
  },
  {
    id: 'est_bioquim_003',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A enzima que catalisa a etapa irreversível de comprometimento da glicólise é:',
    options: [
      'Fosfofrutoquinase-1 (PFK-1)',
      'Hexoquinase',
      'Piruvato quinase',
      'Fosfoglicose isomerase'
    ],
    correctIndex: 0,
    explanation: 'A PFK-1 catalisa a fosforilação da frutose-6-fosfato em frutose-1,6-bisfosfato, sendo o principal ponto de controle da glicólise. É alostericamente inibida por ATP/citrato e ativada por AMP/ADP e frutose-2,6-bisfosfato.'
  },
  {
    id: 'est_bioquim_004',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A beta-oxidação dos ácidos graxos resulta em:',
    options: [
      'Acetil-CoA + FADH₂ + NADH por ciclo de 2 carbonos',
      'Glicose + NADH',
      'Piruvato + ATP',
      'Corpos cetônicos apenas'
    ],
    correctIndex: 0,
    explanation: 'Cada ciclo de beta-oxidação remove 2 carbonos do ácido graxo na forma de acetil-CoA, produzindo também 1 FADH₂ e 1 NADH. O acetil-CoA entra no ciclo de Krebs para oxidação completa.'
  },
  {
    id: 'est_bioquim_005',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'Os corpos cetônicos são sintetizados principalmente no:',
    options: ['Fígado (mitocôndria hepática)', 'Músculo esquelético', 'Rim', 'Tecido adiposo'],
    correctIndex: 0,
    explanation: 'A cetogênese ocorre na mitocôndria hepática, a partir do acetil-CoA (excesso). Os corpos cetônicos (β-hidroxibutirato, acetoacetato, acetona) são exportados para uso como combustível no cérebro, músculo e coração em jejum prolongado.'
  },
  {
    id: 'est_bioquim_006',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'O nucleotídeo adenosina trifosfato (ATP) é considerado a "moeda energética" da célula porque:',
    options: [
      'Sua hidrólise libera energia livre que pode ser acoplada a reações endergônicas',
      'É o principal carreador de elétrons na cadeia respiratória',
      'Atua como coenzima em todas as reações enzimáticas',
      'É o único combustível utilizado pelo cérebro'
    ],
    correctIndex: 0,
    explanation: 'A hidrólise do ATP em ADP + Pi libera ~30,5 kJ/mol de energia livre (ΔG° = -30,5 kJ/mol), que pode ser acoplada a reações termodinamicamente desfavoráveis, tornando-as espontâneas.'
  },
  {
    id: 'est_bioquim_007',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A enzima que une aminoácidos durante a síntese proteica na ribossomo é:',
    options: ['Peptidiltransferase (RNA ribossomal 23S/28S)', 'DNA polimerase', 'RNA polimerase', 'Ligase'],
    correctIndex: 0,
    explanation: 'A atividade peptidiltransferase é exercida pelo RNA ribossomal 23S (procariotos) ou 28S (eucariotos) no sítio P do ribossomo, catalisando a formação da ligação peptídica entre aminoácidos.'
  },
  {
    id: 'est_bioquim_008',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A vitamina B12 (cobalamina) é cofator essencial para:',
    options: [
      'Metionina sintase (ciclo do folato/metilação) e metilmalonil-CoA mutase',
      'Piruvato descarboxilase',
      'Glicose-6-fosfato desidrogenase',
      'HMG-CoA redutase'
    ],
    correctIndex: 0,
    explanation: 'A vitamina B12 é cofator de: (1) Metionina sintase — converte homocisteína em metionina (déficit acumula homocisteína e folato como 5-metilTHF); (2) Metilmalonil-CoA mutase — déficit causa acúmulo de ácido metilmalônico (marcador de deficiência).'
  },
  {
    id: 'est_bioquim_009',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A fosforilação oxidativa ocorre na:',
    options: [
      'Membrana interna mitocondrial (cristas)',
      'Matriz mitocondrial',
      'Membrana plasmática',
      'Retículo endoplasmático liso'
    ],
    correctIndex: 0,
    explanation: 'Os complexos da cadeia respiratória (I, II, III, IV) e a ATP sintase (complexo V) estão na membrana interna mitocondrial. O gradiente de prótons (força próton-motriz) gerado pelos complexos I, III e IV impulsiona a síntese de ATP pelo complexo V.'
  },
  {
    id: 'est_bioquim_010',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'O colesterol é sintetizado a partir de:',
    options: ['Acetil-CoA, via HMG-CoA e mevalonato', 'Glicose diretamente', 'Aminoácidos apenas', 'Ácidos graxos de cadeia longa'],
    correctIndex: 0,
    explanation: 'A biossíntese do colesterol ocorre principalmente no fígado: Acetil-CoA → HMG-CoA → (HMG-CoA redutase, alvo das estatinas) → Mevalonato → Esqualeno → Colesterol.'
  },
  {
    id: 'est_bioquim_011',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A via das pentoses fosfato (vias das hexoses monofosfato) é importante principalmente para:',
    options: [
      'Produção de NADPH e ribose-5-fosfato (precursor de nucleotídeos)',
      'Síntese de ATP aeróbica',
      'Oxidação de ácidos graxos',
      'Síntese de glicogênio'
    ],
    correctIndex: 0,
    explanation: 'A via das pentoses gera: NADPH (necessário para biossíntese de ácidos graxos, esteroides, e defesa antioxidante via glutationa redutase) e ribose-5-fosfato (esqueleto de nucleotídeos e ácidos nucleicos).'
  },
  {
    id: 'est_bioquim_012',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A deficiência de G6PD (glicose-6-fosfato desidrogenase) causa:',
    options: [
      'Anemia hemolítica em resposta a oxidantes (antimalariais, favas, infecções)',
      'Doença de armazenamento de glicogênio',
      'Hipoglicemia de jejum',
      'Acidose láctica'
    ],
    correctIndex: 0,
    explanation: 'Sem G6PD, as hemácias não produzem NADPH suficiente, não podendo regenerar glutationa reduzida. Na exposição a oxidantes, a hemoglobina oxida (corpúsculos de Heinz) e as hemácias são destruídas (anemia hemolítica episódica).'
  },
  {
    id: 'est_bioquim_013',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'As enzimas alostéricas diferem das enzimas de cinética de Michaelis-Menten porque:',
    options: [
      'Apresentam curva de velocidade sigmoide (cooperatividade) e são reguladas por moduladores que atuam em sítios distintos do ativo',
      'Têm somente um sítio de ligação ao substrato',
      'Não são reguladas por produtos finais',
      'Seguem sempre a equação de Michaelis-Menten com Km fixo'
    ],
    correctIndex: 0,
    explanation: 'Enzimas alostéricas (ex: PFK-1, ATCase) possuem múltiplas subunidades com cooperatividade (curva sigmoide). Moduladores alostéricos positivos ou negativos ligam-se em sítios regulatórios, alterando a conformação (R↔T) e a atividade enzimática.'
  },
  {
    id: 'est_bioquim_014',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'O DNA é replicado de forma:',
    options: [
      'Semiconservativa (cada fita parental serve de molde para uma nova fita)',
      'Conservativa (a dupla hélice parental é mantida intacta)',
      'Dispersiva (fragmentos parentais se distribuem aleatoriamente nas moléculas filhas)',
      'Linear somente em procariotos'
    ],
    correctIndex: 0,
    explanation: 'Experimento de Meselson-Stahl (1958) demonstrou replicação semiconservativa: cada dupla hélice filha contém uma fita parental e uma nova, resultado da separação das fitas e síntese pela DNA polimerase usando cada fita como molde.'
  },
  {
    id: 'est_bioquim_015',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A transcrição do DNA em RNA mensageiro em eucariotos ocorre:',
    options: ['No núcleo, pela RNA polimerase II', 'No citoplasma', 'Na mitocôndria pela RNA polimerase I', 'No ribossomo'],
    correctIndex: 0,
    explanation: 'Em eucariotos, a RNA polimerase II transcreve genes que codificam proteínas no núcleo. O pré-mRNA sofre processamento (5\' cap, poliadenilação, splicing) antes de ser exportado ao citoplasma para tradução.'
  },
  {
    id: 'est_bioquim_016',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A concentração plasmática de LDL reflete principalmente:',
    options: [
      'O colesterol transportado do fígado para os tecidos periféricos',
      'O colesterol transportado dos tecidos periféricos ao fígado',
      'Os triglicerídeos absorvidos pelo intestino',
      'O colesterol sintetizado pelo intestino'
    ],
    correctIndex: 0,
    explanation: 'LDL (lipoproteína de baixa densidade) é a forma predominante de transporte do colesterol do fígado para os tecidos periféricos. HDL faz o transporte reverso (periférico → fígado). LDL elevado está associado a risco cardiovascular.'
  },
  {
    id: 'est_bioquim_017',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A fenilcetonúria (PKU) resulta da deficiência de:',
    options: [
      'Fenilalanina hidroxilase (que converte Phe em Tir)',
      'Tirosinase',
      'Homogentisato oxidase',
      'Glutamato desidrogenase'
    ],
    correctIndex: 0,
    explanation: 'Na PKU, a deficiência de fenilalanina hidroxilase (ou de seu cofator BH4) acumula fenilalanina, que é convertida a fenilpiruvato e fenilacetato. O acúmulo prejudica o desenvolvimento do SNC se não tratado com dieta pobre em Phe.'
  },
  {
    id: 'est_bioquim_018',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'Os ácidos graxos essenciais incluem:',
    options: [
      'Ácido linoleico (ω-6) e ácido α-linolênico (ω-3)',
      'Ácido palmítico e ácido esteárico',
      'Ácido oleico e ácido araquidônico',
      'Ácido mirístico e ácido láurico'
    ],
    correctIndex: 0,
    explanation: 'Os ácidos graxos essenciais são os que o organismo não consegue sintetizar: ácido linoleico (C18:2, ω-6) e ácido α-linolênico (C18:3, ω-3). São precursores de ácido araquidônico (ω-6) e EPA/DHA (ω-3).'
  },
  {
    id: 'est_bioquim_019',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A gliconeogênese hepática é estimulada principalmente por:',
    options: ['Glucagon e cortisol (em jejum e estresse)', 'Insulina', 'Glicose elevada', 'Acetil-CoA baixo'],
    correctIndex: 0,
    explanation: 'Em jejum, o glucagon ativa a gliconeogênese hepática (frutose-1,6-bisfosfatase, PEPCK) a partir de substratos como lactato, alanina, glicerol e glutamina. O cortisol também estimula em situações de estresse.'
  },
  {
    id: 'est_bioquim_020',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'O aminoácido que é o principal carreador de nitrogênio do músculo para o fígado é:',
    options: ['Alanina', 'Glutamina', 'Glicina', 'Arginina'],
    correctIndex: 0,
    explanation: 'O ciclo glicose-alanina: o músculo transaminase o piruvato com glutamato → alanina, que é transportada ao fígado. Lá, a alanina aminotransferase (ALT) converte alanina de volta em piruvato (gliconeogênese) e glutamato → ureia via ciclo da ureia.'
  },
  {
    id: 'est_bioquim_021',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'O ciclo da ureia tem função de:',
    options: [
      'Converter o nitrogênio tóxico (NH₄⁺) dos aminoácidos em ureia para excreção renal',
      'Sintetizar arginina para a síntese de óxido nítrico apenas',
      'Fornecer ATP para a gliconeogênese',
      'Reciclar ácidos graxos de cadeia longa'
    ],
    correctIndex: 0,
    explanation: 'O ciclo da ureia ocorre no fígado (parcialmente na mitocôndria, parcialmente no citoplasma) e é o principal mecanismo de destoxificação da amônia, convertendo NH₄⁺ + CO₂ + aspartato → ureia + fumarato + água.'
  },
  {
    id: 'est_bioquim_022',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'O sinal de endereçamento de proteínas ao retículo endoplasmático rugoso é:',
    options: [
      'Sequência sinal hidrofóbica na porção N-terminal da proteína',
      'Sequência de localização nuclear',
      'Glicosilação na porção C-terminal',
      'Fosforilação em resíduos de serina'
    ],
    correctIndex: 0,
    explanation: 'Proteínas destinadas ao RER (secretadas ou para membranas) possuem sequência sinal no N-terminal reconhecida pelo SRP (partícula de reconhecimento de sinal), que direciona o ribossomo ao RER para tradução co-translacional.'
  },
  {
    id: 'est_bioquim_023',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A inibição competitiva de uma enzima pode ser superada:',
    options: [
      'Aumentando a concentração de substrato (a Vmáx permanece inalterada)',
      'Aumentando a concentração do inibidor',
      'Diminuindo o pH do meio',
      'Adicionando cofatores metálicos'
    ],
    correctIndex: 0,
    explanation: 'Na inibição competitiva, o inibidor compete com o substrato pelo sítio ativo. O aumento da [substrato] pode deslocar o inibidor, restaurando a atividade. A Vmáx não se altera, mas o Km aparente aumenta (menor afinidade aparente pelo substrato).'
  },
  {
    id: 'est_bioquim_024',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A síntese de ácidos graxos de novo ocorre principalmente no:',
    options: [
      'Citoplasma, usando malonil-CoA e NADPH',
      'Mitocôndria, usando acetil-CoA diretamente',
      'Peroxissomo',
      'Retículo endoplasmático'
    ],
    correctIndex: 0,
    explanation: 'A lipogênese de novo ocorre no citoplasma. O acetil-CoA mitocondrial é exportado como citrato, reconvertido a acetil-CoA no citoplasma pela ATP-citrato liase. A enzima ácido graxo sintase (FAS) usa malonil-CoA e NADPH (da via das pentoses).'
  },
  {
    id: 'est_bioquim_025',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A hemoglobina S (HbS) difere da HbA por uma mutação que substitui:',
    options: [
      'Ácido glutâmico por valina na posição 6 da cadeia beta (Glu→Val, GAG→GTG)',
      'Valina por alanina na cadeia alfa',
      'Lisina por arginina na posição 6',
      'Glicina por ácido aspártico na cadeia beta'
    ],
    correctIndex: 0,
    explanation: 'Na anemia falciforme, a mutação pontual GTG→GAG no códon 6 do gene da globina β substitui Glu (hidrofílico) por Val (hidrofóbico), criando um sítio de polimerização em hipoxia que deforma as hemácias em foice.'
  },
  {
    id: 'est_bioquim_026',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'Os hormônios esteroides exercem seus efeitos principalmente por:',
    options: [
      'Ligação a receptores intracelulares que regulam a transcrição gênica',
      'Ligação a receptores de membrana acoplados à proteína G',
      'Ativação de tirosina quinases de membrana',
      'Abertura direta de canais iônicos'
    ],
    correctIndex: 0,
    explanation: 'Hormônios esteroides (cortisol, aldosterona, estrogênio, testosterona, progesterona, vitamina D, hormônios tireoidianos) são lipossolúveis, penetram na célula e ligam-se a receptores nucleares/citoplasmáticos que atuam como fatores de transcrição.'
  },
  {
    id: 'est_bioquim_027',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A digestão de proteínas inicia no:',
    options: [
      'Estômago, pela pepsina (ativada pelo HCl)',
      'Boca, pela amilase salivar',
      'Intestino delgado, pela tripsina',
      'Cólon, pelas bactérias comensais'
    ],
    correctIndex: 0,
    explanation: 'A digestão proteica inicia no estômago: o HCl (pH 1-2) desnatura proteínas e converte pepsinogênio em pepsina, que hidrolisa ligações peptídicas. No intestino delgado, tripsina, quimiotripsina, elastase e carboxipeptidases completam a digestão.'
  },
  {
    id: 'est_bioquim_028',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A doença de Gaucher resulta do acúmulo de:',
    options: [
      'Glicocerebrosídeo por deficiência de beta-glicosidase ácida (glucocerebrosidase)',
      'Esfingomielina por deficiência de esfingomielinase',
      'GM2-gangliosídeo por deficiência de hexosaminidase A',
      'Glicogênio por deficiência de alfa-1,4-glucosidase'
    ],
    correctIndex: 0,
    explanation: 'Gaucher (mais comum das lipidoses): acúmulo de glicocerebrosídeo nos lisossomos de macrófagos (células de Gaucher). Manifesta-se com esplenomegalia massiva, hepatomegalia, pancitopenia e lesões ósseas. Tratamento: terapia de reposição enzimática.'
  },
  {
    id: 'est_bioquim_029',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'O cAMP (AMP cíclico) é um segundo mensageiro que:',
    options: [
      'Ativa a proteína quinase A (PKA), que fosforila proteínas-alvo',
      'Ativa diretamente os canais de cálcio',
      'Inibe a adenilato ciclase',
      'Ativa a proteína quinase C (PKC)'
    ],
    correctIndex: 0,
    explanation: 'cAMP (gerado pela adenilato ciclase ativada por receptores Gs) ativa a PKA, que fosforila em serina/treonina diversas enzimas e fatores de transcrição (ex: CREB), mediando respostas a glucagon, adrenalina, TSH, FSH, LH.'
  },
  {
    id: 'est_bioquim_030',
    cycle: 'Ciclo Básico',
    subject: 'Bioquímica',
    text: 'A estrutura quaternária de uma proteína refere-se a:',
    options: [
      'Arranjo espacial e interação entre duas ou mais subunidades polipeptídicas',
      'A sequência de aminoácidos da cadeia polipeptídica',
      'As estruturas locais regulares como alfa-hélice e folha beta',
      'O dobramento tridimensional de um único polipeptídeo'
    ],
    correctIndex: 0,
    explanation: 'A estrutura quaternária descreve a associação de múltiplas subunidades. Ex: hemoglobina (2α+2β), RNA polimerase, anticorpos (2H+2L). Estrutura primária=sequência; secundária=alfa-hélice/folha-β; terciária=dobramento 3D de um único polipeptídeo.'
  },
  // ─── HISTOLOGIA ────────────────────────────────────────────────────────
  {
    id: 'est_histo_001',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'O tecido epitelial de revestimento é caracterizado por:',
    options: [
      'Células justapostas com pouca substância intercelular e polaridade celular',
      'Abundante matriz extracelular com fibras colágenas',
      'Células isoladas em matriz fluida',
      'Presença de ramificações dendríticas em todas as células'
    ],
    correctIndex: 0,
    explanation: 'Tecido epitelial: células justapostas (mínima substância intercelular), polaridade (apical/basal), junções intercelulares (ocludentes, aderentes, desmossomos, comunicantes), assenta sobre membrana basal, avascular (nutrição por difusão).'
  },
  {
    id: 'est_histo_002',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'O epitélio pseudoestratificado ciliado encontra-se em qual estrutura?',
    options: [
      'Traqueia e brônquios (vias aéreas superiores)',
      'Epitélio de revestimento do esôfago',
      'Epitélio da bexiga urinária',
      'Endotélio vascular'
    ],
    correctIndex: 0,
    explanation: 'O epitélio pseudoestratificado cilíndrico ciliado (com células caliciformes secretoras de muco) reveste a maioria das vias aéreas (traqueia, brônquios). "Pseudoestratificado" porque todos os núcleos não estão no mesmo nível, mas todas as células tocam a lâmina basal.'
  },
  {
    id: 'est_histo_003',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'As células de Goblet (caliciformes) são responsáveis por:',
    options: [
      'Secretar muco nas vias aéreas e intestino',
      'Absorver nutrientes no intestino delgado',
      'Secretar ácido clorídrico no estômago',
      'Produzir surfactante nos alvéolos'
    ],
    correctIndex: 0,
    explanation: 'As células caliciformes (goblet) secretam glicoproteínas de muco, que hidratadas formam o muco que lubrifica e protege epitélios das vias aéreas e do trato gastrintestinal. São células secretoras unicelulares.'
  },
  {
    id: 'est_histo_004',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'As junções do tipo ocludente (tight junctions) têm a função principal de:',
    options: [
      'Criar uma barreira de permeabilidade paracelular, selando o espaço entre células epiteliais',
      'Fornecer resistência mecânica por ancoramento ao citoesqueleto (actina/queratina)',
      'Permitir comunicação direta entre citoplasmas de células vizinhas',
      'Ancorar células à membrana basal'
    ],
    correctIndex: 0,
    explanation: 'Junções ocludentes (tight junctions/zonula occludens): formadas por proteínas (claudinas, ocludina) que selam completamente o espaço intercelular, impedindo passagem paracelular de substâncias — essencial na barreira intestinal, hematoencefálica e hematotesticular.'
  },
  {
    id: 'est_histo_005',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'As fibras colágenas tipo I são abundantes em:',
    options: [
      'Tendões, ligamentos, osso cortical e derme',
      'Cartilagem hialina',
      'Lâminas basais',
      'Vasos sanguíneos (camada elástica)'
    ],
    correctIndex: 0,
    explanation: 'Colágeno tipo I é o mais abundante do organismo: presente em tendões (alta resistência à tração), ligamentos, osso (matriz orgânica), derme, fáscias e cicatrizes. Organiza-se em fibrilas com estriação periódica de 64-67 nm.'
  },
  {
    id: 'est_histo_006',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'Os mastócitos são células do tecido conjuntivo que:',
    options: [
      'Contêm grânulos com histamina e heparina, mediando reações de hipersensibilidade imediata (tipo I)',
      'Fagocitam bactérias e restos celulares (função macrofágica)',
      'Produzem fibras elásticas',
      'Sintetizam imunoglobulinas (células secretoras de anticorpos)'
    ],
    correctIndex: 0,
    explanation: 'Mastócitos derivam de precursores mieloides, residem em tecidos conjuntivos. Seus grânulos contêm histamina, heparina, triptase, quimase e fator quimiotático de eosinófilos. Na alergia (IgE ligada à superfície + antígeno), desgranulam mediando a hipersensibilidade tipo I (anafilaxia local/sistêmica).'
  },
  {
    id: 'est_histo_007',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'A cartilagem hialina se diferencia da fibrocartilagem porque:',
    options: [
      'Contém fibras colágenas tipo II dispersas, sem fibras colágenas tipo I espessas visíveis ao MO',
      'Possui pericôndrio bem desenvolvido com fibras colágenas tipo I',
      'Tem fibras elásticas predominantes',
      'É altamente vascularizada'
    ],
    correctIndex: 0,
    explanation: 'Cartilagem hialina: fibras colágenas tipo II finas (invisíveis ao MO em cortes corados com H&E), substância fundamental abundante, pericôndrio presente, avascular. Fibrocartilagem: colágeno tipo I grosso visível, sem pericôndrio (ex: menisco, anel fibroso do disco intervertebral, sínfise púbica).'
  },
  {
    id: 'est_histo_008',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'Os osteoclastos são células responsáveis por:',
    options: [
      'Reabsorção óssea, sendo células multinucleadas derivadas de precursores monocíticos/macrofágicos',
      'Síntese de matriz óssea (osteoide)',
      'Maturação de osteoblastos',
      'Produção de colágeno tipo I apenas'
    ],
    correctIndex: 0,
    explanation: 'Osteoclastos: células gigantes multinucleadas (derivadas da fusão de monócitos/macrófagos), ativadas pelo RANKL. Acidificam a lacuna de reabsorção (bomba H⁺-ATPase) e secretam colagenase e catepsina K, reabsorvendo matriz mineral e orgânica.'
  },
  {
    id: 'est_histo_009',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'O músculo cardíaco se diferencia do músculo esquelético pela presença de:',
    options: [
      'Discos intercalares (com junções comunicantes e desmossomos) e ramificações celulares',
      'Ausência de estriações transversais',
      'Controle totalmente voluntário',
      'Células multinucleadas com núcleos periféricos'
    ],
    correctIndex: 0,
    explanation: 'Músculo cardíaco: células mononucleadas ramificadas, estriações presentes, núcleo central, discos intercalares (gap junctions para propagação elétrica sincício funcional + desmossomos para resistência mecânica), controle involuntário autonômico.'
  },
  {
    id: 'est_histo_010',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'A unidade morfofuncional do fígado, o lóbulo hepático clássico, é centrada na:',
    options: [
      'Veia centrolobular, com hepatócitos irradiando até os espaços porta',
      'Veia porta, com hepatócitos ao redor',
      'Artéria hepática',
      'Via biliar intrahepática (ducto de Hering)'
    ],
    correctIndex: 0,
    explanation: 'O lóbulo hepático clássico (hexagonal) tem a veia centrolobular ao centro, com placas de hepatócitos (muralhas de Remak) irradiando para os ângulos (espaços porta). O sangue flui dos espaços porta → sinusoides → veia centrolobular. A bile flui em sentido oposto para os ductos biliares nos espaços porta.'
  },
  {
    id: 'est_histo_011',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'As células de Sertoli estão localizadas no testículo e têm como função:',
    options: [
      'Suporte nutricional e formação da barreira hematotesticular para os espermatócitos',
      'Síntese de testosterona',
      'Fagocitar espermatozoides defeituosos apenas',
      'Produzir espermatozoides diretamente'
    ],
    correctIndex: 0,
    explanation: 'Células de Sertoli (de suporte): no epitélio seminífero, ligadas por junções ocludentes formando a barreira hematotesticular (protege espermatócitos da imunidade). Secretam ABP (proteína ligadora de andrógenos), inibina e fatores de crescimento que nutrem células germinativas.'
  },
  {
    id: 'est_histo_012',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'O glomérulo renal é constituído histologicamente por:',
    options: [
      'Capilares fenestrados, podócitos (com pedicelos), mesângio e membrana basal glomerular',
      'Capilares contínuos, células epiteliais simples e matriz colagenosa',
      'Arteríolas sem especialização',
      'Lúmen grande com epitélio estratificado'
    ],
    correctIndex: 0,
    explanation: 'A barreira de filtração glomerular consiste em: endotélio capilar fenestrado (sem diafragma) → membrana basal glomerular (principal barreira de carga/tamanho) → podócitos com pedicelos e fendas de filtração diafragmadas (nefrina). O mesângio suporta os capilares e tem função fagocítica.'
  },
  {
    id: 'est_histo_013',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'Os neurônios são células nervosas que se diferenciam dos demais tipos celulares por:',
    options: [
      'Ser pós-mitóticos (não se dividem na vida adulta) e possuir axônio e dendritos especializados',
      'Nunca receber impulsos de outras células',
      'Poder se dividir em resposta a lesões (após os 25 anos)',
      'Não possuir organelas citoplasmáticas'
    ],
    correctIndex: 0,
    explanation: 'Neurônios adultos são essencialmente pós-mitóticos (exceções: células granulares do hipocampo e bulbo olfatório). Possuem corpo celular (soma) com corpúsculos de Nissl (RER), axônio (conduz potencial de ação) e dendritos (recebem sinais).'
  },
  {
    id: 'est_histo_014',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'As células de Kupffer estão localizadas no fígado e são classificadas como:',
    options: [
      'Macrófagos residentes dos sinusoides hepáticos',
      'Hepatócitos especializados na produção de bile',
      'Células estreladas (de Ito) produtoras de colágeno',
      'Células endoteliais dos sinusoides'
    ],
    correctIndex: 0,
    explanation: 'Células de Kupffer: macrófagos residentes dos sinusoides hepáticos (sistema fagocítico mononuclear). Fagocitam bactérias, eritrócitos senescentes e debris. São ativadas em doenças hepáticas inflamatórias e podem liberar citocinas pró-inflamatórias.'
  },
  {
    id: 'est_histo_015',
    cycle: 'Ciclo Básico',
    subject: 'Histologia',
    text: 'A melanina é produzida pelos melanócitos na pele e transferida para:',
    options: [
      'Queratinócitos, onde protege o núcleo celular contra UV',
      'Fibroblastos dérmicos',
      'Macrófagos da epiderme',
      'Vasos linfáticos dérmicos'
    ],
    correctIndex: 0,
    explanation: 'Os melanócitos (na camada basal da epiderme) sintetizam melanina nos melanossomos. Via prolongamentos dendríticos, transferem melanossomos por citocrina aos queratinócitos vizinhos, que os posicionam como "guarda-sol" acima dos núcleos, absorvendo radiação UV.'
  },
];
