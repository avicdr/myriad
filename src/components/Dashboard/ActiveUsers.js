import React, { useEffect } from "react";
import { populateDashboard } from "../../utils/functions";

function ActiveUsers({type, startDate, endDate, regionId, tableTitle}) {
  useEffect(() => {
    populateDashboard(type)
  }, [type])
  
  return (
    <>
      <div className="d-flex m-3">
        <div className="d-flex flex-column p-3 bg-white w-100 border-circle">
          <div className="p-2 mb-3 d-flex border-circle w-100">
            <div className="d-flex flex-column">
              <h5 className="font-poppins">{tableTitle}</h5>
            </div>
          </div>
          <div className="d-flex justify-content-between p-2">
            <div className="d-flex">
              <div className="fntSz16 color-light mr-5 font-poppins">#</div>
              <div className="fntSz16 color-light font-poppins">Username</div>
            </div>
            <div className="fntSz16 color-light font-poppins">Number</div>
          </div>
          <div className="tagItems p-2" id={type}>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActiveUsers;
