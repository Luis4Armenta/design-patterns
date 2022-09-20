import { FlightsAPI } from "./dependencies/FlightsAPI";
import { HotelsAPI } from "./dependencies/HotelsAPI";

export class ChekeFacade {
  private flightsAPI: FlightsAPI;
  private hotelsAPI: HotelsAPI;

  public constructor() {
    this.flightsAPI = new FlightsAPI();
    this.hotelsAPI = new HotelsAPI();
  }

  public search(goingDate: string, comeBackDate: string, from: string, to: string): void {
    this.flightsAPI.searchFlights(goingDate, comeBackDate, from, to);
    this.hotelsAPI.searchHotels(goingDate, comeBackDate);
  }
}