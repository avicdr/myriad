import React from 'react'
import HeadNavTrend from './HeadNavTrending'
import Post from '../../../components/Post';
import Instagram from '../../../components/Static/Instagram.png';
import twitter from '../../../components/Static/TwitterLogo.png';

function Todo() {
  return (
    <div>
      <div className='cont'>
        <h6>Home /Facebook/ Now Trending - Posts</h6>
                     
        <div className="d-flex justify-content-between"> 
        <h2 className='status'>
          Trending
        </h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/instagram/trending/posts"><img src={Instagram} className="px-2" /></a>
          <a href="/twitter/trending/posts"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

        
        <HeadNavTrend />
        <div className="filterBox justify-content-end">
          <select name="userType" id="userType" className="dropDown">
            <option value="none"></option>
            <option value="dev">Developer</option>
            <option value="normla">Normal</option>
          </select>
          <button className="facebookbtnColoured">Go</button>
        </div>
        <div className='cont d-flex flex-wrap'>
          <Post profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' />
          <Post profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' />
          <Post profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' />
          <Post profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' />
          <Post profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' />
          <Post profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' />
          <Post profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' />
          <Post profileName='John Doe' userName='johndoe123' profileUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' postText='As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir, let’s take a look at #CongressKashmirBlunders, starting from Nehru. (1/n) https://t.co/dEzKFzl40Q' postUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExDDfTWYIGeO3K3ua6JrtzoOtFTvY_wvLhKJFsGmvNz2oRwlFkrzP4YsMT8sCrRMl8RM&usqp=CAU' />
        </div>
      </div>
    </div>
  )
}

export default Todo