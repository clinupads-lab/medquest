// Questões inéditas geradas seguindo o padrão dos processos seletivos de residência médica
// da USP/HC-FMUSP: vinhetas clínicas detalhadas, raciocínio baseado em diretrizes, 5 alternativas.
// Distribuição proporcional às 5 grandes áreas do acesso direto. Nenhum enunciado reaproveita
// texto de outro arquivo do banco (temas clínicos distintos dos já usados em ENARE).
export const USP_GERADO_2026_QUESTIONS: any[] = [
  // ── Clínica Médica (25) ──────────────────────────────────────────────
  {
    id: 'usp_gerado26_001',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente de 68 anos, hipertenso, apresenta dispneia súbita, ortopneia e estertores crepitantes bilaterais difusos. PA 210x120 mmHg, saturação 84% em ar ambiente. Radiografia mostra infiltrado alveolar bilateral em asa de borboleta. Qual a conduta imediata prioritária?',
    options: [
      'Ventilação não invasiva, vasodilatador e diurético intravenoso para redução rápida da pós-carga e congestão',
      'Reposição volêmica agressiva com cristaloide',
      'Betabloqueador intravenoso em bolus como primeira medida',
      'Antibioticoterapia empírica isolada, sem tratar a congestão',
      'Observação clínica sem intervenção medicamentosa imediata'
    ],
    correctIndex: 0,
    explanation: 'No edema agudo de pulmão hipertensivo, a prioridade é reduzir rapidamente a pós-carga (vasodilatador) associada a diurético e suporte ventilatório não invasivo, evitando expansão volêmica.'
  },
  {
    id: 'usp_gerado26_002',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente pós-IAM extenso de parede anterior evolui com hipotensão refratária a volume, extremidades frias e oligúria, mesmo após reperfusão. Qual o diagnóstico e a conduta farmacológica inicial?',
    options: [
      'Choque cardiogênico; inotrópico (dobutamina) associado a suporte hemodinâmico',
      'Choque hipovolêmico; expansão volêmica agressiva contínua',
      'Choque distributivo; apenas vasopressor sem inotrópico',
      'Choque obstrutivo; anticoagulação plena isolada',
      'Choque neurogênico; atropina isolada'
    ],
    correctIndex: 0,
    explanation: 'Choque cardiogênico pós-IAM, com sinais de baixo débito e extremidades frias, é tratado com suporte inotrópico para melhorar a contratilidade, associado a monitorização hemodinâmica.'
  },
  {
    id: 'usp_gerado26_003',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Jovem de 22 anos apresenta quadro gripal seguido de dispneia progressiva, taquicardia desproporcional à febre e terceira bulha. Ecocardiograma mostra disfunção biventricular difusa sem doença coronariana. Qual a hipótese diagnóstica mais provável?',
    options: [
      'Miocardite viral aguda',
      'Cardiomiopatia hipertrófica obstrutiva',
      'Pericardite constritiva crônica',
      'Estenose mitral reumática',
      'Cardiomiopatia induzida por estresse (Takotsubo)'
    ],
    correctIndex: 0,
    explanation: 'Quadro viral prévio seguido de disfunção biventricular aguda em jovem sem doença coronariana é altamente sugestivo de miocardite viral aguda.'
  },
  {
    id: 'usp_gerado26_004',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente idoso apresenta síncope aos esforços, dispneia progressiva e sopro sistólico rude em foco aórtico irradiado para carótidas. Ecocardiograma confirma área valvar aórtica de 0,7 cm² com gradiente médio elevado. Qual a conduta definitiva?',
    options: [
      'Troca valvar aórtica (cirúrgica ou transcateter, conforme risco)',
      'Tratamento clínico exclusivo com diurético e vasodilatador',
      'Apenas seguimento ecocardiográfico anual sem intervenção',
      'Valvuloplastia por balão como tratamento definitivo em adultos',
      'Betabloqueador em altas doses como única conduta'
    ],
    correctIndex: 0,
    explanation: 'Estenose aórtica grave sintomática (síncope, dispneia) tem indicação de troca valvar, seja cirúrgica ou por via transcateter conforme o risco cirúrgico do paciente.'
  },
  {
    id: 'usp_gerado26_005',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente apresenta dispneia súbita intensa e edema agudo de pulmão. Ausculta revela sopro holossistólico novo em foco mitral com irradiação axilar. Ecocardiograma mostra folheto mitral flácido com refluxo importante. Contexto de IAM recente inferior. Qual a complicação mecânica mais provável?',
    options: [
      'Rotura de músculo papilar com insuficiência mitral aguda',
      'Comunicação interventricular pós-infarto',
      'Rotura de parede livre do ventrículo',
      'Aneurisma ventricular crônico',
      'Trombo mural ventricular'
    ],
    correctIndex: 0,
    explanation: 'Sopro mitral agudo novo com edema pulmonar após IAM inferior sugere rotura de músculo papilar, complicação mecânica grave que exige correção cirúrgica de urgência.'
  },
  {
    id: 'usp_gerado26_006',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente jovem apresenta dor torácica pleurítica que piora ao deitar e melhora ao inclinar-se para frente, após quadro gripal recente. ECG mostra supradesnivelamento difuso do segmento ST com concavidade para cima. Qual o diagnóstico e a conduta?',
    options: [
      'Pericardite aguda; anti-inflamatório não esteroidal em altas doses associado a colchicina',
      'IAM com supra de ST; trombólise imediata',
      'Dissecção de aorta; cirurgia de urgência',
      'Embolia pulmonar maciça; anticoagulação plena',
      'Angina instável; dupla antiagregação isolada'
    ],
    correctIndex: 0,
    explanation: 'Dor pleurítica postural após infecção viral com supra de ST difuso côncavo é típica de pericardite aguda, tratada com anti-inflamatório associado a colchicina para reduzir recorrência.'
  },
  {
    id: 'usp_gerado26_007',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente apresenta hipotensão, turgência jugular e bulhas cardíacas hipofonéticas (tríade de Beck) após trauma torácico. Ecocardiograma à beira do leito mostra derrame pericárdico volumoso com colapso de câmaras direitas. Qual a conduta imediata?',
    options: [
      'Pericardiocentese de urgência',
      'Diurético intravenoso em altas doses',
      'Trombólise química',
      'Apenas observação com reavaliação em 6 horas',
      'Anticoagulação plena imediata'
    ],
    correctIndex: 0,
    explanation: 'A tríade de Beck com sinais ecocardiográficos de tamponamento cardíaco exige pericardiocentese de urgência para alívio imediato da compressão cardíaca.'
  },
  {
    id: 'usp_gerado26_008',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente asmático grave apresenta tórax silencioso, confusão mental e saturação 82% apesar de broncodilatador contínuo. Qual a conduta imediata mais adequada?',
    options: [
      'Preparar via aérea avançada e considerar intubação orotraqueal de urgência',
      'Aumentar apenas a dose do broncodilatador inalatório e reavaliar em 1 hora',
      'Alta com retorno ambulatorial em 24 horas',
      'Apenas corticoide oral, sem outras medidas',
      'Fisioterapia respiratória isolada'
    ],
    correctIndex: 0,
    explanation: 'Tórax silencioso e confusão mental na crise asmática são sinais de insuficiência respiratória iminente, indicando preparo para via aérea avançada e possível intubação.'
  },
  {
    id: 'usp_gerado26_009',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente com fratura de fêmur há 24 horas desenvolve dispneia súbita, confusão, petéquias em tórax e axilas, e hipoxemia importante. Qual a hipótese diagnóstica mais provável?',
    options: [
      'Embolia gordurosa',
      'Tromboembolismo pulmonar clássico',
      'Pneumonia aspirativa',
      'Contusão pulmonar isolada',
      'Edema agudo de pulmão cardiogênico'
    ],
    correctIndex: 0,
    explanation: 'A tríade de insuficiência respiratória, alteração neurológica e petéquias após fratura de osso longo é clássica de embolia gordurosa.'
  },
  {
    id: 'usp_gerado26_010',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente crítico em sepse grave evolui com hipoxemia refratária, infiltrado bilateral difuso e relação PaO2/FiO2 de 120, sem sinais de sobrecarga hídrica cardiogênica. Qual o diagnóstico e a estratégia ventilatória protetora indicada?',
    options: [
      'SARA moderada; ventilação com baixo volume corrente (cerca de 6 mL/kg de peso predito)',
      'Edema cardiogênico; diurético isolado como tratamento respiratório',
      'Pneumonia simples; antibiótico isolado, sem ajuste ventilatório',
      'TEP maciço; trombólise imediata',
      'Atelectasia simples; apenas fisioterapia respiratória'
    ],
    correctIndex: 0,
    explanation: 'Relação PaO2/FiO2 entre 100-200 com infiltrado bilateral não cardiogênico define SARA moderada; a ventilação protetora com baixo volume corrente reduz lesão pulmonar induzida pela ventilação.'
  },
  {
    id: 'usp_gerado26_011',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente diabético em uso de insulina apresenta sudorese, tremores, taquicardia e confusão mental. Glicemia capilar 38 mg/dL. Está consciente e capaz de deglutir. Qual a conduta imediata?',
    options: [
      'Administração oral de carboidrato de absorção rápida',
      'Glucagon intramuscular como primeira escolha em paciente consciente',
      'Insulina adicional para confirmar o diagnóstico',
      'Glicose hipertônica intravenosa mesmo com boa aceitação oral',
      'Observação sem qualquer intervenção imediata'
    ],
    correctIndex: 0,
    explanation: 'Em hipoglicemia com paciente consciente e capaz de deglutir, a conduta inicial é a administração oral de carboidrato de absorção rápida, reservando glicose intravenosa para casos com rebaixamento de consciência.'
  },
  {
    id: 'usp_gerado26_012',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente idoso, diabético tipo 2, é trazido com rebaixamento do nível de consciência, glicemia de 850 mg/dL, osmolalidade sérica muito elevada e cetonúria ausente ou discreta. Qual o diagnóstico e a base do tratamento?',
    options: [
      'Estado hiperosmolar hiperglicêmico; hidratação venosa vigorosa e insulinoterapia',
      'Cetoacidose diabética clássica; bicarbonato como prioridade terapêutica',
      'Hipoglicemia grave; glicose hipertônica imediata',
      'AVC isquêmico; trombólise imediata sem corrigir a glicemia',
      'Intoxicação exógena; lavagem gástrica'
    ],
    correctIndex: 0,
    explanation: 'Hiperglicemia extrema com hiperosmolaridade e pouca ou nenhuma cetose caracteriza o estado hiperosmolar hiperglicêmico, cujo pilar terapêutico é a hidratação vigorosa associada à insulinoterapia.'
  },
  {
    id: 'usp_gerado26_013',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente em uso crônico de corticoide suspende a medicação abruptamente e desenvolve hipotensão refratária, náuseas, dor abdominal e hiponatremia com hipercalemia. Qual o diagnóstico e a conduta imediata?',
    options: [
      'Insuficiência adrenal aguda; hidrocortisona intravenosa e reposição volêmica',
      'Choque séptico; apenas antibiótico de amplo espectro',
      'Crise tireotóxica; tionamida isolada',
      'Cetoacidose diabética; insulina isolada',
      'Intoxicação digitálica; anticorpo antidigoxina'
    ],
    correctIndex: 0,
    explanation: 'Suspensão abrupta de corticoide crônico pode causar insuficiência adrenal aguda, com hipotensão refratária e distúrbio eletrolítico característico, tratada com hidrocortisona intravenosa e hidratação.'
  },
  {
    id: 'usp_gerado26_014',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente apresenta hipertensão paroxística, cefaleia, sudorese e palpitações em crises. Dosagem de metanefrinas plasmáticas está muito elevada. Qual o diagnóstico e o cuidado pré-operatório essencial antes da cirurgia?',
    options: [
      'Feocromocitoma; bloqueio alfa-adrenérgico antes do bloqueio beta',
      'Feocromocitoma; betabloqueador isolado antes de qualquer outra medida',
      'Hipertireoidismo; tionamida isolada, sem preparo cirúrgico específico',
      'Síndrome de Cushing; corticoide em altas doses antes da cirurgia',
      'Hiperaldosteronismo primário; espironolactona isolada, sem necessidade de bloqueio alfa'
    ],
    correctIndex: 0,
    explanation: 'No feocromocitoma, o bloqueio alfa-adrenérgico deve preceder o betabloqueio para evitar crise hipertensiva por vasoconstrição sem oposição, antes da abordagem cirúrgica.'
  },
  {
    id: 'usp_gerado26_015',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente apresenta ganho de peso central, estrias violáceas, fácies em lua cheia e fraqueza muscular proximal. Cortisol urinário de 24 horas muito elevado, não suprimido pelo teste com dexametasona em dose baixa. Qual o diagnóstico?',
    options: [
      'Síndrome de Cushing',
      'Hipotireoidismo grave',
      'Acromegalia',
      'Síndrome metabólica isolada',
      'Insuficiência adrenal crônica'
    ],
    correctIndex: 0,
    explanation: 'Fácies em lua cheia, estrias violáceas, obesidade central e hipercortisolismo não suprimível confirmam síndrome de Cushing, exigindo investigação da causa (hipofisária, adrenal ou ectópica).'
  },
  {
    id: 'usp_gerado26_016',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente apresenta constipação, fadiga, poliúria leve e cálculo renal recorrente. Cálcio sérico elevado, PTH elevado inapropriadamente. Qual o diagnóstico mais provável e a conduta definitiva quando indicada?',
    options: [
      'Hiperparatireoidismo primário; paratireoidectomia nos casos com critérios de tratamento cirúrgico',
      'Hipoparatireoidismo; reposição de cálcio isolada',
      'Intoxicação por vitamina D; apenas suspensão de suplementos',
      'Mieloma múltiplo; quimioterapia isolada sem avaliar paratireoides',
      'Sarcoidose; corticoide isolado sem investigar PTH'
    ],
    correctIndex: 0,
    explanation: 'Hipercalcemia com PTH elevado ou inapropriadamente normal confirma hiperparatireoidismo primário; a paratireoidectomia é indicada em pacientes sintomáticos ou com critérios específicos.'
  },
  {
    id: 'usp_gerado26_017',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente apresenta fadiga, icterícia leve e esplenomegalia. Hemograma mostra anemia com reticulocitose, LDH elevado, haptoglobina baixa e teste de Coombs direto positivo. Qual o diagnóstico e o tratamento de primeira linha?',
    options: [
      'Anemia hemolítica autoimune; corticoterapia',
      'Anemia ferropriva; reposição de ferro oral',
      'Anemia megaloblástica; reposição de vitamina B12',
      'Anemia falciforme; hidroxiureia',
      'Talassemia maior; transfusões crônicas isoladas'
    ],
    correctIndex: 0,
    explanation: 'Hemólise com Coombs direto positivo confirma anemia hemolítica autoimune, cujo tratamento inicial é a corticoterapia para suprimir a destruição imunomediada das hemácias.'
  },
  {
    id: 'usp_gerado26_018',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente apresenta fadiga, sangramentos gengivais e petéquias. Hemograma mostra pancitopenia com blastos circulantes. Mielograma confirma mais de 20% de blastos mieloides. Qual o diagnóstico e a urgência de manejo de uma possível complicação hemorrágica grave?',
    options: [
      'Leucemia mieloide aguda; atenção especial ao subtipo promielocítico pelo risco de coagulopatia grave',
      'Leucemia linfocítica crônica; observação sem urgência',
      'Anemia aplásica; apenas suporte transfusional, sem investigação adicional',
      'Mielofibrose primária; esplenectomia como primeira conduta',
      'Linfoma não Hodgkin; radioterapia isolada imediata'
    ],
    correctIndex: 0,
    explanation: 'Leucemia mieloide aguda, especialmente o subtipo promielocítico, cursa com risco de coagulação intravascular disseminada grave, exigindo reconhecimento e manejo hemostático precoce.'
  },
  {
    id: 'usp_gerado26_019',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente jovem apresenta linfonodomegalia cervical indolor, sudorese noturna e febre. Biópsia excisional confirma células de Reed-Sternberg em fundo inflamatório. Qual a próxima etapa antes de definir o tratamento?',
    options: [
      'Estadiamento com tomografia e/ou PET-CT para definir extensão da doença',
      'Quimioterapia imediata sem qualquer estadiamento',
      'Radioterapia isolada sem confirmação de extensão da doença',
      'Apenas observação clínica sem tratamento',
      'Transplante de medula óssea como primeira linha'
    ],
    correctIndex: 0,
    explanation: 'Após confirmação histológica de linfoma de Hodgkin (células de Reed-Sternberg), o estadiamento por imagem é essencial para definir a extensão da doença e planejar o tratamento adequado.'
  },
  {
    id: 'usp_gerado26_020',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente idoso apresenta dor óssea, anemia, insuficiência renal e hipercalcemia. Eletroforese de proteínas mostra pico monoclonal, e mielograma revela plasmócitos aumentados. Qual o diagnóstico mais provável?',
    options: [
      'Mieloma múltiplo',
      'Linfoma folicular',
      'Leucemia linfoide crônica',
      'Amiloidose primária isolada sem componente monoclonal',
      'Doença de Waldenström'
    ],
    correctIndex: 0,
    explanation: 'A tétrade de dor óssea, anemia, insuficiência renal e hipercalcemia associada a componente monoclonal e plasmocitose medular é clássica do mieloma múltiplo.'
  },
  {
    id: 'usp_gerado26_021',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente apresenta sinusite crônica, hemoptise e insuficiência renal rapidamente progressiva. ANCA-c positivo com padrão anti-proteinase 3. Qual o diagnóstico mais provável?',
    options: [
      'Granulomatose com poliangiite (antiga granulomatose de Wegener)',
      'Lúpus eritematoso sistêmico',
      'Síndrome de Goodpasture isolada sem ANCA',
      'Poliarterite nodosa clássica',
      'Arterite de Takayasu'
    ],
    correctIndex: 0,
    explanation: 'O acometimento de vias respiratórias superiores, pulmão e rim associado a ANCA-c/anti-PR3 positivo é característico da granulomatose com poliangiite.'
  },
  {
    id: 'usp_gerado26_022',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Mulher de 45 anos apresenta espessamento e endurecimento progressivo da pele das mãos e face, fenômeno de Raynaud grave e disfagia. Qual o diagnóstico mais provável?',
    options: [
      'Esclerose sistêmica',
      'Dermatomiosite',
      'Lúpus eritematoso sistêmico',
      'Síndrome de Sjögren primária',
      'Fascite eosinofílica'
    ],
    correctIndex: 0,
    explanation: 'Espessamento cutâneo progressivo, Raynaud grave e disfagia por acometimento esofágico são achados característicos da esclerose sistêmica.'
  },
  {
    id: 'usp_gerado26_023',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente idosa apresenta cefaleia temporal, claudicação mandibular e VHS muito elevado. Refere também dor e rigidez em cintura escapular. Qual o diagnóstico mais provável e a principal complicação a ser prevenida com tratamento imediato?',
    options: [
      'Arterite de células gigantes associada à polimialgia reumática; cegueira por neuropatia óptica isquêmica',
      'Enxaqueca crônica; sem risco de complicação grave',
      'Cefaleia tensional; apenas analgesia comum',
      'Neuralgia do trigêmeo; carbamazepina isolada',
      'Sinusite crônica; antibiótico isolado'
    ],
    correctIndex: 0,
    explanation: 'Cefaleia temporal, claudicação mandibular e VHS elevado em idosa com polimialgia associada sugerem arterite de células gigantes; corticoide deve ser iniciado prontamente para prevenir cegueira irreversível.'
  },
  {
    id: 'usp_gerado26_024',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente apresenta icterícia, fadiga e elevação de transaminases. Autoanticorpos antimúsculo liso positivos, hipergamaglobulinemia importante, biópsia hepática com hepatite de interface. Qual o diagnóstico e o tratamento inicial?',
    options: [
      'Hepatite autoimune; corticoterapia, associada ou não à azatioprina',
      'Hepatite viral B crônica; antiviral específico isolado',
      'Cirrose biliar primária; ácido ursodesoxicólico isolado',
      'Doença de Wilson; quelante de cobre isolado',
      'Hemocromatose; flebotomias terapêuticas isoladas'
    ],
    correctIndex: 0,
    explanation: 'Autoanticorpos antimúsculo liso, hipergamaglobulinemia e hepatite de interface na biópsia confirmam hepatite autoimune, tratada com corticoide, frequentemente associado à azatioprina.'
  },
  {
    id: 'usp_gerado26_025',
    banca: 'USP',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'Paciente jovem apresenta diarreia crônica com sangue, dor abdominal em quadrante inferior esquerdo e tenesmo. Colonoscopia mostra acometimento contínuo da mucosa retal estendendo-se proximalmente, sem áreas poupadas. Qual o diagnóstico mais provável?',
    options: [
      'Retocolite ulcerativa',
      'Doença de Crohn',
      'Colite isquêmica',
      'Colite pseudomembranosa',
      'Síndrome do intestino irritável'
    ],
    correctIndex: 0,
    explanation: 'Acometimento contínuo, limitado à mucosa e iniciado no reto sem áreas poupadas é característico da retocolite ulcerativa, diferente do padrão salteado transmural da doença de Crohn.'
  },

  // ── Cirurgia Geral (20) ──────────────────────────────────────────────
  {
    id: 'usp_gerado26_026',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Vítima de acidente automobilístico, estável hemodinamicamente, apresenta dor em hipocôndrio direito. Tomografia mostra laceração hepática grau III sem sangramento ativo contrastado. Qual a conduta mais apropriada?',
    options: [
      'Conduta não operatória com monitorização em ambiente de terapia intensiva',
      'Laparotomia exploradora imediata em todos os casos de lesão hepática',
      'Embolização arterial obrigatória independentemente do quadro clínico',
      'Alta hospitalar precoce sem monitorização',
      'Drenagem percutânea profilática imediata'
    ],
    correctIndex: 0,
    explanation: 'Paciente estável com lesão hepática sem sangramento ativo na tomografia pode ser tratado de forma não operatória, com monitorização rigorosa, reservando cirurgia para instabilidade ou falha do tratamento conservador.'
  },
  {
    id: 'usp_gerado26_027',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente vítima de trauma abdominal fechado apresenta hipotensão transitória que responde a cristaloide, com dor em hipocôndrio esquerdo. Tomografia mostra lesão esplênica grau II sem extravasamento de contraste. Qual a conduta inicial?',
    options: [
      'Conduta não operatória com observação hemodinâmica rigorosa',
      'Esplenectomia total imediata em todos os casos',
      'Esplenorrafia obrigatória independentemente da estabilidade',
      'Alta hospitalar sem qualquer monitorização',
      'Embolização esplênica de rotina mesmo em lesões leves'
    ],
    correctIndex: 0,
    explanation: 'Lesões esplênicas de baixo grau em paciente que respondeu à reposição volêmica podem ser manejadas de forma não operatória, com monitorização hemodinâmica cuidadosa.'
  },
  {
    id: 'usp_gerado26_028',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente idoso, constipado crônico, apresenta distensão abdominal maciça e dor em cólica. Radiografia simples de abdome mostra alça em formato de "grão de café" no quadrante inferior esquerdo. Qual o diagnóstico e a conduta inicial?',
    options: [
      'Volvo de sigmoide; descompressão endoscópica quando sem sinais de sofrimento',
      'Câncer colorretal obstrutivo; quimioterapia isolada',
      'Diverticulite aguda; apenas antibiótico oral',
      'Pseudo-obstrução colônica aguda; colonoscopia contraindicada',
      'Íleo paralítico simples; apenas jejum e observação'
    ],
    correctIndex: 0,
    explanation: 'O sinal radiológico do "grão de café" em quadrante inferior esquerdo é clássico do volvo de sigmoide; sem sinais de sofrimento de alça, a descompressão endoscópica é a conduta inicial.'
  },
  {
    id: 'usp_gerado26_029',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com retocolite ulcerativa grave apresenta distensão abdominal importante, febre alta e toxemia, com dilatação colônica maior que 6 cm à radiografia. Qual o diagnóstico e a conduta?',
    options: [
      'Megacólon tóxico; suporte intensivo com avaliação cirúrgica precoce se sem melhora',
      'Constipação intestinal simples; laxante isolado',
      'Apendicite aguda; apendicectomia',
      'Colite isquêmica leve; apenas hidratação oral',
      'Síndrome do intestino irritável; antiespasmódico isolado'
    ],
    correctIndex: 0,
    explanation: 'Dilatação colônica importante com toxemia sistêmica em paciente com colite grave caracteriza megacólon tóxico, emergência que exige suporte intensivo e avaliação cirúrgica precoce.'
  },
  {
    id: 'usp_gerado26_030',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente no 7º dia de pós-operatório de colectomia apresenta saída de conteúdo entérico por incisão cirúrgica, associada a febre baixa. Qual a conduta inicial mais apropriada?',
    options: [
      'Controle da fístula com drenagem adequada, suporte nutricional e controle do foco infeccioso',
      'Reoperação imediata obrigatória em todas as fístulas de baixo débito',
      'Apenas antibiótico oral sem drenagem ou suporte nutricional',
      'Alta hospitalar imediata com retorno ambulatorial',
      'Suspensão total da dieta por tempo indeterminado sem suporte nutricional alternativo'
    ],
    correctIndex: 0,
    explanation: 'Fístulas entéricas pós-operatórias são inicialmente manejadas com controle de drenagem, suporte nutricional adequado e tratamento do foco infeccioso, reservando reoperação para casos refratários.'
  },
  {
    id: 'usp_gerado26_031',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente proveniente de área endêmica apresenta febre, dor em hipocôndrio direito e hepatomegalia dolorosa. Tomografia mostra lesão cística hepática única de paredes espessas. Sorologia para Entamoeba histolytica positiva. Qual o tratamento de primeira linha?',
    options: [
      'Metronidazol, com drenagem percutânea reservada para casos selecionados',
      'Drenagem cirúrgica aberta como primeira conduta obrigatória',
      'Albendazol isolado como tratamento único',
      'Apenas observação clínica sem tratamento medicamentoso',
      'Hepatectomia parcial como primeira escolha'
    ],
    correctIndex: 0,
    explanation: 'O abscesso hepático amebiano responde bem ao metronidazol, sendo a drenagem percutânea reservada para abscessos volumosos, risco de rotura ou falha do tratamento clínico.'
  },
  {
    id: 'usp_gerado26_032',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com perda de peso, saciedade precoce e anemia ferropriva é investigado. Endoscopia digestiva alta revela lesão ulcerada infiltrativa em antro gástrico, biópsia confirma adenocarcinoma. Qual a próxima etapa antes de definir a cirurgia?',
    options: [
      'Estadiamento com tomografia de tórax e abdome, e eventual ultrassonografia endoscópica',
      'Gastrectomia total imediata sem qualquer estadiamento',
      'Quimioterapia isolada sem avaliação cirúrgica',
      'Apenas seguimento clínico sem intervenção',
      'Radioterapia exclusiva como tratamento definitivo'
    ],
    correctIndex: 0,
    explanation: 'Após confirmação histológica de câncer gástrico, o estadiamento correto é essencial para definir a extensão da doença e a estratégia cirúrgica ou neoadjuvante mais adequada.'
  },
  {
    id: 'usp_gerado26_033',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente apresenta disfagia progressiva para sólidos e líquidos, regurgitação e perda de peso. Esofagografia baritada mostra dilatação esofágica com afilamento distal em "bico de pássaro". Manometria confirma ausência de peristalse e relaxamento incompleto do esfíncter inferior. Qual o diagnóstico?',
    options: [
      'Acalasia',
      'Doença do refluxo gastroesofágico não complicada',
      'Espasmo esofágico difuso isolado',
      'Estenose péptica benigna',
      'Câncer de esôfago em estágio inicial'
    ],
    correctIndex: 0,
    explanation: 'Disfagia progressiva com imagem em "bico de pássaro" e manometria mostrando aperistalse e relaxamento incompleto do esfíncter inferior são clássicos de acalasia.'
  },
  {
    id: 'usp_gerado26_034',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com DRGE de longa data, mal controlada com inibidor de bomba de prótons em dose otimizada, apresenta hérnia hiatal e esofagite documentada em endoscopia. Qual a conduta quando o tratamento clínico falha?',
    options: [
      'Fundoplicatura cirúrgica (Nissen ou técnica correlata)',
      'Aumento indefinido da dose de inibidor de bomba de prótons sem considerar cirurgia',
      'Apenas mudança de estilo de vida, sem qualquer outra conduta',
      'Antagonista H2 isolado como alternativa definitiva',
      'Dilatação endoscópica isolada, sem considerar a hérnia'
    ],
    correctIndex: 0,
    explanation: 'DRGE refratária ao tratamento clínico otimizado, associada à hérnia hiatal, tem indicação de correção cirúrgica por fundoplicatura.'
  },
  {
    id: 'usp_gerado26_035',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente apresenta icterícia indolor progressiva, colúria, acolia fecal e perda de peso. Tomografia mostra massa em cabeça de pâncreas com dilatação de vias biliares. Qual a conduta inicial de investigação antes do planejamento terapêutico?',
    options: [
      'Avaliação da ressecabilidade por imagem detalhada e biópsia/marcadores conforme protocolo',
      'Cirurgia de Whipple imediata sem qualquer estadiamento',
      'Quimioterapia isolada sem avaliação de ressecabilidade',
      'Apenas observação clínica sem investigação adicional',
      'Colocação de prótese biliar como único tratamento definitivo'
    ],
    correctIndex: 0,
    explanation: 'Diante de suspeita de câncer de pâncreas, avaliar a ressecabilidade por imagem detalhada é essencial antes de definir se o paciente é candidato à cirurgia de Whipple ou a tratamento neoadjuvante.'
  },
  {
    id: 'usp_gerado26_036',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente apresenta dor abdominal recorrente e episódios de pancreatite. Tomografia mostra lesão cística pancreática com septos e componente sólido, comunicando-se com o ducto pancreátio principal. Qual a conduta apropriada diante de características suspeitas?',
    options: [
      'Investigação adicional com ressonância/ultrassom endoscópico e considerar ressecção cirúrgica conforme critérios de risco',
      'Observação isolada sem qualquer investigação adicional, independentemente das características',
      'Drenagem percutânea simples como tratamento definitivo',
      'Quimioterapia isolada sem avaliação cirúrgica',
      'Apenas repetir exame de imagem em 5 anos'
    ],
    correctIndex: 0,
    explanation: 'Neoplasias císticas pancreáticas com características suspeitas (septos, componente sólido, comunicação ductal) exigem investigação adicional detalhada e avaliação de ressecção conforme critérios de risco de malignidade.'
  },
  {
    id: 'usp_gerado26_037',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Criança ingeriu substância cáustica acidentalmente. Após estabilização inicial, desenvolve disfagia progressiva semanas depois. Esofagografia mostra estenose longa do esôfago médio. Qual a conduta terapêutica inicial?',
    options: [
      'Dilatações esofágicas seriadas, com cirurgia reservada para casos refratários',
      'Esofagectomia imediata como primeira conduta',
      'Apenas dieta líquida prolongada, sem qualquer intervenção',
      'Gastrostomia isolada como tratamento definitivo da estenose',
      'Observação clínica sem qualquer intervenção'
    ],
    correctIndex: 0,
    explanation: 'Estenoses esofágicas cáusticas são inicialmente tratadas com dilatações seriadas, reservando cirurgia (como esofagectomia com reconstrução) para estenoses refratárias.'
  },
  {
    id: 'usp_gerado26_038',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Criança de 3 anos apresenta engasgo súbito seguido de tosse persistente, sibilo unilateral e diminuição do murmúrio vesicular à direita. Radiografia mostra hiperinsuflação do pulmão direito. Qual a hipótese diagnóstica e a conduta?',
    options: [
      'Aspiração de corpo estranho em via aérea; broncoscopia para remoção',
      'Asma brônquica; broncodilatador isolado',
      'Pneumonia bacteriana; antibiótico isolado',
      'Bronquiolite viral; apenas suporte clínico',
      'Malformação pulmonar congênita; cirurgia eletiva tardia'
    ],
    correctIndex: 0,
    explanation: 'Engasgo súbito seguido de sintomas respiratórios unilaterais e hiperinsuflação assimétrica sugere aspiração de corpo estranho, cujo tratamento definitivo é a remoção broncoscópica.'
  },
  {
    id: 'usp_gerado26_039',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente é mordido por cão de rua desconhecido, com ferimento profundo em antebraço. Qual a conduta em relação à profilaxia da raiva, considerando que o animal não pôde ser observado?',
    options: [
      'Iniciar soro e vacina antirrábica, conforme protocolo para animal não observável',
      'Aguardar sintomas do paciente antes de iniciar qualquer profilaxia',
      'Apenas limpeza da ferida, sem profilaxia específica',
      'Vacina isolada sem soro, independentemente da gravidade do ferimento',
      'Antibiótico isolado, sem qualquer profilaxia para raiva'
    ],
    correctIndex: 0,
    explanation: 'Em ferimento grave por animal de rua não observável, a profilaxia antirrábica com soro e vacina deve ser iniciada prontamente, conforme protocolo de vigilância.'
  },
  {
    id: 'usp_gerado26_040',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Vítima de agressão apresenta ferimento por arma branca em abdome, com evisceração de alça intestinal pela ferida. Qual a conduta pré-hospitalar e hospitalar imediata?',
    options: [
      'Cobrir a alça exposta com curativo úmido estéril e encaminhar para laparotomia exploradora',
      'Reintroduzir a alça manualmente ainda no atendimento inicial, sem avaliação cirúrgica',
      'Aguardar exames de imagem antes de qualquer conduta cirúrgica',
      'Apenas observação clínica sem intervenção cirúrgica',
      'Alta com curativo simples e retorno ambulatorial'
    ],
    correctIndex: 0,
    explanation: 'Evisceração traumática exige cobertura da alça com curativo úmido estéril, sem tentativa de redução manual, e encaminhamento imediato para laparotomia exploradora.'
  },
  {
    id: 'usp_gerado26_041',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com fratura exposta de perna, após redução e imobilização, evolui com dor desproporcional, parestesia e dor à extensão passiva dos dedos, com pulso ainda presente. Qual a hipótese diagnóstica e a conduta?',
    options: [
      'Síndrome compartimental; fasciotomia de urgência',
      'Trombose venosa profunda; anticoagulação isolada',
      'Lesão nervosa periférica isolada; apenas observação clínica',
      'Infecção de sítio cirúrgico; antibiótico isolado sem outra intervenção',
      'Espasmo muscular pós-trauma; analgesia comum, sem urgência'
    ],
    correctIndex: 0,
    explanation: 'Dor desproporcional e dor à extensão passiva são sinais precoces de síndrome compartimental, uma emergência que requer fasciotomia mesmo com pulso ainda presente, para evitar necrose muscular irreversível.'
  },
  {
    id: 'usp_gerado26_042',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Vítima de acidente com máquina industrial sofre amputação traumática parcial de dedos da mão. Qual a conduta imediata com o segmento amputado para viabilizar possível reimplante?',
    options: [
      'Envolver em gaze limpa umedecida, colocar em saco plástico e este dentro de outro recipiente com gelo, evitando contato direto',
      'Colocar o segmento diretamente em contato com gelo, sem qualquer proteção',
      'Lavar o segmento com álcool e deixar em temperatura ambiente',
      'Descartar o segmento se o transporte demorar mais de 30 minutos',
      'Congelar o segmento diretamente no freezer'
    ],
    correctIndex: 0,
    explanation: 'O segmento amputado deve ser protegido em gaze limpa e umedecida, acondicionado em saco plástico e resfriado indiretamente (sem contato direto com gelo), maximizando a viabilidade para reimplante.'
  },
  {
    id: 'usp_gerado26_043',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente com litíase biliar recorrente apresenta icterícia flutuante, colúria e dor em hipocôndrio direito, com dilatação de via biliar comum à ultrassonografia. Qual a conduta mais apropriada para o cálculo coledociano antes da colecistectomia?',
    options: [
      'Colangiopancreatografia retrógrada endoscópica (CPRE) para retirada do cálculo, seguida de colecistectomia',
      'Colecistectomia isolada sem qualquer abordagem da via biliar',
      'Apenas antibioticoterapia prolongada, sem remover o cálculo',
      'Observação clínica isolada sem qualquer intervenção',
      'Hepatectomia parcial como tratamento do cálculo coledociano'
    ],
    correctIndex: 0,
    explanation: 'Coledocolitíase associada à colelitíase é tratada com CPRE para retirada do cálculo da via biliar principal, seguida de colecistectomia para tratamento definitivo da vesícula.'
  },
  {
    id: 'usp_gerado26_044',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente jovem apresenta massa testicular indolor de crescimento progressivo, sem sinais inflamatórios. Ultrassom confirma lesão sólida intratesticular. Qual a conduta inicial mais apropriada?',
    options: [
      'Orquiectomia radical inguinal para diagnóstico e tratamento, evitando biópsia transescrotal',
      'Biópsia transescrotal diagnóstica como primeira conduta',
      'Apenas observação clínica por 6 meses antes de qualquer intervenção',
      'Antibioticoterapia empírica prolongada, sem avaliação cirúrgica',
      'Quimioterapia empírica sem confirmação histológica'
    ],
    correctIndex: 0,
    explanation: 'Massa testicular sólida suspeita de neoplasia deve ser abordada por orquiectomia radical via inguinal, evitando biópsia transescrotal pelo risco de disseminação tumoral pela via linfática alterada.'
  },
  {
    id: 'usp_gerado26_045',
    banca: 'USP',
    cycle: 'Ciclo Cirúrgico',
    subject: 'Cirurgia Geral',
    text: 'Paciente apresenta dor lombar em cólica intensa, hematúria microscópica e náuseas. Tomografia sem contraste confirma cálculo ureteral de 4 mm no terço distal, sem sinais de infecção. Qual a conduta inicial?',
    options: [
      'Tratamento conservador com analgesia, hidratação e terapia expulsiva medicamentosa',
      'Nefrolitotomia percutânea imediata para cálculo dessa dimensão',
      'Ureterolitotomia aberta como primeira escolha',
      'Nefrectomia como tratamento definitivo',
      'Apenas observação sem qualquer analgesia ou terapia expulsiva'
    ],
    correctIndex: 0,
    explanation: 'Cálculos ureterais pequenos, sem sinais de infecção ou obstrução grave, podem ser tratados conservadoramente com analgesia, hidratação e terapia expulsiva medicamentosa, com boa taxa de eliminação espontânea.'
  },

  // ── Pediatria (20) ──────────────────────────────────────────────
  {
    id: 'usp_gerado26_046',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança de 2 anos apresenta tosse metálica, estridor inspiratório e rouquidão após quadro catarral, piorando à noite. Sem sinais de toxemia importante. Qual o diagnóstico mais provável e a conduta inicial?',
    options: [
      'Laringotraqueíte viral aguda (crupe); corticoide e, se necessário, adrenalina inalatória',
      'Epiglotite aguda; intubação imediata obrigatória em todos os casos',
      'Corpo estranho de via aérea; broncoscopia de urgência',
      'Traqueíte bacteriana; antibiótico isolado, sem corticoide',
      'Asma brônquica; broncodilatador isolado, sem corticoide'
    ],
    correctIndex: 0,
    explanation: 'Tosse metálica, estridor e rouquidão de início gradual após catarro são clássicos de crupe viral, tratado com corticoide sistêmico e adrenalina inalatória em casos moderados a graves.'
  },
  {
    id: 'usp_gerado26_047',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança de 4 anos apresenta início súbito de febre alta, sialorreia, posição em tripé e estridor progressivo, com toxemia importante. Qual a conduta imediata mais importante e o que deve ser evitado?',
    options: [
      'Manter a criança calma e proceder à via aérea avançada em ambiente controlado; evitar exame de orofaringe com espátula',
      'Examinar a orofaringe com espátula para confirmar o diagnóstico antes de qualquer conduta',
      'Aguardar radiografia cervical antes de qualquer intervenção na via aérea',
      'Nebulização isolada sem preparo para via aérea avançada',
      'Alta com antitérmico e retorno se piora'
    ],
    correctIndex: 0,
    explanation: 'Na suspeita de epiglotite aguda, deve-se evitar manipular a orofaringe (risco de laringoespasmo total) e priorizar via aérea avançada em ambiente controlado, mantendo a criança calma.'
  },
  {
    id: 'usp_gerado26_048',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Lactente de 6 semanas, sem vacinação completa, apresenta tosse paroxística intensa seguida de guincho inspiratório e cianose, com contagem de leucócitos mostrando linfocitose importante. Qual o diagnóstico e o tratamento indicado?',
    options: [
      'Coqueluche; macrolídeo (azitromicina ou claritromicina)',
      'Bronquiolite viral; apenas suporte, sem antibiótico',
      'Asma do lactente; corticoide inalatório isolado',
      'Pneumonia bacteriana; betalactâmico isolado',
      'Refluxo gastroesofágico; inibidor de bomba de prótons'
    ],
    correctIndex: 0,
    explanation: 'Tosse paroxística com guincho inspiratório e linfocitose importante em lactente não vacinado é característico de coqueluche, tratada com macrolídeo, que também reduz a transmissibilidade.'
  },
  {
    id: 'usp_gerado26_049',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Recém-nascido pré-termo de 32 semanas apresenta desconforto respiratório progressivo logo após o nascimento, com gemência, tiragem e radiografia mostrando padrão reticulogranular difuso com broncogramas aéreos. Qual o diagnóstico e a conduta?',
    options: [
      'Síndrome do desconforto respiratório do recém-nascido (deficiência de surfactante); surfactante exógeno e suporte ventilatório',
      'Taquipneia transitória do recém-nascido; apenas observação sem surfactante',
      'Pneumonia congênita; antibiótico isolado, sem surfactante',
      'Hérnia diafragmática congênita; cirurgia imediata sem suporte ventilatório prévio',
      'Cardiopatia congênita cianótica; prostaglandina isolada'
    ],
    correctIndex: 0,
    explanation: 'Prematuridade com desconforto respiratório progressivo e padrão reticulogranular com broncogramas aéreos é característico da síndrome do desconforto respiratório por deficiência de surfactante, tratada com reposição de surfactante exógeno.'
  },
  {
    id: 'usp_gerado26_050',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Recém-nascido a termo, parto cesáreo eletivo, apresenta taquipneia leve nas primeiras horas de vida, sem outros sinais de gravidade, com radiografia mostrando líquido em cisuras. Qual o diagnóstico mais provável e a conduta?',
    options: [
      'Taquipneia transitória do recém-nascido; suporte de oxigênio e observação, com resolução em até 72 horas',
      'Síndrome do desconforto respiratório; surfactante exógeno imediato',
      'Pneumonia congênita grave; antibioticoterapia prolongada obrigatória',
      'Cardiopatia congênita; cateterismo cardíaco imediato',
      'Hipertensão pulmonar persistente; óxido nítrico inalatório imediato'
    ],
    correctIndex: 0,
    explanation: 'Taquipneia leve e autolimitada após cesárea eletiva, com líquido em cisuras na radiografia, é típica da taquipneia transitória do recém-nascido, com resolução espontânea em poucos dias.'
  },
  {
    id: 'usp_gerado26_051',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Lactente prematuro apresenta sopro sistólico contínuo em região infraclavicular esquerda, pulsos amplos ("em martelo d\'água") e sinais de sobrecarga de volume pulmonar. Qual o diagnóstico mais provável?',
    options: [
      'Persistência do canal arterial',
      'Comunicação interatrial isolada',
      'Coarctação de aorta',
      'Estenose pulmonar valvar isolada',
      'Tetralogia de Fallot'
    ],
    correctIndex: 0,
    explanation: 'Sopro contínuo, pulsos amplos e sinais de hiperfluxo pulmonar em prematuro são característicos da persistência do canal arterial, comum nessa população.'
  },
  {
    id: 'usp_gerado26_052',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança apresenta sopro holossistólico em borda esternal esquerda baixa, com hiperfluxo pulmonar e crescimento inadequado. Ecocardiograma mostra defeito no septo interventricular de tamanho moderado com repercussão hemodinâmica. Qual a conduta?',
    options: [
      'Correção cirúrgica do defeito, considerando repercussão clínica e crescimento',
      'Observação isolada, sem qualquer intervenção, independentemente da repercussão',
      'Apenas diurético crônico, sem considerar correção cirúrgica',
      'Transplante cardíaco como primeira opção',
      'Uso isolado de vasodilatador pulmonar sem avaliação cirúrgica'
    ],
    correctIndex: 0,
    explanation: 'Comunicação interventricular com repercussão hemodinâmica significativa (hiperfluxo, déficit de crescimento) tem indicação de correção cirúrgica.'
  },
  {
    id: 'usp_gerado26_053',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Lactente apresenta cianose progressiva desde o nascimento, sopro sistólico rude em borda esternal esquerda e crises de hipóxia com agitação e piora da cianose. Ecocardiograma confirma quatro alterações cardíacas associadas. Qual o diagnóstico?',
    options: [
      'Tetralogia de Fallot',
      'Transposição das grandes artérias isolada',
      'Truncus arteriosus',
      'Anomalia de Ebstein',
      'Atresia tricúspide isolada'
    ],
    correctIndex: 0,
    explanation: 'Cianose progressiva com crises hipoxêmicas e as quatro alterações características (CIV, estenose pulmonar, hipertrofia de VD e cavalgamento da aorta) definem a tetralogia de Fallot.'
  },
  {
    id: 'usp_gerado26_054',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança de 8 anos, 2 semanas após faringoamigdalite não tratada, apresenta poliartrite migratória, cardite e nódulos subcutâneos. Qual o diagnóstico mais provável e a conduta terapêutica principal?',
    options: [
      'Febre reumática; penicilina benzatina e anti-inflamatório, com profilaxia secundária prolongada',
      'Artrite reumatoide juvenil; metotrexato isolado, sem antibiótico',
      'Lúpus eritematoso sistêmico; corticoide isolado, sem profilaxia antibiótica',
      'Doença de Kawasaki; imunoglobulina isolada, sem penicilina',
      'Artrite séptica; drenagem cirúrgica isolada'
    ],
    correctIndex: 0,
    explanation: 'Poliartrite migratória, cardite e nódulos subcutâneos após faringite estreptocócica não tratada confirmam febre reumática, exigindo tratamento da infecção residual e profilaxia secundária prolongada para prevenir recorrências e dano valvar.'
  },
  {
    id: 'usp_gerado26_055',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança de 6 anos apresenta edema periorbitário, hematúria macroscópica (urina "cor de coca-cola") e hipertensão arterial, 10 dias após faringite. Complemento C3 baixo. Qual o diagnóstico mais provável e a conduta?',
    options: [
      'Glomerulonefrite difusa aguda pós-estreptocócica; suporte clínico, controle da pressão arterial e do volume',
      'Síndrome nefrótica de lesão mínima; corticoterapia isolada',
      'Síndrome hemolítico-urêmica; plasmaférese imediata',
      'Púrpura de Henoch-Schönlein; anti-histamínico isolado',
      'Pielonefrite aguda; antibiótico isolado, sem controle pressórico'
    ],
    correctIndex: 0,
    explanation: 'Hematúria, edema, hipertensão e hipocomplementenemia após faringite são clássicos da glomerulonefrite pós-estreptocócica, geralmente autolimitada, com tratamento de suporte e controle da pressão arterial e volemia.'
  },
  {
    id: 'usp_gerado26_056',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Lactente do sexo feminino apresenta febre, irritabilidade e choro à micção. Urocultura confirma mais de 100.000 UFC/mL de E. coli. Após tratamento do episódio agudo, qual investigação é recomendada em lactentes com primeira ITU febril?',
    options: [
      'Ultrassonografia de rins e vias urinárias, com investigação adicional conforme achados',
      'Cistografia miccional obrigatória em todos os casos, independentemente do ultrassom',
      'Nenhuma investigação adicional é necessária após o primeiro episódio',
      'Tomografia computadorizada de abdome como exame de rotina',
      'Biópsia renal como investigação inicial padrão'
    ],
    correctIndex: 0,
    explanation: 'Após primeira ITU febril em lactente, a ultrassonografia de rins e vias urinárias é o exame inicial recomendado, orientando a necessidade de investigações adicionais como a cistografia.'
  },
  {
    id: 'usp_gerado26_057',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança apresenta infecções urinárias febris de repetição. Cistografia miccional confirma refluxo do contraste até a pelve renal com dilatação ureteral. Qual o grau de refluxo vesicoureteral mais provável e a conduta inicial?',
    options: [
      'Refluxo de alto grau; considerar profilaxia antibiótica e acompanhamento especializado, com cirurgia em casos selecionados',
      'Refluxo grau I; cirurgia imediata obrigatória',
      'Ausência de refluxo; nenhuma conduta necessária',
      'Refluxo fisiológico do lactente; alta sem seguimento',
      'Válvula de uretra posterior; circuncisão como tratamento definitivo'
    ],
    correctIndex: 0,
    explanation: 'Refluxo vesicoureteral de alto grau, com dilatação e risco de dano renal, exige acompanhamento especializado, considerando profilaxia antibiótica e intervenção cirúrgica em casos selecionados.'
  },
  {
    id: 'usp_gerado26_058',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Lactente de 8 meses apresenta bolsa escrotal vazia à direita desde o nascimento, com testículo não palpável no trajeto inguinal nem na bolsa. Qual a conduta recomendada quanto ao momento da correção cirúrgica?',
    options: [
      'Orquidopexia idealmente entre 6 e 18 meses de idade',
      'Aguardar até a puberdade para decidir sobre a necessidade de correção',
      'Apenas observação clínica sem qualquer intervenção ao longo da vida',
      'Uso isolado de hCG como tratamento definitivo em todos os casos',
      'Orquiectomia profilática imediata sem tentativa de localização'
    ],
    correctIndex: 0,
    explanation: 'A criptorquidia não corrigida espontaneamente deve ser tratada cirurgicamente (orquidopexia) idealmente entre 6 e 18 meses, reduzindo riscos de infertilidade e malignização.'
  },
  {
    id: 'usp_gerado26_059',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Menino de 5 anos apresenta dificuldade para retrair o prepúcio, com anel fibrótico esbranquiçado visível e episódios recorrentes de balanopostite. Qual o diagnóstico e a conduta?',
    options: [
      'Fimose patológica; considerar postectomia ou corticoide tópico conforme gravidade',
      'Fimose fisiológica; apenas orientação de higiene, sem qualquer outra conduta',
      'Parafimose; redução manual isolada, sem necessidade de outra conduta',
      'Hipospádia; correção cirúrgica uretral',
      'Balanite candidiásica isolada; antifúngico tópico isolado, sem avaliar o prepúcio'
    ],
    correctIndex: 0,
    explanation: 'Anel fibrótico com infecções recorrentes caracteriza fimose patológica, que pode ser tratada inicialmente com corticoide tópico ou, se refratária, com postectomia.'
  },
  {
    id: 'usp_gerado26_060',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança de 3 anos não estabelece contato visual, não responde ao nome, apresenta movimentos repetitivos e não desenvolveu linguagem verbal funcional. Qual a conduta mais apropriada diante desses sinais de alerta?',
    options: [
      'Encaminhamento para avaliação especializada e estimulação precoce multiprofissional',
      'Aguardar até os 6 anos para qualquer avaliação, pois é normal nessa idade',
      'Iniciar antipsicótico isolado sem avaliação diagnóstica',
      'Apenas tranquilizar a família, sem qualquer encaminhamento',
      'Solicitar apenas exame de audiometria, sem outras avaliações'
    ],
    correctIndex: 0,
    explanation: 'Sinais de alerta para transtorno do espectro autista exigem encaminhamento precoce para avaliação especializada, já que a intervenção multiprofissional precoce melhora significativamente o prognóstico.'
  },
  {
    id: 'usp_gerado26_061',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança com história de asfixia perinatal grave apresenta atraso no desenvolvimento motor, espasticidade e alteração de tônus muscular não progressiva. Qual o diagnóstico mais provável e a base do manejo?',
    options: [
      'Paralisia cerebral; abordagem multiprofissional com fisioterapia, terapia ocupacional e fonoaudiologia',
      'Distrofia muscular progressiva; apenas corticoide isolado',
      'Doença metabólica degenerativa; apenas dieta especial, sem reabilitação',
      'Meningite bacteriana em fase aguda; antibioticoterapia isolada',
      'Convulsão febril simples; anticonvulsivante contínuo isolado'
    ],
    correctIndex: 0,
    explanation: 'Lesão cerebral não progressiva associada a asfixia perinatal, com espasticidade e atraso motor, caracteriza paralisia cerebral, cujo manejo é multiprofissional e voltado à reabilitação funcional.'
  },
  {
    id: 'usp_gerado26_062',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança de 4 anos apresenta febre, cefaleia, vômitos e rigidez de nuca leve, com bom estado geral entre os episódios. Líquor mostra pleocitose linfocitária, glicose normal e proteína discretamente elevada. Qual a hipótese diagnóstica mais provável e a conduta?',
    options: [
      'Meningite viral; tratamento de suporte, sem necessidade de antibioticoterapia prolongada',
      'Meningite bacteriana; antibioticoterapia prolongada obrigatória',
      'Meningite tuberculosa; esquema RIPE imediato sem confirmação',
      'Encefalite herpética; aciclovir contraindicado nesse quadro',
      'Abscesso cerebral; drenagem cirúrgica de urgência'
    ],
    correctIndex: 0,
    explanation: 'Líquor com predomínio linfocitário, glicose normal e proteína pouco alterada, associado a bom estado geral, sugere meningite viral, tratada com suporte clínico, sem necessidade de antibioticoterapia prolongada.'
  },
  {
    id: 'usp_gerado26_063',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança de 2 anos apresenta febre, irritabilidade e choro, com otoscopia mostrando membrana timpânica abaulada, hiperemiada e opaca. Qual o diagnóstico e a conduta apropriada considerando a idade?',
    options: [
      'Otite média aguda; antibioticoterapia indicada pela idade menor que 2 anos com sintomas moderados a graves',
      'Otite externa; antibiótico tópico isolado',
      'Otite média serosa; apenas observação, sem antibiótico',
      'Mastoidite aguda; cirurgia de urgência sem tentativa clínica',
      'Colesteatoma; cirurgia eletiva isolada'
    ],
    correctIndex: 0,
    explanation: 'Otite média aguda em crianças menores de 2 anos com sintomas moderados a graves tem indicação de antibioticoterapia, diferente de casos leves em crianças maiores que podem ser observados inicialmente.'
  },
  {
    id: 'usp_gerado26_064',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança de 7 anos apresenta coriza purulenta persistente por mais de 10 dias, tosse diurna e dor facial, sem melhora espontânea. Qual o diagnóstico mais provável e a conduta?',
    options: [
      'Sinusite bacteriana aguda; antibioticoterapia',
      'Resfriado comum prolongado; apenas sintomáticos, sem antibiótico',
      'Rinite alérgica isolada; anti-histamínico isolado, sem antibiótico',
      'Corpo estranho nasal; remoção endoscópica de urgência',
      'Adenoidite viral simples; apenas lavagem nasal'
    ],
    correctIndex: 0,
    explanation: 'Sintomas respiratórios altos persistentes por mais de 10 dias sem melhora, com secreção purulenta e dor facial, sugerem sinusite bacteriana, com indicação de antibioticoterapia.'
  },
  {
    id: 'usp_gerado26_065',
    banca: 'USP',
    cycle: 'Ciclo Pediátrico',
    subject: 'Pediatria',
    text: 'Criança de 5 anos, proveniente de área rural com saneamento precário, apresenta dor abdominal recorrente, distensão e eliminação de vermes nas fezes. Qual o parasita mais provável e o tratamento indicado?',
    options: [
      'Ascaris lumbricoides; albendazol ou mebendazol',
      'Taenia solium; apenas observação, sem tratamento específico',
      'Enterobius vermicularis; antibiótico betalactâmico',
      'Schistosoma mansoni; apenas dieta especial',
      'Giardia lamblia; corticoide isolado'
    ],
    correctIndex: 0,
    explanation: 'Eliminação de vermes visíveis nas fezes associada a sintomas gastrointestinais em área de saneamento precário é característica de ascaridíase, tratada com antiparasitário como albendazol ou mebendazol.'
  },

  // ── Ginecologia e Obstetrícia (20) ──────────────────────────────────────────────
  {
    id: 'usp_gerado26_066',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante de 30 semanas apresenta altura uterina menor que o esperado para a idade gestacional. Ultrassom confirma peso fetal estimado abaixo do percentil 3, com Doppler de artéria umbilical alterado. Qual o diagnóstico e a conduta?',
    options: [
      'Restrição de crescimento fetal; vigilância intensiva com Doppler seriado e definição do momento do parto conforme gravidade',
      'Variação normal da biometria fetal; alta sem seguimento adicional',
      'Macrossomia fetal; conduta expectante sem monitorização adicional',
      'Erro de datação gestacional; repetir ultrassom em 3 meses',
      'Óbito fetal iminente; interrupção imediata independentemente da idade gestacional'
    ],
    correctIndex: 0,
    explanation: 'Peso fetal abaixo do percentil 3 com Doppler umbilical alterado confirma restrição de crescimento fetal de origem placentária, exigindo vigilância intensiva e definição individualizada do momento do parto.'
  },
  {
    id: 'usp_gerado26_067',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestação gemelar monocoriônica diamniótica de 22 semanas apresenta discrepância importante de líquido amniótico entre os sacos, com um feto em oligoidrâmnio e outro em polidrâmnio. Qual a hipótese diagnóstica e a conduta?',
    options: [
      'Síndrome da transfusão feto-fetal; encaminhamento para centro de referência em medicina fetal para avaliação de terapia a laser',
      'Restrição de crescimento seletiva sem outra intervenção necessária',
      'Gestação gemelar normal; apenas seguimento de rotina sem encaminhamento',
      'Malformação fetal isolada; interrupção imediata da gestação',
      'Anemia fetal isolada; transfusão intrauterina sem avaliação especializada'
    ],
    correctIndex: 0,
    explanation: 'Discrepância importante de líquido amniótico entre gemelares monocoriônicos sugere síndrome da transfusão feto-fetal, que exige encaminhamento a centro especializado para avaliação de terapia a laser das anastomoses placentárias.'
  },
  {
    id: 'usp_gerado26_068',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante a termo em trabalho de parto apresenta feto em apresentação pélvica completa, confirmada por ultrassom, sem outras contraindicações. Qual conduta é considerada na definição da via de parto?',
    options: [
      'Avaliação individualizada por equipe experiente, podendo-se considerar parto vaginal em critérios específicos ou cesariana conforme protocolo do serviço',
      'Cesariana obrigatória em absolutamente todos os casos, sem exceção',
      'Parto vaginal obrigatório independentemente de qualquer critério',
      'Versão cefálica externa contraindicada em qualquer situação',
      'Indução do parto com ocitocina sem qualquer avaliação da apresentação'
    ],
    correctIndex: 0,
    explanation: 'A via de parto na apresentação pélvica depende de avaliação individualizada, experiência da equipe e protocolo institucional, podendo-se considerar tentativa de parto vaginal em casos selecionados.'
  },
  {
    id: 'usp_gerado26_069',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Durante o trabalho de parto, após a saída da cabeça fetal, há dificuldade para o desprendimento dos ombros, com retração da cabeça contra o períneo ("sinal da tartaruga"). Qual a principal complicação e a manobra inicial recomendada?',
    options: [
      'Distócia de ombro; manobra de McRoberts associada à pressão suprapúbica',
      'Prolapso de cordão; manobra de McRoberts é contraindicada',
      'Rotura uterina; cesariana de urgência mesmo com feto já parcialmente exteriorizado',
      'Apresentação córnica; versão interna imediata',
      'Circular de cordão simples; nenhuma manobra é necessária'
    ],
    correctIndex: 0,
    explanation: 'O "sinal da tartaruga" indica distócia de ombro; a manobra de McRoberts associada à pressão suprapúbica é a primeira conduta para liberar o ombro impactado.'
  },
  {
    id: 'usp_gerado26_070',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante em trabalho de parto apresenta rotura espontânea de membranas seguida de desaceleração fetal grave e súbita. Ao exame, palpa-se estrutura pulsátil no canal vaginal. Qual o diagnóstico e a conduta imediata?',
    options: [
      'Prolapso de cordão umbilical; elevação da apresentação fetal manualmente e cesariana de urgência',
      'Descolamento de placenta; apenas observação até resolução espontânea',
      'Distócia de ombro; manobra de McRoberts isolada',
      'Rotura uterina; expectante até estabilização espontânea',
      'Vasa prévia sem repercussão; seguimento ambulatorial de rotina'
    ],
    correctIndex: 0,
    explanation: 'Estrutura pulsátil no canal vaginal com desaceleração fetal grave após rotura de membranas caracteriza prolapso de cordão, emergência obstétrica que exige elevação manual da apresentação e cesariana imediata.'
  },
  {
    id: 'usp_gerado26_071',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Puérpera apresenta dor abdominal súbita intensa, sangramento vaginal e sinais de choque logo após parto vaginal com uso de ocitocina para condução do trabalho de parto prolongado. Qual a hipótese diagnóstica a ser considerada com urgência?',
    options: [
      'Rotura uterina; laparotomia de urgência',
      'Atonia uterina isolada; apenas massagem uterina, sem outra investigação',
      'Infecção puerperal; apenas antibioticoterapia, sem avaliação cirúrgica',
      'Retenção de restos placentários; curetagem eletiva ambulatorial',
      'Hematoma vulvar simples; apenas compressão local'
    ],
    correctIndex: 0,
    explanation: 'Dor abdominal súbita intensa com sinais de choque após trabalho de parto prolongado com ocitocina levanta suspeita de rotura uterina, exigindo laparotomia de urgência.'
  },
  {
    id: 'usp_gerado26_072',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Imediatamente após a dequitação, útero não é palpável no abdome e há sangramento importante, com massa visível exteriorizada no canal vaginal. Qual a hipótese diagnóstica e a conduta?',
    options: [
      'Inversão uterina puerperal; reposicionamento manual imediato do útero',
      'Atonia uterina simples; apenas massagem uterina, sem outra manobra',
      'Retenção placentária; aguardar expulsão espontânea',
      'Laceração de colo uterino isolada; sutura isolada, sem reposicionamento',
      'Hematoma retroplacentário; apenas observação clínica'
    ],
    correctIndex: 0,
    explanation: 'Ausência de útero palpável no abdome com massa exteriorizada na vagina após o parto caracteriza inversão uterina, emergência que exige reposicionamento manual imediato para evitar choque hemorrágico grave.'
  },
  {
    id: 'usp_gerado26_073',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Puérpera no 10º dia de pós-parto apresenta dor e edema unilateral em membro inferior, com sinal de Homans positivo. Qual a hipótese diagnóstica e a conduta?',
    options: [
      'Trombose venosa profunda puerperal; investigação por ultrassom Doppler e anticoagulação se confirmada',
      'Erisipela; apenas antibiótico oral, sem investigação vascular',
      'Linfedema pós-parto; apenas elevação do membro, sem investigação',
      'Celulite superficial; antibiótico tópico isolado',
      'Varizes fisiológicas da gestação; apenas meia elástica, sem outra investigação'
    ],
    correctIndex: 0,
    explanation: 'O puerpério é período de maior risco trombótico; dor e edema unilateral com sinal de Homans positivo exigem investigação por Doppler para TVP e anticoagulação se confirmada.'
  },
  {
    id: 'usp_gerado26_074',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 55 anos, na pós-menopausa, apresenta sangramento vaginal e massa anexial complexa sólido-cística ao ultrassom, com CA-125 elevado. Qual a conduta mais apropriada?',
    options: [
      'Encaminhamento para avaliação oncológica e cirurgia estadiadora conforme suspeita de malignidade',
      'Apenas seguimento ultrassonográfico anual, sem qualquer intervenção',
      'Punção da massa anexial por via transvaginal como conduta inicial',
      'Anticoncepcional hormonal combinado isolado como tratamento',
      'Observação clínica isolada, sem qualquer investigação adicional'
    ],
    correctIndex: 0,
    explanation: 'Massa anexial complexa na pós-menopausa com CA-125 elevado é altamente suspeita de malignidade ovariana, exigindo avaliação oncológica e cirurgia estadiadora apropriada.'
  },
  {
    id: 'usp_gerado26_075',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Mulher na pós-menopausa apresenta sangramento vaginal recorrente. Ultrassom transvaginal mostra espessamento endometrial de 12 mm. Qual a conduta diagnóstica mais apropriada?',
    options: [
      'Biópsia endometrial (histeroscopia com biópsia dirigida, quando disponível)',
      'Apenas observação clínica, sem qualquer investigação adicional',
      'Histerectomia total imediata sem confirmação histológica prévia',
      'Terapia hormonal isolada, sem investigação do endométrio',
      'Repetir apenas o ultrassom em 1 ano'
    ],
    correctIndex: 0,
    explanation: 'Sangramento pós-menopausa com espessamento endometrial significativo exige biópsia endometrial para excluir hiperplasia atípica ou câncer de endométrio.'
  },
  {
    id: 'usp_gerado26_076',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Mulher jovem apresenta atraso menstrual, náuseas intensas e sangramento vaginal com eliminação de vesículas em "cacho de uva". Beta-hCG muito elevado para a idade gestacional, ultrassom mostra padrão em "flocos de neve" sem embrião. Qual o diagnóstico e a conduta?',
    options: [
      'Mola hidatiforme completa; esvaziamento uterino e seguimento com beta-hCG seriado',
      'Gravidez ectópica; laparoscopia de urgência',
      'Abortamento incompleto; curetagem isolada, sem seguimento hormonal',
      'Gravidez múltipla normal; apenas seguimento pré-natal de rotina',
      'Corioamnionite; antibioticoterapia isolada, sem esvaziamento'
    ],
    correctIndex: 0,
    explanation: 'Vesículas em "cacho de uva", beta-hCG muito elevado e padrão em "flocos de neve" sem embrião confirmam mola hidatiforme completa, tratada com esvaziamento uterino e seguimento rigoroso do beta-hCG para detectar malignização.'
  },
  {
    id: 'usp_gerado26_077',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante com história de duas perdas gestacionais no segundo trimestre, sempre precedidas de dilatação cervical indolor sem contrações, é avaliada antes de nova gestação. Qual o diagnóstico mais provável e a conduta na gestação atual?',
    options: [
      'Incompetência istmocervical; cerclagem cervical em momento apropriado da gestação',
      'Descolamento prematuro de placenta recorrente; repouso absoluto isolado',
      'Insuficiência lútea; reposição isolada de progesterona sem intervenção cervical',
      'Malformação uterina não corrigível; interrupção precoce de toda futura gestação',
      'Infecção urinária recorrente; antibiótico profilático isolado'
    ],
    correctIndex: 0,
    explanation: 'Perdas gestacionais recorrentes no segundo trimestre com dilatação indolor sem contrações são características de incompetência istmocervical, tratada com cerclagem cervical em gestação subsequente.'
  },
  {
    id: 'usp_gerado26_078',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante Rh negativo, parceiro Rh positivo, encontra-se na 28ª semana de gestação, sem sensibilização prévia documentada (Coombs indireto negativo). Qual a conduta profilática recomendada?',
    options: [
      'Administração de imunoglobulina anti-D profilática',
      'Nenhuma conduta específica é necessária nesse momento da gestação',
      'Transfusão intrauterina profilática independentemente de sinais de anemia fetal',
      'Interrupção antecipada da gestação como profilaxia',
      'Repetir apenas o Coombs indireto sem qualquer profilaxia medicamentosa'
    ],
    correctIndex: 0,
    explanation: 'Gestante Rh negativo não sensibilizada, com parceiro Rh positivo, deve receber imunoglobulina anti-D profilática por volta da 28ª semana para prevenir a aloimunização.'
  },
  {
    id: 'usp_gerado26_079',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante no primeiro trimestre apresenta vômitos incoercíveis, perda de peso maior que 5% e sinais de desidratação, sem resposta a antieméticos orais. Qual a conduta apropriada?',
    options: [
      'Internação hospitalar para hidratação venosa, correção de distúrbios eletrolíticos e antieméticos parenterais',
      'Apenas orientação dietética ambulatorial, sem necessidade de internação',
      'Interrupção da gestação como única conduta eficaz',
      'Jejum absoluto prolongado sem qualquer reposição venosa',
      'Alta com apenas antiemético oral, mesmo sem resposta prévia'
    ],
    correctIndex: 0,
    explanation: 'Hiperêmese gravídica com desidratação e perda de peso significativa exige internação para hidratação venosa, correção eletrolítica e antieméticos por via parenteral.'
  },
  {
    id: 'usp_gerado26_080',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante no terceiro trimestre apresenta prurido generalizado intenso, predominando em palmas e plantas, sem lesões cutâneas primárias, com elevação de ácidos biliares séricos. Qual o diagnóstico e o principal risco fetal associado?',
    options: [
      'Colestase intra-hepática da gestação; risco de óbito fetal súbito, justificando antecipação do parto',
      'Escabiose; tratamento tópico isolado, sem risco fetal aumentado',
      'Dermatite atópica gestacional; corticoide tópico isolado, sem risco fetal',
      'Herpes gestacional; aciclovir isolado, sem necessidade de antecipar o parto',
      'Alergia alimentar; apenas dieta de exclusão, sem risco fetal'
    ],
    correctIndex: 0,
    explanation: 'Prurido palmoplantar com ácidos biliares elevados no terceiro trimestre é característico de colestase intra-hepática da gestação, associada a risco de óbito fetal súbito, o que frequentemente justifica antecipação do parto.'
  },
  {
    id: 'usp_gerado26_081',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante realiza sorologia de rotina no primeiro trimestre com IgM e IgG positivos para toxoplasmose, sem sorologia prévia à gestação para comparação. Qual a conduta inicial mais apropriada?',
    options: [
      'Teste de avidez de IgG para estimar o momento da infecção e iniciar espiramicina',
      'Nenhuma conduta específica, pois IgG positivo indica apenas imunidade prévia sem necessidade de tratamento',
      'Interrupção da gestação como única conduta diante de sorologia positiva',
      'Aguardar o parto para investigar a criança, sem tratar a gestante',
      'Sulfadiazina isolada desde o primeiro trimestre, sem avaliar avidez'
    ],
    correctIndex: 0,
    explanation: 'IgM e IgG positivos sem sorologia prévia exigem teste de avidez para estimar o momento da infecção; enquanto se define se é gestacional, inicia-se espiramicina para reduzir a transmissão vertical.'
  },
  {
    id: 'usp_gerado26_082',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante não vacinada contra rubéola apresenta exantema e linfadenopatia no primeiro trimestre, com sorologia confirmando infecção aguda. Qual o principal risco fetal associado a essa infecção nesse período gestacional?',
    options: [
      'Síndrome da rubéola congênita, incluindo catarata, surdez e cardiopatia',
      'Nenhum risco fetal relevante quando a infecção ocorre no primeiro trimestre',
      'Apenas restrição de crescimento fetal leve, sem outras malformações',
      'Risco exclusivo de parto prematuro, sem malformações estruturais',
      'Risco apenas de icterícia neonatal transitória'
    ],
    correctIndex: 0,
    explanation: 'A infecção materna por rubéola no primeiro trimestre está associada a alto risco de síndrome da rubéola congênita, com malformações graves como catarata, surdez e cardiopatia.'
  },
  {
    id: 'usp_gerado26_083',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante a termo apresenta lesões vesiculares dolorosas ativas em região genital, com história de herpes genital recorrente. Está em início de trabalho de parto. Qual a conduta quanto à via de parto?',
    options: [
      'Cesariana, para reduzir o risco de transmissão vertical do herpes neonatal',
      'Parto vaginal, independentemente das lesões ativas',
      'Indução do parto vaginal imediata sem considerar as lesões genitais',
      'Aciclovir isolado sem qualquer consideração sobre a via de parto',
      'Amniotomia precoce para acelerar o parto vaginal apesar das lesões'
    ],
    correctIndex: 0,
    explanation: 'Lesões herpéticas genitais ativas no momento do parto indicam cesariana para reduzir significativamente o risco de transmissão vertical e herpes neonatal grave.'
  },
  {
    id: 'usp_gerado26_084',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Gestante apresenta corrimento vaginal acinzentado com odor característico, teste das aminas positivo e presença de "clue cells" no exame a fresco. Qual o diagnóstico e o risco obstétrico associado se não tratado?',
    options: [
      'Vaginose bacteriana; associação com trabalho de parto prematuro se não tratada',
      'Candidíase vaginal; sem associação com prematuridade',
      'Tricomoníase; tratamento apenas do parceiro, sem tratar a gestante',
      'Cervicite gonocócica isolada; apenas observação, sem tratamento',
      'Vaginite atrófica; estrogênio tópico isolado'
    ],
    correctIndex: 0,
    explanation: 'Corrimento acinzentado com teste das aminas positivo e "clue cells" confirma vaginose bacteriana, associada a maior risco de trabalho de parto prematuro quando não tratada adequadamente.'
  },
  {
    id: 'usp_gerado26_085',
    banca: 'USP',
    cycle: 'Ciclo Gineco-Obstétrico',
    subject: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 30 anos relata ciclos menstruais irregulares, infertilidade e ultrassom com múltiplos folículos pequenos periféricos em "colar de pérolas", associados a resistência insulínica. Qual o principal risco metabólico a ser rastreado a longo prazo?',
    options: [
      'Diabetes mellitus tipo 2 e síndrome metabólica',
      'Insuficiência renal crônica isolada, sem relação metabólica',
      'Hipotireoidismo primário isolado, sem relação com a síndrome',
      'Osteoporose precoce isolada, sem outros riscos metabólicos',
      'Doença pulmonar obstrutiva crônica'
    ],
    correctIndex: 0,
    explanation: 'A síndrome dos ovários policísticos está associada à resistência insulínica, com risco aumentado de diabetes mellitus tipo 2 e síndrome metabólica ao longo da vida, exigindo rastreamento regular.'
  },

  // ── Medicina Preventiva e Social (15) ──────────────────────────────────────────────
  {
    id: 'usp_gerado26_086',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Profissional de saúde sofre acidente perfurocortante com material biológico de paciente com sorologia desconhecida durante procedimento hospitalar. Qual a conduta imediata mais apropriada?',
    options: [
      'Lavagem do local com água e sabão, notificação do acidente e avaliação para profilaxia pós-exposição conforme protocolo',
      'Aplicar álcool concentrado diretamente no ferimento como primeira medida',
      'Aguardar sintomas antes de notificar ou iniciar qualquer avaliação',
      'Espremer o local intensamente para eliminar o material biológico',
      'Notificar apenas se o paciente-fonte for confirmadamente soropositivo'
    ],
    correctIndex: 0,
    explanation: 'Acidentes com material biológico exigem lavagem adequada do local, notificação compulsória do acidente de trabalho e avaliação para profilaxia pós-exposição conforme protocolo institucional.'
  },
  {
    id: 'usp_gerado26_087',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Médico da atenção básica diagnostica caso novo de hanseníase multibacilar em paciente adulto. Qual a conduta obrigatória em relação aos contatos domiciliares?',
    options: [
      'Notificação compulsória do caso e exame dermatoneurológico dos contatos domiciliares',
      'Nenhuma conduta adicional é necessária além do tratamento do paciente índice',
      'Isolamento domiciliar obrigatório do paciente por tempo indeterminado',
      'Notificação apenas se houver deformidade física visível',
      'Tratamento dos contatos com o mesmo esquema poliquimioterápico, independentemente de exame'
    ],
    correctIndex: 0,
    explanation: 'Hanseníase é doença de notificação compulsória; contatos domiciliares devem ser examinados (exame dermatoneurológico) e orientados quanto a sinais e sintomas, além de vacinação com BCG quando indicado.'
  },
  {
    id: 'usp_gerado26_088',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Equipe de saúde da família realiza busca ativa de sintomáticos respiratórios na comunidade como estratégia de controle de determinada doença endêmica. A qual programa de controle essa estratégia está mais diretamente relacionada?',
    options: [
      'Programa Nacional de Controle da Tuberculose',
      'Programa Nacional de Imunizações',
      'Programa de controle da dengue',
      'Programa de controle do câncer de colo uterino',
      'Programa de saúde do trabalhador'
    ],
    correctIndex: 0,
    explanation: 'A busca ativa de sintomáticos respiratórios (tosse por 3 semanas ou mais) é estratégia central do Programa Nacional de Controle da Tuberculose para diagnóstico precoce e interrupção da cadeia de transmissão.'
  },
  {
    id: 'usp_gerado26_089',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Gestor de saúde pública analisa o número de óbitos maternos por causas relacionadas à gestação, parto e puerpério, em relação ao número de nascidos vivos, em determinado período. Qual indicador está sendo calculado?',
    options: [
      'Razão de mortalidade materna',
      'Taxa de mortalidade infantil',
      'Coeficiente de natalidade',
      'Taxa de fecundidade total',
      'Taxa de mortalidade proporcional por idade'
    ],
    correctIndex: 0,
    explanation: 'A razão de mortalidade materna relaciona óbitos maternos por causas obstétricas ao número de nascidos vivos, sendo indicador fundamental da qualidade da assistência obstétrica.'
  },
  {
    id: 'usp_gerado26_090',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Equipe de saúde mental da atenção básica discute casos complexos junto a especialista do CAPS, sem necessariamente encaminhar o paciente, mantendo o vínculo com a equipe de referência. Qual estratégia organizativa da Atenção Primária essa prática representa?',
    options: [
      'Apoio matricial (matriciamento) em saúde mental',
      'Referência hospitalar direta sem contrarreferência',
      'Hierarquização rígida sem compartilhamento de caso',
      'Encaminhamento definitivo sem corresponsabilização',
      'Atenção terciária isolada, sem relação com a atenção básica'
    ],
    correctIndex: 0,
    explanation: 'O apoio matricial permite que especialistas discutam e corresponsabilizem-se pelo cuidado junto às equipes de atenção básica, sem necessariamente transferir o paciente, fortalecendo a resolutividade da rede.'
  },
  {
    id: 'usp_gerado26_091',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Órgão de vigilância realiza inspeção periódica em indústria de alimentos, avaliando boas práticas de fabricação e condições sanitárias de produção. Essa atividade se enquadra em qual campo da vigilância em saúde?',
    options: [
      'Vigilância sanitária',
      'Vigilância epidemiológica',
      'Vigilância ambiental isolada, sem relação com produção de alimentos',
      'Vigilância da saúde do trabalhador exclusivamente',
      'Vigilância nutricional isolada'
    ],
    correctIndex: 0,
    explanation: 'A inspeção de estabelecimentos quanto a boas práticas de fabricação e condições sanitárias é atribuição da vigilância sanitária, que regula produtos, serviços e ambientes de risco à saúde.'
  },
  {
    id: 'usp_gerado26_092',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Estudo epidemiológico demonstra que populações com menor renda e escolaridade apresentam maior prevalência de doenças cardiovasculares, mesmo controlando fatores de risco biológicos clássicos. Qual conceito melhor explica esse achado?',
    options: [
      'Iniquidades em saúde relacionadas aos determinantes sociais',
      'Causalidade estritamente genética, sem influência ambiental',
      'Erro amostral inevitável em qualquer estudo epidemiológico',
      'Viés de aferição exclusivo do estudo, sem relevância populacional',
      'Fenômeno aleatório sem relação causal identificável'
    ],
    correctIndex: 0,
    explanation: 'Diferenças sistemáticas e evitáveis na saúde de grupos populacionais, relacionadas a condições sociais e econômicas, caracterizam iniquidades em saúde associadas aos determinantes sociais.'
  },
  {
    id: 'usp_gerado26_093',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Paciente com doença crônica grave, ainda lúcido, formaliza documento expressando quais tratamentos deseja ou não receber caso venha a perder a capacidade de decisão futuramente. Qual instrumento bioético-legal está sendo utilizado?',
    options: [
      'Diretivas antecipadas de vontade (testamento vital)',
      'Termo de consentimento livre e esclarecido padrão, sem validade futura',
      'Procuração jurídica sem relação com decisões de saúde',
      'Notificação compulsória de doença crônica',
      'Termo de responsabilidade por alta a pedido'
    ],
    correctIndex: 0,
    explanation: 'As diretivas antecipadas de vontade permitem que o paciente, ainda capaz, registre suas preferências sobre tratamentos futuros, a serem respeitadas caso perca a capacidade de decisão.'
  },
  {
    id: 'usp_gerado26_094',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Médico é procurado pela polícia solicitando informações do prontuário de um paciente para investigação criminal, sem autorização judicial específica nem consentimento do paciente. Qual a conduta ética apropriada?',
    options: [
      'Recusar a quebra de sigilo sem autorização judicial ou consentimento, salvo exceções legais específicas',
      'Fornecer todas as informações imediatamente, por se tratar de autoridade policial',
      'Fornecer apenas informações administrativas, sem qualquer critério ético',
      'Solicitar pagamento para liberar as informações do prontuário',
      'Destruir o prontuário para evitar qualquer questionamento futuro'
    ],
    correctIndex: 0,
    explanation: 'O sigilo médico deve ser mantido salvo exceções legais específicas (como justa causa, dever legal ou autorização do paciente/judicial), não bastando solicitação policial isolada sem base legal.'
  },
  {
    id: 'usp_gerado26_095',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Trabalhador rural apresenta sintomas compatíveis com intoxicação por agrotóxico após exposição ocupacional. Qual a conduta em relação à notificação desse evento?',
    options: [
      'Notificação compulsória de intoxicação exógena relacionada ao trabalho',
      'Nenhuma notificação é necessária, por se tratar de acidente individual',
      'Notificação apenas em caso de óbito do trabalhador',
      'Comunicação exclusiva ao empregador, sem notificação ao sistema de saúde',
      'Notificação apenas se houver mais de um trabalhador afetado simultaneamente'
    ],
    correctIndex: 0,
    explanation: 'Intoxicações exógenas relacionadas ao trabalho, incluindo por agrotóxicos, são de notificação compulsória, permitindo vigilância em saúde do trabalhador e medidas preventivas.'
  },
  {
    id: 'usp_gerado26_096',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Equipe multiprofissional avalia idoso quanto a mobilidade, cognição, humor, capacidade funcional e uso de medicações, de forma estruturada e abrangente. Qual instrumento essa prática representa?',
    options: [
      'Avaliação geriátrica ampla (multidimensional)',
      'Escala de coma de Glasgow isolada',
      'Mini exame do estado mental isolado, sem outras dimensões',
      'Escore de Apgar, adaptado para idosos',
      'Protocolo de Manchester isolado'
    ],
    correctIndex: 0,
    explanation: 'A avaliação geriátrica ampla é abordagem multidimensional estruturada que investiga aspectos físicos, funcionais, cognitivos e sociais do idoso, orientando o plano de cuidado individualizado.'
  },
  {
    id: 'usp_gerado26_097',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Comunidade indígena busca atendimento de saúde respeitando suas práticas tradicionais, articulado com a rede do SUS. Qual estrutura organizacional do sistema de saúde brasileiro é responsável por essa articulação?',
    options: [
      'Subsistema de Atenção à Saúde Indígena, com os Distritos Sanitários Especiais Indígenas',
      'Programa Saúde da Família convencional, sem estrutura específica',
      'Vigilância sanitária estadual isolada',
      'Rede de Atenção Psicossocial exclusivamente',
      'Consórcio intermunicipal de saúde genérico'
    ],
    correctIndex: 0,
    explanation: 'O Subsistema de Atenção à Saúde Indígena, organizado em Distritos Sanitários Especiais Indígenas, articula o cuidado respeitando práticas tradicionais junto à rede geral do SUS.'
  },
  {
    id: 'usp_gerado26_098',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Durante epidemia de Zika vírus, observa-se aumento de casos de microcefalia em recém-nascidos de gestantes infectadas no primeiro trimestre. Qual a principal medida de vigilância a ser reforçada diante desse cenário?',
    options: [
      'Vigilância de gestantes com exantema e notificação de casos de microcefalia associados à infecção congênita',
      'Vacinação em massa contra Zika vírus, já disponível e amplamente utilizada',
      'Isolamento hospitalar obrigatório de todas as gestantes da região',
      'Suspensão do pré-natal de rotina até o fim da epidemia',
      'Interrupção de toda gestação em área de transmissão ativa'
    ],
    correctIndex: 0,
    explanation: 'Diante do risco de síndrome congênita pelo Zika vírus, a vigilância de gestantes sintomáticas e a notificação de microcefalia são estratégias centrais, já que não há vacina disponível para essa arbovirose.'
  },
  {
    id: 'usp_gerado26_099',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Gestor municipal implementa ações que valorizam a escuta ativa, o acolhimento e a corresponsabilização entre profissionais e usuários na rede de saúde, buscando qualificar as relações de cuidado. Qual política nacional orienta essa abordagem?',
    options: [
      'Política Nacional de Humanização',
      'Política Nacional de Vigilância Sanitária',
      'Política Nacional de Atenção Oncológica',
      'Política Nacional de Insumos Estratégicos',
      'Política Nacional de Sangue e Hemoderivados'
    ],
    correctIndex: 0,
    explanation: 'A Política Nacional de Humanização orienta práticas de acolhimento, escuta qualificada e corresponsabilização nas relações entre profissionais e usuários do SUS.'
  },
  {
    id: 'usp_gerado26_100',
    banca: 'USP',
    cycle: 'Ciclo de Medicina Preventiva',
    subject: 'Medicina Preventiva e Social',
    text: 'Gestante em trabalho de parto chega à maternidade com sangramento vaginal importante e sofrimento fetal agudo. Qual classificação de prioridade de atendimento deve ser atribuída conforme protocolos de classificação de risco obstétrico?',
    options: [
      'Prioridade máxima (emergência), com atendimento imediato',
      'Prioridade não urgente, podendo aguardar na fila comum',
      'Encaminhamento para atendimento ambulatorial eletivo',
      'Prioridade mínima, aguardando disponibilidade de leito',
      'Classificação irrelevante nesse contexto, pois toda gestante aguarda o mesmo tempo'
    ],
    correctIndex: 0,
    explanation: 'Sangramento importante associado a sofrimento fetal agudo caracteriza emergência obstétrica, exigindo classificação de prioridade máxima e atendimento imediato conforme protocolos de classificação de risco.'
  },
];
