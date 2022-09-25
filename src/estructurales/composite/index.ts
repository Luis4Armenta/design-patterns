interface Shape {
  getX(): number;
  getY(): number;
  getWidth(): number;
  getHeight(): number;
  paint(ctx: CanvasRenderingContext2D): void;
}

abstract class BaseShape implements Shape {
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

class Dot extends BaseShape {
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

class Circle extends BaseShape {
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

class Rectangle extends BaseShape {
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

class CompoundShape extends BaseShape {
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

class ImageEditor {
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

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;


const editor = new ImageEditor(context);
editor.loadShapes(
  new Circle(20, 20, 10,'green'),
  new Circle(70, 50, 5 ,'purple'),
  new CompoundShape(
    new Rectangle(50, 50, 100, 100, 'pink'),
    new Circle(75, 75, 25),
    new CompoundShape(
      new Dot(200, 200),
      new Circle(100, 100, 20),
    )
  )
);

