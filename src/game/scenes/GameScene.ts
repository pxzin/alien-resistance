import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
  // Isometric tile dimensions
  // Tiles are 64x64 with large diamonds that occupy most of the sprite
  // TILE_HEIGHT needs to match TILE_WIDTH for these diamond sprites
  private readonly TILE_SIZE = 64;  // Square sprite size
  private readonly TILE_WIDTH = 64;  // Width for isometric projection
  private readonly TILE_HEIGHT = 64; // Height adjusted to prevent overlap (matches width)
  private readonly MAP_WIDTH = 15;
  private readonly MAP_HEIGHT = 12;

  constructor() {
    super({ key: 'GameScene' });
  }

  preload(): void {
    // Load isometric tileset as spritesheet
    // Each frame is 64x64 containing a diamond-shaped tile
    this.load.spritesheet('tileset', '/assets/tileset-isometric.png', {
      frameWidth: this.TILE_SIZE,
      frameHeight: this.TILE_SIZE,
    });
  }

  create(): void {
    // Black background
    this.cameras.main.setBackgroundColor(0x000000);

    // Map data - 2D array (0=grass, 1=concrete, 2=dirt)
    // Isometric map 15x12 - tactical battlefield layout
    const mapData = [
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    ];

    // Render the tilemap
    this.renderTilemap(mapData);

    // Add informative text
    this.add.text(10, 10, 'Game Scene - Tactical Map', {
      fontSize: '16px',
      color: '#ffffff',
      backgroundColor: '#000000',
      padding: { x: 5, y: 5 },
    });
  }

  private renderTilemap(mapData: number[][]): void {
    // Calculate offset to center the isometric map
    const offsetX = 200; // Center horizontally (adjusted for horizontal orientation)
    const offsetY = 300; // Offset from top

    // Iterate through 2D array and create sprites for each tile
    // Render in correct order for isometric depth (back to front)
    for (let y = 0; y < mapData.length; y++) {
      for (let x = 0; x < mapData[y].length; x++) {
        const tileIndex = mapData[y][x];

        // Convert grid position to isometric screen position
        // Formula adjusted for horizontal orientation (like FFT)
        const isoX = (x + y) * (this.TILE_WIDTH / 2);
        const isoY = (y - x) * (this.TILE_HEIGHT / 2);

        const finalX = offsetX + isoX;
        const finalY = offsetY + isoY;
        const depth = y * 100 + x;

        // Create sprite for tile using correct spritesheet frame
        const tile = this.add.sprite(
          finalX,
          finalY,
          'tileset',
          tileIndex
        );

        // Center origin for diamonds that occupy most of the sprite
        tile.setOrigin(0.5, 0.5);

        // Set depth based on position for correct layering
        // Tiles further down and to the right should render on top
        tile.setDepth(depth);
      }
    }
  }
}
