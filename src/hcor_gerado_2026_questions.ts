// Questões inéditas para a banca HCor (Hospital do Coração, SP), sem arquivo prévio no banco.
// Formato padrão (5 alternativas + explicação, como ENARE), com peso maior em Cardiologia e
// Cirurgia Cardiovascular, refletindo o perfil de um hospital de referência cardiológica, mas
// cobrindo também as áreas gerais do acesso direto. Temas distintos dos já usados nos lotes
// anteriores (ENARE/USP/UNIFESP/Einstein).
export const HCOR_GERADO_2026_QUESTIONS: any[] = [
  {
    id: 'hcor_gerado26_001',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Homem, 64 anos, com angina estável há 6 meses, realiza teste ergométrico com resultado de alto risco (depressão do segmento ST maior que 2 mm em baixa carga, associada a queda da pressão arterial). Qual é a conduta mais apropriada?',
    options: [
      'Cateterismo cardíaco para avaliação anatômica coronariana',
      'Manter apenas tratamento clínico otimizado, sem investigação invasiva',
      'Repetir o teste ergométrico em 6 meses',
      'Iniciar apenas anticoagulante oral, sem outra investigação',
      'Alta sem qualquer conduta adicional'
    ],
    correctIndex: 0,
    explanation: 'Teste ergométrico de alto risco em paciente com angina estável indica investigação invasiva por cateterismo para definir estratégia de revascularização.'
  },
  {
    id: 'hcor_gerado26_002',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente pós-infarto do miocárdio, fração de ejeção de 30%, permanece sintomático (classe funcional II) apesar de tratamento otimizado com IECA, betabloqueador e antagonista mineralocorticoide por mais de 3 meses, com QRS de 160 ms e morfologia de bloqueio de ramo esquerdo. Qual é a conduta mais apropriada?',
    options: [
      'Terapia de ressincronização cardíaca',
      'Apenas aumentar a dose de diurético, sem outra intervenção',
      'Transplante cardíaco imediato, sem considerar outras terapias',
      'Suspender o betabloqueador para melhorar a fração de ejeção',
      'Apenas reforçar orientações dietéticas'
    ],
    correctIndex: 0,
    explanation: 'Insuficiência cardíaca sintomática com fração de ejeção reduzida e QRS alargado com padrão de bloqueio de ramo esquerdo tem indicação de terapia de ressincronização cardíaca.'
  },
  {
    id: 'hcor_gerado26_003',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Mulher, 55 anos, apresenta palpitações e ao Holter de 24 horas é identificada taquicardia ventricular não sustentada assintomática, em coração estruturalmente normal ao ecocardiograma. Qual é a conduta mais apropriada?',
    options: [
      'Investigação adicional e tranquilização, sem necessidade de tratamento antiarrítmico imediato na maioria dos casos',
      'Implante de cardiodesfibrilador imediato, independente da ausência de cardiopatia estrutural ou de sintomas associados',
      'Ablação por cateter de urgência, independente da ausência de sintomas ou de repercussão hemodinâmica documentada',
      'Amiodarona em altas doses por tempo indeterminado, mesmo sem repercussão clínica ou hemodinâmica documentada',
      'Transplante cardíaco preventivo, indicado mesmo na ausência de disfunção ventricular ou de sintomas relevantes'
    ],
    correctIndex: 0,
    explanation: 'Taquicardia ventricular não sustentada assintomática em coração estruturalmente normal geralmente tem prognóstico benigno, não exigindo tratamento antiarrítmico agressivo imediato.'
  },
  {
    id: 'hcor_gerado26_004',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Homem, 45 anos, apresenta síncope durante exercício físico intenso, com história familiar de morte súbita em parente de primeiro grau. Ecocardiograma mostra hipertrofia septal assimétrica com obstrução dinâmica da via de saída do ventrículo esquerdo. Qual é a orientação mais importante quanto à atividade física?',
    options: [
      'Restrição de exercícios físicos competitivos de alta intensidade',
      'Nenhuma restrição é necessária, pois o exercício é sempre benéfico',
      'Apenas evitar exercícios de baixa intensidade, sem restringir os de alta',
      'Liberação total, desde que use betabloqueador',
      'Restrição apenas de esportes aquáticos, sem outras limitações'
    ],
    correctIndex: 0,
    explanation: 'Cardiomiopatia hipertrófica obstrutiva com história familiar de morte súbita exige restrição de exercícios competitivos de alta intensidade pelo risco de arritmia maligna induzida pelo esforço.'
  },
  {
    id: 'hcor_gerado26_005',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente com prótese valvar mecânica em uso de varfarina apresenta RNI de 1,4 (alvo entre 2,5 e 3,5). Qual é a conduta mais apropriada?',
    options: [
      'Ajuste da dose de varfarina com reavaliação frequente do RNI até atingir a faixa terapêutica',
      'Suspensão da varfarina até normalização espontânea do RNI, sem retorno programado da anticoagulação',
      'Manter a mesma dose de varfarina, aguardando elevação espontânea do RNI sem qualquer intervenção',
      'Troca imediata para anticoagulante oral direto, contraindicado em prótese valvar mecânica',
      'Apenas observação clínica, sem qualquer ajuste medicamentoso ou reavaliação laboratorial precoce'
    ],
    correctIndex: 0,
    explanation: 'RNI subterapêutico em paciente com prótese valvar mecânica exige ajuste de dose e monitorização frequente, pelo alto risco de trombose valvar quando fora da faixa alvo.'
  },
  {
    id: 'hcor_gerado26_006',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Homem, 58 anos, apresenta dor torácica em repouso, de curta duração, recorrente nas últimas 48 horas, com ECG mostrando infradesnivelamento transitório do segmento ST durante os episódios e troponina discretamente elevada. Qual é a classificação da síndrome coronariana e a conduta inicial?',
    options: [
      'Infarto sem supradesnivelamento do ST; dupla antiagregação e estratificação invasiva conforme risco',
      'Angina estável; apenas ajuste de medicação oral ambulatorial, sem necessidade de internação hospitalar',
      'Infarto com supradesnivelamento do ST; trombólise imediata ou angioplastia primária de urgência',
      'Pericardite aguda; anti-inflamatório isolado, sem necessidade de estratificação invasiva',
      'Dissecção de aorta; cirurgia de urgência, sem necessidade de dupla antiagregação plaquetária'
    ],
    correctIndex: 0,
    explanation: 'Dor torácica recorrente com alteração dinâmica do ST e troponina elevada caracteriza infarto sem supra de ST, tratado com dupla antiagregação e estratificação invasiva conforme escore de risco.'
  },
  {
    id: 'hcor_gerado26_007',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente hipertenso de difícil controle, em uso de 4 classes de anti-hipertensivos em doses otimizadas, mantém PA elevada. Investigação identifica estenose significativa de artéria renal bilateral. Qual classe de anti-hipertensivo deve ser evitada nesse contexto?',
    options: [
      'Inibidores da enzima conversora de angiotensina ou bloqueadores do receptor de angiotensina',
      'Bloqueadores de canal de cálcio, seguros mesmo em estenose bilateral de artéria renal',
      'Diuréticos tiazídicos, considerados seguros e sem risco renal na estenose bilateral',
      'Betabloqueadores, isentos de risco de piora da função renal na estenose bilateral',
      'Alfabloqueadores, considerados seguros mesmo em casos de estenose renal bilateral grave'
    ],
    correctIndex: 0,
    explanation: 'Na estenose bilateral de artéria renal, IECA/BRA podem precipitar insuficiência renal aguda por reduzirem a pressão de perfusão glomerular dependente de angiotensina II, devendo ser evitados ou usados com extrema cautela.'
  },
  {
    id: 'hcor_gerado26_008',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Mulher, 70 anos, apresenta dispneia progressiva e ecocardiograma mostrando insuficiência mitral grave degenerativa, sintomática, com função ventricular ainda preservada. Qual é a conduta mais apropriada?',
    options: [
      'Correção cirúrgica (preferencialmente plástica valvar) em tempo oportuno',
      'Apenas tratamento clínico com diurético, sem considerar cirurgia',
      'Observação indefinida até disfunção ventricular grave se instalar',
      'Anticoagulação isolada, sem correção valvar',
      'Marca-passo definitivo como tratamento da insuficiência mitral'
    ],
    correctIndex: 0,
    explanation: 'Insuficiência mitral degenerativa grave sintomática tem indicação de correção cirúrgica, idealmente antes que ocorra disfunção ventricular irreversível.'
  },
  {
    id: 'hcor_gerado26_009',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente jovem apresenta episódios recorrentes de palpitação de início e término súbitos, ECG intercrise com intervalo PR curto e onda delta. Qual é o diagnóstico e a conduta definitiva quando indicada?',
    options: [
      'Síndrome de Wolff-Parkinson-White; ablação por cateter da via acessória',
      'Fibrilação atrial paroxística; anticoagulação isolada, sem ablação',
      'Flutter atrial típico; apenas controle de frequência',
      'Taquicardia sinusal inapropriada; betabloqueador isolado',
      'Bloqueio atrioventricular de primeiro grau; marca-passo definitivo'
    ],
    correctIndex: 0,
    explanation: 'PR curto com onda delta é característico da síndrome de Wolff-Parkinson-White; a ablação por cateter da via acessória é o tratamento definitivo, especialmente em sintomáticos.'
  },
  {
    id: 'hcor_gerado26_010',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Homem, 68 anos, apresenta episódios de pré-síncope e Holter mostrando pausas sinusais sintomáticas maiores que 3 segundos, sem causa reversível identificada. Qual é a conduta definitiva?',
    options: [
      'Implante de marca-passo definitivo',
      'Apenas observação clínica, sem qualquer dispositivo',
      'Antiarrítmico classe IC para aumentar a frequência cardíaca',
      'Atropina contínua por via oral',
      'Ablação do nó sinusal'
    ],
    correctIndex: 0,
    explanation: 'Disfunção do nó sinusal sintomática, com pausas significativas sem causa reversível, tem indicação de marca-passo definitivo.'
  },
  {
    id: 'hcor_gerado26_011',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com doença arterial coronariana triarterial grave, incluindo lesão significativa de tronco de coronária esquerda, com boa função ventricular. Qual é a conduta terapêutica preferencial segundo as diretrizes atuais?',
    options: [
      'Cirurgia de revascularização miocárdica',
      'Tratamento clínico isolado, sem revascularização',
      'Angioplastia com stent farmacológico em todos os casos, preterindo a cirurgia',
      'Apenas otimização de estatina, sem qualquer revascularização',
      'Transplante cardíaco preventivo'
    ],
    correctIndex: 0,
    explanation: 'Doença triarterial com acometimento de tronco de coronária esquerda geralmente favorece a cirurgia de revascularização miocárdica em relação à angioplastia, especialmente com boa função ventricular.'
  },
  {
    id: 'hcor_gerado26_012',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente no 5º dia de pós-operatório de cirurgia cardíaca apresenta febre, dor torácica que piora com a inspiração e ao decúbito, e atrito pericárdico à ausculta. Qual é o diagnóstico mais provável?',
    options: [
      'Síndrome de Dressler (pericardite pós-cardiotomia)',
      'Infarto agudo do miocárdio perioperatório',
      'Tromboembolismo pulmonar maciço',
      'Mediastinite bacteriana aguda',
      'Tamponamento cardíaco imediato'
    ],
    correctIndex: 0,
    explanation: 'Febre, dor pleurítico-pericárdica e atrito pericárdico dias após cirurgia cardíaca sugerem síndrome de Dressler, de natureza autoimune/inflamatória pós-cardiotomia.'
  },
  {
    id: 'hcor_gerado26_013',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com aneurisma de aorta torácica descendente de 6,5 cm, assintomático, é avaliado quanto à indicação cirúrgica. Qual é a conduta mais apropriada?',
    options: [
      'Correção cirúrgica ou endovascular eletiva, dado o diâmetro acima do limiar de intervenção',
      'Acompanhamento seriado indefinido por imagem, independente da evolução do diâmetro aórtico',
      'Apenas controle rigoroso da pressão arterial, sem qualquer intervenção cirúrgica ou endovascular',
      'Anticoagulação plena isolada, sem indicação de correção cirúrgica ou endovascular',
      'Observação clínica até que se torne sintomático, mesmo com diâmetro acima do limiar cirúrgico'
    ],
    correctIndex: 0,
    explanation: 'Aneurismas de aorta torácica descendente acima de aproximadamente 6 cm têm indicação de correção eletiva pelo risco progressivo de rotura.'
  },
  {
    id: 'hcor_gerado26_014',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente vítima de trauma torácico contuso apresenta hipotensão refratária, turgência jugular e sons cardíacos abafados. FAST estendido mostra líquido pericárdico. Qual é a conduta imediata?',
    options: [
      'Pericardiocentese ou janela pericárdica de urgência conforme disponibilidade',
      'Observação com reavaliação em 6 horas, sem drenagem pericárdica imediata',
      'Apenas reposição volêmica agressiva, sem drenar o pericárdio mesmo com sinais de tamponamento',
      'Alta com anti-inflamatório oral, sem qualquer intervenção sobre o derrame pericárdico',
      'Trombólise química imediata, sem indicação nesse contexto de tamponamento cardíaco'
    ],
    correctIndex: 0,
    explanation: 'Tamponamento cardíaco pós-traumático com instabilidade hemodinâmica exige drenagem pericárdica de urgência, seja por pericardiocentese ou janela cirúrgica.'
  },
  {
    id: 'hcor_gerado26_015',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente idoso, com fibrilação atrial de longa data, apresenta dor abdominal súbita intensa desproporcional ao exame físico, acidose metabólica e lactato elevado. Angiotomografia mostra êmbolo em artéria mesentérica superior. Qual é a conduta?',
    options: [
      'Laparotomia de urgência com embolectomia e avaliação de viabilidade intestinal',
      'Tratamento clínico exclusivo com antibiótico, sem qualquer intervenção cirúrgica de urgência',
      'Anticoagulação isolada, sem intervenção cirúrgica mesmo com sinais de isquemia intestinal',
      'Observação por 24 horas antes de qualquer decisão cirúrgica, mesmo com acidose progressiva',
      'Colonoscopia terapêutica isolada, sem avaliação da viabilidade do intestino delgado'
    ],
    correctIndex: 0,
    explanation: 'Embolia mesentérica aguda com sinais de isquemia é emergência cirúrgica, exigindo embolectomia e avaliação de ressecção de segmentos intestinais inviáveis.'
  },
  {
    id: 'hcor_gerado26_016',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente apresenta claudicação intermitente incapacitante em membro inferior, refratária a tratamento clínico otimizado e exercício supervisionado, com lesão estenótica focal em artéria femoral superficial confirmada por angiografia. Qual é a conduta mais apropriada?',
    options: [
      'Revascularização (angioplastia ou cirurgia) conforme características da lesão',
      'Amputação primária do membro, sem tentativa prévia de revascularização da lesão',
      'Apenas aumentar a dose de antiagregante, sem indicação de revascularização da lesão',
      'Anticoagulação plena isolada, sem revascularização mesmo com claudicação incapacitante',
      'Observação indefinida, mesmo com claudicação incapacitante refratária ao tratamento clínico'
    ],
    correctIndex: 0,
    explanation: 'Claudicação incapacitante refratária ao tratamento conservador, com lesão focal passível de correção, tem indicação de revascularização.'
  },
  {
    id: 'hcor_gerado26_017',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente apresenta dor abdominal súbita, massa pulsátil abdominal e hipotensão, com história de aneurisma de aorta abdominal em acompanhamento ambulatorial. Qual é a hipótese diagnóstica e a conduta?',
    options: [
      'Rotura de aneurisma de aorta abdominal; cirurgia de urgência',
      'Cólica renal; apenas analgesia',
      'Diverticulite aguda; antibioticoterapia isolada',
      'Pancreatite aguda; apenas hidratação venosa',
      'Obstrução intestinal simples; sondagem nasogástrica isolada'
    ],
    correctIndex: 0,
    explanation: 'Massa pulsátil com dor súbita e hipotensão em paciente com aneurisma conhecido sugere rotura, uma emergência cirúrgica com necessidade de correção imediata.'
  },
  {
    id: 'hcor_gerado26_018',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente no pós-operatório imediato de cirurgia de revascularização miocárdica apresenta sangramento importante pelo dreno mediastinal (mais de 200 mL/hora por 2 horas consecutivas), com instabilidade hemodinâmica. Qual é a conduta?',
    options: [
      'Reoperação para revisão de hemostasia',
      'Apenas transfusão de hemoderivados, sem reoperação',
      'Observação prolongada antes de qualquer decisão cirúrgica',
      'Alta da UTI para enfermaria, mantendo o dreno',
      'Suspensão do dreno mediastinal sem investigar a causa'
    ],
    correctIndex: 0,
    explanation: 'Sangramento importante e persistente pelo dreno mediastinal com instabilidade hemodinâmica indica necessidade de reoperação para revisão da hemostasia cirúrgica.'
  },
  {
    id: 'hcor_gerado26_019',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente jovem, vítima de acidente automobilístico, apresenta dor torácica intensa, hipertensão em membros superiores com hipotensão relativa em membros inferiores, e alargamento de mediastino à radiografia de tórax. Qual é a hipótese diagnóstica e a conduta?',
    options: [
      'Dissecção/lesão traumática de aorta; angiotomografia de urgência e correção cirúrgica ou endovascular',
      'Contusão pulmonar isolada; apenas suporte ventilatório, sem investigação vascular',
      'Fratura de esterno isolada; apenas analgesia, sem necessidade de investigação vascular adicional',
      'Pneumotórax simples; observação clínica, sem necessidade de angiotomografia de urgência',
      'Tamponamento cardíaco; apenas pericardiocentese de urgência, sem avaliar a aorta torácica'
    ],
    correctIndex: 0,
    explanation: 'Alargamento de mediastino após trauma torácico com diferença pressórica entre membros sugere lesão traumática de aorta, exigindo investigação urgente por angiotomografia e correção definitiva.'
  },
  {
    id: 'hcor_gerado26_020',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com endocardite infecciosa em válvula aórtica nativa, apresenta insuficiência cardíaca refratária ao tratamento clínico e vegetação volumosa móvel à ecocardiografia. Qual é a conduta mais apropriada?',
    options: [
      'Cirurgia valvar precoce, mesmo com antibioticoterapia ainda em curso',
      'Aguardar conclusão completa do esquema antibiótico antes de considerar cirurgia',
      'Apenas otimização de diurético, sem considerar cirurgia',
      'Transplante cardíaco como única opção',
      'Observação clínica prolongada, sem indicação cirúrgica em qualquer momento'
    ],
    correctIndex: 0,
    explanation: 'Endocardite com insuficiência cardíaca refratária e vegetação de alto risco embólico tem indicação de cirurgia valvar precoce, mesmo antes de completar o esquema antibiótico.'
  },
  {
    id: 'hcor_gerado26_021',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Recém-nascido apresenta cianose central desde as primeiras horas de vida, sem melhora significativa com oferta de oxigênio a 100%. Ecocardiograma mostra aorta emergindo do ventrículo direito e artéria pulmonar do ventrículo esquerdo. Qual é o diagnóstico e a conduta inicial para manter a circulação até a cirurgia?',
    options: [
      'Transposição das grandes artérias; infusão de prostaglandina E1 para manter o canal arterial pérvio',
      'Tetralogia de Fallot; uso isolado de betabloqueador, sem necessidade de prostaglandina E1',
      'Atresia pulmonar; apenas oxigenoterapia contínua, sem infusão de prostaglandina E1',
      'Persistência do canal arterial isolada; indometacina para fechar o canal arterial pérvio',
      'Comunicação interatrial isolada; apenas observação clínica, sem necessidade de prostaglandina'
    ],
    correctIndex: 0,
    explanation: 'Na transposição das grandes artérias, a sobrevida inicial depende da mistura de sangue através de comunicações, por isso a prostaglandina E1 mantém o canal arterial pérvio até a correção cirúrgica.'
  },
  {
    id: 'hcor_gerado26_022',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Lactente, 3 meses, apresenta sudorese e cansaço às mamadas, ganho ponderal inadequado, e sopro sistólico rude em borda esternal esquerda baixa. Ecocardiograma confirma comunicação interventricular grande com hiperfluxo pulmonar importante. Qual é a conduta terapêutica inicial antes da possível cirurgia?',
    options: [
      'Otimização clínica com diurético e suporte nutricional, com avaliação cirúrgica conforme evolução',
      'Cirurgia de urgência nas primeiras 24 horas de vida, independente da estabilidade clínica',
      'Apenas observação sem qualquer tratamento clínico',
      'Antibioticoterapia profilática isolada, sem tratar a insuficiência cardíaca',
      'Transplante cardíaco como primeira opção'
    ],
    correctIndex: 0,
    explanation: 'Comunicação interventricular grande com repercussão clínica é inicialmente otimizada clinicamente (diurético, suporte nutricional), reservando a cirurgia para quando indicada conforme evolução.'
  },
  {
    id: 'hcor_gerado26_023',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança, 6 anos, apresenta febre há 6 dias, exantema polimorfo, hiperemia conjuntival não purulenta e edema de extremidades. Ecocardiograma mostra dilatação leve de artéria coronária descendente anterior. Qual é o tratamento indicado para reduzir o risco de progressão do aneurisma coronariano?',
    options: [
      'Imunoglobulina intravenosa em dose alta associada a AAS',
      'Antibioticoterapia isolada, sem imunoglobulina',
      'Corticoide isolado como primeira linha, sem imunoglobulina',
      'Apenas AAS em dose baixa, sem imunoglobulina',
      'Observação clínica sem qualquer tratamento específico'
    ],
    correctIndex: 0,
    explanation: 'A imunoglobulina intravenosa associada a AAS é o tratamento padrão da doença de Kawasaki, reduzindo significativamente o risco de progressão dos aneurismas coronarianos quando iniciada precocemente.'
  },
  {
    id: 'hcor_gerado26_024',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Recém-nascido prematuro extremo, 26 semanas, apresenta sopro sistólico contínuo e sinais de insuficiência cardíaca com hiperfluxo pulmonar, confirmado como persistência do canal arterial hemodinamicamente significativo. Qual é a primeira linha terapêutica antes de considerar fechamento cirúrgico?',
    options: [
      'Inibidor da ciclo-oxigenase (indometacina ou ibuprofeno) para fechamento farmacológico',
      'Cirurgia imediata como primeira escolha, sem tentativa prévia de fechamento farmacológico',
      'Prostaglandina E1 para manter o canal arterial aberto, contraindicada nesse contexto',
      'Apenas diurético isolado, sem tentativa de fechamento farmacológico',
      'Observação sem qualquer tratamento, mesmo com repercussão hemodinâmica significativa'
    ],
    correctIndex: 0,
    explanation: 'O fechamento farmacológico com inibidores da ciclo-oxigenase é a primeira linha para PCA hemodinamicamente significativa em prematuros, reservando cirurgia para falha do tratamento clínico.'
  },
  {
    id: 'hcor_gerado26_025',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Adolescente, 15 anos, atleta competitivo, apresenta síncope durante treino intenso. História familiar de morte súbita em tio jovem. ECG mostra ondas T invertidas em derivações precordiais direitas e potenciais tardios ao ECG de alta resolução. Qual é a hipótese diagnóstica mais provável?',
    options: [
      'Cardiomiopatia arritmogênica do ventrículo direito',
      'Síndrome do QT longo isolada',
      'Miocardite viral aguda isolada',
      'Prolapso de válvula mitral isolado, sem outras alterações'
    , 'Bloqueio atrioventricular congênito isolado'],
    correctIndex: 0,
    explanation: 'Síncope ao esforço em atleta jovem com história familiar de morte súbita, alterações de repolarização em precordiais direitas e potenciais tardios sugere cardiomiopatia arritmogênica do ventrículo direito.'
  },
  {
    id: 'hcor_gerado26_026',
    banca: 'HCor',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante, 32 anos, com cardiopatia congênita cianótica complexa não corrigida, deseja engravidar. Qual é a principal orientação quanto ao risco materno dessa gestação?',
    options: [
      'Gestação de altíssimo risco materno, exigindo aconselhamento pré-concepcional especializado e acompanhamento em centro de referência',
      'Gestação considerada de risco habitual, sem necessidade de aconselhamento especializado prévio ou acompanhamento em centro de referência',
      'Contraindicação absoluta a qualquer método contraceptivo, mesmo diante do altíssimo risco cardiovascular da gestação',
      'Recomendação de parto domiciliar por ser mais fisiológico, dispensando acompanhamento especializado do risco materno',
      'Nenhuma orientação especial é necessária além do pré-natal de rotina, mesmo com cardiopatia cianótica complexa'
    ],
    correctIndex: 0,
    explanation: 'Cardiopatias congênitas cianóticas complexas conferem alto risco materno na gestação, exigindo aconselhamento pré-concepcional e acompanhamento multiprofissional especializado.'
  },
  {
    id: 'hcor_gerado26_027',
    banca: 'HCor',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante, 29 anos, com prótese valvar mecânica em uso de varfarina, é atendida no primeiro trimestre. Qual é a principal preocupação quanto à manutenção da varfarina nesse período?',
    options: [
      'Risco de embriopatia por varfarina, exigindo discussão sobre troca por heparina no primeiro trimestre',
      'Nenhum risco adicional na gestação, podendo manter a varfarina sem qualquer ajuste de conduta',
      'Risco exclusivo de sangramento materno, sem qualquer relação com malformações ou risco fetal',
      'Contraindicação absoluta a qualquer anticoagulação durante toda a gestação',
      'Necessidade de suspender toda anticoagulação até o parto, mesmo em prótese valvar mecânica'
    ],
    correctIndex: 0,
    explanation: 'A varfarina no primeiro trimestre está associada a risco de embriopatia, sendo frequentemente discutida a troca por heparina nesse período, com decisão individualizada conforme risco trombótico da prótese.'
  },
  {
    id: 'hcor_gerado26_028',
    banca: 'HCor',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Puérpera, 6 semanas pós-parto, apresenta dispneia progressiva, edema de membros inferiores e fração de ejeção reduzida ao ecocardiograma, sem cardiopatia prévia conhecida. Qual é o diagnóstico mais provável?',
    options: [
      'Cardiomiopatia periparto',
      'Embolia pulmonar isolada, sem relação com o miocárdio',
      'Miocardiopatia hipertrófica de início tardio',
      'Doença arterial coronariana obstrutiva grave',
      'Pericardite constritiva crônica'
    ],
    correctIndex: 0,
    explanation: 'Insuficiência cardíaca de início no último mês de gestação ou nos primeiros meses pós-parto, sem outra causa identificada, caracteriza a cardiomiopatia periparto.'
  },
  {
    id: 'hcor_gerado26_029',
    banca: 'HCor',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante, 34 semanas, hipertensa crônica, apresenta piora do controle pressórico e proteinúria nova. Qual é o diagnóstico mais provável?',
    options: [
      'Pré-eclâmpsia sobreposta à hipertensão crônica',
      'Hipertensão gestacional isolada',
      'Hipertensão do avental branco',
      'Síndrome nefrótica isolada, sem relação com a gestação',
      'Hipertensão mascarada'
    ],
    correctIndex: 0,
    explanation: 'Piora do controle pressórico associada a proteinúria nova em gestante previamente hipertensa caracteriza pré-eclâmpsia sobreposta, que exige vigilância intensiva.'
  },
  {
    id: 'hcor_gerado26_030',
    banca: 'HCor',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 42 anos, com estenose mitral reumática moderada, planeja engravidar. Qual é a orientação mais apropriada quanto ao momento ideal para correção valvar, se indicada?',
    options: [
      'Idealmente antes da gestação, pelo aumento da sobrecarga volêmica e risco de descompensação gestacional',
      'Apenas durante a gestação, nunca antes, independente do grau de sobrecarga volêmica esperada',
      'Somente no puerpério tardio, independente da gravidade da estenose ou do risco de descompensação',
      'Não há necessidade de considerar correção valvar em nenhum momento, mesmo com estenose moderada',
      'Apenas se surgir fibrilação atrial durante a gestação, sem considerar correção valvar antes'
    ],
    correctIndex: 0,
    explanation: 'Valvopatias significativas devem, idealmente, ser corrigidas antes da gestação, já que o aumento fisiológico de volume sanguíneo pode descompensar lesões moderadas a graves durante a gravidez.'
  },
  {
    id: 'hcor_gerado26_031',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Programa de saúde pública realiza rastreamento de fatores de risco cardiovascular (pressão arterial, glicemia, perfil lipídico) em população adulta assintomática da atenção básica. Qual é o principal objetivo dessa estratégia?',
    options: [
      'Prevenção primária de eventos cardiovasculares por meio da identificação e controle precoce de fatores de risco',
      'Tratamento de doença cardiovascular já estabelecida, e não identificação precoce de fatores de risco',
      'Reabilitação cardíaca pós-evento agudo, voltada a pacientes que já sofreram evento cardiovascular',
      'Substituição do diagnóstico clínico de infarto agudo por um exame de rastreamento populacional',
      'Cuidados paliativos em insuficiência cardíaca terminal, sem relação com prevenção de fatores de risco'
    ],
    correctIndex: 0,
    explanation: 'O rastreamento populacional de fatores de risco cardiovascular na atenção básica é estratégia de prevenção primária, buscando reduzir a incidência de eventos futuros.'
  },
  {
    id: 'hcor_gerado26_032',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Hospital de referência cardiológica implementa programa de reabilitação cardíaca multiprofissional para pacientes pós-infarto, com exercício supervisionado, orientação nutricional e apoio psicológico. Qual é o principal benefício esperado dessa abordagem?',
    options: [
      'Redução de mortalidade e reinternações, além de melhora da qualidade de vida',
      'Cura definitiva da doença arterial coronariana subjacente, sem necessidade de seguimento',
      'Substituição da necessidade de medicação secundária de prevenção cardiovascular',
      'Eliminação total do risco de novo evento cardiovascular, independente de outros fatores',
      'Nenhum benefício comprovado além do efeito psicológico transitório sobre o paciente'
    ],
    correctIndex: 0,
    explanation: 'A reabilitação cardíaca multiprofissional após infarto tem evidência robusta de redução de mortalidade, reinternações e melhora funcional e de qualidade de vida.'
  },
  {
    id: 'hcor_gerado26_033',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Gestor hospitalar analisa indicadores de qualidade assistencial em unidade de cirurgia cardíaca, incluindo taxa de infecção de sítio cirúrgico e tempo de permanência em UTI. Qual é a finalidade principal desse monitoramento?',
    options: [
      'Identificar oportunidades de melhoria contínua na segurança e qualidade do cuidado',
      'Apenas cumprir exigência burocrática sem impacto assistencial',
      'Substituir a avaliação clínica individual de cada paciente',
      'Reduzir exclusivamente custos hospitalares, sem relação com segurança',
      'Servir apenas para fins de marketing institucional'
    ],
    correctIndex: 0,
    explanation: 'Indicadores de qualidade assistencial permitem identificar processos passíveis de melhoria, com foco em segurança do paciente e desfechos clínicos, não apenas em aspectos administrativos.'
  },
  {
    id: 'hcor_gerado26_034',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Paciente com insuficiência cardíaca avançada, refratária a tratamento otimizado e não candidato a transplante, é encaminhado para discussão de cuidados paliativos. Qual é o principal objetivo dessa abordagem nesse contexto?',
    options: [
      'Controle de sintomas e melhora da qualidade de vida, sem necessariamente abreviar ou prolongar a vida',
      'Suspensão de todo acompanhamento cardiológico, mesmo diante de sintomas refratários importantes',
      'Aceleração do processo de óbito, contrariando o objetivo real dos cuidados paliativos',
      'Substituição definitiva de qualquer tratamento medicamentoso cardiológico',
      'Indicação obrigatória de sedação contínua em todos os casos, independente dos sintomas'
    ],
    correctIndex: 0,
    explanation: 'Cuidados paliativos em insuficiência cardíaca avançada visam ao controle de sintomas e qualidade de vida, podendo coexistir com tratamento cardiológico direcionado ao conforto, sem intenção de acelerar ou postergar a morte.'
  },
  {
    id: 'hcor_gerado26_035',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Equipe multiprofissional de um centro de referência cardiológica implementa checklist cirúrgico padronizado (identificação do paciente, sítio cirúrgico, alergias) antes de procedimentos de cirurgia cardíaca. Qual é o principal objetivo dessa prática?',
    options: [
      'Redução de eventos adversos evitáveis relacionados à segurança do paciente',
      'Aumento do tempo cirúrgico sem benefício assistencial',
      'Substituição da avaliação pré-anestésica individualizada',
      'Cumprimento de exigência exclusivamente jurídica, sem impacto clínico',
      'Redução de custos hospitalares como único objetivo'
    ],
    correctIndex: 0,
    explanation: 'Checklists cirúrgicos padronizados são ferramentas de segurança do paciente com evidência de redução de eventos adversos evitáveis em procedimentos cirúrgicos.'
  },
  {
    id: 'hcor_gerado26_036',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Homem, 50 anos, apresenta dislipidemia mista grave (LDL 220 mg/dL, triglicerídeos 450 mg/dL), com xantomas tendinosos e história familiar de infarto precoce em pai e irmão. Qual é a hipótese diagnóstica mais provável?',
    options: [
      'Hipercolesterolemia familiar',
      'Dislipidemia secundária ao hipotireoidismo isolada',
      'Síndrome metabólica isolada, sem componente genético',
      'Diabetes mellitus tipo 2 não diagnosticado como única causa',
      'Uso abusivo de álcool como causa isolada'
    ],
    correctIndex: 0,
    explanation: 'LDL muito elevado, xantomas tendinosos e história familiar de doença coronariana precoce são sugestivos de hipercolesterolemia familiar, que exige tratamento intensivo e rastreamento familiar em cascata.'
  },
  {
    id: 'hcor_gerado26_037',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente em uso de amiodarona por 2 anos para controle de fibrilação atrial apresenta dispneia progressiva e tomografia de tórax com infiltrado intersticial bilateral. Qual é a hipótese diagnóstica mais provável e a conduta?',
    options: [
      'Toxicidade pulmonar por amiodarona; suspensão da droga e avaliação de corticoterapia',
      'Pneumonia bacteriana comunitária; antibiótico isolado, mantendo a amiodarona',
      'Insuficiência cardíaca descompensada isolada; apenas diurético, sem suspender a droga',
      'Embolia pulmonar; anticoagulação isolada, sem investigar a medicação',
      'Tuberculose pulmonar; esquema RIPE, mantendo a amiodarona'
    ],
    correctIndex: 0,
    explanation: 'A toxicidade pulmonar é efeito adverso conhecido do uso prolongado de amiodarona, exigindo suspensão da droga e consideração de corticoterapia conforme gravidade.'
  },
  {
    id: 'hcor_gerado26_038',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta hipertensão arterial associada a hipocalemia espontânea e alcalose metabólica, com atividade de renina plasmática suprimida. Qual é a investigação inicial mais apropriada?',
    options: [
      'Relação aldosterona/renina plasmática',
      'Cortisol urinário de 24 horas como primeiro exame',
      'Metanefrinas plasmáticas como primeiro exame',
      'Ressonância de sela túrcica como primeiro exame',
      'Ecocardiograma transesofágico como primeiro exame'
    ],
    correctIndex: 0,
    explanation: 'Hipertensão com hipocalemia espontânea e renina suprimida sugere hiperaldosteronismo primário, cuja triagem inicial é a relação aldosterona/renina plasmática.'
  },
  {
    id: 'hcor_gerado26_039',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente com insuficiência cardíaca crônica apresenta hiponatremia dilucional persistente apesar de restrição hídrica, com sintomas leves. Qual classe terapêutica pode ser considerada para correção da hiponatremia nesse contexto?',
    options: [
      'Antagonista do receptor de vasopressina (vaptano), com monitorização cuidadosa',
      'Reposição isolada de sódio hipertônico ambulatorial sem monitorização',
      'Restrição hídrica extrema sem qualquer outra medida',
      'Suspensão de todos os diuréticos, independente da congestão',
      'Aumento isolado da dose de IECA para corrigir o sódio'
    ],
    correctIndex: 0,
    explanation: 'Hiponatremia dilucional refratária à restrição hídrica na insuficiência cardíaca pode ser tratada com antagonistas do receptor de vasopressina, sempre com monitorização rigorosa pelo risco de correção rápida excessiva.'
  },
  {
    id: 'hcor_gerado26_040',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente em pós-operatório de troca valvar aórtica biológica desenvolve febre persistente, sopro novo e hemoculturas positivas para Staphylococcus aureus. Qual é a hipótese diagnóstica e a conduta inicial?',
    options: [
      'Endocardite protética precoce; antibioticoterapia prolongada e avaliação cirúrgica conforme gravidade',
      'Infecção de ferida operatória superficial; apenas curativo local, sem investigação cardíaca',
      'Síndrome de Dressler; anti-inflamatório isolado, sem antibiótico',
      'Rejeição da bioprótese; corticoide isolado',
      'Pneumonia associada à ventilação; antibiótico respiratório isolado'
    ],
    correctIndex: 0,
    explanation: 'Febre, sopro novo e hemoculturas positivas após troca valvar sugerem endocardite protética precoce, exigindo antibioticoterapia prolongada e avaliação cirúrgica conforme gravidade e complicações.'
  },
  {
    id: 'hcor_gerado26_041',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta dor torácica intensa, súbita, com irradiação para o dorso, descrita como "rasgando", com diferença de pressão arterial maior que 20 mmHg entre os braços. Qual é a hipótese diagnóstica e a conduta imediata?',
    options: [
      'Dissecção aguda de aorta; controle rigoroso da frequência cardíaca e pressão arterial, com angiotomografia de urgência',
      'Infarto agudo do miocárdio; trombólise imediata, sem investigação adicional da assimetria de pulsos',
      'Pericardite aguda; anti-inflamatório isolado, sem necessidade de investigação de imagem da aorta',
      'Embolia pulmonar; anticoagulação plena imediata, sem investigação adicional da aorta torácica',
      'Espasmo esofágico; antiespasmódico isolado, sem necessidade de exame de imagem da aorta'
    ],
    correctIndex: 0,
    explanation: 'Dor torácica súbita "em rasgação" com assimetria pressórica entre os membros sugere dissecção de aorta; o controle inicial de frequência e pressão arterial (betabloqueador) antecede a confirmação por imagem.'
  },
  {
    id: 'hcor_gerado26_042',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente com estenose aórtica moderada, assintomática, é acompanhado ambulatorialmente. Qual é a conduta mais apropriada quanto à periodicidade de reavaliação ecocardiográfica?',
    options: [
      'Reavaliação ecocardiográfica periódica (geralmente anual) para monitorar progressão',
      'Nenhuma reavaliação é necessária até o surgimento de sintomas, mesmo com estenose moderada',
      'Cirurgia valvar imediata, independente de sintomas ou de gravidade ecocardiográfica',
      'Reavaliação apenas a cada 10 anos, intervalo insuficiente para monitorar a progressão',
      'Suspensão de qualquer acompanhamento após o diagnóstico inicial da estenose moderada'
    ],
    correctIndex: 0,
    explanation: 'Estenose aórtica assintomática exige acompanhamento ecocardiográfico periódico para detectar progressão e surgimento de sintomas, que mudariam a indicação terapêutica.'
  },
  {
    id: 'hcor_gerado26_043',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta choque cardiogênico refratário a inotrópicos após infarto extenso, aguardando definição de estratégia de revascularização. Qual dispositivo de suporte circulatório temporário pode ser considerado como ponte terapêutica?',
    options: [
      'Balão intra-aórtico ou dispositivo de assistência circulatória de curta duração',
      'Marca-passo definitivo isolado, sem qualquer suporte circulatório mecânico associado',
      'Apenas aumento da dose de vasopressor, sem dispositivo mecânico',
      'Cardioversão elétrica isolada, sem qualquer suporte circulatório mecânico associado',
      'Diálise isolada, sem qualquer suporte circulatório mecânico como ponte terapêutica'
    ],
    correctIndex: 0,
    explanation: 'No choque cardiogênico refratário, dispositivos de suporte circulatório mecânico temporário (como balão intra-aórtico ou ECMO) podem servir de ponte até a definição terapêutica definitiva.'
  },
  {
    id: 'hcor_gerado26_044',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente jovem, sem fatores de risco cardiovascular clássicos, apresenta infarto agudo do miocárdio. Angiografia coronariana não mostra lesões ateroscleróticas obstrutivas. Qual é a hipótese diagnóstica a ser considerada?',
    options: [
      'Infarto com coronárias não obstrutivas (MINOCA), incluindo dissecção coronariana espontânea como possível causa',
      'Angina estável típica, achado que dispensaria qualquer investigação adicional após angiografia normal',
      'Pericardite aguda isolada, quadro que não seria compatível com elevação de troponina',
      'Síndrome de Takotsubo excluída automaticamente pela angiografia normal',
      'Erro laboratorial na dosagem de troponina, dispensando qualquer investigação cardiológica adicional'
    ],
    correctIndex: 0,
    explanation: 'Infarto com coronárias angiograficamente não obstrutivas (MINOCA) tem diversas causas possíveis, incluindo dissecção coronariana espontânea, especialmente em mulheres jovens, exigindo investigação adicional direcionada.'
  },
  {
    id: 'hcor_gerado26_045',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente com fibrilação atrial persistente, sintomática apesar de controle adequado de frequência cardíaca, opta por estratégia de controle de ritmo. Qual é a conduta antes de uma cardioversão eletiva, considerando duração da arritmia maior que 48 horas?',
    options: [
      'Anticoagulação por pelo menos 3 semanas antes da cardioversão, ou ecocardiograma transesofágico para excluir trombo atrial',
      'Cardioversão imediata sem qualquer anticoagulação prévia, mesmo com arritmia de mais de 48 horas de duração',
      'Apenas AAS em dose antiagregante antes da cardioversão, sem necessidade de anticoagulação plena',
      'Cardioversão contraindicada permanentemente após 48 horas de arritmia, mesmo com anticoagulação adequada',
      'Anticoagulação apenas após a cardioversão, nunca antes do procedimento, independente do risco de trombo'
    ],
    correctIndex: 0,
    explanation: 'Fibrilação atrial com mais de 48 horas de duração exige anticoagulação adequada por pelo menos 3 semanas antes da cardioversão eletiva, ou exclusão de trombo atrial por ecocardiograma transesofágico, pelo risco embólico.'
  },
  {
    id: 'hcor_gerado26_046',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com insuficiência cardíaca terminal refratária a todas as terapias otimizadas, incluindo dispositivos, é avaliado para transplante cardíaco. Qual é uma contraindicação relevante a ser investigada antes da indicação?',
    options: [
      'Hipertensão pulmonar grave e fixa não reversível',
      'Idade isoladamente acima de 40 anos, sem outras comorbidades',
      'Fração de ejeção reduzida isolada, sem outras alterações',
      'Uso prévio de betabloqueador',
      'Presença de marca-passo definitivo prévio'
    ],
    correctIndex: 0,
    explanation: 'Hipertensão pulmonar grave e fixa é contraindicação relativa/absoluta relevante ao transplante cardíaco isolado, pelo risco de falência do enxerto no ventrículo direito não adaptado.'
  },
  {
    id: 'hcor_gerado26_047',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com estenose carotídea sintomática (AIT recente) de 75% ao Doppler é avaliado quanto à conduta cirúrgica. Qual é a recomendação mais apropriada?',
    options: [
      'Endarterectomia de carótida em tempo oportuno, associada a tratamento clínico otimizado',
      'Apenas tratamento clínico isolado, sem cirurgia, independente do grau de estenose',
      'Observação por 1 ano antes de considerar qualquer intervenção',
      'Angioplastia carotídea contraindicada em qualquer situação',
      'Anticoagulação plena isolada, sem cirurgia'
    ],
    correctIndex: 0,
    explanation: 'Estenose carotídea sintomática de alto grau (geralmente acima de 70%) tem indicação de endarterectomia em tempo oportuno para reduzir risco de novo evento isquêmico.'
  },
  {
    id: 'hcor_gerado26_048',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente no pós-operatório de cirurgia cardíaca desenvolve fibrilação atrial de início recente, hemodinamicamente estável. Qual é a conduta inicial mais apropriada?',
    options: [
      'Controle de frequência cardíaca e correção de distúrbios eletrolíticos, com avaliação de anticoagulação conforme risco',
      'Cardioversão elétrica imediata em todos os casos, independente da estabilidade',
      'Apenas observação clínica, sem qualquer controle de frequência cardíaca ou avaliação eletrolítica',
      'Reoperação cardíaca de urgência, indicada mesmo em fibrilação atrial hemodinamicamente estável',
      'Suspensão de todo suporte hemodinâmico, sem controle de frequência ou de distúrbios eletrolíticos'
    ],
    correctIndex: 0,
    explanation: 'Fibrilação atrial pós-operatória de cirurgia cardíaca, em paciente estável, é inicialmente manejada com controle de frequência e correção de distúrbios eletrolíticos, avaliando anticoagulação conforme risco tromboembólico.'
  },
  {
    id: 'hcor_gerado26_049',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com isquemia crítica de membro inferior, dor em repouso e lesão trófica, apresenta oclusão extensa de artéria poplítea sem leito distal adequado para revascularização cirúrgica ou endovascular. Qual é a conduta mais apropriada?',
    options: [
      'Avaliação para amputação, após esgotadas as opções de revascularização',
      'Apenas analgesia isolada, sem qualquer definição de conduta',
      'Observação indefinida sem qualquer intervenção',
      'Anticoagulação isolada como tratamento definitivo',
      'Simpatectomia lombar como primeira escolha isolada'
    ],
    correctIndex: 0,
    explanation: 'Isquemia crítica sem possibilidade técnica de revascularização, com dor refratária e lesão trófica extensa, pode exigir amputação como conduta definitiva para controle da dor e infecção.'
  },
  {
    id: 'hcor_gerado26_050',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente em pós-operatório de cirurgia cardíaca apresenta débito urinário reduzido, creatinina em elevação progressiva e sinais de sobrecarga volêmica refratária a diuréticos em altas doses. Qual é a conduta mais apropriada?',
    options: [
      'Terapia renal substitutiva (diálise) considerando a sobrecarga refratária',
      'Aumento indefinido da dose de diurético, sem considerar diálise',
      'Restrição proteica isolada como tratamento definitivo',
      'Apenas observação clínica, sem qualquer intervenção',
      'Suspensão de toda hidratação sem outra conduta'
    ],
    correctIndex: 0,
    explanation: 'Lesão renal aguda pós-cirurgia cardíaca com sobrecarga volêmica refratária a diuréticos é indicação de terapia renal substitutiva.'
  },
  {
    id: 'hcor_gerado26_051',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com varizes de membros inferiores sintomáticas, refluxo importante em veia safena magna confirmado por Doppler, sem melhora com medidas conservadoras por 6 meses. Qual é a conduta mais apropriada?',
    options: [
      'Tratamento cirúrgico ou endovascular da insuficiência safênica (ablação térmica ou química, ou cirurgia)',
      'Apenas meias de compressão elástica indefinidamente, sem qualquer indicação de ablação ou cirurgia',
      'Amputação preventiva do membro, desproporcional à gravidade da insuficiência safênica',
      'Anticoagulação plena contínua como tratamento definitivo, sem indicação de ablação da safena',
      'Observação sem qualquer conduta adicional, mesmo após falha do tratamento conservador'
    ],
    correctIndex: 0,
    explanation: 'Varizes sintomáticas refratárias a tratamento conservador, com refluxo confirmado, têm indicação de tratamento intervencionista da veia insuficiente.'
  },
  {
    id: 'hcor_gerado26_052',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com trombose venosa profunda extensa de membro inferior, com risco de síndrome pós-trombótica grave, é avaliado quanto a terapia trombolítica dirigida por cateter. Qual é um critério importante a favor dessa conduta em vez de apenas anticoagulação?',
    options: [
      'Trombo extenso e recente (iliofemoral) em paciente com baixo risco de sangramento e boa expectativa funcional',
      'Trombose antiga, de mais de 6 meses de evolução, contexto que contraindica a trombólise dirigida',
      'Presença de contraindicação absoluta a qualquer terapia trombolítica',
      'Trombose distal isolada e assintomática, sem indicação de trombólise dirigida por cateter',
      'Idade avançada isoladamente, independente do risco de sangramento'
    ],
    correctIndex: 0,
    explanation: 'A trombólise dirigida por cateter é considerada em trombose iliofemoral extensa e recente, em pacientes com baixo risco hemorrágico, buscando reduzir o risco de síndrome pós-trombótica.'
  },
  {
    id: 'hcor_gerado26_053',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Recém-nascido apresenta sopro sistólico suave, assintomático, sem repercussão hemodinâmica, com ecocardiograma mostrando comunicação interatrial pequena (ostium secundum de 4 mm). Qual é a conduta mais apropriada?',
    options: [
      'Acompanhamento clínico, já que defeitos pequenos frequentemente fecham espontaneamente',
      'Correção cirúrgica imediata, independente do tamanho ou da chance de fechamento espontâneo',
      'Cateterismo intervencionista de urgência nos primeiros dias de vida',
      'Antibioticoterapia profilática contínua, sem relação com o fechamento do defeito septal',
      'Transplante cardíaco preventivo, desproporcional a um defeito septal pequeno e assintomático'
    ],
    correctIndex: 0,
    explanation: 'Comunicações interatriais pequenas e assintomáticas frequentemente fecham espontaneamente, sendo o acompanhamento clínico a conduta inicial apropriada.'
  },
  {
    id: 'hcor_gerado26_054',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Lactente apresenta cianose que piora com o choro e episódios de hipóxia com agitação, melhorando ao colocar os joelhos junto ao peito. Qual é a fisiopatologia dessa manobra postural na tetralogia de Fallot?',
    options: [
      'Aumento da resistência vascular sistêmica, reduzindo o shunt direita-esquerda e melhorando a oxigenação',
      'Redução da resistência vascular sistêmica, aumentando o shunt direita-esquerda e piorando a cianose',
      'Aumento do retorno venoso pulmonar isolado, sem relação com o shunt',
      'Efeito exclusivamente psicológico, sem qualquer base fisiológica sobre a resistência vascular',
      'Redução da frequência cardíaca isolada, sem relação com o shunt'
    ],
    correctIndex: 0,
    explanation: 'A posição genupeitoral aumenta a resistência vascular sistêmica, reduzindo o shunt direita-esquerda através da comunicação interventricular e melhorando temporariamente a oxigenação na crise hipoxêmica.'
  },
  {
    id: 'hcor_gerado26_055',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança com cardiopatia congênita corrigida cirurgicamente na infância é levada ao dentista para procedimento invasivo. Qual é a orientação atual quanto à profilaxia antibiótica para endocardite nesse contexto?',
    options: [
      'Profilaxia reservada a situações de alto risco específicas, conforme diretrizes atuais, não sendo mais rotina universal para todo cardiopata',
      'Profilaxia obrigatória para qualquer procedimento odontológico invasivo, em qualquer cardiopata operado, independente do risco atual de endocardite',
      'Profilaxia totalmente desnecessária, mesmo em cardiopatias congênitas complexas de altíssimo risco de endocardite infecciosa',
      'Profilaxia apenas com antifúngico, nunca com antibiótico, independente do tipo de procedimento ou do risco de endocardite',
      'Profilaxia deve ser mantida por toda a vida, independente do tipo de defeito, da correção realizada ou das diretrizes atuais'
    ],
    correctIndex: 0,
    explanation: 'As diretrizes atuais restringiram a indicação de profilaxia antibiótica para endocardite a grupos de altíssimo risco, não sendo mais recomendada de forma universal para todo paciente com cardiopatia congênita corrigida.'
  },
  {
    id: 'hcor_gerado26_056',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Recém-nascido com coarctação de aorta grave apresenta piora súbita da perfusão periférica e pulsos femorais diminuídos após o fechamento espontâneo do canal arterial. Qual é a conduta imediata?',
    options: [
      'Reabertura farmacológica do canal arterial com prostaglandina E1, seguida de correção cirúrgica',
      'Apenas suporte volêmico, sem considerar a reabertura farmacológica do canal arterial',
      'Diurético isolado, sem infusão de prostaglandina E1 para reabertura do canal arterial',
      'Observação clínica sem qualquer intervenção medicamentosa, mesmo com pulsos femorais diminuídos',
      'Cirurgia imediata sem qualquer suporte prévio com prostaglandina'
    ],
    correctIndex: 0,
    explanation: 'Na coarctação de aorta grave dependente de canal arterial, a reabertura com prostaglandina E1 restabelece o fluxo distal até a correção cirúrgica definitiva.'
  },
  {
    id: 'hcor_gerado26_057',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança, 8 anos, apresenta sopro cardíaco inocente detectado em exame de rotina, sem sintomas, sem irradiação significativa, que varia com a posição e desaparece em decúbito. Qual é a conduta mais apropriada?',
    options: [
      'Tranquilização dos pais, sem necessidade de restrição de atividades ou investigação adicional extensa',
      'Ecocardiograma obrigatório em todos os casos, mesmo diante de sopro claramente inocente',
      'Restrição de atividade física até investigação completa, mesmo com características de sopro inocente',
      'Encaminhamento imediato para cirurgia cardíaca, desproporcional a um sopro inocente assintomático',
      'Início empírico de betabloqueador, sem qualquer indicação diante de um sopro claramente inocente'
    ],
    correctIndex: 0,
    explanation: 'Sopros inocentes têm características típicas (variam com posição, sem irradiação relevante, assintomáticos) e não exigem restrição ou investigação invasiva, apenas acompanhamento clínico.'
  },
  {
    id: 'hcor_gerado26_058',
    banca: 'HCor',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante, 26 anos, com miocardiopatia dilatada prévia (fração de ejeção de 35%), é acompanhada em conjunto por obstetra e cardiologista. Qual é a principal razão para esse acompanhamento multiprofissional intensivo?',
    options: [
      'Risco aumentado de descompensação cardíaca pela sobrecarga hemodinâmica fisiológica da gestação',
      'Nenhum risco adicional além do risco obstétrico habitual',
      'Risco exclusivamente fetal, sem repercussão materna',
      'Necessidade apenas de ajuste estético do parto',
      'Indicação obrigatória de interrupção da gestação em qualquer caso de miocardiopatia'
    ],
    correctIndex: 0,
    explanation: 'A gestação aumenta significativamente a volemia e o débito cardíaco, podendo descompensar uma miocardiopatia prévia, justificando acompanhamento multiprofissional intensivo.'
  },
  {
    id: 'hcor_gerado26_059',
    banca: 'HCor',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante, 30 semanas, com histórico de arritmia supraventricular recorrente, apresenta episódio de taquicardia sintomática. Qual é a manobra inicial mais segura a ser tentada antes de considerar medicação?',
    options: [
      'Manobra vagal (como manobra de Valsalva modificada)',
      'Cardioversão elétrica imediata, independente da estabilidade',
      'Amiodarona intravenosa como primeira escolha, sem tentar manobra vagal',
      'Interrupção imediata da gestação',
      'Betabloqueador em altas doses sem qualquer tentativa não farmacológica prévia'
    ],
    correctIndex: 0,
    explanation: 'Manobras vagais são seguras na gestação e devem ser tentadas antes de medicações antiarrítmicas em taquicardias supraventriculares estáveis.'
  },
  {
    id: 'hcor_gerado26_060',
    banca: 'HCor',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 38 anos, com hipertensão pulmonar grave conhecida, engravida inadvertidamente. Qual é a orientação mais apropriada quanto ao risco dessa gestação?',
    options: [
      'Altíssimo risco de mortalidade materna, devendo ser discutida com a paciente, incluindo a opção de interrupção da gestação conforme legislação vigente',
      'Gestação considerada de risco habitual, dispensando discussão sobre interrupção da gestação ou cuidados especiais em centro de referência',
      'Nenhum risco relevante à vida materna, podendo seguir apenas o pré-natal de rotina, sem necessidade de acompanhamento em centro de referência',
      'Indicação obrigatória de parto vaginal sem qualquer preparo especial, mesmo diante do altíssimo risco de mortalidade materna',
      'Contraindicação apenas para amamentação, sem qualquer risco gestacional associado à hipertensão pulmonar grave'
    ],
    correctIndex: 0,
    explanation: 'Hipertensão pulmonar grave é uma das condições de maior risco de mortalidade materna na gestação, exigindo discussão cuidadosa e individualizada sobre a continuidade da gestação.'
  },
  {
    id: 'hcor_gerado26_061',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Programa de telemonitoramento acompanha pacientes com insuficiência cardíaca crônica após alta hospitalar, com aferição diária de peso e sintomas transmitidos remotamente à equipe. Qual é o principal benefício esperado dessa estratégia?',
    options: [
      'Detecção precoce de descompensação, permitindo intervenção antes de nova internação',
      'Substituição completa das consultas presenciais de rotina pela monitorização remota exclusiva',
      'Eliminação total da necessidade de medicação para insuficiência cardíaca crônica',
      'Nenhum impacto comprovado sobre reinternações ou sobre a detecção precoce de descompensação',
      'Redução exclusiva de custos assistenciais, sem qualquer benefício clínico documentado'
    ],
    correctIndex: 0,
    explanation: 'O telemonitoramento permite identificar sinais precoces de descompensação (como ganho de peso rápido), possibilitando intervenção antecipada e potencial redução de reinternações.'
  },
  {
    id: 'hcor_gerado26_062',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Instituição de saúde realiza auditoria de prontuários para verificar adesão a diretrizes de prescrição de dupla antiagregação após implante de stent coronariano. Qual é o principal objetivo dessa auditoria?',
    options: [
      'Garantir adesão a práticas baseadas em evidência, reduzindo risco de trombose de stent',
      'Aumentar o faturamento hospitalar, sem qualquer relação com o desfecho clínico do paciente',
      'Substituir a autonomia médica na decisão terapêutica individual',
      'Servir apenas para fins de certificação, sem impacto assistencial',
      'Reduzir o tempo de consulta médica, sem relação com a adesão a diretrizes de prescrição'
    ],
    correctIndex: 0,
    explanation: 'Auditorias de adesão a diretrizes clínicas (como duração adequada da dupla antiagregação) visam garantir prática baseada em evidência e reduzir desfechos adversos como trombose de stent.'
  },
  {
    id: 'hcor_gerado26_063',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Equipe de um centro cardiológico de referência realiza discussão em conjunto (heart team) envolvendo cardiologista clínico, cirurgião cardíaco e hemodinamicista para definir a melhor estratégia de revascularização em caso complexo. Qual é o principal benefício dessa abordagem multidisciplinar?',
    options: [
      'Decisão terapêutica mais equilibrada, considerando riscos e benefícios de diferentes abordagens por especialistas complementares',
      'Aumento do tempo de decisão terapêutica, sem qualquer benefício clínico adicional demonstrado na literatura',
      'Substituição da vontade do paciente na decisão final, retirando sua autonomia sobre a escolha terapêutica',
      'Redução da responsabilidade individual de cada profissional, sem qualquer benefício real ao paciente',
      'Nenhuma vantagem comprovada em relação à decisão isolada tomada por um único especialista'
    ],
    correctIndex: 0,
    explanation: 'A discussão em heart team integra diferentes perspectivas especializadas, produzindo decisões mais equilibradas em casos complexos de doença coronariana ou valvar, com evidência de melhores desfechos.'
  },
  {
    id: 'hcor_gerado26_064',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Equipe de segurança do paciente de um hospital cardiológico implementa sistema de dupla checagem para prescrição e administração de anticoagulantes, medicação de alto risco. Qual é a principal justificativa para essa prática?',
    options: [
      'Anticoagulantes são medicações de alto risco de dano em caso de erro de dose, exigindo barreiras adicionais de segurança',
      'Trata-se de exigência burocrática sem qualquer base em evidência de segurança do paciente',
      'A dupla checagem é necessária apenas para medicações de baixo custo, sem relação com o risco de dano',
      'O objetivo é exclusivamente reduzir o tempo de administração, sem relação com a segurança do paciente',
      'A prática visa apenas ao cumprimento de metas administrativas, sem relação com segurança'
    ],
    correctIndex: 0,
    explanation: 'Anticoagulantes estão entre as medicações de alto risco, com potencial de dano grave em caso de erro; a dupla checagem é uma barreira reconhecida de segurança do paciente para esse tipo de fármaco.'
  },
  {
    id: 'hcor_gerado26_065',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta dor torácica atípica e escore de cálcio coronariano (Agatston) de 450, sem sintomas anginosos típicos. Qual é a interpretação mais apropriada desse resultado?',
    options: [
      'Alta carga de aterosclerose coronariana subclínica, associada a risco cardiovascular aumentado, mesmo sem sintomas típicos',
      'Resultado sem qualquer relevância clínica, pois o paciente é assintomático e sem fatores de risco',
      'Exclusão definitiva de doença arterial coronariana, independente do valor do escore de cálcio',
      'Indicação obrigatória de cirurgia de revascularização imediata, independente de outros dados',
      'Necessidade de repetir o exame em 10 anos, sem qualquer investigação ou conduta preventiva adicional'
    ],
    correctIndex: 0,
    explanation: 'Escore de cálcio coronariano elevado indica carga aterosclerótica significativa e maior risco cardiovascular, mesmo em pacientes assintomáticos, orientando intensificação de prevenção e possível investigação funcional adicional.'
  },
  {
    id: 'hcor_gerado26_066',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com estenose mitral reumática grave, sintomática, com anatomia valvar favorável (sem calcificação importante, sem insuficiência associada significativa), é avaliado quanto à conduta terapêutica. Qual é frequentemente a opção preferencial nesse cenário anatômico favorável?',
    options: [
      'Valvuloplastia mitral por balão percutânea',
      'Troca valvar cirúrgica obrigatória em todos os casos, independente da anatomia',
      'Apenas tratamento clínico com diurético, sem qualquer intervenção valvar',
      'Ablação por cateter, sem relação com a valva mitral',
      'Marca-passo definitivo como tratamento da estenose mitral'
    ],
    correctIndex: 0,
    explanation: 'Em estenose mitral reumática com anatomia valvar favorável, a valvuloplastia mitral por balão percutânea é frequentemente a opção preferencial, por ser menos invasiva que a cirurgia.'
  },
  {
    id: 'hcor_gerado26_067',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente idoso, alto risco cirúrgico (EuroSCORE elevado), com estenose aórtica grave sintomática, é avaliado pelo heart team. Qual é uma alternativa à cirurgia aberta convencional a ser considerada nesse perfil de risco?',
    options: [
      'Implante valvar aórtico transcateter (TAVI)',
      'Apenas tratamento clínico paliativo, sem qualquer intervenção valvar',
      'Valvuloplastia por balão isolada como tratamento definitivo em adultos',
      'Observação indefinida, mesmo sintomática e de alto risco',
      'Marca-passo definitivo como alternativa à troca valvar'
    ],
    correctIndex: 0,
    explanation: 'Em pacientes de alto risco cirúrgico com estenose aórtica grave sintomática, o implante valvar aórtico transcateter (TAVI) é alternativa estabelecida à cirurgia aberta convencional.'
  },
  {
    id: 'hcor_gerado26_068',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta síncope recorrente durante mudança postural, com queda documentada da pressão arterial sistólica maior que 20 mmHg ao teste de inclinação (tilt test). Qual é o diagnóstico mais provável?',
    options: [
      'Hipotensão ortostática',
      'Síncope vasovagal isolada, sem relação postural',
      'Bloqueio atrioventricular completo',
      'Taquicardia ventricular sustentada',
      'Estenose aórtica grave'
    ],
    correctIndex: 0,
    explanation: 'Queda significativa da pressão arterial ao assumir a posição ortostática, documentada objetivamente, confirma hipotensão ortostática como causa da síncope.'
  },
  {
    id: 'hcor_gerado26_069',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente com diagnóstico recente de fibrilação atrial não valvar, CHA2DS2-VASc de 3, é avaliado quanto à escolha do anticoagulante. Qual classe é geralmente preferida em relação à varfarina, na ausência de contraindicações específicas?',
    options: [
      'Anticoagulantes orais diretos (como inibidores do fator Xa ou da trombina)',
      'Ácido acetilsalicílico isolado, sem qualquer anticoagulante oral associado',
      'Heparina não fracionada contínua por via oral, via inadequada para anticoagulação crônica',
      'Nenhuma anticoagulação é necessária com esse escore de risco tromboembólico',
      'Clopidogrel isolado como substituto de anticoagulação plena'
    ],
    correctIndex: 0,
    explanation: 'Em fibrilação atrial não valvar, os anticoagulantes orais diretos são geralmente preferidos à varfarina pela maior praticidade e perfil de segurança, na ausência de contraindicações como próteses mecânicas ou estenose mitral reumática grave.'
  },
  {
    id: 'hcor_gerado26_070',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta elevação isolada de troponina em contexto de sepse grave, sem dor torácica ou alterações isquêmicas ao ECG. Qual é a interpretação mais apropriada desse achado?',
    options: [
      'Lesão miocárdica não isquêmica associada à doença crítica, devendo ser interpretada no contexto clínico geral',
      'Infarto agudo do miocárdio com supradesnivelamento do ST, exigindo trombólise imediata',
      'Erro laboratorial, devendo ser ignorado sem qualquer investigação do contexto clínico associado',
      'Indicação obrigatória de cateterismo de urgência, independente do quadro clínico',
      'Pericardite aguda isolada, sem necessidade de qualquer investigação do quadro séptico associado'
    ],
    correctIndex: 0,
    explanation: 'Elevação de troponina pode ocorrer por lesão miocárdica não isquêmica em diversas condições críticas (sepse, por exemplo), devendo ser interpretada dentro do contexto clínico geral, não apenas como sinônimo de infarto coronariano.'
  },
  {
    id: 'hcor_gerado26_071',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente com diagnóstico de miocardite viral confirmada por ressonância cardíaca apresenta arritmias ventriculares frequentes e disfunção sistólica moderada. Qual é a orientação mais apropriada quanto à atividade física no período agudo?',
    options: [
      'Restrição de exercícios físicos por período determinado, com reavaliação antes do retorno gradual',
      'Liberação imediata para esportes competitivos, sem qualquer restrição',
      'Nenhuma orientação especial é necessária além do tratamento medicamentoso',
      'Indicação obrigatória de exercício físico intenso para acelerar a recuperação',
      'Restrição apenas de natação, sem qualquer outra limitação de atividade física'
    ],
    correctIndex: 0,
    explanation: 'Miocardite aguda com arritmia e disfunção associadas exige restrição temporária de atividade física pelo risco de morte súbita induzida por exercício, com retorno gradual após reavaliação.'
  },
  {
    id: 'hcor_gerado26_072',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta quadro de dor torácica associada a estresse emocional intenso recente, com supradesnivelamento discreto de ST, troponina levemente elevada, mas coronárias normais à angiografia e acinesia apical característica ao ventriculograma ("balonamento apical"). Qual é o diagnóstico mais provável?',
    options: [
      'Cardiomiopatia de Takotsubo (induzida por estresse)',
      'Infarto agudo do miocárdio com supra de ST clássico',
      'Miocardiopatia hipertrófica obstrutiva',
      'Pericardite constritiva crônica',
      'Displasia arritmogênica do ventrículo direito'
    ],
    correctIndex: 0,
    explanation: 'O padrão de balonamento apical transitório desencadeado por estresse emocional, com coronárias normais, é característico da cardiomiopatia de Takotsubo.'
  },
  {
    id: 'hcor_gerado26_073',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente com insuficiência cardíaca com fração de ejeção reduzida, já em uso otimizado de IECA, betabloqueador, antagonista mineralocorticoide e inibidor de SGLT2, permanece com congestão. Qual é a próxima classe a ser considerada conforme diretrizes atuais de terapia quádrupla?',
    options: [
      'Substituição do IECA por inibidor da neprilisina e do receptor de angiotensina (sacubitril-valsartana), se ainda não realizada',
      'Suspensão de todas as medicações otimizadas e reinício isolado de diurético de alça em altas doses',
      'Apenas aumento da dose de diurético de alça, sem qualquer ajuste das demais classes otimizadas',
      'Substituição do betabloqueador por bloqueador de canal de cálcio não recomendado nessa insuficiência',
      'Interrupção do antagonista mineralocorticoide, mantendo apenas o diurético e o betabloqueador'
    ],
    correctIndex: 0,
    explanation: 'A terapia quádrupla moderna da insuficiência cardíaca com fração reduzida inclui a substituição do IECA/BRA por sacubitril-valsartana quando ainda não realizada, associada a betabloqueador, antagonista mineralocorticoide e iSGLT2.'
  },
  {
    id: 'hcor_gerado26_074',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta elevação importante de peptídeo natriurético tipo B (BNP) em contexto de dispneia aguda. Qual é a principal utilidade clínica desse marcador nesse cenário?',
    options: [
      'Auxiliar na diferenciação entre causa cardíaca e não cardíaca da dispneia aguda',
      'Confirmar isoladamente o diagnóstico de infarto agudo do miocárdio',
      'Substituir completamente a necessidade de ecocardiograma em qualquer situação',
      'Diagnosticar especificamente embolia pulmonar, sem relação com insuficiência cardíaca',
      'Avaliar exclusivamente a função renal do paciente'
    ],
    correctIndex: 0,
    explanation: 'O BNP elevado auxilia na diferenciação entre dispneia de causa cardíaca (insuficiência cardíaca) e não cardíaca em pacientes com quadro agudo, sendo um exame complementar e não substitutivo de avaliação clínica e ecocardiográfica.'
  },
  {
    id: 'hcor_gerado26_075',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta bradicardia sinusal assintomática de 48 bpm durante sono, identificada em Holter de rotina, sem qualquer sintoma associado. Qual é a conduta mais apropriada?',
    options: [
      'Nenhuma intervenção específica é necessária, já que pode representar variante fisiológica, especialmente em atletas',
      'Implante de marca-passo definitivo imediato, mesmo na ausência completa de sintomas ou repercussão',
      'Atropina contínua por via oral, formulação e indicação inexistentes nesse contexto assintomático',
      'Suspensão de toda atividade física habitual, mesmo sendo um achado fisiológico comum do sono',
      'Internação hospitalar de urgência, desproporcional a um achado assintomático do Holter'
    ],
    correctIndex: 0,
    explanation: 'Bradicardia sinusal assintomática, especialmente durante o sono ou em pessoas fisicamente ativas, é frequentemente uma variante fisiológica que não exige intervenção específica.'
  },
  {
    id: 'hcor_gerado26_076',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com angina refratária ao tratamento clínico máximo e à revascularização (não candidato a novo procedimento), com leito coronariano difuso não passível de nova intervenção. Qual terapia complementar pode ser considerada para alívio sintomático?',
    options: [
      'Neuroestimulação elétrica transcutânea ou contrapulsação externa aumentada, como terapias complementares para angina refratária',
      'Transplante cardíaco imediato como única alternativa, sem considerar terapias complementares menos invasivas',
      'Nenhuma opção terapêutica adicional está disponível além de analgesia comum sem indicação específica',
      'Ablação por cateter do sistema de condução, procedimento sem relação com o alívio da angina refratária',
      'Suspensão de toda terapia antianginosa, mesmo com sintomas refratários já otimizados clinicamente'
    ],
    correctIndex: 0,
    explanation: 'Em angina refratária sem opção de revascularização adicional, terapias complementares como contrapulsação externa aumentada ou neuroestimulação podem proporcionar alívio sintomático.'
  },
  {
    id: 'hcor_gerado26_077',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente em pós-operatório de implante de dispositivo de assistência ventricular esquerda de longa duração apresenta hematúria e hemólise laboratorial (LDH elevado, haptoglobina baixa), sem outra causa aparente. Qual é a hipótese diagnóstica a ser investigada?',
    options: [
      'Trombose de dispositivo, causando hemólise mecânica',
      'Infecção urinária isolada, sem relação com o dispositivo',
      'Rejeição imunológica do dispositivo mecânico',
      'Efeito adverso isolado de anticoagulante, sem relação com o dispositivo',
      'Litíase renal isolada, sem relação com hemólise'
    ],
    correctIndex: 0,
    explanation: 'Hemólise associada a dispositivo de assistência ventricular sugere trombose da bomba, uma complicação grave que exige investigação e conduta imediata (ajuste de anticoagulação, avaliação de troca do dispositivo).'
  },
  {
    id: 'hcor_gerado26_078',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Recém-nascido com hipoplasia de coração esquerdo é diagnosticado ainda na vida fetal. Qual é a abordagem terapêutica inicial mais apropriada após o nascimento?',
    options: [
      'Manutenção do canal arterial pérvio com prostaglandina E1 até definição da estratégia cirúrgica estagiada',
      'Fechamento imediato do canal arterial com indometacina',
      'Alta hospitalar sem qualquer intervenção, por ser incompatível com a vida',
      'Cirurgia corretiva completa em uma única etapa nas primeiras 24 horas, sem preparo prévio',
      'Apenas oxigenoterapia isolada, sem manejo do canal arterial'
    ],
    correctIndex: 0,
    explanation: 'Na síndrome de hipoplasia do coração esquerdo, a circulação sistêmica depende do canal arterial; a prostaglandina E1 mantém sua perviedade até a primeira etapa da correção cirúrgica estagiada (procedimento de Norwood).'
  },
  {
    id: 'hcor_gerado26_079',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança com cardiopatia congênita cianótica corrigida apresenta policitemia compensatória crônica, com hematócrito de 65%, sem sintomas de hiperviscosidade. Qual é a conduta mais apropriada?',
    options: [
      'Observação clínica, evitando flebotomias desnecessárias na ausência de sintomas de hiperviscosidade',
      'Sangria terapêutica semanal obrigatória, independente da presença de sintomas de hiperviscosidade',
      'Transfusão de concentrado de hemácias para "diluir" a policitemia, mesmo sem sinais de anemia',
      'Anticoagulação plena isolada, sem qualquer relação com o manejo da policitemia compensatória',
      'Quimioterapia mieloablativa para reduzir a produção de hemácias, sem indicação nesse contexto'
    ],
    correctIndex: 0,
    explanation: 'Policitemia compensatória em cardiopatia cianótica sem sintomas de hiperviscosidade não deve ser tratada rotineiramente com flebotomia, que pode causar depleção de ferro e piora paradoxal dos sintomas.'
  },
  {
    id: 'hcor_gerado26_080',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Serviço de cardiologia institui protocolo de conciliação medicamentosa na admissão e alta hospitalar, comparando medicações em uso domiciliar com as prescritas na internação. Qual é o principal objetivo dessa prática?',
    options: [
      'Reduzir erros de medicação e eventos adversos relacionados a discrepâncias na transição de cuidado',
      'Aumentar o número de medicações prescritas por internação, sem relação com segurança do paciente',
      'Substituir a anamnese médica habitual, sem relação com a transição segura do cuidado',
      'Reduzir exclusivamente o tempo de internação, sem relação com segurança',
      'Cumprir exigência meramente administrativa, sem qualquer impacto sobre erros de medicação'
    ],
    correctIndex: 0,
    explanation: 'A conciliação medicamentosa é prática de segurança do paciente que visa reduzir erros e eventos adversos decorrentes de discrepâncias entre medicações usadas em casa e as prescritas durante a internação.'
  },
  {
    id: 'hcor_gerado26_081',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta elevação de troponina e dor torácica típica, com ECG mostrando supradesnivelamento do segmento ST em V1-V4. Qual é a artéria mais provavelmente acometida?',
    options: [
      'Artéria descendente anterior',
      'Artéria coronária direita',
      'Artéria circunflexa isolada',
      'Tronco de coronária esquerda com padrão restrito a essa topografia',
      'Artéria mesentérica superior'
    ],
    correctIndex: 0,
    explanation: 'Supradesnivelamento de ST em derivações precordiais anteriores (V1-V4) é característico de oclusão da artéria descendente anterior, correspondendo a infarto de parede anterior.'
  },
  {
    id: 'hcor_gerado26_082',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta infarto de parede inferior (supra em DII, DIII, aVF) e, ao exame, hipotensão que piora com nitrato sublingual. Qual é a conduta em relação ao uso de nitrato nesse contexto?',
    options: [
      'Evitar nitrato pelo risco de infarto de ventrículo direito associado, com dependência de pré-carga',
      'Manter nitrato em altas doses, independente da resposta pressórica e do risco de choque',
      'Associar diurético de alça em altas doses para compensar a hipotensão',
      'Aumentar a dose de nitrato para melhorar a perfusão coronariana, mesmo com hipotensão associada',
      'Substituir por outro vasodilatador de ação equivalente, sem outra precaução'
    ],
    correctIndex: 0,
    explanation: 'Infarto inferior pode associar-se a infarto de ventrículo direito, tornando o paciente dependente de pré-carga; o nitrato pode precipitar hipotensão grave nesse contexto e deve ser evitado ou usado com extrema cautela.'
  },
  {
    id: 'hcor_gerado26_083',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente em uso de estatina de alta potência apresenta mialgia importante e CPK elevada 8 vezes o valor de referência. Qual é a conduta mais apropriada?',
    options: [
      'Suspensão da estatina e reavaliação, considerando troca futura por outra opção terapêutica ou dose menor',
      'Manter a mesma dose, pois a mialgia é sempre benigna e autolimitada, mesmo com CPK muito elevada',
      'Aumentar a dose da estatina para compensar o efeito, mesmo com CPK 8 vezes o valor de referência',
      'Associar outra estatina de potência ainda maior imediatamente, sem suspender a anterior',
      'Nenhuma conduta é necessária, independente do nível de CPK ou da intensidade da mialgia'
    ],
    correctIndex: 0,
    explanation: 'Mialgia significativa com CPK muito elevada sugere miopatia induzida por estatina, exigindo suspensão da droga e reavaliação antes de considerar reintrodução em dose menor ou troca de classe.'
  },
  {
    id: 'hcor_gerado26_084',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta parada cardiorrespiratória em ritmo de assistolia. Qual é a conduta apropriada quanto à desfibrilação nesse ritmo?',
    options: [
      'Assistolia não é ritmo chocável; a conduta prioriza compressões de alta qualidade e adrenalina, sem desfibrilação',
      'Desfibrilação imediata é indicada, como em qualquer ritmo de parada cardiorrespiratória',
      'Cardioversão sincronizada é a conduta correta para assistolia, substituindo as compressões torácicas',
      'Apenas observação sem qualquer manobra de reanimação, mesmo diante de ritmo de assistolia',
      'Marca-passo transcutâneo deve substituir as compressões torácicas de alta qualidade'
    ],
    correctIndex: 0,
    explanation: 'Assistolia é ritmo não chocável; o tratamento se baseia em compressões torácicas de alta qualidade, ventilação adequada e adrenalina, sem indicação de desfibrilação.'
  },
  {
    id: 'hcor_gerado26_085',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta hipertensão arterial resistente, definida como pressão não controlada apesar do uso de 3 classes de anti-hipertensivos em doses otimizadas incluindo diurético. Qual é a conduta inicial mais apropriada antes de considerar terapias intervencionistas?',
    options: [
      'Investigar adesão ao tratamento e causas secundárias de hipertensão antes de intensificar ou considerar procedimentos invasivos',
      'Denervação renal imediata, sem qualquer investigação prévia de adesão ou de causas secundárias',
      'Suspensão de todos os anti-hipertensivos para reavaliação do basal, sem investigar causas secundárias',
      'Aumentar indefinidamente o número de classes sem investigar causas secundárias',
      'Indicação cirúrgica de revascularização renal empírica, sem investigação prévia'
    ],
    correctIndex: 0,
    explanation: 'Antes de considerar terapias mais invasivas, a hipertensão resistente exige investigação de adesão ao tratamento e rastreamento de causas secundárias (como hiperaldosteronismo, estenose de artéria renal, apneia do sono).'
  },
  {
    id: 'hcor_gerado26_086',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com angina estável e lesão coronariana única, não complexa, em vaso de bom calibre, com boa função ventricular, é avaliado pelo heart team. Qual é geralmente a conduta preferencial nesse cenário mais simples?',
    options: [
      'Angioplastia coronariana com implante de stent',
      'Cirurgia de revascularização miocárdica como primeira escolha obrigatória',
      'Tratamento clínico isolado, contraindicando qualquer revascularização',
      'Transplante cardíaco preventivo',
      'Marca-passo definitivo, sem relação com a lesão coronariana'
    ],
    correctIndex: 0,
    explanation: 'Lesões coronarianas únicas e não complexas, em pacientes com boa função ventricular, geralmente são tratadas preferencialmente por angioplastia com stent, reservando a cirurgia para casos mais complexos.'
  },
  {
    id: 'hcor_gerado26_087',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente no pós-operatório de cirurgia de revascularização miocárdica apresenta dor e edema unilateral em membro inferior doador do enxerto de veia safena. Doppler confirma trombose venosa profunda. Qual é a conduta apropriada?',
    options: [
      'Anticoagulação terapêutica, conforme protocolo, ponderando o risco de sangramento pós-operatório recente',
      'Nenhuma conduta específica, pois é esperado após retirada de safena, sem risco relevante',
      'Amputação do membro como conduta definitiva, desproporcional a uma trombose venosa profunda',
      'Apenas elevação do membro, sem qualquer anticoagulação, mesmo com trombose confirmada',
      'Trombólise sistêmica imediata, independente do risco de sangramento pós-operatório'
    ],
    correctIndex: 0,
    explanation: 'Trombose venosa profunda confirmada após retirada de safena para enxerto exige anticoagulação terapêutica, com ponderação cuidadosa do risco hemorrágico no contexto pós-operatório recente.'
  },
  {
    id: 'hcor_gerado26_088',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança com cardiopatia congênita cianótica não corrigida apresenta dedos em baqueta de tambor e unhas em vidro de relógio ao exame físico. Qual é a explicação fisiopatológica mais provável para esse achado?',
    options: [
      'Hipoxemia crônica associada ao shunt direita-esquerda persistente',
      'Deficiência de ferro isolada, sem relação com a cardiopatia',
      'Efeito colateral de medicação cardiológica em uso crônico',
      'Achado normal do desenvolvimento, sem relação com a cardiopatia',
      'Manifestação exclusiva de doença hepática associada'
    ],
    correctIndex: 0,
    explanation: 'O baqueteamento digital em cardiopatias congênitas cianóticas está associado à hipoxemia crônica decorrente do shunt direita-esquerda persistente.'
  },
  {
    id: 'hcor_gerado26_089',
    banca: 'HCor',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante com estenose mitral reumática moderada apresenta piora da dispneia e taquicardia no terceiro trimestre, período de maior sobrecarga hemodinâmica fisiológica. Qual classe medicamentosa é geralmente segura e útil para controle de frequência cardíaca nesse contexto?',
    options: [
      'Betabloqueador seletivo, com monitorização adequada do crescimento fetal',
      'Inibidor da enzima conversora de angiotensina, sem restrição na gestação',
      'Varfarina isolada, sem relação com controle de frequência',
      'Amiodarona como primeira escolha, sem considerar riscos fetais',
      'Diurético de alça isolado como único tratamento da taquicardia'
    ],
    correctIndex: 0,
    explanation: 'Betabloqueadores seletivos são geralmente considerados relativamente seguros na gestação para controle de frequência cardíaca em valvopatias, ao contrário de IECA/BRA (contraindicados) e amiodarona (uso restrito por risco fetal).'
  },
  {
    id: 'hcor_gerado26_090',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Centro de referência cardiológica implementa programa estruturado de transição do cuidado (alta responsável) para pacientes internados por descompensação de insuficiência cardíaca, incluindo consulta de retorno agendada em até 7 dias. Qual é o principal objetivo dessa prática?',
    options: [
      'Reduzir o risco de reinternação precoce por descompensação não identificada a tempo',
      'Aumentar artificialmente o número de consultas sem benefício clínico',
      'Substituir a necessidade de orientação sobre sinais de alarme na alta',
      'Reduzir exclusivamente custos administrativos, sem relação com desfecho clínico',
      'Cumprir apenas exigência regulatória sem impacto assistencial'
    ],
    correctIndex: 0,
    explanation: 'Programas de transição de cuidado com consulta precoce após alta por descompensação de insuficiência cardíaca têm evidência de redução de reinternações precoces.'
  },
  {
    id: 'hcor_gerado26_091',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta elevação de pressão arterial isolada em consultório, com valores normais em medidas domiciliares e MAPA. Qual é o diagnóstico e a conduta mais apropriada?',
    options: [
      'Hipertensão do avental branco; seguimento clínico, evitando tratamento farmacológico excessivo baseado apenas na medida de consultório',
      'Hipertensão mascarada; intensificar tratamento imediatamente, mesmo com MAPA e medidas domiciliares normais',
      'Hipertensão sustentada grave; associar 3 classes de anti-hipertensivos de imediato, mesmo com MAPA normal',
      'Emergência hipertensiva; internação imediata, desproporcional a um achado isolado de consultório',
      'Erro de aferição a ser ignorado, sem qualquer conduta de acompanhamento ou seguimento clínico'
    ],
    correctIndex: 0,
    explanation: 'Pressão elevada apenas em consultório, com MAPA e medidas domiciliares normais, caracteriza hipertensão do avental branco, que deve ser acompanhada sem necessariamente intensificar tratamento farmacológico baseado só na medida isolada de consultório.'
  },
  {
    id: 'hcor_gerado26_092',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta dispneia aos esforços progressiva e ecocardiograma mostrando pressão sistólica de artéria pulmonar estimada muito elevada, sem doença do coração esquerdo ou pulmonar evidentes que a justifiquem. Qual é a investigação mais apropriada?',
    options: [
      'Cateterismo cardíaco direito para confirmação hemodinâmica e classificação da hipertensão pulmonar',
      'Angioplastia coronariana empírica, sem investigar a causa da hipertensão pulmonar',
      'Apenas diurético isolado, sem qualquer investigação hemodinâmica adicional da hipertensão pulmonar',
      'Marca-passo definitivo, procedimento sem relação com a investigação da hipertensão pulmonar',
      'Observação sem qualquer investigação complementar, mesmo com pressão pulmonar muito elevada'
    ],
    correctIndex: 0,
    explanation: 'Suspeita de hipertensão pulmonar sem causa cardíaca ou pulmonar esquerda evidente exige confirmação por cateterismo cardíaco direito, exame padrão-ouro para classificação hemodinâmica.'
  },
  {
    id: 'hcor_gerado26_093',
    banca: 'HCor',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Paciente apresenta fibrilação atrial permanente com resposta ventricular elevada apesar de betabloqueador em dose otimizada, com função ventricular preservada. Qual é a conduta mais apropriada para melhor controle de frequência?',
    options: [
      'Associação de digoxina ou ajuste com bloqueador de canal de cálcio não di-hidropiridínico, conforme perfil do paciente',
      'Suspensão de todo tratamento para controle de frequência, mantendo apenas anticoagulação',
      'Cardioversão elétrica obrigatória, independente da duração da arritmia e anticoagulação prévia',
      'Ablação do nó atrioventricular como primeira conduta, sem tentar otimização farmacológica',
      'Aumento isolado da dose de anticoagulante para controlar a frequência ventricular elevada'
    ],
    correctIndex: 0,
    explanation: 'No controle de frequência insuficiente com betabloqueador isolado, pode-se associar digoxina ou bloqueador de canal de cálcio não di-hidropiridínico, conforme função ventricular e perfil clínico do paciente.'
  },
  {
    id: 'hcor_gerado26_094',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com insuficiência aórtica crônica grave, assintomática, apresenta diâmetro diastólico final do ventrículo esquerdo em progressão nos exames seriados, aproximando-se do limiar cirúrgico. Qual é a conduta mais apropriada?',
    options: [
      'Acompanhamento ecocardiográfico mais frequente, com indicação cirúrgica quando atingidos os critérios de dimensão ou disfunção ventricular',
      'Cirurgia imediata, independente de sintomas, critérios ecocardiográficos ou estabilidade da progressão',
      'Suspensão de qualquer acompanhamento até o surgimento de sintomas, mesmo com progressão documentada',
      'Marca-passo definitivo como conduta para a insuficiência aórtica, sem relação com a indicação cirúrgica',
      'Apenas diurético isolado, sem qualquer indicação cirúrgica futura, mesmo com progressão dos diâmetros'
    ],
    correctIndex: 0,
    explanation: 'Insuficiência aórtica crônica assintomática exige acompanhamento seriado, com indicação cirúrgica quando atingidos critérios de dilatação ou disfunção ventricular, mesmo antes do surgimento de sintomas.'
  },
  {
    id: 'hcor_gerado26_095',
    banca: 'HCor',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com fístula arteriovenosa para hemodiálise apresenta frêmito reduzido e dificuldade de punção, com Doppler confirmando estenose significativa próxima à anastomose. Qual é a conduta mais apropriada para preservar o acesso?',
    options: [
      'Angioplastia da estenose para prolongar a patência do acesso',
      'Confecção imediata de novo acesso em outro membro, sem tentar corrigir a estenose atual',
      'Observação isolada, sem qualquer intervenção sobre a estenose',
      'Ligadura da fístula, independente da possibilidade de correção',
      'Anticoagulação plena isolada, sem intervenção sobre a estenose'
    ],
    correctIndex: 0,
    explanation: 'Estenose de fístula arteriovenosa comprometendo seu funcionamento é geralmente tratada por angioplastia para prolongar a patência do acesso vascular, essencial para hemodiálise.'
  },
  {
    id: 'hcor_gerado26_096',
    banca: 'HCor',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Recém-nascido submetido a cirurgia cardíaca complexa (Norwood) evolui bem no pós-operatório imediato, mas os pais apresentam sinais de exaustão emocional e ansiedade importante durante a longa internação. Qual é a conduta mais apropriada da equipe multiprofissional?',
    options: [
      'Suporte psicológico estruturado à família como parte integrante do cuidado, além do cuidado clínico do recém-nascido',
      'Focar exclusivamente nos aspectos clínicos do recém-nascido, sem qualquer suporte à família',
      'Orientar a família a não visitar a criança para reduzir o estresse, sem oferecer suporte psicológico',
      'Encaminhar a família para alta psiquiátrica compulsória, sem qualquer avaliação da equipe multiprofissional',
      'Ignorar os sinais de exaustão, por não ser atribuição da equipe de cardiologia'
    ],
    correctIndex: 0,
    explanation: 'O cuidado centrado na família em UTI pediátrica/neonatal inclui suporte psicológico estruturado aos pais durante internações longas e complexas, reconhecendo o impacto emocional significativo desse processo.'
  },
  {
    id: 'hcor_gerado26_097',
    banca: 'HCor',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante com prótese valvar biológica (sem necessidade de anticoagulação plena) e função valvar normal ao ecocardiograma é acompanhada no pré-natal. Qual é a principal diferença de manejo em relação a uma gestante com prótese mecânica?',
    options: [
      'Menor complexidade quanto à anticoagulação, já que próteses biológicas geralmente não exigem anticoagulação plena contínua',
      'Necessidade idêntica de anticoagulação plena com varfarina durante toda a gestação, como na prótese mecânica',
      'Contraindicação absoluta à gestação em qualquer caso de prótese biológica, mesmo com função normal',
      'Necessidade de troca da prótese biológica por mecânica antes de engravidar, em todos os casos',
      'Nenhuma diferença relevante de manejo entre os dois tipos de prótese durante toda a gestação'
    ],
    correctIndex: 0,
    explanation: 'Próteses biológicas geralmente não exigem anticoagulação plena contínua, o que simplifica o manejo gestacional em comparação às próteses mecânicas, que trazem o dilema da escolha entre varfarina e heparina.'
  },
  {
    id: 'hcor_gerado26_098',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Hospital cardiológico monitora indicador de tempo porta-balão (tempo entre chegada do paciente com infarto e a abertura da artéria por angioplastia). Qual é a relevância clínica desse indicador?',
    options: [
      'Tempos menores estão associados a melhor prognóstico, com menor perda de miocárdio viável',
      'É um indicador puramente administrativo, sem relação com desfecho clínico',
      'Tempos maiores são preferíveis para permitir melhor preparo da equipe, sem prejuízo miocárdico',
      'Não há relação estabelecida entre esse tempo e a mortalidade ou o prognóstico do paciente',
      'É relevante apenas para fins de faturamento hospitalar, sem relação com o prognóstico clínico'
    ],
    correctIndex: 0,
    explanation: 'O tempo porta-balão é indicador de qualidade assistencial diretamente relacionado ao prognóstico no infarto com supra de ST: quanto menor o tempo até a reperfusão, menor a perda de miocárdio viável.'
  },
  {
    id: 'hcor_gerado26_099',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Equipe de um centro de referência cardiológica realiza campanha educativa na comunidade sobre reconhecimento precoce dos sintomas de infarto agudo do miocárdio e importância de buscar atendimento imediato. Qual é o principal objetivo dessa ação de saúde pública?',
    options: [
      'Reduzir o tempo entre o início dos sintomas e a chegada ao serviço de saúde, melhorando o prognóstico',
      'Substituir a necessidade de atendimento médico especializado',
      'Reduzir exclusivamente a demanda por serviços de emergência, sem relação com prognóstico',
      'Diagnosticar infarto agudo do miocárdio sem qualquer avaliação médica',
      'Nenhum impacto relevante é esperado dessa estratégia educativa'
    ],
    correctIndex: 0,
    explanation: 'Campanhas educativas sobre reconhecimento de sintomas de infarto visam reduzir o tempo entre início dos sintomas e busca por atendimento, fator determinante para o sucesso da reperfusão precoce.'
  },
  {
    id: 'hcor_gerado26_100',
    banca: 'HCor',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Serviço de cardiologia implementa registro estruturado de eventos adversos (near miss e eventos com dano) relacionados a procedimentos invasivos, com discussão em reuniões multiprofissionais periódicas. Qual é o principal objetivo dessa prática de segurança do paciente?',
    options: [
      'Identificar falhas sistêmicas e implementar medidas preventivas, promovendo cultura de segurança não punitiva',
      'Punir individualmente o profissional envolvido no evento adverso, sem analisar falhas sistêmicas',
      'Ocultar os eventos de órgãos reguladores externos, sem qualquer discussão multiprofissional interna',
      'Aumentar o número de procedimentos realizados, sem relação com segurança',
      'Servir apenas como registro burocrático, sem qualquer ação corretiva ou preventiva subsequente'
    ],
    correctIndex: 0,
    explanation: 'O registro e discussão estruturada de eventos adversos e near miss visa identificar falhas sistêmicas (não apenas individuais) e implementar medidas preventivas, dentro de uma cultura de segurança não punitiva.'
  },
];
