# Tarefa 005: Adicionar Sprite Isométrico e Movimento em Grade

**Objetivo:** Colocar um personagem no mapa isométrico e implementar a movimentação tática baseada em grade, o núcleo da jogabilidade tática.

**Pré-requisito:** O asset do jogador, gerado pelo usuário, deve estar em `public/assets/sprites/soldiers/player_placeholder.png`.

## Requisitos

### 1. Configuração da Cena Isométrica
- Na `GameScene.ts`, configure a câmera do Phaser para uma visão isométrica. O Phaser tem presets para isso.
- Certifique-se de que o tilemap criado na Tarefa 004 seja renderizado corretamente nesta nova perspectiva.

### 2. Carregamento e Exibição do Jogador
- No método `preload()` da `GameScene`, carregue a imagem do jogador: `this.load.image('player', 'assets/sprites/soldiers/player_placeholder.png');`.
- No método `create()`, adicione o sprite 'player' a uma coordenada inicial no mapa (ex: centro da tela).

### 3. Movimento em Grade Isométrica
- Implemente uma lógica de input (clique do mouse).
- Ao clicar em um tile do mapa, o sprite do jogador deve se mover para o centro daquele tile.
- O movimento não precisa ser animado ainda, pode ser um teleporte instantâneo para a nova posição, mas deve respeitar a grade.

### 4. Câmera Dinâmica
- Faça a câmera principal do Phaser seguir o sprite do jogador (`this.cameras.main.startFollow(playerSprite);`).
- Defina limites para a câmera (`this.cameras.main.setBounds(...)`) para que ela não se mova para fora dos limites do mapa.

## Resultado Esperado

Ao entrar na `GameScene`, o jogador verá um mapa de tiles isométrico com o sprite do personagem no centro. Ao clicar em diferentes tiles, o personagem se moverá para essas posições na grade, e a câmera o seguirá.
