import React from "react";
import './home.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../composant/Header/header";
// import Particles from "react-tsparticles";
import { FaLaptopCode, FaMobileAlt, FaServer, FaPaintBrush } from 'react-icons/fa';
import ParticlesBackground from "../../composant/ParticlesBackground/ParticlesBackground";

import Services from "../Service/service";
export default function Home() {
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
      <div className="home">
      <ParticlesBackground/>
        {/* <Header /> */}
        <div className="welcome">
            <p className="pp"> Bienvenue dans notre site</p>
          <p className="ItS">IT Solutions.
       </p>
       <p className="main-p">
        You can easily change any design to your own. It is also highly <br />
         customizable SEO friendly template.</p>

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

 
      </div>
     {/* <Services/> */}
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
     <div className="home-process-container">
          
     
      <div className="contentProcess">
  <h2 className="process-title">Notre Processus</h2>
  <div className="process-container">
    <div className="process-steps">
      <div className="step">
        <div className="icon"><i className='bx bx-bulb'></i></div>
        <div className="text">
          <h3>Cahier de charge</h3>
          <p>Définir les besoins et exigences. L'ampoule symbolise l’émergence d’idées et la créativité.</p>
        </div>
      </div>
      <div className="step">
        <div className="icon"><i className='bx bx-hourglass'></i></div>
        <div className="text">
          <h3>Planification</h3>
          <p>Structurer le projet. Le sablier évoque la gestion du temps et l’organisation efficace.</p>
        </div>
      </div>
      <div className="step">
        <div className="icon"><i className='bx bx-paint'></i></div>
        <div className="text">
          <h3>Design</h3>
          <p>Travail sur l’interface et l’expérience utilisateur. Le pinceau exprime la créativité.</p>
        </div>
      </div>
      <div className="step">
        <div className="icon"><i className='bx bx-code-alt'></i></div>
        <div className="text">
          <h3>Développement</h3>
          <p>Implémentation des fonctionnalités. L’icône de code symbolise la technique.</p>
        </div>
      </div>
      <div className="step">
        <div className="icon"><i className='bx bx-calendar-check'></i></div>
        <div className="text">
          <h3>Test et validation</h3>
          <p>Garantie de la qualité. L’icône de calendrier avec coche indique la vérification.</p>
        </div>
      </div>
      <div className="step">
        <div className="icon"><i className='bx bx-wrench'></i></div>
        <div className="text">
          <h3>Maintenance</h3>
          <p>Assurer le bon fonctionnement sur le long terme. L’icône de clé représente les ajustements.</p>
        </div>
      </div>
    </div>
    <div className="process-image">
      <img src="wee.svg" className="imgproc" alt="Process Illustration" />
    </div>
  </div>
</div>

          {/* <div className="home-process">
            <div className="home-process-card"><i className='bx bx-bulb' ></i><p className="home-process-p">cahier de charge</p><hr className="hr" ></hr></div>
            <div className="home-process-card"><i className='bx bx-hourglass' ></i><p className="home-process-p">planification</p><hr className="hr" ></hr></div>
            <div className="home-process-card"><i className='bx bx-paint' ></i><p className="home-process-p">Design</p><hr className="hr" ></hr></div>
            <div className="home-process-card"><i className='bx bx-code-alt' ></i><p className="home-process-p">developpement</p><hr className="hr" ></hr></div>
            <div className="home-process-card"><i className='bx bx-calendar-check' ></i><p className="home-process-p">test et validation</p><hr className="hr" ></hr></div>
            <div className="home-process-card"><i className='bx bx-wrench' ></i><p className="home-process-p">Maintenance</p><hr className="hr" ></hr></div>
          </div> */}
      </div>
      <section className="ContactHomme">
    <div>
      <div className="contentCH">
        <p className="p1CH">We Carry More Than Just Good Coding Skills</p>
        <p className="p2CH">Let's Discuss your Projects</p>
        <p className="p3CH">We pride ourselves with our ability to perform and deliver results. Use the form below to discuss your project needs with our team, we will get back asap.</p>
        <div className="btn-tel">
         <Link to="/Contact"><button className="btn-quotes3">Get Quotes</button></Link><p>(+44) 152-567-987</p>
        </div>
      </div>
    </div>
   </section>
   

      <div className="home-pack-container" >
        <h1 className="home-pack-h1">Pack Creation de Site Web</h1>
        <div className="home-pack">
          <div className="home-pack-card"style={{background: "linear-gradient(135deg, #bdc3c7,rgb(158, 157, 197))"}}>
            <h2 className="home-pack-h2">Site vitrine</h2>
            <hr className="hr-pack" ></hr>
             <p className="home-pack-card-h2">3999 DH</p>
              <p className="home-pack-card-p">au lieu</p>
               <p className="home-pack-card-h3">5999 DH</p>
                <p className="home-pack-card-p">Un site vitrine sert à vous présenter en<br/> indiquant précisément qui vous êtes, ce que <br/> vous faites et où vous vous situez...</p>
                  <hr className="hr-pack" ></hr>
                   <p className="home-pack-card-p2">Le site web Vitrine comprend les fonctionnalités suivantes:</p>
                
                  <div className="home-pack-div" >
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Conception graphique personnalisée</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Nom de domaine + Hébergement Offert*</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Adresses e-mail en illimité*</p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Sauvegarde automatique*</p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Sécurisation du site </p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Maintenance serveur</p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Nombre de pages illimité</p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Interface d'administration</p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Design Responsive</p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Galerie photo/vidéo</p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Partenaires et références</p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Formulaire de contact Anti Spam</p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Plan d'accès Google Maps</p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Réseaux sociaux</p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Optimisation pour le référencement</p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Outil d'analyse de trafic</p></div>
                                  <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Formation</p></div>
                  </div>

                  <div className="home-pack-button">
                    <div className="home-pack-card-tarif"><p>0% à la commande 100% à la livraison</p></div>
                    <button className="home-pack-card-button">Commander</button>
                  </div>
                              
             
            </div>

            <div className="home-pack-card" style={{background: "linear-gradient(135deg, #f6d365, #fda085)"}}>
            <h2 className="home-pack-h2">Site E-Commerce</h2>
            <hr className="hr-pack" ></hr>
             <p className="home-pack-card-h2">5900 DH</p>
              <p className="home-pack-card-p">au lieu</p>
               <p className="home-pack-card-h3">9990 DH</p>
                <p className="home-pack-card-p">Une boutique en ligne est principalement destinée à vendre des produits sur internet, mais on peut également y trouver des informations concernant l’entreprise comme sur un site vitrine</p>
                  <hr className="hr-pack" ></hr>
                   <p className="home-pack-card-p2">site web E-Commerce comprend les mêmes fonctionnalités d’un site vitrine et catalogue avec en plus les points suivants:</p>
                
                  <div className="home-pack-div" >  
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Paiement en ligne</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>PayPal</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Compte client</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Gestion de profil</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Gestion des commandes</p></div>
                       
                    <div className="home-pack-div2"> <p>En option :</p></div>

                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Gestion des deals</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Gestion des promotions</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Gestion de stock</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Gestion des factures</p></div>
                  </div>

                  <div className="home-pack-button">
                    <div className="home-pack-card-tarif"><p>40% à la commande 60% à la livraison</p></div>
                    <button className="home-pack-card-button">Commander</button>
                  </div>
             
            </div>
            <div className="home-pack-card"style={{background: "linear-gradient(135deg,rgb(34, 211, 255), #a3a3a3)"}}>
            <h2 className="home-pack-h2">Site Catalogue</h2>
            <hr className="hr-pack" ></hr>
             <p className="home-pack-card-h2">4990 DH</p>
              <p className="home-pack-card-p">au lieu</p>
               <p className="home-pack-card-h3">7990 DH</p>
                <p className="home-pack-card-p">Un site catalogue est à mi-chemin entre le site vitrine et le site e-commerce. Il permet de présenter aux internautes une partie ou l’ensemble de son catalogue de produits ou de services, sans qu’il n’y ait la possibilité d’effectuer des achats en ligne</p>
                  <hr className="hr-pack" ></hr>
                   <p className="home-pack-card-p2">site web Catalogue comprend les mêmes fonctionnalités d’un site vitrine avec en plus les points suivants:</p>
                
                  <div className="home-pack-div">
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p> Moteur de recherche</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Structuration rubriques</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Structuration sous-rubriques</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Nombre de produits illimité</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Produits coup de cœur</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Produits recommandés</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Gestion des demandes</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Système de trie et de filtre</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Fiche technique de produits (PDF, DOC,…)</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p>Avis sur les produits</p></div>
                    <div className="home-pack-div2"><i className='bx bx-check' ></i><p> Actualités/Blog</p></div>
                  </div>

                  <div className="home-pack-button">
                    <div className="home-pack-card-tarif"><p>30% à la commande 70% à la livraison</p></div>
                    <button className="home-pack-card-button">Commander</button>
                  </div>
             
            </div>
        </div>
        
      </div>

      <div className="home-technologies-container">
        <div className="home-technologies">
          <h1 className="home-pack-h1">Nos Technologies</h1>
          <div className="home-technologies-imgcontainer">
          <div className="home-technologies-img"><img src="./mysql.png" alt="" /></div>
          <div className="home-technologies-img"><img src="./js.png" alt="" /></div>
          <div className="home-technologies-img"><img src="./wordpress-logo.png" alt="" /></div>
          <div className="home-technologies-img"><img src="./js.png" alt="" /></div>
          <div className="home-technologies-img"><img src="./react-logo.png" alt="" /></div>
          <div className="home-technologies-img"><img src="./js.png" alt="" /></div>
          </div>

        </div>
      </div>
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

</>
  );
}
