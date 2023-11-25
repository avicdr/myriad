import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavStats() {
  return (
    <div className="internavigation">
      <ul>
        <NavLink to={"/instagram/PostSmart/status/post"}>
          <li className="internavigation">Post</li>
        </NavLink>
        <NavLink to={"/instagram/PostSmart/status/comments"}>
          <li className="internavigation">Comments</li>
        </NavLink>
        <NavLink to={"/instagram/PostSmart/status/share"}>
          <li className="internavigation">Share</li>
        </NavLink>
        <NavLink to={"/instagram/PostSmart/status/likes"}>
          <li className="internavigation">Likes</li>
        </NavLink>
        <NavLink to={"/instagram/PostSmart/status/draft"}>
          <li className="internavigation">Draft Post</li>
        </NavLink>
        <NavLink to={"/instagram/PostSmart/post"}>
          <button className="instabtn">Post</button>
        </NavLink>
      </ul>
    </div>
  );
}
