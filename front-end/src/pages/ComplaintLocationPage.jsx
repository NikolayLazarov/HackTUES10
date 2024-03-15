import React from 'react'
import Navbar from '../components/Navbar/Nabvar'
import BreadcrumsStart from '../components/BreadCrums/BreadcrumsStart'
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


const ComplaintLocationPage = () => {
    
    const renderedLocations = listLocations.map(location => 
            <li className='flex' key={location.locationId}>
                <a href='/complaint-form' className='btn btn-neutral btn-wide
    '>{location.locationName} </a>
            
            </li>
        )

    return (
    <>
        <Navbar />

        <BreadcrumsStart step={2}/>
    
        <main className='flex flex-row'>
            <div className='w-1/3'>
                {renderedLocations}
            </div>

            <Map width="" height= "" />
        </main>


        
    </>
  )
}

export default ComplaintLocationPage