// Imports
const express = require('express');
const router = express.Router();

const ctrlProduct = require('../controllers/products.js');
const ctrlReview = require('../controllers/reviews.js');

// routes
router.get('/allProducts', ctrlProduct.getAllProducts);
router.get('/product/:productId', ctrlProduct.getProductParam);
router.post('/product',ctrlProduct.getProductId);
router.post('/generatePwd', ctrlProduct.generatePwd);

router.get('/product/reviews', ctrlReview.getReviews);
router.post('/product/addReview', ctrlReview.addReview);
router.post('/product/uploadReview', ctrlReview.uploadReview);


module.exports = router;