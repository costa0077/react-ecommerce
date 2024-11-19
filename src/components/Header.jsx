import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Lojinha</h1>
                <p>Encontre tudo o que você precisa em um só lugar</p>
            </div>
            <nav className="header-nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/cart" className="nav-link">Carrinho</Link>
                <Link to="/checkout" className="nav-link">Checkout</Link>
            </nav>
        </header>
    );
}

export default Header;