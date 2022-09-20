export class Pizza {
  private size: string = '';
  private dough: string = '';
  private price: number = 0;
  private ingredients: Array<string> = [];

  public setSize(size: string): void {
    this.size = size;
  }

  public getSize(): string {
    return this.size
  }

  public setDough(dough: string): void {
    this.dough = dough;
  }

  public getDough(): string {
    return this.dough;
  }

  public addIngredient(ingredient: string): void {
    this.ingredients.push(ingredient);
  }

  public getIngredients(): Array<string> {
    return this.ingredients;
  }

  public getDescription(): string {
    return `
    Pizza Size: ${this.size}  dough: ${this.dough}
    Ingredients: ${this.ingredients.slice(0, -1).join(', ')} & ${this.ingredients[this.ingredients.length-1]}
    Price: ${this.price}
    `;
  }
}