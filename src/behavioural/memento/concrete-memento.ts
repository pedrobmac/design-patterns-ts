import { Memento } from './memento';

export class ConcreteMemento implements Memento {
  //for bigger classes, combine the data fields into a single object
  constructor(
    private name: string,
    private date: Date,
    private filePath: string,
    private fileFormat: string,
  ) {}

  getName(): string {
    return this.name;
  }

  getDate(): Date {
    return this.date;
  }

  getFilePath(): string {
    return this.filePath;
  }

  getFileFormat(): string {
    return this.fileFormat;
  }
}
