class Column {
  openingTag = "<div class='col'>";
  closeTag = "</div>";
  innerHTML = "";

  constuctor() {
    console.log("The content of this column will be: " + content);
    this.innerHTML = content;
  }
}

class Car {
  color = "red";

  honkHorn() {
    console.log("Honk, Honk!");
  }

  info() {
    console.log("The color is " + this.color);
  }
  toString() {
    return "This car's color is ";
  }
}

function classExample() {
  debugger;
}

const column1 = new Column();
column1.innerHTML = "I'm a column";
const column2 = new Column();
column2.innerHTML = "I'm a column";
const column3 = new Column();
column3.innerHTML = "I'm a column";

function methodExample() {
  debugger;
  const myCar = new Car();
  myCar.honkHorn();
  output(myCar.toString(), "outputTag1");
}

function thisExample() {
  debugger;
  const car1 = new Car();
  const car2 = new Car();
  const car3 = new Car();

  car1.color = "silver";
  car2.color = "black";
  car3.color = "blue";

  car1.info();
  car2.info();
  car3.info();
}

function toStringExample() {
  debugger;
  const myCar = new Car();
  output(myCar.toString(), "outputTag3");
}

function constructorExample() {
  debugger;
  const column = new Column("This is the content");
}
