const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/products', authenticateToken, createProduct);
router.get('/products', getProducts);

module.exports = router;
