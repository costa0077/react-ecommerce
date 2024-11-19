import React from 'react';
import '../styles/Checkout.css';

function Checkout() {
  return (
    <div className="checkout">
      <h1>Finalizar Compra</h1>
      <form className="checkout-form">
        <div className="form-group">
          <label>Nome Completo:</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Endereço:</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Cartão de Crédito:</label>
          <input type="text" required />
        </div>
        <button type="submit" className="submit-button">Finalizar Pedido</button>
      </form>
    </div>
  );
}

export default Checkout;