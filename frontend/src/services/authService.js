// frontend/src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Função para registrar um usuário
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Função para login
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Função para logout
export const logout = () => {
  localStorage.removeItem('token');
};

// Função para obter o token do usuário autenticado
export const getToken = () => {
  return localStorage.getItem('token');
};
