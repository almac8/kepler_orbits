class Vector2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(v2: Vector2) {
    return new Vector2(
      this.x + v2.x,
      this.y + v2.y
    );
  }
}

export default Vector2;