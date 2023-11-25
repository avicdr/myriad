import React from "react";
import ApexCharts from "apexcharts";

class TrendingHashTagBar extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.renderChart();
    }
  }

  renderChart() {
    const options = {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false, // hide toolbar
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 5, // set the border radius for each corner
          horizontal: true,
          barHeight: "35%",
          distributed: true,
          barWidth: 10, // increase the gap between bars
        },
      },
      dataLabels: {
        enabled: false, // hide the data labels inside the bar
      },
      series: [
        {
          name: "Tweet Volume",
          data:
            this.props.data.length == 0
              ? [
                  {
                    x: "#abcd",
                    y: 400,
                  },
                  {
                    x: "#abcd",
                    y: 420,
                  },
                  {
                    x: "#abcd",
                    y: 440,
                  },
                  {
                    x: "#abcd",
                    y: 460,
                  },
                  {
                    x: "#abcd",
                    y: 480,
                  },
                  {
                    x: "#abcd",
                    y: 500,
                  },
                  {
                    x: "#abcd",
                    y: 520,
                  },
                  {
                    x: "#abcd",
                    y: 540,
                  },
                ]
              : this.props.data,
        },
      ],
      xaxis: {
        labels: {
          show: false, // hide x-axis labels
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "16px", // set the font size of the y-axis labels
          },
        },
      },
      colors: ["#80E7F0", "#80F2DA"],
      legend: {
        show: false, // hide the legend
      },
    };

    const chart = new ApexCharts(this.chartRef.current, options);
    chart.render();
  }

  render() {
    return <div ref={this.chartRef} />;
  }
}

export default TrendingHashTagBar;
