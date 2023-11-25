import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavProfile() {
  return (
    <div className="facenavigation">
      <ul>
        <NavLink to={"/facebook/analysis/reports"}>
          <li>Hashtag Report</li>
        </NavLink>
        <NavLink to={"/facebook/analysis/mediawall"}>
          <li>Media Wall</li>
        </NavLink>
      </ul>
    </div>
  );
}
