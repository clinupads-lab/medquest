export const Q_CLINICO_1: any[] = [
  // ─── CARDIOLOGIA ───────────────────────────────────────────────────────
  {
    id: 'est_cardio_001',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Um paciente de 58 anos com DM e HAS chega com dor precordial em aperto há 2 horas, irradiando para o braço esquerdo. ECG mostra supradesnivelamento de ST em D2, D3, aVF. Qual o diagnóstico e território acometido?',
    options: ['IAM com supradesnivelamento de ST (IAMCSST) inferior — artéria coronária direita (ACD)', 'IAM anterior extenso — artéria descendente anterior (ADA)', 'Angina instável — sem artéria comprometida', 'Pericardite aguda — supradesnivelamento difuso'],
    correctIndex: 0,
    explanation: 'Supradesnivelamento em D2, D3, aVF = IAM inferior. A parede inferior do VE é irrigada pela ACD (em ~80% dos pacientes com dominância direita). Conduta: reperfusão imediata — trombólise ou ICP primária. AVC = parede anterior (ADA); lateral = Cx ou diagonal.'
  },
  {
    id: 'est_cardio_002',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'A fibrilação atrial (FA) aumenta o risco de AVC embólico porque:',
    options: ['A contração atrial irregular e ineficaz causa estase sanguínea no apêndice atrial esquerdo, favorecendo a formação de trombos', 'Aumenta diretamente a pressão arterial', 'Causa espasmo coronariano com isquemia cerebral', 'O ritmo rápido danifica a valva mitral gerando embolia'],
    correctIndex: 0,
    explanation: 'Na FA, a ausência de contração atrial coordenada → estase no AAE (apêndice atrial esquerdo) → trombo. Risco estratificado pelo escore CHA₂DS₂-VASc (ICC, HAS, Idade≥75×2, DM, AVC prévio×2, Doença vascular, Sexo feminino). Anticoagulação indicada com escore ≥2 (homens) ou ≥3 (mulheres).'
  },
  {
    id: 'est_cardio_003',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'O tratamento da insuficiência cardíaca com fração de ejeção reduzida (ICFEr, FE<40%) inclui, com evidência de redução de mortalidade:',
    options: ['IECA (ou BRA + sacubitril), beta-bloqueador, antagonista da aldosterona (espironolactona/eplerenona) e gliflozinas (empagliflozina/dapagliflozina)', 'Digoxina como primeira linha', 'Diuréticos como única terapia modificadora de doença', 'Bloqueadores de canal de cálcio (diltiazem) como primeira linha'],
    correctIndex: 0,
    explanation: 'Pilares da ICFEr (4 grupos que reduzem mortalidade): (1) IECA/BRA ou sacubitril+valsartana (ENTRESTO); (2) Beta-bloqueadores cardiosseletivos (carvedilol, bisoprolol, metoprolol succinate); (3) Antagonistas da aldosterona (espironolactona/eplerenona); (4) Gliflozinas (SGLT2i — dapagliflozina/empagliflozina). Diuréticos → controle sintomático (edema/dispneia). Digoxina: uso restrito.'
  },
  {
    id: 'est_cardio_004',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'Na estenose aórtica grave, a tríade clássica de sintomas tardios inclui:',
    options: ['Angina, síncope e dispneia/insuficiência cardíaca — sendo que a sobrevida média é de 5, 3 e 2 anos respectivamente após cada sintoma', 'Palpitações, hipertensão arterial e febre reumática', 'Edema de membros inferiores, ascite e icterícia', 'Cianose, baqueteamento digital e sopro diastólico'],
    correctIndex: 0,
    explanation: 'Estenose aórtica grave (área valvar <1 cm², gradiente médio >40 mmHg): tríade de bad prognosis — angina (obstrução coronariana relativa por hipertrofia, sobrevida ~5 anos), síncope (↓DC em esforço ou arritmia, ~3 anos), ICC (falência ventricular, ~2 anos). Sopro sistólico ejeto em crescendo-decrescendo no foco aórtico, irradiação para carótidas. Tratamento: troca valvar aórtica (TAVR ou cirurgia).'
  },
  {
    id: 'est_cardio_005',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'O eletrocardiograma de um paciente com hipercalemia grave (K⁺ > 6,5 mEq/L) mostra:',
    options: ['Ondas T apiculadas simétricas (tent-shaped), seguidas de alargamento do PR, alargamento do QRS e ondas sinusoidais (com K⁺ >7)', 'QT prolongado e onda U proeminente', 'Supradesnivelamento de ST e onda Q de necrose', 'Fibrilação atrial com resposta ventricular irregular'],
    correctIndex: 0,
    explanation: 'Hipercalemia: (1) K⁺ 5,5-6,5: ondas T altas e simétricas (tent-shaped); (2) K⁺ >6,5: ↑PR, ↓onda P; (3) K⁺ >7: alargamento QRS, ondas sinusoidais (QRS se funde com onda T); (4) K⁺ >8: FV/assistolia. Tratamento: gluconato de cálcio (estabiliza membrana), insulina+glicose (redistribui K⁺), bicarbonato, kayexalate, diálise.'
  },
  {
    id: 'est_cardio_006',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'A hipertensão arterial sistêmica (HAS) é definida como PA ≥:',
    options: ['140/90 mmHg em medições repetidas no consultório (ou ≥130/80 mmHg pelos critérios ACC/AHA 2017)', '160/100 mmHg para início de tratamento', '150/95 mmHg em todas as diretrizes internacionais', '120/80 mmHg (normal-alta)'],
    correctIndex: 0,
    explanation: 'Definição brasileira (7ª Diretriz SBC 2016): PA ≥140/90 mmHg em ≥2 medições em ≥2 ocasiões diferentes. ACC/AHA 2017: ≥130/80 mmHg. Estágio 1: 140-159/90-99; Estágio 2: 160-179/100-109; Estágio 3: ≥180/110 mmHg (crise). MAPA e MRPA são padrão ouro para diagnóstico.'
  },
  {
    id: 'est_cardio_007',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'O tamponamento cardíaco apresenta a tríade de Beck composta por:',
    options: ['Hipotensão, abafamento de bulhas e turgência jugular (veias jugulares ingurgitadas)', 'Hipertensão, sopro diastólico e edema pulmonar', 'Febre, atrito pericárdico e dor torácica', 'Síncope, bradicardia e bloqueio atrioventricular'],
    correctIndex: 0,
    explanation: 'Tamponamento: acúmulo de líquido/sangue no pericárdio comprime as câmaras cardíacas → ↓enchimento → ↓DC. Tríade de Beck: hipotensão (↓DC) + abafamento de bulhas (líquido pericárdico) + estase jugular (↑PVC por↓ retorno venoso). Pulso paradoxal (queda >10 mmHg da PAS na inspiração) é característico. ECG: alternância elétrica. Tratamento: pericardiocentese.'
  },
  {
    id: 'est_cardio_008',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'A principal complicação crônica da febre reumática no coração é:',
    options: ['Doença valvar — estenose mitral (mais comum no Brasil) por fibrose e fusão das comissuras, resultante da cardite reumática recorrente', 'Miocardiopatia dilatada', 'Pericardite constritiva', 'Arritmias ventriculares isoladas'],
    correctIndex: 0,
    explanation: 'Febre reumática (pós-S. pyogenes GAS) → cardite (pancardite com vegetações de Aschoff na valva mitral). Recidivas → fibrose valvar progressiva → estenose mitral (90% dos casos de cardiopatia reumática). Profilaxia com penicilina benzatina: previne recidivas e deterioração valvar. Estenose mitral: crepitação de abertura, ruflar diastólico de baixa frequência.'
  },
  {
    id: 'est_cardio_009',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'O bloqueio atrioventricular de terceiro grau (BAV total) caracteriza-se por:',
    options: ['Dissociação atrioventricular completa — átrios e ventrículos batem independentemente; frequência atrial > ventricular; QRS com escape de junção (estreito) ou idioventricular (largo)', 'PR progressivamente crescente até uma P bloqueada (Mobitz I)', 'Bloqueios alternados com algumas P conduzidas e outras não (Mobitz II)', 'Todos os impulsos atriais são conduzidos aos ventrículos com PR prolongado fixo'],
    correctIndex: 0,
    explanation: 'BAV 3°: nenhum impulso atrial conduz ao ventrículo. Escape de junção: QRS estreito, FC 40-60 bpm. Escape idioventricular: QRS largo, FC 20-40 bpm (mais grave). Causas: infarto inferior (ACD → nó AV), cirurgia cardíaca, medicamentos (digitálicos, beta-bloqueadores), doença do sistema de condução (degenerativa). Tratamento: marca-passo cardíaco definitivo.'
  },
  {
    id: 'est_cardio_010',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'A dissecção aórtica tipo A de Stanford envolve:',
    options: ['A aorta ascendente (independente da extensão distal) — emergência cirúrgica com mortalidade de 1-2% por hora se não tratada', 'Apenas a aorta descendente (tipo B) — tratamento clínico preferencial', 'A aorta abdominal infrarenal exclusivamente', 'O arco aórtico sem aorta ascendente'],
    correctIndex: 0,
    explanation: 'Classificação de Stanford: Tipo A = qualquer dissecção envolvendo aorta ascendente (±arco ±descendente) → cirurgia emergencial (risco de tamponamento, IAM, AVC, insuficiência aórtica). Tipo B = dissecção limitada à aorta descendente (distal à subclávia E) → tratamento clínico (controle da PA com beta-bloqueadores IV + nitroprussiato); cirurgia/stent se complicada.'
  },
  {
    id: 'est_cardio_011',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'O troponina I ou T cardíaca é o biomarcador preferido para diagnóstico de IAM porque:',
    options: ['É altamente específico para lesão do miocárdio, eleva-se em 3-6h, pico em 12-24h, permanece elevada por 7-14 dias (viabilidade de diagnóstico tardio)', 'Eleva-se imediatamente em menos de 1h após o IAM', 'É específico apenas para IAM e não eleva em outras doenças cardíacas', 'Tem vida média de apenas 4h, sendo ideal para re-infarto precoce'],
    correctIndex: 0,
    explanation: 'Troponinas cardíacas (cTnI, cTnT): proteínas do complexo troponina-tropomiosina nos miofilamentos finos. Alta sensibilidade e especificidade cardíaca. Elevam-se em 3-6h (troponinas de alta sensibilidade em 1-3h), pico em 12-24h, normalização em 7-14 dias. Podem elevar-se em miocardite, IC aguda, TEP maciço, insuficiência renal, cardioversão.'
  },
  {
    id: 'est_cardio_012',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'A síndrome de Wolff-Parkinson-White (WPW) é reconhecida no ECG por:',
    options: ['PR curto (<120 ms), onda delta (pré-excitação inicial do QRS) e QRS alargado (>110 ms)', 'QT longo e onda U proeminente', 'Alternância elétrica do QRS', 'PR progressivamente longo e bloqueio AV'],
    correctIndex: 0,
    explanation: 'WPW: via acessória (feixe de Kent) conecta átrio a ventrículo, bypass do nó AV → pré-excitação. ECG: PR curto (condução rápida pela via acessória), onda delta (ativação ventricular precoce e lenta pela via anômala, antes do QRS normal), QRS alargado. Risco de taquicardia por reentrada atrioventricular e, em FA, taquicardia ventricular/FV se o período refratário da via acessória for curto.'
  },
  {
    id: 'est_cardio_013',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'A estatina é indicada na prevenção cardiovascular porque:',
    options: ['Inibe a HMG-CoA redutase, reduzindo a síntese hepática de colesterol e aumentando os receptores de LDL, reduzindo LDL-c e o risco de eventos cardiovasculares maiores', 'Age diretamente nos vasos reduzindo a aterosclerose sem alterar o colesterol', 'Reduz os triglicerídeos como principal efeito', 'Bloqueia a absorção intestinal de colesterol'],
    correctIndex: 0,
    explanation: 'Estatinas (sinvastatina, atorvastatina, rosuvastatina): inibem a HMG-CoA redutase → ↓síntese de colesterol no fígado → ↑expressão de receptores LDL hepáticos → ↓LDL circulante. Reduzem eventos cardiovasculares ~30-35% em prevenção primária e secundária. Efeitos pleiotrópicos (anti-inflamatório, estabilização de placa). EA: miopatia, rabdomiólise (raro), ↑enzimas hepáticas.'
  },
  {
    id: 'est_cardio_014',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'O choque cardiogênico é definido como:',
    options: ['PA sistólica <90 mmHg por >30 min com sinais de hipoperfusão (oligúria, extremidades frias, rebaixamento do nível de consciência) e IC elevado (PCWP >18 mmHg)', 'PA <90 mmHg por qualquer causa, com IC e PCWP baixos', 'Hipotensão responsiva a volume, com PCWP <12 mmHg', 'PA normal com sinais periféricos de vasoconstricção apenas'],
    correctIndex: 0,
    explanation: 'Choque cardiogênico: falência da bomba cardíaca → ↓DC (<2,2 L/min/m²), ↑PCWP (pressão de encunhamento capilar pulmonar >18 mmHg = congestão pulmonar) + PA sistólica <90 mmHg + hipoperfusão. Causa mais comum: IAM extenso de VE. Tratamento: suporte inotrópico (dobutamina, dopamina), balão intra-aórtico, ECMO, revascularização coronária urgente.'
  },
  {
    id: 'est_cardio_015',
    cycle: 'Ciclo Clínico',
    subject: 'Cardiologia',
    text: 'A endocardite infecciosa deve ser suspeitada quando um paciente com valvopatia ou prótese valvar apresenta:',
    options: ['Febre prolongada + sopro cardíaco novo ou modificado + hemoculturas positivas (critérios de Duke)', 'Febre isolada sem sopro cardíaco por menos de 24h', 'Dor torácica pleurítica + atrito pericárdico', 'Hipertensão grave com edema pulmonar agudo'],
    correctIndex: 0,
    explanation: 'Critérios de Duke: diagnóstico definitivo com 2 critérios maiores OU 1 maior + 3 menores OU 5 menores. Critérios maiores: hemoculturas positivas (2 amostras, microrganismos típicos) + evidência de envolvimento endocárdico (ECO: vegetação, abscesso, deiscência de prótese; sopro novo). Menores: febre, fenômenos vasculares (embolia, hemorragia), fenômenos imunológicos (nódulos de Osler, manchas de Janeway). Staphylococcus aureus é o principal agente.'
  },
  // ─── PEDIATRIA ─────────────────────────────────────────────────────────
  {
    id: 'est_ped_001',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'O índice de Apgar avalia o recém-nascido no 1º e 5º minuto de vida. Um Apgar de 7-10 indica:',
    options: ['Boa vitalidade — sem necessidade de ressuscitação ativa (apenas cuidados de rotina)', 'Depressão neonatal moderada — necessita ventilação com pressão positiva', 'Depressão neonatal grave — requer intubação e massagem cardíaca', 'Óbito fetal iminente'],
    correctIndex: 0,
    explanation: 'Apgar (Aparência/cor, Pulso/FC, Grimace/reatividade, Atividade/tônus, Respiração): 0-2 pontos cada. 7-10: normal; 4-6: depressão moderada (VPP); 0-3: depressão grave (intubação, massagem). O Apgar de 5 minutos é mais prognóstico. Avalia a adaptação à vida extrauterina mas NÃO define conduta de ressuscitação (a decisão de VPP é antes do 1° minuto).'
  },
  {
    id: 'est_ped_002',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'Os marcos do desenvolvimento neuropsicomotor normais para uma criança de 12 meses incluem:',
    options: ['Ficar de pé sem apoio ou com apoio mínimo, falar "mamã/papá" com significado, pinça fina (polegar-indicador), bater palmas e acenar tchau', 'Sentar sem apoio apenas (alcançado aos 6-8 meses), sem palavras ainda', 'Andar com independência total, vocabulário de 50 palavras', 'Engatinhar apenas, sem palavras com significado'],
    correctIndex: 0,
    explanation: 'Marcos normais aos 12 meses: motor grosso (ficar de pé, primeiros passos), motor fino (pinça polegar-índice fina), linguagem (1-3 palavras com significado — "mamã", "papá", "água"), social (reconhece o nome, acenar, bater palmas, imitar). Red flags: não fica de pé, sem palavras com significado, perda de habilidades já adquiridas.'
  },
  {
    id: 'est_ped_003',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'A otite média aguda (OMA) bacteriana em crianças de 2-5 anos é mais frequentemente causada por:',
    options: ['Streptococcus pneumoniae, Haemophilus influenzae não tipável e Moraxella catarrhalis', 'Staphylococcus aureus e Pseudomonas aeruginosa', 'Vírus respiratório sincicial exclusivamente', 'Mycoplasma pneumoniae e Chlamydia trachomatis'],
    correctIndex: 0,
    explanation: 'OMA bacteriana: S. pneumoniae (~40%), H. influenzae não tipável (~30%), M. catarrhalis (~20%). OMA viral precede frequentemente a bacteriana. Tratamento: amoxicilina (80-90 mg/kg/dia) por 10 dias em <2 anos; 5-7 dias em maiores. Se falha em 48-72h: amoxicilina-clavulanato (resistência). Tubotimpanite é a via de infecção (tuba de Eustáquio mais curta/horizontal em crianças).'
  },
  {
    id: 'est_ped_004',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'A laringite aguda (crupe viral) em crianças manifesta-se com:',
    options: ['Tosse em ladrido (estridor inspiratório, disfonia), pior à noite, em criança de 6 meses-3 anos, causada principalmente por parainfluenza tipo 1', 'Estridor bifásico grave, sialorreia e criança em posição de tripé (epiglotite — emergência)', 'Sibilos expiratórios difusos (bronquiolite/asma) em menores de 2 anos', 'Febre alta >39°C, disfagia grave e odinofagia intensa (faringoamigdalite)'],
    correctIndex: 0,
    explanation: 'Crupe viral (laringotraqueobronquite): parainfluenza 1 (mais comum, epidemias outonais), faixa etária 6m-3 anos. Clínica: tosse metálica/ladrido, estridor inspiratório, disfonia, piora noturna. Escore de Westley para gravidade. Tratamento: dexametasona IM/VO (dose única 0,6 mg/kg) em todos; inalação com adrenalina racêmica nos graves. Diferencial: epiglotite (H. influenzae b — emergência, vacina previne).'
  },
  {
    id: 'est_ped_005',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'O calendário vacinal do PNI para crianças inclui a vacina contra hepatite B com esquema:',
    options: ['Ao nascer (dose 0), com 2 meses e 6 meses (3 doses — esquema 0-2-6 meses)', 'Somente aos 2 e 4 meses (2 doses)', 'Apenas ao nascer (1 dose única)', 'Aos 2, 4 e 6 meses (sem dose ao nascer)'],
    correctIndex: 0,
    explanation: 'Vacina HB no PNI brasileiro: dose 0 ao nascer (idealmente nas primeiras 12h, com imunoglobulina para filhos de HBsAg+ materno), 2ª dose aos 2 meses (junto com pentavalente), 3ª dose aos 6 meses. A dose ao nascer é crucial para prevenir transmissão vertical (mãe HBsAg+ tem 90% de risco de transmissão sem profilaxia).'
  },
  {
    id: 'est_ped_006',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'A desidratação em lactentes é classificada como grave quando:',
    options: ['Presença de ≥2 sinais: olhos encovados, ausência de lágrimas, boca seca, turgor de pele muito reduzido (sinal da prega persistente >2s), fontanela deprimida, criança letárgica/inconsciente (>10% de perda de peso)', 'Apenas diarreia aquosa sem outros sinais', 'Perda de <5% do peso corporal com criança ativa e alerta', 'Lábios levemente secos sem outros sinais'],
    correctIndex: 0,
    explanation: 'Classificação OMS/AIDPI: Sem desidratação (<5% perda, <2 sinais): TRO domiciliar. Desidratação moderada (5-10%, ≥2 sinais — olhos encovados, turgor lento, boca seca, inquieto/irritado): TRO supervisionada. Grave (>10%, ≥2 sinais inclui letargia/coma, pulso fraco, extremidades frias): reidratação IV urgente (20 mL/kg SF0,9% rápido).'
  },
  {
    id: 'est_ped_007',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'A bronquiolite aguda viral em lactentes é caracterizada por:',
    options: ['Primeiro episódio de sibilância em criança <2 anos, precedido de IVAS, com hipoxemia e obstrução de vias aéreas inferiores — VRS é o principal agente', 'Tosse em ladrido com estridor inspiratório (crupe)', 'Pneumonia bacteriana com consolidação lobar no Rx', 'Asma diagnosticada em primeira crise'],
    correctIndex: 0,
    explanation: 'Bronquiolite: VRS (70-80% dos casos), rinovírus, parainfluenza. Epidemia outono-inverno. <2 anos (pico 2-6 meses). Clínica: IVAS 2-4 dias → sibilância, taquipneia, retrações, hipoxemia. Diagnóstico clínico. Tratamento: suporte (O₂, hidratação, posicionamento). Broncodilatadores não têm benefício comprovado. Palivizumabe: profilaxia para prematuros <29 semanas ou cardiopatia congênita.'
  },
  {
    id: 'est_ped_008',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'A convulsão febril simples em criança de 18 meses difere da complexa porque:',
    options: ['Simples: duração <15 min, generalizada, ocorre uma única vez em 24h em criança neurologicamente normal — baixo risco de epilepsia futura', 'Simples: focal, com paralisia de Todd pós-ictal', 'Complexa: dura menos de 5 minutos e é generalizada', 'Ambas têm o mesmo prognóstico e risco de epilepsia'],
    correctIndex: 0,
    explanation: 'Convulsão febril simples (CFS): 6 meses-5 anos, temperatura ≥38°C, duração <15 min, generalizada, sem pós-ictal focais, sem déficit neurológico prévio. Risco de epilepsia futura: ~1-3% (mesmo da população geral). Complexa: >15 min (status febril) OU focal OU recorrência em 24h → investigar, risco de epilepsia aumentado. CFS: não antiepiléptico profilático; febrífugos não previnem recorrência.'
  },
  {
    id: 'est_ped_009',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'A leucemia linfoblástica aguda (LLA) em crianças apresenta-se clinicamente com:',
    options: ['Palidez, petéquias/equimoses, febre, dor óssea, hepatoesplenomegalia e linfadenopatia — pico de incidência 2-5 anos', 'Dor abdominal isolada com massa retroperitoneal (neuroblastoma)', 'Prurido generalizado com adenomegalias cervicais (Linfoma de Hodgkin)', 'Poliúria, polidipsia e hiperglicemia (DM tipo 1)'],
    correctIndex: 0,
    explanation: 'LLA pediátrica (mais comum neoplasia infantil, 80% das leucemias infantis): pancitopenia por infiltração medular → anemia (palidez, fadiga), trombocitopenia (petéquias, sangramentos), neutropenia (febre, infecções). Blast na periferia/MO. Dor óssea por infiltração. Hepatoesplenomegalia + adenomegalia. Prognóstico excelente: ~90% de cura com quimioterapia.'
  },
  {
    id: 'est_ped_010',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'O aleitamento materno exclusivo é recomendado até:',
    options: ['6 meses de vida — reduz mortalidade infantil, infecções, alergias; proteção contra obesidade, DM tipo 1 e 2, leucemia; benefícios maternos: ↓CA de mama/ovário, retorno ao peso pré-gestacional', '3 meses, quando deve-se introduzir papas de frutas', '12 meses de vida exclusivamente', '4 meses segundo todas as diretrizes mundiais'],
    correctIndex: 0,
    explanation: 'OMS e MS Brasil: AME (leite materno exclusivo, sem água, chás, sucos ou outros alimentos) até 6 meses completos → introdução alimentar complementar a partir dos 6 meses. Manutenção do aleitamento materno (não exclusivo) até 2 anos ou mais. Benefícios: redução de diarreia, pneumonia, otite, alergias, SMSI; vínculo afetivo; economia familiar.'
  },
  {
    id: 'est_ped_011',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'O mapa de Denver II (DDST-II) é utilizado em pediatria para:',
    options: ['Triagem do desenvolvimento neuropsicomotor — avalia 4 áreas: motor grosso, motor fino/adaptativo, linguagem e pessoal-social', 'Avaliação nutricional pelo IMC', 'Diagnóstico de autismo (TEA)', 'Rastreamento de distúrbios auditivos'],
    correctIndex: 0,
    explanation: 'Denver II: instrumento de triagem do DNPM para crianças de 0-6 anos em 4 domínios. Não é diagnóstico — identifica crianças com atraso suspeito para referir à avaliação especializada. Normal: <2 falhas em 1 domínio. Suspeito: ≥2 atrasos ou recusas em um domínio → reavaliação em 1-3 meses. Anormal: ≥2 atrasos em ≥2 domínios → referir.'
  },
  {
    id: 'est_ped_012',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'A anemia falciforme em crianças pode ser detectada precocemente pelo:',
    options: ['Teste do pezinho (triagem neonatal) — eletroforese de hemoglobina identifica HbSS, HbSC, HbS-beta talassemia antes de manifestações clínicas', 'Hemograma de rotina no primeiro mês de vida', 'Ultrassom abdominal para esplenomegalia', 'Radiografia de crânio para infarto ósseo'],
    correctIndex: 0,
    explanation: 'Triagem neonatal ampliada (teste do pezinho — PNTN): detecta fenilcetonúria, hipotireoidismo congênito, anemia falciforme (todas as hemoglobinopatias), fibrose cística, toxoplasmose congênita e outras conforme estado. A anemia falciforme (HbSS) detectada precocemente permite profilaxia com penicilina (até 5 anos) e vacinação prioritária, reduzindo mortalidade infantil.'
  },
  {
    id: 'est_ped_013',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'O diagnóstico de pneumonia bacteriana em criança deve ser suspeitado quando há:',
    options: ['Febre, taquipneia (>50 irpm em <1 ano; >40 em 1-5 anos; >30 em >5 anos), tiragem subcostal ou sibilância, com/sem redução do MV à ausculta e crepitações', 'Apenas febre sem sintomas respiratórios', 'Saturação de O₂ normal (>95%) com ausculta limpa', 'Coriza e obstrução nasal isoladas sem febre'],
    correctIndex: 0,
    explanation: 'OMS/AIDPI: sinal mais sensível para pneumonia em crianças = taquipneia (limites variam por idade: <2m >60 irpm; 2-11m >50; 1-4a >40; >5a >30). Pneumonia grave: tiragem subcostal, estridor em repouso, cianose, hipoxemia. Pneumonia muito grave: incapacidade de beber/amamentar, convulsões. S. pneumoniae e H. influenzae são principais agentes bacterianos. Tratamento ambulatorial: amoxicilina.'
  },
  {
    id: 'est_ped_014',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'A icterícia fisiológica do recém-nascido se diferencia da patológica porque:',
    options: ['Fisiológica: início após 24h de vida, bilirrubina indireta <12 mg/dL no RN a termo, resolução em 7-10 dias; sem hepatoesplenomegalia, anemia ou diagnóstico causal', 'Fisiológica pode iniciar nas primeiras 24h', 'Patológica inicia sempre após 3 dias de vida', 'Ambas têm a mesma velocidade de progressão da bilirrubina'],
    correctIndex: 0,
    explanation: 'Icterícia patológica neonatal: início <24h (incompatibilidade ABO ou Rh, infecção TORCH), progressão rápida (>5 mg/dL/dia), BI >12 mg/dL (RN a termo) ou >15 mg/dL (pré-termo), persistência >2 semanas (a termo) ou >3 semanas (pré-termo), qualquer nível de BD elevada (colestase). Causas: isoimunização Rh/ABO, G6PD, esferocitose, infecções. Tratamento: fototerapia; exsanguineotransfusão se muito elevada (risco de kernicterus).'
  },
  {
    id: 'est_ped_015',
    cycle: 'Ciclo Clínico',
    subject: 'Pediatria',
    text: 'A puberdade precoce central em meninas é definida como:',
    options: ['Aparecimento de caracteres sexuais secundários antes dos 8 anos (telarca/pubarca) por ativação prematura do eixo hipotálamo-hipófise-gonadal', 'Menarca antes dos 10 anos', 'Desenvolvimento mamário entre 8-10 anos (variante normal — telarca prematura isolada)', 'Puberdade entre 8-13 anos em meninas (normal)'],
    correctIndex: 0,
    explanation: 'Puberdade precoce central (PPC): ativação prematura do GnRH hipotalâmico → FSH/LH → esteroides sexuais. Meninas <8 anos, meninos <9 anos. Clínica: telarca + pubarca + aceleração de crescimento + avanço de idade óssea. Meninas: idiopática (90%). Meninos: lesão do SNC (pinealoma, hamartoma hipotalâmico). Tratamento: análogos de GnRH de longa ação. Investigar com RM de crânio.'
  },
  // ─── GINECOLOGIA & OBSTETRÍCIA ─────────────────────────────────────────
  {
    id: 'est_gineco_001',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'O cálculo da Idade Gestacional (IG) pela Regra de Naegele utiliza:',
    options: ['Data da última menstruação (DUM): somar 9 meses e 7 dias (ou 40 semanas) para obter a Data Provável do Parto (DPP)', 'Data da fecundação + 38 semanas', 'Ultrassom apenas, independente da DUM', 'Altura uterina medida no pré-natal'],
    correctIndex: 0,
    explanation: 'Regra de Naegele: DPP = DUM + 9 meses + 7 dias (ou subtrair 3 meses + 7 dias, ou simplesmente DUM + 280 dias). IG pela DUM: contar semanas completas desde a DUM. Quando DUM incerta, o USG do 1º trimestre (CRL até 13 semanas) é padrão ouro para datação (margem de erro ±5-7 dias).'
  },
  {
    id: 'est_gineco_002',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'A pré-eclâmpsia é definida por:',
    options: ['PA ≥140/90 mmHg após 20 semanas de gestação associada à proteinúria ≥300 mg/24h OU outros critérios de gravidade (trombocitopenia, creatinina elevada, elevação de enzimas hepáticas, edema pulmonar, cefaleia/distúrbios visuais)', 'PA elevada antes de 20 semanas em mulher não hipertensa prévia', 'PA elevada com convulsões (eclâmpsia)', 'Edema de membros inferiores com PA normal na gestação'],
    correctIndex: 0,
    explanation: 'Pré-eclâmpsia (PE): HAS (≥140/90 mmHg em 2 aferições com ≥4h de intervalo) após 20 semanas + proteinúria ou, na ausência de proteinúria, sinais de gravidade (trombocitopenia <100.000, creatinina >1,1 mg/dL, AST/ALT >2×N, edema pulmonar, cefaleia/distúrbios visuais). Prevenção em alto risco: AAS 100-150 mg/dia a partir de 12-16 semanas. Tratamento definitivo: parto.'
  },
  {
    id: 'est_gineco_003',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'O diabetes gestacional (DMG) é rastreado universalmente entre:',
    options: ['24-28 semanas de gestação com o teste de tolerância oral à glicose (TTOG) 75g (diagnóstico: glicemia jejum ≥92 mg/dL; 1h ≥180; 2h ≥153 mg/dL)', 'Apenas em gestantes obesas ou com história familiar', 'No 1º trimestre, com glicemia de jejum <85 mg/dL', '36-38 semanas de gestação'],
    correctIndex: 0,
    explanation: 'DMG (critérios ADA/IADPSG): TTOG 75g entre 24-28 semanas. Diagnóstico: ≥1 valor alterado (jejum ≥92; 1h ≥180; 2h ≥153 mg/dL). Se glicemia jejum ≥126 ou glicemia casual ≥200 mg/dL no 1º trimestre → DM pré-gestacional. DMG: risco de macrossomia, distócia de ombro, hipoglicemia neonatal, cesárea. Tratamento: dieta + exercício; insulina se não compensado (glibenclamida é alternativa no Brasil).'
  },
  {
    id: 'est_gineco_004',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'A placenta prévia total é caracterizada por:',
    options: ['Placenta cobrindo completamente o orifício cervical interno — hemorragia indolor no 3° trimestre (sangramento vermelho vivo), sem dor, com feto em posição anormal (transverso/pélvico)', 'Placenta baixa mas não cobrindo o OCI', 'Descolamento prematuro da placenta normalmente inserida com dor', 'Hematoma retroplacentário com sofrimento fetal agudo'],
    correctIndex: 0,
    explanation: 'PP total: cobre o OCI completamente. Clínica: sangramento indolor, vermelho vivo, episódico, progressivo no 3° trimestre. Diagnóstico: USG (NUNCA toque vaginal!). Associada a placenta acreta (especialmente em cesárea prévia). Conduta: internação, corticosteroide se <34s para maturação pulmonar, cesárea eletiva a partir de 36-37s. PP parcial/marginal: protocolo similar mas com mais flexibilidade.'
  },
  {
    id: 'est_gineco_005',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'A síndrome dos ovários policísticos (SOP) é diagnosticada pelos critérios de Rotterdam quando presentes pelo menos 2 dos 3 critérios:',
    options: ['Oligoanovulação (ciclos >35 dias ou <8/ano), hiperandrogenismo clínico (hirsutismo, acne) ou bioquímico (testosterona elevada), e morfologia policística dos ovários ao USG', 'Apenas oligomenorreia e infertilidade', 'Apenas USG mostrando cistos ovarianos e LH elevado', 'Apenas hiperandrogenismo sem alteração menstrual'],
    correctIndex: 0,
    explanation: 'SOP (Critérios de Rotterdam 2003): 2 de 3 critérios: (1) oligo/anovulação; (2) hiperandrogenismo clínico ou laboratorial; (3) ovários policísticos ao USG (≥12 folículos 2-9mm ou volume ovariano >10 mL). Mais comum causa de infertilidade anovulatória. Resistência à insulina, risco de DM2, SM. Tratamento: anticoncepcionais, metformina, indução ovulatória (clomifeno, letrozol).'
  },
  {
    id: 'est_gineco_006',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'O rastreamento do câncer do colo do útero é feito com:',
    options: ['Citologia cervical (Papanicolau) — início aos 25 anos, com intervalos de 3 em 3 anos após 2 exames normais anuais, até 64 anos', 'Colposcopia anual desde a primeira relação sexual', 'HPV-DNA apenas, sem necessidade de citologia', 'Biópsia de colo uterino como método de rastreamento primário'],
    correctIndex: 0,
    explanation: 'Rastreamento CA colo (INCA/MS Brasil): início aos 25 anos (mulheres sexualmente ativas). 1º e 2º exames com intervalo de 1 ano; se ambos normais → intervalo de 3 anos. Encerramento aos 64 anos (se ≥2 citopatológicos normais nos últimos 5 anos). Teste de HPV-DNA está sendo incorporado como coteste ou teste primário (mais sensível). Vacina HPV: 9-14 anos (calendário PNI).'
  },
  {
    id: 'est_gineco_007',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'A endometriose é definida como:',
    options: ['Presença de tecido endometrial funcionante (glândulas e estroma) fora da cavidade uterina — causa dismenorreia progressiva, dispareunia, infertilidade e dor pélvica crônica', 'Infecção uterina por bactérias gram-negativas', 'Espessamento do miométrio por hipertrofia das células musculares (adenomiose)', 'Presença de miomas intramurais no útero'],
    correctIndex: 0,
    explanation: 'Endometriose: implantes em ovários (endometrioma — "cisto chocolate"), trompas, peritônio, retossigmoide, bexiga. Teoria do refluxo menstrual (Sampson). Dismenorreia progressiva (início antes da menstruação, piora no curso) + dispareunia de profundidade + dor pélvica crônica + subfertilidade. Diagnóstico definitivo: laparoscopia com biópsia. Tratamento: ACO, progestogênio, análogos GnRH, cirurgia.'
  },
  {
    id: 'est_gineco_008',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'A doença inflamatória pélvica (DIP) é causada principalmente por:',
    options: ['Neisseria gonorrhoeae e Chlamydia trachomatis (ISTs de transmissão ascendente do canal cervical para útero, trompas e peritônio)', 'Escherichia coli de origem intestinal por contiguidade', 'Candida albicans em pacientes imunodeprimidas', 'Staphylococcus aureus pós-cirúrgico apenas'],
    correctIndex: 0,
    explanation: 'DIP: infecção ascendente do trato reprodutor feminino superior. Agentes: N. gonorrhoeae, C. trachomatis + anaeróbios e gram-negativos (polimicrobiana). Clínica: dor pélvica/baixo ventre bilateral, corrimento vaginal anormal, febre, dor à mobilização do colo/dor anexial (sinal de Chandelier). Complicações: abscesso tubo-ovariano, infertilidade por aderências, gravidez ectópica, dor pélvica crônica. Tratamento: ceftriaxona + doxiciclina + metronidazol.'
  },
  {
    id: 'est_gineco_009',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'No puerpério normal, a involução uterina após parto vaginal ocorre com:',
    options: ['Redução progressiva do fundo uterino (~1 cm/dia): ao nascimento (nível do umbigo), 10-14 dias (retorno à pelve), 6 semanas (tamanho pré-gestacional)', 'O útero retorna ao tamanho normal em 24h', 'A involução uterina não ocorre sem amamentação', 'O fundo uterino sobe progressivamente na primeira semana'],
    correctIndex: 0,
    explanation: 'Involução uterina: logo após o parto, o fundo uterino fica ao nível do umbigo (umbilical); regride ~1 cm/dia → abaixo do umbigo no 1° dia. Na 2ª semana: fundo impalpável acima da sínfise púbica. 6ª semana: útero no tamanho pré-gestacional (~70g, normal gestacional ~1000g). Ocitocina (amamentação) acelera a involução. Lóquios: sanguíneos 3-4d → serosos 4-10d → brancos 10d-6s.'
  },
  {
    id: 'est_gineco_010',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'Os contraceptivos hormonais combinados (estrogênio + progestogênio) são contraindicados em:',
    options: ['Mulheres com trombofilia/TEP prévio, tabagistas >35 anos, hipertensão arterial não controlada, enxaqueca com aura, amamentação <6 meses (OMS categoria 4)', 'Mulheres com SOP sem história de trombose', 'Adolescentes saudáveis', 'Mulheres com dismenorreia primária'],
    correctIndex: 0,
    explanation: 'CHC (OMS MEC categorias 3-4 = risco inaceitável): TEV prévio, trombofilia, HAS grave (≥160/100), tabagismo ≥35 anos (>15 cigarros/dia), enxaqueca com aura, cardiopatia isquêmica, AVC prévio, amamentação <6 semanas, câncer hormônio-dependente, hepatopatia grave, obesidade mórbida com outros fatores de risco. Alternativas: progestogênio isolado (não aumenta risco de TEV), DIU.'
  },
  {
    id: 'est_gineco_011',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'O aborto espontâneo de primeiro trimestre está associado em ~50-60% dos casos a:',
    options: ['Anomalias cromossômicas do embrião (trissomias, monossomia X, poliploidia) — causa mais comum', 'Incompetência istmo-cervical (causa de abortos do 2° trimestre)', 'Hipotireoidismo materno como causa mais frequente', 'Endometriose em todos os casos de abortamento habitual'],
    correctIndex: 0,
    explanation: 'Aborto espontâneo 1° trimestre: ~15% das gestações clinicamente reconhecidas. Causas: anomalias cromossômicas (50-60%): trissomia 16 mais comum; monossomia X; triploidia. Outras: anatômicas (incompetência cervical — 2° T), endócrinas (hipo/hipertireoidismo, DM descompensado), autoimunes (SAF — síndrome antifosfolipídeo), infecções, tabagismo, idade materna avançada.'
  },
  {
    id: 'est_gineco_012',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'A gravidez ectópica tubária apresenta-se classicamente com:',
    options: ['Dor abdominal pélvica unilateral + amenorreia (4-8 semanas) + sangramento vaginal escasso, com Beta-hCG positivo e útero vazio ao USG transvaginal', 'Sangramento vaginal volumoso + cólicas uterinas intensas bilaterais (aborto completo)', 'Sangue vivo rutilante + dor abdominal difusa + placenta identificada no colo (placenta prévia)', 'Ausência de sintomas até o 2° trimestre de gestação'],
    correctIndex: 0,
    explanation: 'GE tubária (~95% das ectópicas): amenorreia + sangramento escuro vaginal (não corresponde ao ciclo) + dor pélvica unilateral. β-hCG positivo; USG TV: útero vazio + massa anexial. GE rota: dor abdominal aguda, hipotensão, peritonismo (emergência cirúrgica). Tratamento: metotrexato (não rota, ≤3,5 cm, β-hCG <5.000, sem atividade cardíaca) ou salpingectomia laparoscópica.'
  },
  {
    id: 'est_gineco_013',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'A eclâmpsia é definida como pré-eclâmpsia com:',
    options: ['Convulsões tônico-clônicas generalizadas não atribuíveis a outras causas, em gestante com PE — tratamento agudo: sulfato de magnésio IV', 'Apenas PA ≥160/110 mmHg sem convulsões', 'Proteinúria maciça >5 g/24h sem convulsões', 'Síndrome HELLP sem convulsões'],
    correctIndex: 0,
    explanation: 'Eclâmpsia: PE + convulsão/coma sem outra etiologia explicável. Tratamento: (1) Sulfato de Mg (anticonvulsivante + prevenção de recorrência): dose ataque 4-6g IV em 20 min + manutenção 1-2 g/h; (2) Anti-hipertensivo se PA ≥160/100 (hidralazina IV, labetalol, nifedipina VO); (3) Resolução da gestação após estabilização (via de parto conforme condições). Antídoto do MgSO4: gluconato de cálcio.'
  },
  {
    id: 'est_gineco_014',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'A mastite puerperal manifesta-se com:',
    options: ['Dor, calor, rubor e endurecimento de segmento mamário + febre >38,5°C na puerperal que amamenta — Staphylococcus aureus é o principal agente — tratamento: antibiótico + manutenção da amamentação', 'Apenas ingurgitamento mamário bilateral sem febre (empedramento)', 'Galactocele (cisto de leite) com massa flutuante', 'Câncer de mama inflamatório (pele de laranja sem febre)'],
    correctIndex: 0,
    explanation: 'Mastite puerperal: ocorre em ~2-10% das lactantes, pico 2-3 semanas pós-parto. S. aureus é o principal agente (via fissuras mamilares). Clínica: segmento doloroso, eritematoso, endurecido + febre + mal-estar. Tratamento: antibiótico (cefalexina VO 500mg 6/6h por 10-14d; dicloxacilina nos EUA) + esvaziamento da mama (amamentação NÃO é contraindicada — reduz mastite). Abscesso: drenagem cirúrgica + ATB IV.'
  },
  {
    id: 'est_gineco_015',
    cycle: 'Ciclo Clínico',
    subject: 'Ginecologia & Obstetrícia',
    text: 'O teste de Papanicolau com resultado ASCUS (células escamosas atípicas de significado indeterminado) deve ser conduzido com:',
    options: ['Colposcopia imediata OU coteste HPV (se disponível): HPV negativo → repetir citologia em 3 anos; HPV positivo → colposcopia', 'Biópsia de colo imediata sem colposcopia', 'Tratamento com antibióticos e repetição em 6 meses sem colposcopia', 'Histerectomia profilática em todas as pacientes'],
    correctIndex: 0,
    explanation: 'ASCUS (ASC-US): classe limítrofe; pode representar HPV, inflamação, atrofia ou lesão de alto grau. Conduta INCA/FEBRASGO: coteste HPV: se positivo para HPV16/18 → colposcopia; se outros subtipos oncogênicos → colposcopia ou repetir em 1 ano; HPV negativo → rastreamento de rotina (3 anos). Se coteste indisponível: citologia em 6 e 12 meses (2 normais → rotina); qualquer anormal → colposcopia.'
  },
];
