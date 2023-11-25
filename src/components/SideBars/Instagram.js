import React from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "../image/index"
import dash from "../Static/icons/Dashboard/icons8-dashboard-layout-48.png";
import trend from '../Static/icons/Now Trending/icons8-hash-64.png'
import hashtag from '../Static/icons/Hashtag/icons8-hashtag-49.png'
import search from '../Static/icons/Search Profile/icons8-profile-66.png'
import contact from '../Static/icons/Contact Adimn/contact-book.png'
import tasks from '../Static/icons/Tasks/delegate.png'
import user from '../Static/icons/Users and Accounts/group.png'
import report from '../Static/icons/Reports/report.png'
import fellow from '../Static/icons/Follow Unfollow/follow (1).png'
import post from '../Static/icons/tweetsmart/images.png'
import log from '../Static/icons/Users and Accounts/logout.png'
import { useHistory } from 'react-router-dom';

function Instagram() {


  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem('isAuthenticated');
      window.location.reload();
  
    history.push('/login');
  }

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <nav>
      <ul className="w-100">
      <Link to={"/instagram/dashboard"}>
          <li
            className={splitLocation[2] === "dashboard" ? "navinstragram" : ""}
          >
            <img src={dash} className="menuIcon" />{" "}
            Dashboard
          </li>
        </Link>
        {/* <Link to={"/instagram/Aiuser/post"}>
          <li className={splitLocation[2] === "Aiuser" ? "navinstragram" : ""}>
            <Image
              src="https://static.thenounproject.com/png/1143725-200.png"
              className="menuIcon"
            />{" "}
           
           AI Account
          </li>
        </Link> */}
        <Link to={"/instagram/PostSmart/post"}>
          <li className={splitLocation[2] === "PostSmart" ? "navinstragram" : ""}>
          <img src={post} className="menuIcon" />{" "}
            Post Smart
          </li>
        </Link>
        <Link to={"/instagram/trending/topics"}>
          <li className={splitLocation[2] === "trending" ? "navinstragram" : ""}>
          <img src={trend} className="menuIcon" />{" "}
            Now Trending
          </li>
        </Link>
        <Link to={"/instagram/analysis/reports"}>
          <li className={splitLocation[2] === "analysis" ? "navinstragram" : ""}>
          <img src={hashtag} className="menuIcon" /> {" "}
            Hashtag Analysis
          </li>
        </Link>
        <Link to={"/instagram/search/profile"}>
          <li className={splitLocation[2] === "search" ? "navinstragram" : ""}>
          <img src={search} className="menuIcon" /> {" "}
            Search Profile
          </li>
        </Link>
        <Link to={"/instagram/actions/follow"}>
          <li className={splitLocation[2] === "actions" ? "navinstragram" : ""}>
          <img src={fellow} className="menuIcon" /> {" "}
            Follow/Unfollow
          </li>
        </Link>
        <Link to={"/instagram/reports"}>
          <li className={splitLocation[2] === "reports" ? "navinstragram" : ""}>
          <img src={report} className="menuIcon" /> {" "}
            Reports
          </li>
        </Link>
        <Link to={"/instagram/tasks/todo"}>
          <li className={splitLocation[2] === "tasks" ? "navinstragram" : ""}>
          <img src={tasks} className="menuIcon" />{" "}
            Tasks
          </li>
        </Link>
        <Link to={"/instagram/accounts/groups"}>
          <li className={splitLocation[2] === "accounts" ? "navinstragram" : ""}>
  
          <img src={user} className="menuIcon" /> 
          {" "}
            Users/Accounts
          </li>
        </Link>
        <Link to={"/instagram/contactadmin/contact"}>
          <li
            className={splitLocation[2] === "contactadmin" ? "navinstragram" : ""}
          >
                   <img src={contact} className="menuIcon" /> {" "}
            Contact Admin
          </li>
        </Link>
        <Link >
                    <li className={splitLocation[2] === "navActive" ? "navActive" : ""} onClick={handleLogout} >
                        <div className="d-flex">
                    <img src={log} className="menuIcon"  onClick={handleLogout}/><h6>Logout</h6>
                    </div>
                    </li>
                </Link>
      </ul>
    </nav>
  );
}

export default Instagram;
