import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
  private colors = [0x888888, 0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff];
  private currentColorIndex = 0;

  constructor() {
    super({ key: 'BootScene' });
  }

  create(): void {
    // Define a cor de fundo do palco
    this.cameras.main.setBackgroundColor(this.colors[this.currentColorIndex]);

    // Adiciona texto no centro da tela
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    this.add.text(centerX, centerY, 'BootScene Active', {
      fontSize: '32px',
      color: '#ffffff',
    }).setOrigin(0.5);

    // Registra evento customizado para mudança de cor
    this.events.on('changeBackgroundColor', this.changeBackgroundColor, this);
  }

  changeBackgroundColor(): void {
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    this.cameras.main.setBackgroundColor(this.colors[this.currentColorIndex]);
  }
}
