# Game Design Document: Alien Resistance

## 1. Visão Geral

### 1.1. Conceito Principal

"Alien Resistance" (título provisório) é um jogo de estratégia de turnos onde o jogador controla um time de soldados rebeldes tentando resistir a uma massiva invasão alienígena no planeta Terra.

Ao contrário de jogos como XCOM, não há uma organização centralizada orientando os rebeldes. Os protagonistas são pessoas comuns, forçadas pelas circunstâncias a lutar, que se especializam e evoluem ao longo da jornada.

### 1.2. Público-Alvo

O jogo é destinado a fãs de longa data do gênero de estratégia em turnos (hardcore), que apreciam profundidade tática, planejamento a longo prazo e um alto nível de desafio.

### 1.3. Diferenciais (Unique Selling Points)

- **Vínculo com Personagens Procedurais:** Os soldados são gerados proceduralmente, mas com características e histórias únicas, criando um forte vínculo emocional. A morte permanente (permadeath) de um deles é um evento significativo e doloroso para o jogador.

- **Gerenciamento de Recursos com Risco vs. Recompensa:** O sistema de recursos é projetado para agradar a dois perfis de jogadores hardcore:
    - **Jogadores de Alto Risco:** A dificuldade aumenta com o passar do tempo, incentivando um progresso rápido e decisões ousadas.
    - **Jogadores Metódicos (Grind):** Há a opção de jogar de forma mais lenta, acumulando recursos através de esforço contínuo para se preparar melhor para os desafios, transformando esforço em recompensa.

## 2. Mecânicas de Jogo

### 2.1. Core Gameplay Loop

O ciclo de jogo principal é inspirado em clássicos do gênero como XCOM 2 e consiste nos seguintes passos:

1.  **Gerenciar a Base:** O jogador toma decisões estratégicas, gerencia recursos e desenvolve seus soldados entre as missões.
2.  **Selecionar Missão:** O jogador escolhe uma missão ou evento de interesse em um mapa global, ponderando riscos e recompensas.
3.  **Combate Tático:** O jogador entra em um cenário de combate em turnos com seu esquadrão para cumprir os objetivos.
4.  **Coletar Recompensas:** Após a missão, o jogador coleta recursos, informações e, ocasionalmente, recruta novos membros para a resistência.
5.  **Retornar à Base:** O ciclo recomeça, com o jogador utilizando as recompensas da missão para fortalecer sua equipe e expandir suas operações.

### 2.2. Gerenciamento da Base

A base de operações é o coração estratégico do jogo. Nela, o jogador poderá construir e gerenciar diversas instalações, incluindo:

- **Oficina:** Fabricar e melhorar armas, armaduras e itens.
- **Enfermaria:** Curar soldados feridos e lidar com traumas psicológicos.
- **Recrutamento:** Gerenciar e atrair novos rebeldes para a causa.
- **Pesquisa:** Analisar tecnologia alienígena para desbloquear novas capacidades.
- **Defesas da Base:** Construir e melhorar defesas para repelir ataques inimigos ao esconderijo.
- **Produção de Recursos:** Gerenciar a geração de energia, produção de alimentos e outros suprimentos vitais.
- **Hangar/Garagem:** Construir e manter veículos para uso tático.
- **Memorial:** Um local para honrar os soldados caídos, concedendo um bônus de moral ou determinação aos sobreviventes.
- **Rede de Inteligência:** Gerenciar uma rede de contatos para encontrar missões, recursos e informações sobre o inimigo.
- **Gestão de Moral:** Um sistema para monitorar o estado psicológico da equipe, afetado por perdas, vitórias e escassez.

### 2.3. Combate Tático

#### 2.3.1. Sistema de Pontos de Ação (Action Points)

O jogo utilizará um sistema de Pontos de Ação (AP) que combina a simplicidade do modelo de 2 ações com a possibilidade de expansão e flexibilidade tática:

- **Pool de Ações:** Cada unidade possui uma quantidade de Pontos de Ação por turno. Soldados iniciantes começam com **2 AP**.
- **Custo das Ações:** A maioria das ações padrão (mover, atirar, usar uma habilidade básica) custa **1 AP**. Ações mais poderosas ou complexas podem ter um custo maior (ex: 2 AP ou mais).
- **Progressão:** A quantidade máxima de AP de um soldado pode ser aumentada permanentemente através de habilidades de classe, evolução de atributos ou equipamentos especiais.
- **Sem Fim de Turno Automático:** Nenhuma ação encerra o turno da unidade automaticamente. O jogador pode continuar realizando ações até que seus Pontos de Ação se esgotem, permitindo combinações como `Atirar -> Mover` ou `Mover -> Atirar -> Usar item`.

#### 2.3.2. Sistema de Cobertura Percentual

Abandonando o sistema binário de meia/total cobertura, o jogo usará um sistema percentual mais granular e realista:

- **Redução de Chance de Acerto:** Cada objeto no cenário que pode ser usado como cobertura oferece uma porcentagem de redução na chance de acerto do inimigo (ex: uma árvore fina pode oferecer 25%, um pilar de concreto 60%, etc.).
- **Cálculo Dinâmico:** A eficácia da cobertura depende do ângulo do ataque. Um tiro pelas costas ou flanco de um inimigo ignora completamente o bônus de cobertura do objeto.
- **Ambiente Destrutível:** A cobertura não é permanente. Armas e explosões podem danificar ou destruir objetos, alterando dinamicamente os valores de cobertura do campo de batalha.

#### 2.3.3. Cálculo de Acerto (Hit Calculation)

A chance de um soldado acertar um alvo é calculada com base em múltiplos fatores. A fórmula geral é: `Chance de Acerto = (Precisão Base + Bônus - Penalidades) - Cobertura do Alvo`.

Os fatores que compõem o cálculo são:

- **Atributo de Mira:** O principal atributo do soldado que define sua precisão inata.
- **Classe do Soldado:** Classes como Snipers recebem bônus inerentes de precisão em comparação com classes de assalto.
- **Tipo e Distância da Arma:** Cada arma tem um alcance ótimo. Rifles são precisos a longa distância, enquanto espingardas perdem eficácia rapidamente.
- **Modificadores da Arma:** Acessórios como lunetas, estabilizadores e miras laser podem adicionar bônus de precisão.
- **Habilidades Ativas:** Habilidades específicas podem garantir um tiro, aumentar a precisão por um turno ou focar em um alvo.
- **Debuffs e Status:** Condições como pânico, supressão, fumaça ou veneno podem aplicar penalidades severas à precisão.

#### 2.3.4. Sistema de Dano e Saúde (Graze System)

Para reduzir a aleatoriedade e recompensar o risco, o jogo usará um sistema de dano com acertos parciais:

- **Dano Base Fixo:** As armas possuem um valor de dano base fixo e previsível, permitindo um planejamento tático mais claro.
- **Três Zonas de Resultado para Ataques:**
    - **Acerto Normal:** Se o rolamento de precisão for bem-sucedido, a arma causa 100% de seu dano base.
    - **Acerto de Raspão (Graze):** Se o rolamento de precisão falhar, mas por uma margem pré-definida (ex: até 20 pontos percentuais abaixo da chance de acerto), o ataque ainda é considerado um "acerto de raspão", causando um dano parcial (ex: 50% do dano base).
    - **Erro Completo:** Se o rolamento de precisão falhar por uma margem grande, o ataque erra completamente e não causa dano.
- **Saúde e Armadura:** As unidades possuem pontos de vida (Saúde). A armadura funciona como uma segunda barra de vida ou como um valor de redução de dano.

### 2.4. Classes e Progressão de Personagens

#### 2.4.1. Arquétipos de Soldados

Os soldados, embora únicos, podem ser especializados em diferentes arquétipos de combate, cada um com um papel tático distinto. As classes iniciais planejadas são:

- **Assalto:** Especialista em combate de curta distância com espingardas e alta mobilidade.
- **Fuzileiro:** A espinha dorsal da equipe, versátil e eficaz em médias distâncias.
- **Suporte:** Focado em curar, fortalecer aliados e aplicar debuffs nos inimigos.
- **Sniper:** Mestre do longo alcance, capaz de eliminar alvos de alta prioridade com precisão.
- **Pesado (Heavy):** Especialista em armas pesadas, explosivos e fogo de supressão.
- **Engenheiro/Técnico:** Controla unidades robóticas (drones, auto-turrets), hackeia inimigos mecânicos e posiciona equipamentos táticos.

*Nota de Planejamento Futuro: A possibilidade de classes "Híbridas", que incorporam DNA alienígena para obter habilidades extraordinárias, será explorada como uma mecânica de final de jogo ou expansão.*

#### 2.4.2. Sistema de Progressão (Árvore de Habilidades)

A progressão de cada soldado será gerenciada através de uma árvore de habilidades (skill tree) complexa, que incentiva a especialização e o comprometimento:

- **Estrutura Ramificada:** Em vez de escolhas binárias a cada nível, cada classe terá uma árvore com múltiplos ramos (ex: 2-3 ramos principais). Cada ramo representará uma sub-especialização.
    - *Exemplo:* Um Sniper pode ter um ramo focado em dano crítico e tiros únicos (Precisão), e outro focado em controle de área e debuffs (Sabotagem).
- **Comprometimento de Ramo:** Investir pontos em um ramo desbloqueia habilidades mais poderosas nele, mas pode ter um custo maior para investir em outros ramos, tornando a decisão de especialização significativa.
- **Tipos de Habilidades:** A árvore conterá uma mistura de melhorias passivas (ex: +5% de mira, +1 de vida) e novas habilidades ativas para usar em combate.

## 3. Inimigos

### 3.1. Filosofia de Design e Progressão

A força de invasão alienígena evolui em complexidade e ameaça ao longo do jogo, forçando o jogador a adaptar suas táticas. A progressão se dará em tiers:

- **Tier 1: A Horda Feral:** No início, os jogadores enfrentarão criaturas alienígenas que se comportam mais como animais ou insetos. O desafio aqui é o controle de multidão e táticas de enxame.
- **Tier 2: O Exército Organizado:** Conforme o jogo avança, surgem unidades humanoides e racionais que usam armas, cobertura e táticas de esquadrão.
- **Tier 3: A Elite Dominante:** Nas fases mais avançadas, o jogador enfrentará a elite da força de invasão: unidades com habilidades psíquicas, armaduras pesadas, e capacidade de comandar outras unidades.

### 3.2. Inimigos Iniciais (Tier Feral)

As primeiras ameaças que os rebeldes encontrarão são:

- **Aranha-like (Assassino):** Uma unidade que prioriza alvos de baixa armadura. Seu ataque causa dano inicial baixo, mas aplica um efeito de **veneno** que causa dano contínuo (Damage over Time) por vários turnos, ignorando a armadura do soldado.
- **Cachorro-like (Lutador):** A principal unidade de combate corpo a corpo do tier feral. Possui um bom equilíbrio entre saúde e dano, agindo como a linha de frente inimiga para engajar diretamente os soldados do jogador.
- **Rato-like (Batedor):** Uma unidade de suporte não-combatente. É rápido e difícil de acertar. Sua principal função é 'marcar' os soldados do jogador, aplicando um debuff que aumenta a chance de outros alienígenas acertá-los.
- **Voador-like (Harasser):** Uma unidade voadora rápida e difícil de acertar. Ignora a cobertura terrestre para aplicar dano baixo e constante em alvos expostos, forçando os jogadores a se reposicionarem e a não negligenciar o espaço aéreo.

*Nota de Design: A definição dos inimigos do 'Tier 2: O Exército Organizado' e 'Tier 3: A Elite Dominante' será feita em uma etapa futura.*

## 4. Arte e Som

### 4.1. Atmosfera e "Mood"

O jogo terá atmosferas distintas para cada uma de suas fases, criando um contraste emocional que reflete a situação do jogador:

- **No Mapa Estratégico:** A sensação será **Sombria e Opressora**. A interface e os visuais devem passar a ideia de um mundo dominado, com pouca luz e recursos escassos, onde a ameaça alienígena é onipresente.

- **No Combate Tático:** O clima muda para **Energético e com Adrenalina**. A ação é rápida, os efeitos visuais de tiros e habilidades são impactantes e a música se torna intensa. É o momento onde a resistência revida.

- **Na Gestão da Base:** O sentimento é **Esperançoso e Sci-Fi**. A base é o único refúgio. A iluminação é mais limpa, a tecnologia da resistência é visível e a música é calma e inspiradora, refletindo o progresso e a luta pela sobrevivência.

### 4.2. Direção de Arte Visual

O jogo adotará um estilo **Pixel Art Sombrio e Detalhado**, com o objetivo de criar uma atmosfera forte e memorável, mesmo com uma estética 2D.

- **Inspirações Principais:** *Darkest Dungeon*, *Blasphemous*, *Into the Breach*.
- **Personagens e Inimigos:** Sprites detalhados com animações fluidas e impactantes, que comunicam personalidade e ameaça.
- **Ambientes:** Cenários ricos em detalhes, com alto contraste entre luz e sombra para reforçar o clima opressor. A paleta de cores será, em geral, escura e dessaturada, com pontos de cor para destacar elementos importantes (sangue, tecnologia, etc.).
- **Interface (UI):** A UI tática será minimalista e funcional. A UI da base terá um estilo "sci-fi pixelado" mais limpo, para contrastar com a sujeira do mundo exterior.

### 4.3. Direção de Áudio

A trilha sonora e os efeitos sonoros seguirão a filosofia de atmosferas distintas para cada fase do jogo:

- **Combate (Energético):** A música será eletrônica, industrial e percussiva, com batidas fortes e sintetizadores distorcidos (inspiração: 'DOOM', 'Hotline Miami'). O objetivo é criar uma trilha sonora pulsante que alimenta a adrenalina do combate. Os efeitos sonoros de armas, impactos e alienígenas serão nítidos e impactantes.

- **Base (Otimista/Sci-Fi):** Na base, a trilha sonora muda para um synth-wave mais otimista e melódico (inspiração: 'FTL: Faster Than Light'). A música deve evocar um sentimento de progresso, engenhosidade e esperança, enquanto os rebeldes usam a tecnologia para lutar.

- **Mapa Estratégico (Opressor):** No mapa, a música será minimalista e ambiente, com pads de sintetizador sombrios e atmosféricos, reforçando a tensão e a sensação de um mundo subjugado.

## 5. Narrativa e Mundo

### 5.1. Premissa e Ponto de Partida

A história começa no **Dia Zero** da invasão alienígena. O mundo está mergulhado no caos, e as forças militares globais são rapidamente subjugadas.

- **O Prólogo (Tutorial):** O jogador assume o controle de um **único sobrevivente**, uma pessoa comum cujo visual e background podem ser personalizados. A primeira missão é um tutorial focado em sobrevivência e furtividade, não em combate direto. O objetivo é navegar por uma cidade em ruínas, evitando patrulhas alienígenas, para encontrar um local seguro.

- **A Fundação da Resistência:** Ao chegar ao local seguro (ex: um antigo abrigo, um armazém abandonado), o jogador estabelece a primeira **Base**. A partir deste ponto, o objetivo inicial do jogo muda de "sobreviver" para "resistir", começando com a necessidade de encontrar e recrutar outros sobreviventes para a causa.

### 5.2. Arco Narrativo e Objetivo Final

O objetivo do jogo é a **sobrevivência e o fortalecimento da resistência**, culminando em uma vitória significativa, mas não total, que deixa o jogador com a sensação de que a luta continua.

- **Arco Narrativo:** A campanha é projetada para dar ao jogador a impressão de que é possível expulsar completamente os invasores. O jogador começa na defensiva, passa a consolidar poder e, eventualmente, parte para a ofensiva contra um alvo estratégico de alto valor.

- **O "Final" (Vitória Parcial):** O clímax do jogo é uma grande missão para destruir esse alvo estratégico (ex: um centro de comando regional, um portal principal). O sucesso nesta missão resulta em uma vitória massiva para a resistência: uma grande área do planeta é libertada da influência alienígena, criando um refúgio seguro para a humanidade.

- **Gancho para a Sequência:** Após a vitória, fica claro que esta era apenas uma frota de invasão, e que a ameaça galáctica ainda é imensa. O jogo termina com a resistência tendo garantido sua sobrevivência e se preparando para o próximo capítulo da guerra, não para a paz.

### 5.3. Método de Narrativa (Storytelling)

A história será contada primariamente através de **Narrativa Ambiental e Descoberta**, em vez de longas cutscenes ou diálogos expositivos. O jogador deve se sentir como um arqueólogo juntando as peças de um quebra-cabeça.

- **Fragmentos de Lore:** Durante as missões, os jogadores podem encontrar itens (data pads, logs de áudio, diários) que contêm pequenos fragmentos da história, mostrando diferentes perspectivas sobre a invasão.
- **Descrições de Itens e Pesquisas:** Cada nova tecnologia pesquisada ou item fabricado terá uma descrição que revela algo sobre o mundo, os alienígenas ou a própria resistência.
- **Narrativa Emergente:** As histórias únicas dos soldados procedurais (suas vitórias, suas perdas, seus traumas) criarão micro-narrativas pessoais para cada jogador.
- **O Mundo Conta a História:** O estado do mapa estratégico, os tipos de missões disponíveis e a evolução dos inimigos refletirão o progresso da guerra sem a necessidade de um narrador explícito.
