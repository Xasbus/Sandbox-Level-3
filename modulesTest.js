/**************************
 * Importing in this file
 **************************/

import { myModule } from "./modules.js";
import { outputModule } from "./utility-fuctions.js";

window.moduleExample = moduleExample;

function moduleExample() {
  debugger;
  myModule();
  outputModule("Hello World.");
}
