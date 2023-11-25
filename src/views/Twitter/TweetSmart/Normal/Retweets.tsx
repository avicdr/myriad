import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { ConnectedProps, connect } from "react-redux";
import ReactSelect from "react-select";
import Facebook from "../../../../components/Static/FacebookLogo.png";
import Instagram from "../../../../components/Static/Instagram.png";
import {
  getReTweetAction,
  getTweetById,
  getTweetLikesAction,
  getTweetsAction,
  likeTweetAction,
  postNewTweet,
  reTweetAction,
} from "../../../../redux/action";
import { ReduxStore } from "../../../../redux/reducer/reducer";
import { DATE_TIME_FORMAT, TWITTER_URL } from "../../../../utils/config";
import { startLoader, stopLoader } from "../../../../utils/functions";
import { errorPopup, successPopup } from "../../../../utils/popupMsg";
import { getWithToken } from "../../../../utils/request";
import HeadNav from "./HeadNav";
import Pagination from "../../../../components/Pagination";

const MapState = (State: ReduxStore) => ({
  ...State.HashtagReports,
  ...State.State,
});
const MapDispatch = {
  likeTweetAction: likeTweetAction,
  reTweetAction: reTweetAction,
  getTweetLikesAction: getTweetLikesAction,
  getTweetsAction: getTweetsAction,
  postNewTweet: postNewTweet,
  getTweetById: getTweetById,
  getReTweetAction: getReTweetAction,
};
const connector = connect(MapState, MapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {}

const Retweets = (props: Props) => {
  const [search, setSearch] = useState<string>();
  const [groups, setGroups] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [tweetsList, setTweetsList] = useState<string[]>([]);
  const [reports, setReports] = useState<boolean>(true);
  const [tweetData, setTweetData] = useState<any>();
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const [showRetweet, setRetweet] = useState<boolean>(false);

  // *********Pagination for comment report *********
  const [totalCountRetweetReport, setTotalCountRetweetReport] =
    useState<number>(0);
  const [allRetweetReportList, setAllRetweetReportList] = useState([]);
  const [RetweetReportPageNo, setRetweetReportPageNo] = useState(0);

  // ********* pagination for all tweet comment **********

  const [totalCountTweets, setTotalCountTweets] = useState<number>(0);
  const [allTweetsList, setAllTweetsList] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  // console.log(totalCountTweets, "totalCountTweets");

  const resetPage = () => {
    setSearch("");
    setAccounts([]);
    setSelectedUsers([]);
    setSelectedGroups([]);
    setTweetsList([]);
    setTweetData("");
  };

  useEffect(() => {
    if (reports) {
      getRetweetApi({
        limit: 10,
        skip: 0,
      });
    }
    if (!props?.tweetsList?.length) {
      getTweetApiCall({
        limit: 10,
        skip: 0,
        status: 1,
      });
    }
  }, [reports]);

  const getTweetApiCall = (payload: any) => {
    startLoader();

    props
      .getTweetsAction({ ...payload })
      .then((data) => {
        console.log(data, "data");
        setTotalCountTweets(data?.total_count);
        setAllTweetsList(data?.data);
        stopLoader();
      })
      .catch(stopLoader);
  };

  useEffect(() => {
    setRetweetReportPageNo(0)
    !reports &&
      getRetweetApi({
        limit: 10,
        skip: 0,
      });
  }, [showRetweet]);

  const getRetweetApi = (payload: any) => {
    if (!showRetweet) {
      startLoader();
      props
        .getTweetLikesAction({
          ...payload,
        })
        .then((data) => {
          setTotalCountRetweetReport(data?.total_count);
          setAllRetweetReportList(data?.data);
          stopLoader();
        })
        .catch(stopLoader);
    }
    if (showRetweet) {
      startLoader();
      props
        .getReTweetAction({
          ...payload,
        })
        .then((data) => {
          setTotalCountRetweetReport(data?.total_count);
          setAllRetweetReportList(data?.data);
          stopLoader();
        })
        .catch(stopLoader);
    }
  };

  // -----------group and acccount----------------------
  useEffect(() => {
    getWithToken("groups").then((response) => {
      const groups = response.data.data;
      setGroups(groups);
    });
  }, []);

  useEffect(() => {
    selectedGroups?.length > 0 && fetchAccounts();
  }, [selectedGroups]);

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
    setSelectedGroups(selectedOptions);
  };
  const handleSelectUsers = (selectedOptions) => {
    setSelectedUsers(selectedOptions);
  };
  // ------------------------------------

  const handleLike = () => {
    let payload: any = {
      operation: 3,
      group_id_list: [],
      account_id_list: [],
      tweet_ids: tweetsList,
    };
    let groupIds = selectedGroups?.map((item) => item.value);
    if (groupIds.includes("all")) {
      payload.group_id_list = groups?.map((item) => item.id);
    } else {
      payload.group_id_list = groupIds;
    }
    const accountIds = selectedUsers?.map((item) => item.value);
    if (accountIds.includes("all")) {
      payload.account_id_list = accounts?.map((item) => item.id);
    } else {
      payload.account_id_list = accountIds;
    }
    console.log(accountIds, "llllllllllllllllllllmmmmmmmmmmmm");
    startLoader();
    props
      .postNewTweet(payload)
      .then(() => {
        stopLoader();
        successPopup("Tweet Liked Successfully.");
        setReports(!reports);
        resetPage();
      })
      .catch(() => {
        stopLoader();
        errorPopup("Failed to like tweet!");
      });
  };
  const handleRetweet = () => {
    let payload: any = {
      operation: 2,
      group_id_list: [],
      account_id_list: [],
      tweet_ids: tweetsList,
    };
    let groupIds = selectedGroups?.map((item) => item.value);
    if (groupIds.includes("all")) {
      payload.group_id_list = groups?.map((item) => item.id);
    } else {
      payload.group_id_list = groupIds;
    }
    const accountIds = selectedUsers?.map((item) => item.value);
    if (accountIds.includes("all")) {
      payload.account_id_list = accounts?.map((item) => item.id);
    } else {
      payload.account_id_list = accountIds;
    }
    console.log(accountIds, "kkkkkkkkk");
    startLoader();
    props
      .postNewTweet(payload)
      .then(() => {
        stopLoader();
        successPopup("Retweeted successfully");
        resetPage();
        setReports(!reports);
      })
      .catch(() => {
        stopLoader();
        errorPopup("Failed to retweet!");
      });
  };
  const handleSearch = () => {
    startLoader();

    search &&
      props
        ?.getTweetById(search)
        .then((result: any) => {
          setTweetData(result);
          handleSelectTweet(result?.tweet_id);
          stopLoader();
        })
        .catch((err) => {
          console.log(err);
          stopLoader();
        });
    // startLoader();
    // props
    //   .getTweetsAction({
    //     limit: 10,
    //     skip: 0,
    //     status: 1,
    //     search: search,
    //   })
    //   .then(stopLoader)
    //   .catch(stopLoader);
  };
  const handleSelectTweet = (tweet_id: string) => {
    if (tweetsList?.includes(tweet_id)) {
      let data = tweetsList?.filter((item) => item !== tweet_id);
      setTweetsList([...data]);
    } else {
      setTweetsList([...tweetsList, tweet_id]);
    }
  };

  console.log(allRetweetReportList, "twewr");
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Tweet Smart / Retweets & Likes</h6>
          <div className="d-flex justify-content-between">
            <h2 className="status">Retweets & Likes</h2>
            <div className="p-3 d-flex justify-content-end">
              {/* <a href="/instagram/PostSmart/share">
                <img src={Instagram} className="px-2" />
              </a> */}
              <a href="/facebook/PostSmart/share">
                <img src={Facebook} className="px-2" />
              </a>
            </div>
          </div>

          <HeadNav
            onClick={() => setReports(!reports)}
            actionBtn={reports ? "Report" : "Like & Retweet"}
          />

          <div hidden={reports} className="">
            <div className="py-3">
              <div
                className={`btn m-0 ${!showRetweet && "active-btn"}`}
                onClick={() => setRetweet(false)}
              >
                Likes
              </div>
              <div
                className={`btn m-0 mx-4 ${showRetweet && "active-btn"}`}
                onClick={() => setRetweet(true)}
              >
                Retweets
              </div>
            </div>
            <Pagination
              totalData={totalCountRetweetReport}
              getApi={getRetweetApi}
              setPageNo={setRetweetReportPageNo}
              currentPage={RetweetReportPageNo+1}
            />
            <div className="card-shadow details w-100 p-0">
              <TableContainer className="table-container" component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label="simple table"
                  className=""
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Sr.No</TableCell>
                      <TableCell align="left">NAME</TableCell>
                      <TableCell align="left">TWEET ID</TableCell>
                      <TableCell align="left">LOCATION</TableCell>
                      <TableCell align="left">TWEET TYPE</TableCell>
                      <TableCell align="center">STATUS</TableCell>
                      <TableCell align="left">TIME STAMP</TableCell>
                      <TableCell align="center">ACTIONS</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      // props?.tweetLikes?
                      allRetweetReportList?.map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left">
                            {RetweetReportPageNo * 10 + index + 1}
                          </TableCell>
                          <TableCell align="left">
                            <div className="">
                              <a
                                href={`${TWITTER_URL}/${row.user}`}
                                target="_blank"
                                className="text-link"
                              >
                                @{row.user}
                              </a>
                            </div>
                          </TableCell>
                          <TableCell align="left">
                            {row.tweet_id || "N/A"}
                          </TableCell>
                          <TableCell align="left">
                            {row.region || "N/A"}
                          </TableCell>
                          <TableCell align="left">
                            {row.source || "N/A"}
                          </TableCell>
                          <TableCell align="center">
                            {row.tweet_operation_status || "N/A"}
                          </TableCell>
                          <TableCell align="left">
                            {row.tweet_creation_time
                              ? moment(row.tweet_creation_time).format(
                                  DATE_TIME_FORMAT
                                )
                              : "N/A"}
                          </TableCell>
                          <TableCell className="text-link" align="center">
                            View
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            {/* {shimmer && (
                    <div className="w-100 text-center d-flex justify-content-center my-3">
                        <div className="loader-spin"></div>
                    </div>
                )} */}
          </div>
          <div hidden={!reports}>
            <div className=" filterBox  py-3">
              <div className="row">
                <div className="col-9">
                  <div className=" ml-2 row d-flex">
                    <div className="col-4">
                      <div className=" mt-1 search-field h-fit-content">
                        <input
                          type="text"
                          className="form-field"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Search Tweet Id.."
                        />
                        <div
                          onClick={handleSearch}
                          className="search-field-btn"
                        >
                          Go
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <ReactSelect
                        options={[
                          { label: "All", value: "all" },
                          ...groups?.map((item) => ({
                            label: item.name,
                            value: item.id,
                          })),
                        ]}
                        value={selectedGroups}
                        onChange={handleGroupChange}
                        placeholder={"Select Group..."}
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
                    </div>
                    <div className="col-4">
                      <ReactSelect
                        options={[
                          { label: "All", value: "all" },
                          ...accounts?.map((item) => ({
                            label: item.name,
                            value: item.id,
                          })),
                        ]}
                        value={selectedUsers}
                        onChange={handleSelectUsers}
                        placeholder={"Select User..."}
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
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="d-flex ml-auto">
                    <button
                      onClick={handleLike}
                      className="btn btnColoured mr-0 ml-3 mt-2"
                    >
                      Like
                    </button>
                    <button
                      onClick={handleRetweet}
                      className="btn btnColoured mr-0 ml-3 mt-2"
                    >
                      Retweet
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-40">
              <div className="posts">
                <div className="postContainer ">
                  {/* {props.tweetsList?.map((item, index) => ( */}
                  {tweetData ? (
                    <div className="post card-shadow">
                      <div className="profile d-flex justify-content-between">
                        <div className="d-f">
                          <img
                            src={
                              tweetData?.user_details
                                ?.profile_image_url_https ||
                              "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                            }
                            alt=""
                            height={"45px"}
                            width={"45px"}
                          />
                          <div>
                            {tweetData?.user_details?.user} |{" "}
                            {tweetData?.user_details?.name}
                          </div>
                        </div>
                        {/* <Checkbox
                          onChange={() => handleSelectTweet(item.tweet_id)}
                          checked={tweetsList?.includes(item.tweet_id)}
                        /> */}
                      </div>
                      <div className="comment">{tweetData?.tweet}</div>
                      <div className="text-muted mb-2 fntSz12">
                        {moment(tweetData?.tweet_creation_time).format(
                          DATE_TIME_FORMAT
                        )}
                      </div>
                    </div>
                  ) : (
                    <TableContainer
                      className="table-container"
                      component={Paper}
                    >
                      <Table
                        sx={{ minWidth: 650 }}
                        aria-label="simple table"
                        className=""
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell className="bold">
                              <Checkbox
                                onChange={() => {
                                  if (!checkAll) {
                                    const allTweeetId = props.tweetsList.map(
                                      (item) => item?.tweet_id
                                    );
                                    setTweetsList([...allTweeetId]);
                                    setCheckAll(!checkAll);
                                  } else {
                                    setTweetsList([]);
                                    setCheckAll(!checkAll);
                                  }
                                }}
                                checked={checkAll}
                              />
                            </TableCell>

                            <TableCell className="bold">SL. NO.</TableCell>
                            <TableCell className="bold" align="left">
                              Username | Name
                            </TableCell>
                            <TableCell className="bold" align="left">
                              Tweet
                            </TableCell>
                            <TableCell className="bold" align="left">
                              Location
                            </TableCell>
                            <TableCell className="bold" align="left">
                              Tweet Type
                            </TableCell>
                            <TableCell className="bold" align="left">
                              Status
                            </TableCell>
                            <TableCell className="bold" align="left">
                              Joining Date
                            </TableCell>
                            <TableCell className="bold" align="left">
                              Action
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            // props.tweetsList

                            allTweetsList
                              ?.filter(
                                (item) => item?.tweet_id
                                // && item?.tweet_id !== "NA"
                              )
                              .map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell className="bold">
                                    <Checkbox
                                      onChange={() =>
                                        handleSelectTweet(row.tweet_id)
                                      }
                                      checked={tweetsList?.includes(
                                        row.tweet_id
                                      )}
                                    />
                                  </TableCell>

                                  <TableCell align="left">
                                    {pageNo * 10 + (index + 1)}
                                  </TableCell>

                                  <TableCell align="left">
                                    <div className="">
                                      <a
                                        href={`${TWITTER_URL}/${row.user}`}
                                        target="_blank"
                                        className="text-link"
                                      >
                                        @{row.user}
                                      </a>{" "}
                                      | {row.name}
                                    </div>
                                  </TableCell>

                                  <TableCell
                                    align="left"
                                    className="ellipsis-2"
                                  >
                                    {row.tweet || row.text || "N/A"}
                                  </TableCell>
                                  <TableCell align="left">
                                    {row.group_name || "N/A"}
                                  </TableCell>
                                  <TableCell align="left">
                                    {row.tweet_type || "N/A"}
                                  </TableCell>
                                  <TableCell align="left">
                                    {row.tweet_operation_status === 1
                                      ? "Success"
                                      : "Failed"}
                                  </TableCell>
                                  <TableCell align="left">
                                    {moment(row.tweet_creation_time).format(
                                      DATE_TIME_FORMAT
                                    )}
                                  </TableCell>
                                  <TableCell align="left">
                                    <a
                                      className="text-link"
                                      href={`${TWITTER_URL}/${row.user}/status/${row?.tweet_id}`}
                                      target="_blank"
                                    >
                                      {"Visit"}
                                    </a>
                                  </TableCell>
                                </TableRow>
                              ))
                          }
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </div>
              </div>
              <br />
              <Pagination
                totalData={totalCountTweets}
                getApi={getTweetApiCall}
                setPageNo={setPageNo}
              />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connector(Retweets);

// {props.tweetsList?.map((item, index) => (
//   <div key={index} className="post card-shadow">
//     <div className="profile d-flex justify-content-between">
//       <div className="d-f">
//         <img
//           src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
//           alt=""
//           height={"45px"}
//           width={"45px"}
//         />
//         <div>
//           {item.name} | {item.user}
//         </div>
//       </div>
//       <Checkbox
//         onChange={() => handleSelectTweet(item.tweet_id)}
//         checked={tweetsList?.includes(item.tweet_id)}
//       />
//     </div>
//     <div className="comment">{item.tweet || item.text}</div>
//     <div className="text-muted mb-2 fntSz12">
//       {moment(item.tweet_creation_time).format(DATE_TIME_FORMAT)}
//     </div>
//   </div>
// ))}
