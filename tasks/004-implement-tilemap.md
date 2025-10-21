# Tarefa 004: Implementar Mapa de Jogo Básico (Tilemap)

**Objetivo:** Fazer o botão do menu principal funcionar e levar o jogador para a cena de jogo, onde um "tabuleiro" de jogo básico será visível, estabelecendo o fluxo de navegação completo e a base para o ambiente tático.

## Requisitos

### 1. Interatividade do Menu
- No `App.svelte` ou em um componente de UI do menu, adicione um evento de clique ao `Button.svelte`.
- O clique nesse botão deve chamar o `SceneManager` para transicionar da `MainMenuScene` para a `GameScene`.

### 2. Criação de Assets para o Tilemap
- Crie uma imagem de tileset placeholder. Pode ser um arquivo PNG simples (ex: `tileset.png` dentro de `public/assets/`).
- A imagem deve conter alguns quadrados de cores diferentes para representar os terrenos básicos (ex: verde para grama, cinza para concreto, marrom para terra).

### 3. Renderização do Tilemap
- Na `GameScene.ts`, no método `preload()`, carregue a imagem do tileset.
- No método `create()`, crie um Tilemap do Phaser.
- Use um array 2D de dados diretamente no código para definir um mapa simples (ex: `const mapData = [[0, 1, 2], [1, 2, 0], [2, 0, 1]];`).
- Renderize o mapa na tela usando o tileset carregado.

## Resultado Esperado

Ao clicar no botão no menu principal, a tela deve mudar para a `GameScene`, e um mapa simples, composto pelos tiles coloridos do seu tileset, deve ser exibido na tela. Este será o nosso primeiro "tabuleiro" de jogo.
