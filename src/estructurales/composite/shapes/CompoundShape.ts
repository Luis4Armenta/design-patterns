import { BaseShape } from "./BaseShape";
import { Shape } from "./Shape";

export class CompoundShape extends BaseShape {
  private children: Array<Shape> = [];

  public constructor(...components: Array<Shape>) {
    super(0, 0, 'black');

    this.add(components)
  }

  public add(components: Shape[] | Shape): void {
    if (components instanceof Array) {
      components.forEach(item => {
        this.children.push(item);
      });
    } else {
      this.children.push(components);
    }
  }

  public remove(component: Shape) {
    this.children = this.children.filter(shape => shape !== component);
  }

  public clear(): void {
    this.children = [];
  }

  public paint(ctx: CanvasRenderingContext2D): void {
    super.paint(ctx);
    
    this.children.forEach(child => {
      child.paint(ctx);
    });
  }
}