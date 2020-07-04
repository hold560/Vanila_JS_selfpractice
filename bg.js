const body = document.querySelector("body");

const IMG_NUMBER = 4;

function callBG(number) {
  const image = new Image();
  image.src = `images/${number + 1}.jpg`;
  image.classList.add("bg");
  body.appendChild(image);
}

function genNumber() {
  const randomN = Math.floor(Math.random() * IMG_NUMBER);
  return randomN;
}

function init() {
  const imageNumber = genNumber();
  callBG(imageNumber);
}

init();
