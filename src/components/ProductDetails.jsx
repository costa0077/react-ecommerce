import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../context/CartContext';
import axios from 'axios';
import '../styles/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    // Buscar detalhes do produto por ID da API
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
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="product-details">
      <div className="product-details-container">
        <img src={product.images[0]} alt={product.title} className="product-details-image" />
        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Preço: R${product.price}</p>
          <button onClick={addToCart} className="add-to-cart-button">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
