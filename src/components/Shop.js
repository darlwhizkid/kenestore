import React, { useState, useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';  // Updated import path
import './Shop.css';
function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const { addToCart } = useContext(CartContext);
  const productsPerPage = 8;

  // Sample product data - replace with your actual products
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 199.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 299.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Gaming Console",
      price: 499.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Tablet",
      price: 449.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Wireless Speaker",
      price: 149.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Digital Camera",
      price: 799.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Smart TV",
      price: 1299.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  //Sorting logic
  const sortProducts = (products) => {
    switch (sortBy) {
      case "newest":
        return [...products].sort((a, b) => new Date(b.id) - new Date(a.id));
      case "oldest":
        return [...products].sort((a, b) => new Date(a.id) - new Date(b.id));
      case "popular":
        return [...products].sort((a, b) => b.popularity - a.popularity);
          case "type":
            return [...products].sort((a, b) => {
              const typeA = a.type || '';
              const typeB = b.type || '';
              return typeA.localeCompare(typeB);
            });
      case "price-low-to-high":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high-to-low":
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(products);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="shop-container">
      <h1>Our Products</h1>

      <div className="sort-container"><h3>Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-dropdown"
        >
          <option value="newest">Newest First</option>
          <option value="popular">Most Popular</option>
          <option value="type">By Type</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
        </select>
      </div>

      <div className="products-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>Type: {product.type}</p>
            <div className="cart-icon1" onClick={() => handleAddToCart(product)}>
              <FaShoppingCart />
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <p>
          Showing {indexOfFirstProduct + 1}-
          {Math.min(indexOfLastProduct, products.length)} of {products.length}
        </p>
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={indexOfLastProduct >= products.length}
        >
          Next
        </button>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Shop;
