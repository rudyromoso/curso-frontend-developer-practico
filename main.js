
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
const carritoCompra = document.querySelector('#ShoppingCartContainer');
const listaDeProductos = document.querySelector('.cards-container');
//const linkAll = document.querySelector('.linkAll');


menuEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
    carritoCompra.classList.add('inactive');
}); 

shoppingCartIcon.addEventListener('click', () => {
    carritoCompra.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}); 
iconMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
    carritoCompra.classList.add('inactive');
}); 

// se trata de asociar la vista de la lista de producto al link ALL.
/*
linkAll.addEventListener('click', () => {
    listaDeProductos.classList.toggle('inactive');  
});
*/

const productos = [];

productos.push({
    nombre: "Bicicleta",
    descripcion: "Bicicleta de montaña",
    valor: 450000,
},
    {
        nombre: "Computador",
        descripcion: "Computador MAC",
        valor: 3200000,
    },
    {
        nombre: "Monitor",
        descripcion: "Monitor Dell 27\"",
        valor: 1800000,
    });


function agregarProductosALaLista(productos) {

    for (pr of productos) {

        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const img = document.createElement('img');
        img.src = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
        img.alt = '';

        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';

        const productPrice = document.createElement('p');
        productPrice.innerHTML =  "$ "+pr.valor.toLocaleString('es-CO');

        const productName = document.createElement('p');
        productName.innerHTML = pr.descripcion;

        const buttonDiv = document.createElement('div');
        buttonDiv.appendChild(productPrice);
        buttonDiv.appendChild(productName);

        const buttonImg = document.createElement('img');
        buttonImg.src = './icons/bt_add_to_cart.svg';
        buttonImg.alt = '';

        const buttonFigure = document.createElement('figure');
        buttonFigure.appendChild(buttonImg);

        productInfo.appendChild(buttonDiv);
        productInfo.appendChild(buttonFigure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);


        listaDeProductos.appendChild(productCard);


    };

}




agregarProductosALaLista(productos);



