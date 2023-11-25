import React from "react";
import Image from "../../../components/image/index";
import UpArrow from "../../../components/Static/UpArrow.png"
import facebook from "../../../components/Static/FacebookLogo.png"
import media from "../../../components/Static/icons/social-media.png" 
import retweet from '../../../components/Static/icons/retweet.png'
import like from "../../../components/Static/Likes.png"
import comment from '../../../components/Static/icons/speech-bubble.png'

function TopIcons({ tweets, mediaTweets, retweets, likes, comments }) {
  return (
    <div className="d-flex w-100">
      <div className="displayBox d-flex bg-white mr-5 p-4 border-circle w-17 justify-content-center">
  
        <div className="d-flex justify-content-center">
          <div className="pt-2">
            <img src={facebook} width="45px" height="45px" className="fntSz 15" />

          </div>
          <div className="ml-2 mt-2">
           
            <div className="d-flex align-items-center">
            <h6 className="fntSz21 bold mt-1">{tweets}</h6>
              <Image src={UpArrow} alt="" className="ml-4 h-fit-content" />
              <div className="textGreen">3%</div>
            </div>
            <p className="fntSz 15 color-light text-align-center">Total Posts</p>
          </div>


        </div>
      </div>
      <div className="displayBox d-flex bg-white mr-5 p-4 border-circle w-17 justify-content-center">
      <div className="d-flex justify-content-center">
          <div className="pt-2">
            <img src={media} width="45px" height="45px" className="fntSz 15" />

          </div>
          <div className="ml-2 mt-2">
           
            <div className="d-flex align-items-center">
            <h6 className="fntSz21 bold mt-1 ml-3">{mediaTweets}</h6>
              <Image src={UpArrow} alt="" className="h-fit-content" />
              <div className="textGreen">3%</div>
            </div>
            <p className="fntSz 15 color-light text-align-center">Media Posts</p>
          </div>


        </div>
      
      </div>
      <div className="displayBox d-flex bg-white mr-5 p-4 border-circle w-17 justify-content-center">
           <div className="d-flex justify-content-center">
          <div className="pt-2">
            <img src={retweet} width="45px" height="45px" className="fntSz 15" />

          </div>
          <div className="ml-2 mt-2">
           
            <div className="d-flex align-items-center">
            <h6 className="fntSz21 bold mt-1 ml-3">{retweets}</h6>
              <Image src={UpArrow} alt="" className="h-fit-content" />
              <div className="textGreen">3%</div>
            </div>
            <p className="fntSz 15 color-light text-align-center">Share</p>
          </div>


        </div>
   
      </div>
      <div className="displayBox d-flex bg-white mr-5 p-4 border-circle w-17 justify-content-center">
      <div className="d-flex justify-content-center">
          <div className="pt-2">
            <img src={like} width="45px" height="45px" className="fntSz 15" />

          </div>
          <div className="ml-2 mt-2">
           
            <div className="d-flex align-items-center">
            <h6 className="fntSz21 bold mt-1 ml-3">{likes}</h6>
              <Image src={UpArrow} alt="" className="h-fit-content" />
              <div className="textGreen">3%</div>
            </div>
            <p className="fntSz 15 color-light text-align-center pl-2">Likes</p>
          </div>


        </div>
   
      </div>
      <div className="displayBox d-flex bg-white mr-5 p-4 border-circle w-17 justify-content-center">

      <div className="d-flex justify-content-center">
          <div className="pt-2">
            <img src={comment} width="45px" height="45px" className="fntSz 15" />

          </div>
          <div className="ml-2 mt-2">
           
            <div className="d-flex align-items-center">
            <h6 className="fntSz21 bold mt-1 ml-3">{comments}</h6>
              <Image src={UpArrow} alt="" className="h-fit-content" />
              <div className="textGreen">3%</div>
            </div>
            <p className="fntSz 15 color-light text-align-center">Comments</p>
          </div>


        </div>
   
      </div>
    </div>
  );
}

export default TopIcons;