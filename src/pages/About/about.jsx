import React from "react";
import './about.css';
import { Link } from "react-router-dom";


export default function About() {
  return (
    <><div className='contact-header'>
            <h1 className='contact-p'>About US</h1>
            <p className='contact-p2'><Link to="/Home" className='home-p-contact'>Home</Link> / About US</p>
        </div>
    <div className="services-page">
      
        
      <section className="services-hero">
        <h1>About US</h1>
       
      </section>

     
    </div></>
  );
}
