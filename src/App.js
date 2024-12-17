import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
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
    <AppProvider>
      <BrowserRouter>
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
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
