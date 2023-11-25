import React from "react";
import logo from "./Static/logo.png";
import { Link, useLocation } from "react-router-dom";
import Twitter from "./SideBars/Twitter";
import Facebook from "./SideBars/Facebook";
import Instagram from "./SideBars/Instagram";
import Image from "./image/index";
import ReactSelect from "./ReactSelect";
import AllPlateforms from "./SideBars/AllPlateforms";

function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="sidebar_drawer">
      <div className="left">
        <div className="logoName w-100 p-3">
          <Image className="logo mb-2" src={logo} alt="logo" />
          <div className="myriad mb-2">MYRIAD</div>
        </div>
        <ReactSelect/>
        {splitLocation[1] === "" && splitLocation.length === 2 ? (
          <Twitter />
          
        ) : (
          ""
        )}
        
        {splitLocation[1] === "twitter" ? <Twitter /> : ""}
        {splitLocation[1] === "facebook" ? <Facebook /> : ""}
        {/* {splitLocation[1] === "instagram" ? <Instagram /> : ""}
        {splitLocation[1] === "allplateforms" ? <AllPlateforms/> : ""} */}
      </div>
    </div>
  );
}

export default Navbar;
