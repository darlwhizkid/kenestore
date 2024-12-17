import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./ProductList.css";

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
const ProductList = () => {
  const { addToCart } = useContext(AppContext);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
