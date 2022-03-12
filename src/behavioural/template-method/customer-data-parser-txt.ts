import { promises } from 'fs';
import { CustomerDataParser } from './customer-data-parser';
import { CustomerData } from './customer-data.type';

export class CustomerDataParserTxt extends CustomerDataParser {
  protected async parseData(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = rawData.toString();
    const lines = data.split('\n');
    const customerData: CustomerData[] = [];

    for (const line of lines) {
      const [name, age, cpf] = line.split('\t');
      customerData.push({ name, age, cpf });
    }

    return customerData;
  }
}
