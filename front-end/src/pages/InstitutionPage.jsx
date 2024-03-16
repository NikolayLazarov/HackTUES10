import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Nabvar'
import Map from '../components/Map/Map'
import { useState } from 'react'
import InstitutionsAvarageStatistics from '../components/Statistics/InstitutionsAvarageStatistics'
const InstitutionPage = () => {

  const [institutionData,setInstitutionData] = useState(null)
  useEffect(()=>{
      fetch('http://172.233.40.193:3001/complaints/by-institution/1').then(r=>r.json()).then(({data})=>setInstitutionData(data))
  },[])

    return (
    <>
        <Navbar />

        <main className='grid grid-cols-3'>
            <section class="col-span-1">
                <article>
                <h2 className='text-3xl font-extrabold'>Name Institution</h2>
                <img src="./images.jpeg" alt="" />
                <InstitutionsAvarageStatistics graphData={institutionData && institutionData.historicalRating}/>


                </article>
            </section>
            <article class="col-span-2"><Map /> </article>
            
        
            <article>
            
            
            </article>
        </main>

        
    </>
  )
}

export default InstitutionPage