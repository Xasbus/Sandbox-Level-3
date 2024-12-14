import sayHiTo from "../modules/greetings.js";
import toNoCase from "to-no-case";
import toCamelCase from "to-camel-case";
import toSpaceCase from "to-space-case";

const name = toSpaceCase("David Billiot");
sayHiTo(name);
