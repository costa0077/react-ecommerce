import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

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

  return (
    <Box sx={{ bgcolor: '#121212', color: '#fff', py: 5, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#0aa3e9' }}>
        Produtos Disponíveis
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ bgcolor: '#1e1e1e', borderRadius: 3, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardMedia
                component="img"
                height="200"
                image={product.images[0]}
                alt={product.title}
                sx={{ borderRadius: '8px 8px 0 0' }}
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Typography variant="h6" component="div" align="center" sx={{ color: '#ffffff' }}>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ color: '#b0b0b0', mb: 1 }}>
                  {product.description.length > 60 ? `${product.description.slice(0, 60)}...` : product.description}
                </Typography>
                <Typography variant="h5" color="primary" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
                  R$ {product.price}
                </Typography>
                <Button variant="contained" color="warning" onClick={() => addToCart(product)} sx={{ mb: 1, width: '100%' }}>
                  Adicionar ao Carrinho
                </Button>
                <Button variant="outlined" color="primary" component={Link} to={`/product/${product.id}`} sx={{ width: '100%' }}>
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
