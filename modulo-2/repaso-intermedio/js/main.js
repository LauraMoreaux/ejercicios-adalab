"use strict";

// escuchar el botón update
// primero creamos la constante
const btn = document.querySelector(".js-update");
console.log(btn);

// constante de donde vamos a pintarlo
const face = document.querySelector(".js-face");

//constante para cambiar el color del background
const container = document.querySelector(".js-container");

// añadir listener (va al final del todo)

btn.addEventListener("click", handleUpdateClick);

//función manejadora (va antes del listener, pero la redactamos después)

function handleUpdateClick() {
  //primero probamos con console.log(123); que todo funciona

  // leer el valor del select
  // lo tenemos que hacer dentro de la función, para que nn¡os coja el valor de la cara cada vez que clicamos, y no solo al cargar la página
  const selectValue = document.querySelector(".js-select-face").value;
  // lo tenemos que poner aquí dentro porque selectValue está solo declarado dentro de la función
  face.innerHTML = selectValue;
  console.log(selectValue);
  //Para generar el número aleatorio Math random
  //Para redondearlo, parseInt
  const randomNumber = parseInt(Math.random() * 100);
  //comprobar que funciona
  console.log(randomNumber);
  //esto es para resetear las clases de css y que no estuvieran a la vez
  container.classList.remove("red");
  container.classList.remove("green");
  if (randomNumber % 2 === 0) {
    //comprobar que funciona la condición
    console.log("par");
    container.style.background = "red";
    container.classList.add("red");
    // toggle si salieran dos números pares seguidos en el segundo eliminaría la class list...
    container.classList.toogle("red");
  } else {
    console.log("impar");
    container.style.background = "green";
    container.classList.add("green");
    // toggle si salieran dos números impares seguidos en el segundo eliminaría la class list...
    container.classList.toogle("green");
  }
}

///////////////////////////////////////////////////
// CODIGO MÁS LIMPIO

function handleUpdateClick() {
  updateFace();
  updateBackground();
}

function updateFace() {
  const selectValue = document.querySelector(".js-select-face").value;
  face.innerHTML = selectValue;
  console.log(selectValue);
}

function updateBackground() {
  container.classList.remove("red");
  container.classList.remove("green");
  if (randomNumber % 2 === 0) {
    console.log("par");
    container.style.background = "red";
    container.classList.add("red");
    container.classList.toogle("red");
  } else {
    console.log("impar");
    container.style.background = "green";
    container.classList.add("green");
    container.classList.toogle("green");
  }
}

//nominal
const getrandomNumber = function () {
  const randomNumber = parseInt(Math.random() * 100);
  return undefined; //tenemos que devolver el resultado para que lla función de arriba lo pueda utilizar
};
//arrow
const getrandomNumber = () => parseInt(Math.random() * 100);
const getrandomNumber = () => {
  return parseInt(Math.random() * 100);
};

// Al final del trabajo hay que quitar los console.log
