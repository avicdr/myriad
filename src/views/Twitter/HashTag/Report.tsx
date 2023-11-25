import { Divider } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import CustomDatePicker from "../../../components/CustomDatePicker";
import Image from "../../../components/image";
import ProfileAvatar from "../../../components/ProfileAvatar";
import GraphShimmer from "../../../components/shimmer/GraphShimmer";
import {
  clearHashtagReports,
  getHashtagActiveUsersList,
  getHashtagAuthorLocationsList,
  getHashtagAuthorPostCountsList,
  getHashtagLanguagesList,
  getHashtagMentionsList,
  getHashtagOrganizationsList,
  getHashtagPlacesList,
  getHashtagPopularTweetsList,
  getHashtagRetweetedUsersList,
  getHashtagRetweetsList,
  getHashtagTrendingHashtagsList,
  getHashtagTrendingMentionsList,
  getHashtagTrendingTweetsList,
  getHashtagTweetFrequency,
  getHashtagTweetFrequencyHourly,
  getHashtagTweetSentiments,
  getHashtagUrlsList,
  getOtherTrendingHastagsAction,
} from "../../../redux/action";
import { ReduxStore } from "../../../redux/reducer/reducer";
import { TWITTER_URL } from "../../../utils/config";
import { getCookie, setCookie } from "../../../utils/cookie";
import { ISelectInput } from "../../../utils/types";
import HashtagWordCloud from "./components/HashtagWordCloud";
import PopularTweetsCard from "./components/PopularTweetsCard";
import TweetCountAreaGraph from "./components/TweetCountAreaGraph";
import TweetFrequencyGraph from "./components/TweetFrequencyGraph";
import TweetSentimentsGraph from "./components/TweetSentimentsGraph";
import HashtagList from "./HashtagList";
import HeadNavHashTag from "./HeadNavHashTag";
import { useLocation } from "react-router";
import { getSearchHashtagData } from "../../../redux/hashtag";

const MapState = (State: ReduxStore) => ({ ...State.HashtagReports });
const MapDispatch = {
  getOtherTrendingHastagsAction: getOtherTrendingHastagsAction,
  getHashtagOrganizationsList: getHashtagOrganizationsList,
  getHashtagMentionsList: getHashtagMentionsList,
  getHashtagPopularTweetsList: getHashtagPopularTweetsList,
  getHashtagTweetSentiments: getHashtagTweetSentiments,
  getHashtagTweetFrequency: getHashtagTweetFrequency,
  getHashtagTweetFrequencyHourly: getHashtagTweetFrequencyHourly,
  getHashtagPlacesList: getHashtagPlacesList,
  getHashtagLanguagesList: getHashtagLanguagesList,
  getHashtagUrlsList: getHashtagUrlsList,
  getHashtagRetweetsList: getHashtagRetweetsList,
  getHashtagAuthorLocationsList: getHashtagAuthorLocationsList,
  getHashtagRetweetedUsersList: getHashtagRetweetedUsersList,
  getHashtagActiveUsersList: getHashtagActiveUsersList,
  getHashtagTrendingTweetsList: getHashtagTrendingTweetsList,
  getHashtagTrendingMentionsList: getHashtagTrendingMentionsList,
  getHashtagTrendingHashtagsList: getHashtagTrendingHashtagsList,
  getHashtagAuthorPostCountsList: getHashtagAuthorPostCountsList,

  clearHashtagReports: clearHashtagReports,
};
const connector = connect(MapState, MapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {}

const HashtagReports = (props: Props) => {
  const dispatch = useDispatch();
  const trendName: string = getCookie("trendName");
  const location = useLocation();
  const trend_id: string = getCookie("trend_id");
  const [refresh, setRefresh] = useState(false);
  //   let trend_id: any = location?.state;
  //   trend_id = trend_id?.trend_id;

  const [frequencyDate, setFrequencyDate] = useState(new Date());
  const [country, setCountry] = useState<ISelectInput | null>();
  const [otherHashtags, setOtherHashtags] = useState(true);
  const [hashtagMentions, setHashtagMentions] = useState(true);
  const [hashtagOrganizations, setHashtagOrganizations] = useState(true);
  const [hashtagTweetSentiments, setHashtagTweetSentiments] = useState(true);
  const [hashtagPopularTweets, setHashtagPopularTweets] = useState(true);
  const [hashtagTweetFrequency, setHashtagTweetFrequency] = useState(true);
  const [hashtagTweetFrequencyHourly, setHashtagTweetFrequencyHourly] =
    useState(true);
  const [hashtagLanguage, setHashtagLanguage] = useState(true);
  const [hastagPlaces, setHashtagPlaces] = useState(true);
  const [hastagUrls, setHashtagUrls] = useState(true);
  const [hashtagAuthorLocations, setHashtagAuthorLocations] = useState(true);

  const [hashtagRetwetedUsers, setHashtagRetwetedUsers] = useState(true);
  const [hashtagActiveUsers, setHashtagActiveUsers] = useState(true);
  const [hashtagTrendingTweets, setHashtagTrendingTweets] = useState(true);
  const [hashtagTrendingMentions, setHashtagTrendingMentions] = useState(true);
  const [hashtagTrendingHashtags, setHashtagTrendingHashtags] = useState(true);
  const [hashtagAuthorPostCounts, setHashtagAuthorPostCounts] = useState(true);

  const [hashtagList, setHashtagList] = useState<any>();

  useEffect(() => {
    getInitialData();
    getHashtagList("");
    return () => {
      props.clearHashtagReports();
    };
  }, [refresh]);

  const getInitialData = () => {
    props
      .getOtherTrendingHastagsAction(encodeURIComponent(trend_id))
      .then(() => setOtherHashtags(false))
      .catch(() => setOtherHashtags(false));
    props
      .getHashtagMentionsList(encodeURIComponent(trend_id))
      .then(() => setHashtagMentions(false))
      .catch(() => setHashtagMentions(false));
    props
      .getHashtagOrganizationsList(encodeURIComponent(trendName))
      .then(() => setHashtagOrganizations(false))
      .catch(() => setHashtagOrganizations(false));
    props
      .getHashtagPlacesList(encodeURIComponent(trend_id))
      .then(() => setHashtagPlaces(false))
      .catch(() => setHashtagPlaces(false));
    props
      .getHashtagLanguagesList(encodeURIComponent(trend_id))
      .then(() => setHashtagLanguage(false))
      .catch(() => setHashtagLanguage(false));
    props
      .getHashtagUrlsList(encodeURIComponent(trend_id))
      .then(() => setHashtagUrls(false))
      .catch(() => setHashtagUrls(false));
    props
      .getHashtagPopularTweetsList(encodeURIComponent(trend_id))
      .then(() => setHashtagPopularTweets(false))
      .catch(() => setHashtagPopularTweets(false));
    props
      .getHashtagTweetSentiments(encodeURIComponent(trend_id))
      .then(() => setHashtagTweetSentiments(false))
      .catch(() => setHashtagTweetSentiments(false));
    props
      .getHashtagTweetFrequency(encodeURIComponent(trend_id))
      .then(() => setHashtagTweetFrequency(false))
      .catch(() => setHashtagTweetFrequency(false));
    props
      .getHashtagTweetFrequencyHourly(
        encodeURIComponent(trend_id),
        moment().format("yyyy-MM-DD")
      )
      .then(() => setHashtagTweetFrequencyHourly(false))
      .catch(() => setHashtagTweetFrequencyHourly(false));
    props
      .getHashtagAuthorLocationsList(encodeURIComponent(trend_id))
      .then(() => setHashtagAuthorLocations(false))
      .catch(() => setHashtagAuthorLocations(false));

    props
      .getHashtagRetweetedUsersList(encodeURIComponent(trend_id))
      .then(() => setHashtagRetwetedUsers(false))
      .catch(() => setHashtagRetwetedUsers(false));
    props
      .getHashtagActiveUsersList(encodeURIComponent(trend_id))
      .then(() => setHashtagActiveUsers(false))
      .catch(() => setHashtagActiveUsers(false));
    props
      .getHashtagTrendingTweetsList(encodeURIComponent(trend_id))
      .then(() => setHashtagTrendingTweets(false))
      .catch(() => setHashtagTrendingTweets(false));
    props
      .getHashtagTrendingMentionsList(encodeURIComponent(trend_id))
      .then(() => setHashtagTrendingMentions(false))
      .catch(() => setHashtagTrendingMentions(false));
    props
      .getHashtagTrendingHashtagsList(encodeURIComponent(trend_id))
      .then(() => setHashtagTrendingHashtags(false))
      .catch(() => setHashtagTrendingHashtags(false));

    props
      .getHashtagAuthorPostCountsList(encodeURIComponent(trend_id))
      .then(() => setHashtagAuthorPostCounts(false))
      .catch(() => setHashtagAuthorPostCounts(false));
  };
  const handleSelectFrequencyDate: any = (date: any) => {
    setFrequencyDate(date);
    setHashtagTweetFrequencyHourly(true);
    props
      .getHashtagTweetFrequencyHourly(
        encodeURIComponent(trend_id),
        moment(date).format("yyyy-MM-DD")
      )
      .then(() => setHashtagTweetFrequencyHourly(false))
      .catch(() => setHashtagTweetFrequencyHourly(false));
  };

  const getHashtagList = async (data: any) => {
    try {
      const result = await dispatch(getSearchHashtagData(data || ""));
      setHashtagList(result);
    } catch (error) {}
  };

  return (
    <div>
      <h6>Home / Twitter / Hashtag Analysis / Search Hashtag </h6>
      <h2 className="status mb-4 pb-4">Hashtag Report</h2>
      <HeadNavHashTag />
      <div className="d-flex bs p-3 justify-content-between bg-white mt-3 mb-4 border-circle">
        <h2 className="mt-1">{trendName || ""}</h2>
        <div className="d-flex">
          {/* <div className="searchHash">
            <input
              type="text"
              className="search"
              placeholder="Enter hashtag/keyword"
            />
          </div> */}
          <select
            name="userType"
            id="userType"
            className="searchHash bg-white px-4"
            onChange={(e) => {
              let data = hashtagList.filter(
                (item: any) => item._id === e.target.value
              );
              const hastag_name = data[0]?.name;
              console.log(hastag_name,data,hashtagList,'fadfasdfas');
              setCookie("trendName", hastag_name);
              setCookie("trend_id", e.target.value);
              setRefresh(!refresh);
            }}
          >
            <option disabled value="none" selected>
              select hashtag
            </option>
            {hashtagList &&
              hashtagList.map((item: any, index: any) => {
                return (
                  <option key={index} value={item?._id}>
                    {item?.name}
                  </option>
                );
              })}
          </select>
          {/* <select
            name="userType"
            id="userType"
            className="searchHash bg-white px-4"
          >
            <option value="none">Select by Users</option>
            <option value="All">All</option>
            <option value="Bot">Bot</option>
            <option value="Influencer">Influencer</option>
            <option value="Verified">Verified</option>
          </select> */}
        </div>
      </div>

      <div className="">
        <div className="col-12 row p-0 m-0">
          <div className="col-md-8 p-0">
            <div className="card-shadow">
              <div className="card-shadow p-2"></div>
              {props.hashtagTweetFrequency ? (
                <TweetCountAreaGraph data={props.hashtagTweetFrequency} />
              ) : (
                <div className="p-3">
                  <GraphShimmer type={"area"} />
                </div>
              )}
            </div>
            <br />
            <div className="card-shadow frequency_height p-0">
              <div className="card-shadow px-0 m-0">
                <div className="d-flex justify-content-between pt-3 card-head">
                  <h6 className="bold">Word Cloud</h6>
                </div>
                <Divider className="mt-1 mb-3" />
                {props.wordCloud?.length ? (
                  <div className="wc-cont">
                    <HashtagWordCloud data={props.wordCloud} />
                  </div>
                ) : (
                  <div className="wc-cont d-flex justify-conetent-center align-items-center">
                    <div className="w-100 text-center d-flex justify-content-center my-3">
                      <div className="loader-spin"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-2 pr-0">
            <div className="d-flex px-0 m-0 card-shadow htl_1">
              <div className="w-100 px-0 ">
                <div className="p-3 card-head fntSz12">
                  <h6 className="bold">Tweet sentiments</h6>
                </div>

                {hashtagTweetSentiments ? (
                  <GraphShimmer type={"sentiments"} />
                ) : props.hashtagTweetSentiments ? (
                  <TweetSentimentsGraph data={props.hashtagTweetSentiments} />
                ) : (
                  <div className="d-flex py-5 px-2 justify-content-center text-muted">
                    <h4 className="text-center">No Data Found!</h4>
                  </div>
                )}
              </div>
            </div>
            <br />
            <div className="card-shadow  mx-0 htl_2">
              <div className="fntSz12 card-head container py-3">
                <h6 className="bold">Popular Tweets</h6>
              </div>
              <div className="popular-tweet-cont container hide-scrollbar">
                {hashtagPopularTweets ? (
                  <div className="">
                    <GraphShimmer type={"tweets"} />
                    <hr />
                    <GraphShimmer type={"tweets"} />
                    <hr />
                    <GraphShimmer type={"tweets"} />
                  </div>
                ) : !props.hashtagPopularTweets?.length ? (
                  <div className="d-flex justify-content-center py-5 mb-5">
                    <h5 className="text-muted">No Data Found!</h5>
                  </div>
                ) : (
                  props.hashtagPopularTweets?.map((item, index) => (
                    <PopularTweetsCard {...item} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="col-12 row m-0 p-0">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 collection-card p-0">
            <div className="card-shadow px-0">
              <div className="d-flex justify-content-between pt-3 card-head">
                <h6 className="bold">Other Hashtags</h6>
              </div>
              <div className="d-flex justify-content-between card-content">
                <label className="q_title">#hashtags</label>
                <label className="q_title">Tweet counts</label>
              </div>
              <Divider className="mt-1 mb-3" />
              <div className="hashtag_list_cont">
                {otherHashtags ? (
                  <GraphShimmer type={"hashtaglist"} />
                ) : (
                  props.otherTrendingHastags?.map((item, trendIndex) => (
                    <div
                      key={trendIndex}
                      className="d-flex justify-content-between p-2 li-hover fntSz14"
                    >
                      <div className="d-flex">
                        <p className="m-0 text-elips">#{item.trend_name}</p>
                      </div>
                      <div className="d-flex pl-3">
                        <span>{item.count || "0"}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 collection-card p-0">
            <div className="card-shadow px-0">
              <div className="d-flex justify-content-between pt-3 card-head">
                <h6 className="bold">Mentions</h6>
              </div>
              <div className="d-flex justify-content-between card-content">
                <label className="q_title">Username</label>
                <label className="q_title">Tweet counts</label>
              </div>
              <Divider className="mt-1 mb-3" />
              <div className="hashtag_list_cont">
                {hashtagMentions ? (
                  <GraphShimmer type={"hashtaglist"} />
                ) : (
                  props.hashtagMentions?.map((item, trendIndex) => (
                    <div
                      key={trendIndex}
                      className="d-flex justify-content-between p-2 li-hover fntSz14"
                    >
                      <div className="d-flex">
                        <a
                          href={`${TWITTER_URL}/${item.username}`}
                          className="text-link fntSz14 px-2 break-all"
                          target={"_blank"}
                        >
                          @{item.username}
                        </a>
                      </div>
                      <div className="d-flex pl-3">
                        <span>{item.count || "0"}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 collection-card p-0">
            <div className="card-shadow px-0">
              <div className="d-flex justify-content-between pt-3 card-head">
                <h6 className="bold">Organizations</h6>
              </div>
              <div className="d-flex justify-content-between card-content">
                <label className="q_title">Name</label>
                <label className="q_title">Tweet counts</label>
              </div>
              <Divider className="mt-1 mb-3" />
              <div className="hashtag_list_cont">
                {hashtagOrganizations ? (
                  <GraphShimmer type={"hashtaglist"} />
                ) : !props.hashtagOrganizations?.length ? (
                  <div className="d-flex justify-content-center py-5">
                    <h5 className="text-muted">No Organization Found!</h5>
                  </div>
                ) : (
                  props.hashtagOrganizations?.map((item, trendIndex) => (
                    <div
                      key={trendIndex}
                      className="d-flex justify-content-between p-2 li-hover fntSz14"
                    >
                      <div className="d-flex">
                        <p className="m-0 text-elips">{item.title}</p>
                      </div>
                      <div className="d-flex pl-3">
                        <span>{item.count || "0"}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 collection-card p-0">
            <div className="card-shadow px-0">
              <div className="d-flex justify-content-between pt-3 card-head">
                <h6 className="bold">Top Languages</h6>
              </div>
              <div className="d-flex justify-content-between card-content">
                <label className="q_title">Language</label>
                <label className="q_title">Tweet counts</label>
              </div>
              <Divider className="mt-1 mb-3" />
              <div className="hashtag_list_cont">
                {hashtagLanguage ? (
                  <GraphShimmer type={"hashtaglist"} />
                ) : !props.hashtagLanguages?.length ? (
                  <div className="d-flex justify-content-center py-5">
                    <h5 className="text-muted">No Language Found!</h5>
                  </div>
                ) : (
                  props.hashtagLanguages?.map((item, trendIndex) => (
                    <div
                      key={trendIndex}
                      className="d-flex justify-content-between p-2 li-hover fntSz14"
                    >
                      <div className="d-flex">
                        <p className="m-0 text-elips">{item.title}</p>
                      </div>
                      <div className="d-flex pl-3">
                        <span>{item.count || "0"}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 collection-card p-0">
            <div className="card-shadow px-0">
              <div className="d-flex justify-content-between pt-3 card-head">
                <h6 className="bold">Top Places</h6>
              </div>
              <div className="d-flex justify-content-between card-content">
                <label className="q_title">Place</label>
                <label className="q_title">Tweet counts</label>
              </div>
              <Divider className="mt-1 mb-3" />
              <div className="hashtag_list_cont">
                {hastagPlaces ? (
                  <GraphShimmer type={"hashtaglist"} />
                ) : !props.hashtagPlaces?.length ? (
                  <div className="d-flex justify-content-center py-5">
                    <h5 className="text-muted">No Place Found!</h5>
                  </div>
                ) : (
                  props.hashtagPlaces?.map((item, trendIndex) => (
                    <div
                      key={trendIndex}
                      className="d-flex justify-content-between p-2 li-hover fntSz14"
                    >
                      <div className="d-flex">
                        <p className="m-0 text-elips">{item.title}</p>
                      </div>
                      <div className="d-flex pl-3">
                        <span>{item.count || "0"}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 collection-card p-0">
            <div className="card-shadow px-0">
              <div className="d-flex justify-content-between pt-3 card-head">
                <h6 className="bold">Top Urls</h6>
              </div>
              <div className="d-flex justify-content-between card-content">
                <label className="q_title">Urls</label>
                <label className="q_title">Tweet counts</label>
              </div>
              <Divider className="mt-1 mb-3" />
              <div className="hashtag_list_cont">
                {hastagUrls ? (
                  <GraphShimmer type={"hashtaglist"} />
                ) : !props.hashtagUrls?.length ? (
                  <div className="d-flex justify-content-center py-5">
                    <h5 className="text-muted">No Url Found!</h5>
                  </div>
                ) : (
                  props.hashtagUrls?.map((item, trendIndex) => (
                    <div
                      key={trendIndex}
                      className="d-flex justify-content-between p-2 li-hover fntSz14"
                    >
                      <div className="d-flex">
                        <a
                          href={item.title}
                          className="text-link fntSz14 px-2 break-all"
                          target={"_blank"}
                        >
                          {item.title}
                        </a>
                      </div>
                      <div className="d-flex pl-3">
                        <span>{item.count || "N/A"}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 collection-card p-0">
            <div className="card-shadow px-0">
              <div className="d-flex justify-content-between pt-3 card-head">
                <h6 className="bold">Author Locations</h6>
              </div>
              <div className="d-flex justify-content-between card-content">
                <label className="q_title">Location</label>
                <label className="q_title">Counts</label>
              </div>
              <Divider className="mt-1 mb-3" />
              <div className="hashtag_list_cont">
                {hashtagAuthorLocations ? (
                  <GraphShimmer type={"hashtaglist"} />
                ) : !props.hashtagAuthorLocations?.length ? (
                  <div className="d-flex justify-content-center py-5">
                    <h5 className="text-muted">No Data Found!</h5>
                  </div>
                ) : (
                  props.hashtagAuthorLocations?.map((item, trendIndex) => (
                    <div
                      key={trendIndex}
                      className="d-flex justify-content-between p-2 li-hover fntSz14"
                    >
                      <div className="d-flex">{item.location}</div>
                      <div className="d-flex pl-3">
                        <span>{item.count || "N/A"}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 collection-card p-0">
            <div className="card-shadow px-0">
              <div className="d-flex justify-content-between pt-3 card-head">
                <h6 className="bold">Most Retweeted Users</h6>
              </div>
              <div className="d-flex justify-content-between card-content">
                <label className="q_title">Users</label>
                <label className="q_title">Counts</label>
              </div>
              <Divider className="mt-1 mb-3" />
              <div className="hashtag_list_cont">
                {hashtagRetwetedUsers ? (
                  <GraphShimmer type={"hashtaglist"} />
                ) : !props.hashtagRetweetedUsers?.length ? (
                  <div className="d-flex justify-content-center py-5">
                    <h5 className="text-muted">No Data Found!</h5>
                  </div>
                ) : (
                  props.hashtagRetweetedUsers?.map((item, trendIndex) => (
                    <div
                      key={trendIndex}
                      className="d-flex justify-content-between p-2 li-hover fntSz14"
                    >
                      <div className="d-flex">
                        <a
                          href={`${TWITTER_URL}/${item.username}`}
                          className="text-link fntSz14 px-2 break-all"
                          target={"_blank"}
                        >
                          @{item.username}
                        </a>
                      </div>
                      <div className="d-flex pl-3">
                        <span>{item.count || "0"}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 collection-card p-0">
            <div className="card-shadow px-0">
              <div className="d-flex justify-content-between pt-3 card-head">
                <h6 className="bold">Active Users</h6>
              </div>
              <div className="d-flex justify-content-between card-content">
                <label className="q_title">Users</label>
                <label className="q_title">Counts</label>
              </div>
              <Divider className="mt-1 mb-3" />
              <div className="hashtag_list_cont">
                {hashtagActiveUsers ? (
                  <GraphShimmer type={"hashtaglist"} />
                ) : !props.hashtagActiveUsers?.length ? (
                  <div className="d-flex justify-content-center py-5">
                    <h5 className="text-muted">No Data Found!</h5>
                  </div>
                ) : (
                  props.hashtagActiveUsers?.map((item, trendIndex) => (
                    <div
                      key={trendIndex}
                      className="d-flex justify-content-between p-2 li-hover fntSz14"
                    >
                      <div className="d-flex">
                        <a
                          href={`${TWITTER_URL}/${item.username}`}
                          className="text-link fntSz14 px-2 break-all"
                          target={"_blank"}
                        >
                          @{item.username}
                        </a>
                      </div>
                      <div className="d-flex pl-3">
                        <span>{item.count || "N/A"}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 collection-card p-0">
            <div className="card-shadow px-0">
              <div className="d-flex justify-content-between pt-3 card-head">
                <h6 className="bold">Trending Tweets</h6>
              </div>
              <div className="d-flex justify-content-between card-content">
                <label className="q_title">Tweets</label>
                <label className="q_title">Counts</label>
              </div>
              <Divider className="mt-1 mb-3" />
              <div className="hashtag_list_cont">
                {hashtagTrendingTweets ? (
                  <GraphShimmer type={"hashtaglist"} />
                ) : !props.hashtagTrendingTweets?.length ? (
                  <div className="d-flex justify-content-center py-5">
                    <h5 className="text-muted">No Data Found!</h5>
                  </div>
                ) : (
                  <div className="popular-tweet-cont container hide-scrollbar">
                    {hashtagPopularTweets ? (
                      <div className="">
                        <GraphShimmer type={"tweets"} />
                        <hr />
                        <GraphShimmer type={"tweets"} />
                        <hr />
                        <GraphShimmer type={"tweets"} />
                      </div>
                    ) : !props.hashtagPopularTweets?.length ? (
                      <div className="d-flex justify-content-center py-5 mb-5">
                        <h5 className="text-muted">No Data Found!</h5>
                      </div>
                    ) : (
                      props.hashtagTrendingTweets?.map((item, index) => (
                        <div key={index} className="p_tweet_card d-flex">
                          <div className="profile_icon mr-2">
                            <ProfileAvatar
                              src_text={"P"}
                              id={"profile"}
                              height={"26px"}
                              width={"26px"}
                            />
                          </div>

                          <div className="">
                            <div className="d-flex fntSz14 mb-2">
                              <span className="text-link pr-2">
                                @{item.author_name}
                              </span>
                              <em>{item.author_name}</em>
                            </div>
                            <p className="bg-smoke fntSz14 p-2 rounded">
                              {item.text}
                            </p>
                            <div className="text-muted fntSz14">
                              {" "}
                              {moment(item.created_at).format(
                                "h:mm A - MMM D, yyyy"
                              )}
                            </div>
                            <div className="d-flex fntSz14 mt-2">
                              <div className="d-flex align-items-center pr-2">
                                <span className="material-symbols-outlined text-muted mr-1 fntSz18">
                                  cached
                                </span>
                                <span className="fntSz14">
                                  Retweets: {item.retweet_count}
                                </span>
                              </div>
                              <div className="d-flex align-items-center px-2">
                                <span className="material-symbols-outlined text-muted mr-1 fntSz18">
                                  favorite
                                </span>
                                Likes:
                                <span className="fntSz14">
                                  {item.like_count}
                                </span>
                              </div>
                            </div>
                            <hr />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 collection-card p-0">
            <div className="card-shadow px-0">
              <div className="d-flex justify-content-between pt-3 card-head">
                <h6 className="bold">Trending Mentions</h6>
              </div>
              <div className="d-flex justify-content-between card-content">
                <label className="q_title">Author</label>
                <label className="q_title">Counts</label>
              </div>
              <Divider className="mt-1 mb-3" />
              <div className="hashtag_list_cont">
                {hashtagTrendingMentions ? (
                  <GraphShimmer type={"hashtaglist"} />
                ) : !props.hashtagTrendingMentions?.length ? (
                  <div className="d-flex justify-content-center py-5">
                    <h5 className="text-muted">No Data Found!</h5>
                  </div>
                ) : (
                  props.hashtagTrendingMentions?.map((item, trendIndex) => (
                    <div
                      key={trendIndex}
                      className="d-flex justify-content-between p-2 li-hover fntSz14"
                    >
                      <div className="d-flex">
                        <a
                          href={`${TWITTER_URL}/${item.user_name}`}
                          className="text-link fntSz14 px-2 break-all"
                          target={"_blank"}
                        >
                          @{item.user_name}
                        </a>
                      </div>
                      <div className="d-flex pl-3">
                        <span>{item.count || "N/A"}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 collection-card p-0">
            <div className="card-shadow px-0">
              <div className="d-flex justify-content-between pt-3 card-head">
                <h6 className="bold">Trending Hashtags</h6>
              </div>
              <div className="d-flex justify-content-between card-content">
                <label className="q_title">Hashtag</label>
                <label className="q_title">Counts</label>
              </div>
              <Divider className="mt-1 mb-3" />
              <div className="hashtag_list_cont">
                {hashtagTrendingHashtags ? (
                  <GraphShimmer type={"hashtaglist"} />
                ) : !props.hashtagTrendingHashtags?.length ? (
                  <div className="d-flex justify-content-center py-5">
                    <h5 className="text-muted">No Data Found!</h5>
                  </div>
                ) : (
                  props.hashtagTrendingHashtags?.map((item, trendIndex) => (
                    <div
                      key={trendIndex}
                      className="d-flex justify-content-between p-2 li-hover fntSz14"
                    >
                      <div className="d-flex">{item.hashtag}</div>
                      <div className="d-flex pl-3">
                        <span>{item.count || "N/A"}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 collection-card p-0">
            <div className="card-shadow px-0">
              <div className="d-flex justify-content-between pt-3 card-head">
                <h6 className="bold">Author Post Counts</h6>
              </div>
              <div className="d-flex justify-content-between card-content">
                <label className="q_title">Author</label>
                <label className="q_title">Counts</label>
              </div>
              <Divider className="mt-1 mb-3" />
              <div className="hashtag_list_cont">
                {hashtagAuthorPostCounts ? (
                  <GraphShimmer type={"hashtaglist"} />
                ) : !props.hashtagAuthorPostCounts?.length ? (
                  <div className="d-flex justify-content-center py-5">
                    <h5 className="text-muted">No Data Found!</h5>
                  </div>
                ) : (
                  props.hashtagAuthorPostCounts?.map((item, trendIndex) => (
                    <div
                      key={trendIndex}
                      className="d-flex justify-content-between p-2 li-hover fntSz14"
                    >
                      <div className="d-flex">
                        <a
                          href={`${TWITTER_URL}/${item.username}`}
                          className="text-link fntSz14 px-2 break-all"
                          target={"_blank"}
                        >
                          {item.username}
                        </a>
                      </div>
                      <div className="d-flex pl-3">
                        <span>{item.count || "N/A"}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="col-12 collection-card p-0">
            <div className="card-shadow d-flex justify-content-between card-head pt-2 pl-2">
              <h5 className="bold">Tweet Frequency</h5>
              <CustomDatePicker
                required={false}
                className="mr-2"
                onSelect={handleSelectFrequencyDate}
                date={frequencyDate ? new Date(frequencyDate) : null}
                label={"Select Date"}
              />
            </div>
            {hashtagTweetFrequencyHourly ? (
              <div className="p-3">
                <GraphShimmer type={"area"} />
              </div>
            ) : props.hashtagTweetFrequencyHourly?.series?.length ? (
              <TweetFrequencyGraph data={props.hashtagTweetFrequencyHourly} />
            ) : (
              <div className="d-flex py-5 px-2 justify-content-center text-muted">
                <h4 className="text-center mb-3">No Data Found!</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connector(HashtagReports);

{
  /* <h6>Home / Twitter / Hashtag Analysis / HashTag Report</h6>
                <h2 className="status mb-4 pb-4">Hashtag Report</h2>
                <HeadNavHashTag />
                <div className="d-flex bs p-3 justify-content-between bg-white mt-3 mb-4 border-circle">
                    <h2 className="mt-1">#BJP</h2>
                    <div className="d-flex">
                        <div className="searchHash">
                            <Image src={Search} alt="none" />
                            <input type="text" className="search" placeholder="Enter hashtag/keyword" />
                        </div>
                        <select name="userType" id="userType" className="searchHash bg-white px-4">
                            <option value="none">Select by Users</option>
                            <option value="All">All</option>
                            <option value="Bot">Bot</option>
                            <option value="Influencer">Influencer</option>
                            <option value="Verified">Verified</option>
                        </select>
                    </div>
                </div> */
}
