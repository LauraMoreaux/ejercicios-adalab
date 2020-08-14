"use-strict";
const box = document.querySelector("div");
const title = document.querySelector("h1");
const text = document.querySelector("p");

box.classList.add("error");

if (box.classList.contains("success")) {
  title.innerHTML = "CORRECTO";
  text.innerHTML = "Los datos son correctos";
} else if (box.classList.contains("warning")) {
  title.innerHTML = "AVISO";
  text.innerHTML = "Tenga cuidado";
} else if (box.classList.contains("error")) {
  title.innerHTML = "ERROR";
  box.innerHTML = "Ha surgido un error";
}
