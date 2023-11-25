import React from "react";
import Image from "../../../components/image";
import Media from "../../../components/Media";
import HeadNavHashTag from "./HeadNavHashTag";
import Search from "../../../components/Static/Search.png";
import Emoji from "../../../components/Static/Emoji.png";
import Attach from "../../../components/Static/Attach.png";
import Upload from "../../../components/Static/Upload.png";
import like from "./like.png";
import comment from "../../../components/Static/Comment.png";

export default function Tweetaction() {
    return (
        <div className="cont">
            <h6>Home / Twitter / HashTag Analysis / Tweet Action</h6>
            <h2 className="status mb-4 pb-4">Tweet Action</h2>
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

            <div className="postContainer mt-2 mb-2 mr-1">
                <div className="post">
                    <div className="profile">
                        <div className="d-f">
                            <img
                                src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                                alt="none"
                            />
                            <div>John Doe</div>
                        </div>
                        <img
                            className="crossIcon"
                            src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                            alt="none"
                        />
                    </div>

                    <hr></hr>
                    <div className="px-1 text-justify comment">
                        China failed drastically wittheir "Zero Covid" policy. Their new policy: "Let whoever needs to be infected infected, let
                        whoever needs to die, die.”
                    </div>
                    <div className="lcr">
                        <img src={like} alt="" /> 1k
                        <img src={comment} alt="" /> 500
                        <img src="https://cdn-icons-png.flaticon.com/512/126/126502.png" alt="" /> 300
                    </div>
                    <hr></hr>
                    <div className="postInput my-2 mx-1">
                        <textarea name="content" id="content" cols={30} rows={10} placeholder="Write your tweet here..."></textarea>
                        <div className="paraphrase fntSz14 bluecolor p-3"></div>
                        <div className="icons d-flex justify-content-end">
                            <Image src={Emoji} alt="" className="p-2" height={""} width={""} />
                            <Image src={Upload} alt="" className="p-2" height={""} width={""} />
                            <Image src={Attach} alt="" className="p-2" height={""} width={""} />
                        </div>
                    </div>
                    <div className="translation">
                        <div className="heading mt-2">
                            <h5>Translation</h5>
                        </div>
                        <select name="region" id="regionName" className="transDropDown">
                            <option value="none">From Language</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                        <select name="userType" id="userType" className="transDropDown">
                            <option value="none">To Language</option>
                            <option value="dev">Developer</option>
                            <option value="normla">Normal</option>
                        </select>
                        <button className="btnColoured">Go</button>
                    </div>

                    <div className="my-4 pb-3 d-flex justify-content-between">
                        <button className="btnColoured">Comment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
