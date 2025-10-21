<script lang="ts">
  import { onMount } from 'svelte';
  import Phaser from 'phaser';
  import { gameConfig } from './game/main';
  import { BootScene } from './game/scenes/BootScene';
  import { MainMenuScene } from './game/scenes/MainMenuScene';
  import { GameScene } from './game/scenes/GameScene';
  import { sceneManager } from './game/managers/SceneManager';
  import Button from './ui/Button.svelte';

  let currentScene = $state('');

  onMount(() => {
    // Adiciona todas as cenas à configuração
    const config = {
      ...gameConfig,
      scene: [BootScene, MainMenuScene, GameScene],
    };

    // Cria a instância do jogo
    const game = new Phaser.Game(config);

    // Registra o game no SceneManager
    sceneManager.setGame(game);

    // Escuta mudanças de cena
    sceneManager.onSceneChange((sceneKey) => {
      currentScene = sceneKey;
    });

    // Define a cena inicial
    currentScene = 'BootScene';

    return () => {
      game?.destroy(true);
    };
  });

  function startGame() {
    sceneManager.changeScene('GameScene');
  }
</script>

<main class="text-center p-4">
  <h1>Alien Resistance (Svelte + Phaser)</h1>

  {#if currentScene === 'MainMenuScene'}
    <div class="mb-4">
      <Button label="Start Game" onclick={startGame} />
    </div>
  {/if}

  <div id="game-container" class="mx-auto w-800px h-600px border border-white"></div>
</main>
