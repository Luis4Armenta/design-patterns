export default class CreditCard {
  private amount: number;
  private num: string;
  private date: string;
  private cvv: string;

  public constructor (num: string, date: string, cvv: string) {
    this.num = num;
    this.date = date;
    this.cvv = cvv;
    this.amount = 100_000;
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }

  public getAmount(): number {
    return this.amount;
  }
}
