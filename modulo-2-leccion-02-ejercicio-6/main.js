"use strict";

//EJERCICIO 6
//Hola Adalaber
//Vamos a preparar en una constante con el nombre de una compañera, y utilizándola tenemos que escribir un saludo en la pantalla. Si nuestra compañera se llamará Lola quedaría así:

const title = document.querySelector(".title");
const name = "Lola";
title.innerHTML = "Hola " + name + ", encantada de conocerte.";
