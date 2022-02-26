import { DiscountStrategy } from './discount-strategy';
import { ECommerceProductProtocol } from './e-commerce-product-protocol';

export class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
  getTotalWithDiscount(): number {
    // legacy discount rules

    //default discount
    // if (total >= 150) {
    //   this.discount = 5;
    // }

    //new discount
    // const total = this.getTotal();
    // if (total >= 100 && total < 200) {
    //   this.discount = 10;
    // } else if (total >= 200 && total < 300) {
    //   this.discount = 20;
    // } else if (total >= 300) {
    //   this.discount = 30;
    // }

    return this._discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}
