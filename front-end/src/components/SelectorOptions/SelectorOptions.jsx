import React from 'react'
import { useState } from 'react';


const SelectorOptions = () => {
//   use state for the options
const [pickedOption,setOption] = useState("");

    return (    
    <label className="form-control w-full max-w-xs">
  <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option onClick={()=> {setOption("speed")} }>speed</option>
    <option onCLick={()=>{setOption("politeness")} }>politeness</option>
    <option onCLick={()=>{setOption("precision")}}>precision</option>
    <option onCLick={()=>{setOption("tech")}}>tech</option>
    <option onCLick={()=>{setOption("accessability")}}>accessability</option>
    <option onCLick={()=>{setOption("pricing")}}>pricing</option>

  </select>
</label>
  )
}

export default SelectorOptions
