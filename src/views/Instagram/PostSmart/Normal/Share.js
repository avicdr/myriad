import React from "react";
import HeadNav from "./HeadNav";
import Search from "../../../../components/Static/Search.png";
import Facebook from '../../../../components/Static/FacebookLogo.png';
import twitter from '../../../../components/Static/TwitterLogo.png';

function Retweets() {
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Post Smart /Post & Likes</h6>

          <div className="d-flex justify-content-between"> 
          <h2 className="status">
          Post & Likes
          </h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/facebook/PostSmart/share"><img src={Facebook} className="px-2" /></a>
          <a href="/twitter/tweetsmart/retweets"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

         
          <HeadNav/>
          <div className="filterBox">
            <div className="searchHash">
                <input type="text" className="search"  placeholder="Search Hashtag"/>
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
            <button className="instragrambtnColoured">Go</button>
          </div>
          <div className="details w-100">
            <div className="detailItem justify-content-around">
            <div className="dropArrow"><img src="https://static.thenounproject.com/png/1123247-200.png" alt="none"/></div>
              <div className="index item">#</div>
              <div className="name item">NAME</div>
              <div className="tweet item">Post ID</div>
              <div className="location item">LOCATION</div>
              <div className="tweetType item">Post TYPE</div>
              <div className="tweetStatus item">STATUS</div>
              <div className="timeStamp item">TIME STAMP</div>
              <div className="actions item">ACTIONS</div>
            </div>
            <div className="detailItemStats justify-content-around">
                <div className="dropArrow"><img src="https://static.thenounproject.com/png/1123247-200.png" alt="none"/></div>
                <div className="index item">1</div>
                <div className="name item">Horrow Suranjan</div>
                <div className="tweetId item">1625225505125</div>
                <div className="location item">Mumbai</div>
                <div className="tweetType item">Media</div>
                <div className="tweetStatus item">Success</div>
                <div className="timeStamp item">30/12/2022, 16:34</div>
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

export default Retweets;
