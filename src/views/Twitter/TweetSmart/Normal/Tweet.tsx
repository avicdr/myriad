import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import { useEffect, useState } from "react";
import { ConnectedProps, connect } from "react-redux";
import ReactSelect from "react-select";
import Attach from "../../../../components/Static/Attach.png";
import Emoji from "../../../../components/Static/Emoji.png";
import Facebook from "../../../../components/Static/FacebookLogo.png";
import Instagram from "../../../../components/Static/Instagram.png";
import Upload from "../../../../components/Static/Upload.png";
import Image from "../../../../components/image";
import { getTweetsAction, postNewTweet } from "../../../../redux/action";
import { ReduxStore } from "../../../../redux/reducer/reducer";
import {
  nFormatter,
  startLoader,
  stopLoader,
} from "../../../../utils/functions";
import { getWithToken } from "../../../../utils/request";
import HeadNav from "./HeadNav";
import { DATE_TIME_FORMAT, TWITTER_URL } from "../../../../utils/config";
import { errorPopup, successPopup } from "../../../../utils/popupMsg";
import Pagination from "../../../../components/Pagination";

const MapState = (State: ReduxStore) => ({
  ...State.HashtagReports,
  ...State.State,
});
const MapDispatch = {
  postNewTweet: postNewTweet,
  getTweetsAction: getTweetsAction,
};
const connector = connect(MapState, MapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {}

const Tweet = (props: Props) => {
  const [reports, setReports] = useState<boolean>(true);
  const [groups, setGroups] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [tweets, setTweets] = useState([]);

  const [totalCountTweets, setTotalCountTweets] = useState<number>(0);
  const [allTweetsList, setAllTweetsList] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  console.log(totalCountTweets, "totalCountTweets");

  // ---------group and account -----------------

  useEffect(() => {
    getWithToken("groups").then((response) => {
      const groups = response.data.data;
      setGroups(groups);
    });
  }, []);

  useEffect(() => {
    fetchAccounts();
  }, [selectedGroups]);

  const handleGroupChange = (selectedOptions) => {
    setSelectedGroups(selectedOptions);
  };
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
      // console.log("error", error);
    }
  };
  // --------------------------------------------

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
    if (reports && !props.tweetsList?.length) {
      getTweetApiCall({
        limit: 10,
        skip: 0,
        status: 1,
      });
    }
  }, [reports]);

  const handleChangeTweet = (event, index) => {
    let tweetList = [...tweets];
    tweetList[index] = event.target.value;
    setTweets(tweetList);
  };
  const handlePost = () => {
    startLoader();
    let payload: any = {
      group_id_list: [],
      account_id_list: [],
      operation: 1,
      tweets: tweets.slice(1),
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

    props
      .postNewTweet(payload)
      .then(() => {
        successPopup("New Tweet Created Successfully.");
        setSelectedGroups([]);
        setSelectedUsers([]);
        setTweets([]);
        stopLoader();
      })
      .catch(() => {
        errorPopup("Failed to create new tweet!");
        stopLoader();
      });
  };

  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Tweet Smart / Tweet</h6>
          <div className="d-flex justify-content-between">
            <h2 className="status">Tweet</h2>
            <div className="p-3 d-flex justify-content-end">
              {/* <a href="/instagram/PostSmart/post">
                                <img src={Instagram} className="px-2" />
                            </a> */}
              <a href="/facebook/PostSmart/post">
                <img src={Facebook} className="px-2" />
              </a>
            </div>
          </div>

          <HeadNav
            onClick={() => setReports(!reports)}
            actionBtn={!reports ? "Tweet Reports" : "Create Tweet"}
          />
          <div hidden={!reports}>
            <div className="filterBox">
              <div className="mr-4 p-2">
                <h2>Tweets</h2>
                <p>Total Tweets: <b>{totalCountTweets}</b></p>
              </div>
            </div>
            <div hidden={!props.tweetsList?.length} className="card-shadows">
              {/* <Pagination
                totalData={totalCountTweets}
                getApi={getTweetApiCall}
                setPageNo={setPageNo}
              /> */}

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
                      allTweetsList?.map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
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

                          <TableCell align="left" className="ellipsis-2">
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
                              href={`${TWITTER_URL}/${row.user}/status/${row.tweet_id}`}
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
            </div>
            <div className="mt-4">
              <Pagination
                totalData={totalCountTweets}
                getApi={getTweetApiCall}
                setPageNo={setPageNo}
              />
            </div>
            {/* {shimmer && (
                            <div className="w-100 text-center d-flex justify-content-center my-3">
                                <div className="loader-spin"></div>
                            </div>
                        )} */}
          </div>
          <div hidden={reports}>
            <div className="filterBox">
              <div className="row">
                <div className="col-5">
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
                <div className="col-5">
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
                <div className="col-2">
                  <button onClick={handlePost} className="mt-2 btnColoured">
                    Post
                  </button>
                </div>
              </div>
            </div>
            {!selectedUsers?.length ? (
              <div className="d-flex justify-content-center py-5 w-100">
                <p className="text-muted fntSz20">
                  Select Groups & Users To Create Tweet.
                </p>
              </div>
            ) : (
              <></>
            )}
            <div className="posts justify-content-between">
              <div className="postContainer mt-2 mb-2 mr-1 min-h-40 ">
                {selectedUsers?.map(
                  (item, index) =>
                    item?.label !== "All" && (
                      <div key={index} className="post">
                        <div className="profile">
                          <div className="d-f">
                            <img
                              src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                              alt="none"
                            />
                            <div>{item.label}</div>
                          </div>
                        </div>
                        <hr></hr>
                        <div className="postInput mt-2 mb-2">
                          <div className="border rounded-5 ">
                            <textarea
                              onChange={(event) => {
                                handleChangeTweet(event, index);
                              }}
                              // value={tweets?.[index]}
                              name="content"
                              id="content"
                              className="border-0"
                              cols={30}
                              rows={10}
                              maxLength={279}
                              placeholder="Write your tweet here..."
                            ></textarea>
                            <div className="text-right  w-100 pr-4 text-muted">
                              {tweets?.[index]?.length || 0}/279
                            </div>
                          </div>

                          <div className="paraphrase fntSz14 bluecolor p-3"></div>
                          <div className="icons d-flex justify-content-end">
                            <Image
                              src={Emoji}
                              alt=""
                              className="p-2"
                              height={""}
                              width={""}
                            />
                            <Image
                              src={Upload}
                              alt=""
                              className="p-2"
                              height={""}
                              width={""}
                            />
                            <Image
                              src={Attach}
                              alt=""
                              className="p-2"
                              height={""}
                              width={""}
                            />
                          </div>
                        </div>
                        <div className="translation">
                          <div className="fntSz18 font-weight-500 mt-2">
                            <span>Translation</span>
                          </div>
                          <select
                            name="region"
                            id="regionName"
                            className="transDropDown"
                          >
                            <option value="none">From Language</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                          </select>
                          <select
                            name="userType"
                            id="userType"
                            className="transDropDown"
                          >
                            <option value="none">To Language</option>
                            <option value="dev">Developer</option>
                            <option value="normla">Normal</option>
                          </select>
                          <button className="btnColoured">Go</button>
                        </div>
                        <br />
                        <div className="mt-2 mb-2">
                          <button className="btnColoured">Paraphrase</button>
                          <input
                            type="checkbox"
                            name="translate"
                            id="translate"
                            className="mlr-1"
                          />
                          <label htmlFor="Translate">Translation</label>
                        </div>
                        <hr hidden={selectedUsers?.length <= 1} />
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connector(Tweet);
