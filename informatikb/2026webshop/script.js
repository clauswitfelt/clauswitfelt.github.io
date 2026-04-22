const products = [
    { id: 1, name: "Crypto Hoodie", price: 150, icon: "🧥" },
    { id: 2, name: "Cyber Specs", price: 85, icon: "🕶️" },
    { id: 3, name: "Neon Keyboard", price: 420, icon: "⌨️" },
    { id: 4, name: "Bit-Cap", price: 45, icon: "🧢" },
    { id: 5, name: "Satoshis Ur", price: 999, icon: "⌚" }
];

let cart = [];

// Render produkter
const productGrid = document.getElementById('product-grid');
products.forEach(p => {
    productGrid.innerHTML += `
        <div class="product-card">
            <div class="product-img">${p.icon}</div>
            <h3>${p.name}</h3>
            <p class="price">${p.price} MC</p>
            <button onclick="addToCart(${p.id})">Tilføj til kurv</button>
        </div>
    `;
});

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartCount.innerText = cart.length;
    cartItems.innerHTML = "";
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>${item.price} MC</span>
            </div>
        `;
    });
    
    cartTotal.innerText = total;
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function checkout() {
    if (cart.length === 0) return alert("Kurven er tom!");
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    // Simuleret krypto-transaktion
    const confirmed = confirm(`Vil du overføre ${total} MoneyCoin fra din wallet?`);
    
    if (confirmed) {
        alert("🚀 Transaktion sendt til blockchain! Tak for din handel.");
        cart = [];
        updateCart();
        toggleCart();
    }
}
