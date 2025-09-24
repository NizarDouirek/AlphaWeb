import React from "react";
import "./PricingSection.css";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "PERSONAL",
    price: "$5.60",
    support: "Free 3 Months Solutions Support",
    features: [
      { label: "Custom Website Design", included: true },
      { label: "Priority Bug Fixes & Updates", included: true },
      { label: "Basic & Technical SEO", included: true },
      { label: "System Integration Support", included: false },
      { label: "24/7 Dedicated IT Assistance", included: false },
    ],
  },
  {
    title: "ENTERPRISE",
    price: "$25.60",
    support: "Free 6 Months Solutions Support",
    features: [
      { label: "Custom Website Design", included: true },
      { label: "Priority Bug Fixes & Updates", included: true },
      { label: "Basic & Technical SEO", included: true },
      { label: "System Integration Support", included: true },
      { label: "24/7 Dedicated IT Assistance", included: false },
    ],
  },
  {
    title: "PREMIUM",
    price: "$120.60",
    support: "Free 12 Months Solutions Support",
    features: [
      { label: "Custom Website Design", included: true },
      { label: "Priority Bug Fixes & Updates", included: true },
      { label: "Basic & Technical SEO", included: true },
      { label: "System Integration Support", included: true },
      { label: "24/7 Dedicated IT Assistance", included: true },
    ],
  },
];

const PricingSection = () => {
  return (
          <div className="home-plans-container">
            <h1 className="home-pack-h1">Pack Creation de Site Web</h1>
    <div className="pricing-wrapper">
       
      {plans.map((plan, index) => (
        <div
          className={`pricing-card ${
            index === 1 ? "middle-card" : ""
          }`}
          key={index}
        >
          
          <div className="top-gradient-bar" />
          <div className="plan-title2">{plan.title}</div>
          <div className="plan-price"><p>{plan.price}</p></div>
          <div className="plan-support">*{plan.support}*</div>
          <hr className="divider" />
          <div className="features-label">Feature Description</div>
          <ul className="feature-list">
            {plan.features.map((f, i) => (
              <li key={i} className="feature-item">
                <span className={f.included ? "icon check" : "icon cross"}>
                  {f.included ? "✔" : "✖"}
                </span>
                {f.label}
              </li>
            ))}
          </ul>
            <Link className="linkChoose" to='/table'>
          <button className="choose-btn">
          
            <span className="circle-plus">+</span> Choose Plan
          </button>
          </Link>
        </div>
      ))}
    </div></div>
  );
};

export default PricingSection;
