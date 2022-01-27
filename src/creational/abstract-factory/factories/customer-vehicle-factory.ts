import { Vehicle } from '../vehicle/vehicle';
import { Customer } from '../customer/customer';

export interface CustomerVehicleFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
