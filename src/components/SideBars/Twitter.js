import React from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "../image/index";
import dash from "../Static/icons/Dashboard/icons8-dashboard-layout-48.png";
import trend from '../Static/icons/Now Trending/icons8-hash-64.png'
import hashtag from '../Static/icons/Hashtag/icons8-hashtag-49.png'
import search from '../Static/icons/Search Profile/icons8-profile-66.png'
import contact from '../Static/icons/Contact Adimn/contact-book.png'
import tasks from '../Static/icons/Tasks/delegate.png'
import user from '../Static/icons/Users and Accounts/group.png'
import report from '../Static/icons/Reports/report.png'
import fellow from '../Static/icons/Follow Unfollow/follow (1).png'
import tweet from '../Static/icons/tweetsmart/icons8-twitter-50.png'
import log from '../Static/icons/Users and Accounts/logout.png'
import { useHistory } from 'react-router-dom';

function Twitter() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const history = useHistory();

    function handleLogout() {
      localStorage.removeItem('isAuthenticated');
        window.location.reload();
    
      history.push('/login');
    }

    return (
        <nav>
            <ul className="w-100">
                <Link to={"/"}>
                    <li className={splitLocation[1] === "" && splitLocation.length === 2 ? "navActive" : ""}>
                        <img src={dash} className="menuIcon" /> Dashboard
                    </li>
                </Link>
                {/* <Link to={"/twitter/Aiuser/tweet"}>
                    <li className={splitLocation[2] === "Aiuser" ? "navActive" : ""}>
                        <Image src="https://static.thenounproject.com/png/1143725-200.png" className="menuIcon" /> AI Account
                    </li>
                </Link> */}
                <Link to={"/twitter/tweetsmart/tweet"}>
                    <li className={splitLocation[2] === "tweetsmart" ? "navActive" : ""}>
                    <img src={tweet} className="menuIcon" /> Tweet Smart
                    </li>
                </Link>
                <Link to={"/twitter/trending/topics"}>
                    <li className={splitLocation[2] === "trending" ? "navActive" : ""}>
                    <img src={trend} className="menuIcon" /> Now Trending
                    </li>
                </Link>
                <Link to={"/twitter/analysis/search-hashtag"}>
                    <li className={splitLocation[2] === "analysis" ? "navActive" : ""}>
                    <img src={hashtag} className="menuIcon" /> Hashtag Analysis
                    </li>
                </Link>
                <Link to={"/twitter/search/profile"}>
                    <li className={splitLocation[2] === "search" ? "navActive" : ""}>
                    <img src={search} className="menuIcon" />  Search Profile
                    </li>
                </Link>
                <Link to={"/twitter/actions/follow"}>
                    <li className={splitLocation[2] === "actions" ? "navActive" : ""}>
                    <img src={fellow} className="menuIcon" /> Follow/Unfollow
                    </li>
                </Link>
                <Link to={"/twitter/reports"} >
                    <li className={splitLocation[2] === "reports" ? "navActive" : ""}>
                    <img src={report} className="menuIcon" /> Reports
                    </li>
                </Link>
                <Link to={"/twitter/tasks/todo"} >
                    <li className={splitLocation[2] === "tasks" ? "navActive" : ""}>
                    <img src={tasks} className="menuIcon" />  Tasks
                    </li>
                </Link>
                <Link to={"/twitter/accounts/groups"} >
                    <li className={splitLocation[2] === "accounts" ? "navActive" : ""}>
                    <img src={user} className="menuIcon" /> Users/Accounts
                    </li>
                </Link>
                <Link to={"/twitter/contactadmin/contact"}>
                    <li className={splitLocation[2] === "contactadmin" ? "navActive" : ""}>
                    <img src={contact} className="menuIcon" />  Contact Admin
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

export default Twitter;
