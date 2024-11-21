// backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

const auth = (role) => {
  return (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'Sem autorização, faça login' });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;

      // Verificar o papel do usuário
      if (role && req.user.role !== role) {
        return res.status(403).json({ message: 'Acesso negado. Função de usuário não permitida.' });
      }

      next();
    } catch (error) {
      res.status(401).json({ message: 'Token inválido' });
    }
  };
};

module.exports = auth; // Certifique-se de exportar `auth` corretamente
