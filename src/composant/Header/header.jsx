import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import ThemeToggle from '../Toglle/toglle'; // Assurez-vous que le chemin est correct
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
        <img className="imgLogo" src="logo.svg" alt="" />
 <Link to="/Home">AlphaWeb</Link>
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/Home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/About"  onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/Services"  onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/Home"  onClick={() => setMenuOpen(false)}>Team</Link></li>
          <li><Link to="/table" onClick={() => setMenuOpen(false)}>Pack</Link></li>
          <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </nav>
      <div className='btn-header'>
         <Link to="/Contact"> <button className="btn-quotes">Get Quotes</button></Link> 

      <ThemeToggle />
      </div>


   


      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}></div>
      </button>
    </header>
  );
}