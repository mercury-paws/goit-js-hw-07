"use strict";

const category = document.querySelectorAll("li.item").length;

console.log(`Number of categories: ${category}`);

// const headers = document.getElementsByTagName("h2");
// Array.from(headers).forEach((header) => {
//   console.log(`Category: ${header.textContent}`);
// });

const lis = document.querySelectorAll("li.item");
const count = lis.length;
console.log(`Number of items: ${count}`);
