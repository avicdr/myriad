import React from "react";
import HeadNavAccounts from "./HeadNavAccounts";
import Facebook from '../../../components/Static/FacebookLogo.png';
import twitter from '../../../components/Static/TwitterLogo.png';

function TweetStats() {
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Accounts / Add Account</h6>
          
          <div className="d-flex justify-content-between"> 
          <h2 className="status">
            Add Account
          </h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/facebook/accounts/addaccount"><img src={Facebook} className="px-2" /></a>
          <a href="/twitter/accounts/addaccount"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

          
          <HeadNavAccounts />
          <div className="filterBox justify-content-end">
            <select name="userType" id="userType" className="dropDown">
              <option value="none"></option>
              <option value="dev">Developer</option>
              <option value="normla">Normal</option>
            </select>
            <button className="instragrambtnColoured">Go</button>
          </div>
          <div className="formContainer">
            <h2>Add Account</h2>
            <div className="addGroupForm mt-1">
              {/* <div className="formFlex mr-2 w-100 g-10">
                <label htmlFor="groupName" className="formLabel">
                  Group{" "}
                </label>
                <select
                  name="region"
                  id="regionName"
                  className="dropDown w-100"
                  defaultValue={""}
                >
                  <option value="none"></option>
                  <option value="saab">User</option>
                </select>
                <label htmlFor="userName" className="formLabel">
                  User Name
                </label>
                <input type="text" className="inputBox" />
                <label htmlFor="accessToken" className="formLabel">
                  Access Token
                </label>
                <input type="text" className="inputBox" />
                <label htmlFor="accessKey" className="formLabel">
                  Access Key
                </label>
                <input type="text" className="inputBox" />
                <label htmlFor="groupName" className="formLabel">
                  Group Name
                </label>
                <input type="text" className="inputBox" />
                <label htmlFor="secretToken" className="formLabel">
                  Secret Token
                </label>
                <input type="text" className="inputBox" />
                <label htmlFor="secretKey" className="formLabel">
                  Secret Key
                </label>
                <input type="text" className="inputBox" />
                <label htmlFor="secretToken" className="formLabel">
                  Secret Token
                </label>
                <input type="text" className="inputBox" />
                <label htmlFor="bearerToken" className="formLabel">
                  Bearer Token
                </label>
                <input type="text" className="inputBox" />
              </div>
            </div>
            <button className="instragrambtnColoured mt-2 mb-1 w-250">Submit</button>
          </div> */}
          <div className="formFlex mr-2 w-100 g-10">
                <label htmlFor="groupName" className="formLabel">
                  Group{" "}
                </label>
                <select
                  name="region"
                  id="regionName"
                  className="dropDown w-100"
                  defaultValue={""}
                >
                  <option value="none"></option>
                  <option value="saab">User</option>
                </select>
                <label htmlFor="name" className="formLabel">
                  Name
                </label>
                <input type="text" className="inputBox" />
                <label htmlFor="userName" className="formLabel">
                  UserName
                </label>
                <input type="text" className="inputBox" />
                <label htmlFor="mail" className="formLabel">
                  Email
                </label>
                <input type="text" className="inputBox" />
                <label htmlFor="password" className="formLabel">
                  Password
                </label>
                <input type="text" className="inputBox" />
                <label htmlFor="mobileNumber" className="formLabel">
                  Mobile Number
                </label>
                <input type="text" className="inputBox" />
              </div>
            </div>
            <button className="instragrambtnColoured mt-3 mb-1">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetStats;
