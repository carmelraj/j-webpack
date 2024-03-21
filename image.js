import Map from "./map.png";

function addImage() {
  const image = document.createElement("img");
  image.src = Map;
  const body = document.querySelector("body");
  body.append(image);
}
export default addImage;
