import { resolve } from 'path';
import { CustomerDataParserJson } from './customer-data-parser-json';
import { CustomerDataParserTxt } from './customer-data-parser-txt';

async function runParserTxt() {
  const filePath = resolve(__dirname, 'files', 'customer.txt');
  const customerDataParserTxt = new CustomerDataParserTxt(filePath);
  await customerDataParserTxt.fixCustomerData();
  console.log('=== TXT ===');
  console.log(customerDataParserTxt.customerData);
}

async function runParserJson() {
  const filePath = resolve(__dirname, 'files', 'customer.json');
  const customerDataParserJson = new CustomerDataParserJson(filePath);
  await customerDataParserJson.fixCustomerData();
  console.log('=== JSON ===');
  console.log(customerDataParserJson.customerData);
}

runParserTxt();
runParserJson();
