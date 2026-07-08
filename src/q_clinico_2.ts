export const Q_CLINICO_2: any[] = [
  // ─── INFECTOLOGIA ──────────────────────────────────────────────────────
  {
    id: 'est_infecto_001',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'A dengue grave é definida pela presença de:',
    options: ['Choque, sangramento grave e/ou disfunção orgânica grave (incluindo hepatite grave, miocardite, encefalite) — Grupo D na classificação do MS', 'Apenas febre e cefaleia (dengue sem sinais de alarme)', 'Trombocitopenia isolada <100.000 sem outros sinais', 'Qualquer sangramento nasal (epistaxe)'],
    correctIndex: 0,
    explanation: 'Classificação MS 2016: Grupo A (sem sinais de alarme, plaquetas normais) → domiciliar. Grupo B (fatores de risco OU sangramento espontâneo superficial OU plaquetas <100.000 sem sinais de alarme) → observação. Grupo C (sinais de alarme: dor abdominal intensa/contínua, vômitos persistentes, acúmulo de líquidos, hipotensão postural, hemorragia mucosa, letargia, hepatomegalia >2 cm, aumento do hematócrito 20%) → internação. Grupo D (dengue grave) → UTI.'
  },
  {
    id: 'est_infecto_002',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'A sepse é definida atualmente pelos critérios Sepsis-3 como:',
    options: ['Disfunção orgânica potencialmente fatal causada por resposta desregulada do hospedeiro a uma infecção — avaliada pela piora ≥2 pontos no escore SOFA', 'Apenas febre + FC>90 + FR>20 + leucocitose (critérios SIRS) associados a infecção suspeita', 'Hipotensão refratária a volume com infecção suspeita (choque séptico apenas)', 'Bacteremia positiva com febre e calafrios'],
    correctIndex: 0,
    explanation: 'Sepsis-3 (JAMA 2016): sepse = infecção suspeita/confirmada + disfunção orgânica (piora ≥2 pts SOFA). Choque séptico = sepse + hipotensão refratária a volume (necessita vasopressor para PAM ≥65) + lactato >2 mmol/L. qSOFA: FR≥22, Glasgow≤13, PAS≤100 (triagem em emergência). Bundles: antibióticos em 1h, hemoculturas, lactato, ressuscitação volêmica.'
  },
  {
    id: 'est_infecto_003',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'A tuberculose pulmonar primária difere da pós-primária (reativação) porque:',
    options: ['Primária: lobo médio/inferior direito, linfonodomegalia hiliar, complexo de Ghon, frequentemente assintomática em imunossuprimidos. Pós-primária: ápice pulmonar, cavidades, baciloscopia positiva, adultos', 'Primária: ápice pulmonar e baciloscopia frequentemente positiva', 'Pós-primária: linfonodomegalia mediastinal e efusão pleural como principal manifestação', 'Ambas têm apresentação radiológica idêntica'],
    correctIndex: 0,
    explanation: 'TB primária: 1ª exposição ao M. tuberculosis → complexo de Ghon (foco de Ghon parênquima + linfonodo hilar = complexo de Ranke). Geralmente lobo inferior ou médio. Pode curar espontaneamente ou disseminar (TB miliar, meningite TB). TB pós-primária (reativação): imunidade prévia falha → progressão nos ápices (maior concentração de O₂ e menor drenagem linfática), formação de cavidades, baciloscopia positive 50-80% dos casos, é a forma infectante.'
  },
  {
    id: 'est_infecto_004',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'O esquema RIPE de tratamento da tuberculose inclui:',
    options: ['Rifampicina + Isoniazida + Pirazinamida + Etambutol nos 2 primeiros meses (fase intensiva) → Rifampicina + Isoniazida por mais 4 meses (fase de manutenção) — 6 meses total', 'Rifampicina + Isoniazida por 9 meses apenas', 'Estreptomicina + Isoniazida por 12 meses', 'Rifampicina + Pirazinamida + Fluoroquinolona por 4 meses'],
    correctIndex: 0,
    explanation: 'Esquema TB sensível (PNCT Brasil): Fase intensiva (2 meses): RIPE [R=Rifampicina 10mg/kg/d, I=Isoniazida 5mg/kg/d, P=Pirazinamida 25mg/kg/d, E=Etambutol 20mg/kg/d]. Fase de manutenção (4 meses): RI. Duração total: 6 meses (TB pulmonar e ganglionar). Meningite TB: 12 meses (+ corticoide na fase inicial). Piridoxina (B6) junto com INH para prevenir neuropatia periférica.'
  },
  {
    id: 'est_infecto_005',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'A hanseníase é classificada como multibacilar quando:',
    options: ['Tem mais de 5 lesões de pele OU qualquer número de lesões com baciloscopia positiva — tratamento: PQT multibacilar por 12 meses (rifampicina + clofazimina + dapsona)', 'Tem menos de 5 lesões com baciloscopia negativa', 'Apresenta apenas manchas hipocrômicas com anestesia', 'Tem apenas comprometimento de um tronco nervoso'],
    correctIndex: 0,
    explanation: 'Classificação operacional OMS/MS: Paucibacilar (PB): até 5 lesões cutâneas + baciloscopia negativa → PQT-PB 6 meses (rifampicina mensal + dapsona diária). Multibacilar (MB): >5 lesões OU baciloscopia positiva (independente do número de lesões) → PQT-MB 12 meses (rifampicina mensal + clofazimina mensal + dapsona diária + clofazimina diária). Reações hansênicas: tipo 1 (RR) = corticoide; tipo 2 (ENH) = talidomida ou corticoide.'
  },
  {
    id: 'est_infecto_006',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'A leptospirose grave (síndrome de Weil) caracteriza-se pela tríade:',
    options: ['Icterícia, insuficiência renal e hemorragias (pulmonar, digestiva, conjuntival) — ocorre após 5-7 dias da infecção (fase imune/leptospirêmica tardia)', 'Apenas febre e cefaleia sem comprometimento de órgãos (fase leptospirêmica)', 'Rash cutâneo, artralgia e adenomegalia', 'Pneumonia com derrame pleural e hepatomegalia'],
    correctIndex: 0,
    explanation: 'Leptospirose: L. interrogans, transmissão por água/lama contaminada com urina de roedores. Fase leptospirêmica (1-7d): febre, cefaleia, mialgia (panturrilha), sufusão conjuntival. Fase imune (7-30d): maioria resolve; ~5-15% evolui para Weil: icterícia colestática (icterícia acastanhada = rubínica), IRA (não oligúrica, hipocalemia), hemorragias (SARA hemorrágica = síndrome de Weil grave). Tratamento: penicilina G ou ampicilina IV (grave), doxiciclina VO (leve/moderado).'
  },
  {
    id: 'est_infecto_007',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'A profilaxia pós-exposição ao HIV (PEP) deve ser iniciada idealmente:',
    options: ['Em até 2 horas após a exposição de risco (e no máximo em 72 horas) — esquema de 28 dias com 2 antirretrovirais', 'Até 7 dias após a exposição', 'Apenas para exposição percutânea, não mucosa', 'Somente se o HIV da fonte for comprovadamente resistente à TARV padrão'],
    correctIndex: 0,
    explanation: 'PEP (profilaxia pós-exposição): indicada após exposição sexual, ocupacional ou uso de drogas com material contaminado (ou fonte desconhecida de risco). Idealmente iniciar em até 2h, limite de 72h. Esquema: 28 dias com tenofovir + lamivudina + dolutegravir (1ª escolha no Brasil, PCDT 2021). Eficácia cai quanto mais tarde iniciada; >72h: sem benefício. Realizar CV HIV da fonte se disponível. Teste HIV do exposto: no momento, 4-6 semanas, 3 meses.'
  },
  {
    id: 'est_infecto_008',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'A sífilis primária manifesta-se com:',
    options: ['Úlcera genital única, indolor, de base limpa e bordas bem definidas (cancro duro) + linfonodomegalia inguinal bilateral indolor — T. pallidum', 'Múltiplas úlceras dolorosas com bordas irregulares e fundo sujo (cancro mole — H. ducreyi)', 'Lesões em condiloma acuminado (HPV)', 'Vesículas dolorosas agrupadas (herpes genital — HSV-2)'],
    correctIndex: 0,
    explanation: 'Sífilis primária: cancro duro (úlcera única, indolor, endurecida, base limpa, bordas regulares elevadas) no local de inoculação de T. pallidum + adenopatia regional indolor bilateral. Desaparece espontaneamente em 3-6 semanas (sem tratamento, evolui para 2ária). Diagnóstico: VDRL/RPR (triagem) + FTA-Abs ou TPHA (confirmatório). Tratamento: penicilina benzatina 2,4 milhões UI IM dose única.'
  },
  {
    id: 'est_infecto_009',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'A meningite bacteriana aguda apresenta a tríade clássica de:',
    options: ['Febre + cefaleia intensa + rigidez de nuca (meningismo) + sinais de Kernig e Brudzinski positivos', 'Febre + convulsões + coma sem rigidez de nuca', 'Cefaleia progressiva + febre + papiledema (hipertensão intracraniana)', 'Febre + vômitos em jato + pressão alta (síndrome de Cushing intracraniana)'],
    correctIndex: 0,
    explanation: 'Meningite bacteriana: tríade = febre + cefaleia grave + rigidez de nuca. Kernig: extensão do joelho com quadril fletido provoca dor/resistência. Brudzinski: flexão passiva do pescoço → flexão involuntária dos joelhos. Petéquias/púrpura = meningococcemia (N. meningitidis — emergência). Diagnóstico: punção lombar (após TC se papiledema/déficit focal). LCR: turvo, ↑proteínas, ↓glicose, ↑leucócitos (neutrófilos). Tratamento: ceftriaxona + dexametasona precocemente.'
  },
  {
    id: 'est_infecto_010',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'O diagnóstico laboratorial de HIV é feito por:',
    options: ['Dois testes rápidos diferentes OU ELISA de 4ª geração (Ag p24 + Ac) — confirmação com Western blot ou imunofluorescência; carga viral (CV) HIV para monitorar TARV', 'Apenas western blot isoladamente como teste de triagem', 'CD4 <200 cél/mm³ é diagnóstico de HIV', 'PCR de DNA proviral como único teste diagnóstico'],
    correctIndex: 0,
    explanation: 'Diagnóstico de HIV (PCDT Brasil 2021): 1) Teste de triagem: ELISA 4ª geração (detecta IgG+IgM anti-HIV-1/2 + Ag p24) ou 2 testes rápidos consecutivos. 2) Confirmação: Western blot, imunofluorescência, ou carga viral. Janela imunológica: ELISA 4ª geração ~10-14 dias; anticorpos ~21-28 dias. CD4 e CV HIV: não são diagnósticos mas monitoram a doença e a TARV (TARV indicado para todos, independente do CD4).'
  },
  {
    id: 'est_infecto_011',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'A febre amarela é transmitida por:',
    options: ['Aedes aegypti (ciclo urbano) e Haemagogus/Sabethes (ciclo silvestre/macacos)', 'Culex quinquefasciatus (pernilongo comum)', 'Anopheles darlingi (vetor da malária)', 'Contato direto entre pessoas (não é transmissível pessoa-a-pessoa)'],
    correctIndex: 0,
    explanation: 'Febre amarela: Flavivirus. Ciclo silvestre: Haemagogus/Sabethes (mosquito de copa de árvore) → macacos + humanos acidentais. Ciclo urbano: A. aegypti (erradicado do Brasil, risco de reemergência urbana). FA grave: fase tóxica (2-7d): febre, icterícia, IRA, insuficiência hepática, hemorragias, sinal de Faget (bradicardia relativa com febre). Vacina: febre amarela atenuada (17D) — dose única para a vida, eficaz >99%.'
  },
  {
    id: 'est_infecto_012',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'A antibioticoterapia empírica para pneumonia adquirida na comunidade (PAC) leve a moderada em adulto sem comorbidades é:',
    options: ['Amoxicilina 1g 8/8h VO OU azitromicina 500 mg/dia VO por 5-7 dias — cobertura para S. pneumoniae (principal agente) e atípicos', 'Piperacilina-tazobactam IV (amplo espectro apenas para hospitalizados)', 'Vancomicina IV para cobrir MRSA em todos os casos ambulatoriais', 'Nenhuma antibioticoterapia necessária em adultos jovens saudáveis'],
    correctIndex: 0,
    explanation: 'PAC ambulatorial (PSI classe I-II, CURB-65 = 0-1): S. pneumoniae, Mycoplasma, Chlamydophila, H. influenzae. Tratamento: amoxicilina 500mg-1g 8/8h (pneumococo) ou azitromicina 500mg/dia (atípicos) por 5 dias, ou doxiciclina. PAC hospitalar não-UTI (CURB-65 ≥2): beta-lactâmico + macrolídeo ou fluoroquinolona respiratória (levofloxacino, moxifloxacino). UTI: beta-lactâmico + fluoroquinolona IV.'
  },
  {
    id: 'est_infecto_013',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'O tétano se manifesta por espasmos musculares porque a toxina tetânica (tetanospasmina):',
    options: ['Bloqueia a liberação de neurotransmissores inibitórios (glicina e GABA) nas células de Renshaw da medula espinhal, causando espasmos e hipertonia', 'Bloqueia a liberação de acetilcolina na junção neuromuscular (como o botulismo)', 'Ativa diretamente os receptores de glicina (efeito estimulatório)', 'Causa lise muscular direta por toxina proteolítica'],
    correctIndex: 0,
    explanation: 'Tetanospasmina (produzida por C. tetani em feridas anaeróbias): transportada retroaxonalmente e pelo sangue → SNC → bloqueia liberação de glicina e GABA nos interneurônios inibitórios (células de Renshaw) → hiperatividade motora descontrolada → trismo (contração dos masseteres), risus sardonicus, opistótono, espasmos generalizados. Tratamento: imunoglobulina anti-tetânica, metronidazol, benzodiazepínicos, UTI.'
  },
  {
    id: 'est_infecto_014',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'A profilaxia da endocardite bacteriana está indicada antes de procedimentos dentários em:',
    options: ['Pacientes de alto risco: prótese valvar cardíaca, endocardite prévia, cardiopatias congênitas cianóticas não corrigidas, receptores de transplante cardíaco com valvulopatia — amoxicilina 2g VO 30-60 min antes', 'Todos os pacientes com sopro cardíaco antes de qualquer procedimento', 'Pacientes com HAS submetidos a cirurgia abdominal', 'Qualquer paciente antes de extração dentária'],
    correctIndex: 0,
    explanation: 'Profilaxia de EI (AHA/ESC): indicada apenas em procedimentos dentários com manipulação de tecido gengival/pulpa dental/perfuração de mucosa oral, em pacientes de ALTO RISCO: (1) prótese valvar ou material protético no coração; (2) EI prévia; (3) cardiopatia congênita cianótica não corrigida ou corrigida com material residual; (4) transplante cardíaco com valvulopatia. Droga: amoxicilina 2g VO 30-60 min antes. Clindamicina para alérgicos a penicilina.'
  },
  {
    id: 'est_infecto_015',
    cycle: 'Ciclo Clínico',
    subject: 'Infectologia',
    text: 'A hepatite B crônica é definida como:',
    options: ['HBsAg positivo por mais de 6 meses — HBeAg+ indica alta replicação viral; Anti-HBe+ indica baixa replicação (portador inativo) ou hepatite crônica HBeAg-negativa', 'Anti-HBs positivo por mais de 6 meses', 'HBcAb-IgM positivo por mais de 6 meses', 'HBV DNA positivo isolado sem sorologia'],
    correctIndex: 0,
    explanation: 'HBsAg: antígeno de superfície do HBV = marcador de infecção ativa. HBsAg+ por >6 meses = hepatite B crônica. HBeAg+: alta replicação viral, infecciosidade elevada, pior prognóstico. Anti-HBe+: diminuição da replicação (resposta imune). Anti-HBs+ (sem HBsAg): imunidade (vacina ou cura). Anti-HBc IgM+: infecção aguda recente. Tratamento crônica: tenofovir, entecavir (analogos de nucleosídeo/nucleotídeo).'
  },
  // ─── GASTROENTEROLOGIA ─────────────────────────────────────────────────
  {
    id: 'est_gastro_001',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A doença do refluxo gastroesofágico (DRGE) é causada principalmente por:',
    options: ['Incompetência do esfíncter esofágico inferior (EEI) com refluxo de conteúdo gástrico → pirose, regurgitação, com/sem esofagite erosiva à endoscopia', 'Hipersecreção de ácido pelo estômago isoladamente', 'Espasmo difuso do esôfago causando disfagia', 'Infecção pelo H. pylori como causa principal'],
    correctIndex: 0,
    explanation: 'DRGE: relaxamentos transitórios inapropriados do EEI (principal mecanismo) → refluxo ácido → pirose (retroesternal, após refeições, pior ao deitar) e regurgitação. Fatores: obesidade, gravidez, tabagismo, gorduras, café, chocolate, álcool, postura. Tratamento: mudanças de estilo de vida + IBP (omeprazol 20-40 mg/dia). Esôfago de Barrett: metaplasia intestinal → risco de adenocarcinoma → necessita vigilância endoscópica.'
  },
  {
    id: 'est_gastro_002',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A infecção por Helicobacter pylori está associada ao desenvolvimento de:',
    options: ['Úlcera péptica (gástrica e duodenal), gastrite crônica ativa, adenocarcinoma gástrico e linfoma MALT', 'DRGE e esofagite eosinofílica', 'Doença de Crohn e colite ulcerativa', 'Síndrome do intestino irritável como principal complicação'],
    correctIndex: 0,
    explanation: 'H. pylori: gram-negativo espiral, urease+ (protege em meio ácido). Infecta >50% da população mundial. Causa: gastrite ativa antral → úlcera duodenal (↑ácido por ↓somatostatina); úlcera gástrica; gastrite atrófica → metaplasia intestinal → adenocarcinoma gástrico (carcinógeno classe I IARC); linfoma MALT (erradicação cura o linfoma de baixo grau). Diagnóstico: teste respiratório uréia marcada, antígeno fecal, histologia/CLO teste na EDA. Tratamento: terapia tríplice (IBP+amoxicilina+claritromicina 14 dias) ou quádrupla.'
  },
  {
    id: 'est_gastro_003',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A doença de Crohn difere da colite ulcerativa (RCUI) porque:',
    options: ['Crohn: transmural (todas as camadas), segmentar (skip lesions), qualquer segmento GI da boca ao ânus, fístulas/abscessos; RCUI: mucosa/submucosa, contínua do reto, sempre no cólon', 'Crohn: sempre limitado ao cólon; RCUI: pode acometer o intestino delgado', 'Ambas apresentam granulomas à biópsia', 'RCUI tem skip lesions como característica típica'],
    correctIndex: 0,
    explanation: 'Crohn: inflamação transmural (úlceras aftas → granulomas → fistulas/abscessos), distribuição segmentar (skip areas), qualquer parte do TGI (60% ileocólico), aspecto endoscópico em "pedra de calçamento" (mucosa normal com úlceras lineares). RCUI: inflamação limitada à mucosa/submucosa, contínua do reto (proctite) ao cólon total (pancolite), sem acometimento do intestino delgado (exceto backwash ileitis), sem granulomas, pseudopólipos. Complicação grave: megacólon tóxico (RCUI > Crohn).'
  },
  {
    id: 'est_gastro_004',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A hemorragia digestiva alta (HDA) é definida como sangramento proximal ao ângulo de Treitz e manifesta-se com:',
    options: ['Hematêmese (vômito de sangue vivo ou em "borra de café") e/ou melena (fezes negras, pastosas, fétidas — sangue digerido) com instabilidade hemodinâmica proporcional ao volume perdido', 'Hematoquezia (sangue vivo pelo reto) exclusivamente', 'Apenas dor epigástrica sem sangramento vísivel', 'Sangramento oculto nas fezes detectado apenas por guaiaco'],
    correctIndex: 0,
    explanation: 'HDA: causas mais comuns: úlcera péptica (60-70%), varizes esofagogástricas (20%), erosões gastroduodenais, síndrome de Mallory-Weiss. Manifestações: hematêmese + melena (sangue >6h no TGI). Hematoquezia em HDA: sangramento maciço (trânsito muito rápido). Escore de Glasgow-Blatchford (pré-endoscópico) estratifica risco e necessidade de intervenção. Endoscopia em 24h (ou <12h em instáveis). Úlcera sangrante: IBP IV + endoscopia (hemostasia).'
  },
  {
    id: 'est_gastro_005',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A pancreatite aguda grave é definida pelos critérios de Atlanta (revisados 2012) como:',
    options: ['Falência orgânica persistente (>48h) em ≥1 sistema: respiratório (PaO₂/FiO₂ <300), renal (Cr >1,9 mg/dL), cardiovascular (PAS <90 mmHg sem resposta a fluidos)', 'Lipase >3× o limite superior do normal apenas', 'Coleção peripancreática ao USG sem falência orgânica', 'PCR >150 mg/dL no 1° dia como único critério de gravidade'],
    correctIndex: 0,
    explanation: 'Pancreatite aguda (PA) — Atlanta 2012: leve (sem necrose nem falência orgânica), moderadamente grave (necrose ou falência orgânica transitória <48h), grave (falência orgânica persistente >48h: respiratório/renal/cardiovascular). Escore de Ranson (≥3) e APACHE II (≥8) predizem gravidade. PCR >150 mg/dL em 48h, hematócrito >44%, BUN elevado são marcadores de gravidade. Tratamento: hidratação agressiva (Ringer lactato), suporte nutricional precoce (enteral >parenteral), antibióticos SÓ se necrose infectada.'
  },
  {
    id: 'est_gastro_006',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A cirrose hepática desenvolve hipertensão portal quando a pressão da veia porta supera:',
    options: ['10-12 mmHg (gradiente de pressão venosa hepática) — manifestações: varizes esofágicas (risco >12 mmHg), ascite, encefalopatia hepática, esplenomegalia', '5 mmHg (limite superior do normal)', '20 mmHg como limiar para qualquer complicação', '8 mmHg para sangramento varicoso'],
    correctIndex: 0,
    explanation: 'GPVH normal: <5 mmHg. HTP clínica: GPVH ≥10 mmHg (desenvolvimento de varizes). Risco de sangramento varicoso: GPVH ≥12 mmHg. Manifestações de HTP: varizes esofagogástricas, ascite (hipertensão portal + hipoalbuminemia), esplenomegalia com hiperesplenismo, circulação colateral abdominal (cabeça de medusa), síndrome hepatorrenal. Betabloqueadores não seletivos: reduzem GPVH, profilaxia primária de hemorragia varicosa.'
  },
  {
    id: 'est_gastro_007',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A ascite no cirrótico é investigada pela paracentese diagnóstica com cálculo do GASA (gradiente de albumina soro-ascite):',
    options: ['GASA = albumina sérica − albumina do líquido ascítico. GASA ≥1,1 g/dL = hipertensão portal (cirrose, IC). GASA <1,1 = não relacionado a HTP (neoplasia, tuberculose peritoneal)', 'GASA = proteínas totais ascite / proteínas séricas', 'Ascite transudativa: GASA sempre <1,1 g/dL', 'Ascite de cirrose sempre tem GASA <1,0 g/dL'],
    correctIndex: 0,
    explanation: 'GASA (substituiu exsudato/transudato na ascite): ≥1,1 g/dL indica hipertensão portal como causa da ascite (97% de acurácia): cirrose (mais comum), síndrome de Budd-Chiari, IC, hepatite alcoólica aguda, mixedema. GASA <1,1 g/dL: neoplasia peritoneal, tuberculose peritoneal, síndrome nefrótica, pancreatite. PBE (peritonite bacteriana espontânea): neutrófilos >250/mm³ na ascite, tratar com cefotaxima 2g IV 8/8h.'
  },
  {
    id: 'est_gastro_008',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'O câncer colorretal (CCR) tem como principal rastreamento a partir dos 50 anos:',
    options: ['Colonoscopia a cada 10 anos OU pesquisa de sangue oculto nas fezes (PSOF) anual OU FIT (immunoquímica fecal) anual — início aos 45-50 anos segundo INCA/USPSTF', 'Apenas sigmoidoscopia flexível a cada 5 anos sem colonoscopia', 'TC de abdômen anual a partir dos 40 anos', 'Dosagem de CEA (marcador tumoral) anual como rastreamento primário'],
    correctIndex: 0,
    explanation: 'Rastreamento CCR (INCA Brasil): início aos 50 anos em risco médio (45 anos pelo USPSTF 2021). Opções: colonoscopia a cada 10 anos (padrão ouro, detecta e remove pólipos), PSOF anual (colonoscopia se positivo), retossigmoidoscopia flexível a cada 5 anos. Alto risco (PAF, Síndrome de Lynch, cólon do DII, histórico familiar): rastreamento mais precoce e intensivo. CEA: monitoramento pós-cirúrgico, não para rastreamento.'
  },
  {
    id: 'est_gastro_009',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A doença celíaca é causada por:',
    options: ['Resposta imune inadequada ao glúten (gliadina do trigo, secalina do centeio, hordeína da cevada) em indivíduos geneticamente suscetíveis (HLA-DQ2/DQ8) → enteropatia com atrofia de vilosidades', 'Intolerância à lactose (deficiência de lactase)', 'Infecção intestinal crônica por Giardia', 'Alergia à proteína do leite de vaca (caseína)'],
    correctIndex: 0,
    explanation: 'Doença celíaca: autoimune, HLA-DQ2 (90%) ou HLA-DQ8 (5-10%). Gliadina → resposta Th1 no intestino delgado → inflamação → atrofia vilositária → má absorção. Manifestações: diarreia com esteatorreia, perda de peso, déficits nutricionais (ferro, folato, Ca²⁺, vit. B12, K, zinco), distensão abdominal, dermatite herpetiforme. Diagnóstico: anticorpos anti-transglutaminase tecidual IgA (sensib. >95%) + biópsia duodenal (Marsh III). Tratamento: dieta sem glúten para o resto da vida.'
  },
  {
    id: 'est_gastro_010',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A encefalopatia hepática no cirrótico ocorre principalmente devido ao:',
    options: ['Acúmulo de amônia (e outras substâncias neurotóxicas como mercaptanos e ácidos graxos de cadeia curta) que não é detoxificada adequadamente pelo fígado cirrótico + shunts portossistêmicos', 'Hipoglicemia grave exclusivamente', 'Isquemia cerebral por hipotensão portal', 'Acúmulo de bilirrubina no SNC'],
    correctIndex: 0,
    explanation: 'EH: NH₃ (amônia) produzida pelas bactérias intestinais a partir de proteínas → normalmente convertida a ureia pelo ciclo da ureia hepático. Na cirrose: fígado insuficiente + shunts portossistêmicos (NH₃ vai direto para circulação sistêmica) → NH₃ atravessa BHE → disfunção astrocitária (edema). Fatores precipitantes: sangramento GI, constipação, infecção, hipocalemia, diuréticos excessivos, sedativos. Tratamento: lactulose, rifaximina.'
  },
  {
    id: 'est_gastro_011',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A síndrome do intestino irritável (SII) é diagnosticada pelos critérios de Roma IV como:',
    options: ['Dor abdominal recorrente ≥1 dia/semana nos últimos 3 meses, associada a ≥2 dos: relacionada à defecação, mudança na frequência das fezes, mudança na forma/consistência das fezes', 'Diarreia crônica com sangue nas fezes', 'Dor abdominal com leucócitos nas fezes e infecção bacteriana detectável', 'Obstipação com massa abdominal palpável'],
    correctIndex: 0,
    explanation: 'SII (Roma IV): dor abdominal funcional crônica (≥6 meses, ativa há ≥3 meses) associada à defecação ou mudança no hábito intestinal (frequência ou consistência). Subtipos: SII-D (diarreia predominante), SII-C (constipação), SII-M (misto), SII-U (não classificável). Diagnóstico de exclusão (sem achados de alarme: sangue, perda de peso, febre, início >50 anos, histórico familiar de CCR). Tratamento: dieta low-FODMAP, antiespasmódicos, antidepressivos.'
  },
  {
    id: 'est_gastro_012',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A colangite aguda manifesta-se classicamente com a tríade de Charcot:',
    options: ['Febre com calafrios + icterícia + dor em hipocôndrio direito — obstrução do ducto biliar (coledocolitíase) com infecção bacteriana ascendente', 'Dor epigástrica irradiando para o dorso + náusea (pancreatite)', 'Apenas icterícia progressiva sem febre (neoplasia de vias biliares)', 'Diarreia sanguinolenta + febre + dor abdominal (colite isquêmica)'],
    correctIndex: 0,
    explanation: 'Colangite aguda (obstrução biliar + infecção ascendente): tríade de Charcot (febre/calafrios + icterícia + dor HD). Pêntade de Reynolds (colangite grave): + choque (hipotensão) + confusão mental. Agentes: gram-negativos (E. coli, Klebsiella, Enterococcus). Tratamento: antibióticos IV + descompressão biliar urgente (CPRE com esfincterotomia + remoção de cálculos, ou drenagem biliar percutânea).'
  },
  {
    id: 'est_gastro_013',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A obstrução intestinal mecânica manifesta-se clinicamente com:',
    options: ['Dor abdominal em cólica + náuseas e vômitos biliosos (IDB) ou fecaloides (IBX) + parada de eliminação de gases e fezes + distensão abdominal + ruídos hidroaéreos de luta', 'Diarreia volumosa sem distensão abdominal', 'Constipação leve sem vômitos (síndrome do intestino irritável)', 'Dor abdominal com diarreia sanguinolenta e febre (colite infecciosa)'],
    correctIndex: 0,
    explanation: 'Obstrução intestinal: causas em adultos: aderências pós-cirúrgicas (>50%), hérnias encarceradas, neoplasia colônica, vólvulo. Sinais radiológicos: Rx simples (níveis hidroaéreos, alças distendidas); TC de abdômen (diagnóstico e nível de obstrução). Estrangulamento: sinais de isquemia → emergência cirúrgica. Tratamento conservador (sonda nasogástrica, hidratação, analgesia) ou cirurgia conforme gravidade.'
  },
  {
    id: 'est_gastro_014',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'O carcinoma hepatocelular (CHC) desenvolve-se principalmente em:',
    options: ['Fígado cirrótico (80-90% dos casos) — cirrose por HBV, HCV, álcool, NASH. Rastreamento: USG semestral + alfa-fetoproteína (AFP) em cirróticos', 'Fígado normal sem doença hepática subjacente', 'Crianças menores de 5 anos predominantemente (hepatoblastoma é mais comum nessa faixa)', 'Cirrose biliar primária como única causa'],
    correctIndex: 0,
    explanation: 'CHC: causa de morte por câncer #3 no mundo. Fatores de risco: cirrose por qualquer causa (HBV/HCV/álcool/NASH/hemocromatose), HBV mesmo sem cirrose (único hepatocarcinógeno que age na ausência de cirrose). Rastreamento: USG a cada 6 meses + AFP semestral em cirróticos. Diagnóstico: TC trifásica (washout arterial) ou RM (critérios LIRADS). Estadiamento: BCLC. Tratamentos: ablação por RF, TACE, transplante hepático (critérios de Milão), sorafenibe/atezolizumabe+bevacizumabe (sistêmico).'
  },
  {
    id: 'est_gastro_015',
    cycle: 'Ciclo Clínico',
    subject: 'Gastroenterologia',
    text: 'A colecistite aguda ocorre quando:',
    options: ['Um cálculo obstrui o ducto cístico → distensão da vesícula + inflamação da parede (inicialmente química, depois bacteriana) → dor no HD, Murphy positivo, febre', 'Múltiplos cálculos migram pelo ducto colédoco simultaneamente (coledocolitíase)', 'Infecção bacteriana primária da vesícula sem cálculos (acalculosa — em UTI, trauma)', 'Espasmo do esfíncter de Oddi sem cálculos'],
    correctIndex: 0,
    explanation: 'Colecistite aguda litiásica (90-95%): cálculo impactado no infundíbulo/ducto cístico → obstrução → distensão vesicular → inflamação (prostaglandinas, fosfolipase A₂) → infecção secundária por gram-negativos (E. coli, Klebsiella). Clínica: dor HD contínua + Murphy positivo + febre + leucocitose. Diagnóstico: USG (cálculo, espessamento de parede ≥3mm, sinal de Murphy ecográfico). Tratamento: antibióticos + colecistectomia laparoscópica em 24-72h.'
  },
  // ─── PNEUMOLOGIA ───────────────────────────────────────────────────────
  {
    id: 'est_pneumo_001',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: 'O diagnóstico de asma é confirmado pela espirometria quando:',
    options: ['VEF1/CVF <0,70 (padrão obstrutivo) com reversibilidade: aumento de VEF1 ≥12% e ≥200 mL após broncodilatador (BD)', 'CVF reduzida com VEF1/CVF normal (padrão restritivo)', 'CPT reduzida e VR aumentado', 'VEF1 normal com CVF reduzida'],
    correctIndex: 0,
    explanation: 'Asma: obstrução variável e reversível das vias aéreas. Espirometria: VEF1/CVF <0,70 + VEF1 aumenta ≥12% e ≥200 mL após salbutamol 400 mcg inalado (broncodilatador). Se espirometria basal normal: teste de provocação brônquica (metacolina) para demonstrar hiper-reatividade. Peak flow variabilidade >20%: também diagnóstico. Tratamento: ICS como base (glicocorticoide inalatório) + SABA (salbutamol) como resgate.'
  },
  {
    id: 'est_pneumo_002',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: 'O estadiamento GOLD da DPOC baseia-se no:',
    options: ['VEF1 pós-BD (% do previsto): GOLD 1 ≥80%, GOLD 2 50-79%, GOLD 3 30-49%, GOLD 4 <30% — combinado com sintomas (CAT/mMRC) e exacerbações para grupos A-D', 'Número de maços/ano de tabagismo', 'Capacidade pulmonar total ao pletismógrafo', 'PaCO₂ arterial como principal critério'],
    correctIndex: 0,
    explanation: 'DPOC (GOLD 2023): diagnóstico: espirometria pós-BD com VEF1/CVF <0,70. Estadiamento GOLD por VEF1: GOLD 1 (≥80%), 2 (50-79%), 3 (30-49%), 4 (<30%). ABCD assessment: sintomas (CAT≥10 ou mMRC≥2 = C ou D) + exacerbações (≥2/ano moderadas ou ≥1 hospitalização = grupos B ou D). Tratamento: LABD (LAMA, LABA, ICS/LABA) + reabilitação pulmonar + O₂ domiciliar se hipoxemia crônica.'
  },
  {
    id: 'est_pneumo_003',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: 'O pneumotórax espontâneo primário ocorre mais frequentemente em:',
    options: ['Homens jovens, altos, magros (longilíneos), tabagistas, por ruptura de blebs subpleurais apicais', 'Pacientes com DPOC (pneumotórax secundário)', 'Idosos com fibrose pulmonar idiopática', 'Mulheres com endometriose torácica (pneumotórax catamenial)'],
    correctIndex: 0,
    explanation: 'Pneumotórax espontâneo primário (PSP): sem doença pulmonar subjacente. Epidemiologia: homens 20-30 anos, alto/magro (estatura aumenta gradiente de pressão apical), tabagistas (4× mais risco). Blebs apicais se rompem → ar no espaço pleural. Diagnóstico: Rx tórax em expiração. Tratamento: PSP pequeno (<20%, assintomático) → observação/O₂; maior ou sintomático → drenagem torácica. Recidiva em 30% → pleurodese.'
  },
  {
    id: 'est_pneumo_004',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: 'A embolia pulmonar (EP) tem como critério diagnóstico mais eficiente e menos invasivo:',
    options: ['Angiotomografia computadorizada do tórax (angio-TC) com protocolo para EP — sensibilidade >90%, especificidade >95% para EP segmentar e acima', 'Arteriografia pulmonar (padrão-ouro mas invasiva)', 'ECG mostrando padrão S1Q3T3', 'D-dímero elevado isoladamente como diagnóstico definitivo'],
    correctIndex: 0,
    explanation: 'EP: diagnóstico = probabilidade pré-teste (Wells/Geneva) + D-dímero (se baixa probabilidade + D-dímero negativo → exclui EP) + Angio-TC (padrão ouro atual para EP proximal). Ecocardiograma: avalia repercussão hemodinâmica (VD dilatado, McConnell). Tratamento: anticoagulação (heparina → warfarina ou NOACs). EP maciça (choque/hipotensão) → trombólise ou embolectomia cirúrgica. Profilaxia: heparina profilática + compressão mecânica pós-cirúrgico.'
  },
  {
    id: 'est_pneumo_005',
    cycle: 'Ciclo Clínico',
    subject: 'Pneumologia',
    text: 'O derrame pleural é classificado como exsudato pelos critérios de Light quando:',
    options: ['Proteínas líquido/soro >0,5 OU DHL líquido/soro >0,6 OU DHL líquido >2/3 do limite superior normal do soro — presença de qualquer critério = exsudato', 'Apenas pela cor turva do líquido', 'Proteínas >4 g/dL no líquido isoladamente', 'pH do líquido pleural <7,20 exclusivamente'],
    correctIndex: 0,
    explanation: 'Critérios de Light (sens. 99%, espec. 65%): exsudato se ≥1 critério: (1) proteína líquido/proteína sérica >0,5; (2) DHL líquido/DHL sérico >0,6; (3) DHL líquido >2/3 do limite superior da DHL sérica. Exsudato: infecção (pneumonia paraneumônico, empiema), neoplasia, EP, tuberculose, AR, lúpus. Transudato: ICC (mais comum), síndrome nefrótica, cirrose, hipoalbuminemia. Borda: GASA≥1,1 g/dL → hipertensão portal (exsudato pelos critérios de Light pode ser transudato verdadeiro em uso de diuréticos).'
  },
];
