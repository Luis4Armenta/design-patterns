import { IDevice } from "../../IDevice";

export class Tv implements IDevice {
  private _on: boolean = false;
  private _volume: number = 25;
  private _channel: number = 1;

  public get on(): boolean {
    return this._on;
  }

  public set on(state: boolean) {
    this._on = state;
  }
  
  public set volume(volume: number) {
    this._volume = volume;
  }

  public get volume(): number {
    return this._volume;
  } 

  public set channel(channel: number) {
    this._channel = channel;
  }

  public get channel(): number {
    return this._channel;
  }

  public printStatus(): void {
    console.log(`------------------------------------`);
    console.log(`| I'm Tv.`);
    console.log(`| I'm ${ this.on ? 'enabled' : 'disabled' }`);
    console.log(`| Current volume is ${this.volume}%`);
    console.log(`| Current channel is ${this.channel}`);
    console.log(`------------------------------------\n`);
  }

}