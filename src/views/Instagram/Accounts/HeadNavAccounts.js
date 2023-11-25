import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavStats() {
  return (
    <div className="internavigation">
      <ul>
        <NavLink to={"/instagram/accounts/groups"}>
          <li className="internavigation">Groups</li>
        </NavLink>
        <NavLink to={"/instagram/accounts/addgroup"}>
          <li className="internavigation">Add Group</li>
        </NavLink>
        <NavLink to={"/instagram/accounts/accounts"}>
          <li className="internavigation">Accounts</li>
        </NavLink>
        <NavLink to={"/instagram/accounts/addaccount"}>
          <li className="internavigation">Add Account</li>
        </NavLink>
      </ul>
    </div>
  );
}
