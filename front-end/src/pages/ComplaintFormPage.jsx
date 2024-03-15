import React from 'react'
import Navbar from '../components/Navbar/Nabvar'
import BreadcrumsStart from '../components/BreadCrums/BreadcrumsStart'
import ComplaintForm from '../components/ComplaintForm/ComplaintForm'

const ComplaintFormPage = () => {
  return (
    <>
        <Navbar />
        <BreadcrumsStart />
        <div className='container w-96'>
        < ComplaintForm />
            
        </div>
    </>
  )
}

export default ComplaintFormPage