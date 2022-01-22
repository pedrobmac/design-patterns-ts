//shallow copies are faster, but the objects "invade" each other's attributes

export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  //shallow copy
  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Av Brasil', 123);
const person1 = new Person('Júlia', 22);
person1.addAddress(address1);
const person2 = person1.clone();

console.log(person2);
console.log(person2.name);

person2.name = 'Luísa'; //shadowing
person2.addresses[0].street = 'Av Rio Branco';

console.log(person2.name);
console.log(person2.addresses);

console.log(person1.name);
console.log(person1.addresses); //shallow copy invades person1 address
