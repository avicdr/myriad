import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavTrend() {
  return (
    <div className="internavigation">
      <ul>
        <NavLink to={"/instagram/trending/topics"}>
          <li className="internavigation">Topics</li>
        </NavLink>
        <NavLink to={"/instagram/trending/posts"}>
          <li className="internavigation">Posts</li>
        </NavLink>
      </ul>
    </div>
  );
}
