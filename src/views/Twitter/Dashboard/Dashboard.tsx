import React, { useEffect, useState } from "react";
import TopIcons from "../../../components/Dashboard/TopIcons";
import Image from "../../../components/image";
import Search from "../../../components/Static/Search.png";
import CustomDatePicker from "../../../components/CustomDatePicker";
import {
  PopulateGroupSelect,
  PopulateUserSelect,
} from "../../../components/Accounts/GroupAndUserSelect";

import UserActivityDashboard from "../../../components/Charts/UserActivityDashboard";
import ActiveUsers from "./ActiveUser";

import GenderPie from "../../../components/Charts/GenderPie";
import TweetSentiments from "../../../components/Charts/TweetSentiments";
import worldCloud from "../../../components/Static/WorldCloud.png";
import TrendingHashTagBar from "../../../components/Charts/TrendingHashTagBar";
import TotalUserActivity from "../../../components/Charts/TotalUserActivity";
import HashtagKeyword from "./HashtagKeyword";
import { getTwitterAnalytics, getTopHashtags, stopLoader, startLoader } from "../../../utils/functions";
import Facebook from "../../../components/Static/FacebookLogo.png";
import instagram from "../../../components/Static/Instagram.png";
import Cloud from "../../../components/Wordcloud/Cloud";
import Impression from "../../../components/Static/Impression.png";
import Likes from "../../../components/Static/Likes.png";
import Reach from "../../../components/Static/Reach.png";
import Mention from "../../../components/Static/Mention.png";
import { ReduxStore } from "../../../redux/reducer/reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccountAction,
  getDashboardCARDAction,
  getDashboardReportAction,
  getGroupTweetAction,
  getTweetReportAction,
  getUserDataction,
  getUserTweetAction,
} from "../../../redux/action";
import { type } from "os";
import { Console } from "console";
import ReactSelect from "react-select";
import { getWithToken } from "../../../utils/request";
import { green } from "@mui/material/colors";



function Dashboard() {
  const [totalTweets, setTotalTweets] = useState();
  const [totalMediaTweets, setTotalMediaTweets] = useState();
  const [totalRetweets, setTotalRetweets] = useState();
  const [totalLikes, setTotalLikes] = useState();
  const [totalComments, setTotalComments] = useState();
  const [totalUserActivityKey, setTotalUserActivityKey] = useState();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pieChartData, setPieChartData] = useState([]);
  const [tweetData, setTweetData] = useState([]);
  const [group, setGroup] = useState<any>();
  const [account, setAccount] = useState<any>();
  const [overviewDateRange, setOverviewDateRange] = React.useState([
    new Date('11-08-2022'),
    new Date(),
  ])


  let sdEpoch =
    (overviewDateRange[0].getTime() -
      overviewDateRange[0].getMilliseconds()) /
    1000
  let edEpoch =
    (overviewDateRange[1].getTime() -
      overviewDateRange[1].getMilliseconds()) /
    1000

  const { tweetsreport } = useSelector((state: ReduxStore) => state.State) as
    {
      tweetsreport: {
        tweets_language_data: Record<string, number>,
        hashtag_report_data: Record<string, number>,

      }
    };

  const dashboardreport = useSelector((state: ReduxStore) => state.State.dashboradreport) as {
    active_users_by_tweet?: Record<string, number>,
    active_users_by_retweets?: Record<string, number>,
    active_users_by_likes?: Record<string, number>,
    active_users_by_replies?: Record<string, number>
  } | undefined;

  interface TopIconsProps {
    tweetCount: (count: number) => void;
    userTweetData: (data: any) => void;
    usertweet: {
      total_tweets?: Record<number, number>;
      total_media_tweets?: Record<number, number>;
      total_retweets?: Record<number, number>;
      total_likes?: Record<number, number>;
      total_comments?: Record<number, number>;
      total_user_tweets?: Record<number, number>;
    };
  }


  const card = useSelector((state: ReduxStore) => state.State.card) as {
    total_tweets?: Record<number, number>,
    total_media_tweets?: Record<number, number>,
    total_retweets?: Record<number, number>,
    total_likes?: Record<number, number>,
    total_comments?: Record<number, number>,
    total_user_tweets?: Record<number, number>
  } | undefined;
  const { accountlist } = useSelector((state: ReduxStore) => state.State);
  const { groupslist } = useSelector((state: ReduxStore) => state.State);
  const { userreport } = useSelector((state: ReduxStore) => state.State);
  const dispatch = useDispatch();


  useEffect(() => {

    dispatch(getTweetReportAction({
      start_date: `${sdEpoch}`,
      end_date: `${edEpoch}`

    }));
    dispatch(getDashboardReportAction());
    dispatch(getDashboardCARDAction({
      region_id: null,
      account_id: null,
      start_date: `${sdEpoch}`,
      end_date: `${edEpoch}`,

    }
    ));
    dispatch(getAccountAction({ skip: 0, limit: 10, accountType: "user" }));
    dispatch(
      getGroupTweetAction({
        skip: 0,
        limit: 0,
      })
    );

  }, []);

  const [selectedGroupIds, setSelectedGroupIds] = useState([]);
  const [selectedAccountIds, setSelectedAccountIds] = useState([""]);
  const [userTweet, setUserTweet] = useState({});
  const [groups, setGroups] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);


  const getAccountDetails = async () => {

    const selectedGroupIds = selectedGroups.map((g) => g.value).join(',');
    const selectedAccountIds =selectedUsers.map((a) => a.value).join(',');
    startLoader();
    await dispatch(getUserTweetAction(
      {
        region_id: selectedGroupIds,
        account_id: selectedAccountIds,
        start_date: `${sdEpoch}`,
        end_date: `${edEpoch}`,
      }));
    stopLoader();
    setUserTweet(card);
    console.log(card);

  };

  const getUserDetails = async () => {

    const selectedGroupIds = selectedGroups.map((g) => g.value).join(',');
    // const selectedAccountIds = account.map((a) => a.value).join(',');
    startLoader();
    await dispatch(getUserDataction(
      {
        region_id: selectedGroupIds,
        start_date: `${sdEpoch}`,
        end_date: `${edEpoch}`,
      }));
    stopLoader();
    setUserTweet(userreport);
    console.log(card);

  };
  useEffect(() => {
    getWithToken("groups").then((response) => {
      const groups = response.data.data;
      setGroups(groups);
    });
  }, []);
  useEffect(() => {
    fetchAccounts();
  }, [selectedGroups]);

  const handleClick = () => {
    getAccountDetails();
    getUserDetails();
  }

  const fetchAccounts = async () => {
    try {
      let url = "";
      let groupIds = selectedGroups?.map((item) => item.value);
      if (groupIds.length == 0) {
        setAccounts([]);
        return;
      }
      if (groupIds.includes("all")) {
        url = `accounts?group_list=${JSON.stringify(
          groups?.map((item) => item.id)
        )}`;
      } else {
        url = `accounts?group_list=${JSON.stringify(groupIds)}`;
      }
      const response = await getWithToken(url);
      const accounts = response.data.data;
      setAccounts(accounts);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleGroupChange = (selectedOptions) => {
    console.log(groupslist)
    
    if(selectedOptions ==="all"){
      groupslist?.map((item: { id: any; }) => ({
    
        value: item.id,
      }));
      console.log(selectedOptions)
      setSelectedGroupIds(groupslist);
    }else{
      setSelectedGroups(selectedOptions);
    }
  }
  
  const handleSelectUsers = (selectedOptions) => {
    const accountIds = selectedOptions?.map((item) => item.value);
    if (accountIds.includes("all")) {
      const a = [
        { label: "All", value: "all" },
        ...accounts?.map((item) => ({
          label: item.name,
          value: item.id,
        })),
      ];

      setSelectedUsers(a);
    }
    // if (accountIds.includes("all")) {
    // }
    else {
      setSelectedUsers(selectedOptions);
    }
  };

  return (
    <>
      <div>
        <div className="cont">
          <div className="d-flex justify-content-between">
            <h2 className="status mb-3 pb-4 font-poppins">Dashboard</h2>
            <div className="p-3 d-flex justify-content-end">
              <a href="/facebook/dashboard">
                <img src={Facebook} className="px-2" />
              </a>
              {/* <a href="/instagram/dashboard">
                <img src={instagram} className="px-2" />
              </a> */}
            </div>
          </div>

          <TopIcons usertweet={card} />



          <div className="d-flex bs p-3 justify-content-betwe en bg-white mt-3 mb-4 border-circle">
            <ReactSelect

              options={[
                { label: "All", value: "all" },
                ...groupslist?.map((item) => ({
                  label: item.name,
                  value: item.id,
                })),
              ]}
              value={selectedGroups}
              onChange={handleGroupChange}
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

            <ReactSelect
               options={
                accounts?.length > 0
                  ? [
                      { label: "All", value: "all" },
                      ...accounts?.map((item) => ({
                        label: item.name,
                        value: item.id,
                      })),
                    ]
                  : []
              }
              value={selectedUsers}
              onChange={handleSelectUsers}
              placeholder={"Select User..."}
              className="react-select"
              isClearable
              isMulti={true}
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
            <CustomDatePicker onSelect={() => console.log()} label={""} className="mt-1" />
            <button className="go" onClick={handleClick}>Go</button>
          </div>
        </div>

        <div className="row d-flex">
          <div className="col-4">
            <div className="mx-0 htl_2">
              <h4 className="bold p-3 card-header">Active Users By Replies</h4>
              <div>
                <table className="table table-fixed">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th className="pl-5">Username</th>
                      <th className="text-center">Count</th>
                    </tr>
                  </thead>
                </table>

                <div className="card-shadow  mx-0 " style={{ height: "300px" }}>
                  <div className="table-scrollable">
                    <table className="table table-fixed">
                      <tbody style={{ overflow: "scroll", maxHeight: "400px" }}>
                        {dashboardreport.active_users_by_replies &&
                          Object.entries(
                            dashboardreport.active_users_by_replies
                          ).map(([Username, count], index) => (
                            <tr key={`${Username}-${index + 1}`}>
                              <td>{index + 1}.</td>
                              <td>{Username}</td>
                              <td>{count}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="mx-0 htl_2">
              <div className="card-header">
                <div className="row d-flex">
                  <div className="col-6">
                    <h4 className="bold text-white">Hashtag/Keyword</h4>
                  </div>
                  <div className="col-3" ><img src={Reach} /></div>
                  <div className="col-3"><img src={Impression} /></div>
                </div>
              </div>
              <HashtagKeyword />
            </div>
          </div>
        </div>
      </div>
      <div className="replies row d-flex">
        <div className="col-4">
          <div className="mx-0 htl_2">
            <h4 className="bold p-3 card-header">Active Users By Tweet</h4>
            <div>
              <table className="table table-fixed">
                <thead>
                  <tr>
                    <th>#</th>
                    <th className="pl-5">Username</th>
                    <th className="text-center">Count</th>
                  </tr>
                </thead>
              </table>

              <div className="card-shadow  mx-0 " style={{ height: "300px" }}>
                <div className="table-scrollable">
                  <table className="table table-fixed">
                    <tbody style={{ overflow: "scroll", maxHeight: "400px" }}>
                      {dashboardreport.active_users_by_tweet &&
                        Object.entries(
                          dashboardreport.active_users_by_tweet
                        ).map(([Username, count], index) => (
                          <tr key={`${Username}-${index + 1}`}>
                            <td>{index + 1}.</td>
                            <td>{Username}</td>
                            <td>{count}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="mx-0 htl_2">
            <h4 className="bold p-3 card-header text-left">
              Total User Activity
            </h4>
            <div className="bg-white  mx-0 " style={{ height: "351px" }}>
              <div className="d-flex bg-white   border-circle w-100">
                <div className="d-flex flex-column w-100 mt-4">
                  <TotalUserActivity
                    tweets={totalTweets}
                    retweets={totalRetweets}
                    likes={totalLikes}
                    comments={totalComments}
                    key={totalUserActivityKey}
                    legendShow={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="replies row d-flex">
        <div className="col-4">
          <h4 className="bold p-3 card-header">Top Languages</h4>
          <div>
            <table className="table table-fixed">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="pl-5">Languages</th>
                  <th className="text-center">Number</th>
                </tr>
              </thead>
            </table>

            <div className="card-shadow  mx-0 " style={{ height: "300px" }}>
              <div className="table-scrollable">
                <table className="table table-fixed">
                  <tbody style={{ overflow: "scroll", maxHeight: "400px" }}>
                    {tweetsreport.tweets_language_data &&
                      Object.entries(tweetsreport.tweets_language_data).map(
                        ([language, count], index) => (
                          <tr key={`${language}-${index + 1}`}>
                            <td>{index + 1}.</td>
                            <td>{language}</td>
                            <td>{count}</td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="mx-0 htl_2">
            <h4 className="bold p-3 card-header">Active Users By Retweets</h4>
            <div>
              <table className="table table-fixed">
                <thead>
                  <tr>
                    <th>#</th>
                    <th className="pl-5">Username</th>
                    <th className="text-center">Count</th>
                  </tr>
                </thead>
              </table>

              <div className="card-shadow  mx-0 " style={{ height: "300px" }}>
                <div className="table-scrollable">
                  <table className="table table-fixed">
                    <tbody style={{ overflow: "scroll", maxHeight: "400px" }}>
                      {dashboardreport.active_users_by_retweets &&
                        Object.entries(
                          dashboardreport.active_users_by_retweets
                        ).map(([Username, count], index) => (
                          <tr key={`${Username}-${index + 1}`}>
                            <td>{index + 1}.</td>
                            <td>{Username}</td>
                            <td>{count}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="mx-0 htl_2">
            <h4 className="bold p-3 card-header">Active Users By Likes</h4>
            <div>
              <table className="table table-fixed">
                <thead>
                  <tr>
                    <th>#</th>
                    <th className="pl-5">Username</th>
                    <th className="text-center">Count</th>
                  </tr>
                </thead>
              </table>

              <div className="card-shadow  mx-0 " style={{ height: "300px" }}>
                <div className="table-scrollable">
                  <table className="table table-fixed">
                    <tbody style={{ overflow: "scroll", maxHeight: "400px" }}>
                      {dashboardreport.active_users_by_likes &&
                        Object.entries(
                          dashboardreport.active_users_by_likes
                        ).map(([Username, count], index) => (
                          <tr key={`${Username}-${index + 1}`}>
                            <td>{index + 1}.</td>
                            <td>{Username}</td>
                            <td>{count}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dash row d-flex justify-content-around">
        <div className="col-6">
          <h4 className="bold p-3 card-header">Tweet Sentiments</h4>
          <div className="card-shadow  mx-0 " style={{ height: "400px" }}>
            <div className="col-12 bg-white p-2 border-circle ">
              <div className="col-12">
                {/* <h4 className="pt-3 text-center font-bold">Tweets Sentiments</h4> */}
                <div className="mt-3" style={{ marginLeft: "115px" }}>
                  <TweetSentiments legendShow={true} series={pieChartData} />
                </div>
              </div>
              {/* <div className="d-flex flex-column">
                <h6 className="pt-3 text-center">Gender</h6>
                <div className="mt-2">
                  <GenderPie legendShow={true} />
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="d-flex flex-column">
            <div className="mx-0 htl_2">
              <h4 className="bold p-3 card-header">World Cloud</h4>
              <div className="card-shadow  mx-0  " style={{ height: "400px" }}>
                <div className="mt-3">
                  <Cloud />

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 row">
        <div className="col">
          <h4 className="bold p-3 card-header">Trending Hashtag Bar Chart</h4>
          <div className="card-shadow  mx-0 ">
            <div className="details w-100 overflow-scroll">
              <TrendingHashTagBar hashtagData={tweetsreport.hashtag_report_data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

