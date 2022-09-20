import { IDevice } from "../../IDevice";
import { IRemote } from "../../IRemote";

export class BasicRemoteControl implements IRemote {
  private _Device: IDevice;

  public constructor(device: IDevice) {
    this._Device = device;
  }
  
  public power(): void {
    this._Device.on = this._Device.on ? false : true;
  }

  public volumeDown(): void {
    this._Device.volume -= 5;
  }

  public volumeUp(): void {
    this._Device.volume =+ 5;
  }

  public channelDown(): void {
    this._Device.channel --;
  }

  public channelUp(): void {
    this._Device.channel ++;
  }
  
}