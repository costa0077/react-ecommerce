import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartContext from '../context/CartContext';
import '../styles/ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    // Buscar todos os produtos da API
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Erro ao buscar os produtos:', error);
      });
  }, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="product-list">
      <h1>Produtos Disponíveis</h1>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Preço: R${product.price}</p>
            <div className="product-actions">
              <button onClick={() => addToCart(product)} className="add-to-cart-button">Adicionar ao Carrinho</button>
              <Link to={`/product/${product.id}`} className="details-button">Ver Detalhes</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
