// frontend/src/components/Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import '../styles/Header.css';

function Header() {
  const { cart } = useContext(CartContext);
  const itemCount = cart.items.reduce((count, item) => count + (item.quantity || 1), 0);

  return (
    <header className="header">
      <div className="header-content">
        <h1>Loja de Informática</h1>
        <p>Encontre tudo o que você precisa em um só lugar</p>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">Carrinho ({itemCount})</Link>
        <Link to="/checkout" className="nav-link">Checkout</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Cadastro</Link>
      </nav>
    </header>
  );
}

export default Header;
