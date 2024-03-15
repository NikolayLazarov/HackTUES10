import React from 'react'
import Navbar from '../components/Navbar/Nabvar'
import BreadcrumsStart from '../components/BreadCrums/BreadcrumsStart'
import Map from '../components/Map/Map'

const listLocations = [{
    locationName: "Geo Milev",
    locationId: 1
    },{
        locationName: "G.M. Dimitrov",
        locationId: 2
    },{
        locationName: "Nadezdha",
        locationId: 3
    }

]


const ComplaintLocationPage = ({institution}) => {
    
    const renderedLocations = listLocations.map(location => 
            <li className='flex' key={location.locationId}>
                <a href='/complaint-form' className='btn btn-wide
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