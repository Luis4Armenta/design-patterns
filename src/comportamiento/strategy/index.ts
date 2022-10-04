import promptSync, { Prompt } from 'prompt-sync';
import IPayStrategy from './strategies/IPayStrategy';
import Order from './models/Order';
import PayByCreditCard from './strategies/PayByCreditCard';
import PayByPayPal from './strategies/PayByPayPal';

const input: Prompt = promptSync();

const priceOnProducts: Map<number, number> = new Map<number, number>(); 
const order: Order = new Order();
let strategy: IPayStrategy | undefined = undefined;

priceOnProducts.set(1, 2200);
priceOnProducts.set(2, 1850);
priceOnProducts.set(3, 1100);
priceOnProducts.set(4, 890);

while (!order.isClosed()) {
  let cost: number = 0;

  let continueChoice: string; 
  do {
    console.log(`Please select a product: \n
    1 - Mother board
    2 - CPU
    3 - HDD
    4 - Memory`);
    let choice = parseInt(input(`Option: `));


    const auxCost = priceOnProducts.get(choice);
    cost = auxCost ? auxCost : 0;
    
    const count = parseInt(input('Count: '));

    order.setTotalCost(cost * count);

    continueChoice = input('Do you wish to continue selecting products? Y/N: ');
  } while (continueChoice == 'Y');

  if (strategy === undefined) {
    console.log(`Please select a payment method: 
    1 - PayPal
    2 - Credit Card`);
    const paymentMethod = input(`Option: `);

    if (paymentMethod == '1') {
      strategy = new PayByPayPal();
    } else {
      strategy = new PayByCreditCard();
    }
  }

  order.processOrder(strategy);

  const proceed = input(`Pay ${order.getTotalCost()} units or continue shopping? P/C: `);
  if (proceed == 'P') {
    if (strategy.pay(order.getTotalCost())) {
      console.log('Payment has been successful.');
    } else {
      console.log('FAIL! Please, check your data.')
    }
    order.setClosed();
  }
}