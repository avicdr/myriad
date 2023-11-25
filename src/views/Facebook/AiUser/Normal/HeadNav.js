import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNav() {
  return (
    <div className="facenavigation">
      <ul>
        <NavLink to={"/facebook/Aiuser/post"}>
          <li>Post</li>
        </NavLink>
        <NavLink to={"/facebook/Aiuser/comments"}>
          <li>Comments</li>
        </NavLink>
        <NavLink to={"/facebook/Aiuser/share"}>
          <li>Share & Likes</li>
        </NavLink>
        <NavLink to={"/facebook/Aiuser/draft"}>
          <li>Draft Post</li>
        </NavLink>
        {/* <NavLink to={"/twitter/AiUser/status/tweets"}>
          <button className="btn">Status Report</button>
        </NavLink> */}
      </ul>
    </div>
  );
}
