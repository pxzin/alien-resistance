<script lang="ts">
  import { onMount } from 'svelte';
  import Phaser from 'phaser';
  import { gameConfig } from './game/main';
  import { BootScene } from './game/scenes/BootScene';

  onMount(() => {
    // Adiciona a BootScene à configuração
    const config = {
      ...gameConfig,
      scene: [BootScene],
    };

    // Cria a instância do jogo
    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  });
</script>

<main>
  <h1>Alien Resistance (Svelte + Phaser)</h1>
  <div id="game-container"></div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
  }
  .game-container {
    margin: 0 auto;
    width: 800px; /* Match game width */
    height: 600px; /* Match game height */
    border: 1px solid #fff;
  }
</style>
