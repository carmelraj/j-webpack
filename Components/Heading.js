import "./Heading.scss";
class Heading {
  render() {
    const head = document.createElement("h2");
    head.innerHTML = "new heading";
    head.classList.add("heading");
    const body = document.querySelector("body");
    body.append(head);
  }
}
export default Heading;
