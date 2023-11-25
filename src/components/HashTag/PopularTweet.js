import React from "react";
import Image from "../image";
import Like from "../Static/HeartBlack.png";
import Comment from "../Static/CommentBlack.png";
import Retweet from "../Static/RetweetBlack.png";
import ArrowUpRight from "../Static/ArrowUpRight.png";

function PopularTweet() {
  return (
    <div>
      <div className="d-flex flex-colum">
        <Image
          src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
          alt=""
          className="popularpfp"
        />
        <div className="d-flex flex-column">
          <div className="d-flex">
            <div className="leftName ml-2 mr-2">@janedoe</div>
            <div>Jane Den Doe</div>
          </div>
          <div className="postCont p-2 mt-2 bgop">
            Thank You #ViratKohli for giving us Mohammad Siraj 🙏🏻
          </div>
          <div className="postTime mt-2 mb-2" style={{ opacity: "0.4" }}>
            9:02 AM · Nov 22, 2022
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="d-flex pr-3 align-items-center">
                <Image src={Comment} alt="" className="p-2" />
                <div>587</div>
              </div>
              <div className="d-flex pr-3 align-items-center">
                <Image src={Retweet} alt="" className="p-2" />
                <div>4,610</div>
              </div>
              <div className="d-flex pr-3 align-items-center">
                <Image src={Like} alt="" className="p-2" />
                <div>9,51,3326</div>
              </div>
            </div>
            <Image src={ArrowUpRight} alt="" className="p-2" />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default PopularTweet;
