import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavStats() {
  return (
    <div className="facenavigation">
      <ul>
        <NavLink to={"/facebook/PostSmart/status/post"}>
          <li>Post</li>
        </NavLink>
        <NavLink to={"/facebook/PostSmart/status/comments"}>
          <li>Comments</li>
        </NavLink>
        <NavLink to={"/facebook/PostSmart/status/share"}>
          <li>Share</li>
        </NavLink>
        <NavLink to={"/facebook/PostSmart/status/likes"}>
          <li>Likes</li>
        </NavLink>
        <NavLink to={"/facebook/PostSmart/status/draft"}>
          <li>Draft Post</li>
        </NavLink>
        <NavLink to={"/facebook/PostSmart/post"}>
          <button className="facebtn">Post</button>
        </NavLink>
      </ul>
    </div>
  );
}
