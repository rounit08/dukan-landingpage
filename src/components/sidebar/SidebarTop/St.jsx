import React from "react";
import "./St.css";
import profileImage from "../../../assets/Imagem.jpg";
import dropdown from "../../../assets/Chevron Downmm.png";

function St() {
  return (
    <div className="sidebarTop">
      <img src={profileImage} alt="profileImage" />
      <div className="profileInfo">
        <p>Nishyan</p>
        <p>Visit store</p>
      </div>
      <img src={dropdown} alt="dropdown" />
    </div>
  );
}

export default St;
