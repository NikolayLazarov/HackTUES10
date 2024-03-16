import React from 'react'
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
// import {Datepicker} from "react-datetime-picker"
import DatePicker from '../DatePicker/DatePicker'
import Rating from '../SelectorOptions/Rating';
import {useNavigate} from "react-router-dom"
import { useState } from 'react';


const ComplaintForm = () => {
    const navigate = useNavigate();
    let [formData,setFormData] = useState({
        "time": "2023-08-12T20:17:46.384Z",
        "user": "3", 
        "complaints":{
            "speed": 0,
            "politeness": 0,
            "precision": 0,
            "tech":0,
            "accessability": 0,
            "pricing":0
        },
        "officeId": 3, 
        "institutionId": 1, 
        "serviceType": "taxes",   
        "clerk": "Ivana", 
        "comment": "Rude",
        "media": []
        })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = async () => {
    
        try {
          const response = await fetch('http://172.233.40.193:3001/complaints', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
    
          if (!response.ok) {
            throw new Error('Failed to submit form');
          }
    
          // Optionally, handle successful submission here
          console.log('Form submitted successfully');
        } catch (error) {
          console.error('Error submitting form:', error.message);
        }
      };
    



  return (
    <div className='flex  flex-col space-y-5'>
        {/* add user Id somewhere */}

        <div className='flex flex-row space-x-10 '>
            <div className='space-y-3'>
                <label className="input input-bordered flex items-center gap-2">
                Date
                <DatePicker  onChange={(date) => setFormData(({...formData, date}))} />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                Service 
                <input type="text"name='serviceType' className="grow" placeholder="..." onChange={handleChange}/>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                Clerk 
                <input type="text" name='clerk' className="grow" placeholder="Name, ID, ..." onChange={handleChange}/>
                </label>
                <ul className="u select-bordered w-80">
                    speed <input type="range" min="0" max="10" onChange={(event)=>setFormData({...formData,complaints:{...formData.complaints,speed:event.target.value}})} value={formData.complaints.speed} class="range range-primary" />
                    politeness <input type="range" min="0" max="10" onChange={(event)=>setFormData({...formData,complaints:{...formData.complaints,politeness:event.target.value}})} value={formData.complaints.politeness} class="range range-primary" />
                    precision <input type="range" min="0" max="10" onChange={(event)=>setFormData({...formData,complaints:{...formData.complaints,precision:event.target.value}})} value={formData.complaints.precision} class="range range-primary" />
                    tech <input type="range" min="0" max="10" onChange={(event)=>setFormData({...formData,complaints:{...formData.complaints,tech:event.target.value}})} value={formData.complaints.tech} class="range range-primary" />
                    accessability <input type="range" min="0" max="10" onChange={(event)=>setFormData({...formData,complaints:{...formData.complaints,accessability:event.target.value}})} value={formData.complaints.accessability} class="range range-primary" />
                    pricing <input type="range" min="0" max="10" onChange={(event)=>setFormData({...formData,complaints:{...formData.complaints,pricing:event.target.value}})} value={formData.complaints.pricing} class="range range-primary" />
                </ul>
            </div>

            <div className='space-y-3'>
                <label className="input input-bordered flex items-center gap-2">
                Your Name 
                <input type="text" className="grow" placeholder="Ivan Ivanov" onChange={handleChange}/>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text" className="grow" placeholder="ivan.ivanov@gmail.com" onChange={handleChange}/>
                </label>

                <label className="form-control">
                <div className="label">
                    <span className="label-text">Your complaint</span>
                </div>
                <textarea name='comment' className="textarea textarea-bordered h-24" placeholder="Text" onChange={handleChange}></textarea>
                </label>
            </div>

        </div>
        
        <div className='flex justify-center '>
            <button 
            onClick={()=>{ 
                /* send data, return to landing page */  
                handleSubmit().then(()=>{
                navigate("/");
                    
                });
            }}  
            className='btn btn-wide btn-primary'
            >Submit Revue</button>
        </div>
    // </div> 
  )
}

export default ComplaintForm