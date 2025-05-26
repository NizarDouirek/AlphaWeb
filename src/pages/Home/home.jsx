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
       <p>You can easily change any design to your own. It is also highly customizable SEO friendly template.</p>
        </div>
      </div>
    </>
  );
}
