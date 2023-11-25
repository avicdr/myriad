import React from "react";
import HeadNavAccounts from "./HeadNavAccounts";
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
                <input type="text" className="inputBox"/>
              </div>
              <div className="formFlex">
                <label htmlFor="groupName" className="formLabel">Group Name</label>
                <input type="text" className="inputBox"/>
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
              <input type="text" className="inputBox"/>
            </div>
            <button className="instragrambtnColoured mt-3 mb-1">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetStats;
