export interface DeviceImplementation {
  getName(): string; //original declaration to be agnostic
  setPower(powerStatus: boolean): void;
  getPower(): boolean;
  setVolume(volume: number): void;
  getVolume(): number;
}
