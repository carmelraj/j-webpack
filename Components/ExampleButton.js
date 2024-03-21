import "./ExampleButton.scss";
class ExampleButton {
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Press me!";
    button.classList.add("green-button");

    const body = document.querySelector("body");
    body.append(button);
  }
}

export default ExampleButton;
