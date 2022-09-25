import { Shape } from "./Shape";

export abstract class BaseShape implements Shape {
  private x: number;
  private y: number;
  private color: string;
  private lineWidth: number;

  public constructor(x: number, y: number, color: string = 'black', lineWidth: number = 5) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.lineWidth = lineWidth;
  }

  getX(): number {
    return this.x;
  }
  getY(): number {
    return this.y;
  }
  getWidth(): number {
    return 0;
  }
  getHeight(): number {
    return 0;
  }
  move(x: number, y: number): void {
    this.x += x;
    this.y += y
  }
  isInsideBounds(x: number, y: number): boolean {
    throw new Error("Method not implemented.");
  }
  paint(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
  }

}