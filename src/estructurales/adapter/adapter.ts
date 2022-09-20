import { RoundHole } from "./round/RoundHole";
import { SquarePeg } from "./square/SquarePeg";
import { SquarePegAdapter } from "./square/SquarePegAdapter";

export function adapter() {
  const hole = new RoundHole(10);
  const square = new SquarePeg(14);


  const adapter = new SquarePegAdapter(square);

  console.log(hole.fits(adapter))
}