import React from "react";

function Mentions(props) {
  return (
    <div className="bg-white p-3 m-3 border-circle w-45">
      <span className="mt-2 mb-2 bold fntSz25">{props.tableTitle}</span>
      <div className="details w-100">
        <div className="detailItem">
          <div className="d-flex">
            <div className="item index">#</div>
            <div className="item">HASHTAGS</div>
          </div>
          <div className="ml-3 mr-3">NUMBER</div>
        </div>
        <div className="detailItemStats pt-3 pb-3 justify-content-between bordertopdashed">
          <div className="d-flex">
            <div className="ml-5 index">1.</div>
            <div className="ml-5">#playIndia</div>
          </div>
          <div className="mr-5">19</div>
        </div>
        <div className="detailItemStats pt-3 pb-3 justify-content-between bordertopdashed">
          <div className="d-flex">
            <div className="ml-5 index">2.</div>
            <div className="ml-5">#playIndia</div>
          </div>
          <div className="mr-5">19</div>
        </div>
        <div className="detailItemStats pt-3 pb-3 justify-content-between bordertopdashed">
          <div className="d-flex">
            <div className="ml-5 index">3.</div>
            <div className="ml-5">#playIndia</div>
          </div>
          <div className="mr-5">19</div>
        </div>
        <div className="detailItemStats pt-3 pb-3 justify-content-between bordertopdashed">
          <div className="d-flex">
            <div className="ml-5 index">4.</div>
            <div className="ml-5">#playIndia</div>
          </div>
          <div className="mr-5">19</div>
        </div>
        <div className="detailItemStats pt-3 pb-3 justify-content-between bordertopdashed">
          <div className="d-flex">
            <div className="ml-5 index">5.</div>
            <div className="ml-5">#playIndia</div>
          </div>
          <div className="mr-5">19</div>
        </div>
      </div>
    </div>
  );
}

export default Mentions;
