// backend/routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/auth');

const router = express.Router();

// Criar um novo produto (somente Administradores)
router.post('/', auth('administrador'), async (req, res) => {
  const { name, description, price, category, stock, imageUrl } = req.body;

  try {
    const product = new Product({ name, description, price, category, stock, imageUrl });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o produto' });
  }
});

// Atualizar um produto existente (somente Administradores)
router.put('/:id', auth('administrador'), async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o produto' });
  }
});

// Deletar um produto (somente Administradores)
router.delete('/:id', auth('administrador'), async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json({ message: 'Produto removido com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar o produto' });
  }
});

module.exports = router;
