import { ChekeFacade } from "./CheckFade";

export function facade() {
  const facade = new ChekeFacade();
  facade.search('02/07/2022', '08/07/2022', 'Ciudad de México', 'Monterrey');

  facade.search('06/07/2022', '01/08/2022', 'Ciudad de México', 'California');

}