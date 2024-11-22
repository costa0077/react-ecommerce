// frontend/src/components/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems ? cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2) : '0.00';
  };

  return (
    <div className="cart">
      <h1>Meu Carrinho</h1>
      {cartItems && cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div className="cart-items">
          {cartItems && cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.images[0]} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>Preço: R${item.price}</p>
                <button onClick={() => removeFromCart(item.id)} className="remove-from-cart-button">
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems && cartItems.length > 0 && (
        <div className="cart-summary">
          <p>Total: R${calculateTotal()}</p>
          <Link to="/checkout" className="checkout-button">
            Ir para o Checkout
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
