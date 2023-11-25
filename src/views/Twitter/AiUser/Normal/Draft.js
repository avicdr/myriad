import React, { useState } from "react";
import HeadNav from "./HeadNav";
import CreatePost from "../../../../components/TweetSmart/CreatePost";
import Instagram from "../../../../components/Static/Instagram.png";
import Facebook from "../../../../components/Static/FacebookLogo.png";
import { PopulateGroupSelect, PopulateUserSelect } from "../../../../components/Accounts/GroupAndUserSelect";
import CustomDatePicker from "../../../../components/CustomDatePicker";

function Draft() {
  const [selectedGroups, setSelectedGroups] = useState([]);

  const handleGroupChange = (selectedOptions) => {
    setSelectedGroups(selectedOptions.map((option) => option.value));
  };
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / AI Account / Drafts</h6>

          <div className="d-flex justify-content-between">
            <h2 className="status">Draft</h2>
            <div className="p-3 d-flex justify-content-end">
              <a href="/instagram/Aiuser/draft">
                <img src={Instagram} className="px-2" />
              </a>
              <a href="/facebook/Aiuser/draft">
                <img src={Facebook} className="px-2" />
              </a>
            </div>
          </div>

          <HeadNav />
          <div className="filterBox">
            <PopulateGroupSelect onGroupChange={handleGroupChange} />
            <PopulateUserSelect groupIds={selectedGroups} />
            <div className="w-30 mr-3"><CustomDatePicker /></div>
            <div className="searchHash mw-auto w-30">
              <div className="text-dim">Upload File</div>
              <img
                src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-file-upload-icon-png-image_4717174.jpg"
                alt=""
                placeholder="Search Hashtag"
              />
            </div>
            <button className="btnColoured">Comment</button>
          </div>
          <div className="draftName">
            <input type="text" placeholder="Draft name.." />
          </div>
          <div className="posts">
            <CreatePost />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Draft;
