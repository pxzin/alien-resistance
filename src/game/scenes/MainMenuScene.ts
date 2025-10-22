import Phaser from 'phaser';

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenuScene' });
  }

  create(): void {
    // Simple black background
    this.cameras.main.setBackgroundColor(0x000000);

    // Temporary text to confirm scene is active
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    this.add.text(centerX, centerY, 'Main Menu Scene', {
      fontSize: '32px',
      color: '#ffffff',
    }).setOrigin(0.5);
  }
}
