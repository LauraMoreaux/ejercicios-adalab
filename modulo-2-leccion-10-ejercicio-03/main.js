'use strict';
// EJEMPLO BUENO

const userInfo = document.querySelector('.js-info-box');
const searchButton = document.querySelector('.searchButton');

function clearHtml() {
  userInfo.innerHTML = '';
}

function loadUsers() {
  const username = document.querySelector('.searchTerm').value;
  console.log('Me han clickado');
  console.log(username);

  clearHtml();

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.name === undefined) {
        alert('No hemos encontrado a nadie');
      } else {
        userInfo.innerHTML = `<li class=js-user-block>
           <img class="js-user-image" src="${data.avatar_url}" alt="User Avatar">
           <h2 class="js-user-name">${data.name}</h2>
           </div>
           <p class="js-user-text">Número de repositorios: ${data.public_repos}</p></li>`;
      }
    });
}

console.log('Aún no me han clicado');
searchButton.addEventListener('click', loadUsers);

// DUDAS
// porque el enter del teclado no funciona como click
// como hacer para que me salga un listado de todas las personas que se llaman laura (let i)
// practicar if para crear un alert cuando el nombre sea === undefined
// pendiente de usar: localstorage, push, slice, splice(por ejemplo si insertan un @ con el nombre) find y findindex

// EJEMPLOS DE FOR QUE ME HAN DADO ERROR

// function printResults(data) {
//   userInfo.innerHTML = `<li class=js-user-block>
//     //         //           <img class="js-user-image" src="${data.avatar_url}" alt="User Avatar">
//     //         //           <h2 class="js-user-name">${data.name}</h2>
//     //         //           </div>
//     //         //           <p class="js-user-text">${data.public_repos}</p></li>`;
// }

// function printResults(users) {
//   let userInfo = '';
//   for (let user of users) {
//     userInfo = `<li class=js-user-block>
//         //           <img class="js-user-image" src="${user.avatar_url}" alt="User Avatar">
//         //           <h2 class="js-user-name">${user.name}</h2>
//         //           </div>
//         //           <p class="js-user-text">${user.public_repos}</p></li>`;
//   }
//   userList.innerHTML = userInfo;
// }

// for (let i = 0; i < data.length; i++) {
//     // aquí me traduzco la info que me viene del API
//     const name = data[i].login;
//     const repo = data[i].public_repos;
//     const avatar = data[i].avartar_url;
//     // ahora traduzco a html estas constantes para cuando meta la lista dentro de la ul
//     const userLogin = name;
//     const userRepo = repo;
//     const userAvatar = avatar;
//     console.log(userLogin);
//     console.log(userRepo);
//     console.log(userAvatar);
//     //aquí englobaría la info ya traducida
//     const userGlobalInfo = `<li class=js-user-block>
//           <img class="js-user-image" src="${userAvatar}" alt="User Avatar">
//           <h2 class="js-user-name">${userLogin}</h2>
//           </div>
//           <p class="js-user-text">${userRepo}</p></li>`;
//     userList += userGlobalInfo;
//   }
