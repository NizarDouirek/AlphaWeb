import React from 'react';
import './table.css';
import Header from '../../composant/Header/header';
import CircularText from "../../composant/RotateNmae/rotatename";
import styled from 'styled-components';

const PricingTable = () => {
  

  return (
    <>
      <Header />
      <div className='contact-header'>
        <h1 className='contact-p'>Nos Packs</h1>
        <p className='contact-p2'>
          <a href="" className='home-p-contact'>Accueil</a> / Packs
        </p>
      </div>

      <div className="pricing-container">
        <table className="pricing-table">
          <thead>
            <tr>
              <th style={{ width: '200px', height: '200px', padding: 0 }}> 
          
              </th>
              
              <th className="th1">
                <div className="plan-title title1">
                  <h2>STANDARD</h2>
                  <div className="price-badge">Populaire</div>
                </div>
                <div className="plan-price">
                  <p>2599 DH<br /><span>par mois</span></p>
                </div>
              </th>

              <th className="th2">
                <div className="plan-title title2">
                  <h2>PRO</h2>
                </div>
                <div className="plan-price">
                  <p>2999 DH<br /><span>par mois</span></p>
                </div>
              </th>
              
              <th className="th3">
                  <div className="plan-title title2">
                  <h2>Premium</h2>
                </div>
                <div className="plan-price">
                    <p>5990 DH<br /><span>par mois</span></p>
                </div>
                  
                  
                  
                
              </th>
            </tr>
          </thead>
          
          <tbody>
            {[
              { name: "Type de site", standard: "Vitrine (1-3 p)", pro: "Complet (5-7 p)", premium: "E-commerce ou sur-mesure" },
              { name: "Design", standard: "Pro & responsive", pro: "Sur-mesure", premium: "UX/UI personnalisé" },
              { name: "Intégration de contenus", standard: "✔", pro: "—", premium: "—" },
              { name: "Formulaire de contact intégré", standard: "—", pro: "✔", premium: "✔" },
              { name: "Optimisation SEO", standard: "—", pro: "De base", premium: "Avancée" },
              { name: "Révisions", standard: "1", pro: "2", premium: "Illimitées (1 mois)" },
              { name: "Livraison rapide", standard: "5 jours", pro: "—", premium: "—" },
              { name: "Hébergement + nom de domaine", standard: "✔", pro: "✔ (avec SSL)", premium: "✔" },
              { name: "Adresses e-mail pro", standard: "—", pro: "✔", premium: "✔" },
              { name: "Paiement / réservation intégrés", standard: "—", pro: "—", premium: "✔" },
              { name: "Support technique prioritaire", standard: "—", pro: "—", premium: "✔" },
              { name: "Formation + guide", standard: "—", pro: "—", premium: "✔" },
              { name: "Maintenance offerte", standard: "—", pro: "—", premium: "✔" },
            ].map((feature, index) => (
              <tr key={index} className={`feature-row ${index % 2 === 0 ? 'bg1' : 'bg2'}`}>
                <td className='feature-name'>{feature.name}</td>
                <td className='standard'>{feature.standard}</td>
                <td className='pro'>{feature.pro}</td>
                <td className='premium'>{feature.premium}</td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td></td>
              <td>
                <button className="btn standard-btn">
                  Commencer <span className="btn-effect"></span>
                </button>
              </td>
              <td>
                <button className="btn pro-btn">
                  Commencer <span className="btn-effect"></span>
                </button>
              </td>
              <td>
                <button className="btn premium-btn">
                  Commencer <span className="btn-effect"></span>
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default PricingTable;