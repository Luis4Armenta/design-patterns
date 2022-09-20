import { RoundPeg } from "./RoundPeg";

export class RoundHole {
  private radius: number;

  public constructor(radius: number) {
    this.radius = radius;
  }

  public getRadius(): number {
    return this.radius;
  }

  public fits(peg: RoundPeg): boolean {
    return this.radius >= peg.getRadius() ? true : false;
  }
}