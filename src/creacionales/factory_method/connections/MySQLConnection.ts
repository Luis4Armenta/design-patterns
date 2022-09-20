import { IConnection } from "../interfaces/IConnection";

export class MySQLConnection implements IConnection {
  private static instance: MySQLConnection;
  private connectionMessage: string = 'Connection from MySQL';

  public constructor() {
    if (MySQLConnection.instance) {
      return MySQLConnection.instance;
    }
    MySQLConnection.instance = this
  }
  
  public setConnectionMessage(message: string): void {
    this.connectionMessage = message;
  }

  public connect(): void {
    console.log(this.connectionMessage);
  }

  public disconnect(): void {
    console.log('Disconnection from MySQL');
  }
}