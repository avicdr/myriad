import React from "react";
import HeadNavProfile from "./HeadNavProfile";
import Image from "../../../components/image";
import ProfileDisplay from "./ProfileDisplay";
import RecentTweet from "../../../components/Profile/RecentTweet";
import Search from "../../../components/Static/Search.png";
import Instagram from '../../../components/Static/Instagram.png';
import twitter from '../../../components/Static/TwitterLogo.png';

function SearchProfile() {
  return (
    <div>
      <div className="cont">
        <h6>Home / Facebook / Search Profile</h6>
                                        
      <div className="d-flex justify-content-between"> 
      <h2 className="status">Search Profile</h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/instagram/search/profile"><img src={Instagram} className="px-2" /></a>
          <a href="/twitter/search/profile"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

        
        <HeadNavProfile />
        <div className="filterBox">
          <div className="searchHash">
            <input
              type="text"
              className="search"
              placeholder="Search Username"
            />
            <Image
              src={Search}
              alt="none"
            />
          </div>
          {/* <select name="region" id="regionName" className="dropDown">
              <option value="none">Select Groups</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select name="userType" id="userType" className="dropDown">
              <option value="none">Select by Users</option>
              <option value="dev">Developer</option>
              <option value="normla">Normal</option>
            </select> */}
            <button className="facebookbtnColoured">Go</button>
        </div>
        <div className="profileDisplay bg-white border-circle">
          <ProfileDisplay />
        </div>
        <RecentTweet/>
      </div>
    </div>
  );
}

export default SearchProfile;
