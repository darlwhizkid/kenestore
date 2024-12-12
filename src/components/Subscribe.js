import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        <h2>Stay Updated with Kenestore</h2>
        <p>Subscribe to our newsletter for exclusive deals, new arrivals, and special offers!</p>
        
        <form onSubmit={handleSubmit} className="subscribe-form">
          <input 
            type="email" 
            placeholder="Enter your email address"
            required
          />
          <button type="submit">
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
