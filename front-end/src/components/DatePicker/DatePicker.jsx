import React, { useState } from 'react'
import {DateTimePicker} from "react-datetime-picker"


const DatePicker = () => {
  const [value, setValue] = useState(new Date());
    return (
    <div className='p-5'>
        <DateTimePicker onChange={setValue} value={value}/>
    </div>
  )
}

export default DatePicker