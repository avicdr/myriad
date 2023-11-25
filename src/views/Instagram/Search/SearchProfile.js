import React from "react";
import HeadNavProfile from "./HeadNavProfile";
import Image from "../../../components/image";
import ProfileDisplay from "./ProfileDisplay";
import RecentTweet from "../../../components/Profile/RecentTweet";
import Search from "../../../components/Static/Search.png"
// import InstaProfileDisplay from "../../../components/Profile/InstaProfileDisplay"
import RecentPost from "../../../components/Profile/RecentPost";
import Facebook from '../../../components/Static/FacebookLogo.png';
import twitter from '../../../components/Static/TwitterLogo.png';


function SearchProfile() {
  return (
    <div>
      <div className="cont">
        <h6>Home / Instagram / Search Profile</h6>

        <div className="d-flex justify-content-between"> 
        <h2 className="status">Search Profile</h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/facebook/search/profile"><img src={Facebook} className="px-2" /></a>
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
            <button className="instragrambtnColoured">Go</button>
        </div>
        <div className="profileDisplay bg-white border-circle">
          <ProfileDisplay />
        </div>
      
      </div>
    </div>
  );
}

export default SearchProfile;
