<script lang="ts">
  import { onMount } from 'svelte';
  import Phaser from 'phaser';

  let gameContainer: HTMLDivElement;

  onMount(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameContainer,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: {
        preload: preload,
        create: create,
        update: update
      }
    };

    const game = new Phaser.Game(config);

    function preload(this: Phaser.Scene) {
      this.load.image('sky', 'http://labs.phaser.io/assets/skies/space3.png');
      this.load.image('logo', 'http://labs.phaser.io/assets/sprites/phaser3-logo.png');
      this.load.image('red', 'http://labs.phaser.io/assets/particles/red.png');
    }

    function create(this: Phaser.Scene) {
      this.add.image(400, 300, 'sky');

      const particles = this.add.particles(0, 0, 'red', {
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
      });

      const logo = this.physics.add.image(400, 100, 'logo');
      logo.setVelocity(100, 200);
      logo.setBounce(1, 1);
      logo.setCollideWorldBounds(true);

      particles.startFollow(logo);
    }

    function update() {
      // Game logic here
    }

    return () => {
      game.destroy(true);
    };
  });
</script>

<main>
  <h1>Alien Resistance (Svelte + Phaser)</h1>
  <div bind:this={gameContainer} class="game-container"></div>
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
