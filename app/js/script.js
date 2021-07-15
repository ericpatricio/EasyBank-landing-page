const navbar = document.querySelector('.navbar');
const hamburgerBtn = document.querySelector('#hamburgerBtn');
const navMenu = document.querySelector('.navbar__menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

hamburgerBtn.addEventListener('click', () => {
  if(navbar.classList.contains('open')) {
    navbar.classList.remove('open');
    navMenu.classList.remove('open');
    overlay.style.visibility = 'hidden';
    body.classList.remove('notscroll');

  } else {
    navbar.classList.add('open');
    navMenu.classList.add('open');
    overlay.style.visibility = 'visible';
    body.classList.add('notscroll');

  }
});