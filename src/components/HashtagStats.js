import React from "react";
import Image from "./image";

function HashTagStats(props) {
  return (
    <div>
      <div className="detailItemStats justify-content-between">
        <div className="index item">{props.index}</div>
        <div className="name item">{props.hashtag}</div>
        <div className="location item">{props.volume}</div>
        <div className="actions item">
          <Image
            src="https://static.thenounproject.com/png/718767-200.png"
            alt="none"
          />
        </div>
      </div>
    </div>
  );
}

export default HashTagStats;
