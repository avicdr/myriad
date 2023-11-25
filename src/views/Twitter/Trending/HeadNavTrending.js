import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavTrend() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to={"/twitter/trending/topics"}>
          <li>Topics</li>
        </NavLink>
        <NavLink to={"/twitter/trending/posts"}>
          <li>Posts</li>
        </NavLink>
      </ul>
    </div>
  );
}
