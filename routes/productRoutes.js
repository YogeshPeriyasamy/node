// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/add', productController.showAddProductPage);
router.post('/add', productController.addProduct);
router.get('/', productController.showProductList);
router.get('/:id', productController.showProductDetails);

module.exports = router;
