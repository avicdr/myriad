import { useEffect, useState } from "react";
import { ConnectedProps, connect } from "react-redux";
import CustomDatePicker from "../../../../components/CustomDatePicker";
import Facebook from "../../../../components/Static/FacebookLogo.png";
import Instagram from "../../../../components/Static/Instagram.png";
import CreatePost from "../../../../components/TweetSmart/CreatePost";
import { postNewTweet } from "../../../../redux/action";
import { ReduxStore } from "../../../../redux/reducer/reducer";
import { startLoader, stopLoader } from "../../../../utils/functions";
import HeadNav from "./HeadNav";
import { getWithToken, postWithToken } from "../../../../utils/request";
import ReactSelect from "react-select";
import Image from "../../../../components/image";
import TextField from "../../../../components/TextField/TextField";
import CustomDateTimePicker from "../../../../components/CustomDateTimePicker";
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
import { DATE_TIME_FORMAT, TWITTER_URL } from "../../../../utils/config";
import moment from "moment";
import { useHistory } from "react-router";
import Pagination from "../../../../components/Pagination";

const MapState = (State: ReduxStore) => ({ ...State.HashtagReports });
const MapDispatch = {
  postNewTweet: postNewTweet,
};
const connector = connect(MapState, MapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {
  length: any;
  tweetsList: any;
}

const Draft = (props: Props) => {
  const history = useHistory();
  const [groups, setGroups] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [draftName, setDraftName] = useState<string>("");
  const [time, setTime] = useState<any>();
  const [reports, setReports] = useState<boolean>(false);
  const [allDrafts, SetAllDrafts] = useState<any>([]);
  const [totalCountDraft, setTotalCountDraft] = useState<number>(0);
  const [draftReportPageNo, setDraftReportPageNo] = useState(0);

  useEffect(() => {
    getWithToken("groups").then((response) => {
      const groups = response.data.data;
      setGroups(groups);
    });
  }, []);

  useEffect(() => {
    fetchAccounts();
  }, [selectedGroups]);

  useEffect(() => {
    if (reports) {
      fetchDraftTweet({
        limit: 10,
        skip: 0,
      });
    }
  }, [reports]);

  const fetchDraftTweet = async (payload: any) => {
    try {
      const resp = await getWithToken(
        `tweet-schedule?type=2&skip=${payload?.skip || 0}&limit=${
          payload?.limit || 10
        }`
      );
      console.log(resp?.data?.data);
      SetAllDrafts(resp?.data?.data);
      setTotalCountDraft(resp?.data?.total_drafts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGroupChange = (selectedOptions) => {
    setSelectedGroups(selectedOptions);
  };
  const handleSelectUsers = (selectedOptions) => {
    setSelectedUsers(selectedOptions);
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

  const handlePost = () => {
    startLoader();
    let groupIds = selectedGroups?.map((item) => item.value);
    if (groupIds.includes("all")) {
      groupIds = groups?.map((item) => item.id);
    }
    let payload = {
      schedule_epoch: time,
      draft_name: draftName,
      account_id_list: selectedUsers?.map((item) => item.value) || [],
      group_id_list: groupIds || [],
      operation: 1,
      tweets: tweets,
    };
    postWithToken("/tweet-schedule?tweet_type=1", payload)
      .then(() => {
        setSelectedGroups([]);
        setSelectedUsers([]);
        setTweets([]);
        stopLoader();
        setTime(null);
        setDraftName("");
        successPopup("Draft Created Successfully.");
        setReports(true);
      })
      .catch(() => {
        stopLoader();
        errorPopup("Failed to create draft!");
      });
  };

  const handleChangeTweet = (e, index) => {
    let data: any = [...tweets];
    data[index] = e.target.value;
    setTweets([...data]);
  };
  const handleChangeDate = (e) => {
    setTime(e);
  };

  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Tweet Smart / Drafts</h6>
          <div className="d-flex justify-content-between">
            <h2 className="status">Draft</h2>
            <div className="p-3 d-flex justify-content-end">
              {/* <a href="/instagram/PostSmart/draft">
                                <img src={Instagram} className="px-2" />
                            </a> */}
              <a href="/facebook/PostSmart/draft">
                <img src={Facebook} className="px-2" />
              </a>
            </div>
          </div>

          <HeadNav
            onClick={() => setReports(!reports)}
            actionBtn={reports ? "Create Draft" : " Draft Reports"}
          />
          <div hidden={!reports}>
            <div className="filterBox mc">
              <div className="mr-4">
                <h2>Draft</h2>
                <p>
                  Total Draft : <b>{totalCountDraft}</b>
                </p>
              </div>
            </div>
            

            <div hidden={!props} className="card-shadow">
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
                        Draft Name
                      </TableCell>
                      {/* <TableCell className="bold" align="left">
                        Tweet
                      </TableCell>
                      <TableCell className="bold" align="left">
                        Location
                      </TableCell> */}
                      <TableCell className="bold" align="left">
                        Tweet Type
                      </TableCell>
                      <TableCell className="bold" align="left">
                        Status
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
                    {allDrafts?.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="left">{index + 1}</TableCell>
                        <TableCell align="left">
                          <div className="">
                            <a
                              href={`${TWITTER_URL}/${row.user}`}
                              target="_blank"
                              className="text-link"
                            >
                              {row?.draft_name || "N/A"}
                            </a>
                          </div>
                        </TableCell>

                        <TableCell align="left">
                          {row?.tweet_type.toString() || "N/A"}
                        </TableCell>
                        <TableCell align="left">
                          {row?.status || "N/A"}
                        </TableCell>
                        <TableCell align="left">
                          {row?.update_at}
                          {/* ? moment(row?.update_at).format(
                                DATE_TIME_FORMAT
                              )
                            : "N/A"} */}
                        </TableCell>
                        <TableCell className="text-link" align="left">
                          View
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <br />
            <Pagination
              totalData={totalCountDraft}
              getApi={fetchDraftTweet}
              setPageNo={setDraftReportPageNo}
            />
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
                    className="react-select"
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
                    options={accounts?.map((item) => ({
                      label: item.name,
                      value: item.id,
                    }))}
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
                </div>
                <div className="col-2">
                  <button onClick={handlePost} className="mt-2 btnColoured">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <label htmlFor="email">Draft Name</label>
                <TextField
                  type="text"
                  name="draftName"
                  id="draftName"
                  onChange={(e) => setDraftName(e.target.value)}
                  value={draftName}
                  className={"bg-white"}
                  required={true}
                  formSubmitted={false}
                  placeholder={"Draft Name"}
                  lang={""}
                />{" "}
              </div>
              <div className="d-flex">
                <CustomDateTimePicker
                  className="mr-2 date"
                  date={time}
                  onSelect={handleChangeDate}
                  label={"Schedule for later"}
                />
                {/* <div className="searchHash">
                                <div>Upload File</div>
                                <img
                                    src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-file-upload-icon-png-image_4717174.jpg"
                                    alt=""
                                    placeholder="Search Hashtag"
                                />
                            </div> */}
              </div>
              {selectedUsers?.map((item, index) => (
                <div key={index} className="posts p-0">
                  <div className="postContainer mt-2 mb-2 mr-1">
                    <div className="post">
                      <div className="profile">
                        <div className="d-f">
                          <img
                            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                            alt="none"
                          />
                          <div>{item.label}</div>
                        </div>
                      </div>
                      <div className=" mt-2 mb-2">
                        <textarea
                          name="content"
                          id="content"
                          cols={30}
                          value={tweets[index]}
                          rows={10}
                          onChange={(e: any) => handleChangeTweet(e, index)}
                          className="form-field bg-white m-0"
                          placeholder="Write your tweet here..."
                        ></textarea>
                        <div className="paraphrase fntSz14 bluecolor p-3"></div>
                        {/* <div className="icons d-flex justify-content-end">
                                                <Image src={Emoji} alt="" className="p-2" />
                                                <Image src={Upload} alt="" className="p-2" />
                                                <Image src={Attach} alt="" className="p-2" />
                                            </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connector(Draft);
