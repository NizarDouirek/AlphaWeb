import React from "react";
import './about.css';
import { Link } from "react-router-dom";
import { FaGlobeAmericas, FaUserTie, FaCheckCircle, FaSmile } from "react-icons/fa"
import AnimatedCounter from "../../composant/animatecounter/numbercount";
import Carousel from "../../composant/caro/caro";


export default function About() {
  return (
    <><div className='contact-header'>
            <h1 className='contact-p'>About US</h1>
            <p className='contact-p2'><Link to="/Home" className='home-p-contact'>Home</Link> / About US</p>
        </div>
      <div className="about-page">
        <section className="about-hero">
          <h1>Who We Are</h1>
          <div className="headAbout">
            <img className="img11bout" src="About.webp" alt="" />
            <div>
            <h2>Transform Your Business with Smart IT Solutions

Empower Your Growth Online</h2>
            <p>

Competently leverage cutting-edge technologies and scalable infrastructures to drive your business forward.
Enthusiastically maximize secure, cost-effective solutions tailored to your goals, and transform your digital presence into a revenue-generating machine.</p>
<div className="btnsectionAbout">
  <button >Contact us</button>
  <img className="imgfleche" src="fleche.webp" alt="" />
</div>
</div>
          {/* <p>
            AlphaWeb is a creative web development agency specialized in building modern, responsive, and high-performance websites and applications. We help businesses establish their online presence with innovative solutions tailored to their needs.
          </p> */}
          
          </div>
        </section>


<section className="why-choose-us">
  
  <div>
  <h2>Why Choose AlphaWeb </h2>
  <p>
    AlphaWeb offers the expertise, creativity, and resources needed to design, develop, and maintain powerful digital solutions that help your business thrive. We focus on delivering secure, high-performance platforms so you can focus on growing your brand.
  </p>

  <ul className="why-list">
    <li>
      <span className="icon yellow"></span>
      <div>
        <h3>Achieve your goals and exceed expectations.</h3>
        <p>
          We build tailored solutions that align with your vision, helping you reach new levels of success.
        </p>
      </div>
    </li>
    <li>
      <span className="icon red"></span>
      <div>
        <h3>Robust websites, apps, and digital products.</h3>
        <p>
          Our team crafts modern, responsive, and scalable platforms that elevate your online presence.
        </p>
      </div>
    </li>
    <li>
      <span className="icon green"></span>
      <div>
        <h3>User experience at the heart of everything.</h3>
        <p>
          We design intuitive interfaces to engage your audience and keep them coming back.
        </p>
      </div>
    </li>
  </ul>
  </div>
  <img className="imgWhy" src="about3.webp" alt="" />
</section>

<section className="stats-section">
  <div className="stat-item">
    <FaGlobeAmericas className="stat-icon" />
    <p><AnimatedCounter to={120} duration={2200} /><span>+</span></p>
    <p>Clients Worldwide</p>
  </div>
  <div className="stat-item">
    <FaUserTie className="stat-icon" />
    <p><AnimatedCounter to={60} duration={2500} /><span>+</span></p>
    <p>Experience Engineers</p>
  </div>
  <div className="stat-item">
    <FaCheckCircle className="stat-icon" />
    <p><AnimatedCounter to={70} duration={2500} /><span>+</span></p>
    <p>Completed Projects</p>
  </div>
  <div className="stat-item">
    <FaSmile className="stat-icon" />
    <p><AnimatedCounter to={120} duration={2000} /><span>%</span></p>
    <p>Satisfaction Customers</p>
  </div>
</section>


 <section className="about-mission">
          <div className="content-mission">
  <h2>24/7 Ready to our teams for supports</h2>
  <p>
    Completely exploit bleeding-edge web-readiness diverse interfaces. 
    Assertively reconceptualize interdependent competencies technically 
    sound infomediaries enhance team marketing
  </p>
  <div className="supportIcn">
    <i className="fas fa-headset" style={{ color: "#764ba2", marginRight: "6px" }}></i>  
    <h5>We Provides all Kinds of IT Solutions & Services
That Increase Your Success.</h5>
  </div>
  <div className="mission-button">
    <Link to="/AboutDetails" className="about-btn">Contact us</Link>
  </div>
  </div>
  <img src="support.jpg" alt="" />
</section>

<section className="section-team">
          <h1>Our Team Members</h1>
          <h2 className="p-team">High Professional Team Ready
To Develope Your Business</h2>
    
<section className="team">
    
  {/* cardTeam 1 */}
  <div className="cardTeam-wrapper">
    <div className="cardTeam">
      <div className="cardTeam-image">
        <img
          src="we.jpg"
          alt="profile one"
        />
      </div>

      <ul className="social-icons">
        <li>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-dribbble"></i>
          </a>
        </li>
      </ul>

      <div className="details">
        <h2>
         Nizar Douirek
          <br />
          <span className="job-title">Web Developer</span>
        </h2>
      </div>
    </div>
  </div>

  {/* cardTeam 2 */}
  <div className="cardTeam-wrapper">
    <div className="cardTeam profile-two">
      <div className="cardTeam-image profile-img--two">
        <img
          src="we.jpg"
          alt="profile two"
        />
      </div>

      <ul className="social-icons">
        <li>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-dribbble"></i>
          </a>
        </li>
      </ul>

      <div className="details jane">
        <h2>
          Soufiane Chellat
          <br />
          <span className="job-title">Frontend Developer</span>
        </h2>
      </div>
    </div>
  </div>
   <div className="cardTeam-wrapper">
    <div className="cardTeam">
      <div className="cardTeam-image">
        <img
          src="we.jpg"
          alt="profile one"
        />
      </div>

      <ul className="social-icons">
        <li>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-dribbble"></i>
          </a>
        </li>
      </ul>

      <div className="details">
        <h2>
          John Smith
          <br />
          <span className="job-title">UI Developer</span>
        </h2>
      </div>
    </div>
  </div>
</section>
</section>


       
       
      </div></>
  );
}
