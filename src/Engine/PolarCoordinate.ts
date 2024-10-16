import Vector2 from "./Vector2";

class PolarCoordinate {
  r: number;
  theta: number;

  constructor() {
    this.r = 0;
    this.theta = 0;
  }

  toCartesianVector() {
    return new Vector2(
      this.r * Math.cos(this.theta),
      this.r * Math.sin(this.theta)
    );
  }
}

export default PolarCoordinate;