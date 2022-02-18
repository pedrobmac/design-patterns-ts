//Concrete Decorator

import { ProductDecorator } from './product-decorator';

export class ProductPrintingDecorator extends ProductDecorator {
  getName(): string {
    return this.product.getName() + ' (printed)';
  }

  getPrice(): number {
    return this.product.getPrice() + 10;
  }
}
