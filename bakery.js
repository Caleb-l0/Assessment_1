/* When addtocart button is pressed, get data like name and price*/
function addToCart(event) {
    const button = event.target;
    const itemName = button.getAttribute('data-name');
    const itemPrice = parseFloat(button.getAttribute('data-price'));


   /* Retrieve the cart from localstorage*/
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    /* push/add the content*/
    cart.push({ name: itemName, price: itemPrice });

    /* put cart back in localstorage*/
    localStorage.setItem('cart', JSON.stringify(cart));

    
}

/* allow addtocart for all buttons with add-to-cart*/
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});