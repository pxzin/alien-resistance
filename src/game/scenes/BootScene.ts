import Phaser from 'phaser';
import { sceneManager } from '../managers/SceneManager';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  create(): void {
    // Set dark background color
    this.cameras.main.setBackgroundColor(0x222222);

    // Add loading text
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    this.add.text(centerX, centerY, 'Loading...', {
      fontSize: '32px',
      color: '#ffffff',
    }).setOrigin(0.5);

    // Load essential assets here (when available)
    // For now, just transition to main menu

    // Auto-transition to MainMenuScene
    this.time.delayedCall(500, () => {
      sceneManager.changeScene('MainMenuScene');
    });
  }
}
