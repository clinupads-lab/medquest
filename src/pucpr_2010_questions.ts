// PUC-PR - Residencia Medica R1 - 2010 (Prova 1, 100 questoes)
// Fonte: provaderesidencia.com.br (prova + gabarito oficial).
// Q11 nao possui gabarito oficial (questao com imagem/tabela) e foi omitida.
// correctIndex segue o gabarito oficial (A=0, B=1, C=2, D=3, E=4).

export const PUCPR_2010_QUESTIONS: any[] = [
  { id: 'pucpr_2010_001', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Medicina de Família/SUS',
    text: 'A Notificação Compulsória tem sido a principal fonte da vigilância epidemiológica. Para a inclusão de doenças e agravos na lista de notificação compulsória alguns critérios devem ser obedecidos, EXCETO:',
    options: [
      'Magnitude é aplicável a doenças de elevada frequência, que afetam grandes contingentes populacionais e se traduzem por altas taxas de incidência, prevalência, mortalidade e anos potenciais de vida perdidos.',
      'Potencial de Disseminação, representado pelo elevado poder de transmissão da doença por meio de vetores ou outras fontes de infecção, colocando sob risco a saúde coletiva.',
      'Vulnerabilidade, que é medida pela disponibilidade concreta de instrumentos específicos de prevenção e de controle de doenças, propiciando a atuação efetiva dos serviços de saúde sobre os indivíduos e coletividade.',
      'A Ocorrência de Epidemias, Surtos e Agravos inusitados à Saúde são situações emergenciais que se impõem à notificação imediata de todos os casos suspeitos, com o objetivo de delimitar a área de ocorrência, elucidar o diagnóstico e deflagrar medidas de controle.',
      'Compromissos Internacionais incluem obrigações assumidas por força do Regulamento Sanitário Internacional, estabelecido individualmente por cada país envolvido no regulamento. No caso do Brasil, exige-se a notificação compulsória dos casos de febre amarela, cólera e peste.',
    ], correctIndex: 4 },

  { id: 'pucpr_2010_002', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'Estudo de coorte de Pelotas (RS), 1982: iniciado com inquérito perinatal de todas as 6.011 crianças nascidas nas maternidades; as 5.914 nascidas vivas foram incluídas nos estudos de acompanhamento, com oito acompanhamentos até 2004-2005, aplicando questionários e exames. Os participantes são descritos por variáveis de exposição colhidas nos primeiros acompanhamentos, e a maioria foi acompanhada por 23 anos. O desenho desse estudo epidemiológico pode ser classificado como:',
    options: ['Estudo de Caso-Controle.', 'Estudo Seccional ou Transversal.', 'Estudo Coorte Prospectivo.', 'Estudo Coorte Retrospectivo.', 'Estudo Ecológico.'], correctIndex: 2 },

  { id: 'pucpr_2010_003', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'Ainda em relação ao estudo de coorte de Pelotas (RS), 1982, sua vantagem e sua desvantagem são, respectivamente:',
    options: [
      'Medir variáveis importantes de forma completa e acurada; é uma forma cara e ineficiente de se estudar desfechos raros.',
      'O investigador pode introduzir novas medidas que não estavam disponíveis no início do estudo; não é possível armazenar materiais para análise posterior em uma subamostra de sujeitos.',
      'É um estudo muito mais barato e consome menos tempo; o controle limitado que o investigador tem sobre como delinear a estratégia de amostragem da população.',
      'É a única forma factível de estudar exposições raras e a fatores de risco ocupacionais e ambientais; o problema do confundimento é acentuado.',
      'Não é necessário esperar pela ocorrência do desfecho; é pouco prático para estudar doenças raras em amostras diferentes da população geral.',
    ], correctIndex: 0 },

  { id: 'pucpr_2010_004', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'Em uma cidade do interior do Paraná, o número total de nascidos vivos em 2008 foi de 1.085 crianças. Os óbitos em menores de 1 ano foram: 08 crianças menores de 07 dias; 02 crianças entre 07 e 27 dias; 05 crianças entre 28 dias e menores de 01 ano. Qual é a taxa de mortalidade neonatal tardia nessa cidade?',
    options: ['12,8 ‰', '7,4 ‰', '1,8 ‰', '4,6 ‰', '13,8 ‰'], correctIndex: 2 },

  { id: 'pucpr_2010_005', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'Epidemiologia hospitalar. Correlacione: I. Forma tradicional do uso da Epidemiologia nos hospitais; dada a frequência e o alto custo, torna-se grave problema de saúde pública, exigindo programas específicos para controlá-la. II. Zelar pela qualidade da informação; análise dos dados disponíveis permite atuar no interior do hospital. III. Refere-se às estatísticas de produção dos serviços; o epidemiologista auxilia na definição do dado mais necessário e na forma de análise. Assinale a correta correlação:',
    options: [
      'I – Controle da Qualidade; II – Aprimoramento das Decisões Clínicas; III – Vigilância da Infecção Hospitalar.',
      'I – Vigilância da Infecção Hospitalar; II – Controle da Qualidade; III – Melhora da Notificação Compulsória.',
      'I – Vigilância da Infecção Hospitalar; II – Melhora da Notificação Compulsória; III – Análise da Utilização dos serviços.',
      'I – Análise da Utilização dos serviços; II – Melhora da Notificação Compulsória; III – Controle da Qualidade.',
      'I – Controle da Qualidade; II – Aprimoramento das Decisões Clínicas; III – Análise da Utilização dos serviços.',
    ], correctIndex: 2 },

  { id: 'pucpr_2010_006', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'O viés de aferição pode ser minimizado de algumas maneiras. Considere: I. Garantir que aqueles que registram os desfechos não estejam cientes do grupo a que cada paciente pertence; II. Estabelecer regras cuidadosas para decidir se um desfecho ocorreu ou não; III. Despender esforços iguais para identificar desfechos para todos os pacientes no estudo. Assinale a alternativa CORRETA:',
    options: [
      'Todas as alternativas apresentam maneiras de minimizar o viés em questão.',
      'Nenhuma das alternativas apresenta maneiras de minimizar o viés em questão.',
      'Somente a alternativa I apresenta a maneira de minimizar o viés em questão.',
      'As alternativas I e II apresentam maneiras de minimizar o viés em questão.',
      'As alternativas II e III apresentam maneiras de minimizar o viés em questão.',
    ], correctIndex: 0 },

  { id: 'pucpr_2010_007', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Medicina de Família/SUS',
    text: 'Na História Natural da Doença, três níveis de Medidas Preventivas são preconizados: Prevenção Primária, Secundária e Terciária. Relacione as colunas quanto às medidas ou ações de saúde nos diferentes níveis de atenção e assinale a sequência CORRETA (questão com imagem):',
    options: [
      '1 – 1 – 1 – 2 – 3 – 1 – 2 – 2',
      '1 – 3 – 1 – 2 – 2 – 3 – 1 – 2',
      '2 – 2 – 1 – 1 – 3 – 1 – 1 – 3',
      '2 – 3 – 1 – 1 – 2 – 3 – 1 – 2',
      '1 – 1 – 1 – 2 – 3 – 1 – 1 – 2',
    ], correctIndex: 1 },

  { id: 'pucpr_2010_008', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'A acurácia do teste de sangue PSA para rastrear o Câncer de Próstata pode ser medida a partir da tabela apresentada (questão com imagem). Qual a impressão do médico acerca da sensibilidade do teste nesse estudo?',
    options: ['83%', '60%', '88%', '71%', '86%'], correctIndex: 2 },

  { id: 'pucpr_2010_009', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'A acurácia do teste de sangue PSA para rastrear o Câncer de Próstata é medida a partir da tabela (questão com imagem). Se o médico pensou que o paciente não tinha Câncer de Próstata, em qual porcentagem dos pacientes ele estava certo (valor preditivo negativo)?',
    options: ['83%', '60%', '88%', '71%', '86%'], correctIndex: 0 },

  { id: 'pucpr_2010_010', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'A acurácia do teste de sangue PSA para rastrear o Câncer de Próstata é medida a partir da tabela (questão com imagem). Qual foi a frequência real (prevalência) de Câncer de Próstata nos pacientes que participaram desse estudo?',
    options: ['14%', '25%', '71%', '60%', '35%'], correctIndex: 3 },

  { id: 'pucpr_2010_012', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'Um médico percebe que a trombose venosa profunda (TVP) é responsável por grande porcentagem das mortes em sua área e decide criar um programa para detectar o mais precocemente possível as pessoas com a doença, baseado em um teste diagnóstico. Qual a principal característica que esse teste deve ter?',
    options: ['Valor preditivo positivo elevado.', 'Alta Especificidade.', 'Alta Sensibilidade.', 'Valor preditivo negativo elevado.', 'Força de associação causal elevada.'], correctIndex: 2 },

  { id: 'pucpr_2010_013', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'Em uma população de 55 a 59 anos, a incidência de AVC em não fumantes é 27,9 e em fumantes é 64,7. Calcule o risco relativo e o risco atribuível, respectivamente:',
    options: ['4,0 e 22,3', '2,2 e 19,8', '2,3 e 36,7', '1,6 e 29,5', '1,4 e 30,2'], correctIndex: 2 },

  { id: 'pucpr_2010_014', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Medicina de Família/SUS',
    text: 'Em relação à Notificação de Acidentes por Animais Peçonhentos, é INCORRETO afirmar:',
    options: [
      'Todo acidente por animal peçonhento atendido na Unidade de Saúde deve ser notificado, independentemente de o paciente ter sido ou não submetido à soroterapia.',
      'Existe uma ficha específica de investigação do Sinan, fundamental para o estabelecimento de normas de atenção e distribuição de soros antipeçonhentos.',
      'Recomenda-se que todos os pacientes submetidos à soroterapia sejam hospitalizados para monitorar reações e avaliar a eficácia da soroterapia.',
      'O paciente deve ser avaliado minuciosamente para evitar a administração desnecessária do soro nos casos sem envenenamento ou por animais não peçonhentos.',
      'É preocupação do Ministério da Saúde garantir acesso gratuito e universal ao tratamento soroterápico. As estratégias de distribuição dos soros independem das análises epidemiológicas históricas.',
    ], correctIndex: 4 },

  { id: 'pucpr_2010_015', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'Enumere os modelos de estudo em ordem crescente de força de evidência (do mais fraco ao mais forte): ( ) Ensaio Clínico Controlado Randomizado ( ) Relato de Caso ( ) Estudos de Caso-Controle ( ) Metanálise ( ) Estudos Transversais ( ) Estudo de Coorte. Assinale a CORRETA:',
    options: ['2, 1, 4, 5, 6, 3', '5, 1, 3, 6, 2, 4', '5, 2, 4, 6, 3, 1', '6, 1, 3, 5, 4, 2', '4, 1, 3, 6, 2, 5'], correctIndex: 1 },

  { id: 'pucpr_2010_016', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'A representação gráfica apresentada refere-se a um delineamento de estudo epidemiológico (questão com imagem). Qual é o estudo?',
    options: ['Estudo de Revisão Sistemática', 'Estudo de Metanálise', 'Estudo de Coortes Múltiplas', 'Estudo de Ensaios Clínicos', 'Estudo Transversal Seccional'], correctIndex: 1 },

  { id: 'pucpr_2010_017', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'Qual das alternativas apresenta uma vantagem do estudo (metanálise) representado pela figura (questão com imagem)?',
    options: ['Potencial viés de Publicação.', 'Capacidade de síntese de informação.', 'A confiabilidade dos resultados é limitada pela qualidade dos estudos.', 'Permite ao pesquisador pouco ou nenhum controle sobre a população.', 'Acesso indireto às informações.'], correctIndex: 1 },

  { id: 'pucpr_2010_018', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'Comparação de uma vacina e um placebo: 2000 voluntários em igual risco foram separados aleatoriamente em dois grupos semelhantes; um recebeu a vacina e o outro o placebo, com observação por doze meses. Qual o correto delineamento do estudo?',
    options: ['Estudo de Coorte.', 'Estudo Caso-Controle.', 'Estudo Transversal.', 'Estudo de Ensaio Clínico Randomizado.', 'Estudo de Metanálise.'], correctIndex: 3 },

  { id: 'pucpr_2010_019', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'No ensaio clínico da vacina versus placebo (2000 voluntários) com os resultados apresentados (questão com imagem), a Taxa de Incidência dos casos da doença no grupo não vacinado foi de:',
    options: ['2%', '10%', '6%', '90%', '98%'], correctIndex: 1 },

  { id: 'pucpr_2010_020', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Epidemiologia',
    text: 'No ensaio clínico da vacina versus placebo (2000 voluntários) com os resultados apresentados (questão com imagem), escolha a alternativa com a interpretação CORRETA dos resultados:',
    options: [
      'Os resultados apontam para a utilidade do produto estudado na proteção da saúde da população.',
      'O risco relativo do estudo é igual a 0,2, ou seja, a vacina não tem utilidade na prevenção da doença.',
      'A eficácia da vacina é de 90%.',
      'A taxa de prevalência da doença é de 16%.',
      'A partir dos dados apresentados não é possível obter resultados conclusivos.',
    ], correctIndex: 0 },

  { id: 'pucpr_2010_021', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Sobre Infecção na Nutriz e o Aleitamento Materno: I. Caxumba: nutriz com infecção pelo vírus da caxumba não pode amamentar e deve ser isolada do filho. II. Doença de Chagas: o parasita pode ser excretado no leite; a contraindicação se restringe à fase aguda ou sangramento mamilar evidente. III. Hepatite B: apesar de o vírus poder ser excretado no leite, as condutas incluem vacina e imunoglobulina, sem restrição ao aleitamento. Assinale a CORRETA:',
    options: ['Todas estão corretas.', 'Apenas a II está correta.', 'I e II estão corretas.', 'Todas estão erradas.', 'II e III estão corretas.'], correctIndex: 4 },

  { id: 'pucpr_2010_022', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Na alergia alimentar é possível afirmar que:',
    options: [
      'A dieta de exclusão de alimentos alergênicos para a gestante é útil na prevenção da alergia alimentar do lactente.',
      'O teste cutâneo (Prick test) e o RAST são os testes mais sensíveis para identificar as formas com manifestações tardias.',
      'A dieta de exclusão de leite de vaca para as nutrizes pode ser útil no tratamento de manifestações alérgicas em lactentes em aleitamento materno.',
      'O leite de cabra é o alimento ideal para o tratamento da alergia ao leite de vaca.',
      'A esofagite eosinofílica é mais frequente em recém-nascidos prematuros.',
    ], correctIndex: 2 },

  { id: 'pucpr_2010_023', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'O HSV tipo 2 e o vírus varicela-zoster podem causar infecções congênitas com estigmas semelhantes. Qual dos estigmas é fortemente associado somente à varicela congênita?',
    options: ['Encefalite.', 'Hipoplasia de membros.', 'Microcefalia.', 'Lesões cutâneas vesiculares.', 'Coriorretinite.'], correctIndex: 1 },

  { id: 'pucpr_2010_024', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Na constipação intestinal em pediatria, pode-se afirmar que:',
    options: [
      'Na suspeita de doença de Hirschsprung, o enema opaco com preparo é a primeira etapa na investigação diagnóstica.',
      'O óleo mineral é o produto mais seguro e eficaz para pacientes com disfagia.',
      'A presença de reflexo inibitório retoanal na manometria anorretal confirma o diagnóstico de doença de Hirschsprung.',
      'A lactulose e o polietilenoglicol 3350 são laxantes não absorvíveis com ação osmótica.',
      'O retardo na eliminação de mecônio é uma manifestação que deve levar à suspeita de constipação funcional.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_025', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Em relação à parada cardiorrespiratória na infância, é CORRETO afirmar:',
    options: [
      'Geralmente é um evento súbito.',
      'Em 50% dos casos a parada ocorre em fibrilação ventricular.',
      'Não é adequado realizar acesso intraósseo se não se consegue acesso venoso periférico.',
      'Durante a reanimação, e estando o paciente intubado, não é necessário sincronizar as compressões torácicas com as ventilações.',
      'Após 5 minutos de reanimação, e o paciente continua em parada cardíaca, é indicada a infusão de bicarbonato de sódio.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_026', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Menino de 13 anos com baixa estatura; quadros de diarreia dos 3 anos por 1 ano, com melhora após retirada do glúten. Pais altos e saudáveis. Ao exame: estatura no P50, peso P75, IMC P75-85, pubarca grau I e testículos T2. Qual o diagnóstico mais provável?',
    options: ['Retardo constitucional de crescimento e puberdade.', 'Baixa estatura por doença anterior.', 'Baixa estatura familiar.', 'Nanismo hipofisário.', 'Paciente não apresenta alterações de crescimento.'], correctIndex: 3 },

  { id: 'pucpr_2010_027', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'No momento do diagnóstico de leucemia aguda em crianças, deve-se pesquisar o acometimento do sistema nervoso central através de que exame?',
    options: ['Exame neurológico completo.', 'Tomografia de crânio.', 'Ressonância magnética de crânio.', 'Análise do liquor.', 'Análise do liquor e ressonância magnética de crânio.'], correctIndex: 3 },

  { id: 'pucpr_2010_028', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Sobre epilepsias na infância: I. Primeira opção nas epilepsias primariamente generalizadas é o valproato/divalproato de sódio. II. A carbamazepina pode diminuir níveis de carnitina livre. III. Os espasmos infantis geralmente iniciam entre 15 e 24 meses. IV. As crises parciais respondem por grande proporção das crises infantis, até 40% em algumas séries. V. A ausência típica tem descargas generalizadas tipo espícula-onda 3 ciclos/segundo. Assinale a CORRETA:',
    options: [
      'Todas as afirmativas estão corretas.',
      'Todas as afirmativas estão incorretas.',
      'Somente as afirmativas I, II e III estão corretas.',
      'Somente as afirmativas I, IV e V estão corretas.',
      'Somente a afirmativa IV está incorreta.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_029', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Lina, 18 anos, com atividade sexual, é atendida sob garantia de confidencialidade e relata secreção vaginal purulenta; o parceiro teve diagnóstico de gonorreia. A confidencialidade do adolescente se apoia em qual das citações abaixo?',
    options: ['Código de Ética Médica do CFM, artigo 103.', 'Lei N.º 8.069/90 (ECA).', 'Norma Federal 789.', 'Constituição de 1988.', 'CES/CNE 11.33 de 2001.'], correctIndex: 0 },

  { id: 'pucpr_2010_030', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Menino de 4 anos com terceiro episódio de linfadenite cervical (S. aureus), tratados com incisão e drenagem, e história de abscesso hepático aos 2 anos. O teste laboratorial mais importante para o diagnóstico é:',
    options: ['PCR quanto à deficiência da ADA.', 'Ensaio MAC-1.', 'Nitroblue tetrazolium.', 'Contagem de Neutrófilos.', 'Aspiração de Medula óssea.'], correctIndex: 2 },

  { id: 'pucpr_2010_031', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Paciente de 4 anos com asma há 1 ano, dispneico, agitado, tiragem intercostal bilateral, murmúrio diminuído, sibilos difusos, FR 44, FC 120, fígado a 2 cm do rebordo, saturação 89% em ar ambiente. Assinale a CORRETA:',
    options: [
      'Este paciente não necessita de oxigênio.',
      'Trata-se de uma crise moderada de asma.',
      'Fazemos uma nebulização com beta 2 agonista mais corticoide e repetimos após 30 minutos se não houver melhora.',
      'Há indicação imediata de adrenalina subcutânea.',
      'Fazemos 3 inalações com beta 2 agonista mais brometo de ipratrópio a cada 20 minutos e mais corticoide sistêmico.',
    ], correctIndex: 4 },

  { id: 'pucpr_2010_032', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Assinale a alternativa VERDADEIRA em relação ao aleitamento materno:',
    options: [
      'O leite maduro de mães de prematuros possui menos lactose que o leite de mães de bebês a termo.',
      'O melhor desempenho cognitivo de crianças amamentadas é atribuído à fração proteica do leite materno.',
      'A proporção nitrogênio: calorias não proteicas do leite de vaca reduz o gasto energético do lactente para metabolizá-lo.',
      'O colostro é mais calórico e possui maior teor de vitaminas que o leite maduro.',
      'O aporte dietético de colesterol é menor em crianças que recebem leite materno do que as que recebem leite de vaca.',
    ], correctIndex: 0 },

  { id: 'pucpr_2010_033', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'A comunicação interventricular pode evoluir com fechamento espontâneo ou hipertensão pulmonar, ambos com desaparecimento do sopro. Qual o sinal clínico que melhor diferencia estas duas evoluções?',
    options: [
      'Hiperfonese da primeira bulha na área mitral.',
      'Terceira bulha na borda esternal esquerda baixa.',
      'Quarta bulha na área mitral.',
      'Segunda bulha hiperfonética na borda esternal esquerda alta.',
      'Sopro sistólico na área tricúspide.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_034', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Hemorragia, cistite, conjuntivite, pneumonia e diarreia têm demonstrado relação com infecção provocada por qual agente etiológico?',
    options: ['Vírus sincicial respiratório.', 'Rinovírus.', 'Herpes-vírus.', 'Vírus parainfluenza.', 'Adenovírus.'], correctIndex: 4 },

  { id: 'pucpr_2010_035', banca: 'PUC-PR', cycle: 'Internato', subject: 'Neonatologia',
    text: 'RN de 35 semanas, aos 5 minutos: FC 110, respiração irregular, acrocianose, movimentos de extremidades e alguma expressão facial. Após reanimação, pesou 2300 g e está taquipneico, gemente, com batimento de asa de nariz e tiragem subcostal. Assinale a CORRETA:',
    options: [
      'Seu Apgar no quinto minuto é menor que 5.',
      'A massagem cardíaca deve ser iniciada quando a FC está abaixo de 80 bpm.',
      'Hiperinsuflação, leve aumento de área cardíaca e cisurite são sinais radiológicos da taquipneia transitória do recém-nascido.',
      'Considerando peso e idade gestacional, espera-se que ele ainda não coordene sucção, deglutição e respiração.',
      'O uso de bicarbonato de sódio durante a reanimação neonatal reduz o risco de hemorragia peri-intraventricular no prematuro.',
    ], correctIndex: 2 },

  { id: 'pucpr_2010_036', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Criança normal com as habilidades: anda com apoio; solta um objeto sob comando; aproxima-se quando chamado; emite uma ou duas palavras com significado. Considerando a faixa superior de normalidade, esta criança tem:',
    options: ['6 meses de idade.', '9 meses de idade.', '12 meses de idade.', '18 meses de idade.', '24 meses de idade.'], correctIndex: 2 },

  { id: 'pucpr_2010_037', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Qual é o tratamento de escolha para crianças com leucemia mieloide crônica?',
    options: ['Busulfan.', 'Mesilato de imatinibe.', 'Interferon alfa.', 'Citarabina.', 'Transplante de medula óssea.'], correctIndex: 4 },

  { id: 'pucpr_2010_038', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Criança de 4 anos com má-absorção: Peso/Estatura = 80% de adequação e Estatura/Idade = 96%. Assinale a VERDADEIRA:',
    options: [
      'Anemia e leucopenia podem indicar deficiência de cobre.',
      'Ela é uma desnutrida de segundo grau.',
      'Esta criança possui diminuição do sódio corporal total.',
      'Neuropatia periférica, ataxia e oftalmoplegia podem indicar deficiência de vitamina B6.',
      'Na recuperação nutricional, deve-se restringir a oferta de magnésio e fósforo.',
    ], correctIndex: 0 },

  { id: 'pucpr_2010_039', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Paciente com artrite reumatoide juvenil em uso de prednisolona 20 mg/dia há 4 anos. Qual a alteração clínica ou laboratorial NÃO esperada na retirada súbita da medicação?',
    options: ['Hipotensão com volemia preservada.', 'Hipoglicemia.', 'ACTH baixo.', 'Idade óssea atrasada.', 'Hiponatremia e hiperpotassemia.'], correctIndex: 4 },

  { id: 'pucpr_2010_040', banca: 'PUC-PR', cycle: 'Internato', subject: 'Pediatria',
    text: 'Em que faixa etária a cirurgia de Jatene está mais bem indicada em um paciente com transposição simples das grandes artérias?',
    options: ['1 a 3 meses de idade.', '5 a 6 anos de idade.', '1 a 2 anos de idade.', '6 meses a 1 ano de idade.', '0 a 15 dias de vida.'], correctIndex: 4 },

  { id: 'pucpr_2010_041', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Endocrinologia',
    text: 'Homem, 55 anos, sedentário, 88 kg, 168 cm, PA 140x95. Exames: glicemia de jejum 141; colesterol total 235; HDL 22; triglicerídeos 355. Qual conduta é mais adequada?',
    options: [
      'É portador de diabetes tipo II; alteração do estilo de vida e início de Metformina devem ser aventados.',
      'A confirmação do diabetes deve ser feita com nova glicemia de jejum ou TTGO; a hipertensão também deve ser confirmada por medidas ambulatoriais em dias/horários diferentes ou pelo MAPA.',
      'Se a glicemia 120 min após dextrosol ficar entre 140-199, não possui disglicemia e nada deve ser feito; deve-se observar o tratamento da dislipidemia.',
      'A droga de escolha é o Femproporex, pois inibe o apetite e evita a absorção de 30% dos lípides.',
      'Precisa ser seguido anualmente com glicemia, lipidograma e PA, após orientação de dieta normocalórica e atividade física.',
    ], correctIndex: 1 },

  { id: 'pucpr_2010_042', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Psiquiatria',
    text: 'Sobre o quadro clínico do Transtorno Depressivo Maior: I. São critérios fundamentais humor deprimido e/ou falta de interesse/motivação e anedonia. II. Delírios de culpa e de ruína podem fazer parte da depressão psicótica. III. Sintomas de irritação e mau humor não fazem parte do quadro de depressão. Assinale:',
    options: [
      'Somente a alternativa I está correta.',
      'Somente a alternativa II está correta.',
      'Somente a alternativa III está correta.',
      'As alternativas I e II estão corretas.',
      'As alternativas II e III estão corretas.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_043', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Cardiologia',
    text: 'Mulher, 30 anos, crises recorrentes de perda de consciência e atonia postural precedidas por náuseas, zumbido e diminuição da acuidade visual, ocorrendo em pé durante o trabalho; um episódio ao acordar. Testemunhado corpo enrijecido com abalos de 15 segundos e recuperação espontânea simultânea da consciência e orientação. Principal hipótese diagnóstica?',
    options: ['Síncope neurocardiogênica.', 'Epilepsia.', 'Síncope cardiogênica.', 'Cataplexia.', 'Síncope cerebrovascular.'], correctIndex: 0 },

  { id: 'pucpr_2010_044', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Nefrologia',
    text: 'Paciente de 67 anos com angiorressonância demonstrando estenose de artéria renal direita. Qual dos critérios abaixo NÃO constitui indicação para revascularização dessa artéria?',
    options: [
      'Pressão arterial não controlada, mesmo com terapêutica anti-hipertensiva máxima.',
      'Aumento progressivo de creatinina sem outras causas aparentes.',
      'Diâmetro longitudinal do rim direito maior que 12 centímetros.',
      'Edema pulmonar recorrente ou insuficiência cardíaca congestiva.',
      'Hipercalemia grave ou aumento maior que 30% na creatinina com o uso de IECA ou BRA.',
    ], correctIndex: 2 },

  { id: 'pucpr_2010_045', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Infectologia',
    text: 'Paciente de 22 anos, 2 semanas de febre alta, cefaleia, mal-estar, anorexia, náuseas, desconforto abdominal, tosse seca e mialgia; diarreia inicial e constipação atual. FC 62, hepatoesplenomegalia discreta. Retornou há 4 semanas de intercâmbio de 6 meses na Índia, com precárias condições sanitárias. Hemograma com anemia e leucopenia; transaminases discretamente elevadas. O diagnóstico foi confirmado, mais provavelmente, através de:',
    options: ['Hemoculturas e coproculturas.', 'Gota espessa e distensão sanguínea.', 'Ultrassonografia abdominal e detecção de anti-HAV IgG e IgM.', 'Pesquisa de anticorpos para dengue.', 'Parasitológico de fezes.'], correctIndex: 0 },

  { id: 'pucpr_2010_046', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Dermatologia',
    text: 'Sobre a dermatite de contato alérgica, assinale a alternativa CORRETA:',
    options: [
      'O teste de contato não está indicado para pesquisa do agente etiológico.',
      'Após o primeiro contato com o alérgeno, dificilmente teremos a proliferação de células T de memória.',
      'O momento da realização do teste de contato depende da extensão do quadro e da atividade ou não das lesões.',
      'A lesão clínica possui aspecto padrão, sendo habitualmente micronodular.',
      'Não há envolvimento de citocinas.',
    ], correctIndex: 2 },

  { id: 'pucpr_2010_047', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Hematologia',
    text: 'Com relação à Leucemia Linfocítica Crônica (LLC), todas as afirmativas estão corretas, EXCETO:',
    options: [
      'A LLC tem baixa atividade mitótica.',
      'A deleção 17p está ligada a pior prognóstico.',
      'A deleção 13q está associada a pior prognóstico.',
      'A deleção 11q está associada a pior prognóstico.',
      'Anormalidades citogenéticas estão presentes em 40-50% dos casos de LLC.',
    ], correctIndex: 2 },

  { id: 'pucpr_2010_048', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Cardiologia',
    text: 'A respeito de quadros arrítmicos agudos, é correto afirmar:',
    options: [
      'A adenosina é a droga inicial de escolha na taquicardia ventricular estável.',
      'Oclusões da coronária esquerda e seus ramos têm mais propensão de causar bloqueios atrioventriculares do que obstruções da coronária direita.',
      'A amiodarona é um antiarrítmico da classe II e deve ser droga de escolha na fibrilação atrial crônica com aumento recente da resposta ventricular.',
      'A presença de bloqueio atrioventricular tipo Mobitz II, com QRS alargado, é indicação para uso de marcapasso.',
      'A anticoagulação na fibrilação atrial não deve ser realizada após os 65 anos, quando o risco de hemorragia passa a ser maior.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_049', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Cardiologia',
    text: 'Sobre o tratamento da insuficiência cardíaca (IC), assinale a sequência CORRETA (V/F): ( ) As causas mais comuns de IC são cardiomiopatia dilatada, isquêmica, hipertensiva e doença de Chagas (Brasil). ( ) Redução de peso, controle de HAS, DM e etilismo e correção de fatores de risco são objetivos importantes. ( ) IECA e betabloqueadores não demonstraram melhora de sobrevida e não devem ser usados na IC. ( ) O uso de diuréticos não representa boa escolha na IC pelo risco de depleção volêmica.',
    options: ['V – V – F – V', 'F – V – F – V', 'F – V – F – F', 'V – V – F – F', 'V – V – V – V'], correctIndex: 3 },

  { id: 'pucpr_2010_050', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Endocrinologia',
    text: 'Mulher, 48 anos, dislipidemia em uso de sinvastatina, menopausa há 2 anos, ganho de peso, desânimo, cefaleia; história familiar de D. de Graves; pele/cabelos ressecados, unhas quebradiças. Exames: colesterol total 262, LDL 178, HDL 34, TG 182, TSH 9,2 (VN 0,4-4,0) e T4 livre 0,95 (VN 0,8-1,9). Qual o procedimento INCORRETO?',
    options: [
      'A paciente é portadora de hipotireoidismo subclínico e o tratamento deve ser feito com levotiroxina.',
      'A dose de levotiroxina deve ser baseada na idade e nos níveis de TSH e T4 livre.',
      'O tratamento se baseia na supressão dos níveis de TSH.',
      'A dislipidemia pode ser um dos sinais da disfunção tireoidiana, elevando o risco cardiovascular.',
      'O ajuste das doses de levotiroxina é feito com base em TSH e T4 livre, dosados entre 6 e 8 semanas do início do tratamento.',
    ], correctIndex: 2 },

  { id: 'pucpr_2010_051', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Farmacologia',
    text: 'Qual dos antimicrobianos abaixo apresenta como efeito desfavorável a ginecomastia?',
    options: ['Nitrofurantoína.', 'Tetraciclinas.', 'Sulfonamidas.', 'Cloranfenicol.', 'Cetoconazol.'], correctIndex: 4 },

  { id: 'pucpr_2010_052', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Nefrologia',
    text: 'Quadro de início abrupto de edema, síndrome nefrótica, sedimento urinário acelular e glomérulo com fusão/esfacelamento de podócitos à microscopia eletrônica. O diagnóstico mais provável é:',
    options: ['Glomeruloesclerose segmentar e focal.', 'Glomerulopatia de lesões mínimas.', 'Nefropatia membranosa.', 'Glomerulonefrite membranoproliferativa.', 'Amiloidose renal.'], correctIndex: 1 },

  { id: 'pucpr_2010_053', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Psiquiatria',
    text: 'Marque V/F e assinale a sequência CORRETA: ( ) O ataque de pânico pode ocorrer sem fator desencadeante, inclusive durante o sono. ( ) ISRS e IRSN devem ser evitados no tratamento do TOC. ( ) Medo exagerado de ser humilhado em situações sociais ocorre na Fobia Simples. ( ) O TAG apresenta ansiedade persistente que afeta variedade de situações cotidianas. ( ) Pensamentos e sonhos recorrentes sobre evento traumático, com reatividade fisiológica, ocorrem no TOC.',
    options: ['V, V, F, F, F.', 'F, F, V, V, F.', 'F, V, V, F, V.', 'F, F, F, V, V.', 'V, F, F, V, F.'], correctIndex: 4 },

  { id: 'pucpr_2010_054', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Dermatologia',
    text: 'Sobre a mastocitose, assinale a alternativa CORRETA:',
    options: [
      'A urticária pigmentosa é a forma mais comum de mastocitose.',
      'A histopatologia dificilmente ajuda no diagnóstico.',
      'O prognóstico da mastocitose que surge na infância é pior do que a que surge no adulto.',
      'Em 80% dos pacientes existe envolvimento sistêmico.',
      'Na criança, a biópsia de medula óssea é prática de rotina para elucidação diagnóstica.',
    ], correctIndex: 0 },

  { id: 'pucpr_2010_055', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Reumatologia',
    text: 'Homem, 28 anos, febre vespertina, esplenomegalia, derrame pleural esquerdo, artrite de cotovelo e punho, há 45 dias. Leucocitose 25.000; VHS 75; Látex e FAN negativos. Sem melhora com ceftriaxona e ciprofloxacina; sem diarreia ou infecção urogenital prévias. O melhor diagnóstico é:',
    options: ['Artrite gonocócica.', 'Artrite reativa.', 'Doença de Still do adulto.', 'Lúpus eritematoso sistêmico.', 'Artrite reumatoide.'], correctIndex: 2 },

  { id: 'pucpr_2010_056', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Cardiologia',
    text: 'É CORRETO afirmar sobre dissecção aórtica do tipo A:',
    options: [
      'É menos prevalente do que a do tipo B.',
      'É contraindicado o uso de betabloqueador no manejo clínico.',
      'É doença de tratamento eminentemente clínico, equivalente ao tratamento cirúrgico.',
      'Insuficiência aórtica é fenômeno incomum e acontece em menos de 5% dos casos.',
      'O alargamento da silhueta mediastinal é o achado mais comum na radiografia de tórax.',
    ], correctIndex: 4 },

  { id: 'pucpr_2010_057', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Hematologia',
    text: 'Afirmamos que o paciente é portador de anemia aplástica grave quando apresenta medula óssea hipocelular com hemograma mostrando:',
    options: [
      'Neutrófilos: <500/ul; Plaquetas: <20.000/ul; Reticulócitos corrigidos: <1%.',
      'Neutrófilos: <500/ul; Plaquetas: 40.000/ul; Reticulócitos corrigidos: 60.000/ul.',
      'Neutrófilos: 1.000/ul; Plaquetas: 50.000/ul; Reticulócitos corrigidos: <20.000/ul.',
      'Neutrófilos: >1500/ul; Plaquetas: <20.000/ul; Reticulócitos corrigidos: 50.000/ul.',
      'Neutrófilos: >1.000/ul; Plaquetas: 150.000/ul; Reticulócitos corrigidos: 2%.',
    ], correctIndex: 0 },

  { id: 'pucpr_2010_058', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Reumatologia',
    text: 'Qual dos exames abaixo é considerado critério imunológico específico para Lúpus Eritematoso Sistêmico?',
    options: ['F.A.N.', 'Anti-DNA.', 'Anticardiolipina.', 'Anti-SSA.', 'Anti-SSB.'], correctIndex: 1 },

  { id: 'pucpr_2010_059', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Pneumologia',
    text: 'Sobre o tratamento da asma, o que é literalmente CORRETO?',
    options: [
      'Tratamento apenas das crises e tratamento contínuo com anti-inflamatórios sempre trazem os mesmos resultados.',
      'Não há necessidade de tratamento profilático; como a doença é totalmente reversível, nunca haverá sequelas funcionais mesmo tratando apenas as crises.',
      'A educação em asma e o estímulo à adesão são partes fundamentais no tratamento, com o mesmo peso de importância que receitar medicamentos apropriados.',
      'O tratamento profilático melhora a qualidade de vida, porém não diminui a chance de óbito por asma aguda.',
      'Os antileucotrienos orais têm a mesma eficácia na asma persistente moderada que os corticosteroides inalados em adultos.',
    ], correctIndex: 2 },

  { id: 'pucpr_2010_060', banca: 'PUC-PR', cycle: 'Ciclo Básico', subject: 'Farmacologia',
    text: 'Qual dos antibióticos abaixo NÃO apresenta como sítio de ação a síntese do ácido nucleico?',
    options: ['Rifampicina.', 'Quinolonas.', 'Metronidazol.', 'Clindamicina.', 'Sulfonamidas.'], correctIndex: 3 },

  { id: 'pucpr_2010_061', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'O fórcipe baixo tem várias indicações na clínica obstétrica. Em que situações seu emprego está indicado?',
    options: [
      'Desproporção fetopélvica / prematuridade / discinesia.',
      'Cicatriz de histerotomia / falha na insinuação / sofrimento fetal.',
      'Colo dilatável / concepto morto / estafa materna.',
      'Extração da cabeça derradeira / parada de progressão no plano -1 de De Lee / hipossistolia uterina.',
      'Parada de progressão no estreito inferior / cicatriz de cesariana / cardiopatia materna.',
    ], correctIndex: 4 },

  { id: 'pucpr_2010_062', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Uma vez confirmado o diagnóstico de sífilis no pré-natal, o tratamento deve ser iniciado:',
    options: [
      'Após a 16ª semana de gestação, quando a placenta permite a passagem do treponema para o feto.',
      'Após a 12ª semana de gestação, para evitar o efeito teratogênico da medicação sobre o embrião.',
      'Após o parto, a fim de evitar a passagem transplacentária dos medicamentos.',
      'Tão logo confirmado o diagnóstico, independentemente da idade gestacional.',
      'A sorologia positiva no sangue do cordão umbilical ratifica o diagnóstico de sífilis congênita.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_063', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'A Alfafetoproteína (AFP) é utilizada no rastreamento de algumas complicações fetais porque:',
    options: [
      'está aumentada na Síndrome de Down e na anencefalia.',
      'está diminuída na Síndrome de Down e na anencefalia.',
      'está aumentada na Síndrome de Down e diminuída na anencefalia.',
      'está diminuída na Síndrome de Down e aumentada na anencefalia.',
      'valores acima de 2,5 múltiplos da mediana (MoM) afastam suspeita de defeitos do tubo neural.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_064', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Quais drogas estão formalmente contraindicadas durante o ciclo gravídico por serem responsáveis por efeitos adversos ao feto?',
    options: ['Sulfas e eritromicina.', 'Cefalotina e tetraciclina.', 'Metronidazol e estreptomicina.', 'Sulfa e cloranfenicol.', 'Sulfa e tetraciclina.'], correctIndex: 4 },

  { id: 'pucpr_2010_065', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Mulher, 37 anos, 2 filhos, sem desejo de gravidez, anemia moderada e ciclos hipermenorrágicos. USG: mioma intramural de 40 cm³ e outro submucoso de 35 cm³. Qual a melhor conduta?',
    options: [
      'Histeroscopia para exérese de mioma submucoso.',
      'Análogo de GnRH.',
      'Progestogênio contínuo.',
      'Histeroscopia para exérese de mioma submucoso e videolaparoscopia para exérese de mioma intramural.',
      'Histerectomia total.',
    ], correctIndex: 4 },

  { id: 'pucpr_2010_066', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Para o tratamento farmacológico de endometriose pélvica leve à moderada, emprega-se:',
    options: ['Estrogênio.', 'Metotrexato.', 'Análogo de GnRH.', 'Espironolactona.', 'Danazol.'], correctIndex: 2 },

  { id: 'pucpr_2010_067', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Teratoma cístico benigno (cisto dermoide) é comum em pacientes:',
    options: ['Perimenopausadas.', 'Adolescentes.', 'Pós-menopausadas.', 'Idosas.', 'Pós-climatéricas.'], correctIndex: 1 },

  { id: 'pucpr_2010_068', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Mulher, 20 anos, avaliação pré-concepcional, gânglios cervicais posteriores e mal-estar há 3 semanas. Exames normais, exceto Toxoplasmose IgM reagente, complementada com teste de avidez de IgG com avidez fraca. Qual o melhor procedimento?',
    options: [
      'Solicitar IgA específico para toxoplasmose.',
      'Iniciar tratamento com ampicilina entre 4 a 6 semanas e, após mais 3 semanas, liberar para gravidez.',
      'Solicitar nova sorologia para toxoplasmose (IgG e IgM) e liberar para gravidez.',
      'Iniciar tratamento com sulfadiazina e pirimetamina entre 4 a 6 semanas e, após mais 3 semanas, liberar para gravidez.',
      'Nada a fazer, pois já está imune.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_069', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Gestante de alto risco realiza cardiotocografia anteparto com oscilações dos BCF de amplitude entre 5 e 10 bpm e frequência inferior a 2 por minuto, não respondendo a estímulos. É possível interpretar a CTG como:',
    options: [
      'Padrão silencioso, feto terminal.',
      'Padrão ondulatório, normal, feto reativo.',
      'Padrão saltatório, indicando maior solicitação da hemodinâmica fetal.',
      'Padrão comprimido, feto dormindo ou sob ação de fármacos depressores do SNC.',
      'Padrão vagal devido à insinuação da cabeça fetal.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_070', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Mulher, 30 anos, mastalgia em mama D, mamas densas sem nódulos palpáveis. Mamografia e USG (Bi-Rads III): 3 cistos regulares (0,9 e 1,4 cm em mama E; 3,8 cm em mama D). Qual a melhor conduta?',
    options: [
      'PAAF no cisto da mama D, com exame citopatológico do líquido.',
      'Core biopsy dos cistos, com exame citopatológico.',
      'Anti-inflamatório e USG semestral.',
      'Vitamina E e mamografia semestral.',
      'Exérese cirúrgica do cisto em mama D.',
    ], correctIndex: 0 },

  { id: 'pucpr_2010_071', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'O diabetes gestacional tem repercussões sobre a gravidez, estando associado, na segunda metade da gestação, geralmente com:',
    options: ['Pós-maturidade.', 'Oligodrâmnio.', 'Aumento da insulinemia fetal.', 'Obesidade.', 'Redução da insulinemia materna.'], correctIndex: 2 },

  { id: 'pucpr_2010_072', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Todas as afirmativas abaixo estão incorretas, com EXCEÇÃO de:',
    options: [
      'A placenta prévia é mais comum em nulíparas que em multíparas.',
      'Na placenta prévia, o sangramento é geralmente doloroso e vermelho vivo.',
      'No descolamento prematuro de placenta, a hemorragia vaginal geralmente é repetitiva e gradativa.',
      'As gestantes com patologias hipertensivas são mais predispostas ao descolamento prematuro de placenta que as normotensas.',
      'A hipertonia uterina serve para caracterizar o diagnóstico diferencial entre placenta prévia e ruptura uterina.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_073', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Gestante, 19 anos, 10ª semana, dor em baixo ventre e sangramento vaginal de pequena intensidade. Ao toque: útero aumentado e orifício cervical interno com 1,5 cm de dilatação. Beta-hCG positivo. Diagnóstico e conduta, respectivamente?',
    options: [
      'Incompetência istmocervical; cerclagem cervical.',
      'Ameaça de abortamento; prescrever repouso, sedação e uterolíticos.',
      'Abortamento em curso; realizar esvaziamento uterino.',
      'Mola hidatiforme; realizar vácuo-aspiração.',
      'Abortamento retido; realizar histeroscopia.',
    ], correctIndex: 2 },

  { id: 'pucpr_2010_074', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'A indicação de operação cesariana é absoluta quando se tem o seguinte quadro:',
    options: [
      'Apresentação pélvica em primigesta, 40 semanas, feto vivo, trabalho de parto.',
      'Gestante em trabalho de parto, 39 semanas, apresentação cefálica, bolsa rota, líquido meconial, feto vivo.',
      'Gestante em trabalho de parto com placenta prévia oclusiva total, feto morto, 35 semanas.',
      'Gestante em trabalho de parto, feto morto, 6 cm de dilatação e descolamento prematuro de placenta no transcurso do trabalho de parto.',
      'Gestante nulípara, virgem, com VDRL positivo.',
    ], correctIndex: 2 },

  { id: 'pucpr_2010_075', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Numa bacia ginecoide normal, as medidas das conjugatas vera anatômica, diagonalis e vera obstétrica são 12 cm, 11 cm e 10,5 cm. Correlacione a quais conjugatas pertencem essas medidas:',
    options: [
      'Vera anatômica = 12 cm; vera obstétrica = 11 cm; diagonalis = 10,5 cm.',
      'Vera anatômica = 12 cm; vera obstétrica = 10,5 cm; diagonalis = 11 cm.',
      'Vera anatômica = 11 cm; vera obstétrica = 12 cm; diagonalis = 10,5 cm.',
      'Vera anatômica = 11 cm; vera obstétrica = 10,5 cm; diagonalis = 12 cm.',
      'Vera anatômica = 10,5 cm; vera obstétrica = 11 cm; diagonalis = 12 cm.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_076', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'A Chlamydia trachomatis, um parasita intracelular, pode ser cultivada em cultura de células do tipo:',
    options: ['Thayer-Martin.', 'Nicolas-Favre.', 'McCoy.', 'MacConkey.', 'Fletcher.'], correctIndex: 2 },

  { id: 'pucpr_2010_077', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Para manter o aparelho genital em sua topografia normal, é necessária a integridade dos aparelhos de sustentação e suspensão do assoalho pélvico, caracterizados por:',
    options: [
      'Diafragma pélvico, retinaculum uteri e fáscia endopélvica.',
      'Fáscia endopélvica, diafragma pélvico e músculo transverso profundo.',
      'Diafragma pélvico, músculo elevador do ânus.',
      'Retinaculum uteri, fáscia endopélvica e músculo elevador profundo do ânus.',
      'Diafragma pélvico, esfíncter estriado do ânus, aponeurose do músculo reto abdominal.',
    ], correctIndex: 0 },

  { id: 'pucpr_2010_078', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Sobre a fisiopatologia da síndrome dos ovários policísticos: I. Estimulação da esteroidogênese ovariana pela insulina. II. Estimulação da síntese hepática de SHBG pela insulina. III. Níveis elevados de estrona por conversão periférica. IV. Menor sensibilidade hipofisária ao GnRH na secreção de LH. Assinale a CORRETA:',
    options: ['I, II e III estão corretas.', 'I e III estão corretas.', 'II e IV estão corretas.', 'Apenas a IV está correta.', 'Todas estão incorretas.'], correctIndex: 1 },

  { id: 'pucpr_2010_079', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'O tratamento indicado para o carcinoma de endométrio, estádio clínico I, é:',
    options: [
      'Hormonioterapia exclusiva.',
      'Histerectomia total abdominal e anexectomia bilateral.',
      'Histerectomia total e radioterapia complementar.',
      'Histerectomia total abdominal, anexectomia bilateral e retirada do terço superior da vagina.',
      'Histerectomia total abdominal e hormonioterapia.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_080', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ginecologia & Obstetrícia',
    text: 'Em relação aos contraceptivos hormonais orais, a alternativa CORRETA é:',
    options: [
      'Diminuem o risco de neoplasia trofoblástica gestacional.',
      'Diminuem a secreção de SHBG.',
      'Aumentam a incidência de alterações funcionais benignas da mama.',
      'Aumentam o risco de doenças sexualmente transmissíveis.',
      'Diminuem as lipoproteínas.',
    ], correctIndex: 0 },

  { id: 'pucpr_2010_081', banca: 'PUC-PR', cycle: 'Internato', subject: 'Urologia',
    text: 'Sobre o tratamento do cálculo urinário com novas tecnologias (LECO, cirurgia percutânea e ureteroscópica), assinale a CORRETA:',
    options: [
      'Cálculo duro, cálculo coraliforme e cálculo de infecção estão entre as indicações de cirurgia percutânea.',
      'A litotripsia extracorpórea é o atual principal tratamento nos cálculos renais maiores de 3 cm.',
      'A ureterolitotripsia intracorpórea é reservada para cálculos ureterais de grande tamanho com infecção urinária.',
      'A abordagem inicial do cálculo ureteral, independente do tamanho, deve ser a ureteroscopia para evitar a dor da cólica renal.',
      'Não existe atualmente justificativa para o acesso aberto no tratamento de cálculo do trato urinário.',
    ], correctIndex: 0 },

  { id: 'pucpr_2010_082', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ortopedia',
    text: 'Na Classificação de Salter-Harris, a combinação entre lesão fisária e fratura intra-articular corresponde ao tipo:',
    options: ['I', 'II', 'III', 'IV', 'V'], correctIndex: 2 },

  { id: 'pucpr_2010_083', banca: 'PUC-PR', cycle: 'Internato', subject: 'Urologia',
    text: 'Sobre a hiperplasia prostática benigna, assinale a alternativa CORRETA:',
    options: [
      'A maior forma de androgênio encontrada na próstata é a testosterona.',
      'Estudos em autópsia demonstram que a partir dos 35 anos inicia-se o crescimento microscópico da próstata.',
      'Sintomas do trato urinário baixo (LUTS) são específicos da hiperplasia prostática.',
      'O aumento da zona periférica da próstata é o principal fator da obstrução urinária no homem idoso.',
      'A castração de homens idosos favorece o aumento de volume prostático.',
    ], correctIndex: 1 },

  { id: 'pucpr_2010_084', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ortopedia',
    text: 'No trauma raquimedular, o retorno do reflexo bulbocavernoso indica:',
    options: ['Que terminou o choque medular.', 'O nível da lesão medular.', 'Que a sensibilidade está inalterada.', 'Que o nível motor está inalterado.', 'Que não haverá recuperação motora.'], correctIndex: 0 },

  { id: 'pucpr_2010_085', banca: 'PUC-PR', cycle: 'Internato', subject: 'Cirurgia Geral',
    text: 'São fatores sistêmicos que interferem na cicatrização de partes moles, EXCETO:',
    options: ['Hipertireoidismo.', 'Diabetes mellitus.', 'Alterações da coagulação.', 'Insuficiência hepática.', 'Tabagismo.'], correctIndex: 0 },

  { id: 'pucpr_2010_086', banca: 'PUC-PR', cycle: 'Internato', subject: 'Ortopedia',
    text: 'Quanto à anatomia patológica das fraturas do colo do fêmur, é CORRETO afirmar:',
    options: [
      'As fraturas subcapitais e mediocervicais são intracapsulares.',
      'A principal irrigação da cabeça do fêmur é feita pelos vasos retinaculares que penetram pela cabeça.',
      'Quanto mais proximal for a fratura, melhor será o prognóstico.',
      'As fraturas basocervicais são mal vascularizadas.',
      'As fraturas com traços intra-articulares têm bom prognóstico.',
    ], correctIndex: 0 },

  { id: 'pucpr_2010_087', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Pneumologia',
    text: 'Qual o germe mais comumente associado ao abscesso pulmonar?',
    options: ['Bacteroides fragilis.', 'Streptococcus beta-hemolítico.', 'Staphylococcus aureus.', 'Streptococcus pneumoniae.', 'Klebsiella pneumoniae.'], correctIndex: 2 },

  { id: 'pucpr_2010_088', banca: 'PUC-PR', cycle: 'Internato', subject: 'Urologia',
    text: 'Sobre os tumores germinativos de testículo (mais comuns dos 15 aos 35 anos), assinale a alternativa CORRETA:',
    options: [
      'O testículo criptorquídico não parece ser um fator de risco para este tumor.',
      'As dosagens alteradas de alfafetoproteína selam o diagnóstico de seminoma testicular.',
      'A biópsia transescrotal de testículo é o método de eleição para elucidação diagnóstica.',
      'O exame de imagem mais indicado na avaliação de massas escrotais é o ultrassom.',
      'A orquiectomia é reservada para tumores que não respondam ao tratamento quimioterápico.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_089', banca: 'PUC-PR', cycle: 'Internato', subject: 'Cirurgia Geral',
    text: 'O retalho que respeita uma proporção entre o comprimento e a largura, a fim de evitar a necrose de sua parte mais distal, é chamado:',
    options: ['Randomizado.', 'Axial.', 'De transposição.', 'Tubular.', 'Em ilha.'], correctIndex: 0 },

  { id: 'pucpr_2010_090', banca: 'PUC-PR', cycle: 'Internato', subject: 'Urgência e Emergência',
    text: 'Politraumatizado, 35 anos, atropelamento; FAST positivo e instabilidade indicaram laparotomia (laceração hepática grau III, contusão pancreática grau I, lesão de delgado grau II, todas tratadas). Na UTI: PAM 82; PIA 20; gasometria (BE -11, PCO2 38, PO2 95, HCO3 21); lactato 3; creatinina 1,6. Qual a melhor conduta?',
    options: [
      'Nova cirurgia abdominal mandatória, pois PIA maior que 20 indica síndrome compartimental abdominal.',
      'Manter reanimação volêmica (provavelmente com hemoderivados); se necessário, drogas vasopressoras, e manter aferição da PIA a cada 4 horas.',
      'Esse paciente deve ser operado se a PPA (pressão de perfusão abdominal) for menor que 50.',
      'As respostas A e B são corretas.',
      'As respostas B e C são corretas.',
    ], correctIndex: 4 },

  { id: 'pucpr_2010_091', banca: 'PUC-PR', cycle: 'Ciclo Clínico', subject: 'Endocrinologia',
    text: 'Sobre a semiologia e a avaliação laboratorial da glândula tireoide:',
    options: [
      'A tireoglobulina, produto secretado pela glândula tireoide, é o principal componente do coloide dos folículos tireoideanos.',
      'A calcitonina é produzida e secretada pelas células parafoliculares (células C), originárias da crista neural ectodérmica.',
      'A determinação da concentração do TSH é o exame de valor mais fidedigno na avaliação da funcionalidade da glândula tireoide e é o principal para o diagnóstico das disfunções tireoidianas.',
      'As respostas A e C são corretas.',
      'As respostas A, B e C são corretas.',
    ], correctIndex: 4 },

  { id: 'pucpr_2010_092', banca: 'PUC-PR', cycle: 'Internato', subject: 'Urgência e Emergência',
    text: 'Na avaliação inicial do politraumatizado, podemos afirmar que são causas com risco imediato de morte na avaliação das lesões torácicas:',
    options: [
      'O pneumotórax hipertensivo, o pneumotórax aberto e as lesões transfixantes do mediastino.',
      'O hemotórax maciço, tórax instável e a ruptura traumática da aorta.',
      'A obstrução de vias aéreas, o pneumotórax hipertensivo e o pneumotórax aberto.',
      'As respostas A e B são corretas.',
      'As respostas A, B e C são corretas.',
    ], correctIndex: 2 },

  { id: 'pucpr_2010_093', banca: 'PUC-PR', cycle: 'Internato', subject: 'Urologia',
    text: 'O câncer de bexiga é o segundo câncer mais comum do trato geniturinário. Assinale a alternativa CORRETA:',
    options: [
      'Urotélio é a denominação mais comum do tumor de bexiga de baixo grau.',
      'Exposição contínua a aminas aromáticas e anilinas relaciona-se ao Ca de bexiga.',
      'A interrupção do tabagismo imediatamente elimina o risco de tumor de bexiga.',
      'PSA também é um bom marcador no tumor vesical.',
      'Evita-se a ressecção endoscópica do tumor de bexiga pelo risco de disseminação tumoral.',
    ], correctIndex: 1 },

  { id: 'pucpr_2010_094', banca: 'PUC-PR', cycle: 'Internato', subject: 'Cirurgia Geral',
    text: 'Sobre o melanoma, julgue: I. O diagnóstico clínico precoce é o mais importante fator para o sucesso do tratamento (regra do ABCD). II. A OMS classifica o melanoma em fases de crescimento radial e vertical; no radial encontra-se o melanoma nodular; no vertical, o superficial, acral lentiginoso, lentigo maligno e in situ. III. O tratamento é multidisciplinar após sistematização composta apenas por diagnóstico clínico e estadiamento. IV. Na biópsia, a amostra deve ir até o tecido celular subcutâneo, pois a espessura vertical é o valor preditivo mais importante. Assinale:',
    options: [
      'Todas as afirmações são verdadeiras.',
      'Apenas I, II e IV são verdadeiras.',
      'Apenas I e IV são verdadeiras.',
      'Apenas I, III e IV são verdadeiras.',
      'Apenas IV é verdadeira.',
    ], correctIndex: 2 },

  { id: 'pucpr_2010_095', banca: 'PUC-PR', cycle: 'Internato', subject: 'Urgência e Emergência',
    text: 'Homem de 34 anos, 80 kg, queimadura há 3 horas: 1º grau em face anterior de MSD e MID; 2º e 3º grau em tronco anterior, MSE e face anterior de MIE incluindo períneo. Estime a reposição volêmica segundo a fórmula de Parkland:',
    options: [
      'Aproximadamente 7.400 ml nas próximas 8 horas e mais 7.400 ml em outras 16 horas.',
      'Aproximadamente 18.500 ml em 24 horas, metade nas primeiras 8 horas e o restante nas demais 16 horas.',
      'Aproximadamente 9.500 ml nas próximas 8 horas e mais 9.500 ml em outras 16 horas.',
      'Aproximadamente 7.400 ml nas próximas 5 horas e mais 7.400 ml em outras 16 horas.',
      'Aproximadamente 9.500 ml nas próximas 5 horas e mais 9.500 ml em outras 16 horas.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_096', banca: 'PUC-PR', cycle: 'Internato', subject: 'Cirurgia Geral',
    text: 'Sobre o Transplante Pancreático, é INCORRETO afirmar:',
    options: [
      'O transplante duplo rim-pâncreas é indicado sobretudo para diabéticos tipo II com insuficiência renal crônica.',
      'O transplante isolado de pâncreas está indicado em diabéticos tipo I, com função renal normal e 2 ou mais complicações secundárias.',
      'A drenagem exócrina pode ser feita tanto na bexiga quanto em alça delgada.',
      'Outra indicação do transplante solitário de pâncreas é o diabetes hiperlábil.',
      'A vascularização do enxerto pancreático é feita por ramos da esplênica e da mesentérica superior.',
    ], correctIndex: 0 },

  { id: 'pucpr_2010_097', banca: 'PUC-PR', cycle: 'Internato', subject: 'Cirurgia Geral',
    text: 'Em relação ao Transplante Intestinal, é CORRETO afirmar:',
    options: [
      'São indicações no adulto: trombose mesentérica, trauma e doença de Crohn, com dependência completa à nutrição parenteral.',
      'São indicações em crianças: gastrosquise, atresia intestinal e outras, também com dependência à alimentação parenteral.',
      'A solução de conservação do enxerto é a solução de Wisconsin.',
      'Um dos principais problemas imunológicos é a reação do enxerto versus hospedeiro (tipo específico de rejeição).',
      'Todas as alternativas anteriores estão corretas.',
    ], correctIndex: 4 },

  { id: 'pucpr_2010_098', banca: 'PUC-PR', cycle: 'Internato', subject: 'Cirurgia Geral',
    text: 'São indicações de cirurgia na pancreatite crônica, MENOS:',
    options: ['Dor severa persistente.', 'Obstrução da veia esplênica com hipertensão portal.', 'Esteatorreia.', 'Obstrução colônica.', 'Suspeita de câncer pancreático.'], correctIndex: 2 },

  { id: 'pucpr_2010_099', banca: 'PUC-PR', cycle: 'Internato', subject: 'Cirurgia Geral',
    text: 'Sobre o insulinoma, é correto afirmar, EXCETO:',
    options: [
      'É o tumor neuroendócrino mais comum das ilhotas pancreáticas e é originário das células beta.',
      'As manifestações mais comuns são a Tríade de Whipple (hipoglicemia, glicose sérica abaixo de 50 mg/dL e alívio dos sintomas com glicose).',
      'Na maior parte das vezes, após localização intraoperatória, é passível de simples enucleação, sendo menos comum a necessidade de grandes ressecções.',
      'A maior parte destes tumores tem comportamento maligno e agressivo.',
      'A maior parte destes tumores é solitária.',
    ], correctIndex: 3 },

  { id: 'pucpr_2010_100', banca: 'PUC-PR', cycle: 'Internato', subject: 'Cirurgia Geral',
    text: 'Sobre o câncer de vesícula biliar, é CORRETO afirmar:',
    options: [
      'São tumores geralmente de bom prognóstico.',
      'A cirurgia de eleição é a Hepp-Couinaud.',
      'É controverso que, além da colecistectomia, procedimentos complementares de hepatectomia sejam comprovadamente superiores à colecistectomia isolada para tumores a partir de T2 em termos de ganho de sobrevida.',
      'A sobrevida em cinco anos dos pacientes T2 é de 80%.',
      'A diferença entre os sintomas clínicos do tumor de vesícula T1 e a colelitíase é evidente, sendo de fácil diagnóstico pré-operatório.',
    ], correctIndex: 2 },
];
