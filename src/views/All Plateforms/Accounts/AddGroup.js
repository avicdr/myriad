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
          <h6>Home / Accounts / Add Group</h6>
          <div className="d-flex justify-content-between">
         <h2 className="status">
           Add Group 
            </h2>
            <div className="p-3 d-flex justify-content-end">
              <a href="/instagram/accounts/addgroup"><img src={Instagram} className="px-2" /></a>
              <a href="/facebook/accounts/addgroup"><img src={Facebook} className="px-2" /></a>
              <a href="/twitter/accounts/addgroup"><img src={twitter} className="px-2" /></a>
            </div>
          </div>
          <HeadNavAccounts />
          <div className="formContainer">
            <h2>Add Group</h2>
            <div className="addGroupForm mt-1">
              <div className="formFlex mr-2">
                <label htmlFor="groupName" className="formLabel">Group Name</label>
                <input type="text" className="inputBox" />
              </div>
              <div className="formFlex">
                <label htmlFor="groupName" className="formLabel">Group Name</label>
                <input type="text" className="inputBox" />
              </div>
            </div>
            <div className="textAreaFlex mt-1">
              <label htmlFor="groupDescription" className="formLabel">Group Description</label>
              <textarea
                name="groupDescription"
                id="groupDescription"
                cols="30"
                rows="10"
              ></textarea>
              <label htmlFor="groupUrl" className="formLabel mt-1">Group URL</label>
              <input type="text" className="inputBox" />
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
