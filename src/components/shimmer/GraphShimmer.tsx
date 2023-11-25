import Skeleton from "@mui/material/Skeleton";
import React from "react";

type Props = {
    type: "bar" | "frequency" | "area" | "sentiments" | "hashtaglist" | "tweets";
};
const GraphShimmer = (props: Props) => {
    switch (props.type) {
        case "area":
            return (
                <div className="col-12 row p-0 m-0">
                    <Skeleton variant="rectangular" width={"100%"} height={365} />
                </div>
            );
        case "sentiments":
            return (
                <div className="col-12 row m-3">
                    <div className="d-flex w-100">
                        <Skeleton variant="circular" className="ratio-1" width={"140px"} height={"140px"} />
                        <div className="w-100 ml-3">
                            <Skeleton width={"80%"} />
                            <Skeleton width={"80%"} />
                            <Skeleton width={"80%"} />
                        </div>
                    </div>
                </div>
            );
        case "hashtaglist":
            return (
                <div className="col-12 row m-0 p-0">
                    <div className="card px-2 box-shadow w-100">
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
            );
        case "tweets":
            return (
                <div className="col-12 row m-0 p-0">
                    <div className="d-flex w-100">
                        <Skeleton variant="circular" className="ratio-1" width={"40px"} height={"40px"} />
                        <div className="w-100 ml-3">
                            <Skeleton width={"40%"} />
                            <Skeleton variant="rectangular" width={"100%"} height={100} />
                            <Skeleton width={"80%"} />
                            <div className="d-flex">
                                <Skeleton width={"50px"} />
                                <Skeleton width={"50px"} />
                                <Skeleton width={"50px"} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            return (
                <div className="col-12 row p-0 m-0">
                    <Skeleton variant="rectangular" width={"100%"} height={443} />
                </div>
            );
    }
};

export default GraphShimmer;
