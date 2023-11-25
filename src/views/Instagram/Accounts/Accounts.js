import React from "react";
import HeadNavAccounts from "./HeadNavAccounts";
import Facebook from '../../../components/Static/FacebookLogo.png';
import twitter from '../../../components/Static/TwitterLogo.png';

function Accounts() {
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Accounts / Accounts</h6>

          <div className="d-flex justify-content-between"> 
          <h2 className="status">Accounts</h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/facebook/accounts/accounts"><img src={Facebook} className="px-2" /></a>
          <a href="/twitter/accounts/accounts"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

          
          <HeadNavAccounts />
          <div className="filterBox justify-center">
            <select
              name="region"
              id="regionName"
              className="dropDown"
              defaultValue={"Developer"}
            >
              <option value="none">Developer</option>
              <option value="saab">Normal</option>
            </select>
            <select name="userType" id="userType" className="dropDown">
              <option value="none">Accounts By Group</option>
              <option value="dev">Developer</option>
              <option value="normla">Normal</option>
            </select>
            <button className="instragrambtnColoured">Go</button>
          </div>
          <div className="details w-100">
            <div className="detailItem w-100 justify-content-between">
              <div className="index item w-16">#</div>
              <div className="name item w-16">GROUP NAME</div>
              <div className="tweet item w-16">GROUP DESCRIPTION</div>
              <div className="location item w-16">GROUP REGION</div>
              <div className="timeStamp item w-16">TOTAL ACCOUNTS</div>
              <div className="actions item w-16">ACTIONS</div>
            </div>
            <div className="detailItemStats justify-content-between">
              <div className="index item w-16">1</div>
              <div className="name item w-16">Horrow Suranjan</div>
              <div className="tweet item w-16">
                {"Andrew Tate arrested by Romanian authorities in th ..."
                  .substring(0, 50)
                  .concat("...")}
              </div>
              <div className="location item w-16">Mumbai</div>
              <div className="timeStamp item w-16">5</div>
              <div className="actions item w-16">
                <img
                  src="https://static.thenounproject.com/png/3391373-200.png"
                  alt="none"
                />
                <img
                  src="https://img.icons8.com/material-rounded/256/trash.png"
                  alt="none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
