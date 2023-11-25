import { useEffect, useState } from "react";
import { ConnectedProps, connect } from "react-redux";
import Paginator from "../../../components/Paginator";
import Facebook from "../../../components/Static/FacebookLogo.png";
import Instagram from "../../../components/Static/Instagram.png";
import Image from "../../../components/image";
import PostViewShimmer from "../../../components/shimmer/PostViewShimmer";
import { getTrendingPostsAction } from "../../../redux/action";
import { ReduxStore } from "../../../redux/reducer/reducer";
import { EMPTY_ICON } from "../../../utils/config";
import { startLoader, stopLoader } from "../../../utils/functions";
import { errorPopup } from "../../../utils/popupMsg";
import { MediaWallCard } from "../HashTag/components/MediaWallCard";
import HeadNavTrend from "./HeadNavTrending";

const MapState = (State: ReduxStore) => ({ ...State.HashtagReports });
const MapDispatch = {
  getTrendingPostsAction: getTrendingPostsAction,
};
const connector = connect(MapState, MapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {}

const TrendingPosts = (props: Props) => {
  const [search, setSearch] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const [shimmer, setShimmer] = useState<boolean>(false);

  // useEffect(() => {
  //   handleSearch();
  // }, []);
  const pageEventHandler = (item: any) => {
    if (item && props.mediaWalls?.length && !shimmer) {
      setShimmer(true);
      props
        ?.getTrendingPostsAction({ search, page: page + 1 })
        .then(() => {
          console.log("kkkkkkkkkkkk");
          setShimmer(false);
          setPage(page + 1);
        })
        .catch(() => setShimmer(false));
    }
  };
  const handleSearch = () => {
    startLoader();
    setShimmer(true);
    props
      .getTrendingPostsAction({ search, page: 1 })
      .then(() => {
        stopLoader();
        setShimmer(false);
      })
      .catch(() => {
        stopLoader();
        setShimmer(false);
        errorPopup("Failed to load posts!");
      });
  };

  return (
    <div>
      <div className="cont">
        <h6>Home / Twitter / Now Trending - Posts</h6>
        <div className="d-flex justify-content-between">
          <h2 className="status">Trending</h2>
          <div className="p-3 d-flex justify-content-end">
            <a href="/instagram/trending/posts">
              <img src={Instagram} className="px-2" />
            </a>
            <a href="/facebook/trending/posts">
              <img src={Facebook} className="px-2" />
            </a>
          </div>
        </div>
        <HeadNavTrend />
        <div>
          <div className="d-flex box-shadow p-3 justify-content-end">
            <div className="search-field h-fit-content">
              <input
                type="text"
                className="form-field"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Hashtag"
              />
              <div onClick={handleSearch} className="search-field-btn">
                Search
              </div>
            </div>
          </div>

          {shimmer && !props.mediaWalls?.length ? (
            <PostViewShimmer view={4} />
          ) : !props.mediaWalls?.length && !shimmer ? (
            <div className="d-flex justify-content-center p-5 my-5 w-100">
              <div className="text-center">
                <Image
                  src={EMPTY_ICON}
                  alt="Empty Data"
                  width="60px"
                  height="60px"
                />
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
          <Paginator
            id="layout-body"
            totalCount={10000}
            pageSize={page * 10}
            pageEventHandler={pageEventHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default connector(TrendingPosts);
