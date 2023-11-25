import React, { useState } from "react";
import HeadNavAccounts from "./HeadNavAccounts";
import { addGroup } from "../../../utils/functions";
// import Instagram from '../../../components/Static/Instagram.png';
import Facebook from '../../../components/Static/FacebookLogo.png';
import { useHistory, useLocation } from "react-router";
function AddGroup() {
  const [groupName, setGroupName] = useState("");
  const [groupRegion, setGroupRegion] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupUrl, setGroupUrl] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const history = useHistory();

  const validateForm = () => {
    let errors = {};

    if (!groupName) {
      errors.groupName = " required ";
    }

    if (!groupRegion) {
      errors.groupRegion = "required ";
    }

    if (!groupUrl) {
      errors.groupUrl = "required ";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(groupUrl)) {
      errors.groupUrl = "Group URL is invalid";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      addGroup(groupName, groupRegion, groupUrl);
      setGroupName("");
      setGroupRegion("");
      setGroupDescription("");
      setGroupUrl("");
      setTimeout(() => {
        history.push("/twitter/accounts/groups")
      }, 1000);
    }
  };

  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Accounts / Add Group</h6>

          <div className="d-flex justify-content-between">
            <h2 className="status">
              Add Group
            </h2>
            <div className="p-3 d-flex justify-content-end">
              {/* <a href="/instagram/accounts/addgroup"><img src={Instagram} className="px-2" /></a> */}
              <a href="/facebook/accounts/addgroup"><img src={Facebook} className="px-2" /></a>

            </div>
          </div>

          <HeadNavAccounts />
          <div className="formContainer">
            <h2>Add Group</h2>
            <div className="addGroupForm mt-1">
              <div className="formFlex mr-2">
                <label htmlFor="groupName" className="formLabel">
                  <span className="required">*</span> Group Name
                  {formErrors.groupName && <span className="error">{formErrors.groupName}</span>}
                </label>
                <input type="text" value={groupName} className="inputBox"
                  onChange={(e) => {
                    setGroupName(e.target.value)
                  }} />
              </div>
              <div className="formFlex">
                <label htmlFor="groupRegion" className="formLabel">
                  <span className="required">*</span> Group Region
                  {formErrors.groupRegion && <span className="error">{formErrors.groupRegion}</span>}
                </label>

                <input type="text" value={groupRegion} className="inputBox"
                  onChange={(e) => {
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
                }}>
              </textarea>
              {/* {formErrors.groupDescription && <span className="error">{formErrors.groupDescription}</span>} */}
              <label htmlFor="groupUrl" className="formLabel mt-1">
              <span className="required">*</span> Group URL

               
                {formErrors.groupUrl && <span className="error">{formErrors.groupUrl}</span>}
              </label>
              <input type="text" value={groupUrl} className="inputBox"
                onChange={(e) => {
                  setGroupUrl(e.target.value)
                }} />
            </div>
            <button className="btnColoured mt-2 mb-1 w-250" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGroup;


