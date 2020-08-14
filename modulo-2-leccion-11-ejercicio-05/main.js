'use strict';

const darkInput = document.querySelector('.js-selector-1');
const lightInput = document.querySelector('.js-selector-2');
const body = document.querySelector('.js-body');

function pageColor() {
  if (darkInput.checked) {
    body.classList.add('dark-style');
    body.classList.remove('light-style');
    localStorage.setItem('selector', 'dark-style');
  } else if (lightInput.checked) {
    body.classList.remove('dark-style');
    body.classList.add('light-style');
    localStorage.setItem('selector', 'light-style');
  }
}

function keepData() {
  const savedColor = localStorage.getItem('selector');
  darkInput.checked = savedColor === 'dark-style';
  lightInput.checked = savedColor === 'light-style';
}

keepData();
pageColor();
darkInput.addEventListener('click', pageColor);
lightInput.addEventListener('click', pageColor);

/* NOS FALTA QUE SE QUEDE EL GET ITEM*/
