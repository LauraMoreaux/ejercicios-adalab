"use strict";

// EJERCICIO 4
// Pares o nones
// Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.
// Ejecutala e imprime el resultado para comprobar que funciona.

function isEven(a) {
  if (a % 2 == 0) return "true";
  else return "false";
}

console.log(isEven(7));
console.log(isEven(20));
