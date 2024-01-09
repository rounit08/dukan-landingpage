import React from "react";
import "./Nl.css";
import ques from "../../../assets/ques.png";

function Nl() {
  return (
    <div className="navbarLeft">
      <p>Payments</p>
      <div className="work" style={{ display: "flex", alignItems: "center" }}>
        <img src={ques} alt="ques" />
        <p>How it works</p>
      </div>
    </div>
  );
}

export default Nl;
