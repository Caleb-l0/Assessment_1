/*display cart, getting cart from localstorage and item name and price*/
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    /* clear container*/
    cartItemsContainer.innerHTML = '';

    /* set to 0 to calculate total*/
    let total = 0;

    /* loop that ensures item is 1 and not Nan*/
    cart.forEach((item, index) => {
        
        if (item.quantity < 1 || isNaN(item.quantity)) {
            item.quantity = 1;
        }
        /* Create a new div element to display the item's details*/
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <div class="item-info">
                <img src="${item.img}" alt="${item.name} Image">
                <span class="item-name">${item.name}</span>
            </div>
            <input class="item-quantity" type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;
        /* add new item into cartcontainer*/
        cartItemsContainer.appendChild(itemDiv);

        /* calculate total price of full cart*/
        total += item.price * item.quantity;
    });

    /*update the prices when new item added*/
    totalPriceElement.textContent = total.toFixed(2);
}

/* remove item from cart. retrieve cart,remove item,save new updated cart,display*/
function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    displayCart(); 
}

/* update the price when you add per item. get cart,ensure qty is 1,add qty,set cart,display*/
function updateQuantity(index, newQuantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (newQuantity < 1 || isNaN(newQuantity)) newQuantity = 1; 
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart)); 
    displayCart(); 
}


/* display cart when cart is opened*/
window.onload = displayCart;