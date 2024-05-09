

const burgerMenu = document.querySelector('.burger-menu');
const burgerLinks = document.querySelector('.burger-links');

burgerMenu.addEventListener('click', () => {
    burgerLinks.classList.toggle('active');
});

const navbar = document.querySelector('.navbar');
navbar.addEventListener('mouseover', () => {
    navbar.classList.add('animated');
});
navbar.addEventListener('mouseleave', () => {
    navbar.classList.remove('animated');
});