import { BaseShape } from "./BaseShape";

export class Circle extends BaseShape {
  private radius: number;

  public constructor(x: number, y: number, radius: number, color: string = 'black', lineWidth: number = 1) {
    super(x, y, color, lineWidth);
    this.radius = radius;
  }

  public getHeight(): number {
    return this.radius * 2;
  }

  public getWidth(): number {
    return this.radius * 2;
  }

  public paint(ctx: CanvasRenderingContext2D): void {
    super.paint(ctx);

    ctx.arc(this.getX(), this.getY(), this.radius * 2, 0, 2 * Math.PI);
    ctx.stroke();
  }
}