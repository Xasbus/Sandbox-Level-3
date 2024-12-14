# JavaScript

### Arrays

Create an empty array.

`const myArray = [];`

Push values into the array.

`myArray.push("I'm a string value");
`myArray.push(2025);
`myArray.push(true);`

### Window Object
- Window object contains and represents the browser and its features.
- Contains JavaScript functions and variables
- The `id` of HTML elements get attached to the window object 

### Bracket Notation

```javascript
const myCar = {
    color: "red",
    year: 2024,
    forsale: false,
    } ;

const propertyName = "forSale";
const myValue = myCar [propertyName];
```

- Similar to array notation
- Access an object property with a variable or a string

### Default Parameter Values

`function output(message, outputTag = "outputTag")`

- Parameters can automatically be given a default value
- When an undefined value is provided, the default value applies

### Single-line Code Blocks

```javascript
if (isDone) output("Done!");
else output("Not yet done!");
```
- Curly braces are nto required for single-line code blocks

### Falsey Values
-Values that evaluate to false when they are used in a condition
    - undefined
    - empty string `""`
    - zero `0`
    - `NaN`

### Truthy Values
- Values that evaluate to true when they are used in a condition
    - non-empty string `"I'm a string"`
    - non-zero numbers `123`
    - arrays `[]`
    - object `{}`

### Parameter Types

```javascript
function output(message = "Default Message", outputTag = "outputTag", shouldAppend)
```

- By specifiying default values, VSCode automatically pops up infomation about what type each parameter should be


### for of , loops (lists)

- The keyword `of` iterates through all the items in an array
1. Use the keyword `for`
2. Declare a changing variable with `let`
3. Use the keyword `of`
4. Add the array

### for in, loops (object)

- The keyword `in` iterates through all the propeties in an object
1. Use the keyword `for`
2. Declare a changing variable with `let`
3. Use the keyword `in`
4. Add the object

### Boolean operators

- `<` Less than
- `<=` Less than or equal to
- `>` Greater than
- `>=` Greater than or equal to
- `===` Equal
- `!==` Not equal
- `!` Not
  - Returns the opposite of the condition 
- `&&` And
  - It returns true when both conditions are true
  - It returns false if both conditions are not true
- `||` Or
  - Returns true if any of the conditions are true
  - Returns false if none of the conditions are true

### Event Object Properties

`event = new Event()`

- To view the properties of the event
object, set the default parameter value.