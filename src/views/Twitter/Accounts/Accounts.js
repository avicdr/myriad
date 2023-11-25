import React, { useEffect } from "react";
import Image from "../../../components/image";
import HeadNavAccounts from "./HeadNavAccounts";
import {
  populateAccounts,
  deleteAccount,
  populateGroupSelect,
} from "../../../utils/functions";
import Instagram from "../../../components/Static/Instagram.png";
import Facebook from "../../../components/Static/FacebookLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { getAccountAction } from "../../../redux/action";
import AccountData from "./AccountData";

function Accounts() {
  const dispatch = useDispatch();
  const { accountlist } = useSelector((state) => state.State);

  useEffect(() => {
    populateGroupSelect("accounts_by_group");

    dispatch(getAccountAction({ skip: 0, limit: 10, accountType: "user" }));

    console.log("list:", accountlist);
  }, []);

  return (
    <div>
      <div>
        <div className="cont">
          {/* <h6>Home / Accounts / Accounts</h6> */}
          <div className="d-flex justify-content-between">
          <h6 className="status">Home / Groups & Users / Accounts</h6>
          <div className="p-3 d-flex justify-content-end">
          <a href="/instagram/accounts/accounts"><img src={Instagram} className="px-2" /></a>
          <a href="/facebook/accounts/accounts"><img src={Facebook} className="px-2" /></a>
          
         </div>
         </div>

          <HeadNavAccounts />
         
         
          <div className="details w-100">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Group</th>
                                        <th scope="col">Action</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {accountlist.map((item, index) => <AccountData item={item} index={index} />)}
                                </tbody>
                            </table>
                        </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
