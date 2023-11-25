import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const TotalUserActivity = (props) => {
  console.log(props)
  const [series, setSeries] = useState([props.tweets|| 25, props.likes || 25 , props.comments || 25, props.retweets || 25])
  const [options, setOptions] = useState({
    chart: {
      width: 380,
      type: "pie",
    },
    labels: [
      "Total Tweets",
      "Total Likes",
      "Total Comments",
      "Total Retweets",
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 400,
          },
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
    colors: ["#0192EF", "#5DC56E", "#830ECA", "#F6B466"],
    legend: {
      show: props.legendShow,
      position: "right",
      markers: {
        shape: "rectangle",
        radius: 0,
        size: 30,
      },
      style: {
        fontSize: "17px", // add this line
      },
    },
  })




  return (
    <div id="chart" className="w-100 totalUserActivityChart">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={props.legendShow ? 440 : 350}
        style={{
          width: "100%",
        }} // add this line
      />
    </div>
  );
}


// class TotalUserActivity extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       series: [props.tweets, props.likes, props.comments, props.retweets],
//       options: {
//         chart: {
//           width: 380,
//           type: "pie",
//         },
//         labels: [
//           "Total Tweets",
//           "Total Likes",
//           "Total Comments",
//           "Total Retweets",
//         ],
//         responsive: [
//           {
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200,
//               },
//             },
//           },
//         ],
//         dataLabels: {
//           enabled: false,
//         },
//         colors: ["#0192EF", "#5DC56E", "#830ECA", "#F6B466"],
//         legend: {
//           show: this.props.legendShow,
//           position: "right",
//           markers: {
//             shape: "rectangle",
//             radius: 0,
//             size: 30,
//           },
//           style: {
//             fontSize: "17px", // add this line
//           },
//         },
//       },
//     };
//   }

//   render() {
//     return (
//       <div id="chart" className="w-100 totalUserActivityChart">
//         <ReactApexChart
//           options={this.state.options}
//           series={this.state.series}
//           type="pie"
//             width={this.props.legendShow ? 420 : 280}
//         //   style={{
//         //     width: "50%",
//         //   }} // add this line
//         />
//       </div>
//     );
//   }
// }

export default TotalUserActivity;
