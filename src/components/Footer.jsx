// src/Footer.jsx
import React from 'react';
//import './Footer.css'; // Optional: Create a CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>
          Copyright &copy; 2024 by Mohammad Daniyal Sidiquie | All Rights
          Reserved.
        </p>
      </div>
      <div className="footer-iconTop">
        <a href="#home"><i className="bx bx-up-arrow-alt"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
