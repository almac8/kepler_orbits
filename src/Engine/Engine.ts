import { sceneData } from "./Data";

class Engine {
  isRunning: boolean;
  lastUpdateTime: number;

  constructor() {
    this.isRunning = false;
    this.lastUpdateTime = 0;
  }

  start() {
    this.isRunning = true;
    this.lastUpdateTime = Date.now();

    this.gameloop();
  }

  gameloop() {
    const currentTime = Date.now();
    const deltatime = currentTime - this.lastUpdateTime;
    this.lastUpdateTime = currentTime;

    this.update(deltatime);
    this.render();

    if(this.isRunning) requestAnimationFrame(() => this.gameloop());
  }

  update(deltatime: number) {}

  render() {
    if(sceneData.renderingContext) {
      sceneData.renderingContext.beginPath();
      sceneData.renderingContext.fillStyle = "black";
      sceneData.renderingContext.fillRect(0, 0, sceneData.renderingContext.canvas.width, sceneData.renderingContext.canvas.height);
    }
  }
}

export default Engine;