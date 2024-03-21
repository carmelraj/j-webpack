import displayHelloWorld from "./helloWorld";
import addImage from "./image";
import ExampleButton from "./Components/ExampleButton";
import Heading from "./Components/Heading";
displayHelloWorld();
addImage();
// ExampleButton();
const exampeButton = new ExampleButton();
exampeButton.render();

const heading = new Heading();
heading.render();

// ES6 to ES5
const multiply = (a, b) => {
  let c = a * b;
  console.log(`mutiply of ${a} and ${b} is ${c}`);
};
multiply(2, 2);
