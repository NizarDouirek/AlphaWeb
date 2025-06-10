import { useEffect, useState } from 'react';
import React from "react";
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
   const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      {/* <img src="RIMBERIO.svg" className="logo" alt="Logo" />. */}

      <div className="nav">
        <ul>
          <li className="logo-img" ></li>
          <li><Link to="/Home">Home</Link></li> 
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Services">Services</Link></li>
          {/* <li><Link to="/Contact">Portfolio</Link></li> */}
          <li><Link to="/Testimonials">Testimonials</Link></li>
          {/* <li><Link to="/Team">Team</Link></li> */}
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </div>

      <button className="btn-quotes">Get Quotes</button>
      <button className="mode">
        <i className="bx bx-moon icon"></i> {/* bx-moon pour dark mode */}
      </button>
    </div>
  );
}
