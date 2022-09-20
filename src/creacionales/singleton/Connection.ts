export class Connection {
  private static _instance: Connection;
  public message: string = '';

  private constructor() {

  }

  public static getInstance() {
    if (this._instance == null) {
      this._instance = new Connection;
      return this._instance
    } else {
      return this._instance
    }
  }

  /**
   * Coloca el mensaje que vas a imprimir
   * @param message - menssage no mayor a 20 caracteres
   * @returns un valor void
   */
  public setMessage(message: string): void {
    this.message = message;
  }

  public say(): void {
    console.log(this.message);
  }
}
