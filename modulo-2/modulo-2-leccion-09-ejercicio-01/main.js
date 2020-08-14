// EJERCICIO 1
// Numeritos
// Vamos a crear una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden.

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

function get100Numbers() {
  const arr = [];
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
    // console.log(`Mi número es ${arr[i - 1]}`);
  }
  return arr;
}
const finalResult = get100Numbers();
console.log(get100Numbers());
