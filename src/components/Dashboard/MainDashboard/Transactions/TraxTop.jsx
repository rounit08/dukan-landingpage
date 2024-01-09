import React from "react";
import "../Overview/OverviewTop/Ot.css";
import dropdownICON from "../../../../assets/Chevron Downmm.png";
import search from "../../../../assets/searchicon.png";
import "../../../navbar/NavbarMiddle/Nm.css";

function TraxTop() {
  return (
    <div className="overviewTop">
      <div className="navbarMiddle" style={{ width: 220 }}>
        <img src={search} alt="search" />
        <p
          style={{
            fontSize: 15,
            fontWeight: 400,
            lineHeight: 22,
            textAlign: "left",
            color: "rgb(128, 128, 128)",
          }}
        >
          Search by OrderID...
        </p>
      </div>
      <div className="filters">
        <p>Sort</p>
        <img src={dropdownICON} alt="filterDropdown" />
      </div>
    </div>
  );
}

export default TraxTop;
