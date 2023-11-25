import React, { useState } from "react";
import { handleFollow, handleUnFollow, handleProfileSearch } from "../../../utils/functions";
import Image from "../../../components/image/index";
import facebook from "../../../components/Static/Instagram.png"
import Instagram from "../../../components/SideBars/Instagram";

function ProfileDisplay({ follow, unfollow, searchQuery, username, setUsername }) {
  const [profileBanner, setProfileBanner] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [profileName, setProfileName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [profileDescription, setProfileDescription] = useState("");
  if (searchQuery && searchQuery.length > 0) {
    handleProfileSearch(
      searchQuery,
      setProfileBanner,
      setProfilePicture,
      setProfileName,
      setUsername,
      setFollowers,
      setFollowing,
      setProfileDescription
    ); 
  }
  
  return (
    <div>
      <div className="profileDisplay pt-2 pb-2 bg-white border-circle">
        <div className="instrgram-banner">
         
        </div>

        <div className="wrapper-content">
          <div className="prof-container flex-column">
            <aside className="profile">
              <Image
                src={Instagram}
                className="avatar"
                 alt=""
              />
            </aside>
            <div className="d-flex mt-2 mb-2">
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <div className="fntSz18 text-left bold">
                      {profileName ? profileName : "Name"}
                    </div>
                    <div className="leftName text-left bold">
                      @{username ? username : "Username"}
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-4 w-max-content">
                  <div className="mr-2">{following ? following : 0} Following</div>
                  <div className="mr-2">
                    {followers ? followers : 0} Followers
                  </div>
                </div>
              </div>
              <hr className="vertical mr-4 mb-4 pt-2" />
              <div className="sideText">
                {profileDescription
                  ? profileDescription
                  : "No Profile Description"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDisplay;