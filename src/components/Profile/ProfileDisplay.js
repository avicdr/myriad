import React, { useEffect, useState } from "react";
import {
  handleFollow,
  handleUnFollow,
  handleProfileSearch,
  startLoader,
} from "../../utils/functions";
import Image from "../image";

function ProfileDisplay({
  follow,
  unfollow,
  searchQuery,
  // username,
  // setUsername,
}) {
  const [username, setUsername] = useState("");
  const [profileBanner, setProfileBanner] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [profileName, setProfileName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [profileDescription, setProfileDescription] = useState();

  console.log(
    profileBanner,
    profilePicture,
    profileName,
    followers,
    following,
    profileDescription,
    username,
    "ppppp"
  );

  const fetchData = () => {
    if (searchQuery && searchQuery.length > 0) {
      handleProfileSearch(
        searchQuery,
        setProfileBanner,
        setProfilePicture,
        setProfileName,
        setFollowers,
        setFollowing,
        setProfileDescription,
        setUsername
      );
    }
  };

  console.log("adsfasdf");
  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <div className="profileDisplay pt-2 pb-2 bg-white border-circle">
        <div className="banner">
          <Image
            src={
              profileBanner
                ? profileBanner
                : "https://www.punto-informatico.it/app/uploads/2022/05/Twitter.jpg"
            }
            alt="banner"
          />
        </div>

        <div className="wrapper-content">
          <div className="prof-container flex-column">
            <aside className="profile">
              <Image
                src={
                  profilePicture
                    ? profilePicture
                    : "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
                }
                className="avatar"
                alt="Gabriel de Jesus"
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
                  <div className="mr-2">
                    {following ? following : 0} Following
                  </div>
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

export default ProfileDisplay;
