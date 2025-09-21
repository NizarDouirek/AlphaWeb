import React, { useEffect } from "react";
import "./process.css";
import { Link } from "react-router-dom";
// import "boxicons/css/boxicons.min.css";

export default function Process() {
  useEffect(() => {
    // Animation d'apparition progressive des cartes
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll(".step-card");
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });
  }, []);

  return (
    <div className="process-container">
      <div className="wrapperProcess">
        {/* En-tête */}
        <div className="headerProcess">
          <h1>Notre Processus</h1>
          <p>
            Découvrez notre méthodologie éprouvée pour transformer vos idées en
            solutions digitales performantes
          </p>
        </div>
<div className="steps-grid">
        {/* Exemple d'une étape */}
        <div className="step-card">
          <div className="step-number">1</div>
          <div className="step-icon">
            <i className="bx bx-bulb"></i>
          </div>
          <h3>Cahier des charges</h3>
          <p>Analyse des besoins</p>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-icon">
            <i className="bx bx-hourglass"></i>
          </div>
          <h3>Planification</h3>
          <p>Planning détaillé</p>
        </div>
        <div className="step-card">
          <div className="step-number">3</div>
          <div className="step-icon">
             <i className="bx bx-target-lock "></i>
          </div>
          <h3>Design</h3>
          <p>Définir les besoins et objectifs du client.</p>
        </div>
        <div className="step-card">
          <div className="step-number">4</div>
          <div className="step-icon">
              <i className="bx bx-code-alt "></i>
          </div>
          <h3>Développement</h3>
          <p>Définir les besoins et objectifs du client.</p>
        </div>
        <div className="step-card">
          <div className="step-number">5</div>
          <div className="step-icon">
            <i className="bx bx-check-shield "></i>
          </div>
          <h3>Test & validation</h3>
          <p>Définir les besoins et objectifs du client.</p>
        </div>
        <div className="step-card">
          <div className="step-number">6</div>
          <div className="step-icon">
            <i className="bx bx-cog"></i>
          </div>
          <h3>Maintenance</h3>
          <p>Définir les besoins et objectifs du client.</p>
        </div>
</div>
        {/* CTA */}
        <div className="cta">
          <h3>Prêt à démarrer votre projet ?</h3>
          <p>
            Contactez-nous pour discuter de vos besoins et obtenir un devis
            personnalisé.
          </p>
          <Link to='/Contact'>
          <button>Demander un devis</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
