import { AdvancedRemoteControl } from "./implementatios/Controls/AdvancedRemoteControl";
import { BasicRemoteControl } from "./implementatios/Controls/BasicRemoteControl";
import { Radio } from "./implementatios/Devices/Radio";
import { Tv } from "./implementatios/Devices/Tv";

export function bridge() {
  const radio = new Radio();
  const tv = new Tv();

  const radioControl = new BasicRemoteControl(radio);
  const tvControl = new AdvancedRemoteControl(tv);

  tvControl.power();
  tvControl.power();

  radioControl.power();
  radioControl.channelUp();

  radio.printStatus();
  tv.printStatus();
}