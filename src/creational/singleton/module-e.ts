import { MyDatabaseFunction } from './db/my-db-function';

console.log('--- Module E ---');
const db1 = MyDatabaseFunction;

db1.add({ name: 'Ana', age: 29 });
db1.add({ name: 'Bruno', age: 31 });
db1.add({ name: 'Cláudia', age: 53 });
db1.show();

export { db1 };
