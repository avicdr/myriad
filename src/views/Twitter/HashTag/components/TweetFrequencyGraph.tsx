import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { IHashtagTweetFrequencyHourly } from "../../../../redux/action";

type Props = {
    data: IHashtagTweetFrequencyHourly;
};
const TweetFrequencyGraph = (props: Props) => {
    const [state, setState] = useState<any>({
        series: [
            {
                data: props.data?.series,
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 430,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: "top",
                    },
                },
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: "12px",
                    colors: ["#fff"],
                },
            },
            stroke: {
                show: true,
                width: 1,
                colors: ["#fff"],
            },
            tooltip: {
                shared: true,
                intersect: false,
            },
            xaxis: {
                categories: props.data?.categories,
                title: {
                    text: "Tweet Volume"
                }
            },
            yaxis: {
                title: {
                    text: "Time"
                }
            }
        },
    });
    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={500} />
        </div>
    );
};

export default TweetFrequencyGraph;
