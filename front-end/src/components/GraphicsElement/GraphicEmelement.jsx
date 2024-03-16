import React from 'react'
import {Line} from "react-chartjs-2"
import Chart from 'chart.js/auto';


const GraphicEmelement = ({graphData}) => {
  const colors = ['red','green','blue', 'purple','orange','black']
  const data = {
    labels: graphData ? [...Array(Object.values(graphData)[0].length).keys()] : [],
    datasets: graphData ? Object.entries(graphData).map(([k,data],i)=>(
      {
        label: k,
        backgroundColor: 'rgba(75,192,192,1)',
        // borderColor: 'rgba(0,10,0,1)',
        borderColor: colors[i%colors.length],
        borderWidth: 2,
        data: data,
      }))
    :[]
  }
  return (
<div>
      <Line
        data={data}
        options={{
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default GraphicEmelement