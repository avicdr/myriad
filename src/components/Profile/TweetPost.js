import React from "react";
import Image from "../image";

function TweetPost() {
  return (
    <div className="d-flex flex-wrap">
      <div className="d-flex w-35 p-4 m-4 bg-white border-circle h-fit-content w-50">
        <div className="d-flex w-40 p-3 m-3 bg-white border-circle h-fit-content w-fit-content">
          <div className="d-flex flex-column">
            <div className="d-flex profilePicture align-items-center">
              <Image
                src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
                alt=""
              />
              <div className="leftName pl-3 pr-3 fntSz20">@johndoe123</div>
              <hr className="vertical fntSz20" />
              <div className="pl-3 fntSz20">John Doe</div>
            </div>
            <div className="fntSz14 mt-3 mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              beatae quidem molestias delectus nisi praesentium ab non
              accusantium velit et Lorem ipsum dolor sit amet consectetur
              adipisicing elit. A tenetur, culpa repudiandae sed dolorem
              necessitatibus enim recusandae non officia omnis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetPost;


        {/* <div className="d-flex flex-column">
          <div className="d-flex profilePicture align-items-center">
            <Image
              src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
              alt=""
            />
            <div className="leftName pl-3 pr-3 fntSz20">@johndoe123</div>
            <hr className="vertical fntSz20" />
            <div className="pl-3 fntSz20">John Doe</div>
          </div>
          <div className="fntSz14 mt-3 mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            beatae quidem molestias delectus nisi praesentium ab non accusantium
            velit et Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            tenetur, culpa repudiandae sed dolorem necessitatibus enim
            recusandae non officia omnis.
          </div>
          <Image
            src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
            className=" align-self-center w-90 postImg border-circle"
          />
          <div className="d-flex">
            <div className="d-flex pr-3 align-items-center">
              <Image src={Comment} alt="" className="p-2" />
              <div>587</div>
            </div>
            <div className="d-flex pr-3 align-items-center">
              <Image src={Retweet} alt="" className="p-2" />
              <div>4,610</div>
            </div>
            <div className="d-flex pr-3 align-items-center">
              <Image src={Like} alt="" className="p-2" />
              <div>9,51,3326</div>
            </div>
            <div className="d-flex pr-3 align-items-center">
              <Image src={People} alt="" className="p-2" />
              <div>9,51,3326</div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column">
        <div className="d-flex w-40 p-3 m-3 bg-white border-circle h-fit-content w-fit-content">
          <div className="d-flex flex-column">
            <div className="d-flex profilePicture align-items-center">
              <Image
                src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
                alt=""
              />
              <div className="leftName pl-3 pr-3 fntSz20">@johndoe123</div>
              <hr className="vertical fntSz20" />
              <div className="pl-3 fntSz20">John Doe</div>
            </div>
            <div className="fntSz14 mt-3 mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              beatae quidem molestias delectus nisi praesentium ab non
              accusantium velit et Lorem ipsum dolor sit amet consectetur
              adipisicing elit. A tenetur, culpa repudiandae sed dolorem
              necessitatibus enim recusandae non officia omnis.
            </div>
            <div className="d-flex">
              <div className="d-flex pr-3 align-items-center">
                <Image src={Comment} alt="" className="p-2" />
                <div>587</div>
              </div>
              <div className="d-flex pr-3 align-items-center">
                <Image src={Retweet} alt="" className="p-2" />
                <div>4,610</div>
              </div>
              <div className="d-flex pr-3 align-items-center">
                <Image src={Like} alt="" className="p-2" />
                <div>9,51,3326</div>
              </div>
              <div className="d-flex pr-3 align-items-center">
                <Image src={People} alt="" className="p-2" />
                <div>9,51,3326</div>
              </div>
            </div>
          </div>
        </div> */}