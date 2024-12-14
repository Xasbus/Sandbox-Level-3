# Node.js
---
### Node notes

- A program tht can run JavaScrip files in the terminal.
- Node.js is JavaScript for the backend.
- Slightly different from the JavaScript for the frontend.

### Named Exports and Imports

`import { output } from "./modules/output.js";`

- Must use curly braces
- Must use the exact module name
1. Make a greeting function that accepts a name and logs a greeting
2. Import the greeting function and use it
3. Run the module with node and observe the error

### Default Exports and Imports

greetings.js
`export default function greeting (name)`

greetingTest.js
`import sayHiTo from ".greeting.js";`

- Do not use curly braces
- Can use a different name than the module
- There can only be one default export per file
1. Convert the greeting function to a default export
   - Add `default`  after the `export` in the function
2. Import the greeting function with a different name and use it
3. Run the module with node

### NPM = Node Package Manager

- A program that comes with Node.js
- It lets Node.js use module
- Use NPM to install code from other JavaScript programmers
  1. Go to https://npmjs.com
  2. Search for to-no-case
  3. Import with default import syntax
  4. Note the path difference
  5. Use toNoCase and log the results

### How to configure Node.js for modules

1. Intialize NPM
  - `npm init`
  - Select the default options by pressing `ENTER`
2. It creates `package.json`
3. Add `"type": "module",`

### Require function

`require`

- The old way of importing modules
- Not compatible with web browsers even though it's JavaScript
- Can be replaced with default import syntax

### Node modules

- node_modules are reusable code that can be installed with NPM.