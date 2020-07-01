"use strict";

// Hola click
// Crear una página HTML con un párrafo en el que ponga Hola y un botón. Cuando se pulse el botón hay que cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió!
const message = document.querySelector(".message");
const newMessage = `Mi primer click, ¡ole yo y la mujer que me parió!`;
const button = document.querySelector(".alert");

function changeMessage() {
  message.innerHTML = newMessage;
}

button.addEventListener("click", changeMessage);
