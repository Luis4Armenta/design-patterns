export class TreeType {
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