//deep copies are more complex and heavy, but the objects don't "invade" each other's attributes
//see Lodash lib's cloneDeep() for a simplified deep cloning management:
//myObj = _.cloneDeep(objPrototype)

export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  //deep copy
  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
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
