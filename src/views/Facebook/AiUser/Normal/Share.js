import React from "react";
import HeadNav from "./HeadNav";
import Search from "../../../../components/Static/Search.png"
import RecentTweet from "../../../../components/Profile/RecentTweet";
import Instagram from '../../../../components/Static/Instagram.png';
import twitter from '../../../../components/Static/TwitterLogo.png';

function Share() {
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / AI Account / Share & Likes</h6>
                         
          <div className="d-flex justify-content-between"> 
          <h2 className="status">
          Share & Likes
          </h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/instagram/Aiuser/share"><img src={Instagram} className="px-2" /></a>
          <a href="/twitter/Aiuser/retweets"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

          
          <HeadNav/>
          {/* <div className="filterBox">
            <div className="searchHash">
                <input type="text" className="search"  placeholder="Enter Hashtag, Keyword or Tweet id To Search ..."/>
                <img src={Search} alt=""/>
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
            <input type="radio" id="like" name="like_retweet" value="like" className="radio"/>
            <label htmlFor="like" className="radioLabel">Like</label>
            <input type="radio" id="retweet" name="like_retweet" value="retweet" className="radio"/>
            <label htmlFor="retweet" className="radioLabel">Share</label>
            <button className="facebookbtnColoured">Go</button>
          </div>
           <RecentTweet/> */}


          <div className="details w-100">
            <div className="detailItem justify-content-around">
            <div className="dropArrow"><img src="https://static.thenounproject.com/png/1123247-200.png" alt="none"/></div>
              <div className="index item">#</div>
              <div className="name item">Group</div>
              <div className="tweet item">Name</div>
              <div className="location item">Username</div>
              <div className="tweetType item">Email</div>
              {/* <div className="tweetStatus item">STATUS</div> */}
              {/* <div className="timeStamp item">TIME STAMP</div> */}
              <div className="actions item">ACTIONS</div>
            </div>
            <div className="detailItemStats justify-content-around">
                <div className="dropArrow"><img src="https://static.thenounproject.com/png/1123247-200.png" alt="none"/></div>
                <div className="index item">1</div>
                <div className="name item">Group</div>
                <div className="tweetId item">Horrow Suranjan</div>
                <div className="location item">@HorrowSuranjan99</div>
                <div className="tweetType item">horrow@Suranjan99.com</div>
                {/* <div className="tweetStatus item">Success</div> */}
                {/* <div className="timeStamp item">30/12/2022, 16:34</div> */}
                <div className="actions item">
                  View
                </div>
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

export default Share;
