import React, { useState } from "react";
import HeadNavAccounts from "./HeadNavAccounts";
import Instagram from "../../../components/Static/Instagram.png";
import twitter from "../../../components/Static/TwitterLogo.png";
import { useHistory, useLocation } from "react-router";
import { patchWithToken, postWithToken } from "../../../utils/request";
import { errorPopup, successPopup } from "../../../utils/popupMsg";
import { addGroup } from "../../../utils/functions";

function TweetStats() {
  const location = useLocation();
  const { state } = location;
  const history=useHistory()

  const [groupName, setGroupName] = useState(state ? state?.item?.name : "");
  const [groupRegion, setGroupRegion] = useState(
    state ? state?.item?.region : ""
  );
  const [groupDescription, setGroupDescription] = useState(
    state ? state?.item?.description : ""
  );
  const [groupUrl, setGroupUrl] = useState(state ? state?.item?.url : "");

  const [groupId, setGroupId] = useState(state ? state?.item?.id : "");


  const handleSubmit = () => {
    if (!groupName || !groupRegion || !groupUrl) {
      errorPopup("Please fill in all required fields.");
      return;
    }
  
    if (state) {
      patchWithToken("facebook/groups", {
        id: groupId,
        name: groupName,
        url: groupUrl,
        region: groupRegion,
        description: groupDescription,
      })
        .then((d) => {
          history.push("/facebook/accounts/groups");
          
          successPopup("Group Updated Successfully!");
        })
        .catch((e) => {
          errorPopup("Failed To Update Group!");
        });
    } else {
      // addGroup(groupName, groupRegion, groupUrl);
      postWithToken("facebook/groups", {
        name: groupName,
        url: groupUrl,
        region: groupRegion,
        description: groupDescription,
      })
        .then((d) => {
          history.push("/facebook/accounts/groups");
          successPopup("Group Added Successfully!");
        })
        .catch((e) => {
          errorPopup("Failed To Add Group!");
        });
    }
    setGroupName("");
    setGroupRegion("");
    setGroupUrl("");
    setGroupDescription("");
  };

  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Accounts / Add Group</h6>

          <div className="d-flex justify-content-between">
            <h2 className="status">Add Group</h2>
            <div className="p-3 d-flex justify-content-end">
              {/* <a href="/instagram/accounts/addgroup">
                <img src={Instagram} className="px-2" />
              </a> */}
              <a href="/twitter/accounts/addgroup">
                <img src={twitter} className="px-2" />
              </a>
            </div>
          </div>

          <HeadNavAccounts />
          <div className="formContainer">
            <h2>Add Group</h2>
            <div className="addGroupForm mt-1">
              <div className="formFlex mr-2">
                <label htmlFor="groupName" className="formLabel">
                <span className="required">*</span>  Group Name
                </label>
                <input
                  type="text"
                  value={groupName}
                  className="inputBox"
                  onChange={(e) => {
                    setGroupName(e.target.value);
                  }}
                />
              </div>
              <div className="formFlex">
                <label htmlFor="groupName" className="formLabel">
                <span className="required">*</span>  Group Region
                </label>
                <input
                  type="text"
                  value={groupRegion}
                  className="inputBox"
                  onChange={(e) => {
                    setGroupRegion(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="textAreaFlex mt-1">
              <label htmlFor="groupDescription" className="formLabel">
                Group Description
              </label>
              <textarea
                name="groupDescription"
                id="groupDescription"
                cols="30"
                rows="10"
                value={groupDescription}
                onChange={(e) => {
                  setGroupDescription(e.target.value);
                }}
              ></textarea>
              <label htmlFor="groupUrl" className="formLabel mt-1">
              <span className="required">*</span>   Group URL
              </label>
              <input
                type="text"
                value={groupUrl}
                className="inputBox"
                onChange={(e) => {
                  setGroupUrl(e.target.value);
                }}
              />
            </div>
            <button
              className="btnColoured mt-2 mb-1 w-250"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetStats;