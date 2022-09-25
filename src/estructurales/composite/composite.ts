import { ImageEditor } from "./ImageEditor";
import { Circle } from "./shapes/Circle";
import { CompoundShape } from "./shapes/CompoundShape";
import { Dot } from "./shapes/Dot";
import { Rectangle } from "./shapes/Rectangle";

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
