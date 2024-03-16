import React from 'react'
import Navbar from '../components/Navbar/Nabvar'
import Map from '../components/Map/Map'

const listLocations = [{
    locationName: "location1",
    locationId: 1
    },{
        locationName: "location2",
        locationId: 2
    },{
        locationName: "location3",
        locationId: 3
    }

]

const InstitutionPage = () => {

    const renderedLocations = listLocations.map(location => 
        <li className='flex' key={location.locationId}>
            <a href='/location-info-id' className='btn btn-wide
'>{location.locationName} </a>
        
        </li>
    )
    return (
    <>
        <Navbar />

        <main className='grid grid-cols-3'>
            <section class="col-span-1">
                <article>
                <h2 className='text-3xl font-extrabold'>Name Institution</h2>
                <img src="./images.jpeg" alt="" />
                <div className='w-1/3'>
                    {renderedLocations}

                </div>
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