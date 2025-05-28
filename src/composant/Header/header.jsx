import { useEffect, useState } from 'react';
import React from "react";
import './header.css';

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
          <li><a href="">Home</a></li> 
          {/* <li><a href="">About</a></li> */}
          <li><a href="">Services</a></li>
          {/* <li><a href="">Portfolio</a></li> */}
          <li><a href="">Testimonials</a></li>
          <li><a href="">Team</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">News</a></li>
        </ul>
      </div>

      <button className="btn-quotes">Get Quotes</button>
      <button className="mode">
        <i className="bx bx-moon icon"></i> {/* bx-moon pour dark mode */}
      </button>
    </div>
  );
}
