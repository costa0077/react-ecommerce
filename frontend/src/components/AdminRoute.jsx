// frontend/src/components/AdminRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function AdminRoute({ children }) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || user.role !== 'administrador') {
    // Redireciona para login se não estiver autenticado ou não for administrador
    return <Navigate to="/login" />;
  }

  // Renderiza o conteúdo da rota do administrador se a autenticação for válida
  return children;
}

export default AdminRoute;
