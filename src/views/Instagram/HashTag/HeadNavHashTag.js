import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavProfile() {
  return (
    <div className="internavigation">
      <ul>
        <NavLink to={"/instagram/analysis/reports"}>
          <li className="internavigation">Hashtag Report</li>
        </NavLink>
        <NavLink to={"/instagram/analysis/mediawall"}>
          <li className="internavigation">Media Wall</li>
        </NavLink>
      </ul>
    </div>
  );
}
