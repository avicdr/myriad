import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { IHashtagTweetFrequency, IUserActivityData } from "../../../../redux/action";
type Props = {
    data: IUserActivityData | null;
};
const UserActivityGraph = (props: Props) => {
    const [state, setState] = useState<any>({
        series: [
            {
                name: "Tweets",
                data: props.data?.tweets || [],
            },
            {
                name: "Retweets",
                data: props.data?.retweets || [],
            },
        ],
        options: {
            chart: {
                height: 400,
                type: "bar",
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "10px",
                    endingShape: "rounded",
                    // borderRadius: 4,
                },
                
            },
            colors: ["#FD7E6D", "#FFB95D"],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"],
            },
            
            xaxis: {
                type: "string",
                categories: props.data?.categories || [],
            },
            yaxis: {
                title: {
                    text: "Volume",
                },
            },
            fill: {
                opacity: 1,
            },
            // tooltip: {
            //     x: {
            //         format: "dd/MM/yy HH:mm",
            //     },
            // },
        },
    });

    console.log('state', state)
    return (
        <div id="chart" className="p-3">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={400} />
        </div>
    );
};

export default UserActivityGraph;
