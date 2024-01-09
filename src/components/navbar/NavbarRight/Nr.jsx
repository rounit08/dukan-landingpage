import React from "react";
import "./Nr.css";
import drop from "../../../assets/Polygon 2.png";
import announce from "../../../assets/ann.png";

function Nr() {
  return (
    <div className="navbarRight">
      <div className="annIconDiv">
        <img src={announce} alt="announce" className="annIcon" />
      </div>
      <div className="dropIconDiv">
        <img src={drop} alt="dropdown" className="dropIcon" />
      </div>
    </div>
  );
}

export default Nr;
