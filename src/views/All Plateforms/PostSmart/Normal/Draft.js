import React from "react";
import CustomDatePicker from "../../../../components/CustomDatePicker";
import CreatePost from "../../../../components/TweetSmart/CreatePost";
import HeadNav from "./HeadNav";

function Tweet() {
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Post Smart / Drafts</h6>
          <h2 className="status">Draft</h2>
          <HeadNav />
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
            <CustomDatePicker className="mr-2"/>
            <div className="searchHash">
              <div>Upload File</div>
              <img
                src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-file-upload-icon-png-image_4717174.jpg"
                alt=""
                placeholder="Search Hashtag"
              />
            </div>
            <button className="instragrambtnColoured">Comment</button>
          </div>
          <div className="draftName">
            <input type="text" placeholder="Draft name.." />
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
                <hr></hr>
             
                <div className="reply">
                  <h5>Post</h5>
                  <div className="postInput mt-2 mb-2">
                    <textarea
                      name="content"
                      id="content"
                      cols="30"
                      rows="10"
                      placeholder="Write your Post"
                    ></textarea>
                       </div>
             
            </div>             
                  <div className="my-4 px-2 d-flex justify-content-between ">
                    <button className="instragrambtnColoured btnGo">Paraphrase</button>
                    <div>
                    <input type="checkbox" name="translate" id="translate" className="mlr-1" />
                    <label htmlFor="Translate">Translation</label>
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
