import React, { useState } from 'react'
import ApexCharts from 'apexcharts'
import ReactApexChart from 'react-apexcharts'


const Chart = () => {
  const data = {
    series: [{
      name: "Celcius",
      data: [25, 28, 26, 25, 30, 32, 30]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
        foreColor: '#FFF'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Temperature',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#FFF'
        },
      },
      grid: {
        row: {
          colors: ['#FFF', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17', 'Nov 18'],

      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 295
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    },
  }

  return (
    <div className="px-4 py-4 w-fit bg-white/20 rounded-md lg:mt-6 mt-4 lg:ml-2">
      <ReactApexChart options={data.options} series={data.series} type="line" height={260} width={840} />
    </div>
  )
}

export default Chart