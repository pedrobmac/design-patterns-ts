import { Seller } from './seller';
import { SellerProduct } from './seller-product.type';

export class Mediator {
  private sellers: Seller[] = [];

  addSellers(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      this.sellers.push(seller);
      seller.setMediator(this);
    });
  }

  //As a mediator, the class "buys" the seller's "sell"
  buy(id: string): SellerProduct | void {
    let product;

    const sellersLength = this.sellers.length;
    for (let i = 0; i < sellersLength; i++) {
      product = this.sellers[i].sell(id);
      if (product) {
        console.log('Buying product:', product.id, product.name, product.price);
        return;
      }
    }
    console.log(`Product ${id} not found`);
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
