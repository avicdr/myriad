import React from "react";
import Image from "../image";

function ProfileCard(props) {
  return (
    <div className="d-flex bg-white p-4 border-circle">
      <div className="profilePic mr-3">
        <Image src={props.profilePic} />
      </div>
      <div className="d-flex">
        <div className="profileDetails d-flex flex-column">
          <div className="d-flex fntSz21 mb-3">
            <div className="userId ml-2 mr-2 leftName bold">@{props.userId}</div>|
            <div className="userName ml-2 mr-2 bold">{props.userName}</div>
          </div>
          <div className="d-flex justify-content-around">
            <div className="d-flex flex-column pl-2 pr-2 justify-content-center text-center">
              <div className="totalTweets bold">{props.tweets}</div>
              <div className="profileDetails font_weight_500">Tweets</div>
            </div>
            <hr className="vertical"/>
            <div className="d-flex flex-column pl-2 pr-2 justify-content-center text-center">
              <div className="totalFollowing bold">{props.following}</div>
              <div className="profileDetails font_weight_500">Following</div>
            </div>
            <hr className="vertical"/>
            <div className="d-flex flex-column pl-2 pr-2 justify-content-center text-center">
              <div className="totalFollowers bold">{props.followers}</div>
              <div className="profileDetails font_weight_500">Followers</div>
            </div>
            <hr className="vertical"/>
            <div className="d-flex flex-column pl-2 pr-2 justify-content-center text-center">
              <div className="totalListed bold">{props.listed}</div>
              <div className="profileDetails font_weight_500">Listed</div>
            </div>
          </div>
          <h6 className="p-3 font_weight_500">Joined twitter on {props.joinDate} as user {props.asUser}</h6>
          <div className="bold fntSz17 bold">Bio: </div>
          <div className="bio m-2 p-3 font_weight_500">{props.bio}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
