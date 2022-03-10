import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProducts(
  { id: '1', name: 'Shirt', price: 34.99 },
  { id: '2', name: 'Pen', price: 4.99 },
);
const seller2 = new Seller();
seller2.addProducts({ id: '3', name: 'Car', price: 74990 });
seller2.addProducts({ id: '4', name: 'Bike', price: 2990 });

mediator.addSellers(seller1, seller2);
// mediator.showProducts();

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');
buyer.viewProducts();
