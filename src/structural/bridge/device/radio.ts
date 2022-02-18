import { DeviceImplementation } from './device-implementation';

export class Radio implements DeviceImplementation {
  private name = 'Radio';
  private power = false;
  private volume = 10;

  getName(): string {
    return this.name;
  }
  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }
  getPower(): boolean {
    return this.power;
  }
  setVolume(volume: number): void {
    if (volume < 0 || volume > 50) return;
    this.volume = volume;
  }
  getVolume(): number {
    return this.volume;
  }
}
