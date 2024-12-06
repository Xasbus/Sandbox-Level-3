function forOfExample() {
    const myArray = ["Hello there", 2025, true];

    for (let item of myArray) {
        output(`${item}<br>`, "outputTag");
    }
}

function forInExample() {
    const myObject = {
        myString: "Hello world!",
        myNumber: 2024,
        myBoolean: true,
    };

    for (let propertyName in myObject) {
        const value = myObject[propertyName];
        output(`${propertyName} is ${value}<br>`, "outputTag2");
    }
}