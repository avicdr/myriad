import React, { useEffect, useState } from "react";
import HeadNavAccounts from "./HeadNavAccounts";
// import Instagram from "../../../components/Static/Instagram.png";
import twitter from "../../../components/Static/TwitterLogo.png";

import { useDispatch } from "react-redux";
import { patchWithToken, postWithToken } from "../../../utils/request";
import { useLocation } from "react-router";
import { errorPopup, successPopup } from "../../../utils/popupMsg";
import {getGroupTweetAction } from "../../../redux/action";


function EditAccount() {
    const dispatch = useDispatch();

    const location = useLocation();
    const { state } = location;

    // const [userType, setUserType] = useState("");
    const [groupList, setGroupList] = useState([]);

    const [Name, setName] = useState(state ? state?.item?.name : "");
    const [email, setEmail] = useState(state ? state?.item?.email : "");
    const [password, setPassword] = useState(state ? state?.item?.password : "");
    const [mobile, setMobile] = useState(state ? state?.item?.mobile : "");
    const [group_id, setGroup_id] = useState(state ? state?.item?.group_id : "");
    const [userName, setUserName] = useState(state ? state?.item?.username : "");
    const [group_name, setGroup_name] = useState(state ? state?.item?.group : "");

    const submitForm = () => {
        console.log(state)
        if (state) {
            const payload = {
          
                id: "62db4148734a6ca5bf6d18f6",
                group_id : group_id,
                group_name : group_name,
                password : password,
                email: email,
                mobile : mobile
            
            };
            patchWithToken("accounts", payload)
                .then((d) => {
                    successPopup("Account Updated Successfully!");
                })
                .catch((e) => {
                    errorPopup("Failed To Update Account!");
                });
        }


    };

    useEffect(() => {
        getGroupData();
    }, []);

    const getGroupData = () => {
        dispatch(getGroupTweetAction({
            skip: 0,
            limit: 0,
        }))
            .then((result) => {
                setGroupList(result);
                console.log(result);
            })
            .catch((err) => { });
    };
    return (
        <div>
            <div>
                <div className="cont">
                    <h6>Home / Accounts / Edit Account</h6>

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
                  
                    <div className="formContainer">   
                        <h2>Edit Account</h2>
                        <div className="addGroupForm mt-1">
                            <div className="formFlex mr-2 w-100 g-10">
                                <label TweetStatshtmlFor="groupName" className="formLabel">
                                    Group{" "}
                                </label>
                                <select
                                    name="region"
                                    id="regionName"
                                    className="dropDown w-100"
                                    defaultValue={""}
                                    value={group_id}
                                    onChange={(e) => setGroup_id(e.target.value)}
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
                          
                                <label htmlFor="userName" className="formLabel">
                                    UserName
                                </label>
                                <input
                                    type="text"
                                    className="inputBox"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                <label htmlFor="mail" className="formLabel">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="inputBox"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="password" className="formLabel">
                                    Password
                                </label>
                                <input
                                    type="text"
                                    className="inputBox"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="mobileNumber" className="formLabel">
                                    Mobile Number
                                </label>
                                <input
                                    type="number"
                                    className="inputBox"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
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

export default EditAccount;
