// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');

// Obter todos os usuários (apenas administradores)
router.get('/', auth('admin'), async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao buscar usuários', error });
  }
});

// Atualizar um usuário (apenas administradores)
router.put('/:id', auth('admin'), async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar usuário', error });
  }
});

// Deletar um usuário (apenas administradores)
router.delete('/:id', auth('admin'), async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao deletar usuário', error });
  }
});

module.exports = router;
