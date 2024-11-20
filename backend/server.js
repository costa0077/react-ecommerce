// backend/server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/productRoutes'); // Importando as rotas de produtos
const { PORT } = require('./config/config');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); // Usando as rotas de produtos

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
