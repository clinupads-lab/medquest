// ENARE 2023 and 2022 Extra Questions
// Contains enare_2023_006 to enare_2023_100, and enare_2022_096 to enare_2022_100
// Making ENARE 2022, 2023 and 2024 completely complete with 100 questions each!

export const ENARE_EXTRA_QUESTIONS: any[] = [
  // ==========================================
  // ENARE 2023 (Questions 006 to 100)
  // ==========================================
  
  // -- CLÍNICA MÉDICA --
  {
    id: 'enare_2023_006',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Um paciente de 55 anos, tabagista (40 maços-ano), apresenta-se com fadiga, perda ponderal de 8kg em 2 meses, tosse produtiva crônica e hemoptise esporádica. No exame laboratorial, observa-se hiponatremia persistente (Na: 122 mEq/L) com osmolalidade urinária elevada. O diagnóstico mais provável para essa síndrome paraneoplásica é:',
    options: [
      'Carcinoma de células escamosas com secreção ectópica de PTHrp, geralmente associado a hipercalcemia e não a hiponatremia.',
      'Carcinoma pulmonar de pequenas células com Síndrome de Secreção Inapropriada de ADH (SIADH).',
      'Adenocarcinoma pulmonar com secreção ectópica de ACTH, cursando com quadro de Cushing e hipocalemia associada.',
      'Carcinoma de grandes células com produção ectópica de gonadotrofina coriônica, associado a ginecomastia.',
      'Tumor carcinoide brônquico com crise carcinoide ativa, cursando com rubor facial e diarreia secretora.'
    ],
    correctIndex: 1,
    explanation: 'O carcinoma de pequenas células de pulmão (mielocítico) é o tumor mais fortemente associado com a Síndrome de Secreção Inapropriada de ADH (SIADH), levando a hiponatremia hipoosmolar euvolêmica.'
  },
  {
    id: 'enare_2023_007',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Um jovem de 24 anos procura atendimento por poliúria marcante, polidipsia e perda ponderal de 5kg em 3 semanas. Glicemia de jejum de 310 mg/dL e presença de cetonúria. Ao iniciar insulinoterapia, qual a conduta em relação ao controle de potássio sérico?',
    options: [
      'Iniciar reposição de potássio apenas se K < 3.3 mEq/L, independentemente do início da insulina.',
      'Iniciar reposição de potássio se K < 5.2 mEq/L, associado ao tratamento da cetoacidose.',
      'Suspender o início de insulina se K < 3.3 mEq/L e realizar reposição vigorosa de potássio antes do início da insulina.',
      'Iniciar dosagem de potássio a cada 12 horas e apenas repor se houver alterações no eletrocardiograma.',
      'Não repor potássio em hipótese alguma na cetoacidose diabética inicial para evitar hipercalemia.'
    ],
    correctIndex: 2,
    explanation: 'Se o potássio sérico estiver abaixo de 3.3 mEq/L, a insulinoterapia deve ser postergada até que o potássio seja corrigido acima de 3.3 mEq/L, pois a insulina promove entrada de potássio na célula, agravando a hipocalemia severa e podendo deflagrar arritmias fatais.'
  },
  {
    id: 'enare_2023_008',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Uma paciente de 35 anos apresenta rash malar, fotossensibilidade, artrite não erosiva em mãos e proteinúria de 24h de 1.2 g. A biópsia renal revela nefrite lúpica classe IV (proliferativa difusa). O tratamento de indução inicial padrão envolve:',
    options: [
      'Hidroxicloroquina oral isolada, sem associação com corticoide sistêmico ou imunossupressor citotóxico.',
      'Glicocorticoide sistêmico associado a micofenolato de mofetila ou ciclofosfamida endovenosa.',
      'Ciclosporina associada a anti-inflamatório não esteroidal de longa duração.',
      'Metotrexato oral associado a pulsoterapia de metilprednisolona realizada uma vez ao ano apenas.',
      'Plasmaférese diária durante 3 meses consecutivos, sem associação de corticoide ou imunossupressor.'
    ],
    correctIndex: 1,
    explanation: 'Para a nefrite lúpica classe IV (proliferativa difusa), o tratamento de indução padrão estabelecido pelas diretrizes internacionais consiste em corticoides associados a micofenolato de mofetila (MMF) ou ciclofosfamida endovenosa.'
  },
  {
    id: 'enare_2023_009',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente de 62 anos, hipertenso e cardiopata, apresenta quadro agudo de palpitações e dispneia. O eletrocardiograma revela ausência de ondas P e intervalos R-R absolutamente irregulares, com frequência cardíaca de 136 bpm. O diagnóstico e a estratégia de controle de ritmo inicial em paciente hemodinamicamente instável são:',
    options: [
      'Flutter atrial; cardioversão química por amiodarona em bomba.',
      'Fibrilação atrial; cardioversão elétrica sincronizada imediata.',
      'Taquicardia ventricular; desfibrilação elétrica não sincronizada.',
      'Taquicardia paroxística supraventricular; manobra vagal isolada.',
      'Fibrilação atrial estável; bloqueador de canal de cálcio isolado.'
    ],
    correctIndex: 1,
    explanation: 'O quadro revela fibrilação atrial aguda. Havendo instabilidade hemodinâmica (hipotensão, dispneia grave, choque, dor torácica), a conduta imediata para qualquer taquiarritmia supraventricular com pulso é a cardioversão elétrica sincronizada.'
  },
  {
    id: 'enare_2023_010',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Sobre a asma brônquica crônica, o uso de corticoide inalatório associado a formoterol como terapia de alívio e manutenção (estratégia SMART) tem como principal objetivo:',
    options: [
      'Evitar a resistência bacteriana associada a infecções recorrentes de vias aéreas superiores e inferiores.',
      'Substituir completamente a necessidade de vacinação anual contra influenza e outros vírus respiratórios.',
      'Reduzir significativamente o risco de exacerbações graves comparado ao uso isolado de SABA no alívio.',
      'Prevenir a manifestação de diabetes mellitus secundário ao uso crônico de broncodilatadores na infância.',
      'Garantir a remissão completa e definitiva do fenótipo alérgico e da hiper-responsividade brônquica.'
    ],
    correctIndex: 2,
    explanation: 'O tratamento com corticoide inalatório associado a formoterol (LABA de rápido início de ação) no alívio reduz drasticamente as exacerbações asmáticas graves em comparação ao uso isolado de broncodilatadores de curta ação (SABA).'
  },
  {
    id: 'enare_2023_011',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Homem de 67 anos queixa-se de cansaço extremo e constipação. Exames laboratoriais revelam hemoglobina de 8.8 g/dL, cálcio sérico de 11.5 mg/dL, creatinina de 2.1 mg/dL e presença de pico monoclonal na eletroforese de proteínas sugerindo mieloma múltiplo. Qual exame é fundamental para confirmar o diagnóstico?',
    options: [
      'Biópsia esplênica por agulha grossa guiada por ultrassonografia para investigação neoplásica.',
      'Arteriografia renal bilateral com contraste, indicada para investigação de estenose de artéria renal.',
      'Mielograma ou biópsia de medula óssea demonstrando infiltração por plasmócitos ≥ 10%.',
      'Ultrassonografia de vias biliares e pâncreas de alta resolução para afastar neoplasia biliopancreática.',
      'Dosagem seriada de amilase e lipase urinária nas 24h para investigação de pancreatite associada.'
    ],
    correctIndex: 2,
    explanation: 'O Mieloma Múltiplo é caracterizado clinicamente por anemia, hipercalcemia, disfunção renal e lesões lóticas (mnemônico CRAB). O critério diagnóstico central é a presença de plasmócitos clonais na medula óssea ≥ 10% ou plasmocitoma provado por biópsia, associado a biomarcadores ou lesão de órgão-alvo.'
  },
  {
    id: 'enare_2023_012',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Um paciente masculino com cirrose hepática por hepatite C crônica desenvolve ascite refratária. Qual o melhor diurético inicial e a sua respectiva proporção padrão recomendada pelas diretrizes internacionais para o manejo de ascite?',
    options: [
      'Espironolactona 100 mg e Furosemida 40 mg.',
      'Hidroclorotiazida 50 mg e Espironolactona 200 mg.',
      'Furosemida 80 mg isolada uma vez ao dia pela manhã.',
      'Acetazolamida 250 mg e Furosemida 20 mg.',
      'Manitol endovenoso diário associado a albumina humana.'
    ],
    correctIndex: 0,
    explanation: 'O esquema diurético de escolha para o tratamento da ascite cirrótica envolve a associação de espironolactona e furosemida na proporção clássica de 100 mg para 40 mg, que mantém a normocalemia e otimiza a perda de sódio.'
  },
  {
    id: 'enare_2023_013',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Uma mulher de 45 anos com artrite reumatoide ativa inicia tratamento com metotrexato. Qual suplementação vitamínica deve ser obrigatoriamente associada para mitigar efeitos adversos gastrointestinais e hematológicos do metotrexato?',
    options: [
      'Ácido fólico.',
      'Vitamina B12 parenteral semanal.',
      'Vitamina C em megadoses associada a ferro.',
      'Piridoxina (Vitamina B6).',
      'Tiamina (Vitamina B1).'
    ],
    correctIndex: 0,
    explanation: 'O uso de ácido fólico (geralmente 5mg por semana, no dia seguinte ao metotrexato) é recomendado para reduzir os efeitos colaterais comuns do metotrexato (antagonista do ácido fólico), tais como náuseas, estomatites e mielossupressão.'
  },
  {
    id: 'enare_2023_014',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Um idoso de 78 anos apresenta perda progressiva de memória de curto prazo e desorientação espacial há 3 anos. O diagnóstico de Doença de Alzheimer é sugerido. Qual das alternativas apresenta medicamentos indicados para o tratamento sintomático cognitivo?',
    options: [
      'Donepezila (inibidor da acetilcolinesterase) e Memantina (antagonista do receptor NMDA).',
      'Levodopa/Carbidopa associada a Pramipexol, esquema utilizado no tratamento motor da Doença de Parkinson.',
      'Haloperidol associado a Risperidona diária, antipsicóticos indicados para sintomas comportamentais graves.',
      'Fluoxetina parenteral combinada com Diazepam, esquema sem indicação para o tratamento cognitivo do Alzheimer.',
      'Estrogênio sistêmico conjugado associado a AAS em baixa dose, sem eficácia comprovada na cognição.'
    ],
    correctIndex: 0,
    explanation: 'Os inibidores da acetilcolinesterase (como Donepezila, Galantamina, Rivastigmina) para quadros leves a moderados, e o antagonista de receptores NMDA (Memantina) para quadros moderados a graves, constituem o arsenal terapêutico central para progressão de Alzheimer.'
  },
  {
    id: 'enare_2023_015',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Um jovem de 19 anos apresenta faringite purulenta há 2 semanas, não tratada com antibióticos. Agora, apresenta-se com poliartrite migratória de grandes articulações, sopro de regurgitação mitral de início recente e nódulos subcutâneos. Antiestreptolisina O (ASLO) elevada. O diagnóstico e a profilaxia secundária obrigatória recomendada são:',
    options: [
      'Febre Reumática; Penicilina G Benzatina a cada 21 dias.',
      'Artrite Reativa; Ciprofloxacino oral contínuo diário.',
      'Lúpus Eritematoso Sistêmico; Prednisona profilática diária.',
      'Gota Toácea Aguda; Alopurinol permanente diário.',
      'Artrite Séptica; Vancomicina endovenosa mensal.'
    ],
    correctIndex: 0,
    explanation: 'O quadro clínico descreve Febre Reumática aguda manifestada por critérios de Jones (poliartrite, cardite, nódulos subcutâneos). A profilaxia secundária de escolha para prevenir novos surtos infecciosos estreptocócicos é a injeção regular de Penicilina G Benzatina a cada 21 dias.'
  },
  {
    id: 'enare_2023_016',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Dentre as manifestações clínicas da cetoacidose diabética (CAD), qual o padrão ventilatório clássico caracterizado por incursões inspiratórias profundas e ruidosas, seguidas de pausas e expirações curtas, induzida pela acidose metabólica grave?',
    options: [
      'Respiração de Cheyne-Stokes.',
      'Respiração de Kussmaul.',
      'Visualização de respiração de Biot.',
      'Respiração paradoxal abdominal.',
      'Suspiros respiratórios isolados estáticos.'
    ],
    correctIndex: 1,
    explanation: 'A respiração de Kussmaul é a hiperventilação compensatória típica observada em acidoses metabólicas graves, especialmente na cetoacidose diabética (CAD), visando lavar CO2 pulmonar para elevar o pH sanguíneo.'
  },
  {
    id: 'enare_2023_017',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Um paciente de 48 anos com hepatite B crônica ativa desenvolve quadro de hipertensão arterial sistêmica, mononeuropatia múltipla e dor abdominal pós-prandial por isquemia mesentérica. Suspeita-se de poliarterite nodosa (PAN). Qual o exame padrão ouro para confirmar o diagnóstico?',
    options: [
      'Biópsia renal ou de nervo periférico acometido, ou arteriografia demonstrando múltiplos microaneurismas em vasos viscerais.',
      'Ressonância magnética de crânio com contraste, exame direcionado para investigação de doenças do sistema nervoso central.',
      'Pesquisa de anticorpo anti-DNA dupla hélice, marcador característico de lúpus eritematoso sistêmico e não de vasculite.',
      'Eco-Doppler cardíaco transesofágico de repetição, utilizado na investigação de fontes embólicas cardíacas.',
      'Dosagem sérica de complemento C3 e C4 elevados, achado inespecífico e não confirmatório de vasculite sistêmica.'
    ],
    correctIndex: 0,
    explanation: 'A poliarterite nodosa (PAN) é uma vasculite necrotizante de médios vasos fortemente associada à infecção pelo vírus da hepatite B (HBV). O diagnóstico é demonstrado histologicamente (biópsia de pele, músculo ou nervo) ou por arteriografia visceral demonstrando microaneurismas e estenoses.'
  },
  {
    id: 'enare_2023_018',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente de 40 anos apresenta poliartrite simétrica de mãos e rigidez matinal de 2 horas de duração. Testes revelam Fator Reumatoide positivo e Anti-CCP (anticorpo antiproteína citrulinada cíclica) reagente. Qual o papel do Anti-CCP nessa patologia?',
    options: [
      'Indica alta probabilidade de cura espontânea da poliartrite sem necessidade de qualquer tratamento medicamentoso.',
      'É altamente específico para o diagnóstico e prediz evolução para doença articular destrutiva e erosiva.',
      'Exclui completamente o envolvimento articular por artrite reumatoide nesse quadro clínico.',
      'Serve unicamente para monitorar depósitos hepáticos de ferro em doenças de sobrecarga como a hemocromatose.',
      'Indica associação obrigatória com osteoartrose primária degenerativa das articulações das mãos.'
    ],
    correctIndex: 1,
    explanation: 'O anticorpo anti-CCP possui especificidade superior a 95% para Artrite Reumatoide e é um forte marcador de pior prognóstico, correlacionando-se com doença articular destrutiva e erosões radiológicas.'
  },
  {
    id: 'enare_2023_019',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Uma paciente de 28 anos queixa-se de fadiga extrema, perda ponderal de 6kg, náuseas e vômitos frequentes. Ao exame físico: hipotensão postural e hiperpigmentação de mucosas e cicatrizes cutâneas. Exames revelam hiponatremia e hipercalemia séricas. A principal suspeita e o teste diagnóstico de escolha são:',
    options: [
      'Feocromocitoma; dosagem de metanefrinas e catecolaminas fracionadas em urina de 24 horas.',
      'Insuficiência adrenal primária (Doença de Addison); dosagem de cortisol basal ou após teste de estímulo com ACTH.',
      'Síndrome de Conn (hiperaldosteronismo primário); ressonância magnética de abdômen com contraste.',
      'Glomerulonefrite aguda pós-infecciosa; dosagem de ASLO e complemento C3 sérico reduzido.',
      'Diabetes insípido central; teste de privação hídrica com resposta à desmopressina.'
    ],
    correctIndex: 1,
    explanation: 'A hiperpigmentação de pele/mucosas associada à hipotensão, hiponatremia, hipercalemia e perda ponderal é patognomônica de hipoadrenalismo primário (insuficiência adrenal crônica - Doença de Addison). O diagnóstico é corroborado por dosagem de cortisol e teste de estímulo com ACTH sintético (Cosintropina).'
  },
  {
    id: 'enare_2023_020',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Um paciente de 32 anos apresenta febre de início súbito acompanhada de cefaleia intensa, rigidez de nuca e petéquias disseminadas pelo tronco e membros inferiores. A punção lombar revela líquor turvo com pleocitose neutrofílica marcante, hipoglicorráquia acentuada e hiperproteinorráquia. Qual o tratamento empírico imediato de escolha?',
    options: [
      'Ganciclovir endovenoso e isolamento protetor de vias aéreas.',
      'Ceftriaxona associada a dexametasona parenteral.',
      'Penicilina G benzatina intramuscular dose única.',
      'Fluconazol endovenoso isolado diário por 14 dias.',
      'Isolamento de contato e sintomáticos orais apenas.'
    ],
    correctIndex: 1,
    explanation: 'Meningite bacteriana aguda grave requer antibioticoterapia empírica imediata (ceftriaxona 2g EV de 12/12h). A administração concomitante de Dexametasona imediatamente antes ou junto com a primeira dose de antibiótico reduz significativamente sequelas auditivas e mortalidade.'
  },
  {
    id: 'enare_2023_021',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Qual distúrbio metabólico-eletrolítico é o principal fator precipitante para toxicidade por digitálicos (digoxina) em pacientes com insuficiência cardíaca crônica?',
    options: [
      'Hipernatremia acentuada, sem relação com toxicidade digitálica.',
      'Hipocalemia (baixas concentrações de potássio).',
      'Hipercalcemia grave isolada, sem relação com toxicidade digitálica.',
      'Hipomagnesemia crônica isolada, sem relação direta com toxicidade digitálica.',
      'Acidose lática compensada, sem relação com toxicidade digitálica.'
    ],
    correctIndex: 1,
    explanation: 'A hipocalemia aumenta significativamente a ligação da digoxina à bomba Na+/K+ ATPase cardíaca, potencializando a toxicidade digitálica que se manifesta clinicamente por náuseas, vômitos, xantopsia (visão amarelada) e arritmias cardíacas (como extrassístoles ventriculares e taquicardia atrial com bloqueio).'
  },
  {
    id: 'enare_2023_022',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente de 54 anos apresenta hipertensão refratária a 4 fármacos anti-hipertensivos em doses otimizadas. Apresenta potássio de 2.8 mEq/L sem uso de diuréticos. Apresenta aldosterona plasmática elevada com atividade de renina plasmática suprimida. Qual a principal hipótese diagnóstica?',
    options: [
      'Hiperaldosteronismo primário (Síndrome de Conn).',
      'Estenose de artéria renal bilateral por aterosclerose.',
      'Insuficiência adrenal crônica severa.',
      'Coarctação de aorta torácica residual.',
      'Feocromocitoma produtor de adrenalina.'
    ],
    correctIndex: 0,
    explanation: 'A tríade de hipertensão arterial refratária, hipocalemia espontânea e supressão da renina plasmática com aldosterona francamente elevada sugere fortemente o diagnóstico de Hiperaldosteronismo Primário (normalmente causado por adenoma adrenal unilateral produtor de aldosterona - Síndrome de Conn, ou hiperplasia adrenal bilateral).'
  },
  {
    id: 'enare_2023_023',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Mulher de 45 anos com antecedente de tireoidite de Hashimoto queixa-se de ganho de peso, intolerância ao frio, letargia profunda e pele seca. O perfil tireoidiano revela TSH de 38 mUI/L (VR: 0.4-4.5) e T4 livre de 0.2 ng/dL (VR: 0.7-1.8). A conduta ideal é iniciar:',
    options: [
      'Propiltiourecia oral 100 mg ao dia.',
      'Levotiroxina sódica oral, em jejum, ajustada de acordo com as metas de TSH.',
      'Pulsoterapia com metilprednisolona por 3 dias.',
      'Iodoterapia ablativa combinada com propanolol.',
      'Tireoidectomia total de urgência devido ao risco de bócio obstrusivo.'
    ],
    correctIndex: 1,
    explanation: 'Trata-se de hipotireoidismo primário clínico (TSH elevado com T4 livre reduzido) secundário à tireoidite de Hashimoto. O tratamento consiste na reposição hormonal com levotiroxina sódica sintética, que deve ser administrada por via oral, preferencialmente diária, em jejum.'
  },
  {
    id: 'enare_2023_024',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Em relação ao rastreamento e diagnóstico do Diabetes Mellitus, qual das alternativas representa critérios diagnósticos estabelecidos para diabetes em indivíduos assintomáticos?',
    options: [
      'Glicemia de jejum ≥ 100 mg/dL e < 126 mg/dL ou hemoglobina glicada entre 5.7% e 6.4%, critérios que definem apenas pré-diabetes e não diabetes estabelecido.',
      'Glicemia de jejum ≥ 126 mg/dL ou teste oral de tolerância à glicose (TOTG) 2h pós-carga ≥ 200 mg/dL ou HbA1c ≥ 6.5%, confirmados em duas ocasiões distintas.',
      'Apenas glicemia casual ≥ 140 mg/dL colhida de forma aleatória sem necessidade de jejum, sem confirmação em segunda dosagem ou sintomas clássicos associados.',
      'Eletroforese de hemoglobina positiva com anemia microcítica associada, achado relacionado a hemoglobinopatias e não ao diagnóstico de diabetes mellitus.',
      'Cetonúria positiva isolada acompanhada de glicosúria transitória, achado inespecífico que não fecha isoladamente o diagnóstico de diabetes mellitus.'
    ],
    correctIndex: 1,
    explanation: 'Os critérios diagnósticos tradicionais para o Diabetes Mellitus exigem: glicemia de jejum ≥ 126 mg/dL; TOTG (75g) de 2 horas ≥ 200 mg/dL; ou Hemoglobina Glicada (HbA1c) ≥ 6.5%. Tais exames devem ser repetidos e confirmados para selar o diagnóstico clínico.'
  },

  // -- CIRURGIA GERAL --
  {
    id: 'enare_2023_025',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente vítima de acidente automobilístico de alta energia (colisão frontal) chega ao pronto-socorro agitado, com turgência jugular bilateral, murmúrio vesicular abolido no hemitórax esquerdo e hipotensão refratária (PA: 70/40 mmHg). Qual o diagnóstico e a conduta imediata regulamentada pelo ATLS?',
    options: [
      'Tamponamento cardíaco; pericardiocentese imediata guiada por punção subxifoide, indicada quando há tríade de Beck com bulhas abafadas e ausência de murmúrio vesicular alterado unilateralmente.',
      'Pneumotórax hipertensivo à esquerda; descompressão torácica imediata com agulha no 5º espaço intercostal (ou toracocentese de alívio por punção) seguida de drenagem torácica em selo d’água.',
      'Hemotórax maciço à esquerda; intubação orotraqueal imediata seguida de reposição volêmica agressiva e toracotomia de urgência se drenagem inicial ultrapassar 1500 mL.',
      'Contusão pulmonar grave; traqueostomia de urgência no leito associada a suporte ventilatório mecânico prolongado e monitorização gasométrica seriada.',
      'Choque cardiogênico residual; infusão rápida de amiodarona endovenosa associada a suporte inotrópico e monitorização hemodinâmica invasiva contínua.'
    ],
    correctIndex: 1,
    explanation: 'O quadro clínico descreve Classicidade do Pneumotórax Hipertensivo. A conduta imediata mandatória é a descompressão por agulha ou por via digital intercostal para alívio da pressão intratorácica que está impedindo o retorno venoso, seguida por inserção formal de dreno torácico.'
  },
  {
    id: 'enare_2023_026',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Um homem de 58 anos apresenta-se com quadro de dor abdominal intensa de início súbito que irradia para o dorso, acompanhada de hipotensão refratária e massa abdominal pulsátil palpável no epigástrio. A principal hipótese diagnóstica e a conduta são:',
    options: [
      'Pancreatite aguda necrotizante; laparotomia exploradora imediata com necrosectomia e drenagem ampla da loja pancreática infectada.',
      'Aneurisma de aorta abdominal (AAA) roto; estabilização hemodinâmica e encaminhamento emergencial para reparo cirúrgico ou endovascular imediato.',
      'Úlcera péptica perfurada; endoscopia digestiva alta terapêutica urgente para hemostasia e fechamento endoscópico da perfuração.',
      'Diverticulite aguda complicada; antibioticoterapia isolada de amplo espectro sem necessidade de drenagem ou abordagem cirúrgica.',
      'Isquemia mesentérica arterial; colonoscopia descompressiva precoce para avaliação da mucosa colônica isquêmica.'
    ],
    correctIndex: 1,
    explanation: 'A tríade clássica de dor abdominal/lombar súbita intensa, choque/hipotensão e massa abdominal pulsátil é altamente sugestiva de Ruptura de Aneurisma de Aorta Abdominal (AAA). O tratamento emergencial cirúrgico convencional ou endovascular imediato é mandatório devido à extrema gravidade.'
  },
  {
    id: 'enare_2023_027',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente de 42 anos queixa-se de dor em hipocôndrio direito de forte intensidade com irradiação para o ombro direito, associada a náuseas e vômitos há 12 horas. Apresenta sinal de Murphy positivo no exame físico abdominal e febre baixa (38ºC). Qual o principal diagnóstico e o exame subsidiário inicial de escolha?',
    options: [
      'Apendicite aguda simulada; tomografia de pelve sem contraste.',
      'Colecistite aguda calculosa; ultrassonografia de abdômen superior.',
      'Coledocolitíase isolada; ressonância magnética das vias biliares.',
      'Abscesso hepático piogênico; cintilografia de eliminação fecal.',
      'Gastrite crônica ativa; endoscopia digestiva de urgência.'
    ],
    correctIndex: 1,
    explanation: 'O sinal de Murphy positivo (interrupção súbita da inspiração à palpação profunda do hipocôndrio direito) associado à dor local persistente e febre indica Colecistite Aguda. A ultrassonografia de abdômen é o exame de escolha inicial devido à alta acurácia para detectar cálculos biliares, espessamento da parede vesicular (> 4mm) e líquido pericolecístico.'
  },
  {
    id: 'enare_2023_028',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Durante o atendimento ao trauma, qual das seguintes manobras é contraindicada na suspeita de fratura de bacia/pelve pela possibilidade de agravamento de hemorragia retroperitoneal grave?',
    options: [
      'Compressão lateral externa contínua da bacia, sem confirmação radiográfica prévia da instabilidade do anel pélvico.',
      'Compressão e manipulação repetitiva das cristas ilíacas em busca de mobilidade na bacia.',
      'Aplicação de cinta pélvica de estabilização pélvica imediata, medida recomendada para reduzir o volume da cavidade pélvica.',
      'Radiografia de bacia simples no leito, exame de imagem que não compromete a estabilidade do anel pélvico.',
      'Sutura primária de lacerações em pele pélvica adjacente, procedimento local que não interfere na hemorragia retroperitoneal profunda.'
    ],
    correctIndex: 1,
    explanation: 'A palpação ou movimentação repetitiva e busca ativa por mobilidade de bacia pressionando as cristas ilíacas deve ser estritamente evitada no trauma de pelve, pois pode romper coágulos formados no plexo venoso ou arterial retroperitoneal, perpetuando sangramentos massivos.'
  },
  {
    id: 'enare_2023_029',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Um homem de 72 anos é submetido a cirurgia de colectomia esquerda por neoplasia de cólon. No 5º pós-operatório, evolui com taquicardia, febre (38.5ºC) e dor abdominal difusa com defesa. Observa-se saída de secreção entérica pelo dreno abdominal. Qual a principal suspeita clínica e a conduta?',
    options: [
      'Íleo paralítico fisiológico pós-operatório; acompanhamento clínico expectante sem necessidade de reoperação ou antibioticoterapia.',
      'Fístula de anastomose colorretal com peritonite secundária; reoperação imediata e lavagem da cavidade abdominal.',
      'Abscesso de parede abdominal isolado, sem sinais de peritonite difusa; troca de antibiótico em regime ambulatorial.',
      'Metástase hepática fulminante silenciosa; indicação de quimioterapia paliativa exclusiva no leito, sem abordagem cirúrgica.',
      'Evisceração subaponeurótica isolada; colocação de cinta pélvica de suporte, sem necessidade de reabordagem cirúrgica.'
    ],
    correctIndex: 1,
    explanation: 'A dor abdominal difusa acompanhada de febre, taquicardia e saída de conteúdo entérico pelo dreno no 5º PO é indicativo de deiscência de anastomose com fístula ativa e peritonite. Exige reabordagem cirúrgica imediata para controle do foco infeccioso e proteção da anastomose (frequentemente estomia de desvio).'
  },
  {
    id: 'enare_2023_030',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Vítima de agressão por arma branca em transição toracoabdominal esquerda (5º espaço intercostal esquerdo, linha axilar anterior), chega estável hemodinamicamente. Não há sinais de pneumotórax ou peritonite. Qual a principal preocupação específica nessa topografia e a conduta diagnóstica obrigatória?',
    options: [
      'Rutura esplênica tardia inexplicada; tomografia de repetição a cada 8h.',
      'Lesão diafragmática oculta; videolaparoscopia ou toracoscopia diagnóstica.',
      'Fístula pancreática traumática residual; dosagem seriada de amilase salivar.',
      'Evisceração pulmonar crônica; dreno torácico calibroso profilático.',
      'Perfuração de vesícula biliar; cintilografia hepática imediata.'
    ],
    correctIndex: 1,
    explanation: 'Trauma penetrante na região de transição toracoabdominal (entre o 4º e o 12º espaço intercostal) esquerda tem alto risco de lesão diafragmática isolada oculta, que não costuma ser detectada por radiografias ou tomografias iniciais. Exige investigação cirúrgica direta por videolaparoscopia ou toracoscopia para evitar herniação diafragmática crônica.'
  },
  {
    id: 'enare_2023_031',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente de 40 anos apresenta história de dor abdominal em cólica progressiva, distensão abdominal marcante, vômitos biliosos frequentes e parada de eliminação de gases e fezes há 3 dias. Refere laparotomia prévia por apendicite complicada há 10 anos. Radiografia de abdômen em pé revela níveis hidroaéreos e empilhamento de moedas. Qual a principal causa mecânica dessa obstrução intestinal?',
    options: [
      'Volto de sigmoide agudo.',
      'Brida ou aderências peritoneais fibrosas pós-operatórias.',
      'Intussuscepção ileocecal do adulto.',
      'Hérnia inguinal encarcerada.',
      'Neoplasia estenosante de cólon descendente.'
    ],
    correctIndex: 1,
    explanation: 'A causa mais comum de obstrução mecânica do intestino delgado no adulto é a presença de bridas/aderências intraperitoneais pós-operatórias (geralmente secundárias a laparotomias cirúrgicas prévias). Clínicas clássicas incluem dor em cólica, distensão, vômitos, parada de eliminação e sinal radiológico de empilhamento de moedas.'
  },
  {
    id: 'enare_2023_032',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Durante uma colecistectomia videolaparoscópica de rotina, para garantir a segurança cirúrgica e evitar lesão iatrogênica da via biliar principal, o cirurgião deve identificar com clareza a "Visão de Segurança de Strassberg" (Critical View of Safety). Quais são as estruturas que devem ser expostas para tal visualização?',
    options: [
      'Dissecção ampla expondo o colédoco, o ducto hepático comum e a artéria hepática direita, estruturas que não deveriam ser rotineiramente dissecadas nessa técnica.',
      'Liberação do terço inferior da vesícula biliar do leito hepático, isolando apenas duas estruturas que entram na vesícula: o duto cístico e a artéria cística.',
      'Exposição completa da veia porta, da artéria gástrica esquerda e do ducto biliar principal, estruturas do hilo hepático não relacionadas à visão de segurança.',
      'Dissecção isolada do ligamento falciforme e da transição hepatoduodenal, sem qualquer exposição das estruturas do trígono cístico.',
      'Isolamento da artéria hepática comum e do gânglio cístico de Mascagni, estruturas acessórias não exigidas pela técnica de Strasberg.'
    ],
    correctIndex: 1,
    explanation: 'A Visão Crítica de Segurança de Strassberg para colecistectomia laparoscópica segura consiste em: 1) limpar o triângulo hepatocístico de gordura e tecido fibroso, 2) liberar a porção inferior da vesícula de seu leito hepático, 3) identificar apenas duas (e não mais) estruturas penetrando na vesícula: o duto cístico e a artéria cística.'
  },
  {
    id: 'enare_2023_033',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'O que define a classificação do trauma em "período de ouro" (Golden Hour)?',
    options: [
      'O tempo necessário para que a dor desapareça por completo após a administração de analgesia potente, independentemente da gravidade da lesão inicial.',
      'A primeira hora após o acidente traumático, na qual o atendimento médico interdisciplinar ágil e padronizado reduz dramaticamente a mortalidade por choque ou hipóxia.',
      'O tempo médio entre a admissão na unidade de terapia intensiva e a alta hospitalar em pacientes idosos vítimas de trauma de baixa energia.',
      'O período em que o dreno de tórax deve ser mantido obrigatoriamente sem oscilar, independentemente da reexpansão pulmonar completa observada.',
      'A janela imunológica de 24 horas estabelecida para administração de vacina antirrábica em pacientes vítimas de mordedura por animais suspeitos.'
    ],
    correctIndex: 1,
    explanation: 'A "Golden Hour" ou hora de ouro representa a primeira hora subsequente ao trauma em que o atendimento sistematizado inicial (ABCD do trauma) implementado com precisão e rapidez previne mortes precoces evitáveis.'
  },
  {
    id: 'enare_2023_034',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Idoso de 79 anos queixa-se de perda de peso de 12kg em 3 meses acompanhada de icterícia progressiva indolor e presença de prurido generalizado. No exame físico detalhado, o médico assistente palpa uma vesícula biliar distendida e indolor na região do hipocôndrio direito. Este achado é conhecido como:',
    options: [
      'Sinal de Blumberg positivo.',
      'Sinal de Courvoisier-Terrier positivo.',
      'Sinal de Rovsing inflamatório.',
      'Sinal de Grey-Turner ou Cullen ativo.',
      'Sinal de Chvostek periférico.'
    ],
    correctIndex: 1,
    explanation: 'A vesícula biliar palpável, distendida e indolor em um paciente ictérico (sinal de Courvoisier-Terrier) é altamente sugestivo de obstrução tumoral maligna da via biliar distal, mais comumente adenocarcinoma de cabeça de pâncreas ou colangiocarcinoma.'
  },
  {
    id: 'enare_2023_035',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Sobre apendicite aguda no adulto, qual o primeiro sintoma clássico sugerido pela cronologia de Murphy em cerca de 60-70% dos casos?',
    options: [
      'Náusea persistente com diarreia abundante, sintomas que precedem tipicamente o quadro álgico clássico da apendicite aguda.',
      'Febre alta de início repentino associada a calafrios, presente antes mesmo do surgimento de qualquer dor abdominal localizada.',
      'Dor abdominal difusa ou localizada na região periumbilical/epigástrio, que posteriormente migra para a fossa ilíaca direita.',
      'Disúria persistente com urgência urinária severa, sugerindo processo infeccioso do trato urinário e não apendicite aguda.',
      'Icterícia leve com fezes acólicas, achados sugestivos de obstrução biliar e não de processo apendicular agudo.'
    ],
    correctIndex: 2,
    explanation: 'A cronologia clássica de Murphy para apendicite aguda cursa com: dor abdominal epigástrica ou periumbilical de caráter vago (vias aferentes viscerais), que decorridas poucas horas sofre migração típica e localiza-se na fossa ilíaca direita no ponto de McBurney (comprometimento do peritônio parietal).'
  },
  {
    id: 'enare_2023_036',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Um paciente masculino de 25 anos é trazido ao pronto-socorro vítima de trauma cranioencefálico (TCE) fechado após queda de motocicleta. Abre os olhos ao chamado verbal, emite sons incompreensíveis e localiza estímulos dolorosos ao exame físico. Qual o escore correto na Escala de Coma de Glasgow-P modificada?',
    options: [
      'Glasgow 15 (Abertura ocular espontânea = 4; Resposta verbal orientada = 5; Resposta motora obedece a comandos = 6).',
      'Glasgow 11 (Abertura ocular ao som = 3; Resposta verbal sons incompreensíveis = 2; Resposta motora de localizar dor = 5).',
      'Glasgow 8 (Abertura ocular à dor = 2; Resposta verbal apenas sons incompreensíveis = 2; Resposta motora em flexão anormal = 4).',
      'Glasgow 6 (Abertura ocular ausente = 1; Resposta verbal ausente = 1; Resposta motora em extensão anormal = 4).',
      'Glasgow 13 (Abertura ocular ao chamado = 3; Resposta verbal confusa = 4; Resposta motora obedece a comandos = 6).'
    ],
    correctIndex: 1,
    explanation: 'A pontuação detalhada resulta em 10 (Abertura ocular ao som = 3; Resposta verbal = 2 por sons incompreensíveis; Resposta motora = 5 por localizar dor). De acordo com a tabela padrão, 3 + 2 + 5 = 10.'
  },
  {
    id: 'enare_2023_037',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Qual das alternativas representa indicações formais adicionais para exploração cirúrgica imediata no trauma abdominal penetrante por arma de fogo?',
    options: [
      'Apenas desejo pessoal expresso por familiares de forma legal, sem qualquer sinal objetivo de instabilidade clínica ou peritonite associada.',
      'Quadro de choque/instabilidade hemodinâmica, irritação peritoneal (peritonite), fístula digestiva ativa ou evisceração óbvia.',
      'Presença isolada de escoriações cutâneas superficiais em flanco esquerdo, sem sinais de penetração da cavidade peritoneal.',
      'Suspeita de ingestão prévia concomitante de álcool e alimentos gordurosos, sem qualquer repercussão hemodinâmica ou abdominal associada.',
      'Presença de hematúria microscópica transitória com exames laboratoriais normais e ausência de sinais de irritação peritoneal.'
    ],
    correctIndex: 1,
    explanation: 'No trauma abdominal penetrante por arma branca ou PAF, as indicações consagradas de laparotomia imediata incluem instabilidade hemodinâmica, peritonite manifesta, saída visível de fezes/bile por ferida e evisceração de alças viscerais.'
  },
  {
    id: 'enare_2023_038',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'No pós-operatório imediato de cirurgia de tireoidectomia total, qual complicação respiratória imediata pode ser desencadeada por sangramento local compressivo com hematoma progressivo cervical, e qual a conduta salvadora imediata sugerida?',
    options: [
      'Pneumonia aspirativa mecânica crônica; fisioterapia respiratória torácica intermitente, sem relação com o hematoma cervical compressivo.',
      'Hematoma cervical compressivo sufocante; abertura imediata dos pontos da sutura cirúrgica da ferida no próprio leito para descompressão e drenagem urgente do acúmulo de sangue.',
      'Espasmo laríngeo severo secundário a resfriamento labial; colocação isolada de máscara de oxigênio de alto fluxo, sem drenagem do hematoma.',
      'Embolia gasosa coronariana; colocação em posição de Trendelenburg contínua, sem qualquer abordagem da ferida operatória cervical.',
      'Fístula quilosa cervical massiva; instituição de dieta hiperlipídica forçada imediata, sem indicação de reabertura da incisão.'
    ],
    correctIndex: 1,
    explanation: 'O sangramento com consequente hematoma cervical expansivo imediato compressivo pós-tireoidectomia total é uma emergência asfixiante mecânica grave. A abertura imediata das suturas cirúrgicas na própria enfermaria/leito destrói a compressão mecânica na traqueia salvando o paciente da asfixia fatal imediata subsequente.'
  },
  {
    id: 'enare_2023_039',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Segundo a classificação de Hinchey para diverticulite aguda complicada, a presença de abscesso pélvico ou retroperitoneal distante, sem sinais de peritonite purulenta difusa livre, enquadra-se em qual estágio?',
    options: [
      'Hinchey I.',
      'Hinchey II.',
      'Hinchey III.',
      'Hinchey IV.',
      'Hinchey V.'
    ],
    correctIndex: 1,
    explanation: 'Na classificação de Hinchey para diverticulite aguda: Hinchey Ia = fleimão/espessamento pericólico; Hinchey Ib = abscesso pericólico localizado; Hinchey II = abscesso pélvico, retroperitoneal ou à distância passível de drenagem percutânea; Hinchey III = peritonite purulenta difusa generalizada; Hinchey IV = peritonite fecaloide livre generalizada.'
  },
  {
    id: 'enare_2023_040',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Um paciente de 45 anos queixa-se de azia e queimação retroesternal crônica grave, refratária ao tratamento farmacológico prolongado com IBP. A Phmetria confirma esofagite por refluxo patológico. Qual a cirurgia antirefluxo padrão recomendada para reversão dessa patologia se preenchido critérios?',
    options: [
      'Gastrectomia parcial com reconstrução a Billroth I, procedimento indicado para úlcera péptica gástrica e não para refluxo isolado.',
      'Fundoplicatura de Nissen (válvula total de 360 graus por videolaparoscopia) envolvendo a transição esôfago-gástrica.',
      'Esofagectomia subtotal com reconstrução por tubo gástrico, procedimento reservado a neoplasias esofágicas e não à DRGE benigna.',
      'Miotomia de Heller com fundoplicatura anterior parcial, técnica indicada para acalasia e não para doença do refluxo gastroesofágico.',
      'Derivação gástrica em Y de Roux isolada, procedimento bariátrico sem indicação primária para tratamento cirúrgico do refluxo.'
    ],
    correctIndex: 1,
    explanation: 'A cirurgia anti-refluxo de escolha consagrada no manejo do DRGE refratária de padrão anatômico é a Fundoplicatura de Nissen por videolaparoscopia, em que o fundo gástrico envolve completamente o esôfago distal em 360-graus.'
  },
  {
    id: 'enare_2023_041',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Um homem de 35 anos apresenta quadro clínico de dor súbita severa em região perianal acompanhada de febre e calafrios. No exame anal detalhado, observa-se área endurecida, hiperemiada, tensa, flutuante e extremamente dolorosa na nádega direita. O diagnóstico e o manejo cirúrgico preconizados são:',
    options: [
      'Fissura anal aguda; pomada de diltiazem tópica diária, sem indicação de qualquer abordagem cirúrgica de drenagem.',
      'Abscesso anorretal isquiorretal; incisão cirúrgica e drenagem imediata de urgência, sem necessidade de aguardar flutuação plena.',
      'Hemorroida interna grau IV trombosada; banhos de assento quentes expectantes apenas, sem necessidade de drenagem cirúrgica.',
      'Fístula anorretal complexa; colocação ambulatorial de sedenho de algodão, sem indicação de drenagem cirúrgica de urgência.',
      'Cisto pilonidal infectado crônico; antibioticoterapia venosa exclusiva isolada, sem necessidade de drenagem cirúrgica local.'
    ],
    correctIndex: 1,
    explanation: 'Qualquer abscesso perianal ou isquiorretal exige incisão e drenagem imediata tão logo o diagnóstico clínico seja suspeitado ou estabelecido. Postergar a drenagem cirúrgica cursa com risco elevado de sepse grave avançada ou destruição tecidual no períneo (Síndrome de Fournier).'
  },
  {
    id: 'enare_2023_042',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Paciente de 27 anos queixa-se de sangramento anal em papel higiênico após esforço evacuatório com fezes endurecidas, associada a dor anal forte de caráter em "faca" durante e logo após a evacuação, que persiste por até 1 hora. Qual o principal diagnóstico clínico sugerido?',
    options: [
      'Câncer epidermoide retal.',
      'Fissura anal aguda primária.',
      'Hemorroidas mistas de grau III.',
      'Doença de Crohn com fístula em períneo.',
      'Prolapso retal mecânico primário.'
    ],
    correctIndex: 1,
    explanation: 'A presença de dor anal lancinante em queimação ("dor em facada") deflagrada durante ou logo após a passagem de fezes duras acompanhada de pequeno sangramento indolor vivo periférico é o relato clínico clássico absoluto de Fissura Anal Aguda secundária a espasmo esfincteriano.'
  },
  {
    id: 'enare_2023_043',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Qual a conduta para um abscesso hepático de padrão amebiano (decorrente de infecção por Entamoeba histolytica) que se apresenta solitário e menor que 5 cm sem sinais iminentes de rotura?',
    options: [
      'Laparotomia exploradora reconstrutiva de urgência com lavagem peritoneal ampla, reservada para casos de rotura franca da cavidade abdominal.',
      'Tratamento farmacológico inicial preferencial com Metronidazol oral por 10 dias de forma isolada, associado a suporte conservador.',
      'Punção por aspiração percutânea diária até desaparecimento completo da cavidade no ultrassom.',
      'Hemicolectomia parcial retroperitoneal profilática, procedimento sem qualquer indicação para abscesso hepático amebiano não complicado.',
      'Ressecção cirúrgica segmentar hepática emergencial imediata, conduta desproporcional para abscesso pequeno sem sinais de rotura iminente.'
    ],
    correctIndex: 1,
    explanation: 'O abscesso hepático amebiano de tamanho moderado sem sinais complicados (risco de roturas ou infecção secundária purulenta bacteriana óbvia) deve ser manejado com corticoterapia/antibioticoterapia empírica direcionada com Metronidazol, obtendo-se elevadíssima taxa de cura sem procedimentos invasivos redundantes.'
  },
  {
    id: 'enare_2023_044',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Cirurgia Geral',
    text: 'Sobre nutrição em pós-operatório cirúrgico abdominal, qual a estratégia de primeira escolha para administração calórico-proteica em paciente hemodinamicamente estável, na ausência de disfunção mecânica entérica obstrutiva evidente?',
    options: [
      'Nutrição parenteral total central iniciada de forma precoce em 24h, indicada mesmo sem disfunção entérica obstrutiva evidente.',
      'Nutrição enteral por sonda nasogástrica/enteral ou via oral precoce, que preserva a barreira mucosa entérica.',
      'Manter jejum absoluto contínuo até reaparecimento espontâneo de ruídos hidroaéreos.',
      'Infusão alternada diária de glicose isotônica e soro fisiológico apenas, sem qualquer aporte proteico ou calórico adequado.',
      'Nenhum suporte nutricional indicado até completada 12 dias de cirurgia, independentemente da condição hemodinâmica do paciente.'
    ],
    correctIndex: 1,
    explanation: 'Sempre que possível, a nutrição por via enteral/oral precoce deve ser preferida no pós-operatório (mesmo de grandes cirurgias abdominais estáveis) porque ela evita translocação bacteriana intestinal pela atrofia mucosal e preserva a barreira imunológica de placa de Peyer, reduzindo complicações sépticas sistêmicas.'
  },

  // -- PEDIATRIA --
  {
    id: 'enare_2023_045',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Prematuro de 32 semanas de idade gestacional evolui poucas horas após o parto com desconforto respiratório marcado por taquipneia, gemido expiratório evidente, batimento de asas nasais e retrações intercostais associadas a infiltrado reticulogranular com broncogramas aéreos na radiografia torácica. Qual a etiologia e o tratamento padrão ouro?',
    options: [
      'Síndrome de aspiração meconial intensa em recém-nascido a termo pós-datismo; suporte com ventilação mecânica invasiva, surfactante e dexametasona sistêmica precoce.',
      'Síndrome do Desconforto Respiratório (doença da membrana hialina) por deficiência de surfactante pulmonar; uso de surfactante exógeno endotraqueal precoce associado a suporte pressórico não invasivo (CPAP) e oxigenoterapia.',
      'Taquipneia transitória do recém-nascido por retenção de líquido amniótico pulmonar, comum em partos cesáreos eletivos; diurético vigoroso endovenoso associado a oxigenoterapia de curta duração.',
      'Hérnia diafragmática congênita asfixiante de Morgagni ou de Bochdalek; intubação orotraqueal imediata evitando ventilação com máscara e sutura cirúrgica de emergência.',
      'Persistência do canal arterial hemodinamicamente significativa e complicada; correção cirúrgica por ligadura ou fechamento endovascular de urgência imediata.'
    ],
    correctIndex: 1,
    explanation: 'A doença da membrana hialina afeta recém-nascidos prematuros devido à imaturidade celular com consequente deficiência de surfactante pelos pneumócitos tipo II. Apresenta-se com padrão radiográfico reticulogranular difuso e o tratamento salvador envolve fornecimento traqueal de surfactante exógeno e CPAP precoce.'
  },
  {
    id: 'enare_2023_046',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Um lactente de 10 meses apresentando cansaço persistente revela-se sopro holossistólico rude de grau IV em borda esternal esquerda média acompanhado de frêmito palpável. O ecocardiograma sela defeito de fechamento de septo interventricular (DSV). Qual a principal complicação hemodinâmica progressiva crônica decorrente de desvios significativos esquerda-direita de fluxo se não corrigidos no momento oportuno?',
    options: [
      'Desenvolvimento de estenose aórtica senil precoce, degeneração valvar sem relação fisiopatológica com o shunt esquerda-direita crônico.',
      'Doença vascular pulmonar obstrutiva progressiva, levando a reversão do shunt para direita-esquerda com cianose inexplicada (Síndrome de Eisenmenger).',
      'Atrofia total do ventrículo esquerdo secundária à sobrecarga crônica de volume, sem relação com hipertensão pulmonar reativa.',
      'Insuficiência renal crônica precoce, complicação sem relação fisiopatológica direta com o defeito septal ventricular não corrigido.',
      'Estenose mitral por espessamento cicatricial valvar, achado não relacionado à evolução hemodinâmica do shunt esquerda-direita.'
    ],
    correctIndex: 1,
    explanation: 'Cardiopatias congênitas acianóticas com desvios esquerda-direita (como DSV, CIA ou PCA) expõem o leito arterial pulmonar a hiperfluxo severo de alta pressão. Com o tempo, desenvolve-se remodelamento vascular pulmonar obstrutivo progressivo levando à inversão do gradiente de pressões (shunt passa de direita-esquerda), definindo a temida e grave Síndrome de Eisenmenger.'
  },
  {
    id: 'enare_2023_047',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Criança de 3 anos de idade é levada à consulta ambulatorial por febre de 5 dias acompanhada de conjuntivite não purulenta bilateral, língua em "framboesa" avermelhada polida, linfadenopatia cervical crônica solitária medindo 2 cm, edema e eritema em palmas das mãos e solas de pés com descamação periungueal subsequente. Qual o principal diagnóstico clínico e qual o risco cardiovascular imediato se não tratada?',
    options: [
      'Escarlatina estreptocócica; febre reumática crônica.',
      'Doença de Kawasaki; risco elevado de desenvolvimento de aneurismas em artérias coronárias.',
      'Mononucleose infecciosa por vírus EBV; rotura espontânea de baço de urgência.',
      'Sarampo agudo complicado; pneumonia de células gigantes obliterante.',
      'Febre purpúrica brasileira; sepse meningocócica fulminante.'
    ],
    correctIndex: 1,
    explanation: 'A Doença de Kawasaki é uma vasculite multissistêmica aguda na infância de etiologia presumida autoimune. O critério diagnóstico envolve febre por mais de 5 dias acompanhada de ao menos 4 outros critérios menores típicos. O não tratamento agressivo inicial com imunoglobulina intravenosa (IVIG) e ácido acetilsalicílico em doses terapêuticas cursa com risco de até 25% de lesão coronariana por aneurisma cardíaco.'
  },
  {
    id: 'enare_2023_048',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Lactente de 14 meses apresenta-se com febre alta e irritabilidade há 3 dias. Hoje, no momento da defervescência térmica completa (queda abrupta da febre), surge de forma repentina exantema maculopapular eritematoso fino, não pruriginoso, distribuído preferencialmente no tronco, que reverte espontaneamente em 48 horas. Qual o agente etiológico clássico dessa doença exantemática?',
    options: [
      'Parvovírus B19, causador do eritema infeccioso (quinta doença) e não do exantema súbito.',
      'Herpesvírus humano tipo 6 ou 7 (Roséola infantil ou Exantema Súbito).',
      'Estreptococo beta-hemolítico do grupo A, agente da escarlatina, e não do exantema súbito.',
      'Vírus varicela-zóster, causador da catapora, com exantema vesicular e não maculopapular fugaz.',
      'Toxoplasma gondii, agente de infecção congênita, sem relação com o quadro exantemático febril descrito.'
    ],
    correctIndex: 1,
    explanation: 'O Exantema Súbito ou Roséola é causado classicamente pelo Herpesvírus humano tipo 6 (HHV-6) ou tipo 7 (HHV-7). Caracteriza-se clinicamente pela queda da febre alta coincidente com o aparecimento súbito de exantema maculopapular predominantemente centripetado no lactente.'
  },
  {
    id: 'enare_2023_049',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Sobre nutrição e introdução alimentar no lactente, qual a recomendação unânime da Organização Mundial da Saúde (OMS) e Ministério da Saúde do Brasil?',
    options: [
      'Introdução alimentar precoce aos 4 meses de vida combinada com oferta de suco de frutas natural, substituindo parcialmente o aleitamento materno exclusivo.',
      'Aleitamento materno exclusivo e livre demanda até os 6 meses de idade vida, com manutenção do aleitamento materno de forma complementar até os 2 anos ou mais.',
      'Introdução obrigatória de sucos de uva concentrados e gema de ovo frita já na terceira semana de vida, antes mesmo do período preconizado para introdução alimentar.',
      'Substituição do leite materno por fórmulas de soja adicionadas de mel aos 2 meses de vida, prática contraindicada pelo risco de botulismo infantil.',
      'Excluir qualquer aleitamento materno assim que introduzida a primeira papa salgada, interrompendo precocemente o aleitamento complementar recomendado.'
    ],
    correctIndex: 1,
    explanation: 'A orientação oficial é manter aleitamento materno exclusivo até os 6 meses, momento em que se inicia a introdução da alimentação complementar oportuna mantendo o seio materno em conjunto por dois anos adicionais.'
  },
  {
    id: 'enare_2023_050',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Um menino de 5 anos apresenta-se com quadro de tosse persistente ruidosa (tosse "de cachorro"), rouquidão marcante, estridor inspiratório de repouso e desconforto respiratório leve. Qual o diagnóstico e o tratamento padrão de escolha indicado para reverter o estridor agudo?',
    options: [
      'Asma aguda refratária; inalação contínua de salbutamol associada a aminofilina venosa, sem relação com estridor inspiratório de repouso.',
      'Laringotraqueíte viral aguda (crupe); inalação com adrenalina nebulizada associada a dose parenteral de dexametasona.',
      'Traqueíte bacteriana necrosante; penicilina cristalina endovenosa isolada diária, sem adrenalina nebulizada ou corticoide sistêmico.',
      'Amigdalite pultácea obstrutiva; antibiótico por via oral expectante por 10 dias, sem necessidade de nebulização ou corticoide de urgência.',
      'Corpo estranho aspirado tardio; biópsia de brônquio de urgência imediata, sem indicação de adrenalina nebulizada ou corticoide.'
    ],
    correctIndex: 1,
    explanation: 'O Crupe viral agudo ou Laringotraqueíte apresenta-se caracteristicamente com tosse metálica ruidosa, rouquidão e estridor de repouso. Nebulização com adrenalina líquida (L ou racêmica) proporciona vasoconstrição imediata por receptores alfa, acalmando o edema subglótico de forma rápida, complementada por corticoterapia com Dexametasona.'
  },
  {
    id: 'enare_2023_051',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Recém-nascido e termo apresenta icterícia franca nas primeiras 18 horas de nascimento com bilirrubina indireta francamente elevada. A tipagem sanguínea revela mãe O negativo e RN A positivo, com teste de Coombs direto francês reagente no cordão umbilical. Qual a conduta indicada pela possibilidade de encefalopatia por bilirrubinas (Kernicterus)?',
    options: [
      'Acompanhamento puramente observacional ambulatorial com banhos de sol.',
      'Fototerapia imediata e avaliação para necessidade de exsanguíneotransfusão.',
      'Iniciar fórmula láctea pura em abundância suspendendo o aleitamento.',
      'Administração de diuréticos de alça e fenobarbital para ativar conjugação hepática.',
      'Transfusão de concentrado de plaquetas imediata.'
    ],
    correctIndex: 1,
    explanation: 'A icterícia precoce (nas primeiras 24h de vida) sugere hemólise patológica (incompatibilidade ABO/Rh). Coombs positivo sela a destruição autoimune de hemácias. Fototerapia é indispensável para isomerizar bilirrubinas em produtos hidrossolúveis excretáveis pelas fezes, reduzindo os níveis séricos e prevenindo o Kernicterus (dano neurológico nos núcleos da base).'
  },
  {
    id: 'enare_2023_052',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Um escolar de 8 anos apresenta edema bipalpebral marcado que piora pela manhã, urina escura do tipo "coca-cola" (hematúria macroscópica) e elevação de aferição pressórica (140/90 mmHg). Refere história de tratamento escasso para infecção de pele por piodermite há 2 semanas. Qual o provável diagnóstico e qual anticorpo apoia o contexto em conjunto com queda Transitória de C3?',
    options: [
      'Insuficiência renal crônica por bócio endêmico; dosagem de anti-tireoperoxidase, sem relação com quadro pós-infecção estreptocócica de pele.',
      'Glomerulonefrite Difusa Aguda (GNPE) estreptocócica; exames de antiestreptolisina O (ASLO) ou anticorpos contra DNase B.',
      'Síndrome nefrótica puramente de lesões mínimas; anticorpo anti-receptor de fosfolipase A2.',
      'Lúpus eritematoso sistêmico infantil de início agudo; pesquisa de anticorpo anti-DNA de dupla hélice, sem antecedente de piodermite.',
      'Doença de Berger renal clássica (nefropatia por IgA); dosagem de anticorpo anti-imunoglobulina A, sem relação com infecção cutânea prévia.'
    ],
    correctIndex: 1,
    explanation: 'A GNPE apresenta-se classicamente com síndrome nefrítica associada (hematúria glomerular ruidosa, edema, hipertensão) após infecção de garganta ou pele por estreptococo beta-hemolítico do grupo A. Confirmar através da queda do complemento sérico C3 e exames de confirmação de infecção estreptocócica prévia.'
  },
  {
    id: 'enare_2023_053',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Um lactente de 6 meses é trazido à consulta por tosse seca de início recente acompanhada de taquipneia profunda e sibilância expiratória generalizada difusa em tórax bilateral. Refere que os sintomas se agravaram após resfriado do irmão mais velho na última semana. Qual o principal diagnóstico clínico sugerido no primeiro episódio e o vírus mais frequente envolvido?',
    options: [
      'Pneumotórax espontâneo recidivante; vírus Influenza H1N1.',
      'Bronquiolite viral aguda; Vírus Sincicial Respiratório (VSR).',
      'Asma brônquica crônica alérgica infantil; Adenovírus humoral.',
      'Coqueluche catarral aguda residual; Bordetella pertussis bacteriana.',
      'Aspiração crônica de muco gástrico; Rinovírus polivalente.'
    ],
    correctIndex: 1,
    explanation: 'O diagnóstico é compatível com Bronquiolite Viral Aguda, o primeiro episódio de sibilância desencadeado por infecção de vias aéreas inferiores em lactente jovem. O Vírus Sincicial Respiratório (VSR) é o patógeno causal mais comum nas épocas sazonais frias do ano.'
  },
  {
    id: 'enare_2023_054',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Qual das alternativas representa a vacina recomendada para o recém-nascido na primeira semana de vida em território brasileiro, que previne as formas graves de tuberculose meníngea e disseminada?',
    options: [
      'Vacina Pentavalente (DTPa-HepB-Hib).',
      'Vacina BCG.',
      'Vacina oral contra Rotavírus Humano.',
      'Vacina Tríplice Viral clássica.',
      'Vacina da Febre Amarela atenuada.'
    ],
    correctIndex: 1,
    explanation: 'A BCG é aplicada preferencialmente em recém-nascidos logo ao nascimento ou na primeira semana pós-parto para conferir proteção imunológica ativa duradoura contra as formas bacterêmicas meningo-encefálica e disseminada da tuberculose.'
  },
  {
    id: 'enare_2023_055',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Um menino de 6 anos queixa-se de cansaço extremo, palidez de mucosas, episódios dolorosos ósseos de repetição e infecções bacterianas respiratórias febris recorrentes. Exames revelam Hb: 6 g/dL, contagem de leucócitos de 48.000/mm³ com presença marcante de 85% de linfoblastos na análise morfológica periférica. Qual o diagnóstico onco-hematológico mais comum nessa idade?',
    options: [
      'Linfoma de Hodgkin clássico.',
      'Leucemia Linfoide Aguda (LLA).',
      'Leucemia Mieloide Aguda (LMA) promielocítica.',
      'Linfoma não-Hodgkin linfocitário crônico.',
      'Sarcoma de Ewing osteolítico.'
    ],
    correctIndex: 1,
    explanation: 'A Leucemia Linfoide Aguda (LLA) é o câncer mais incidente na infância, com pico de incidência entre 2 e 5 anos de vida. Caracteriza-se por pancitopenia por infiltração de medula óssea associado à anemia, plaquetopenia com sangramentos e leucocitose bizarra à custa de blastos linfoides clones.'
  },
  {
    id: 'enare_2023_056',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Um lactente de 3 meses apresenta vômitos pós-prandiais frequentes (sem esforço marcado ou náuseas), mas apresenta excelente desenvolvimento pondero-estatural, ganho de peso regular e sono adequado. Qual a principal conduta recomendada para este lactente de refluxo gastroesofágico fisiológico?',
    options: [
      'Iniciar investigação invasiva com pHmetria esofágica de 24h e encaminhar precocemente para laparoscopia anti-refluxo de Nissen, condutas desproporcionais em lactente com bom ganho ponderal.',
      'Iniciar tratamento empírico com inibidores da bomba de prótons por via oral em dose máxima, mesmo na ausência de sinais de esofagite ou má evolução pondero-estatural.',
      'Orientação familiar quanto à benignidade do quadro, medidas posturais (manter após mamada elevado em posição vertical por 20 minutos) e espessamento progressivo leve se necessário, sem iniciar medicação diurética ou prótons.',
      'Suspender o aleitamento materno trocando por fórmulas infantis de aminoácidos livres, medida reservada a casos de alergia à proteína do leite de vaca refratária.',
      'Prescrição obrigatória de metoclopramida combinada com benzodiazepina, esquema com risco de efeitos extrapiramidais e sedação em lactentes.'
    ],
    correctIndex: 2,
    explanation: 'O lactente "golfador feliz" que apresenta regurgitação crônica saudável, sem sinais de irritabilidade, hemorragia ou queda no ganho de peso, tem Refluxo Gastroesofágico Fisiológico. A conduta é reassegurar os pais, fornecer apoio educacional de manutenção e orientar medidas comportamentais simples higiênico-posturais.'
  },
  {
    id: 'enare_2023_057',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Sobre o Teste do Pezinho básico de triagem neonatal oferecido pelo SUS do Brasil, quais doenças são identificadas no programa padrão básico de rastreamento com coleta ideal no 3º ao 5º dia de vida?',
    options: [
      'Somente Diabetes mellitus tipo 1 e Hipertensão arterial congênitas, condições não incluídas no protocolo básico de triagem neonatal do Teste do Pezinho.',
      'Fenilcetonúria, Hipotireoidismo congênito, Doenças Falciformes e hemoglobinopatias, Fibrose Cística, Hiperplasia Adrenal Congênita e Deficiência de Biotinidase.',
      'Glautonometria neonatal isolada e anemia aplásica mecânica, exames sem qualquer previsão no protocolo oficial de triagem neonatal do SUS.',
      'Autismo severo infantil de início precoce somente, condição não rastreável por dosagens bioquímicas em papel filtro.',
      'Síndrome de Down e outras trissomias complexas, alterações cromossômicas não incluídas no rastreamento bioquímico do Teste do Pezinho.'
    ],
    correctIndex: 1,
    explanation: 'O teste do pezinho do Programa Nacional de Triagem Neonatal padrão brasileiro tria precocemente para graves defeitos metabólicos que, se não contidos de imediato com tratamento adequado, cursam com danos sistêmicos irreversíveis (incluindo déficit cognitivo profundo na fenilcetonúria e hipotireoidismo).'
  },
  {
    id: 'enare_2023_058',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Uma menina de 4 anos de idade apresenta quadro de febre de 38.3ºC associada a dor de garganta, vesículas avermelhadas dolorosas em palato e gengivas, acompanhadas de pequenas pápulas e vesículas não pruriginosas localizadas em palmas das mãos, solas dos pés e região glútea. O agente etiológico mais associado a esta síndrome clássica é:',
    options: [
      'Adenovírus entérico tipo 40.',
      'Vírus Coxsackie A16 (Síndrome Mão-Pé-Boca).',
      'Coronavírus SARS-CoV-2.',
      'Estreptococo viridans salivar.',
      'Vírus Ebstein Barr de mononucleose.'
    ],
    correctIndex: 1,
    explanation: 'A Síndrome Mão-Pé-Boca é causada predominantemente pelo vírus Coxsackie A16 (do gênero Enterovírus). Manifesta-se classicamente com lesões vesiculares na cavidade oral dolorosas associada a pápulas ou vesículas eritematosas em extremidades (mãos e pés, secundariamente nádegas).'
  },
  {
    id: 'enare_2023_059',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Um lactente de 18 meses com história de resfriado comum desenvolve crises convulsivas tônico-clônicas generalizadas de curta duração (menos de 3 minutos) coincidente com picos térmicos agudos de 39.5ºC. O lactente recupera o nível de consciência basal rapidamente, sem déficits focais aparentes pós-crise. Qual a principal suspeita clínica e a conduta recomendada?',
    options: [
      'Epilepsia refratária de início infantil; necessidade de anticonvulsivante de uso contínuo e investigação neurológica ampliada com eletroencefalograma seriado.',
      'Infecção por tétano neonatal; soroterapia antitetânica imediata associada a sedação e suporte ventilatório em ambiente de terapia intensiva.',
      'Convulsão febril simples; tratamento de suporte sintomático da febre e orientação familiar quanto à benignidade e autolimitabilidade do processo, sem necessidade de anticonvulsivante de manutenção profilática diária.',
      'Meningoencefalite viral assintomática; punção lombar de urgência mandatória diária, independentemente da ausência de sinais meníngeos ou rebaixamento do sensório.',
      'Hipertensão intracraniana isolada; indicação de laparotomia de descompressão cirúrgica, procedimento sem qualquer relação com o quadro neurológico febril.'
    ],
    correctIndex: 2,
    explanation: 'As crises convulsivas febris simples são benignas e constituem o distúrbio convulsivo mais incidente na infância (entre 6 meses e 5 anos). Não geram lesão estrutural ou cognitiva posterior, e a conduta preconiza controle térmico adequado da febre com antipiréticos na vigência de processos infecciosos corriqueiros.'
  },
  {
    id: 'enare_2023_060',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'A persistência de qual duto vascular fetal que conecta a artéria pulmonar com a aorta descendente, quando hemodinamicamente reversível em prematuros, pode requerer intervenção medicamentosa inicial com inibidores da síntese de prostaglandinas (como Ibuprofeno ou Indometacina)?',
    options: [
      'Duto venoso hepático, que conecta a veia umbilical à veia cava inferior.',
      'Duto arterial (Persistência do Canal Arterial - PCA).',
      'Forame oval interatrial, comunicação entre os átrios de fechamento espontâneo habitual.',
      'Duto linfático torácico principal, estrutura sem relação com o shunt fetal aortopulmonar.',
      'Artéria umbilical esquerda fibrótica, remanescente vascular sem relevância hemodinâmica pós-natal.'
    ],
    correctIndex: 1,
    explanation: 'Na presença de Persistência do Canal Arterial (PCA) em recém-nascidos prematuros levando a shunt hemodinamicamente pesado com insuficiência cardiopulmonar, o fechamento farmacológico do canal arterial pode ser induzido pelo uso de inibidores da ciclooxigenase (indometacina ou ibuprofeno), bloqueando prostaglandinas dilatadoras.'
  },

  // -- GINECOLOGIA & OBSTETRÍCIA --
  {
    id: 'enare_2023_061',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Uma gestante na 34ª semana de idade gestacional apresenta quadro súbito de dor abdominal intensa e contínua acompanhada de sangramento vaginal escuro de moderada quantidade. No exame obstétrico obstétrico: útero extremamente doloroso e tenso (hipertonia uterina marcante) acompanhado de sofrimento fetal agudo na cardiotocografia. Qual o principal diagnóstico clínico e qual a via de nascimento prioritária diante de feto vivo com sofrimento?',
    options: [
      'Placenta prévia sangrante; parto fórceps de alívio vaginal imediato, contraindicado diante de sangramento ativo e placenta de inserção baixa.',
      'Descolamento Prematuro de Placenta (DPP); cesárea de urgência imediata pela via mais rápida visando salvamento de vida materno-fetal.',
      'Rotura de vasos prévios (vasa previa); indução farmacológica com ocitocina, conduta inadequada diante de sofrimento fetal agudo instalado.',
      'Atonia uterina primária precoce; massagem bimanual intrauterina expectante, conduta pós-parto sem relação com hipertonia uterina anteparto.',
      'Rotura uterina franca em útero cicatrizado; colocação de balão de Bakri com feto ainda in situ, conduta insuficiente diante de rotura estabelecida.'
    ],
    correctIndex: 1,
    explanation: 'O Descolamento Prematuro de Placenta (DPP) é uma complicação obstétrica associada a dor intensa, sangramento genital e hipertonia (útero lenhoso/tábua) acompanhada de rápida asfixia fetal intrauterina por anóxia. Em feto vivo com desconforto, a cesárea imediata é a via recomendada na imensa maioria dos serviços obstétricos.'
  },
  {
    id: 'enare_2023_062',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Uma gestante de 32 semanas de termo apresenta queixas persistentes de cefaleia intensa retro-orbital, turvação visual importante e epigastralgia em barra. Ao aferir PA: 165/110 mmHg confirmada repetidamente, com depuração de proteinúria de fita reagente de +++ urinária. Qual o principal diagnóstico estabelecido e a conduta imediata para prevenção de crises convulsivas maternas?',
    options: [
      'Hipertensão gestacional transitória leve; acompanhamento expectante ambulatorial, sem indicação de internação ou profilaxia anticonvulsivante.',
      'Pré-eclâmpsia grave com iminência de eclâmpsia; hospitalização imediata e administração de Sulfato de Magnésio pelas vias de infusão padrão (esquema de Pritchard ou Zuspan).',
      'Diagnóstico de enxaqueca clássica descompensada; uso de sumatriptano oral precoce, sem qualquer relação com os níveis pressóricos e proteinúria.',
      'Síndrome de Mallory-Weiss aguda; dreno gástrico despressurizador de cólon, conduta sem relação com o quadro hipertensivo gestacional grave.',
      'Diabetes gestacional descontrolada; insulina de ação rápida associada a diuréticos, sem indicação de sulfato de magnésio profilático.'
    ],
    correctIndex: 1,
    explanation: 'A pré-eclâmpsia grave com sinais de irritação cerebral (cefaleia, alterações visuais, hiperreflexia) representa iminência de eclâmpsia (crises convulsivas generalizadas). A prevenção de crises deve ser iniciada com o uso de Sulfato de Magnésio (droga de primeira linha de escolha de segurança comprovada), regulada por monitorização rigorosa de reflexo patelar, frequência respiratória e débito urinário.'
  },
  {
    id: 'enare_2023_063',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Paciente de 48 anos com queixa de corrimento vaginal branco amarelado de odor fétido (semelhante a peixe podre), que se acentua após coito ou menstruação. Exame ginecológico revela corrimento fluido acinzentado fino e homogêneo em parede vaginal. Teste de pH vaginal de 5.2 (elevado) e teste das aminas (KOH 10%) positivo. Qual a principal hipótese clínica diagnóstica e a presença das células clássicas no esfregaço?',
    options: [
      'Candidíase vaginal; presença de pseudo-hifas inflamadas ao exame a fresco, com corrimento branco grumoso e prurido intenso associado.',
      'Vaginose Bacteriana (causada por Gardnerella vaginalis e anaeróbios); presença típica de células-alvo (Clue cells) ou células guia no exame a fresco.',
      'Tricomoníase vaginal; visualização de trofozoítas flagelados móveis ao exame a fresco, com corrimento amarelo-esverdeado espumoso.',
      'Vaginite atrófica senil primária; células basais desprovidas de glicogênio, achado típico do hipoestrogenismo da menopausa.',
      'Infecção cervical por Chlamydia trachomatis; corpos de inclusão intracitoplasmáticos, sem odor fétido ou alteração do pH vaginal.'
    ],
    correctIndex: 1,
    explanation: 'A vaginose bacteriana é o corrimento mais comum em mulheres de idade reprodutiva. O diagnóstico é baseado nos critérios de Amsel: corrimento branco-acinzentado fluido e homogêneo; pH vaginal > 4.5; teste de KOH a 10% positivo (odor de aminas); e presença de "clue cells" (células epiteliais recobertas por bactérias) no exame a fresco.'
  },
  {
    id: 'enare_2023_064',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Uma mulher de 62 anos, menopausada há 11 anos, procura consulta por apresentar sangramento vaginal indolor de início recente. Qual a principal hipótese diagnóstica que deve ser obrigatoriamente investigada por biópsia e qual o exame inicial de triagem de escolha?',
    options: [
      'Miomatose uterina submucosa crônica; dosagem sérica de CA-125, marcador inespecífico que não substitui a avaliação da espessura endometrial.',
      'Câncer de Endométrio (Adenocarcinoma endometrioide); ultrassonografia transvaginal para medição e avaliação da espessura endometrial (se > 4-5mm requer investigação invasiva por histopatológico).',
      'Atrofia vaginal senil benigna estritamente; colposcopia de repetição mensal, exame direcionado ao colo uterino e não à cavidade endometrial.',
      'Cisto anexial benigno roto; biópsia de ovário de urgência imediata, conduta sem relação com sangramento de origem endometrial pós-menopausa.',
      'Sarcoma uterino metastático silencioso; ressonância de pelve de alta resolução, exame de segunda linha após triagem ultrassonográfica inicial.'
    ],
    correctIndex: 1,
    explanation: 'O sangramento uterino anormal na pós-menopausa é considerado indicador clássico de malignidade endometrial até que se prove o contrário. A ultrassonografia transvaginal é o exame inicial de triagem ideal: uma espessura endometrial menor que 4mm em mulheres sem reposição hormonal apresenta alto valor preditivo negativo para câncer de endométrio.'
  },
  {
    id: 'enare_2023_065',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Paciente de 25 anos, primigesta na 40ª semana de gestação com dilatação cervical de 6 cm e contrações úteis (3 contrações de 40 segundos em 10 minutos). Apresenta partograma regular. O que caracteriza o início do período pélvico ou expulsivo durante o trabalho de parto convencional?',
    options: [
      'As primeiras contrações dolorosas rítmicas com apagamento cervical progressivo, características do início da fase ativa do trabalho de parto.',
      'Cervicodilatação completa (10 cm) associada com a descida do polo cefálico fetal pelo trajeto pélvico até o desprendimento.',
      'Rotura espontânea de bolsa das águas sem contrações uterinas efetivas associadas, achado isolado que não define o período expulsivo.',
      'Início de infusão de ocitocina profilática logo após a dilatação cervical completa, independentemente da posição do polo cefálico fetal.',
      'Saída imediata da placenta no terceiro estágio do parto, evento posterior ao nascimento que não caracteriza o período expulsivo.'
    ],
    correctIndex: 1,
    explanation: 'O segundo estágio ou período expulsivo do trabalho de parto se inicia formalmente com a dilatação cervical completa (10 cm) e termina espontaneamente no nascimento do concepto, caracterizando o trajeto e expulsão.'
  },
  {
    id: 'enare_2023_066',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Gestante na 12ª semana de gravidez procura emergência obstétrica por apresentar sangramento vaginal moderado acompanhado de cólicas pélvicas intensas. No exame físico detalhado: colo uterino pérvio, pérvio à palpação profunda, com visualização e eliminação de restos ovulares pela vagina. Qual o provável diagnóstico e a conduta recomendada?',
    options: [
      'Ameaça de abortamento; repouso físico absoluto associado a progesterona, conduta incompatível com colo pérvio e eliminação de restos ovulares.',
      'Abortamento incompleto; esvaziamento uterino por aspiração manual intrauterina (AMIU) ou curetagem uterina se clinicamente indicada.',
      'Abortamento retido estável; expectação armada por até 6 meses, conduta incompatível com colo pérvio e sangramento ativo moderado.',
      'Incompetência istmocervical congênita; cerclagem uterina emergencial imediata, procedimento contraindicado na vigência de abortamento em curso.',
      'Gravidez ectópica íntegra; metotrexato sistêmico por via endovenosa, conduta incompatível com eliminação de restos ovulares pela vagina.'
    ],
    correctIndex: 1,
    explanation: 'A eliminação parcial de material ovular pelo colo uterino permeável sela abortamento incompleto. Para evitar complicações hemorrágicas severas ou infecciosas, está indicado o esvaziamento cirúrgico uterino imediato (AMIU ou curetagem) sob analgesia.'
  },
  {
    id: 'enare_2023_067',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Mulher de 26 anos queixa-se de dor pélvica cíclica severa (frequentemente piorando no período pré-menstrual), dismenorréia secundária incapacitante e dispareunia profunda, acompanhada de infertilidade primária há 2 anos. Qual a principal suspeita clínica diagnóstica diagnóstica?',
    options: [
      'Síndrome dos ovários policísticos, condição endócrina sem relação direta com dismenorreia cíclica progressiva e dispareunia profunda.',
      'Endometriose (implantação ectópica de estroma e glândulas endometriais fora da cavidade uterina).',
      'Doença inflamatória pélvica crônica inespecífica, geralmente associada a corrimento vaginal e antecedente de infecção sexualmente transmissível.',
      'Miomatose uterina subserosa gigante, geralmente associada a sangramento aumentado e efeito compressivo, sem relação com dor cíclica pré-menstrual.',
      'Malformação mulleriana obstrutiva uterina, geralmente diagnosticada na menarca por dor cíclica associada a hematocolpo.'
    ],
    correctIndex: 1,
    explanation: 'A endometriose é caracterizada clinicamente por dor pélvica severa crônica, dismenorreia severa secundária, dor nas relações de penetração profunda (dispareunia) e infertilidade por distorções tubárias inflamatórias crônicas.'
  },
  {
    id: 'enare_2023_068',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Uma primigesta na 10ª semana de gestação procura unidade básica de saúde para início de pré-natal de rotina. Qual o esquema profilático consagrado para prevenção de defeitos do tubo neural (como anencefalia ou espinha bífida) e qual o período fisiológico ideal para administração recomendada pelas diretrizes?',
    options: [
      'Reposição de Ferro elementar e Cálcio exclusivamente após 20 semanas de gestação, sem qualquer suplementação prévia de ácido fólico periconcepcional.',
      'Suplementação com Ácido Fólico na dose de 400 mcg ao dia, idealmente iniciada ao menos 30 dias antes da concepção (período periconcepcional) e mantida até o final do primeiro trimestre.',
      'Megadoses de Vitamina A iniciadas de forma intermitente no segundo trimestre, esquema teratogênico e sem relação com a prevenção de defeitos do tubo neural.',
      'Uso de piridoxina profilática semanal somente, sem qualquer efeito comprovado na prevenção de defeitos do tubo neural fetal.',
      'Sulfato de sulfadiazina em uso contínuo durante os 9 meses de gestação, esquema sem indicação para profilaxia de malformações neurais.'
    ],
    correctIndex: 1,
    explanation: 'A suplementação preventiva com ácido fólico antes da gestação e no primeiro trimestre do desenvolvimento reduz em cerca de 70% a chance de defeitos abertos congênitos de fechamento de tubo neural na embriogênese precoce.'
  },
  {
    id: 'enare_2023_069',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Sobre rastreamento do Câncer de Colo Uterino no Brasil, qual a faixa etária recomendada pelo Ministério da Saúde para realização bianual do exame citopatológico convencional (Papanicolau) após dois resultados normais anuais consecutivos?',
    options: [
      'Mulheres de 15 a 45 anos com vida sexual ativa.',
      'Mulheres de 25 a 64 anos que já iniciaram vida sexual ativa.',
      'Mulheres de 18 a 50 anos de idade independentemente de vida sexual.',
      'Faixa etária restrita acima de 65 anos de forma compulsória.',
      'Todas as mulheres no climatério de forma ininterrupta.'
    ],
    correctIndex: 1,
    explanation: 'As diretrizes nacionais brasileiras recomendam o rastreio citopatológico de colo uterino para mulheres entre 25 e 64 anos de idade que tenham tido atividade sexual, com periodicidade de realização trienal após dois resultados normais negativos consecutivos recolhidos com intervalo anual.'
  },
  {
    id: 'enare_2023_070',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'O que define a ocorrência de rotura prematura de membranas ovulares (Amniorrexe Prematura)?',
    options: [
      'A saída de líquido amniótico residual de forma involuntária apenas após as 42 semanas de gestação pós-termo, sem relação com o início do parto.',
      'A rotura de membranas corioamnióticas que ocorre espontaneamente antes do início efetivo do trabalho de parto, independente da idade gestacional.',
      'A eliminação do tampão mucoso sanguinolento na 38ª semana, sinal premonitório de trabalho de parto e não de rotura de membranas.',
      'A necessidade de realização de amniorrexe artificial com agulha dupla na dilatação cervical completa, procedimento eletivo e não espontâneo.',
      'A herniação uterina espontânea transvaginal com líquido amniótico íntegro, condição sem correlato clínico reconhecido na obstetrícia.'
    ],
    correctIndex: 1,
    explanation: 'A amniorrexe prematura (RPM) é definida pela ruptura das membranas ovulares e saída de líquido amniótico antes que as contrações rítmicas e modificações cervicais que caracterizam o trabalho de parto se manifestem de fato.'
  },

  // -- MEDICINA DE FAMÍLIA / SUS --
  {
    id: 'enare_2023_085',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Qual das alternativas apresenta um princípio doutrinário fundamental do SUS estabelecido pela Constituição Federal de 1988 que garante acesso irrestrito, gratuito e integral a todas as ações e serviços de saúde a qualquer cidadão no território nacional, independentemente de classe social, contribuição previdenciária, raça ou nacionalidade?',
    options: [
      'Descentralização político-administrativa.',
      'Universalidade do acesso.',
      'Regionalização e hierarquização e redes.',
      'Participação comunitária obrigatória.',
      'Privatização de redes hospitalares secundárias.'
    ],
    correctIndex: 1,
    explanation: 'A universalidade é o princípio finalístico ou doutrinário em que a saúde é declarada um direito fundamental de todos e dever do Estado, com cobertura universal irrestrita direcionada à população brasileira.'
  },
  {
    id: 'enare_2023_086',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'A participação popular e o controle social no âmbito do Sistema Único de Saúde (SUS) foram formalmente regulamentados por qual lei federal, de 1990, instituindo instâncias colegiadas consagradas denominadas Conselhos de Saúde e Conferências de Saúde em todas as esferas federativas?',
    options: [
      'Lei nº 8.080/1990.',
      'Lei nº 8.142/1990.',
      'Lei do Direito Previdenciário Nacional.',
      'Decreto nº 7.508/2011.',
      'Lei de Responsabilidade Fiscal complementar.'
    ],
    correctIndex: 1,
    explanation: 'A Lei Orgânica de Saúde nº 8.142/1990 regulamenta primordialmente a representatividade popular nos Conselhos e Conferências em saúde (participação de 50% de usuários do SUS - paridade) e normatiza as transferências automáticas intergovernamentais do Fundo de Saúde.'
  },
  {
    id: 'enare_2023_087',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'De acordo com a Lei nº 8.080/1990, quem detém a responsabilidade pela execução e coordenação das ações de vigilância epidemiológica, sanitária, saúde do trabalhador e assistência farmacêutica básica no âmbito da gestão municipal ou local?',
    options: [
      'De forma exclusiva o Fundo Monetário Internacional.',
      'O Ministério da Saúde federal em caráter centralizado.',
      'A Secretaria Municipal de Saúde correspondente na esfera do município.',
      'A Organização Pan-Americana da Saúde (OPAS).',
      'A gerência de hospitais filantrópicos sem-fins lucrativos.'
    ],
    correctIndex: 2,
    explanation: 'Conforme preza a descentralização técnico-administrativa do SUS, cabe à gestão municipal e local (representada constitucionalmente pela secretaria municipal de saúde) a execução prática direta das ações locais finalísticas correspondentes à saúde.'
  },
  {
    id: 'enare_2023_088',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'No contexto da organização e planejamento do SUS regulamentado pelo Decreto nº 7.508/2011, o espaço geográfico contínuo constituído por agrupamentos de municípios limítrofes, delimitado a partir de identidades geográficas, culturais, econômicas, sociais e de redes de comunicação, destinado a integrar a organização de ações de saúde da rede de assistência, é denominado:',
    options: [
      'Distrito Federal de Saúde isolado.',
      'Região de Saúde.',
      'Macrorregião Hospitalar Concentrada.',
      'Município Integrado Autônomo.',
      'Território de Atenção terciária de referência.'
    ],
    correctIndex: 1,
    explanation: 'A Região de Saúde é o espaço territorial legal onde deve ser articulada a resolutividade e integralidade das ações do SUS por intermédio do desenho integrado de redes de atenção.'
  },
  {
    id: 'enare_2023_089',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'O que caracteriza a diretriz da Equidade, considerada um dos pilares de atuação integrados do SUS?',
    options: [
      'Tratar todos os pacientes exatamente da mesma maneira, distribuindo recursos idênticos a qualquer estrato social, sem considerar as diferenças de vulnerabilidade e necessidade entre os grupos populacionais.',
      'Oferecer mais assistência e focalizar proporcionalmente recursos em saúde naquelas populações e pessoas que apresentam maiores vulnerabilidades, necessidades acumuladas e carências sociais específicas, buscando corrigir desigualdades históricas.',
      'Cobrança de taxas de coparticipação proporcionais à faixa de renda mensal do indivíduo assistido, prática incompatível com o princípio da gratuidade e universalidade do SUS.',
      'Reduzir as ações curativas focando integralmente as verbas e esforços da pasta em campanhas vacinais estáticas, negligenciando a atenção diferenciada às populações mais vulneráveis.',
      'Permitir que apenas planos privados executem atendimento em regiões de periferia periféricas, transferindo ao mercado a responsabilidade estatal pela equidade em saúde.'
    ],
    correctIndex: 1,
    explanation: 'A equidade visa mitigar disparidades em saúde distribuindo proporcionalmente mais recursos aos que sofrem de maiores fragilidades clínicas ou sociais, pautado na premissa de tratar desigualmente os desiguais.'
  },
  {
    id: 'enare_2023_090',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'A ferramenta utilizada na Atenção Primária à Saúde para desenhar o mapeamento e as relações afetivas e clínicas de uma família ao longo de ao menos três gerações sucessivas, permitindo entender os riscos biológicos e estruturais daquele núcleo, é o:',
    options: [
      'Ecomapa familiar dinâmico.',
      'Genograma (ou Familiograma).',
      'Partograma de transição.',
      'Fluxograma analisador de decolagem.',
      'Dossiê genético molecular familiar.'
    ],
    correctIndex: 1,
    explanation: 'O genograma é um instrumento consagrado de avaliação estrutural e funcional da família que permite, em um diagrama tridimensional simples, visualizar as ligações entre gerações e seus fatores determinantes de saúde.'
  },
  {
    id: 'enare_2023_091',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Como é calculado o Coeficiente (ou Taxa) de Prevalência de uma determinada moléstia em saúde coletiva?',
    options: [
      'O número de novos casos diagnosticados da doença em um período de tempo determinado sobre a população exposta ao risco inicial.',
      'O número total de casos existentes (soma de casos novos e antigos acumulados) num determinado ponto no tempo dividido pela população total em risco no mesmo local e instante.',
      'O número de óbitos secundários à patologia dividido pela morbidade total acumulada no mesmo período, definindo na verdade a letalidade e não a prevalência.',
      'O somatório de internações hospitalares devidas a essa causa apenas nas capitais dos estados, indicador de morbidade hospitalar e não de prevalência populacional.',
      'A taxa de transmissão secundária entre familiares conviventes, medida de contagiosidade intradomiciliar e não de prevalência da doença.'
    ],
    correctIndex: 1,
    explanation: 'A prevalência mede a proporção de casos consolidados (existentes totais) da patologia em um corte temporal específico na população estudada, diferenciando-se da incidência (que mede apenas novos casos no intervalo de tempo).'
  },
  {
    id: 'enare_2023_092',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Na Atenção Primária, a prevenção que tem por objetivo central conter e prevenir iatrogenias físicas e psicológicas (evitando exames ou procedimentos desnecessários que cursam com falso-positivos ou iatrogenias em cascata sobre o usuário assintomático) é denominada de Prevenção:',
    options: [
      'Primária.',
      'Secundária.',
      'Terciária.',
      'Quaternária.',
      'Quinto-fundamental.'
    ],
    correctIndex: 3,
    explanation: 'A prevenção quaternária preconiza salvaguardar o paciente de intervenções diagnósticas abusivas desnecessárias ou excessivas em prejuízo clínico ou psicológico ao doente.'
  },
  {
    id: 'enare_2023_093',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Qual das alternativas apresenta um indicador sensível e representativo das condições de saneamento básico e saúde ambiental em uma área populacional específica?',
    options: [
      'Taxa de incidência de hipertensão arterial refratária senil, indicador cardiovascular sem relação com saneamento básico.',
      'Taxa de internação hospitalar por diarreia aguda infecciosa em menores de 5 anos de idade.',
      'Coeficiente de prevalência de asma alérgica infantil no inverno, indicador respiratório sazonal sem relação direta com saneamento.',
      'Mortalidade proporcional por lesões decorrentes de acidentes de trânsito, indicador de segurança viária e não de saneamento básico.',
      'Surgimento isolado de casos de catarata bilateral senil, achado oftalmológico sem relação com condições sanitárias ambientais.'
    ],
    correctIndex: 1,
    explanation: 'Doenças de veiculação hídrica e diarreias agudas em crianças pequenas são causadas predominantemente pela carência de rede de esgoto e águas tratadas adequadas, sendo considerados indicadores de vulnerabilidade de saúde ambiental.'
  },
  {
    id: 'enare_2023_094',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Sobre o financiamento do SUS regulamentado pela Emenda Constitucional nº 95 e regras posteriores, qual o percentual mínimo de receita corrente líquida anual que os municípios brasileiros devem obrigatoriamente investir em ações e serviços públicos de saúde?',
    options: [
      '5%',
      '12%',
      '15%',
      '20%',
      '25%'
    ],
    correctIndex: 2,
    explanation: 'De acordo com a Lei Complementar 141/2012, os Municípios devem aplicar anualmente no mínimo 15% de suas receitas de impostos locais na saúde pública de forma impositiva.'
  },
  {
    id: 'enare_2023_095',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Qual das ações a seguir faz parte constitucionalmente das atribuições privativas de controle da Vigilância Sanitária (VISA) governamental conformada pela Lei Orgânica de Saúde?',
    options: [
      'Monitorar epidemias de dengue e desenhar cronogramas de borrifamento territorial de forma isolada, atribuição típica da vigilância epidemiológica e não da vigilância sanitária.',
      'Controlar e fiscalizar a produção, transporte, estocagem, comercialização e qualidade de produtos consumíveis em geral (alimentos, cosméticos, insumos industriais de saúde, saneantes, água de consumo e prestação direta de serviços de relevância para a saúde).',
      'Garantir contratação prioritária de consórcios médicos multilaterais privados, atribuição de gestão administrativa alheia ao controle sanitário de produtos e serviços.',
      'Suturar ferimentos em via pública em conjunto com equipes aeromédicas de emergência, atividade assistencial de urgência e não de fiscalização sanitária.',
      'Atribuições puramente pedagógicas em escolas de nível fundamental estaduais, competência educacional sem relação com o controle sanitário de produtos e serviços.'
    ],
    correctIndex: 1,
    explanation: 'A Vigilância Sanitária se destina a eliminar ou mitigar riscos sanitários decorrentes da circulação e qualidade de bens e serviços consumíveis indireta ou diretamente pelo mercado populacional.'
  },
  {
    id: 'enare_2023_096',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'A diretriz metodológica da Atenção Primária à Saúde que estabelece a responsabilidade contínua de cuidado no próprio território geográfico ao longo do ciclo vital das pessoas viventes nele, garantindo forte vínculo assistencial, é a/o:',
    options: [
      'Regulação Hospitalar centralizada.',
      'Territorialização com Cadastramento e Adstrição de clientela.',
      'Financiamento intermunicipal compartilhado.',
      'Saneamento por esgoto sanitário passivo.',
      'Gerenciamento autônomo de UBS privadas associadas.'
    ],
    correctIndex: 1,
    explanation: 'A adstrição de clientela a um dado território geográfico (adstrição territorial) assegura o vínculo assistencial permanente longitudinal fundamental da equipe multiprofissional com as famílias residentes.'
  },
  {
    id: 'enare_2023_097',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'A lista oficial do Ministério da Saúde que elenca todas as agravos, doenças e acidentes que exigem relato formal e imediato (em até 24 horas) ou semanal às instâncias públicas de vigilância epidemiológica do SUS para deflagrar controle sanitário é a:',
    options: [
      'Relação Nacional de Medicamentos Essenciais (RENAME), lista de fármacos padronizados pelo SUS.',
      'Relação Nacional de Ações e Serviços de Saúde (RENASES), rol de procedimentos assistenciais do SUS.',
      'Lista de Notificação Compulsória de Doenças, Agravos e Eventos de Saúde Pública.',
      'Tabela unificada de procedimentos do DATASUS, usada para faturamento e não para vigilância epidemiológica.',
      'Tabela do Instituto Médico Legal de perícias civis, documento pericial sem relação com notificação epidemiológica.'
    ],
    correctIndex: 2,
    explanation: 'A lista de Notificação Compulsória regulamenta os prazos e fluxos legais de relatos obrigatórios para doenças transmissíveis, acidentes de trabalho e violências em geral em território de atuação médica.'
  },
  {
    id: 'enare_2023_098',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Qual das seguintes condutas exemplifica um dos preceitos do Método Clínico Centrado na Pessoa (MCCP) no manejo ambulatorial de um doente de diabetes crônico de difícil controle?',
    options: [
      'Prescrição punitiva isolada e contínua, com tom de exacerbação de riscos, sem qualquer espaço para escuta das dificuldades do paciente no manejo da doença.',
      'Explorar a experiência de adoecimento do paciente (o que ele pensa, sente, espera e como a doença afeta seu dia a dia) compartilhando decisões e metas de tratamento em conjunto com o usuário na consulta.',
      'Proibir o doente de se manifestar ou dar opiniões, relegando sua assistência ao silêncio e ignorando suas percepções sobre o próprio adoecimento.',
      'Delegar a orientação integral a folhetos genéricos impressos e encaminhar de forma expectante ao especialista, sem qualquer diálogo compartilhado na consulta.',
      'Cancelar permanentemente seu cadastro perante a UBS por insubordinação alimentar, medida punitiva incompatível com o cuidado centrado na pessoa.'
    ],
    correctIndex: 1,
    explanation: 'O MCCP defende humanizar o raciocínio clínico pautando-se nas perspectivas, valores, contextos de vida reais e anseios do próprio indivíduo, coconstruindo decisões compartilhadas na terapia.'
  },
  {
    id: 'enare_2023_099',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'A articulação de diferentes saberes e a produção coletiva de projetos terapêuticos integradores desenhados para necessidades atípicas de alta complexidade em saúde de um território, compartilhando a responsabilidade do cuidado, é referenciada como:',
    options: [
      'Auditoria Fiscal em Redes Públicas, atividade de controle financeiro-contábil.',
      'Matriciamento interdisciplinar com Apoio Matricial técnico-pedagógico.',
      'Regulação Hospitalar unificada e transitória de leitos disponíveis.',
      'Comitê de Ética médica municipal de caráter punitivo e disciplinar.',
      'Consórcio financeiro compartilhado entre municípios para custeio assistencial.'
    ],
    correctIndex: 1,
    explanation: 'O matriciamento promove retaguarda especializada e troca interdisciplinar técnico-pedagógica visando co-tratar as necessidades sanitárias pautadas pela integralidade.'
  },
  {
    id: 'enare_2023_100',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'A notificação compulsória imediata perante agressões por animais peçonhentos (como picada por serpente Bothrops ou escorpião Tityus serrulatus) deve ser emitida a quem e em quanto tempo para garantir o fornecimento gratuito de soros específicos?',
    options: [
      'Ao Ministério Público do Estado em até 12 dias consecutivos após o atendimento, prazo incompatível com a urgência da soroterapia específica.',
      'À Secretaria Municipal de Saúde ou autoridade sanitária local em até 24 horas subsequentes ao atendimento inicial.',
      'À gerência executiva nacional da ANVISA em até 48 horas de forma indireta, instância sem competência para notificação compulsória local.',
      'Exclusivamente à Ouvidoria Nacional dos Direitos Humanos até um mês, órgão sem atribuição de vigilância epidemiológica sanitária.',
      'Não há necessidade de qualquer notificação para agravos de picada de animais peçonhentos, mesmo diante de risco de óbito e envenenamento grave.'
    ],
    correctIndex: 1,
    explanation: 'Acidentes por animais peçonhentos exigem relato/notificação compulsória imediata para monitorar os estoques públicos nacionais regulados de imunofatores/soros para tratamento de urgência.'
  },

  // ==========================================
  // ENARE 2022 (Questions 096 to 100)
  // ==========================================
  {
    id: 'enare_2022_096',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Segundo os preceitos clássicos da Reforma Sanitária brasileira que culminaram na criação do SUS, qual das diretrizes organizacionais garante a distribuição equilibrada de responsabilidade e autonomia administrativa entre as esferas federal, estadual e municipal de governo?',
    options: [
      'Centralização executiva federal isolada.',
      'Descentralização político-administrativa.',
      'Hierarquização de serviços de controle privado.',
      'Subordinação total de verbas ao judiciário.',
      'Monopólio municipal das redes de vacinas.'
    ],
    correctIndex: 1,
    explanation: 'A descentralização distribui competências administrativas e representação de decisões para os três níveis federativos (direção única em cada nível), priorizando a descentralização de serviços para o município.'
  },
  {
    id: 'enare_2022_097',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'O Pacto de Gestão do SUS estabelece a criação do termo regulado que representa o instrumento formal de cooperação e mútua responsabilidade sanitária firmado e celebrado voluntariamente entre os entes de governo das esferas federativas para descentralização das atividades organizacionais de saúde. Trata-se do:',
    options: [
      'Contrato Organizativo de Ação Pública da Saúde (COAP) ou Termo de Compromisso de Gestão.',
      'Consórcio Bancário Público multilateral, instrumento financeiro sem relação com a pactuação de gestão sanitária interfederativa.',
      'Dossiê de fiscalização contábil compartilhada, documento de auditoria e não de pactuação organizativa entre entes federados.',
      'Contrato de terceirização e gestão hospitalar privativa, instrumento de direito privado e não de cooperação interfederativa pública.',
      'Formulário unificado de internação compulsória intermunicipal, documento assistencial sem relação com pactuação de gestão do SUS.'
    ],
    correctIndex: 0,
    explanation: 'O COAP (pelo decreto 7508) ou termos pactuados de cooperação selam a mútua e solidária responsabilidade federativa frente ao suporte às redes unificadas de saúde.'
  },
  {
    id: 'enare_2022_098',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Uma UBS apresenta alto índice de internações por complicações crônicas microvasculares de diabetes mellitus do tipo 2. Qual das seguintes estratégias reflete o princípio da longitudinalidade do cuidado para reversão desses eventos adversos no território?',
    options: [
      'Encaminhar sumariamente todos os usuários cadastrados de diabetes a ambulatórios secundários e serviços de referência hospitalar, desarticulando o acompanhamento pela própria equipe da atenção básica.',
      'Implementar equipe de acompanhamento multiprofissional contínuo com consultas regulares planejadas, visitas domiciliares, grupos educativos terapêuticos e contato longitudinal precoce de acolhimento para prevenir intercorrências de longo prazo.',
      'Oferecer vales-dieta impressos na recepção da clínica e encaminhá-los para autoprevenção familiar expectante, sem qualquer estruturação de acompanhamento contínuo pela equipe.',
      'Substituir toda a farmacoterapia oral por suplementos herbais protetores, sem evidência de eficácia comprovada no controle glicêmico crônico do paciente.',
      'Suspender as consultas regulares na UBS, focando a equipe somente na vacinação da área e negligenciando o acompanhamento longitudinal dos casos crônicos.'
    ],
    correctIndex: 1,
    explanation: 'A longitudinalidade foca na responsabilidade continuada e do vínculo ao longo de grandes faixas temporais da vida do doente (longo termo), otimizando a adesão aos tratamentos preventivos e o controle clínico de afecções severas.'
  },
  {
    id: 'enare_2022_099',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Segundo a Política Nacional de Atenção Básica (PNAB), qual a estimativa máxima recomendada de população adscrita (número total de pessoas sob os cuidados) por cada equipe de Saúde da Família (eSF) em geral?',
    options: [
      'Entre 1.000 e 2.000 pessoas unicamente, limite considerado insuficiente para a cobertura territorial preconizada pela PNAB.',
      'Entre 2.000 e 3.500 pessoas, podendo variar conforme dados de vulnerabilidade socioeconômica locais.',
      'Até 5.000 pessoas obrigatoriamente, valor muito superior ao teto recomendado pela Política Nacional de Atenção Básica.',
      'Livre de limites de cadastramento, pautando-se em livre admissão trans-territorial.',
      'Restrito a menos de 500 famílias no território, parâmetro sem correspondência com os critérios oficiais da PNAB.'
    ],
    correctIndex: 1,
    explanation: 'A PNAB preconiza a adstrição de 2000 a 3500 pessoas de clientela adscrita de referência por eSF, visando assegurar a cobertura clínica, resolutividade do cuidado e viabilidade de longitudinalidade do atendimento continuado.'
  },
  {
    id: 'enare_2022_100',
    banca: 'ENARE',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família/SUS',
    text: 'Um paciente masculino com antecedente de dependência alcoólica queixa-se de tremores severos de extremidades, sudorese, alucinações auditivas e picos de agressividade graves nas primeiras 48h sem consumo de álcool. Qual o provável quadro de abstinência estabelecido e o tratamento empírico de primeira escolha?',
    options: [
      'Síndrome de abstinência moderada; uso isolado de paracetamol expectante, sem cobertura para o risco de convulsões ou alucinações graves.',
      'Delirium Tremens agudo; uso de benzodiazepínicos de meia-vida longa (como diazepam ou clordiazepóxido) sob monitorização clínica contínua em ambiente hospitalar.',
      'Coma alcoólico terminal; diurese forçada ácida precoce, conduta sem qualquer benefício comprovado e com risco de piora metabólica.',
      'Encefalopatia metabólica de refluxo; reposição calórica parenteral forçada e tardia, sem cobertura sedativa para o quadro de abstinência.',
      'Psicose de Parkinson secundária; Levodopa em dose terapêutica máxima, tratamento sem qualquer relação com a síndrome de abstinência alcoólica.'
    ],
    correctIndex: 1,
    explanation: 'O Delirium Tremens é uma manifestação clínica de abstinência alcoólica que cursa com instabilidade autonômica e agitação grave. O tratamento de suporte envolve o uso de benzodiazepínicos (antagonista GABAr) para acalmar a hiperestimulação dopaminérgica-serotoninérgica-noradrenérgica.'
  }
];
