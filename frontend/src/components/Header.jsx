import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Certifique-se de importar corretamente o hook
import '../styles/Header.css';

function Header() {
  const { user, handleLogout } = useAuth();

  return (
    <header className="header">
      <div className="header-content">
        <h1>Loja de Informática</h1>
        <p>Encontre tudo o que você precisa em um só lugar</p>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">Carrinho</Link>
        <Link to="/checkout" className="nav-link">Checkout</Link>
        {!user && (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Cadastro</Link>
          </>
        )}
        {user?.role === 'administrador' && (
          <Link to="/dashboard" className="nav-link">Painel Admin</Link>
        )}
        {user && (
          <button onClick={handleLogout} className="logout-button">Sair</button>
        )}
      </nav>
    </header>
  );
}

export default Header;
