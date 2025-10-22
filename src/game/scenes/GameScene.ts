import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
  private readonly TILE_SIZE = 32;
  private readonly MAP_WIDTH = 25;
  private readonly MAP_HEIGHT = 18;

  constructor() {
    super({ key: 'GameScene' });
  }

  preload(): void {
    // Carrega o tileset como spritesheet
    this.load.spritesheet('tileset', '/assets/tileset.png', {
      frameWidth: this.TILE_SIZE,
      frameHeight: this.TILE_SIZE,
    });
  }

  create(): void {
    // Fundo preto
    this.cameras.main.setBackgroundColor(0x000000);

    // Dados do mapa - array 2D (0=grama, 1=concreto, 2=terra)
    // Mapa 25x18 (800x576 pixels) - preenche toda a tela
    const mapData = [
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    // Renderiza o tilemap
    this.renderTilemap(mapData);

    // Adiciona texto informativo
    this.add.text(10, 10, 'Game Scene - Tactical Map', {
      fontSize: '16px',
      color: '#ffffff',
      backgroundColor: '#000000',
      padding: { x: 5, y: 5 },
    });
  }

  private renderTilemap(mapData: number[][]): void {
    // Percorre o array 2D e cria sprites para cada tile
    for (let y = 0; y < mapData.length; y++) {
      for (let x = 0; x < mapData[y].length; x++) {
        const tileIndex = mapData[y][x];

        // Cria um sprite para o tile usando o frame correto do spritesheet
        const tile = this.add.sprite(
          x * this.TILE_SIZE + this.TILE_SIZE / 2,
          y * this.TILE_SIZE + this.TILE_SIZE / 2,
          'tileset',
          tileIndex
        );
      }
    }
  }
}
