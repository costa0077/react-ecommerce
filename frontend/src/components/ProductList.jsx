import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProductList.css';
import { useCart } from '../context/CartContext'; // Certifique-se de importar o contexto do carrinho

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const { addItemToCart } = useCart(); // Função para adicionar ao carrinho

  useEffect(() => {
    // Buscar todos os produtos da API
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      })
      .catch(error => {
        console.error('Erro ao buscar os produtos:', error);
      });
  }, []);

  // Filtro e Pesquisa
  const handleFilter = () => {
    let filtered = products;

    // Filtro por Categoria
    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    // Filtro por Faixa de Preço
    if (minPrice !== '') {
      filtered = filtered.filter(product => product.price >= parseFloat(minPrice));
    }
    if (maxPrice !== '') {
      filtered = filtered.filter(product => product.price <= parseFloat(maxPrice));
    }

    // Filtro por Termo de Pesquisa
    if (searchTerm !== '') {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="product-list">
      <h1>Produtos Disponíveis</h1>

      {/* Filtros */}
      <div className="filters">
        <input
          type="text"
          placeholder="Pesquisar por nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">Todas as Categorias</option>
          <option value="electronics">Eletrônicos</option>
          <option value="home">Casa</option>
          <option value="fashion">Moda</option>
          {/* Adicione mais categorias conforme necessário */}
        </select>
        <input
          type="number"
          placeholder="Preço mínimo"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button onClick={handleFilter}>Filtrar</button>
      </div>

      {/* Exibição dos Produtos */}
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            {/* Link para detalhes do produto */}
            <Link to={`/product/${product.id}`} className="details-link">
              <img src={product.images[0]} alt={product.title} className="product-image" />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Preço: R${product.price}</p>
            </Link>
            {/* Botão para adicionar ao carrinho */}
            <button onClick={() => addItemToCart(product)} className="add-to-cart-button">
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
