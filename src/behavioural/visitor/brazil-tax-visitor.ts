import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    const price = food.getPrice();
    return price + price * 0.2;
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    const price = cigarette.getPrice();
    return price + price * 1.0;
  }
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    const price = alcoholicDrink.getPrice();
    return price + price * 0.75;
  }
}
