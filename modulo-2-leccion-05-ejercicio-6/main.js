"use strict";

const text = document.querySelector(".text");
const input = document.querySelector(".input");

function handleInput() {
  text.innerHTML = input.value;
}

input.addEventListener("keyup", handleInput);
