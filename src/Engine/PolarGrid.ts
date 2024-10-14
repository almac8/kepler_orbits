import Vector2 from "./Vector2";

class PolarGrid {
  isRenderingGridLines: boolean;
  points: Vector2[];

  constructor() {
    this.isRenderingGridLines = true;
    this.points = [];
  }

  render(renderingContext: CanvasRenderingContext2D) {
    if(this.isRenderingGridLines) this.renderGridLines(renderingContext);

    this.points.forEach(point => {
      const cartesian = new Vector2((point.x * Math.cos(point.y)) + renderingContext.canvas.width / 2, (point.x * Math.sin(point.y)) + renderingContext.canvas.height / 2);
      console.log(cartesian);

      renderingContext.beginPath();
      renderingContext.fillStyle = "blue";
      renderingContext.arc(cartesian.x, cartesian.y, 5, 0, 2 * Math.PI);
      renderingContext.fill();  
    });
  }

  renderGridLines(renderingContext: CanvasRenderingContext2D) {
    const canvasDimentions = new Vector2(renderingContext.canvas.width, renderingContext.canvas.height);

    renderingContext.beginPath();
    renderingContext.strokeStyle = "lime";
    renderingContext.moveTo(0, canvasDimentions.y / 2);
    renderingContext.lineTo(canvasDimentions.x, canvasDimentions.y / 2);
    renderingContext.stroke();

    renderingContext.beginPath();
    renderingContext.fillStyle = "lime";
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 5, 0, 2 * Math.PI);
    renderingContext.fill();

    renderingContext.beginPath();
    renderingContext.fillStyle = "lime";
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 20, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 40, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 60, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 80, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 100, 0, 2 * Math.PI);

    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 120, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 140, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 160, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 180, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 200, 0, 2 * Math.PI);

    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 220, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 240, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 260, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 280, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 300, 0, 2 * Math.PI);

    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 320, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 340, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 360, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 380, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 400, 0, 2 * Math.PI);

    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 420, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 440, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 460, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 480, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 500, 0, 2 * Math.PI);

    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 520, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 540, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 560, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 580, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 600, 0, 2 * Math.PI);

    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 620, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 640, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 660, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 680, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 700, 0, 2 * Math.PI);

    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 720, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 740, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 760, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 780, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 800, 0, 2 * Math.PI);

    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 820, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 840, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 860, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 880, 0, 2 * Math.PI);
    renderingContext.arc(canvasDimentions.x / 2, canvasDimentions.y / 2, 900, 0, 2 * Math.PI);

    renderingContext.stroke();
  }

  addPoint(coordinates: Vector2) {
    this.points.push(coordinates);
  }
}

export default PolarGrid