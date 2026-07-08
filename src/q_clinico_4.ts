export const Q_CLINICO_4: any[] = [
  // ─── CLÍNICA MÉDICA ────────────────────────────────────────────────────
  {
    id: 'est_cm_001',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'A síndrome metabólica é definida pela presença de pelo menos 3 dos seguintes critérios (IDF/NCEP-ATP III revisado):',
    options: ['Circunferência abdominal aumentada (>102 cm homem / >88 cm mulher), triglicerídeos ≥150 mg/dL, HDL baixo (<40H/<50M), PA ≥130/85 mmHg, glicemia jejum ≥100 mg/dL', 'Apenas obesidade (IMC >30) + hipertrigliceridemia', 'Diabetes tipo 2 + hipertensão como critérios obrigatórios', 'Proteína C-reativa elevada + obesidade + dislipidemia'],
    correctIndex: 0,
    explanation: 'Síndrome metabólica (SM): 3 de 5 critérios NCEP-ATP III / IDF: (1) cintura abdominal ↑; (2) TG ≥150 mg/dL (ou em tratamento); (3) HDL baixo (<40 H, <50 M) ou tratamento; (4) PA ≥130/85 ou tratamento; (5) glicemia jejum ≥100 ou DM tipo 2. Resistência insulínica é o eixo fisiopatológico. Risco cardiovascular aumentado, DM tipo 2, NASH. Tratamento: mudança de estilo de vida (dieta, atividade física, cessação tabágica) + controle individual de cada componente.'
  },
  {
    id: 'est_cm_002',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'O infarto agudo do miocárdio com supra de ST (IAMCSST) é tratado primariamente com:',
    options: ['ICP primária (angioplastia percutânea com stent) dentro de 90 min do primeiro contato médico — superior à trombólise; se ICP não disponível em 120 min: trombólise (estreptoquinase ou tenecteplase) até 12h do início', 'Apenas betabloqueador IV e morfina em todos os casos', 'Cirurgia de revascularização miocárdica de urgência em todos os IAMs', 'Trombolítico IV independente de onde o paciente está'],
    correctIndex: 0,
    explanation: 'IAMCSST: oclusão coronária total → necrose transmural. Reperfusão é a prioridade. ICP primária: stent na artéria culpada em <90 min (primeiro contato médico → balão). Se hospital sem hemodinâmica ou tempo estimado >120 min: trombólise (estreptoquinase, tenecteplase, alteplase) + transferência para ICP de resgate se não reperfusão (dor persistente, sem resolução do supra em 50-90 min, choque). Adjuvantes: AAS 200-300 mg + P2Y12 (ticagrelor 180 mg ou clopidogrel 600 mg) + heparina (HNF ou enoxaparina) + betabloqueador (exceto contraindicações) + IECA/BRA.'
  },
  {
    id: 'est_cm_003',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'O diagnóstico de insuficiência cardíaca com fração de ejeção reduzida (ICFEr) é estabelecido por:',
    options: ['Sinais e sintomas de IC (dispneia, edema, cansaço, ortopneia) + FE ≤40% ao ecocardiograma + peptídeos natriuréticos elevados (BNP >35 pg/mL ou NT-proBNP >125 pg/mL)', 'Apenas sintomas de dispneia e edema, sem necessidade de ecocardiograma', 'FE normal (>50%) com sintomas de IC (ICFEp)', 'Troponina elevada + dor torácica + ECG normal'],
    correctIndex: 0,
    explanation: 'IC: síndrome clínica com dispneia + edema + congestão + redução de tolerância ao esforço. Critérios de Framingham: 2 maiores ou 1 maior + 2 menores. ICFEr (FE ≤40%): tratamento reduz mortalidade: IECA/BRA/ARNi (sacubitril-valsartan) + BB (carvedilol, bisoprolol, metoprolol succinato) + MRA (espironolactona) + iSGLT2 (dapagliflozina, empagliflozina). ICFEp (FE ≥50%): diuréticos para sintomas, controle de FA, PA, DM. ICFEm (FE 41-49%): evidências emergentes.'
  },
  {
    id: 'est_cm_004',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'A doença pulmonar obstrutiva crônica (DPOC) é diagnosticada pela:',
    options: ['Espirometria pós-broncodilatador: VEF1/CVF <0,70 (obstrução não completamente reversível) — estadiamento GOLD pelo VEF1: I≥80%, II 50-79%, III 30-49%, IV<30%', 'Radiografia de tórax com hiperinsuflação sem necessidade de espirometria', 'Apenas clínica (tosse, expectoração crônica) sem espirometria', 'Gasometria com PaCO₂ >50 mmHg como único critério diagnóstico'],
    correctIndex: 0,
    explanation: 'DPOC: obstrução progressiva e irreversível (principal causa: tabagismo > poluição). Espirometria após broncodilatador: VEF1/CVF <0,70. GOLD por VEF1: A-B (leve-moderado) e E (exacerbações frequentes). Tratamento: LAMA (tiotrópio) ou LABA ou LAMA+LABA como base; inalatório combinado + ICS se eosinófilos >300/μL ou exacerbações frequentes. Exacerbação: broncodilatadores + corticoide sistêmico (prednisolona 40 mg/5 dias) + antibiótico (amoxicilina-clavulanato, azitromicina) se escarro purulento/pneumonia. O₂ domiciliar: PaO₂ <55 mmHg ou <60 com poliglobulia/ICC.'
  },
  {
    id: 'est_cm_005',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'A hipotireoidismo primário tem como achado laboratorial característico:',
    options: ['TSH elevado + T4 livre reduzido; causa mais comum no Brasil: tireoidite de Hashimoto (ATPO+); tratamento: levotiroxina oral em jejum, alvo TSH 0,5-4,5 mUI/L', 'TSH baixo + T4 livre elevado (hipertireoidismo)', 'T3 livre normal com TSH normal mas T4 livre baixo', 'TSH normal + sintomas de hipotireoidismo (hipotireoidismo subclínico)'],
    correctIndex: 0,
    explanation: 'Hipotireoidismo: ↑TSH (mais sensível); T4 livre ↓. Subclínico: TSH ↑ + T4 normal. Causa principal mundo: carência de iodo; Brasil: tireoidite de Hashimoto (autoimune, ATPO+). Sintomas: fadiga, ganho peso, intolerância ao frio, constipação, bradicardia, mixedema. Levotiroxina (LT4): dose inicial 1,6 μg/kg/dia (idosos/cardíacos: dose menor); em jejum + esperar 30-60 min para alimentação; controle TSH em 4-6 semanas. Hipotireoidismo congênito: triagem neonatal (teste do pezinho), tratar precocemente para prevenir retardo mental.'
  },
  {
    id: 'est_cm_006',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'A doença inflamatória intestinal (DII) diferencia Doença de Crohn (DC) da Retocolite Ulcerativa (RCUI) porque:',
    options: ['DC: transmural, pode acometer todo o tubo digestivo (boca ao ânus), lesões salteadas, fístulas, estenoses, granulomas não caseosos; RCUI: superficial (mucosa/submucosa), contínua (cólon → reto), sem fístulas, risco maior de CA de cólon', 'DC afeta apenas o reto; RCUI afeta apenas o intestino delgado', 'Ambas têm granulomas caseosos e são tratadas igualmente', 'Apenas a RCUI causa sangramento retal'],
    correctIndex: 0,
    explanation: 'DC x RCUI: DC: qualquer trecho do TGI (íleo terminal mais comum — "ileíte terminal"), transmural (todas camadas), "skip lesions" (salteadas), fístulas (entre alças, pele, bexiga), estenoses, granulomas não-caseificantes na colonoscopia/histologia, ASCA+ (anticorpo anti-Saccharomyces). RCUI: mucosa/submucosa, contígua do reto para proximal, sangramento retal é clássico, p-ANCA+. Tratamentos comuns: mesalazina (RCUI), corticoide, imunossupressores (azatioprina), biológicos (anti-TNF: infliximabe, adalimumabe; vedolizumabe, ustekinumabe).'
  },
  {
    id: 'est_cm_007',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'O coma hiperosmolar hiperglicêmico (CHH) difere da cetoacidose diabética (CAD) porque:',
    options: ['CHH: glicemia muito elevada (>600 mg/dL), osmolaridade sérica >320 mOsm/L, AUSÊNCIA de cetonemia/acidose significativa (pH >7,3), mais comum em DM tipo 2; CAD: glicemia >250, pH<7,3, cetonas, DM tipo 1', 'CHH: ocorre apenas em DM tipo 1 com cetose', 'CAD: não tem tratamento com insulina; CHH: tratado apenas com antibiótico', 'CHH: caracteriza-se por hiposmolaridade e edema cerebral'],
    correctIndex: 0,
    explanation: 'CHH: déficit de insulina relativo (suficiente para inibir lipólise) → hiperglicemia extrema → diurese osmótica → desidratação profunda → ↑osmolaridade → letargia e coma. Ausência de cetose. Tratamento: (1) hidratação vigorosa (SF0,9% 1L/h, depois SF0,45%) — PRIORIDADE; (2) insulina: após hidratação inicial (não iniciar sem repor volume); (3) reposição de K⁺; (4) tratar fator precipitante (infecção, AVC, IAM). Mortalidade: 10-20% (maior que CAD). Prognóstico piora com atraso no tratamento.'
  },
  {
    id: 'est_cm_008',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'A insuficiência adrenal primária (Doença de Addison) apresenta:',
    options: ['Hipocortisolismo: fadiga, hipotensão, hiponatremia, hipercalemia, hipoglicemia + HIPERPIGMENTAÇÃO (↑ACTH) + pele bronzeada em áreas não expostas, cicatrizes — tratamento: hidrocortisona + fludrocortisona', 'Hipercortisolismo com fácies de lua, hipertensão, hiperglicemia (Síndrome de Cushing)', 'Hiperpigmentação sem alterações eletrolíticas em insuficiência secundária (central)', 'Hipernatremia e hipocalemia como padrão da doença'],
    correctIndex: 0,
    explanation: 'Addison: destruição do córtex adrenal (autoimune >80% países desenvolvidos; TB em países endêmicos). Perde: cortisol + aldosterona + androgênios adrenais. Clínica: fraqueza, fadiga, ↓PA (ortostatismo), náusea, vômito, dor abdominal, hiperpigmentação (↑MSH/ACTH — áreas de pressão, mucosa oral, cicatrizes, genitais). Labs: Na⁺↓ (↓aldosterona), K⁺↑, glicemia↓, ACTH↑, cortisol↓. Crise adrenal (Waterhouse-Friderichsen): hidrocortisona 100 mg IV + SF 1-2L. Manutenção: hidrocortisona 15-25 mg/dia + fludrocortisona 0,05-0,1 mg/dia.'
  },
  {
    id: 'est_cm_009',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'As complicações crônicas do diabetes mellitus tipo 2 são classificadas como:',
    options: ['Microvasculares (retinopatia, nefropatia, neuropatia) — relacionadas ao controle glicêmico; macrovasculares (DAC, AVC, DAP) — relacionadas à dislipidemia, HAS, tabagismo, e glicemia', 'Apenas complicações macrovasculares em DM tipo 2', 'Retinopatia é exclusiva do DM tipo 1', 'Neuropatia diabética ocorre apenas na forma autonômica'],
    correctIndex: 0,
    explanation: 'Microvasculares: (1) Retinopatia: mais comum — rastreio anual com fundoscopia; laser fotocoagulação para proliferativa; (2) Nefropatia: rastreio com microalbuminúria (30-300 mg/24h) → nefropatia clínica (>300 mg/24h) → IRC; IECA/BRA retardam progressão; (3) Neuropatia: periférica simétrica distal (dor, parestesia MMII) + autonômica (impotência, gastroparesia, hipotensão ortostática). Macrovasculares: DAC (principal causa de morte), AVC, DAP (pé diabético). Controle glicêmico rigoroso previne principalmente microvasculares; estatina + anti-hipertensivo + AAS previnem macro.'
  },
  {
    id: 'est_cm_010',
    cycle: 'Ciclo Clínico',
    subject: 'Clínica Médica',
    text: 'O hipercortisolismo (Síndrome de Cushing) tem como causa mais comum:',
    options: ['Uso de glicocorticóides exógenos (iatrogênica) — causa mais frequente; seguido de Doença de Cushing (adenoma hipofisário secrecionando ACTH); depois tumor adrenal (adenoma ou carcinoma); raramente ACTH ectópico (carcinoma broncogênico)', 'Adenoma adrenal como causa mais comum na população geral', 'ACTH ectópico como etiologia mais frequente', 'Carcinoma de adrenal como causa predominante'],
    correctIndex: 0,
    explanation: 'Hipercortisolismo exógeno: prednisona, dexametasona, etc. — suprime ACTH e córtex adrenal. Endógeno: ACTH-dependente (Doença de Cushing: adenoma hipofisário ≈70%; ACTH ectópico: carcinoma de pulmão pequenas células ≈10%) ou ACTH-independente (adenoma adrenal 15%, carcinoma adrenal 5%). Clínica: obesidade central, fácies de lua, corcova de búfalo, estrias violáceas, fraqueza muscular proximal, hipertensão, hiperglicemia, osteoporose, infecções, amenorreia. Diagnóstico: cortisol livre urinário 24h ou cortisol salivar noturno ou dexametasona 1 mg (supressão).'
  },
  // ─── MEDICINA DE FAMÍLIA E SUS ─────────────────────────────────────────
  {
    id: 'est_mf_001',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família e Comunidade',
    text: 'O modelo de Dahlgren e Whitehead de determinantes sociais da saúde organiza os fatores em:',
    options: ['Camadas concêntricas: características individuais (centro) → estilos de vida → redes sociais e comunitárias → condições de vida e trabalho → macrodeterminantes (economia, ambiente, cultura)', 'Apenas fatores biológicos e genéticos como determinantes da saúde', 'Dois grupos: fatores proximais (apenas biológicos) e distais (apenas sociais)', 'Fatores de risco isolados sem hierarquia ou inter-relação'],
    correctIndex: 0,
    explanation: 'Modelo de Dahlgren e Whitehead (1991): determinantes sociais da saúde em camadas (rainbow model). Da camada mais interna para a mais externa: (1) fatores biológicos imutáveis (idade, sexo, constituição genética); (2) comportamentos e estilos de vida individuais; (3) influências sociais e comunitárias; (4) condições de vida e trabalho (habitação, educação, alimentos, trabalho, saneamento); (5) macrodeterminantes (econômicos, culturais, ambientais). Comissão Nacional de DSS (CNDSS) adotou o modelo de Dahlgren e Whitehead no Brasil.'
  },
  {
    id: 'est_mf_002',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família e Comunidade',
    text: 'O método clínico centrado na pessoa (MCCP) difere do modelo biomédico tradicional porque:',
    options: ['Integra doença (disease) e experiência da doença (illness) do paciente — explora sentimentos, idéias, efeitos na função e expectativas — além do contexto (familiar, profissional) e promoção da saúde', 'Foca exclusivamente no diagnóstico nosológico e tratamento farmacológico', 'É utilizado apenas em psiquiatria', 'Exclui o componente biológico da consulta médica'],
    correctIndex: 0,
    explanation: 'MCCP (Stewart et al.): 4 componentes interativos. (1) Explorando saúde, doença e experiência do paciente (disease + illness + health): queixa, perspectiva do paciente, sentimentos, medos, expectativas, impacto na função. (2) Entendendo a pessoa como um todo: contexto de vida, desenvolvimento pessoal, família, sociedade. (3) Elaborando plano conjunto de problema e objetivos de tratamento. (4) Fortalecendo a relação médico-paciente. Especialmente importante na APS para longitudinalidade, integralidade e vínculo.'
  },
  {
    id: 'est_mf_003',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família e Comunidade',
    text: 'Os atributos essenciais da Atenção Primária à Saúde (APS) segundo Starfield são:',
    options: ['Acesso de primeiro contato, longitudinalidade (vínculo ao longo do tempo), integralidade (cuidado completo) e coordenação do cuidado (articulação com outros níveis)', 'Apenas acesso universal e gratuidade', 'Especialização em uma única doença por equipe de saúde', 'Realização de procedimentos cirúrgicos de alta complexidade'],
    correctIndex: 0,
    explanation: 'Starfield (2002): 4 atributos essenciais da APS: (1) Acesso de 1° contato (a APS é a porta de entrada preferencial); (2) Longitudinalidade (acompanhamento da pessoa ao longo do tempo — vínculo); (3) Integralidade (atenção completa: promoção, prevenção, tratamento, reabilitação; não apenas queixa principal); (4) Coordenação do cuidado (articular e integrar todos os níveis de atenção). Atributos derivados: orientação familiar, orientação comunitária, competência cultural. ESF (Estratégia Saúde da Família): modelo brasileiro que incorpora esses atributos.'
  },
  {
    id: 'est_mf_004',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família e Comunidade',
    text: 'As metas do Programa Nacional de Imunizações (PNI) para sarampo exigem cobertura vacinal acima de:',
    options: ['95% da população alvo com duas doses da vacina tríplice viral (SCR) para atingir imunidade coletiva e interromper a transmissão — limiar de imunidade de rebanho do sarampo', '50% como cobertura mínima suficiente', '70% para qualquer vacina do calendário nacional', '80% apenas para influenza e covid-19'],
    correctIndex: 0,
    explanation: 'Sarampo: índice básico de reprodução R₀=12-18 (muito contagioso). Imunidade de rebanho: ≥95% vacinados com 2 doses. PNI: 1ª dose SCR (12 meses) + 2ª dose SCR ou tetraviral (15 meses). Brasil reverteu eliminação em 2019 por queda de cobertura. Vigilância epidemiológica: notificação compulsória imediata; investigação em 24h; isolamento de confirmados; vacinação de bloqueio nos contatos. PNAB prevê cobertura vacinal como indicador de desempenho das equipes de APS (meta ≥95%).'
  },
  {
    id: 'est_mf_005',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família e Comunidade',
    text: 'A Lei Orgânica da Saúde (Lei 8.080/1990) define saúde como:',
    options: ['Resultante de condicionantes e determinantes (alimentação, moradia, saneamento, trabalho, renda, educação, meio ambiente, lazer, acesso a bens e serviços essenciais) — determinismo social da saúde', 'Apenas ausência de doença física', 'Bem-estar completo físico, mental e social (conceito da OMS)', 'Responsabilidade exclusiva do indivíduo, sem determinantes sociais'],
    correctIndex: 0,
    explanation: 'Art. 3° da Lei 8.080/90: "A saúde tem como fatores determinantes e condicionantes, entre outros, a alimentação, a moradia, o saneamento básico, o meio ambiente, o trabalho, a renda, a educação, a atividade física, o transporte, o lazer e o acesso aos bens e serviços essenciais; os níveis de saúde da população expressam a organização social e econômica do País." Amplia a definição para além da biologia. Art. 196 CF/88: saúde como direito de todos e dever do Estado — universalidade, equidade, integralidade (SUS).'
  },
  {
    id: 'est_mf_006',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família e Comunidade',
    text: 'O rastreamento de câncer de colo uterino pelo Ministério da Saúde do Brasil preconiza:',
    options: ['Papanicolau a partir dos 25 anos em mulheres que já tiveram relação sexual; anualmente por 2 anos consecutivos negativos; depois a cada 3 anos — mantendo até os 64 anos', 'HPV-DNA como único método de rastreamento', 'Colposcopia de rotina em todas as mulheres a partir dos 18 anos', 'Mamografia para rastreamento de câncer de colo'],
    correctIndex: 0,
    explanation: 'MS (Protocolo 2016): início 25 anos (início vida sexual); 2 exames anuais (intervalo de 1 ano); se negativos: a cada 3 anos; manter até 64 anos. Mulheres HIV+: 2 exames semestrais no 1° ano → anuais se negativos. Alta cobertura: 85% reduz mortalidade. Achados do preventivo e conduta: NIC I: repetir em 6 meses; NIC II: colposcopia + biopsia; NIC III: exérese; câncer invasor: oncologia. HPV DNA: ainda não incorporado no SUS para rastreamento primário. Vacina HPV: 9-14 anos (calendário PNI).'
  },
  {
    id: 'est_mf_007',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família e Comunidade',
    text: 'A rede de atenção à saúde (RAS) no SUS é organizada em:',
    options: ['Atenção Primária (APS/ESF — coordenadora e porta de entrada preferencial), Atenção Especializada (ambulatórios, policlínicas), Alta Complexidade (hospitais terciários, UTI, oncologia) — hierarquizada com referência e contrarreferência', 'Apenas dois níveis: hospitalar e extra-hospitalar', 'APS e hospitais sem integração ou comunicação (silos)', 'Atenção terciária como porta de entrada principal para otimizar recursos'],
    correctIndex: 0,
    explanation: 'RAS: integração de serviços de saúde de diferentes densidades tecnológicas. APS: 1° nível (ESF — 1 médico+1 enfermeiro+técnico+ACS/1000-4000 pessoas); resolução de 85-90% dos problemas de saúde. Atenção especializada: 2° nível — CAPS, CER, CEREST, CEO (odonto), serviços de diagnóstico. Alta complexidade: 3° nível — hospitais de referência, SADT complexos, transplantes. Regulação (SISREG): acesso organizado, fila de espera, referência/contrarreferência. NOAS (2001/2002): organização regional da assistência.'
  },
  {
    id: 'est_mf_008',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família e Comunidade',
    text: 'O diagnóstico situacional de saúde da família inclui:',
    options: ['Mapeamento territorial, identificação de famílias e grupos de risco (ICSAP, mortalidade prematura, gestantes, hipertensos, diabéticos), condições de vida (saneamento, moradia), e recursos da comunidade', 'Apenas triagem de doenças infecciosas na comunidade', 'Exclusivamente análise de prontuários médicos individuais', 'Apenas verificação de coberturas vacinais da área adscrita'],
    correctIndex: 0,
    explanation: 'Diagnóstico de saúde da comunidade (APS): processo sistemático para conhecer a situação de saúde do território. Etapas: (1) Território e população: cadastro das famílias, mapeamento; (2) Perfil epidemiológico: doenças prevalentes, mortalidade, ICSAP; (3) Determinantes sociais: saneamento, moradia, educação, renda; (4) Recursos comunitários: associações, igrejas, escolas, farmácias; (5) Identificação de grupos vulneráveis: gestantes, crianças <5 anos, idosos, portadores de DNC. Informa o planejamento da ESF e as ações prioritárias.'
  },
  {
    id: 'est_mf_009',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família e Comunidade',
    text: 'O teste rápido de HIV na APS deve ser oferecido para:',
    options: ['Gestantes (1°, 2° e 3° trimestre + no parto se sem testagem), parceiros sexuais de HIV+, HSH, usuários de drogas, profissionais do sexo, pessoas com IST, detentos — rastreamento universal 15-64 anos pelo MS', 'Apenas para pessoas com sintomas de AIDS (imunodepressão avançada)', 'Exclusivamente em serviços especializados (SAE) de DST/AIDS', 'Apenas em pacientes que solicitam explicitamente o teste'],
    correctIndex: 0,
    explanation: 'MS/PCDT HIV (2018): rastreamento universal 15-64 anos como oferta ao usuário do SUS (ao menos 1 teste por vida). Populações-chave: GSH (gays, HSH), trans, PS (profissionais do sexo), PPL (presos), PUD (pessoas que usam drogas). Gestantes: oferta em toda consulta de pré-natal (1°, 2° trimestre; 3° trimestre e parto se sem resultado). Teste rápido na APS: resultado em 30 min, aconselhamento pré e pós-teste. Reactive: confirmar com segundo teste. Se HIV+: encaminhar para SAE, iniciar TARV.'
  },
  {
    id: 'est_mf_010',
    cycle: 'Ciclo Clínico',
    subject: 'Medicina de Família e Comunidade',
    text: 'A avaliação multidimensional do idoso na APS inclui obrigatoriamente:',
    options: ['Funcionalidade (AVD básicas e instrumentais), cognição (MEEM, teste do relógio), humor (GDS), mobilidade (Timed Up and Go), polifarmácia, risco nutricional, suporte social e condições crônicas', 'Apenas aferição de PA e glicemia de jejum', 'Apenas avaliação cardiológica com ECG', 'Rastreamento de câncer de próstata com PSA em todos os idosos'],
    correctIndex: 0,
    explanation: 'Avaliação Geriátrica Ampla (AGA): ferramenta multidimensional. (1) Cognição: MEEM (30 pontos, escolaridade-dependente), Teste do Relógio; (2) Humor: GDS-15; (3) Funcionalidade: Katz (AVD básicas: banho, vestir, continência, transferência, alimentação) + Lawton (AVDI: telefone, transporte, finanças, medicação, compras, tarefas domésticas); (4) Mobilidade: TUG >12 seg = risco de queda; (5) Polifarmácia: ≥5 medicamentos; (6) Nutrição: IMC, MAN; (7) Social: suporte familiar. Vulnerabilidade: VES-13, IVCF-20.'
  },
  // ─── NEFROLOGIA ────────────────────────────────────────────────────────
  {
    id: 'est_nefro_001',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: 'A lesão renal aguda (LRA) é definida pelos critérios KDIGO como:',
    options: ['Aumento de creatinina ≥0,3 mg/dL em 48h OU aumento ≥1,5× o basal em 7 dias OU diurese <0,5 mL/kg/h por ≥6h — estadiada em 3 graus', 'Apenas creatinina >10 mg/dL como critério isolado', 'Proteinúria maciça (síndrome nefrótica) sem alteração de creatinina', 'Diurese normal com creatinina levemente elevada (DRC)'],
    correctIndex: 0,
    explanation: 'KDIGO 2012 (LRA): critérios e estadiamento. Estágio 1: creatinina 1,5-1,9× basal OU ↑≥0,3 mg/dL OU oligúria <0,5 mL/kg/h por 6-12h. Estágio 2: creatinina 2-2,9× basal OU oligúria ≥12h. Estágio 3: creatinina ≥3× basal OU ≥4 mg/dL com ↑ agudo ≥0,5 OU anúria ≥12h OU diálise. Causas: pré-renal (desidratação, baixo DC — 60%), renal intrínseca (NTA isquêmica/nefrotóxica — 30%), pós-renal (obstrução — 10%). NGAL e cistatina C: biomarcadores precoces. Tratamento: tratar causa + suporte (volume, diálise).'
  },
  {
    id: 'est_nefro_002',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: 'A doença renal crônica (DRC) é estadiada pela TFG e albuminúria porque:',
    options: ['TFG (mL/min/1,73m²) define os estágios G1-G5 (G1:≥90, G2:60-89, G3a:45-59, G3b:30-44, G4:15-29, G5:<15) e albuminúria A1-A3 estratifica o risco de progressão e eventos cardiovasculares', 'Apenas creatinina sérica define o estadiamento sem TFG', 'Biópsia renal é necessária para estadiar a DRC', 'TFG define apenas o momento de início da diálise, sem importância clínica nos estágios iniciais'],
    correctIndex: 0,
    explanation: 'DRC: TFG <60 mL/min por ≥3 meses OU marcadores de dano renal (albuminúria ≥30 mg/g). Fórmula CKD-EPI (creatinina ± cistatina C): mais precisa que MDRD. Albuminúria: A1 (<30 normal), A2 (30-300 microalbuminúria), A3 (>300 macroalbuminúria). A combinação TFG + albuminúria define o prognóstico. Causas principais no Brasil: HAS (35%) + DM (25%). Complicações: anemia (↓eritropoetina → EPO), osteodistrofia (↓calcitriol → PTH elevado), acidose metabólica, hipercalemia. IECA/BRA: retardam progressão (reduzem proteinúria e TFG).'
  },
  {
    id: 'est_nefro_003',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: 'A síndrome nefrótica é definida por:',
    options: ['Proteinúria >3,5 g/24h (ou >3 g/g de creatinúria) + hipoalbuminemia (<3 g/dL) + edema + hiperlipidemia/lipidúria — síndrome completa; causa mais comum adulto: glomeruloesclerose focal e segmentar', 'Proteinúria <1 g/24h + hematúria + hipertensão (síndrome nefrítica)', 'Hematúria macroscópica + cilindros hemáticos + hipertensão (nefrítica)', 'Apenas edema e hipoalbuminemia sem proteinúria'],
    correctIndex: 0,
    explanation: 'Síndrome nefrótica: proteinúria massiva (>3,5 g/24h) → ↓albumina → ↓pressão oncótica → edema gravitacional (pernas) e periorbital (manhã). Hiperlipidemia: ↑síntese hepática de lipoproteínas + ↓catabolismo. Lipidúria: corpos ovais graxos. Complicações: trombose (perda de anticoagulantes urinários: ATIII, proteínas C e S), infecções, hipercoagulabilidade. Adultos: GESF (primária — esteroides), nefropatia membranosa (AgHBsAg, tumores), DM, amiloidose. Crianças: doença de lesões mínimas (sensível a esteroides — boa resposta ao prednisol).'
  },
  {
    id: 'est_nefro_004',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: 'O manejo da hipercalemia leve a moderada (K⁺ 5,5-6,5 mEq/L) sem ECG alterado inclui:',
    options: ['Restrição dietética de potássio + suspender/reduzir medicamentos que elevam K⁺ (IECA, BRA, heparina, AINEs, TMP-SMX) + diurético tiazídico ou de alça (em não dialisados) + quelantes intestinais (patirômero, ciclossilicato de sódio-zircônio)', 'Gluconato de cálcio IV imediato (indicado para ECG alterado)', 'Apenas hidratação oral sem outras medidas', 'Diálise imediata para qualquer grau de hipercalemia'],
    correctIndex: 0,
    explanation: 'Hipercalemia: causas principais: DRC (excreção renal ↓), IECA/BRA/antagonistas de aldosterona, betabloqueadores, heparina, destruição tecidual. Leve (5,0-5,5): dieta ↓K⁺ + suspender fármacos causadores. Moderada (5,5-6,5 sem ECG alterado): + diurético de alça (furosemida) se diurese preservada; quelantes: resina de troca (poliestireno sulfonato) ou novos (patirômero, ciclossilicato — agem em horas); kayexalate: lento, não ideal agudo. Grave/ECG alterado: gluconato cálcio IV + insulina/glicose + bicarbonato + salbutamol + diálise.'
  },
  {
    id: 'est_nefro_005',
    cycle: 'Ciclo Clínico',
    subject: 'Nefrologia',
    text: 'As indicações de biópsia renal incluem:',
    options: ['Síndrome nefrótica em adulto (identificar a causa glomerular específica), hematúria/proteinúria significativa sem diagnóstico, LRA de causa renal intrínseca sem diagnóstico, DRC de progressão rápida, vasculites renais, glomerulopatias lúpicas', 'Qualquer proteinúria independente da magnitude', 'DRC em estágio 5 com rins pequenos (cicatriz — biópsia de pouco rendimento)', 'Paciente com 1 rim funcionante (contraindicação relativa)'],
    correctIndex: 0,
    explanation: 'Biópsia renal percutânea: guiada por ultrassom, agulha Tru-cut, obtém pelo menos 10 glomérulos. Indicações: (1) síndrome nefrótica no adulto (exceto DM + retinopatia diabética = diagnose clínica); (2) síndrome nefrótica pediátrica resistente a esteroides; (3) hematúria + proteinúria + ↓TFG; (4) LRA sem causa evidente; (5) DRC progressão rápida; (6) suspeita de nefrite lúpica; (7) rejeição de transplante. Contraindicações: coagulopatia não corrigida, rim único, hidronefrose grave, IU ativa, cisto/tumor (risco de ruptura).'
  },
  // ─── REUMATOLOGIA ─────────────────────────────────────────────────────
  {
    id: 'est_reuma_001',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: 'O lúpus eritematoso sistêmico (LES) é diagnosticado pelos critérios SLICC (2012) quando:',
    options: ['≥4 de 11 critérios clínicos + imunológicos OU nefrite lúpica na biópsia + ANA ou anti-DNA positivos — clínicos: rash malar, lúpus cutâneo subagudo, úlceras orais, alopecia não-cicatricial, artrite, serosite, renal, neurológico, anemia hemolítica, leucopenia/linfopenia, trombocitopenia; imunológicos: ANA, anti-DNA, anti-Sm, antifosfol., complemento baixo, Coombs direto', 'Apenas ANA positivo como critério diagnóstico isolado', 'Febre + artralgia + rash em qualquer padrão (não específico)', 'Anti-CCP positivo como marcador exclusivo de LES'],
    correctIndex: 0,
    explanation: 'LES: doença autoimune sistêmica. Fisiopatologia: autoanticorpos (ANA, anti-dsDNA, anti-Sm) + depósito de imunocomplexos → inflamação multiorgânica. ANA: presente em 95-99% (sensível mas não específico — também + em SS, AR, esclerodermia, fármacos). Anti-dsDNA: específico de LES, correlaciona com atividade e nefrite. Anti-Sm: específico de LES. Complemento (C3, C4, CH50): ↓na atividade da doença. Tratamento: hidroxicloroquina (todos os pacientes), AINEs (leve), corticoide (moderado-grave), azatioprina/metotrexato (poupadores de corticoide), belimumab, rituximab.'
  },
  {
    id: 'est_reuma_002',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: 'A artrite reumatoide (AR) diferencia-se da osteoartrite (OA) porque:',
    options: ['AR: sinovite inflamatória (rigidez matinal >1h, calor, edema articular, MCF e IFP — poupa IFD), simétrica, FR e anti-CCP+, erosões/deformidades; OA: degenerativa (rigidez <30 min, IFD — nódulos de Heberden, peso-corporal articulações, sem inflamação sistêmica)', 'OA: sinovite inflamatória intensa e simétrica', 'AR: afeta principalmente IFD (nódulos de Heberden)', 'Ambas têm FR positivo em >80% dos casos'],
    correctIndex: 0,
    explanation: 'AR: autoimune, sinovite crônica erosiva. Anti-CCP: mais específico que FR (positivo em 70-80%, especificidade >95%). FR (IgM anti-IgG): sensível (70-80%) mas não específico (SS, LES, infecções). Critérios ACR/EULAR 2010: articulações acometidas + sorologia + reagentes de fase aguda + duração. Tratamento: DMARD sintéticos (metotrexato 1ª linha ± hidroxicloroquina/sulfassalazina/leflunomida) + biológicos (anti-TNF, abatacepte, rituximabe, tocilizumabe) se falha ao MTX. Meta terapêutica: remissão ou baixa atividade (T2T).'
  },
  {
    id: 'est_reuma_003',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: 'A crise gotosa aguda é causada por:',
    options: ['Depósito de cristais de monourato de sódio (MUS) em articulações e tecidos moles → inflamação aguda intensa. Diagnóstico: artrocentese com cristais em forma de agulha birrefringentes negativos. Tratamento: colchicina, AINEs ou corticoide', 'Depósito de cristais de pirofosfato de cálcio (pseudogota — joelho/pulso)', 'Infecção bacteriana articular (artrite séptica)', 'Desmineralização óssea (osteoporose) com dor aguda'],
    correctIndex: 0,
    explanation: 'Gota: hiperuricemia crônica → saturação de urato → depósito de cristais → crise inflamatória (macrófagos ativam inflamossoma NLRP3 → IL-1β). 1ª crise: 1ª MTF (podagra) clássica. Agudo: (1) colchicina 0,5-1 mg inicialmente + 0,5 mg 1h depois; (2) AINEs (indometacina, naproxeno); (3) corticoide (oral, intraarticular se contraindicação). Profilaxia: alopurinol (alvo ác. úrico <6 mg/dL; <5 mg/dL em tofáceos) — iniciar fora da crise, com colchicina de profilaxia por 3-6 meses. Febuxostat: alternativa ao alopurinol.'
  },
  {
    id: 'est_reuma_004',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: 'A esclerodermia sistêmica (ES) divide-se em duas formas principais que diferem pela:',
    options: ['ES difusa: fibrose cutânea extensa (acima dos cotovelos/joelhos + tronco) + acometimento precoce de órgãos internos (pulmão, rim, coração), anti-Scl70+; ES limitada (síndrome de CREST): fibrose restrita a extremidades distais + face, hipertensão pulmonar tardia, anticentrômero+', 'ES limitada: fibrose difusa acometendo tronco e face precocemente', 'Apenas diferença cosmética, sem diferença no prognóstico', 'ES difusa: anti-Ro/SSA positivo; ES limitada: anti-Scl70 positivo'],
    correctIndex: 0,
    explanation: 'Esclerodermia: ativação imune → lesão endotelial → fibrose. CREST: Calcinose, Raynaud, Esofagite (disfagia), Sclerodactilia, Telangiectasia — anticentrômero (anti-CENP-B) associado. Complicação: HAP tardia. Difusa: anti-topoisomerase I (anti-Scl70), fibrose pulmonar intersticial precoce, crise renal esclerodérmica (IRA + HAS maligna → IECAs são o tratamento). Fenômeno de Raynaud: presente em ambas (vasoespasmo desencadeado por frio/emoção). Tratamento: sintomático por órgão (IECAs p/rim, nifedipino p/Raynaud, ciclofosfamida/micofenolato p/fibrose pulmonar).'
  },
  {
    id: 'est_reuma_005',
    cycle: 'Ciclo Clínico',
    subject: 'Reumatologia',
    text: 'A polimialgia reumática (PMR) associa-se à arterite de células gigantes (ACG) porque:',
    options: ['Ambas afetam idosos (>50 anos), têm VHS muito elevado e respondem bem aos corticóides — PMR: dor/rigidez em cintura escapular e pélvica; ACG: vasculite de grandes vasos, cefaleias, claudicação de mandíbula, amaurose fugaz/cegueira (ramo da artéria oftálmica)', 'PMR e ACG afetam apenas articulações periféricas de mãos e pés', 'ACG ocorre predominantemente em pacientes jovens (<30 anos)', 'VHS normal exclui ACG (sensibilidade 100%)'],
    correctIndex: 0,
    explanation: 'ACG (arterite temporal): artéria temporal inflamada → cefaleia temporal unilateral, dor ao toque no couro cabeludo, claudicação de mandíbula ao mastigar. Complicação mais temida: cegueira súbita (oclusão da artéria oftálmica central — irreversível). Biópsia da artéria temporal: padrão ouro (célula gigante multinucleada + granuloma). Início imediato de prednisona 1 mg/kg/dia SE SUSPEITA (não aguardar biópsia). PMR: 40-50% têm ACG; VHS >50 mm/h (pode estar >100), PCR elevada. Screening com USG de artéria temporal antes da biópsia em centros especializados.'
  },
  // ─── HEMATOLOGIA ──────────────────────────────────────────────────────
  {
    id: 'est_hemat_001',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    text: 'A anemia ferropriva é diferenciada da anemia de doença crônica pelo:',
    options: ['Ferropriva: ferritina baixa (<12 μg/L) + ferro sérico baixo + TIBC elevado + microcitose; Doença crônica: ferritina normal ou elevada (reagente de fase aguda) + ferro sérico baixo + TIBC baixo/normal + normocítica', 'Ferropriva: ferritina elevada; Doença crônica: ferritina baixa', 'Ambas têm TIBC elevado como diferencial', 'Apenas a biópsia de medula óssea diferencia as duas'],
    correctIndex: 0,
    explanation: 'Anemia ferropriva: esgotamento dos estoques de ferro → eritropoese ferropriva → microcitose/hipocromia. Ferritina <12 ng/mL: diagnóstica de ferropriva (mas pode estar ↑ falsamente em inflamação/doença crônica). Rastrear causa: sangramento oculto (TGI — colonoscopia/EDA em adultos), menorragia, má absorção (doença celíaca, pós-cirurgia bariátrica). Tratamento: sulfato ferroso oral 200 mg/dia (1-3h pré-refeição) por 3-6 meses após normalização da Hb. Anemia de doença crônica: tratar doença subjacente; eritropoetina em DRC/quimioterapia.'
  },
  {
    id: 'est_hemat_002',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    text: 'A leucemia mieloide crônica (LMC) tem como marcador molecular e alvo terapêutico:',
    options: ['Cromossomo Philadelphia (t9;22) → gene de fusão BCR-ABL1 → tirosina quinase constitutivamente ativa → proliferação mieloide descontrolada. Tratamento: imatinibe (TKI 1ª geração) ou dasatinibe/nilotinibe (2ª geração)', 'Mutação FLT3 (tratada com midostaurina — leucemia mieloide aguda)', 'Deleção 17p → resistência ao tratamento (LLC)', 'Translocação t(15;17) → PML-RARα (leucemia promielocítica aguda)'],
    correctIndex: 0,
    explanation: 'LMC: doença mieloproliferativa da stem cell → leucocitose (>25.000) com formas imaturas (mielócitos, metamielócitos), basofilia, esplenomegalia maciça. Cromossomo Ph (t9;22)(q34;q11.2) → BCR-ABL1 (p210 kDa). Imatinibe: revolucionou o prognóstico (SG >90% em 10 anos). Metas: remissão citogenética completa (sem cromossomo Ph) em 12 meses → resposta molecular maior (BCR-ABL <0,1% em IS) em 18 meses → remissão molecular profunda → possibilidade de descontinuação. Crise blástica: quimioterapia + TKI. LPA (M3): ATRA + arsênico (não imatinibe).'
  },
  {
    id: 'est_hemat_003',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    text: 'A plaquetopenia imune (PTI) primária é diagnosticada por:',
    options: ['Exclusão de outras causas de trombocitopenia + plaquetas <100.000/μL, geralmente sem anemia ou leucopenia, com megacariócitos normais na medula — autoanticorpos anti-GPIIb/IIIa e anti-GPIb/IX destroem plaquetas', 'Apenas biópsia de medula óssea como diagnóstico definitivo', 'Presença obrigatória de petéquias para diagnóstico', 'Contagem de plaquetas <10.000 como critério diagnóstico'],
    correctIndex: 0,
    explanation: 'PTI: autoanticorpos (IgG anti-GPIIb/IIIa ou GPIb/IX) → opsonização → destruição esplênica de plaquetas + ↓produção (anticorpos anti-megacariócitos). Clínica: petéquias, equimoses, epistaxe, hematúria (plaquetas <30.000); sangramento grave (<10.000). Diagnóstico por exclusão: afastar pseudo-trombocitopenia (EDTA), drogas (heparina-TAHIT, quinina), LES, HIV, HCV, H. pylori, síndrome de Evans, PTT. 1ª linha: corticoide (dexametasona 40 mg/4d > prednisona); IGIV (urgência, pré-cirurgia, gestação). 2ª linha: rituximab, TPO-RA (eltrombopag, romiplostim), esplenectomia.'
  },
  {
    id: 'est_hemat_004',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    text: 'A doença falciforme ocorre pela mutação no gene da beta-globina que causa:',
    options: ['Substituição de ácido glutâmico por valina na posição 6 da cadeia beta (HbS) → polimerização em hipóxia → hemácias em foice → vaso-oclusão + hemólise crônica + crises álgicas', 'Ausência da cadeia alfa (talassemia alfa)', 'Mutação na globina gama fetal (HbF) que persiste na vida adulta', 'Deficiência de G6PD (anemia hemolítica por estresse oxidativo)'],
    correctIndex: 0,
    explanation: 'Anemia falciforme (HbSS): hemolítica crônica + vaso-oclusiva. Complicações: síndrome torácica aguda (dor + infiltrado pulmonar + febre → emergência), AVC, priapismo, osteomielite (salmonela), necrose asséptica de cabeça de fêmur, retinopatia, úlcera de perna, esplenomegalia/autoesplenectomia. Hidroxiureia: ↑HbF → ↓crises → ↓STA, mortalidade. Penicilina profilática (2 meses a 5 anos). Transfusão: crise grave, AVC, STA. Transplante de células-tronco (curativo). Terapia gênica: emergente.'
  },
  {
    id: 'est_hemat_005',
    cycle: 'Ciclo Clínico',
    subject: 'Hematologia',
    text: 'A trombofilia hereditária mais comum associada à trombose venosa profunda recorrente é:',
    options: ['Fator V de Leiden (mutação G1691A → resistência à proteína C ativada) — prevalência 5% na população europeia; seguido da mutação G20210A da protrombina e deficiências de antitrombina, proteína C e S', 'Deficiência de vitamina K como principal causa hereditária', 'Síndrome antifosfolipídeo como trombofilia hereditária mais comum', 'Hemofilia A (deficiência do Fator VIII) — causa sangramento, não trombose'],
    correctIndex: 0,
    explanation: 'Trombofilia: estado de hipercoagulabilidade. Hereditárias: Fator V Leiden (mais comum): mutação Arg506Gln → FVa não inativado pela PCA → estado pró-coagulante; heterozigoto: risco TVP 4-8× (homozigoto 50-100×). Mutação G20210A protrombina: 2ª mais comum (2% pop, risco ↑3×). Deficiências de AT, PC, PS: raras mas risco muito elevado. SAF: adquirida (anticorpos antifosfolipídeos: anticoagulante lúpico, anticardiolipina, anti-β2GP1) → trombose arterial e venosa + abortamentos. Pesquisa de trombofilia: TVP espontânea (<45 anos), recorrente, sítio incomum, história familiar.'
  },
];
