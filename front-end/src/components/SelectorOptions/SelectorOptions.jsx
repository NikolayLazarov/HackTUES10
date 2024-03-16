import React from 'react'
import { useState } from 'react';
import Rating from './Rating';


const SelectorOptions = () => {
//   use state for the options
const [pickedOption,setOption] = useState("");

    return (    
  <ul className="u select-bordered">
    <li >speed <Rating/> </li>
    <li >politeness <Rating/> </li>
    <li >precision <Rating/> </li>
    <li >tech <Rating/> </li>
    <li >accessability <Rating/></li>
    <li >pricing <Rating/> </li>

  </ul>
  )
}

export default SelectorOptions
