import { BaseShape } from "./BaseShape";

export class Dot extends BaseShape {
  private DOT_SIZE: number = 3;

  public constructor(x: number, y: number, color: string = 'black') {
    super(x, y, color);
  }

  public getHeight(): number {
    return this.DOT_SIZE;
  }

  public getWidth(): number {
    return this.DOT_SIZE;
  }

  public paint(ctx: CanvasRenderingContext2D): void {
    super.paint(ctx);

    ctx.fillRect(this.getX() - 1, this.getY() - 1, this.DOT_SIZE, this.DOT_SIZE);
  }
}
