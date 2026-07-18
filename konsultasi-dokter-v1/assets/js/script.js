const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('nav .nav-mobile');

hamburger.addEventListener('click', function() {
    ul.classList.toggle('show');
});