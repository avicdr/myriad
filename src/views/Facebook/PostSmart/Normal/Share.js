import React, { useEffect, useState } from "react";
import HeadNav from "./HeadNav";
import Search from "../../../../components/Static/Search.png";
import Instagram from "../../../../components/Static/Instagram.png";
import twitter from "../../../../components/Static/TwitterLogo.png";
import { getWithToken, postWithToken } from "../../../../utils/request";
import { errorPopup, successPopup } from "../../../../utils/popupMsg";
import { startLoader, stopLoader } from "../../../../utils/function";

function Share() {
  const [groupList, setGroupList] = useState([]);
  const [userList, setUserList] = useState([]);

  const [isLiked, setIsLiked] = [true];

  const [groupValue, setGroupValue] = useState("");
  const [userValue, setUserValue] = useState("");

  const [fbPostLink, setFbPostLink] = useState("");

  useEffect(() => {
    getGroupsApi();
    getUserApi();
  }, []);

  const getGroupsApi = async () => {
    let url = `facebook/groups?account_type=user&skip=0&limit=10`;
    const response = await getWithToken(url);
    if (response?.data?.data) {
      const result = response.data.data || [];
      console.log(result);
      setGroupList(result);
    }
  };

  const getUserApi = async () => {
    let url = `facebook/accounts?account_type=user&skip=0&limit=10`;
    const response = await getWithToken(url);
    console.log("accountreasponse", response?.data?.data);
    setUserList(response?.data?.data);
  };

  const getAllDataApi = () => { };

  const handleSubmit = () => {
    // if (!isLiked) {
    //   errorPopup(" Like option not selected ");
    //   return;
    // }
    startLoader();

    const payload = {
      account_id_list: [userValue],
      operation: 3,
      post_url: fbPostLink,
    };
    postWithToken("/facebook/operations", payload)
      .then((d) => {
        successPopup("liked Successfully!");
        setFbPostLink("");
        setGroupValue("");
        setUserValue("");
        stopLoader();
      })
      .catch((e) => {
        errorPopup("liked Failed!");
        stopLoader();
      });

    console.log(payload, "mmmmmmmmmnnnnnnnnnnn");
  };

  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Post Smart / Share & Likes</h6>

          <div className="d-flex justify-content-between">
            <h2 className="status">Share & Likes</h2>
            <div className="p-3 d-flex justify-content-end">
              {/* <a href="/instagram/PostSmart/share">
                <img src={Instagram} className="px-2" />
              </a> */}
              <a href="/twitter/tweetsmart/retweets">
                <img src={twitter} className="px-2" />
              </a>
            </div>
          </div>

          <HeadNav />
          <div className="filterBox">
            {/* <div className="searchHash">
                <input type="text" className="search"  placeholder="Search Hashtag"/>
                <img src={Search} alt=""/>
            </div> */}
            <div className="row">
              <div className="col-3">
                <input
                  type="text"
                  className="searh h-100 p-2 rounded-4 mr-3"
                  placeholder="Enter Facebook Post Link"
                  value={fbPostLink}
                  onChange={(e) => setFbPostLink(e.target.value)}
                  style={{borderRadius:"12px"}}
                />
              </div>
              <div className="col-3">
                <select
                  name="region"
                  id="regionName"
                  className="w-100 dropDown"
                  value={groupValue}
                  onChange={(e) => setGroupValue(e.target.value)}
                >
                  <option disabled value="" selected>
                    Select Groups
                  </option>
                  {groupList &&
                    groupList?.map((item, index) => (
                      <option value={item?.id}>{item?.name}</option>
                    ))}
                </select>
              </div>
              <div className="col-3">
                <select
                  name="userType"
                  id="userType"
                  className="w-100 dropDown"
                  value={userValue}
                  onChange={(e) => setUserValue(e.target.value)}
                >
                  <option disabled value="" selected>
                    Select by Users
                  </option>
                  {userList &&
                    userList?.map((item, index) => (
                      <option value={item?._id}>{item?.user}</option>
                    ))}
                </select>
              </div>

              <div className="col-1">
                <button className="facebookbtnColoured" >
                  Like
                </button>
              </div>
              <div className="col-1">

                <button className="facebookbtnColoured" >
                  Share
                </button>
              </div>
              <div className="col-1">
                <button className="facebookbtnColoured" onClick={handleSubmit}>
                  Go
                </button>
              </div>
            </div>
          </div>
          <div className="details w-100">
            <div className="detailItem justify-content-around">
              <div className="dropArrow">
                <img
                  src="https://static.thenounproject.com/png/1123247-200.png"
                  alt="none"
                />
              </div>
              <div className="index item">#</div>
              <div className="name item">Name</div>
              <div className="tweet item">Post ID</div>
              <div className="location item">Location</div>
              <div className="tweetType item">Post Type</div>
              <div className="tweetStatus item">Status</div>
              <div className="timeStamp item">Time Stamp</div>
              <div className="actions item">Actions</div>
            </div>
            <div className="detailItemStats justify-content-around">
              <div className="dropArrow">
                <img
                  src="https://static.thenounproject.com/png/1123247-200.png"
                  alt="none"
                />
              </div>
              <div className="index item">1</div>
              <div className="name item">Horrow Suranjan</div>
              <div className="tweetId item">1625225505125</div>
              <div className="location item">Mumbai</div>
              <div className="tweetType item">Media</div>
              <div className="tweetStatus item">Success</div>
              <div className="timeStamp item">30/12/2022, 16:34</div>
              <div className="actions item">View</div>
            </div>
            <div className="stats">
              <h4>Post Statistics:</h4>
              <h4>Comments: </h4>
              <p>2</p>
              <h4>Posts: </h4>
              <p>11</p>
              <h4>Likes: </h4>
              <p>10</p>
              <h4>Edits: </h4>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
