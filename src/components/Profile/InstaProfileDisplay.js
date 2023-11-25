import React from "react";
import Image from "../image";

function ProfileDisplay(props) {
  return (
    <div>
      <div className="profileDisplay pt-2 pb-2 bg-white border-circle">
        <div className="banner">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEJJEgrLdblBVBPZROA0z4wNo0baKT5-iUGk-FRLOjQeNZYfS-nJnqaH_FFr2-FYxqtk&usqp=CAU"
            alt="banner"
          />
        </div>

        <div className="wrapper-content">
          <div className="prof-container flex-column">
            <aside className="profile">
              <Image
                src="https://images.unsplash.com/photo-1636748610874-faf172674542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                className="avatar"
                alt="Gabriel de Jesus"
              />
            </aside>
            <div className="d-flex mt-2 mb-2">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-center">
                  <div className="d-flex  flex-column">
                    <div className="fntSz18 text-center">John Doe</div>
                    <div className="leftName text-center">@johndoe123</div>
                  </div>
                  {props.follow === "true" ? (
                    <div className="instragrambtnColoured" style={{ margin: "0 auto" }}>
                      Follow
                    </div>
                  ) : (
                    ""
                  )}
                  {props.unfollow === "true" ? (
                    <div className="instragrambtnColoured" style={{ margin: "0 auto" }}>
                      Unfollow
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="d-flex mt-4 w-max-content">
                  <div className="mr-2">2.46K Following</div>
                  <div className="mr-2">468.44K Followers</div>
                </div>
              </div>
              <hr className="vertical mr-4 mb-4 pt-2" />
              <div className="sideText">
                As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu &
                Kashmir, let’s take a look at #CongressKashmirBlunders, starting
                from Nehru. (1/n) https://t.co/dEzKFzl40Q
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDisplay;
