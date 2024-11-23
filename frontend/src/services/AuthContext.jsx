// frontend/src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { login, getToken, logout } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = getToken();
        if (token) {
            setUser({ token });
        }
    }, []);

    const loginUser = async (credentials) => {
        try {
            const data = await login(credentials);
            setUser(data);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logoutUser = () => {
        logout();
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};
