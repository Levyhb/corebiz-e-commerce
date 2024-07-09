import React, { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const updatedCart = [...state, action.payload];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    case 'LOAD_CART':
      return action.payload;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(storedCart) });
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
