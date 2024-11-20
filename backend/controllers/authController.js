// backend/controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../config/config');

// Função para registro
exports.register = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email já está em uso' });
    }

    // Verificar se o usuário está tentando se registrar como administrador
    if (role === 'administrador') {
      // Para registrar um administrador, o usuário autenticado precisa ser administrador
      if (!req.user || req.user.role !== 'administrador') {
        return res.status(403).json({ message: 'Acesso negado' });
      }
    }

    const newUser = new User({ username, email, password, role });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id, role: newUser.role }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, user: { username, email, role } });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
};
