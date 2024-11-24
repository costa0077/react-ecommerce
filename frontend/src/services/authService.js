// frontend/src/services/authService.js
import axios from 'axios';

// Função para registrar um novo usuário
export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', userData);
    console.log('Usuário registrado com sucesso:', response.data);
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.response ? error.response.data : error.message);
  }
};

// Função para login
export const login = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
    const token = response.data.token;
    if (token) {
      localStorage.setItem('token', token);
    }
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Função para obter o token armazenado no localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

// Função para logout
export const logout = () => {
  localStorage.removeItem('token');
};
