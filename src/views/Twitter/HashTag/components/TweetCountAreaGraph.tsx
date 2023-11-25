import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { IHashtagTweetFrequency } from "../../../../redux/action";
type Props = {
    data: IHashtagTweetFrequency | null;
};
const TweetCountAreaGraph = (props: Props) => {
    const [state, setState] = useState<any>({
        series: [
            {
                name: "Tweet Count",
                data: props.data?.series || [],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "area",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                type: "string",
                categories: props.data?.categories || [],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        },
    });

    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="area" height={400} />
        </div>
    );
};

export default TweetCountAreaGraph;
