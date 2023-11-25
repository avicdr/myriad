import React from "react";
import PopularTweet from "./PopularTweet";

function PopularTweets() {
  return (
    <div className="p-3 mt-3 mb-3 border-circle bg-white">
      <div className="m-2 p-3 d-flex border-circle bg-pinkish">
        <h5 className="bold">Popular Tweets</h5>
      </div>
      <PopularTweet />
      <PopularTweet />
      <PopularTweet />
    </div>
  );
}

export default PopularTweets;
