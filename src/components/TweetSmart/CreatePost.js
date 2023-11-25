import React from "react";
import Image from "../image";
import Emoji from "../Static/Emoji.png";
import Attach from "../Static/Attach.png";
import Upload from "../Static/Upload.png";

function CreatePost() {
  return (
    <div className="postContainer mt-2 mb-2 mr-1">
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
            placeholder="Write your tweet here..."
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
        <hr />
        <div className="mt-2 mb-2">
          <button className="btnColoured">Paraphrase</button>
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
  );
}

export default CreatePost;
