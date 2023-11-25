import React from "react";

type Props = {
  profileUrl: string;
  postUrl: string;
  postText: string;
  userName: string;
  profileName: string;
  postTime: string;
};

function Media(props: Props) {
  return (
    <React.Fragment>
      <div className="w-33">
        <div className="cont d-flex flex-wrap justify-content-between w-100">
          <div className="postCard p-3 bg-white d-flex flex-column border-circle m-3 poppins w-100">
            <div className="d-flex w-max-content">
              <img src={props.profileUrl} className="pfp" />
              <div className="d-flex flex-column ml-3 mr-3 justify-content-center">
                <div className="user d-flex fntSz18 bold">
                  <div className="leftName pointer bold">@{props.userName}</div>{" "}
                  <div className="pl-2 pr-2">|</div>{" "}
                  <div className="rightName">{props.profileName}</div>
                </div>
                <div className="dateTime fntSz14">{props.postTime}</div>
              </div>
            </div>
            <hr />
            <div className="imageCont position-relative">
              <img
                src={props.postUrl}
                className="mt-2 mb-2 wh-320 border-circle"
              />
              <div className="textBlock position-absolute">
                {props.postText.substring(0, 150).concat("...")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Media;
