//chamada sem a factory:
// import { Car } from '../vehicle/car';

// const carro1 = new Car('Fusca');
// carro1.pickup('Joana');
// carro1.stop();

// const carro2 = new Car('Chevette');
// carro2.pickup('Carlos');
// // carro2.stop();

//-------------

//chamada com a factory
import { CarFactory } from '../factories/car-factory';

const carFactory = new CarFactory();

const carro1 = carFactory.getVehicle('Fusca');
carro1.pickup('Joana');
carro1.stop();

const carro2 = carFactory.getVehicle('Chevette');
carro2.pickup('Carlos');
carro2.stop();

//-----------

const newCar = carFactory.pickUp('Manoel', 'Corsel');
newCar.stop();
