import { IConnection } from "../interfaces/IConnection";

export class VoidConnection implements IConnection {
  private static instance: VoidConnection;
  private connectionMessage: string = 'Connection from invalid connection type';
  
  constructor () {
    if (VoidConnection.instance) {
      return VoidConnection.instance;
    }
    VoidConnection.instance = this;
  }

  setConnectionMessage(message: string): void {
    this.connectionMessage = message;
  }

  public connect(): void {
    console.log(this.connectionMessage);
  }

  public disconnect(): void {
    console.log('Disconnection from Invalid connection type')
  }
}