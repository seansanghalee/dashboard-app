const images = [
  "airplane.jpg",
  "birds.jpg",
  "clock.jpg",
  "coffee.jpg",
  "desk.jpg",
  "giraffe.jpg",
  "lamp.jpg",
  "mountain.jpg",
  "plant.jpg",
  "sky.jpg",
  "stairs.jpg",
  "tree.jpg",
  "wall.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// option 1: changing background image of body

document.body.style.backgroundImage = `url(./images/${chosenImage})`;
document.body.style.backgroundSize = "100% 100%";

// option 2: inserting image element

const bgImage = document.createElement("img");
bgImage.src = `./images/${chosenImage}`;
// document.body.appendChild(bgImage);
