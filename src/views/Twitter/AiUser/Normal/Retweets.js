import React, { useEffect, useState } from "react";
import HeadNav from "./HeadNav";
import Search from "../../../../components/Static/Search.png";
import RecentTweet from "../../../../components/Profile/RecentTweet";
import Instagram from "../../../../components/Static/Instagram.png";
import Facebook from "../../../../components/Static/FacebookLogo.png";
import { PopulateGroupSelect, PopulateUserSelect } from "../../../../components/Accounts/GroupAndUserSelect";

function Retweets() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroups, setSelectedGroups] = useState([]);

  const handleGroupChange = (selectedOptions) => {
    setSelectedGroups(selectedOptions.map((option) => option.value));
  };
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / AI Account / Retweets & Likes</h6>

          <div className="d-flex justify-content-between">
            <h2 className="status">Retweets & Likes</h2>
            <div className="p-3 d-flex justify-content-end">
              <a href="/instagram/Aiuser/share">
                <img src={Instagram} className="px-2" />
              </a>
              <a href="/facebook/Aiuser/share">
                <img src={Facebook} className="px-2" />
              </a>
            </div>
          </div>

          <HeadNav />
          <div className="filterBox">
            <div className="searchHash">
              <input
                type="text"
                className="search"
                placeholder="Search..."
                id="search_input"
              />
              <span
                onClick={()=>{setSearchQuery(
                  document.getElementById("search_input").value
                )}}
              >
                <img src={Search} alt="" />
              </span>
            </div>
            <PopulateGroupSelect onGroupChange={handleGroupChange} />
            <PopulateUserSelect groupIds={selectedGroups} />
            <div className="my-1 mx-1 d-flex ">
              <input
                type="radio"
                id="like"
                name="like_retweet"
                value="like"
                className="radio"
              />
              <label htmlFor="like" className="radioLabel">
                Like
              </label>
              <input
                type="radio"
                id="retweet"
                name="like_retweet"
                value="retweet"
                className="radio"
              />
              <label htmlFor="retweet" className="radioLabel">
                Retweet
              </label>
            </div>
            <button className="btnColoured">Go</button>
          </div>
          <h3>Recent Tweets</h3>
          <div className="details w-100">
            <div className="detailItem justify-content-between">
              <div className="index item">#</div>
              <div className="name item w-20">Group</div>
              <div className="tweet item w-20">Name</div>
              <div className="location item w-20">Username</div>
              <div className="tweetType item w-20">Email</div>
              {/* <div className="tweetStatus item">STATUS</div> */}
              {/* <div className="timeStamp item">TIME STAMP</div> */}
              <div className="actions item">ACTIONS</div>
            </div>
            <div className="detailItemStats justify-content-between">
              <div className="index item">1</div>
              <div className="name item w-20">Group</div>
              <div className="text-center item w-20">Horrow Suranjan</div>
              <div className="location item w-20">@HorrowSuranjan99</div>
              <div className="tweetType item w-20">horrow@Suranjan99.com</div>
              {/* <div className="tweetStatus item">Success</div> */}
              {/* <div className="timeStamp item">30/12/2022, 16:34</div> */}
              <div className="actions item">View</div>
            </div>
            <div className="stats">
              <h4>Post Statistics:</h4>
              <h4>Comments: </h4>
              <p>2</p>
              <h4>: </h4>
              <p>11</p>
              <h4>Likes: </h4>
              <p>10</p>
              <h4>Edits: </h4>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Retweets;
