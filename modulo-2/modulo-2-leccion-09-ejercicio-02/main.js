// EJERCICIO 2
// Sotiremun
// Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.

'use strict';

// let acc = 0;

// function get100Numbers() {
//   const arr = [];
//   const arrLength = 100;

//   for (let i = 0; i < arrLength; i++) {
//     acc++;
//     arr.push(acc);
//   }
//   return arr;
// }

// console.log(get100Numbers());

// function get100Numbers() {
//   const arr = [];
//   for (let i = 1; i <= 100; i++) {
//     arr.push(i);
//     // console.log(`Mi número es ${arr[i - 1]}`);
//   }
//   return arr;
// }
// const finalResult = get100Numbers();
// console.log(get100Numbers());

function get100Numbers() {
  let numbers = [];
  for (let i = 0; i < 100; i++) {
    numbers.push(i + 1);
  }
  return numbers; // con return
}
const result = get100Numbers();
console.log(get100Numbers());

function getReversedNumbers() {
  return result.reverse();
}

console.log(getReversedNumbers());
