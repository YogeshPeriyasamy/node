// models/productModel.js
let products = [];

function addProduct(name, description) {
    const id = products.length + 1; // Generate a unique ID based on the array length
    const product = { id, name, description };
    products.push(product);
    return product;
}

function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

function getAllProducts() {
    return products;
}

module.exports = { addProduct, getProductById, getAllProducts };
