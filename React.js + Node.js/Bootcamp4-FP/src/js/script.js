// burger menu


function showMenu () {
  document.querySelector('.nav-list').classList.toggle('nav-list--show')
}

document.querySelector('.burger-menu').addEventListener('click', showMenu);
