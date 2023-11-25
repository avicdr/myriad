import React from "react";
import ReactApexChart from "react-apexcharts";

class TweetSentiments extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      series: props?.series ,
      options: {
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
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        dataLabels: {
          enabled: false,
        },
        colors: ["#5DC56E", "#FE5C50", "#F7B466"],
        legend: {
          show: this.props.legendShow,
          position: "bottom",
          markers: {
            shape: "rectangle",
            radius: 0,
            size: 30
          }
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width={this.props.legendShow ? 350 : 250}  
          style={{marginTop:"10px",
          display:"flex",
          alignSelf:"center"
        }}  
              />
      </div>
    );
  }
}

export default TweetSentiments;
