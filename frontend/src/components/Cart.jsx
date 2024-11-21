// frontend/src/components/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

function Cart() {
  const { cart, dispatch } = useCart();

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  if (cart.items.length === 0) {
    return <div className="empty-cart">Seu carrinho está vazio. <Link to="/">Volte à loja</Link></div>;
  }

  return (
    <div className="cart">
      <h1>Carrinho</h1>
      <ul>
        {cart.items.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.images[0]} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Preço: R${item.price}</p>
              <p>Quantidade: {item.quantity}</p>
              <button onClick={() => removeItem(item.id)} className="remove-button">Remover</button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/checkout"><button className="checkout-button">Prosseguir para o Checkout</button></Link>
    </div>
  );
}

export default Cart;
