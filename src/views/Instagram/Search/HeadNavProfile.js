import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavProfile() {
  return (
    <div className="internavigation">
      <ul>
        <NavLink to={"/instagram/search/profile"}>
          <li className="internavigation">Search Profile</li>
        </NavLink>
        <NavLink to={"/instagram/search/analysis"}>
          <li className="internavigation">Profile Analysis</li>
        </NavLink>
      </ul>
    </div>
  );
}
