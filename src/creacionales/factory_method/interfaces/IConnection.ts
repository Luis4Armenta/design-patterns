export interface IConnection {
  setConnectionMessage(message: string): void,
  connect(): void;
  disconnect(): void;
}