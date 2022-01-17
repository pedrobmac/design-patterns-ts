import { MyDatabaseModule } from './db/my-db-module';

console.log('--- Module C ---');
const db1 = MyDatabaseModule;

db1.add({ name: 'Ana', age: 29 });
db1.add({ name: 'Bruno', age: 31 });
db1.add({ name: 'Cláudia', age: 53 });
db1.show();

export { db1 };
