import React from "react";
import "./caro.css";

const techLogos = [
  { src: "./laravel.png", alt: "Laravel" },
  { src: "/mysql2.png", alt: "MySQL" },
  { src: "/react.png", alt: "React" },
  { src: "./figma.png", alt: "Figma" },
  { src: "./html.png", alt: "HTML5" },
  { src: "./php.png", alt: "PHP" },
  { src: "./mongo-db.png", alt: "MongoDB" },
  { src: "./javascript.png", alt: "JavaScript" },
  { src: "./github.png", alt: "GitHub" },
];

export default function TechCarousel() {
  const repeatedItems = [...techLogos, ...techLogos];

  return (
    <div className="carousel-wrapper">
      
      <div className="carousel-container">
        <div className="carousel-track">
          {repeatedItems.map((logo, index) => (
            <div className="carousel-item" key={index}>
              <div className="tech-card">
                <img src={logo.src} alt={logo.alt} className="tech-logo" />
                <span className="tech-name">{logo.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
