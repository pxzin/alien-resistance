import Phaser from 'phaser';

export class SceneManager {
  private static instance: SceneManager;
  private game: Phaser.Game | null = null;
  private currentSceneKey: string = '';
  private listeners: ((sceneKey: string) => void)[] = [];

  private constructor() {}

  static getInstance(): SceneManager {
    if (!SceneManager.instance) {
      SceneManager.instance = new SceneManager();
    }
    return SceneManager.instance;
  }

  setGame(game: Phaser.Game): void {
    this.game = game;
  }

  changeScene(sceneKey: string): void {
    if (!this.game) {
      console.error('Game instance not set in SceneManager');
      return;
    }

    const scene = this.game.scene.getScene(sceneKey);
    if (scene) {
      this.game.scene.start(sceneKey);
      this.currentSceneKey = sceneKey;
      this.notifyListeners(sceneKey);
    } else {
      console.error(`Scene ${sceneKey} not found`);
    }
  }

  getCurrentScene(): string {
    return this.currentSceneKey;
  }

  onSceneChange(callback: (sceneKey: string) => void): void {
    this.listeners.push(callback);
  }

  private notifyListeners(sceneKey: string): void {
    this.listeners.forEach(listener => listener(sceneKey));
  }
}

export const sceneManager = SceneManager.getInstance();
