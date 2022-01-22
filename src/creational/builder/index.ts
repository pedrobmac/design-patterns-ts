import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const dish = new MainDishBuilder();
dish.makeMeal();
console.log(dish.getMeal(), dish.getPrice());

dish.reset();
dish.makeMeal().makeDessert();
console.log(dish.getMeal(), dish.getPrice());

dish.reset();
dish.makeMeal().makeBeverage().makeDessert();
console.log(dish.getMeal(), dish.getPrice());

const veganDish = new VeganDishBuilder();

veganDish.makeMeal().makeDessert();
console.log(veganDish.getMeal(), veganDish.getPrice());
