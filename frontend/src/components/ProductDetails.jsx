// frontend/src/components/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import '../styles/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar o produto:', error);
      });
  }, [id]);

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="product-details">
      <img src={product.images[0]} alt={product.title} className="product-details-image" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Preço: R${product.price}</p>
      <button onClick={addToCart} className="add-to-cart-button">Adicionar ao Carrinho</button>
    </div>
  );
}

export default ProductDetails;
