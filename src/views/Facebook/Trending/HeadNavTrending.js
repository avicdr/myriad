import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavTrend() {
  return (
    <div className="facenavigation">
      <ul>
        <NavLink to={"/facebook/trending/topics"}>
          <li>Topics</li>
        </NavLink>
        <NavLink to={"/facebook/trending/posts"}>
          <li>Posts</li>
        </NavLink>
      </ul>
    </div>
  );
}
