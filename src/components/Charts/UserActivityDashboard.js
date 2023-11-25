import React from "react";
import ReactApexChart from "react-apexcharts";

const series = {
  monthDataSeries1: {
    prices: [10, 20, 34, 41, 4, 13, 7, 80, 30, 31, 17, 69, 58, 45, 32, 14, 55, 19, 54, 32, 11, 12, 44, 19, 76],
  },
};

class UserActivityDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Time In Minutes",
          data: series.monthDataSeries1.prices,
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        labels: [
          "12 am",
          "1 am",
          "2 am",
          "3 am",
          "4 am",
          "5 am",
          "6 am",
          "7 am",
          "8 am",
          "9 am",
          "10 am",
          "11 am",
          "12 pm",
          "1 pm",
          "2 pm",
          "3 pm",
          "4 pm",
          "5 pm",
          "6 pm",
          "7 pm",
          "8 pm",
          "9 pm",
          "10 pm",
          "11 pm",
          "12 am",
        ],
        xaxis: {
          type: "category",
          tickAmount: 24,
        },
        yaxis: {
          opposite: false,
          min: 20,
          max: 120,
          tickAmount: 5,
          labels: {
            formatter: function (value) {
              return value.toFixed(0);
            },
            style: {
              fontSize: "16px",
            },
          },
        },
        legend: {
          horizontalAlign: "left",
        },
        colors: ["#FFC043"],
        fill: {
          type: "solid",
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
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default UserActivityDashboard;
