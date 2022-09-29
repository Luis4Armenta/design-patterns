import { Tree } from "./Tree";
import { TreeFactory } from "./TreeFactory";

export class Forest {
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