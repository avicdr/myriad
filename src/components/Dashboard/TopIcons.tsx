import React, { useEffect, useState } from "react";

import UpArrow from "../Static/UpArrow.png"
import twiiter from "../../components/Static/TwitterLogo.png"
import media from "../../components/Static/icons/social-media.png"
import retweet from '../../components/Static/icons/retweet.png'
import like from "../../components/Static/icons/icons8-heart-50.png"
import comment from '../../components/Static/icons/speech-bubble.png'
import User from "../Static/icons/icons8-user-60.png"
import dev from "../Static/icons/icons8-devops-60.png"
import { getDashboardCARDAction } from "../../redux/action";

import { ReduxStore } from "../../redux/reducer/reducer";
import { useDispatch, useSelector } from "react-redux";


function TopIcons(props: any) {
  console.log(props.usertweet)

  const [show, setShow] = useState(true)

  const [tweet, setTweet] = useState(props.usertweet);
  const [overviewDateRange, setOverviewDateRange] = React.useState([
    new Date('11-08-2022'),
    new Date(),
])


  let sdEpoch =
  (overviewDateRange[0].getTime() -
      overviewDateRange[0].getMilliseconds()) /
  1000
let edEpoch =
  (overviewDateRange[1].getTime() -
      overviewDateRange[1].getMilliseconds()) /
  1000


  const card = useSelector((state: ReduxStore) => state.State.card) as {
    total_tweets?: Record<number, number>,
    total_media_tweets?: Record<number, number>,
    total_retweets?: Record<number, number>,
    total_likes?: Record<number, number>,
    total_comments?: Record<number, number>,
    total_user_tweets?: Record<number, number>,
    total_dev_tweets?: Record<number, number>,

  } | undefined;
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getDashboardCARDAction({
      region_id: null,
      account_id: null,
      start_date: `${sdEpoch}`,
      end_date: `${edEpoch}`,

    }
    ));


  }, []);


  console.log(card, card.total_tweets, "CARD")

  return (
    <div className="col-12 col-lg-12 col- d-flex w-100">
      <div className="displayBox d-flex bg-white mr-5 px-3 py-2 border-circle w-20 justify-content-center">

        <div className="d-flex justify-content-center">
          <div className="py-4  px-1">
            <img src={twiiter} width="50px" height="50px" className="fntSz 15" />
          </div>
          <div className="ml-2 mt-2 text-align-center ">
            <div className="d-flex align-items-center">
            <h6 className="fntSz21 bold mt-1 ml-3" >
            {`${card?.total_tweets}`}
            </h6>
              {/* <img src={UpArrow} alt="" className="ml-4 h-fit-content" />
              <div className="textGreen">3%</div> */}
            </div>
            <p className="fntSz 15 color-light text-align-center ml-1">Total Tweets</p>
          </div>


        </div>
      </div>
      <div className="displayBox d-flex bg-white mr-5 px-3   py-2 border-circle w-20 justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="py-4  px-1">
            <img src={media} width="50px" height="50px" className="fntSz 15" />

          </div>
          <div className="ml-2 mt-2 text-align-center">

            <div className="d-flex align-items-center">
              <h6 className="fntSz21 bold mt-1 ml-3" >
                {`${card?.total_media_tweets}`}
              </h6>
              {/* <img src={UpArrow} alt="" className="h-fit-content" />
              <div className="textGreen">3%</div> */}
            </div>
            <p className="fntSz 15 color-light text-align-center ml-1">Media Tweets</p>
          </div>


        </div>

      </div>
      <div className="displayBox d-flex bg-white mr-5 px-3    py-2 border-circle w-20 justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="py-4  px-1">
            <img src={dev} width="50px" height="50px" className="fntSz 15" />

          </div>
          <div className="ml-2 mt-2  text-align-center">

            <div className="d-flex align-items-center">
              <h6 className="fntSz21 bold mt-1 ml-3" >
                {`${card?.total_dev_tweets}`}
              </h6>
              {/* <img src={UpArrow} alt="" className="h-fit-content" />
              <div className="textGreen">3%</div> */}
            </div>
            <p className="fntSz 15 color-light text-align-center ml-1">Dev <br/>Tweet</p>
          </div>


        </div>

      </div>
      <div className="displayBox d-flex bg-white mr-5 px-3  py-2  border-circle w-20 justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="py-4  px-1">
            <img src={User} width="50px" height="50px" className="fntSz 15" />

          </div>
          <div className="ml-2 mt-2 text-align-center">

            <div className="d-flex align-items-center">
              <h6 className="fntSz21 bold mt-1 ml-3" >
                {`${card?.total_user_tweets}`}
              </h6>
              {/* <img src={UpArrow} alt="" className="h-fit-content" />
              <div className="textGreen">3%</div> */}
            </div>
            <p className="fntSz 15 color-light text-align-center ml-1">User Tweet</p>
          </div>


        </div>

      </div>
      <div className="displayBox d-flex bg-white mr-5 px-3   py-2 border-circle w-20 justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="py-4  px-1">
            <img src={retweet} width="50px" height="50px" className="fntSz 15" />

          </div>
          <div className="ml-2 mt-2 text-align-center">

            <div className="d-flex align-items-center">

              <h6 className="fntSz21 bold mt-2 ml-3" >
                {`${card?.total_retweets}`}
              </h6>
              {/* <img src={UpArrow} alt="" className="h-fit-content" />
              <div className="textGreen">3%</div> */}
            </div>
            <p className="fntSz 15 color-light text-align-center">Retweet</p>
          </div>


        </div>

      </div>
      <div className="displayBox d-flex bg-white mr-5 px-3  py-2  border-circle w-20 justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="py-4  px-1">
            <img src={like} width="50px" height="50px" className="fntSz 15" />

          </div>
          <div className="ml-2 mt-2  text-align-center">

            <div className="d-flex align-items-center">
              <h6 className="fntSz21 bold mt-2 ml-3" >
                {`${card?.total_likes}`}
              </h6>
              {/* <img src={UpArrow} alt="" className="h-fit-content" />
              <div className="textGreen">3%</div> */}
            </div>
            <p className="fntSz 15 color-light text-align-center pl-2">Likes</p>
          </div>


        </div>

      </div>
      <div className="displayBox d-flex bg-white mr-5 px-3   py-2 border-circle w-20 justify-content-center">

        <div className="d-flex justify-content-center">
          <div className="py-4  px-1">
            <img src={comment} width="50px" height="50px" className="fntSz 15" />

          </div>
          <div className="ml-2 mt-2 text-align-center">

            <div className="d-flex align-items-center">
              <h6 className="fntSz21 bold mt-2 ml-3" >
                {`${card?.total_comments}`}
              </h6>
              {/* <img src={UpArrow} alt="" className="h-fit-content" />
              <div className="textGreen">3%</div> */}
            </div>
            <p className="fntSz 15 color-light text-align-center">Comments</p>
          </div>


        </div>

      </div>
    </div>
  );
}

export default TopIcons;




