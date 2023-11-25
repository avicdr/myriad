import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavStats() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to={"/twitter/accounts/groups"}>
          <li>Groups</li>
        </NavLink>
        <NavLink to={"/twitter/accounts/addgroup"}>
          <li>Add Group</li>
        </NavLink>
        {/* <NavLink to={"/twitter/accounts/addgroup"}>
          <li>Edit Group</li>
        </NavLink> */}
        <NavLink to={"/twitter/accounts/accounts"}>
          <li>Accounts</li>
        </NavLink>
        <NavLink to={"/twitter/accounts/addaccount"}>
          <li>Add Account</li>
        </NavLink>
      </ul>
    </div>
  );
}
