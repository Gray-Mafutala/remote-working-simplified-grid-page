const btnMenu = document.querySelector('.header__menu-btn');

const wrapperMenuLinks = document.querySelector('.header__wrapper-menu-links');
// const menuLinksItem = document.querySelectorAll('.header__links__item');

const wrapperConnectionsBtn = document.querySelector('.header__wrapper-connections-btn');
const btnLogin = document.querySelector('.header__connection-btn--login');
const btnSignup = document.querySelector('.header__connection-btn--signup');

const classOfCloseIcon = 'bx-x';

// Show or Hide the menu for mobile or small screen
btnMenu.addEventListener('click', () => {
    wrapperMenuLinks.classList.toggle('header__wrapper-menu-links--mobile');
    // Change the icon of menu-button
    btnMenu.classList.toggle(classOfCloseIcon);
});