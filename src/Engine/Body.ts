import { sceneData } from "./Data";
import Vector2 from "./Vector2";

class Body {
  update(deltatime: number) {
    sceneData.position.theta += sceneData.orbitalVelocity * deltatime;
    
    const top = sceneData.orbitSize * (1 - (sceneData.orbitEccentricity * sceneData.orbitEccentricity));
    const bottom = 1 + (sceneData.orbitEccentricity * Math.cos(sceneData.position.theta));
    sceneData.position.r = top / bottom;
  }

  render(renderingContext: CanvasRenderingContext2D) {
    const offset = new Vector2(renderingContext.canvas.width / 2, renderingContext.canvas.height / 2);
    const cartesianVector = sceneData.position.toCartesianVector().add(offset);

    renderingContext.beginPath();
    renderingContext.fillStyle = "orangered";
    renderingContext.arc(cartesianVector.x, cartesianVector.y, 5, 0, 2 * Math.PI);
    renderingContext.fill();
  }
}

export default Body;