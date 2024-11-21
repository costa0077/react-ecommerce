// CartContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

// Criação do contexto
const CartContext = createContext();

// Definindo estado inicial do carrinho
const initialState = {
  items: [],
  total: 0,
};

// Reducer para gerenciar as ações do carrinho
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
}

// CartProvider: Provedor para envolver os componentes que utilizam o carrinho
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar o CartContext
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
}

export default CartContext;