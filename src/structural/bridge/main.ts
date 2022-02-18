import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower(); //true

  //TypeGuard to guarantee we are dealing with a remote control with volume
  if (!('volumeUp' in abstraction)) return;
  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeDown();
}

const radio = new Radio();
const radioRemoteControlWithVolume = new RemoteControlWithVolume(radio);
clientCode(radioRemoteControlWithVolume);

const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);

const tv = new Tv();
const tvRemoteControlWithVolume = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControlWithVolume);
const tvRemoteControl = new RemoteControl(tv);
clientCode(tvRemoteControl);
