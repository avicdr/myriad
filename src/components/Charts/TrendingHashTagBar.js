import React from "react";
import ApexCharts from "apexcharts";

const TrendingHashTagBar = ({ hashtagData }) => {
  const chartRef = React.useRef(null);
  console.log(hashtagData);

  React.useEffect(() => {
    if (chartRef.current && hashtagData) {
      const sortedHashtags = Object.entries(hashtagData).sort(
        (a, b) => Number(b[1]) - Number(a[1])
      );

      const topHashtags = sortedHashtags.slice(0, 11).map((hashtag) => ({
        name: hashtag[0],
        count: hashtag[1],
      }));

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
            data: topHashtags.map((hashtag) => ({
              x: hashtag.name,
              y: hashtag.count,
            })),
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
          show: false,
        },
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
    }
  }, [chartRef, hashtagData]);

  return <div ref={chartRef} />;
};

export default TrendingHashTagBar;