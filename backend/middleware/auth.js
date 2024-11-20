// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth'); // Importando o middleware auth.js existente

// Criar um novo produto (apenas administrador)
router.post('/', auth('admin'), async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar produto', error });
  }
});

// Atualizar um produto (apenas administrador)
router.put('/:id', auth('admin'), async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar produto', error });
  }
});

// Deletar um produto (apenas administrador)
router.delete('/:id', auth('admin'), async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao deletar produto', error });
  }
});

// Obter todos os produtos (acessível a qualquer usuário autenticado)
router.get('/', auth(), async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao buscar produtos', error });
  }
});

module.exports = router;
