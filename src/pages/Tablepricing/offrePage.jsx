import { useLocation } from "react-router-dom";
import './offrePage.css'
export default function OffrePage() {
  const location = useLocation();
  const plan = location.state;

  return (
    <><div className='contact-header'>
        <h1 className='contact-p'>Join Us</h1>
        <p className='contact-p2'>
          <a href="" className='home-p-contact'>Accueil</a> / join us
        </p>
      </div>
   <div className="offre-page">
      {/* Card de l'offre choisie */}
      <div className="offre-card">
        <h2>{plan?.name}</h2>
        <p>{plan?.price} / mois</p>
        {plan?.badge && <span className="badge3">{plan.badge}</span>}

        <h3 style={{ marginTop: "20px" }}>Features Description</h3>
        <ul className="features-list">
          {plan?.features?.map((feature, index) => (
            <li key={index} className={feature.included ? "included" : "excluded"}>
              {feature.included ? "✔" : "✖"} {feature.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Formulaire */}
      <form className="offre-form">
        <h3>Remplissez vos informations</h3>
        <input type="text" placeholder="Nom complet" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Téléphone" required />
        <textarea placeholder="Votre message ou besoin"></textarea>
        <button type="submit">Envoyer ma demande</button>
      </form>
    </div>
    </>
  );
}
