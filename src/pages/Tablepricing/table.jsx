import React from 'react';
import './table.css';
import Header from '../../composant/Header/header';
import CircularText from "../../composant/RotateNmae/rotatename";
import styled from 'styled-components';
import { motion, useAnimation, useMotionValue } from "framer-motion";
const PricingTable = () => {const StyledWrapper = styled.div`


  



  .card_box span {
    position: absolute;
    overflow: hidden;
    width: 150px;
    height: 150px;
    top: -10px;
    left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card_box span::before {
    content: 'Premium';
    position: absolute;
    width: 150%;
    height: 40px;
    background-image: linear-gradient(45deg, #ff6547 0%, #ffb144  51%, #ff7053  100%);
    transform: rotate(-45deg) translateY(-20px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    box-shadow: 0 5px 10px rgba(0,0,0,0.23);
  }

`;

  return (
    <><Header />
      <div className='contact-header'>
        <h1 className='contact-p'>Pack</h1>
        <p className='contact-p2'><a href="" className='home-p-contact'>Home</a> / Pack</p>
      </div>

      <table className="pricing-table">
        <thead>
          <tr>{/**/}
            <th style={{ width: '200px', height: '200px', padding: 0 }}> <CircularText text="TECHNOLOGY ALPHA WEB "onHover="speedUp"spinDuration={20} className="custom-class"baseSpeed={1} hoverSpeed={2} /> </th>
    <th className="th1">
      <div className="plan-title title1">
        <h2>STANDARD</h2>
      </div>
      <div className="plan-price">
        <p>2599 DH<br /></p>
      </div>
    </th>

    <th className="th2">
      <div className="plan-title title2">
        <h2>PRO</h2>
      </div>
      <div className="plan-price">
        <p>2999 DH<br /></p>
      </div>
    </th>
   
    <StyledWrapper>
    <div className="card_box">
    
        
            <div className="plan-title title3">
               <h2 style={{marginTop:"20px"}}>Premium</h2>

             </div>
          <span />    
      <div className="plan-price">
        <p>5990 DH<br /></p>
      </div>
        </div> 
    </StyledWrapper> 

    
          </tr>
        </thead>
        <tbody>
          <tr className='bg2' style={{height:"50px"}}>
        
          </tr>
          <tr className='bg1'>
            <td className='td4' >Type de site</td>
            <td className='td1'>Vitrine (1-3 p)</td>
            <td className='td2'>Complet (5-7 p)</td>
            <td className='td3'>E-commerce ou sur-mesure</td>
          </tr>
          <tr className='bg2'>
            <td  className='td4' >Design</td>
            <td className='td1'>Pro & responsive</td>
            <td className='td2'>Sur-mesure</td>
            <td className='td3'>UX/UI personnalisé</td>
          </tr>
          <tr className='bg1'>
            <td className='td4'>Intégration de contenus</td>
            <td className='td1'>✔</td>
            <td className='td2'>—</td>
            <td className='td3'>—</td>
          </tr>





          <tr className='bg2'>
            <td  className='td4'>Formulaire de contact intégré</td>
            <td className='td1'>—</td>
            <td className='td2'>✔</td>
            <td className='td3'>✔</td>
          </tr>
          <tr className='bg1'>
            <td  className='td4'>Optimisation SEO</td>
            <td className='td1'>—</td>
            <td className='td2'> De base</td>
            <td className='td3'>Avancée</td>
          </tr>


          <tr className='bg2'>
            <td  className='td4'>Révisions</td>
            <td className='td1'>1</td>
            <td className='td2'>2</td>
            <td className='td3'>Illimitées (1 mois)</td>
          </tr>
          <tr className='bg1'>
            <td  className='td4'>Livraison rapide</td>
            <td className='td1'>5 jours</td>
            <td className='td2'>—</td>
            <td className='td3'>—</td>
          </tr>





          <tr className='bg2'>
            <td  className='td4'>Hébergement + nom de domaine</td>
            <td className='td1'>✔</td>
            <td className='td2'>✔ (avec SSL)</td>
            <td className='td3'>✔</td>
          </tr>
          <tr className='bg1'>
            <td  className='td4'>Adresses e-mail pro</td>
            <td className='td1'>—</td>
            <td className='td2'>✔</td>
            <td className='td3'>✔</td>
          </tr>



          <tr className='bg2'>
            <td  className='td4'>Paiement / réservation intégrés</td>
            <td className='td1'>—</td>
            <td className='td2'>—</td>
            <td className='td3'>✔</td>
          </tr>
          <tr className='bg1'>
            <td  className='td4'>Support technique prioritaire</td>
            <td className='td1'>—</td>
            <td className='td2'>—</td>
            <td className='td3'>✔</td>
          </tr>
          <tr className='bg2'>
            <td  className='td4'>Formation + guide</td>
            <td className='td1'>—</td>
            <td className='td2'>—</td>
            <td className='td3'>✔</td>
          </tr>
          <tr className='bg1'>
            <td  className='td4'>Maintenance offerte</td>
            <td className='td1'>—</td>
            <td className='td2'>—</td>
            <td className='td3'>✔</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            <td><button className="btn3" >Start Now  <div className="hoverEffect"><div></div></div></button></td>
            <td><button className="btn3">Start Now  <div className="hoverEffect"><div></div></div></button></td>
            <td><button className="btn3">Start Now   <div className="hoverEffect"><div></div></div></button></td>
          </tr>
        </tfoot>
      </table>





    </>
  );
};
const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 200px;
    border-radius: 1rem;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }`;
export default PricingTable;

