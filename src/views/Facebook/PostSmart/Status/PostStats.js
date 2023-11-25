import React from "react";
import HeadNavStats from "./HeadNavStats";
import Instagram from '../../../../components/Static/Instagram.png';
import twitter from '../../../../components/Static/TwitterLogo.png';

function TweetStats() {
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Post Smart / Status / Post</h6>
             
          <div className="d-flex justify-content-between"> 
          <h2 className="status">
            Status{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/126/126502.png"
              alt="none"
            />
          </h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/instagram/PostSmart/status/post"><img src={Instagram} className="px-2" /></a>
          <a href="/twitter/tweetsmart/status/tweets"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

         
          <HeadNavStats />
          <div className="filterBox">
            <div className="mr-2">
              <h2>Posts</h2>
              <p>Total number of Posts: 256</p>
            </div>
            <select name="region" id="regionName" className="dropDown">
              <option value="none">Filter by Region</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select name="userType" id="userType" className="dropDown">
              <option value="none">Filter by Users</option>
              <option value="dev">Developer</option>
              <option value="normla">Normal</option>
            </select>
            <button className="facebookbtnColoured">Go</button>
          </div>
          <div className="details w-100">
            <div className="detailItem justify-content-between">
              <input type="checkbox" name="checkMe" id="none" className="w-11"/>
              <div className="index item w-11">#</div>
              <div className="name item w-11">NAME</div>
              <div className="tweet item w-11">Post</div>
              <div className="location item w-11">LOCATION</div>
              <div className="tweetType item w-11">Post TYPE</div>
              <div className="tweetStatus item w-11">STATUS</div>
              <div className="timeStamp item w-11">TIME STAMP</div>
              <div className="actions item w-11">ACTIONS</div>
            </div>
            <div className="detailItemStats justify-content-between">
              <input type="checkbox" name="checkMe" id="none" className="w-11"/>
              <div className="index item w-11">1</div>
              <div className="name item w-11">Horrow Suranjan</div>
              <div className="tweet item w-11">
                {"Andrew Tate arrested by Romanian authorities in tha314caf"
                  .substring(0, 20)
                  .concat("...")}
              </div>
              <div className="location item w-11">Mumbai</div>
              <div className="tweetType item w-11">Media</div>
              <div className="tweetStatus item w-11">Success</div>
              <div className="timeStamp item w-11">30/12/2022, 16:34</div>
              <div className="actions item w-11">
                <img
                  src="https://static.thenounproject.com/png/718767-200.png"
                  alt="none"
                />
                <img
                  src="https://img.icons8.com/material-rounded/256/trash.png"
                  alt="none"
                />
              </div>
            </div>
            <div className="stats">
              <h4>Post Statistics:</h4>
              <h4>Comments: </h4>
              <p>2</p>
              <h4>Posts: </h4>
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

export default TweetStats;
