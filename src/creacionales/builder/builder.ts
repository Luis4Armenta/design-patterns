import { Director } from "./Director";
import { PizzaBuilder } from "./PizzaBuilder";

export function builder() {

  const pizzaBuilder = new PizzaBuilder();
  const director = new Director(pizzaBuilder);

  director.buildPepperoniPizza('big', 'original')

  const order = pizzaBuilder.getResult();

  director.buildHawaiianPizza('big', 'original');

  const order2 = pizzaBuilder.getResult();

  // director.buildColdMeatsPizza('', '');
  // 
  // const order3 = pizzaBuilder.getResult();

  console.log('Pizza 1:', order.getDescription());
  console.log('Pizza 2:', order2.getDescription());
  // console.log('Pizza 3:', order3.getDescription());

}