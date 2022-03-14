import { AlcoholicDrink } from './alcoholic-drink';
import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { FranceTaxVisitor } from './france-tax-visitor';

const food = new Food(15);
const cigarette = new Cigarette(6.5);
const alcoholicDrink = new AlcoholicDrink(12);

const cart = [food, cigarette, alcoholicDrink];
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
console.log('Total:', total);

const brazilTaxVisitor = new BrazilTaxVisitor();
const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0,
);
console.log('Total with Taxes (Brazil):', totalWithTaxesBrazil);

const franceTaxVisitor = new FranceTaxVisitor();
const totalWithTaxesFrance = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(franceTaxVisitor) + sum,
  0,
);
console.log('Total with Taxes (France):', totalWithTaxesFrance);
