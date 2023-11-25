import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { IHashtagTweetSentiment } from "../../../../redux/action";
type Props  = {
    data: IHashtagTweetSentiment | null
}
const TweetSentimentsGraph = (props: Props) => {
    const [state, setState] = useState<any>({
        series: props.data?.series || [],
        options: {
            chart: {
                // width: "50%",
                type: "pie",
            },
            labels:props.data?.categories || [],
            dataLabels: {enabled:true},
            legend: {show: true},
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
    });
    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="pie" height={"380px"} />
        </div>
    );
};

export default TweetSentimentsGraph;
