import React from "react";
import "./Overview.css";
import Ot from "./OverviewTop/Ot";
import Ob from "./OverviewBottom/Ob";

function Overview() {
  return (
    <div className="overview">
      <Ot />
      <Ob />
    </div>
  );
}

export default Overview;
