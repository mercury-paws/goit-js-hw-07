function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

const boxesContainer = document.getElementById("boxes");
const ulItems = document.createElement("ul");
boxesContainer.append(ulItems);

ulItems.style.listStyleType = "none";
ulItems.style.display = "flex";
ulItems.style.gap = "16px";
ulItems.style.flexWrap = "wrap";

function createBoxes(event) {
  event.preventDefault();
  ulItems.innerHTML = "";

  let size = 30;
  const amountInput = document.querySelector("#controls input");
  const amount = amountInput.value;

  if (amount < 1 || amount > 100) {
    return;
  }

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    ulItems.insertAdjacentHTML(
      "beforeend",
      `<li class = "square"
      style = "width: ${size}px; height: ${size}px; background-color: ${color};">
    </li>`
    );
    size += 10;
  }
  amountInput.value = "";
}

function destroyBoxes() {
  ulItems.remove();
  location.reload();
}

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
