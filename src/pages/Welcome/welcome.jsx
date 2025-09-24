import React from "react";
import './welcome.css';
import ParticlesBackground from "../../composant/ParticlesBackground/ParticlesBackground";
import { Link } from "react-router-dom";
export default function Welcome(){
    return(
    <>
     <div className="home">
          <ParticlesBackground/>
            {/* <Header /> */}
            <div className="welcome">
              <p className="pp"> Bienvenue dans notre site</p>
              <p className="ItS">IT Solutions.</p>
              <p className="main-p">
              Chez AlphaWeb, nous donnons vie à vos idées digitales.
              </p>
    
              <div className="main-social-media">
                <a href=""><i className='bx bxl-facebook icon3'></i></a>
                <a href=""><i className='bx bxl-instagram icon3'></i></a>
                <a href=""><i className='bx bxl-twitter icon3'></i></a>
                <a href=""><i className='bx bxl-linkedin icon3'></i></a>
              </div>
    
              <div className="btn-main2">
               <Link to='/Services'> <button className="btn-quotes2">Nos services </button></Link>
                <Link to='/Contact'><button className="btn-started">Contactez Nous</button></Link>
              </div>
            </div>
          </div>
    </>);
}