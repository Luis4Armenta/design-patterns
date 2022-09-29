import { TreeType } from "./TreeType";

export class Tree {
  private x: number;
  private y: number;
  private type: TreeType;

  public constructor(x: number, y: number, type: TreeType) {
    this.x = x;
    this.y = y;
    this.type = type;
  } 

  public draw(ctx: CanvasRenderingContext2D) {
    this.type.draw(ctx, this.x, this.y);
  }
}
