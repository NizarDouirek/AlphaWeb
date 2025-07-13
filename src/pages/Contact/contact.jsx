import React, { useState } from 'react';
import './contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Header from '../../composant/Header/header';
import Footer from '../../composant/Footer/footer';

export default function Contact() {
  const isMobile = window.innerWidth <= 768;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  const infos = [
    {
      icon: <FaPhone />,
      title: "Phone",
      text: "+212 612 345 678"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      text: "alphaweb@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      text: "123 Main St, Casablanca, Maroc"
    }
  ];

  return (
    <div className='contact-page'>
      <div className='contact'>

        <div className='contact-header'>
          <h1 className='contact-p'>Contact Us</h1>
          <p className='contact-p2'><a href="" className='home-p-contact'>Home</a> / Contact</p>
        </div>

        <div className='contact-h1'><h1>Let’s Start a Conversation</h1></div>

        <div className='contact-container'>

<div class="contact-left">
  <h2>Got a Question?</h2>
  <p>We’re here to help. Don’t hesitate to get in touch if you need assistance, have a question, or want to know more about our services.</p>
  <img src="/servieccontact.png" alt="Contact Illustration" />
</div>


          <div className='contact-form'>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert("Message Sent!");
            }}>
              <div className="form-row">
                <div className="input-wrapper">
                  <input type="text" id="username" required placeholder=" " />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="input-wrapper">
                  <input type="text" id="phone" required placeholder=" " />
                  <label htmlFor="phone">Phone</label>
                </div>
              </div>

              <div className="form-row">
                <div className="input-wrapper">
                  <input type="email" id="email" required placeholder=" " />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-wrapper">
                  <input type="text" id="subject" required placeholder=" " />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>

              <div className="form-row">
                <div className="input-wrapper full-width">
                  <textarea id="message" required placeholder=" "></textarea>
                  <label htmlFor="message">Message</label>
                </div>
              </div>

              <button type="submit" className="btn-send">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-info-section">
        <h2>Contact Info</h2>
        <div className="info-cards">
          {infos.map((item, index) => (
            <div key={index} className="info-card">
              <div className="icon">{item.icon}</div>
              <div className="text-content">
                <h3>{item.title}</h3>
                <p><a href="">{item.text}</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="faq-container">
        
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
    </div>
  );
}
