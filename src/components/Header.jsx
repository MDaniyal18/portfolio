import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { Link } from "react-scroll"; // Import Link from react-scroll

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set initial theme based on device preference
  useEffect(() => {
    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
  }, []);

  return (
    <header className="header">
      <a href="#logo" className="logo">My Portfolio</a>
      <i className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></i>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => setIsMenuOpen(false)} // Close menu on link click
        >
          Home
        </Link>
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => setIsMenuOpen(false)} // Close menu on link click
        >
          About
        </Link>
        <Link 
          to="services" 
          smooth={true} 
          duration={500} 
          className={activeSection === 'services' ? 'active' : ''}
          onClick={() => setIsMenuOpen(false)} // Close menu on link click
        >
          Services
        </Link>
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={() => setIsMenuOpen(false)} // Close menu on link click
        >
          Projects
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => setIsMenuOpen(false)} // Close menu on link click
        >
          Contact Me
        </Link>
      </nav>
    </header>
  );
};

export default Header;
