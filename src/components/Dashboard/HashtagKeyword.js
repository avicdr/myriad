import React, {useEffect} from "react";
import Impression from "../Static/Impression.png";
import Likes from "../Static/Likes.png";
import Reach from "../Static/Reach.png";
import Mention from "../Static/Mention.png";
import Image from "../image";
import { populateImpressions } from "../../utils/functions";

function HashtagKeyword() {
  useEffect(() => {
    populateImpressions()
  }, [])
  
  return (
    <div className="d-flex flex-column bg-white p-3 border-circle m-3 w-60">
      <div className="d-flex w-100">
        <div className="d-flex flex-column w-40">
          <h5 className="bold font-poppins">Hashtag / Keyword</h5>
          <p className="color-light font-poppins">lorem ipsum lorem ipsum</p>
        </div>
        <div className="d-flex w-60 align-items-center">
          <Image src={Mention} alt="" className="h-fit-content mri-6" />
          <Image src={Likes} alt="" className="h-fit-content mri-6" />
          <Image src={Reach} alt="" className="h-fit-content mri-6" />
          <Image src={Impression} alt="" className="h-fit-content mri-6" />
        </div>
      </div>
      <div className="details w-100">
        <div className="detailItem w-100">
          <div className="d-flex w-50">
            <div className="index dashItem">#</div>
            <div className="dashItem">HASHTAG</div>
          </div>
          <div className="tweet dashItem w-17.5">MENTION</div>
          <div className="location dashItem w-17-5">LIKES</div>
          <div className="timeStamp dashItem w-17-5">REACH</div>
          <div className="timeStamp dashItem w-17-5">IMPRESSION</div>
        </div>
        <div id="hashtag_keyword_box">
        </div>
      </div>
    </div>
  );
}

export default HashtagKeyword;