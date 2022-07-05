//Global Event Listners
window.addEventListener('scroll', navbarSticky);

//Variable Utils
const navbar = document.querySelector('.navbar-container');


function navbarSticky() {
    navbar.classList.toggle('sticky', window.scrollY > 0);
}
