import { DeviceImplementation } from './device-implementation';

export class Tv implements DeviceImplementation {
  private name = 'TV';
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
    if (volume < 0 || volume > 100) return;
    this.volume = volume;
  }
  getVolume(): number {
    return this.volume;
  }
}
