"use strict";

// EJERCICIO 5
// querySelector para todas
// Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir document.querySelector(...) tantas veces una compañera ha sugerido hacer una función llamada getEl.
// Esta función debe recibir por parámetro un selector de css y retornará el elemento de HTML correspondiente. Hemos quedado en que cuando llamemos a la función la sintaxis será tal que así:

function getEl(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    console.error(`No existe esa clase, id o elemento`);
  }
}

const EH1 = getEl("h1");
console.log(EH1);
const P = getEl("p");
console.log(P);
const error = getEl(".error");
console.log(error);
