import React from 'react'
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
// import {Datepicker} from "react-datetime-picker"
import DatePicker from '../DatePicker/DatePicker'
import SelectorOptions from '../SelectorOptions/SelectorOptions';
import Rating from '../SelectorOptions/Rating';

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
            <SelectorOptions options={["speed" , "politeness", "precision", "tech", "accessability", "pricing"]}/>
        </label>

        <label className='box box-border '>
        <p>Rate</p>        <Rating />

        </label>

        <label className="input input-bordered flex items-center gap-2">
        Service 
        <input type="text" className="grow" placeholder="Ivan Ivanov" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
        Clerk 
        <input type="text" className="grow" placeholder="Name, ID, ..." />
        </label>

        <label className="form-control">
        <div className="label">
            <span className="label-text">Your complaint</span>
        </div>
        <textarea className="textarea textarea-bordered h-24" placeholder="Text"></textarea>
        </label>    
    </>
  )
}

export default ComplaintForm