import IPayStrategy from "./IPayStrategy";
import promptSync, {Prompt} from 'prompt-sync';


export default class PayByPayPal implements IPayStrategy {
  private static readonly DATA_BASE: Map<string, string> = new Map<string, string>();
  private readonly input: Prompt = promptSync(); 
  private email: string = '';
  private password: string = '';
  private signedIn: boolean = false; 

  static {
    this.DATA_BASE.set("amanda1985", "amanda@ya.com");
    this.DATA_BASE.set("qwerty", "john@amazon.eu");
  }
  
  collectPaymentDetails(): void {
    try {
      while(!this.signedIn) {
        this.email = this.input(`Enter the user's email: `);
        this.password = this.input(`Enter the password: `);
        if (this.verify()) {
          console.log("Data verification has been successful.");
        } else {
          console.log("Wrong email or password!");
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  pay(paymentAmount: number): boolean {
    if (this.signedIn) {
      console.log(`Paying ${paymentAmount} using PayPal.`);
      return true;
    } else {
      return false;
    }
  }
  
  private verify(): boolean {
    this.setSignedIn(this.email == PayByPayPal.DATA_BASE.get(this.password));
    return this.signedIn;
  }

  private setSignedIn(signedIn: boolean) {
    this.signedIn = signedIn;
  }
  
}