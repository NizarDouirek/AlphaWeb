import React from "react";
import './home.css';
import Header from "../../composant/Header/header";

export default function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <div className="welcome">
            <p className="pp"> Bienvenue dans notre site</p>
          <p className="ItS">IT Solutions.
       </p>
       <p className="main-p">
        You can easily change any design to your own. It is also highly <br />
         customizable SEO friendly template.</p>

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
    </>
  );
}
