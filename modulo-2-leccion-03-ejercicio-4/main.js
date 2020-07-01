"use-strict";

// EJERCICIO 4
// Conversor de edad de perro a humano
// Te habrá pasado varias veces de ir por la calle y que alguien te pregunte "perdona, tienes a mano un conversor de edad de perros a humanos" y tener que contestar con vergüenza que no y que esa persona te mire raro... ¡hasta ahora! Vamos a crearla para evitar esto que pasa tan a menudo. Para ello, las reglas son las siguientes:
// El primer año de un perro equivale a 15 años de humano
// El segundo año de un perro equivale a nueve años de humano
// A partir del tercero, cada año de perro equivale a 5 años de humano.

let ageDog = 2;
const ageHuman = 15;
const ageHuman1 = 9;
const ageHuman2 = 5;
ageDog = 4;

if (ageDog <= 1) {
  console.log(ageDog * ageHuman);
} else if (ageDog == 2) {
  console.log(1 * ageHuman + 1 * ageHuman1);
} else if (ageDog == 3) {
  console.log(1 * ageHuman + 1 * ageHuman1 + 1 * ageHuman2);
} else if (ageDog > 3) {
  console.log(ageDog * ageHuman2);
}
