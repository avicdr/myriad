import React, { useState, useEffect } from "react";
import HeadNavProfile from "./HeadNavProfile";
import Image from "../../../components/image";
import ProfileDisplay from "../../../components/Profile/ProfileDisplay";
import RecentTweet from "../../../components/Profile/RecentTweet";
import Search from "../../../components/Static/Search.png";
import Instagram from "../../../components/Static/Instagram.png";
import Facebook from "../../../components/Static/FacebookLogo.png";
import {
  PopulateUserSelect,
  PopulateGroupSelect,
} from "../../../components/Accounts/GroupAndUserSelect";
import { getWithToken } from "../../../utils/request";

function SearchProfile() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState("");


  const changeSearchQuery = () => {
    setSearchQuery(searchData);
    // setSearchData("");
  };



  return (
    <div>
      <div className="cont">
        <h6>Home / Twitter / Search Profile</h6>
        <div className="d-flex justify-content-between">
          <h2 className="status">Search Profile</h2>
          <div className="p-3 d-flex justify-content-end">
            <a href="/instagram/search/profile">
              <img src={Instagram} className="px-2" />
            </a>
            <a href="/facebook/search/profile">
              <img src={Facebook} className="px-2" />
            </a>
          </div>
        </div>
        <HeadNavProfile />
        <div className="filterBox mb-4">
          <div  className="row">
          <div className="ml-4 searchHash">
            <input
              type="text"
              className="search"
              id="search_input"
              placeholder="Search Username"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          
          </div>
    
          <button className="btnColoured" onClick={changeSearchQuery}>
            Go
          </button>
          </div>
        </div>
        {searchQuery && (
          <>
            <div className="profileDisplay bg-white border-circle">
              <ProfileDisplay searchQuery={searchQuery} />
            </div>
            <RecentTweet searchQuery={searchQuery} />
          </>
        )}
      </div>
    </div>
  );
}

export default SearchProfile;
