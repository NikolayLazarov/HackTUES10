import React from 'react'
import {Line} from "react-chartjs-2"
import Chart from 'chart.js/auto';


const GraphicEmelement = ({mostRelevant}) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], /*to take the avarage of every person */
    datasets: [
      {
        label: 'Sample Data',
        backgroundColor: 'rgba(75,192,192,1)',
        // borderColor: 'rgba(0,10,0,1)',
        borderColor: "red",
        borderWidth: 5,
        data: mostRelevant,
      },
    ],
  };
  
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