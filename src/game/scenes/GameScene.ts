import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create(): void {
    // Fundo verde escuro para diferenciar
    this.cameras.main.setBackgroundColor(0x003300);

    // Texto temporário para confirmar que a cena está ativa
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    this.add.text(centerX, centerY, 'Game Scene - In Development', {
      fontSize: '28px',
      color: '#00ff00',
    }).setOrigin(0.5);
  }
}
