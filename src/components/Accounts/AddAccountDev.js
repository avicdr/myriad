import React, { useState } from "react";
import { postDevData } from "../../utils/functions";

function AddAccountDev() {
  const [userName, setUserName] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [groupName, setGroupName] = useState("");
  const [secretToken, setSecretToken] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [bearerToken, setBearerToken] = useState("");
  const [groupId, setGroupId] = useState("");
  const userType = "dev"
  const handleGroupChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    if (selectedOption) {
      setGroupName(selectedOption.text);
      setGroupId(selectedOption.value);
    }
  };
  const handleDevSubmit = async () => {
    const name = userName;
    const group_id = groupId;
    const group_name = groupName;
    const access_token = accessToken;
    const access_key = accessKey;
    const secret_token = secretToken;
    const secret_key = secretKey;
    const bearer_token = bearerToken;
    const account_type = userType;
    await postDevData(
      name,
      group_id,
      group_name,
      access_token,
      access_key,
      secret_token,
      secret_key,
      bearer_token,
      account_type
    );
  };
  return (
    <div>
      <div className="addGroupForm mt-1 developer-form">
        <div className="formFlex mr-2 w-100 g-10">
          <label htmlFor="groupName" className="formLabel">
            Group{" "}
          </label>
          <select
            name="region"
            id="groupNameDev"
            className="dropDown w-100"
            onChange={handleGroupChange}
          >
            <option value="none">Select Group</option>
            {/* populated with js */}
          </select>
          <label htmlFor="userName" className="formLabel">
            User Name
          </label>
          <input
            type="text"
            className="inputBox"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <label htmlFor="accessToken" className="formLabel">
            Access Token
          </label>
          <input
            type="text"
            className="inputBox"
            onChange={(e) => {
              setAccessToken(e.target.value);
            }}
          />
          <label htmlFor="accessKey" className="formLabel">
            Access Key
          </label>
          <input
            type="text"
            className="inputBox"
            onChange={(e) => {
              setAccessKey(e.target.value);
            }}
          />
          <label htmlFor="groupName" className="formLabel">
            Group Name
          </label>
          <input
            type="text"
            className="inputBox"
            value={groupName}
            readOnly={true}
          />
          <label htmlFor="secretToken" className="formLabel">
            Secret Token
          </label>
          <input
            type="text"
            className="inputBox"
            onChange={(e) => {
              setSecretToken(e.target.value);
            }}
          />
          <label htmlFor="secretKey" className="formLabel">
            Secret Key
          </label>
          <input
            type="text"
            className="inputBox"
            onChange={(e) => {
              setSecretKey(e.target.value);
            }}
          />
          <label htmlFor="bearerToken" className="formLabel">
            Bearer Token
          </label>
          <input
            type="text"
            className="inputBox"
            onChange={(e) => {
              setBearerToken(e.target.value);
            }}
          />
          <button
            className="btnColoured mt-2 mb-1 w-250"
            onClick={handleDevSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAccountDev;
