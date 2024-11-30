/* Feature to hide products when not clicked*/
/*prevent default action(navigate to link)*/
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();

        /* hide groups with display "none"*/
        document.querySelectorAll('.product-group').forEach(group => {
            group.style.display = 'none';
        });

        /* get data catergory of button and display said items*/
        const category = button.getAttribute('data-category');
        document.getElementById(category).style.display = 'flex';
    });
});

/* same as bakery*/
function addToCart(event) {
    const button = event.target;
    const itemName = button.getAttribute('data-name');
    const itemPrice = parseFloat(button.getAttribute('data-price'));

   
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    cart.push({ name: itemName, price: itemPrice });

    
    localStorage.setItem('cart', JSON.stringify(cart));

    
}

/* allow addtocart for all buttons with add-to-cart*/
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});
