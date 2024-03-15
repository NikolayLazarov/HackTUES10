import React from 'react'

const InputRange = ({currentValue}) => {
  return (
    <input type="range" min={0} max="10" value={currentValue} className="range range-warning w-40 h-2 " />
  )
}

export default InputRange