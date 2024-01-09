import React from "react";
import "./Ot.css";
import dropdownICON from "../../../../../assets/Chevron Downmm.png";

function Ot() {
  return (
    <div className="overviewTop">
      <p>Overview</p>
      <div className="filters">
        <p>Last Month</p>
        <img src={dropdownICON} alt="filterDropdown" />
      </div>
    </div>
  );
}

export default Ot;
