// backend/controllers/authController.js
const User = require('../models/User'); // Modelo de usuário
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config'); // Certifique-se de ter configurado JWT_SECRET no seu arquivo de configuração

// Função para registrar um novo usuário
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Verificar se o e-mail já está registrado
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'E-mail já está em uso.' });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar um novo usuário
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: 'user', // Definir como 'user' por padrão
    });

    // Gerar um token JWT
    const token = jwt.sign({ userId: newUser.id, role: newUser.role }, JWT_SECRET, { expiresIn: '1h' });

    // Retornar o token e as informações do usuário
    res.status(201).json({
      token,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error('Erro ao registrar o usuário:', error);
    res.status(500).json({ message: 'Erro ao registrar o usuário.' });
  }
};
