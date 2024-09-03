// controllers/productController.js
const path = require('path');
const productModel = require('../models/productModel');

// Serve the "Add Product" page
function showAddProductPage(req, res) {
    res.sendFile(path.join(__dirname, '../public/addProduct.html'));
}

// Add a new product and redirect to the product list
function addProduct(req, res) {
    const { name, description } = req.body;
    console.log(name, description);
    productModel.addProduct(name, description);
    res.redirect('/products');
}

// Serve the "Product List" page with dynamic content injection
function showProductList(req, res) {
    const products = productModel.getAllProducts();
    let productListHTML = '';

    products.forEach(product => {
        productListHTML += `<li>${product.name} - <a href="/products/${product.id}">Details</a></li>`;
    });

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Product List</title>
    </head>
    <body>
        <h1>Product List</h1>
        <ul>${productListHTML}</ul>
        <a href="/products/add">Add New Product</a>
    </body>
    </html>
    `;
    res.send(html);
}

// Serve the "Product Details" page with dynamic content injection
function showProductDetails(req, res) {
    const product = productModel.getProductById(req.params.id);

    if (product) {
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Product Details</title>
        </head>
        <body>
            <h1>Product Details</h1>
            <p><strong>Name:</strong> ${product.name}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <a href="/products">Back to Product List</a>
        </body>
        </html>
        `;
        res.send(html);
    } else {
        res.status(404).send('Product not found');
    }
}

module.exports = { showAddProductPage, addProduct, showProductList, showProductDetails };
