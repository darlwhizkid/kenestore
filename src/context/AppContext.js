import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <AppContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};