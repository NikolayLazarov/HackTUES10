import React from 'react'

const InstitutionCard = ({name, info, img, id}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        {/* logo inst */}
    <figure><img src="g" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{info}</p>
        <div className="card-actions justify-end">
        <a href='/complaint-location' className="btn btn-primary">Complain</a> 
        </div>
    </div>
    </div>
  )
}

export default InstitutionCard