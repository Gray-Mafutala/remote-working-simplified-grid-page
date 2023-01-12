const btnMenu = document.querySelector('.header__menu-btn');
const btnMenuIcon = document.querySelector('.bx-menu');
const mobileMenu = document.querySelector('.header__mobile-menu');

// Classes of humburger and close icon from Boxicons
const classIconHumb = 'bx-menu';
const classIconClose = 'bx-x';

// Show or Hide the mobile menu
btnMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('header__mobile-menu--active');
    // Change icon menu-btn to X (close icon)
    btnMenuIcon.classList.toggle(classIconHumb);
    btnMenuIcon.classList.toggle(classIconClose);

    // Hide body scroll-y when mobile menu displayed
    document.body.classList.toggle('body-height-open-mobile-menu');
});

// Hide menu mobile when the width of the screen > 890px
window.addEventListener('resize', () => {
    if (window.innerWidth > 890) {
        mobileMenu.classList.remove('header__mobile-menu--active');
        btnMenuIcon.classList.remove(classIconClose);
        btnMenuIcon.classList.add(classIconHumb);
        document.body.classList.remove('body-height-open-mobile-menu');
    }
});