import React from "react";
import "./caro.css";

const items = [
  "⭐ PRODUCT DESIGN",
  "⭐ WEB DEVELOPMENT",
  "⭐ BRANDING",
  "⭐ CYBER SECURITY",
  "⭐ WEBSITE DESIGN",
  "⭐ DIGITAL STRATEGY"
];

export default function Caro() {
  const repeatedItems = [...items, ...items]; // Dupliquer pour effet infini

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {repeatedItems.map((item, index) => (
          <span className="carousel-item" key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
