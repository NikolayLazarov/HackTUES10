import React from 'react'

const MostComplaintsStatistic = ({complainsNumber, institutionName}) => {
  return (
    <div className="stats stats-vertical shadow">
  
    <div className="stat">
        <div className="stat-title">Most Complains</div>
        <div className="stat-value">{complainsNumber}</div>
        <div className="stat-desc">{institutionName}</div>
    </div>

    </div>
  )

}

export default MostComplaintsStatistic
