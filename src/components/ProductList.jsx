import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const updatedProducts = response.data.products.map(product => ({
          ...product,
          description: product.description || 'Descrição não disponível'
        }));
        setProducts(updatedProducts);
      })
      .catch(error => {
        console.error('Erro ao buscar os produtos:', error);
      });
  }, []);
  

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
            <Link to={`/product/${product.id}`} className="details-button">Ver Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;