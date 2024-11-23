// frontend/src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useCart();

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#1976d2', color: '#ffffff', padding: '10px 20px' }}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textDecoration: 'none' }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>
            MyStore
          </Link>
        </Typography>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/register">Register</Button>
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
