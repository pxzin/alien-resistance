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
    // Add all scenes to configuration
    const config = {
      ...gameConfig,
      scene: [BootScene, MainMenuScene, GameScene],
    };

    // Create game instance
    const game = new Phaser.Game(config);

    // Register game with SceneManager
    sceneManager.setGame(game);

    // Listen for scene changes
    sceneManager.onSceneChange((sceneKey) => {
      currentScene = sceneKey;
    });

    // Set initial scene
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

  <div id="game-container" class="mx-auto w-800px h-576px border border-white"></div>
</main>
