import React from 'react'
import GraphicEmelement from '../GraphicsElement/GraphicEmelement'

const BestGrowth = ({graphData}) => {
    if(graphData) console.log({graphData})
  return (
    <>
            {
            graphData
            ?<GraphicEmelement graphData={{1:graphData}} simple={true} />
            :<GraphicEmelement graphData={{1:[]}} simple={true} />
            }
             </>
    )
}

export default BestGrowth