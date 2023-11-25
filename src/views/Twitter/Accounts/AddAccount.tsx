import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Facebook from "../../../components/Static/FacebookLogo.png";
// import Instagram from "../../../components/Static/Instagram.png";
import { errorPopup, successPopup } from "../../../utils/popupMsg";
import { patchWithToken, postWithToken } from "../../../utils/request";
import HeadNavAccounts from "./HeadNavAccounts";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../../redux/reducer/reducer";
import ReactSelect from "react-select";
import { getGroupTweetAction } from "../../../redux/action";

function AddAccount() {
    const history = useHistory();
    const { groupslist } = useSelector((state: ReduxStore) => state.State);
    const dispatch = useDispatch();

    const [Name, setName] = useState<any>("");
    const [Email, setEmail] = useState<any>("");
    const [Password, setPassword] = useState<any>("");
    const [mobileNumber, setMobileNumber] = useState<any>("");
    const [group, setGroup] = useState<any>("");
    const [userName, setUserName] = useState<any>();
    const [errors, setErrors] = useState<any>({});


    useEffect(() => {
        dispatch(
            getGroupTweetAction({
                skip: 0,
                limit: 0,
            })
        );
    }, []);

    

    const handleSubmit = () => {
        if (!Name || !userName || !Email || !Password || !mobileNumber) {
            errorPopup("Please fill in all required fields.");
            return;
          }
        const payload = {
            name: Name,
            group_id: group?.value,
            group_name: group?.label,
            username: userName,
            email: Email,
            password: Password,
            mobile: mobileNumber,
            account_type: "user",
        };
        postWithToken("/accounts", payload)
            .then(() => {
                history.push("/twitter/accounts/accounts");
                successPopup("Account added successfully.");
            })
            .catch((e) => {
                errorPopup("Failed To Update Account!");
            });
    };


    
    return (
        <div>
            <div>
                <div className="cont">
                    <h6>Home / Accounts / Add Account</h6>

                    <div className="d-flex justify-content-between">
                        <h2 className="status">Add Account</h2>
                        <div className="p-3 d-flex justify-content-end">
                            {/* <a href="/instagram/accounts/addgroup">
                                <img src={Instagram} className="px-2" />
                            </a> */}
                            <a href="/facebook/accounts/addgroup">
                                <img src={Facebook} className="px-2" />
                            </a>
                        </div>
                    </div>

                    <HeadNavAccounts />
                    <div className="formContainer">
                        <h2>Add Accounts </h2>
                        <div>
                            <div className="w-100">
                                <label htmlFor="groupName" className="formLabel">
                                <span className="required">*</span> Group{" "}
                                </label>
                                <ReactSelect
                                    options={groupslist?.map((item) => ({ label: item.name, value: item.id }))}
                                    value={group}
                                    onChange={setGroup}
                                    placeholder={"Select Group..."}
                                    className="m-0"
                                    isClearable
                                    isMulti={false}
                                    styles={{
                                        container: (base) => ({
                                            ...base,
                                            width: "100%",
                                            margin: "0 1rem",
                                            padding: "6px",
                                            borderRadius: "12px",
                                        }),
                                        control: (base) => ({
                                            ...base,
                                            padding: "6px",
                                            borderRadius: "12px",
                                        }),
                                    }}
                                />
                            </div>
                            <div className="addGroupForm mt-1 normal-form">
                                <div className="formFlex mr-2 w-100 g-10 ">
                                    <label htmlFor="name" className="formLabel">
                                    <span className="required">*</span> Name
                                    </label>
                                    <input
                                        type="text"
                                        className="inputBox"
                                        onChange={(e) => {
                                            console.log(e);
                                            setName(e.target.value);
                                        }}
                                        value={Name}
                                    />
                                    <label htmlFor="userName" className="formLabel">
                                    <span className="required">*</span>  User Name
                                    </label>
                                    <input
                                        type="text"
                                        className="inputBox"
                                        onChange={(e) => {
                                            setUserName(e.target.value);
                                        }}
                                        value={userName}
                                    />
                                    <label htmlFor="mail" className="formLabel">
                                    <span className="required">*</span> Email
                                    </label>
                                    <input
                                        type="text"
                                        className="inputBox"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        value={Email}
                                    />
                                    <label htmlFor="password" className="formLabel">
                                    <span className="required">*</span>    Password
                                    </label>
                                    <input
                                        type="text"
                                        id="password"
                                        className="inputBox"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        value={Password}
                                    />
                                    <label htmlFor="mobileNumber" className="formLabel">
                                    <span className="required">*</span> Mobile Number
                                    </label>
                                    <input
                                        type="text"
                                        className="inputBox"
                                        onChange={(e) => {
                                            setMobileNumber(e.target.value);
                                        }}
                                        value={mobileNumber}
                                    />
                                    <button className="btnColoured mt-2 mb-1 w-250" onClick={handleSubmit}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddAccount;
