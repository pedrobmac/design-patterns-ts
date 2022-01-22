import { Vehicle } from '../vehicle/vehicle';
import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';

export function randomVehicleAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta');
  const bicycle1 = bicycleFactory.getVehicle('Caloi');
  const bicycle2 = bicycleFactory.getVehicle('Camelo');
  const vehicles = [car1, car2, bicycle1, bicycle2];

  return vehicles[randomNumbers(vehicles.length)];
}
