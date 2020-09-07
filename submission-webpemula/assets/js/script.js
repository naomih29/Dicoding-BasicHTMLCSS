// Navbar
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
})

// scroll reveal
ScrollReveal().reveal('.card');
ScrollReveal().reveal('.form-box');
ScrollReveal().reveal('.column');
