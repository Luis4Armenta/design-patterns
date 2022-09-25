import { CompoundShape } from "./shapes/CompoundShape";
import { Shape } from "./shapes/Shape";

export class ImageEditor {
  private AllShapes: CompoundShape = new CompoundShape();
  private canvas: CanvasRenderingContext2D;

  public constructor(canvas: CanvasRenderingContext2D) {
    this.canvas = canvas;
  }
  
  public loadShapes(...shapes: Array<Shape>): void {
    this.AllShapes.clear();
    this.AllShapes.add(shapes);

    this.paint();
  }

  private paint(): void {
    this.AllShapes.paint(this.canvas);
  }
}