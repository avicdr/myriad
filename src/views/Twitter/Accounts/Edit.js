import React, { useEffect, useState } from "react";

// import Instagram from '../../../components/Static/Instagram.png';
import Facebook from '../../../components/Static/FacebookLogo.png';
import { useHistory, useLocation } from "react-router";
import { errorPopup, successPopup, warningPopup, infoPopup } from "../../../utils/popupMsg"
import { patchWithToken } from "../../../utils/request";

function EditGroup() {
  const location = useLocation();
  const { state } = location;

  const [groupName, setGroupName] = useState(state ? state?.item?.name : "");
  const [groupRegion, setGroupRegion] = useState(state ? state?.item?.region : "");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupUrl, setGroupUrl] = useState(state ? state?.item?.url : "");
  const [groupReason, setGroupReason] = React.useState("");

  const [groupId, setGroupId] = useState(state ? state?.item?.id : "");

  const history  = useHistory();


  const handleSubmit = () => {
    if (state) {


      patchWithToken("/groups"
        , {
          id: groupId, name: groupName, url: groupUrl,
          region: groupRegion
        } )
        .then((d) => {
          successPopup("Group Updated Successfully!");
          history.push("/twitter/accounts/groups")

        }).catch((e) => {
          errorPopup("Failed To Update Group!");

        })
 

    }
    setGroupName("");
    setGroupRegion("");
    setGroupDescription("")
    setGroupUrl("");
  };

  return (
  
      <div>
        <div>
          <div className="cont">
         
  
            <div className="d-flex justify-content-between">
              <h5 className="status">
              <h6>Home / Accounts / Edit Group </h6>
              </h5>
              <div className="p-3 d-flex justify-content-end">
                {/* <a href="/instagram/accounts/addgroup"><img src={Instagram} className="px-2" /></a> */}
                <a href="/facebook/accounts/addgroup"><img src={Facebook} className="px-2" /></a>
  
              </div>
            </div>
{/*   
            <HeadNavAccounts /> */}
            <div className="formContainer">
              <h2>Edit Group</h2>
              <div className="addGroupForm mt-1">
                <div className="formFlex mr-2">
                  <label htmlFor="groupName" className="formLabel">Group Name</label>
                  <input type="text" value={groupName} className="inputBox" onChange={(e) => {
                    setGroupName(e.target.value)
                  }} />
                </div>
                <div className="formFlex">
                  <label htmlFor="groupName" className="formLabel">Group Region</label>
                  <input type="text" value={groupRegion} className="inputBox" onChange={(e) => {
                    setGroupRegion(e.target.value)
                  }} />
                </div>
              </div>
              <div className="textAreaFlex mt-1">
                <label htmlFor="groupDescription" className="formLabel">Group Description</label>
                <textarea
                  name="groupDescription"
                  id="groupDescription"
                  cols="30"
                  rows="10"
                  value={groupDescription}
                  onChange={(e) => {
                    setGroupDescription(e.target.value)
                  }}></textarea>
                <label htmlFor="groupUrl" className="formLabel mt-1">Group URL</label>
                <input type="text" value={groupUrl} className="inputBox" onChange={(e) => {
                  setGroupUrl(e.target.value)
                }} />
              </div>
              <button className="btnColoured mt-2 mb-1 w-250" 
               onClick={handleSubmit}
              >Submit</button>
            </div>
          </div>
        </div>
      </div>
    );

}

export default EditGroup;