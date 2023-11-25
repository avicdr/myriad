import React, { useEffect } from "react";
import { displayProfileTweets } from "../../utils/functions";
import TweetPost from "./TweetPost";

function RecentTweet({ searchQuery }) {
  useEffect(() => {
    if (searchQuery != "") {
      displayProfileTweets(searchQuery);
    }
  }, [searchQuery]);
  return (
    <div>
      <h3 className="bold mt-4 mb-4 pt-3">Recent Tweets</h3>
      <div
        id="recent_post_container"
        className="d-flex flex-wrap justify-content-center"
      >
      </div>
    </div>
  );
}

export default RecentTweet;
