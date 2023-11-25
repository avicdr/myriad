import React from "react";
import CreatePost from "../../../../components/TweetSmart/CreatePost";
import HeadNav from "./HeadNav";
import Emoji from "../../../../components/Static/Emoji.png";
import Attach from "../../../../components/Static/Attach.png";
import Upload from "../../../../components/Static/Upload.png";
import Image from "../../../../components/image"
import Instagram from '../../../../components/Static/Instagram.png';
import Facebook from '../../../../components/Static/FacebookLogo.png';
import twitter from '../../../../components/Static/TwitterLogo.png';
function Tweet() {
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Post Smart / Post</h6>
          <div className="d-flex justify-content-between">
            <h2 className="status">
              Post
            </h2>
            <div className="p-3 d-flex justify-content-end">
              <a href="/instagram/dashboard"><img src={Instagram} className="px-2" /></a>
              <a href="/facebook/dashboard"><img src={Facebook} className="px-2" /></a>
              <a href="/"><img src={twitter} className="px-2" /></a>
            </div>
          </div>
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
            <button className="btnColoured">Post</button>
          </div>
          <div className="postContainer my-2 mr-1">
            <div className="post">
              <div className="profile">
                <div className="d-f">
                  <img
                    src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                    alt="none"
                  />
                  <div>John Doe</div>
                </div>
                <img
                  className="crossIcon"
                  src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                  alt="none"
                />
              </div>
              <hr></hr>
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
                <button className="btnColoured">Go</button>
              </div>

              <div className="pt-2 pb-3">
                <div className="d-flex justify-content-between">
                  <div className="p-1">
                    <button className="btnColoured">Paraphrase</button>
                    <input
                      type="checkbox"
                      name="translate"
                      id="translate"
                      className="mlr-1"
                    />
                    <label htmlFor="Translate">Translation</label>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="p-2">
                      <input
                        type="checkbox"
                        name="translate"
                        id="translate"
                      // className="mlr-1"
                      />
                      <Image src={Instagram} className="p-1 px-1 iconimg" />
                    </div>
                    <div className="p-2">
                      <input
                        type="checkbox"
                        name="translate"
                        id="translate"
                      // className="mlr-1"
                      />
                      <Image src={Facebook} className="p-1 px-1 iconimg" />
                    </div>
                    <div className="p-2">
                      <input
                        type="checkbox"
                        name="translate"
                        id="translate"
                      // className="mlr-1"
                      />
                      <Image src={twitter} className="p-1 px-1  iconimg" />
                    </div>
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
