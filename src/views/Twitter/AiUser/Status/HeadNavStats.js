import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavStats() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to={"/twitter/Aiuser/status/tweets"}>
          <li>Tweet</li>
        </NavLink>
        <NavLink to={"/twitter/Aiuser/status/comments"}>
          <li>Comments</li>
        </NavLink>
        <NavLink to={"/twitter/Aiuser/status/retweets"}>
          <li>Retweets</li>
        </NavLink>
        <NavLink to={"/twitter/Aiuser/status/likes"}>
          <li>Likes</li>
        </NavLink>
        <NavLink to={"/twitter/Aiuser/status/draft"}>
          <li>Draft Tweet</li>
        </NavLink>
        <NavLink to={"/twitter/Aiuser/tweet"}>
          <button className="btnreport">Tweet</button>
        </NavLink>
      </ul>
    </div>
  );
}
