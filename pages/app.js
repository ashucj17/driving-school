const navMenu = document.querySelector('.nav__menu')
const navMenuOpen = document.querySelector('.nav__menu-open')
const navMenuClose = document.querySelector('.nav__menu-close')

navMenuOpen.addEventListener('click', () => {
    navMenu.style.display = 'flex';
    navMenuOpen.style.display = 'none';
    navMenuClose.style.display = 'inline-block';

})

navMenuClose.addEventListener('click', () => {
    navMenu.style.display = 'none';
    navMenuOpen.style.display = 'inline-block';
    navMenuClose.style.display = 'none';

})