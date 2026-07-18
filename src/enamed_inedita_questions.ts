// Questões inéditas no estilo ENAMED (vinheta clínica objetiva), criadas para
// complementar o banco oficial de src/enamed_2025_questions.ts.
// Marcadas com banca 'ENAMED (inédita)' — NÃO são questões reais de prova,
// são conteúdo original no mesmo formato/nível de exigência.
export const ENAMED_INEDITA_QUESTIONS: any[] = [
  {
    id: 'enamed_inedita_001',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 26 anos, 26 semanas, obesa (IMC pré-gestacional 32 kg/m²), realiza teste oral de tolerância à glicose de 75g conforme protocolo do pré-natal. Resultados: glicemia de jejum 88 mg/dL; glicemia de 1 hora 185 mg/dL; glicemia de 2 horas 145 mg/dL.\n\nCom base nos critérios diagnósticos vigentes, a interpretação correta é',
    options: [
      'resultado normal, não configura diabetes gestacional.',
      'diabetes gestacional confirmado, pois basta um valor alterado atingir o ponto de corte.',
      'necessário repetir o exame em 4 semanas para confirmação.',
      'diagnóstico de diabetes mellitus prévio à gestação, não gestacional.'
    ],
    correctIndex: 1,
    explanation: 'No TOTG 75g, o diagnóstico de diabetes gestacional é confirmado quando pelo menos um valor atinge ou ultrapassa os pontos de corte (jejum ≥92, 1h ≥180, 2h ≥153 mg/dL); nesse caso, a glicemia de 1 hora (185) já confirma o diagnóstico.'
  },
  {
    id: 'enamed_inedita_002',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 24 anos, com atraso menstrual de 10 semanas, procura atendimento por sangramento vaginal intermitente e náuseas intensas. Ao exame, altura uterina compatível com 16 semanas de gestação, ausência de batimentos cardíacos fetais à sonar Doppler. Beta-hCG sérico de 850.000 mUI/mL. Ultrassonografia transvaginal evidencia útero com conteúdo heterogêneo, com múltiplas vesículas anecoicas, sem identificação de embrião ou saco gestacional.\n\nQual é o diagnóstico mais provável e a conduta inicial?',
    options: [
      'Aborto retido; curetagem uterina de urgência.',
      'Mola hidatiforme completa; esvaziamento uterino por aspiração a vácuo e seguimento com beta-hCG seriado.',
      'Gravidez ectópica cornual; laparotomia exploradora.',
      'Gestação múltipla com óbito de um dos fetos; conduta expectante.'
    ],
    correctIndex: 1,
    explanation: 'Útero maior que o esperado para a idade gestacional, beta-hCG muito elevado e imagem ultrassonográfica heterogênea com múltiplas vesículas, sem embrião, são achados clássicos de mola hidatiforme completa; o tratamento é o esvaziamento uterino por aspiração, com seguimento de beta-hCG seriado para descartar neoplasia trofoblástica gestacional persistente.'
  },
  {
    id: 'enamed_inedita_003',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 32 semanas, hipertensa gestacional em acompanhamento, é internada com queixa de dor em hipocôndrio direito, cefaleia e mal-estar. Exames: plaquetas 78.000/mm³; TGO 210 U/L; TGP 195 U/L; LDH elevado; esfregaço de sangue periférico com esquizócitos.\n\nQual é o diagnóstico e a conduta definitiva?',
    options: [
      'Esteatose hepática aguda da gestação; suporte hepático e aguardar termo.',
      'Síndrome HELLP; interrupção da gestação após estabilização materna.',
      'Colestase intra-hepática da gestação; ácido ursodesoxicólico e conduta expectante até 39 semanas.',
      'Hepatite viral aguda; sorologias e tratamento antiviral específico.'
    ],
    correctIndex: 1,
    explanation: 'A tríade de hemólise (esquizócitos, LDH elevado), elevação de enzimas hepáticas e plaquetopenia em gestante hipertensa define a síndrome HELLP, uma forma grave de pré-eclâmpsia cuja conduta definitiva é a interrupção da gestação após estabilização materna.'
  },
  {
    id: 'enamed_inedita_004',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Recém-nascido a termo, com 30 horas de vida, apresenta icterícia que já se estende até o abdome. Nasceu de parto vaginal, sem intercorrências, em aleitamento materno exclusivo. Mãe tipo sanguíneo O positivo, recém-nascido tipo A positivo. Bilirrubina total de 14 mg/dL, predominantemente indireta.\n\nQual característica torna essa icterícia patológica, exigindo investigação, e não fisiológica?',
    options: [
      'O início nas primeiras 24-36 horas de vida.',
      'A predominância de bilirrubina indireta.',
      'O uso de aleitamento materno exclusivo.',
      'O tipo sanguíneo materno O positivo isoladamente.'
    ],
    correctIndex: 0,
    explanation: 'A icterícia neonatal fisiológica tipicamente surge após 24-36 horas de vida; o início muito precoce é sinal de alarme e sugere causa patológica, como incompatibilidade sanguínea (nesse caso, ABO, mãe O e recém-nascido A), exigindo investigação e frequentemente fototerapia.'
  },
  {
    id: 'enamed_inedita_005',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Lactente de 4 semanas, sexo masculino, primeiro filho, é levado à emergência por vômitos em jato, não biliosos, após as mamadas, com piora progressiva nos últimos 5 dias. A mãe relata que a criança permanece faminta logo após vomitar. Ao exame, criança levemente desidratada, com oliva palpável em região epigástrica à palpação profunda. Exames: gasometria venosa com alcalose metabólica, hipocloremia e hipocalemia.\n\nQual é o diagnóstico mais provável e o exame confirmatório de escolha?',
    options: [
      'Refluxo gastroesofágico; pHmetria de 24 horas.',
      'Estenose hipertrófica do piloro; ultrassonografia abdominal.',
      'Atresia duodenal; radiografia simples de abdome.',
      'Invaginação intestinal; enema com contraste.'
    ],
    correctIndex: 1,
    explanation: 'Vômitos em jato não biliosos, fome logo após o vômito, oliva pilórica palpável e alcalose metabólica hipoclorêmica e hipocalêmica são o quadro clássico de estenose hipertrófica do piloro, tipicamente entre a 3ª e a 6ª semana de vida; a ultrassonografia abdominal é o exame confirmatório de escolha.'
  },
  {
    id: 'enamed_inedita_006',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Lactente de 8 meses, previamente hígido, é levado à emergência por episódios de choro intenso e súbito, com flexão das pernas sobre o abdome, alternados com períodos de letargia. A mãe percebeu fezes com aspecto de "geleia de framboesa" na última troca de fralda. Ao exame, massa palpável em formato alongado no quadrante superior direito do abdome.\n\nQual é o diagnóstico mais provável e a conduta inicial recomendada?',
    options: [
      'Apendicite aguda; laparotomia exploradora imediata.',
      'Invaginação intestinal; redução por enema hidrostático ou pneumático guiado por imagem.',
      'Divertículo de Meckel sangrante; cintilografia com tecnécio.',
      'Volvo de intestino médio; correção cirúrgica de urgência sem exames prévios.'
    ],
    correctIndex: 1,
    explanation: 'Dor abdominal em cólica intermitente com períodos de letargia, fezes em "geleia de framboesa" e massa abdominal palpável (sinal da salsicha) são o quadro clássico de invaginação intestinal em lactentes; na ausência de sinais de peritonite ou perfuração, a primeira linha de tratamento é a redução não cirúrgica por enema guiado por imagem.'
  },
  {
    id: 'enamed_inedita_007',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Durante discussão de caso em uma Unidade Básica de Saúde, a equipe debate a solicitação de exames de rotina para um paciente assintomático, sem fatores de risco, que insiste em realizar um extenso "check-up" anual com dezenas de exames sem indicação baseada em evidências, temendo doenças não diagnosticadas.\n\nA conduta da equipe, orientada pelo princípio da prevenção quaternária, deve ser',
    options: [
      'atender integralmente à solicitação do paciente, respeitando sua autonomia sobre o próprio corpo.',
      'solicitar todos os exames, pois o excesso de informação clínica nunca traz malefícios ao paciente.',
      'explicar os riscos do sobrediagnóstico e sobretratamento, oferecendo apenas os exames com recomendação baseada em evidência para seu perfil de risco.',
      'encaminhar o paciente a um especialista para que ele decida quais exames solicitar.'
    ],
    correctIndex: 2,
    explanation: 'A prevenção quaternária consiste em evitar ou minimizar os danos do excesso de intervenções médicas (sobrediagnóstico, sobretratamento, iatrogenia); a conduta adequada é orientar o paciente sobre os riscos de exames sem indicação e oferecer apenas o rastreamento recomendado pelas evidências para seu perfil.'
  },
  {
    id: 'enamed_inedita_008',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Médico de Unidade Básica de Saúde atende paciente com quadro clínico compatível com meningite meningocócica, confirmado por punção lombar com cultura positiva para Neisseria meningitidis.\n\nConsiderando as normas de vigilância epidemiológica brasileira, a notificação desse caso deve ser feita',
    options: [
      'em até 7 dias, por se tratar de doença de notificação semanal.',
      'de forma imediata, em até 24 horas, por se tratar de doença de notificação compulsória imediata.',
      'apenas se houver um segundo caso na mesma comunidade, caracterizando surto.',
      'mensalmente, de forma consolidada, junto ao boletim epidemiológico da unidade.'
    ],
    correctIndex: 1,
    explanation: 'A doença meningocócica é de notificação compulsória imediata (até 24 horas), dado seu potencial de gravidade e de causar surtos, exigindo investigação e medidas de controle rápidas, como quimioprofilaxia dos contactantes.'
  },
  {
    id: 'enamed_inedita_009',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 32 semanas realiza VDRL de rotina no terceiro trimestre, com resultado reagente em titulação 1:32 (o primeiro exame do pré-natal, no primeiro trimestre, havia sido não reagente). Recebe tratamento com 3 doses de penicilina G benzatina 2,4 milhões UI, com intervalo semanal, mas o parceiro sexual não foi tratado.\n\nEm relação ao recém-nascido, a conduta adequada ao nascimento é',
    options: [
      'considerar o tratamento materno adequado e não realizar nenhuma investigação adicional no recém-nascido.',
      'considerar o tratamento materno inadequado, pelo parceiro não tratado, e investigar o recém-nascido para sífilis congênita, independentemente de sintomas.',
      'aguardar o aparecimento de sintomas clínicos no recém-nascido antes de iniciar qualquer investigação.',
      'tratar o recém-nascido apenas se o VDRL do sangue periférico for maior que o materno em duas diluições.'
    ],
    correctIndex: 1,
    explanation: 'O tratamento materno da sífilis é considerado inadequado quando o parceiro sexual não é tratado concomitantemente, mesmo com esquema penicilínico materno completo; nesses casos, todo recém-nascido deve ser investigado para sífilis congênita, independentemente da presença de sintomas.'
  },
  {
    id: 'enamed_inedita_010',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Profissional de saúde, contactante domiciliar de paciente com tuberculose pulmonar bacilífera, realiza prova tuberculínica (PPD), com resultado de 12 mm de enduração. Radiografia de tórax sem alterações. Nega sintomas respiratórios. Não possui comorbidades e não vive com HIV.\n\nConsiderando o resultado, a conduta indicada é',
    options: [
      'não é necessária nenhuma intervenção, pois o PPD só é considerado positivo acima de 15 mm em imunocompetentes.',
      'iniciar tratamento para tuberculose ativa, com esquema quádruplo por 6 meses.',
      'diagnosticar infecção latente por tuberculose e indicar tratamento preventivo.',
      'repetir o PPD em 3 meses, sem necessidade de qualquer conduta imediata.'
    ],
    correctIndex: 2,
    explanation: 'Em contactante de caso bacilífero, PPD ≥5 mm já é considerado positivo; associado a radiografia de tórax normal e ausência de sintomas, o quadro caracteriza infecção latente por tuberculose, com indicação de tratamento preventivo.'
  },
  {
    id: 'enamed_inedita_011',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 27 anos é levado por familiares à emergência psiquiátrica por apresentar, há 5 dias, humor eufórico persistente, diminuição da necessidade de sono (dorme cerca de 2 horas por noite sem cansaço), fala acelerada e difícil de interromper, grandiosidade (afirma ter "planos para mudar o mundo") e envolvimento em gastos financeiros excessivos e impulsivos. Nega uso de substâncias psicoativas. Exame físico e neurológico sem alterações.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Transtorno depressivo maior com sintomas psicóticos.',
      'Episódio maníaco, compatível com transtorno afetivo bipolar tipo I.',
      'Transtorno esquizoafetivo.',
      'Transtorno de personalidade histriônica em crise.'
    ],
    correctIndex: 1,
    explanation: 'Humor eufórico ou expansivo persistente por mais de 1 semana, associado a diminuição da necessidade de sono, grandiosidade, fala acelerada e envolvimento em atividades de risco, configura episódio maníaco, característico do transtorno afetivo bipolar tipo I.'
  },
  {
    id: 'enamed_inedita_012',
    cycle: 'Ciclo Clínico',
    subject: 'Geriatria',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 78 anos, internado por pneumonia comunitária, evolui no terceiro dia de internação com flutuação do nível de consciência, desatenção, agitação psicomotora alternada com sonolência, e alucinações visuais, com piora predominantemente noturna. Não havia alteração cognitiva prévia relatada pela família.\n\nQual é o diagnóstico mais provável e a conduta prioritária?',
    options: [
      'Demência de início agudo; iniciar donepezila.',
      'Delirium; investigar e tratar a causa subjacente, evitando sedação desnecessária.',
      'Transtorno psicótico breve; iniciar antipsicótico em dose plena e manter até resolução espontânea.',
      'Depressão com sintomas psicóticos no idoso; iniciar antidepressivo tricíclico.'
    ],
    correctIndex: 1,
    explanation: 'Alteração aguda e flutuante da atenção e do nível de consciência em paciente internado, com curso variável ao longo do dia (pior à noite), é característica de delirium; a conduta prioritária é identificar e tratar a causa subjacente, evitando contenção química desnecessária.'
  },
  {
    id: 'enamed_inedita_013',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 45 anos, obesa, procura pronto-socorro com dor em hipocôndrio direito há 8 horas, contínua, com irradiação para dorso, associada a náuseas e febre de 38,3 °C. Ao exame, dor intensa à palpação do hipocôndrio direito com interrupção da inspiração profunda durante a manobra (sinal de Murphy positivo). Leucócitos 15.200/mm³. Ultrassonografia de abdome: vesícula biliar distendida, parede espessada (5 mm), com cálculo impactado no infundíbulo.\n\nQual é o diagnóstico e a conduta mais adequada?',
    options: [
      'Cólica biliar simples; analgesia e alta com encaminhamento eletivo para colecistectomia.',
      'Colecistite aguda calculosa; antibioticoterapia e colecistectomia videolaparoscópica precoce (em até 72 horas).',
      'Coledocolitíase; colangiopancreatografia retrógrada endoscópica de urgência, sem necessidade de cirurgia.',
      'Pancreatite biliar leve; jejum e reintrodução alimentar progressiva, sem necessidade de cirurgia.'
    ],
    correctIndex: 1,
    explanation: 'Dor em hipocôndrio direito, sinal de Murphy positivo, febre, leucocitose e espessamento da parede vesicular com cálculo impactado confirmam colecistite aguda calculosa; o tratamento é antibioticoterapia associada a colecistectomia videolaparoscópica precoce, idealmente nas primeiras 72 horas.'
  },
  {
    id: 'enamed_inedita_014',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 68 anos, com antecedente de duas cirurgias abdominais prévias, procura pronto-socorro com dor abdominal difusa em cólica, distensão abdominal progressiva, parada de eliminação de gases e fezes há 2 dias, e vômitos biliosos. Ao exame, abdome distendido, timpânico, com ruídos hidroaéreos aumentados em "salva". Radiografia de abdome em pé mostra alças intestinais distendidas com múltiplos níveis hidroaéreos escalonados.\n\nQual é a principal hipótese diagnóstica e a causa mais provável nesse contexto?',
    options: [
      'Íleo paralítico; causa provavelmente metabólica.',
      'Obstrução intestinal mecânica; causa provavelmente por bridas/aderências de cirurgias prévias.',
      'Pseudo-obstrução colônica aguda (síndrome de Ogilvie); causa idiopática.',
      'Isquemia mesentérica aguda; causa embólica.'
    ],
    correctIndex: 1,
    explanation: 'Dor em cólica, distensão progressiva, parada de eliminação de gases e fezes, vômitos e níveis hidroaéreos escalonados na radiografia caracterizam obstrução intestinal mecânica; em paciente com cirurgias abdominais prévias, a causa mais comum é a formação de bridas/aderências peritoneais.'
  },
  {
    id: 'enamed_inedita_015',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 29 anos relata diarreia crônica intermitente, distensão abdominal e flatulência há cerca de 1 ano, associadas a episódios de anemia ferropriva que não respondem adequadamente à suplementação oral de ferro. Nega perda de peso importante. Exames: anticorpo antitransglutaminase IgA fortemente positivo; IgA sérica total normal.\n\nQual é o diagnóstico mais provável e o exame confirmatório?',
    options: [
      'Síndrome do intestino irritável; não requer confirmação histológica.',
      'Doença celíaca; biópsia de intestino delgado (duodeno) demonstrando atrofia vilositária.',
      'Doença de Crohn; colonoscopia com biópsia de cólon.',
      'Supercrescimento bacteriano do intestino delgado; teste respiratório com glicose.'
    ],
    correctIndex: 1,
    explanation: 'Diarreia crônica, distensão abdominal e anemia ferropriva refratária, associadas a antitransglutaminase IgA positivo (com IgA total normal, afastando falso-negativo por deficiência de IgA), são fortemente sugestivas de doença celíaca; a confirmação diagnóstica exige biópsia duodenal demonstrando atrofia vilositária.'
  },
  {
    id: 'enamed_inedita_016',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 58 anos, etilista crônico, é avaliado em ambulatório de hepatologia. Apresenta ascite de moderado volume, discreta desorientação intermitente (flapping presente), bilirrubina total de 3,2 mg/dL, albumina sérica de 2,6 g/dL e RNI de 1,9.\n\nCom base nesses dados, a classificação de Child-Pugh para esse paciente corresponde a qual classe, e qual sua implicação prognóstica?',
    options: [
      'Classe A; doença hepática compensada, sem necessidade de avaliação para transplante.',
      'Classe B; doença hepática moderadamente avançada, com prognóstico intermediário.',
      'Classe C; doença hepática avançada, com pior prognóstico e indicação de avaliação para transplante hepático.',
      'A classificação de Child-Pugh não se aplica a esse caso, pois não há hemorragia digestiva ativa.'
    ],
    correctIndex: 2,
    explanation: 'A presença de ascite, encefalopatia hepática, bilirrubina elevada, albumina baixa e RNI prolongado somam a pontuação máxima na classificação de Child-Pugh, caracterizando a classe C, associada a pior prognóstico e indicação de avaliação para transplante hepático.'
  },
  {
    id: 'enamed_inedita_017',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 30 anos, minutos após picada de inseto, desenvolve urticária generalizada, edema de lábios e língua, rouquidão, sibilância difusa e hipotensão (PA 80 x 50 mmHg), com sensação de morte iminente.\n\nQual é o diagnóstico e a conduta medicamentosa imediata de primeira linha?',
    options: [
      'Reação alérgica leve; anti-histamínico oral e observação domiciliar.',
      'Angioedema hereditário; concentrado de C1-inibidor endovenoso.',
      'Anafilaxia; adrenalina intramuscular na face anterolateral da coxa, imediatamente.',
      'Crise de ansiedade com hiperventilação; benzodiazepínico e reasseguramento.'
    ],
    correctIndex: 2,
    explanation: 'Urticária generalizada, edema de vias aéreas superiores, broncoespasmo e hipotensão após exposição a alérgeno caracterizam anafilaxia; a droga de escolha, a ser administrada imediatamente, é a adrenalina intramuscular na face anterolateral da coxa, antes mesmo de anti-histamínicos ou corticoides.'
  },
  {
    id: 'enamed_inedita_018',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    banca: 'ENAMED (inédita)',
    text: 'Trabalhador rural é trazido à emergência após exposição a agrotóxico organofosforado durante pulverização sem proteção adequada. Apresenta sudorese profusa, salivação excessiva, lacrimejamento, broncorreia, miose bilateral, bradicardia e fasciculações musculares.\n\nQual é o antídoto de primeira linha indicado nesse quadro?',
    options: ['Naloxona.', 'Atropina.', 'Flumazenil.', 'N-acetilcisteína.'],
    correctIndex: 1,
    explanation: 'A síndrome colinérgica (sudorese, salivação, lacrimejamento, broncorreia, miose, bradicardia) é característica de intoxicação por organofosforados, que inibem a acetilcolinesterase; o antídoto de primeira linha é a atropina, que bloqueia os efeitos muscarínicos do excesso de acetilcolina.'
  },
  {
    id: 'enamed_inedita_019',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 72 anos, hipertenso e diabético, é diagnosticado com fibrilação atrial persistente em consulta de rotina, assintomática, identificada ao acaso no eletrocardiograma.\n\nConsiderando o escore CHA2DS2-VASc para esse paciente (hipertensão, diabetes e idade ≥ 75 seriam pontos adicionais; aqui ele tem 72 anos, hipertensão e diabetes, totalizando pontuação de risco intermediário-alto para homem), a conduta referente à profilaxia de eventos tromboembólicos deve ser',
    options: [
      'não indicar anticoagulação, pois o paciente está assintomático.',
      'indicar apenas ácido acetilsalicílico em dose antiagregante, como alternativa à anticoagulação.',
      'indicar anticoagulação oral, já que o escore de risco tromboembólico é significativo mesmo em pacientes assintomáticos.',
      'indicar cardioversão elétrica imediata como única medida necessária, sem anticoagulação associada.'
    ],
    correctIndex: 2,
    explanation: 'Na fibrilação atrial, a decisão de anticoagular não depende da presença de sintomas, mas do risco tromboembólico estimado pelo escore CHA2DS2-VASc; homens com pontuação ≥2 (como hipertensão, diabetes e idade avançada) têm indicação de anticoagulação oral para prevenção de acidente vascular cerebral cardioembólico.'
  },
  {
    id: 'enamed_inedita_020',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 65 anos, com insuficiência cardíaca crônica conhecida, é internada por dispneia progressiva, ortopneia e ganho de 4 kg em uma semana. Ao exame, estertores crepitantes bibasais, turgência jugular patológica e edema de membros inferiores +++/4+. Saturação de O2 de 90% em ar ambiente.\n\nAlém da oxigenoterapia, qual é a conduta medicamentosa inicial mais indicada para o alívio da congestão?',
    options: [
      'Diurético de alça endovenoso (furosemida).',
      'Betabloqueador em dose plena, iniciado imediatamente na admissão.',
      'Inibidor da ECA em dose máxima desde a chegada, antes de qualquer outra medida.',
      'Digoxina endovenosa isolada, sem necessidade de diurético.'
    ],
    correctIndex: 0,
    explanation: 'Na insuficiência cardíaca aguda descompensada com sinais de congestão (estertores, turgência jugular, edema), a conduta inicial prioritária é o diurético de alça endovenoso, para promover natriurese e alívio rápido dos sintomas congestivos.'
  },
  {
    id: 'enamed_inedita_021',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 26 anos apresenta, nos últimos 4 meses, artralgia migratória em pequenas articulações das mãos, lesão eritematosa em "asa de borboleta" na face que piora com exposição solar, úlceras orais indolores recorrentes e episódios de queda de cabelo. Exames: anticorpo antinuclear (FAN) positivo, título 1:640, padrão homogêneo; anti-DNA dupla hélice positivo; complemento (C3 e C4) reduzido; proteinúria de 24 horas de 800 mg.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Dermatomiosite juvenil.',
      'Lúpus eritematoso sistêmico, com provável acometimento renal.',
      'Síndrome de Sjögren primária.',
      'Doença mista do tecido conjuntivo.'
    ],
    correctIndex: 1,
    explanation: 'A associação de artrite, eritema malar fotossensível, úlceras orais, alopecia, FAN e anti-DNA dupla hélice positivos, consumo de complemento e proteinúria preenche critérios clínicos e laboratoriais para lúpus eritematoso sistêmico, com a proteinúria sugerindo possível nefrite lúpica associada.'
  },
  {
    id: 'enamed_inedita_022',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    banca: 'ENAMED (inédita)',
    text: 'Um estudo observacional encontrou associação entre o consumo de café e maior incidência de câncer de pulmão. Ao analisar os dados mais detalhadamente, os pesquisadores perceberam que grande parte dos consumidores frequentes de café da amostra também eram tabagistas, e que o tabagismo, isoladamente, já é fator de risco bem estabelecido para câncer de pulmão.\n\nEsse fenômeno, que pode distorcer a associação observada entre café e câncer de pulmão, é denominado',
    options: ['viés de aferição.', 'viés de confusão (confundimento).', 'viés de seleção.', 'viés de memória.'],
    correctIndex: 1,
    explanation: 'O viés de confusão ocorre quando uma terceira variável (nesse caso, o tabagismo) está associada tanto à exposição estudada (café) quanto ao desfecho (câncer de pulmão), distorcendo a associação observada entre as duas variáveis principais.'
  },
  {
    id: 'enamed_inedita_023',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 40 anos relata fadiga progressiva, ganho de peso, intolerância ao frio, constipação intestinal e queda de cabelos nos últimos 6 meses. Ao exame, pele seca e fria, bradicardia, e discreto edema periorbitário. Exames: TSH de 18 mUI/L (referência 0,4-4,0); T4 livre de 0,6 ng/dL (referência 0,8-1,8).\n\nQual é o diagnóstico e o tratamento de escolha?',
    options: [
      'Hipertireoidismo subclínico; observação sem tratamento medicamentoso.',
      'Hipotireoidismo primário; reposição de levotiroxina.',
      'Tireoidite de Hashimoto em fase de tireotoxicose; betabloqueador.',
      'Hipotireoidismo central (secundário); reposição de hidrocortisona antes da tireoide.'
    ],
    correctIndex: 1,
    explanation: 'TSH elevado com T4 livre baixo confirma hipotireoidismo primário (a hipófise está tentando estimular uma tireoide hipofuncionante); o tratamento de escolha é a reposição de levotiroxina, com ajuste de dose conforme os níveis de TSH.'
  },
  {
    id: 'enamed_inedita_024',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 34 anos apresenta ganho de peso centrípeto nos últimos 8 meses, com face arredondada ("em lua cheia"), giba dorsal, estrias violáceas largas no abdome, fraqueza muscular proximal e pressão arterial persistentemente elevada. Exames: cortisol salivar noturno elevado em duas medidas; teste de supressão com dexametasona 1 mg sem supressão adequada do cortisol matinal.\n\nQual é a hipótese diagnóstica mais provável?',
    options: [
      'Síndrome metabólica isolada, sem disfunção endócrina específica.',
      'Síndrome de Cushing.',
      'Doença de Addison (insuficiência adrenal primária).',
      'Hipotireoidismo grave (mixedema).'
    ],
    correctIndex: 1,
    explanation: 'Obesidade centrípeta, face em lua cheia, giba dorsal, estrias violáceas largas, fraqueza muscular proximal e hipertensão, associados a hipercortisolismo confirmado por cortisol salivar noturno elevado e ausência de supressão ao teste com dexametasona, caracterizam a síndrome de Cushing.'
  },
  {
    id: 'enamed_inedita_025',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 34 semanas, sem pré-natal regular, procura pronto-atendimento obstétrico por sangramento vaginal vermelho vivo, de início súbito, indolor, em grande quantidade, sem contrações associadas. Ao exame físico, útero indolor, tônus normal, batimentos cardíacos fetais presentes e regulares. Não foi realizado toque vaginal.\n\nQual é a principal hipótese diagnóstica e a conduta inicial?',
    options: [
      'Descolamento prematuro de placenta; toque vaginal para avaliar dilatação cervical.',
      'Placenta prévia; evitar toque vaginal e confirmar o diagnóstico com ultrassonografia.',
      'Rotura uterina; laparotomia de urgência sem exames de imagem.',
      'Trabalho de parto prematuro; tocólise imediata, independentemente da causa do sangramento.'
    ],
    correctIndex: 1,
    explanation: 'Sangramento vaginal vermelho vivo, indolor, de início súbito, com útero de tônus normal e feto vivo, é o quadro clássico de placenta prévia; o toque vaginal deve ser evitado pelo risco de sangramento maciço, e o diagnóstico é confirmado por ultrassonografia.'
  },
  {
    id: 'enamed_inedita_026',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Durante parto vaginal de recém-nascido macrossômico, após o desprendimento da cabeça fetal, observa-se retração da cabeça contra o períneo ("sinal da tartaruga") e dificuldade na saída dos ombros, sem progressão com a tração habitual.\n\nQual é a manobra inicial recomendada para a resolução dessa distocia?',
    options: [
      'Manobra de McRoberts, com hiperflexão das coxas maternas sobre o abdome, associada à pressão suprapúbica.',
      'Manobra de Kristeller, com pressão vigorosa no fundo uterino.',
      'Cesárea de emergência com o feto já parcialmente desprendido.',
      'Episiotomia ampla isolada, sem outras manobras associadas.'
    ],
    correctIndex: 0,
    explanation: 'O sinal da tartaruga indica distocia de ombro; a manobra de McRoberts (hiperflexão das coxas maternas) associada à pressão suprapúbica é a primeira conduta recomendada, pois aumenta o diâmetro pélvico e ajuda a liberar o ombro impactado, sem o risco de piora associado à manobra de Kristeller (contraindicada nessa situação).'
  },
  {
    id: 'enamed_inedita_027',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Puérpera de 10 dias, em aleitamento materno exclusivo, procura Unidade Básica de Saúde com dor, hiperemia e calor em quadrante superior externo da mama esquerda, associada a febre de 38,5 °C e mal-estar. Relata fissura mamilar recente e pega inadequada do recém-nascido. Ao exame, área endurecida e dolorosa, sem flutuação ou abscesso palpável.\n\nQual é a conduta mais adequada?',
    options: [
      'Suspender imediatamente a amamentação na mama afetada até resolução completa do quadro.',
      'Manter a amamentação (ou ordenha) da mama afetada, corrigir a pega, e iniciar antibioticoterapia.',
      'Indicar drenagem cirúrgica imediata, independentemente da ausência de flutuação.',
      'Prescrever apenas anti-inflamatório, sem necessidade de antibiótico nesse estágio.'
    ],
    correctIndex: 1,
    explanation: 'A mastite puerperal deve ser tratada mantendo o esvaziamento da mama (amamentação ou ordenha), corrigindo a técnica de pega para evitar novas fissuras, associado a antibioticoterapia (geralmente cobrindo Staphylococcus aureus); a suspensão da amamentação não é necessária e pode agravar a estase láctea.'
  },
  {
    id: 'enamed_inedita_028',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 22 anos procura ginecologista por ciclos menstruais irregulares (intervalos de 45 a 90 dias) desde a menarca, associados a hirsutismo (presença de pelos em face e região periumbilical) e acne persistente. Exame físico com IMC de 29 kg/m². Ultrassonografia transvaginal evidencia ovários com aumento de volume e múltiplos folículos pequenos dispostos perifericamente. Exames hormonais mostram relação LH/FSH aumentada e testosterona total discretamente elevada.\n\nQual é o diagnóstico mais provável, considerando os critérios diagnósticos vigentes?',
    options: [
      'Insuficiência ovariana primária.',
      'Síndrome dos ovários policísticos.',
      'Hiperplasia adrenal congênita de início tardio, isoladamente.',
      'Tumor ovariano produtor de andrógenos.'
    ],
    correctIndex: 1,
    explanation: 'A associação de anovulação crônica (ciclos irregulares), hiperandrogenismo clínico (hirsutismo, acne) e morfologia ovariana policística à ultrassonografia preenche os critérios de Rotterdam para síndrome dos ovários policísticos, após exclusão de outras causas de hiperandrogenismo.'
  },
  {
    id: 'enamed_inedita_029',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Lactente de 5 meses, previamente hígido, é levado à emergência com quadro de coriza e tosse há 3 dias, seguido de piora com sibilância, taquipneia e retração intercostal nas últimas 24 horas. Frequenta creche, onde há relato de colegas com sintomas respiratórios semelhantes. Ao exame, sibilos difusos e estertores finos bilaterais, saturação de O2 de 93% em ar ambiente.\n\nQual é o diagnóstico mais provável e a conduta inicial recomendada?',
    options: [
      'Pneumonia bacteriana; iniciar antibioticoterapia empírica imediatamente.',
      'Bronquiolite viral aguda; suporte com oxigenoterapia se necessário, hidratação e observação, sem indicação rotineira de broncodilatador ou corticoide.',
      'Crise de asma; iniciar corticoide sistêmico e broncodilatador em altas doses.',
      'Coqueluche; iniciar azitromicina e notificar imediatamente.'
    ],
    correctIndex: 1,
    explanation: 'Quadro de infecção respiratória alta seguido de sibilância e desconforto respiratório em lactente pequeno, geralmente sazonal e associado a surtos em creches, é típico de bronquiolite viral aguda (frequentemente por vírus sincicial respiratório); o tratamento é de suporte, sem benefício comprovado rotineiro de broncodilatadores ou corticoides.'
  },
  {
    id: 'enamed_inedita_030',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 3 anos apresenta febre alta há 6 dias, não responsiva a antitérmicos, associada a hiperemia conjuntival bilateral não purulenta, fissuras labiais e língua em "framboesa", exantema polimorfo no tronco, edema e eritema de mãos e pés, além de linfonodomegalia cervical unilateral maior que 1,5 cm.\n\nQual é o diagnóstico mais provável e a principal complicação a ser rastreada?',
    options: [
      'Escarlatina; complicação renal (glomerulonefrite pós-estreptocócica).',
      'Doença de Kawasaki; aneurismas de artérias coronárias.',
      'Sarampo; encefalite pós-infecciosa.',
      'Síndrome mão-pé-boca; miocardite viral.'
    ],
    correctIndex: 1,
    explanation: 'Febre por 5 dias ou mais associada a conjuntivite não purulenta, alterações orais, exantema polimorfo, alterações de extremidades e linfonodomegalia cervical preenche critérios clínicos para doença de Kawasaki; a principal complicação a ser rastreada com ecocardiograma é o desenvolvimento de aneurismas de artérias coronárias.'
  },
  {
    id: 'enamed_inedita_031',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Menina de 7 anos é levada ao pediatra por desenvolvimento de mamas (Tanner M3) e pelos pubianos (Tanner P2), além de estirão de crescimento, iniciados há 8 meses. Idade óssea avançada em relação à idade cronológica. Dosagens de LH e FSH basais elevadas para a idade, com resposta puberal ao teste de estímulo com GnRH.\n\nQual é o diagnóstico e o principal exame de imagem a ser solicitado para investigação etiológica?',
    options: [
      'Puberdade precoce periférica; ultrassonografia pélvica isolada é suficiente, sem necessidade de outros exames.',
      'Puberdade precoce central; ressonância magnética de crânio, para investigar lesões hipotálamo-hipofisárias.',
      'Telarca precoce isolada, variante da normalidade; apenas acompanhamento clínico semestral.',
      'Adrenarca precoce isolada; dosagem de 17-hidroxiprogesterona é o único exame necessário.'
    ],
    correctIndex: 1,
    explanation: 'O desenvolvimento puberal antes dos 8 anos em meninas, com ativação do eixo hipotálamo-hipófise-gonadal (LH/FSH elevados e resposta ao GnRH), caracteriza puberdade precoce central; a ressonância magnética de crânio é indicada para investigar causas orgânicas hipotálamo-hipofisárias, especialmente em meninas mais jovens.'
  },
  {
    id: 'enamed_inedita_032',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 24 anos é trazido à emergência após apresentar episódio de perda súbita de consciência, com queda, rigidez generalizada seguida de abalos musculares rítmicos em membros, mordedura de língua e liberação esfincteriana, com duração de cerca de 2 minutos, seguido de período de confusão mental (estado pós-ictal) por 20 minutos. Trata-se do segundo episódio semelhante em 6 meses, sem fator desencadeante identificável.\n\nApós estabilização clínica e exclusão de causas secundárias agudas, qual é a conduta apropriada?',
    options: [
      'Não é necessário eletroencefalograma nem tratamento, pois crises isoladas não requerem investigação.',
      'Solicitar eletroencefalograma e considerar o diagnóstico de epilepsia, dado o caráter recorrente e não provocado das crises.',
      'Iniciar diazepam de uso contínuo diário como profilaxia de novas crises.',
      'Indicar cirurgia de ressecção do foco epileptogênico imediatamente, sem investigação prévia.'
    ],
    correctIndex: 1,
    explanation: 'Duas ou mais crises epilépticas não provocadas, com intervalo maior que 24 horas entre elas, permitem o diagnóstico clínico de epilepsia; o eletroencefalograma auxilia na classificação do tipo de crise e na decisão terapêutica com fármaco anticonvulsivante apropriado.'
  },
  {
    id: 'enamed_inedita_033',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 45 anos procura atendimento por fraqueza progressiva e simétrica em membros inferiores, iniciada há 4 dias, com ascensão para os membros superiores nas últimas 24 horas, associada a parestesias distais e arreflexia global. Relata episódio de diarreia aguda há 2 semanas. Punção lombar evidencia proteína elevada no líquor, com celularidade normal (dissociação albumino-citológica).\n\nQual é o diagnóstico mais provável e a principal complicação a ser monitorada?',
    options: [
      'Esclerose múltipla; complicação visual (neurite óptica).',
      'Síndrome de Guillain-Barré; insuficiência respiratória por fraqueza da musculatura respiratória.',
      'Miastenia gravis; crise miastênica desencadeada por infecção.',
      'Acidente vascular encefálico de tronco; disfagia e broncoaspiração.'
    ],
    correctIndex: 1,
    explanation: 'Fraqueza ascendente simétrica, arreflexia, precedida por quadro infeccioso (frequentemente gastrointestinal, associado a Campylobacter jejuni), com dissociação albumino-citológica no líquor, é o quadro clássico da síndrome de Guillain-Barré; a principal complicação a ser monitorada é a insuficiência respiratória por acometimento da musculatura respiratória, exigindo monitorização da capacidade vital.'
  },
  {
    id: 'enamed_inedita_034',
    cycle: 'Internato',
    subject: 'Neonatologia',
    banca: 'ENAMED (inédita)',
    text: 'Recém-nascido pré-termo de 34 semanas, filho de mãe com febre intraparto (38,2 °C), rotura de membranas há 20 horas antes do parto e líquido amniótico fétido, nasce hipoativo, com desconforto respiratório e temperatura instável nas primeiras horas de vida.\n\nConsiderando os fatores de risco maternos apresentados, qual é a principal hipótese diagnóstica a ser investigada e a conduta inicial?',
    options: [
      'Taquipneia transitória do recém-nascido; conduta apenas observacional, sem necessidade de exames.',
      'Sepse neonatal precoce (corioamnionite materna como fator de risco); coletar hemocultura e iniciar antibioticoterapia empírica.',
      'Síndrome de aspiração meconial; lavagem gástrica imediata como conduta prioritária.',
      'Cardiopatia congênita cianótica; ecocardiograma é a única conduta necessária nesse momento.'
    ],
    correctIndex: 1,
    explanation: 'Febre materna intraparto, rotura prolongada de membranas e líquido fétido são fatores de risco clássicos para corioamnionite e sepse neonatal precoce; diante de recém-nascido sintomático nesse contexto, deve-se coletar hemocultura e iniciar antibioticoterapia empírica sem aguardar confirmação laboratorial.'
  },
  {
    id: 'enamed_inedita_035',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 19 anos, com diagnóstico conhecido de anemia falciforme, procura emergência com dor óssea intensa em membros e região lombar, de início súbito, associada a febre baixa, após exposição a frio intenso. Nega sintomas respiratórios. Exame físico sem achados focais além da dor à palpação óssea.\n\nQual é a conduta prioritária no manejo dessa crise?',
    options: [
      'Analgesia adequada e agressiva, hidratação venosa e investigação de fatores desencadeantes ou complicações associadas.',
      'Transfusão de concentrado de hemácias imediata, independentemente dos níveis de hemoglobina.',
      'Antibioticoterapia empírica de amplo espectro, mesmo sem sinais de infecção documentada.',
      'Exsanguineotransfusão de urgência como primeira conduta.'
    ],
    correctIndex: 0,
    explanation: 'A crise vaso-oclusiva óssea é a manifestação mais comum da anemia falciforme, geralmente desencadeada por frio, desidratação ou infecção; o manejo prioritário é analgesia adequada (frequentemente com opioides), hidratação venosa e investigação de fatores desencadeantes, reservando-se transfusão para casos com queda significativa de hemoglobina ou complicações graves.'
  },
  {
    id: 'enamed_inedita_036',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 6 anos apresenta, 2 semanas após quadro de faringoamigdalite não tratada, edema periorbitário matinal, urina com aspecto "cor de coca-cola" e hipertensão arterial (130 x 90 mmHg para a idade). Exames: hematúria dismórfica, proteinúria discreta, complemento C3 reduzido, creatinina discretamente elevada.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Síndrome nefrótica de lesões mínimas.',
      'Glomerulonefrite difusa aguda pós-estreptocócica.',
      'Nefropatia por IgA (doença de Berger).',
      'Síndrome hemolítico-urêmica.'
    ],
    correctIndex: 1,
    explanation: 'O intervalo de 1 a 3 semanas entre uma infecção estreptocócica (faringoamigdalite) e o surgimento de hematúria, edema, hipertensão e consumo transitório de complemento C3 é o quadro clássico da glomerulonefrite difusa aguda pós-estreptocócica, uma causa comum de síndrome nefrítica em crianças.'
  },
  {
    id: 'enamed_inedita_037',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Equipe de Saúde da Família identifica, em sua área adstrita, um paciente com transtorno depressivo moderado, já em uso de antidepressivo prescrito pelo médico da unidade, mas com resposta parcial após 8 semanas de tratamento. A unidade não possui psiquiatra fixo, mas conta com apoio do Núcleo Ampliado de Saúde da Família (NASF).\n\nQual estratégia é mais coerente com o modelo de cuidado compartilhado em saúde mental na Atenção Primária?',
    options: [
      'Encaminhar o paciente diretamente para internação psiquiátrica, dada a resposta parcial ao tratamento.',
      'Solicitar matriciamento com o psiquiatra de referência do NASF, mantendo o médico da unidade como responsável pelo caso.',
      'Suspender o antidepressivo e aguardar remissão espontânea dos sintomas.',
      'Transferir integralmente o caso para o Centro de Atenção Psicossocial, encerrando o acompanhamento na UBS.'
    ],
    correctIndex: 1,
    explanation: 'O apoio matricial permite que a equipe de saúde mental especializada (como o NASF) discuta o caso e oriente a conduta, mas o médico da Atenção Primária permanece como responsável pelo cuidado longitudinal do paciente, evitando encaminhamentos desnecessários e fragmentação do cuidado.'
  },
  {
    id: 'enamed_inedita_038',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Paciente de 74 anos, com câncer de pulmão metastático, em fase avançada da doença, sem possibilidade de tratamento curativo, é acompanhado pela equipe de Saúde da Família em seu domicílio. A família questiona sobre a possibilidade de manter o cuidado em casa, com foco no controle da dor e conforto, sem investimento em medidas de prolongamento da vida.\n\nEssa abordagem de cuidado, centrada no alívio do sofrimento e na qualidade de vida, sem intenção de acelerar ou postergar a morte, é denominada',
    options: ['eutanásia passiva.', 'distanásia domiciliar.', 'cuidado paliativo.', 'ortotanásia assistida por terceiros.'],
    correctIndex: 2,
    explanation: 'O cuidado paliativo é a abordagem que busca o alívio do sofrimento físico, psíquico, social e espiritual do paciente com doença que ameaça a continuidade da vida, sem intenção de acelerar ou postergar a morte, podendo ser oferecido no domicílio pela equipe de Atenção Primária em conjunto com a família.'
  },
  {
    id: 'enamed_inedita_039',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 35 anos relata preocupação excessiva e difícil de controlar com múltiplos aspectos da vida (trabalho, saúde da família, finanças) há mais de 8 meses, na maioria dos dias, associada a tensão muscular, fadiga fácil, irritabilidade, dificuldade de concentração e distúrbio do sono. Os sintomas causam prejuízo funcional significativo. Nega uso de substâncias e não há doença clínica que justifique o quadro.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Transtorno do pânico.',
      'Transtorno de ansiedade generalizada.',
      'Transtorno obsessivo-compulsivo.',
      'Transtorno de adaptação com ansiedade.'
    ],
    correctIndex: 1,
    explanation: 'Preocupação excessiva e de difícil controle, envolvendo múltiplas áreas da vida, presente na maioria dos dias por mais de 6 meses, associada a sintomas somáticos (tensão muscular, fadiga, irritabilidade, distúrbio do sono) e prejuízo funcional, é característica do transtorno de ansiedade generalizada.'
  },
  {
    id: 'enamed_inedita_040',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 50 anos, etilista de longa data, é internado para cirurgia eletiva. No terceiro dia de internação, sem consumo de álcool desde a admissão, desenvolve agitação psicomotora intensa, tremores grosseiros de extremidades, sudorese profusa, taquicardia, hipertensão, febre baixa e alucinações visuais vívidas (relata ver "insetos" na parede).\n\nQual é o diagnóstico e a conduta medicamentosa de escolha?',
    options: [
      'Encefalopatia de Wernicke; reposição isolada de tiamina, sem outras medidas.',
      'Delirium tremens (síndrome de abstinência alcoólica grave); benzodiazepínicos em doses ajustadas à resposta clínica.',
      'Surto psicótico agudo; antipsicótico típico em dose plena, isoladamente.',
      'Intoxicação aguda por álcool; apenas suporte clínico e observação, sem medicação específica.'
    ],
    correctIndex: 1,
    explanation: 'Agitação, tremores, hiperatividade autonômica, febre e alucinações visuais surgindo 48-96 horas após a última ingestão de álcool em etilista crônico caracterizam delirium tremens, forma grave da síndrome de abstinência alcoólica; o tratamento de escolha são os benzodiazepínicos, titulados conforme a resposta clínica, associados a reposição de tiamina.'
  },
  {
    id: 'enamed_inedita_041',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 28 anos apresenta quadro de mal-estar, náuseas, dor em hipocôndrio direito, colúria e icterícia há 5 dias. Exames sorológicos: HBsAg reagente; anti-HBc IgM reagente; anti-HBs não reagente; HBeAg reagente.\n\nCom base no perfil sorológico apresentado, a interpretação correta é',
    options: [
      'infecção crônica pelo vírus da hepatite B, sem replicação viral ativa.',
      'infecção aguda pelo vírus da hepatite B, com replicação viral ativa (alta infectividade).',
      'imunidade vacinal contra hepatite B, sem infecção atual.',
      'infecção resolvida no passado, com imunidade natural estabelecida.'
    ],
    correctIndex: 1,
    explanation: 'HBsAg reagente indica infecção presente; anti-HBc IgM reagente indica infecção aguda recente; HBeAg reagente indica replicação viral ativa e alta infectividade; a ausência de anti-HBs confirma que ainda não houve resolução/imunização, sendo esse o perfil típico da hepatite B aguda em fase replicativa.'
  },
  {
    id: 'enamed_inedita_042',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Paciente de 38 anos, vivendo com HIV há 6 anos, em uso irregular de terapia antirretroviral, comparece à consulta de rotina. Exames atuais: contagem de linfócitos T CD4+ de 180 células/mm³; carga viral detectável.\n\nConsiderando a contagem de CD4+, qual profilaxia de infecção oportunista deve ser iniciada nesse momento?',
    options: [
      'Profilaxia para pneumocistose (sulfametoxazol-trimetoprima), pois CD4+ está abaixo de 200 células/mm³.',
      'Profilaxia para toxoplasmose isoladamente, sem necessidade de profilaxia para pneumocistose.',
      'Profilaxia para complexo Mycobacterium avium, pois é a prioridade nesse nível de CD4+.',
      'Nenhuma profilaxia é necessária, pois a prioridade única é reintroduzir a terapia antirretroviral.'
    ],
    correctIndex: 0,
    explanation: 'Contagem de CD4+ abaixo de 200 células/mm³ é o principal critério para indicar profilaxia primária de pneumonia por Pneumocystis jirovecii, geralmente com sulfametoxazol-trimetoprima, além da reintrodução urgente da terapia antirretroviral.'
  },
  {
    id: 'enamed_inedita_043',
    cycle: 'Ciclo Clínico',
    subject: 'Urologia',
    banca: 'ENAMED (inédita)',
    text: 'Adolescente de 14 anos procura emergência com dor testicular direita súbita e intensa, iniciada durante a madrugada, associada a náuseas e vômitos. Ao exame, testículo direito elevado, com posição horizontalizada, extremamente doloroso à palpação, sem alívio da dor à elevação manual do testículo (sinal de Prehn negativo). Ausência de febre.\n\nQual é o diagnóstico mais provável e a conduta imediata?',
    options: [
      'Epididimite aguda; iniciar antibioticoterapia e reavaliar em 48 horas.',
      'Torção de apêndice testicular; analgesia e observação ambulatorial.',
      'Torção testicular; exploração cirúrgica de urgência, idealmente em até 6 horas do início dos sintomas.',
      'Hérnia inguinoescrotal encarcerada; redução manual seguida de correção eletiva.'
    ],
    correctIndex: 2,
    explanation: 'Dor testicular súbita e intensa, testículo elevado e horizontalizado, e sinal de Prehn negativo (a dor não alivia com a elevação do testículo) são sugestivos de torção testicular, uma emergência urológica; a exploração cirúrgica deve ser realizada o mais rápido possível, idealmente em até 6 horas, para preservar a viabilidade testicular.'
  },
  {
    id: 'enamed_inedita_044',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 70 anos, previamente hígido, é levado à emergência com tosse produtiva, febre e dispneia há 3 dias. Ao exame, confuso quanto ao tempo (desorientado), frequência respiratória de 32 irpm, pressão arterial de 88 x 58 mmHg, e ureia sérica de 60 mg/dL. Radiografia de tórax evidencia consolidação em lobo inferior direito.\n\nCom base no escore CURB-65, qual é a conduta mais adequada?',
    options: [
      'Escore de baixo risco; tratamento ambulatorial com antibiótico oral.',
      'Escore de risco intermediário; considerar internação em enfermaria.',
      'Escore de alto risco (CURB-65 = 4); internação, com consideração de admissão em unidade de terapia intensiva.',
      'O escore CURB-65 não se aplica a pacientes acima de 65 anos.'
    ],
    correctIndex: 2,
    explanation: 'O escore CURB-65 soma 1 ponto para cada critério presente: Confusão mental, Ureia >50 mg/dL, frequência Respiratória ≥30 irpm, pressão arterial Baixa (PAS<90 ou PAD≤60) e idade ≥65 anos; esse paciente pontua 4 (confusão, ureia elevada, taquipneia, hipotensão, mais idade), caracterizando alto risco e indicação de internação, com avaliação para UTI.'
  },
  {
    id: 'enamed_inedita_045',
    cycle: 'Internato',
    subject: 'Neurocirurgia',
    banca: 'ENAMED (inédita)',
    text: 'Lactente de 3 meses é levado à consulta de puericultura por aumento progressivo do perímetro cefálico, cruzando dois canais no gráfico de crescimento nos últimos 2 meses. Ao exame, fontanela anterior abaulada e tensa, olhar em "sol poente" (desvio dos olhos para baixo com esclera visível acima da íris), e irritabilidade.\n\nQual é a principal hipótese diagnóstica e o exame de imagem inicial mais indicado?',
    options: [
      'Macrocefalia benigna familiar; nenhum exame de imagem é necessário.',
      'Hidrocefalia; ultrassonografia transfontanelar como exame inicial.',
      'Craniossinostose; radiografia simples de crânio é suficiente para diagnóstico e conduta.',
      'Hematoma subdural crônico; aguardar fechamento espontâneo da fontanela antes de investigar.'
    ],
    correctIndex: 1,
    explanation: 'Aumento acelerado do perímetro cefálico, fontanela abaulada e tensa, e sinal do sol poente são sugestivos de hidrocefalia com hipertensão intracraniana; em lactentes com fontanela aberta, a ultrassonografia transfontanelar é o exame de imagem inicial, por ser rápida, não invasiva e sem radiação.'
  },
  {
    id: 'enamed_inedita_046',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Cirúrgica',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 55 anos, obeso, apresenta abaulamento em região umbilical há 2 anos, redutível e indolor, que aumentava aos esforços. Há 6 horas, nota que a protrusão não retorna mais espontaneamente ou à manobra manual, associada a dor local progressiva, náuseas e distensão abdominal.\n\nQual é a principal complicação suspeitada e a conduta adequada?',
    options: [
      'Hérnia umbilical não complicada; conduta expectante e reavaliação eletiva em 30 dias.',
      'Hérnia umbilical encarcerada, com risco de estrangulamento; indicação de correção cirúrgica de urgência.',
      'Diástase de retos abdominais; apenas orientação de fisioterapia abdominal.',
      'Lipoma de parede abdominal; exérese eletiva ambulatorial, sem urgência.'
    ],
    correctIndex: 1,
    explanation: 'Uma hérnia previamente redutível que se torna irredutível, dolorosa e associada a sinais de obstrução (náuseas, distensão) caracteriza encarceramento, com risco iminente de estrangulamento e isquemia do conteúdo herniário; a conduta é a correção cirúrgica de urgência.'
  },
  {
    id: 'enamed_inedita_047',
    cycle: 'Ciclo Clínico',
    subject: 'Oftalmologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 62 anos procura emergência com dor ocular intensa unilateral de início súbito, associada a cefaleia, náuseas, vômitos e visão de halos coloridos ao redor de luzes. Ao exame, olho direito hiperemiado, córnea com aspecto turvo/edemaciado, pupila em midríase média fixa e não reagente à luz. Pressão intraocular acentuadamente elevada à palpação.\n\nQual é o diagnóstico e a conduta imediata?',
    options: [
      'Conjuntivite viral aguda; colírio lubrificante e compressas frias.',
      'Uveíte anterior; colírio de corticoide isolado, sem necessidade de encaminhamento urgente.',
      'Glaucoma agudo de ângulo fechado; encaminhamento oftalmológico imediato para redução emergencial da pressão intraocular.',
      'Descolamento de retina; observação, pois não há tratamento imediato disponível.'
    ],
    correctIndex: 2,
    explanation: 'Dor ocular súbita intensa, hiperemia, córnea turva, pupila em midríase média fixa e pressão intraocular muito elevada são o quadro clássico de glaucoma agudo de ângulo fechado, uma emergência oftalmológica que exige redução imediata da pressão intraocular (medicamentosa e, posteriormente, iridotomia a laser) para evitar perda visual permanente.'
  },
  {
    id: 'enamed_inedita_048',
    cycle: 'Ciclo Clínico',
    subject: 'Dermatologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 40 anos apresenta placas eritematosas bem delimitadas, recobertas por escamas esbranquiçadas espessas, localizadas em cotovelos, joelhos e couro cabeludo, há vários anos, com períodos de piora e melhora. Relata que, ao remover as escamas com a espátula, surgem pequenos pontos de sangramento puntiforme. Refere também dor e edema em articulações interfalangianas distais das mãos.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Dermatite atópica com artrite reativa associada.',
      'Psoríase em placas, com provável artrite psoriática associada.',
      'Pitiríase rósea de Gibert.',
      'Líquen plano com acometimento articular.'
    ],
    correctIndex: 1,
    explanation: 'Placas eritemato-descamativas bem delimitadas em áreas extensoras (cotovelos, joelhos) e couro cabeludo, com sinal de Auspitz (sangramento puntiforme ao remover as escamas), são característicos de psoríase; o acometimento de interfalangianas distais sugere artrite psoriática associada.'
  },
  {
    id: 'enamed_inedita_049',
    cycle: 'Ciclo Clínico',
    subject: 'Otorrinolaringologia',
    banca: 'ENAMED (inédita)',
    text: 'Menino de 9 anos apresenta espirros em salva, coriza hialina, obstrução nasal e prurido nasal e ocular, de padrão sazonal, mais intensos na primavera. Ao exame, mucosa nasal pálida e edemaciada, com presença de "saudação alérgica" (prega horizontal no dorso nasal). Nega febre.\n\nQual é o diagnóstico mais provável e o tratamento de primeira linha?',
    options: [
      'Rinossinusite bacteriana aguda; amoxicilina com clavulanato.',
      'Rinite alérgica; corticoide intranasal e anti-histamínico oral de segunda geração.',
      'Rinite vasomotora; descongestionante nasal tópico de uso contínuo.',
      'Desvio de septo nasal; correção cirúrgica como primeira conduta.'
    ],
    correctIndex: 1,
    explanation: 'Padrão sazonal de espirros, coriza hialina, prurido nasal e ocular, e a "saudação alérgica" (prega nasal transversa por atrito repetido) são característicos de rinite alérgica; o tratamento de primeira linha é o corticoide intranasal, associado a anti-histamínico oral de segunda geração se necessário.'
  },
  {
    id: 'enamed_inedita_050',
    cycle: 'Internato',
    subject: 'Cirurgia Vascular',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 58 anos, obesa, em pós-operatório de 5 dias de artroplastia de joelho, com mobilização reduzida, apresenta dor e edema unilateral em panturrilha esquerda, com aumento de temperatura local e empastamento muscular. Doppler venoso confirma trombo oclusivo em veia poplítea esquerda.\n\nQual é o tratamento de primeira linha indicado?',
    options: [
      'Anticoagulação plena (heparina de baixo peso molecular ou anticoagulante oral direto).',
      'Trombólise sistêmica imediata como primeira conduta em todos os casos.',
      'Apenas meia de compressão elástica, sem necessidade de anticoagulação.',
      'Filtro de veia cava inferior como primeira linha, antes de qualquer anticoagulante.'
    ],
    correctIndex: 0,
    explanation: 'A trombose venosa profunda confirmada tem como tratamento de primeira linha a anticoagulação plena (heparina de baixo peso molecular ou anticoagulantes orais diretos), que previne a progressão do trombo e o tromboembolismo pulmonar; trombólise e filtro de veia cava são reservados para situações específicas.'
  },
  {
    id: 'enamed_inedita_051',
    cycle: 'Internato',
    subject: 'Anestesiologia',
    banca: 'ENAMED (inédita)',
    text: 'Durante avaliação pré-anestésica de paciente programado para cirurgia eletiva, o anestesiologista observa classificação de Mallampati IV, pescoço curto, retrognatia e limitação da extensão cervical.\n\nEsses achados indicam risco aumentado para qual complicação, e qual conduta deve ser priorizada?',
    options: [
      'Risco de hipertermia maligna; disponibilizar dantrolene na sala cirúrgica.',
      'Via aérea difícil; planejar estratégia de manejo com dispositivos alternativos e equipe experiente disponível.',
      'Risco de broncoaspiração por jejum inadequado; apenas reforçar orientações de jejum pré-operatório.',
      'Risco de toxicidade sistêmica por anestésico local; reduzir a dose do anestésico a ser utilizado.'
    ],
    correctIndex: 1,
    explanation: 'Mallampati IV, pescoço curto, retrognatia e limitação da extensão cervical são preditores de via aérea difícil; a conduta prioritária é planejar a estratégia de intubação (dispositivos alternativos, videolaringoscopia, equipe experiente) antes da indução anestésica, para reduzir o risco de complicações na via aérea.'
  },
  {
    id: 'enamed_inedita_052',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 52 anos, sem antecedentes familiares de câncer de mama, assintomática, comparece à Unidade Básica de Saúde para consulta de rotina.\n\nSegundo as recomendações de rastreamento do câncer de mama do Ministério da Saúde para mulheres de risco habitual, a conduta adequada é',
    options: [
      'solicitar mamografia anual a partir dos 40 anos, para todas as mulheres.',
      'solicitar mamografia de rastreamento a cada 2 anos, dos 50 aos 69 anos.',
      'solicitar ressonância magnética de mamas anualmente, a partir dos 45 anos.',
      'não há indicação de rastreamento mamográfico populacional no Brasil, apenas exame clínico das mamas.'
    ],
    correctIndex: 1,
    explanation: 'O Ministério da Saúde recomenda o rastreamento mamográfico bienal (a cada 2 anos) para mulheres de risco habitual entre 50 e 69 anos, faixa etária de maior benefício em relação aos riscos do rastreamento (sobrediagnóstico, resultados falso-positivos).'
  },
  {
    id: 'enamed_inedita_053',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 27 anos, com atraso menstrual de 7 semanas, procura emergência com dor abdominal súbita e intensa em fossa ilíaca direita, seguida de tontura e quase síncope. Ao exame, hipotensão (PA 85 x 55 mmHg), taquicardia (118 bpm), abdome doloroso difusamente com sinais de irritação peritoneal, e dor à mobilização do colo uterino ao toque vaginal. Beta-hCG positivo. Ultrassonografia transvaginal não evidencia saco gestacional intrauterino, com presença de líquido livre em fundo de saco de Douglas em grande quantidade.\n\nQual é o diagnóstico mais provável e a conduta imediata?',
    options: [
      'Ameaça de abortamento; repouso e progesterona vaginal, com reavaliação em 1 semana.',
      'Gravidez ectópica rota, com sinais de choque hipovolêmico; laparotomia ou laparoscopia de urgência.',
      'Cisto hemorrágico de ovário roto; conduta expectante com analgesia.',
      'Doença inflamatória pélvica aguda; antibioticoterapia ambulatorial.'
    ],
    correctIndex: 1,
    explanation: 'Atraso menstrual, beta-hCG positivo, ausência de gestação intrauterina, dor abdominal súbita intensa, sinais de irritação peritoneal, líquido livre abundante e instabilidade hemodinâmica (hipotensão, taquicardia) indicam gravidez ectópica rota com hemoperitônio, uma emergência cirúrgica que exige intervenção imediata.'
  },
  {
    id: 'enamed_inedita_054',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Menina de 2 anos apresenta terceiro episódio de infecção do trato urinário febril confirmada por urocultura em 8 meses. Após tratamento adequado de cada episódio, a mãe é orientada a investigar a causa das infecções recorrentes.\n\nQual exame deve ser solicitado prioritariamente para investigar a principal causa anatômica associada a infecções urinárias febris recorrentes em crianças pequenas?',
    options: [
      'Tomografia computadorizada de abdome com contraste.',
      'Uretrocistografia miccional, para avaliar refluxo vesicoureteral.',
      'Urografia excretora com contraste iodado.',
      'Cintilografia renal estática (DMSA) isoladamente, sem outros exames.'
    ],
    correctIndex: 1,
    explanation: 'O refluxo vesicoureteral é a principal causa anatômica associada a infecções urinárias febris recorrentes em crianças pequenas, e sua investigação padrão é realizada pela uretrocistografia miccional, que avalia o refluxo de urina da bexiga para os ureteres/rins durante a micção.'
  },
  {
    id: 'enamed_inedita_055',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Lactente de 14 meses, em consulta de puericultura, é notado com ausência do testículo direito na bolsa escrotal desde o nascimento, não palpável no canal inguinal nem na bolsa escrotal ao exame físico repetido em consultas anteriores. O testículo esquerdo está tópico e de volume normal.\n\nQual é a conduta mais adequada nesse momento?',
    options: [
      'Aguardar até os 5 anos de idade, pois a maioria dos casos desce espontaneamente até essa idade.',
      'Encaminhar para avaliação cirúrgica (orquidopexia), idealmente entre 6 e 18 meses de idade.',
      'Indicar tratamento hormonal com hCG como primeira linha, adiando a avaliação cirúrgica.',
      'Nenhuma conduta é necessária, pois a criptorquidia unilateral não traz riscos futuros.'
    ],
    correctIndex: 1,
    explanation: 'A criptorquidia que persiste além dos 6 meses de vida tem baixa probabilidade de descida espontânea; a orquidopexia cirúrgica é recomendada idealmente entre 6 e 18 meses de idade, para reduzir os riscos de infertilidade e de neoplasia testicular associados à permanência do testículo fora da bolsa escrotal.'
  },
  {
    id: 'enamed_inedita_056',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Equipe de Saúde da Família organiza uma ação programática de rastreamento de hipertensão arterial e diabetes mellitus (Programa Hiperdia) em sua área de abrangência, com busca ativa de pacientes com fatores de risco não cadastrados no programa.\n\nEssa ação, realizada antes do aparecimento de sintomas, com o objetivo de identificar precocemente a doença em fase assintomática, caracteriza qual nível de prevenção?',
    options: ['Prevenção primária.', 'Prevenção secundária.', 'Prevenção terciária.', 'Prevenção quaternária.'],
    correctIndex: 1,
    explanation: 'A prevenção secundária consiste na detecção precoce e tratamento de doenças em fase assintomática ou inicial (rastreamento), como o rastreamento de hipertensão e diabetes em pessoas sem diagnóstico prévio, buscando reduzir a progressão e as complicações da doença.'
  },
  {
    id: 'enamed_inedita_057',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 55 anos, tabagista, hipertenso, sem diagnóstico prévio de doença cardiovascular, procura Unidade Básica de Saúde para avaliação de risco cardiovascular. Perfil lipídico: LDL-colesterol de 165 mg/dL; HDL-colesterol de 38 mg/dL; triglicerídeos de 190 mg/dL. Escore de risco cardiovascular calculado indica risco alto em 10 anos.\n\nAlém das medidas de mudança de estilo de vida, qual é a conduta farmacológica mais adequada?',
    options: [
      'Iniciar estatina de alta potência, visando redução do LDL-colesterol e do risco cardiovascular.',
      'Iniciar fibrato isoladamente, por ser a droga de escolha para redução do risco cardiovascular global.',
      'Aguardar reavaliação em 1 ano antes de iniciar qualquer medicação hipolipemiante.',
      'Iniciar apenas ácido acetilsalicílico, sem necessidade de terapia hipolipemiante nesse momento.'
    ],
    correctIndex: 0,
    explanation: 'Em pacientes de alto risco cardiovascular com LDL-colesterol elevado, a estatina é a droga de primeira escolha para redução do LDL e do risco de eventos cardiovasculares, devendo ser associada a mudanças de estilo de vida (cessação do tabagismo, dieta, atividade física).'
  },
  {
    id: 'enamed_inedita_058',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    banca: 'ENAMED (inédita)',
    text: 'Um ensaio clínico randomizado avaliou o efeito de uma nova medicação na prevenção de infarto do miocárdio. No grupo tratado, a incidência do desfecho foi de 5%; no grupo placebo, foi de 10%.\n\nCom base nesses dados, o número necessário para tratar (NNT) para prevenir um caso de infarto é',
    options: ['2.', '10.', '20.', '50.'],
    correctIndex: 2,
    explanation: 'O NNT é o inverso da redução absoluta de risco (RAR). A RAR é a diferença entre as incidências: 10% - 5% = 5% (0,05). NNT = 1 / 0,05 = 20; ou seja, é preciso tratar 20 pacientes para prevenir 1 caso de infarto.'
  },
  {
    id: 'enamed_inedita_059',
    cycle: 'Ciclo Clínico',
    subject: 'Geriatria',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 84 anos, viúva, morando sozinha, é avaliada em consulta geriátrica. Relata perda de peso não intencional de 5 kg no último ano, exaustão referida, baixa velocidade de marcha, baixo nível de atividade física e força de preensão manual reduzida para sua idade e sexo.\n\nConsiderando os critérios de Fried, o diagnóstico dessa paciente é',
    options: [
      'robustez (ausência de fragilidade), pois nenhum critério isolado define a síndrome.',
      'pré-fragilidade, por apresentar apenas 1 ou 2 critérios.',
      'síndrome da fragilidade, por apresentar 3 ou mais dos 5 critérios de Fried.',
      'sarcopenia primária, diagnóstico que exclui a possibilidade de fragilidade associada.'
    ],
    correctIndex: 2,
    explanation: 'Os critérios de Fried para síndrome da fragilidade incluem perda de peso não intencional, exaustão autorreferida, baixa força de preensão manual, baixa velocidade de marcha e baixo nível de atividade física; a presença de 3 ou mais critérios define a síndrome da fragilidade, associada a maior risco de quedas, hospitalização e mortalidade.'
  },
  {
    id: 'enamed_inedita_060',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 45 anos, assintomática, tem nódulo tireoidiano de 1,8 cm identificado em exame de rotina. TSH normal. Ultrassonografia de tireoide descreve nódulo sólido, hipoecogênico, com margens irregulares, microcalcificações e maior altura que largura.\n\nConsiderando as características ultrassonográficas de suspeita, qual é a conduta mais adequada?',
    options: [
      'Repetir a ultrassonografia em 2 anos, sem necessidade de outros exames, por se tratar de nódulo pequeno.',
      'Indicar punção aspirativa por agulha fina (PAAF) para avaliação citológica do nódulo.',
      'Indicar tireoidectomia total imediata, sem necessidade de citologia prévia.',
      'Solicitar apenas dosagem de tireoglobulina sérica, dispensando avaliação citológica.'
    ],
    correctIndex: 1,
    explanation: 'Nódulo tireoidiano com características ultrassonográficas de alto risco (hipoecogenicidade, margens irregulares, microcalcificações, forma mais alta que larga) tem indicação de punção aspirativa por agulha fina para avaliação citológica, independentemente do tamanho a partir de certos limiares, para definir a conduta subsequente.'
  },
  {
    id: 'enamed_inedita_061',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 26 anos, sexualmente ativa desde os 17 anos, nunca realizou exame preventivo (citologia oncótica).\n\nSegundo as diretrizes brasileiras de rastreamento do câncer de colo do útero, qual é a conduta adequada?',
    options: [
      'Iniciar o rastreamento com citologia oncótica, repetindo anualmente até os 25 anos.',
      'Iniciar o rastreamento aos 25 anos, com citologia oncótica repetida a cada 3 anos após dois exames anuais consecutivos normais.',
      'Iniciar o rastreamento apenas aos 30 anos, independentemente da idade de início da vida sexual.',
      'Não há indicação de rastreamento antes dos 35 anos em mulheres sem fatores de risco.'
    ],
    correctIndex: 1,
    explanation: 'O rastreamento do câncer de colo do útero no Brasil é recomendado a partir dos 25 anos (não conforme a idade de início da vida sexual), com citologia oncótica repetida anualmente e, após dois exames consecutivos normais, o intervalo passa a ser de 3 anos.'
  },
  {
    id: 'enamed_inedita_062',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 50 anos, com amenorreia há 14 meses, relata ondas de calor frequentes, sudorese noturna, insônia e secura vaginal, sintomas que interferem significativamente em sua qualidade de vida. Não possui contraindicações conhecidas (nega histórico pessoal de câncer de mama, tromboembolismo ou doença hepática) e tem menos de 10 anos desde a menopausa.\n\nPara o alívio dos sintomas vasomotores, qual terapia apresenta a maior eficácia nessa paciente?',
    options: [
      'Terapia de reposição hormonal com estrogênio (associado a progestagênio, pois possui útero).',
      'Suplementação isolada de cálcio e vitamina D.',
      'Fitoterápicos à base de isoflavona de soja, com eficácia comprovada superior à terapia hormonal.',
      'Antidepressivos tricíclicos em dose plena, como primeira escolha terapêutica.'
    ],
    correctIndex: 0,
    explanation: 'Em mulheres sintomáticas na "janela de oportunidade" (até 10 anos da menopausa ou antes dos 60 anos), sem contraindicações, a terapia de reposição hormonal (estrogênio associado a progestagênio, pela presença de útero) é o tratamento mais eficaz para sintomas vasomotores do climatério.'
  },
  {
    id: 'enamed_inedita_063',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 18 meses, procedente de área rural de baixa renda, é levada à UBS com quadro de edema bilateral de membros inferiores, cabelos finos e quebradiços com áreas de despigmentação, apatia, lesões cutâneas descamativas e hepatomegalia leve. Peso muito abaixo do esperado para a idade, mas o edema mascara parcialmente a perda de peso real.\n\nQual é o diagnóstico nutricional mais provável?',
    options: [
      'Marasmo (desnutrição energético-proteica grave, forma não edematosa).',
      'Kwashiorkor (desnutrição energético-proteica grave, forma edematosa).',
      'Deficiência isolada de vitamina A, sem desnutrição proteico-calórica associada.',
      'Raquitismo carencial isolado, sem desnutrição proteica associada.'
    ],
    correctIndex: 1,
    explanation: 'O kwashiorkor é a forma edematosa da desnutrição energético-proteica grave, decorrente principalmente de deficiência proteica com ingestão calórica relativamente preservada, caracterizada por edema (que mascara a perda de peso), alterações de cabelo e pele, apatia e hepatomegalia por esteatose hepática.'
  },
  {
    id: 'enamed_inedita_064',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Mãe de recém-nascido de 20 dias, em aleitamento materno exclusivo, questiona na consulta de puericultura sobre a necessidade de iniciar água, chás ou outros líquidos, pois considera que o leite materno "pode não ser suficiente" durante os dias mais quentes.\n\nSegundo as recomendações do Ministério da Saúde para lactentes saudáveis, a orientação adequada é',
    options: [
      'orientar a introdução de água nos intervalos das mamadas, especialmente em dias quentes.',
      'orientar aleitamento materno exclusivo até os 6 meses, sem necessidade de água, chás ou outros líquidos, mesmo em climas quentes.',
      'orientar a introdução de fórmula infantil complementar já a partir dessa idade, como medida de segurança.',
      'orientar suco de frutas diluído como complemento, a partir do primeiro mês de vida.'
    ],
    correctIndex: 1,
    explanation: 'O leite materno contém água suficiente para suprir as necessidades hídricas do lactente, mesmo em climas quentes; a recomendação é de aleitamento materno exclusivo até os 6 meses de vida, sem necessidade de água, chás, sucos ou outros alimentos complementares nesse período.'
  },
  {
    id: 'enamed_inedita_065',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 35 anos, trabalhador em limpeza de área alagada após enchente na cidade, procura atendimento com febre alta, mialgia intensa (principalmente em panturrilhas), hiperemia conjuntival bilateral sem secreção, e, no terceiro dia de sintomas, evolui com icterícia rubínica, oligúria e sangramento gengival.\n\nQual é o diagnóstico mais provável e o tratamento indicado?',
    options: [
      'Hepatite A aguda; suporte clínico, sem antibioticoterapia específica.',
      'Leptospirose (forma grave/síndrome de Weil); antibioticoterapia (penicilina cristalina ou ceftriaxona) e suporte às disfunções orgânicas.',
      'Febre amarela; apenas suporte clínico, pois não há tratamento antiviral específico, sem necessidade de antibiótico.',
      'Malária grave; artesunato endovenoso como tratamento de escolha.'
    ],
    correctIndex: 1,
    explanation: 'Exposição a água de enchente, febre, mialgia intensa em panturrilhas, sufusão conjuntival e evolução com icterícia rubínica, insuficiência renal e sangramento caracterizam a forma grave da leptospirose (síndrome de Weil); o tratamento inclui antibioticoterapia (penicilina cristalina ou ceftriaxona) e suporte intensivo às disfunções orgânicas.'
  },
  {
    id: 'enamed_inedita_066',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 30 anos, residente em área endêmica para arboviroses, apresenta febre de início súbito, exantema maculopapular pruriginoso e artralgia intensa e incapacitante em pequenas articulações de mãos e pés, com duração de vários dias, dificultando atividades cotidianas. Nega sinais de alarme (sem dor abdominal intensa ou sangramentos).\n\nQual arbovirose apresenta como principal característica diferencial a artralgia intensa e potencialmente incapacitante e persistente?',
    options: ['Dengue.', 'Chikungunya.', 'Zika vírus.', 'Febre amarela.'],
    correctIndex: 1,
    explanation: 'Embora as três arboviroses (dengue, chikungunya e zika) possam causar febre e exantema, a artralgia intensa, simétrica e frequentemente incapacitante, com possibilidade de evolução para forma crônica, é a característica mais marcante e diferencial da infecção por chikungunya.'
  },
  {
    id: 'enamed_inedita_067',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 52 anos, com cirrose hepática conhecida por hepatite C não tratada, é levado à emergência após episódio de vômitos com sangue vivo em grande quantidade, associado a tontura e palidez. Ao exame, hipotensão (PA 82 x 50 mmHg), taquicardia, ascite volumosa e circulação colateral visível no abdome.\n\nAlém da estabilização hemodinâmica, qual é a conduta específica mais indicada para o provável sangramento?',
    options: [
      'Endoscopia digestiva alta precoce, com ligadura elástica de varizes esofágicas, associada a droga vasoativa (terlipressina ou octreotida).',
      'Cirurgia de urgência para ressecção gástrica, sem necessidade de endoscopia prévia.',
      'Apenas inibidor de bomba de prótons endovenoso, sem necessidade de endoscopia.',
      'Antiácidos orais e observação clínica, sem outras intervenções.'
    ],
    correctIndex: 0,
    explanation: 'Em paciente cirrótico com hematêmese, a principal hipótese é hemorragia digestiva alta varicosa; além da estabilização hemodinâmica, a conduta específica inclui droga vasoativa (terlipressina ou octreotida) e endoscopia digestiva alta precoce com ligadura elástica das varizes esofágicas.'
  },
  {
    id: 'enamed_inedita_068',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Equipe de Saúde da Família que está assumindo uma nova área de abrangência realiza o mapeamento da comunidade, identificando famílias, condições de moradia, saneamento básico, grupos de risco e equipamentos sociais disponíveis (escolas, igrejas, associações).\n\nEsse processo de reconhecimento e organização do cuidado a partir da realidade local é denominado',
    options: ['acolhimento com classificação de risco.', 'territorialização.', 'linha de cuidado.', 'regionalização da assistência.'],
    correctIndex: 1,
    explanation: 'A territorialização é o processo de reconhecimento do território de atuação da equipe de Saúde da Família, incluindo o mapeamento de famílias, condições socioambientais e recursos comunitários, permitindo o planejamento do cuidado a partir das necessidades reais da população adstrita.'
  },
  {
    id: 'enamed_inedita_069',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 45 anos, usuário de drogas injetáveis, apresenta febre persistente há 3 semanas, associada a mal-estar, perda de peso e sopro cardíaco novo em foco tricúspide. Ao exame, lesões purpúricas dolorosas em polpas digitais (nódulos de Osler) e hemorragias subungueais em estilhaço. Hemoculturas seriadas positivas para Staphylococcus aureus em três amostras distintas. Ecocardiograma transesofágico evidencia vegetação em valva tricúspide.\n\nCom base nos critérios de Duke, qual é o diagnóstico desse paciente?',
    options: [
      'Endocardite infecciosa rejeitada, pois faltam critérios suficientes.',
      'Endocardite infecciosa possível, necessitando de mais exames para confirmação.',
      'Endocardite infecciosa definitiva, pela presença de critérios maiores (hemoculturas positivas e evidência ecocardiográfica de vegetação).',
      'Febre reumática ativa, diagnóstico que dispensa a necessidade de hemoculturas.'
    ],
    correctIndex: 2,
    explanation: 'Os critérios de Duke maiores incluem hemoculturas positivas para microrganismo típico em amostras distintas e evidência ecocardiográfica de envolvimento endocárdico (como vegetação); a presença de dois critérios maiores já confirma o diagnóstico de endocardite infecciosa definitiva, reforçado pelos achados clínicos periféricos (nódulos de Osler, hemorragias em estilhaço).'
  },
  {
    id: 'enamed_inedita_070',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 32 anos relata fraqueza muscular que piora ao longo do dia e com esforços repetitivos, melhorando com o repouso. Refere queda progressiva das pálpebras (ptose) à tarde e dificuldade para mastigar alimentos duros ao final das refeições. Ao exame, ptose palpebral bilateral que piora ao sustentar o olhar para cima por 1 minuto, sem outras alterações neurológicas focais.\n\nQual é o diagnóstico mais provável e o mecanismo fisiopatológico associado?',
    options: [
      'Esclerose lateral amiotrófica; degeneração de neurônios motores superiores e inferiores.',
      'Miastenia gravis; produção de autoanticorpos contra receptores de acetilcolina na junção neuromuscular.',
      'Síndrome de Guillain-Barré; desmielinização de nervos periféricos mediada por resposta imune pós-infecciosa.',
      'Distrofia muscular de Duchenne; deficiência da proteína distrofina.'
    ],
    correctIndex: 1,
    explanation: 'Fraqueza muscular flutuante que piora com o uso repetido e melhora com o repouso, associada a ptose palpebral e fadiga à mastigação, é característica da miastenia gravis, doença autoimune em que autoanticorpos atacam os receptores de acetilcolina na junção neuromuscular, prejudicando a transmissão neuromuscular.'
  },
  {
    id: 'enamed_inedita_071',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 38 semanas, primigesta, em trabalho de parto, é avaliada e apresenta apresentação pélvica completa confirmada por ultrassonografia, com peso fetal estimado em 3.400 g e bacia materna sem alterações aparentes ao exame clínico.\n\nConsiderando as recomendações atuais para apresentação pélvica a termo em primigesta, a conduta mais adequada é',
    options: [
      'indicar parto vaginal pélvico assistido, por ser sempre a via preferencial, independente de outros fatores.',
      'indicar cesariana eletiva, considerando os riscos aumentados do parto vaginal pélvico, especialmente em primigestas.',
      'tentar versão cefálica externa apenas após o início do trabalho de parto ativo.',
      'aguardar indefinidamente a rotação espontânea do feto durante o trabalho de parto, sem outra conduta.'
    ],
    correctIndex: 1,
    explanation: 'Em gestações a termo com apresentação pélvica persistente, a cesariana eletiva é geralmente a via de parto recomendada, especialmente em primigestas, pelos riscos aumentados de complicações no parto vaginal pélvico; a versão cefálica externa, quando indicada, deve ser tentada antes do início do trabalho de parto, geralmente entre 36-37 semanas.'
  },
  {
    id: 'enamed_inedita_072',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 29 anos relata corrimento vaginal acinzentado, de odor fétido, mais perceptível após relações sexuais, sem prurido significativo. Ao exame especular, corrimento fino e homogêneo aderido às paredes vaginais. Teste das aminas (whiff test) positivo com KOH a 10%. pH vaginal de 5,2. Bacterioscopia evidencia "clue cells" (células-guia).\n\nQual é o diagnóstico e o tratamento de primeira linha?',
    options: [
      'Candidíase vulvovaginal; fluconazol oral em dose única.',
      'Vaginose bacteriana; metronidazol oral ou vaginal.',
      'Tricomoníase; metronidazol oral em dose única, sem necessidade de tratar o parceiro.',
      'Cervicite por Chlamydia trachomatis; azitromicina em dose única.'
    ],
    correctIndex: 1,
    explanation: 'Corrimento acinzentado de odor fétido (mais perceptível após relação sexual), teste das aminas positivo, pH vaginal elevado (>4,5) e presença de "clue cells" preenchem os critérios de Amsel para vaginose bacteriana; o tratamento de escolha é o metronidazol, oral ou vaginal.'
  },
  {
    id: 'enamed_inedita_073',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 4 anos, não vacinada por opção da família, apresenta febre alta, tosse, coriza e conjuntivite há 3 dias, seguidos do surgimento de pequenas manchas esbranquiçadas com halo eritematoso na mucosa jugal, próximo aos molares. No dia seguinte, surge exantema maculopapular que se inicia na face e região retroauricular, progredindo em sentido cefalocaudal.\n\nQual é o diagnóstico mais provável e o achado patognomônico descrito?',
    options: [
      'Rubéola; linfonodomegalia retroauricular isolada.',
      'Sarampo; manchas de Koplik na mucosa oral.',
      'Exantema súbito (roséola); febre alta seguida de exantema após defervescência.',
      'Escarlatina; língua em framboesa.'
    ],
    correctIndex: 1,
    explanation: 'Febre, tosse, coriza, conjuntivite (a tríade dos "3 Cs"), seguidas do aparecimento de manchas de Koplik (pequenas manchas esbranquiçadas com halo eritematoso na mucosa oral, patognomônicas) e exantema maculopapular de progressão cefalocaudal são característicos do sarampo, especialmente relevante em crianças não vacinadas.'
  },
  {
    id: 'enamed_inedita_074',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Lactente de 2 meses, com esquema vacinal incompleto para a idade, apresenta tosse seca há 10 dias, que evoluiu para crises de tosse paroxística intensa, com guincho inspiratório ao final dos acessos, seguidos de episódios de cianose e vômitos. Entre as crises, a criança permanece relativamente bem.\n\nQual é o diagnóstico mais provável e o tratamento indicado?',
    options: [
      'Bronquiolite viral aguda; suporte clínico, sem necessidade de antibiótico.',
      'Coqueluche; macrolídeo (azitromicina) e notificação compulsória do caso.',
      'Asma do lactente; broncodilatador inalatório e corticoide sistêmico.',
      'Refluxo gastroesofágico; espessamento da dieta, sem necessidade de antibiótico.'
    ],
    correctIndex: 1,
    explanation: 'Tosse paroxística com guincho inspiratório, cianose e vômitos pós-tosse em lactente com esquema vacinal incompleto é o quadro clássico de coqueluche (Bordetella pertussis); o tratamento é com macrolídeo (azitromicina), além de notificação compulsória e investigação/profilaxia dos contactantes.'
  },
  {
    id: 'enamed_inedita_075',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Equipe de Saúde da Família organiza, mensalmente, um grupo de educação em saúde para pacientes hipertensos e diabéticos da área adstrita, com atividades de orientação nutricional, prática de exercícios físicos supervisionados e espaço de escuta coletiva sobre dificuldades no controle das doenças crônicas.\n\nEssa estratégia de cuidado coletivo, que complementa o atendimento individual, caracteriza qual modelo de atenção?',
    options: [
      'Modelo biomédico tradicional, centrado exclusivamente na consulta individual.',
      'Modelo de vigilância em saúde, focado apenas na notificação de agravos.',
      'Modelo de atenção baseado em ações programáticas e educação em saúde, com abordagem coletiva e longitudinal do cuidado.',
      'Modelo hospitalocêntrico, priorizando a internação para o controle de doenças crônicas.'
    ],
    correctIndex: 2,
    explanation: 'As ações programáticas em grupo, como os grupos de hipertensos e diabéticos, fazem parte do modelo de atenção da Estratégia Saúde da Família, que combina cuidado individual e coletivo, com foco em educação em saúde, promoção e prevenção, complementando a abordagem clínica tradicional.'
  },
  {
    id: 'enamed_inedita_076',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 45 anos comparece à Unidade Básica de Saúde apenas quando apresenta sintomas agudos, relatando dificuldade de conciliar consultas de rotina com o horário de trabalho. A equipe percebe baixa adesão dos homens da comunidade às ações preventivas oferecidas pela unidade.\n\nQual estratégia é mais coerente com a Política Nacional de Atenção Integral à Saúde do Homem para ampliar essa adesão?',
    options: [
      'Manter o funcionamento da unidade apenas em horário comercial, sem alterações na oferta de serviços.',
      'Flexibilizar horários de atendimento (incluindo períodos noturnos ou aos sábados) e adequar as abordagens às especificidades da população masculina.',
      'Restringir o atendimento de rotina apenas às mulheres, direcionando os homens exclusivamente para atendimentos de urgência.',
      'Exigir que os homens da comunidade comprovem sintomas graves para serem atendidos na unidade.'
    ],
    correctIndex: 1,
    explanation: 'A Política Nacional de Atenção Integral à Saúde do Homem preconiza a adequação da oferta de serviços às especificidades da população masculina, incluindo flexibilização de horários de atendimento, como forma de reduzir barreiras de acesso e ampliar a adesão às ações de prevenção e promoção da saúde.'
  },
  {
    id: 'enamed_inedita_077',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 24 anos apresenta padrão persistente de instabilidade em relacionamentos interpessoais (alternando entre idealização e desvalorização extremas das pessoas próximas), autoimagem instável, impulsividade em pelo menos duas áreas potencialmente prejudiciais (gastos, direção perigosa), episódios recorrentes de comportamento autolesivo sem intenção suicida clara, instabilidade afetiva marcante e sentimentos crônicos de vazio.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Transtorno de personalidade antissocial.',
      'Transtorno de personalidade borderline (limítrofe).',
      'Transtorno bipolar tipo II, em fase de ciclagem rápida.',
      'Transtorno de personalidade esquizotípica.'
    ],
    correctIndex: 1,
    explanation: 'O padrão de instabilidade em relacionamentos (idealização/desvalorização), autoimagem instável, impulsividade em áreas de risco, autolesão, instabilidade afetiva e sentimentos crônicos de vazio é característico do transtorno de personalidade borderline (limítrofe).'
  },
  {
    id: 'enamed_inedita_078',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 30 anos, em uso de haloperidol para tratamento de esquizofrenia, é levado à emergência com rigidez muscular generalizada ("em cano de chumbo"), febre alta (39,8 °C), instabilidade autonômica (taquicardia, pressão arterial oscilante, sudorese profusa) e rebaixamento do nível de consciência. Exames laboratoriais mostram creatinofosfoquinase (CPK) muito elevada.\n\nQual é o diagnóstico e a conduta imediata?',
    options: [
      'Síndrome serotoninérgica; suspender antidepressivos serotoninérgicos, que não estão em uso nesse caso.',
      'Síndrome neuroléptica maligna; suspender imediatamente o antipsicótico, suporte intensivo e considerar dantrolene ou bromocriptina.',
      'Catatonia maligna primária, sem relação com o uso do antipsicótico; manter a medicação e apenas hidratar o paciente.',
      'Golpe de calor clássico; apenas resfriamento externo, sem necessidade de suspender a medicação.'
    ],
    correctIndex: 1,
    explanation: 'Rigidez muscular, hipertermia, instabilidade autonômica, alteração do nível de consciência e CPK muito elevada em paciente em uso de antipsicótico caracterizam a síndrome neuroléptica maligna, uma emergência que exige suspensão imediata do antipsicótico, suporte intensivo e, em casos graves, uso de dantrolene ou agonistas dopaminérgicos como a bromocriptina.'
  },
  {
    id: 'enamed_inedita_079',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 24 anos procura Unidade Básica de Saúde com secreção uretral purulenta abundante e disúria intensa, iniciadas há 3 dias, após relação sexual desprotegida. Nega outros sintomas.\n\nConsiderando o manejo sindrômico das infecções sexualmente transmissíveis preconizado pelo Ministério da Saúde, a conduta terapêutica deve cobrir empiricamente quais agentes, e qual esquema é indicado?',
    options: [
      'Apenas Neisseria gonorrhoeae; ceftriaxona intramuscular em dose única, isoladamente.',
      'Neisseria gonorrhoeae e Chlamydia trachomatis; ceftriaxona intramuscular associada a azitromicina oral, ambas em dose única.',
      'Apenas Treponema pallidum; penicilina G benzatina intramuscular em dose única.',
      'Trichomonas vaginalis isoladamente; metronidazol oral em dose única.'
    ],
    correctIndex: 1,
    explanation: 'O corrimento uretral é abordado de forma sindrômica, cobrindo empiricamente os dois principais agentes causadores (Neisseria gonorrhoeae e Chlamydia trachomatis), com ceftriaxona intramuscular associada a azitromicina oral, ambas em dose única, dada a frequente coinfecção entre os dois patógenos.'
  },
  {
    id: 'enamed_inedita_080',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 26 anos, vítima de acidente motociclístico, é atendido no pronto-socorro com dor abdominal difusa e hipotensão (PA 84 x 56 mmHg) apesar da reposição volêmica inicial. Realizado protocolo FAST (Focused Assessment with Sonography for Trauma) à beira do leito, que evidencia líquido livre em espaço hepatorrenal (espaço de Morrison).\n\nConsiderando a instabilidade hemodinâmica associada ao FAST positivo, a conduta mais adequada é',
    options: [
      'observação clínica prolongada, com reavaliações seriadas do FAST a cada 6 horas.',
      'laparotomia exploradora de urgência, sem necessidade de tomografia prévia, dada a instabilidade hemodinâmica.',
      'tomografia computadorizada de abdome com contraste, obrigatória antes de qualquer decisão cirúrgica, mesmo com instabilidade.',
      'alta hospitalar com retorno ambulatorial em 24 horas, caso a dor abdominal melhore com analgesia.'
    ],
    correctIndex: 1,
    explanation: 'Em paciente com trauma abdominal, instabilidade hemodinâmica persistente apesar da reposição volêmica e FAST positivo (líquido livre intraperitoneal), a conduta é a laparotomia exploradora de urgência, sem a necessidade de aguardar tomografia, que demandaria tempo e exigiria estabilidade para o transporte seguro do paciente.'
  },
  {
    id: 'enamed_inedita_081',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 28 anos, sem cardiopatia estrutural conhecida, procura emergência com palpitações de início súbito, associadas a leve tontura, sem dor torácica ou síncope. Ao exame, frequência cardíaca de 190 bpm, ritmo regular, pressão arterial de 100 x 70 mmHg. Eletrocardiograma mostra taquicardia de complexo QRS estreito e regular, sem ondas P identificáveis.\n\nApós a tentativa inicial de manobra vagal sem sucesso, qual é a conduta farmacológica de escolha?',
    options: [
      'Amiodarona endovenosa em infusão contínua, como primeira escolha medicamentosa.',
      'Adenosina endovenosa em bolus rápido, com possibilidade de repetição em dose maior se necessário.',
      'Digoxina endovenosa, pela rapidez de ação em taquiarritmias supraventriculares.',
      'Cardioversão elétrica sincronizada imediata, sem tentativa medicamentosa prévia, dado o quadro clínico.'
    ],
    correctIndex: 1,
    explanation: 'Na taquicardia supraventricular paroxística com paciente estável, após manobras vagais sem sucesso, a adenosina endovenosa em bolus rápido é a droga de escolha, por seu início de ação ultrarrápido e meia-vida curta, sendo eficaz na maioria dos casos ao bloquear transitoriamente o nó atrioventricular.'
  },
  {
    id: 'enamed_inedita_082',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    banca: 'ENAMED (inédita)',
    text: 'Um novo teste rápido para triagem de determinada doença foi aplicado em 1.000 pessoas, das quais 100 realmente tinham a doença (confirmado por padrão-ouro). Do total de doentes, 90 tiveram resultado positivo no teste. Entre os 900 sem a doença, 810 tiveram resultado negativo.\n\nCom base nesses dados, a sensibilidade e a especificidade do teste são, respectivamente,',
    options: ['90% e 90%.', '90% e 10%.', '10% e 90%.', '100% e 81%.'],
    correctIndex: 0,
    explanation: 'Sensibilidade = verdadeiros positivos / total de doentes = 90/100 = 90%. Especificidade = verdadeiros negativos / total de não doentes = 810/900 = 90%. Ambas as medidas resultam em 90% nesse cenário.'
  },
  {
    id: 'enamed_inedita_083',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 30 semanas, diagnosticada com diabetes gestacional há 4 semanas, está em acompanhamento com dieta e atividade física orientadas. Apesar da adesão referida às orientações nutricionais, o perfil glicêmico domiciliar mostra glicemias de jejum persistentemente acima de 95 mg/dL e glicemias pós-prandiais de 1 hora acima de 140 mg/dL em mais de duas ocasiões na última semana.\n\nQual é a conduta terapêutica mais adequada nesse momento?',
    options: [
      'Manter apenas dieta e atividade física, aguardando mais 4 semanas antes de qualquer mudança.',
      'Iniciar insulinoterapia, por falha do controle glicêmico com medidas não farmacológicas.',
      'Iniciar metformina como primeira escolha farmacológica, por ser mais segura que a insulina na gestação.',
      'Indicar antecipação eletiva do parto imediatamente, independentemente da idade gestacional atual.'
    ],
    correctIndex: 1,
    explanation: 'Quando as metas glicêmicas não são atingidas apenas com dieta e atividade física, a insulina é o tratamento farmacológico de escolha na diabetes gestacional, por sua eficácia e perfil de segurança bem estabelecido, não atravessando a barreira placentária.'
  },
  {
    id: 'enamed_inedita_084',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Lactente de 3 meses, em aleitamento materno exclusivo, apresenta episódios recorrentes de regurgitação, cólicas intensas, fezes com raias de sangue e muco, além de dermatite eczematosa persistente. Após exclusão de proteína do leite de vaca da dieta materna, houve melhora significativa dos sintomas em 2 semanas.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Refluxo gastroesofágico fisiológico do lactente.',
      'Alergia à proteína do leite de vaca (APLV), com manifestação mediada por mecanismo não IgE ou misto.',
      'Fibrose cística, com manifestação digestiva isolada.',
      'Doença de Hirschsprung, com manifestação neonatal tardia.'
    ],
    correctIndex: 1,
    explanation: 'Sintomas gastrointestinais (regurgitação, cólicas, sangue e muco nas fezes) e cutâneos (dermatite) em lactente amamentado, com melhora após exclusão de proteína do leite de vaca da dieta materna, são sugestivos de alergia à proteína do leite de vaca, uma das alergias alimentares mais comuns na infância.'
  },
  {
    id: 'enamed_inedita_085',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Adolescente de 13 anos, sexo feminino, é avaliada em consulta de rotina. Ao exame físico, com a paciente flexionando o tronco para frente (teste de Adams), observa-se assimetria na altura das costelas de um lado em relação ao outro, sugerindo giba costal.\n\nQual é a principal hipótese diagnóstica e a conduta subsequente mais apropriada?',
    options: [
      'Cifose postural simples; apenas orientações posturais, sem necessidade de exames.',
      'Escoliose idiopática do adolescente; solicitar radiografia de coluna em pé para avaliar o grau da curvatura (ângulo de Cobb).',
      'Espondilólise; ressonância magnética de coluna lombar como exame inicial obrigatório.',
      'Hérnia de disco lombar; encaminhamento direto para avaliação neurocirúrgica.'
    ],
    correctIndex: 1,
    explanation: 'O teste de Adams positivo (assimetria/giba costal ao flexionar o tronco) é sugestivo de escoliose, mais comumente idiopática nessa faixa etária; a radiografia de coluna em pé é indicada para confirmar o diagnóstico e mensurar o ângulo de Cobb, orientando a conduta (observação, órtese ou cirurgia, conforme o grau).'
  },
  {
    id: 'enamed_inedita_086',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 16 semanas, sem pré-natal prévio, realiza sorologias de rotina que evidenciam IgM positivo e IgG positivo para toxoplasmose, com teste de avidez de IgG baixo, sugerindo infecção aguda recente, provavelmente adquirida durante a gestação atual.\n\nQual é a conduta terapêutica indicada nesse momento, considerando ainda não haver confirmação de infecção fetal?',
    options: [
      'Iniciar espiramicina, para reduzir o risco de transmissão vertical, e investigar infecção fetal por amniocentese.',
      'Iniciar sulfadiazina e pirimetamina imediatamente, independentemente da idade gestacional.',
      'Aguardar o parto para iniciar qualquer tratamento, evitando exposição fetal a medicamentos.',
      'Não há necessidade de tratamento, pois a toxoplasmose na gestação raramente causa infecção fetal.'
    ],
    correctIndex: 0,
    explanation: 'Na suspeita de toxoplasmose aguda na gestação, sem confirmação de infecção fetal, o tratamento inicial é a espiramicina, que reduz o risco de transmissão vertical (mas não trata o feto já infectado); a investigação de infecção fetal é feita por PCR no líquido amniótico (amniocentese), e o esquema com sulfadiazina, pirimetamina e ácido folínico é reservado para quando há confirmação ou forte suspeita de infecção fetal, geralmente após 18 semanas.'
  },
  {
    id: 'enamed_inedita_087',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 68 anos, hipertenso, procura atendimento com dor em queimação intensa em hemitórax direito, seguida, 2 dias depois, pelo aparecimento de vesículas agrupadas sobre base eritematosa, distribuídas em faixa unilateral, respeitando um dermátomo torácico. Procurou atendimento no terceiro dia de lesões.\n\nQual é o diagnóstico e a conduta terapêutica mais adequada nesse momento?',
    options: [
      'Herpes simples recorrente; aciclovir tópico apenas, sem necessidade de tratamento sistêmico.',
      'Herpes-zoster; aciclovir (ou valaciclovir) oral, idealmente iniciado nas primeiras 72 horas do início das lesões, para reduzir o risco de neuralgia pós-herpética.',
      'Impetigo bolhoso; antibioticoterapia sistêmica com cefalexina.',
      'Dermatite de contato; corticoide tópico potente, sem necessidade de antiviral.'
    ],
    correctIndex: 1,
    explanation: 'Dor em queimação seguida de vesículas agrupadas em distribuição dermatomal unilateral é característica do herpes-zoster (reativação do vírus varicela-zoster); o tratamento antiviral oral (aciclovir ou valaciclovir), iniciado idealmente nas primeiras 72 horas, reduz a duração e a gravidade do quadro e o risco de neuralgia pós-herpética.'
  },
  {
    id: 'enamed_inedita_088',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 45 anos, assintomático, sem antecedentes pessoais ou familiares de câncer colorretal ou doença inflamatória intestinal, procura Unidade Básica de Saúde para orientação sobre rastreamento de câncer colorretal.\n\nSegundo as recomendações vigentes para população de risco habitual, a conduta adequada é',
    options: [
      'iniciar o rastreamento com colonoscopia (ou pesquisa de sangue oculto nas fezes anual) a partir dos 45-50 anos.',
      'iniciar o rastreamento apenas aos 60 anos, independentemente do método utilizado.',
      'não há indicação de rastreamento populacional para câncer colorretal no Brasil.',
      'iniciar colonoscopia anual a partir dos 30 anos, mesmo sem fatores de risco.'
    ],
    correctIndex: 0,
    explanation: 'Para indivíduos de risco habitual, sem fatores de risco adicionais, o rastreamento de câncer colorretal é recomendado a partir dos 45-50 anos, podendo ser realizado por colonoscopia (a cada 10 anos) ou pesquisa de sangue oculto nas fezes (anual), entre outras estratégias.'
  },
  {
    id: 'enamed_inedita_089',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 60 anos chega ao pronto-socorro de um hospital sem hemodinâmica com dor torácica típica iniciada há 40 minutos. Eletrocardiograma mostra supradesnivelamento de ST em parede inferior. O hospital não dispõe de sala de hemodinâmica, e o serviço de referência para angioplastia primária fica a 3 horas de transporte terrestre.\n\nConsiderando a indisponibilidade de angioplastia primária em tempo hábil, qual é a conduta mais adequada?',
    options: [
      'Aguardar o transporte para angioplastia primária, mesmo que o tempo total ultrapasse 120 minutos, sem outra alternativa terapêutica.',
      'Realizar terapia fibrinolítica no próprio hospital, se não houver contraindicações, seguida de transferência para o serviço de hemodinâmica.',
      'Não realizar nenhuma reperfusão, apenas tratamento clínico conservador com dupla antiagregação, aguardando estabilização espontânea.',
      'Iniciar apenas anticoagulação plena, sem outra medida de reperfusão, até a chegada ao serviço terciário.'
    ],
    correctIndex: 1,
    explanation: 'Quando a angioplastia primária não pode ser realizada dentro do tempo recomendado (idealmente até 120 minutos do primeiro contato médico), a terapia fibrinolítica no hospital de origem, seguida de transferência para o serviço de hemodinâmica, é a estratégia de reperfusão indicada no infarto com supradesnivelamento de ST.'
  },
  {
    id: 'enamed_inedita_090',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 48 anos apresenta cefaleia súbita, de intensidade máxima já no início ("a pior dor de cabeça da vida"), associada a rigidez de nuca, náuseas, vômitos e fotofobia. Nega trauma. Ao exame, sem déficits motores focais, mas com sonolência leve.\n\nQual é a principal hipótese diagnóstica e a conduta inicial mais apropriada?',
    options: [
      'Enxaqueca com aura; analgesia e alta com retorno ambulatorial.',
      'Hemorragia subaracnóidea (provavelmente por ruptura de aneurisma cerebral); tomografia de crânio sem contraste de urgência, seguida de punção lombar se a TC for negativa e a suspeita persistir.',
      'Cefaleia tensional crônica agudizada; anti-inflamatório oral e repouso domiciliar.',
      'Meningite viral; aguardar evolução espontânea por 48 horas antes de investigar.'
    ],
    correctIndex: 1,
    explanation: 'Cefaleia súbita e de intensidade máxima já no início ("thunderclap headache"), associada a rigidez de nuca, é altamente sugestiva de hemorragia subaracnóidea, frequentemente por ruptura de aneurisma cerebral; a tomografia de crânio sem contraste é o exame inicial de urgência, e a punção lombar (buscando xantocromia) deve ser realizada se a TC for negativa e a suspeita clínica permanecer alta.'
  },
  {
    id: 'enamed_inedita_091',
    cycle: 'Ciclo Clínico',
    subject: 'Geriatria',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 72 anos relata perda involuntária de pequenas quantidades de urina ao tossir, espirrar ou realizar esforço físico, sem urgência miccional associada. Nega perdas durante o sono. Antecedente de três partos vaginais.\n\nQual é o tipo de incontinência urinária mais provável, e qual a primeira linha de tratamento não farmacológico?',
    options: [
      'Incontinência urinária de urgência; treinamento vesical e anticolinérgicos.',
      'Incontinência urinária de esforço; exercícios de fortalecimento da musculatura do assoalho pélvico (exercícios de Kegel).',
      'Incontinência urinária por transbordamento; cateterismo intermitente como primeira conduta.',
      'Incontinência urinária funcional; adequação do ambiente físico, sem necessidade de exercícios pélvicos.'
    ],
    correctIndex: 1,
    explanation: 'Perda urinária associada a esforço físico (tosse, espirro), sem urgência miccional, é característica da incontinência urinária de esforço, comum em mulheres com histórico de partos vaginais (enfraquecimento do assoalho pélvico); a primeira linha de tratamento não farmacológico são os exercícios de fortalecimento da musculatura pélvica (exercícios de Kegel).'
  },
  {
    id: 'enamed_inedita_092',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 8 anos, previamente saudável e com peso adequado, é levada à emergência pelos pais por apresentar, nas últimas 3 semanas, sede excessiva, aumento da frequência urinária (inclusive enurese noturna secundária, que não ocorria antes) e perda de peso não intencional, apesar do apetite aumentado. Glicemia capilar na admissão: 380 mg/dL. Cetonúria presente, sem sinais de acidose grave.\n\nQual é o diagnóstico mais provável e a conduta terapêutica de longo prazo?',
    options: [
      'Diabetes mellitus tipo 2; metformina como tratamento inicial.',
      'Diabetes mellitus tipo 1; insulinoterapia como tratamento definitivo, associada à educação em diabetes.',
      'Diabetes insípido central; restrição hídrica como tratamento principal.',
      'Diabetes gestacional; não se aplica a essa faixa etária, devendo ser reclassificado sem necessidade de tratamento medicamentoso.'
    ],
    correctIndex: 1,
    explanation: 'Poliúria, polidipsia, perda de peso apesar do apetite aumentado e hiperglicemia com cetonúria em criança magra são característicos do diabetes mellitus tipo 1, doença autoimune com destruição das células beta pancreáticas; o tratamento é a insulinoterapia por toda a vida, associada à educação do paciente e da família para o autocuidado.'
  },
  {
    id: 'enamed_inedita_093',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Puérpera de 6 semanas, em consulta de puericultura do bebê, relata à enfermeira da UBS tristeza persistente, choro fácil, dificuldade de sentir prazer em atividades que antes gostava, sensação de estar "sobrecarregada" e culpa por não conseguir cuidar bem do filho, sintomas presentes há cerca de 1 mês.\n\nQual é a conduta mais adequada da equipe de Atenção Primária diante desse relato?',
    options: [
      'Considerar normal o "baby blues" e orientar apenas que os sintomas passarão espontaneamente em poucos dias.',
      'Aplicar instrumento de rastreio para depressão pós-parto (como a Escala de Depressão Pós-Natal de Edimburgo) e, conforme o resultado, iniciar ou encaminhar para tratamento adequado.',
      'Encaminhar imediatamente para internação psiquiátrica, independentemente da gravidade dos sintomas relatados.',
      'Não investigar sintomas emocionais na consulta de puericultura, por não ser o foco desse atendimento.'
    ],
    correctIndex: 1,
    explanation: 'Sintomas depressivos persistentes por mais de 2 semanas no puerpério (diferente do "baby blues", que é autolimitado e dura poucos dias) devem ser ativamente rastreados na Atenção Primária, inclusive durante consultas de puericultura, com instrumentos como a Escala de Edimburgo, para identificar e tratar precocemente a depressão pós-parto.'
  },
  {
    id: 'enamed_inedita_094',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Menino de 2 anos e 6 meses é levado à consulta por preocupação dos pais quanto ao desenvolvimento. Relatam que a criança não estabelece contato visual consistente, não aponta para objetos de interesse compartilhado, não responde ao próprio nome de forma consistente, apresenta movimentos repetitivos das mãos (flapping) e forte resistência a mudanças em sua rotina diária, além de ainda não ter desenvolvido linguagem verbal.\n\nConsiderando esses sinais, qual é a principal hipótese diagnóstica e a conduta apropriada?',
    options: [
      'Atraso de linguagem isolado; apenas encaminhar para fonoaudiologia, sem necessidade de avaliação mais ampla.',
      'Transtorno do espectro autista; encaminhar para avaliação multiprofissional especializada e iniciar intervenção precoce.',
      'Deficiência auditiva isolada; aguardar teste de audiometria antes de qualquer outra investigação.',
      'Comportamento normal para a idade; tranquilizar os pais sem necessidade de acompanhamento adicional.'
    ],
    correctIndex: 1,
    explanation: 'Déficits na comunicação social (contato visual, atenção compartilhada, resposta ao nome, ausência de linguagem) associados a comportamentos repetitivos e resistência a mudanças de rotina são sinais de alerta para transtorno do espectro autista; a suspeita nessa idade justifica encaminhamento para avaliação multiprofissional especializada e início de intervenção precoce, que melhora significativamente o prognóstico.'
  },
  {
    id: 'enamed_inedita_095',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Puérpera evolui, 20 minutos após parto vaginal sem intercorrências, com sangramento vaginal abundante e persistente. Ao exame, útero amolecido, com fundo uterino acima da cicatriz umbilical, sem boa resposta à massagem uterina inicial. Placenta já foi expelida integralmente.\n\nQual é a principal causa de hemorragia pós-parto nesse contexto e a conduta medicamentosa de primeira linha?',
    options: [
      'Retenção de restos placentários; curetagem uterina imediata, sem uso de uterotônicos.',
      'Atonia uterina; ocitocina endovenosa como uterotônico de primeira linha, associada a massagem uterina bimanual.',
      'Laceração de trajeto (canal de parto); sutura cirúrgica como única conduta necessária, sem uso de medicações.',
      'Inversão uterina; reposicionamento manual do útero, sem necessidade de uterotônicos.'
    ],
    correctIndex: 1,
    explanation: 'Útero amolecido e aumentado após a dequitação, com sangramento persistente e resposta inadequada à massagem, é o quadro típico de atonia uterina, principal causa de hemorragia pós-parto; a conduta de primeira linha é a ocitocina endovenosa, associada à massagem uterina bimanual, reservando-se outros uterotônicos e medidas cirúrgicas para casos refratários.'
  },
  {
    id: 'enamed_inedita_096',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 4 anos apresenta crise convulsiva em vigência de febre de 39 °C, com características focais (desvio do olhar e abalos restritos ao membro superior direito), duração de 20 minutos, e um segundo episódio dentro do mesmo dia febril. Exame neurológico pós-ictal com leve assimetria de força, que se resolve em algumas horas.\n\nDiferentemente da crise febril simples, esse quadro caracteriza uma crise febril complexa, e a conduta adequada inclui',
    options: [
      'tranquilizar a família e liberar sem qualquer investigação adicional, como na crise febril simples.',
      'investigação adicional (incluindo avaliação da causa da febre e consideração de exames neurológicos e/ou punção lombar conforme o contexto clínico), dada a presença de características de complexidade.',
      'iniciar profilaxia anticonvulsivante contínua imediatamente, independentemente de novos episódios.',
      'indicar internação exclusivamente para observação, sem necessidade de qualquer investigação complementar.'
    ],
    correctIndex: 1,
    explanation: 'Crises febris complexas (focais, prolongadas acima de 15 minutos, ou recorrentes no mesmo episódio febril) diferem da crise febril simples e exigem investigação adicional mais cuidadosa, incluindo avaliação da causa da febre e, conforme o contexto clínico (sinais de alarme, idade, estado geral), consideração de exames complementares como punção lombar para afastar meningite.'
  },
  {
    id: 'enamed_inedita_097',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 55 anos, em uso regular e comprovadamente aderente a três classes de anti-hipertensivos em doses otimizadas (incluindo um diurético), mantém pressão arterial persistentemente acima da meta (155 x 95 mmHg) em múltiplas aferições, inclusive fora do consultório (MAPA confirmatório).\n\nEssa condição é definida como hipertensão arterial resistente, e a investigação inicial mais apropriada deve incluir a pesquisa de',
    options: [
      'causas secundárias de hipertensão, como hiperaldosteronismo primário, doença renal e apneia obstrutiva do sono.',
      'apenas ajuste posológico das medicações já em uso, sem necessidade de investigação adicional.',
      'transtorno de ansiedade generalizada isoladamente, como única causa a ser considerada.',
      'hipertensão do jaleco branco, que já explica satisfatoriamente o quadro, dispensando outras investigações.'
    ],
    correctIndex: 0,
    explanation: 'A hipertensão arterial resistente (PA não controlada apesar do uso adequado de 3 ou mais classes de anti-hipertensivos, incluindo diurético, com adesão confirmada e aferição fora do consultório) exige investigação de causas secundárias, como hiperaldosteronismo primário, doença renal parenquimatosa ou vascular, e apneia obstrutiva do sono, que são causas tratáveis e relativamente comuns nesse contexto.'
  },
  {
    id: 'enamed_inedita_098',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Técnica de enfermagem sofre acidente perfurocortante com agulha utilizada em paciente-fonte com sorologia desconhecida, durante coleta de sangue. A lesão foi profunda, com sangramento visível, e a agulha continha sangue visível no momento do acidente.\n\nConsiderando a profilaxia pós-exposição ocupacional a material biológico, a conduta imediata mais adequada é',
    options: [
      'aguardar o resultado da sorologia do paciente-fonte, que pode levar dias, antes de iniciar qualquer conduta profilática.',
      'lavar o local com água e sabão, notificar o acidente, testar rapidamente a profissional e o paciente-fonte (quando possível) e considerar profilaxia antirretroviral o mais precocemente possível, idealmente nas primeiras 2 horas.',
      'não é necessária nenhuma conduta específica, pois acidentes com agulha raramente transmitem infecções.',
      'iniciar profilaxia antirretroviral apenas se a técnica de enfermagem apresentar sintomas nos dias seguintes ao acidente.'
    ],
    correctIndex: 1,
    explanation: 'Acidentes perfurocortantes com risco biológico (lesão profunda, sangramento, agulha com sangue visível, fonte de sorologia desconhecida) exigem conduta imediata: lavagem do local, notificação do acidente, testagem rápida do profissional e, quando possível, do paciente-fonte, e início precoce (idealmente nas primeiras 2 horas, no máximo até 72 horas) da profilaxia antirretroviral pós-exposição quando indicada.'
  },
  {
    id: 'enamed_inedita_099',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 58 anos relata dispepsia (desconforto epigástrico e saciedade precoce) há 3 meses, associada a emagrecimento não intencional de 6 kg, anemia ferropriva de início recente e episódios de disfagia progressiva para sólidos. Nega uso de anti-inflamatórios.\n\nConsiderando a presença de sinais de alarme associados à dispepsia, qual é a conduta prioritária?',
    options: [
      'Tratamento empírico com inibidor de bomba de prótons por 8 semanas, reavaliando apenas se não houver melhora.',
      'Endoscopia digestiva alta precoce, para investigação de neoplasia gástrica ou esofágica, dada a presença de sinais de alarme.',
      'Solicitar apenas exame de pesquisa de Helicobacter pylori nas fezes, sem necessidade de endoscopia nesse momento.',
      'Orientar apenas mudanças dietéticas, reavaliando o quadro em 6 meses.'
    ],
    correctIndex: 1,
    explanation: 'Dispepsia associada a sinais de alarme (emagrecimento não intencional, anemia, disfagia progressiva, idade acima de 45-55 anos) exige investigação endoscópica precoce, e não tratamento empírico, pela necessidade de excluir neoplasia gástrica ou esofágica.'
  },
  {
    id: 'enamed_inedita_100',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Paciente acompanhado na Unidade Básica de Saúde por hipertensão arterial de difícil controle é encaminhado ao cardiologista de um ambulatório de especialidades. Após a consulta especializada, o cardiologista devolve um relatório à equipe da UBS com orientações sobre ajuste terapêutico e recomendação de manutenção do acompanhamento conjunto.\n\nEsse fluxo de comunicação entre os níveis de atenção, essencial para a continuidade e a integralidade do cuidado, é denominado',
    options: [
      'prevenção quaternária.',
      'referência e contrarreferência.',
      'territorialização em saúde.',
      'acolhimento com classificação de risco.'
    ],
    correctIndex: 1,
    explanation: 'O sistema de referência (encaminhamento do paciente da Atenção Primária para um serviço especializado) e contrarreferência (retorno de informações e orientações do especialista para a equipe de origem) é fundamental para garantir a continuidade do cuidado e a comunicação entre os diferentes níveis de atenção à saúde no SUS.'
  },
];
