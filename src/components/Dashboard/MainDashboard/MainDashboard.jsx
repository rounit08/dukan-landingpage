import React from "react";
import "./MainDashboard.css";
import Overview from "./Overview/Overview";
import Trax from "./Transactions/Trax";

function MainDashboard() {
  return (
    <div className="mainDboard">
      <Overview />
      <p className="titleTrax">Transaction | This Month</p>
      <Trax />
    </div>
  );
}

export default MainDashboard;
