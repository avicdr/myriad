import React from "react";
import { Link } from "react-router-dom";
import Image from "../image";
import MenuIcon from "../Static/Dots.png";
import Group from "../Static/Group.png";

function TopUrls() {
  return (
    <>
      <div className="d-flex w-40 m-3">
        <div className="d-flex flex-column p-3 bg-white w-100 border-circle">
          <div className="p-3 mb-3 d-flex border-circle bg-pinkish w-100">
            <h5 className="bold">Top URL's</h5>
          </div>
          <div className="tagItems">
            <div className="d-flex pt-2 pb-2 justify-content-between">
               <div style={{"color": "#000FFF", "textDecoration": "underline"}}>https://support.twitter.com</div>
              <div>300</div>
            </div>
            <div className="d-flex pt-2 pb-2 justify-content-between">
               <div style={{"color": "#000FFF", "textDecoration": "underline"}}>https://support.twitter.com</div>
              <div>300</div>
            </div>
            <div className="d-flex pt-2 pb-2 justify-content-between">
               <div style={{"color": "#000FFF", "textDecoration": "underline"}}>https://support.twitter.com</div>
              <div>300</div>
            </div>
            <div className="d-flex pt-2 pb-2 justify-content-between">
               <div style={{"color": "#000FFF", "textDecoration": "underline"}}>https://support.twitter.com</div>
              <div>300</div>
            </div>
            <div className="d-flex pt-2 pb-2 justify-content-between">
               <div style={{"color": "#000FFF", "textDecoration": "underline"}}>https://support.twitter.com</div>
              <div>300</div>
            </div>
            <div className="d-flex pt-2 pb-2 justify-content-between">
               <div style={{"color": "#000FFF", "textDecoration": "underline"}}>https://support.twitter.com</div>
              <div>300</div>
            </div>
            <div className="d-flex pt-2 pb-2 justify-content-between">
               <div style={{"color": "#000FFF", "textDecoration": "underline"}}>https://support.twitter.com</div>
              <div>300</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopUrls;
