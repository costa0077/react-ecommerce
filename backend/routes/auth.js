// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Registro - sem middleware de autenticação
router.post('/register', authController.register);

// Login - qualquer pessoa pode fazer login
router.post('/login', authController.login);

module.exports = router;
