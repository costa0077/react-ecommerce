// frontend/src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { getToken, login, logout } from '../services/authService'; // Corrija a importação para incluir `logout`

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = getToken();
        if (token) {
            // Adicione sua lógica de autenticação aqui para definir o usuário autenticado
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = async (userData) => {
        try {
            const response = await login(userData);
            if (response) {
                setIsAuthenticated(true);
                setUser(response.user); // Supondo que o usuário venha na resposta
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
