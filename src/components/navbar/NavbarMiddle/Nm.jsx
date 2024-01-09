import React from "react";
import "./Nm.css";
import search from "../../../assets/searchicon.png";

function Nm() {
  return (
    <div className="navbarMiddle">
      <img src={search} alt="search" />
      <p>Search, features, tutorials, etc.</p>
    </div>
  );
}

export default Nm;
