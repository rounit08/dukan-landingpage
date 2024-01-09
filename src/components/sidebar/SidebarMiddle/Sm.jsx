import React from "react";
import "./Sm.css";
import Si from "./SidebarItems/Si";
import homeIcon from "../../../assets/Vector.png";
import orderIcon from "../../../assets/Vector-1.png";
import prodIcon from "../../../assets/Vector-2.png";
import deliveryIcon from "../../../assets/Vector-3.png";
import mktngIcon from "../../../assets/Vector-4.png";
import analyticsIcon from "../../../assets/Vector-5.png";
import paymentsIcon from "../../../assets/Vector-6.png";
import toolsIcon from "../../../assets/Vector-7.png";
import discIcon from "../../../assets/Vector-8.png";
import audiIcon from "../../../assets/Vector-9.png";
import appearanceIcon from "../../../assets/Vector-10.png";
import pluginIcon from "../../../assets/Vector-11.png";

function Sm() {
  return (
    <div className="sidebarMiddle">
      <Si name="Home" image={homeIcon} />
      <Si name="Orders" image={orderIcon} />
      <Si name="Products" image={prodIcon} />
      <Si name="Delivery" image={deliveryIcon} />
      <Si name="Marketing" image={mktngIcon} />
      <Si name="Analytics" image={analyticsIcon} />
      <Si name="Payments" image={paymentsIcon} />
      <Si name="Tools" image={toolsIcon} />
      <Si name="Discounts" image={discIcon} />
      <Si name="Audience" image={audiIcon} />
      <Si name="Appearance" image={appearanceIcon} />
      <Si name="Plugins" image={pluginIcon} />
    </div>
  );
}

export default Sm;
