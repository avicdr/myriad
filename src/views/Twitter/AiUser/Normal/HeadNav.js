import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNav() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to={"/twitter/Aiuser/tweet"}>
          <li>Tweet</li>
        </NavLink>
        <NavLink to={"/twitter/Aiuser/comments"}>
          <li>Comments</li>
        </NavLink>
        <NavLink to={"/twitter/Aiuser/retweets"}>
          <li>Retweets & Likes</li>
        </NavLink>
        <NavLink to={"/twitter/Aiuser/draft"}>
          <li>Draft Tweet</li>
        </NavLink>
        <NavLink to={"/twitter/AiUser/status/tweets"}>
          <button className="btnreport">Status Report</button>
        </NavLink>
      </ul>
    </div>
  );
}
