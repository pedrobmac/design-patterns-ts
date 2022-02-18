import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductPrintingDecorator } from './product/product-printing-decorator';
import { Shirt } from './product/shirt';

const shirt = new Shirt();
console.log(shirt.getPrice());
console.log(shirt.getName());

const printedShirt = new ProductPrintingDecorator(shirt);
console.log(printedShirt.getPrice());
console.log(printedShirt.getName());

const doublePrintedShirt = new ProductPrintingDecorator(printedShirt);
console.log(doublePrintedShirt.getPrice());
console.log(doublePrintedShirt.getName());

const printedCustomShirt = new ProductCustomizationDecorator(printedShirt);
console.log(printedCustomShirt.getPrice());
console.log(printedCustomShirt.getName());
