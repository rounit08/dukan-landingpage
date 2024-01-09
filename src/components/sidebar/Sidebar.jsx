import React from "react";
import "./Sidebar.css";
import St from "./SidebarTop/St";
import Sm from "./SidebarMiddle/Sm";
import Sb from "./SidebarBottom/Sb";

function Sidebar() {
  return (
    <div className="sidebar">
      <St />
      <Sm />
      <Sb />
    </div>
  );
}

export default Sidebar;
