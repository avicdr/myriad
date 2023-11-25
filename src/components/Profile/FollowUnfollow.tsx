import React, { useEffect, useState } from "react";
import {
  handleFollow,
  handleUnFollow,
  handleProfileSearch,
} from "../../utils/functions";
import { getWithToken } from "../../utils/request";
import Image from "../image";

function FollowUnfollow({
  follow,
  unfollow,
  searchQuery,
  username,
  setUsername,
  selectedGroups,
  selectedUsers,
  refresh,
  times,
  setTimes,
  clearAll,
}) {
  const [profileBanner, setProfileBanner] = useState<any>();
  const [profilePicture, setProfilePicture] = useState<any>();
  const [profileName, setProfileName] = useState<any>();
  const [followers, setFollowers] = useState<any>();
  const [following, setFollowing] = useState<any>();
  const [profileDescription, setProfileDescription] = useState<any>();

  const [groups, setGroups] = useState([]);
  useEffect(() => {
    getWithToken("groups").then((response) => {
      const groups = response.data.data;
      let groupIds = selectedGroups?.map((item) => item);
      if (groupIds.includes("all")) {
        groupIds = groups?.map((item) => item.id);
      }
      setGroups(groupIds);
    });
  }, [selectedGroups]);

 

  if (searchQuery && searchQuery.length > 0) {
    if (refresh && !times) {
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
      setTimes(true);
    }
  }

  return (
    <div>
      <div className="profileDisplay pt-2 pb-2 bg-white border-circle">
        <div className="banner">
          <Image
            src={profileBanner
              ? profileBanner
              : "https://www.punto-informatico.it/app/uploads/2022/05/Twitter.jpg"}
            alt="banner" height={""} width={""}          />
        </div>

        <div className="wrapper-content">
          <div className="prof-container flex-column">
            <aside className="profile">
              <Image
                src={profilePicture
                  ? profilePicture
                  : "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"}
                className="avatar"
                alt="Gabriel de Jesus" height={""} width={""}              />
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
                  {follow === "true" ? (
                    <div
                      className="btnColoured ml-5 mr-3"
                      style={{ margin: "0 auto" }}
                      onClick={() =>
                        // console.log(
                        //   // document?.getElementById("usersSelect").value,
                        //   selectedUsers,
                        //   searchQuery,
                        //   selectedGroups,

                        //   // document?.getElementById("groupSelect").value,
                        //   "bbbbbbbbbbbbb"
                        // )
                        handleFollow(selectedUsers, searchQuery, groups)
                      }
                    >
                      Follow
                    </div>
                  ) : (
                    ""
                  )}
                  {unfollow === "true" ? (
                    <div
                      className="btnColoured ml-5 mr-3"
                      style={{ margin: "0 auto" }}
                      onClick={() =>
                        handleUnFollow(selectedUsers, searchQuery, groups)
                      }
                    >
                      Unfollow
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="sideText mt-3 mb-3">
                  {profileDescription
                    ? profileDescription
                    : "No Profile Description"}
                </div>
                <div className="d-flex w-max-content">
                  <div className="mr-2">
                    {following ? following : 0} Following
                  </div>
                  <div className="mr-2">
                    {followers ? followers : 0} Followers
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

export default FollowUnfollow;
