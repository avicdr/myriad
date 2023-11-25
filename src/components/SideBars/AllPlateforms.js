import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Image from "../image/index"


export default function AllPlateforms() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
 
    return (
    <nav>
    <ul>
      <Link to={"/allplateforms/PostSmart/post"}>
        <li
          className={splitLocation[2] === "PostSmart" ? "navfacebook" : ""}
        >
          <Image
            src="https://static.thenounproject.com/png/1143725-200.png"
            className="menuIcon"
          />{" "}
         Post Smart
        </li>
      </Link>
      <Link to={"/allplateforms/accounts/groups"}>
          <li className={splitLocation[2] === "accounts" ? "navfacebook" : ""}>
            <Image
              src="https://static.thenounproject.com/png/1143725-200.png"
              className="menuIcon"
            />{" "}
            Users/Accounts
          </li>
        </Link>

    </ul>
  </nav>
  )
}
