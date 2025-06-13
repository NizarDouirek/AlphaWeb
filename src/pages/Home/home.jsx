import React from "react";
import './home.css';
import Header from "../../composant/Header/header";
import Particles from "react-tsparticles";
import ParticlesBackground from "../../composant/ParticlesBackground/ParticlesBackground";
import Title from "../../composant/Title/title";
import Plans from "../Pricing/cardstry";
import Services from "../Service/service";

const logos = [
  "./mysql.png",
  "./js.png",
  "./wordpress-logo.png",
  "./js.png",
  "./react-logo.png",
  "./js.png",
];

export default function Home() {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {/**/}
      <div className="home">
        <ParticlesBackground />
        <Header />
        <div className="welcome">
          <p className="pp"> Bienvenue dans notre site</p>
          <p className="ItS">IT Solutions.</p>
          <p className="main-p">
            You can easily change any design to your own. It is also highly <br />
            customizable SEO friendly template.
          </p>

          <div className="main-social-media">
            <a href=""><i className='bx bxl-facebook icon3'></i></a>
            <a href=""><i className='bx bxl-instagram icon3'></i></a>
            <a href=""><i className='bx bxl-twitter icon3'></i></a>
            <a href=""><i className='bx bxl-linkedin icon3'></i></a>
          </div>

          <div className="btn-main2">
            <button className="btn-quotes2">Get Quotes</button>
            <button className="btn-started">Get Started</button>
          </div>
        </div>
      </div>

      <Services />

      <section className="ContactHomme">
        <div>
          <div className="contentCH">
            <p className="p1CH">We Carry More Than Just Good Coding Skills</p>
            <p className="p2CH">Let's Discuss your Projects</p>
            <p className="p3CH">We pride ourselves with our ability to perform and deliver results. Use the form below to discuss your project needs with our team, we will get back asap.</p>
            <div className="btn-tel">
              <button className="btn-quotes3">Get Quotes</button><p>(+44) 152-567-987</p>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-container2">
        <div className="marquee-content2">
          <p>
            App Development - Web Development - Web Hosting - Design UI/UX
            - App Development - Web Development - Web Hosting - Design UI/UX
            - App Development - Web Development - Web Hosting - Design UI/UX
            - App Development - Web Development - Web Hosting - Design UI/UX
          </p>
        </div>
      </div>

      <div className="home-technologies-container">
        <div className="home-technologies">
          <h1 className="home-pack-h1">Nos Technologies</h1>
          {isMobile ? (
            <div className="carousel-wrapper">
              <div className="carousel">
                {logos.map((logo, index) => (
                  <div className="carousel-item" key={index}>
                    <img src={logo} alt={`tech-${index}`} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="home-technologies-imgcontainer">
              {logos.map((src, index) => (
                <div className="home-technologies-img" key={index}>
                  <img src={src} alt={`logo-${index}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="home-plans-container">
        <h1 className="home-pack-h1">Pack Creation de Site Web</h1>
        <Plans />
      </div>
    </>
  );
}
