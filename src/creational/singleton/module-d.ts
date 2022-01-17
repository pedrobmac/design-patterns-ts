import { MyDatabaseModule } from './db/my-db-module';
import { db1 as myDbConnectionFromModuleC } from './module-c';

const myDbConnection = MyDatabaseModule;

console.log('--- Module D ---');

myDbConnection.remove(1);
myDbConnection.add({ name: 'Daniel', age: 19 });
myDbConnection.add({ name: 'Elaine', age: 64 });

myDbConnection.show();

console.log(myDbConnection === myDbConnectionFromModuleC);
