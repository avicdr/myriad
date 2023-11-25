import React from "react";
import Image from "../../../components/image";
import FaceProfileDisplay from "../../../components/Profile/FaceProfileDisplay";
import RecentTweet from "../../../components/Profile/RecentTweet";
import HeadNavActions from "./HeadNavActions";
import Search from "../../../components/Static/Search.png"
import RecentPost from "../../../components/Profile/RecentPost";
import Instagram from '../../../components/Static/Instagram.png';
import twitter from '../../../components/Static/TwitterLogo.png';

function Unfollow() {
  return (
    <div>
      <div className="cont">
        <h6>Home / Facebook / Follow</h6>
                                             
      <div className="d-flex justify-content-between"> 
      <h2 className="status">Follow</h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/instagram/actions/follow"><img src={Instagram} className="px-2" /></a>
          <a href="/twitter/actions/follow"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

        
        <HeadNavActions />
        <div className="filterBox">
          <div className="searchHash">
            <input
              type="text"
              className="search"
              placeholder="Search Useraname"
            />
            <Image
              src={Search}
              alt="none"
            />
          </div>
          <select name="region" id="regionName" className="dropDown">
            <option value="none">Select Groups</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select name="userType" id="userType" className="dropDown">
            <option value="none">Select by Users</option>
            <option value="dev">Developer</option>
            <option value="normla">Normal</option>
          </select>
          <button className="facebookbtnColoured">Go</button>
        </div>
        <FaceProfileDisplay follow="true" />
        <RecentPost/>
      </div>
    </div>
  );
}

export default Unfollow;
