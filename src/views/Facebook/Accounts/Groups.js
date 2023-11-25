import React, { useEffect, useState } from "react";
import HeadNavAccounts from "./HeadNavAccounts";
import Instagram from "../../../components/Static/Instagram.png";
import twitter from "../../../components/Static/TwitterLogo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getGroupFacebookAction,
  getGroupTweetAction,
} from "../../../redux/action";
import GroupRowData from "../../Twitter/Accounts/GroupRowData";
import { Link } from "react-router-dom";
import { deleteWithToken } from "../../../utils/request";
import { errorPopup, successPopup } from "../../../utils/popupMsg";

function TweetStats() {
  const { groupslist } = useSelector((state) => state.State);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getGroupFacebookAction({
        skip: 0,
        limit: 0,
      })
    );
  }, []);

  const handleDelete = async (id) => {
    console.log("id", id);
    await deleteWithToken(`/facebook/groups`, {
      id: id,
    });
    successPopup("group delete successfully");
    await dispatch(
      getGroupFacebookAction({
        skip: 0,
        limit: 0,
      })
    );
  };

  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Accounts / Groups</h6>

          <div className="d-flex justify-content-between">
            <h2 className="status">Groups</h2>
            <div className="p-3 d-flex justify-content-end">
              {/* <a href="/instagram/accounts/groups">
                <img src={Instagram} className="px-2" />
              </a> */}
              <a href="/twitter/accounts/groups">
                <img src={twitter} className="px-2" />
              </a>
            </div>
          </div>

          <HeadNavAccounts />

          <div className="details w-100">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Group Name</th>
                  {/* <th scope="col">GROUP DESCRIPTION</th> */}
                  <th scope="col">Group Region</th>
                  <th scope="col">Total Accounts</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {groupslist.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item?.name}</td>
                    {/* <td>{item?.description || "N/A"}</td> */}
                    <td>{item?.region}</td>
                    <td>{item?.total_accounts}</td>
                    <td>
                      <Link
                        to={{
                          pathname: "/facebook/accounts/addgroup",
                          state: { item },
                        }}
                      >
                        <img
                          src="https://static.thenounproject.com/png/3391373-200.png"
                          alt="none"
                          width="20px"
                          height="20px"
                          className="mx-2 cursor-pointer"
                        />
                      </Link>
                      <img
                        src="https://img.icons8.com/material-rounded/256/trash.png"
                        alt="none"
                        width="20px"
                        height="20px"
                        className="mx-2 cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                      />
                    </td>
                  </tr>
                  // <GroupRowData item={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default TweetStats;
