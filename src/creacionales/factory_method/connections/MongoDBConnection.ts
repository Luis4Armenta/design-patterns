import { IConnection } from "../interfaces/IConnection";

export class MongoDBConnection implements IConnection {
  private static instance: MongoDBConnection;
  private connectionMessage = 'Connection from MongoDB';

  public constructor() {
    if (MongoDBConnection.instance) {
      return MongoDBConnection.instance;
    }

    MongoDBConnection.instance = this
  }
  
  public setConnectionMessage(message: string): void {
    this.connectionMessage = message;
  }

  public connect(): void {
    console.log(this.connectionMessage);
  }

  public disconnect(): void {
    console.log('Disconnection from MongoDB');
  }
}