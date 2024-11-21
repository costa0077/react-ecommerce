import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Importando jwtDecode diretamente
import { getToken, login, logout } from '../services/authService'; // Certifique-se de importar corretamente

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Token inválido:', error);
        setIsAuthenticated(false);
        setUser(null);
      }
    }
  }, []);

  const handleLogin = async (userData) => {
    try {
      const response = await login(userData);
      const token = response.token;
      if (token) {
        setUser(jwtDecode(token));
        setIsAuthenticated(true);
        navigate('/dashboard'); // Redireciona para o painel após o login
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login'); // Redireciona para a tela de login após o logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto de autenticação
export const useAuth = () => {
  return useContext(AuthContext);
};
