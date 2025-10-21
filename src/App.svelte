<script lang="ts">
  import { onMount } from 'svelte';
  import Phaser from 'phaser';
  import { gameConfig } from './game/main';
  import { BootScene } from './game/scenes/BootScene';
  import Button from './ui/Button.svelte';

  let game: Phaser.Game | null = null;

  onMount(() => {
    // Adiciona a BootScene à configuração
    const config = {
      ...gameConfig,
      scene: [BootScene],
    };

    // Cria a instância do jogo
    game = new Phaser.Game(config);

    return () => {
      game?.destroy(true);
    };
  });

  function changeGameBackground() {
    if (game) {
      const bootScene = game.scene.getScene('BootScene') as BootScene;
      if (bootScene) {
        bootScene.events.emit('changeBackgroundColor');
      }
    }
  }
</script>

<main class="text-center p-4">
  <h1>Alien Resistance (Svelte + Phaser)</h1>
  <Button label="Change Background" onclick={changeGameBackground} />
  <div id="game-container" class="mx-auto w-800px h-600px border border-white"></div>
</main>
