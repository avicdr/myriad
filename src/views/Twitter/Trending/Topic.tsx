import { useEffect, useState } from "react";
import { ConnectedProps, connect } from "react-redux";
import HashTagGraph from "../../../components/Charts/HashTagGraph";
import Facebook from "../../../components/Static/FacebookLogo.png";
import Instagram from "../../../components/Static/Instagram.png";
import { getNowTrending } from "../../../redux/action";
import { ReduxStore } from "../../../redux/reducer/reducer";
import { startLoader, stopLoader } from "../../../utils/functions";
import { errorPopup } from "../../../utils/popupMsg";
import HeadNavTrend from "./HeadNavTrending";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TWITTER_URL } from "../../../utils/config";
import visiticon from "../../../components/Static/icons/icons8-eye-48.png";

const MapState = (State: ReduxStore) => ({ ...State.State });
const MapDispatch = {
  getNowTrending: getNowTrending,
};
const connector = connect(MapState, MapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {}

const Topics = (props: Props) => {
  const [search, setSearch] = useState<string>("india");
  const [shimmer, setShimmer] = useState<boolean>(false);
  // useEffect(() => {
  //     startLoader();
  //     handleSearch();
  // }, []);
  const handleSearch = () => {
    startLoader();
    setShimmer(true);
    props
      .getNowTrending({ query: search })
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
        <h6>Home / Trending / Topics</h6>
        <div className="d-flex justify-content-between">
          <h2 className="status">Topic</h2>
          <div className="p-3 d-flex justify-content-end">
            <a href="/instagram/trending/topics">
              <img src={Instagram} className="px-2" />
            </a>
            <a href="/facebook/trending/topics">
              <img src={Facebook} className="px-2" />
            </a>
          </div>
        </div>

        <HeadNavTrend />
        <br />
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
        <div>
          {shimmer && (
            <>
              <HashTagGraph />
              <div
                hidden={!props.trendingPosts?.length}
                className="card-shadow"
              >
                <TableContainer className="table-container" component={Paper}>
                  <Table
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                    className=""
                  >
                    <TableHead>
                      <TableRow className="card-header ">
                        <TableCell className="fs-4 bold text-white">
                          SL. NO.
                        </TableCell>
                        <TableCell
                          className="fs-4 bold text-white"
                          align="left"
                        >
                          Hashtag
                        </TableCell>
                        <TableCell
                          className="fs-4 bold text-white"
                          align="left"
                        >
                          Tweet Volume
                        </TableCell>
                        <TableCell className="fs-4 bold text-white">
                          View Report
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {props.trendingPosts?.map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left">{index + 1}.</TableCell>

                          <TableCell align="left">
                            <div className="">
                              <a
                                href={`${TWITTER_URL}/search?q=${row.query}`}
                                target="_blank"
                                className="text-link"
                              >
                                {row.name}
                              </a>
                            </div>
                          </TableCell>

                          <TableCell align="left" className="ellipsis-2">
                            {row.tweet_volume || "N/A"}
                          </TableCell>
                          <TableCell align="left">
                            <a
                              className="text-link"
                              href={`/twitter/reports?query=${encodeURIComponent(
                                row.name
                              )}`}
                              target="_blank"
                            >
                              {
                                <img
                                  src={visiticon}
                                  width="30px"
                                  height="30px"
                                />
                              }
                            </a>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default connector(Topics);
