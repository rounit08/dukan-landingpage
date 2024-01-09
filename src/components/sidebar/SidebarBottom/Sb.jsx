import React from "react";
import "./Sb.css";
import wallet from "../../../assets/wallet.png";

function Sb() {
  return (
    <div className="sidebarBottom">
      <img src={wallet} alt="wallet" className="walletImg" />
      <div className="walletDetails">
        <p>Available credits</p>
        <p>222.10</p>
      </div>
    </div>
  );
}

export default Sb;
