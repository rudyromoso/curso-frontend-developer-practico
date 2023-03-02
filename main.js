const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');

menuEmail.addEventListener('click', bloqDesblockDesktopMenu);
//shoppingCart.addEventListener('click', bloqDesblockDesktopMenu);




function bloqDesblockDesktopMenu(){    
    desktopMenu.classList.toggle('inactive');
}


