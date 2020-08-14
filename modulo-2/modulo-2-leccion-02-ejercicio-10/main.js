"use strict";

//EJERCICIO 5
//Calcular el número total de horas que hemos vivido
//En este caso vamos a crear un código que nos diga cuantas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería de mostrar un mensaje con el número 525600.

const year = document.querySelector("p");
const hoursDays = 24 * 365;

const total = parseInt(year.innerHTML) * hoursDays;
console.log(total);
