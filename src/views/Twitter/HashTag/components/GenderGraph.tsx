import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const TweetSentimentsGraph = () => {
    const [state, setState] = useState<any>({
        series: [65, 35],
        options: {
            chart: {
                // width: "50%",
                type: "pie",
            },
            labels: [ "Male", "Female"],
            dataLabels: {enabled:false},
            legend: {show: false},
            colors: ["#3F51B5", "#FF4584"],
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
            <ReactApexChart options={state.options} series={state.series} type="pie" width={"100%"} />
        </div>
    );
};

export default TweetSentimentsGraph;
