<script lang="ts">
  import { onMount } from 'svelte';
  import Phaser from 'phaser';
  import { gameConfig } from './game/main';
  import { BootScene } from './game/scenes/BootScene';
  import Button from './ui/Button.svelte';

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

<main class="text-center p-4">
  <h1>Alien Resistance (Svelte + Phaser)</h1>
  <Button label="Click Me" />
  <div id="game-container" class="mx-auto w-800px h-600px border border-white"></div>
</main>
