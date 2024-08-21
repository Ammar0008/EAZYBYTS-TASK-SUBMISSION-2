
const products = [
    { id: 1, name: 'Product 1', quantity: 100, price: 29.99 },
    { id: 2, name: 'Product 2', quantity: 200, price: 49.99 },
    { id: 3, name: 'Product 3', quantity: 150, price: 39.99 },
];


function loadProducts() {
    const productTableBody = document.getElementById('product-table-body');
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${product.id}</td><td>${product.name}</td><td>${product.quantity}</td><td>$${product.price}</td>`;
        productTableBody.appendChild(row);
    });
}


function placeOrder() {
    const productId = document.getElementById('product-id').value;
    const quantity = document.getElementById('quantity').value;
    alert(`Order placed for Product ID: ${productId}, Quantity: ${quantity}`);
}


window.onload = loadProducts;
