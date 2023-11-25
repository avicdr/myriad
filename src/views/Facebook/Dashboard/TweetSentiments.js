import React from "react";
import ReactApexChart from "react-apexcharts";

class TweetSentiments extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Positive Posts", "Negative Posts", "Neutral Posts"],
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
          width={this.props.legendShow?380:280}
        />
      </div>
    );
  }
}

export default TweetSentiments;
