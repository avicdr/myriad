import React from "react";
import ReactApexChart from "react-apexcharts";

class GenderPie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Male", "Female"],
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
        colors: ["#3F51B5", "#FF4584"],
        legend: {
          show: this.props.legendShow,
          position: "bottom",
          markers: {
            shape: "square",
            radius: 0,
            size: 10,
          },
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
          width={this.props.legendShow ? 380 : 280}
        />
      </div>
    );
  }
}

export default GenderPie;
