import React from 'react'
import Follower from './Follower'

function Followers() {
  return (
    <div>
      <div className="p-3 m-3 border-circle bg-white">
        <div className="w-100 p-3 mb-3 bg-green-analysis d-flex align-items-center justify-content-between border-circle">
          <h4 className="bold">Followers</h4>
          <button className='button' style={{"background":"#D48F4B"}}>Download And Print</button>
        </div>
        <Follower userId="johndoe" userName="john Doe" tweets="20" following="14" followers="25" listed="10"/>
        <Follower userId="johndoe" userName="john Doe" tweets="20" following="14" followers="25" listed="10"/>
        <Follower userId="johndoe" userName="john Doe" tweets="20" following="14" followers="25" listed="10"/>
        <Follower userId="johndoe" userName="john Doe" tweets="20" following="14" followers="25" listed="10"/>
        <Follower userId="johndoe" userName="john Doe" tweets="20" following="14" followers="25" listed="10"/>
        <Follower userId="johndoe" userName="john Doe" tweets="20" following="14" followers="25" listed="10"/>
        <Follower userId="johndoe" userName="john Doe" tweets="20" following="14" followers="25" listed="10"/>
        <Follower userId="johndoe" userName="john Doe" tweets="20" following="14" followers="25" listed="10"/>
        <Follower userId="johndoe" userName="john Doe" tweets="20" following="14" followers="25" listed="10"/>
        <Follower userId="johndoe" userName="john Doe" tweets="20" following="14" followers="25" listed="10"/>
        <Follower userId="johndoe" userName="john Doe" tweets="20" following="14" followers="25" listed="10"/>
        </div>
    </div>
  )
}

export default Followers