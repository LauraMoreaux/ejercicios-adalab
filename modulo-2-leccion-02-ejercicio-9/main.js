"use strict";

const textElement = document.querySelector(".textElement");
const name = "Leticia Fernandez Sanchez";
const withoutSpace = name.replace(/ /g, "");

textElement.innerHTML = `El nombre de mi compañera es ${name}, y está compuesto por ${withoutSpace.length} caracteres`;
