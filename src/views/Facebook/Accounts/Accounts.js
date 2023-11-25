import React, { useEffect, useState } from "react";
import HeadNavAccounts from "./HeadNavAccounts";
import Instagram from "../../../components/Static/Instagram.png";
import twitter from "../../../components/Static/TwitterLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { populateGroupSelect } from "../../../utils/functions";
import { getAccountAction } from "../../../redux/action";
import AccountData from "../../Twitter/Accounts/AccountData";
import { Link } from "react-router-dom";
import { deleteWithToken, getWithToken } from "../../../utils/request";
import { errorPopup, successPopup } from "../../../utils/popupMsg";

function Accounts() {
  const dispatch = useDispatch();
  // const { accountlist } = useSelector((state) => state.State);
  const [accountList, setAccountList] = useState([]);

  const getFacebookAccountApi = async () => {
    let url = `facebook/accounts?account_type=user&skip=0&limit=10`;
    const response = await getWithToken(url);
    console.log("accountreasponse", response?.data?.data);
    setAccountList(response?.data?.data);
  };
  const deleteAccount=(id)=>{
    deleteWithToken("/facebook/accounts", {id})
    .then((result) => {
      successPopup("Account Deleted Successfully!");
      getFacebookAccountApi();
    })
    .catch((e) => {
      errorPopup("Failed To Delete Account!");
    });

  }
  useEffect(() => {
    populateGroupSelect("accounts_by_group");
    // dispatch(getAccountAction({ skip: 0, limit: 10, accountType: "user" }));
    getFacebookAccountApi();
    // console.log("list:", accountlist);
  }, []);

  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Accounts / Accounts</h6>

          <div className="d-flex justify-content-between">
            <h2 className="status">Accounts</h2>
            <div className="p-3 d-flex justify-content-end">
              <a href="/instagram/accounts/accounts">
                <img src={Instagram} className="px-2" />
              </a>
              <a href="/twitter/accounts/accounts">
                <img src={twitter} className="px-2" />
              </a>
            </div>
          </div>

          <HeadNavAccounts />
          {/* <div className="filterBox justify-center">
           
            <select name="userType" id="userType" className="dropDown">
              <option value="none">Accounts By Group</option>
              <option value="dev">Developer</option>
              <option value="normla">Normal</option>
            </select>
            <button className="facebookbtnColoured">Go</button>
          </div> */}
          {/* <div className="details w-100">
            <div className="detailItem w-100 justify-content-between">
              <div className="index item w-16">#</div>
              <div className="name item w-16">GROUP NAME</div>
              <div className="tweet item w-16">GROUP DESCRIPTION</div>
              <div className="location item w-16">GROUP REGION</div>
              <div className="timeStamp item w-16">TOTAL ACCOUNTS</div>
              <div className="actions item w-16">ACTIONS</div>
            </div>
            <div className="detailItemStats justify-content-between">
              <div className="index item w-16">1</div>
              <div className="name item w-16">Horrow Suranjan</div>
              <div className="tweet item w-16">
                {"Andrew Tate arrested by Romanian authorities in th ..."
                  .substring(0, 50)
                  .concat("...")}
              </div>
              <div className="location item w-16">Mumbai</div>
              <div className="timeStamp item w-16">5</div>
              <div className="actions item w-16">
                <img
                  src="https://static.thenounproject.com/png/3391373-200.png"
                  alt="none"
                />
                <img
                  src="https://img.icons8.com/material-rounded/256/trash.png"
                  alt="none"
                />
              </div>
            </div>
          </div> */}

          <div className="details w-100">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone no.</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {accountList &&
                  accountList.map((item, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item?.user || "N/A"}</td>
                      <td>{item?.email || "N/A"}</td>
                      <td>{item?.mobile || "N/A"}</td>
                      <td>{item?.status || "N/A"}</td>
                      <td>
                        <Link
                          to={{
                            pathname: "/facebook/accounts/addaccount",
                            state: { item },
                          }}
                        >
                          <img
                            src="https://static.thenounproject.com/png/3391373-200.png"
                            alt="none"
                            width="20px"
                            height="20px"
                            className="mx-2"
                          />
                        </Link>
                        <img
                          src="https://img.icons8.com/material-rounded/256/trash.png"
                          alt="none"
                          width="20px"
                          height="20px"
                          className="mx-2"
                          onClick={() => deleteAccount(item?._id)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
