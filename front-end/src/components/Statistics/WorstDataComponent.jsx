import React from 'react'

const WorstDataComponent = ({data}) => {
  return (
    <div className="stats bg-primary text-primary-content">
  
      <div className="stat">
          <div className="stat-title">Worst Ratings</div>
          <div className="stat-value">{data && data.institution.name} {data && data.rating.toFixed(2)}</div>
          <div className="stat-actions">
          </div>
      </div>
      
    </div>
  )
}

export default WorstDataComponent