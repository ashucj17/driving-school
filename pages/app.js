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



// ===================== Dark Theme ====================

const themeBtn = document.querySelector('.theme__btn')
themeBtn.addEventListener('click', () => {
    if(document.body.className == 'dark') {
        document.body.className = ''
        themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`
        localStorage.setItem('driving-school-website', '')
    } else {
        document.body.className = 'dark'
        themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`
        localStorage.setItem('driving-school-website', 'dark')
    }
})


window.addEventListener('load', () => {
    document.body.className = localStorage.getItem('driving-school-website')
    if(localStorage.getItem('driving-school-website') == ''){
        themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`
    } else {
        themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`
    }
})