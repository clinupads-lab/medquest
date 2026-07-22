// Segunda leva de questões inéditas no estilo ENAMED (vinheta clínica objetiva),
// complementando src/enamed_inedita_questions.ts. Mesma convenção: banca
// 'ENAMED (inédita)' — conteúdo original, não são questões reais de prova.
export const ENAMED_INEDITA_2_QUESTIONS: any[] = [
  {
    id: 'enamed_inedita2_001',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 41 semanas, pré-natal de risco habitual, apresenta rotura de membranas confirmada há 19 horas, sem contrações regulares. Sinais vitais maternos normais, sem febre. Batimentos cardíacos fetais normais, líquido amniótico claro.\n\nConsiderando o tempo de bolsa rota e a idade gestacional, a conduta adequada é',
    options: [
      'conduta expectante domiciliar por até 7 dias, sem necessidade de indução do parto, mesmo havendo risco aumentado de corioamnionite pela rotura prolongada de membranas.',
      'indução do trabalho de parto e profilaxia antibiótica intraparto para estreptococo do grupo B, independentemente de rastreio prévio.',
      'cesárea eletiva imediata, pois a bolsa rota há mais de 18 horas contraindicaria formalmente qualquer tentativa de parto vaginal, independentemente das condições cervicais e do bem-estar fetal.',
      'aguardar mais 24 horas antes de qualquer conduta ativa, mantendo apenas monitorização fetal contínua e reavaliação materna periódica, sem iniciar antibioticoprofilaxia nesse momento.'
    ],
    correctIndex: 1,
    explanation: 'Rotura de membranas a termo com mais de 18 horas de bolsa rota é indicação de profilaxia antibiótica intraparto para estreptococo do grupo B e de indução do trabalho de parto, pelo risco aumentado de infecção materna e neonatal com a conduta expectante prolongada.'
  },
  {
    id: 'enamed_inedita2_002',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 60 anos, na pós-menopausa, é encontrada com massa anexial sólido-cística de 8 cm em ultrassonografia realizada por dor pélvica inespecífica. CA-125 sérico de 250 U/mL (referência até 35). Sem ascite ou linfonodomegalia identificadas na imagem.\n\nQual é a principal hipótese diagnóstica e a conduta mais adequada?',
    options: [
      'Cisto funcional ovariano; conduta expectante com reavaliação em 3 meses.',
      'Neoplasia ovariana maligna; encaminhamento para cirurgia oncológica especializada.',
      'Endometrioma; laparoscopia eletiva sem necessidade de avaliação oncológica prévia.',
      'Mioma subseroso pediculado; miomectomia eletiva ambulatorial.'
    ],
    correctIndex: 1,
    explanation: 'Massa anexial complexa em mulher pós-menopausa, associada a CA-125 muito elevado, é fortemente sugestiva de neoplasia ovariana maligna; a conduta é o encaminhamento para avaliação e cirurgia oncológica especializada, evitando manipulação inadequada da massa.'
  },
  {
    id: 'enamed_inedita2_003',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 68 anos, multípara de 4 partos vaginais, relata sensação de "peso" e "bola" na vagina, que piora ao final do dia e com esforços, associada a dificuldade para esvaziar completamente a bexiga. Ao exame, abaulamento da parede vaginal anterior visível ao esforço, ultrapassando o hímen.\n\nQual é o diagnóstico mais provável?',
    options: ['Retocele isolada.', 'Cistocele (prolapso da parede vaginal anterior).', 'Prolapso uterino total (procidência).', 'Enterocele.'],
    correctIndex: 1,
    explanation: 'O abaulamento da parede vaginal anterior, associado a sintomas de peso vaginal e dificuldade de esvaziamento vesical completo, é característico de cistocele, decorrente do enfraquecimento do suporte da parede vaginal anterior, comum em multíparas.'
  },
  {
    id: 'enamed_inedita2_004',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Puérpera de 4 dias, parto vaginal, é internada com febre de 38,7 °C, dor abdominal baixa e lóquios com odor fétido. Ao exame, útero subinvoluído e doloroso à palpação, sem sinais de mastite.\n\nQual é o diagnóstico mais provável e a conduta terapêutica?',
    options: [
      'Endometrite puerperal; antibioticoterapia de amplo espectro endovenosa (cobertura para flora polimicrobiana).',
      'Infecção de sítio cirúrgico; apenas curativo local, sem necessidade de antibiótico sistêmico.',
      'Retenção urinária puerperal; sondagem vesical de alívio, sem necessidade de antibiótico.',
      'Tromboflebite pélvica séptica isolada; anticoagulação isolada, sem antibioticoterapia.'
    ],
    correctIndex: 0,
    explanation: 'Febre, dor uterina e lóquios fétidos no puerpério são característicos de endometrite puerperal, geralmente por flora polimicrobiana; o tratamento é a antibioticoterapia de amplo espectro por via endovenosa.'
  },
  {
    id: 'enamed_inedita2_005',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 30 anos, com antecedente de duas curetagens uterinas por abortamento incompleto, relata amenorreia há 8 meses, com testes de gravidez negativos repetidos. Níveis hormonais (FSH, LH, prolactina, TSH) normais.\n\nQual é a principal hipótese diagnóstica a ser investigada, considerando o antecedente cirúrgico?',
    options: [
      'Insuficiência ovariana primária.',
      'Síndrome de Asherman (sinéquias uterinas pós-curetagem).',
      'Síndrome dos ovários policísticos.',
      'Hiperprolactinemia por microadenoma hipofisário.'
    ],
    correctIndex: 1,
    explanation: 'Amenorreia secundária com eixo hormonal normal em mulher com histórico de múltiplas curetagens uterinas sugere síndrome de Asherman, formação de sinéquias (aderências) intrauterinas que impedem a resposta endometrial adequada; a histeroscopia é o método diagnóstico e terapêutico de escolha.'
  },
  {
    id: 'enamed_inedita2_006',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 39 semanas, com cesárea anterior única por apresentação pélvica, deseja tentar parto vaginal nessa gestação. Durante o trabalho de parto, apresenta dor abdominal súbita intensa, seguida de cessação das contrações uterinas, sangramento vaginal e alteração aguda dos batimentos cardíacos fetais (bradicardia sustentada).\n\nQual é a principal hipótese diagnóstica e a conduta imediata?',
    options: [
      'Descolamento prematuro de placenta; aguardar evolução espontânea do trabalho de parto.',
      'Rotura uterina; cesárea de emergência imediata.',
      'Distocia funcional; aumentar a infusão de ocitocina.',
      'Prolapso de cordão umbilical isolado; apenas reposicionamento manual, sem necessidade de cirurgia.'
    ],
    correctIndex: 1,
    explanation: 'Dor abdominal súbita intensa com cessação das contrações, sangramento e sofrimento fetal agudo durante prova de trabalho de parto após cesárea prévia são sinais clássicos de rotura uterina, uma emergência obstétrica que exige cesárea imediata para salvar a vida materna e fetal.'
  },
  {
    id: 'enamed_inedita2_007',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante tratada para sífilis na 20ª semana com esquema penicilínico adequado e parceiro tratado concomitantemente apresentava VDRL 1:64 no diagnóstico. Realiza VDRL de seguimento mensal, e na 32ª semana o resultado é 1:8.\n\nEssa evolução da titulação indica',
    options: [
      'falha terapêutica, exigindo retratamento imediato com novo esquema penicilínico.',
      'resposta terapêutica adequada, já que houve queda de pelo menos duas diluições em relação ao título inicial.',
      'reinfecção recente, independentemente da queda observada na titulação.',
      'necessidade obrigatória de repetir o tratamento a cada queda de titulação, mesmo que adequada.'
    ],
    correctIndex: 1,
    explanation: 'A queda de pelo menos duas diluições no VDRL (de 1:64 para 1:16 ou menos) em até 3 meses após o tratamento adequado da sífilis indica boa resposta terapêutica; nesse caso, a queda de 1:64 para 1:8 corresponde a três diluições, confirmando resposta satisfatória, sem necessidade de retratamento.'
  },
  {
    id: 'enamed_inedita2_008',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Menina de 4 anos é levada por corrimento vaginal esverdeado e odor fétido persistente há 2 semanas, sem resposta a higienização local. Nega prurido intenso. Ao exame especular sob sedação, identifica-se pequeno objeto compatível com fragmento de papel higiênico na vagina.\n\nQual é a causa mais comum de corrimento vaginal persistente em crianças pré-púberes, exemplificada nesse caso?',
    options: [
      'Candidíase vulvovaginal, tão comum em crianças quanto em adultas.',
      'Corpo estranho vaginal, causa comum e frequentemente subdiagnosticada de corrimento persistente e fétido em crianças.',
      'Vaginose bacteriana, com apresentação idêntica à de mulheres adultas sexualmente ativas.',
      'Sempre indicativo de abuso sexual, devendo-se presumir essa causa antes de qualquer outra investigação.'
    ],
    correctIndex: 1,
    explanation: 'Em crianças pré-púberes, o corpo estranho vaginal (frequentemente fragmentos de papel higiênico) é uma causa comum e muitas vezes subdiagnosticada de corrimento vaginal persistente, fétido e por vezes sanguinolento, devendo ser sempre considerado e investigado com exame cuidadoso.'
  },
  {
    id: 'enamed_inedita2_009',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 58 anos, obesa, hipertensa, diabética, nulípara, com menopausa aos 55 anos, procura atendimento por sangramento vaginal de pequena quantidade há 1 semana.\n\nConsiderando os fatores de risco apresentados, qual neoplasia ginecológica deve ser prioritariamente investigada?',
    options: ['Câncer de colo do útero.', 'Câncer de endométrio.', 'Câncer de vulva.', 'Câncer de tuba uterina.'],
    correctIndex: 1,
    explanation: 'Obesidade, diabetes, hipertensão, nuliparidade e menopausa tardia são fatores de risco clássicos para câncer de endométrio (relacionados ao excesso de estímulo estrogênico não contraposto); todo sangramento vaginal na pós-menopausa deve ser investigado com ultrassonografia transvaginal e, se necessário, biópsia endometrial.'
  },
  {
    id: 'enamed_inedita2_010',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Recém-nascido, filho de mãe com anemia falciforme (traço não investigado no pai), realiza a triagem neonatal (teste do pezinho) na primeira semana de vida, cujo resultado mostra eletroforese de hemoglobina compatível com hemoglobinopatia SS.\n\nQual é a conduta prioritária após esse resultado?',
    options: [
      'Aguardar até os 2 anos de idade para confirmar o diagnóstico e iniciar qualquer conduta.',
      'Encaminhar para acompanhamento especializado em hematologia pediátrica e iniciar profilaxia com penicilina oral a partir dos 2-3 meses de vida.',
      'Iniciar transfusões sanguíneas mensais profiláticas desde o nascimento, independentemente de sintomas.',
      'Não é necessária nenhuma conduta especial, pois a triagem neonatal apenas identifica portadores assintomáticos do traço falciforme.'
    ],
    correctIndex: 1,
    explanation: 'O diagnóstico de doença falciforme (SS) pela triagem neonatal exige encaminhamento precoce para acompanhamento especializado, com início de profilaxia com penicilina oral a partir dos 2-3 meses de vida, para reduzir o risco de infecções graves por pneumococo, além de vacinação especial e acompanhamento clínico regular.'
  },
  {
    id: 'enamed_inedita2_011',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Recém-nascido, sexo feminino, em exame físico de rotina na maternidade, apresenta assimetria de pregas cutâneas em coxas e limitação da abdução do quadril esquerdo. Durante a manobra de flexão e abdução do quadril com pressão anterior sobre o trocânter maior, percebe-se um ressalto palpável (clique).\n\nQual é o diagnóstico mais provável, a manobra descrita e a conduta apropriada?',
    options: [
      'Fratura de fêmur perinatal; manobra de Galeazzi (assimetria do comprimento dos membros); radiografia de urgência para confirmação e imobilização adequada.',
      'Displasia do desenvolvimento do quadril; manobra de Ortolani; encaminhamento para acompanhamento ortopédico e ultrassonografia de quadril.',
      'Paralisia braquial obstétrica; manobra de Barlow (usada para testar luxação do quadril, não relacionada ao plexo braquial); fisioterapia motora isolada, sem avaliação ortopédica adicional.',
      'Luxação congênita de joelho; manobra de Lachman (teste ligamentar do joelho, sem relação com o quadril); imobilização gessada imediata, sem necessidade de avaliação especializada.'
    ],
    correctIndex: 1,
    explanation: 'Assimetria de pregas e o "clique" palpável durante a manobra de Ortolani (que reduz uma luxação presente) são sinais sugestivos de displasia do desenvolvimento do quadril; a conduta é o encaminhamento para acompanhamento ortopédico pediátrico e confirmação por ultrassonografia de quadril, exame de escolha nos primeiros meses de vida.'
  },
  {
    id: 'enamed_inedita2_012',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Recém-nascido, com histórico familiar de deficiência de G6PD (avô materno), apresenta icterícia importante no terceiro dia de vida, após uso de naftalina (bolinhas de naftalina) nas roupas do enxoval. Exames mostram anemia hemolítica aguda com presença de corpúsculos de Heinz no esfregaço de sangue periférico.\n\nQual é o diagnóstico mais provável e a orientação essencial para essa família?',
    options: [
      'Esferocitose hereditária, condição com fragilidade da membrana eritrocitária; esplenectomia precoce como tratamento definitivo, independentemente da história de exposição a agentes oxidantes.',
      'Deficiência de glicose-6-fosfato desidrogenase (G6PD); orientar evitar agentes oxidantes (certos medicamentos, naftalina, fava).',
      'Talassemia beta maior, defeito na síntese da cadeia beta da hemoglobina; transfusões sanguíneas regulares desde o nascimento, sem relação com exposição a agentes oxidantes.',
      'Incompatibilidade Rh (aloimunização materno-fetal); administração de imunoglobulina anti-D à mãe, medida preventiva sem relação com a história familiar de G6PD.'
    ],
    correctIndex: 1,
    explanation: 'Hemólise aguda desencadeada por agente oxidante (naftalina) em recém-nascido com história familiar sugestiva e corpúsculos de Heinz no esfregaço é característica da deficiência de G6PD; a orientação essencial é evitar substâncias e medicamentos oxidantes conhecidos (naftalina, fava, alguns antimaláricos e sulfonamidas).'
  },
  {
    id: 'enamed_inedita2_013',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 4 anos apresenta edema periorbitário matinal que progride ao longo do dia para edema de membros inferiores e ascite discreta. Exames: proteinúria maciça (relação proteína/creatinina urinária muito elevada), albumina sérica de 1,9 g/dL, colesterol total elevado. Função renal normal, sem hematúria significativa, complemento normal.\n\nQual é o diagnóstico mais provável e o tratamento de primeira linha?',
    options: [
      'Glomerulonefrite pós-estreptocócica, associada a hematúria e hipertensão; antibioticoterapia isolada como tratamento principal.',
      'Síndrome nefrótica idiopática (lesões mínimas); corticoterapia oral (prednisona).',
      'Síndrome hemolítico-urêmica, associada a anemia hemolítica e trombocitopenia; diálise imediata como conduta prioritária.',
      'Nefrite lúpica, geralmente associada a outras manifestações sistêmicas de lúpus; ciclofosfamida como primeira escolha terapêutica.'
    ],
    correctIndex: 1,
    explanation: 'Síndrome nefrótica em criança pequena, sem hematúria significativa e com complemento normal, é mais frequentemente causada por doença de lesões mínimas; o tratamento de primeira linha é a corticoterapia oral, com boa resposta na maioria dos casos pediátricos.'
  },
  {
    id: 'enamed_inedita2_014',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 5 anos, após ingerir amendoim pela primeira vez em uma festa, desenvolve, em poucos minutos, urticária generalizada, edema labial, tosse seca persistente e sibilância audível, com dificuldade respiratória progressiva.\n\nAlém de acionar o serviço de emergência, qual é a conduta imediata mais importante?',
    options: [
      'Administrar anti-histamínico oral e aguardar a evolução por 30 minutos antes de outras medidas.',
      'Administrar adrenalina intramuscular imediatamente, na face anterolateral da coxa.',
      'Induzir vômito para eliminar o alérgeno ingerido.',
      'Aguardar a chegada da ambulância sem qualquer intervenção medicamentosa domiciliar.'
    ],
    correctIndex: 1,
    explanation: 'Diante de sinais de anafilaxia (envolvimento cutâneo, respiratório, de início rápido após exposição a alérgeno conhecido), a adrenalina intramuscular deve ser administrada imediatamente, sendo a medida mais eficaz para reverter a reação e prevenir progressão para choque anafilático.'
  },
  {
    id: 'enamed_inedita2_015',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Três irmãos, de 3, 6 e 9 anos, apresentam prurido intenso e generalizado, mais acentuado no período noturno, com lesões papulares e escoriações em espaços interdigitais das mãos, punhos, axilas e região periumbilical. Os pais também referem prurido leve.\n\nQual é o diagnóstico mais provável e o tratamento de escolha?',
    options: [
      'Dermatite atópica; corticoide tópico e hidratação cutânea intensiva.',
      'Escabiose; permetrina tópica a 5%, tratando simultaneamente todos os contactantes domiciliares.',
      'Pediculose corporal; ivermectina oral isolada, sem necessidade de tratamento tópico.',
      'Urticária alérgica; anti-histamínico oral, sem necessidade de tratamento tópico.'
    ],
    correctIndex: 1,
    explanation: 'Prurido de predomínio noturno, com lesões em espaços interdigitais, punhos, axilas e região periumbilical, acometendo múltiplos membros da mesma família, é característico de escabiose; o tratamento de escolha é a permetrina tópica a 5%, aplicada em todos os contactantes domiciliares simultaneamente, mesmo os assintomáticos.'
  },
  {
    id: 'enamed_inedita2_016',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Mãe de lactente de 5 meses e meio, em aleitamento materno exclusivo, pergunta na consulta de puericultura quando deve iniciar a alimentação complementar.\n\nSegundo as recomendações do Ministério da Saúde, a orientação adequada é',
    options: [
      'iniciar a partir dos 4 meses completos, independentemente do tipo de aleitamento.',
      'iniciar a partir dos 6 meses completos, mantendo o aleitamento materno complementado até os 2 anos ou mais.',
      'aguardar até os 12 meses, mantendo aleitamento materno exclusivo até essa idade.',
      'iniciar imediatamente, aos 5 meses e meio, por já haver maturidade digestiva suficiente.'
    ],
    correctIndex: 1,
    explanation: 'A recomendação do Ministério da Saúde é de aleitamento materno exclusivo até os 6 meses completos de vida, com introdução da alimentação complementar a partir dessa idade, mantendo-se o aleitamento materno complementado até os 2 anos de idade ou mais.'
  },
  {
    id: 'enamed_inedita2_017',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Lactente de 3 meses apresenta episódios recorrentes de tosse produtiva, infecções respiratórias de repetição e ganho ponderal insuficiente apesar de boa oferta alimentar, além de fezes volumosas, gordurosas e de odor fétido. A triagem neonatal (teste do pezinho) havia mostrado tripsina imunorreativa elevada.\n\nQual é o diagnóstico mais provável e o exame confirmatório?',
    options: [
      'Doença celíaca; biópsia duodenal.',
      'Fibrose cística; teste do suor (dosagem de cloro no suor), com dois resultados alterados.',
      'Alergia à proteína do leite de vaca; teste de provocação oral.',
      'Discinesia ciliar primária; biópsia de mucosa nasal para microscopia eletrônica.'
    ],
    correctIndex: 1,
    explanation: 'Infecções respiratórias de repetição, má progressão ponderal e esteatorreia, associadas a tripsina imunorreativa elevada na triagem neonatal, são sugestivas de fibrose cística; o exame confirmatório padrão-ouro é o teste do suor, com dosagem de cloro, repetido em duas ocasiões para confirmação.'
  },
  {
    id: 'enamed_inedita2_018',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 2 anos apresenta febre de 39 °C e otalgia intensa há 1 dia, com irritabilidade e choro que piora ao deitar. Ao exame otoscópico, membrana timpânica hiperemiada, abaulada e com perda do triângulo luminoso, sem perfuração.\n\nQual é o diagnóstico e o tratamento antibiótico de primeira linha, considerando os critérios de gravidade apresentados?',
    options: [
      'Otite externa aguda; ciprofloxacino tópico, sem necessidade de antibiótico oral.',
      'Otite média aguda; amoxicilina oral em dose apropriada para o peso.',
      'Otite média serosa; apenas observação clínica, sem antibiótico.',
      'Mastoidite aguda; internação e antibioticoterapia endovenosa como única opção.'
    ],
    correctIndex: 1,
    explanation: 'Febre, otalgia importante e membrana timpânica abaulada e hiperemiada configuram otite média aguda; a amoxicilina oral em dose apropriada é o antibiótico de primeira linha para os casos com indicação de tratamento antimicrobiano.'
  },
  {
    id: 'enamed_inedita2_019',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 3 anos é levada por evacuações infrequentes (a cada 4-5 dias), fezes endurecidas e dolorosas, com episódios de escape fecal ("soiling") nas roupas íntimas, sem outras alterações ao exame físico e sem sinais de alarme (sem febre, perda de peso ou sangramento importante).\n\nQual é o diagnóstico mais provável e a abordagem terapêutica inicial?',
    options: [
      'Doença de Hirschsprung, geralmente associada a constipação desde o período neonatal; biópsia retal como conduta inicial obrigatória para confirmação diagnóstica.',
      'Constipação funcional; desimpactação fecal, seguida de terapia de manutenção com laxante e reeducação do hábito intestinal.',
      'Fissura anal isolada, sem impactação fecal associada; apenas pomada anestésica tópica local, sem necessidade de laxantes ou reeducação do hábito intestinal.',
      'Alergia alimentar à proteína do leite de vaca; exclusão empírica de múltiplos alimentos da dieta, sem necessidade de desimpactação fecal.'
    ],
    correctIndex: 1,
    explanation: 'Na ausência de sinais de alarme, a constipação funcional é o diagnóstico mais provável em crianças com esse padrão de evacuações e escape fecal por impactação; o tratamento envolve desimpactação inicial, seguida de laxante de manutenção (como polietilenoglicol) e reeducação dos hábitos intestinais.'
  },
  {
    id: 'enamed_inedita2_020',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Equipe de Saúde da Família, ao analisar os indicadores de sua área, percebe elevado número de internações por complicações de doenças que poderiam ter sido evitadas com acompanhamento adequado na Atenção Primária, como descompensação de insuficiência cardíaca e crises asmáticas graves.\n\nEsse indicador, utilizado para avaliar a efetividade da Atenção Primária à Saúde, é denominado',
    options: [
      'taxa de mortalidade infantil.',
      'internações por condições sensíveis à atenção primária (ICSAP).',
      'coeficiente de incidência de doenças transmissíveis.',
      'taxa de ocupação hospitalar.'
    ],
    correctIndex: 1,
    explanation: 'As internações por condições sensíveis à atenção primária (ICSAP) são um indicador que mede a efetividade da Atenção Primária, referindo-se a hospitalizações por agravos que, com acompanhamento ambulatorial adequado e oportuno, poderiam ter sido evitadas.'
  },
  {
    id: 'enamed_inedita2_021',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Médica de Unidade Básica de Saúde em município do interior utiliza uma plataforma de teleconsultoria para discutir, em tempo real, um caso complexo de manejo de insulina com um endocrinologista de um hospital universitário, sem necessidade de deslocar o paciente.\n\nEssa ferramenta, que amplia o acesso a apoio especializado sem deslocamento físico do paciente, é denominada',
    options: ['telemonitoramento.', 'telessaúde (teleconsultoria).', 'prontuário eletrônico compartilhado.', 'regulação assistencial.'],
    correctIndex: 1,
    explanation: 'A telessaúde, por meio da teleconsultoria, permite que profissionais da Atenção Primária discutam casos clínicos com especialistas a distância, ampliando o acesso ao apoio especializado e evitando encaminhamentos desnecessários, sem a necessidade de deslocamento do paciente.'
  },
  {
    id: 'enamed_inedita2_022',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Durante consulta de rotina, médica de Unidade Básica de Saúde identifica em uma paciente de 35 anos sinais físicos compatíveis com violência doméstica (equimoses em diferentes estágios de cicatrização em região de tronco e braços), que a paciente atribui a "quedas acidentais", mostrando-se visivelmente constrangida ao ser questionada.\n\nAlém do acolhimento e da garantia de sigilo, qual é a conduta obrigatória prevista na legislação brasileira?',
    options: [
      'Notificação compulsória do caso suspeito de violência, mesmo sem confirmação verbal da paciente.',
      'Aguardar que a própria paciente relate espontaneamente a violência antes de qualquer notificação.',
      'Comunicar diretamente ao agressor sobre a suspeita, buscando uma mediação familiar.',
      'Não é necessária notificação, pois trata-se de uma questão exclusivamente privada do casal.'
    ],
    correctIndex: 0,
    explanation: 'A violência doméstica contra a mulher é agravo de notificação compulsória no Brasil, devendo ser notificada pelo profissional de saúde mesmo diante de suspeita fundamentada, independentemente da confirmação verbal explícita da vítima, com garantia de acolhimento e sigilo no processo.'
  },
  {
    id: 'enamed_inedita2_023',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 24 semanas comparece à consulta de pré-natal na Unidade Básica de Saúde para atualização vacinal.\n\nConsiderando o calendário vacinal específico para gestantes, quais vacinas devem ser recomendadas nesse momento?',
    options: [
      'Tríplice viral (sarampo, caxumba e rubéola) e varicela, vacinas de vírus vivo atenuado, indicadas nesse momento da gestação por serem consideradas seguras.',
      'Vacina dTpa (difteria, tétano e coqueluche acelular), a partir da 20ª semana, e influenza (conforme sazonalidade), ambas seguras na gestação.',
      'Febre amarela de rotina para todas as gestantes, independentemente de risco epidemiológico ou de contraindicação relativa dessa vacina de vírus vivo na gestação.',
      'Nenhuma vacina deve ser administrada durante a gestação, devendo-se aguardar o período puerperal para iniciar qualquer atualização do calendário vacinal materno.'
    ],
    correctIndex: 1,
    explanation: 'O calendário vacinal da gestante inclui a vacina dTpa (a partir da 20ª semana, idealmente, para proteção do recém-nascido contra coqueluche por transferência de anticorpos maternos) e a vacina influenza (conforme período sazonal); vacinas de vírus vivo atenuado, como tríplice viral, varicela e febre amarela, são geralmente contraindicadas na gestação, salvo risco epidemiológico elevado para a última.'
  },
  {
    id: 'enamed_inedita2_024',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Durante visita domiciliar, agente comunitária de saúde avalia idoso acamado de 88 anos quanto à sua capacidade de realizar atividades básicas de vida diária (banhar-se, vestir-se, higiene pessoal, transferência, continência e alimentação), utilizando um instrumento padronizado que classifica o grau de dependência funcional.\n\nEsse instrumento de avaliação funcional amplamente utilizado na Atenção Primária é denominado',
    options: ['Mini Exame do Estado Mental.', 'Escala de Katz.', 'Escala de Depressão Geriátrica.', 'Índice de Barthel modificado exclusivamente para mobilidade.'],
    correctIndex: 1,
    explanation: 'A Escala de Katz avalia a independência funcional do idoso em seis atividades básicas de vida diária (banho, vestir-se, higiene pessoal, transferência, continência e alimentação), sendo amplamente utilizada na Atenção Primária para classificar o grau de dependência e planejar o cuidado domiciliar.'
  },
  {
    id: 'enamed_inedita2_025',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Médico de Unidade Básica de Saúde precisa prescrever losartana para um paciente hipertenso recém-diagnosticado, de baixa renda, que não tem condições de comprar o medicamento em farmácia privada.\n\nA lista oficial que define os medicamentos que devem estar disponíveis gratuitamente na rede pública, incluindo a losartana, é denominada',
    options: [
      'Relação Nacional de Medicamentos Essenciais (RENAME).',
      'Agência Nacional de Vigilância Sanitária (ANVISA).',
      'Classificação Internacional de Doenças (CID).',
      'Programa Nacional de Imunizações (PNI).'
    ],
    correctIndex: 0,
    explanation: 'A Relação Nacional de Medicamentos Essenciais (RENAME) define os medicamentos que devem ser disponibilizados gratuitamente pelo Sistema Único de Saúde, orientando a prescrição na Atenção Primária de acordo com a disponibilidade na rede pública.'
  },
  {
    id: 'enamed_inedita2_026',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 26 semanas, em pré-natal na Unidade Básica de Saúde, é diagnosticada com pré-eclâmpsia com sinais de gravidade (pressão arterial 165 x 110 mmHg e proteinúria significativa).\n\nConsiderando a classificação de risco gestacional, a conduta adequada é',
    options: [
      'manter o pré-natal exclusivamente na Atenção Primária, por ser a porta de entrada preferencial.',
      'encaminhar para pré-natal de alto risco em serviço de referência, mantendo articulação com a Atenção Primária.',
      'orientar repouso domiciliar e reavaliação em 30 dias na própria UBS, sem necessidade de encaminhamento.',
      'encaminhar diretamente para uma unidade de pronto atendimento, sem necessidade de acompanhamento pré-natal especializado subsequente.'
    ],
    correctIndex: 1,
    explanation: 'Pré-eclâmpsia com sinais de gravidade é condição que classifica a gestação como de alto risco, exigindo encaminhamento para acompanhamento em serviço de pré-natal de alto risco, sem que isso signifique o abandono do vínculo e acompanhamento complementar pela Atenção Primária.'
  },
  {
    id: 'enamed_inedita2_027',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Trabalhador de uma fábrica sofre queimadura química no antebraço durante o expediente, sendo atendido na Unidade Básica de Saúde de referência da região.\n\nAlém do tratamento clínico da lesão, qual documento o médico deve emitir para formalizar o registro do acidente de trabalho perante a Previdência Social?',
    options: [
      'Declaração de óbito.',
      'Comunicação de Acidente de Trabalho (CAT).',
      'Atestado de saúde ocupacional (ASO), exclusivamente.',
      'Ficha de notificação compulsória de doença.'
    ],
    correctIndex: 1,
    explanation: 'A Comunicação de Acidente de Trabalho (CAT) é o documento que formaliza o registro de acidentes de trabalho e doenças ocupacionais perante a Previdência Social, podendo ser emitida por qualquer médico que atenda o trabalhador, não sendo exclusividade do médico do trabalho da empresa.'
  },
  {
    id: 'enamed_inedita2_028',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 40 anos, usuário de drogas injetáveis há vários anos, procura Unidade Básica de Saúde, mas se recusa a considerar a abstinência total como meta imediata de tratamento, referindo não estar pronto para parar de usar.\n\nQual abordagem, coerente com a política de saúde mental vigente no Brasil, deve orientar a conduta da equipe?',
    options: [
      'Recusar o atendimento até que o paciente esteja disposto a buscar abstinência completa.',
      'Adotar estratégia de redução de danos, oferecendo cuidado e informações que minimizem riscos, mesmo sem abstinência imediata.',
      'Encaminhar compulsoriamente para internação, independentemente da vontade do paciente.',
      'Orientar apenas que o paciente retorne quando decidir parar de usar drogas, sem outras intervenções no momento.'
    ],
    correctIndex: 1,
    explanation: 'A política de saúde mental e álcool e outras drogas no Brasil adota a redução de danos como estratégia central, oferecendo cuidado, vínculo e informações para minimizar riscos à saúde do usuário, mesmo quando a abstinência não é uma meta imediata ou aceita pelo paciente.'
  },
  {
    id: 'enamed_inedita2_029',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Durante consulta de puericultura, a médica de família confere a Caderneta de Saúde da Criança e observa que uma criança de 15 meses ainda não recebeu a segunda dose da vacina tríplice viral (SCR), prevista no calendário nacional.\n\nQual é a conduta adequada?',
    options: [
      'Aplicar a dose em atraso na própria consulta, aproveitando a oportunidade, desde que não haja contraindicação.',
      'Aguardar uma consulta específica de vacinação, não aproveitando a consulta de puericultura para esse fim.',
      'Não é mais possível aplicar a vacina, pois a "janela" de aplicação já se encerrou definitivamente.',
      'Encaminhar a criança para avaliação imunológica antes de qualquer vacinação em atraso.'
    ],
    correctIndex: 0,
    explanation: 'Toda oportunidade de contato com o serviço de saúde deve ser aproveitada para verificar e atualizar a situação vacinal da criança (a chamada "oportunidade perdida de vacinação" deve ser evitada); doses em atraso, na ausência de contraindicação, devem ser aplicadas assim que identificadas.'
  },
  {
    id: 'enamed_inedita2_030',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Paciente de 62 anos, após acidente vascular encefálico isquêmico há 3 meses, com hemiparesia residual à direita, é acompanhado pela equipe de Saúde da Família em conjunto com fisioterapeuta do NASF, com objetivo de reduzir sequelas funcionais e promover reintegração às atividades cotidianas.\n\nEssa fase de cuidado, voltada à reabilitação e à limitação do dano já instalado, corresponde a qual nível de prevenção?',
    options: ['Prevenção primária.', 'Prevenção secundária.', 'Prevenção terciária.', 'Prevenção quaternária.'],
    correctIndex: 2,
    explanation: 'A prevenção terciária refere-se às ações voltadas à reabilitação e à limitação de incapacidades decorrentes de doença já instalada, como a reabilitação motora após um acidente vascular encefálico, buscando restaurar a funcionalidade e a qualidade de vida do paciente.'
  },
  {
    id: 'enamed_inedita2_031',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 27 anos evita sistematicamente qualquer situação que envolva contato com cães, desde um episódio de mordida na infância, apresentando taquicardia, sudorese e desejo intenso de fugir mesmo ao ver um cão de longe, mesmo sabendo que o medo é desproporcional ao risco real. Esse padrão persiste há mais de 15 anos e limita significativamente sua rotina (evita parques, visitas a amigos com animais).\n\nQual é o diagnóstico mais provável?',
    options: ['Transtorno de pânico.', 'Fobia específica (tipo animal).', 'Transtorno de ansiedade social.', 'Transtorno obsessivo-compulsivo.'],
    correctIndex: 1,
    explanation: 'Medo acentuado e persistente, desencadeado por um objeto ou situação específica (nesse caso, cães), reconhecido como desproporcional, com evitação ativa e prejuízo funcional significativo por mais de 6 meses, caracteriza a fobia específica.'
  },
  {
    id: 'enamed_inedita2_032',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 34 anos, policial militar, sobrevivente de um assalto com tiroteio há 4 meses, apresenta pesadelos recorrentes relacionados ao evento, flashbacks intrusivos, evitação de situações que lembrem o ocorrido (recusa-se a retornar ao local), hipervigilância constante, irritabilidade e dificuldade de concentração, com prejuízo importante em seu trabalho.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Transtorno de estresse agudo, pois os sintomas ainda estão dentro do primeiro mês do evento.',
      'Transtorno de estresse pós-traumático, dada a persistência dos sintomas por mais de 1 mês após o evento traumático.',
      'Transtorno depressivo maior isolado, sem relação causal direta com o evento traumático vivenciado, e sem os sintomas intrusivos e de evitação descritos.',
      'Transtorno de ajustamento, por se tratar de uma reação esperada a um evento estressor.'
    ],
    correctIndex: 1,
    explanation: 'Sintomas intrusivos (flashbacks, pesadelos), evitação, alterações negativas de cognição/humor e hiperativação, persistindo por mais de 1 mês após exposição a evento traumático grave, caracterizam o transtorno de estresse pós-traumático.'
  },
  {
    id: 'enamed_inedita2_033',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 22 anos é trazido pela família por apresentar, há 3 semanas, discurso desorganizado, crença fixa de que está sendo perseguido por uma organização secreta (apesar de evidências contrárias), além de relatar ouvir vozes que comentam suas ações. Associado a isso, apresenta isolamento social crescente, embotamento afetivo e negligência com a higiene pessoal.\n\nConsiderando a presença de sintomas positivos e negativos, qual é a principal hipótese diagnóstica?',
    options: [
      'Transtorno delirante persistente, isoladamente.',
      'Primeiro episódio psicótico, compatível com esquizofrenia.',
      'Transtorno depressivo com sintomas psicóticos congruentes com o humor.',
      'Transtorno de personalidade esquizoide, sem sintomas psicóticos verdadeiros.'
    ],
    correctIndex: 1,
    explanation: 'A associação de sintomas positivos (delírios persecutórios, alucinações auditivas, desorganização do discurso) com sintomas negativos (embotamento afetivo, isolamento social, negligência com autocuidado) por mais de algumas semanas é sugestiva de um primeiro episódio psicótico compatível com esquizofrenia, exigindo avaliação psiquiátrica especializada.'
  },
  {
    id: 'enamed_inedita2_034',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Durante consulta de rotina, o médico de família aplica o questionário CAGE em um paciente de 50 anos que relata consumo regular de álcool. O paciente responde afirmativamente a três das quatro perguntas: já sentiu necessidade de diminuir a bebida, já se aborreceu com críticas sobre seu consumo, e já bebeu pela manhã para "acalmar os nervos" ou aliviar ressaca.\n\nEsse resultado no questionário CAGE sugere',
    options: [
      'consumo de álcool de baixo risco, sem necessidade de investigação adicional.',
      'alta probabilidade de uso nocivo/dependência de álcool, indicando investigação mais aprofundada.',
      'que o questionário CAGE não é validado para avaliação de uso de álcool, apenas de outras substâncias.',
      'diagnóstico definitivo de síndrome de abstinência alcoólica, exigindo internação imediata.'
    ],
    correctIndex: 1,
    explanation: 'O questionário CAGE é um instrumento de rastreio para problemas relacionados ao uso de álcool; duas ou mais respostas afirmativas (de um total de quatro perguntas) já sugerem alta probabilidade de uso nocivo ou dependência, indicando a necessidade de avaliação mais aprofundada.'
  },
  {
    id: 'enamed_inedita2_035',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Adolescente de 15 anos é levada pela mãe à consulta após esta encontrar cortes superficiais lineares no antebraço da filha, que a adolescente explica como uma forma de "aliviar a tensão emocional" quando se sente sobrecarregada, negando intenção de morrer com esse comportamento.\n\nEsse padrão de comportamento, cada vez mais reconhecido entre adolescentes, é denominado',
    options: [
      'tentativa de suicídio, devendo ser sempre classificado dessa forma.',
      'automutilação sem intenção suicida (autolesão não suicida).',
      'transtorno factício, com produção intencional de sintomas para obter atenção.',
      'comportamento normal da adolescência, sem necessidade de qualquer avaliação.'
    ],
    correctIndex: 1,
    explanation: 'A autolesão não suicida (automutilação sem intenção suicida) é o comportamento de causar dano ao próprio corpo, sem intenção de morte, geralmente como forma de regulação emocional; embora não seja uma tentativa de suicídio, é um importante marcador de sofrimento psíquico que exige avaliação e acompanhamento, pois está associado a maior risco de comportamento suicida futuro.'
  },
  {
    id: 'enamed_inedita2_036',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Recém-nascido, filho de mãe que apresentou exantema e febre baixa no primeiro trimestre da gestação, sem confirmação laboratorial na época, nasce com perímetro cefálico abaixo do percentil esperado para a idade gestacional. Ressonância magnética de crânio evidencia calcificações cerebrais e alterações do córtex cerebral.\n\nQual é a principal hipótese diagnóstica a ser investigada nesse recém-nascido?',
    options: [
      'Síndrome congênita associada à infecção pelo vírus Zika.',
      'Toxoplasmose congênita, isoladamente, sem necessidade de investigar outras causas.',
      'Síndrome de Down, sem relação com infecção materna gestacional.',
      'Hipotireoidismo congênito isolado, sem relação com achados de imagem cerebral.'
    ],
    correctIndex: 0,
    explanation: 'Microcefalia associada a calcificações cerebrais e alterações corticais, em recém-nascido cuja mãe teve exantema febril na gestação (período compatível com a infecção), é sugestiva de síndrome congênita pelo vírus Zika, devendo-se também investigar outras causas de infecção congênita (toxoplasmose, citomegalovírus, sífilis) no diagnóstico diferencial.'
  },
  {
    id: 'enamed_inedita2_037',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 30 anos, morador de área rural endêmica, procura atendimento com febre, mal-estar e edema unilateral doloroso da pálpebra (direita), associado a linfonodomegalia regional, há 5 dias. Relata ter sido picado por um inseto hematófago (percevejo) enquanto dormia, há cerca de 10 dias.\n\nQual é o diagnóstico mais provável, e qual é o sinal clínico clássico descrito?',
    options: [
      'Conjuntivite bacteriana, geralmente bilateral e purulenta; sinal de Koplik (típico do sarampo, sem relação com picada de inseto).',
      'Doença de Chagas aguda; sinal de Romaña (edema bipalpebral unilateral, porta de entrada do parasita).',
      'Celulite orbitária bacteriana, com dor e limitação da motilidade ocular; sinal de Battle (equimose retroauricular, indicativo de fratura de base de crânio, não relacionado ao quadro).',
      'Toxoplasmose ocular aguda, geralmente com coriorretinite; sinal de Kernig (rigidez de nuca associada à irritação meníngea, sem relação com o quadro palpebral descrito).'
    ],
    correctIndex: 1,
    explanation: 'O edema bipalpebral unilateral indolor a moderadamente doloroso, associado a linfonodomegalia regional, após picada de barbeiro (triatomíneo), é o sinal de Romaña, marca de porta de entrada característica da fase aguda da doença de Chagas.'
  },
  {
    id: 'enamed_inedita2_038',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 45 anos, previamente hígida, é internada com febre alta, tosse seca, mialgia intensa e dispneia progressiva, evoluindo em 48 horas para insuficiência respiratória com necessidade de suporte ventilatório. Radiografia de tórax mostra infiltrado intersticial bilateral difuso. Teste rápido molecular confirma influenza A.\n\nEsse quadro grave, que exige notificação compulsória imediata, é denominado',
    options: [
      'síndrome gripal não complicada.',
      'síndrome respiratória aguda grave (SRAG).',
      'pneumonia adquirida na comunidade de baixo risco.',
      'bronquite aguda viral simples.'
    ],
    correctIndex: 1,
    explanation: 'A síndrome respiratória aguda grave (SRAG) é definida por síndrome gripal associada a dispneia, saturação baixa ou necessidade de suporte ventilatório, sendo de notificação compulsória imediata; o tratamento com oseltamivir deve ser iniciado o mais precocemente possível diante da suspeita, sem aguardar confirmação laboratorial.'
  },
  {
    id: 'enamed_inedita2_039',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 38 anos, vivendo com HIV, sem uso regular de terapia antirretroviral, apresenta disfagia progressiva para sólidos e líquidos, associada a dor retroesternal à deglutição (odinofagia) e placas esbranquiçadas removíveis na cavidade oral. Contagem de CD4+ de 90 células/mm³.\n\nQual é o diagnóstico mais provável e sua importância no contexto da infecção pelo HIV?',
    options: [
      'Refluxo gastroesofágico grave; não relacionado à imunossupressão.',
      'Candidíase esofágica; doença definidora de AIDS quando associada à infecção pelo HIV.',
      'Carcinoma epidermoide de esôfago; sem relação com o estado imunológico do paciente.',
      'Esofagite eosinofílica; condição não associada à imunossupressão por HIV.'
    ],
    correctIndex: 1,
    explanation: 'Candidíase oral associada a odinofagia e disfagia em paciente com CD4+ baixo é altamente sugestiva de candidíase esofágica, que é considerada uma doença definidora de AIDS, reforçando a necessidade urgente de reintrodução da terapia antirretroviral e tratamento antifúngico sistêmico.'
  },
  {
    id: 'enamed_inedita2_040',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 45 anos planeja viagem para área de risco de febre amarela silvestre no Brasil e procura a Unidade Básica de Saúde para orientação vacinal. Nega imunossupressão, gestação ou alergia grave a ovo.\n\nConsiderando as recomendações vigentes, a conduta adequada é',
    options: [
      'contraindicar a vacina, pois é sempre contraindicada em adultos acima de 40 anos.',
      'indicar a vacina de febre amarela, idealmente pelo menos 10 dias antes da viagem, dose única para a maioria dos casos.',
      'indicar apenas o uso de repelente, considerando que a vacina não está mais disponível no Brasil.',
      'indicar a vacina apenas se a paciente já tiver tido a doença anteriormente, como reforço.'
    ],
    correctIndex: 1,
    explanation: 'A vacina de febre amarela é indicada para residentes ou viajantes a áreas de risco, devendo ser administrada idealmente pelo menos 10 dias antes da exposição, para permitir tempo adequado de resposta imunológica; no esquema atual, uma dose confere proteção duradoura para a maioria das pessoas.'
  },
  {
    id: 'enamed_inedita2_041',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 68 anos relata episódios de síncope aos esforços e dispneia progressiva nos últimos 6 meses, associados a dor torácica ocasional durante caminhadas. Ausculta cardíaca revela sopro sistólico ejetivo rude, mais audível em foco aórtico, com irradiação para carótidas, e pulso carotídeo de ascensão lenta (parvus et tardus).\n\nQual é a principal hipótese diagnóstica e o exame confirmatório?',
    options: [
      'Insuficiência mitral; ressonância magnética cardíaca.',
      'Estenose aórtica; ecocardiograma transtorácico com Doppler.',
      'Comunicação interatrial; cateterismo cardíaco direito isolado.',
      'Prolapso de valva mitral; teste ergométrico.'
    ],
    correctIndex: 1,
    explanation: 'A tríade de síncope, angina e dispneia aos esforços, associada a sopro sistólico ejetivo em foco aórtico com irradiação carotídea e pulso parvus et tardus, é característica da estenose aórtica grave; o ecocardiograma transtorácico com Doppler é o exame de escolha para confirmar e quantificar a gravidade da estenose.'
  },
  {
    id: 'enamed_inedita2_042',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 32 anos, após quadro viral respiratório há 1 semana, apresenta dor torácica retroesternal em pontada, que piora com a inspiração profunda e o decúbito dorsal, e melhora ao sentar-se inclinado para frente. Ausculta cardíaca revela atrito pericárdico. Eletrocardiograma mostra supradesnivelamento difuso do segmento ST, de concavidade voltada para cima, em várias derivações, sem imagem em espelho.\n\nQual é o diagnóstico mais provável?',
    options: ['Infarto agudo do miocárdio anterior extenso.', 'Pericardite aguda, provavelmente de etiologia viral.', 'Dissecção aguda de aorta.', 'Embolia pulmonar maciça.'],
    correctIndex: 1,
    explanation: 'Dor pleurítica que melhora ao inclinar-se para frente, atrito pericárdico à ausculta e supradesnivelamento difuso e côncavo do segmento ST (sem imagem em espelho), frequentemente após quadro viral, são características da pericardite aguda.'
  },
  {
    id: 'enamed_inedita2_043',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 65 anos, admitido por infarto agudo do miocárdio extenso de parede anterior, evolui em poucas horas com hipotensão refratária (PA 78 x 50 mmHg), extremidades frias e mal perfundidas, oligúria e rebaixamento do nível de consciência, apesar de reposição volêmica criteriosa. Ausculta pulmonar com estertores difusos.\n\nQual é o diagnóstico e a conduta terapêutica prioritária?',
    options: [
      'Choque hipovolêmico; expansão volêmica agressiva adicional.',
      'Choque cardiogênico; suporte inotrópico/vasopressor e avaliação para revascularização de urgência.',
      'Choque distributivo séptico; antibioticoterapia empírica isolada.',
      'Choque obstrutivo por tamponamento; pericardiocentese imediata, sem necessidade de outras medidas.'
    ],
    correctIndex: 1,
    explanation: 'Hipotensão refratária, má perfusão periférica, congestão pulmonar e oligúria após infarto extenso, sem resposta à reposição volêmica, caracterizam choque cardiogênico; a conduta prioritária é o suporte com inotrópicos/vasopressores e a revascularização coronariana de urgência, que é a medida mais eficaz para reverter o quadro.'
  },
  {
    id: 'enamed_inedita2_044',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 24 anos, previamente hígido, procura emergência com dor torácica e dispneia iniciadas 5 dias após um quadro de resfriado comum. Eletrocardiograma mostra alterações inespecíficas de repolarização. Troponina elevada. Angiografia coronariana não evidencia lesões obstrutivas significativas. Ressonância magnética cardíaca mostra realce tardio característico em padrão não isquêmico.\n\nQual é o diagnóstico mais provável?',
    options: ['Síndrome coronariana aguda por vasoespasmo isolado.', 'Miocardite aguda, provavelmente viral.', 'Cardiomiopatia hipertrófica obstrutiva.', 'Displasia arritmogênica de ventrículo direito.'],
    correctIndex: 1,
    explanation: 'Dor torácica e elevação de troponina após quadro infeccioso viral recente, na ausência de lesões coronarianas obstrutivas, com padrão de realce tardio não isquêmico na ressonância cardíaca, é característico de miocardite aguda, frequentemente de etiologia viral.'
  },
  {
    id: 'enamed_inedita2_045',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Adolescente de 15 anos é encaminhado por hipertensão arterial detectada em exame de rotina escolar (150 x 95 mmHg nos membros superiores). Ao exame, pulsos femorais diminuídos e retardados em relação aos pulsos radiais, e pressão arterial em membros inferiores menor que em membros superiores. Ausculta cardíaca com sopro sistólico interescapular.\n\nQual é a principal hipótese diagnóstica para a hipertensão secundária desse paciente?',
    options: ['Estenose de artéria renal.', 'Coarctação de aorta.', 'Feocromocitoma.', 'Síndrome de Cushing.'],
    correctIndex: 1,
    explanation: 'Hipertensão em membros superiores com pulsos femorais diminuídos e retardados, associada a diferença de pressão entre membros superiores e inferiores e sopro interescapular, é o quadro clássico de coarctação de aorta, importante causa de hipertensão secundária em crianças e adolescentes.'
  },
  {
    id: 'enamed_inedita2_046',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 78 anos procura emergência com dor abdominal difusa e discreta há 3 dias, associada a inapetência e leve desconforto em fossa ilíaca direita, sem febre importante. Diferente da apresentação clássica em jovens, o quadro é insidioso e inespecífico. Tomografia de abdome confirma apendicite aguda, já com sinais de perfuração contida.\n\nEsse caso ilustra uma característica importante da apendicite aguda em idosos, que é',
    options: [
      'apresentação sempre mais exuberante e típica do que em jovens, facilitando o diagnóstico precoce.',
      'apresentação frequentemente atípica e insidiosa, associada a maior risco de diagnóstico tardio e complicações como perfuração.',
      'ausência completa de indicação cirúrgica em pacientes acima de 75 anos, devendo-se optar sempre por tratamento clínico.',
      'exigência obrigatória de colonoscopia antes de qualquer conduta cirúrgica em idosos com essa suspeita.'
    ],
    correctIndex: 1,
    explanation: 'Em idosos, a apendicite aguda frequentemente apresenta sintomas mais brandos e inespecíficos, retardando a procura por atendimento e o diagnóstico, o que está associado a maior taxa de complicações, como perfuração, no momento do diagnóstico.'
  },
  {
    id: 'enamed_inedita2_047',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 82 anos, com constipação crônica, procura emergência com distensão abdominal importante, dor em cólica e parada de eliminação de gases e fezes há 2 dias. Radiografia de abdome mostra alça intestinal maciçamente distendida, em formato de "grão de café", localizada no quadrante superior esquerdo.\n\nQual é o diagnóstico mais provável e a conduta inicial?',
    options: [
      'Volvo de sigmoide; descompressão endoscópica (retossigmoidoscopia) como primeira conduta, na ausência de sinais de sofrimento intestinal.',
      'Volvo de ceco, tipicamente acometendo pacientes mais jovens; conduta expectante com sonda nasogástrica isoladamente, sem indicação cirúrgica precoce nesse caso.',
      'Câncer de cólon obstrutivo; quimioterapia neoadjuvante antes de qualquer tentativa de descompressão cirúrgica ou endoscópica de urgência.',
      'Íleo biliar, secundário a fístula colecistoentérica; colecistectomia de urgência como conduta inicial, antes da resolução da obstrução intestinal.'
    ],
    correctIndex: 0,
    explanation: 'A imagem em "grão de café" na radiografia de abdome, em paciente idoso constipado crônico, é característica do volvo de sigmoide; na ausência de sinais de sofrimento vascular ou perfuração, a descompressão endoscópica (retossigmoidoscopia) é a conduta inicial de escolha, reservando-se cirurgia para casos com complicação ou falha do procedimento endoscópico.'
  },
  {
    id: 'enamed_inedita2_048',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Paciente em décimo dia de pós-operatório de ressecção intestinal por obstrução, evolui com drenagem de conteúdo entérico pela ferida operatória, associada a febre baixa e leve dor local, sem sinais de sepse grave.\n\nQual é a complicação mais provável, e qual o princípio geral do manejo inicial?',
    options: [
      'Deiscência de sutura com fístula enterocutânea; controle da drenagem, correção de distúrbios hidroeletrolíticos e nutrição adequada, reservando-se reoperação para casos refratários.',
      'Abscesso intra-abdominal isolado, sem comunicação com a luz intestinal; apenas antibioticoterapia oral ambulatorial, sem necessidade de drenagem ou de correção cirúrgica adicional.',
      'Infecção de sítio cirúrgico superficial simples, restrita à pele e ao subcutâneo; apenas curativo local, sem necessidade de investigação de fístula digestiva.',
      'Recidiva do processo obstrutivo original; reoperação imediata como única conduta possível, sem tentativa de tratamento clínico conservador inicial.'
    ],
    correctIndex: 0,
    explanation: 'Drenagem de conteúdo entérico pela ferida operatória no pós-operatório de cirurgia intestinal caracteriza fístula enterocutânea, geralmente por deiscência de sutura; o manejo inicial foca no controle da drenagem, correção hidroeletrolítica, suporte nutricional adequado e controle de infecção, com muitos casos fechando espontaneamente sem necessidade de reoperação precoce.'
  },
  {
    id: 'enamed_inedita2_049',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 65 anos apresenta icterícia progressiva indolor, colúria e acolia fecal há 3 semanas, sem dor abdominal significativa. Exames de imagem evidenciam dilatação das vias biliares intra-hepáticas, com vesícula biliar de tamanho normal e não dilatada, e uma lesão estenosante na confluência dos ductos hepáticos direito e esquerdo.\n\nQual é a principal hipótese diagnóstica?',
    options: [
      'Coledocolitíase, com cálculo impactado na papila duodenal.',
      'Colangiocarcinoma hilar (tumor de Klatskin).',
      'Câncer de cabeça de pâncreas, com obstrução do colédoco distal.',
      'Colecistite aguda calculosa complicada.'
    ],
    correctIndex: 1,
    explanation: 'Icterícia obstrutiva progressiva e indolor, com dilatação isolada das vias biliares intra-hepáticas (vesícula não dilatada, pela obstrução ser proximal à sua drenagem) e lesão estenosante na confluência dos ductos hepáticos, é característica do colangiocarcinoma hilar (tumor de Klatskin).'
  },
  {
    id: 'enamed_inedita2_050',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 50 anos, com história de dor epigástrica recorrente há anos, apresenta piora súbita e intensa da dor abdominal, que se torna generalizada e em "tábua" (rigidez abdominal difusa), associada a taquicardia e sudorese. Radiografia de tórax em ortostatismo evidencia pneumoperitônio (ar livre sob o diafragma).\n\nQual é o diagnóstico mais provável e a conduta?',
    options: [
      'Pancreatite aguda grave; tratamento clínico conservador, sem indicação cirúrgica nesse momento.',
      'Perfuração de úlcera péptica; cirurgia de urgência.',
      'Apendicite aguda não complicada; apendicectomia eletiva em 48 horas.',
      'Colecistite aguda simples; antibioticoterapia isolada, sem necessidade de cirurgia imediata.'
    ],
    correctIndex: 1,
    explanation: 'Dor abdominal súbita e intensa com abdome em "tábua" (rigidez difusa) em paciente com história prévia de dispepsia/úlcera péptica, associada a pneumoperitônio na radiografia, é o quadro clássico de perfuração de úlcera péptica, uma emergência cirúrgica.'
  },
  {
    id: 'enamed_inedita2_051',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 55 anos, com doença do refluxo gastroesofágico sintomática há mais de 10 anos, realiza endoscopia digestiva alta que revela epitélio colunar substituindo o epitélio escamoso normal na porção distal do esôfago, confirmado por biópsia como metaplasia intestinal, sem displasia.\n\nQual é o diagnóstico e a conduta de acompanhamento recomendada?',
    options: [
      'Esofagite péptica simples; tratamento com inibidor de bomba de prótons, sem necessidade de vigilância endoscópica.',
      'Esôfago de Barrett; vigilância endoscópica periódica, pelo risco aumentado de adenocarcinoma de esôfago.',
      'Acalasia; manometria esofágica como próximo exame, sem necessidade de vigilância endoscópica.',
      'Carcinoma epidermoide de esôfago já estabelecido; tratamento oncológico imediato, sem necessidade de vigilância adicional.'
    ],
    correctIndex: 1,
    explanation: 'A substituição do epitélio escamoso esofágico distal por epitélio colunar com metaplasia intestinal, em paciente com DRGE crônica, define o esôfago de Barrett, condição pré-maligna que exige vigilância endoscópica periódica, com intervalo dependente da presença e grau de displasia, pelo risco aumentado de adenocarcinoma de esôfago.'
  },
  {
    id: 'enamed_inedita2_052',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 60 anos, cirrótico por hepatite C, é levado à emergência pela família por confusão mental progressiva nas últimas 24 horas, após episódio de constipação intestinal de 4 dias. Ao exame, desorientado, com tremor grosseiro e irregular das mãos ao estender os braços (asterixis). Amônia sérica elevada.\n\nQual é o diagnóstico e o fator precipitante mais provável, além da conduta terapêutica inicial?',
    options: [
      'Delirium tremens, relacionado à abstinência alcoólica; benzodiazepínicos como tratamento específico, sem relação com a constipação intestinal relatada.',
      'Encefalopatia hepática, precipitada por constipação intestinal; lactulose oral/retal para reduzir a absorção de amônia.',
      'Acidente vascular encefálico isquêmico, geralmente com déficit focal predominante; trombólise, se dentro da janela terapêutica, sem relação com o fator precipitante intestinal.',
      'Intoxicação medicamentosa aguda; carvão ativado, independentemente do agente causador e do tempo transcorrido desde a ingestão.'
    ],
    correctIndex: 1,
    explanation: 'Confusão mental e asterixis em paciente cirrótico, precipitados por constipação (que aumenta a produção e absorção intestinal de amônia), caracterizam encefalopatia hepática; o tratamento inicial é a lactulose, que reduz a absorção de amônia ao acidificar o conteúdo intestinal e aumentar o trânsito.'
  },
  {
    id: 'enamed_inedita2_053',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 19 anos apresenta alterações de comportamento, dificuldade de coordenação motora e tremores nos últimos meses, associados a elevação de transaminases identificada em exame de rotina. Ao exame oftalmológico com lâmpada de fenda, observa-se um anel de coloração acastanhada na periferia da córnea.\n\nQual é o diagnóstico mais provável?',
    options: ['Hepatite autoimune isolada.', 'Doença de Wilson.', 'Hemocromatose hereditária.', 'Deficiência de alfa-1 antitripsina.'],
    correctIndex: 1,
    explanation: 'A associação de sintomas neuropsiquiátricos (tremor, alterações de comportamento, incoordenação), hepatopatia e o anel de Kayser-Fleischer (depósito de cobre na córnea) em paciente jovem é característica da doença de Wilson, distúrbio hereditário do metabolismo do cobre.'
  },
  {
    id: 'enamed_inedita2_054',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 65 anos, assintomático, tem diagnóstico incidental de múltiplos divertículos no cólon sigmoide em colonoscopia de rastreamento, sem sinais de inflamação.\n\nConsiderando essa condição, é correto afirmar que',
    options: [
      'a presença de divertículos (diverticulose) já configura, por si só, diagnóstico de diverticulite, exigindo antibioticoterapia.',
      'a diverticulose é frequentemente assintomática e não requer tratamento específico na ausência de complicações, apenas orientação sobre sinais de alarme.',
      'todo paciente com diverticulose deve ser submetido a colectomia eletiva profilática, independentemente da presença de sintomas ou de complicações prévias.',
      'a diverticulose é sempre um achado pré-maligno que exige vigilância oncológica intensiva e colonoscopias seriadas frequentes.'
    ],
    correctIndex: 1,
    explanation: 'A diverticulose (presença de divertículos, sem inflamação) é frequentemente assintomática e um achado comum, especialmente em idosos; diferencia-se da diverticulite (inflamação/infecção dos divertículos), que cursa com dor, febre e leucocitose. A diverticulose isolada não requer tratamento específico além de orientações gerais.'
  },
  {
    id: 'enamed_inedita2_055',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 32 anos relata dor abdominal recorrente associada a alteração do hábito intestinal (alternância entre diarreia e constipação), com melhora da dor após evacuação, há mais de 8 meses. Exames laboratoriais, incluindo marcadores inflamatórios, e colonoscopia com biópsias são normais.\n\nCom base nos critérios de Roma para transtornos funcionais gastrointestinais, qual é o diagnóstico mais provável?',
    options: [
      'Doença de Crohn com acometimento exclusivamente do intestino delgado.',
      'Síndrome do intestino irritável.',
      'Retocolite ulcerativa em fase de remissão histológica.',
      'Câncer colorretal em estágio inicial, ainda sem alterações endoscópicas visíveis.'
    ],
    correctIndex: 1,
    explanation: 'Dor abdominal recorrente associada à alteração do hábito intestinal, com melhora após evacuação, na ausência de achados orgânicos em exames complementares (exclusão de doença inflamatória intestinal, neoplasia e outras causas orgânicas), preenche os critérios de Roma para síndrome do intestino irritável, um distúrbio funcional gastrointestinal.'
  },
  {
    id: 'enamed_inedita2_056',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 78 anos é levada pela família por perda progressiva de memória para fatos recentes ao longo dos últimos 2 anos, com desorientação espacial crescente, dificuldade para reconhecer familiares em fases mais avançadas, e declínio funcional gradual, sem flutuação importante nem alucinações visuais precoces. Exame neurológico sem sinais focais motores.\n\nQual é a principal hipótese diagnóstica?',
    options: [
      'Demência vascular, de início súbito e curso em degraus.',
      'Doença de Alzheimer, forma mais comum de demência neurodegenerativa.',
      'Demência por corpos de Lewy, pela presença precoce de alucinações visuais.',
      'Demência frontotemporal, caracterizada por alterações comportamentais precoces predominantes.'
    ],
    correctIndex: 1,
    explanation: 'Perda de memória episódica progressiva e insidiosa, com desorientação espacial e declínio funcional gradual ao longo de anos, sem flutuação marcante ou sinais focais precoces, é o padrão clássico da doença de Alzheimer, a causa mais comum de demência em idosos.'
  },
  {
    id: 'enamed_inedita2_057',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 70 anos é trazido à emergência com início súbito de dificuldade para falar (fala não fluente, com esforço) e fraqueza no dedimídio direito (face e braço mais acometidos que a perna), há 1 hora. Tomografia de crânio sem contraste não mostra sangramento.\n\nQual território arterial está provavelmente acometido, e qual estrutura cortical relacionada à fala está mais provavelmente comprometida?',
    options: [
      'Artéria cerebral posterior; córtex occipital, com afasia sensorial associada.',
      'Artéria cerebral média; área de Broca, com afasia motora (não fluente) associada.',
      'Artéria cerebelar posteroinferior; síndrome de Wallenberg, sem afasia associada.',
      'Artéria basilar; síndrome do encarceramento (locked-in), sem afasia associada.'
    ],
    correctIndex: 1,
    explanation: 'Hemiparesia com predomínio braquiofacial associada a afasia não fluente (motora, tipo Broca) sugere acometimento do território da artéria cerebral média, especificamente da área de Broca no giro frontal inferior do hemisfério dominante.'
  },
  {
    id: 'enamed_inedita2_058',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 60 anos, com diabetes mellitus tipo 2 há 15 anos, mal controlado, relata dormência e sensação de queimação em ambos os pés, de distribuição simétrica em "bota", com piora noturna, associada a perda progressiva da sensibilidade protetora, identificada pelo teste do monofilamento.\n\nQual é o diagnóstico mais provável e a importância clínica desse achado?',
    options: [
      'Síndrome do túnel do tarso, condição localizada de compressão nervosa, exigindo cirurgia descompressiva imediata independentemente do controle glicêmico.',
      'Polineuropatia diabética distal simétrica, que aumenta significativamente o risco de úlceras e amputações no pé diabético.',
      'Esclerose múltipla, com acometimento medular predominante e lesões desmielinizantes assimétricas, sem relação direta com o diabetes descrito.',
      'Deficiência isolada de vitamina B12, geralmente com anemia macrocítica associada, sem relação causal direta com o diabetes mellitus.'
    ],
    correctIndex: 1,
    explanation: 'Perda sensitiva simétrica em distribuição "em bota", associada a diabetes mal controlado de longa data, é característica da polineuropatia diabética distal simétrica, a complicação neurológica mais comum do diabetes, que aumenta significativamente o risco de úlceras plantares e amputações pela perda da sensibilidade protetora.'
  },
  {
    id: 'enamed_inedita2_059',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 35 anos acorda com desvio da comissura labial para a esquerda, incapacidade de fechar completamente o olho direito e apagamento do sulco nasolabial direito, além de incapacidade de enrugar a testa do lado direito. Nega outros déficits neurológicos, força muscular em membros preservada.\n\nQual é o diagnóstico mais provável, e o que diferencia esse quadro de uma paralisia facial central (como em um AVC)?',
    options: [
      'Paralisia facial central, geralmente por lesão encefálica; a fraqueza envolveria também a musculatura da testa, poupando apenas os membros e o tronco.',
      'Paralisia de Bell (paralisia facial periférica idiopática); acomete toda a hemiface, incluindo a testa, diferentemente da paralisia facial central que poupa a região frontal.',
      'Síndrome de Guillain-Barré; a paralisia facial isolada, sem outros déficits, é a apresentação típica e mais comum dessa doença.',
      'Miastenia gravis; a ptose bilateral seria o achado mais esperado, não a paralisia facial unilateral completa.'
    ],
    correctIndex: 1,
    explanation: 'A paralisia de Bell é uma paralisia facial periférica idiopática que acomete toda a hemiface (incluindo a testa, pela lesão do nervo facial periférico), diferentemente da paralisia facial de causa central (como AVC), em que a musculatura frontal é poupada devido à inervação bilateral dessa região pelo córtex.'
  },
  {
    id: 'enamed_inedita2_060',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 50 anos relata cefaleia progressiva há 2 meses, pior pela manhã, associada a náuseas e vômitos em jato ocasionais, além de fraqueza progressiva em membro superior esquerdo nas últimas semanas. Exame de fundo de olho revela papiledema bilateral.\n\nQual é a principal hipótese diagnóstica e a conduta de investigação prioritária?',
    options: [
      'Enxaqueca crônica; tratamento sintomático, sem necessidade de exames de imagem nesse momento.',
      'Lesão expansiva intracraniana (possível tumor cerebral); ressonância magnética de crânio com contraste como exame prioritário.',
      'Cefaleia tensional crônica, geralmente sem sinais de alarme; apenas ajuste do estilo de vida e reavaliação clínica em 3 meses.',
      'Enxaqueca com aura prolongada, sem papiledema associado; anticonvulsivante profilático como primeira conduta terapêutica.'
    ],
    correctIndex: 1,
    explanation: 'Cefaleia progressiva com padrão de hipertensão intracraniana (pior pela manhã, vômitos em jato), associada a déficit neurológico focal progressivo (fraqueza em membro) e papiledema ao exame de fundo de olho, é fortemente sugestiva de lesão expansiva intracraniana; a ressonância magnética de crânio com contraste é o exame prioritário para investigação.'
  },
  {
    id: 'enamed_inedita2_061',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 40 anos relata episódios paroxísticos de cefaleia intensa, palpitações e sudorese profusa, com duração de 15-20 minutos, associados a picos de pressão arterial (até 220 x 130 mmHg durante as crises), com pressão normal entre os episódios. Exames laboratoriais mostram metanefrinas plasmáticas fracionadas muito elevadas.\n\nQual é o diagnóstico mais provável e o cuidado essencial antes de qualquer procedimento cirúrgico?',
    options: [
      'Crise de pânico, geralmente sem elevação sustentada da pressão arterial entre as crises; benzodiazepínico como tratamento definitivo, sem necessidade de outras medidas.',
      'Feocromocitoma; bloqueio alfa-adrenérgico adequado antes do bloqueio beta e antes da cirurgia, para evitar crise hipertensiva.',
      'Hipertireoidismo, geralmente com taquicardia persistente e perda de peso; iniciar metimazol imediatamente, sem necessidade de investigação hormonal adicional.',
      'Enxaqueca com componente autonômico associado; triptano como tratamento abortivo das crises, sem relação com os níveis de metanefrinas.'
    ],
    correctIndex: 1,
    explanation: 'Crises paroxísticas de cefaleia, palpitações, sudorese e hipertensão intensa, com metanefrinas elevadas, são características de feocromocitoma; antes de qualquer intervenção cirúrgica, é essencial o bloqueio alfa-adrenérgico adequado (antes de iniciar betabloqueador), para prevenir crise hipertensiva por estimulação alfa sem oposição.'
  },
  {
    id: 'enamed_inedita2_062',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 35 anos relata fadiga progressiva, perda de peso, náuseas e hipotensão postural nos últimos meses. Ao exame, hiperpigmentação cutânea difusa, mais evidente em áreas de dobras cutâneas e mucosa oral. Exames: sódio sérico baixo, potássio sérico elevado, cortisol matinal baixo, com ACTH muito elevado.\n\nQual é o diagnóstico e o tratamento de reposição indicado?',
    options: [
      'Síndrome de Cushing; cetoconazol para reduzir a produção de cortisol.',
      'Insuficiência adrenal primária (doença de Addison); reposição de glicocorticoide e mineralocorticoide.',
      'Hipotireoidismo primário grave; reposição isolada de levotiroxina.',
      'Insuficiência adrenal secundária (por doença hipofisária); reposição isolada de mineralocorticoide.'
    ],
    correctIndex: 1,
    explanation: 'Hiperpigmentação cutânea (pelo excesso de ACTH), hipotensão, hiponatremia e hipercalemia, associadas a cortisol baixo e ACTH elevado, caracterizam a insuficiência adrenal primária (doença de Addison); o tratamento é a reposição de glicocorticoide e mineralocorticoide.'
  },
  {
    id: 'enamed_inedita2_063',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 28 anos, após traumatismo cranioencefálico grave, desenvolve poliúria intensa (débito urinário maior que 6 litros/dia) e polidipsia compensatória. Exames: sódio sérico levemente elevado, osmolalidade urinária muito baixa apesar da osmolalidade plasmática elevada. Durante teste de restrição hídrica, a osmolalidade urinária não se eleva adequadamente, mas responde à administração de desmopressina.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Diabetes mellitus descompensado, com poliúria osmótica por hiperglicemia.',
      'Diabetes insípido central, por lesão hipotálamo-hipofisária pós-traumática.',
      'Polidipsia psicogênica primária, sem relação com o trauma cranioencefálico.',
      'Síndrome de secreção inadequada de hormônio antidiurético (SIADH).'
    ],
    correctIndex: 1,
    explanation: 'Poliúria com urina hipotônica (baixa osmolalidade), apesar de hiperosmolalidade plasmática, que responde à desmopressina (análogo do ADH), após trauma cranioencefálico, é característica de diabetes insípido central, por deficiência de produção/liberação hipofisária de ADH.'
  },
  {
    id: 'enamed_inedita2_064',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 45 anos é levado por familiares que notaram, ao longo dos últimos anos, crescimento progressivo das mãos e pés (precisou trocar de número de calçado duas vezes), aumento do espaçamento entre os dentes, prognatismo mandibular e engrossamento dos traços faciais. Relata também sudorese excessiva e cefaleia. Dosagem de IGF-1 muito elevada.\n\nQual é o diagnóstico mais provável e a causa mais comum dessa condição?',
    options: [
      'Gigantismo, forma de excesso de hormônio do crescimento que ocorre antes do fechamento das epífises ósseas, sendo diagnóstico esperado apenas em crianças e adolescentes, não em adultos.',
      'Acromegalia, na maioria dos casos causada por adenoma hipofisário produtor de hormônio do crescimento.',
      'Síndrome de Marfan, condição genética do tecido conjuntivo com envergadura aumentada, mas sem relação com a elevação de IGF-1 encontrada.',
      'Hipertireoidismo grave, capaz de causar sudorese e cefaleia, mas sem relação com o crescimento ósseo acral e a elevação de IGF-1 descritos.'
    ],
    correctIndex: 1,
    explanation: 'Crescimento progressivo de extremidades, prognatismo e alterações dos traços faciais em adulto, associados a IGF-1 elevado, caracterizam a acromegalia, cuja causa mais comum é um adenoma hipofisário secretor de hormônio do crescimento.'
  },
  {
    id: 'enamed_inedita2_065',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 50 anos, sem diabetes conhecido, apresenta episódios recorrentes de confusão mental, sudorese e tremores, que ocorrem predominantemente em jejum prolongado e melhoram rapidamente após a ingestão de alimentos. Durante um dos episódios, glicemia capilar de 42 mg/dL foi documentada em pronto-socorro, com resolução completa dos sintomas após a administração de glicose.\n\nEssa tríade de sintomas de hipoglicemia, glicemia baixa documentada e melhora após correção da glicemia é denominada',
    options: ['tríade de Charcot.', 'tríade de Whipple.', 'tríade de Virchow.', 'tríade de Cushing.'],
    correctIndex: 1,
    explanation: 'A tríade de Whipple é composta por sintomas compatíveis com hipoglicemia, documentação laboratorial de glicemia baixa durante os sintomas, e resolução dos sintomas após a correção da glicemia; sua presença confirma hipoglicemia verdadeira, exigindo investigação da causa (como insulinoma, nesse contexto).'
  },
  {
    id: 'enamed_inedita2_066',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 38 anos, com diagnóstico prévio de psoríase cutânea, apresenta dor e edema difuso e uniforme em um dedo da mão ("dedo em salsicha"), associados a dor lombar inflamatória e entesite (dor na inserção do tendão de Aquiles).\n\nQual é o diagnóstico mais provável e o achado característico descrito no dedo?',
    options: [
      'Artrite reumatoide; nódulos reumatoides subcutâneos.',
      'Artrite psoriática; dactilite ("dedo em salsicha").',
      'Gota tofácea crônica; tofo articular.',
      'Osteoartrite erosiva; nódulos de Heberden.'
    ],
    correctIndex: 1,
    explanation: 'Em paciente com psoríase, a presença de dactilite (edema difuso de todo o dedo, o "dedo em salsicha"), entesite e acometimento axial é característica da artrite psoriática, uma espondiloartropatia soronegativa associada à psoríase cutânea.'
  },
  {
    id: 'enamed_inedita2_067',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 70 anos relata dor e rigidez matinal intensa e simétrica em cintura escapular e pélvica (ombros e quadris), com duração superior a 45 minutos, associada a fadiga e febre baixa, há 6 semanas, dificultando atividades como pentear o cabelo e levantar-se de cadeiras. Velocidade de hemossedimentação muito elevada. Força muscular preservada ao exame, apesar da dor limitante.\n\nQual é o diagnóstico mais provável e o tratamento de escolha?',
    options: [
      'Polimiosite; corticoide em altas doses e investigação de neoplasia oculta associada.',
      'Polimialgia reumática; corticoide em dose baixa a moderada, com resposta terapêutica geralmente rápida e expressiva.',
      'Fibromialgia, geralmente sem elevação significativa da velocidade de hemossedimentação; antidepressivos e atividade física, sem indicação de corticoide.',
      'Artrite reumatoide de início tardio, geralmente com sinovite periférica evidente; metotrexato como primeira escolha terapêutica nesse contexto.'
    ],
    correctIndex: 1,
    explanation: 'Dor e rigidez matinal prolongada em cinturas escapular e pélvica, em idosos, com VHS muito elevada e força muscular preservada (diferentemente das miopatias inflamatórias), é característica da polimialgia reumática; o tratamento com corticoide em dose baixa a moderada geralmente traz resposta rápida e expressiva, quase confirmatória do diagnóstico.'
  },
  {
    id: 'enamed_inedita2_068',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 45 anos relata episódios de mudança de coloração dos dedos das mãos (branco, depois azulado, depois vermelho) ao exposição ao frio, além de espessamento e endurecimento progressivo da pele dos dedos e antebraços, dificultando a flexão completa dos dedos. Relata também dificuldade progressiva para engolir alimentos sólidos.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Lúpus eritematoso sistêmico, com fenômeno de Raynaud isolado, mas sem o espessamento cutâneo progressivo nem a disfagia descritos.',
      'Esclerose sistêmica (esclerodermia), com fenômeno de Raynaud, esclerodactilia e provável acometimento esofágico associado.',
      'Dermatomiosite, com as pápulas de Gottron e fraqueza muscular proximal como achados principais, sem o espessamento cutâneo característico da esclerodermia.',
      'Síndrome antifosfolípide primária, isoladamente, sem relação com o fenômeno de Raynaud, a esclerodactilia ou a disfagia relatados.'
    ],
    correctIndex: 1,
    explanation: 'Fenômeno de Raynaud associado a esclerodactilia (espessamento e endurecimento progressivo da pele dos dedos, limitando a mobilidade) e disfagia (por acometimento da motilidade esofágica) são achados característicos da esclerose sistêmica.'
  },
  {
    id: 'enamed_inedita2_069',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 24 anos relata fadiga, febre baixa intermitente e dor em membros superiores ao realizar esforços, há vários meses. Ao exame, pulso radial esquerdo significativamente mais fraco que o direito, sopro audível em região supraclavicular esquerda, e diferença de pressão arterial maior que 20 mmHg entre os dois braços.\n\nQual é a principal hipótese diagnóstica?',
    options: [
      'Aterosclerose de grandes vasos, comum nessa faixa etária.',
      'Arterite de Takayasu, vasculite de grandes vasos que acomete predominantemente mulheres jovens.',
      'Síndrome do desfiladeiro torácico isolada, sem componente inflamatório sistêmico.',
      'Displasia fibromuscular isolada da artéria renal, sem acometimento de membros superiores.'
    ],
    correctIndex: 1,
    explanation: 'Assimetria de pulsos e pressão arterial entre os membros superiores, sopros vasculares e sintomas sistêmicos (febre, fadiga) em mulher jovem são característicos da arterite de Takayasu, uma vasculite que acomete predominantemente a aorta e seus ramos principais, mais comum em mulheres jovens.'
  },
  {
    id: 'enamed_inedita2_070',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 52 anos relata sensação persistente de boca seca (precisa beber água para engolir alimentos secos), olhos secos e com sensação de "areia", há mais de 1 ano, associada a aumento intermitente das glândulas parótidas. Exames: anticorpos anti-Ro (SSA) e anti-La (SSB) positivos; teste de Schirmer com redução da produção lacrimal.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Síndrome de Sjögren primária.',
      'Sarcoidose com acometimento glandular isolado.',
      'Amiloidose sistêmica com infiltração glandular.',
      'Síndrome de Sicca induzida por medicamentos, sem componente autoimune.'
    ],
    correctIndex: 0,
    explanation: 'Xerostomia e xeroftalmia persistentes, associadas a aumento de glândulas salivares, teste de Schirmer alterado e anticorpos anti-Ro/anti-La positivos, são características da síndrome de Sjögren primária, doença autoimune que afeta predominantemente as glândulas exócrinas.'
  },
  {
    id: 'enamed_inedita2_071',
    cycle: 'Ciclo Clínico',
    subject: 'Geriatria',
    banca: 'ENAMED (inédita)',
    text: 'Idoso acamado de 85 anos, com mobilidade muito reduzida, é avaliado pela equipe de Saúde da Família e apresenta, em região sacral, lesão com perda de espessura total da pele, com exposição de tecido subcutâneo, sem exposição de músculo, osso ou tendão, e presença de tecido de granulação nas bordas.\n\nConsiderando o sistema de estadiamento de úlceras por pressão, essa lesão corresponde ao estágio',
    options: ['Estágio I (eritema não branqueável, pele íntegra).', 'Estágio II (perda parcial da espessura da pele).', 'Estágio III (perda total da espessura da pele, com exposição de tecido subcutâneo).', 'Estágio IV (perda total da espessura tecidual, com exposição de músculo, osso ou tendão).'],
    correctIndex: 2,
    explanation: 'A úlcera por pressão em estágio III caracteriza-se pela perda de espessura total da pele, com exposição de tecido subcutâneo (gordura), mas sem exposição de estruturas mais profundas como músculo, tendão ou osso, que definiriam o estágio IV.'
  },
  {
    id: 'enamed_inedita2_072',
    cycle: 'Ciclo Clínico',
    subject: 'Geriatria',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 80 anos, com insônia crônica, foi medicada por um médico não geriatra com benzodiazepínico de longa duração de ação, de uso diário, há vários meses. A equipe de Saúde da Família, ao revisar a farmacoterapia da paciente, identifica esse uso como potencialmente inapropriado para a faixa etária.\n\nSegundo os Critérios de Beers para prescrição em idosos, qual é o principal risco associado ao uso crônico de benzodiazepínicos de longa duração em pessoas idosas?',
    options: [
      'Aumento do risco de quedas, fraturas, sedação excessiva e comprometimento cognitivo.',
      'Nenhum risco adicional relevante em relação à população adulta jovem.',
      'Risco exclusivo de dependência química, sem outros efeitos adversos relevantes.',
      'Aumento do risco cardiovascular isolado, sem relação com quedas ou cognição.'
    ],
    correctIndex: 0,
    explanation: 'Os Critérios de Beers classificam os benzodiazepínicos, especialmente os de longa duração de ação, como potencialmente inapropriados para idosos, pelo aumento do risco de quedas, fraturas, sedação excessiva, comprometimento cognitivo e maior sensibilidade farmacológica nessa faixa etária.'
  },
  {
    id: 'enamed_inedita2_073',
    cycle: 'Ciclo Clínico',
    subject: 'Geriatria',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 78 anos, com múltiplas comorbidades e polifarmácia, relata constipação intestinal progressiva nos últimos meses, com fezes endurecidas e esforço evacuatório importante. Está em uso de opioide para dor crônica, além de anti-hipertensivo e anticolinérgico para bexiga hiperativa.\n\nConsiderando o quadro apresentado, qual é a causa mais provável da constipação nesse paciente?',
    options: [
      'Câncer colorretal obstrutivo, causa que deveria ser considerada em todo idoso constipado, independentemente do uso concomitante de opioides e anticolinérgicos.',
      'Efeito adverso medicamentoso, especialmente relacionado ao uso de opioide e anticolinérgico, causas comuns e reversíveis de constipação no idoso.',
      'Hipotireoidismo subclínico, causa isolada e mais provável nessa faixa etária, independentemente da polifarmácia e dos medicamentos em uso.',
      'Doença de Hirschsprung do adulto, condição congênita rara diagnosticada tardiamente, sem relação com o uso crônico de opioides e anticolinérgicos.'
    ],
    correctIndex: 1,
    explanation: 'Em idosos polimedicados, medicamentos com efeito constipante (opioides, anticolinérgicos, bloqueadores de canal de cálcio, entre outros) são causas comuns e frequentemente reversíveis de constipação, devendo ser investigados e, quando possível, ajustados antes de outras investigações mais invasivas.'
  },
  {
    id: 'enamed_inedita2_074',
    cycle: 'Ciclo Clínico',
    subject: 'Geriatria',
    banca: 'ENAMED (inédita)',
    text: 'Durante consulta geriátrica, o médico aplica um instrumento padronizado de rastreio cognitivo, avaliando orientação temporoespacial, memória imediata e de evocação, atenção e cálculo, linguagem e habilidade construtiva, com pontuação total de 30 pontos.\n\nEsse instrumento amplamente utilizado para rastreio de declínio cognitivo é denominado',
    options: [
      'Escala de Depressão Geriátrica.',
      'Mini Exame do Estado Mental (MEEM).',
      'Índice de Katz.',
      'Escala de Braden.'
    ],
    correctIndex: 1,
    explanation: 'O Mini Exame do Estado Mental (MEEM) é um instrumento amplamente utilizado para rastreio de declínio cognitivo, avaliando domínios como orientação, memória, atenção, cálculo, linguagem e habilidade construtiva, com pontuação total de até 30 pontos.'
  },
  {
    id: 'enamed_inedita2_075',
    cycle: 'Ciclo Clínico',
    subject: 'Geriatria',
    banca: 'ENAMED (inédita)',
    text: 'Idosa de 82 anos é levada por vizinha à Unidade Básica de Saúde, apresentando desidratação importante, higiene precária e lesões de pele sugestivas de negligência prolongada. A vizinha relata que a idosa mora sozinha com um cuidador contratado pela família, que raramente é visto prestando assistência adequada.\n\nAlém do cuidado clínico imediato, qual é a conduta obrigatória prevista no Estatuto do Idoso?',
    options: [
      'Não realizar nenhuma notificação, respeitando a privacidade familiar sobre a organização do cuidado.',
      'Notificar o caso suspeito de maus-tratos/negligência ao órgão competente (como o Conselho Municipal do Idoso ou a autoridade policial).',
      'Resolver a situação apenas por meio de orientação verbal ao cuidador, sem qualquer notificação formal.',
      'Aguardar autorização expressa da idosa antes de qualquer notificação, mesmo que ela esteja com capacidade cognitiva comprometida.'
    ],
    correctIndex: 1,
    explanation: 'O Estatuto do Idoso determina que casos suspeitos de violência ou negligência contra idosos devem ser notificados aos órgãos competentes (Conselho Municipal do Idoso, autoridade policial, Ministério Público), sendo essa notificação uma obrigação legal do profissional de saúde que identifica a situação.'
  },
  {
    id: 'enamed_inedita2_076',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    banca: 'ENAMED (inédita)',
    text: 'Em um município, foram identificados 500 casos de hipertensão arterial em uma população de 10.000 habitantes em determinado momento (incluindo casos novos e antigos). No mesmo ano, foram diagnosticados 50 novos casos entre os habitantes previamente não hipertensos.\n\nOs números 500 e 50 correspondem, respectivamente, a medidas de',
    options: [
      'incidência e prevalência.',
      'prevalência e incidência.',
      'letalidade e mortalidade.',
      'incidência acumulada e taxa de ataque.'
    ],
    correctIndex: 1,
    explanation: 'A prevalência refere-se ao número total de casos (novos e antigos) existentes em um determinado momento (500 casos), enquanto a incidência refere-se ao número de casos novos surgidos em um período de tempo definido (50 novos casos no ano).'
  },
  {
    id: 'enamed_inedita2_077',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    banca: 'ENAMED (inédita)',
    text: 'Um estudo acompanhou, ao longo de 10 anos, um grupo de 1.000 tabagistas e um grupo de 1.000 não tabagistas, sem doença cardiovascular no início do estudo, registrando a incidência de infarto do miocárdio em cada grupo ao final do seguimento. Ao final, 80 tabagistas e 20 não tabagistas desenvolveram infarto.\n\nEsse desenho de estudo, que parte da exposição em direção ao desfecho, é classificado como',
    options: [
      'estudo de caso-controle.',
      'estudo de coorte prospectivo.',
      'estudo transversal (de prevalência).',
      'ensaio clínico randomizado.'
    ],
    correctIndex: 1,
    explanation: 'O estudo que parte de grupos definidos pela exposição (tabagistas e não tabagistas) e os acompanha ao longo do tempo para observar a ocorrência do desfecho (infarto) é um estudo de coorte prospectivo, permitindo o cálculo direto de incidência e risco relativo.'
  },
  {
    id: 'enamed_inedita2_078',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    banca: 'ENAMED (inédita)',
    text: 'Médico de Unidade Básica de Saúde diagnostica um caso de sarampo em uma criança de 3 anos, doença extremamente transmissível e com risco de surto em comunidades com baixa cobertura vacinal.\n\nConsiderando a gravidade epidemiológica e o potencial de disseminação dessa doença, a notificação desse caso à vigilância epidemiológica deve ser realizada',
    options: [
      'em até 7 dias, por se tratar de doença de notificação semanal, sem urgência adicional.',
      'de forma imediata, em até 24 horas, dada a alta transmissibilidade e o potencial de surto.',
      'apenas ao final do mês, de forma consolidada com outros casos suspeitos de exantemáticas.',
      'não é necessária notificação para essa doença, considerada de baixo impacto em saúde pública.'
    ],
    correctIndex: 1,
    explanation: 'O sarampo é doença de notificação compulsória imediata (em até 24 horas), dada sua altíssima transmissibilidade e potencial de causar surtos, especialmente em comunidades com baixa cobertura vacinal, exigindo resposta rápida da vigilância epidemiológica (bloqueio vacinal de contactantes, investigação da fonte).'
  },
  {
    id: 'enamed_inedita2_079',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    banca: 'ENAMED (inédita)',
    text: 'Em determinado ano, em um município com 8.000 nascidos vivos, ocorreram 24 óbitos maternos por causas relacionadas à gestação, parto ou puerpério.\n\nConsiderando a fórmula padrão (número de óbitos maternos dividido pelo número de nascidos vivos, multiplicado por 100.000), o coeficiente de mortalidade materna nesse município foi de',
    options: ['3 óbitos por 100.000 nascidos vivos.', '30 óbitos por 100.000 nascidos vivos.', '300 óbitos por 100.000 nascidos vivos.', '24 óbitos por 100.000 nascidos vivos, sem necessidade de cálculo adicional.'],
    correctIndex: 2,
    explanation: 'O coeficiente de mortalidade materna é calculado por (número de óbitos maternos / número de nascidos vivos) x 100.000. Nesse caso: (24 / 8.000) x 100.000 = 300 óbitos maternos por 100.000 nascidos vivos.'
  },
  {
    id: 'enamed_inedita2_080',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    banca: 'ENAMED (inédita)',
    text: 'Em um estudo comparando dois métodos de aferição de pressão arterial, os pesquisadores utilizaram um aparelho calibrado de forma diferente para o grupo de pacientes hipertensos em relação ao grupo de pacientes normotensos, fazendo com que as leituras do grupo hipertenso fossem sistematicamente superestimadas.\n\nEsse tipo de erro sistemático, relacionado à forma de mensuração da variável entre os grupos comparados, é denominado',
    options: ['viés de seleção.', 'viés de aferição (informação).', 'viés de confusão.', 'erro aleatório (viés de amostragem).'],
    correctIndex: 1,
    explanation: 'O viés de aferição (ou viés de informação) ocorre quando há erro sistemático na forma de mensurar ou classificar a exposição ou o desfecho, especialmente quando esse erro difere entre os grupos comparados, distorcendo os resultados do estudo, como no caso da calibração diferente do aparelho entre os grupos.'
  },
  {
    id: 'enamed_inedita2_081',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 40 anos procura emergência com dor lombar súbita, unilateral, em cólica, de forte intensidade, irradiada para a região inguinal, associada a náuseas e agitação (não consegue encontrar posição de conforto). Exame de urina mostra hematúria microscópica, sem sinais de infecção.\n\nQual é a principal hipótese diagnóstica e o exame de imagem inicial mais indicado?',
    options: [
      'Pielonefrite aguda; ultrassonografia renal, sem necessidade de outros exames.',
      'Litíase urinária (cólica renal); tomografia computadorizada de abdome sem contraste.',
      'Apendicite aguda atípica; colonoscopia como exame inicial.',
      'Torção testicular; ultrassonografia com Doppler de bolsa escrotal, exclusivamente.'
    ],
    correctIndex: 1,
    explanation: 'Dor lombar súbita em cólica, irradiada para a região inguinal, com agitação do paciente (incapaz de ficar parado) e hematúria microscópica, é o quadro clássico da cólica renal por litíase urinária; a tomografia computadorizada de abdome sem contraste é o exame de escolha para confirmar o diagnóstico e localizar o cálculo.'
  },
  {
    id: 'enamed_inedita2_082',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    banca: 'ENAMED (inédita)',
    text: 'Paciente internado por sepse abdominal evolui com queda progressiva do débito urinário e elevação da creatinina sérica. Exames urinários mostram fração de excreção de sódio (FeNa) de 2,8% e presença de cilindros granulosos pigmentados ("em lama suja") no sedimento urinário.\n\nQual é o mecanismo fisiopatológico mais provável da injúria renal aguda nesse paciente?',
    options: [
      'Injúria renal aguda pré-renal por hipoperfusão isolada, sem lesão tubular estabelecida.',
      'Necrose tubular aguda, geralmente por isquemia prolongada ou nefrotoxicidade, em contexto de sepse.',
      'Glomerulonefrite rapidamente progressiva, sem relação com o quadro séptico.',
      'Obstrução do trato urinário por cálculo, causa pós-renal isolada.'
    ],
    correctIndex: 1,
    explanation: 'FeNa acima de 2% e presença de cilindros granulosos pigmentados no sedimento urinário são sugestivos de necrose tubular aguda (lesão intrínseca renal), diferentemente da injúria pré-renal, que cursaria com FeNa menor que 1% e sedimento urinário sem alterações significativas; a sepse é uma causa comum de necrose tubular aguda por isquemia e/ou toxinas.'
  },
  {
    id: 'enamed_inedita2_083',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 38 anos, com história familiar de pai e irmã em diálise por doença renal, é investigado por hipertensão arterial de início precoce e dor lombar crônica bilateral. Ultrassonografia de abdome revela rins aumentados de volume, bilateralmente, com múltiplos cistos de diversos tamanhos substituindo o parênquima renal normal.\n\nQual é o diagnóstico mais provável e uma complicação extrarrenal importante a ser rastreada?',
    options: [
      'Rim em ferradura, anomalia de fusão renal geralmente assintomática; sem complicações extrarrenais relevantes a serem rastreadas nesse contexto familiar.',
      'Doença renal policística autossômica dominante; rastreamento de aneurismas cerebrais (especialmente em pacientes com história familiar de hemorragia subaracnoide).',
      'Rim multicístico displásico unilateral; condição isolada, sem herança familiar associada, incompatível com o histórico de diálise em familiares de primeiro grau.',
      'Nefropatia por refluxo, geralmente associada a cicatrizes corticais irregulares; sem associação com aneurismas cerebrais ou herança familiar significativa.'
    ],
    correctIndex: 1,
    explanation: 'Rins aumentados com múltiplos cistos bilaterais, hipertensão precoce e história familiar de doença renal em diálise são característicos da doença renal policística autossômica dominante; uma complicação extrarrenal importante é a associação com aneurismas cerebrais saculares, que podem ser rastreados em pacientes com fatores de risco adicionais.'
  },
  {
    id: 'enamed_inedita2_084',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    banca: 'ENAMED (inédita)',
    text: 'Paciente com doença renal crônica em estágio avançado, sem acesso a diálise no momento, apresenta fraqueza muscular progressiva e parestesias. Potássio sérico de 7,2 mEq/L. Eletrocardiograma mostra ondas T apiculadas e alargamento do complexo QRS.\n\nQual é a conduta medicamentosa imediata prioritária, considerando a proteção cardíaca, antes mesmo de reduzir o potássio sérico?',
    options: [
      'Gluconato de cálcio endovenoso, para estabilização da membrana miocárdica.',
      'Furosemida endovenosa isoladamente, sem necessidade de outras medidas imediatas.',
      'Resina de troca iônica (poliestirenossulfonato de cálcio) por via oral, como única conduta necessária.',
      'Bicarbonato de sódio isolado, sem necessidade de estabilização de membrana.'
    ],
    correctIndex: 0,
    explanation: 'Diante de hipercalemia grave com alterações eletrocardiográficas, a conduta imediata prioritária é a administração de gluconato de cálcio endovenoso, que estabiliza a membrana miocárdica e reduz o risco de arritmias graves, antes mesmo de iniciar medidas que efetivamente reduzem o potássio sérico (insulina com glicose, beta-agonista, diálise).'
  },
  {
    id: 'enamed_inedita2_085',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 4 anos apresenta palidez progressiva, fadiga, febre baixa intermitente, dor óssea nos membros inferiores e equimoses espontâneas nas últimas 3 semanas. Ao exame, hepatoesplenomegalia e linfonodomegalia difusa. Hemograma: hemoglobina 6,8 g/dL; leucócitos 2.100/mm³; plaquetas 18.000/mm³. Esfregaço de sangue periférico revela presença de blastos.\n\nQual é a principal hipótese diagnóstica e a conduta prioritária?',
    options: [
      'Anemia ferropriva grave; suplementação oral de ferro e reavaliação em 1 mês.',
      'Leucemia linfoblástica aguda; encaminhamento urgente para hematologia/oncologia pediátrica, com mielograma confirmatório.',
      'Mononucleose infecciosa; conduta expectante, sem necessidade de investigação hematológica adicional.',
      'Púrpura trombocitopênica idiopática isolada; corticoterapia oral ambulatorial, sem necessidade de encaminhamento urgente.'
    ],
    correctIndex: 1,
    explanation: 'Pancitopenia (anemia, leucopenia com neutropenia, plaquetopenia), associada a dor óssea, hepatoesplenomegalia, linfonodomegalia e presença de blastos no sangue periférico, é altamente sugestiva de leucemia aguda, mais comumente linfoblástica em crianças; exige encaminhamento urgente para confirmação por mielograma e início de tratamento especializado.'
  },
  {
    id: 'enamed_inedita2_086',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 5 anos, sem comorbidades, apresenta aparecimento súbito de petéquias e equimoses generalizadas, há 2 dias, duas semanas após um quadro viral inespecífico. Ao exame, criança em bom estado geral, sem hepatoesplenomegalia ou linfonodomegalia. Hemograma: plaquetas de 12.000/mm³, com as demais séries (hemoglobina e leucócitos) normais.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Leucemia aguda, dada a plaquetopenia grave apresentada.',
      'Púrpura trombocitopênica imune (idiopática) pós-viral.',
      'Coagulação intravascular disseminada, associada à infecção viral prévia.',
      'Anemia aplásica, com acometimento isolado da série plaquetária.'
    ],
    correctIndex: 1,
    explanation: 'Plaquetopenia isolada e grave, de instalação aguda, em criança previamente hígida, após quadro viral, sem outras citopenias, hepatoesplenomegalia ou linfonodomegalia, é o quadro clássico da púrpura trombocitopênica imune (idiopática), geralmente autolimitada em crianças.'
  },
  {
    id: 'enamed_inedita2_087',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 25 anos apresenta linfonodomegalia cervical indolor, de crescimento progressivo há 2 meses, associada a febre vespertina, sudorese noturna profusa e perda de peso superior a 10% nos últimos 6 meses. Biópsia do linfonodo revela células grandes, binucleadas, com nucléolos proeminentes (aspecto em "olhos de coruja"), em meio a um infiltrado inflamatório misto.\n\nQual é o diagnóstico mais provável e o achado histopatológico característico descrito?',
    options: [
      'Linfoma não Hodgkin difuso de grandes células B; células de Sézary.',
      'Linfoma de Hodgkin; células de Reed-Sternberg.',
      'Leucemia linfocítica crônica; células em "cesto roto" (smudge cells).',
      'Mononucleose infecciosa; linfócitos atípicos reativos.'
    ],
    correctIndex: 1,
    explanation: 'Linfonodomegalia indolor progressiva associada a sintomas B (febre, sudorese noturna, perda de peso) e a presença de células de Reed-Sternberg (células grandes, binucleadas, com nucléolos proeminentes, em "olhos de coruja") na biópsia são características do linfoma de Hodgkin.'
  },
  {
    id: 'enamed_inedita2_088',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 65 anos, vegetariana estrita há muitos anos, sem suplementação vitamínica, relata fadiga progressiva, formigamento e dormência em mãos e pés, e alteração da marcha com desequilíbrio. Exames: anemia macrocítica (VCM elevado); dosagem sérica de vitamina B12 muito baixa.\n\nQual é o diagnóstico e a razão pela qual o tratamento deve ser iniciado prontamente, mesmo antes de investigações adicionais extensas?',
    options: [
      'Anemia ferropriva; o tratamento pode ser postergado sem prejuízo, pois não há risco neurológico associado.',
      'Deficiência de vitamina B12; o atraso no tratamento pode levar a dano neurológico irreversível (degeneração combinada subaguda da medula).',
      'Anemia de doença crônica, geralmente normocítica ou discretamente microcítica; não há urgência terapêutica, independentemente dos sintomas neurológicos relatados.',
      'Talassemia menor, geralmente com anemia microcítica leve; tratamento não medicamentoso, sem necessidade de reposição vitamínica nesse contexto.'
    ],
    correctIndex: 1,
    explanation: 'A deficiência de vitamina B12 causa anemia macrocítica associada a manifestações neurológicas (parestesias, ataxia, alterações de marcha) por degeneração combinada subaguda da medula espinhal; o tratamento com reposição de B12 deve ser iniciado prontamente, pois o dano neurológico pode se tornar irreversível se a deficiência persistir por tempo prolongado.'
  },
  {
    id: 'enamed_inedita2_089',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 30 anos, 70 kg, sofre queimadura por fogo em tórax anterior completo, abdome anterior completo e todo o membro superior direito, sem comprometimento de vias aéreas. Segundo a regra dos nove, esses segmentos correspondem a aproximadamente 36% da superfície corporal queimada (segundo e terceiro graus).\n\nConsiderando a fórmula de Parkland para reposição volêmica nas primeiras 24 horas, qual é o volume total estimado de cristaloide a ser administrado, e como deve ser distribuído?',
    options: [
      'Aproximadamente 10.080 mL, com metade administrada nas primeiras 8 horas e a outra metade nas 16 horas restantes.',
      'Aproximadamente 2.520 mL, distribuídos igualmente ao longo de 24 horas, sem necessidade de ajuste temporal.',
      'Um volume fixo de 3.000 mL, independentemente do peso e da superfície corporal queimada.',
      'Não há necessidade de reposição volêmica calculada, apenas hidratação oral livre conforme sede do paciente.'
    ],
    correctIndex: 0,
    explanation: 'A fórmula de Parkland calcula o volume de cristaloide (Ringer lactato) nas primeiras 24 horas como 4 mL x peso (kg) x % de superfície corporal queimada: 4 x 70 x 36 = 10.080 mL; metade desse volume é administrada nas primeiras 8 horas (contadas a partir do momento da queimadura) e a outra metade nas 16 horas seguintes.'
  },
  {
    id: 'enamed_inedita2_090',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 25 anos é resgatado após submersão em piscina por aproximadamente 3 minutos, sendo retirado inconsciente, sem respiração espontânea eficaz, mas com pulso central palpável.\n\nQual é a conduta inicial prioritária no atendimento a esse paciente vítima de afogamento?',
    options: [
      'Realizar manobra de Heimlich repetidamente, para eliminar a água aspirada dos pulmões antes de qualquer outra medida.',
      'Iniciar ventilações de resgate imediatamente (mesmo antes das compressões torácicas, se houver pulso), priorizando a reversão da hipóxia.',
      'Aguardar a chegada da equipe de resgate especializada antes de iniciar qualquer manobra, para evitar erros no atendimento leigo.',
      'Posicionar o paciente com a cabeça abaixo do nível do corpo, para drenagem espontânea da água dos pulmões, antes de qualquer ventilação.'
    ],
    correctIndex: 1,
    explanation: 'No afogamento, a hipóxia é o evento fisiopatológico central; diferentemente da reanimação cardiopulmonar padrão, quando há pulso presente mas ausência de respiração eficaz, a prioridade é iniciar ventilações de resgate imediatamente, para reverter a hipóxia o mais rápido possível, sem a necessidade de manobras para "retirar água dos pulmões" (que são ineficazes e podem atrasar o atendimento).'
  },
  {
    id: 'enamed_inedita2_091',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 28 anos é encontrado inconsciente por familiares, com frequência respiratória de 6 irpm, pupilas puntiformes (mióticas) e marcas de perfuração recentes em fossa antecubital. Familiares relatam uso de drogas injetáveis.\n\nQual é a hipótese diagnóstica mais provável e a conduta medicamentosa imediata?',
    options: [
      'Intoxicação por cocaína; benzodiazepínico endovenoso para controle da agitação.',
      'Intoxicação por opioides; naloxona endovenosa ou intramuscular, com possibilidade de repetição da dose.',
      'Intoxicação por benzodiazepínicos; flumazenil endovenoso como primeira conduta, sem outras medidas.',
      'Acidente vascular encefálico de tronco encefálico; trombólise imediata, sem necessidade de outros exames.'
    ],
    correctIndex: 1,
    explanation: 'Depressão respiratória grave, miose puntiforme e evidências de uso de drogas injetáveis são a tríade clássica da intoxicação por opioides; a naloxona, antagonista opioide, deve ser administrada imediatamente, podendo ser repetida conforme resposta clínica, dado seu efeito de curta duração em relação a muitos opioides.'
  },
  {
    id: 'enamed_inedita2_092',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 45 anos, em pós-operatório de 6 dias de cirurgia ortopédica de quadril, com mobilização reduzida, apresenta dispneia súbita, dor torácica pleurítica e taquicardia (120 bpm), com saturação de O2 de 88% em ar ambiente. Eletrocardiograma mostra taquicardia sinusal, sem outras alterações específicas. D-dímero muito elevado.\n\nQual é a principal hipótese diagnóstica e o exame de imagem confirmatório de escolha?',
    options: [
      'Pneumonia adquirida em ambiente hospitalar; radiografia de tórax como exame confirmatório suficiente.',
      'Tromboembolismo pulmonar; angiotomografia de tórax (angio-TC de artérias pulmonares) como exame confirmatório.',
      'Infarto agudo do miocárdio; apenas eletrocardiograma seriado, sem necessidade de outros exames.',
      'Pneumotórax espontâneo; apenas ausculta pulmonar, sem necessidade de exames de imagem.'
    ],
    correctIndex: 1,
    explanation: 'Dispneia súbita, dor pleurítica, taquicardia e hipoxemia em paciente com fator de risco recente para tromboembolismo (cirurgia ortopédica, imobilização), associados a D-dímero elevado, são fortemente sugestivos de tromboembolismo pulmonar; a angiotomografia de tórax é o exame de escolha para confirmação diagnóstica.'
  },
  {
    id: 'enamed_inedita2_093',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 68 anos, tabagista de longa data, com diagnóstico prévio de DPOC, procura emergência com piora da dispneia habitual, aumento do volume e purulência do escarro, e uso de musculatura acessória para respirar, nos últimos 3 dias. Saturação de O2 de 89% em ar ambiente.\n\nAlém de broncodilatador de curta ação e corticoide sistêmico, qual outra medida terapêutica está indicada nesse quadro de exacerbação?',
    options: [
      'Antibioticoterapia, pela presença de aumento da purulência do escarro, sugerindo exacerbação de etiologia infecciosa.',
      'Oxigenoterapia em alto fluxo, com alvo de saturação acima de 96%, sem restrições, independentemente da retenção crônica de CO2.',
      'Suspensão imediata de todos os broncodilatadores de longa ação previamente em uso.',
      'Ventilação mecânica invasiva imediata, independentemente da resposta às medidas iniciais.'
    ],
    correctIndex: 0,
    explanation: 'A exacerbação de DPOC com aumento da purulência do escarro (um dos critérios de Anthonisen) sugere etiologia infecciosa bacteriana, com indicação de antibioticoterapia associada ao tratamento broncodilatador e corticoide sistêmico; a oxigenoterapia deve ser titulada com cautela em pacientes com DPOC, evitando hiperoxia, pelo risco de retenção de CO2.'
  },
  {
    id: 'enamed_inedita2_094',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 35 anos, em situação de rua, apresenta tosse produtiva há mais de 4 semanas, com escarro ocasionalmente hemoptoico, associada a febre vespertina, sudorese noturna e perda de peso significativa. Radiografia de tórax mostra cavitação em lobo superior direito.\n\nQual é a principal hipótese diagnóstica e o exame indicado para confirmação rápida?',
    options: [
      'Pneumonia bacteriana comum; hemocultura como exame confirmatório.',
      'Tuberculose pulmonar; teste rápido molecular para tuberculose (TRM-TB) no escarro.',
      'Câncer de pulmão; biópsia guiada por tomografia, sem necessidade de investigar tuberculose.',
      'Abscesso pulmonar amebiano; sorologia para Entamoeba histolytica.'
    ],
    correctIndex: 1,
    explanation: 'Tosse crônica com escarro hemoptoico, sintomas constitucionais (febre vespertina, sudorese noturna, perda de peso) e cavitação em lobo superior são o quadro clássico de tuberculose pulmonar, especialmente em populações vulneráveis; o teste rápido molecular (TRM-TB) permite confirmação rápida e detecção de resistência à rifampicina.'
  },
  {
    id: 'enamed_inedita2_095',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 22 anos, magro, alto, sem comorbidades conhecidas, apresenta dor torácica súbita em pontada à direita e dispneia de início abrupto, durante repouso. Ao exame, murmúrio vesicular abolido em hemitórax direito, com hipertimpanismo à percussão. Radiografia de tórax confirma a suspeita clínica.\n\nQual é o diagnóstico mais provável, e qual característica constitucional do paciente é fator de risco reconhecido?',
    options: [
      'Pneumonia lobar, geralmente associada a febre e tosse produtiva; obesidade como principal fator de risco constitucional nesse contexto.',
      'Pneumotórax espontâneo primário; biotipo longilíneo (alto e magro) como fator de risco reconhecido.',
      'Derrame pleural volumoso, geralmente com macicez à percussão; sexo feminino como principal fator de risco nesse contexto clínico.',
      'Embolia pulmonar, geralmente associada a fatores de risco trombóticos; idade avançada como principal fator de risco nesse contexto clínico.'
    ],
    correctIndex: 1,
    explanation: 'Dor torácica súbita e dispneia em jovem magro e alto, com murmúrio vesicular abolido e hipertimpanismo unilateral, são características do pneumotórax espontâneo primário, que ocorre tipicamente em homens jovens de biotipo longilíneo (altos e magros), pela ruptura de bolhas subpleurais apicais.'
  },
  {
    id: 'enamed_inedita2_096',
    cycle: 'Ciclo Clínico',
    subject: 'Urologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 68 anos relata jato urinário fraco e intermitente, hesitação para iniciar a micção, sensação de esvaziamento incompleto da bexiga e nictúria (3 vezes por noite), sintomas progressivos nos últimos 2 anos. Ao toque retal, próstata aumentada de volume, de consistência fibroelástica, superfície lisa, sem nódulos.\n\nQual é o diagnóstico mais provável e a conduta inicial (para sintomas leves a moderados)?',
    options: [
      'Câncer de próstata; biópsia prostática imediata, independentemente dos achados do toque retal.',
      'Hiperplasia prostática benigna; tratamento farmacológico inicial com bloqueador alfa-1 adrenérgico, associado ou não a inibidor da 5-alfa-redutase.',
      'Prostatite bacteriana aguda, geralmente com próstata dolorosa e quente ao toque; antibioticoterapia isolada, sem necessidade de outras medidas terapêuticas.',
      'Estenose de uretra, geralmente associada a instrumentação prévia ou infecção; dilatação uretral como primeira conduta terapêutica nesse caso.'
    ],
    correctIndex: 1,
    explanation: 'Sintomas obstrutivos e irritativos do trato urinário inferior, com próstata aumentada, de consistência fibroelástica e lisa (sem nódulos suspeitos) ao toque retal, são característicos de hiperplasia prostática benigna; para sintomas leves a moderados, o tratamento inicial é farmacológico, com bloqueadores alfa-1 adrenérgicos e/ou inibidores da 5-alfa-redutase.'
  },
  {
    id: 'enamed_inedita2_097',
    cycle: 'Ciclo Clínico',
    subject: 'Urologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 62 anos, assintomático, realiza avaliação de rotina com dosagem de PSA de 8,5 ng/mL (elevado para a idade). Ao toque retal, é identificado nódulo endurecido e irregular no lobo direito da próstata.\n\nQual é a conduta mais adequada nesse momento?',
    options: [
      'Repetir o PSA em 5 anos, sem necessidade de outra investigação, dado que o toque retal isolado já é suficiente para descartar malignidade.',
      'Encaminhar para biópsia prostática guiada por imagem, para investigação histológica do nódulo suspeito.',
      'Iniciar tratamento empírico com bloqueador alfa-1 adrenérgico, sem necessidade de biópsia nesse momento.',
      'Solicitar apenas ultrassonografia abdominal total, sem necessidade de biópsia prostática.'
    ],
    correctIndex: 1,
    explanation: 'PSA elevado associado a nódulo prostático endurecido e irregular ao toque retal são fortes indicativos de suspeita de câncer de próstata, exigindo biópsia prostática guiada por imagem para confirmação histológica e definição do estadiamento.'
  },
  {
    id: 'enamed_inedita2_098',
    cycle: 'Ciclo Clínico',
    subject: 'Urologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 55 anos, diabética, é internada com febre alta, calafrios e dor lombar intensa à direita. Exames laboratoriais mostram leucocitose importante com desvio à esquerda e função renal em piora progressiva. Tomografia de abdome revela hidronefrose importante à direita, secundária a cálculo ureteral obstrutivo, com sinais de pielonefrite associada.\n\nConsiderando a obstrução urinária associada à infecção (pielonefrite obstrutiva), qual é a conduta de urgência, além da antibioticoterapia?',
    options: [
      'Aguardar a eliminação espontânea do cálculo, mantendo apenas antibioticoterapia e analgesia, mesmo diante da hidronefrose importante e da piora da função renal.',
      'Derivação urinária de urgência (cateter duplo J ou nefrostomia percutânea), pois a obstrução associada à infecção configura emergência urológica.',
      'Litotripsia extracorpórea por ondas de choque imediata, como conduta definitiva de urgência.',
      'Nefrectomia radical imediata, sem tentativa prévia de drenagem urinária de urgência, apesar da possibilidade de preservação da função renal.'
    ],
    correctIndex: 1,
    explanation: 'A pielonefrite obstrutiva (infecção associada à obstrução do trato urinário) é uma emergência urológica, com risco de urossepse rapidamente progressiva; além da antibioticoterapia, a derivação urinária de urgência (cateter duplo J ou nefrostomia percutânea) é essencial para aliviar a obstrução e permitir o controle da infecção.'
  },
  {
    id: 'enamed_inedita2_099',
    cycle: 'Ciclo Clínico',
    subject: 'Urologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 24 anos, com diagnóstico de anemia falciforme, procura emergência com ereção peniana persistente, dolorosa e não relacionada a estímulo sexual, com duração de 5 horas.\n\nQual é o diagnóstico e a importância do tempo de evolução na conduta desse caso?',
    options: [
      'Disfunção erétil crônica; encaminhamento ambulatorial eletivo para urologia, sem urgência, mesmo diante da ereção dolorosa e prolongada descrita.',
      'Priapismo; emergência urológica, pois o atraso no tratamento aumenta o risco de fibrose e disfunção erétil permanente.',
      'Fimose complicada, geralmente sem dor à ereção espontânea; redução manual como única conduta necessária nesse cenário.',
      'Balanopostite aguda, geralmente com secreção purulenta local; antibioticoterapia tópica, sem necessidade de avaliação urológica urgente.'
    ],
    correctIndex: 1,
    explanation: 'Ereção peniana persistente, dolorosa e não relacionada a estímulo sexual, especialmente em paciente com anemia falciforme (fator de risco reconhecido), caracteriza priapismo, uma emergência urológica; quanto maior o tempo de isquemia peniana, maior o risco de fibrose dos corpos cavernosos e disfunção erétil permanente, exigindo intervenção urológica o mais rápido possível.'
  },
  {
    id: 'enamed_inedita2_100',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 30 anos, técnica de laboratório, relata desenvolvimento gradual de tosse seca, chiado no peito e falta de ar, sintomas que pioram durante os dias de trabalho e melhoram significativamente nos finais de semana e durante as férias. Nega sintomas antes de iniciar essa função há 1 ano.\n\nQual é a principal hipótese diagnóstica e a conduta mais importante para o controle da doença?',
    options: [
      'Asma ocupacional; afastamento do agente causador no ambiente de trabalho, associado ao tratamento farmacológico padrão da asma.',
      'DPOC ocupacional; a exposição não tem relação com os sintomas respiratórios relatados, deve-se investigar apenas tabagismo.',
      'Bronquite crônica simples; o padrão de melhora nos finais de semana não tem relevância diagnóstica nesse contexto.',
      'Pneumonia de hipersensibilidade crônica; corticoide sistêmico isolado, sem necessidade de afastamento ocupacional.'
    ],
    correctIndex: 0,
    explanation: 'Sintomas respiratórios que se relacionam temporalmente com o ambiente de trabalho (piora durante os dias trabalhados, melhora em períodos de afastamento como finais de semana e férias) sugerem asma ocupacional; a medida mais importante para o controle da doença é o afastamento do agente causador, associado ao tratamento farmacológico padrão da asma.'
  },
  {
    id: 'enamed_inedita2_101',
    cycle: 'Ciclo Clínico',
    subject: 'Dermatologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 55 anos apresenta lesão pigmentada no dorso, notada pela esposa há 4 meses, com crescimento progressivo. Ao exame, lesão de bordas irregulares, coloração variável (áreas enegrecidas e acastanhadas), assimétrica, com diâmetro de 9 mm, que mudou de aspecto nos últimos meses.\n\nConsiderando a regra do ABCDE para lesões pigmentadas suspeitas, qual é a conduta mais adequada?',
    options: [
      'Acompanhamento clínico fotográfico por 12 meses, antes de qualquer intervenção.',
      'Biópsia excisional da lesão, com margens adequadas, para avaliação histopatológica.',
      'Crioterapia da lesão, como tratamento definitivo, sem necessidade de biópsia.',
      'Apenas orientação sobre fotoproteção, sem necessidade de biópsia nesse momento.'
    ],
    correctIndex: 1,
    explanation: 'Lesão pigmentada com assimetria, bordas irregulares, variação de cor, diâmetro maior que 6 mm e evolução (mudança de aspecto) preenche critérios do ABCDE sugestivos de melanoma; a conduta adequada é a biópsia excisional com margens apropriadas, evitando biópsias incisionais ou procedimentos destrutivos como crioterapia, que dificultam o estadiamento correto.'
  },
  {
    id: 'enamed_inedita2_102',
    cycle: 'Ciclo Clínico',
    subject: 'Dermatologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 70 anos, agricultor com longa exposição solar ao longo da vida, apresenta lesão de crescimento lento em região nasal, com aspecto de pápula perolada, translúcida, com telangiectasias visíveis na superfície e discreta ulceração central, presente há mais de 1 ano.\n\nQual é o diagnóstico mais provável e a característica comportamental típica dessa neoplasia?',
    options: [
      'Carcinoma espinocelular, geralmente com base ulcerada e crescimento mais rápido; alto potencial de metástase à distância precoce.',
      'Carcinoma basocelular; crescimento lento e localmente invasivo, com baixo potencial metastático.',
      'Melanoma nodular, geralmente com coloração enegrecida e crescimento vertical; crescimento rápido e alto potencial metastático precoce.',
      'Queratose actínica, lesão áspera e escamosa em área fotoexposta; considerada pré-maligna, sem potencial invasivo já estabelecido.'
    ],
    correctIndex: 1,
    explanation: 'Pápula perolada com telangiectasias e ulceração central, de crescimento lento, em área fotoexposta de paciente idoso com exposição solar crônica, é característica do carcinoma basocelular, o câncer de pele mais comum, com comportamento localmente invasivo mas baixíssimo potencial de metástase à distância.'
  },
  {
    id: 'enamed_inedita2_103',
    cycle: 'Ciclo Clínico',
    subject: 'Dermatologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 28 anos desenvolve, poucos minutos após consumir camarão, lesões cutâneas eritematosas, papulosas, pruriginosas, de tamanhos e formatos variáveis, que mudam de localização ao longo de poucas horas, associadas a discreto edema labial, sem dificuldade respiratória ou hipotensão.\n\nQual é o diagnóstico mais provável e o tratamento de primeira linha?',
    options: [
      'Anafilaxia; adrenalina intramuscular imediata, como em qualquer reação alérgica cutânea.',
      'Urticária aguda (com angioedema leve associado); anti-histamínico de segunda geração como tratamento de primeira linha.',
      'Dermatite de contato alérgica; corticoide tópico potente, sem necessidade de anti-histamínico sistêmico.',
      'Eritema multiforme; suspensão de todos os alimentos da dieta, sem tratamento medicamentoso específico.'
    ],
    correctIndex: 1,
    explanation: 'Lesões urticariformes pruriginosas, fugazes (mudam de localização), associadas a angioedema leve, sem comprometimento respiratório ou hemodinâmico, caracterizam urticária aguda com angioedema leve, tratada com anti-histamínicos de segunda geração; a adrenalina é reservada para sinais de anafilaxia (comprometimento respiratório, cardiovascular ou de múltiplos sistemas).'
  },
  {
    id: 'enamed_inedita2_104',
    cycle: 'Ciclo Clínico',
    subject: 'Oftalmologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 55 anos, com diabetes mellitus tipo 2 diagnosticado há 12 anos, nunca realizou exame oftalmológico. Está assintomático quanto à visão no momento.\n\nConsiderando as recomendações de rastreamento de complicações oculares do diabetes, a conduta adequada é',
    options: [
      'aguardar o aparecimento de sintomas visuais antes de solicitar qualquer avaliação oftalmológica.',
      'encaminhar para exame de fundo de olho (fundoscopia) anual, mesmo na ausência de sintomas visuais.',
      'solicitar apenas aferição da pressão intraocular, sem necessidade de exame de fundo de olho.',
      'o rastreamento oftalmológico não é necessário em diabéticos tipo 2, apenas em tipo 1.'
    ],
    correctIndex: 1,
    explanation: 'Pacientes com diabetes mellitus devem realizar exame de fundo de olho anualmente, mesmo assintomáticos, para rastreamento de retinopatia diabética, uma complicação frequentemente assintomática em fases iniciais mas que pode levar à cegueira se não diagnosticada e tratada precocemente.'
  },
  {
    id: 'enamed_inedita2_105',
    cycle: 'Ciclo Clínico',
    subject: 'Oftalmologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 75 anos relata perda visual progressiva e indolor, bilateral, com maior dificuldade para enxergar à noite e sensação de "embaçamento", como se estivesse "olhando através de um vidro fosco", ao longo dos últimos 2 anos. Ao exame, opacificação do cristalino visível à oftalmoscopia direta, com reflexo vermelho diminuído.\n\nQual é o diagnóstico mais provável e o tratamento definitivo?',
    options: [
      'Degeneração macular relacionada à idade; injeções intravítreas de anti-VEGF como tratamento definitivo.',
      'Catarata senil; cirurgia de facoemulsificação com implante de lente intraocular.',
      'Glaucoma crônico de ângulo aberto; colírios hipotensores oculares como tratamento definitivo e curativo.',
      'Retinopatia hipertensiva; controle isolado da pressão arterial, sem necessidade de intervenção ocular.'
    ],
    correctIndex: 1,
    explanation: 'Perda visual progressiva, indolor e bilateral, com dificuldade visual noturna e opacificação do cristalino visível ao exame, é característica da catarata senil; o tratamento definitivo e altamente eficaz é a cirurgia de facoemulsificação com implante de lente intraocular.'
  },
  {
    id: 'enamed_inedita2_106',
    cycle: 'Internato',
    subject: 'Neonatologia',
    banca: 'ENAMED (inédita)',
    text: 'Recém-nascido de 4 dias de vida, filho de mãe sem pré-natal adequado, apresenta secreção ocular purulenta abundante e edema palpebral bilateral intenso, de início muito precoce.\n\nConsiderando o início muito precoce dos sintomas (nos primeiros dias de vida), qual é o principal agente etiológico a ser considerado, e qual a gravidade potencial dessa condição?',
    options: [
      'Chlamydia trachomatis, com início tipicamente entre o 5º e 14º dia, sem risco de complicações graves.',
      'Neisseria gonorrhoeae, com início mais precoce (2º a 5º dia) e risco de evolução rápida para perfuração corneana se não tratada prontamente.',
      'Staphylococcus aureus, apontado como causa mais comum de conjuntivite neonatal em geral, sem gravidade associada ao quadro descrito.',
      'Vírus herpes simples, com apresentação idêntica à gonocócica, sem diferenças relevantes.'
    ],
    correctIndex: 1,
    explanation: 'A oftalmia neonatal gonocócica caracteristicamente se manifesta de forma muito precoce (2º ao 5º dia de vida), com secreção purulenta abundante e edema palpebral intenso, podendo evoluir rapidamente para ulceração e perfuração corneana se não tratada com urgência (antibioticoterapia sistêmica), diferentemente da conjuntivite por clamídia, que tem início mais tardio e curso mais indolente.'
  },
  {
    id: 'enamed_inedita2_107',
    cycle: 'Ciclo Clínico',
    subject: 'Otorrinolaringologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 32 anos apresenta congestão nasal, dor facial em região maxilar e secreção nasal purulenta há 12 dias, sem sinais de melhora, com piora dos sintomas após uma melhora inicial parcial por volta do 6º dia ("piora em dois tempos").\n\nEsses achados (duração maior que 10 dias e piora após melhora inicial) sugerem qual etiologia para a rinossinusite, e qual conduta terapêutica é indicada?',
    options: [
      'Etiologia viral; apenas sintomáticos, sem necessidade de antibioticoterapia.',
      'Etiologia bacteriana; antibioticoterapia (amoxicilina, com ou sem clavulanato) indicada.',
      'Etiologia fúngica invasiva; anfotericina B endovenosa como tratamento de escolha.',
      'Rinite alérgica isolada; corticoide intranasal, sem necessidade de antibiótico.'
    ],
    correctIndex: 1,
    explanation: 'Sintomas persistentes por mais de 10 dias sem melhora, ou um padrão de piora após melhora inicial ("piora em dois tempos"), são critérios que sugerem etiologia bacteriana na rinossinusite aguda, com indicação de antibioticoterapia, diferentemente da rinossinusite viral, que geralmente melhora espontaneamente em até 10 dias.'
  },
  {
    id: 'enamed_inedita2_108',
    cycle: 'Ciclo Clínico',
    subject: 'Otorrinolaringologia',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 8 anos apresenta episódio de sangramento nasal unilateral, de moderada intensidade, após coçar o nariz repetidamente devido a rinite alérgica. Ao exame, sangramento ativo visível na região anterior do septo nasal.\n\nQual é a conduta inicial mais apropriada para essa epistaxe anterior?',
    options: [
      'Inclinar a cabeça para trás e aplicar compressa fria na nuca, sem necessidade de compressão nasal direta.',
      'Compressão digital contínua das asas nasais (compressão da região anterior do septo) por cerca de 10 a 15 minutos, com a cabeça inclinada levemente para frente.',
      'Tamponamento nasal posterior imediato, independentemente da resposta à compressão digital inicial e da localização anterior do sangramento.',
      'Encaminhamento direto para embolização arterial, sem tentativa prévia de medidas conservadoras como a compressão digital do septo nasal.'
    ],
    correctIndex: 1,
    explanation: 'A epistaxe anterior, mais comum em crianças e geralmente originada no plexo de Kiesselbach, deve ser inicialmente tratada com compressão digital contínua das asas nasais por 10-15 minutos, com a cabeça inclinada para frente (para evitar deglutição de sangue e broncoaspiração), sendo eficaz na maioria dos casos.'
  },
  {
    id: 'enamed_inedita2_109',
    cycle: 'Ciclo Clínico',
    subject: 'Otorrinolaringologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 60 anos relata episódios súbitos e breves (segundos) de vertigem rotatória intensa, desencadeados especificamente por mudanças de posição da cabeça, como virar-se na cama ou olhar para cima. Nega perda auditiva, zumbido ou outros sintomas neurológicos. Manobra de Dix-Hallpike reproduz a vertigem e provoca nistagmo característico.\n\nQual é o diagnóstico mais provável e o tratamento de primeira linha?',
    options: [
      'Doença de Ménière; dieta hipossódica e diuréticos como tratamento de primeira linha.',
      'Vertigem posicional paroxística benigna (VPPB); manobras de reposicionamento otolítico (como a manobra de Epley).',
      'Neurite vestibular, geralmente com vertigem contínua e não posicional; corticoide sistêmico em altas doses como primeira escolha terapêutica.',
      'Acidente vascular encefálico de fossa posterior, geralmente com outros sinais neurológicos associados; anticoagulação plena imediata como conduta prioritária.'
    ],
    correctIndex: 1,
    explanation: 'Episódios breves de vertigem rotatória desencadeados por mudanças posicionais da cabeça, com manobra de Dix-Hallpike positiva, sem outros sintomas neurológicos ou auditivos, são característicos da vertigem posicional paroxística benigna; o tratamento de primeira linha são as manobras de reposicionamento otolítico, como a manobra de Epley.'
  },
  {
    id: 'enamed_inedita2_110',
    cycle: 'Ciclo Clínico',
    subject: 'Ortopedia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 68 anos, osteoporótica, sofre queda da própria altura com apoio da mão espalmada em extensão. Apresenta dor intensa e deformidade em "dorso de garfo" no punho direito, com edema importante.\n\nQual é o diagnóstico mais provável e o mecanismo de trauma característico?',
    options: [
      'Fratura de escafoide, geralmente associada à queda com o punho em hiperextensão e desvio radial; mecanismo de flexão forçada do punho.',
      'Fratura de Colles (fratura distal do rádio com desvio dorsal); queda com a mão espalmada em extensão (mecanismo de extensão forçada).',
      'Luxação do cotovelo, geralmente após queda com o braço estendido; mecanismo de rotação forçada do antebraço nesse contexto.',
      'Fratura de clavícula, mais comum em quedas com impacto direto sobre o ombro; mecanismo de queda sobre o ombro descrito.'
    ],
    correctIndex: 1,
    explanation: 'A deformidade em "dorso de garfo" após queda com apoio da mão espalmada em extensão é característica da fratura de Colles (fratura da extremidade distal do rádio com desvio dorsal do fragmento distal), comum em pacientes com osteoporose.'
  },
  {
    id: 'enamed_inedita2_111',
    cycle: 'Ciclo Clínico',
    subject: 'Ortopedia',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 6 anos apresenta febre alta, recusa em apoiar o peso na perna direita e dor intensa e localizada na região da tíbia proximal, com edema e calor local, há 3 dias. Exames laboratoriais mostram leucocitose e proteína C reativa muito elevada. Radiografia inicial sem alterações significativas.\n\nQual é o diagnóstico mais provável, o agente etiológico mais comum e a conduta apropriada?',
    options: [
      'Osteossarcoma, tumor ósseo primário geralmente com massa palpável e dor progressiva; biópsia óssea eletiva ambulatorial, sem urgência nesse cenário febril.',
      'Osteomielite aguda hematogênica; Staphylococcus aureus como agente mais comum; antibioticoterapia endovenosa precoce, associada a investigação de imagem adicional (como ressonância magnética).',
      'Artrite reativa pós-infecciosa, geralmente poliarticular e sem toxemia importante; apenas anti-inflamatório, sem necessidade de antibioticoterapia endovenosa.',
      'Fratura de estresse, geralmente sem febre ou elevação importante de provas inflamatórias; imobilização gessada isolada, sem necessidade de investigação infecciosa adicional.'
    ],
    correctIndex: 1,
    explanation: 'Febre, dor óssea localizada, recusa de apoio do membro e marcadores inflamatórios elevados em criança sugerem osteomielite aguda hematogênica, cujo agente etiológico mais comum é o Staphylococcus aureus; a radiografia pode ser normal nas fases iniciais, sendo a ressonância magnética mais sensível; o tratamento inclui antibioticoterapia endovenosa precoce.'
  },
  {
    id: 'enamed_inedita2_112',
    cycle: 'Ciclo Clínico',
    subject: 'Ortopedia',
    banca: 'ENAMED (inédita)',
    text: 'Adolescente de 12 anos, obeso, relata dor progressiva no quadril esquerdo, que também é referida como dor no joelho ipsilateral, associada a claudicação leve nas últimas semanas. Ao exame, limitação da rotação interna do quadril, com rotação externa obrigatória durante a flexão passiva do quadril.\n\nQual é a principal hipótese diagnóstica nessa faixa etária e nesse perfil de paciente?',
    options: [
      'Doença de Legg-Calvé-Perthes, mais comum em crianças menores, entre 4 e 8 anos, e não em adolescentes obesos.',
      'Epifisiólise proximal do fêmur (escorregamento epifisário), mais comum em adolescentes obesos, com dor referida no joelho.',
      'Sinovite transitória do quadril, condição autolimitada sem necessidade de investigação de imagem ou relação com o peso corporal.',
      'Artrite séptica de quadril, sem relação com o peso corporal do paciente nem com a claudicação insidiosa descrita.'
    ],
    correctIndex: 1,
    explanation: 'Dor no quadril referida para o joelho, claudicação e limitação da rotação interna do quadril em adolescente obeso são características da epifisiólise proximal do fêmur (escorregamento da epífise femoral proximal), uma urgência ortopédica que exige diagnóstico e tratamento cirúrgico precoces para evitar necrose avascular.'
  },
  {
    id: 'enamed_inedita2_113',
    cycle: 'Ciclo Clínico',
    subject: 'Radiologia',
    banca: 'ENAMED (inédita)',
    text: 'Paciente com febre, tosse produtiva e dor pleurítica realiza radiografia de tórax, que evidencia opacidade homogênea, bem delimitada, ocupando todo o lobo inferior direito, com broncograma aéreo visível no seu interior, sem perda de volume associada.\n\nEsse padrão radiológico descrito é mais consistente com',
    options: [
      'atelectasia lobar completa, por obstrução brônquica.',
      'consolidação pulmonar (pneumonia lobar), com preenchimento alveolar por exsudato.',
      'derrame pleural volumoso isolado, sem acometimento do parênquima pulmonar.',
      'pneumotórax hipertensivo, com colabamento pulmonar completo.'
    ],
    correctIndex: 1,
    explanation: 'Opacidade homogênea que respeita os limites de um lobo pulmonar, com broncograma aéreo visível (ar dentro dos brônquios circundados por alvéolos preenchidos por exsudato) e sem perda de volume, é o padrão radiológico clássico da consolidação pulmonar por pneumonia lobar, diferente da atelectasia, que cursa com perda de volume e desvio de estruturas.'
  },
  {
    id: 'enamed_inedita2_114',
    cycle: 'Ciclo Clínico',
    subject: 'Radiologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 70 anos, com doença renal crônica estágio 3 (taxa de filtração glomerular reduzida), necessita de tomografia computadorizada com contraste iodado endovenoso para investigação de uma massa abdominal.\n\nConsiderando o risco de nefropatia induzida por contraste, qual medida preventiva tem maior respaldo na prática clínica antes do exame?',
    options: [
      'Hidratação endovenosa adequada com solução salina isotônica antes e após o procedimento, além de utilizar a menor dose de contraste possível.',
      'Suspensão de qualquer hidratação, para evitar sobrecarga hídrica no paciente renal crônico, mesmo antes do uso de contraste iodado.',
      'Administração de contraste em dose dobrada, para reduzir o número de exposições futuras, sem hidratação endovenosa associada.',
      'Uso de diurético de alça imediatamente antes da administração do contraste, como principal medida preventiva.'
    ],
    correctIndex: 0,
    explanation: 'A principal medida preventiva reconhecida para reduzir o risco de nefropatia induzida por contraste em pacientes de risco (como aqueles com doença renal crônica) é a hidratação endovenosa adequada com solução salina isotônica antes e após o procedimento, além do uso da menor dose de contraste necessária para o diagnóstico.'
  },
  {
    id: 'enamed_inedita2_115',
    cycle: 'Internato',
    subject: 'Neonatologia',
    banca: 'ENAMED (inédita)',
    text: 'Recém-nascido pré-termo de 30 semanas, no sétimo dia de vida, apresenta sopro cardíaco contínuo ("em maquinaria"), pulsos amplos e taquicardia, associados a dificuldade de desmame do suporte ventilatório e piora da função respiratória. Ecocardiograma confirma a suspeita clínica de um shunt cardíaco.\n\nQual é o diagnóstico mais provável nesse contexto de prematuridade?',
    options: [
      'Comunicação interventricular grande.',
      'Persistência do canal arterial, condição comum em prematuros.',
      'Tetralogia de Fallot, com shunt direita-esquerda predominante.',
      'Transposição das grandes artérias, incompatível com a apresentação clínica descrita.'
    ],
    correctIndex: 1,
    explanation: 'Sopro contínuo em maquinaria, pulsos amplos e dificuldade respiratória em recém-nascido pré-termo são característicos da persistência do canal arterial, uma condição comum em prematuros pela falha do fechamento fisiológico do canal arterial após o nascimento.'
  },
  {
    id: 'enamed_inedita2_116',
    cycle: 'Internato',
    subject: 'Neonatologia',
    banca: 'ENAMED (inédita)',
    text: 'Recém-nascido pré-termo de 28 semanas, no décimo dia de vida, em uso de nutrição enteral progressiva, apresenta distensão abdominal importante, resíduo gástrico bilioso, sangue nas fezes e instabilidade térmica. Radiografia de abdome evidencia pneumatose intestinal (ar na parede intestinal).\n\nQual é o diagnóstico mais provável e a conduta inicial?',
    options: [
      'Refluxo gastroesofágico grave; apenas espessamento da dieta, mantendo a progressão enteral normalmente.',
      'Enterocolite necrosante; suspensão imediata da dieta enteral, descompressão gástrica e antibioticoterapia de amplo espectro.',
      'Constipação intestinal do prematuro, sem pneumatose ou instabilidade térmica associadas; laxante e estímulo retal, mantendo a dieta enteral.',
      'Volvo intestinal, geralmente com distensão súbita e sinais de obstrução; apenas observação clínica, sem necessidade de suspender a dieta.'
    ],
    correctIndex: 1,
    explanation: 'Distensão abdominal, resíduo bilioso, sangue nas fezes e pneumatose intestinal em prematuro são o quadro clássico de enterocolite necrosante, uma emergência neonatal grave; a conduta inicial inclui suspensão imediata da dieta enteral, descompressão gástrica por sonda e antibioticoterapia de amplo espectro, com possível necessidade de cirurgia em casos de perfuração.'
  },
  {
    id: 'enamed_inedita2_117',
    cycle: 'Internato',
    subject: 'Neonatologia',
    banca: 'ENAMED (inédita)',
    text: 'Recém-nascido a termo, filho de mãe diabética mal controlada durante a gestação, macrossômico (peso de nascimento de 4.500 g), apresenta tremores, irritabilidade e letargia intermitente nas primeiras horas de vida. Glicemia capilar de 25 mg/dL.\n\nQual é o diagnóstico e o mecanismo fisiopatológico que explica essa condição nesse contexto?',
    options: [
      'Hipoglicemia neonatal; decorrente do hiperinsulinismo fetal reativo à hiperglicemia materna crônica durante a gestação, com queda abrupta do aporte de glicose após o clampeamento do cordão.',
      'Hipocalcemia neonatal, geralmente com tremores e irritabilidade semelhantes; sem relação com o diabetes materno, decorrente exclusivamente da prematuridade e da imaturidade paratireoidiana.',
      'Sepse neonatal precoce; causa mais provável nesse cenário, independentemente do controle glicêmico materno e da história de macrossomia fetal.',
      'Síndrome de abstinência neonatal, geralmente com tremores e irritabilidade semelhantes; decorrente, nessa hipótese incorreta, do uso de insulina materna durante a gestação.'
    ],
    correctIndex: 0,
    explanation: 'Filhos de mães diabéticas apresentam hiperinsulinismo fetal em resposta à hiperglicemia materna crônica; após o nascimento, com a interrupção do aporte de glicose materno (clampeamento do cordão), o excesso de insulina fetal causa hipoglicemia neonatal significativa, exigindo monitorização glicêmica cuidadosa nas primeiras horas de vida.'
  },
  {
    id: 'enamed_inedita2_118',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 30 semanas é vítima de acidente automobilístico, com impacto direto do volante no abdome, usando cinto de segurança de forma inadequada (apenas sobre o abdome). Chega à emergência consciente, orientada, com dor abdominal e contrações uterinas dolorosas frequentes, além de discreto sangramento vaginal.\n\nAlém da avaliação trauma padrão (ABCDE), qual exame específico deve ser priorizado para avaliação do bem-estar fetal e da possibilidade de descolamento de placenta?',
    options: [
      'Radiografia de abdome simples, exclusivamente, sem necessidade de monitorização fetal contínua, mesmo diante de contrações uterinas e sangramento vaginal.',
      'Cardiotocografia contínua por período mínimo de observação (geralmente 4-6 horas ou mais, conforme gravidade), associada à avaliação ultrassonográfica.',
      'Amniocentese diagnóstica imediata, independentemente da estabilidade materna e fetal e do mecanismo de trauma abdominal direto relatado.',
      'Nenhuma avaliação fetal adicional é necessária além do exame físico obstétrico inicial, mesmo diante do trauma abdominal direto e das contrações uterinas.'
    ],
    correctIndex: 1,
    explanation: 'Em gestantes vítimas de trauma abdominal, especialmente com contrações e sangramento vaginal (sinais de alerta para descolamento prematuro de placenta), a cardiotocografia contínua por período prolongado de observação é essencial para monitorar o bem-estar fetal e detectar sinais precoces de sofrimento fetal ou atividade uterina anormal, associada à avaliação por imagem.'
  },
  {
    id: 'enamed_inedita2_119',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 2 anos é levada à emergência pelos pais após ser encontrada com uma cartela vazia de medicamento (antidepressivo tricíclico da avó) próxima a ela, sem certeza da quantidade ingerida. Está assintomática no momento da chegada, cerca de 30 minutos após o evento.\n\nQual é a conduta mais apropriada nesse cenário de ingestão acidental de substância potencialmente tóxica?',
    options: [
      'Liberar a criança para casa imediatamente, já que está assintomática, sem necessidade de observação ou monitorização cardíaca.',
      'Manter a criança em observação hospitalar monitorizada (incluindo monitorização cardíaca, dado o potencial cardiotóxico dos tricíclicos), mesmo assintomática, pelo risco de toxicidade tardia.',
      'Induzir vômito imediatamente em domicílio, antes de qualquer avaliação médica, mesmo diante do risco de aspiração e de agravamento clínico.',
      'Administrar carvão ativado apenas se a criança apresentar sintomas neurológicos evidentes, aguardando a evolução em casa até esse momento.'
    ],
    correctIndex: 1,
    explanation: 'Na ingestão acidental de substância potencialmente tóxica com risco cardiotóxico conhecido (como antidepressivos tricíclicos), mesmo que a criança esteja inicialmente assintomática, a conduta é manter observação hospitalar monitorizada, pelo risco de manifestações tardias (arritmias, convulsões), e não a indução de vômito domiciliar, que pode ser perigosa e é contraindicada em vários cenários.'
  },
  {
    id: 'enamed_inedita2_120',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Um paciente de 60 anos é acompanhado pela mesma equipe de Saúde da Família há 15 anos, desde o diagnóstico de hipertensão arterial, passando por diferentes fases de vida, incluindo o diagnóstico posterior de diabetes mellitus e, mais recentemente, o luto pela perda do cônjuge. A equipe conhece profundamente sua história de vida, suas preferências e seu contexto familiar.\n\nEssa característica do cuidado, que permite uma relação de vínculo contínuo ao longo do tempo entre paciente e equipe, independentemente dos problemas de saúde apresentados, é denominada',
    options: [
      'integralidade do cuidado.',
      'longitudinalidade do cuidado.',
      'coordenação do cuidado.',
      'acessibilidade ao sistema de saúde.'
    ],
    correctIndex: 1,
    explanation: 'A longitudinalidade é um dos atributos essenciais da Atenção Primária à Saúde, caracterizada pela existência de uma fonte regular de cuidado ao longo do tempo, com construção de vínculo entre a equipe e o paciente, independentemente da presença ou tipo de problema de saúde apresentado em cada momento.'
  },
  {
    id: 'enamed_inedita2_121',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 26 anos, com atraso menstrual de 9 semanas, procura emergência com sangramento vaginal moderado e cólicas há 2 dias. Ao exame especular, colo uterino com orifício externo entreaberto e restos ovulares visíveis. Ultrassonografia transvaginal mostra conteúdo heterogêneo intrauterino, sem saco gestacional íntegro identificável.\n\nQual é o diagnóstico e a conduta mais adequada?',
    options: [
      'Ameaça de abortamento; repouso e progesterona vaginal, com reavaliação em 1 semana, sem indicação de esvaziamento uterino.',
      'Abortamento incompleto; esvaziamento uterino (aspiração manual intrauterina ou uso de misoprostol, conforme o caso e estabilidade clínica).',
      'Gravidez ectópica, geralmente sem restos ovulares intrauterinos ao ultrassom; laparoscopia de urgência, independentemente dos achados ultrassonográficos apresentados.',
      'Mola hidatiforme parcial; quimioterapia profilática imediata, sem necessidade de esvaziamento uterino.'
    ],
    correctIndex: 1,
    explanation: 'Colo entreaberto com restos ovulares visíveis e conteúdo heterogêneo intrauterino, sem saco gestacional íntegro, caracterizam abortamento incompleto; a conduta é o esvaziamento uterino, por aspiração manual intrauterina ou uso de misoprostol, conforme a idade gestacional e a estabilidade clínica da paciente.'
  },
  {
    id: 'enamed_inedita2_122',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 28 semanas, tipagem sanguínea O negativo, com parceiro Rh positivo, realiza pesquisa de anticorpos irregulares (Coombs indireto), com resultado negativo. Nunca recebeu imunoglobulina anti-D anteriormente.\n\nConsiderando a prevenção da doença hemolítica perinatal, qual é a conduta recomendada nesse momento da gestação?',
    options: [
      'Nenhuma conduta adicional é necessária, já que o Coombs indireto está negativo.',
      'Administrar imunoglobulina anti-D profilática por volta da 28ª semana, mesmo com Coombs indireto negativo.',
      'Aguardar o parto para decidir sobre a necessidade de imunoglobulina anti-D, sem necessidade de conduta antenatal.',
      'Solicitar apenas repetição do Coombs indireto mensalmente, sem indicação de imunoglobulina profilática antenatal.'
    ],
    correctIndex: 1,
    explanation: 'Em gestantes Rh negativo não sensibilizadas (Coombs indireto negativo), com parceiro Rh positivo, recomenda-se a administração profilática de imunoglobulina anti-D por volta da 28ª semana de gestação, além de após eventos potencialmente sensibilizantes e no pós-parto (se o recém-nascido for Rh positivo), para prevenir a aloimunização materna e a doença hemolítica perinatal em gestações futuras.'
  },
  {
    id: 'enamed_inedita2_123',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 48 anos identifica, durante autoexame, nódulo endurecido e indolor na mama esquerda, de bordas irregulares, aderido a planos profundos, com retração discreta da pele suprajacente. Mamografia classifica a lesão como BI-RADS 5 (altamente suspeita de malignidade).\n\nQual é a conduta apropriada diante desse resultado mamográfico?',
    options: [
      'Repetir a mamografia em 6 meses, para confirmar a persistência do achado antes de qualquer intervenção.',
      'Biópsia da lesão (core biopsy ou biópsia percutânea guiada por imagem), para confirmação histológica antes da definição terapêutica.',
      'Mastectomia radical imediata, sem necessidade de confirmação histológica prévia, mesmo diante de um achado ainda não biopsiado.',
      'Apenas seguimento clínico com exame físico trimestral, sem necessidade de biópsia, mesmo diante da classificação BI-RADS 5 altamente suspeita.'
    ],
    correctIndex: 1,
    explanation: 'Uma lesão classificada como BI-RADS 5 tem alta probabilidade de malignidade (maior que 95%), exigindo confirmação histológica por biópsia (geralmente percutânea, guiada por imagem) antes de qualquer decisão terapêutica cirúrgica ou oncológica.'
  },
  {
    id: 'enamed_inedita2_124',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Puérpera de 3 semanas, em aleitamento materno exclusivo sob livre demanda, sem menstruação desde o parto, pergunta sobre a necessidade de método contraceptivo adicional, além da amamentação.\n\nConsiderando o Método de Amenorreia Lactacional (LAM) como método contraceptivo, quais critérios devem estar simultaneamente presentes para sua eficácia adequada?',
    options: [
      'Amamentação exclusiva, amenorreia e criança com menos de 6 meses de idade, simultaneamente.',
      'Apenas amamentar em qualquer frequência, independentemente da presença de menstruação ou da idade da criança.',
      'Amamentação exclusiva isoladamente, sem necessidade de considerar a idade da criança ou a presença de menstruação.',
      'O método LAM não é reconhecido como estratégia contraceptiva válida em nenhuma circunstância.'
    ],
    correctIndex: 0,
    explanation: 'O Método de Amenorreia Lactacional (LAM) é eficaz como contracepção temporária apenas quando três critérios estão simultaneamente presentes: amamentação exclusiva (sem outros alimentos ou líquidos), amenorreia (ausência de menstruação desde o parto) e criança com menos de 6 meses de idade; a ausência de qualquer um desses critérios reduz significativamente sua eficácia.'
  },
  {
    id: 'enamed_inedita2_125',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Lactente de 14 meses, em uso predominante de leite de vaca integral desde os 6 meses, com baixa ingestão de alimentos ricos em ferro, é levado à consulta por palidez cutânea, irritabilidade e apatia. Hemograma: hemoglobina de 8,2 g/dL, microcítica e hipocrômica.\n\nQual é o diagnóstico mais provável e o principal fator de risco identificado na história alimentar?',
    options: [
      'Talassemia menor; sem relação com os hábitos alimentares descritos.',
      'Anemia ferropriva; consumo excessivo de leite de vaca integral em substituição a alimentos ricos em ferro, fator de risco bem estabelecido nessa faixa etária.',
      'Anemia de doença crônica; associada a infecção subclínica não identificada.',
      'Anemia falciforme; diagnóstico já deveria ter sido identificado na triagem neonatal, tornando essa hipótese menos provável, mas sem relação com a dieta.'
    ],
    correctIndex: 1,
    explanation: 'O consumo excessivo de leite de vaca integral em substituição a alimentos ricos em ferro é um fator de risco bem estabelecido para anemia ferropriva em lactentes e pré-escolares, sendo essa a causa mais comum de anemia microcítica e hipocrômica nessa faixa etária.'
  },
  {
    id: 'enamed_inedita2_126',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 2 anos é levada à emergência com febre alta, irritabilidade intensa, recusa alimentar e vômitos há 12 horas, evoluindo com letargia progressiva. Ao exame, rigidez de nuca, abaulamento de fontanela (ainda não fechada), e presença de petéquias em tronco e membros.\n\nQual é a principal hipótese diagnóstica e a conduta imediata?',
    options: [
      'Convulsão febril simples, geralmente sem rigidez de nuca ou petéquias associadas; apenas antitérmico e observação domiciliar.',
      'Meningite bacteriana aguda; punção lombar (se não houver contraindicação) e início imediato de antibioticoterapia empírica, sem aguardar confirmação laboratorial.',
      'Otite média aguda complicada, sem sinais de irritação meníngea; apenas antibiótico oral ambulatorial, sem necessidade de punção lombar.',
      'Virose exantemática benigna; observação clínica, sem necessidade de investigação laboratorial urgente nem de antibioticoterapia empírica.'
    ],
    correctIndex: 1,
    explanation: 'Febre alta, rigidez de nuca, abaulamento de fontanela, letargia e petéquias em criança pequena são fortemente sugestivos de meningite bacteriana aguda (possivelmente meningocócica, dado o exantema petequial); a conduta é a antibioticoterapia empírica imediata, sem aguardar a confirmação por punção lombar, que deve ser realizada quando possível, mas não deve atrasar o início do tratamento.'
  },
  {
    id: 'enamed_inedita2_127',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 6 anos apresenta, após quadro de infecção de vias aéreas superiores, púrpura palpável simétrica em membros inferiores e nádegas, associada a dor abdominal em cólica e artralgia/edema articular em joelhos e tornozelos. Exame de urina mostra hematúria microscópica e proteinúria discreta. Plaquetas normais.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Púrpura trombocitopênica imune, pela presença de púrpura palpável.',
      'Púrpura de Henoch-Schönlein (vasculite por IgA), uma vasculite de pequenos vasos comum em crianças.',
      'Meningococcemia, pela presença de lesões purpúricas associadas a febre.',
      'Coagulação intravascular disseminada, pela presença de sangramento cutâneo e comprometimento renal.'
    ],
    correctIndex: 1,
    explanation: 'A púrpura palpável simétrica em membros inferiores e nádegas, associada a dor abdominal, artralgia/artrite e acometimento renal (hematúria, proteinúria), com plaquetas normais (diferenciando de causas trombocitopênicas), após infecção respiratória prévia, é o quadro clássico da púrpura de Henoch-Schönlein, a vasculite mais comum na infância.'
  },
  {
    id: 'enamed_inedita2_128',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Menino de 6 anos apresenta claudicação intermitente e dor leve a moderada no quadril e na coxa direita, de início insidioso há 2 meses, sem história de trauma. Ao exame, limitação da abdução e rotação interna do quadril direito. Radiografia de bacia mostra achatamento e esclerose da epífise femoral proximal direita.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Epifisiólise proximal do fêmur, mais comum em adolescentes obesos, não em crianças dessa idade.',
      'Doença de Legg-Calvé-Perthes (necrose avascular idiopática da epífise femoral proximal), mais comum entre 4 e 8 anos.',
      'Artrite séptica de quadril, diagnóstico mais provável dado o quadro radiológico descrito.',
      'Displasia do desenvolvimento do quadril, condição tipicamente diagnosticada apenas no período neonatal.'
    ],
    correctIndex: 1,
    explanation: 'Claudicação insidiosa, dor leve a moderada no quadril (referida à coxa), limitação de abdução e rotação interna, com achatamento e esclerose da epífise femoral proximal na radiografia, em criança entre 4 e 8 anos, são característicos da doença de Legg-Calvé-Perthes, necrose avascular idiopática da cabeça femoral.'
  },
  {
    id: 'enamed_inedita2_129',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 75 anos relata episódios recorrentes de síncope, sem pródromos claros, associados a tontura e fadiga progressiva. Eletrocardiograma mostra dissociação completa entre a atividade elétrica atrial e ventricular, com frequência ventricular de 35 bpm, de ritmo regular.\n\nQual é o diagnóstico e o tratamento definitivo indicado?',
    options: [
      'Fibrilação atrial com resposta ventricular lenta; anticoagulação isolada, sem necessidade de outra intervenção.',
      'Bloqueio atrioventricular total (BAVT); implante de marca-passo cardíaco definitivo.',
      'Taquicardia ventricular sustentada; cardioversão elétrica imediata como tratamento definitivo.',
      'Síndrome do nó sinusal doente; apenas ajuste medicamentoso, sem necessidade de dispositivo implantável.'
    ],
    correctIndex: 1,
    explanation: 'Dissociação completa entre a atividade atrial e ventricular, com um ritmo de escape ventricular lento e regular, é o quadro clássico do bloqueio atrioventricular total (BAVT); o tratamento definitivo para pacientes sintomáticos (síncope, tontura) é o implante de marca-passo cardíaco definitivo.'
  },
  {
    id: 'enamed_inedita2_130',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Adolescente de 16 anos, atleta de futebol, apresenta morte súbita durante uma partida. Investigação familiar posterior revela que o pai do adolescente também apresenta um sopro sistólico que aumenta de intensidade com a manobra de Valsalva, e ecocardiograma do pai mostra espessamento assimétrico do septo interventricular, sem dilatação das cavidades.\n\nQual é a principal causa de morte súbita em atletas jovens sugerida por esse cenário familiar?',
    options: [
      'Doença arterial coronariana aterosclerótica precoce, causa rara de morte súbita em atletas tão jovens, sem relação com o histórico familiar descrito.',
      'Cardiomiopatia hipertrófica, doença genética frequentemente responsável por morte súbita em atletas jovens.',
      'Miocardite viral aguda isolada, geralmente sem sopro que varia com manobra de Valsalva, sem componente genético ou familiar associado.',
      'Síndrome de Marfan, sem relação com os achados ecocardiográficos descritos no pai.'
    ],
    correctIndex: 1,
    explanation: 'A cardiomiopatia hipertrófica, doença genética caracterizada por hipertrofia septal assimétrica (identificável em familiares, como no caso do pai), é uma das principais causas de morte súbita em atletas jovens, frequentemente relacionada a arritmias ventriculares malignas durante esforço físico intenso.'
  },
  {
    id: 'enamed_inedita2_131',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Adulto jovem, após consumir conserva caseira de palmito mal processada, desenvolve, em 24 horas, visão dupla, ptose palpebral bilateral, dificuldade para engolir e fraqueza muscular descendente e simétrica, progredindo para comprometimento da musculatura respiratória, sem alteração do nível de consciência ou febre.\n\nQual é o diagnóstico mais provável e o mecanismo fisiopatológico envolvido?',
    options: [
      'Síndrome de Guillain-Barré; desmielinização de nervos periféricos mediada por resposta autoimune.',
      'Botulismo alimentar; toxina botulínica bloqueando a liberação de acetilcolina na junção neuromuscular.',
      'Miastenia gravis; produção de autoanticorpos contra receptores de acetilcolina.',
      'Intoxicação por organofosforado; inibição da acetilcolinesterase, causando excesso de acetilcolina.'
    ],
    correctIndex: 1,
    explanation: 'Paralisia descendente e simétrica, com comprometimento de nervos cranianos (ptose, diplopia, disfagia), sem febre ou alteração de consciência, após ingestão de alimento em conserva mal processado, é característica do botulismo alimentar, causado pela toxina botulínica que bloqueia a liberação de acetilcolina na junção neuromuscular.'
  },
  {
    id: 'enamed_inedita2_132',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 45 anos, agricultor, sem esquema vacinal atualizado, procura atendimento 5 dias após ferimento profundo e sujo com material contaminado por terra, não tratado adequadamente na ocasião. Atualmente apresenta rigidez da musculatura mastigatória (trismo), dificuldade para abrir a boca, rigidez de nuca e espasmos musculares generalizados dolorosos, desencadeados por estímulos mínimos.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Raiva humana, pela história de ferimento contaminado.',
      'Tétano, por ferimento profundo e sujo em paciente não imunizado adequadamente.',
      'Meningite bacteriana aguda, isoladamente, sem relação com o ferimento.',
      'Síndrome neuroléptica maligna, sem relação com história de trauma.'
    ],
    correctIndex: 1,
    explanation: 'Trismo, rigidez muscular generalizada e espasmos desencadeados por estímulos mínimos, em paciente com ferimento profundo e contaminado por terra e esquema vacinal antitetânico incompleto, são característicos do tétano, causado pela toxina do Clostridium tetani.'
  },
  {
    id: 'enamed_inedita2_133',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 60 anos, com hérnia inguinal direita conhecida há anos, redutível e habitualmente indolor, procura emergência com dor intensa e súbita na região da hérnia, que se tornou irredutível, associada a náuseas e distensão abdominal progressiva nas últimas 8 horas.\n\nQual é a principal complicação suspeitada e a conduta adequada?',
    options: [
      'Hérnia inguinal não complicada; redução manual forçada, mesmo com dor importante, seguida de alta hospitalar.',
      'Hérnia inguinal encarcerada, com risco de estrangulamento e comprometimento vascular do conteúdo herniário; correção cirúrgica de urgência.',
      'Hidrocele comunicante, geralmente indolor e sem sinais de obstrução intestinal; apenas observação clínica, sem necessidade de intervenção cirúrgica urgente.',
      'Varicocele complicada, geralmente indolor e sem distensão abdominal associada; anti-inflamatório oral e reavaliação em 1 semana.'
    ],
    correctIndex: 1,
    explanation: 'Uma hérnia previamente redutível que se torna irredutível, dolorosa e associada a sinais de obstrução intestinal (náuseas, distensão) caracteriza encarceramento, com risco iminente de estrangulamento e isquemia do conteúdo herniário, exigindo correção cirúrgica de urgência, sem tentativas repetidas e forçadas de redução manual.'
  },
  {
    id: 'enamed_inedita2_134',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 45 anos, assintomática, tem colelitíase (cálculos na vesícula biliar) identificada incidentalmente em ultrassonografia de rotina, sem episódios prévios de dor biliar, colecistite ou pancreatite.\n\nConsiderando a colelitíase assintomática (achado incidental), qual é a conduta mais apropriada na maioria dos casos?',
    options: [
      'Colecistectomia eletiva imediata, independentemente da ausência de sintomas, pelo risco de complicação futura.',
      'Conduta expectante, sem necessidade de colecistectomia profilática na maioria dos pacientes assintomáticos.',
      'Litotripsia extracorpórea por ondas de choque, como tratamento definitivo para dissolver os cálculos.',
      'Uso contínuo de ácido ursodesoxicólico por toda a vida, como alternativa definitiva à cirurgia.'
    ],
    correctIndex: 1,
    explanation: 'Na colelitíase assintomática, a conduta expectante é geralmente recomendada, já que a maioria dos pacientes permanece assintomática e o risco cirúrgico de uma colecistectomia profilática geralmente supera o benefício, exceto em situações especiais (como vesícula em porcelana ou pólipos associados de risco).'
  },
  {
    id: 'enamed_inedita2_135',
    cycle: 'Internato',
    subject: 'Traumatologia-Ortopedia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 28 anos, praticante de esportes de contato, sofre queda com o braço em abdução e rotação externa forçada. Apresenta dor intensa no ombro, com deformidade visível ("sinal da dragona" - perda do contorno arredondado do deltoide), impossibilidade de mobilizar o membro e o braço mantido em discreta abdução e rotação externa.\n\nQual é o diagnóstico mais provável e a conduta inicial?',
    options: [
      'Fratura de clavícula; imobilização com tipoia, sem necessidade de redução.',
      'Luxação anterior do ombro; redução incruenta (manobra de redução) sob sedação/analgesia, seguida de imobilização.',
      'Ruptura do manguito rotador isolada; fisioterapia como tratamento inicial, sem necessidade de redução.',
      'Fratura de úmero proximal impactada; apenas analgesia, sem necessidade de manobra de redução.'
    ],
    correctIndex: 1,
    explanation: 'O mecanismo de abdução e rotação externa forçada, associado ao "sinal da dragona" (perda do contorno arredondado do deltoide pela cabeça umeral deslocada), é característico da luxação anterior do ombro, a mais comum das luxações glenoumerais; a conduta inicial é a redução incruenta sob sedação/analgesia, seguida de imobilização e avaliação neurovascular antes e depois do procedimento.'
  },
  {
    id: 'enamed_inedita2_136',
    cycle: 'Internato',
    subject: 'Anestesiologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 30 anos, submetida a cesariana sob raquianestesia, desenvolve, no segundo dia de pós-operatório, cefaleia intensa, de caráter postural (piora ao sentar ou ficar em pé, melhora significativa em decúbito dorsal), associada a náuseas e discreta rigidez de nuca.\n\nQual é o diagnóstico mais provável e a fisiopatologia envolvida?',
    options: [
      'Enxaqueca puerperal; sem relação com o procedimento anestésico realizado.',
      'Cefaleia pós-punção dural, por perda de líquido cefalorraquidiano através do orifício da punção, gerando hipotensão liquórica.',
      'Meningite bacteriana pós-procedimento; hemocultura como exame prioritário, sem relação postural característica.',
      'Pré-eclâmpsia puerperal tardia; aferição de pressão arterial como única conduta necessária.'
    ],
    correctIndex: 1,
    explanation: 'Cefaleia de caráter postural (piora ao ortostatismo, melhora em decúbito), surgindo após procedimento com punção do espaço subaracnóideo (como a raquianestesia), é característica da cefaleia pós-punção dural, causada pela perda contínua de líquido cefalorraquidiano através do orifício da dura-máter, gerando hipotensão liquórica.'
  },
  {
    id: 'enamed_inedita2_137',
    cycle: 'Internato',
    subject: 'Cirurgia Vascular',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 58 anos, obesa, com longos períodos em pé no trabalho, relata sensação de peso e cansaço nas pernas ao final do dia, associada a veias dilatadas e tortuosas visíveis nas pernas, edema vespertino e uma lesão ulcerada, rasa, de bordas irregulares, na região do maléolo medial, presente há 2 meses.\n\nQual é o diagnóstico mais provável e a base do tratamento dessa úlcera?',
    options: [
      'Úlcera arterial isquêmica; revascularização como primeira medida terapêutica, sem uso de compressão nem de cuidados locais específicos.',
      'Úlcera venosa (por insuficiência venosa crônica); terapia compressiva (bandagem ou meia elástica) como base do tratamento, associada a cuidados locais da ferida.',
      'Úlcera neuropática diabética, geralmente indolor e em áreas de pressão plantar; descarga de peso isolada, sem necessidade de terapia compressiva.',
      'Pioderma gangrenoso; corticoterapia sistêmica como tratamento de primeira linha, sem necessidade de compressão.'
    ],
    correctIndex: 1,
    explanation: 'Veias varicosas, edema vespertino e úlcera rasa e irregular em região de maléolo medial (área de drenagem venosa comprometida) são característicos da úlcera venosa por insuficiência venosa crônica; a terapia compressiva é a base do tratamento, associada aos cuidados locais da ferida, diferentemente das úlceras arteriais, em que a compressão é contraindicada.'
  },
  {
    id: 'enamed_inedita2_138',
    cycle: 'Internato',
    subject: 'Neurocirurgia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 62 anos, com diagnóstico prévio de câncer de próstata metastático, apresenta dor lombar intensa e progressiva há 3 semanas, associada, nas últimas 48 horas, a fraqueza progressiva em ambos os membros inferiores e retenção urinária aguda.\n\nQual é a principal hipótese diagnóstica e a importância do reconhecimento precoce dessa condição?',
    options: [
      'Hérnia de disco lombar degenerativa comum, sem sinais de compressão medular progressiva; tratamento conservador com analgesia, sem urgência de investigação por imagem.',
      'Compressão medular metastática; emergência oncológica que exige ressonância magnética urgente e tratamento imediato (corticoide, radioterapia e/ou cirurgia) para preservar a função neurológica.',
      'Síndrome do piriforme; fisioterapia como tratamento de escolha, sem necessidade de exames de imagem urgentes nem de investigação para compressão medular.',
      'Espondilodiscite crônica, geralmente sem progressão rápida para déficit motor bilateral; antibioticoterapia oral ambulatorial, sem necessidade de investigação urgente.'
    ],
    correctIndex: 1,
    explanation: 'Dor lombar progressiva associada a déficit neurológico agudo (fraqueza em membros inferiores, retenção urinária) em paciente com câncer conhecido é fortemente sugestiva de compressão medular metastática, uma verdadeira emergência oncológica; o reconhecimento e tratamento precoces (corticoide em altas doses, seguido de radioterapia ou cirurgia descompressiva) são essenciais para preservar a função neurológica, que pode se tornar irreversível com o atraso no diagnóstico.'
  },
  {
    id: 'enamed_inedita2_139',
    cycle: 'Internato',
    subject: 'Medicina Intensiva',
    banca: 'ENAMED (inédita)',
    text: 'Paciente internado em unidade de terapia intensiva por pneumonia grave apresenta hipotensão persistente apesar de reposição volêmica adequada, necessitando de noradrenalina para manter pressão arterial média acima de 65 mmHg. Lactato sérico de 4,2 mmol/L (referência até 2).\n\nConsiderando os critérios atuais de definição de choque séptico, esse achado de lactato elevado, associado à necessidade de vasopressor, indica',
    options: [
      'hipoperfusão tecidual persistente, reforçando o diagnóstico de choque séptico e a gravidade do quadro, mesmo com pressão arterial média já corrigida pelo vasopressor.',
      'que o paciente já está fora de risco, uma vez que a pressão arterial média está sendo mantida adequadamente com o vasopressor, independentemente do lactato elevado.',
      'insuficiência hepática aguda isolada, sem relação com o quadro séptico, a perfusão tecidual ou a necessidade de vasopressor apresentada.',
      'que a reposição volêmica deve ser interrompida definitivamente, independentemente da resposta hemodinâmica e do lactato sérico elevado.'
    ],
    correctIndex: 0,
    explanation: 'O lactato elevado (acima de 2 mmol/L) associado à necessidade de vasopressor para manter a pressão arterial média, mesmo após reposição volêmica adequada, reforça o diagnóstico de choque séptico segundo os critérios de Sepsis-3, indicando hipoperfusão tecidual persistente e maior gravidade/mortalidade, exigindo monitorização e tratamento intensivos continuados.'
  },
  {
    id: 'enamed_inedita2_140',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Cirúrgica',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 40 anos, proveniente de área endêmica, relata febre, dor em hipocôndrio direito e hepatomegalia dolorosa há 2 semanas, associada a episódio prévio de diarreia há 1 mês. Ultrassonografia de abdome revela lesão cística única, de conteúdo heterogêneo, no lobo hepático direito. Sorologia para Entamoeba histolytica positiva.\n\nQual é o diagnóstico mais provável e o tratamento de escolha?',
    options: [
      'Cisto hidático hepático (equinococose); albendazol isoladamente, sem necessidade de drenagem em nenhum caso.',
      'Abscesso hepático amebiano; metronidazol como tratamento de escolha, reservando-se drenagem percutânea para casos selecionados (grandes abscessos ou risco de ruptura).',
      'Carcinoma hepatocelular; ressecção cirúrgica como único tratamento possível.',
      'Abscesso hepático piogênico bacteriano; drenagem cirúrgica aberta como conduta obrigatória em todos os casos, sem indicação de antibioticoterapia isolada.'
    ],
    correctIndex: 1,
    explanation: 'Febre, dor em hipocôndrio direito, hepatomegalia dolorosa e lesão cística hepática única, em paciente com sorologia positiva para Entamoeba histolytica e história de diarreia prévia, são característicos do abscesso hepático amebiano; o tratamento de escolha é o metronidazol, com drenagem percutânea reservada para abscessos grandes, refratários ao tratamento clínico ou com risco iminente de ruptura.'
  },
  {
    id: 'enamed_inedita2_141',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 30 semanas apresenta contrações uterinas regulares e dolorosas, a cada 5 minutos, associadas a modificação cervical (colo com 2 cm de dilatação e esvaecimento de 50%), sem sangramento ou rotura de membranas. Não há sinais de infecção ou sofrimento fetal.\n\nAlém da tocólise (para tentar postergar o parto), qual outra conduta é essencial nesse momento, visando o bem-estar do recém-nascido pré-termo?',
    options: [
      'Corticoterapia antenatal (betametasona ou dexametasona), para acelerar a maturidade pulmonar fetal.',
      'Cesárea imediata, independentemente da idade gestacional, para evitar o trabalho de parto pré-termo.',
      'Antibioticoterapia profilática para todos os casos de trabalho de parto pré-termo, independentemente da rotura de membranas.',
      'Nenhuma conduta adicional além da tocólise é necessária nessa idade gestacional.'
    ],
    correctIndex: 0,
    explanation: 'Diante de trabalho de parto pré-termo entre 24 e 34 semanas (aproximadamente), além da tentativa de tocólise, a corticoterapia antenatal é essencial para acelerar a maturidade pulmonar fetal, reduzindo significativamente o risco de síndrome do desconforto respiratório neonatal e outras complicações da prematuridade.'
  },
  {
    id: 'enamed_inedita2_142',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Gestante de 32 semanas, hipertensa crônica, apresenta altura uterina menor que a esperada para a idade gestacional em duas consultas consecutivas. Ultrassonografia obstétrica confirma peso fetal estimado abaixo do percentil 10 para a idade gestacional, com dopplervelocimetria de artéria umbilical mostrando aumento da resistência (índice de pulsatilidade elevado).\n\nQual é o diagnóstico mais provável e a importância da dopplervelocimetria nesse contexto?',
    options: [
      'Macrossomia fetal, achado oposto ao encontrado, com peso estimado acima do esperado para a idade gestacional; a dopplervelocimetria não teria relevância clínica nesse cenário específico.',
      'Restrição de crescimento fetal, provavelmente de origem placentária (relacionada à hipertensão materna); a dopplervelocimetria ajuda a monitorar o grau de comprometimento placentário e a definir o momento ideal para o parto.',
      'Erro de datação gestacional isolado; repetir a ultrassonografia em 4 semanas, sem necessidade de dopplervelocimetria nem de investigação adicional da placenta.',
      'Oligoâmnio isolado, sem alteração do índice de pulsatilidade da artéria umbilical nem restrição de crescimento associada, sem relação com a hipertensão materna.'
    ],
    correctIndex: 1,
    explanation: 'Altura uterina menor que o esperado, peso fetal estimado abaixo do percentil 10 e aumento da resistência na dopplervelocimetria da artéria umbilical, em gestante hipertensa, sugerem restrição de crescimento fetal de origem placentária; a dopplervelocimetria é fundamental para monitorar o grau de comprometimento fetal e auxiliar na decisão do momento mais seguro para a interrupção da gestação.'
  },
  {
    id: 'enamed_inedita2_143',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 7 anos, com história prévia de reação alérgica grave (edema de glote) a picada de abelha, é acompanhada por alergologista e possui prescrição de adrenalina autoinjetável para uso em emergências.\n\nQual é a orientação correta sobre o uso desse dispositivo para os pais e cuidadores da criança?',
    options: [
      'Utilizar a adrenalina autoinjetável apenas se os sintomas iniciais não melhorarem após 1 hora de observação domiciliar, aguardando evolução antes de buscar atendimento.',
      'Administrar a adrenalina autoinjetável imediatamente ao primeiro sinal de reação alérgica sistêmica após nova picada, e procurar atendimento de emergência em seguida, mesmo que os sintomas melhorem inicialmente.',
      'Guardar o dispositivo para uso exclusivo por profissionais de saúde, nunca pelos pais ou cuidadores, mesmo diante de reação alérgica grave em ambiente domiciliar.',
      'Utilizar apenas anti-histamínico oral inicialmente, reservando a adrenalina para casos de parada cardiorrespiratória já instalada, sem administração precoce.'
    ],
    correctIndex: 1,
    explanation: 'Em crianças com história de anafilaxia prévia e prescrição de adrenalina autoinjetável, a orientação é administrar o dispositivo imediatamente ao primeiro sinal de reação alérgica sistêmica após nova exposição ao alérgeno, buscando atendimento de emergência em seguida, mesmo que haja melhora inicial, pelo risco de reação bifásica (recorrência dos sintomas horas depois).'
  },
  {
    id: 'enamed_inedita2_144',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Recém-nascido apresenta, ao exame físico na maternidade, hipotonia importante, fissuras palpebrais oblíquas para cima, prega palmar única transversa (prega simiesca), baixa implantação de orelhas e occipital achatado. A equipe suspeita de síndrome de Down e solicita cariótipo para confirmação.\n\nAlém da confirmação cariotípica, qual exame deve ser solicitado rotineiramente nesse recém-nascido, dada a alta prevalência de uma comorbidade associada à síndrome?',
    options: [
      'Radiografia de tórax, exclusivamente, para avaliar apenas o tamanho cardíaco, sem investigar defeitos estruturais específicos do septo.',
      'Ecocardiograma, pela alta prevalência de cardiopatias congênitas (como defeito do septo atrioventricular) associadas à síndrome de Down.',
      'Ressonância magnética de crânio, como exame de triagem obrigatório em todo recém-nascido com síndrome de Down.',
      'Endoscopia digestiva alta, como exame de rotina obrigatório antes da alta da maternidade.'
    ],
    correctIndex: 1,
    explanation: 'Recém-nascidos com síndrome de Down apresentam alta prevalência de cardiopatias congênitas (especialmente o defeito do septo atrioventricular), justificando a realização rotineira de ecocardiograma, mesmo na ausência de sintomas cardíacos evidentes ao exame físico inicial.'
  },
  {
    id: 'enamed_inedita2_145',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 28 anos, planejando engravidar nos próximos meses, procura Unidade Básica de Saúde para orientação pré-concepcional. Nega comorbidades ou uso de medicações contínuas.\n\nQual suplementação deve ser recomendada antes da concepção, para reduzir o risco de defeitos do tubo neural no futuro bebê?',
    options: [
      'Sulfato ferroso em altas doses, iniciado apenas após a confirmação da gravidez.',
      'Ácido fólico, idealmente iniciado pelo menos 30 dias antes da concepção e mantido no primeiro trimestre.',
      'Vitamina A em altas doses, iniciada imediatamente, independentemente do momento da concepção.',
      'Cálcio isoladamente, sem necessidade de suplementação de ácido fólico nesse momento.'
    ],
    correctIndex: 1,
    explanation: 'A suplementação de ácido fólico, iniciada idealmente pelo menos 30 dias antes da concepção e mantida durante o primeiro trimestre, reduz significativamente o risco de defeitos do tubo neural (como espinha bífida e anencefalia) no feto, sendo uma orientação central do aconselhamento pré-concepcional.'
  },
  {
    id: 'enamed_inedita2_146',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 62 anos, tabagista de 45 maços/ano, ainda fumante atual, procura Unidade Básica de Saúde para avaliação de rotina, assintomático do ponto de vista respiratório.\n\nConsiderando as recomendações de rastreamento de câncer de pulmão para população de alto risco, a conduta adequada é',
    options: [
      'não há indicação de rastreamento para câncer de pulmão em nenhuma situação, apenas diagnóstico após o surgimento de sintomas respiratórios.',
      'solicitar tomografia computadorizada de tórax de baixa dose anualmente, dado o perfil de alto risco (idade e carga tabágica elevada).',
      'solicitar apenas radiografia de tórax anual, por ser considerado o método definitivo de rastreamento populacional para câncer de pulmão.',
      'solicitar broncoscopia de rastreamento anual, independentemente de sintomas ou do perfil de risco tabágico apresentado pelo paciente.'
    ],
    correctIndex: 1,
    explanation: 'Em indivíduos de alto risco para câncer de pulmão (geralmente definido por idade entre 50-80 anos e carga tabágica elevada, como 20-30 maços/ano ou mais, fumantes atuais ou que pararam há menos de 15 anos), recomenda-se o rastreamento anual com tomografia computadorizada de tórax de baixa dose, que demonstrou redução de mortalidade nessa população.'
  },
  {
    id: 'enamed_inedita2_147',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 22 anos, com peso corporal dentro da faixa normal, relata episódios recorrentes de ingestão compulsiva de grandes quantidades de alimento em curto período de tempo, associados à sensação de perda de controle, seguidos de vômitos autoinduzidos e uso excessivo de laxantes, como forma de compensar as "compulsões" e evitar ganho de peso, com frequência de pelo menos 2 vezes por semana nos últimos 4 meses.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Anorexia nervosa do tipo purgativo.',
      'Bulimia nervosa.',
      'Transtorno de compulsão alimentar periódica (binge eating disorder), sem comportamentos compensatórios.',
      'Transtorno de ruminação.'
    ],
    correctIndex: 1,
    explanation: 'Episódios recorrentes de compulsão alimentar associados a comportamentos compensatórios inadequados (vômitos autoinduzidos, uso de laxantes), com peso corporal geralmente dentro da faixa normal (diferentemente da anorexia nervosa, que cursa com baixo peso significativo), caracterizam a bulimia nervosa.'
  },
  {
    id: 'enamed_inedita2_148',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 55 anos, vivendo com HIV, com contagem de CD4+ de 80 células/mm³, apresenta lesões cutâneas extensas, com crostas espessas e hiperceratóticas, disseminadas por todo o corpo, incluindo couro cabeludo e unhas, com prurido variável (por vezes ausente). Exame direto das escamas revela grande quantidade de ácaros Sarcoptes scabiei.\n\nQual é essa forma atípica e grave de escabiose, característica de pacientes imunossuprimidos, e qual sua importância epidemiológica?',
    options: [
      'Escabiose nodular; forma benigna e localizada, sem importância epidemiológica adicional em relação à escabiose comum.',
      'Escabiose crostosa (sarna norueguesa); forma altamente contagiosa, pela enorme carga parasitária, exigindo isolamento de contato e tratamento agressivo.',
      'Escabiose bolhosa; variante rara sem relação com imunossupressão, tratada apenas com corticoide tópico.',
      'Pediculose corporal disseminada; diagnóstico alternativo, sem relação com o achado de Sarcoptes scabiei.'
    ],
    correctIndex: 1,
    explanation: 'A escabiose crostosa (sarna norueguesa), caracterizada por lesões hiperceratóticas extensas e altíssima carga parasitária, ocorre predominantemente em pacientes imunossuprimidos; é altamente contagiosa (mesmo com contato breve), exigindo isolamento de contato rigoroso e tratamento agressivo (tópico e sistêmico, com ivermectina oral).'
  },
  {
    id: 'enamed_inedita2_149',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 40 anos, trabalhador rural, procura atendimento com febre alta, cefaleia intensa, mialgia, e queda progressiva das três séries do hemograma (leucopenia, plaquetopenia e, em menor grau, anemia), após relato de múltiplas picadas de carrapato durante atividade de campo há 10 dias. Exames hepáticos com discreta elevação de transaminases.\n\nQual é a principal hipótese diagnóstica a ser considerada nesse contexto epidemiológico?',
    options: [
      'Dengue clássica, geralmente sem pancitopenia tão pronunciada; sem relação direta com a exposição a carrapatos relatada.',
      'Erliquiose (doença transmitida por carrapatos), com pancitopenia e elevação leve de transaminases como achados característicos.',
      'Leptospirose, transmitida por contato com urina de roedores, sem relação com exposição a carrapatos.',
      'Febre tifoide, transmitida exclusivamente por água ou alimentos contaminados, sem relação com picadas de carrapato ou pancitopenia.'
    ],
    correctIndex: 1,
    explanation: 'Febre, cefaleia, mialgia, pancitopenia (leucopenia, plaquetopenia, anemia leve) e elevação discreta de transaminases, em paciente com histórico de exposição a carrapatos em atividade rural, são sugestivos de erliquiose, uma doença bacteriana transmitida por carrapatos, tratada com doxiciclina.'
  },
  {
    id: 'enamed_inedita2_150',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 62 anos, hipertenso de longa data e mal controlado, procura emergência com dor torácica súbita, intensa, descrita como "rasgando" ou "dilacerante", com irradiação para a região interescapular (dorso). Ao exame, pressão arterial de 190 x 110 mmHg no braço direito e 150 x 90 mmHg no braço esquerdo, com déficit de pulso entre os membros.\n\nQual é o diagnóstico mais provável e o exame de imagem de escolha para confirmação em paciente hemodinamicamente estável?',
    options: [
      'Infarto agudo do miocárdio; cateterismo cardíaco de urgência como único exame necessário.',
      'Dissecção aguda de aorta; angiotomografia de aorta (tórax e abdome) como exame de escolha para confirmação diagnóstica.',
      'Pericardite aguda; ecocardiograma transtorácico isolado é suficiente para excluir a principal hipótese diagnóstica.',
      'Embolia pulmonar; cintilografia pulmonar ventilação-perfusão como exame de escolha nesse cenário.'
    ],
    correctIndex: 1,
    explanation: 'Dor torácica súbita e intensa, com caráter "dilacerante" e irradiação para o dorso, associada a assimetria de pulsos e pressão arterial entre os membros, é altamente sugestiva de dissecção aguda de aorta; a angiotomografia de aorta é o exame de escolha para confirmação diagnóstica em pacientes hemodinamicamente estáveis.'
  },
  {
    id: 'enamed_inedita2_151',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 55 anos, com colelitíase conhecida, é internada com dor epigástrica intensa irradiada para o dorso, náuseas e vômitos. Exames: lipase sérica 5 vezes acima do limite superior da normalidade, confirmando pancreatite aguda. Na admissão, apresenta idade acima de 55 anos, leucocitose acima de 16.000/mm³ e glicemia acima de 200 mg/dL.\n\nEsses critérios avaliados na admissão fazem parte de qual sistema de estratificação prognóstica da pancreatite aguda, amplamente utilizado na prática clínica?',
    options: ['Escore de Child-Pugh.', 'Critérios de Ranson.', 'Escore de Glasgow-Blatchford.', 'Classificação de Los Angeles.'],
    correctIndex: 1,
    explanation: 'Os critérios de Ranson avaliam parâmetros clínicos e laboratoriais na admissão (incluindo idade, leucocitose e glicemia) e após 48 horas, para estratificar a gravidade e o prognóstico da pancreatite aguda, sendo um dos sistemas de escore mais tradicionalmente utilizados, apesar de existirem outros escores mais modernos (como o BISAP e o APACHE II).'
  },
  {
    id: 'enamed_inedita2_152',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 35 anos, após episódio de vômitos intensos e repetidos secundários a uma intoxicação alimentar, apresenta hematêmese de pequeno a moderado volume, com sangue vivo, logo após os últimos episódios de vômito. Endoscopia digestiva alta revela laceração linear na transição esofagogástrica, sem sangramento ativo no momento do exame.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Varizes esofágicas rotas, associadas a hipertensão portal subjacente, geralmente sem relação direta com episódios agudos de vômitos vigorosos.',
      'Síndrome de Mallory-Weiss (laceração da mucosa da transição esofagogástrica por vômitos vigorosos).',
      'Síndrome de Boerhaave, ruptura transmural completa do esôfago, geralmente com dor torácica intensa e enfisema subcutâneo, quadro mais grave que o descrito.',
      'Úlcera péptica duodenal sangrante, sem relação com o episódio de vômitos.'
    ],
    correctIndex: 1,
    explanation: 'Hematêmese após episódios de vômitos vigorosos e repetidos, com laceração linear da mucosa na transição esofagogástrica identificada à endoscopia, é característica da síndrome de Mallory-Weiss, geralmente autolimitada e sem necessidade de intervenção além do suporte clínico na maioria dos casos.'
  },
  {
    id: 'enamed_inedita2_153',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 35 anos relata episódios de dor unilateral periorbitária extremamente intensa, de início súbito, com duração de 30 a 90 minutos, ocorrendo várias vezes ao dia por um período de 6 semanas, associados a lacrimejamento, congestão nasal e ptose no mesmo lado da dor. Os episódios ocorrem quase sempre no mesmo horário, incluindo despertar noturno.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Enxaqueca com aura, pelo padrão de dor unilateral intensa.',
      'Cefaleia em salvas (cluster headache).',
      'Neuralgia do trigêmeo, pela localização periorbitária da dor.',
      'Cefaleia tensional episódica, dada a frequência elevada dos episódios.'
    ],
    correctIndex: 1,
    explanation: 'Dor unilateral periorbitária extremamente intensa, de curta duração, com sintomas autonômicos ipsilaterais (lacrimejamento, congestão nasal, ptose), ocorrendo em salvas (múltiplos episódios diários por semanas, com padrão circadiano/despertar noturno), é característica da cefaleia em salvas.'
  },
  {
    id: 'enamed_inedita2_154',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 45 anos, digitadora, relata dormência e formigamento nos três primeiros dedos da mão direita (polegar, indicador e médio), com piora noturna, que a acorda e melhora ao "sacudir a mão". Manobra de Tinel (percussão sobre o punho) reproduz os sintomas.\n\nQual é o diagnóstico mais provável e o nervo comprometido?',
    options: [
      'Síndrome do túnel cubital; compressão do nervo ulnar no cotovelo.',
      'Síndrome do túnel do carpo; compressão do nervo mediano ao nível do punho.',
      'Radiculopatia cervical C8-T1; compressão radicular na coluna cervical.',
      'Síndrome do desfiladeiro torácico; compressão do plexo braquial na região cervicotorácica.'
    ],
    correctIndex: 1,
    explanation: 'Parestesias nos três primeiros dedos da mão (território do nervo mediano), com piora noturna e sinal de Tinel positivo no punho, são característicos da síndrome do túnel do carpo, causada pela compressão do nervo mediano no túnel do carpo, comum em atividades repetitivas manuais.'
  },
  {
    id: 'enamed_inedita2_155',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 38 anos relata fadiga, ganho de peso discreto e constipação nos últimos meses. Ao exame, bócio difuso, indolor, de consistência firme. Exames: TSH elevado, T4 livre discretamente reduzido, anticorpo antiperoxidase tireoidiana (anti-TPO) fortemente positivo.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Doença de Graves, causa mais comum de hipertireoidismo autoimune.',
      'Tireoidite de Hashimoto, principal causa de hipotireoidismo autoimune em áreas com suficiência de iodo.',
      'Tireoidite subaguda de De Quervain, geralmente dolorosa e autolimitada.',
      'Bócio multinodular tóxico, geralmente associado a hipertireoidismo, não hipotireoidismo.'
    ],
    correctIndex: 1,
    explanation: 'Bócio difuso, indolor, associado a hipotireoidismo (TSH elevado, T4 livre baixo) e anticorpo antiperoxidase tireoidiana fortemente positivo, são característicos da tireoidite de Hashimoto, a principal causa de hipotireoidismo autoimune em áreas com suficiência de iodo.'
  },
  {
    id: 'enamed_inedita2_156',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 75 anos, com doença renal crônica, apresenta dor, edema e hiperemia súbitos em joelho direito, sem febre importante. Artrocentese revela líquido sinovial com cristais em formato de losango (romboides), birrefringência fracamente positiva sob luz polarizada.\n\nQual é o diagnóstico mais provável, e como esses achados diferem da gota úrica clássica?',
    options: [
      'Gota úrica, geralmente com dor mais intensa e de início mais abrupto; cristais de urato monossódico, com birrefringência fortemente negativa sob luz polarizada.',
      'Condrocalcinose (doença por depósito de pirofosfato de cálcio, pseudogota); cristais de pirofosfato de cálcio, com birrefringência fracamente positiva, diferentemente dos cristais de urato da gota (birrefringência negativa).',
      'Artrite séptica, geralmente com líquido sinovial turvo e cultura positiva; presença de bactérias no líquido sinovial, sem relação com os cristais romboides descritos.',
      'Artrite reumatoide, geralmente com acometimento poliarticular simétrico e fator reumatoide positivo; ausência completa de cristais no líquido sinovial.'
    ],
    correctIndex: 1,
    explanation: 'A presença de cristais em formato romboide, com birrefringência fracamente positiva sob luz polarizada, é característica da condrocalcinose (pseudogota, por depósito de pirofosfato de cálcio), diferenciando-se dos cristais de urato monossódico da gota, que são em formato de agulha e apresentam birrefringência fortemente negativa.'
  },
  {
    id: 'enamed_inedita2_157',
    cycle: 'Ciclo Clínico',
    subject: 'Geriatria',
    banca: 'ENAMED (inédita)',
    text: 'Idoso de 82 anos, internado por infecção urinária, é avaliado pela equipe médica e considerado "calmo e cooperativo", sem agitação, mas a filha relata que o pai está "diferente", mais quieto, sonolento durante o dia, com dificuldade de manter conversa e desatento, sintomas que começaram há 2 dias e variam ao longo do dia.\n\nEssa apresentação, frequentemente subdiagnosticada por não envolver agitação, corresponde a qual forma de delirium?',
    options: [
      'Delirium hiperativo, forma mais facilmente reconhecida clinicamente.',
      'Delirium hipoativo, forma frequentemente subdiagnosticada, por se confundir com depressão ou apenas "cansaço" do idoso.',
      'Delirium misto, caracterizado exclusivamente por agitação intercalada com sonolência extrema, sem desatenção.',
      'Não se trata de delirium, pois a ausência de agitação exclui esse diagnóstico.'
    ],
    correctIndex: 1,
    explanation: 'O delirium hipoativo, caracterizado por sonolência, lentificação psicomotora e retraimento (sem agitação), é frequentemente subdiagnosticado, pois pode ser confundido com depressão, fadiga ou até considerado "comportamento esperado" no idoso hospitalizado, apesar de ter a mesma gravidade prognóstica do delirium hiperativo.'
  },
  {
    id: 'enamed_inedita2_158',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    banca: 'ENAMED (inédita)',
    text: 'Um estudo de caso-controle avaliou a associação entre o uso de determinado medicamento e a ocorrência de uma reação adversa rara. Entre os 100 casos (pacientes com a reação adversa), 40 haviam usado o medicamento. Entre os 200 controles (sem a reação adversa), 20 haviam usado o medicamento.\n\nCom base nesses dados, a razão de chances (odds ratio) aproximada dessa associação é',
    options: ['1,0 (sem associação).', 'Aproximadamente 6,0.', 'Aproximadamente 0,5.', 'Aproximadamente 2,0.'],
    correctIndex: 1,
    explanation: 'A odds ratio é calculada como (a/c) / (b/d), onde a=expostos com desfecho (40), b=expostos sem desfecho (20), c=não expostos com desfecho (60), d=não expostos sem desfecho (180). OR = (40x180)/(20x60) = 7200/1200 = 6,0, indicando associação positiva entre o uso do medicamento e a reação adversa.'
  },
  {
    id: 'enamed_inedita2_159',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 24 anos, obeso, com histórico de pelos encravados na região sacrococcígea, procura emergência com dor intensa, edema e saída de secreção purulenta por um orifício na linha média da região interglútea, associada a febre baixa.\n\nQual é o diagnóstico mais provável e a conduta adequada nessa fase aguda?',
    options: [
      'Fístula anal, geralmente associada a abscesso perianal prévio; fistulotomia eletiva ambulatorial, sem necessidade de drenagem de urgência nesse momento.',
      'Cisto pilonidal infectado (abscesso pilonidal); incisão e drenagem do abscesso, com tratamento cirúrgico definitivo eletivo posterior.',
      'Hidradenite supurativa, geralmente com múltiplos nódulos em áreas intertriginosas; apenas antibioticoterapia oral, sem necessidade de drenagem cirúrgica.',
      'Carúncula uretral, lesão benigna do meato uretral feminino; observação clínica, sem necessidade de intervenção cirúrgica nesse quadro.'
    ],
    correctIndex: 1,
    explanation: 'Dor, edema e drenagem purulenta por orifício na linha média da região sacrococcígea, associados a febre, caracterizam abscesso pilonidal agudo; a conduta na fase aguda é a incisão e drenagem do abscesso, reservando-se o tratamento cirúrgico definitivo (excisão do trajeto) para um momento eletivo posterior.'
  },
  {
    id: 'enamed_inedita2_160',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Jovem de 20 anos, usuário de cadeira de rodas por lesão medular, relata dificuldade de acesso físico à Unidade Básica de Saúde de sua área, pois a entrada possui apenas escadas, sem rampa de acesso, e a sala de exames não comporta a maca adaptada necessária para seu atendimento adequado.\n\nEssa situação representa uma barreira relacionada a qual dimensão do acesso aos serviços de saúde?',
    options: [
      'Acessibilidade organizacional, relacionada exclusivamente aos horários de funcionamento e à forma de agendamento das consultas no serviço.',
      'Acessibilidade geográfica, relacionada à distância entre o domicílio e o serviço de saúde, sem relação com barreiras arquitetônicas.',
      'Acessibilidade física (arquitetônica), relacionada às barreiras estruturais que impedem o acesso pleno de pessoas com deficiência aos serviços de saúde.',
      'Acessibilidade econômica, relacionada ao custo do transporte e das eventuais taxas cobradas até o serviço de saúde.'
    ],
    correctIndex: 2,
    explanation: 'A ausência de rampas de acesso e estrutura física adaptada para pessoas com deficiência configura uma barreira de acessibilidade física (arquitetônica), que compromete o direito ao acesso pleno e equitativo aos serviços de saúde, sendo um aspecto importante a ser garantido pelas unidades de saúde segundo os princípios de equidade do SUS.'
  },
  {
    id: 'enamed_inedita2_161',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 68 anos relata prurido vulvar crônico há mais de 1 ano, tratado repetidamente como "candidíase de repetição" sem melhora consistente. Ao exame, lesão vulvar única, ulcerada, de bordas elevadas e endurecidas, na região do grande lábio direito, não responsiva aos tratamentos tópicos prévios.\n\nDiante da cronicidade e refratariedade do quadro, qual é a conduta mais apropriada?',
    options: [
      'Manter tratamento antifúngico tópico por mais 3 meses, antes de considerar outras hipóteses.',
      'Realizar biópsia da lesão vulvar, para afastar câncer de vulva, dado o caráter crônico, refratário e as características suspeitas da lesão.',
      'Prescrever corticoide tópico potente isoladamente, sem necessidade de biópsia nesse momento.',
      'Orientar apenas medidas de higiene íntima, sem necessidade de biópsia ou outros tratamentos.'
    ],
    correctIndex: 1,
    explanation: 'Prurido vulvar crônico refratário, associado a lesão ulcerada de bordas elevadas e endurecidas, especialmente em mulher idosa, deve levantar suspeita de câncer de vulva; a biópsia é essencial para diagnóstico diferencial, evitando tratamentos empíricos repetidos e prolongados sem confirmação diagnóstica.'
  },
  {
    id: 'enamed_inedita2_162',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 24 anos, sexualmente ativa, com múltiplos parceiros e uso inconsistente de preservativo, procura emergência com dor pélvica bilateral há 5 dias, associada a corrimento vaginal purulento e febre. Ao exame especular, cervicite purulenta; ao toque, dor importante à mobilização do colo uterino e dos anexos bilateralmente (sinal do candelabro/Chandelier positivo).\n\nQual é o diagnóstico mais provável e a conduta terapêutica?',
    options: [
      'Apendicite aguda; avaliação cirúrgica exclusiva, sem necessidade de antibioticoterapia direcionada a IST.',
      'Doença inflamatória pélvica; antibioticoterapia de amplo espectro cobrindo Neisseria gonorrhoeae, Chlamydia trachomatis e anaeróbios.',
      'Endometriose pélvica, geralmente sem febre ou corrimento purulento associado; apenas analgesia, sem necessidade de antibioticoterapia.',
      'Cistite aguda, geralmente sem dor à mobilização do colo uterino; antibioticoterapia dirigida exclusivamente para infecção urinária baixa.'
    ],
    correctIndex: 1,
    explanation: 'Dor pélvica bilateral, cervicite purulenta e dor à mobilização do colo e anexos (sinal de Chandelier) em mulher jovem sexualmente ativa são característicos de doença inflamatória pélvica; o tratamento é a antibioticoterapia de amplo espectro, cobrindo os principais agentes causadores (gonococo, clamídia) e anaeróbios.'
  },
  {
    id: 'enamed_inedita2_163',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 2 anos apresenta, após 2 dias de coriza e febre baixa, tosse metálica ("de cachorro"), rouquidão e estridor inspiratório audível mesmo em repouso, que piora quando a criança chora. Não apresenta sialorreia nem toxemia importante.\n\nQual é o diagnóstico mais provável e o tratamento de primeira linha?',
    options: [
      'Epiglotite aguda; intubação orotraqueal profilática imediata, independentemente da gravidade clínica.',
      'Laringotraqueíte viral aguda (crupe); corticoide sistêmico (dexametasona), com nebulização de adrenalina reservada para casos moderados a graves.',
      'Corpo estranho em via aérea; broncoscopia rígida de urgência, sem necessidade de tratamento clínico prévio.',
      'Traqueíte bacteriana, geralmente com toxemia mais importante que a descrita; antibioticoterapia isolada, sem necessidade de corticoide sistêmico.'
    ],
    correctIndex: 1,
    explanation: 'Tosse metálica, rouquidão e estridor inspiratório, após pródromo viral, sem toxemia importante ou sialorreia (que sugeririam epiglotite), são característicos da laringotraqueíte viral aguda (crupe); o tratamento de primeira linha é o corticoide sistêmico (dexametasona), reservando-se a nebulização com adrenalina para casos moderados a graves com estridor em repouso.'
  },
  {
    id: 'enamed_inedita2_164',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 4 anos, com esquema vacinal incompleto, é levada à emergência com início súbito de febre alta, toxemia importante, sialorreia intensa (dificuldade para engolir a própria saliva), voz abafada e posição preferencial sentada com o pescoço estendido e o corpo inclinado para frente ("posição do tripé").\n\nQual é o diagnóstico mais provável e a conduta prioritária, evitando manobras que possam precipitar obstrução total da via aérea?',
    options: [
      'Laringotraqueíte viral (crupe); nebulização com adrenalina em ambiente ambulatorial, sem necessidade de outras medidas.',
      'Epiglotite aguda; evitar exame de orofaringe com espátula e manipulação desnecessária, mantendo a criança calma, com preparo imediato para via aérea avançada em ambiente controlado.',
      'Faringoamigdalite bacteriana; antibiótico oral ambulatorial, sem necessidade de intervenção em via aérea ou preparo para via aérea avançada.',
      'Abscesso retrofaríngeo; apenas antitérmico e analgesia, sem necessidade de avaliação urgente de via aérea nesse cenário clínico.'
    ],
    correctIndex: 1,
    explanation: 'Toxemia importante, sialorreia, voz abafada e posição do tripé em criança com vacinação incompleta (risco de Haemophilus influenzae tipo b) são o quadro clássico de epiglotite aguda, uma emergência de via aérea; deve-se evitar manipulação da orofaringe (que pode precipitar obstrução total) e manter a criança calma, com preparo imediato para via aérea avançada em ambiente controlado, idealmente centro cirúrgico.'
  },
  {
    id: 'enamed_inedita2_165',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Lactente de 8 meses apresenta lesões eritematosas, com pele seca e escamativa, pruriginosas, localizadas principalmente em face (bochechas) e superfícies extensoras dos membros, com história familiar de asma e rinite alérgica.\n\nQual é o diagnóstico mais provável e o pilar do tratamento?',
    options: [
      'Escabiose, geralmente com lesões em espaços interdigitais e sem história familiar atópica; permetrina tópica como tratamento de escolha.',
      'Dermatite atópica; hidratação cutânea regular (emolientes) como pilar do tratamento, associada a corticoide tópico de baixa potência nas crises.',
      'Dermatite seborreica, geralmente com escamas oleosas em couro cabeludo; xampu antifúngico como tratamento principal nesse quadro.',
      'Psoríase infantil; fototerapia como primeira linha de tratamento nessa faixa etária, sem relação com história familiar atópica.'
    ],
    correctIndex: 1,
    explanation: 'Lesões eczematosas pruriginosas em face e superfícies extensoras em lactentes (padrão que muda para flexuras em crianças maiores), associadas a história familiar atópica (asma, rinite), são características da dermatite atópica; o pilar do tratamento é a hidratação cutânea regular com emolientes, associada a corticoide tópico de baixa potência durante as crises.'
  },
  {
    id: 'enamed_inedita2_166',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 3 anos é levada à emergência com febre alta de início súbito, letargia rapidamente progressiva e aparecimento de lesões purpúricas que se espalham rapidamente pelo corpo, com algumas áreas já necróticas, associadas a hipotensão e má perfusão periférica.\n\nQual é o diagnóstico mais provável e a conduta imediata prioritária?',
    options: [
      'Púrpura de Henoch-Schönlein, geralmente sem toxemia grave ou hipotensão associada; apenas anti-inflamatório, sem necessidade de antibioticoterapia urgente.',
      'Púrpura fulminante por sepse meningocócica; antibioticoterapia empírica imediata (mesmo antes de exames confirmatórios) e suporte hemodinâmico agressivo.',
      'Púrpura trombocitopênica imune, geralmente sem febre ou toxemia associadas; apenas observação clínica, sem necessidade de antibioticoterapia urgente.',
      'Dermatite de contato grave; corticoide tópico potente, sem necessidade de internação urgente nem de antibioticoterapia sistêmica.'
    ],
    correctIndex: 1,
    explanation: 'Febre de início súbito, rápida progressão para letargia, lesões purpúricas que se espalham rapidamente (algumas necróticas) e choque são o quadro clássico de púrpura fulminante por sepse meningocócica, uma emergência com altíssima mortalidade; a antibioticoterapia deve ser iniciada imediatamente, associada a suporte hemodinâmico agressivo, sem aguardar confirmação laboratorial.'
  },
  {
    id: 'enamed_inedita2_167',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 30 anos, morador de área endêmica com histórico de banhos frequentes em rio de água doce, apresenta hepatoesplenomegalia importante, ascite discreta e circulação colateral no abdome, além de eosinofilia significativa no hemograma. Relata episódio de dermatite pruriginosa nos pés logo após um dos banhos, anos atrás.\n\nQual é a principal hipótese diagnóstica?',
    options: [
      'Cirrose hepática alcoólica, sem relação com a exposição a águas contaminadas.',
      'Esquistossomose mansônica em fase crônica (hepatoesplênica), relacionada à exposição a água doce contaminada por cercárias.',
      'Hepatite viral crônica isolada, geralmente sem eosinofilia significativa; sem relação direta com a exposição a águas contaminadas relatada.',
      'Leishmaniose visceral, geralmente sem eosinofilia proeminente e transmitida por flebotomíneos; sem relação com a exposição a águas contaminadas.'
    ],
    correctIndex: 1,
    explanation: 'Hepatoesplenomegalia, sinais de hipertensão portal, eosinofilia e história de dermatite pruriginosa após banho em água doce (dermatite cercariana, porta de entrada da larva) em área endêmica são característicos da esquistossomose mansônica em sua forma crônica hepatoesplênica.'
  },
  {
    id: 'enamed_inedita2_168',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 45 anos, com história de febre reumática na infância, relata dispneia progressiva aos esforços e palpitações. Ausculta cardíaca revela ruflar diastólico em foco mitral, com hiperfonese de primeira bulha (B1) e estalido de abertura. Eletrocardiograma mostra fibrilação atrial.\n\nQual é o diagnóstico mais provável e o exame de escolha para sua confirmação?',
    options: [
      'Insuficiência mitral, geralmente com sopro holossistólico irradiado para axila; ressonância magnética cardíaca como exame de escolha para confirmação.',
      'Estenose mitral, sequela de febre reumática; ecocardiograma transtorácico com Doppler como exame de escolha para confirmação e quantificação.',
      'Prolapso de valva mitral, geralmente com click mesossistólico característico; teste ergométrico como exame confirmatório nesse contexto.',
      'Comunicação interatrial; cateterismo cardíaco direito isolado como exame de escolha, sem relação com o quadro valvar descrito.'
    ],
    correctIndex: 1,
    explanation: 'Ruflar diastólico em foco mitral, hiperfonese de B1, estalido de abertura e fibrilação atrial, em paciente com história de febre reumática, são característicos de estenose mitral, sequela valvar clássica da febre reumática; o ecocardiograma transtorácico com Doppler é o exame de escolha para confirmação e quantificação da gravidade.'
  },
  {
    id: 'enamed_inedita2_169',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 7 anos apresenta, há 4 meses, sofrimento excessivo e recorrente quando antecipa ou vivencia separação dos pais (recusa em ir à escola, queixas físicas nos dias letivos, pesadelos com temática de separação, medo excessivo de que algo ruim aconteça aos pais quando estão longe), causando prejuízo funcional significativo.\n\nQual é o diagnóstico mais provável?',
    options: [
      'Transtorno de ansiedade generalizada, pela presença de preocupações excessivas em múltiplos domínios.',
      'Transtorno de ansiedade de separação, caracterizado por ansiedade excessiva relacionada à separação de figuras de apego.',
      'Fobia escolar isolada, sem relação com ansiedade de separação dos pais.',
      'Transtorno do espectro autista, dada a recusa escolar apresentada.'
    ],
    correctIndex: 1,
    explanation: 'Ansiedade excessiva e recorrente relacionada à separação de figuras de apego (pais), com recusa escolar, queixas físicas antecipatórias, pesadelos temáticos e medo de que algo aconteça aos pais, é característica do transtorno de ansiedade de separação, comum na infância.'
  },
  {
    id: 'enamed_inedita2_170',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 50 anos, em investigação por episódios recorrentes de rubor facial súbito, diarreia aquosa e sibilância, sem relação clara com alimentos, é diagnosticado com uma lesão em intestino delgado após exames de imagem. Dosagem de ácido 5-hidroxiindolacético (5-HIAA) urinário está muito elevada.\n\nQual é a principal hipótese diagnóstica?',
    options: [
      'Adenocarcinoma de intestino delgado, sem relação com os sintomas sistêmicos descritos.',
      'Tumor carcinoide, com síndrome carcinoide associada, geralmente após metástase hepática.',
      'Doença de Crohn com acometimento ileal isolado, sem relação com os achados laboratoriais descritos.',
      'Linfoma intestinal primário, sem relação com os sintomas de rubor e diarreia.'
    ],
    correctIndex: 1,
    explanation: 'Episódios de rubor facial (flushing), diarreia e sibilância, associados a 5-HIAA urinário elevado (metabólito da serotonina), são característicos da síndrome carcinoide, geralmente decorrente de um tumor carcinoide com metástases hepáticas, que permitem que os mediadores tumorais atinjam a circulação sistêmica sem serem metabolizados pelo fígado.'
  },
  {
    id: 'enamed_inedita2_171',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 28 anos relata um episódio de perda visual parcial e dor à movimentação do olho esquerdo há 8 meses, com recuperação quase completa em algumas semanas. Agora apresenta novo episódio de fraqueza e formigamento no membro inferior direito, associado a alteração do equilíbrio. Ressonância magnética de crânio e medula mostra múltiplas lesões desmielinizantes, em diferentes topografias e com diferentes idades (algumas captando contraste, outras não).\n\nQual é o diagnóstico mais provável, considerando a disseminação dos eventos no tempo e no espaço?',
    options: [
      'Neuromielite óptica isolada, geralmente com acometimento medular extenso e sem disseminação temporal característica; sem outros episódios neurológicos anteriores relatados.',
      'Esclerose múltipla, caracterizada por episódios neurológicos disseminados no tempo e no espaço, com lesões desmielinizantes de diferentes idades na ressonância.',
      'Acidente vascular encefálico de repetição, sem relação com achados de desmielinização nem com a disseminação temporal e espacial das lesões descritas.',
      'Encefalomielite disseminada aguda (ADEM), condição monofásica sem recorrência de novos eventos nem lesões de diferentes idades na ressonância.'
    ],
    correctIndex: 1,
    explanation: 'Episódios neurológicos distintos, separados no tempo (neurite óptica meses antes, seguida de novo quadro sensitivo-motor), em diferentes localizações do sistema nervoso central (disseminação no espaço), com lesões desmielinizantes de diferentes idades na ressonância magnética (algumas captando contraste, indicando atividade recente, outras não), preenchem os critérios de disseminação no tempo e no espaço característicos da esclerose múltipla.'
  },
  {
    id: 'enamed_inedita2_172',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 50 anos, obeso, sedentário, com história familiar de diabetes, realiza exames de rotina: glicemia de jejum de 118 mg/dL (repetida em outra ocasião, com resultado semelhante) e hemoglobina glicada de 6,0%.\n\nConsiderando os critérios diagnósticos vigentes, esse resultado caracteriza',
    options: [
      'diabetes mellitus estabelecido, com critérios diagnósticos já preenchidos, exigindo início imediato de metformina e monitorização glicêmica.',
      'pré-diabetes (glicemia de jejum alterada), com indicação de mudanças de estilo de vida e monitorização periódica.',
      'normalidade completa dos exames, sem necessidade de qualquer orientação de estilo de vida ou seguimento adicional.',
      'diabetes mellitus tipo 1 de início tardio, quadro incomum nesse perfil de paciente, exigindo insulinoterapia imediata.'
    ],
    correctIndex: 1,
    explanation: 'Glicemia de jejum entre 100 e 125 mg/dL (glicemia de jejum alterada) e hemoglobina glicada entre 5,7% e 6,4% caracterizam o pré-diabetes, uma condição de risco aumentado para desenvolvimento de diabetes mellitus tipo 2, com indicação de mudanças de estilo de vida (dieta, atividade física, perda de peso) e monitorização periódica, sem necessariamente exigir tratamento farmacológico imediato.'
  },
  {
    id: 'enamed_inedita2_173',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Equipe de Saúde da Família realiza, em parceria com uma escola municipal de sua área de abrangência, ações de avaliação da saúde ocular e auditiva dos estudantes, orientações sobre alimentação saudável e prevenção do uso de drogas, além de atualização da situação vacinal dos alunos.\n\nEssa articulação intersetorial entre saúde e educação, realizada dentro do ambiente escolar, é uma estratégia do',
    options: [
      'Programa Saúde na Escola (PSE).',
      'Núcleo Ampliado de Saúde da Família (NASF).',
      'Programa de Agentes Comunitários de Saúde (PACS).',
      'Programa Nacional de Melhoria do Acesso e da Qualidade (PMAQ).'
    ],
    correctIndex: 0,
    explanation: 'O Programa Saúde na Escola (PSE) é uma iniciativa intersetorial entre os Ministérios da Saúde e da Educação, que articula ações de promoção, prevenção e atenção à saúde de crianças e adolescentes no ambiente escolar, em parceria entre as equipes de Saúde da Família e as escolas de sua área de abrangência.'
  },
  {
    id: 'enamed_inedita2_174',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Casal procura atendimento ginecológico após 14 meses de tentativas regulares de gravidez sem sucesso, sem uso de método contraceptivo. A mulher tem 29 anos, com ciclos menstruais regulares; o homem tem 31 anos, sem comorbidades conhecidas.\n\nConsiderando a investigação inicial de infertilidade conjugal, qual exame deve ser solicitado prioritariamente para o parceiro masculino, por ser simples, não invasivo e de alto rendimento diagnóstico?',
    options: [
      'Biópsia testicular, como primeiro exame da investigação masculina.',
      'Espermograma (análise seminal), exame inicial de triagem para avaliar a fertilidade masculina.',
      'Dosagem isolada de testosterona sérica, sem necessidade de outros exames iniciais.',
      'Cariótipo, como exame de primeira linha, independentemente de outros achados.'
    ],
    correctIndex: 1,
    explanation: 'Na investigação inicial de infertilidade conjugal, o espermograma é o exame de triagem inicial para o parceiro masculino, por ser simples, não invasivo, de baixo custo e com alto rendimento diagnóstico, avaliando parâmetros como concentração, motilidade e morfologia dos espermatozoides.'
  },
  {
    id: 'enamed_inedita2_175',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Lactente de 6 semanas apresenta estridor inspiratório de baixa intensidade, presente desde as primeiras semanas de vida, que piora quando a criança chora, se alimenta ou é colocada em decúbito dorsal, e melhora em decúbito ventral. A criança mantém bom ganho de peso e não apresenta cianose ou sinais de esforço respiratório importante.\n\nQual é o diagnóstico mais provável e a conduta esperada?',
    options: [
      'Laringomalácia, causa mais comum de estridor congênito, geralmente benigna e autolimitada, resolvendo-se espontaneamente até os 12-18 meses de idade.',
      'Estenose subglótica congênita grave, exigindo traqueostomia imediata em todos os casos, independentemente da gravidade dos sintomas.',
      'Anel vascular completo, exigindo correção cirúrgica de urgência, independentemente dos sintomas ou da resposta ao decúbito ventral.',
      'Paralisia bilateral de cordas vocais, condição rara sem relação com o padrão de sintomas e a melhora postural descritos.'
    ],
    correctIndex: 0,
    explanation: 'Estridor inspiratório desde as primeiras semanas de vida, que piora com choro, alimentação e decúbito dorsal e melhora em decúbito ventral, em lactente com bom desenvolvimento, sem sinais de gravidade, é característico da laringomalácia, a causa mais comum de estridor congênito, geralmente benigna e com resolução espontânea até os 12-18 meses.'
  },
  {
    id: 'enamed_inedita2_176',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 65 anos, com DPOC grave de longa data, relata dispneia progressiva, edema de membros inferiores e turgência jugular patológica, sem ortopneia significativa. Ausculta cardíaca com hiperfonese de segunda bulha em foco pulmonar. Ecocardiograma mostra dilatação e hipertrofia de câmaras direitas, com função do ventrículo esquerdo preservada, e pressão sistólica de artéria pulmonar estimada elevada.\n\nQual é o diagnóstico mais provável, considerando a doença pulmonar de base?',
    options: [
      'Insuficiência cardíaca esquerda isolada, sem relação com a doença pulmonar de base.',
      'Cor pulmonale (insuficiência cardíaca direita secundária à hipertensão pulmonar decorrente da doença pulmonar crônica).',
      'Pericardite constritiva, geralmente com sinal de Kussmaul e pulso paradoxal; sem relação direta com a DPOC apresentada.',
      'Tamponamento cardíaco crônico, quadro agudo por natureza, incompatível com a evolução progressiva e a função ventricular esquerda preservada descritas.'
    ],
    correctIndex: 1,
    explanation: 'Sinais de insuficiência cardíaca direita (edema, turgência jugular) associados a hipertensão pulmonar e disfunção predominante de câmaras direitas, em paciente com doença pulmonar crônica grave de base e função ventricular esquerda preservada, caracterizam o cor pulmonale, uma complicação cardíaca da doença pulmonar crônica avançada.'
  },
  {
    id: 'enamed_inedita2_177',
    cycle: 'Internato',
    subject: 'Cirurgia Vascular',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 75 anos, com fibrilação atrial não anticoagulada adequadamente, procura emergência com dor abdominal difusa e intensa, desproporcional aos achados do exame físico (abdome discretamente distendido, mas sem sinais evidentes de irritação peritoneal na fase inicial), associada a vômitos e uma evacuação com sangue. Lactato sérico elevado.\n\nQual é a principal hipótese diagnóstica, e por que a dor "desproporcional ao exame físico" é um dado clinicamente relevante?',
    options: [
      'Diverticulite aguda simples, geralmente com dor localizada e progressiva em fossa ilíaca esquerda, sem instabilidade hemodinâmica; a dor desproporcional ao exame não teria relevância diagnóstica adicional nesse cenário.',
      'Isquemia mesentérica aguda (provavelmente embólica, dada a fibrilação atrial); a dor desproporcional ao exame físico é um sinal de alerta clássico, presente antes que sinais evidentes de peritonite e necrose intestinal se instalem.',
      'Obstrução intestinal simples por bridas, geralmente de instalação mais gradual e sem sangramento retal associado; a fibrilação atrial não teria relação causal direta com o quadro apresentado.',
      'Apendicite aguda atípica, geralmente com dor localizada em fossa ilíaca direita; o lactato elevado e a evacuação sanguinolenta não teriam relevância diagnóstica nesse contexto.'
    ],
    correctIndex: 1,
    explanation: 'Dor abdominal intensa e desproporcional ao exame físico (relativamente pobre na fase inicial), em paciente com fibrilação atrial não anticoagulada (fonte embólica), associada a sangue nas fezes e lactato elevado, é o quadro clássico de isquemia mesentérica aguda, uma emergência vascular grave que exige reconhecimento precoce, antes que sinais evidentes de necrose intestinal e peritonite se instalem, quando o prognóstico piora significativamente.'
  },
  {
    id: 'enamed_inedita2_178',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 60 anos, obeso e diabético, é internado com febre, tosse seca e dispneia progressiva há 6 dias, com confirmação de infecção por SARS-CoV-2 por teste molecular. Evolui em 48 horas com piora respiratória importante, necessitando de oxigênio suplementar em alto fluxo, com relação PaO2/FiO2 de 180 e infiltrados bilaterais na tomografia de tórax.\n\nConsiderando os critérios de Berlim, esse quadro caracteriza qual síndrome, e qual classe de medicamento tem papel estabelecido no tratamento da forma grave?',
    options: [
      'Síndrome do desconforto respiratório agudo (SDRA) moderada; corticoides sistêmicos (como dexametasona) têm papel estabelecido na redução de mortalidade em pacientes graves com necessidade de suplementação de oxigênio.',
      'Bronquite aguda simples, geralmente sem infiltrados bilaterais tão extensos nem relação PaO2/FiO2 tão reduzida; antibioticoterapia isolada é suficiente, sem necessidade de corticoide sistêmico.',
      'Edema agudo de pulmão cardiogênico, geralmente sem confirmação de infecção viral associada; diuréticos são a base do tratamento, sem papel estabelecido do corticoide nesse quadro.',
      'Pneumotórax bilateral, achado não compatível com os infiltrados difusos e a hipoxemia descritos; drenagem torácica bilateral imediata, sem necessidade de corticoide sistêmico.'
    ],
    correctIndex: 0,
    explanation: 'Infiltrados bilaterais associados à relação PaO2/FiO2 entre 100 e 200 (nesse caso, 180) caracterizam SDRA moderada segundo os critérios de Berlim; no contexto da COVID-19 grave, os corticoides sistêmicos (como a dexametasona) demonstraram redução de mortalidade em pacientes com necessidade de suplementação de oxigênio ou ventilação mecânica.'
  },
  {
    id: 'enamed_inedita2_179',
    cycle: 'Ciclo Clínico',
    subject: 'Geriatria',
    banca: 'ENAMED (inédita)',
    text: 'Idosa de 80 anos apresenta perda progressiva de massa e força muscular ao longo dos últimos anos, associada a lentificação da marcha e dificuldade crescente para realizar tarefas antes simples, como levantar-se de uma cadeira sem apoio das mãos. Avaliação de força de preensão manual está reduzida para sua idade e sexo, e exames de composição corporal confirmam baixa massa muscular esquelética.\n\nQual é a condição descrita, e qual sua principal implicação clínica no envelhecimento?',
    options: [
      'Caquexia, condição de perda de peso e massa muscular associada exclusivamente a doenças neoplásicas ou inflamatórias avançadas, e não ao envelhecimento isolado.',
      'Sarcopenia, caracterizada pela perda progressiva de massa e função muscular relacionada ao envelhecimento, associada a maior risco de quedas, fraturas, incapacidade funcional e mortalidade.',
      'Osteoporose isolada, achado radiológico comum no envelhecimento, mas sem relação direta com a perda de força de preensão manual e a lentificação da marcha descritas.',
      'Distrofia muscular do adulto, condição genética hereditária que costuma manifestar-se em idade mais precoce, sem relação direta com o processo de envelhecimento fisiológico descrito.'
    ],
    correctIndex: 1,
    explanation: 'A sarcopenia é definida pela perda progressiva de massa muscular esquelética associada à redução de força (preensão manual) e/ou desempenho físico (velocidade de marcha), relacionada ao processo de envelhecimento; está associada a maior risco de quedas, fraturas, perda de independência funcional e mortalidade em idosos.'
  },
  {
    id: 'enamed_inedita2_180',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    banca: 'ENAMED (inédita)',
    text: 'Ao avaliar o impacto de uma doença crônica em uma população, pesquisadores utilizam um indicador que combina os anos de vida perdidos por morte prematura com os anos vividos com incapacidade decorrente da doença, permitindo comparar o impacto de diferentes condições de saúde de forma padronizada.\n\nEsse indicador é denominado',
    options: [
      'coeficiente de mortalidade proporcional, indicador que não combina anos perdidos por morte com anos vividos com incapacidade.',
      'anos de vida perdidos ajustados por incapacidade (DALY).',
      'taxa de incidência acumulada, medida de frequência de novos casos que não incorpora o componente de incapacidade.',
      'razão de mortalidade padronizada, indicador comparativo de mortalidade que não contempla os anos vividos com incapacidade.'
    ],
    correctIndex: 1,
    explanation: 'Os anos de vida perdidos ajustados por incapacidade (DALY, do inglês Disability-Adjusted Life Years) combinam os anos de vida perdidos por morte prematura (YLL) com os anos vividos com incapacidade (YLD), permitindo mensurar e comparar de forma padronizada a carga global de diferentes doenças e agravos em uma população.'
  },
  {
    id: 'enamed_inedita2_181',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Adolescente de 14 anos, com menarca há 18 meses, relata ciclos menstruais irregulares, com sangramento intenso e prolongado (mais de 10 dias) no último episódio, causando queda leve de hemoglobina. Beta-hCG negativo. Exame ginecológico e coagulograma sem alterações.\n\nQual é a principal hipótese diagnóstica, considerando a idade ginecológica da paciente, e a conduta inicial?',
    options: [
      'Miomatose uterina; ultrassonografia transvaginal como exame prioritário, antes de qualquer tratamento clínico, apesar da baixa prevalência nessa faixa etária.',
      'Sangramento uterino disfuncional por anovulação (comum nos primeiros anos após a menarca, pela imaturidade do eixo hipotálamo-hipófise-ovário); tratamento hormonal para controle do sangramento.',
      'Câncer de endométrio, achado extremamente raro nessa faixa etária; biópsia endometrial como conduta prioritária, mesmo sem fatores de risco compatíveis.',
      'Coagulopatia hereditária, hipótese menos provável diante do coagulograma normal; anticoagulação profilática, independentemente dos exames já realizados.'
    ],
    correctIndex: 1,
    explanation: 'Sangramento uterino irregular e intenso nos primeiros anos após a menarca é frequentemente decorrente de ciclos anovulatórios, pela imaturidade do eixo hipotálamo-hipófise-ovário nessa fase; após exclusão de gravidez e coagulopatias, o tratamento hormonal (geralmente com contraceptivos combinados) é indicado para controle do sangramento.'
  },
  {
    id: 'enamed_inedita2_182',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 26 anos, no meio do ciclo menstrual, apresenta dor pélvica súbita e unilateral, de intensidade moderada, sem sangramento vaginal significativo. Ao exame, discreta dor à palpação em fossa ilíaca direita, sem sinais de irritação peritoneal importante, hemodinamicamente estável. Ultrassonografia transvaginal mostra pequena quantidade de líquido livre em fundo de saco e um cisto ovariano direito de contornos irregulares.\n\nQual é o diagnóstico mais provável e a conduta apropriada, considerando a estabilidade clínica?',
    options: [
      'Gravidez ectópica rota; laparotomia de urgência, independentemente do beta-hCG.',
      'Cisto ovariano hemorrágico roto; conduta expectante com analgesia e observação, na ausência de instabilidade hemodinâmica.',
      'Torção ovariana completa; cirurgia de urgência obrigatória, independentemente da estabilidade clínica.',
      'Apendicite aguda; apendicectomia de urgência, sem necessidade de avaliação ginecológica.'
    ],
    correctIndex: 1,
    explanation: 'Dor pélvica súbita unilateral no meio do ciclo menstrual (período ovulatório), associada a pequena quantidade de líquido livre e cisto ovariano irregular, sem instabilidade hemodinâmica, é sugestiva de cisto ovariano hemorrágico roto; a conduta na maioria dos casos estáveis é expectante, com analgesia e observação clínica.'
  },
  {
    id: 'enamed_inedita2_183',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Lactente de 10 meses, em aleitamento materno exclusivo prolongado sem suplementação vitamínica e com pouca exposição solar, apresenta atraso na erupção dentária, alargamento dos punhos e tornozelos, e arqueamento das pernas ao iniciar a marcha. Radiografia de punho mostra alargamento e deformidade da metáfise dos ossos longos.\n\nQual é o diagnóstico mais provável e a deficiência nutricional associada?',
    options: [
      'Osteogênese imperfeita; condição genética sem relação com deficiência nutricional.',
      'Raquitismo carencial, por deficiência de vitamina D.',
      'Escorbuto infantil, por deficiência de vitamina C.',
      'Acondroplasia; displasia óssea genética sem relação com deficiência vitamínica.'
    ],
    correctIndex: 1,
    explanation: 'Alargamento de punhos e tornozelos, arqueamento de membros inferiores e alterações metafisárias características na radiografia, em lactente com fatores de risco para deficiência de vitamina D (aleitamento exclusivo prolongado sem suplementação, baixa exposição solar), são o quadro clássico do raquitismo carencial.'
  },
  {
    id: 'enamed_inedita2_184',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 6 anos, sem outras queixas urinárias diurnas, sem infecções urinárias prévias, sem alterações no exame físico ou no exame de urina, apresenta perda involuntária de urina durante o sono, pelo menos 3 vezes por semana, desde sempre (nunca teve período seco prolongado).\n\nQual é o diagnóstico e a conduta inicial mais apropriada para essa faixa etária?',
    options: [
      'Enurese noturna primária monossintomática; orientações comportamentais e tranquilização dos pais, considerando a idade ainda dentro do espectro de normalidade evolutiva.',
      'Bexiga hiperativa, geralmente com sintomas diurnos associados, ausentes nesse caso; anticolinérgico como primeira linha de tratamento medicamentoso.',
      'Infecção urinária oculta; antibioticoterapia empírica prolongada, sem necessidade de exame de urina nem de investigação adicional.',
      'Diabetes insípido, geralmente com poliúria e polidipsia diurnas importantes; restrição hídrica rigorosa como tratamento definitivo nesse caso.'
    ],
    correctIndex: 0,
    explanation: 'Perda involuntária de urina durante o sono, sem sintomas urinários diurnos associados, em criança que nunca teve período seco prolongado, é a enurese noturna primária monossintomática; aos 6 anos, ainda dentro do espectro de maturação vesical normal, a conduta inicial é a orientação comportamental (redução de líquidos à noite, esvaziamento vesical antes de dormir) e tranquilização da família, sem necessidade de tratamento medicamentoso imediato.'
  },
  {
    id: 'enamed_inedita2_185',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Equipe de Saúde da Família organiza encontros mensais para gestantes de sua área, com atividades de orientação sobre sinais de trabalho de parto, aleitamento materno, direitos da gestante e espaço para troca de experiências entre as participantes, complementando as consultas individuais de pré-natal.\n\nEssa estratégia de cuidado em grupo, amplamente utilizada na Atenção Primária, tem como principal vantagem',
    options: [
      'substituir integralmente as consultas individuais de pré-natal, tornando-as desnecessárias.',
      'promover troca de experiências entre as gestantes, fortalecer vínculos e ampliar o acesso à informação em saúde, de forma complementar ao cuidado individual.',
      'reduzir o tempo total de atenção dedicado a cada gestante, sendo utilizada exclusivamente por questões de eficiência administrativa.',
      'ser indicada apenas para gestantes de alto risco, não fazendo sentido para gestantes de risco habitual.'
    ],
    correctIndex: 1,
    explanation: 'Os grupos de gestantes na Atenção Primária são uma estratégia de cuidado coletivo que complementa (não substitui) o acompanhamento individual, promovendo troca de experiências, fortalecimento de vínculos, educação em saúde e acolhimento, sendo indicados para gestantes de risco habitual como parte do cuidado integral no pré-natal.'
  },
  {
    id: 'enamed_inedita2_186',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Médico de Unidade Básica de Saúde atende paciente com quadro claramente compatível com infecção viral de vias aéreas superiores (resfriado comum), sem sinais de complicação bacteriana. O paciente insiste na prescrição de um antibiótico, alegando que "sempre toma e melhora mais rápido".\n\nQual é a conduta mais apropriada, considerando o uso racional de antimicrobianos e o problema da resistência bacteriana?',
    options: [
      'Prescrever o antibiótico solicitado, para atender à expectativa do paciente e evitar insatisfação com o atendimento, mesmo sem indicação clínica para uso de antimicrobianos.',
      'Explicar a natureza viral do quadro, a ausência de indicação de antibiótico nesse contexto e os riscos individuais e coletivos do uso inadequado (incluindo resistência bacteriana), orientando tratamento sintomático.',
      'Prescrever antibiótico em dose reduzida, como forma de conciliar a solicitação do paciente com a prudência clínica, mesmo sem indicação para uso de antimicrobianos nesse quadro.',
      'Encaminhar o paciente a um especialista apenas para que ele prescreva o antibiótico solicitado, sem abordar a natureza viral do quadro respiratório atual.'
    ],
    correctIndex: 1,
    explanation: 'O uso inadequado de antibióticos em infecções virais não traz benefício clínico e contribui para o desenvolvimento de resistência bacteriana, um problema de saúde pública global; a conduta apropriada é a comunicação clara com o paciente sobre a natureza do quadro e os riscos do uso desnecessário, oferecendo tratamento sintomático adequado.'
  },
  {
    id: 'enamed_inedita2_187',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 58 anos relata dor torácica em aperto, retroesternal, que surge previsivelmente ao subir dois lances de escada ou caminhar rapidamente, com duração de poucos minutos, aliviada com repouso. Os episódios são semelhantes entre si há 3 meses, sem piora recente na frequência ou intensidade.\n\nQual é o diagnóstico mais provável e o exame inicial mais apropriado para investigação, em paciente com capacidade de se exercitar e eletrocardiograma basal interpretável?',
    options: [
      'Angina instável; internação imediata e cateterismo cardíaco de urgência, independentemente da estabilidade dos sintomas.',
      'Angina estável; teste ergométrico como exame inicial de escolha para avaliação diagnóstica e prognóstica.',
      'Dor torácica não cardíaca; nenhuma investigação cardiológica adicional é necessária, dado o padrão descrito.',
      'Infarto agudo do miocárdio silencioso; ressonância magnética cardíaca de urgência, sem necessidade de outros exames.'
    ],
    correctIndex: 1,
    explanation: 'Dor torácica desencadeada de forma previsível pelo esforço, com padrão estável (mesma intensidade e frequência) há mais de meses, aliviada pelo repouso, caracteriza angina estável; para pacientes capazes de se exercitar e com ECG basal interpretável, o teste ergométrico é o exame inicial de escolha para avaliação diagnóstica e estratificação de risco.'
  },
  {
    id: 'enamed_inedita2_188',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 35 anos, morador de área rural, é internado com quadro de febre, mal-estar, ansiedade importante e alteração comportamental, evoluindo em poucos dias para hidrofobia (espasmos dolorosos da faringe ao tentar beber água), hipersalivação e agitação psicomotora intensa, com períodos de lucidez entre as crises. Relata mordedura por morcego há cerca de 45 dias, sem procura de atendimento médico na ocasião.\n\nQual é o diagnóstico e o prognóstico dessa fase da doença?',
    options: [
      'Encefalite herpética, geralmente sem hidrofobia ou hipersalivação características; prognóstico favorável com tratamento antiviral precoce nessa fase.',
      'Raiva humana em fase clínica (sintomática); prognóstico extremamente reservado, com letalidade próxima de 100% nessa fase, reforçando a importância da profilaxia pós-exposição precoce.',
      'Tétano generalizado, geralmente com trismo e espasmos musculares generalizados; prognóstico favorável com soro antitetânico administrado nessa fase.',
      'Meningite viral benigna; resolução espontânea esperada em poucos dias, sem necessidade de medidas específicas nem de profilaxia pós-exposição.'
    ],
    correctIndex: 1,
    explanation: 'Hidrofobia, hipersalivação, alterações comportamentais e agitação, após mordedura de morcego sem profilaxia adequada, são característicos da raiva humana em fase clínica; uma vez estabelecidos os sintomas, a doença apresenta letalidade próxima de 100%, o que reforça a importância crucial da profilaxia pós-exposição (lavagem do ferimento, soro e vacina antirrábica) administrada precocemente, antes do início dos sintomas.'
  },
  {
    id: 'enamed_inedita2_189',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 30 anos, com história de úlcera genital indolor há 6 semanas (que resolveu espontaneamente sem tratamento), apresenta atualmente exantema maculopapular difuso, incluindo palmas das mãos e plantas dos pés, associado a lesões verrucosas úmidas na região perianal (condiloma plano) e linfonodomegalia generalizada.\n\nQual é o diagnóstico mais provável e o tratamento indicado?',
    options: [
      'Sífilis secundária; penicilina G benzatina intramuscular em dose única.',
      'Farmacodermia (reação a medicamento); suspensão do agente causador, sem necessidade de antibioticoterapia.',
      'Pitiríase rósea de Gibert; apenas tratamento sintomático, sem necessidade de investigação para IST.',
      'Doença de Kawasaki do adulto; imunoglobulina endovenosa como tratamento de escolha.'
    ],
    correctIndex: 0,
    explanation: 'O exantema maculopapular envolvendo palmas e plantas, associado a condiloma plano (lesões verrucosas úmidas em áreas de dobra) e linfonodomegalia generalizada, após história de úlcera genital indolor prévia (cancro duro da sífilis primária), é o quadro clássico da sífilis secundária; o tratamento é a penicilina G benzatina intramuscular.'
  },
  {
    id: 'enamed_inedita2_190',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 60 anos, submetida a laparotomia há 2 anos por obstrução intestinal, nota abaulamento progressivo na cicatriz cirúrgica abdominal, que aumenta com esforços (tosse, evacuação) e reduz espontaneamente em repouso, sem dor significativa associada.\n\nQual é o diagnóstico mais provável e a conduta recomendada, mesmo na ausência de sintomas importantes?',
    options: [
      'Seroma cirúrgico tardio, geralmente sem relação com esforço físico; apenas punção de alívio, sem necessidade de correção cirúrgica.',
      'Hérnia incisional; correção cirúrgica eletiva (geralmente com uso de tela), mesmo sendo redutível e pouco sintomática, pelo risco futuro de encarceramento/estrangulamento.',
      'Recidiva tumoral local; biópsia da área como conduta prioritária, sem necessidade de correção herniária, apesar do abaulamento redutível ao esforço.',
      'Deiscência tardia de parede sem hérnia associada; apenas observação clínica, sem necessidade de intervenção, mesmo diante do abaulamento reprodutível ao esforço.'
    ],
    correctIndex: 1,
    explanation: 'Abaulamento na cicatriz de uma laparotomia prévia, que aumenta com esforço e reduz em repouso, é característico de hérnia incisional; mesmo hérnias redutíveis e pouco sintomáticas têm indicação de correção cirúrgica eletiva (geralmente com uso de tela), pelo risco de crescimento progressivo e eventual encarceramento ou estrangulamento.'
  },
  {
    id: 'enamed_inedita2_191',
    cycle: 'Ciclo Clínico',
    subject: 'Neurologia',
    banca: 'ENAMED (inédita)',
    text: 'Criança de 4 anos, duas semanas após um quadro de varicela, desenvolve dificuldade súbita para caminhar (marcha atáxica, com base alargada), tremor de intenção nos membros e fala arrastada (disartria), sem febre, rebaixamento do nível de consciência ou outros déficits neurológicos focais.\n\nQual é o diagnóstico mais provável e o prognóstico esperado?',
    options: [
      'Meningite bacteriana, geralmente com febre e rebaixamento do nível de consciência; prognóstico grave, com necessidade de antibioticoterapia imediata.',
      'Ataxia cerebelar aguda pós-infecciosa (pós-viral); condição geralmente benigna e autolimitada, com recuperação completa na maioria dos casos em semanas a poucos meses.',
      'Tumor de fossa posterior; prognóstico reservado, exigindo ressecção cirúrgica de urgência, sem relação com quadro infeccioso viral prévio.',
      'Síndrome de Guillain-Barré; prognóstico reservado, com necessidade de imunoglobulina endovenosa imediata em todos os casos, mesmo sem fraqueza muscular associada.'
    ],
    correctIndex: 1,
    explanation: 'Ataxia de início súbito, com marcha de base alargada, tremor de intenção e disartria, surgindo semanas após infecção viral (como varicela), sem febre ou rebaixamento de consciência, é característica da ataxia cerebelar aguda pós-infecciosa, uma condição geralmente benigna e autolimitada na infância, com recuperação completa na maioria dos casos.'
  },
  {
    id: 'enamed_inedita2_192',
    cycle: 'Ciclo Clínico',
    subject: 'Psiquiatria',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 45 anos relata dificuldade para iniciar e manter o sono há mais de 6 meses, associada a fadiga diurna, irritabilidade e dificuldade de concentração no trabalho. Relata hábito de usar o celular na cama até tarde, consumir café à noite e tirar cochilos longos durante o dia. Nega sintomas depressivos ou ansiosos significativos, e exames gerais são normais.\n\nAntes de considerar tratamento farmacológico, qual é a abordagem inicial mais apropriada?',
    options: [
      'Prescrever benzodiazepínico de uso contínuo, como primeira linha de tratamento para insônia crônica, antes de qualquer orientação comportamental ou de higiene do sono.',
      'Orientar medidas de higiene do sono (regularidade de horários, redução de estímulos eletrônicos à noite, evitar cafeína tardia e cochilos longos), associadas, se necessário, à terapia cognitivo-comportamental para insônia.',
      'Solicitar polissonografia como exame obrigatório antes de qualquer orientação inicial, mesmo sem sinais sugestivos de apneia do sono ou de outro distúrbio respiratório associado.',
      'Prescrever antidepressivo sedativo em dose plena, independentemente da ausência de sintomas depressivos e antes de qualquer orientação comportamental inicial.'
    ],
    correctIndex: 1,
    explanation: 'Na insônia crônica sem outra causa evidente, a primeira abordagem terapêutica são as medidas de higiene do sono e, quando disponível, a terapia cognitivo-comportamental para insônia, reservando-se o tratamento farmacológico (com cautela, pelo risco de dependência dos benzodiazepínicos) para casos refratários a essas medidas.'
  },
  {
    id: 'enamed_inedita2_193',
    cycle: 'Ciclo Clínico',
    subject: 'Endocrinologia',
    banca: 'ENAMED (inédita)',
    text: 'Menino de 8 anos é encaminhado por baixa estatura importante (abaixo do percentil 3 para idade e sexo), com velocidade de crescimento reduzida nos últimos 2 anos (menor que 4 cm/ano), proporções corporais preservadas e idade óssea atrasada em relação à idade cronológica. Exames de função tireoidiana normais, sem doença sistêmica identificada.\n\nQual é a principal hipótese diagnóstica a ser investigada, e qual exame é utilizado para avaliação da secreção do hormônio envolvido?',
    options: [
      'Baixa estatura familiar; a velocidade de crescimento reduzida não seria compatível com esse diagnóstico.',
      'Deficiência de hormônio do crescimento (GH); teste de estímulo para secreção de GH, dada a baixa velocidade de crescimento associada.',
      'Hipertireoidismo; dosagem isolada de TSH e T4 livre seria suficiente para explicar o quadro, mas os exames já estão normais.',
      'Síndrome de Turner; diagnóstico exclusivo de meninas, não aplicável a esse paciente do sexo masculino, mas sem outra hipótese a considerar.'
    ],
    correctIndex: 1,
    explanation: 'Baixa estatura associada a velocidade de crescimento reduzida (diferentemente da baixa estatura familiar, em que a velocidade de crescimento é normal) e atraso da idade óssea, na ausência de outras causas identificadas (tireoidopatia, doença sistêmica), levanta a suspeita de deficiência de hormônio do crescimento, investigada por testes de estímulo para secreção de GH.'
  },
  {
    id: 'enamed_inedita2_194',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 28 anos apresenta úlceras orais dolorosas recorrentes há vários meses, associadas a úlceras genitais igualmente recorrentes e um episódio de uveíte anterior confirmado por oftalmologista. Relata também lesões cutâneas semelhantes a espinhas que surgem em locais de pequenos traumas (fenômeno de patergia positivo, testado em consulta).\n\nQual é o diagnóstico mais provável?',
    options: [
      'Lúpus eritematoso sistêmico, pela presença de úlceras orais recorrentes, embora sem as úlceras genitais e a uveíte tão características desse caso.',
      'Doença de Behçet, caracterizada pela tríade de úlceras orais, úlceras genitais e uveíte, associada a fenômeno de patergia positivo.',
      'Síndrome de Reiter (artrite reativa), sem relação com úlceras genitais recorrentes nem com o fenômeno de patergia positivo descrito.',
      'Pênfigo vulgar, condição bolhosa autoimune sem relação com uveíte, úlceras genitais recorrentes ou fenômeno de patergia.'
    ],
    correctIndex: 1,
    explanation: 'A associação de úlceras orais recorrentes, úlceras genitais recorrentes e uveíte, com fenômeno de patergia positivo (reação inflamatória exagerada a pequenos traumas cutâneos), é característica da doença de Behçet, uma vasculite sistêmica.'
  },
  {
    id: 'enamed_inedita2_195',
    cycle: 'Ciclo Clínico',
    subject: 'Geriatria',
    banca: 'ENAMED (inédita)',
    text: 'Idoso de 65 anos, sem contraindicações conhecidas (imunocompetente), procura Unidade Básica de Saúde para atualização vacinal, sem história prévia de herpes-zoster.\n\nConsiderando o calendário vacinal do idoso, qual é a recomendação em relação à vacina contra herpes-zoster?',
    options: [
      'A vacina não é recomendada para idosos sem história prévia da doença, sendo indicada apenas após um primeiro episódio de herpes-zoster confirmado clinicamente, e não antes dele.',
      'A vacina contra herpes-zoster é recomendada a partir dos 60 anos (ou 50 anos, conforme o tipo de vacina e a política vigente), mesmo sem episódio prévio da doença, para prevenção primária e de suas complicações, como a neuralgia pós-herpética.',
      'A vacina é contraindicada em idosos acima de 60 anos, sendo indicada apenas para adultos jovens imunossuprimidos, com restrição total de uso nessa faixa etária mais avançada.',
      'Não existe vacina disponível contra herpes-zoster no calendário vacinal brasileiro para nenhuma faixa etária, sendo essa prevenção realizada apenas por medidas gerais de saúde.'
    ],
    correctIndex: 1,
    explanation: 'A vacina contra herpes-zoster é recomendada para idosos (a partir de determinada idade, conforme o tipo de vacina e a política vacinal vigente), mesmo sem história prévia da doença, com o objetivo de prevenir a reativação do vírus varicela-zoster e suas complicações, como a neuralgia pós-herpética, que pode ser bastante debilitante nessa faixa etária.'
  },
  {
    id: 'enamed_inedita2_196',
    cycle: 'Ciclo Básico',
    subject: 'Epidemiologia',
    banca: 'ENAMED (inédita)',
    text: 'Em uma aula sobre determinantes de doenças infecciosas, o professor explica que a ocorrência de uma doença depende da interação entre três componentes: o agente causador (por exemplo, uma bactéria), o hospedeiro suscetível (o indivíduo) e o ambiente (condições que favorecem ou dificultam a transmissão).\n\nEsse modelo clássico de compreensão da causalidade em doenças infecciosas é denominado',
    options: [
      'modelo de determinação social da saúde.',
      'tríade ecológica (agente, hospedeiro e ambiente).',
      'modelo da história natural da doença, exclusivamente.',
      'teia de causalidade multifatorial.'
    ],
    correctIndex: 1,
    explanation: 'A tríade ecológica é o modelo clássico que explica a ocorrência de doenças infecciosas a partir da interação entre três componentes: o agente causador, o hospedeiro suscetível e o ambiente, sendo a base conceitual para compreender a cadeia de transmissão e planejar medidas de controle.'
  },
  {
    id: 'enamed_inedita2_197',
    cycle: 'Internato',
    subject: 'Urgência e Emergência',
    banca: 'ENAMED (inédita)',
    text: 'Homem de 35 anos, vítima de acidente automobilístico, chega à emergência com trauma torácico importante. Ao exame, observa-se um segmento da parede torácica direita com movimento paradoxal durante a respiração (afunda na inspiração e se eleva na expiração), associado a dispneia importante e dessaturação progressiva.\n\nQual é o diagnóstico mais provável e a conduta inicial de suporte?',
    options: [
      'Pneumotórax simples, geralmente sem movimento paradoxal da parede torácica; observação clínica, sem necessidade de suporte ventilatório imediato nesse contexto.',
      'Tórax instável (flail chest) por fraturas de múltiplos arcos costais consecutivos em mais de um local; suporte respiratório (incluindo ventilação com pressão positiva, se necessário) e analgesia adequada.',
      'Contusão pulmonar isolada, sem comprometimento estrutural da parede torácica nem movimento paradoxal associado; apenas observação, sem necessidade de suporte ventilatório.',
      'Hérnia diafragmática traumática, geralmente sem movimento paradoxal da parede torácica; cirurgia de urgência como única conduta necessária, sem suporte ventilatório prévio.'
    ],
    correctIndex: 1,
    explanation: 'O movimento paradoxal de um segmento da parede torácica (que se afunda na inspiração e se eleva na expiração) decorre de fraturas de múltiplos arcos costais consecutivos em mais de um ponto cada, caracterizando o tórax instável (flail chest); a conduta inclui suporte respiratório adequado (podendo exigir ventilação com pressão positiva) e boa analgesia, essencial para uma mecânica respiratória eficaz.'
  },
  {
    id: 'enamed_inedita2_198',
    cycle: 'Internato',
    subject: 'Neonatologia',
    banca: 'ENAMED (inédita)',
    text: 'Recém-nascido, filho de mãe Rh negativo sensibilizada previamente (Coombs indireto positivo durante o pré-natal), nasce com icterícia importante já nas primeiras horas de vida, palidez cutânea e hepatoesplenomegalia. Bilirrubina total ao nascimento já elevada, com predomínio de bilirrubina indireta, e teste de Coombs direto positivo no sangue do cordão.\n\nAlém da fototerapia intensiva, qual conduta deve ser prontamente considerada diante do risco de kernicterus (encefalopatia bilirrubínica) nesse cenário de doença hemolítica grave?',
    options: [
      'Aguardar a evolução espontânea da bilirrubina, sem necessidade de qualquer conduta adicional além da fototerapia padrão, mesmo diante de hemólise grave.',
      'Exsanguineotransfusão, considerada diante de níveis muito elevados de bilirrubina ou sinais de hemólise grave, para reduzir rapidamente a bilirrubina e prevenir o kernicterus.',
      'Suspensão total do aleitamento materno como única medida necessária, sem outras intervenções, mesmo diante de hemólise grave e bilirrubina muito elevada.',
      'Antibioticoterapia empírica isolada, sem relação com o manejo específico da hiperbilirrubinemia nem com a prevenção do kernicterus nesse contexto.'
    ],
    correctIndex: 1,
    explanation: 'Na doença hemolítica perinatal grave por incompatibilidade Rh, com hiperbilirrubinemia importante já ao nascimento e sinais de hemólise intensa (anemia, hepatoesplenomegalia), além da fototerapia intensiva, a exsanguineotransfusão deve ser prontamente considerada quando os níveis de bilirrubina são muito elevados ou há risco iminente de encefalopatia bilirrubínica (kernicterus), uma complicação neurológica grave e potencialmente irreversível.'
  },
  {
    id: 'enamed_inedita2_199',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    banca: 'ENAMED (inédita)',
    text: 'Paciente de 70 anos recebe alta hospitalar após internação por insuficiência cardíaca descompensada, com prescrição de múltiplos medicamentos novos e orientações de acompanhamento. A equipe do hospital envia relatório de alta para a Unidade Básica de Saúde de referência do paciente.\n\nConsiderando a importância da continuidade do cuidado nesse momento de transição, qual deve ser a conduta da equipe de Atenção Primária?',
    options: [
      'Aguardar que o próprio paciente procure a unidade espontaneamente, sem necessidade de busca ativa após a alta hospitalar.',
      'Realizar contato ativo (visita domiciliar ou consulta em curto prazo) para revisão da prescrição, esclarecimento de dúvidas e reforço das orientações, reduzindo o risco de reinternação precoce.',
      'Delegar todo o acompanhamento pós-alta exclusivamente ao cardiologista do hospital, sem necessidade de envolvimento da Atenção Primária nesse momento.',
      'Repetir integralmente os exames realizados durante a internação, antes de qualquer contato com o paciente ou revisão da prescrição medicamentosa.'
    ],
    correctIndex: 1,
    explanation: 'O período pós-alta hospitalar é um momento de transição de cuidado com risco aumentado de complicações e reinternação, especialmente em idosos com múltiplas comorbidades e polifarmácia nova; a busca ativa da Atenção Primária (visita domiciliar ou consulta em curto prazo) para revisão da prescrição e reforço das orientações é fundamental para garantir a continuidade e a segurança do cuidado.'
  },
  {
    id: 'enamed_inedita2_200',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    banca: 'ENAMED (inédita)',
    text: 'Mulher de 24 anos, sem comorbidades, procura Unidade Básica de Saúde para orientação sobre métodos contraceptivos, pois pretende iniciar a vida sexual em breve e deseja um método eficaz, mas ainda não decidiu qual.\n\nSegundo os princípios do aconselhamento contraceptivo, qual é a conduta mais apropriada nessa consulta?',
    options: [
      'Prescrever diretamente o método mais utilizado pela maioria das pacientes da unidade, sem explorar as preferências individuais nem apresentar outras opções disponíveis.',
      'Apresentar as opções de métodos disponíveis, seus mecanismos, eficácia, efeitos adversos e contraindicações, permitindo uma escolha compartilhada e informada, respeitando a autonomia e as preferências da paciente.',
      'Indicar exclusivamente métodos de longa duração (como DIU), por serem considerados os mais eficazes, sem apresentar outras opções nem explorar as preferências da paciente.',
      'Orientar que a decisão deve ser tomada exclusivamente pelo parceiro, cabendo à paciente apenas seguir a indicação, sem participar ativamente da escolha do método.'
    ],
    correctIndex: 1,
    explanation: 'O aconselhamento contraceptivo adequado envolve a apresentação das diferentes opções disponíveis, com suas vantagens, desvantagens, eficácia e contraindicações, permitindo que a decisão seja compartilhada entre profissional e paciente, respeitando sua autonomia, preferências e contexto de vida, e não a imposição de um método único ou a decisão por terceiros.'
  },
];
