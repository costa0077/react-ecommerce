// frontend/src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

function Header() {
  const { cartItems } = useCart();

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Loja de Informática</Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">
          Carrinho {cartItems.length > 0 && <span className="cart-count">({cartItems.length})</span>}
        </Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Cadastro</Link>
      </nav>
    </header>
  );
}

export default Header;
