// import { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";
// import { ITrendPatternAnalysis } from "../../../../redux/action";

// type Props = {
//     trendPatternAnalysisData: ITrendPatternAnalysis | null;
// };
// const PatternAnalysisGraph = (props: Props) => {
//     const [state, setState] = useState<any>({
//         series: props.trendPatternAnalysisData?.series || [],
//         options: {
//             chart: {
//                 height: 350,
//                 type: "line",
//                 // dropShadow: {
//                 //     enabled: true,
//                 //     color: "#000",
//                 //     top: 18,
//                 //     left: 7,
//                 //     blur: 10,
//                 //     opacity: 0.2,
//                 // },
//                 toolbar: {
//                     show: false,
//                 },
//             },
//             colors: ["#FFB95D", "#FD7E6D", "#1885DA", "#1CB44C", "#40328D"],
//             dataLabels: {
//                 enabled: false,
//             },
//             stroke: {
//                 curve: "smooth",
//             },
//             title: {
//                 text: "Number of tweets per hour for a trend",
//                 align: "left",
//             },
//             grid: {
//                 borderColor: "#e7e7e7",
//                 row: {
//                     colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
//                     opacity: 0.5,
//                 },
//             },
//             markers: {
//                 size: 1,
//             },
//             xaxis: {
//                 categories: props.trendPatternAnalysisData?.categories || [],
//                 title: {
//                     text: "Time",
//                     position: "bottom",
//                     floating: true,
//                 },
//             },
//             yaxis: {
//                 title: {
//                     text: "Tweets per hour",
//                 },
//                 // min: 5,
//                 // max: 40,
//             },
//             legend: {
//                 position: "top",
//                 horizontalAlign: "right",
//                 floating: true,
//                 offsetY: -25,
//                 offsetX: -5,
//             },
//         },
//     });
//     // useEffect(() => {
//     //     if (props.trendPatternAnalysisData) {
//     //         setState({
//     //             ...state,
//     //             series: props.trendPatternAnalysisData?.series,
//     //             options: {
//     //                 ...state.options,
//     //                 xaxis: {
//     //                     ...state.options.xaxis,
//     //                     categories: props.trendPatternAnalysisData?.categories,
//     //                 },
//     //             },
//     //         });
//     //     }
//     // }, [props.trendPatternAnalysisData]);

//     return (
//         <div id="chart">
//             <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
//         </div>
//     );
// };

// export default PatternAnalysisGraph;

import React from 'react'

const PatternAnalysisGraph = () => {
  return (
    <div>PatternAnalysisGraph</div>
  )
}

export default PatternAnalysisGraph