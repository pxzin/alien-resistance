# Tarefa 003: Criar Gerenciador de Cenas e Menu Principal

**Objetivo:** Estruturar como o jogo transita entre diferentes estados (ex: do Boot para o Menu Principal) e exibir o primeiro elemento de UI interativo, integrando a engine (Phaser) com a camada de UI (Svelte).

## Requisitos

### 1. Gerenciador de Cenas (SceneManager)
- Crie um arquivo `src/game/managers/SceneManager.ts`.
- Este manager deve ser um singleton (uma única instância global) que pode ser acessado de qualquer lugar.
- Ele deve ter um método `changeScene(sceneKey: string)` que centraliza a lógica de `this.scene.start(sceneKey)` do Phaser.

### 2. Criação de Novas Cenas
- Crie os arquivos para as novas cenas do Phaser:
  - `src/game/scenes/MainMenuScene.ts`
  - `src/game/scenes/GameScene.ts` (pode ficar vazio por enquanto)
- Ambas devem ser classes que estendem `Phaser.Scene`.

### 3. Modificação da BootScene
- Altere a `BootScene.ts` (criada na Tarefa 001).
- Ao final do método `create()`, em vez de exibir um texto, ela deve chamar o `SceneManager` para iniciar a `MainMenuScene`.

### 4. Integração no Menu Principal
- Na `MainMenuScene.ts`, você não precisará adicionar lógica de Phaser por enquanto.
- O objetivo é usar o Svelte para renderizar a UI por cima do canvas do Phaser.
- No `App.svelte`, crie uma lógica para exibir o `Button.svelte` (da Tarefa 002) apenas quando a cena ativa for a `MainMenuScene`.
  - *Dica: O SceneManager pode emitir eventos ou ter uma propriedade reativa que o `App.svelte` possa ouvir para saber qual cena está ativa.*

## Resultado Esperado

Ao iniciar o jogo, a tela deve piscar rapidamente (BootScene) e então estabilizar na `MainMenuScene` (que pode ser apenas uma tela preta do Phaser), com o componente de botão do Svelte visível na tela.
