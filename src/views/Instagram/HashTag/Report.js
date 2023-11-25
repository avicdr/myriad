import React from "react";
import GenderPie from "../../../components/Charts/GenderPie";
import TotalTweets from "../../../components/Charts/TotalTweets";
import TweetSentiments from "../../../components/Charts/TweetSentiments";
import TweetsFreq from "../../../components/Charts/TweetsFreq";
import PopularTweets from "../../../components/HashTag/PopularTweets";
import TrendingTags from "../../../components/HashTag/OtherTrendingTags";
import Image from "../../../components/image";
import HeadNavHashTag from "./HeadNavHashTag";
import TrendingMentions from "../../../components/HashTag/TrendingMentions";
import Organizations from "../../../components/HashTag/Organizations";
import TopTenEmails from "../../../components/HashTag/TopTenEmails";
import UsersMostRetweeted from "../../../components/HashTag/UsersMostRetweeted";
import TopUrls from "../../../components/HashTag/TopUrls";
import Search from "../../../components/Static/Search.png";
import Facebook from '../../../components/Static/FacebookLogo.png';
import twitter from '../../../components/Static/TwitterLogo.png';

function Report() {
  return (
    <div>
      <div className="cont">
        <h6>Home / Instagram / Hashtag Analysis / Hashtag Report</h6>

        <div className="d-flex justify-content-between"> 
        <h2 className="status mb-4 pb-4">Hashtag Report</h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/facebook/analysis/reports"><img src={Facebook} className="px-2" /></a>
          <a href="/twitter/analysis/reports"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

        
        <HeadNavHashTag />
        <div className="d-flex bs p-3 justify-content-between bg-white mt-3 mb-4 border-circle">
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
          <div className="d-flex flex-column m-3 w-60">
            <div className="bg-white p-2 m-2 border-circle w-100">
              <TotalTweets />
            </div>
            <div className="bg-white p-2 m-2 border-circle w-100">
              <div className="m-2 p-3 d-flex border-circle bg-pinkish">
                <h4 className="bold">Posts Frequency</h4>
              </div>
              <TweetsFreq />
            </div>
          </div>
          <div className="d-flex flex-column ml-2 w-40">
            <div className="bg-white p-2 border-circle w-100 d-flex h-fit-content">
              <div className="d-flex flex-column">
                <h6 className="pt-3">Posts Sentiments</h6>
                <div className="mt-2">
                  <TweetSentiments legendShow={false}/>
                </div>
              </div>
              <div className="d-flex flex-column">
                <h6 className="pt-3">Gender</h6>
                <div className="mt-2">
                  <GenderPie legendShow={false}/>
                </div>
              </div>
            </div>
            <PopularTweets />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <TrendingTags />
          <TrendingMentions />
          <Organizations />
          <TopTenEmails />
        </div>
        <div className="d-flex">
          <UsersMostRetweeted />
          <TopUrls />
        </div>
      </div>
    </div>
  );
}

export default Report;
