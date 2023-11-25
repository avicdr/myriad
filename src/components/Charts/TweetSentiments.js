import React , {useState} from "react";
import ReactApexChart from "react-apexcharts";

// class TweetSentiments extends React.Component {
//     constructor(props) {
//     super(props);

//     this.state = {
//       series: [44, 55, 13],
//       options: {
//         chart: {
//           width: 380,
//           type: "pie",
//         },
//         labels: ["Positive Tweets", "Negative Tweets", "Neutral Tweets"],
//         responsive: [
//           {
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200,
//               },
//               legend: {
//                 position: "bottom",
//               },
//             },
//           },
//         ],
//         dataLabels: {
//           enabled: false,
//         },
//         colors: ["#5DC56E", "#FE5C50", "#F7B466"],
//         legend: {
//           show: this.props.legendShow,
//           position: "right",
//           markers: {
//             shape: "rectangle",
//             radius: 0,
//             size: 30
//           }
//         },
//       },
//     };
//   }

//   render() {
//     return (
//       <div id="chart">
//         <ReactApexChart
//           options={this.state.options}
//           series={this.state.series}
//           type="pie"
//           width={this.props.legendShow?400:320}
//         />
//       </div>
//     );
//   }
// }

const TweetSentiments = (props) => {
  console.log(props)
  const [series, setSeries] = useState([props.tweets|| 25, props.likes || 25 , props.comments || 25])
  const [options, setOptions] = useState({
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Positive Tweets", "Negative Tweets", "Neutral Tweets"],
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
    colors: ["#5DC56E", "#FE5C50", "#F7B466"],
    legend: {
      show: props.legendShow,
      position: "right",
      markers: {
        shape: "rectangle",
        radius: 0,
        size: 30,
      },
      style: {
        fontSize: "37px", // add this line
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

export default TweetSentiments;
