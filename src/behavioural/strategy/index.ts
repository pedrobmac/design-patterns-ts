// import { DefaultDiscount } from './shopping-cart/default-discount';
import { ECommerceShoppingCart } from './shopping-cart/e-commerce-shopping-cart';
import { NewDiscount } from './shopping-cart/new-discount';

const shoppingCart = new ECommerceShoppingCart();
// shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();

shoppingCart.addProduct({ name: 'Product 1', price: 100 });
shoppingCart.addProduct(
  { name: 'Product 2', price: 70 },
  { name: 'Product 3', price: 30 },
);

console.log('Total price:', shoppingCart.getTotal());
console.log('Total price with discount:', shoppingCart.getTotalWithDiscount());
