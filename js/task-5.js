function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.body;
// const body = document.getElementsByTagName("body")[0];

function clickHandler() {
  color.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}

changeColorButton.addEventListener("click", clickHandler);
