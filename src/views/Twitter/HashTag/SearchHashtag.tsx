import React, { useEffect, useState } from "react";
import HeadNavHashTag from "./HeadNavHashTag";
import GroupRowData from "../Accounts/GroupRowData";
import { useDispatch } from "react-redux";
import {
  createHashtag,
  deleteHashtag,
  getSearchHashtagData,
} from "../../../redux/hashtag";
import { Link } from "react-router-dom";
import { setCookie } from "../../../utils/cookie";
import { errorPopup, successPopup } from "../../../utils/popupMsg";
import { startLoader, stopLoader } from "../../../utils/function";

const SearchHashtag = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  const [hashtagList, setHashtagList] = useState<any>();

  useEffect(() => {
    getHashtagList(searchData);
  }, []);

  const handleSearch = () => {
    addHashtag();
  };

  const getHashtagList = async (data: any) => {
    startLoader();
    try {
      const result = await dispatch(getSearchHashtagData(data));
      setHashtagList(result);
      setSearchData("");
      stopLoader();
    } catch (error) {
      stopLoader();
    }
  };

  const addHashtag = async () => {
    startLoader();

    try {
      const result = await dispatch(
        createHashtag({
          name: searchData,
          campaignType: 2,
        })
      );
      successPopup("Hashtag added successfully");
      getHashtagList("");
      setSearchData("");
      stopLoader();
    } catch (error) {
      errorPopup("Hashtag Not Added successfully");
      stopLoader();
    }
  };

  const handleDelete = async (id: any) => {
    startLoader();

    try {
      const result = await dispatch(
        deleteHashtag({
          campaignId: id,
          status: 2,
        })
      );
      successPopup("Hashtag Deleted successfully");
      getHashtagList("");
      stopLoader();
    } catch (error) {
      errorPopup("Hashtag Not Deleted successfully");
      stopLoader();
    }
  };

  return (
    <>
      <h6>Home / Twitter / Hashtag Analysis / HashTag Report</h6>
      <h2 className="status mb-4 pb-4">Hashtag Report</h2>
      <HeadNavHashTag />
      <div className="d-flex bs p-3 justify-content-between bg-white mt-3 mb-4 border-circle">
        <h2 className="mt-1">Search Hashtag</h2>
        <div className=" col-7 d-flex">
          <div className="searchHash col-10 p-0 border-none">
            {/* <Image src={Search} alt="none" /> */}
            <input
              type="text"
              className="search col-12"
              placeholder="Enter hashtag"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
            <div
              className="cursor-pointer bg-primary px-3 rounded-4 h-100 d-flex justify-content-center align-items-center  "
              onClick={handleSearch}
            >
              <span>Add</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hashtag ID</th>
              <th scope="col">Hashtag Name</th>
              {/* <th scope="col">Created At</th> */}
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {hashtagList &&
              hashtagList?.map((item: any, index: any) => (
                <tr>
                  <th scope="row">{index + 1}.</th>
                  <td>
                    <Link
                      to={{
                        pathname: "/twitter/analysis/reports",
                        state: { trend_id: item?.trend_id },
                      }}
                      onClick={() => {
                        setCookie("trendName", item?.name);
                        setCookie("trend_id", item?.trend_id);
                      }}
                    >
                      {item.trend_id}
                    </Link>
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <img
                      src="https://img.icons8.com/material-rounded/256/trash.png"
                      alt="none"
                      width="20px"
                      height="20px"
                      className="mx-2 text-danger"
                      onClick={() => handleDelete(item.id)}
                    />
                  </td>
                  {/* <td>{ new Date(item.createdAt * 1000).toISOString().slice(14, 19)}</td> */}
                  {/* <td>
                    <Link
                      to={{
                        pathname: "/twitter/accounts/addgroup",
                        state: { item },
                      }}
                    >
                      <img
                        src="https://static.thenounproject.com/png/3391373-200.png"
                        alt="none"
                        width="20px"
                        height="20px"
                        className="mx-2"
                      />
                    </Link>
                    <img
                      src="https://img.icons8.com/material-rounded/256/trash.png"
                      alt="none"
                      width="20px"
                      height="20px"
                      className="mx-2"
                      //  onClick={() => handleDelete(item.id)}
                    />
                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchHashtag;
