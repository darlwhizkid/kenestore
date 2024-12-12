import React, { useState } from "react";
import "./Shop.css";

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="shop-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
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
    </div>
  );
}

export default Shop;
