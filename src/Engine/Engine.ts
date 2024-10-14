import { sceneData } from "./Data";
import PolarGrid from "./PolarGrid";
import Vector2 from "./Vector2";

class Engine {
  isRunning: boolean;
  lastUpdateTime: number;
  polarGrid: PolarGrid;

  constructor() {
    this.isRunning = false;
    this.lastUpdateTime = 0;
    this.polarGrid = new PolarGrid();
    this.polarGrid.isRenderingGridLines = false;
    this.polarGrid.addPoint(new Vector2(50, 22));
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

  update(deltatime: number) {
    this.polarGrid.points[0].y++;
    if(this.polarGrid.points[0].y > 360) this.polarGrid.points[0].y -= 360;
  }

  render() {
    if(sceneData.renderingContext) {
      sceneData.renderingContext.beginPath();
      sceneData.renderingContext.fillStyle = "black";
      sceneData.renderingContext.fillRect(0, 0, sceneData.renderingContext.canvas.width, sceneData.renderingContext.canvas.height);
      
      this.polarGrid.render(sceneData.renderingContext);
    }
  }
}

export default Engine;