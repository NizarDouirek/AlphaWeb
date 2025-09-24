import React from "react";
import './service.css';
import { Link } from "react-router-dom";
import { FaGlobeAmericas, FaUserTie, FaCheckCircle, FaSmile } from "react-icons/fa"
import AnimatedCounter from "../../composant/animatecounter/numbercount";
import Carousel from "../../composant/Carousel/carousel";
import PricingSection from "../Pricing/cardstry";

export default function Services() {
  return (
    <><div className='contact-header'>
            <h1 className='contact-p'>Services</h1>
            <p className='contact-p2'><Link to="/Home" className='home-p-contact'>Home</Link> / Services</p>
        </div>
    <div className="services-page">
      
  
      
        
     
{/* <ModelViewer
  url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
  width={400}
  height={400}
/> */}
 
   <section class="services-circle">
    <section className="services-hero">
        <h1>Nos Services</h1>
        <p>
          Nous fournissons des solutions technologiques de haute qualité pour faire évoluer votre entreprise.
        </p>
      </section>
    <div class="services-wrapper">
        
        <div class="services-center">
            <img src="ob1.jpg" alt="IT Solutions"/>
        </div>

       
        <div class="service-item top-left">
            <i class="bx bx-code-alt"></i>
            <h3>Développement Web</h3>
            <p>Sites modernes et performants.</p>
        </div>

        <div class="service-item top-right">
            <i class="bx bx-mobile-alt"></i>
            <h3>Applications Mobiles</h3>
            <p>iOS et Android, intuitives et rapides.</p>
        </div>

        <div class="service-item middle-left">
            <i class="bx bx-paint"></i>
            <h3>Design UI/UX</h3>
            <p>Interfaces attrayantes et ergonomiques.</p>
        </div>

        <div class="service-item middle-right">
            <i class="bx bx-support"></i>
            <h3>Consulting IT</h3>
            <p>Conseils pour votre digitalisation.</p>
        </div>

        <div class="service-item bottom-left">
            <i class="bx bx-cloud-upload"></i>
            <h3>DevOps & CI/CD</h3>
            <p>Automatisation & intégration continue.</p>
        </div>

        <div class="service-item bottom-right">
            <i class="bx bx-shield-quarter"></i>
            <h3>Cybersécurité</h3>
            <p>Protection avancée de vos systèmes.</p>
        </div>
    </div>
</section>

    
      <PricingSection/>
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
