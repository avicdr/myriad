import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavStats() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to={"/twitter/tweetsmart/status/tweets"}>
          <li>Tweet</li>
        </NavLink>
        <NavLink to={"/twitter/tweetsmart/status/comments"}>
          <li>Comments</li>
        </NavLink>
        <NavLink to={"/twitter/tweetsmart/status/retweets"}>
          <li>Retweets</li>
        </NavLink>
        <NavLink to={"/twitter/tweetsmart/status/likes"}>
          <li>Likes</li>
        </NavLink>
        <NavLink to={"/twitter/tweetsmart/status/draft"}>
          <li>Draft Tweet</li>
        </NavLink>
        <NavLink to={"/twitter/tweetsmart/tweet"}>
          <button className="btnreport">Tweet</button>
        </NavLink>
      </ul>
    </div>
  );
}
