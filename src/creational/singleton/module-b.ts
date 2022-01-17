import { MyDatabaseClassic } from './db/my-db-classic';
import { db1 as myDbConnectionFromModuleA } from './module-a';

const myDbConnection = MyDatabaseClassic.instance;

console.log('--- Module B ---');

myDbConnection.remove(1);
myDbConnection.add({ name: 'Daniel', age: 19 });
myDbConnection.add({ name: 'Elaine', age: 64 });

myDbConnection.show();

console.log(myDbConnection === myDbConnectionFromModuleA);
