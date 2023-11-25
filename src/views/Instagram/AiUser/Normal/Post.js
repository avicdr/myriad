import React from "react";
import CreatePost from "../../../../components/TweetSmart/CreatePost";
import HeadNav from "./HeadNav";
import like from "./like.png"
import comment from "./comment.png"
import Facebook from '../../../../components/Static/FacebookLogo.png';
import twitter from '../../../../components/Static/TwitterLogo.png';

import Emoji from "../../../../components/Static/Emoji.png" ;
import Attach from "../../../../components/Static/Attach.png";
import Upload from "../../../../components/Static/Upload.png";
import Image from "../../../../components/image"


function Tweet() {
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / AI Account / Post</h6>

          <div className="d-flex justify-content-between"> 
          <h2 className="status">
          Post
          </h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/facebook/Aiuser/post"><img src={Facebook} className="px-2" /></a>
          <a href="/twitter/Aiuser/tweet"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

         
          <HeadNav/>
          <div className="filterBox">
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
            <button className="instragrambtnColoured">Post</button>
          </div>
          <div className="posts">
            <div className="postContainer">
              <div className="post">
                <div className="profile">
                  <div className="d-f">
                    <img
                      src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                      alt=""
                    />
                    <div>John Doe</div>
                  </div>
                  <div className="d-f">
                    <button className="instragrambtnColoured">Post</button>
                    <img
                      className="crossIcon"
                      src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                      alt=""
                    />
                  </div>
                </div>
                <hr/>
                <div className="postInput mt-2 mb-2">
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            placeholder="Write your post here..."
          ></textarea>
          <div className="paraphrase fntSz14 bluecolor p-3">
            
          </div>
          <div className="icons d-flex justify-content-end">
            <Image src={Emoji} alt="" className="p-2" />
            <Image src={Upload} alt="" className="p-2" />
            <Image src={Attach} alt="" className="p-2" />
          </div>
        </div>
        <hr/>
        <div className="translation">
          <div className="heading mt-2">
            <h5>Translation</h5>
          </div>
          <select name="region" id="regionName" className="transDropDown">
            <option value="none">From Language</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select name="userType" id="userType" className="transDropDown">
            <option value="none">To Language</option>
            <option value="dev">Developer</option>
            <option value="normla">Normal</option>
          </select>
          <button className="instragrambtnColoured">Go</button>
        </div>
        <div className=" py-2 px-2 d-flex justify-content-between">
                  <select name="userType" id="userType" className="CategorydropDown">
              <option value="none">Select  Category</option>
              <option value="dev">Developer</option>
              <option value="normla">Normal</option>
            </select>
          
            <button className="instragrambtnColoured">Generate Post</button>
            </div>
        <div className="mt-2 pb-3 d-flex justify-content-between">
          <button className="instragrambtnColoured">Paraphrase</button>
          <div className="mt-3 px-5" >
          <input
            type="checkbox"
            name="translate"
            id="translate"
            className="mlr-1"
          />
          <label htmlFor="text-center Translate">Translation</label>
          </div>
        </div>
                
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
