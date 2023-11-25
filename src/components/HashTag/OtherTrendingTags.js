import React from "react";
import Image from "../image";
import MenuIcon from "../Static/Dots.png"

function TrendingTags() {
  return (
    <>
        <div className="d-flex mw-25">
      <div className="d-flex flex-column p-3 bg-white w-100 border-circle">
        <div className="p-3 mb-3 d-flex border-circle bg-pinkish w-100">
          <h5 className="bold">Other Trending Hashtags</h5>
        </div>
        <div className="d-flex justify-content-between">
          <div className="fntSz16">#hashtags</div>
          <div className="fntSz16">Tweet Count</div>
        </div>
        <hr className="w-100" />
        <div className="tagItems">
          <div className="d-flex justify-content-between bordertopdashed">
            <div>#byjus</div>
             <div className="d-flex">
                <div>13,250</div>
                <Image src={MenuIcon} alt="" style={{"width": "20px"}}/>
            </div>
          </div>
          <div className="d-flex justify-content-between bordertopdashed">
            <div>#byjus</div>
             <div className="d-flex">
                <div>13,250</div>
                <Image src={MenuIcon} alt="" style={{"width": "20px"}}/>
            </div>
          </div>
          <div className="d-flex justify-content-between bordertopdashed">
            <div>#byjus</div>
             <div className="d-flex">
                <div>13,250</div>
                <Image src={MenuIcon} alt="" style={{"width": "20px"}}/>
            </div>
          </div>
          <div className="d-flex justify-content-between bordertopdashed">
            <div>#byjus</div>
             <div className="d-flex">
                <div>13,250</div>
                <Image src={MenuIcon} alt="" style={{"width": "20px"}}/>
            </div>
          </div>
          <div className="d-flex justify-content-between bordertopdashed">
            <div>#byjus</div>
             <div className="d-flex">
                <div>13,250</div>
                <Image src={MenuIcon} alt="" style={{"width": "20px"}}/>
            </div>
          </div>
          <div className="d-flex justify-content-between bordertopdashed">
            <div>#byjus</div>
             <div className="d-flex">
                <div>13,250</div>
                <Image src={MenuIcon} alt="" style={{"width": "20px"}}/>
            </div>
          </div>
          <div className="d-flex justify-content-between bordertopdashed">
            <div>#byjus</div>
             <div className="d-flex">
                <div>13,250</div>
                <Image src={MenuIcon} alt="" style={{"width": "20px"}}/>
            </div>
          </div>
          <div className="d-flex justify-content-between bordertopdashed">
            <div>#byjus</div>
             <div className="d-flex">
                <div>13,250</div>
                <Image src={MenuIcon} alt="" style={{"width": "20px"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default TrendingTags;
