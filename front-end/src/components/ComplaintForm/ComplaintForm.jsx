import React from 'react'
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
// import {Datepicker} from "react-datetime-picker"
import DatePicker from '../DatePicker/DatePicker'
import SelectorOptions from '../SelectorOptions/SelectorOptions';

const ComplaintForm = () => {
  return (
    <>
        {/* add user Id somewhere */}

        <label className="input input-bordered flex items-center gap-2">
        Name 
        <input type="text" className="grow" placeholder="Ivan Ivanov" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
        Email
        <input type="text" className="grow" placeholder="daisy@site.com" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
        Date
        <DatePicker />
        </label>
        
        <label className="input input-bordered flex items-center gap-2">
        Conplaint type
        <SelectorOptions />
        
        
        </label>
        
        <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
        </label>
        <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <span className="badge badge-info">Optional</span>
        </label>
    
    </>
  )
}

export default ComplaintForm