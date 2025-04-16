let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let cnt = document.getElementById("cnt");
let totalPriceElement = document.getElementById("totalPrice");

function displayCartItems() {
    cnt.innerHTML = "";
    let total = 0;

    if (cartItems.length === 0) {
        cnt.innerHTML = "<p>Your cart is empty</p>";
        totalPriceElement.innerText = "Total: $0";
        return;
    }

    cartItems.forEach(product => {
        let cartItemHTML = `
            <div class="cart-item">
                <img src="${product.images[0]}" alt="Product Image">
                <h2>${product.title}</h2>
                <p class="cart-item-price">$${product.price}</p>
            </div> 
        `;
        cnt.innerHTML += cartItemHTML;
        total += product.price;
    });

    totalPriceElement.innerText =` Total: $${total.toFixed(2)}`;
}

function clearCart() {
    localStorage.removeItem("cartItems");
    cartItems = [];
    displayCartItems();
}

document.addEventListener("DOMContentLoaded", displayCartItems);