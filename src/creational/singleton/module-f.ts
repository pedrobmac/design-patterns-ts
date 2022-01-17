import { MyDatabaseFunction } from './db/my-db-function';
import { db1 as myDbConnectionFromModuleE } from './module-e';

const myDbConnection = MyDatabaseFunction;

console.log('--- Module F ---');

myDbConnection.remove(1);
myDbConnection.add({ name: 'Daniel', age: 19 });
myDbConnection.add({ name: 'Elaine', age: 64 });

myDbConnection.show();

console.log(myDbConnection === myDbConnectionFromModuleE);
