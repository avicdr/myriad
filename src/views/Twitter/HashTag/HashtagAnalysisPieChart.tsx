import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { IHashtagCampaign } from "../../../redux/action";


const HashtagAnalysisPieChart = (props: IHashtagCampaign) => {
    const [state, setState] = useState<any>({
        series: [props.new || 0, props.verified || 0, props.organic || 0, props.ghost || 0],
        options: {
            
            chart: {
                type: "donut",
            },
            labels: ["New Users", "Verified Users", "Organic Users", "Bot Users"],
            colors: ["#CE5582", "#844389", "#514992", "#000000"],
            dataLabels: {
                enabled: true
              },
      
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 180,
                            history: "100%",
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
            <ReactApexChart options={state.options} series={state.series} type="donut" />
        </div>
    );
};
export default HashtagAnalysisPieChart;