import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavProfile() {
  return (
    <div className="facenavigation">
      <ul>
        <NavLink to={"/facebook/search/profile"}>
          <li>Search Profile</li>
        </NavLink>
        <NavLink to={"/facebook/search/analysis"}>
          <li>Profile Analysis</li>
        </NavLink>
      </ul>
    </div>
  );
}
