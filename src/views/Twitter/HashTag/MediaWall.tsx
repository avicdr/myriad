import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router";
import Image from "../../../components/image";
import Paginator from "../../../components/Paginator";
import PostViewShimmer from "../../../components/shimmer/PostViewShimmer";
import { clearInitialData, getMediaWallsLIstAction, GET_MEDIA_WALLS } from "../../../redux/action";
import { ReduxStore } from "../../../redux/reducer/reducer";
import { EMPTY_ICON } from "../../../utils/config";
import { getCookie } from "../../../utils/cookie";
import { startLoader, stopLoader } from "../../../utils/functions";
import { MediaWallCard } from "./components/MediaWallCard";
import HeadNavHashTag from "./HeadNavHashTag";

const MapState = (State: ReduxStore) => ({ ...State.HashtagReports });
const MapDispatch = {
    getMediaWallsLIstAction: getMediaWallsLIstAction,
    clearInitialData: clearInitialData,
};
const connector = connect(MapState, MapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {}

const MediaWall = (props: Props) => {
    const trendLogId = getCookie("trendLogId");
    const history = useHistory();
    const [page, setPage] = useState<number>(1);
    const [shimmer, setShimmer] = useState<boolean>(false);
    useEffect(() => {
        if (!trendLogId) {
            history.goBack();
        }
        startLoader();
        setShimmer(true);
        props
            .getMediaWallsLIstAction({ trendLogId, page: 1 })
            .then(() => {
                stopLoader();
                setShimmer(false);
            })
            .catch(() => {
                stopLoader();
                setShimmer(false);
            });
        return () => {
            props.clearInitialData(GET_MEDIA_WALLS);
        };
    }, []);
    const pageEventHandler = (item: any) => {
        if (item && props.mediaWalls?.length && !shimmer) {
            setShimmer(true);
            props
                .getMediaWallsLIstAction({ trendLogId, page: page + 1 })
                .then(() => {
                    setShimmer(false);
                    setPage(page + 1);
                })
                .catch(() => setShimmer(false));
        }
    };
    return (
        <div>
            <h6>Home / Twitter / HashTag Analysis / HashTag Report</h6>
            <h2 className="status mb-4 pb-4">Hashtag Report</h2>
            <HeadNavHashTag />
            <div className="d-flex bs p-3 justify-content-between bg-white mt-3 mb-4 border-circle">
                <h2>#BJP</h2>

                <div className="searchHash">
                    {/* <Image src={Search} alt="none" /> */}
                    <input type="text" className="search" placeholder="Enter hashtag/keyword" />
                </div>
            </div>
            <div className="p-3 d-flex justify-content-end card-shadow">
                {/* <button className="button primary line py-0 btn-sm">Export</button> */}
            </div>
            {shimmer && !props.mediaWalls?.length ? (
                <PostViewShimmer view={4} />
            ) : !props.mediaWalls?.length && !shimmer ? (
                <div className="d-flex justify-content-center p-5 my-5 w-100">
                    <div className="text-center">
                        <Image src={EMPTY_ICON} alt="Empty Data" width="60px" height="60px" />
                        <h3 className="text-muted fntSz20 mt-2">No Data Found!</h3>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div className="col-12 row">
                {props.mediaWalls?.map((item, index) => (
                    <div key={index} className="col-md-6 col-lg-4 col-xl-3 my-3">
                        <MediaWallCard {...item} />
                    </div>
                ))}
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

export default connector(MediaWall);
