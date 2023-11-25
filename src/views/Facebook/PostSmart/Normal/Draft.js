import React from "react";
import HeadNav from "./HeadNav";

import Instagram from '../../../../components/Static/Instagram.png';
import twitter from '../../../../components/Static/TwitterLogo.png';

import Search from "../../../../components/Static/Search.png"
import Emoji from "../../../../components/Static/Emoji.png" ;
import Attach from "../../../../components/Static/Attach.png";
import Upload from "../../../../components/Static/Upload.png";
import Image from "../../../../components/image"




function Tweet() {
  return (
    <div>
      <div>
        <div className="cont">

          <h6>Home / Post Smart / Draft</h6>
                      
        <div className="d-flex justify-content-between"> 
          <h2 className="status">Draft</h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/instagram/PostSmart/draft"><img src={Instagram} className="px-2" /></a>
          <a href="/twitter/tweetsmart/draft"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

          <HeadNav />

          <div className="filterBox">
            <div className="row">
              <div className="col-5">
          <div className="searchHash">
                <input type="text" className="search"  placeholder="Enter Hashtag, Keyword or Tweet id To Search ..."/>
                <img src={Search} alt=""/>
            </div>
            </div>
            <div className="col-5">
            <select name="userType" id="userType" className="w-100 dropDown">
              <option value="none">Select by Users</option>
              <option value="dev">Developer</option>
              <option value="normla">Normal</option>
            </select>
            </div>
            {/* <div className="col">
            <input type="date" name="postDate" id="date" className="date"/>
            <div className="searchHash">
                <div>Upload File</div>
                <img src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-file-upload-icon-png-image_4717174.jpg" alt=""  placeholder="Search Hashtag"/>
            </div>
            </div> */}
            <div className="col-2">
            <button className="facebookbtnColoured">Post</button>
            </div>
          </div>
          </div>
          <div className="draftName">
            <input type="text" placeholder="Draft name.."/>
        </div>
        {/* <div className="posts">
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
                    <button className="facebookbtnColoured">Post</button>
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
          <button className="facebookbtnColoured">Go</button>
        </div>
    
        <div className="mt-2 mb-2">
          <button className="facebookbtnColoured">Paraphrase</button>
          <input
            type="checkbox"
            name="translate"
            id="translate"
            className="mlr-1"
          />
          <label htmlFor="Translate">Translation</label>
        </div>
                
              
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
