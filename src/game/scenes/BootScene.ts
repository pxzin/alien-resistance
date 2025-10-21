import Phaser from 'phaser';
import { sceneManager } from '../managers/SceneManager';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  create(): void {
    // Define a cor de fundo do palco
    this.cameras.main.setBackgroundColor(0x222222);

    // Adiciona texto de loading
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    this.add.text(centerX, centerY, 'Loading...', {
      fontSize: '32px',
      color: '#ffffff',
    }).setOrigin(0.5);

    // Carrega assets essenciais aqui (quando houver)
    // Por enquanto, apenas transita para o menu principal

    // Transição automática para o MainMenuScene
    this.time.delayedCall(500, () => {
      sceneManager.changeScene('MainMenuScene');
    });
  }
}
