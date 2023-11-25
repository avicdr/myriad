import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class UserActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [12, 7, 2, 8, 3, 5, 9],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
        },
        colors: ["#FD7E6D", "#FFB95D"],
        plotOptions: {
          bar: {
            columnWidth: "30%", // Decrease bar width to 30%
            distributed: true,
            borderRadius: 5
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday "
          ],
          labels: {
            style: {
              colors: "black",
              fontSize: "18px",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "black",
              fontSize: "18px", // Increase font size
            },
            formatter: function (val) {
              return val + " Hr"; // Add "Hr" after each value
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <div className='w-100 p-3 mb-3 bg-green-analysis d-flex align-items-center justify-content-between border-circle'>
          <h4 className='bold'>User Activity</h4>
          <select name="userType" id="userType" className="dropDown border-circle w-20">
            <option value="dev">Weekly</option>
            <option value="normla">Daily</option>
          </select>
        </div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}
export default UserActivity;
