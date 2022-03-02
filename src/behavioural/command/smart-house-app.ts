import { SmartHouseCommand } from './smart-house-command';

export class SmartHouseApp {
  private commands: { [k: string]: SmartHouseCommand } = {};

  addCommand(key: string, command: SmartHouseCommand): void {
    //skipping valid command check
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    //skipping valid command check
    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    //skipping valid command check
    this.commands[key].undo();
  }
}
