import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNav() {
  return (
    <div className="internavigation">
      <ul>
        <NavLink to={"/instagram/PostSmart/post"}>
          <li className="internavigation">Post</li>
        </NavLink>
        <NavLink to={"/instagram/PostSmart/comments"}>
          <li className="internavigation">Comments</li>
        </NavLink>
        <NavLink to={"/instagram/PostSmart/share"}>
          <li className="internavigation">Posts & Likes</li>
        </NavLink>
        <NavLink to={"/instagram/PostSmart/draft"}>
          <li className="internavigation">Draft Post</li>
        </NavLink>
        <NavLink to={"/instagram/PostSmart/status/post"}>
          <button className="instabtn">Status Report</button>
        </NavLink>
      </ul>
    </div>
  );
}
