const images = [
  "IMG_1672.png",
  "IMG_1673.png",
  "IMG_1674.png",
  "IMG_1675.png",
  "IMG_1676.png",
  "IMG_1677.png",
  "IMG_1678.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// inserting image element
// const bgImage = document.createElement("img");
// bgImage.src = `./img/${chosenImage}`;
// document.body.appendChild(bgImage);

// changing background image of body
document.body.style.backgroundImage = `url(./img/${chosenImage})`;
document.body.style.backgroundSize = "100% 100%";
