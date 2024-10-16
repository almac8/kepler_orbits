import Body from "./Body";
import PolarCoordinate from "./PolarCoordinate";
import Vector2 from "./Vector2";

class Scene {
  body_one: PolarCoordinate;
  body_two: Body;
  
  constructor() {
    this.body_one = new PolarCoordinate();
    this.body_two = new Body();
  }
  
  update(deltatime: number) {
    this.body_two.update(deltatime);
  }

  render(renderingContext: CanvasRenderingContext2D) {
    const offset = new Vector2(renderingContext.canvas.width / 2, renderingContext.canvas.height / 2);
    const cartesianVector = this.body_one.toCartesianVector().add(offset);

    renderingContext.beginPath();
    renderingContext.fillStyle = "orangered";
    renderingContext.arc(cartesianVector.x, cartesianVector.y, 5, 0, 2 * Math.PI);
    renderingContext.fill();

    this.body_two.render(renderingContext);
  }
}

export default Scene;