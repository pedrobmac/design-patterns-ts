import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Pedro', '13B', 'Groove St.', 'Poá');
deliveryContext(factory, 'Paula', '13B', 'Groove St.', 'Poá');
deliveryContext(factory, 'Tito', '12A', 'Groove St.', 'Poá');
deliveryContext(factory, 'Negresco', '10', 'Groove St.', 'Poá');
deliveryContext(factory, 'Eliana', '123', 'Av Brasil', 'São Paulo');
deliveryContext(factory, 'Hebe', '456', 'Av Brasil', 'São Paulo');
deliveryContext(factory, 'Carlos', '45', 'Rua das Dores', 'Itajubá');

console.log('#####');
console.log(factory.getLocations());
