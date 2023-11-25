import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNav() {
  return (
    <div className="facenavigation">
      <ul>
        <NavLink to={"/facebook/PostSmart/post"}>
          <li>Post</li>
        </NavLink>
        <NavLink to={"/facebook/PostSmart/comments"}>
          <li>Comments</li>
        </NavLink>
        <NavLink to={"/facebook/PostSmart/share"}>
          <li>Share & Likes</li>
        </NavLink>
        <NavLink to={"/facebook/PostSmart/draft"}>
          <li>Draft Post</li>
        </NavLink>
        <NavLink to={"/facebook/PostSmart/status/post"}>
          <button className="facebtn">Status Report</button>
        </NavLink>
      </ul>
    </div>
  );
}
