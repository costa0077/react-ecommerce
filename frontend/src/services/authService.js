// frontend/src/services/authService.js
import axios from 'axios'; // Adicione esta linha

// Função para armazenar o token no localStorage
export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

// Função para obter o token do localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

// Função para fazer o login
export const login = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', userData);
    saveToken(response.data.token); // Salva o token após o login bem-sucedido
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

// Função para registro
export const register = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};

// Função para logout
export const logout = () => {
  localStorage.removeItem('token');
};
