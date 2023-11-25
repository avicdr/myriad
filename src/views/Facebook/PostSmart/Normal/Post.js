import React, { useEffect, useState } from "react";
import CreatePost from "../../../../components/TweetSmart/CreatePost";
import HeadNav from "./HeadNav";

import Instagram from "../../../../components/Static/Instagram.png";
import twitter from "../../../../components/Static/TwitterLogo.png";

import like from "./like.png";
import comment from "./comment.png";

import Emoji from "../../../../components/Static/Emoji.png";
import Attach from "../../../../components/Static/Attach.png";
import Upload from "../../../../components/Static/Upload.png";
import Image from "../../../../components/image";
import { getGroupFacebookAction } from "../../../../redux/action";
import { getWithToken, postWithToken } from "../../../../utils/request";
import { errorPopup, successPopup } from "../../../../utils/popupMsg";
import { startLoader, stopLoader } from "../../../../utils/function";

function Tweet() {
  const [desc, setDesc] = useState("");

  const [groupList, setGroupList] = useState([]);
  const [userList, setUserList] = useState([]);

  const [groupValue, setGroupValue] = useState("");
  const [userValue, setUserValue] = useState("");

  const [userSeletedList, setUserSeletedList] = useState([]);

  const handleSelectUser = (groupId, userId) => {
    const userData = userList.filter((item) => item?._id === userId);
    const dataLoad = {
      groupId,
      userData: userData[0],
    };
    setUserSeletedList(
      // [...userSeletedList, dataLoad]
      [dataLoad]
    );
  };

  const submitPost = () => {
    startLoader();
    const payload = {
      account_id_list: userSeletedList.map(
        (item, index) => item?.userData?._id
      ),
      operation: 1,
      message: desc,
    };
    console.log(payload, "oooooooooooooooo");
    postWithToken("/facebook/operations", payload)
      .then((d) => {
        successPopup("Post Successfully!");
        stopLoader();

        setDesc("");
        setUserSeletedList([]);
        setGroupValue("");
        setUserValue("");
      })
      .catch((e) => {
        errorPopup("Post Failed!");
        stopLoader();
      });
  };

  useEffect(() => {
    startLoader();
    getGroupsApi();
    getUserApi();
    stopLoader();
  }, []);

  useEffect(() => {
    if (groupValue && userValue) {
      handleSelectUser(groupValue, userValue);
    }
  }, [groupValue, userValue]);

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

  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home /Post Smart / Post</h6>
          <div className="d-flex justify-content-between">
            <h2 className="status">Post</h2>
            <div className="p-3 d-flex justify-content-end">
              <a href="/instagram/PostSmart/post">
                <img src={Instagram} className="px-2" />
              </a>
              <a href="/twitter/tweetsmart/tweet">
                <img src={twitter} className="px-2" />
              </a>
            </div>
          </div>

          <HeadNav />
          <div className="filterBox">
            <div className="row">
              <div className="col-5">
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
            <div className="col-5">
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
            <div className="col-2">
            <button className="facebookbtnColoured">Post</button>
            </div>
            </div>

          </div>
          {userSeletedList?.map((item, index) => (
            <div key={index} className="posts">
              <div className="postContainer">
                <div className="post">
                  <div className="profile">
                    <div className="d-f">
                      <img
                        src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                        alt=""
                      />
                      <div>{item?.userData?.user || "John Doe"}</div>
                    </div>
                    <div className="d-f">
                      <button
                        className="facebookbtnColoured"
                        onClick={submitPost}
                      >
                        Post
                      </button>
                      <img
                        className="crossIcon"
                        src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                        alt=""
                        onClick={() => {
                          setDesc("");
                          setUserValue("");
                          setUserSeletedList([]);
                        }}
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="postInput mt-2 mb-2">
                    <textarea
                      name="content"
                      id="content"
                      cols="30"
                      rows="10"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      placeholder="Write your post here..."
                    ></textarea>
                    <div className="paraphrase fntSz14 bluecolor p-3"></div>
                    <div className="icons d-flex justify-content-end">
                      <Image src={Emoji} alt="" className="p-2" />
                      <Image src={Upload} alt="" className="p-2" />
                      <Image src={Attach} alt="" className="p-2" />
                    </div>
                  </div>
                  <hr />
                  <div className="translation">
                    <div className="heading mt-2">
                      <h5>Translation</h5>
                    </div>
                    <select
                      name="region"
                      id="regionName"
                      className="transDropDown"
                    >
                      <option value="none">From Language</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                    <select
                      name="userType"
                      id="userType"
                      className="transDropDown"
                    >
                      <option value="none">To Language</option>
                      <option value="dev">Developer</option>
                      <option value="normla">Normal</option>
                    </select>
                    <button className="facebookbtnColoured">Go</button>
                  </div>
                  <div className=" py-2 px-2 d-flex justify-content-between">
                    <select
                      name="userType"
                      id="userType"
                      className="CategorydropDown"
                    >
                      <option value="none">Select Category</option>
                      <option value="dev">Developer</option>
                      <option value="normla">Normal</option>
                    </select>

                    <button className="facebookbtnColoured">
                      Generate Post
                    </button>
                  </div>
                  <div className="mt-2 pb-3 d-flex justify-content-between">
                    <button className="facebookbtnColoured">Paraphrase</button>
                    <div className="mt-3 px-5">
                      <input
                        type="checkbox"
                        name="translate"
                        id="translate"
                        className="mlr-1"
                      />
                      <label htmlFor="text-center Translate">Translation</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
