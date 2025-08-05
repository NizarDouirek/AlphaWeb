import React from "react";
import './home.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Welcome from "../Welcome/welcome";
import Header from "../../composant/Header/header";
// import Particles from "react-tsparticles";
import { FaLaptopCode, FaMobileAlt, FaServer, FaPaintBrush } from 'react-icons/fa';
import Carousel from "../../composant/Carousel/carousel";
import Title from "../../composant/Title/title";
import PricingSection from "../Pricing/cardstry";
import Services from "../Service/service";
import Process from "../Process/process";
import CircularGallery from "../../composant/Carousel/carousel";
import Card from "../../composant/Carousel/slide";
import SimpleSlider from '../../composant/Carousel/slide';
// import ModelViewer from '../../composant/Model/ModelViewer';
const logos = [
  "./mysql.png",
  "./js.png",
  "./wordpress-logo.png",
  "./laravel.png",
  "./react.png",
  "./js.png",
];


//import ModelViewer from '../../composant/Model/ModelViewer';


export default function Home() {
    const isMobile = window.innerWidth <= 768;
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
   const items = [
    { icon: <FaMobileAlt />, label: "App Development" },
    { icon: <FaLaptopCode />, label: "Web Development" },
    { icon: <FaServer />, label: "Web Hosting" },
    { icon: <FaPaintBrush />, label: "Design UI/UX" },
  ];
 const faqItems = [
  {
    question: "Who can benefit from our IT services?",
    answer: "Startups, enterprises, and individuals seeking tailored IT solutions, including development, hosting, and design."
  },
  {
    question: "What is included in a typical subscription?",
    answer: "Access to web/app development, UI/UX design, hosting plans, and continuous technical support."
  },
  {
    question: "Can I request custom software or features?",
    answer: "Absolutely. We offer bespoke software development tailored to your business needs."
  },
  {
    question: "Is my business data secure with you?",
    answer: "Yes, we prioritize data security using industry-standard encryption and hosting practices."
  },
  {
    question: "How can I contact your support team?",
    answer: "You can reach us via email, phone, live chat, or by submitting a ticket through our support portal."
  }
];

  const repeatedItems = Array(7).fill(items).flat(); // répète 3 fois
  return (
    <>
      <Welcome/>
     {/*   <div className="home">
      <ParticlesBackground/>
       <Header /> */}
       {/* <div className="welcome">
          <p className="pp"> Bienvenue dans notre site</p>
          <p className="ItS">IT Solutions.</p>
          <p className="main-p">
            You can easily change any design to your own. It is also highly <br />
            customizable SEO friendly template.
          </p>

          <div className="main-social-media">
            <a href=""><i className='bx bxl-facebook icon3'></i></a>
            <a href=""><i className='bx bxl-instagram icon3'></i></a>
            <a href=""><i className='bx bxl-twitter icon3'></i></a>
            <a href=""><i className='bx bxl-linkedin icon3'></i></a>
          </div>

          <div className="btn-main2">
            <button className="btn-quotes2">Get Quotes</button>
            <button className="btn-started">Get Started</button>
          </div>
        </div>
      </div>*/}
     {/* <Services/> */}
      <div className="services-page">
      
        
      <section className="services-hero">
        <h1>Nos Services</h1>
        <p>
          Nous fournissons des solutions technologiques de haute qualité pour faire évoluer votre entreprise.
        </p>
      </section>
{/* <ModelViewer
  url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
  width={400}
  height={400}
/> */}
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
    </div>
 <div className="marquee-container2">
      <div className="marquee-content2">
        <p>
          {repeatedItems.map((item, index) => (
            <span className="marquee-item" key={index}>
              <span className="marquee-icon">{item.icon}</span>
              {item.label} -
            </span>
          ))}
        </p>
      </div>
    </div>
     {/* <div className="home-process-container"> */}
          
     <Process/>
    
{/* </div> */}

    <section className="ContactHomme">
    <div>
      <div className="contentCH">
        <p className="p1CH">We Carry More Than Just Good Coding Skills</p>
        <p className="p2CH">Let's Discuss your Projects</p>
        <p className="p3CH">We pride ourselves with our ability to perform and deliver results. Use the form below to discuss your project needs with our team, we will get back asap.</p>
        <div className="btn-tel">
         <Link to="/Contact"><button className="btn-quotes3">Get Quotes</button></Link><p>(+212) 783692373</p>
        </div>
      </div>
    </div>
   </section>
   

      <div className="home-technologies-container">
        <div className="home-technologies">
          <h1 className="home-pack-h1">Nos Technologies</h1>
         <Card/>
        </div>
      </div>
      

        <PricingSection />
    
     <div className="faq-container">
  <h2>FAQ</h2>
  <h1 className="faq-caption">Your IT Questions, Answered</h1>
  <div className="faq-list">
    {faqItems.map((item, index) => (
      <div
        key={index}
        className={`faq-item ${openIndex === index ? "open" : ""}`}
        onClick={() => toggleAccordion(index)}
      >
        <div className="faq-question">
          {item.question}
          <span className="faq-icon">{openIndex === index ? "▼" : "▶"}</span>
        </div>
        {openIndex === index && (
          <div className="faq-answer">{item.answer}</div>
        )}
      </div>
    ))}
  </div>
  
</div>

<section className="home-carousel-section" >
  <h1 className="home-pack-h1">Nos Technologies</h1>
   <Carousel />
</section>

</>
  );
}
