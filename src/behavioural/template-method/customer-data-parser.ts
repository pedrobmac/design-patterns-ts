import { CustomerData } from './customer-data.type';

export abstract class CustomerDataParser {
  protected _customerData: CustomerData[] = [];

  constructor(protected filePath: string) {}

  get customerData(): CustomerData[] {
    return this._customerData;
  }

  //hack to make this method 'final'
  readonly fixCustomerData = async (): Promise<void> => {
    this._customerData = await this.parseData();
    this.hook();
    this._customerData = this.fixCpf();
  };

  private fixCpf(): CustomerData[] {
    // return this._customerData.map((customer) => {
    //   return { ...customer, cpf: customer.cpf.replace(/\D/g, '') };
    // });
    //shorter form of the expression above
    return this._customerData.map((customer) => ({
      ...customer,
      cpf: customer.cpf.replace(/\D/g, ''),
    }));
  }

  protected hook(): void {}

  protected abstract parseData(): Promise<CustomerData[]>;
}
