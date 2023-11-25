import React, { ReactNode, useEffect, useState } from "react";
import HeadNavAccounts from "./HeadNavAccounts";
// import { populateGroups, deleteGroup } from "../../../utils/functions";
import Instagram from '../../../components/Static/Instagram.png';
import Facebook from '../../../components/Static/FacebookLogo.png';
import { ReduxStore } from "../../../redux/reducer/reducer";
import { useDispatch, useSelector } from "react-redux";
import { getGroupTweetAction } from "../../../redux/action";
import Wrapper from "../../../hoc/Wrapper";
import GroupRowData from "./GroupRowData";


const GroupTweet = () => {
    const { groupslist } = useSelector((state: ReduxStore) => state.State);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGroupTweetAction({
            skip: 0,
            limit: 0
        }));
    }, []);

    return (
        <Wrapper auth={true}>
            <div>
                <div>
                    <div className="cont">
                        {/* <h6>Home / User / Groups</h6> */}
                        <div className="d-flex justify-content-between">
                            <h5 className="status">Groups & Users</h5>
                            <div className="p-3 d-flex justify-content-end">
                                <a href="/instagram/accounts/groups"><img src={Instagram} className="px-2" /></a>
                                <a href="/facebook/accounts/groups"><img src={Facebook} className="px-2" /></a>

                            </div>
                        </div>
                        <HeadNavAccounts />
                        <div className="details w-100">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Group Name</th>
                                        <th scope="col">Group Region</th>
                                        <th scope="col">Total Accounts</th>
                                        <th scope="col">Actions</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {groupslist.map((item, index) => <GroupRowData item={item} index={index} />)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default GroupTweet;
