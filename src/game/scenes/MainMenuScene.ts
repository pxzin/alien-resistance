import Phaser from 'phaser';

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenuScene' });
  }

  create(): void {
    // Fundo preto simples
    this.cameras.main.setBackgroundColor(0x000000);

    // Texto temporário para confirmar que a cena está ativa
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    this.add.text(centerX, centerY, 'Main Menu Scene', {
      fontSize: '32px',
      color: '#ffffff',
    }).setOrigin(0.5);
  }
}
