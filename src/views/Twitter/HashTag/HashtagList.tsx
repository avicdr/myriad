import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import moment from "moment";
import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import CustomDatePicker from "../../../components/CustomDatePicker";
import Image from "../../../components/image";
import InputField from "../../../components/input-field/InputField";
import PostViewShimmer from "../../../components/shimmer/PostViewShimmer";

import { ReduxStore } from "../../../redux/reducer/reducer";
import { EMPTY_ICON } from "../../../utils/config";
import { getCookie, setCookie } from "../../../utils/cookie";
import { startLoader, stopLoader } from "../../../utils/functions";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { getHashtagCampaignListAction, IHashtagCampaign } from "../../../redux/action";
import HashtagAnalysisPieChart from "./HashtagAnalysisPieChart";
const MapState = (State: ReduxStore) => ({ ...State.State });
const MapDispatch = {
    getHashtagCampaignListAction: getHashtagCampaignListAction,
    // handleSelectCountryAction: handleSelectCountryAction,
    // createCampaignListAction: createCampaignListAction,
    // updateCampaignStatusAction: updateCampaignStatusAction,
};
const connector = connect(MapState, MapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {}

const HashtagMonitoring = (props: Props) => {
    const history = useHistory();
    const trend_id = getCookie("trendLogId");
    if(trend_id){
        history.push("/twitter/analysis/reports")
    }
    const [startDate, setStartDate] = useState<number | null>(null);
    const [endDate, setEndDate] = useState<number | null>(null);
    const [name, setName] = useState<string>("");
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        if (history.location.pathname === "/") {
            // history.push(RoutesEnum.set_tracker);
        }
        setLoading(true);
        props
            .getHashtagCampaignListAction()
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
        let intervalIns = setInterval(() => {
            props.getHashtagCampaignListAction();
        }, 15000);
        return () => {
            clearInterval(intervalIns);
        };
    }, []);

    const handleCreateCampaign = () => {
        setFormSubmitted(true);
        if (!name || !startDate) {
            return;
        }
        startLoader();
        // props
        //     .createCampaignListAction({
        //         startDate: Number(startDate) / 1000,
        //         endDate: endDate ? endDate / 1000 : null,
        //         name: name || "",
        //         campaignType: 2,
        //     })
        //     .then(props.getHashtagCampaignListAction)
        //     .then(() => {
        //         stopLoader();
        //         setName("");
        //         setStartDate(null);
        //         setEndDate(null);
        //         setFormSubmitted(false);
        //     })
        //     .catch(stopLoader);
    };
    const handleClickUpdateBtn = (id: string, status: number) => {
        startLoader();
        // props.updateCampaignStatusAction({ campaignId: id, status }).then(props.getHashtagCampaignListAction).then(stopLoader).catch(stopLoader);
    };

    const handleClickTab = (item: IHashtagCampaign) => {
        setCookie("trendLogId", item._id);
        history.replace("/twitter/analysis/reports")
        // setCookie("trendLogId", item._id);
        // setCookie("tweetVolume", String(item));
    };

    return (
        <div className="">
            <div className="card-cont card-head card-shadow p-3">
                <h5 className="bold m-0">{"Hashtag Monitoring"}</h5>
            </div>
            <br />
            <div className="card-shadow">
                <div className="card-head">Create Tracker</div>
                <hr className="mb-1 mt-0" />
                <div className="d-flex flex-wrap p-2 align-items-center">
                    <div className="p-2">
                        {/* <SearchInput
                            id={"hashtag-search"}
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                            className={"hashtag-search"}
                            parentClass="m-0"
                            width={"300px"}
                            placeholder={"Enter Hashtag"}
                            formSubmitted={formSubmitted}
                            required={true}
                            name={"hashtag-search"}
                        /> */}
                        <InputField
                            type={"text"}
                            className={"pl-5"}
                            formClass={"m-0"}
                            label={"Hashtag Search"}
                            lang={""}
                            formSubmitted={formSubmitted}
                            required={true}
                            id={"hashtag-search"}
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                            name={"hashtag-search"}
                            icon="search"
                            hideErrMsg={true}
                        />
                    </div>
                    <div className="p-2">
                        <CustomDatePicker
                            formSubmitted={formSubmitted}
                            required={true}
                            className="mr-2"
                            minDate={new Date()}
                            onSelect={setStartDate}
                            date={startDate ? new Date(startDate) : null}
                            label={"Start Date"}
                        />
                        <CustomDatePicker
                            startDate={startDate}
                            date={endDate ? new Date(endDate) : null}
                            minDate={startDate ? new Date(startDate) : new Date()}
                            onSelect={setEndDate}
                            label={"End Date"}
                        />
                    </div>
                    <div className="pl-2 ml-auto">
                        <button onClick={handleCreateCampaign} type="button" role="button" className="button primary btn-md-sm">
                            + Create Tracker
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <h5 className="bold">My Collection</h5>
            <div className="col-12 row">
                {loading && !props.hashtagCampaignsList?.length ? (
                    <div className="mt-3 mb-5 px-3 w-100">
                        <PostViewShimmer view={1} />
                    </div>
                ) : (
                    <></>
                )}
                {!props.hashtagCampaignsList?.length && !loading ? (
                    <div className="d-flex justify-content-center p-5 my-5 w-100">
                        <div className="text-center">
                            <Image src={EMPTY_ICON} alt="Empty Data" width="60px" height="60px" />
                            <h3 className="text-muted fntSz20 mt-2">No Data Found!</h3>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {props.hashtagCampaignsList?.map((item, index) => (
                    <div key={index} className="col-sm-6 col-md-4 col-lg-3 collection-card">
                        <div className="card-shadow">
                            <div className={`d-flex justify-content-between card-head break-all ${item.staged ? "bg-warning" : ""}`}>
                                <h6 className="bold pointer">
                                    <NavLink onClick={() => handleClickTab(item)} to="#">
                                        {item.name}
                                    </NavLink>
                                </h6>
                                
                            </div>
                            <div className="card-content pl-0">
                                <HashtagAnalysisPieChart {...item} />
                            </div>

                            <br />
                            <div className="card-content">
                                <label className="q_title d-flex align-items-center">
                                    <CalendarMonthIcon className="mr-2 icon-primary" fontSize="small" />
                                    Campaign Duration
                                </label>
                                <p className="q_value bold ml-4 pl-1">
                                    {moment(+item.startDate * 1000).format("DD MMM yyyy")} -{" "}
                                    {item.endDate === "INFINITE" ? "Infinite" : moment(+item.endDate * 1000).format("DD MMM yyyy")}
                                </p>
                            </div>
                            {/* <br /> */}
                            <div className="card-content">
                                <label className="q_title d-flex align-items-center">
                                    <SmartToyIcon className="mr-2 icon-primary" fontSize="small" />
                                    <p className={`q_value bold ${item.staged ? "text-danger" : "text-success"}`}>
                                        {item.staged ? "Staged" : "Organic"}
                                    </p>
                                </label>
                            </div>
                            <br />
                            <div className="d-flex justify-content-between card-content">
                                {/* <button className="button btn-red">Insight</button> */}
                                <button
                                    hidden={item.status === 3}
                                    onClick={() => handleClickUpdateBtn(String(item.id), 3)}
                                    className="button btn-red btn-sm"
                                >
                                    Pause
                                </button>
                                <button
                                    hidden={item.status === 1}
                                    onClick={() => handleClickUpdateBtn(String(item.id), 1)}
                                    className="button btn-success btn-sm"
                                >
                                    Activate
                                </button>
                                <button onClick={() => handleClickUpdateBtn(String(item.id), 2)} className="button line primary btn-sm">
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default connector(HashtagMonitoring);
