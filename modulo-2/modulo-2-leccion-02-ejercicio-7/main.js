"use strict";

//EJERCICIO 7
//Hola Adalaber
//Vamos a preparar en una constante con el nombre de una compañera, y utilizándola tenemos que escribir un saludo en la pantalla. Si nuestra compañera se llamará Lola quedaría así:

const element = document.querySelector(".element");
const name = "Miriam";
element.innerHTML = `Hola ${name}, encantada de conocerte.`;
