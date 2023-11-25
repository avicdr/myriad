import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavTrend() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to={"/twitter/actions/follow"}>
          <li>Follow</li>
        </NavLink>
        <NavLink to={"/twitter/actions/unfollow"}>
          <li>Unfolllow</li>
        </NavLink>
      </ul>
    </div>
  );
}
