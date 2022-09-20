export class RoundPeg {
  private radius: number = 0;

  public constructor(radius?: number) {
    if (radius) {
      this.radius = radius;
    }
  }

  public getRadius(): number {
    return this.radius;
  }
}