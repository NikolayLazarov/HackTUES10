import React from 'react'
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
// import {Datepicker} from "react-datetime-picker"
import DatePicker from '../DatePicker/DatePicker'
import SelectorOptions from '../SelectorOptions/SelectorOptions';
import Rating from '../SelectorOptions/Rating';
import {useNavigate} from "react-router-dom"
import { useState } from 'react';


const ComplaintForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        "time": "2023-08-12T20:17:46.384Z",
        "user": "3",
        "complaints":{
            "speed": 5,
            "politeness": 2,
            "precision": 10,
            "tech":10,
            "accessability": 10,
            "pricing":10
        },
        "officeId": 3,
        "institutionId": 1,
        "serviceType": "taxes",   
        "clerk": "Ivana",
        "comment": "Rude",
        "media": []
        });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: value
    //     });
    //   };

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
                <DatePicker />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                Service 
                <input type="text" className="grow" placeholder="..." />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                Clerk 
                <input type="text" className="grow" placeholder="Name, ID, ..." />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                Conplaint type
                    <SelectorOptions options={["speed" , "politeness", "precision", "tech", "accessability", "pricing"]}/>
                </label>
                
                <label className="rating rating-sm flex items-center pl-4 gap-3">
                    Rate <Rating />
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
                <textarea className="textarea textarea-bordered h-24" placeholder="Text" ></textarea>
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