import React from "react";
import "./portfolio.css";

const projects = [
  {
    title: "Luxury Voyage",
    description: "Site web d’agence de voyage ",
    img: "imgport.jpg",
  },
  {
    title: "RoyalHotel",
    description: "site de reservation Hotels",
    img: "imgport2.jpg",
  },
  {
    title: "Piedschic",
    description: "Boutique en ligne de chaussures",
    img: "testimonial.png",
  },
  {
    title: "ArteCafe",
    description: "Site pour de suppléments alimentaires",
    img: "artecafe.png",
  },
  {
    title: "PowerGym",
    description: "Site WordPress de suppléments alimentaires",
    img: "ins.jpg",
  },
  {
    title: "PowerGym",
    description: "Site WordPress de suppléments alimentaires",
    img: "imgport1.png",
  },
  {
    title: "IronGym",
    description: "Site web de gym et suppléments alimentaires",
    img: "imgport1.png",
  },
   {
    title: "RoyalHotel",
    description: "E-commerce de téléphones et tablettes",
    img: "imgport2.jpg",
  },
  {
    title: "PowerGym",
    description: "Site WordPress de suppléments alimentaires",
    img: "bg.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio-title">Nos Réalisations</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <img src={project.img} alt={project.title} />
            <div className="portfolio-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
