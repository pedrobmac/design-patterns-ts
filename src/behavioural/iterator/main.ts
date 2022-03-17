import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItems('A', 'B', 'C', 'D', 'E', 'F');
// console.log(dataStructure);

const [a, b] = dataStructure;
console.log('"Stolen" items:', a, b);
console.log('something else...');
const [c, ...rest] = dataStructure;
console.log(c, rest);

console.log('------------');
dataStructure.resetIterator(); //manually resets the index of the chosen iterator
for (const data of dataStructure) {
  console.log(data);
}

console.log('------------');
dataStructure.changeIterator(new MyReverseIterator(dataStructure));
for (const data of dataStructure) {
  console.log(data);
}
