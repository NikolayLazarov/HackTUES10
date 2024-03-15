import React from 'react'

const InstitutionCard = ({name, info, img, id}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        {/* logo inst */}
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{info}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primaryg ">Complain</button>
        </div>
    </div>
    </div>
  )
}

export default InstitutionCard