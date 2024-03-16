import React from 'react'
import GraphicEmelement from '../GraphicsElement/GraphicEmelement'

const BestGrowth = ({institutionName, graphData}) => {
  return (
    <>
            {
            graphData
            ?<GraphicEmelement graphData={{[institutionName]:graphData}} simple={true} />
            :<GraphicEmelement graphData={{1:[]}} simple={true} />
            }
             </>
    )
}

export default BestGrowth