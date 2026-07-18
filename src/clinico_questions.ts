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

const SUBJECTS_CLINICO = [
  "Ginecologia & Obstetrícia",
  "Pediatria",
  "Medicina de Família/SUS",
  "Cirurgia Geral",
  "Cardiologia",
  "Pneumologia",
  "Gastroenterologia",
  "Infectologia",
  "Endocrinologia",
  "Clínica Médica",
  "Clínica Cirúrgica",
  "Psiquiatria",
  "Reumatologia",
  "Nefrologia",
  "Neurologia",
  "Hematologia",
  "Dermatologia",
  "Oftalmologia",
  "Otorrinolaringologia",
  "Ortopedia",
  "Urologia",
  "Geriatria",
  "Radiologia"
];

const TOPICS_CLINICO: Record<string, { title: string; cases: string[]; questions: { type: string; q: string; opts: string[]; ans: number; exp: string }[] }[]> = {
  "Ginecologia & Obstetrícia": [
    {
      title: "Pré-Natal e Doenças na Gestação",
      cases: [
        "Gestante de 28 semanas apresenta queixa de cefaleia e picos pressóricos de 150/100 mmHg",
        "Primigesta em consulta de rotina do terceiro trimestre exibe proteinúria em fita de 2+",
        "Gestante previamente hipertensa monitora pressão arterial no domicílio"
      ],
      questions: [
        { type: "conduta", q: "Qual o diagnóstico e conduta para paciente com PA >= 140/90 mmHg após a 20ª semana com proteinúria?", opts: ["Pré-eclâmpsia; repouso absoluto e início de metildopa se PA > 150/100", "Hipertensão gestacional; diurese imediata", "Pré-eclâmpsia; profilaxia com sulfato de magnésio se sinais de gravidade", "Eclâmpsia; parto cesáreo de emergência imediato"], ans: 2, exp: "O diagnóstico de PA aumentada após 20 semanas com proteinúria configura pré-eclâmpsia. Diante de sinais de gravidade, o sulfato de magnésio deve ser iniciado para profilaxia de convulsões." },
        { type: "conduta", q: "Qual a droga de escolha para profilaxia e tratamento das convulsões da eclâmpsia?", opts: ["Diazepam", "Fenitoína", "Sulfato de Magnésio", "Fenobarbital"], ans: 2, exp: "O sulfato de magnésio é o padrão-ouro e droga de primeira escolha para prevenção e controle de convulsões na pré-eclâmpsia grave e eclâmpsia." }
      ]
    }
  ],
  "Pediatria": [
    {
      title: "Crescimento e Desenvolvimento",
      cases: [
        "Lactente em consulta de puericultura de rotina",
        "Criança levada ao pediatra para avaliação do desenvolvimento neuropsicomotor",
        "Lactente de termo amamentado exclusivamente ao seio materno"
      ],
      questions: [
        { type: "diagnostico", q: "Com quantos meses de idade espera-se que um lactente consiga sentar-se sem apoio?", opts: ["4 meses", "6 a 7 meses", "9 meses", "12 meses"], ans: 1, exp: "Sentar sem apoio é um marco do desenvolvimento motor tipicamente atingido entre 6 e 7 meses de idade." },
        { type: "conduta", q: "Quais vacinas devem ser aplicadas ao recém-nascido na maternidade, preferencialmente nas primeiras 24 horas?", opts: ["BCG e Hepatite B", "Tríplice Viral e VIP", "Rotavírus e Pentavalente", "Pneumocócica 10-valente e Meningocócica C"], ans: 0, exp: "Ao nascer, devem ser administradas as vacinas BCG (prevenção de formas graves de tuberculose) e contra Hepatite B." }
      ]
    }
  ],
  "Medicina de Família/SUS": [
    {
      title: "Princípios do SUS e Atenção Primária",
      cases: [
        "Durante reunião da equipe de Saúde da Família (eSF)",
        "Ao planejar visitas domiciliares na área de abrangência da UBS",
        "Em consulta médica na Unidade Básica de Saúde"
      ],
      questions: [
        { type: "diagnostico", q: "Qual princípio doutrinário do SUS garante que todos os cidadãos têm direito ao acesso a todas as ações e serviços de saúde?", opts: ["Universalidade", "Integralidade", "Equidade", "Descentralização"], ans: 0, exp: "A universalidade é o princípio finalístico que garante a saúde como direito de todos e dever do Estado, sem qualquer discriminação." },
        { type: "diagnostico", q: "O princípio organizativo do SUS que preza por dar mais assistência a quem mais necessita, reduzindo desigualdades, é a:", opts: ["Descentralização", "Universalidade", "Equidade", "Participação popular"], ans: 2, exp: "A equidade consiste em distribuir os recursos e ações de forma justa, tratando desigualmente os desiguais para compensar as disparidades sociais e de saúde." }
      ]
    }
  ],
  "Cirurgia Geral": [
    {
      title: "Abdome Agudo Inflamatório",
      cases: [
        "Paciente refere dor abdominal que começou em região periumbilical e migrou para a fossa ilíaca direita",
        "Paciente apresenta febre aferida, náuseas e dor intensa à palpação do ponto de McBurney",
        "Vítima de dor abdominal difusa associada a descompressão dolorosa positiva"
      ],
      questions: [
        { type: "diagnostico", q: "Qual o diagnóstico mais provável para dor periumbilical que migra para fossa ilíaca direita acompanhada de anorexia e febre baixa?", opts: ["Colecistite aguda", "Apendicite aguda", "Diverticulite aguda", "Obstrução intestinal alta"], ans: 1, exp: "A dor migratória que se inicia na região periumbilical (dor visceral) e localiza-se na fossa ilíaca direita (dor somática/parietal) é o quadro clássico de apendicite aguda." },
        { type: "exame", q: "Em pacientes adultos com suspeita de apendicite aguda e apresentação clínica atípica, qual o exame de imagem mais acurado?", opts: ["Radiografia simples de abdome", "Ultrassonografia de abdome", "Tomografia computadorizada de abdome", "Ressonância magnética de abdome"], ans: 2, exp: "A tomografia computadorizada (TC) de abdome e pelve é o exame com maior sensibilidade e especificidade para o diagnóstico de apendicite em adultos." }
      ]
    }
  ],
  "Cardiologia": [
    {
      title: "Insuficiência Cardíaca (IC)",
      cases: [
        "Paciente com queixa de dispneia aos pequenos esforços, ortopneia e edema bilateral de membros inferiores",
        "Cardiópata de longa data em consulta ambulatorial de acompanhamento",
        "Paciente apresenta turgência jugular patológica e estertores crepitantes em bases pulmonares"
      ],
      questions: [
        { type: "conduta", q: "Qual classe de fármacos bloqueadores neuro-hormonais comprovadamente reduz mortalidade a longo prazo na IC com fração de ejeção reduzida?", opts: ["Diuréticos de alça", "Inibidores da ECA ou BRA + Beta-bloqueadores", "Bloqueadores de canal de cálcio di-idropiridínicos", "Digitálicos como a digoxina"], ans: 1, exp: "O bloqueio do sistema renina-angiotensina-aldosterona (com IECA ou BRA) combinado a beta-bloqueadores forma a base do tratamento que reduz sobrevida e internações na ICFER." },
        { type: "exame", q: "Qual biomarcador sérico é padrão-ouro para triagem e exclusão de insuficiência cardíaca descompensada na emergência?", opts: ["Troponina I de alta sensibilidade", "CK-MB massa", "Peptídeo natriurético tipo B (BNP ou NT-proBNP)", "Mioglobina"], ans: 2, exp: "O BNP ou NT-proBNP possui alto valor preditivo negativo; níveis baixos excluem com segurança a IC como causa de dispneia aguda." }
      ]
    }
  ],
  "Pneumologia": [
    {
      title: "Asma e DPOC",
      cases: [
        "Paciente tabagista (50 maços/ano) refere tosse produtiva crônica e dispneia progressiva",
        "Jovem com histórico familiar de atopia queixa episódios de sibilância, aperto no peito e tosse noturna",
        "Paciente asmático em crise aguda atendido em unidade de pronto atendimento"
      ],
      questions: [
        { type: "exame", q: "Como se caracteriza o diagnóstico espirométrico clássico da asma?", opts: ["Distúrbio obstrutivo irreversível após broncodilatador", "Distúrbio obstrutivo com resposta broncodilatadora significativa (reversibilidade)", "Distúrbio restritivo puro", "Capacidade vital forçada normal com VEF1 aumentado"], ans: 1, exp: "A asma é caracterizada por limitação variável ao fluxo aéreo. O achado de obstrução que reverte de forma significativa (aumento do VEF1 de 12% e 200ml) após beta-2 agonista confirma o diagnóstico." },
        { type: "conduta", q: "Qual a medida terapêutica não farmacológica que comprovadamente aumenta a sobrevida de pacientes com DPOC e hipoxemia grave em repouso?", opts: ["Fisioterapia respiratória diária", "Vacinação pneumocócica", "Oxigenoterapia domiciliar contínua", "Reabilitação pulmonar ambulatorial"], ans: 2, exp: "A oxigenoterapia domiciliar de longo prazo (mínimo de 15 horas/dia) aumenta a sobrevida in patients com DPOC estável que apresentam hipoxemia grave (PaO2 < 55 mmHg ou SaO2 < 88%)." }
      ]
    }
  ],
  "Gastroenterologia": [
    {
      title: "Doença do Refluxo Gastroesofágico (DRGE)",
      cases: [
        "Paciente queixa de pirose retroesternal e regurgitação ácida há 6 meses",
        "Paciente com queixas de azia frequente e dor epigástrica que piora ao deitar",
        "Paciente apresenta queixa de disfagia progressiva e perda ponderal"
      ],
      questions: [
        { type: "exame", q: "Qual exame de escolha deve ser solicitado inicialmente para investigar sintomas de refluxo em paciente com mais de 45 anos ou sinais de alarme?", opts: ["Endoscopia digestiva alta (EDA)", "pHmetria esofágica de 24 horas", "Esofagomanometria computorizada", "Raio-X contrastado de esôfago-estômago-duodeno"], ans: 0, exp: "A EDA é o exame inicial na presença de sinais de alarme (disfagia, perda de peso, anemia) ou idade avançada, para afastar neoplasias e esofagites graves." },
        { type: "diagnostico", q: "Qual bactéria está fortemente implicada na patogênese da gastrite crônica, úlceras duodenais e linfoma MALT?", opts: ["Escherichia coli", "Helicobacter pylori", "Campylobacter jejuni", "Salmonella enterica"], ans: 1, exp: "O Helicobacter pylori coloniza a mucosa gástrica e causa inflamação crônica, predispondo à formação de úlceras pépticas e neoplasias gástricas." }
      ]
    }
  ],
  "Infectologia": [
    {
      title: "Dengue e Arboviroses",
      cases: [
        "Paciente apresenta febre alta súbita, mialgia intensa, cefaleia retroorbitária e exantema",
        "Paciente em área endêmica de arboviroses com febre e dor articular limitante",
        "Paciente com dengue confirmada desenvolve dor abdominal intensa e vômitos persistentes"
      ],
      questions: [
        { type: "diagnostico", q: "Qual achado clínico-laboratorial representa um sinal de alarme na dengue, exigindo internação e hidratação venosa imediata?", opts: ["Febre alta de 39°C no primeiro dia", "Plaquetopenia leve (120.000/mm³)", "Dor abdominal intensa e contínua ou vômitos persistentes", "Prurido palmoplantar"], ans: 2, exp: "Dor abdominal intensa e contínua, vômitos persistentes, hipotensão postural e sangramento de mucosa são sinais de alarme que indicam extravasamento plasmático e risco de choque." },
        { type: "conduta", q: "Qual a conduta prioritária imediata para o manejo de um paciente com diagnóstico de dengue com sinais de alarme?", opts: ["Prescrever AAS ou Ibuprofeno para controle da dor e febre", "Iniciar antibioticoterapia profilática endovenosa", "Expansão volêmica rápida com solução cristaloide venosa", "Indicação de transfusão imediata de plaquetas"], ans: 2, exp: "A base do manejo da dengue com sinais de alarme (Grupo C) é a reposição volêmica imediata com cristaloide (10 mL/kg na primeira hora), visando prevenir o choque hemoconcentrado." }
      ]
    }
  ],
  "Endocrinologia": [
    {
      title: "Diabetes Mellitus (DM)",
      cases: [
        "Paciente assintomático realiza exames de check-up geral de rotina",
        "Paciente refere poliúria, polidipsia, perda ponderal inexplicável e fadiga",
        "Paciente com sobrepeso exibe acantose nigricans em região cervical"
      ],
      questions: [
        { type: "exame", q: "Qual o valor de corte da Hemoglobina Glicada (HbA1c) estabelecido para o diagnóstico laboratorial de Diabetes Mellitus?", opts: ["HbA1c >= 5,7%", "HbA1c >= 6,0%", "HbA1c >= 6,5%", "HbA1c >= 7,0%"], ans: 2, exp: "Segundo as diretrizes internacionais e nacionais, um valor de Hemoglobina Glicada (HbA1c) de 6,5% ou mais, confirmado em duas ocasiões (ou associado a glicose de jejum >= 126 mg/dL), sela o diagnóstico de Diabetes Mellitus." },
        { type: "exame", q: "Qual o exame inicial mais adequado para rastreamento de disfunções da tireoide na população geral ou com suspeita clínica de hipo/hipertireoidismo?", opts: ["Ultrassonografia de tireoide", "Dosagem de T3 livre", "Dosagem de T4 livre", "Dosagem de TSH"], ans: 3, exp: "O TSH (Hormônio Estimulante da Tireoide) é o teste mais sensível para triagem inicial, pois pequenas alterações nos hormônios tireoidianos livres causam grandes variações logarítmicas na secreção de TSH hipofisário." }
      ]
    }
  ],
  "Clínica Médica": [
    {
      title: "Hipertensão Arterial Sistêmica",
      cases: [
        "Paciente apresenta aferições de PA persistentemente elevadas no consultório",
        "Paciente hipertenso de grau 1 necessita iniciar terapia medicamentosa",
        "Paciente com PA elevada e presença de microalbuminúria em exame de urina"
      ],
      questions: [
        { type: "conduta", q: "Qual a meta de pressão arterial recomendada para a maioria dos pacientes hipertensos visando redução de eventos cardiovasculares?", opts: ["PA < 140/90 mmHg", "PA < 130/80 mmHg", "PA < 120/70 mmHg", "PA < 150/100 mmHg"], ans: 1, exp: "As principais diretrizes nacionais e internacionais recomendam buscar níveis tensionais abaixo de 130/80 mmHg para a maioria dos adultos em tratamento anti-hipertensivo, desde que tolerado." },
        { type: "conduta", q: "Qual classe de anti-hipertensivos é considerada preferencial para pacientes com Diabetes Mellitus e nefropatia diabética (microalbuminúria positiva)?", opts: ["Inibidores da ECA (IECA) ou Bloqueadores de Receptores de Angiotensina II (BRA)", "Bloqueadores de canais de cálcio", "Beta-bloqueadores", "Diuréticos tiazídicos"], ans: 0, exp: "Os IECA ou BRA exercem efeito nefroprotetor por reduzirem a pressão intraglomerular (vasodilatação da arteríola eferente), reduzindo a proteinúria." }
      ]
    }
  ],
  "Clínica Cirúrgica": [
    {
      title: "Hérnias Inguinais",
      cases: [
        "Paciente refere abaulamento redutível em região inguinal direita que surge aos esforços físicos",
        "Ao examinar canal inguinal de paciente com massa palpável palpada na ponta do dedo do examinador",
        "Paciente idoso com hérnia encarcerada e dor abdominal intermitente"
      ],
      questions: [
        { type: "diagnostico", q: "Qual o tipo de hérnia inguinal que ocorre devido à persistência do conduto peritoneovaginal, projetando-se lateralmente aos vasos epigástricos inferiores?", opts: ["Hérnia inguinal direta", "Hérnia inguinal indireta", "Hérnia femoral", "Hérnia umbilical"], ans: 1, exp: "A hérnia inguinal indireta é congênita, decorre da falha de obliteração do conduto peritoneovaginal e se projeta lateralmente aos vasos epigástricos inferiores, através do anel inguinal profundo." },
        { type: "exame", q: "Qual o exame de imagem inicial padrão para investigação diagnóstica de colelitíase (pedra na vesícula)?", opts: ["Radiografia simples de abdome", "Ultrassonografia de abdome superior", "Tomografia computadorizada de abdome", "Colangiorressonância"], ans: 1, exp: "A ultrassonografia de abdome apresenta excelente acurácia (sensibilidade > 95%), baixo custo e ausência de radiação para identificação de cálculos vesiculares." }
      ]
    }
  ],
  "Psiquiatria": [
    {
      title: "Transtorno Depressivo Maior e Ansiedade",
      cases: [
        "Paciente queixa-se de humor deprimido, anedonia, alteração de sono e ideação de culpa há 3 semanas",
        "Paciente com crises de ansiedade aguda súbita associadas a palpitações, sudorese e dispneia",
        "Paciente em acompanhamento ambulatorial por transtorno depressivo recorrente"
      ],
      questions: [
        { type: "conduta", q: "Qual a classe de psicofármacos indicada como primeira linha farmacológica para o tratamento ambulatorial do Transtorno Depressivo Maior?", opts: ["Benzodiazepínicos", "Inibidores Seletivos da Reabsorção de Serotonina (ISRS)", "Antidepressivos Tricíclicos (ADT)", "Inibidores da Monoaminoxidase (IMAO)"], ans: 1, exp: "Os ISRS (como fluoxetina, sertralina e escitalopram) são considerados primeira linha devido ao perfil de tolerabilidade e segurança em comparação aos tricíclicos e IMAO." },
        { type: "diagnostico", q: "Qual o diagnóstico psiquiátrico de paciente com episódios repetidos de ansiedade aguda extrema de início súbito e sem fator desencadeante evidente?", opts: ["Transtorno de Ansiedade Generalizada (TAG)", "Transtorno de Pânico", "Fobia Social", "Transtorno de Estresse Pós-Traumático"], ans: 1, exp: "O Transtorno de Pânico é caracterizado por ataques de pânico recorrentes e inesperados, seguidos por preocupação persistente com novos ataques (ansiedade antecipatória) ou mudança de comportamento relacionada às crises." }
      ]
    }
  ],
  "Reumatologia": [
    {
      title: "Artrite Reumatoide e Gota",
      cases: [
        "Paciente com dor e edema simétrico em pequenas articulações das mãos e rigidez matinal de 1 hora",
        "Paciente acorda com dor excruciante, edema e calor na primeira articulação metatarsofalângica esquerda",
        "Durante análise de líquido sinovial obtido por artrococentese de joelho doloroso"
      ],
      questions: [
        { type: "exame", q: "Qual marcador sorológico apresenta maior especificidade para o diagnóstico da Artrite Reumatoide?", opts: ["Fator Reumatoide (FR)", "Anticorpo antiproteína citrulinada (Anti-CCP)", "Anticorpo antinuclear (FAN)", "Velocidade de hemossedimentação (VHS)"], ans: 1, exp: "O anti-CCP possui especificidade superior a 95% para Artrite Reumatoide, sendo útil inclusive em fases precoces e com valor prognóstico de gravidade." },
        { type: "diagnostico", q: "Qual o achado diagnóstico patognomônico no líquido sinovial de uma articulação com crise de gota aguda?", opts: ["Presença de cristais de pirofosfato de cálcio com birrefringência positiva", "Cristais de urato monossódico agulhados com forte birrefringência negativa sob luz polarizada", "Infiltrado leucocitário purulento com bactérias intracelulares", "Ausência completa de células inflamatórias"], ans: 1, exp: "O diagnóstico de certeza da gota é feito pela visualização de cristais de urato monossódico em formato de agulha e birrefringência negativa no microscópio de luz polarizada." }
      ]
    }
  ],
  "Nefrologia": [
    {
      title: "Injúria Renal e DRC",
      cases: [
        "Paciente idoso com quadro de desidratação grave evolui com elevação de ureia e creatinina",
        "Paciente com histórico de hipertensão e diabetes apresenta taxa de filtração de 45 mL/min/1,73m² há 6 meses",
        "Paciente internado apresenta oligúria severa e aumento rápido de creatinina sérica"
      ],
      questions: [
        { type: "diagnostico", q: "Qual a definição laboratorial de Doença Renal Crônica (DRC) de acordo com a duração temporal dos parâmetros?", opts: ["Queda abrupta da taxa de filtração glomerular em menos de 48 horas", "Filtração glomerular < 60 mL/min/1,73m² ou evidência de lesão renal (ex: proteinúria) por pelo menos 3 meses", "Elevação de creatinina sérica associada a episódios de fluxo urinário obstruído", "Anemia inexplicada associada a proteinúria de fita isolada"], ans: 1, exp: "A DRC é caracterizada por anormalidades estruturais ou funcionais do rim (TFG < 60 ou proteinúria/hematúria) persistentes por um período mínimo de 3 meses." },
        { type: "diagnostico", q: "Qual a principal causa fisiopatológica da Injúria Renal Aguda pré-renal?", opts: ["Obstrução mecânica da uretra ou ureteres", "Necrose tubular aguda induzida por aminoglicosídeos", "Hipoperfusão renal secundária a hipovolemia ou choque", "Glomerulonefrite aguda difusa"], ans: 2, exp: "A IRA pré-renal decorre da redução do fluxo sanguíneo renal e da pressão de perfusão glomerular (causada por desidratação, hemorragia, IC), sem lesão parenquimatosa intrínseca inicial." }
      ]
    }
  ],
  "Neurologia": [
    {
      title: "Cefaleias e Epilepsia",
      cases: [
        "Paciente refere cefaleia unilateral, de caráter pulsátil, com náuseas, vômitos e fotofobia",
        "Paciente apresenta crise convulsiva tônico-clônica generalizada com duração de 2 minutos",
        "Paciente admitido em estado de mal epiléptico com crises convulsivas subentrantes"
      ],
      questions: [
        { type: "conduta", q: "Qual o tratamento abortivo específico de escolha para crises moderadas a graves de migrânea (enxaqueca)?", opts: ["Aspirina isolada", "Triptanos (ex: sumatriptano)", "Propranolol profilático", "Amitriptilina"], ans: 1, exp: "Os triptanos são agonistas seletivos dos receptores 5-HT1B/1D, promovendo vasoconstrição de vasos meníngeos e inibição da liberação de peptídeos pró-inflamatórios, indicados para resgatar crises moderadas/graves de enxaqueca." },
        { type: "conduta", q: "Qual a droga intravenosa de primeira escolha recomendada para interrupção imediata de crise convulsiva em estado de mal epiléptico?", opts: ["Fenitoína endovenosa rápida", "Benzodiazepínico (ex: Diazepam ou Lorazepam)", "Ácido valproico", "Sulfato de magnésio"], ans: 1, exp: "Os benzodiazepínicos (diazepam IV ou midazolam IM/IV) são drogas de ação rápida sobre os receptores GABA-A e constituem a primeira linha para cessar a atividade convulsiva ativa." }
      ]
    }
  ],
  "Hematologia": [
    {
      title: "Anemias",
      cases: [
        "Paciente queixa-se de astenia e palidez; hemograma revela anemia microcítica e hipocrômica com ferritina baixa",
        "Paciente vegetariano estrito apresenta anemia macrocítica com queixa de parestesia de membros inferiores",
        "Paciente com anemia e presença de hemácias em alvo no esfregaço periférico"
      ],
      questions: [
        { type: "diagnostico", q: "Qual a causa mais comum de anemia microcítica e hipocrômica no mundo?", opts: ["Deficiência de ferro (anemia ferropriva)", "Anemia de doença crônica", "Beta-talassemia menor", "Deficiência de folato"], ans: 0, exp: "A anemia ferropriva é a principal causa de anemia mundial. Caracteriza-se por microcitose (VCM baixo), hipocromia (HCM baixo) e baixos estoques de ferro (ferritina sérica reduzida)." },
        { type: "diagnostico", q: "Qual distúrbio nutricional causa anemia megaloblástica (VCM > 100 fL) associada a sintomas neurológicos como polineuropatia desmielinizante?", opts: ["Deficiência de folato (vitamina B9)", "Deficiência de cobalamina (vitamina B12)", "Deficiência de piridoxina (vitamina B6)", "Deficiência de zinco"], ans: 1, exp: "A deficiência de vitamina B12 (cobalamina) impede a síntese adequada de DNA e de mielina, levando a anemia megaloblástica e manifestações neurológicas (degeneração combinada subaguda da medula)." }
      ]
    }
  ],
  "Dermatologia": [
    {
      title: "Câncer de Pele",
      cases: [
        "Paciente idoso apresenta pápula perolada com telangiectasias e ulceração central em face",
        "Paciente com lesão pigmentada em dorso apresentando assimetria e variação de cores",
        "Paciente com placa eritemato descamativa em área fotoexposta de longa evolução"
      ],
      questions: [
        { type: "diagnostico", q: "Qual o tipo de neoplasia maligna cutânea mais frequente, de comportamento localmente invasivo e raras metástases, caracterizado por células basaloides na histopatologia?", opts: ["Carcinoma espinocelular (CEC)", "Carcinoma basocelular (CBC)", "Melanoma maligno", "Ceratose actínica"], ans: 1, exp: "O carcinoma basocelular (CBC) responde por cerca de 75-80% dos cânceres de pele não melanoma. Origina-se das células da camada basal e é comum em áreas fotoexpostas." },
        { type: "diagnostico", q: "A regra do ABCDE utilizada clinicamente para avaliar lesões melanocíticas suspeitas avalia:", opts: ["Aderência, Sangramento, Cor, Diâmetro e Evolução", "Assimetria, Bordas irregulares, Cores múltiplas, Diâmetro > 6mm e Evolução", "Atipia, Descamação, Eritema e Dor", "Ausência de pelos, Base infiltrada, Costras e Eritema"], ans: 1, exp: "A regra do ABCDE orienta a triagem de lesões suspeitas de melanoma: Assimetria, Bordas, Cor, Diâmetro e Evolução de tamanho, cor ou forma." }
      ]
    }
  ],
  "Oftalmologia": [
    {
      title: "Catarata e Glaucoma",
      cases: [
        "Paciente idoso queixa-se de embaçamento visual progressivo e indolor e piora da visão noturna",
        "Paciente refere perda insidiosa de campo visual periférico; exame biomicroscópico revela escavação papilar aumentada",
        "Paciente com quadro de dor ocular aguda severa e visão de halos coloridos ao redor da luz"
      ],
      questions: [
        { type: "diagnostico", q: "Qual a causa mais comum de perda reversível de acuidade visual em idosos, caracterizada pela opacificação do cristalino?", opts: ["Glaucoma agudo", "Degeneração macular relacionada à idade", "Catarata senil", "Retinopatia diabética proliferativa"], ans: 2, exp: "A catarata senil é a opacificação progressiva do cristalino, lente natural do olho, sendo tratada de forma curativa por meio de cirurgia de facoemulsificação com implante de lente intraocular." },
        { type: "diagnostico", q: "O glaucoma crônico simples de ângulo aberto é definido principalmente por:", opts: ["Perda visual central súbita", "Aumento da pressão intraocular, neuropatia óptica com aumento da escavação e perda de campo visual periférico", "Opacificação corneana bilateral crônica", "Presença de exsudatos algodonosos na retina"], ans: 1, exp: "O glaucoma de ângulo aberto é uma neuropatia óptica progressiva caracterizada por alterações do disco óptico (escavação aumentada) e perda correspondente de campo visual periférico, tipicamente associado a hipertensão ocular." }
      ]
    }
  ],
  "Otorrinolaringologia": [
    {
      title: "Otites e Sinusites",
      cases: [
        "Criança de 3 anos levada por febre alta e otalgia intensa de início agudo",
        "Paciente refere congestão nasal, dor na região dos seios maxilares e rinorreia purulenta há 10 dias",
        "Paciente com queixa de prurido e dor no conduto auditivo externo após natação"
      ],
      questions: [
        { type: "diagnostico", q: "Qual o patógeno bacteriano mais comumente isolado em culturas de secreção de Otite Média Aguda (OMA) infantil?", opts: ["Streptococcus pneumoniae", "Staphylococcus aureus", "Pseudomonas aeruginosa", "Mycoplasma pneumoniae"], ans: 0, exp: "O Streptococcus pneumoniae é o principal agente etiológico bacteriano da OMA, seguido por Haemophilus influenzae não tipificável e Moraxella catarrhalis." },
        { type: "conduta", q: "Qual o tratamento de primeira escolha recomendado para Rinossinusite Aguda bacteriana não complicada em adultos?", opts: ["Ciprofloxacino", "Amoxicilina (ou Amoxicilina com Clavulanato se fatores de risco)", "Azitromicina", "Antihistamínicos isolados"], ans: 1, exp: "A amoxicilina (com ou sem clavulanato) é o tratamento de escolha inicial devido à excelente cobertura contra os principais patógenos respiratórios altos (pneumococo, Haemophilus e Moraxella)." }
      ]
    }
  ],
  "Ortopedia": [
    {
      title: "Lombociatalgia e Artrose",
      cases: [
        "Paciente refere dor em região lombar irradiada para membro inferior esquerdo até o dorso do pé, de início súbito",
        "Paciente idoso com dor articular crônica em joelhos que piora com sustentação de peso e melhora com repouso",
        "Paciente apresenta dor lombar mecânica que melhora ao deitar e nega sintomas neurológicos"
      ],
      questions: [
        { type: "diagnostico", q: "La dor lombar que se irradia abaixo do nível do joelho seguindo um trajeto dermatômico, acompanhada de parestesia, sugere:", opts: ["Estiramento muscular lombar simples", "Lombociatalgia por hérnia de disco", "Espondilite anquilosante", "Artrite reumatoide juvenil"], ans: 1, exp: "A irradiação dermatômica da dor lombar abaixo do joelho (ciatalgia) indica compressão radicular, comumente provocada por herniação discal lombar." },
        { type: "exame", q: "Qual alteração radiográfica clássica é encontrada na osteoartrite (artrose) de joelho ou quadril?", opts: ["Osteopenia difusa e erosões marginais", "Redução assimétrica do espaço articular, esclerose subcondral e presença de osteófitos", "Destruição óssea lítica sem reação periosteal", "Fratura patológica subcondral imediata"], ans: 1, exp: "A osteoartrite (doença articular degenerativa) apresenta sinais característicos ao raio-X: pinçamento do espaço articular, esclerose do osso subcondral (que reage ao atrito), osteófitos marginais e cistos subcondrais." }
      ]
    }
  ],
  "Urologia": [
    {
      title: "HPB e Cólica Renal",
      cases: [
        "Paciente idoso refere hesitação miccional, jato urinário fraco, polaciúria e nictúria",
        "Paciente jovem apresenta dor súbita severa em cólica em flanco esquerdo com irradiação para testículo",
        "Paciente com queixa de hematúria macroscópica indolor de início recente"
      ],
      questions: [
        { type: "conduta", q: "Qual classe farmacológica atua promovendo o relaxamento da musculatura lisa do colo vesical e uretra prostática, sendo usada para alívio rápido de sintomas miccionais da HPB?", opts: ["Inibidores da 5-alfa-redutase (ex: finasterida)", "Bloqueadores alfa-1 adrenérgicos (ex: tansulosina)", "Anticolinérgicos (ex: oxibutinina)", "Agonistas beta-3 adrenérgicos"], ans: 1, exp: "Os bloqueadores alfa-1 adrenérgicos promovem relaxamento rápido da musculatura lisa da próstata e colo vesical, diminuindo a resistência ao fluxo urinário." },
        { type: "exame", q: "Qual exame de imagem é considerado padrão-ouro na emergência para o diagnóstico de litíase urinária aguda?", opts: ["Ultrassonografia de rins e vias urinárias", "Radiografia de abdome simples (KUB)", "Tomografia computadorizada de abdome e pelve sem contraste (Urotomografia sem contraste)", "Urografia excretora contrastada"], ans: 2, exp: "A TC sem contraste (urotomografia) identifica praticamente todos os tipos de cálculos (inclusive radiotransparentes), além de avaliar complicações como hidronefrose." }
      ]
    }
  ],
  "Geriatria": [
    {
      title: "Síndromes Demenciais",
      cases: [
        "Paciente de 78 anos apresenta perda progressiva de memória para fatos recentes e desorientação espacial há 2 anos",
        "Idoso apresenta declínio cognitivo flutuante com alucinações visuais estruturadas e parkinsonismo precoce",
        "Idoso com histórico de múltiplos AVCs apresenta declínio cognitivo de instalação abrupta e padrão em degraus"
      ],
      questions: [
        { type: "diagnostico", q: "Qual a causa mais comum de demência neurodegenerativa em idosos, cuja patogênese envolve acúmulo de placas beta-amiloides e emaranhados neurofibrilares?", opts: ["Doença de Parkinson", "Demência Vascular", "Doença de Alzheimer", "Demência frontotemporal"], ans: 2, exp: "A Doença de Alzheimer é a demência mais prevalente em idosos, caracterizada histologicamente por deposição extracelular de peptídeo beta-amiloide e intracelular de proteína tau hiperfosforilada." },
        { type: "diagnostico", q: "Um quadro de declínio cognitivo em idoso que se inicia ou piora nitidamente após episódios vasculares cerebrais, apresentando padrão de progressão em degraus, sugere:", opts: ["Doença de Alzheimer", "Demência por corpos de Lewy", "Demência Vascular", "Paralisia supranuclear progressiva"], ans: 2, exp: "A demência vascular caracteriza-se por comprometimento cognitivo secundário a lesão isquêmica ou hemorrágica cerebral, frequentemente apresentando início abrupto e curso clínico em degraus." }
      ]
    }
  ],
  "Radiologia": [
    {
      title: "Métodos de Imagem",
      cases: [
        "Paciente com suspeita de pneumonia lobar realiza radiografia de tórax em incidências PA e Perfil",
        "Durante discussão sobre exames de imagem adequados para grávida com dor em quadrante superior direito",
        "Ao avaliar radiografia de paciente com pneumotórax hipertensivo"
      ],
      questions: [
        { type: "exame", q: "Qual sinal radiológico clássico no raio-X de tórax indica a presença de ar dentro de alvéolos circundados por alvéolos preenchidos por exsudato?", opts: ["Sinal do menisco", "Broncograma aéreo", "Sinal da silhueta", "Infiltrado em asa de borboleta"], ans: 1, exp: "O broncograma aéreo é a visibilidade de brônquios aerados dentro de uma área de consolidação alveolar opaca, confirmando doença do espaço aéreo (como pneumonia)." },
        { type: "exame", q: "Qual método de imagem diagnóstica não utiliza radiação ionizante e oferece excelente resolução de contraste para avaliar partes moles articulares e do encéfalo?", opts: ["Tomografia Computadorizada (TC)", "Ressonância Magnética (RM)", "Radiografia digital", "Cintilografia óssea"], ans: 1, exp: "A ressonância magnética utiliza campos magnéticos e pulsos de radiofrequência para geração de imagens (sem radiação ionizante), sendo o melhor método para tecidos moles." }
      ]
    }
  ]
};

function getVariedClinicoText(baseCase: string, index: number): string {
  let text = baseCase;

  const age = 22 + (index % 55);
  if (text.includes("Paciente")) {
    text = text.replace("Paciente", `Paciente de ${age} anos`);
  } else if (text.includes("Gestante")) {
    text = text.replace("Gestante", `Gestante de ${20 + (index % 18)} anos`);
  } else if (text.includes("Lactente")) {
    text = text.replace("Lactente", `Lactente de ${3 + (index % 9)} meses`);
  } else if (text.includes("Criança")) {
    text = text.replace("Criança", `Criança de ${2 + (index % 8)} anos`);
  } else if (text.includes("Idoso")) {
    text = text.replace("Idoso", `Idoso de ${65 + (index % 22)} anos`);
  } else if (text.includes("Durante") || text.includes("Ao") || text.includes("Vítima")) {
    text = `Paciente de ${age} anos. ` + text;
  }

  const variations = [
    ", atendido na unidade de emergência de hospital de ensino.",
    ", acompanhado por familiares na consulta ambulatorial.",
    ", encaminhado pela atenção primária para avaliação especializada.",
    ", sob acompanhamento regular de equipe multiprofissional.",
    ", admitido para investigação diagnóstica de sintomas recorrentes.",
    ", apresentando estabilidade clínica no momento do exame.",
    ", com relatos de episódios semelhantes de menor intensidade pregressos.",
    ", sem comorbidades de relevância conhecidas na história médica.",
    ", monitorizado de forma contínua em enfermaria clínica geral.",
    ", de acordo com os protocolos institucionais vigentes."
  ];

  text = text.trim();
  if (text.endsWith(".") || text.endsWith(",")) {
    text = text.slice(0, -1);
  }

  text = text + variations[index % variations.length];
  return text;
}

export function generateClinicoQuestions(): Question[] {
  const result: Question[] = [];

  for (const subject of SUBJECTS_CLINICO) {
    const data = TOPICS_CLINICO[subject];
    if (!data) continue;
    let idCounter = 1;

    for (let i = 0; i < 200; i++) {
      const topicIndex = i % data.length;
      const topic = data[topicIndex];

      const qIndex = i % topic.questions.length;
      const baseQ = topic.questions[qIndex];

      const caseIndex = i % topic.cases.length;
      const baseCase = topic.cases[caseIndex];

      const variedCase = getVariedClinicoText(baseCase, i);

      result.push({
        id: `clinico_${subject.toLowerCase().replace(/[^a-z]/g, "")}_q${idCounter++}`,
        cycle: "Ciclo Clínico",
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

export const CLINICO_QUESTIONS = generateClinicoQuestions();
