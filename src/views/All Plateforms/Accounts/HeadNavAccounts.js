import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNavStats() {
  return (
    <div className="facenavigation">
      <ul>
        <NavLink to={"/allplateforms/accounts/groups"}>
          <li>Groups</li>
        </NavLink>
        <NavLink to={"/allplateforms/accounts/addgroup"}>
          <li>Add Group</li>
        </NavLink>
        <NavLink to={"/allplateforms/accounts/accounts"}>
          <li>Accounts</li>
        </NavLink>
        <NavLink to={"/allplateforms/accounts/addaccount"}>
          <li>Add Account</li>
        </NavLink>
      </ul>
    </div>
  );
}
