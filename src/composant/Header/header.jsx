import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        {/* Remplace par ton logo 
        
        <img src="/logo-light.png" alt="" />*/}<Link to="/Home">AlphaWeb</Link>
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/Home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Team</a></li>
          <li><a href="/table" onClick={() => setMenuOpen(false)}>Pack</a></li>
          <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </nav>

          <button className="btn-quotes">Get Quotes</button>
    
      

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}></div>
      </button>
    </header>
  );
}
