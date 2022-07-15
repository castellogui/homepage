//Global Event Listners
window.addEventListener('scroll', navbarSticky);

//Variable Utils
const navbar = document.querySelector('.navbar-container');
const logo = document.querySelector('.logo-img');

function navbarSticky() {
    navbar.classList.toggle('sticky', window.scrollY > 0);
    if (window.scrollY > 0) {
        logo.src = '/media/images/logo-sticky.png';
        logo.style = 'padding-top: 5px;'
    } else {
        logo.src = '/media/images/logo.png';
    }
}
