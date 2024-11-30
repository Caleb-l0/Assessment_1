function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

   
    cartItemsContainer.innerHTML = '';

    
    let total = 0;

    cart.forEach((item, index) => {
        
        if (item.quantity < 1 || isNaN(item.quantity)) {
            item.quantity = 1;
        }

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
        cartItemsContainer.appendChild(itemDiv);

        total += item.price * item.quantity;
    });

    
    totalPriceElement.textContent = total.toFixed(2);
}


function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    displayCart(); 
}


function updateQuantity(index, newQuantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (newQuantity < 1 || isNaN(newQuantity)) newQuantity = 1; 
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart)); 
    displayCart(); 
}



window.onload = displayCart;