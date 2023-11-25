import React from "react";
import Image from "../../../components/image";
import Media from "../../../components/Media";
import HeadNavHashTag from "./HeadNavHashTag";
import Search from "../../../components/Static/Search.png";
import Instagram from '../../../components/Static/Instagram.png';
import twitter from '../../../components/Static/TwitterLogo.png';

function MediaWall() {
  return (
    <div className="cont">
      <h6>Home / Facebook / Hashtag Analysis / Hashtag Report</h6>
                          
      <div className="d-flex justify-content-between"> 
      <h2 className="status mb-4 pb-4">Hashtag Report</h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/instagram/analysis/mediawall"><img src={Instagram} className="px-2" /></a>
          <a href="/twitter/analysis/mediawall"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

     
      <HeadNavHashTag />
      <div className="d-flex bs p-3 justify-content-between bg-white mt-3 mb-4 border-circle">
        <h2>#BJP</h2>
        <div className="searchHash">
          <Image
            src={Search}
            alt="none"
          />
          <input
            type="text"
            className="search"
            placeholder="Enter hashtag/keyword"
          />
        </div>
      </div>
      <div className='cont d-flex flex-wrap'>
      <Media profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postTime="2022-12-08  11:28:32"/>
      <Media profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postTime="2022-12-08  11:28:32"/>
      <Media profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postTime="2022-12-08  11:28:32"/>
      <Media profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postTime="2022-12-08  11:28:32"/>
      <Media profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postTime="2022-12-08  11:28:32"/>
      <Media profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postTime="2022-12-08  11:28:32"/>
      </div>
    </div>
  );
}

export default MediaWall;
