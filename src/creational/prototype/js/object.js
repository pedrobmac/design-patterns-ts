const personPrototype = {
  firstName: 'Júlia',
  lastName: 'Cipriani',
  age: 22,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Luísa'; //shadowing
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName()); //shadowing misturando com a classe do prototype, dada a cadeia de classes
