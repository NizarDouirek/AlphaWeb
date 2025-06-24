// Loader.jsx
import React from 'react';
import './loader.css'; // Assurez-vous que le fichier CSS est correctement importé

export default function Loader() {
  return (
       <div className="loader-overlay">
 
<div className="loader">
  <div className="simple-text">Hover me and click!</div>
  <div className="cube">
    <div className="face middle front">
      <div className="cube cube-front">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
    <div className="face middle back">
      <div className="cube cube-back">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
    <div className="face middle left">
      <div className="cube cube-left">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
    <div className="face middle right">
      <div className="cube cube-right">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
    <div className="face middle top">
      <div className="cube cube-top">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
    <div className="face middle bottom">
      <div className="cube cube-bottom">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
