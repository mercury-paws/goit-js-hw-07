"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

const boxesContainer = document.getElementById("boxes");

boxesContainer.style.listStyleType = "none";
boxesContainer.style.display = "flex";
boxesContainer.style.gap = "16px";
boxesContainer.style.flexWrap = "wrap";

function createBoxes() {
  event.preventDefault();
  boxesContainer.innerHTML = "";

  let size = 30;
  const amountInput = document.querySelector("input[type='number']");
  const amount = parseInt(amountInput.value, 10);

  if (amount < 1 || amount > 100) {
    return;
  }

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxesContainer.insertAdjacentHTML(
      "beforeend",
      `<div class = "square"
      style = "width: ${size}px; height: ${size}px; background-color: ${color};">
    </div>`
    );
    size += 10;
  }
  amountInput.value = "";
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
