const products = [
    { id: 1, name: "🐼 Cute Panda 😊", price: 799, img: "https://images-cdn.ubuy.co.in/6351b605426cc01a5f52e29a-usbinx-life-cute-panda-toy-dolls-plush.jpg", url: "https://www.amazon.in" },
    { id: 2, name: "🐼 Bush Panda 😍", price: 699, img: "https://m.media-amazon.com/images/I/51sNvONm11L._AC_UF1000,1000_QL80_.jpg", url: "https://www.amazon.in" },
    { id: 3, name: "🐼 Mini Panda 🥰", price: 899, img: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/5/2/d5a94aeb-6f44-4c8f-b513-6637216003cf_Toysinstamax_L7Q54D58IV_MN.JPG", url: "https://www.amazon.in" },
    { id: 4, name: "🐼 Stuff Panda 🤗", price: 999, img: "https://i5.walmartimages.com/asr/32ba889e-1e2f-41d2-aacc-50e46755f682.bfc213f1da80c3c5d1b7e0078f5cd121.jpeg", url: "https://www.amazon.in" }
];

let cart = [];
const productContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart");

function renderProducts() {
    productContainer.innerHTML = "";
    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="product">
                <img src="${product.img}" alt="${product.name}">
                <p>${product.name} - ₹${product.price}</p>
                <button onclick="addToCart(${product.id})">🛒 Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    renderCart();
}

function renderCart() {
    cartContainer.innerHTML = "<h2 style='color: #d84315;'>🛍️ Selected Cart 🐼</h2>";
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="product">
                <img src="${item.img}" alt="${item.name}">
                <p>${item.name} - ₹${item.price}</p>
                <button onclick="removeFromCart(${index})">❌ Remove</button>
            </div>
        `;
    });
    if (cart.length > 0) {
        cartContainer.innerHTML += `<button onclick="buyNow()">🛒 Buy Now</button>`;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function buyNow() {
    window.location.href = "https://www.amazon.in";
}

renderProducts();
