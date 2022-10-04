import IPayStrategy from "./IPayStrategy";
import promptSync, { Prompt } from 'prompt-sync';
import CreditCard from "../models/CreditCard";

export default class PayByCreditCard implements IPayStrategy {
  private readonly input: Prompt = promptSync(); 
  private card: CreditCard | null = null;

  pay(paymentAmount: number): boolean {
    if (this.cardIsPresent() && this.card) {
      console.log(`Paying ${paymentAmount} using credit card`);
      this.card.setAmount(this.card.getAmount() - paymentAmount);
      
      return true;
    } else {
      return false;
    }
  }

  collectPaymentDetails(): void {
    try {
      const num = this.input('Enter the card number: ');
      const date = this.input(`Enter the card expiration date 'mm/yy' `);
      const cvv = this.input(`Enter the CVV code: `);
      
      this.card = new CreditCard(num, date, cvv);
    } catch (error) {
      console.error(error);
    }
  }

  private cardIsPresent(): boolean {
    return this.card != null;
  }
  
}