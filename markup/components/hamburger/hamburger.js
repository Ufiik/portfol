document.addEventListener('DOMContentLoaded', function () {
    let hamburger = document.querySelector('.hamburger'),
        hamburgerInner = document.querySelector('.hamburger-inner'),
        nav = document.querySelector('.nav');

    hamburger.addEventListener('click', function () {
        this.classList.toggle('is-active');

        hamburgerInner.classList.toggle('hamburger_theme-white');
        nav.classList.toggle('nav_active');
    });
});
