import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scrolling effect
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Close menu when clicking outside
  const closeMenu = (e) => {
    if (e.target.id === "overlay") {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', closeMenu);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <span className={`project-name ${scrolled ? 'scrolled' : ''}`}>Together for Gaza</span>
        </div>
        <div className="navbar-right">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </button>
        </div>
      </nav>

      {/* Fullscreen menu */}
      {menuOpen && (
        <div id="overlay" className="overlay">
          <div className="menu">
            <button className="menu-link" onClick={() => window.location.href = '/'}>Home</button>
            <button className="menu-link" onClick={() => window.location.href = '/about'}>About Us</button>
            <button className="menu-link" onClick={() => window.location.href = '/donate'}>Donate</button>
            <button className="menu-link" onClick={() => window.location.href = '/contact'}>Contact Us</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
