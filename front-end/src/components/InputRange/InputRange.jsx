import React from 'react'

const InputRange = ({currentValue}) => {
  return (
    <input type="range" min={0} max="100" value={currentValue} className="range range-primary" />
  )
}

export default InputRange