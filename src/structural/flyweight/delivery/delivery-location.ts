import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocationData } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}
  deliver(name: string, number: string): void {
    console.log('Delivery to %s', name);
    console.log('At', this.intrinsicState.street, 'nº:', number);
    console.log('City:', this.intrinsicState.city);
  }
}
