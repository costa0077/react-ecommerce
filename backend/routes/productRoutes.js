// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

// Criar um novo produto - Apenas administrador
router.post('/', auth, authAdmin, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar produto', error });
  }
});
