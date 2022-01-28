//Component
export abstract class ProductComponent {
  abstract getPrice(): number;

  // add(product: ProductComponent): void {}
  // remove(product: ProductComponent): void {}
}

//Leaf
export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super()
  }

  getPrice(): number {
    return this.price;
  }
}

//Composite
export class ProductComposite extends ProductComponent {
  private chidren: ProductComponent[] = []
  
  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.chidren.push(product));
  }
  
  remove(product: ProductComponent): void {
    const productIndex = this.chidren.indexOf(product);
    if (productIndex !== -1) this.chidren.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.chidren.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

//Client-code
const pen = new ProductLeaf('Biro', 7);
const smartphone = new ProductLeaf('Tijolão', 1_500);
const tShirt = new ProductLeaf('Camiseta', 30);

const productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt);

console.log(productBox);
console.log(productBox.getPrice());

const tablet = new ProductLeaf('Tablet', 2_000);
const eReader = new ProductLeaf('Kindle', 400);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, eReader);
productBox.add(anotherProductBox); //add a box inside the first one

console.log(productBox);
console.log(productBox.getPrice());