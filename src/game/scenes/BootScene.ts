import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  create(): void {
    // Define a cor de fundo do palco
    this.cameras.main.setBackgroundColor(0x888888);

    // Adiciona texto no centro da tela
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    this.add.text(centerX, centerY, 'BootScene Active', {
      fontSize: '32px',
      color: '#ffffff',
    }).setOrigin(0.5);
  }
}
