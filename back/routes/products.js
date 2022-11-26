// Imports
const express = require('express');
const router = express.Router();
const ctrlProduct = require('../controllers/products.js');

// Users routes
router.get('/allProducts', ctrlProduct.getAllProducts);
router.get('/product/:productId', ctrlProduct.getProductParam);
router.post('/product',ctrlProduct.getProductId);

module.exports = router;