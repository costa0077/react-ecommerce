// backend/controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../config/config');

// Função para registro - sem autenticação necessária
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email já está em uso' });
    }

    // Criptografar a senha do usuário
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o novo usuário
    const newUser = new User({ username, email, password: hashedPassword, role: 'cliente' });
    await newUser.save();

    // Criar o token JWT
    const token = jwt.sign({ userId: newUser._id, role: newUser.role }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, user: { username, email, role: newUser.role } });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
};
