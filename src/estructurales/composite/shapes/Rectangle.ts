import { BaseShape } from "./BaseShape";

export class Rectangle extends BaseShape {
  private width: number;
  private height: number;

  public constructor(x: number, y: number, width: number, height: number, color: string = 'black', lineWidth: number = 1) {
    super(x, y, color, lineWidth);

    this.width = width;
    this.height = height;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public paint(ctx: CanvasRenderingContext2D): void {
    super.paint(ctx);

    ctx.strokeRect(this.getX(), this.getY(), this.width, this.height);
  }
}