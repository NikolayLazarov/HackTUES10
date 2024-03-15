import React from 'react'
import GraphicEmelement from '../GraphicsElement/GraphicEmelement'

const BestGrowth = ({graphData}) => {
    if(graphData) console.log({graphData})
  return (
        <>
            <GraphicEmelement graphData={graphData} />
        </>
    )
}

export default BestGrowth