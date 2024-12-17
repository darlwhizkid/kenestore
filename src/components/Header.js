import React, { useState } from "react";
import "./Header.css";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleUserClick = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLoginModal(true);
    setShowUserMenu(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowUserMenu(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  return (
    <div className="kene-header">
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <div className="logo-wrapper">
            <h1 className="logo">KENESTORE</h1>
          </div>

          <nav className="navigation">
            <ul>
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/product">Product</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li>
              <li>
                <a href="/checkout">Checkout</a>
              </li>
            </ul>
          </nav>

          <div className="social-info">
            <a href="#" className="social-info-link">
              Subscribe & Get 10% Off
            </a>
          </div>

          <div className="header-meta">
            <div className="header-meta-wrapper">
              <div className="search-area">
                <button>
                  <FaSearch />
                </button>
              </div>
              <div className="favourite-area">
                <button>
                  <FaHeart />
                  <span className="counter">5</span>
                </button>
              </div>
              <div className="cart-area">
                <button>
                  <FaShoppingCart />
                  <span className="counter">3</span>
                </button>
              </div>
              <div className="user-menu-container">
                <button onClick={handleUserClick}>
                  <FaUser />
                </button>
                {showUserMenu && (
                  <div className="user-dropdown">
                    {isLoggedIn ? (
                      <>
                        <a href="/profile">
                          <FaUserCircle /> My Profile
                        </a>
                        <a href="/orders">My Orders</a>
                        <a href="/settings">Settings</a>
                        <button onClick={handleLogout}>
                          <FaSignOutAlt /> Logout
                        </button>
                      </>
                    ) : (
                      <a href="#" onClick={handleLoginClick}>
                        Login/Register
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form className="form" onSubmit={handleSubmit}>
              <p id="heading">Login</p>
              <div className="field">
                <svg
                  className="input-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                </svg>
                <input
                  autoComplete="off"
                  placeholder="Username"
                  className="input-field"
                  type="text"
                />
              </div>
              <div className="field">
                <svg
                  className="input-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                </svg>
                <input
                  placeholder="Password"
                  className="input-field"
                  type="password"
                />
              </div>
              <div className="btn">
                <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                <button className="button2">Sign Up</button>
              </div>
              <button className="button3">Forgot Password</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
