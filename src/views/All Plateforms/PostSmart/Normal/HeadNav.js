import React from "react";
import { NavLink } from "react-router-dom";

export default function HeadNav() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to={"/allplateforms/PostSmart/post"}>
          <li>Post</li>
        </NavLink>

      </ul>
    </div>
  );
}
