export class FlightsAPI {
  public searchFlights(goingDate: string, comeBackDate: string, from: string, to: string): void {
    console.log(`===========================================`);
    console.log(`Vuelos encontrados para ${to} desde ${from}`);
    console.log(`Fecha ida: ${goingDate}  Fecha vuelta: ${comeBackDate}`);
    console.log(`===========================================`);
  }
}