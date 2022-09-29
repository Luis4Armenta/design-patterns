let canvas2 = document.getElementById('canvas2') as HTMLCanvasElement;
let context2 = canvas2.getContext('2d') as CanvasRenderingContext2D;

class TreeType {
  private name: string;
  private color: string;
  private otherTreeData: string;

  public constructor(name: string, color: string, otherTreeData: string) {
    this.name = name;
    this.color = color;
    this.otherTreeData = otherTreeData;
  }

  public draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.beginPath()
    ctx.fillStyle = 'brown'
    ctx.fillRect(x, y, 5, 20)
    ctx.fillStyle = this.color
    ctx.ellipse(x + 2.5, y, 14, 8, 0, 0, 2*Math.PI)
    ctx.fill();
  }
}

class Tree {
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

class TreeFactory {
  public static treeTypes = new Map<string, TreeType>()

  public static getTreeType(name: string, color: string, otherTreeData: string) {
    let result = this.treeTypes.get(name);

    if (result == undefined) {
      result = new TreeType(name, color, otherTreeData);
      this.treeTypes.set(name, result);
    }
    return result;
  }
}

class Forest {
  private trees: Array<Tree> = [];

  public plantTree(x: number, y: number, name: string, color: string, otherTreeData: string): void {
    const type = TreeFactory.getTreeType(name, color, otherTreeData)

    const tree: Tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  public paint(ctx: CanvasRenderingContext2D) {
    this.trees.forEach(tree => {
      tree.draw(ctx)
    })
  }
}

const forest = new Forest();

for (let i = 0; i < 10000; i++) {
  const color = Math.random()
  if (color >0.5) {
    forest.plantTree(Math.round(Math.random() * 400), Math.round(Math.random() * 400), 'Summer Oak', 'green', 'more data')
  } else {
    forest.plantTree(Math.round(Math.random() * 400), Math.round(Math.random() * 400), 'Autumn Oak', 'orange', 'more data blah blah')
  }
}

forest.paint(context2);

