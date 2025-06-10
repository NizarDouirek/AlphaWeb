import React, { useState } from "react";
import "./trycard.css";
const Plans = () => {
  //const [activePlan, setActivePlan] = useState(1); // 0: Individual, 1: Shared, 2: Group

  //const handleClick = (index) => {
   // setActivePlan(index);
 // };

  return (
 <>
 <div className="outer-container" >
      
         {/* <div className={`container container1 ${activePlan === 0 ? "active" : ""}`}
     onClick={() => handleClick(0)}>  <div className={`container container1 ${activePlan === 0 ? "active" : ""}`}
        onClick={() => handleClick(0)}>*/}
        <div  className="container container1">
       
            <div className="inner_container">
             <h2 className="title">Starter</h2>
            
             <div className="main_number">2</div>
           
                
                  

                
                  <div className="container_text" >
                    <div className="container_text1"> 
                        <p className="home-pack-card-h2">2599 DH</p>
                        <p className="home-pack-card-p">au lieu</p>
                        <p className="home-pack-card-h3">3999 DH</p>
                    </div>

                     <div className="container_text2" >
                        <div className="home-pack-div2" ><i className='bx bx-check'></i><p>Site vitrine de 1 à 3 pages</p></div>
                        <div className="home-pack-div2"><i className='bx bx-check'></i><p>Design professionnel et responsive</p></div>
                        <div className="home-pack-div2"><i className='bx bx-check'></i><p>Intégration de vos contenus</p></div>
                        <div className="home-pack-div2"><i className='bx bx-check'></i><p>1 révision incluse</p></div>
                        <div className="home-pack-div2"><i className='bx bx-check'></i><p>Livraison en 5 jours</p></div>
                        <div className="home-pack-div2"><i className='bx bx-check'></i><p>Nom de domaine + hébergement 1 an</p></div>

                     
                      </div>           
                  </div>

                 <a href="#"><span>Continue</span></a>
                              
             
            </div>
   
        </div>

      {/*<div
        className={`container container2 ${activePlan === 1 ? "active" : ""}`}
        onClick={() => handleClick(1)}
      >*/}<div  className="container container2">
           <div className="ribbon-wrapper">
    <div className="ribbon">Populaire</div>
  </div>
        <div className="inner_container">
          <div className="title">Pro</div>
          <div className="main_number">1</div>
          <div className="container_text">
            <div className="container_text1" > 
                        <p className="home-pack-card-h2">2999 DH</p>
                        <p className="home-pack-card-p">au lieu</p>
                        <p className="home-pack-card-h3">4999 DH</p>
                    </div>
                      <div className="container_text2">
                        
                        <div className="home-pack-div2"><i className='bx bx-check'></i><p>Site complet de 5 à 7 pages</p></div>
                                <div className="home-pack-div2"><i className='bx bx-check'></i><p>Design sur-mesure et responsive</p></div>
                                <div className="home-pack-div2"><i className='bx bx-check'></i><p>Formulaire de contact intégré</p></div>
                                <div className="home-pack-div2"><i className='bx bx-check'></i><p>Optimisation SEO de base</p></div>
                                <div className="home-pack-div2"><i className='bx bx-check'></i><p>2 révisions incluses</p></div>
                                <div className="home-pack-div2"><i className='bx bx-check'></i><p>Sécurité SSL + hébergement 1 an</p></div>
                                <div className="home-pack-div2"><i className='bx bx-check'></i><p>Adresses e-mail professionnelles</p></div>

                        </div>    
                     </div>
            </div>
             <a href="#"><span>Continue</span></a>
         </div>

     {/*<div
        className={`container container3 ${activePlan === 2 ? "active" : ""}`}
        onClick={() => handleClick(2)}
      >*/}<div  className="container container3">
        <div className="inner_container">
          <div className="title">Premium</div>
          <div className="main_number">3</div>
            <div className="container_text" >
                    <div className="container_text1" > 
                        <p className="home-pack-card-h2">5990 DH</p>
                        <p className="home-pack-card-p">au lieu</p>
                        <p className="home-pack-card-h3">7999 DH</p>
                    </div>
                        <div className="container_text2"  >
                                 <div className="home-pack-div2"><i className='bx bx-check'></i><p>Site e-commerce ou sur-mesure</p></div>
                                 <div className="home-pack-div2"><i className='bx bx-check'></i><p>Design UX/UI personnalisé</p></div>
                                 <div className="home-pack-div2"><i className='bx bx-check'></i><p>Référencement SEO avancé</p></div>
                                 <div className="home-pack-div2"><i className='bx bx-check'></i><p>Intégration paiement, réservation…</p></div>
                                 <div className="home-pack-div2"><i className='bx bx-check'></i><p>Révisions illimitées pendant 1 mois</p></div>
                                 <div className="home-pack-div2"><i className='bx bx-check'></i><p>Support technique prioritaire</p></div>
                                 <div className="home-pack-div2"><i className='bx bx-check'></i><p>Formation + guide d’utilisation</p></div>
                                 <div className="home-pack-div2"><i className='bx bx-check'></i><p>Maintenance offerte pendant 1 mois</p></div>

                        </div>
             </div>
        </div>
        <a href="#"><span>Continue</span></a>
      </div>
        
</div>

   
 </>

        );
};

export default Plans;