'use strict';

const button = document.querySelector('.js-button');
button.addEventListener('click', findCharacter);

function findCharacter() {
  const characterSearch = document.querySelector('.character').value;
  fetch(`https://swapi.dev/api/people/?search=${characterSearch}`)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;
      for (let i = 0; i < characters.length; i++) {
        const characterName = characters[i].name;
        const characterGender = characters[i].gender;
        characterContent += `<li>Name:${characterName} --- Gender:${characterGender}</li>`;
      }
      let characterContent = '';
      const charactersList = document.querySelector('.js-list');
      charactersList.innerHTML = characterContent;
    });
}
/*Duda: como se le dice que te devuelva solo los que empiecen por es palabra que busca, y no que contenga*/
