import Phaser from 'phaser';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 576,
  parent: 'game-container',
  backgroundColor: '#000000',
  scene: [],
};
