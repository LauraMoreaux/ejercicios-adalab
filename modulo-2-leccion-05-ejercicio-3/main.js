"use strict";

// Creamos constante que haga referencia al primer párrafo, que tiene una clase de "myText"
const firstParagraph = document.querySelector(".myText");

// Creamos una constante con el texto del segundo párrafo:
const secondParagraphText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

// Le añadimos al botón el eventListener y creamos una función callback anónima que va a crear un nuevo párrafo debajo del primero. He utilizado el método insertAdjacentHTML() pero se podría resolver de muchas maneras.
firstParagraph.addEventListener("mouseover", function () {
  firstParagraph.insertAdjacentHTML(
    "afterend",
    `<p>${secondParagraphText}</p>`
  );
});
