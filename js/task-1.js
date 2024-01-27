"use strict";

const category = document.querySelectorAll("li.item").length;

console.log(`Number of categories: ${category}`);

const headers = document.querySelectorAll("h2");
headers.forEach((header) => {
  console.log(`Category: ${header.textContent}`);
  const ul = header.nextElementSibling;
  const liItems = ul.querySelectorAll("li");
  console.log(`Number of items: ${liItems.length}`);
});
