import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading && <Preloader />}
      {!isLoading && (
        <>
          <Header />
          <ProductList />
          <Subscribe />
          <Footer />
        </>
      )}
    </div>
  );
}
export default App;