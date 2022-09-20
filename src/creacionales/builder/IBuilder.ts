export interface IBuilder {
  setOrderSize(size: string): void

  setDough(dough: string): void
  setOrderSize(size: string): void

  addTomatoSauce(): void
  addTCheese(): void
  addPineapple(): void
  addBacon(): void
  addHam(): void
  addPepperoni(): void
  addLoin(): void
  addSausage(): void
  addLeg(): void
  reset(): void
}