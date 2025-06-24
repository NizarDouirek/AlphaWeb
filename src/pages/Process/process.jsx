import React from "react";
import './process.css';

export default function Process() {
  return (
    <div className="contentProcessCircle">
      <h2 className="process-title">Notre Processus</h2>
      <div className="circle-container">

        {/* Étapes Gauche */}
        <div className="step-circle top-left">
          <div className="icon"><i className='bx bx-bulb'></i></div>
          <div className="text">
            <h3>1-Cahier des charges</h3>
             <p>Définir les besoins et objectifs du client.</p>
          </div>
        </div>

        <div className="step-circle mid-left">
          <div className="icon"><i className='bx bx-hourglass'></i></div>
          <div className="text">
            <h3>2-Planification</h3>
             <p>Définir les besoins et objectifs du client.</p>
          </div>
        </div>

        <div className="step-circle bottom-left">
          <div className="icon"><i className='bx bx-paint'></i></div>
          <div className="text">
            <h3>3-Design</h3>
             <p>Définir les besoins et objectifs du client.</p>
          </div>
        </div>

        {/* Image au centre */}
        <div className="central-image">
          <img src="proce.avif" alt="Process" />
        </div>

        {/* Étapes Droite */}
        <div className="step-circle top-right">
          <div className="icon"><i className='bx bx-code-alt'></i></div>
          <div className="text">
            <h3>4-Développement</h3>
             <p>Définir les besoins et objectifs du client.</p>
          </div>
        </div>

        <div className="step-circle mid-right">
          <div className="icon"><i className='bx bx-calendar-check'></i></div>
          <div className="text">
            <h3>5-Test & validation</h3>
             <p>Définir les besoins et objectifs du client.</p>
          </div>
        </div>

        <div className="step-circle bottom-right">
          <div className="icon"><i className='bx bx-wrench'></i></div>
          <div className="text">
            <h3>6-Maintenance</h3>
             <p>Définir les besoins et objectifs du client.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
