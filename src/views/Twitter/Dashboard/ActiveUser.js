import React, { useEffect } from "react";
import { populateDashboard } from "../../../utils/functions";

function ActiveUsers({type, startDate, endDate, regionId, tableTitle}) {
  useEffect(() => {
    populateDashboard(type)
  }, [type])
  
  return (
    <>
      <div className="d-flex">
        <div className="d-flex flex-column bg-white w-100 border-circle">
          {/* <div className=" d-flex border-circle w-100">
            <div className="d-flex flex-column">
              <h5 className="font-poppins">{tableTitle}</h5>
            </div>
          </div>
          <div className="d-flex justify-content-between p-2">
            <div className="d-flex">
              <div className="fntSz16  mr-5 font-poppins">#</div>
              <div className="fntSz16 font-poppins">Username</div>
            </div>
            <div className="fntSz16  font-poppins">Number</div>
          </div> */}
          <div className="tagItems p-2" id={type}>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActiveUsers;
