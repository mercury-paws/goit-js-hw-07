"use strict";
const nameOutput = document.getElementById("name-output");
const nameInput = document.getElementById("name-input");

function inputHandler(event) {
  const name = event.target.value.trim();
  nameOutput.textContent = name !== "" ? name : "Anonymous";
}


//   if (name !== "" || name !== " ") {
//     nameOutput.textContent = name;
//   } else {
//     ("Anonymous");
//   }


nameInput.addEventListener("input", inputHandler);
