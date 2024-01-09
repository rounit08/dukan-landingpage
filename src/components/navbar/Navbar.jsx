import React from "react";
import "./Navbar.css";
import Nl from "./NavbarLeft/Nl";
import Nm from "./NavbarMiddle/Nm";
import Nr from "./NavbarRight/Nr";

function Navbar() {
  return (
    <div className="navbar">
      <Nl />
      <Nm />
      <Nr />
    </div>
  );
}

export default Navbar;
