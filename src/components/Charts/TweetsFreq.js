import React from 'react';
import ApexCharts from 'apexcharts';

class TweetsFreq extends React.Component {
  constructor(props) {
    super(props);

    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const options = {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      chart: {
        type: 'bar',
        height: 350,
        colors: ['#2B99FF', '#1561A8']
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
          barHeight: '40%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['6pm', '3pm', '6pm', '9pm', '12am', '3am', '12am'],
      },
      colors: ['#2B99FF', '#1561A8'],
      legend: {
        show: false // set show option to false to disable legend
      }
    };
  
    const chart = new ApexCharts(this.chartRef.current, options);
    chart.render();
  }
  

  render() {
    return (
      <div ref={this.chartRef} />
    );
  }
}

export default TweetsFreq;
