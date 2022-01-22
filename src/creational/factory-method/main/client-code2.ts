import { randomNumbers } from '../utils/random-numbers';
import { randomVehicleAlgorithm } from './random-vehicle-algorithm';

const customerNames = ['Alice', 'Bianca', 'Cláudia', 'Denise', 'Elisa'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicleAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickup(name);
  vehicle.stop();
  console.log('-------------');
}
