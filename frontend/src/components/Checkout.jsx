// frontend/src/components/Checkout.jsx
import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Box } from '@mui/material';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cartItems } = useCart();
  const [address, setAddress] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para finalizar a compra (ainda a ser implementada)
    console.log('Endereço:', address);
    console.log('Informações de Pagamento:', paymentInfo);
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', padding: 4, borderRadius: 2, maxWidth: 600, margin: '20px auto' }}>
      <Typography variant="h4" align="center" gutterBottom>Checkout</Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Endereço"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Informações de Pagamento"
              value={paymentInfo}
              onChange={(e) => setPaymentInfo(e.target.value)}
              margin="normal"
              required
            />
            <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
              Finalizar Compra
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Checkout;
