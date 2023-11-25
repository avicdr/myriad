import React from "react";
import Image from "../image";
import UpArrow from "../Static/UpArrow.png"

function TopIcons() {
  return (
    <div className="d-flex">
      <div className="displayBox d-flex bg-white mr-5 p-4 border-circle">
        <div className="d-flex flex-column text-align-center pr-2 font-poppins text-center">
          <div className="fntSz21 bold">3</div>
          <div className="fntSz 15 color-light">Total Post</div>
        </div>
        <div className="d-flex align-items-center">
          <Image src={UpArrow} alt="" className="h-fit-content" />
          <div className="textGreen p-2">3%</div>
        </div>
      </div>
      <div className="displayBox d-flex bg-white mr-5 p-4 border-circle">
        <div className="d-flex flex-column text-align-center pr-2 font-poppins text-center">
          <div className="fntSz21 bold">6</div>
          <div className="fntSz 15 color-light">Media Posts</div>
        </div>
        <div className="d-flex align-items-center">
          <Image src={UpArrow} alt="" className="h-fit-content" />
          <div className="textGreen p-2">3%</div>
        </div>
      </div>
      <div className="displayBox d-flex bg-white mr-5 p-4 border-circle">
        <div className="d-flex flex-column text-align-center pr-2 font-poppins text-center">
          <div className="fntSz21 bold">9</div>
          <div className="fntSz 15 color-light">Share</div>
        </div>
        <div className="d-flex align-items-center">
          <Image src={UpArrow} alt="" className="h-fit-content" />
          <div className="textGreen p-2">3%</div>
        </div>
      </div>
      <div className="displayBox d-flex bg-white mr-5 p-4 border-circle">
        <div className="d-flex flex-column text-align-center pr-2 font-poppins text-center">
          <div className="fntSz21 bold">7</div>
          <div className="fntSz 15 color-light">Likes</div>
        </div>
        <div className="d-flex align-items-center">
          <Image src={UpArrow} alt="" className="h-fit-content" />
          <div className="textGreen p-2">3%</div>
        </div>
      </div>
      <div className="displayBox d-flex bg-white mr-5 p-4 border-circle">
        <div className="d-flex flex-column text-align-center pr-2 font-poppins text-center">
          <div className="fntSz21 bold">5</div>
          <div className="fntSz 15 color-light">Comments</div>
        </div>
        <div className="d-flex align-items-center">
          <Image src={UpArrow} alt="" className="h-fit-content" />
          <div className="textGreen p-2">3%</div>
        </div>
      </div>
    </div>
  );
}

export default TopIcons;
