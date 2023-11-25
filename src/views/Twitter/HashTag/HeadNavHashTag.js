import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavProfile() {
  return (
    <div className="navigation">
      <ul>
      <NavLink to={"/twitter/analysis/search-hashtag"}>
          <li>Search Hashtag</li>
        </NavLink>
      <NavLink to={"/twitter/analysis/reports"}>
          <li>Hashtag Report</li>
        </NavLink>
         
        {/* <NavLink to={"/twitter/analysis/mediawall"}>
          <li>Media Wall</li>
        </NavLink>
      <NavLink to={"/twitter/analysis/worldcloud"}>
          <li>World Cloud</li>
        </NavLink> 
        <NavLink to={"/twitter/analysis/topuser"}>
          <li>Top User</li>
        </NavLink>
        <NavLink to={"/twitter/analysis/tweetaction"}>
          <li>Tweet Action</li>
        </NavLink> */}
     
      </ul>
    </div>
  );
}
