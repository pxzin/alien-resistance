# Tarefa 001: Configurar a estrutura inicial do jogo com Phaser e Svelte

**Objetivo:** Inicializar a engine Phaser, criar a primeira cena e garantir que ela seja renderizada corretamente dentro da aplicação Svelte. Esta é a base para todo o desenvolvimento do jogo.

## Requisitos

### 1. Definição da Configuração do Jogo
- Crie um novo arquivo em `src/game/main.ts`.
- Neste arquivo, defina e exporte a configuração principal do jogo (`Phaser.GameConfig`).
- A configuração deve incluir:
    - `type`: `Phaser.AUTO`
    - `width`: 800
    - `height`: 600
    - `parent`: 'game-container' (este será o ID do `div` no Svelte)
    - `backgroundColor`: '#000000'
    - `scene`: `[]` (a cena será adicionada dinamicamente)

### 2. Criação da Cena de Boot
- Crie o arquivo `src/game/scenes/BootScene.ts`.
- Crie uma classe `BootScene` que estende `Phaser.Scene`.
- Dê à cena a chave 'BootScene'.
- No método `create()`, defina a cor de fundo do palco para um tom de cinza (ex: `0x888888`) para confirmar visualmente que a cena está funcionando.
- Adicione um texto simples no centro da tela, como "BootScene Active".

### 3. Integração com Svelte
- Modifique o arquivo `src/App.svelte`.
- Importe o `Phaser` e a configuração do jogo de `src/game/main.ts`.
- Importe a `BootScene`.
- Utilize o hook `onMount` do Svelte para:
    - Adicionar a `BootScene` à configuração do jogo.
    - Criar uma nova instância de `Phaser.Game` com a configuração atualizada.
- No template HTML, crie um `<div id="game-container"></div>` onde o canvas do Phaser será renderizado.
