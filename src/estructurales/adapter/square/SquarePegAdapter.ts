import { RoundPeg } from "../round/RoundPeg";
import { SquarePeg } from "./SquarePeg";

export class SquarePegAdapter extends RoundPeg {
  private peg: SquarePeg;

  public constructor(squarePeg: SquarePeg) {
    super();
    this.peg = squarePeg;
  }

  public getRadius(): number {
    const result = (Math.sqrt(Math.pow((this.peg.getWidth() / 2), 2) * 2));
    return result;
  }
}