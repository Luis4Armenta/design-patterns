export interface Shape {
  getX(): number;
  getY(): number;
  getWidth(): number;
  getHeight(): number;
  paint(ctx: CanvasRenderingContext2D): void;
}