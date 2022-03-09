import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();
order.waitPayment();
order.shipOrder();
order.rejectPayment();
order.approvePayment();
order.shipOrder();
order.waitPayment();
order.approvePayment();
order.shipOrder();
