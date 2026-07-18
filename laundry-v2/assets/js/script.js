const toggleTheme = document.querySelector('.toggle-theme');
const themeIcon = document.getElementById('theme-icon');

toggleTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});


const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('nav ul');

hamburger.addEventListener('click', function() {
    ul.classList.toggle('show');
});


const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    const randomDelay = Math.random() * 2;
    card.style.setProperty('--delay', `${randomDelay}s`);
});
