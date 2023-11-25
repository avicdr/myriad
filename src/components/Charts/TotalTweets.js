import React from "react";
import ReactApexChart from "react-apexcharts";

const series = {
  monthDataSeries1: {
    prices: [101, 2110, 3410, 4410, 5440, 6130, 710, 8510, 90],
    dates: [
      "2022-01-01",
      "2022-01-02",
      "2022-01-03",
      "2022-01-04",
      "2022-01-05",
      "2022-01-06",
      "2022-01-07",
      "2022-01-08",
      "2022-01-09",
    ],
  },
};

class TotalTweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Tweets:",
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
          curve: "smooth",
        },
        title: {
          text: "No. of Tweets",
          align: "left",
        },
        subtitle: {
          text: "1,56,184",
          align: "left",
          style: {
            fontSize: "30px",
            fontWeight: "bold"
          },
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
          type: "datetime",
          tickAmount: "dataPoints",
          labels: {
            datetimeUTC: false,
            format: "MMM",
          },
        },
        yaxis: {
          opposite: false,
        },
        legend: {
          horizontalAlign: "left",
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

export default TotalTweets;
