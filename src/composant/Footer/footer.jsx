import React from "react";
import "./footer.css";
import Tooltip from "./icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-container">
          {/* Colonne 1 */}
          <div className="footer-brand">
            <div className="footer-img"></div>
            <p>
              We are many variations of passages available but the majority
              have suffered alteration in some form by injected humour words
              believable.
            </p>
            <ul className="footer-contact">
              <li>
                <i className="bx bx-phone"></i> 
                <span>+2 123 654 7898</span>
              </li>
              <li>
                <i className="bx bx-map"></i> 
                <span>25/B Milford Road, New York</span>
              </li>
              <li>
                <i className="bx bx-envelope"></i> 
                <span>info@example.com</span>
              </li>
            </ul>
          </div>

          {/* Colonne 2 */}
          <div className="footer-column">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQ's</a></li>
              <li><a href="#">Terms Of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Latest Blog</a></li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="footer-column">
            <h2>Our Services</h2>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">IT Management</a></li>
              <li><a href="#">Cloud Services</a></li>
              <li><a href="#">Machine Learning</a></li>
              <li><a href="#">Cyber Security</a></li>
            </ul>
          </div>

          {/* Colonne 4 */}
          <div className="footer-column">
            <h2>Newsletter</h2>
            <p>Subscribe to get latest updates and news</p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}>
              <input type="email" placeholder="Your Email" required />
              <button type="submit">SUBSCRIBE NOW</button>
            </form>
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
