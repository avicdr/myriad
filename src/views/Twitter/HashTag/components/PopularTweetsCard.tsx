import moment from "moment";
import React from "react";
import ProfileAvatar from "../../../../components/ProfileAvatar";
import { IHashtagPopularTweet } from "../../../../redux/action";
import { TWITTER_URL } from "../../../../utils/config";

const PopularTweetsCard = (props: IHashtagPopularTweet) => {
    return (
        <div className="p_tweet_card d-flex">
            <div className="profile_icon mr-2">
                <ProfileAvatar src_text={"P"} id={"profile"} height={"26px"} width={"26px"} />
            </div>

            <div className="">
                <div className="d-flex fntSz14 mb-2">
                    <span className="text-link pr-2">@{props.author_name}</span>
                    <em>{props.author_name}</em>
                </div>
                <p className="bg-smoke fntSz14 p-2 rounded">{props.text}</p>
                <div className="text-muted fntSz14"> {moment(props.created_at).format("h:mm A - MMM D, yyyy")}</div>
                <div className="d-flex fntSz14 mt-2">
                    <div className="d-flex align-items-center pr-2">
                        <span className="material-symbols-outlined text-muted mr-1 fntSz18">chat</span>
                        <span className="fntSz14">{props.reply_count}</span>
                    </div>
                    <div className="d-flex align-items-center px-2">
                        <span className="material-symbols-outlined text-muted mr-1 fntSz18">cached</span>
                        <span className="fntSz14">{props.retweet_count}</span>
                    </div>
                    <div className="d-flex align-items-center px-2">
                        <span className="material-symbols-outlined text-muted mr-1 fntSz18">favorite</span>
                        <span className="fntSz14">{props.like_count}</span>
                    </div>
                    <div className="d-flex align-items-center pl-2 ml-auto">
                        <a target={"_blank"} href={`${TWITTER_URL}/${props.author_name}/status/${props._id}`} className="material-symbols-outlined text-muted mr-1 fntSz18 pointer">trending_up</a>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default PopularTweetsCard;
