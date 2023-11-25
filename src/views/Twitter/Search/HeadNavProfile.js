import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavProfile() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to={"/twitter/search/profile"}>
          <li>Search Profile</li>
        </NavLink>
        <NavLink to={"/twitter/search/analysis"}>
          <li>Profile Analysis</li>
        </NavLink>
      </ul>
    </div>
  );
}
