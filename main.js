
/*
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoCompra = document.querySelector('.product-detail');

menuEmail.addEventListener('click', bloqDesblockDesktopMenu);
shoppingCartIcon.addEventListener('click', bloqDesblockCarrito);
iconMenu.addEventListener('click', bloqDesbloqMobileMenu);
//iconMenu.addEventListener('click', bloqDesbloqMobileMenu);





function bloqDesblockDesktopMenu(){    
    desktopMenu.classList.toggle('inactive');// - toggle(): alterna entre agregar o eliminar una clase del elemento 
    //desktopMenu.classList.remove('inactive');//- remove(): elimina una clase del elemento 
}


function bloqDesbloqMobileMenu(){
    
    mobileMenu.classList.toggle('inactive');
    carritoCompra.classList.add('inactive');
    
}

function bloqDesblockCarrito(){
    
    carritoCompra.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    //iconMenu.style.visibility = "hidden";
}


*/


// Optimizado
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoCompra = document.querySelector('.product-detail');

menuEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
    carritoCompra.classList.add('inactive');
}); // se optimizo la función bloqDesblockDesktopMenu


shoppingCartIcon.addEventListener('click', () => {
    carritoCompra.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}); // se optimizo la función bloqDesblockCarrito 
iconMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
    carritoCompra.classList.add('inactive');
}); // se optimizo la función bloqDesbloqMobileMenu