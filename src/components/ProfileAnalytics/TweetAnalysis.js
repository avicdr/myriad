import React from 'react'

function TweetAnalysis(props) {
  return (
    <div>
      <div className='p-3 mt-3 mb-3 border-circle bg-white'>
        <div className='w-100 p-3 mb-3 bg-green-analysis d-flex align-items-center justify-content-between border-circle'>
          <h4 className='bold'>Tweet Analysis</h4>
          <button className='button' style={{"background":"#D48F4B"}}>Download And Print</button>
        </div>
        <div className="d-flex justify-content-around m-2 p-3" style={{background: "#F9F9F9", borderRadius: "12px"}}>
            <div className="d-flex flex-column pl-2 pr-2 justify-content-center text-center">
              <div className="bold fntSz18">{props.tweets}</div>
              <div className="profileDetails">Tweets</div>
            </div>
            <hr className="vertical"/>
            <div className="d-flex flex-column pl-2 pr-2 justify-content-center text-center">
              <div className="bold fntSz18">{props.perDay}</div>
              <div className="profileDetails">Tweets per day</div>
            </div>
            <hr className="vertical"/>
            <div className="d-flex flex-column pl-2 pr-2 justify-content-center text-center">
              <div className="bold fntSz18">{props.retweets}</div>
              <div className="profileDetails">Retweets</div>
            </div>
            <hr className="vertical"/>
            <div className="d-flex flex-column pl-2 pr-2 justify-content-center text-center">
              <div className="bold fntSz18">{props.mentions}</div>
              <div className="profileDetails">User mentions</div>
            </div>
            <hr className="vertical"/>
            <div className="d-flex flex-column pl-2 pr-2 justify-content-center text-center">
              <div className="bold fntSz18">{props.replies}</div>
              <div className="profileDetails">Replies</div>
            </div>
            <hr className="vertical"/>
            <div className="d-flex flex-column pl-2 pr-2 justify-content-center text-center">
              <div className="bold fntSz18">{props.links}</div>
              <div className="profileDetails">Links</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TweetAnalysis