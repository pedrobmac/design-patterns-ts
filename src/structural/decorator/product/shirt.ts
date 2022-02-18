//Concrete Component
import { ProductProtocol } from './product-protocol';

export class Shirt implements ProductProtocol {
  private name = 'cool shirt';
  private price = 34.99;

  getPrice(): number {
    return this.price;
  }
  getName(): string {
    return this.name;
  }
}
