import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';

export interface TaxVisitorProtocol {
  calculateTaxesForFood(arg: Food): number;
  calculateTaxesForCigarette(arg: Cigarette): number;
  calculateTaxesForAlcoholicDrink(arg: AlcoholicDrink): number;
}
