// frontend/src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/ProductList.css'; 

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Erro ao buscar os produtos:', error);
      });
  }, []);

  return (
    <div className="product-list">
      <Typography variant="h4" align="center" gutterBottom>
        Produtos Disponíveis
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card className="product-card">
              <CardMedia
                component="img"
                height="180"
                image={product.images[0]}
                alt={product.title}
                className="product-image"
              />
              <CardContent className="product-info">
                <Typography variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description.length > 60 ? product.description.substring(0, 60) + "..." : product.description}
                </Typography>
                <Typography variant="h5" color="primary" className="product-price">
                  R$ {product.price}
                </Typography>
              </CardContent>
              <CardActions className="card-actions">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                  className="add-to-cart-button"
                >
                  Adicionar ao Carrinho
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  component={Link}
                  to={`/product/${product.id}`}
                  className="view-details-button"
                >
                  Ver Detalhes
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductList;
