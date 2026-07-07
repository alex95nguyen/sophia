function subscribe() {
    alert("Thank you for subscribing.");
}

function addToCart(item) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(item);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to the cart.");
}

function viewCart() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let output = "";

    if (cart.length === 0) {
        output = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(function(item) {
            output += "<p>• " + item + "</p>";
        });
    }

    document.getElementById("cartItems").innerHTML = output;
    document.getElementById("cartModal").style.display = "block";
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

function clearCart() {
    sessionStorage.removeItem("cart");

    if (document.getElementById("cartItems")) {
        document.getElementById("cartItems").innerHTML = "<p>Your cart is empty.</p>";
    }

    alert("Cart cleared.");
}

function processOrder() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    sessionStorage.removeItem("cart");
    alert("Thank you for your order.");

    if (document.getElementById("cartModal")) {
        closeCart();
    }
}

function submitForm() {
    const customer = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    localStorage.setItem("customerInfo", JSON.stringify(customer));
    alert("Thank you for your message.");
}