import moment from "moment";
import React from "react";
import ProfileAvatar from "../../../../components/ProfileAvatar";
import { IMediaWall } from "../../../../redux/action";
import { TWITTER_URL } from "../../../../utils/config";
import { nFormatter } from "../../../../utils/functions";

export const MediaWallCard = (props: IMediaWall) => {
    return (
        <div className="media-wall-card box-shadow p-3">
            <div className="d-flex">
                <div className="profile_icon mr-2">
                    <ProfileAvatar
                        src={props.profilePic}
                        className="rounded"
                        src_text={props.userName}
                        id={props.userId}
                        height={"40px"}
                        width={"40px"}
                    />
                </div>
                <div className="">
                    <div className="d-flex fntSz14">
                        <span className="text-link pr-2">@{props.userName}</span>
                        {/* <b className='text-elips fullname-txt'>{props.fullName}</b> */}
                    </div>
                    <p className="fntSz12 text-muted">{moment(props.postCreatedAt * 1000).format("yyyy-MM-DD hh:mm:ss a")}</p>
                </div>
            </div>
            <hr className="mt-0 mb-2" />
            {props.media?.[0]?.type === "video" ? (
                    <video width="100%" className="media-wall-video" controls poster={props.media?.[0]?.thumbnail}>
                        <source src={props.media?.[0]?.mediaUrl} type="video/mp4" />
                        <source src={props.media?.[0]?.mediaUrl} type="video/m3u8" />
                    </video>
                ) : (
                    <img
                        className="media-wall-img"
                        src={props.media?.[0]?.previewUrl}
                        onError={(e: any) => (e.target.src = "/images/article-placeholder.png")}
                        alt="placeholder"
                    />
                )}
            {/* {props.mediaType === 1 ? (
                <img
                    className="media-wall-img"
                    src={props.media?.[0]?.previewUrl}
                    onError={(e: any) => (e.target.src = "/images/article-placeholder.png")}
                    alt="placeholder"
                />
            ) : (
                <video width="100%" className="media-wall-video" controls poster={props.media?.[0].thumbnailUrl}>
                    {props.media?.[0]?.variants?.map((item, index) => (
                        <source key={index} src={item.url} type={item.contentType} />
                    ))}
                </video>
            )} */}
            <div className="d-flex fntSz14 mt-3">
                <div className="d-flex align-items-center pr-2">
                    <span className="material-symbols-outlined text-muted mr-1 fntSz18">chat</span>
                    <span className="fntSz14">{nFormatter(props.replyCount)}</span>
                </div>
                <div className="d-flex align-items-center px-2">
                    <span className="material-symbols-outlined text-muted mr-1 fntSz18">cached</span>
                    <span className="fntSz14">{nFormatter(props.retweetCount)}</span>
                </div>
                <div className="d-flex align-items-center px-2">
                    <span className="material-symbols-outlined text-muted mr-1 fntSz18">favorite</span>
                    <span className="fntSz14">{nFormatter(props.likeCount)}</span>
                </div>
                <div className="d-flex align-items-center pl-2 ml-auto">
                    <a
                        href={props.url}
                        target="_blank"
                        className="material-symbols-outlined text-muted mr-1 fntSz18 pointer"
                    >
                        trending_up
                    </a>
                </div>
            </div>
        </div>
    );
};
