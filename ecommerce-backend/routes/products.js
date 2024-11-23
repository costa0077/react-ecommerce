const express = require('express');
const { Product } = require('../models');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

router.post('/', auth, admin, async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar produto', error });
    }
});

module.exports = router;
