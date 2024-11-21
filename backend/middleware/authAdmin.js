// backend/middleware/authAdmin.js
const authAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'administrador') {
      next();
    } else {
      res.status(403).json({ message: 'Acesso negado. Apenas administradores podem acessar esta página.' });
    }
  };
  
  module.exports = authAdmin;
  