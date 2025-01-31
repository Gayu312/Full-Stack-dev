const Product = require('../models/product');

const createProduct = async (req, res) => {
    const { name, description, category, price, oldPrice, imageUrl, startDate, deliveryAmount } = req.body;
    const expiryDate = new Date(new Date(startDate).getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from start date

    const product = await Product.create({ name, description, category, price, oldPrice, imageUrl, startDate, expiryDate, deliveryAmount });
    res.json({ message: 'Product created successfully', product });
};

const getProducts = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
};

module.exports = { createProduct, getProducts };
