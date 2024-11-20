// backend/routes/auth.js
const express = require('express');
const { register, login } = require('../controllers/authController'); // Certifique-se de que está importando corretamente

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;
