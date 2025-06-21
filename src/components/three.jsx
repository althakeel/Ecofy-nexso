import React from 'react';
import './three.css';

const ThreePics = () => {
  return (
    <div className="threepics-container">
      <h1 className="threepics-background-text">PRODUCTS</h1>
      <p className="threepics-question">Which type of gear are you looking for?</p>
      <a href="#" className="threepics-viewmore">View more →</a>

      <div className="threepics-cards">
        <div className="threepics-card">
          <div className="image-wrapper">
            <img src="https://res.cloudinary.com/drkfb976p/image/upload/v1750509926/20_zr5khb.webp" alt="Gaming" />
          </div>
          <h3>Bakery Packaging</h3>
        </div>

        <div className="threepics-card">
          <div className="image-wrapper">
            <img src="https://res.cloudinary.com/drkfb976p/image/upload/v1750509926/21_yp7lpr.webp" alt="Graphic Design" />
          </div>
          <h3>Coffee Packaging</h3>
        </div>

        <div className="threepics-card">
          <div className="image-wrapper">
            <img src="https://res.cloudinary.com/drkfb976p/image/upload/v1750509925/19_vnhyp4.webp" alt="Office & Others" />
          </div>
          <h3>Doypack Packaging</h3>
        </div>
      </div>
    </div>
  );
}

export default ThreePics;
