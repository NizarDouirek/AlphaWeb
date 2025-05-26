import React from "react";
import './header.css';
export default function Header(){
    return(
    <header>
        <div className="header">
            <div className="header-content">
              <img src="/logo.png" alt=""className="logo"/>
            
           <div className="nav">
            <ul>
            <li><a href="">Home</a></li> 
            <li><a href="">about</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Team</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">News</a></li>
            </ul>
           </div>

           <div className="btn-quotes">
             <button>Get Quotes</button>
           </div>
           <div className="mode">
             <button>light</button>
           </div>
        </div></div>
    </header>
    )
}