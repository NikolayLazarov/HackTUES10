import React from 'react'
import Navbar from '../components/Navbar/Nabvar'
import BreadcrumsStart from '../components/BreadCrums/BreadcrumsStart'
import Map from '../components/Map/Map'
import {useLocation} from "react-router-dom" 
import { useParams } from 'react-router-dom';

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
    const { id } = useParams(); 

    
    const renderedLocations = listLocations.map(location => 
            <div  key={location.locationId}>
                <a href='/complaint-form' className='btn btn-wide
    '>{location.locationName} </a>
            
            </div>
        )

    return (
    <>
        <Navbar />

        <BreadcrumsStart step={2}/>

        <p>{id}</p>
    
        <main className='mx-10 grid grid-cols-3'>
            <div className='col-span-1'>
                {renderedLocations}
            </div>
            <div className='col-span-2'>
                <Map />
            </div>
        </main>


        
    </>
  )
}

export default ComplaintLocationPage