import React, { useEffect, useState } from "react";
import TopIcons from "./TopIcons";
import CustomDatePicker from "../../../components/CustomDatePicker";
import { PopulateGroupSelect, PopulateUserSelect } from "../../../components/Accounts/GroupAndUserSelect";
import ActiveUsers from "./ActiveUser";
import TopLanguages from "./Toplanauge";
import GenderPie from "./GenderPie";
import TweetSentiments from "./TweetSentiments";
import TrendingHashTagBar from "./TrendingHashTagBar";
import TotalUserActivity from "./TotalUserActivity";
import HashtagKeyword from "./HashtagKeyword";
import { getTwitterAnalytics, getTopHashtags } from "../../../utils/functions";
import Facebook from '../../../components/Static/FacebookLogo.png';
import instagram from '../../../components/Static/Instagram.png';
import Cloud from "../../../components/Wordcloud/Cloud";
import twiiter from "../../../components/Static/TwitterLogo.png"

function Dashboard() {
  const [totalTweets, setTotalTweets] = useState(30);
  const [totalMediaTweets, setTotalMediaTweets] = useState(30);
  const [totalRetweets, setTotalRetweets] = useState(30);
  const [totalLikes, setTotalLikes] = useState(30);
  const [totalComments, setTotalComments] = useState(30);
  const [totalUserActivityKey, setTotalUserActivityKey] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Your functions to run after component mounts
    getTopHashtags(setData);
    getTwitterAnalytics(setTotalTweets, setTotalRetweets, setTotalLikes, setTotalComments, setTotalMediaTweets);
  }, []);

  useEffect(() => {
    setTotalUserActivityKey(key => key + 1);
  }, [totalTweets])


  const [searchQuery, setSearchQuery] = useState("");


  const [selectedGroups, setSelectedGroups] = useState([]);

  const handleGroupChange = (selectedOptions) => {
    setSelectedGroups(selectedOptions.map((option) => option.value));
  };

  return (
    <div>
      <div className="cont">
        <div className="d-flex justify-content-between">
          <h2 className="status mb-3 pb-4 font-poppins">Dashboard</h2>
          <div className="p-3 d-flex justify-content-end">
            <a href="/facebook/dashboard"><img src={Facebook} className="px-2" /></a>
            <a href="/"><img src={twiiter} className="px-2" /></a>
          </div>
        </div>

        <TopIcons />
        <div className="d-flex bs p-3 justify-content-betwe en bg-white mt-3 mb-4 border-circle">
          <PopulateGroupSelect onGroupChange={handleGroupChange} />
          <PopulateUserSelect groupIds={selectedGroups} />
          <CustomDatePicker />
        </div>
      </div>

      <div className="row d-flex">
        <div className="col">
          <div className="mx-0 htl_2" >
            <h4 className="bold p-3 card-header-insta">Active Users By Post</h4>
            <div className="card-shadow  mx-0 " style={{ height: "300px" }}>
              <div className="details w-100 overflow-scroll">
                <ActiveUsers type="replies" />

              </div>
            </div>
          </div>

        </div>
        <div className="col-8">
          <div className="mx-0 htl_2" >
            <h4 className="bold p-3 card-header-insta">Hashtag / Keyword</h4>
            <div className="card-shadow  hash " style={{ height: "300px" }}>
              <div className="details w-100 overflow-scroll">
                <HashtagKeyword />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="replies row d-flex">
        <div className="col-4">
          <div className="mx-0 htl_2" >
            <h4 className="bold p-3 card-header-insta">Active Users By Post</h4>
            <div className="card-shadow  mx-0 " style={{ height: "300px" }}>
              <div className="details w-100 overflow-scroll">
                <ActiveUsers type="tweet" />


              </div>
            </div>
          </div>

        </div>
        <div className="col-8">
          <div className="mx-0 htl_2" >
            <h4 className="bold p-3 card-header-insta">Total User Activity</h4>
            <div className="card-shadow  mx-0 " style={{ height: "300px" }}>
              <div className="d-flex bg-white  m-3 border-circle w-100">
                <div className="d-flex flex-column w-100">

                  <TotalUserActivity tweets={totalTweets} retweets={totalRetweets} likes={totalLikes} comments={totalComments} key={totalUserActivityKey} legendShow={true} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="replies row d-flex">
        <div className="col">

          <div className="mx-0 htl_2" >
            <h4 className="bold p-3 card-header-insta">Top Languages</h4>
            <div className="card-shadow  mx-0 " style={{ height: "300px" }}>
              <div className="details w-100 overflow-scroll">
                <TopLanguages />


              </div>
            </div>
          </div>

        </div>
        <div className="col">
          <div className="mx-0 htl_2" >
            <h4 className="bold p-3 card-header-insta">Active Users By Share</h4>
            <div className="card-shadow  mx-0 " style={{ height: "300px" }}>
              <div className="details w-100 overflow-scroll">
                <ActiveUsers type="retweets" />

              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="mx-0 htl_2" >
            <h4 className="bold p-3 card-header-insta">Active Users By Likes</h4>
            <div className="card-shadow  mx-0 " style={{ height: "300px" }}>
              <div className="details w-100 overflow-scroll">
                <ActiveUsers type="likes" />


              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="replies row d-flex justify-content-around">
      <div className="col-6" >
            <h4 className="bold p-3 card-header-insta">Tweet Sentiments</h4>
            <div className="card-shadow  mx-0 " style={{ height: "400px" }}>
            <div className="col bg-white p-2 border-circle w-fit-content d-flex h-fit-content">
          <div className="d-flex flex-column">
            <h6 className="pt-3 text-center">Posts Sentiments</h6>
            <div className="mt-2">
              <TweetSentiments legendShow={true} />
            </div>
          </div>
          <div className="d-flex flex-column">
            <h6 className="pt-3 text-center" >Gender</h6>
            <div className="mt-2">
              <GenderPie legendShow={true} />
            </div>
          </div>
        </div>
            </div>
          </div>
     
        <div className="col-6">
          <div className="d-flex flex-column">
          <div className="mx-0 htl_2" >
            <h4 className="bold p-3 card-header-insta">World Cloud</h4>
            <div className="card-shadow  mx-0 " style={{ height: "400px" }}>
              <div className="details w-100 overflow-scroll mt-5">
              <Cloud />


              </div>
            </div>
          </div>
       
          
          </div>
        </div>
      </div>
      <div className="mt-3 row">
        <div className="col">

       
            <h4 className="bold p-3 card-header-insta">Trending Hashtag Bar Chart</h4>
            <div className="card-shadow  mx-0 ">
              <div className="details w-100 overflow-scroll">
                {/* <TopLanguages /> */}
                <TrendingHashTagBar data={data} />

              
            </div>
          </div>

        </div>
      </div>

    </div>

  );
}

export default Dashboard;