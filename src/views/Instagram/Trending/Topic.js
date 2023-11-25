import React from 'react'
import HashTagGraph from "../../../components/Charts/HashTagGraph"
import HashTagStats from '../../../components/HashtagStats'
import HeadNavTrend from './HeadNavTrending';
import Facebook from '../../../components/Static/FacebookLogo.png';
import twitter from '../../../components/Static/TwitterLogo.png';

function Topics() {
  return (
    <div>
      <div className='cont'>
        <h6>Home / Trending / Topics</h6>

        <div className="d-flex justify-content-between"> 
        <h2 className='status'>
          Topic
        </h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/facebook/trending/topics"><img src={Facebook} className="px-2" /></a>
          <a href="/twitter/trending/topics"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

       
        <HeadNavTrend/>
        <div className="filterBox justify-content-end">
          <select name="userType" id="userType" className="dropDown">
            <option value="none"></option>
            <option value="dev">Developer</option>
            <option value="normla">Normal</option>
          </select>
          <button className="instragrambtnColoured">Go</button>
        </div>
        <HashTagGraph />
        <div className='d-flex justify-content-center'>
          <div className="details m-4 w-50">
            <div className="detailItem">
              <div className="index item">#</div>
              <div className="name item">HASHTAG</div>
              <div className="location item">Posts  VOLUME</div>
              <div className="actions item">ACTIONS</div>
            </div>
            <HashTagStats index="1" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="2" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="3" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="4" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="5" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="6" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="7" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="8" hashtag = "#abcd1" volume="10000"/>
          </div>
          <div className="details m-4 2-50">
            <div className="detailItem">
              <div className="index item">#</div>
              <div className="name item">HASHTAG</div>
              <div className="location item">Posts  VOLUME</div>
              <div className="actions item">ACTIONS</div>
            </div>
            <HashTagStats index="1" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="2" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="3" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="4" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="5" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="6" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="7" hashtag = "#abcd1" volume="10000"/>
            <HashTagStats index="8" hashtag = "#abcd1" volume="10000"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topics