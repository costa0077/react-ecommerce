// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import OrderHistory from './pages/OrderHistory';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import './styles/App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/orders" element={<OrderHistory />} />
            </Routes>
          </main>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
