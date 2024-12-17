import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import './MainSection.css';

const MainSection = () => {
  return (
    <section className="main-section">
      <Header />
      <ProductList />
    </section>
  );
};

export default MainSection;
