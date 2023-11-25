import React from "react";
import GenderPie from "../../../components/Charts/GenderPie";
import TweetSentiments from "../../../components/Charts/TweetSentiments";
import Image from "../../../components/image";
import HashTags from "../../../components/Reports/HashTags";
import Mentions from "../../../components/Reports/Mentions";
import Search from "../../../components/Static/Search.png";
import Instagram from '../../../components/Static/Instagram.png';
import twitter from '../../../components/Static/TwitterLogo.png';


function Reports() {
  return (
    <div>
      <div className="cont">
        <h6>Home / Facebook / Repots</h6>
                                                      
      <div className="d-flex justify-content-between"> 
      <h2 className="status mb-4 pb-4">Reports and Analysis</h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/instagram/reports"><img src={Instagram} className="px-2" /></a>
          <a href="/twitter/reports"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

        
        <div className="d-flex bs p-3 justify-content-end bg-white mt-3 mb-4 border-circle">
          <div className="searchHash">
            <Image src={Search} alt="none" />
            <input
              type="text"
              className="search"
              placeholder="Enter hashtag/keyword"
            />
          </div>
        </div>
        <div className="d-flex">
          <HashTags tableTitle="Positive HashTags" />
          <HashTags tableTitle="Negative HashTags" />
        </div>
        <div className="d-flex">
          <Mentions tableTitle="Positive Mentions" />
          <Mentions tableTitle="Negative Mentions" />
        </div>
        <div className="d-flex">
          <HashTags tableTitle="Neutral HashTags" />
          <div className="bg-white p-2 border-circle w-fit-content d-flex h-fit-content justify-content-evenly">
            <div className="d-flex flex-column">
              <h6 className="pt-3">Posts Sentiments</h6>
              <div className="mt-2">
                <TweetSentiments legendShow={true}/>
              </div>
            </div>
            <div className="d-flex flex-column">
              <h6 className="pt-3">Gender</h6>
              <div className="mt-2">
                <GenderPie  legendShow={true}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
