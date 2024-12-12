// src/components/Header.js
import React, { useState, useContext } from "react";
import "./Header.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSearch,
  FaShoppingCart,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useContext(AppContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>MyStore</h1>
        </div>
        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <div className="cart-icon">
          <FaShoppingCart />
          <span>({cartCount})</span>
        </div>
      </header>

      {menuOpen && (
        <nav className="nav-menu">
          <div className="nav-header">
            <h1>MyStore</h1>
            <button className="close-btn" onClick={toggleMenu} aria-label="Close menu">
              <FaTimes />
            </button>
          </div>
          <ul className="nav-list">
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/shop">SHOP</a></li>
            <li><a href="/product">PRODUCT</a></li>
            <li><a href="/cart">CART</a></li>
            <li><a href="/checkout">CHECKOUT</a></li>
          </ul>
          <div className="nav-footer">
            <div className="favs">
              <FaStar /> <span>FAVOURITE</span>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button className="search-icon" aria-label="Search">
                <FaSearch />
              </button>
            </div>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
