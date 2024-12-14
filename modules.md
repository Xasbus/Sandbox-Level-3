# Modules
##

### Modules Note

- Modules allow the code in a javascript file to be used in other javascript files.
- Modules use the keywords
  - `export`
  - `import`
- It's only necessary to attach a module to the `window` object if the module will be used by the HTML file.
  - `moduleExample` is directly used by the HTML file
  - `outputModule` is not directly used by the HTML.
  - The property name doesn't need to match the module name.

### Export

- Allows code to be used by other JavaScript files

### Import

- `"./modules.js"`
- Uses code from another JavaScript file
- The dot mean current folder
- The `type` attribute must be set `module`
  - `<script src="modulesTest.js" type="module"></script>`

### Import Syntax

  1. Use a pair of curly braces
  2. Insert the module name
  3. Use the keyword `from`
  4. Include the path of the file in quotations

### Relative Path Notation

- Uses the `./`
- `.` means to look in the current folder

### Function hoisting

- JavaScript invisibly brings functions definitions to the top
- Functions can be called before they are defined in a file

### Object Oriented Programming

- Create objects that bundle related data and functions together
- The keywords `class`, `new`, and `this` are used to achieve OOP.

### Folder Structure

```
> controllers
> modules
> utils
```

- `modules`: Contains functions specific to the project
- `utils`: Contains functions that can be used by other projects
- `controllers`: Contains functions that control the flow of how modules are used
  - Usually 1 function or class per file

### Relative file paths

- `./` Look in the current folder
- `../` Go back one folder

### Module Errors

--- Uncaught SyntaxError: Cannot use import statement outside a module
```javascript
<script src="modulesTest.js" type="Module"></script>
```
  - Fixed by adding `type="module`


--- GET http://localhost:8081/utils/output net:: ERR_ABORTED 404 (Not Found)
```javascript
import { myModule } from "./modules.js";
```
- Remember to add `.js`
- when importing... it auto adds the import without the `.js`

### VS Code Automatically Imports

1. Open the module file `output.js`
2. Open the file that will import the module `moduleTest.js`
3. Start typing the module name
4. Select the module from the pop-up list

### How to find the class of an object

`[[Prototype]]: HTMLFormElement`

1. Use the debugger to explore the object
2. The class is in the `[[Prototype]]`