import React from "react";
import "./title.css"; // Import du fichier de style

const Title = ({ text }) => {
  return (
    <div className="title-container">

      <h2 className="title">{text}</h2>

    </div>
  );
};

export default Title;