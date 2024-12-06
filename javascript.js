function greetingExample() {
    output("Greeting World", "greetingTag");
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