import { registerImage } from "./lazy";

const random = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum)) + minimum

const createImageNode = () => {
  const container = document.createElement('div');
  container.className = "p-4";
  
  const imagen = document.createElement('img');
  imagen.className = "mx-auto object-cover h-80 w-80 bg-gray-400 rounded";
  // imagen.width = "320";
  imagen.dataset.src = `https://randomfox.ca/images/${random(1, 122)}.jpg`; // TODO

  
  container.appendChild(imagen);
  
  return container;
  {/*
    <div class="p-4">
      <img class="mx-auto" width="320" src="https://randomfox.ca/images/2.jpg" alt="">
    </div>
  */}
};

const mountNode = document.getElementById('images')

// Add fox
const button = document.getElementById("addFox");
const addFoxAction = () =>  {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
};
button.addEventListener("click", addFoxAction)
