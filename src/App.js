import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Shop from './components/Shop';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <ProductList />
            <Subscribe />
          </>
        } />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </AppProvider>
  );
}

export default App;