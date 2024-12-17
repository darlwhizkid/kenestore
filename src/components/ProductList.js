import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    image: "https://via.placeholder.com/400",
    hoverImage: "https://via.placeholder.com/400/555555",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    image: "https://via.placeholder.com/400",
    hoverImage: "https://via.placeholder.com/400/555555",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 199.99,
    image: "https://via.placeholder.com/400",
    hoverImage: "https://via.placeholder.com/400/555555",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 299.99,
    image: "https://via.placeholder.com/400",
    hoverImage: "https://via.placeholder.com/400/555555",
  },
  {
    id: 5,
    name: "Gaming Console",
    price: 499.99,
    image: "https://via.placeholder.com/400",
    hoverImage: "https://via.placeholder.com/400/555555",
  },
  {
    id: 6,
    name: "Tablet",
    price: 449.99,
    image: "https://via.placeholder.com/400",
    hoverImage: "https://via.placeholder.com/400/555555",
  },
  {
    id: 7,
    name: "Wireless Speaker",
    price: 149.99,
    image: "https://via.placeholder.com/400",
    hoverImage: "https://via.placeholder.com/400/555555",
  },
  {
    id: 8,
    name: "Digital Camera",
    price: 799.99,
    image: "https://via.placeholder.com/400",
    hoverImage: "https://via.placeholder.com/400/555555",
  },
  {
    id: 9,
    name: "Smart TV",
    price: 1299.99,
    image: "https://via.placeholder.com/400",
    hoverImage: "https://via.placeholder.com/400/555555",
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Link to={`/shop/${product.id}`} key={product.id} className="product-card">
          <div className="price-tag">${product.price}</div>
          <div className="image-container">
            <img 
              src={product.image} 
              alt={product.name}
              className="product-image"
            />
            <div className="product-name-overlay">
              <h3>{product.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default ProductList;