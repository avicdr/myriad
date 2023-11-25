import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavTrend() {
  return (
    <div className="facenavigation">
      <ul>
        <NavLink to={"/facebook/actions/follow"}>
          <li>Follow</li>
        </NavLink>
        <NavLink to={"/facebook/actions/unfollow"}>
          <li>Unfolllow</li>
        </NavLink>
      </ul>
    </div>
  );
}
