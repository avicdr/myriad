import React, { useEffect, useState } from "react";
import HeadNavAccounts from "./HeadNavAccounts";
import Instagram from "../../../components/Static/Instagram.png";
import twitter from "../../../components/Static/TwitterLogo.png";
import { getGroupFacebookAction } from "../../../redux/action";
import { useDispatch } from "react-redux";
import { patchWithToken, postWithToken } from "../../../utils/request";
import { useHistory, useLocation } from "react-router";
import { errorPopup, successPopup } from "../../../utils/popupMsg";

function TweetStats() {
  const dispatch = useDispatch();
  const history = useHistory();

  const location = useLocation();
  const { state } = location;

  // const [userType, setUserType] = useState("");
  const [groupList, setGroupList] = useState([]);

  const [groupId, setGroupId] = useState(state ? state?.item?.group_id : "");
  const [name, setName] = useState(state ? state?.item?.name : "");
  const [userName, setUserName] = useState(state ? state?.item?.user : "");
  const [email, setEmail] = useState(state ? state?.item?.email : "");
  const [password, setPassword] = useState(state ? state?.item?.password : "");
  const [phone, setPhone] = useState(state ? state?.item?.mobile : "");

  const submitForm = () => {
    console.log(state, "ppppppppppppppppp");

    if (!userName || !password || !email || !phone || !groupId) {
      errorPopup("Please fill in all required fields.");
      return;
    }
    if (state) {
      const payload = {
        id: state?.item?._id,
        password: password,
        email: email,
        mobile: phone,
        group_id: groupId,
      };
      patchWithToken("/facebook/accounts", payload)
        .then((d) => {
          history.push("/facebook/accounts/accounts");
          successPopup("Account Updated Successfully!");
        })
        .catch((e) => {
          errorPopup("Failed To Update Account!");
        });
    } else {
      const payload = {
        user: userName,
        password: password,
        email: email,
        mobile: phone,
        group_id: groupId,
      };
      postWithToken("/facebook/accounts", payload)
        .then((result) => {
          history.push("/facebook/accounts/accounts");
          successPopup("Account Added Successfully!");
        })
        .catch((e) => {
          errorPopup("Failed To Add Account!");
        });
    }
  };

  useEffect(() => {
    getGroupData();
  }, []);

  const getGroupData = () => {
    dispatch(getGroupFacebookAction())
      .then((result) => {
        setGroupList(result);
        console.log(result, "kkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      })
      .catch((err) => {});
  };
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Accounts / Add Account</h6>

          <div className="d-flex justify-content-between">
            <h2 className="status">Add Account</h2>
            <div className="p-3 d-flex justify-content-end">
              {/* <a href="/instagram/accounts/addaccount">
                <img src={Instagram} className="px-2" />
              </a> */}
              <a href="/twitter/accounts/addaccount">
                <img src={twitter} className="px-2" />
              </a>
            </div>
          </div>

          <HeadNavAccounts />
          {/* <div className="filterBox justify-content-end">
            <select name="userType" id="userType" className="dropDown">
              <option value="none"></option>
              <option value="dev">Developer</option>
              <option value="normla">Normal</option>
            </select>
            <button className="facebookbtnColoured">Go</button>
          </div> */}
          <div className="formContainer">
            <h2>Add Account</h2>
            <div className="addGroupForm mt-1">
              <div className="formFlex mr-2 w-100 g-10">
                <label htmlFor="groupName" className="formLabel">
                <span className="required">*</span>  Group{" "}
                </label>
                <select
                  name="region"
                  id="regionName"
                  className="dropDown w-100"
                  defaultValue={""}
                  value={groupId}
                  onChange={(e) => setGroupId(e.target.value)}
                >
                  <option value="none" disabled selected>
                    select group
                  </option>
                  {groupList &&
                    groupList?.length > 0 &&
                    groupList.map((item, index) => {
                      return (
                        <option key={item?.id} value={item?.id}>
                          {item?.name}
                        </option>
                      );
                    })}
                </select>
                {/* <label htmlFor="name" className="formLabel">
                  Name
                </label>
                <input
                  type="text"
                  className="inputBox"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                /> */}
                <label htmlFor="userName" className="formLabel">
                <span className="required">*</span>  UserName
                </label>
                <input
                  type="text"
                  className="inputBox"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <label htmlFor="mail" className="formLabel">
                <span className="required">*</span>   Email
                </label>
                <input
                  type="email"
                  className="inputBox"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password" className="formLabel">
                <span className="required">*</span>   Password
                </label>
                <input
                  type="text"
                  className="inputBox"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="mobileNumber" className="formLabel">
                <span className="required">*</span>  Mobile Number
                </label>
                <input
                  type="number"
                  className="inputBox"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <button
              className="facebookbtnColoured mt-2 mb-1"
              onClick={submitForm}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetStats;