# Dev Tools

## Console

- JavaScript Commands can be entered directly
- Can be used to explore the properties of objects.
- Debugger can be used to explore the properties of objects.

### How to view object properties with the console?

- Open dev tools
- Choose the Console section
- Type the name of objects and their properties
  
### Step Into Button

- Runs code one line at a time and goes into functions

### Step Over Button

- Runs code one line at a time, but steps over functions

### Step Out Button

- Runs code until its out of the current function

### Breakpoints

- Stops running code when it reaches the selected line
- Click on the line to place a red dot

### Conditional Breakpoints

- Stops running code at the selected line if a condition is met
- Must specify the condition
  - Right click on the condition and specify the condition

### Logging to the Console

```javascript
console.log( "This is a message");
console.warn("This is a warning");
console.error("This is an error");
```

- For debugging purposes or quick output

  - Displays messages in the console instead of the web page
  - For debugging purposes or quick output
  - `console.warn`
    - Hightlights the message with yellow
    - Provides infomations where the console command was ran
    - Example: Can be used to specify thing are used correctly
  - `console.error`
    - Hightlights the message with red
    - Provides information where the console command was run
    -  Example: Can be used to specify that a parameter is not being used
  correctly