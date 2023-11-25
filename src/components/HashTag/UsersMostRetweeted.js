import React from "react";
import Image from "../image";
import MenuIcon from "../Static/Dots.png";
import Group from "../Static/Group.png";

function UsersMostRetweeted() {
  return (
    <>
      <div className="d-flex mw-25 m-3">
        <div className="d-flex flex-column p-3 bg-white w-100 border-circle">
          <div className="p-3 mb-3 d-flex border-circle bg-pinkish w-100">
            <h5 className="bold">Users Most Retweeted</h5>
          </div>
          <div className="tagItems">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Image src={Group} alt="" style={{"height":"50px"}}/>
                <div className="leftName">@johndoe123</div>
              </div>
              <div>13</div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Image src={Group} alt="" style={{"height":"50px"}}/>
                <div className="leftName">@johndoe123</div>
              </div>
              <div>13</div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Image src={Group} alt="" style={{"height":"50px"}}/>
                <div className="leftName">@johndoe123</div>
              </div>
              <div>13</div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Image src={Group} alt="" style={{"height":"50px"}}/>
                <div className="leftName">@johndoe123</div>
              </div>
              <div>13</div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Image src={Group} alt="" style={{"height":"50px"}}/>
                <div className="leftName">@johndoe123</div>
              </div>
              <div>13</div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Image src={Group} alt="" style={{"height":"50px"}}/>
                <div className="leftName">@johndoe123</div>
              </div>
              <div>13</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersMostRetweeted;
