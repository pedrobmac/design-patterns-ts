//Refined Abstraction
import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() + 10);
    console.log(
      `${this.device.getName()} raised volume from ${oldVolume} to ${this.device.getVolume()}`,
    );
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() - 10);
    console.log(
      `${this.device.getName()} dimmed volume from ${oldVolume} to ${this.device.getVolume()}`,
    );
  }
}
