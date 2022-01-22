function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
// Person.prototype = Object.create(personPrototype); //function in a const does not use hoisting

const personPrototype = {
  firstName: 'Júlia',
  lastName: 'Cipriani',
  age: 22,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person; //recovers the constructor property

const person1 = new Person('Luísa', 'Oliveira', 18);
console.log(person1);
console.log(person1.fullName());

//--------------

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'Teste';
}
SubPerson.prototype = Object.create(Person.prototype);
Person.prototype.constructor = SubPerson;

const person2 = new SubPerson('Lívia', 'Coelho', 26);
console.log(person2);
console.log(person2.fullName());
console.log(person2.fromSubClass);
