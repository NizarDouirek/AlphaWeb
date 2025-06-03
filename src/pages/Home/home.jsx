import React from "react";
import './home.css';
import Header from "../../composant/Header/header";
// import Particles from "react-tsparticles";
import ParticlesBackground from "../../composant/ParticlesBackground/ParticlesBackground";

import Services from "../Service/service";
export default function Home() {
  return (
    <>
      <div className="home">
      {/* <ParticlesBackground/>*/}
        <Header />
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
     <Services/>

     <div className="home-process-container">
          <h1 className="home-process-h1">Notre Processus</h1>
          <div className="home-process">
            <div className="home-process-card"><i className='bx bx-bulb' ></i><p className="home-process-p">cahier de charge</p><hr className="hr" ></hr></div>
            <div className="home-process-card"><i className='bx bx-hourglass' ></i><p className="home-process-p">planification</p><hr className="hr" ></hr></div>
            <div className="home-process-card"><i className='bx bx-paint' ></i><p className="home-process-p">Design</p><hr className="hr" ></hr></div>
            <div className="home-process-card"><i className='bx bx-code-alt' ></i><p className="home-process-p">developpement</p><hr className="hr" ></hr></div>
            <div className="home-process-card"><i className='bx bx-calendar-check' ></i><p className="home-process-p">test et validation</p><hr className="hr" ></hr></div>
            <div className="home-process-card"><i className='bx bx-wrench' ></i><p className="home-process-p">Maintenance</p><hr className="hr" ></hr></div>
          </div>
      </div>

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
    </>
  );
}
