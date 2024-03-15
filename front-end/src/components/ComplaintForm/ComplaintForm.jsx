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
    <div className='flex  flex-col space-y-5'>
        {/* add user Id somewhere */}

        <div className='flex flex-row space-x-10 '>
            <div className='space-y-3'>
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
                <input type="text" className="grow" placeholder="..." />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                Clerk 
                <input type="text" className="grow" placeholder="Name, ID, ..." />
                </label>
            </div>

            <div className='space-y-3'>
                <label className="input input-bordered flex items-center gap-2">
                Your Name 
                <input type="text" className="grow" placeholder="Ivan Ivanov" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text" className="grow" placeholder="ivan.ivanov@gmail.com" />
                </label>

                <label className="form-control">
                <div className="label">
                    <span className="label-text">Your complaint</span>
                </div>
                <textarea className="textarea textarea-bordered h-24" placeholder="Text"></textarea>
                </label>
            </div>

        </div>
        
        <div className='flex justify-center '>
            <button onClick={()=>{ /* send data */ }}  className='btn btn-wide btn-primary'>Submit Revue</button>
        </div>
            
    </div> 
  )
}

export default ComplaintForm