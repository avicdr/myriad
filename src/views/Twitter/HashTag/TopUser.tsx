import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router";
import Image from "../../../components/image";
import SearchInput from "../../../components/input-field/SearchInput";
import Paginator from "../../../components/Paginator";
import ProfileAvatar from "../../../components/ProfileAvatar";
import { clearInitialData, getLinkAnalysisData, getTopInfluencerListAction, TOP_INFLUENCERS_LIST } from "../../../redux/action";
import { ReduxStore } from "../../../redux/reducer/reducer";
import { EMPTY_ICON } from "../../../utils/config";
import { getCookie, setCookie } from "../../../utils/cookie";
import { getMeterValue, startLoader, stopLoader } from "../../../utils/functions";
import HeadNavHashTag from "./HeadNavHashTag";

const MapState = (State: ReduxStore) => ({ ...State.HashtagReports });
const MapDispatch = {
    getTopInfluencerListAction: getTopInfluencerListAction,
    clearInitialData: clearInitialData,
    getLinkAnalysisData: getLinkAnalysisData,
};
const connector = connect(MapState, MapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {}

const TopInfluencers = (props: Props) => {
    const history = useHistory();
    const trendLogId = getCookie("trendLogId");
    const [selectedList, setSelectedList] = useState<string[]>([]);
    const [page, setPage] = useState<number>(1);
    const [shimmer, setShimmer] = useState<boolean>(false);
    const [linkAnalysisLoader, setLinkAnalysisLoader] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        if (!trendLogId) {
            history.goBack();
        }
        startLoader();
        setShimmer(true);
        props
            .getTopInfluencerListAction({ trendLogId, page: 1, search })
            .then(() => {
                stopLoader();
                setShimmer(false);
            })
            .catch(() => {
                stopLoader();
                setShimmer(false);
            });
        return () => {
            props.clearInitialData(TOP_INFLUENCERS_LIST);
        };
    }, []);
    const handleSelect = (id: string) => {
        if (selectedList?.includes(id)) {
            let index = selectedList.findIndex((item) => item === id);
            let newList = selectedList;
            newList.splice(index, 1);
            setSelectedList([...newList]);
        } else {
            setSelectedList([...selectedList, id]);
        }
    };
    const handleSelectAll = () => {
        if (props.topInfluencers?.length === selectedList?.length) {
            setSelectedList([]);
        } else {
            setSelectedList(props.topInfluencers?.map((item) => item.userId));
        }
    };
    const handleClickLinkAnalysis = () => {
        if (!selectedList?.length) {
            return window.alert("Please Select Users For Link Analysis!");
        }
        setLinkAnalysisLoader(true);
        setCookie("selected_users", JSON.stringify(selectedList));
        props
            .getLinkAnalysisData({
                trend_id: trendLogId,
                users: selectedList,
            })
            .then(() => {
                setLinkAnalysisLoader(false);
                history.push("/link-analysis");
            })
            .catch(() => {
                setLinkAnalysisLoader(false);
            });
    };
    const pageEventHandler = (item: any) => {
        if (item && props.topInfluencers?.length && !shimmer) {
            setShimmer(true);
            props
                .getTopInfluencerListAction({ trendLogId, page: page + 1, search })
                .then(() => {
                    setShimmer(false);
                    setPage(page + 1);
                })
                .catch(() => setShimmer(false));
        }
    };
    const handleSearch = (e: any) => {
        setSearch(e.target.value);
        if (!e.target.value) {
            handleSubmitSearch("");
        }
        // fromEvent(e.target, "keyup")
        //     .pipe(
        //         map((event: any) => event.target.value),
        //         distinctUntilChanged(),
        //         debounceTime(500)
        //     )
        //     .subscribe((text: any) => {
        //         handleSubmitSearch(text);
        //     });
    };
    const handleKeyUp = (e: any) => {
        if (e.key === "Enter" || e.key === "Tab") {
            handleSubmitSearch?.(e.target.value);
        }
    };
    const handleSubmitSearch = (text: string) => {
        startLoader();
        setShimmer(true);
        props
            .getTopInfluencerListAction({ trendLogId, page: 1, search: text })
            .then(() => {
                stopLoader();
                setShimmer(false);
            })
            .catch(() => {
                stopLoader();
                setShimmer(false);
            });
    };
    return (
        <div>
            <h6>Home / Twitter / Hashtag Analysis</h6>
            <h2 className="status mb-4 pb-4">Hashtag Report</h2>
            <HeadNavHashTag />
            <div className="d-flex bs p-3 justify-content-between bg-white mt-3 mb-4 border-circle">
                <h2 className="mt-1">#BJP</h2>
                <div className="d-flex">
                    <div className="searchHash">
                        {/* <Image src={Search} alt="none" /> */}
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
            </div>
           
            {!props.topInfluencers?.length && !shimmer ? (
                <div className="d-flex justify-content-center p-5 my-5 w-100">
                    <div className="text-center">
                        <Image src={EMPTY_ICON} alt="Empty Data" width="60px" height="60px" />
                        <h3 className="text-muted fntSz20 mt-2">No Data Found!</h3>
                    </div>
                </div>
            ) : (
                <></>
            )}

            <div hidden={!props.topInfluencers?.length} className="card-shadow">
                <TableContainer className="table-container" component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className="">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <input
                                        onClick={handleSelectAll}
                                        type="checkbox"
                                        className="pointer"
                                        name="select-all"
                                        id="select-all"
                                        checked={selectedList.length === props.topInfluencers?.length}
                                    />
                                </TableCell>
                                <TableCell>Photo</TableCell>
                                <TableCell align="left">Username | Name</TableCell>
                                <TableCell align="left">Profile Link</TableCell>
                                <TableCell align="left">Joining Date</TableCell>
                                <TableCell align="left">Location</TableCell>
                                <TableCell align="center">Verified</TableCell>
                                <TableCell align="center">Followers</TableCell>
                                <TableCell align="center">Followings</TableCell>
                                <TableCell align="center">Bot Analysis</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.topInfluencers.map((row, index) => (
                                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    <TableCell onClick={() => handleSelect(row.userId)} className="pointer" align="left">
                                        <input
                                            className="pointer"
                                            type="checkbox"
                                            name={row.userName}
                                            id={row.userId}
                                            checked={selectedList.includes(row.userId)}
                                        />
                                    </TableCell>
                                    <TableCell onClick={() => handleSelect(row.userId)} className="pointer" component="th" scope="row">
                                        <label htmlFor={row.userId}>
                                            <ProfileAvatar
                                                src={row.profileImageUrl}
                                                src_text={row.userName}
                                                id={row.userId}
                                                height={"30px"}
                                                width={"30px"}
                                                className="pointer"
                                            />
                                        </label>
                                    </TableCell>
                                    <TableCell align="left">
                                        <div className="">
                                            <a href={row.linkUrl} target="_blank" className="text-link">
                                                @{row.userName}
                                            </a>{" "}
                                            | {row.displayname}
                                        </div>
                                        <div className="text-muted fntSz12">{row.description}</div>
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.linkUrl ? (
                                            <a target={"_blank"} className="text-link" href={row.linkUrl}>
                                                {row.linkUrl}
                                            </a>
                                        ) : (
                                            "N/A"
                                        )}
                                    </TableCell>
                                    <TableCell className="pointer" onClick={() => handleSelect(row.userId)} align="left">
                                        {moment(row.createdAt).format("ddd, DD MMM yyyy")}
                                    </TableCell>
                                    <TableCell className="pointer" onClick={() => handleSelect(row.userId)} align="left">
                                        {row.location || "N/A"}
                                    </TableCell>
                                    <TableCell className="pointer" onClick={() => handleSelect(row.userId)} align="center">
                                        {row.verified ? "Yes" : "No"}
                                    </TableCell>
                                    <TableCell className="pointer" onClick={() => handleSelect(row.userId)} align="center">
                                        {row.followersCount || "0"}
                                    </TableCell>
                                    <TableCell className="pointer" onClick={() => handleSelect(row.userId)} align="center">
                                        {row.friendsCount || "0"}
                                    </TableCell>
                                    <TableCell align="center" className="pb-0">
                                        <div className="gauge-cont">
                                            <svg className="gauge" width="120" height="50">
                                                <g className="arc" transform="translate(60,44)">
                                                    <path
                                                        fill="#2B83BA"
                                                        d="M-40,-4.898587196589413e-15A40,40 0 0,1 -32.36067977499789,-23.51141009169893L-16.180339887498945,-11.755705045849465A20,20 0 0,0 -20,-2.4492935982947065e-15Z"
                                                    ></path>
                                                    <path
                                                        fill="#ABDDA4"
                                                        d="M-32.36067977499789,-23.51141009169893A40,40 0 0,1 -12.360679774997894,-38.042260651806146L-6.180339887498947,-19.021130325903073A20,20 0 0,0 -16.180339887498945,-11.755705045849465Z"
                                                    ></path>
                                                    <path
                                                        fill="#FFFFBF"
                                                        d="M-12.360679774997894,-38.042260651806146A40,40 0 0,1 12.360679774997907,-38.04226065180614L6.1803398874989535,-19.02113032590307A20,20 0 0,0 -6.180339887498947,-19.021130325903073Z"
                                                    ></path>
                                                    <path
                                                        fill="#FDAE61"
                                                        d="M12.360679774997907,-38.04226065180614A40,40 0 0,1 32.3606797749979,-23.511410091698927L16.18033988749895,-11.755705045849464A20,20 0 0,0 6.1803398874989535,-19.02113032590307Z"
                                                    ></path>
                                                    <path
                                                        fill="#D7191C"
                                                        d="M32.3606797749979,-23.511410091698927A40,40 0 0,1 40,0L20,0A20,20 0 0,0 16.18033988749895,-11.755705045849464Z"
                                                    ></path>
                                                </g>
                                                <g className="pointer" transform="translate(60,44)">
                                                    <path
                                                        d="M2.5,0C2.499108848775202,-0.019248866455642052,0.8333333333333334,-54,0,-54S-2.5,0,-2.5,0S-0.8333333333333334,5,0,5S2.4166666666666665,0.16666666666666666,2.5,0"
                                                        transform={`rotate(${getMeterValue(row.botProbability || 0)})`}
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="d-flex justify-content-center fntSz12 bold">
                                            {100 - row.botProbability * 100}% {"bot"}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            {shimmer && (
                <div className="w-100 text-center d-flex justify-content-center my-3">
                    <div className="loader-spin"></div>
                </div>
            )}
            <Paginator id="layout-body" totalCount={10000} pageSize={page * 10} pageEventHandler={pageEventHandler} />
        </div>
    );
};

export default connector(TopInfluencers);
