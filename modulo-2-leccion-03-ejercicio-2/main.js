"use strict";

//En este ejercicio vamos a crear un control de acceso. Para ello prepararemos una variable y le asignaremos un nombre. Posteriormente, si el nombre es el tuyo o el de tu compañera mostraremos el mensaje "Bienvenida, (tu nombre aquí)". Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".
//Nota: cambia el valor de la variable y comprueba que todo funciona como esperas.

let name = "Laura";
const title = document.querySelector("h1");
name = "Miriam";

if (name == "Laura") {
  title.innerHTML = `Bienvenida, ${name}`;
} else {
  title.innerHTML = `Lo siento pero el usuario que has introducido no está registrado`;
}
