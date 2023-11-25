import React from "react";
import Image from "../../../components/image";
import Media from "../../../components/Media";
import HeadNavHashTag from "./HeadNavHashTag";
import Search from "../../../components/Static/Search.png";
import worldCloud from "../../../components/Static/WorldCloud.png";
import PopularTweets from "../../../components/HashTag/PopularTweets";
import Cloud from "../../../components/Wordcloud/Cloud";
import Trendover from "../../../components/Trendover/Trendover";

export default function Wordcloud() {
    return (
        <div className="cont">
            <h6>Home / Twitter / HashTag Analysis / World cloud</h6>
            <h2 className="status mb-4 pb-4">World cloud</h2>

            <HeadNavHashTag />
            <div className="d-flex bs p-3 justify-content-between bg-white mt-3 mb-4 border-circle">
                <h2 className="mt-1">#BJP</h2>
                <div className="d-flex">
                    <div className="searchHash">
                        <Image src={Search} alt="none" height={""} width={""} />
                        <input type="text" className="search" placeholder="Enter hashtag/keyword" />
                    </div>
                    <select name="userType" id="userType" className="searchHash bg-white px-4">
                        <option value="none">Select by Users</option>
                        <option value="All">All</option>
                        <option value="Bot">Bot</option>
                        <option value="Influencer">Influencer</option>
                        <option value="Verified">Verified</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="col-12 bg-white p-3  border-circle">
                    <h5 className="font-poppins">World Cloud</h5>
                    <p className="color-light">Total languages on twitter</p>

                    <Cloud />
                </div>
                <div className="col-12 bg-white p-3 mt-4 border-circle">
                    <h5 className="font-poppins">#Hashtag World Cloud</h5>
                    <p className="color-light">Total languages on twitter</p>

                    <Cloud />
                </div>
            </div>

            <div className="col-12 mt-4">
                <h5 className="font-poppins">Trendover Timeline</h5>
                <p className="color-light">Total languages on twitter</p>
                <div className="row align-items-start">
                    <div className="col bg-white p-3 m-2 border-circle">
                        <Trendover />
                    </div>
                    {/* <div className="col bg-white p-3 m-2 border-circle">
    <Trendover/>
    </div>
    <div className="col bg-white p-3 m-2 border-circle">
    <Trendover/>
    </div> */}
                </div>
            </div>
        </div>
    );
}
