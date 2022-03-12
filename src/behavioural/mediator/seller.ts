import { Mediator } from './mediator';
import { SellerProduct } from './seller-product.type';

export class Seller {
  private products: SellerProduct[] = [];
  private mediator?: Mediator;

  showProducts(): void {
    this.products.forEach((product) =>
      console.log(product.id, product.name, product.price),
    );
  }

  addProducts(...products: SellerProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }

  //links the mediator afterwards to avoid a circular dependency
  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  sell(id: string): SellerProduct | void {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    if (productIndex === -1) return;
    const product = this.products.splice(productIndex, 1);
    return product[0];
  }

  //Enabling the seller to buy as well
  // viewProducts(): void {
  //   if (!this.mediator) return;
  //   this.mediator.showProducts();
  // }

  // buy(id: string): void {
  //   if (!this.mediator) return;
  //   this.mediator.buy(id);
  // }
}