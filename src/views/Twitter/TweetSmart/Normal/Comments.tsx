import React, { useEffect, useState } from "react";
import like from "./like.png";
import comment from "./comment.png";
import HeadNav from "./HeadNav";
import Search from "../../../../components/Static/Search.png";
import Instagram from "../../../../components/Static/Instagram.png";
import Facebook from "../../../../components/Static/FacebookLogo.png";
import ReactSelect from "react-select";
import { connect, ConnectedProps } from "react-redux";
import { ReduxStore } from "../../../../redux/reducer/reducer";
import { getWithToken } from "../../../../utils/request";
import { startLoader, stopLoader } from "../../../../utils/functions";
import {
  ITweetArticle,
  commentAction,
  getTweetsAction,
  postNewTweet,
  getTweetById,
  getTweetReplyAction,
} from "../../../../redux/action";
import moment from "moment";
import { DATE_TIME_FORMAT, TWITTER_URL } from "../../../../utils/config";
import { errorPopup, successPopup } from "../../../../utils/popupMsg";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Pagination from "../../../../components/Pagination";

const MapState = (State: ReduxStore) => ({
  ...State.HashtagReports,
  ...State.State,
});
const MapDispatch = {
  commentAction: commentAction,
  getTweetsAction: getTweetsAction,
  postNewTweet: postNewTweet,
  getTweetById: getTweetById,
  getTweetReplyAction: getTweetReplyAction,
};
const connector = connect(MapState, MapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {}

const Comments = (props: Props) => {
  // const [tweetsList, setTweetsList] = useState<ITweetArticle[]>([])
  const [search, setSearch] = useState<string>();
  const [groups, setGroups] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [comments, setComments] = useState<string[]>([]);
  const [reports, setReports] = useState<boolean>(false);
  const [commentsRe, setCommentsRe] = useState<string[]>([]);
  const [tweetData, setTweetData] = useState<any>("");

  // *********Pagination for comment report *********
  const [totalCountCommentReport, setTotalCountCommentReport] =useState<number>(0);
  const [allCommentReportList, setAllCommentReportList] = useState([]);
  const [commentReportPageNo, setCommentReportPageNo] = useState(0);

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
    setTweetData("");
    setComments([]);
    setCommentsRe([]);
  };

  useEffect(() => {
    getWithToken("groups").then((response) => {
      const groups = response.data.data;
      setGroups(groups);
    });
    props.getTweetsAction({
      limit: 10,
      skip: 0,
      status: 1,
    });
  }, []);

  useEffect(() => {
    if (reports || !props?.tweetReply?.length) {
      getTweetCommentsApi({
        limit: 10,
        skip: 0,
      });
    } else {
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

  const getTweetCommentsApi = (payload: any) => {
    startLoader();
    props
      .getTweetReplyAction({ ...payload })
      .then((data) => {
        setTotalCountCommentReport(data?.total_count);
        setAllCommentReportList(data?.data);
        stopLoader();
      })
      .catch(stopLoader);
  };

  useEffect(() => {
    fetchAccounts();
    // getCommentReport();
  }, [selectedGroups]);

  // const getCommentReport = async () => {
  //   const response = await getWithToken("/replies?skip=0&limit=10");
  //   console.log(response, ";ooooooo");
  // };

  const handleSearch = () => {
    startLoader();
    search &&
      props
        ?.getTweetById(search)
        .then((result: any) => {
          setTweetData(result);
          stopLoader();
        })
        .catch((err) => {
          console.log(err);
          stopLoader();
        });
  };
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
  const handleChangeComment = (e, index) => {
    let commentIns = [...comments];
    commentIns[index] = e.target.value;
    setComments(commentIns);
  };
  const handleChangeCommentRe = (e, index, tweetId) => {
    console.log(commentsRe);
    let commentReIns: any = { ...commentsRe };
    // commentReIns[index] = { [tweetId]: e.target.value };
    commentReIns[tweetId] = [e.target.value];

    setCommentsRe(commentReIns);
  };

  const handleComment = () => {
    startLoader();
    let payload: any = {
      operation: 4,
      group_id_list: [],
      account_id_list: [],
      comment_id_list: {},
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

    if (tweetData) {
      comments?.map((item, index) => {
        if (item) {
          payload.comment_id_list[tweetData?.tweet_id || search] = item;
        }
      });
    } else {
      // payload.comment_id_list = commentsRe.filter((item, index) => item);
      payload.comment_id_list = commentsRe;
    }
    // console.log(payload, "pauiuii");
    // stopLoader();

    props
      .postNewTweet(payload)
      .then(() => {
        successPopup("Comment Added Successfully.");
        stopLoader();
        resetPage();
        setReports(true);
      })
      .catch(() => {
        stopLoader();

        errorPopup("Failed to add comment!");
      });
  };

  console.log(props?.tweetReply, " props?.tweetReply props?.tweetReply");

  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Tweet Smart / Comments</h6>
          <div className="d-flex justify-content-between">
            <h2 className="status">Comment</h2>
            <div className="p-3 d-flex justify-content-end">
              {/* <a href="/instagram/PostSmart/comments">
                <img src={Instagram} className="px-2" />
              </a> */}
              <a href="/facebook/PostSmart/comments">
                <img src={Facebook} className="px-2" />
              </a>
            </div>
          </div>

          <HeadNav
            onClick={() => setReports(!reports)}
            actionBtn={reports ? "Create Comment" : "Comment Reports"}
          />

          <div hidden={!reports}>
            <div className="filterBox">
              <div className="mr-4">
                <h2>comments</h2>
                <p>
                  Total Comments : <b>{totalCountCommentReport}</b>{" "}
                </p>
              </div>
            </div>
            <Pagination
              totalData={totalCountCommentReport}
              getApi={getTweetCommentsApi}
              setPageNo={setCommentReportPageNo}
            />

            <div hidden={!props.tweetsList?.length} className="card-shadow">
              <TableContainer className="table-container" component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label="simple table"
                  className=""
                >
                  <TableHead>
                    <TableRow>
                      <TableCell className="bold">SL. NO.</TableCell>
                      <TableCell className="bold" align="left">
                        Username | Name
                      </TableCell>

                      <TableCell className="bold" align="left">
                        Tweet Id
                      </TableCell>
                      <TableCell className="bold" align="left">
                        Location
                      </TableCell>

                      <TableCell className="bold" align="left">
                        Status
                      </TableCell>
                      <TableCell className="bold" align="left">
                        Tweet Type
                      </TableCell>

                      <TableCell className="bold" align="left">
                        Time Stamp
                      </TableCell>
                      <TableCell className="bold" align="left">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      // props.tweetReply
                      allCommentReportList.map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left">
                            {commentReportPageNo * 10 + index + 1}
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
                            <a
                              className="text-link"
                              href={`${TWITTER_URL}/${row.user}/status/${row.tweet_id}`}
                              target="_blank"
                            >
                              {"View"}
                            </a>
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

          <div hidden={reports}>
            <div className="filterBox py-3">
              <div className="ml-2 row">
                <div className="col-10">
                  <div className="row">
                    <div className=" col-4">
                      <div className="mt-1 search-field h-fit-content">
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
                        options={accounts?.map((item) => ({
                          label: item.name,
                          value: item.id,
                        }))}
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
                <div className="col-2">
                  <div className="d-flex ml-auto">
                    <button
                      onClick={handleComment}
                      className="btn btnColoured mr-0 ml-3 mt-2"
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="posts ">
              <div className="postContainer  min-h-40">
                {/* {props.tweetsList?.map((item, index) => ( */}
                {tweetData ? (
                  <div className="post">
                    <div className="profile">
                      <div className="d-f">
                        <img
                          src={
                            tweetData?.user_details?.profile_image_url_https ||
                            "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                          }
                          alt=""
                        />
                        <div>
                          {tweetData?.user_details?.user} |{" "}
                          {tweetData?.user_details?.name}
                        </div>
                      </div>
                    </div>

                    <div className="comment">{tweetData?.tweet}</div>
                    <div className="text-muted mb-2">
                      {tweetData?.tweet_creation_time &&
                        moment(tweetData?.tweet_creation_time).format(
                          DATE_TIME_FORMAT
                        )}
                      {/* <img src={like} alt="" /> 1k
                                        <img src={comment} alt="" /> 500
                                        <img src="https://cdn-icons-png.flaticon.com/512/126/126502.png" alt="" /> 300 */}
                    </div>
                    <div className="reply">
                      <b>Reply</b>
                      <div className="postInput mt-2 mb-2 border rounded-5">
                        <textarea
                          value={comments[0]}
                          onChange={(e) => handleChangeComment(e, 0)}
                          name="content"
                          id="content"
                          className="border-0"
                          cols={30}
                          rows={10}
                          maxLength={279}
                          placeholder="Add comment here..."
                        ></textarea>
                        <div className="text-right  w-100 pr-4 text-muted">
                          {comments?.[0]?.length || 0}/279
                        </div>
                      </div>
                    </div>
                    <br />
                    <hr />
                  </div>
                ) : (
                  // props?.tweetsList
                  allTweetsList?.map(
                    (row: any, index) =>
                      row?.tweet_id !== "undefined" && (
                        <div className="post" key={index}>
                          <div className="profile">
                            <div className="d-f">
                              <img
                                src={
                                  row?.user_details?.profile_image_url_https ||
                                  "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                                }
                                alt=""
                              />
                              <div>| {row?.user}</div>
                            </div>
                          </div>

                          <div className="comment">{row?.tweet}</div>
                          <div className="text-muted mb-2">
                            {row?.tweet_creation_time &&
                              moment(row?.tweet_creation_time).format(
                                DATE_TIME_FORMAT
                              )}
                            {/* <img src={like} alt="" /> 1k
                                        <img src={comment} alt="" /> 500
                                        <img src="https://cdn-icons-png.flaticon.com/512/126/126502.png" alt="" /> 300 */}
                          </div>
                          <div className="reply">
                            <b>Reply</b>
                            <div className="postInput mt-2 mb-2 border rounded-5">
                              <textarea
                                value={comments[index]}
                                onChange={(e) =>
                                  handleChangeCommentRe(e, index, row?.tweet_id)
                                }
                                name="content"
                                id="content"
                                className="border-0"
                                cols={30}
                                rows={10}
                                maxLength={279}
                                placeholder="Add comment here..."
                              ></textarea>
                              <div className="text-right  w-100 pr-4 text-muted">
                                {comments?.[0]?.length || 0}/279
                              </div>
                            </div>
                          </div>
                          <br />
                          <hr />
                        </div>
                      )
                  )
                )}
                {/* ))} */}
              </div>
            </div>

            <Pagination
              totalData={totalCountTweets}
              getApi={getTweetApiCall}
              setPageNo={setPageNo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connector(Comments);
