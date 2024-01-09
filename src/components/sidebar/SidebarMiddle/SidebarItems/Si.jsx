import React from "react";
import "./Si.css";

function Si({ name, image }) {
  return (
    <div className="sidebarItems">
      <img src={image} alt="iconImage" />
      <p>{name}</p>
    </div>
  );
}

export default Si;
