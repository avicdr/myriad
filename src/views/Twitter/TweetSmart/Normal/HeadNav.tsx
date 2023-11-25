import React from "react";
import { NavLink } from "react-router-dom";
type Props = {
    actionBtn: string;
    onClick: any;
    hideBtn?: boolean;
};
const HeadNav = (props: Props) => {
    let hide = props.hasOwnProperty("hideBtn");
    return (
        <div className="navigation">
            <ul>
                <NavLink to={"/twitter/tweetsmart/tweet"}>
                    <li>Tweets</li>
                </NavLink>
                <NavLink to={"/twitter/tweetsmart/comments"}>
                    <li>Comments</li>
                </NavLink>
                <NavLink to={"/twitter/tweetsmart/retweets"}>
                    <li>Retweets & Likes</li>
                </NavLink>
                <NavLink to={"/twitter/tweetsmart/draft"}>
                    <li>Draft Tweet</li>
                </NavLink>
                <button hidden={!!hide} onClick={props.onClick} className="btnreport">
                    {props.actionBtn}
                </button>
            </ul>
        </div>
    );
};

export default HeadNav;
