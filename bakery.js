function addToCart(event) {
    const button = event.target;
    const itemName = button.getAttribute('data-name');
    const itemPrice = parseFloat(button.getAttribute('data-price'));

   
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    cart.push({ name: itemName, price: itemPrice });

    
    localStorage.setItem('cart', JSON.stringify(cart));

    
}


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});