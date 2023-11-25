import React from "react";
import HeadNavStats from "./HeadNavStats";
import Facebook from '../../../../components/Static/FacebookLogo.png';
import twitter from '../../../../components/Static/TwitterLogo.png';

function Comments() {
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Post Smart / Status / Comments</h6>

          <div className="d-flex justify-content-between"> 
          <h2 className="status">
            Status{" "}
            <img src="https://cdn-icons-png.flaticon.com/512/126/126502.png" alt="none"/>
          </h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/facebook/PostSmart/status/comments"><img src={Facebook} className="px-2" /></a>
          <a href="/twitter/tweetsmart/status/comments"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

         
          <HeadNavStats/>
          <div className="filterBox">
            <div className="mr-2">
              <h2>Tweets</h2>
              <p>Total number of comments: 256</p>
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
            <button className="instragrambtnColoured">Go</button>
          </div>
          <div className="details w-100">
            <div className="detailItem">
            <div className="dropArrow w-12-5"><img src="https://static.thenounproject.com/png/1123247-200.png" alt="none"/></div>
              <div className="index item w-12-5">#</div>
              <div className="name item w-12-5">NAME</div>
              <div className="location item w-12-5">LOCATION</div>
              <div className="tweetType item w-12-5">TWEET TYPE</div>
              <div className="tweetStatus item w-12-5">STATUS</div>
              <div className="timeStamp item w-12-5">TIME STAMP</div>
              <div className="actions item w-12-5">ACTIONS</div>
            </div>
            <div className="detailItemStats justify-content-between">
                <div className="dropArrow w-12-5"><img src="https://static.thenounproject.com/png/1123247-200.png" alt="none"/></div>
                <div className="index item w-12-5">1</div>
                <div className="name item w-12-5">Horrow Suranjan</div>
                <div className="location item w-12-5">Mumbai</div>
                <div className="tweetType item w-12-5">Media</div>
                <div className="tweetStatus item w-12-5">Success</div>
                <div className="timeStamp item w-12-5">30/12/2022, 16:34</div>
                <div className="actions item w-12-5">
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

export default Comments;
