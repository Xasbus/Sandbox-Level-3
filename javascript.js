function greetingExample() {
  output("Greeting World", "greetingTag", false);
}

function overwriteExample() {
  output("Overwriting Stuff!", "overwriteTag", false);
}

function bracketNotationExample() {
  const myCar = {
    color: "red",
    year: 2024,
    forSale: false,
  };

  const propertyName = "forSale";
  const myValue = myCar[propertyName];

  output(`The ${propertyName} is ${myValue}<br>`);
}

function propertyChaining() {
  debugger;
  const myCar = {
    components: {
      engine: {
        parts: {
          cylinders: {
            count: 4,
          },
        },
      },
    },
  };

  const cylinderCount = myCar.components.engine.parts.cylinders.count;
  output(cylinderCount, "propertyChainingTag", false);
}

function itemChaining() {
  const myArrays = [[1, 2, 3], [4, 5, 6], ["a,b,c"]];

  // First number selects the array, second is the position of that array.
  const value = myArrays[1][1];
  output(value, "itemChainingTag", false);
}
