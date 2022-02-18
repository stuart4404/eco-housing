const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
let btnOpen = false;


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
});

navToggle.addEventListener('click', () => {
    if(!btnOpen) {
        navToggle.classList.add('open');
        btnOpen = true;
    } else {
        navToggle.classList.remove('open')
        btnOpen = false
    }
});