import { MyDatabaseClassic } from './db/my-db-classic';

const db1 = MyDatabaseClassic.instance;
const db2 = MyDatabaseClassic.instance;

console.log('--- Module A ---');
console.log(db1 === db2);

db1.add({ name: 'Ana', age: 29 });
db1.add({ name: 'Bruno', age: 31 });
db1.add({ name: 'Cláudia', age: 53 });
db1.show();

export { db1 };
