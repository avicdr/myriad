import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavTrend() {
  return (
    <div className="internavigation">
      <ul>
        <NavLink to={"/instagram/actions/follow"}>
          <li className="internavigation">Follow</li>
        </NavLink>
        <NavLink to={"/instagram/actions/unfollow"}>
          <li className="internavigation">Unfolllow</li>
        </NavLink>
      </ul>
    </div>
  );
}
