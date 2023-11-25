import Skeleton from "@mui/material/Skeleton";
import React from "react";

type Props = {
    view: 1 | 2 | 3 | 4 | 5;
};
const PostViewShimmer = (props: Props) => {
    if (props.view === 1) {
        return (
            <div className="col-12 row p-0 m-0">
                {[1, 2, 3, 4]?.map((item, index) => (
                    <div className="col-sm-6 col-md-4 col-lg-3  pl-0 pb-3" key={index}>
                        <div className="card p-2 box-shadow">
                            <Skeleton variant="rectangular" width={"100%"} height={40} />
                            <br />
                            <Skeleton width="80%" />
                            <Skeleton width="80%" />
                            <br />
                            <Skeleton width="80%" />
                            <Skeleton width="80%" />
                            <br />
                            <div className="d-flex justify-content-between">
                                <Skeleton width={100} height={50} />
                                <Skeleton width={100} height={50} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    if (props.view === 2) {
        return (
            <div className="col-12 row p-0 m-0">
                {[1, 2, 3, 4].map((item, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 pl-0 pb-0 mb-4">
                        <div className="card p-2 box-shadow">
                            <Skeleton variant="rectangular" width={"100%"} height={40} />
                            <div className="d-flex justify-content-between">
                                <Skeleton width={100} height={50} />
                                <Skeleton width={100} height={50} />
                            </div>
                            <hr />
                            <Skeleton height={40} width="100%" />
                            <Skeleton height={40} width="100%" />
                            <Skeleton height={40} width="100%" />
                            <Skeleton height={40} width="100%" />
                            <Skeleton height={40} width="100%" />
                            <Skeleton height={40} width="100%" />
                            <Skeleton height={40} width="100%" />
                            <Skeleton height={40} width="100%" />
                            <Skeleton height={40} width="100%" />
                            <br />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    if (props.view === 3) {
        return (
            <div className="col-12 row p-0 m-0">
                <div className="col-12 p-0 m-0">
                    <div className="d-flex justify-content-between">
                        <Skeleton width={"30%"} height={50} />
                        <Skeleton width={"40%"} height={50} />
                    </div>
                    <Skeleton variant="rectangular" width={"100%"} height={300} />
                </div>
            </div>
        );
    }
    if (props.view === 4) {
        return (
            <div className="col-12 row p-0 m-0">
                {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item, index) => (
                    <div className="col-md-6 col-lg-4 col-xl-3 my-3 " key={index}>
                        <div className="media-wall-card box-shadow p-3">
                            <div className="d-flex">
                                <Skeleton variant="rectangular" width={50} height={50} />
                                <div className="w-100 pl-3">
                                    <Skeleton />
                                    <Skeleton />
                                </div>
                            </div>
                            <br />
                            <Skeleton variant="rectangular" width={"100%"} height={200} />
                            <Skeleton width="100%" height={40} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div className="col-12 row p-0 m-0">
            <div className="col-lg-8 p-0">
                {[5, 6, 7, 8].map((item, index) => (
                    <div key={index} className="mb-3">
                        <div className="card p-2">
                            <div className="d-flex">
                                <div className="w-20">
                                    <Skeleton variant="rectangular" width={"100%"} height={120} />
                                </div>
                                <div className="w-70 ml-3">
                                    <Skeleton />
                                    <Skeleton />
                                    <Skeleton width="60%" />
                                    <Skeleton width="60%" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="col-lg-4 p-0">
                <div className="col-12 row p-0 m-0">
                    {[1, 2]?.map((item, index) => (
                        <div className="w-100 pl-3 mb-3" key={index}>
                            <div className="card p-2">
                                <Skeleton variant="rectangular" width={"100%"} height={160} />
                                <br />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton width="60%" />
                                <Skeleton />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostViewShimmer;
