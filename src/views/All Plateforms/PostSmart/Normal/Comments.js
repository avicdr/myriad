import React from "react";
import like from "./like.png";
import comment from "./comment.png";
import HeadNav from "./HeadNav";
import Search from "../../../../components/Static/Search.png"

function Comments() {
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Post Smart / Comments</h6>
          <h2 className="status">Comment</h2>
          <HeadNav />
          <div className="filterBox">
            <div className="searchHash">
              <input
                type="text"
                className="search"
                placeholder="Search Hashtag"
              />
              <img
                src={Search}
                alt=""
              />
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
            <button className="instragrambtnColoured">Comment</button>
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
                    <button className="instragrambtnColoured">Comment</button>
                    <img
                      className="crossIcon"
                      src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                      alt=""
                    />
                  </div>
                </div>
                <hr></hr>
                <div className="comment">
                  China failed drastically wittheir "Zero Covid" policy. Their
                  new policy: "Let whoever needs to be infected infected, let
                  whoever needs to die, die.”
                </div>
                <div className="lcr">
                  <img src={like} alt="" /> 1k
                  <img src={comment} alt="" /> 500
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/126/126502.png"
                    alt=""
                  />{" "}
                  300
                </div>
                <div className="reply">
                  <h5>Reply</h5>
                  <div className="postInput mt-2 mb-2">
                    <textarea
                      name="content"
                      id="content"
                      cols="30"
                      rows="10"
                    ></textarea>
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

export default Comments;
