import React from "react";
import './header.css';

export default function Header() {
  return (
    <div className="header">

      <div className="nav">
       
        <ul>
           <i class="fas fa-bolt icon1"></i>
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
<div >
             <button className="btn-quotes">Get Quotes</button>
           </div>
           <div>
             <button  className="mode"><i class="fas fa-bolt icon"></i></button>
           </div>
           
      
    </div>
  );
}
