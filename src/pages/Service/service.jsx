import React from "react";
import './service.css';
import { Link } from "react-router-dom";
import { FaGlobeAmericas, FaUserTie, FaCheckCircle, FaSmile } from "react-icons/fa"
import AnimatedCounter from "../../composant/animatecounter/numbercount";
import Carousel from "../../composant/Carousel/carousel";

export default function Services() {
  return (
    <><div className='contact-header'>
            <h1 className='contact-p'>Services</h1>
            <p className='contact-p2'><Link to="/Home" className='home-p-contact'>Home</Link> / Services</p>
        </div>
    <div className="services-page">
      
        
      <section className="services-hero">
        <h1>Nos Services</h1>
        <p>
          Nous fournissons des solutions technologiques de haute qualité pour faire évoluer votre entreprise.
        </p>
      </section>

      <section className="services-list">
        <div className="service-card">
          <i className="bx bx-code-alt service-icon"></i>
          <h3>Développement Web</h3>
          <p>Sites modernes et performants, adaptés à tous les appareils.</p>
        </div>
        <div className="service-card">
          <i className="bx bx-mobile-alt service-icon"></i>
          <h3>Applications Mobiles</h3>
          <p>Applications iOS et Android, intuitives et performantes.</p>
        </div>
        <div className="service-card">
          <i className="bx bx-paint service-icon"></i>
          <h3>Design UI/UX</h3>
          <p>Interfaces attrayantes et orientées utilisateur.</p>
        </div>
        <div className="service-card">
          <i className="bx bx-support service-icon"></i>
          <h3>Consulting IT</h3>
          <p>Conseils personnalisés pour votre transformation digitale.</p>
        </div>
        <div className="service-card">
  <i className="bx bx-cloud-upload service-icon"></i>
  <h3>DevOps & CI/CD</h3>
  <p>Automatisation des déploiements, intégration continue et amélioration du cycle de développement logiciel.</p>
</div>
<div className="service-card">
  <i className="bx bx-shield-quarter service-icon"></i>
  <h3>Cybersécurité</h3>
  <p>Protection de vos données et systèmes contre les cybermenaces avec des solutions de sécurité avancées.</p>
</div>

      </section>
      
      <section className="stats-section">
        <div className="stat-item">
          <img src="client.png" className="stat-img" />
          <p><AnimatedCounter to={120} duration={2200} /><span>+</span></p>
          <p>Clients Worldwide</p>
        </div>
        <div className="stat-item">
         <img src="customer.png" className="stat-img" />
          <p><AnimatedCounter to={60} duration={2500} /><span>+</span></p>
          <p>Experience Engineers</p>
        </div>
        <div className="stat-item">
         <img src="verification.png" className="stat-img" />
          <p><AnimatedCounter to={70} duration={2500} /><span>+</span></p>
          <p>Completed Projects</p>
        </div>
        <div className="stat-item">
          <img src="reputation.png" className="stat-img" />
          <p><AnimatedCounter to={120} duration={2000} /><span>%</span></p>
          <p>Satisfaction Customers</p>
        </div>
      </section>
      <section>
        <Carousel/>
      </section>
      
    </div>
    </>
  );
}
