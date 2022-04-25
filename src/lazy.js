const isIntersecting = (entry) => {
  return entry.isIntersecting; // Tiene propiedad true si está dentro de la vista.
};

const loadImage = (entry) => {
  const container = entry.target;
  const image = container.firstChild;
  const url = image.dataset.src;
  image.src = url;

  // console.log(container.nodeName)
  // debugger;

  // desobservar para que solo escuche una vez
  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries
    .filter(isIntersecting)
    .forEach(loadImage)
});

export const registerImage = (image) => {
  observer.observe(image);
};