import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNav() {
  return (
    <div className="internavigation">
      <ul>
        <NavLink to={"/instagram/Aiuser/post"}>
          <li className="internavigation">Post</li>
        </NavLink>
        <NavLink to={"/instagram/Aiuser/comments"}>
          <li className="internavigation">Comments</li>
        </NavLink>
        <NavLink to={"/instagram/Aiuser/share"}>
          <li className="internavigation">Share & Likes</li>
        </NavLink>
        <NavLink to={"/instagram/Aiuser/draft"}>
          <li className="internavigation">Draft Post</li>
        </NavLink>
        {/* <NavLink to={"/instagram/AiUser/status/tweets"}>
          <button className="btn">Status Report</button>
        </NavLink> */}
      </ul>
    </div>
  );
}
