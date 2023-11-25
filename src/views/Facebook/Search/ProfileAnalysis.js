import React from "react";
import Image from "../../../components/image";
import HeadNavProfile from "./HeadNavProfile";
import ProfileCard from "../../../components/ProfileAnalytics/ProfileCard";
import TweetAnalysis from "../../../components/ProfileAnalytics/TweetAnalysis";
import UserMostRetweeted from "../../../components/ProfileAnalytics/UserMostRetweeted";
import Followers from "../../../components/ProfileAnalytics/Followers";
import UserActivity from "../../../components/Charts/UserActivity";
import Search from "../../../components/Static/Search.png";
import Instagram from '../../../components/Static/Instagram.png';
import twitter from '../../../components/Static/TwitterLogo.png';

function ProfileAnalysis() {
  return (
    <>
      <div className="cont">
        <h6>Home / Facebook / Search Profile / Analysis</h6>
                                
      <div className="d-flex justify-content-between"> 
      <h2 className="status mb-4 pb-4">Profile Analysis</h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/instagram/search/analysis"><img src={Instagram} className="px-2" /></a>
          <a href="/twitter/search/analysis"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

       
        <HeadNavProfile />
        <div className="d-flex p-3 justify-content-between bg-white mt-3 mb-4 border-circle">
          <h2>#BJP</h2>
          <div className="searchHash">
            <Image
              src={Search}
              alt="none"
            />
            <input
              type="text"
              className="search"
              placeholder="Enter hashtag/keyword"
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="w-50">
            <ProfileCard
              profilePic="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              userId="johndoe123"
              userName="John Doe"
              tweets="51,411"
              following="154"
              followers="14,411"
              listed="50"
              joinDate="June 4, 2011"
              asUser="#1418581"
              bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolore ad similique ea maiores voluptatibus enim quaerat reprehenderit quae vero!"
            />
            <TweetAnalysis
              tweets="1000"
              perDay="4"
              retweets="100"
              mentions="101"
              replies="1021"
              links="1321"
            />
            <UserMostRetweeted />
          </div>
          <div className="w-50">
            <div
              className="mr-4 ml-4 p-4 bg-white border-circle"
              style={{ height: "min-content" }}
            >
              <h3 className="mb-4 mt-2">Analyze Facebook’s profile of</h3>
              <div className="searchHash">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/7689/7689182.png"
                  alt="none"
                />
                <input
                  type="text"
                  className="search"
                  placeholder="Search Profile"
                />
              </div>
            </div>
            <Followers />
          </div>
        </div>
        <div className="bg-white p-4 border-circle">
          <UserActivity />
        </div>
      </div>
    </>
  );
}

export default ProfileAnalysis;
