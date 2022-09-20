import { IBuilder } from "./IBuilder";
import { Pizza } from "./Pizza";

export class PizzaBuilder implements IBuilder {
  private pizza: Pizza;
  
  public constructor() {
    this.pizza = new Pizza();
  }

  public setDough(dough: string): void {
    this.pizza.setDough(dough);
  }
  
  public setOrderSize(size: string): void {
    this.pizza.setSize(size);
  }

  public addTomatoSauce(): void {
    this.pizza.addIngredient('Sauce');
  }

  public addTCheese(): void {
    this.pizza.addIngredient('Cheese');
  }

  public addPineapple(): void {
    this.pizza.addIngredient('Pineapple');
  }

  public addBacon(): void {
    this.pizza.addIngredient('Bacon');
  }

  public addHam(): void {
    this.pizza.addIngredient('Ham');
  }

  public addPepperoni(): void {
    this.pizza.addIngredient('Pepperoni');
  }

  public addLoin(): void {
    this.pizza.addIngredient('Loin');
  }

  public addSausage(): void {
    this.pizza.addIngredient('Susage');
  }

  public addLeg(): void {
    this.pizza.addIngredient('Susage');
  }

  public reset(): void {
    this.pizza = new Pizza();
  }

  public getResult(): Pizza {
    if (this.pizza.getDough() && this.pizza.getSize() && this.pizza.getIngredients().length) {
      const result = this.pizza;
      this.pizza = new Pizza();
      return result;
    } else {
      throw new Error('This pizza has nothing')
    }
  }
}