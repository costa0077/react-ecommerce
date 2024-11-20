import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Painel do Administrador</h1>
      <div className="admin-options">
        <Link to="/admin/users" className="admin-button">Gerenciar Usuários</Link>
        <Link to="/admin/products" className="admin-button">Gerenciar Produtos</Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
