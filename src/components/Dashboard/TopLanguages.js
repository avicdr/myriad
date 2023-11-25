import React, { useEffect } from "react";
import { topLanguages } from "../../utils/functions";

function TopLanguages() {
  useEffect(() => {
    topLanguages();
  }, [])
  
  return (
    <>
      <div className="d-flex w-30 m-3">
        <div className="d-flex flex-column p-3 bg-white w-100 border-circle">
          <div className="p-3 mb-3 d-flex border-circle w-100">
            <div className="d-flex flex-column">
          
              {/* <p className="color-light">Total languages on twitter</p> */}
            </div>
          </div>
          <div className="d-flex justify-content-between p-2">
            <div className="d-flex">
              <div className="fntSz16 color-light mr-5 font-poppins">#</div>
              <div className="fntSz16 color-light font-poppins">Languages</div>
            </div>
            <div className="fntSz16 color-light font-poppins">Number</div>
          </div>
          <div className="tagItems p-2" id="language_box">
          </div>
        </div>
      </div>
    </>
  );
}

export default TopLanguages;