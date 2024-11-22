// frontend/src/components/Checkout.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Checkout.css';

function Checkout() {
  const { cartItems } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const [error, setError] = useState('');

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="checkout">
        <h2>Seu carrinho está vazio</h2>
        <p>Adicione alguns produtos ao carrinho antes de prosseguir para o checkout.</p>
      </div>
    );
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação básica
    if (
      !formData.fullName ||
      !formData.address ||
      !formData.city ||
      !formData.zipCode ||
      !formData.cardNumber ||
      !formData.cardExpiry ||
      !formData.cardCvv
    ) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Simular finalização de pedido
    console.log('Pedido finalizado com sucesso', formData);
    alert('Pedido finalizado com sucesso!');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-items">
        {cartItems.map((item, index) => (
          <div key={index} className="checkout-item">
            <img src={item.images[0]} alt={item.title} className="checkout-item-image" />
            <div className="checkout-item-details">
              <h3>{item.title}</h3>
              <p>Preço: R${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout-total">
        <h3>Total: R${totalPrice}</h3>
      </div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h3>Informações de Endereço</h3>
        <input
          type="text"
          name="fullName"
          placeholder="Nome Completo"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Endereço"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="Cidade"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="zipCode"
          placeholder="CEP"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />

        <h3>Informações de Pagamento</h3>
        <input
          type="text"
          name="cardNumber"
          placeholder="Número do Cartão"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cardExpiry"
          placeholder="Data de Validade (MM/AA)"
          value={formData.cardExpiry}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cardCvv"
          placeholder="CVV"
          value={formData.cardCvv}
          onChange={handleChange}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" className="checkout-button">Finalizar Compra</button>
      </form>
    </div>
  );
}

export default Checkout;
