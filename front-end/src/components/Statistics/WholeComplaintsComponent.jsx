import React from 'react'

const WholeComplaintsComponent = ({institutionName, complainsNumber}) => {
  return (
    <div className="stats stats-vertical shadow">
  
    <div className="stat">
        <div className="stat-title">Registered Complaints</div>
        <div className="stat-value">{complainsNumber}</div>
        <div className="stat-desc">{institutionName}</div>
    </div>

    </div>
  )
}

export default WholeComplaintsComponent