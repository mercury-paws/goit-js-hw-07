"use strict";

const form = document.querySelector(".login-form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

function formHandler(event) {
  event.preventDefault();
  const emailValue = event.target.email.value.trim();
  const passwordValue = event.target.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const data = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(data);
  document.querySelector(".login-form").reset();
}

form.addEventListener("submit", formHandler);
