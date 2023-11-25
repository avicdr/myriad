import React from "react";
import Image from "../image";
import Group from "../Static/Group.png";

function Follower(props) {
  return (
    <div>
      <div className="p-2 m-2 bg-follower border-circle">
        <div className="d-flex flex-column">
          <div className="d-flex">
            <Image src={Group} alt="" className="h-50px"/>
            <div>
              <div className="d-flex flex-column">
                <div className="d-flex align-center">
                  <div className="userId ml-2 mr-2 bold fntSz13 leftName">
                    @{props.userId}
                  </div>
                  |
                  <div className="userName ml-2 fntSz13 mr-2 bold">
                    {props.userName}
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="profileDetails fntSz12 ml-3 mr-3">
                    Tweets: {props.tweets}
                  </div>
                  <hr className="followHr" />
                  <div className="profileDetails fntSz12 ml-3 mr-3">
                    Following: {props.following}
                  </div>
                  <hr className="followHr" />
                  <div className="profileDetails fntSz12 ml-3 mr-3">
                    Followers: {props.followers}
                  </div>
                  <hr className="followHr" />
                  <div className="profileDetails fntSz12 ml-3 mr-3">
                    Listed: {props.Listed}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Follower;
