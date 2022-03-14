import { OrderPending } from './order-pending';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log(`Cannot approve order: status is ${this.order.getStateName()}`);
  }

  rejectPayment(): void {
    console.log('Order status already as "OrderRejected"');
  }

  waitPayment(): void {
    this.order.setState(new OrderPending(this.order));
  }

  shipOrder(): void {
    console.log(`Cannot ship order: status is ${this.order.getStateName()}`);
  }
}
