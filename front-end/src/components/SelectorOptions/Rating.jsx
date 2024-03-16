import React from 'react'

const Rating = ({update, number}) => {
  return (
    <div className="rating rating-sm">
      {/* <input type="slider" onMouseDown={()=>console.log('ok')} /> */}
      {/* <input type="range" min="0" max="100" onMouseDown={()=>{console.log('sad')}} value="40" class="range range-primary" /> */}

      {/* <input onChange={()=>update(1)} type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked={number===1} />
      <input onChange={()=>update(2)} type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked={number===2} />
      <input onChange={()=>update(3)} type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked={number===3} />
      <input onChange={()=>update(4)} type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked={number===4} />
      <input onChange={()=>update(5)} type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked={number===5} />
      <input onChange={()=>update(6)} type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked={number===6} />
      <input onChange={()=>update(7)} type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked={number===7}/>
      <input onChange={()=>update(8)} type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked={number===8}/>
      <input onChange={()=>update(9)} type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked={number===9}/>
      <input onChange={()=>update(10)} type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked={number===10}/> */}
    </div>
  )
}

export default Rating