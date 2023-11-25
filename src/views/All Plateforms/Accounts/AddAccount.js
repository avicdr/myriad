import React from "react";
import HeadNavAccounts from "./HeadNavAccounts";
import Image from "../../../components/image"
import Instagram from '../../../components/Static/Instagram.png';
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
              <a href="/instagram/accounts/addaccount"><img src={Instagram} className="px-2" /></a>
              <a href="/facebook/accounts/addaccount"><img src={Facebook} className="px-2" /></a>
              <a href="/twitter/accounts/addaccount"><img src={twitter} className="px-2" /></a>
            </div>
          </div>
          <HeadNavAccounts />
          <div className="filterBox justify-content-end">
         
          </div>
          <div className="formContainer">
            <h2>Add Account</h2>
            <div className="addGroupForm mt-1">
            
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
            <div className="my-2 d-flex justify-content-between">
              <button className="facebookbtnColoured mt-2 mb-1 ">Submit</button>
              <div className="d-flex justify-content-end">
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="translate"
                    id="translate"
                  // className="mlr-1"
                  />
                  <Image src={Instagram} className="p-2 my-2 iconimg" />
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="translate"
                    id="translate"
                  // className="mlr-1"
                  />
                  <Image src={Facebook} className="p-1 my-2  iconimg" />
                </div>
                <div className="p-1">
                  <input
                    type="checkbox"
                    name="translate"
                    id="translate"
                  // className="mlr-1"
                  />
                  <Image src={twitter} className="p-1 my-2  iconimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetStats;
