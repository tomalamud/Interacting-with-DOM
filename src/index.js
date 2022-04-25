import jsx from "hyperscript"; // En react le agregaron un decorador para que se pueda escribir como html, pero en el fondo usa esto.
import { registerImage } from "./lazy";

const random = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum)) + minimum

const createImageNode = () => {  
  const imagen = jsx("img.mx-auto.object-cover.h-80.w-80.bg-gray-400.rounded", {
    "data-src": `https://randomfox.ca/images/${random(1, 122)}.jpg`
  });

  const container = jsx("div.p-4", imagen);
  
  return container;
};

const mountNode = document.getElementById('images')

const button = document.getElementById("addFox");
const addFoxAction = () =>  {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
};
button.addEventListener("click", addFoxAction)
