import { IBuilder } from "./IBuilder";

export class Director {
  private builder: IBuilder;

  public constructor(builder: IBuilder) {
    this.builder = builder;
  }

  public buildHawaiianPizza(size: string, dough: string): void {
    this.builder.setOrderSize(size);
    this.builder.setDough(dough);
    this.builder.addTomatoSauce()
    this.builder.addTCheese();
    this.builder.addHam();
    this.builder.addBacon();
    this.builder.addPineapple();
  }

  public buildColdMeatsPizza(size: string, dough: string): void {
    this.builder.setOrderSize(size);
    this.builder.setDough('dough');
    this.builder.addTomatoSauce()
    this.builder.addTCheese();
    this.builder.addLeg();
    this.builder.addPepperoni();
    this.builder.addBacon();
    this.builder.addSausage();
    this.builder.addLoin();
  }

  public buildPepperoniPizza(size: string, dough: string): void {
    this.builder.setOrderSize(size);
    this.builder.setDough('dough');
    this.builder.addTomatoSauce()
    this.builder.addTCheese();
    this.builder.addPepperoni();
  }
}