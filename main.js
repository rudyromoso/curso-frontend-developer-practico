
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
const productDetailContainer = document.querySelector('#ProductDetailContainer');
const productDetailClose = document.querySelector('.product-detail-close');
const productSelectDetailValue = document.querySelector('.product-info');
const productSelectImage = document.querySelector('.imageProduct')


menuEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
    carritoCompra.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
});

shoppingCartIcon.addEventListener('click', () => {
    carritoCompra.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');


});
iconMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
    carritoCompra.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
});

productDetailClose.addEventListener('click', () => {
    productDetailContainer.classList.add('inactive');
});


function visualizarDetalleProduct(valor, nombre, descrip, imagen) {
    console.log(imagen);
    productSelectImage.src = imagen;
    productSelectDetailValue.innerHTML = `<p>COP$ ${valor.toLocaleString('es-CO')}</p> <p>${nombre}</p> <p>${descrip}</p>
    <button class="primary-button add-to-cart-button"><img src="./icons/bt_add_to_cart.svg" alt="add to cart">Add to cart</button>`;



}

const productos = [];

productos.push({
    nombre: "Bicicleta Optimus 29\"",
    descripcion: "Aquila, la bicicleta que ha llegado como un águila a coronarse dentro de las bicicletas de MTB como una de las más majestuosas," +
        " poderosas y veloces. Su cuadro de aluminio la hace más liviana y capaz de conquistar distintos terrenos sin problemas." +
        "Con 8 velocidades y un biplato, esta bicicleta de montaña te llevará a cualquier zona que desees sin titubear, además, cuenta con un tenedor " +
        "de bloqueo mecánico que hace más ligero el peso de la bicicleta y te prepara para las subidas más difíciles de la montaña.",
    valor: 4525300,
    imagen: 'https://www.costco.com.mx/medias/sys_master/products/hd5/h89/79563089313822.webp',
},
    {
        nombre: "MacBook PRO 16\"",
        descripcion: "El modelo de 16 pulgadas tiene la batería de mayor duración en un Mac. Y los dos modelos mantienen su rendimiento" +
            "al máximo aunque no estén conectados a la corriente. Parece magia, pero es la eficiencia de los chips de Apple. Así, podrás darlo" +
            " todo cuando te llegue la inspiración o el deber te llame.",
        valor: 13459000,
        imagen: 'https://www.apple.com/la/macbook-pro/images/overview/hero_13__d1tfa5zby7e6_large.jpg',
    },
    {
        nombre: "Monitor Dell 23,8\"",
        descripcion: "Una mejor vista desde cualquier lugar, Mantenga la productividad, sin importar dónde trabaje. Reduzca la dañina luz azul con este elegante monitor FHD de 23,8 pulgadas que cuenta con tecnología ComfortView Plus.",
        valor: 1800000,
        imagen: 'https://snpi.dell.com/snp/images/products/large/es-co~210-BBCC/210-BBCC.jpg',
    });



function agregarProductosALaLista(productos) {
    let indice = 0;
    for (pr of productos) {

        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const img = document.createElement('img');
        img.src = pr.imagen;
        img.alt = '';
        // img.src = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';


        img.addEventListener('click', (e) => {
            productDetailContainer.classList.remove('inactive');
            carritoCompra.classList.add('inactive');
            desktopMenu.classList.add('inactive');
            console.log(`Se hizo click en el  producto: ${indicador.textContent}`);
            visualizarDetalleProduct(productos[indicador.textContent].valor, productos[indicador.textContent].nombre, productos[indicador.textContent].descripcion, productos[indicador.textContent].imagen);
        });

        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';



        const productPrice = document.createElement('p');
        productPrice.innerHTML = "COP$ " + pr.valor.toLocaleString('es-CO');

        const productName = document.createElement('p');
        productName.innerHTML = pr.nombre;

        const indicador = document.createElement('p');
        indicador.innerHTML = indice;
        indice++;

        const buttonDiv = document.createElement('div');
        buttonDiv.appendChild(productPrice);
        buttonDiv.appendChild(productName);
        buttonDiv.appendChild(indicador).style.display = "none";


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



