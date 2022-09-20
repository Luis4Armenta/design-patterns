export interface IDevice {
  volume: number;
  channel: number;
  on: boolean;
  
  printStatus(): void;
}