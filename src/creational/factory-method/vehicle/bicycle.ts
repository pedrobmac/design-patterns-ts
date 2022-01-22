//ConcreteProduct

import { Vehicle } from './vehicle';

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickup(customerName: string): void {
    console.log(`${customerName} está pedalando a ${this.name}`);
  }

  stop(): void {
    console.log(`${this.name} chegou ao ponto`);
  }
}
