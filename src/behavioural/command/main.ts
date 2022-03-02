import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

//Receiver
const bathroomLight = new SmartHouseLight(`Bathroom's light`);
const bedroomLight = new SmartHouseLight(`Bedroom's light`);

//Command
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bedroomIntensityPowerCommand = new LightIntensityCommand(bedroomLight);

//Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-0', bathroomLightPowerCommand);
smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.addCommand('btn-2', bedroomIntensityPowerCommand);

smartHouseApp.executeCommand('btn-0');
smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-0');

for (let i = 0; i < 10; i++) {
  smartHouseApp.executeCommand('btn-2');
}

for (let i = 0; i < 3; i++) {
  smartHouseApp.undoCommand('btn-2');
}
