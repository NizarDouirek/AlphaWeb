import React from "react";
import "./footer.css";
import Tooltip from "./icons";

export default function Footer() {
  return (
    <footer> 
      <div className="footer-content">
<section className="newsletter">
      <div className="newsletter-overlay"></div>
      <div className="newsletter-content">
        <div className="newsletter-left">
          <h2>
            <span className="gradient-text">Subcribe to Our Newsletter</span>
          </h2>
          <p>Get the latest SEO tips and software insights straight to your inbox.</p>
        </div>

       <div className="newsletter-right">
  <form className="newsletter-form">
    <div className="form-row">
      <input type="email" placeholder="Enter email address" />
      <button type="submit" className="subscribe-button">Subscribe Now →</button>
    </div>
    <div className="privacy">
      <input type="checkbox" />
      <span>by Subscribing. Your Accept Privacy policy</span>
    </div>
  </form>
</div>

        </div>
    </section>
        {/* Newsletter en haut en ligne */}
        
        {/* Grille du footer */}
        <div className="footer-container">
          {/* Colonne 1 */}
          <div className="footer-brand">
            <div className="footer-img"></div>
            <p>
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
            </p>
            <ul className="footer-contact">
              <li><i className="bx bx-phone"></i> <span>+2 123 654 7898</span></li>
              <li><i className="bx bx-map"></i> <span>25/B Milford Road, New York</span></li>
              <li><i className="bx bx-envelope"></i> <span>info@example.com</span></li>
            </ul>
          </div>

          {/* Colonne 2 */}
          <div className="footer-column">
            <h2>Quick Links</h2>
            <ul>
              <li><span>&gt;</span><a href="#">About Us</a></li>
              <li><span>&gt;</span><a href="#">FAQ's</a></li>
              <li><span>&gt;</span><a href="#">Terms Of Service</a></li>
              <li><span>&gt;</span><a href="#">Privacy Policy</a></li>
              <li><span>&gt;</span><a href="#">Our Team</a></li>
              <li><span>&gt;</span><a href="#">Latest Blog</a></li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="footer-column">
            <h2>Our Services</h2>
            <ul>
              <li><span>&gt;</span><a href="#">Web Design</a></li>
              <li><span>&gt;</span><a href="#">Digital Marketing</a></li>
              <li><span>&gt;</span><a href="#">IT Management</a></li>
              <li><span>&gt;</span><a href="#">Cloud Services</a></li>
              <li><span>&gt;</span><a href="#">Machine Learning</a></li>
              <li><span>&gt;</span><a href="#">Cyber Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TECHXO. All Rights Reserved.</p>
          <div className="footer-bottom-icons">
            <Tooltip />
          </div>
        </div>

      </div>
    </footer>
  );
}
