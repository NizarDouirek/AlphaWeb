import React from 'react';
import './table.css';
import Header from '../../composant/Header/header';
const PricingTable = () => {
  return (
    <><Header />
          <div className='contact-header'>
            <h1 className='contact-p'>Pack</h1>
            <p className='contact-p2'><a href="" className='home-p-contact'>Home</a> / Pack</p>
        </div>
    <div className="pricing-table">
       <div className='pricing-header'>
        <h1 className='h1-price'>Pricing that grows with you</h1>
       <div className='p-div'> <p className='p-price'>Choose an affordable plan that’s packed with the best features for <br /> engaging your audience,
         creating customer loyalty, and driving sales.</p></div>
        </div> 


      <table className="custom-table">
        <thead>
          <tr>
            <th className='title-th' ></th>
            <th className='border-none'>Starter<br /><span>2599 DH</span><button className='buttonTable'>Buy plan</button></th>
            <th className="highlight"><span>Pro</span><br /><span>2999 DH</span><button className="btnTable-primary">Buy plan</button></th>
            <th className='border-none'> Premium<br /><span>5990 DH</span><button className='buttonTable'>Buy plan</button></th>
          </tr>
        </thead>
        <tbody>
            <tr><th className='title-th' >Design</th></tr>
          <tr>
            
             <td className="title-left">Type de site</td>
  <td>Vitrine (1–3 p)</td>
  <td>Complet (5–7 p)</td>
  <td>E-commerce ou sur-mesure</td>
          </tr>
          <tr>
  <td className="title-left">Design</td>
  <td>Pro & responsive</td>
  <td>Sur-mesure</td>
  <td>UX/UI personnalisé</td>
</tr>
<tr>
  <td className="title-left">Intégration de contenus</td>
  <td  style={{color:'#8770FF'}}>✔</td>
  <td style={{color:'gray'}}>—</td>
  <td style={{color:'gray'}}>—</td>
</tr>
           

            <tr><td className='title-th'></td></tr>

           <tr><th className='border-top-none'>Formulaire & SEO</th></tr>
          <tr>
  <td className="title-left">Formulaire de contact intégré</td>
  <td style={{color:'gray'}}>—</td>
  <td style={{color:'#8770FF'}}>✔</td>
  <td style={{color:'#8770FF'}}>✔</td>
</tr>
<tr>
  <td className="title-left">Optimisation SEO</td>
  <td style={{color:'gray'}}>—</td>
  <td>De base</td>
  <td>Avancée</td>
</tr>
            <tr><td className='title-th'></td></tr>

           <tr><th className='border-top-none'>Révisions & Livraison</th></tr>
          <tr>
  <td className="title-left">Formulaire de contact intégré</td>
  <td style={{color:'gray'}}>—</td>
  <td style={{color:'#8770FF'}}>✔</td>
  <td style={{color:'#8770FF'}}>✔</td>
</tr>
<tr>
  <td className="title-left">Optimisation SEO</td>
  <td style={{color:'gray'}}>—</td>
  <td>De base</td>
  <td>Avancée</td>
</tr>


            <tr><td className='title-th'></td></tr>

           <tr><th className='border-top-none'>Hébergement & Email</th></tr>
  <tr>
  <td className="title-left">Hébergement + nom de domaine</td>
  <td style={{color:'#8770FF'}}>✔</td>
  <td style={{color:'#8770FF'}}>✔ (avec SSL)</td>
  <td style={{color:'#8770FF'}}>✔</td>
</tr>
<tr>
  <td className="title-left">Adresses e-mail pro</td>
  <td style={{color:'gray'}}>—</td>
  <td style={{color:'#8770FF'}}>✔</td>
  <td style={{color:'#8770FF'}}>✔</td>
</tr>
            <tr><td className='title-th'></td></tr>

           <tr><th className='border-top-none'>Support & Maintenance</th></tr>
          <tr>
  <td className="title-left">Paiement / réservation intégrés</td>
  <td style={{color:'gray'}}>—</td>
  <td style={{color:'gray'}}>—</td>
  <td style={{color:'#8770FF'}}>✔</td>
</tr>
<tr>
  <td className="title-left">Support technique prioritaire</td>
  <td style={{color:'gray'}}>—</td>
  <td style={{color:'gray'}}>—</td>
  <td style={{color:'#8770FF'}}>✔</td>
</tr>
<tr>
  <td className="title-left">Formation + guide</td>
  <td style={{color:'gray'}}>—</td>
  <td style={{color:'gray'}}>—</td>
  <td style={{color:'#8770FF'}}>✔</td>
</tr>
<tr>
  <td className="title-left">Maintenance offerte</td>
  <td style={{color:'gray'}}>—</td>
  <td style={{color:'gray'}}>—</td>
  <td style={{color:'#8770FF'}}>✔</td>
</tr>
        </tbody>
      </table>
     
    
    </div></>
  );
};

export default PricingTable;
