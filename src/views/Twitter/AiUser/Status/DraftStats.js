import React from "react";
import HeadNavStats from "./HeadNavStats";


function DraftStats() {
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / AI Account / Status / Draft</h6>

        
          <h2 className="status">
            Status{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/126/126502.png"
              alt="none"
            />
          </h2>
          

          
          <HeadNavStats />
          <div className="filterBox">
            <div className="mr-2">
              <h2>Tweets</h2>
              <p>Total number of tweets: 256</p>
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
            <button className="btnColoured">Go</button>
          </div>
          <div className="details w-100">
            <div className="detailItem">
              <div className="dropArrow">
                <img
                  src="https://static.thenounproject.com/png/1123247-200.png"
                  alt="none"
                />
              </div>
              <div className="index item w-10">#</div>
              <div className="name item w-10">DRAFT NAME</div>
              <div className="item w-10">TWEETS</div>
              <div className="item w-10">GROUPS</div>
              <div className="item w-10">USERS</div>
              <div className="tweetStatus item w-10">STATUS</div>
              <div className="timeStamp item w-10">CREATED ON</div>
              <div className="timeStamp item w-10">SCHEDULED ON</div>
              <div className="actions item w-10">ACTIONS</div>
            </div>
            <div className="detailItemStats justify-content-between">
              <div className="dropArrow">
                <img
                  src="https://static.thenounproject.com/png/1123247-200.png"
                  alt="none"
                />
              </div>
              <div className="index item w-10">1</div>
              <div className="name item w-10">Suranjan</div>
              <div className="item w-10">1</div>
              <div className="item w-10">1</div>
              <div className="item w-10">1</div>
              <div className="tweetStatus item w-10">Success</div>
              <div className="timeStamp item w-10">30/12/2022, 16:34</div>
              <div className="timeStamp item w-10">30/12/2022, 16:34</div>
              <div className="actions item w-10">
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
              <h4>Tweet Statistics:</h4>
              <h4>Comments: </h4>
              <p>2</p>
              <h4>Retweets: </h4>
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

export default DraftStats;
