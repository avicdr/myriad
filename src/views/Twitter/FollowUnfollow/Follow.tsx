import React, { useEffect, useState } from "react";
import Image from "../../../components/image";
import FollowUnfollow from "../../../components/Profile/FollowUnfollow";
import RecentTweet from "../../../components/Profile/RecentTweet";
import HeadNavActions from "./HeadNavActions";
import Search from "../../../components/Static/Search.png";
import { handleFollow } from "../../../utils/functions";
import Instagram from "../../../components/Static/Instagram.png";
import Facebook from "../../../components/Static/FacebookLogo.png";
import {
  PopulateGroupSelect,
  PopulateUserSelect,
} from "../../../components/Accounts/GroupAndUserSelect";
import { useHistory } from "react-router";
import { ReduxStore } from "../../../redux/reducer/reducer";
import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "react-select";
import { getAccountAction, getGroupTweetAction } from "../../../redux/action";

function Follow() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState("");

  const [username, setUsername] = useState("");
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [times, setTimes] = useState(false);
  const [group, setGroup] = useState<any>();
  const [account, setAccount] = useState<any>();
  const [refreshChild, setRefreshChild] = useState(false);

  const clearAll = () => {
    setSearchQuery("");
    setSearchData("");
    setUsername("");
    setSelectedGroups([]);
    setSelectedUsers([]);
    setRefreshChild(true);
  };

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(getAccountAction({ skip: 0, limit: 10, accountType: "user" }));

    console.log("list:", accountlist);
  }, []);


  useEffect(() => {
    dispatch(
      getGroupTweetAction({
        skip: 0,
        limit: 0,
      })
    );
  }, []);
  const dispatch = useDispatch();


 const { accountlist } = useSelector((state: ReduxStore) => state.State);
  const { groupslist } = useSelector((state: ReduxStore) => state.State);
  const handleClickFollow = () => {
    setSearchQuery(searchData);
    setRefresh(true);
  };
  return (
    <div>
      <div className="cont">
        <h6>Home / Twitter / Follow</h6>
        <div className="d-flex justify-content-between">
          <h2 className="status">Follow</h2>
          <div className="p-3 d-flex justify-content-end">
            {/* <a href="/instagram/actions/follow">
              <img src={Instagram} className="px-2" />
            </a> */}
            <a href="/facebook/actions/follow">
              <img src={Facebook} className="px-2" />
            </a>
          </div>
        </div>
        <HeadNavActions />
        <div className="filterBox mb-4">
          <div className="row">
            <div className="col-4">
          <div className="ml-4 mt-2 searchHash">
            <input
              type="text"
              className="search"
              placeholder="Search Username"
              id="search_input"
              value={searchData}
              onChange={(e) => {
                setSearchData(e.target.value);
                setRefresh(false);
                setTimes(false)
              }}
            />
            <span id="searchButton">
              <Image
                    src={Search}
                    alt="none"
                   
                    onClick={() => {
                      handleClickFollow();
                    } } height={""} width={""}              />
            </span>
          </div>
          </div>
          <div className="col-4">
          <ReactSelect
              options={groupslist?.map((item) => ({ label: item.name, value: item.id }))}
              value={group}
              onChange={setGroup}
              placeholder={"Select Group..."}
              className="m-0"
              isClearable
              isMulti={true}
              styles={{
                container: (base) => ({
                  ...base,
                  width: "100%",
                  margin: "0 3rem",
                  padding: "8px",
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
          <div className="col-4">
          {selectedGroups && (
          
          <ReactSelect
          options={accountlist?.map((item) => ({ label: item.name, value: item.id }))}
          value={account}
          onChange={setAccount}
          placeholder={"Select Account..."}
          className="m-0"
          isClearable
          isMulti={true}
          styles={{
            container: (base) => ({
              ...base,
              width: "100%",
              margin: "0 3rem",
              padding: "8px",
              borderRadius: "12px",
            }),
            control: (base) => ({
              ...base,
              padding: "6px",
              borderRadius: "12px",
            }),
          }}
        />
          )}
          </div>
         </div>
        </div>
        {searchQuery && (
          <>
            <FollowUnfollow
              follow="true"
              searchQuery={searchQuery}
              username={username}
              setUsername={setUsername}
              selectedGroups={selectedGroups}
              selectedUsers={selectedUsers}
              refresh={refresh}
              clearAll={clearAll}
              times={times}
              setTimes={setTimes} unfollow={undefined}            />
            <RecentTweet searchQuery={searchQuery} />
          </>
        )}
      </div>
    </div>
  );
}

export default Follow;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

